import { useEffect, useMemo, useReducer, useState } from "react";
import {
  Check,
  Fingerprint,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Thermometer,
  Truck,
  WifiOff,
} from "lucide-react";
import { Section } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { hashGrid, shortHash } from "@/lib/hash";
import {
  commitRecord,
  GENESIS,
  isIntact,
  makePayload,
  ORIGIN,
  tamperTemp,
  type RecordRow,
} from "@/lib/lab-model";
import { CONTRACT_PHASES } from "@/lib/paper";
import { cn, formatDecimal } from "@/lib/utils";

type Phase = 0 | 1 | 2 | 3 | 4;

type LabState = {
  temp: number;
  humidity: number;
  lon: number;
  lat: number;
  offline: boolean;
  buffer: RecordRow[];
  chain: RecordRow[];
  legacy: RecordRow[];
  seq: number;
  phase: Phase;
  selected: string | null;
};

type Action =
  | { type: "tick" }
  | { type: "toggle-net" }
  | { type: "phase"; phase: Phase }
  | { type: "buffer"; row: RecordRow }
  | { type: "commit"; row: RecordRow }
  | { type: "flush" }
  | { type: "tamper"; id: string }
  | { type: "select"; id: string | null }
  | { type: "reset" };

const initial: LabState = {
  temp: 21.84,
  humidity: 22.3,
  lon: ORIGIN.x,
  lat: ORIGIN.y,
  offline: false,
  buffer: [],
  chain: [],
  legacy: [],
  seq: 0,
  phase: 0,
  selected: null,
};

function reducer(state: LabState, action: Action): LabState {
  switch (action.type) {
    case "tick": {
      const temp = clamp(state.temp + (hashNoise(state.seq + state.temp) - 0.5) * 0.35, 18, 26);
      const humidity = clamp(
        state.humidity + (hashNoise(state.humidity * 10) - 0.5) * 0.5,
        16,
        40,
      );
      return {
        ...state,
        temp,
        humidity,
        lon: state.lon + 0.0008,
        lat: state.lat + 0.00015,
      };
    }
    case "toggle-net":
      return { ...state, offline: !state.offline };
    case "phase":
      return { ...state, phase: action.phase };
    case "buffer":
      return {
        ...state,
        seq: action.row.seq,
        buffer: [action.row, ...state.buffer],
      };
    case "commit":
      return {
        ...state,
        seq: action.row.seq,
        chain: [action.row, ...state.chain],
        legacy: [action.row, ...state.legacy],
        selected: action.row.id,
        phase: 4,
      };
    case "flush": {
      if (state.buffer.length === 0) return { ...state, offline: false };
      return {
        ...state,
        offline: false,
        chain: [...state.buffer, ...state.chain],
        legacy: [...state.buffer, ...state.legacy],
        selected: state.buffer[0]?.id ?? state.selected,
        buffer: [],
        phase: 4,
      };
    }
    case "tamper": {
      const legacy = state.legacy.map((r) => (r.id === action.id ? tamperTemp(r) : r));
      return { ...state, legacy, selected: action.id };
    }
    case "select":
      return { ...state, selected: action.id };
    case "reset":
      return { ...initial };
    default:
      return state;
  }
}

export function Lab() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const id = window.setInterval(() => dispatch({ type: "tick" }), 1600);
    return () => window.clearInterval(id);
  }, []);

  const selectedChain = state.chain.find((r) => r.id === state.selected) ?? null;
  const selectedLegacy = state.legacy.find((r) => r.id === state.selected) ?? null;
  const mismatches = useMemo(() => {
    const byId = new Map(state.legacy.map((r) => [r.id, r]));
    return state.chain.filter((c) => {
      const l = byId.get(c.id);
      return l ? !isIntact(c, l) : true;
    }).length;
  }, [state.chain, state.legacy]);

  const busy = state.phase > 0 && state.phase < 4;

  function nextRow(event: string, buffered: boolean): RecordRow {
    const prev =
      (buffered ? state.buffer[0]?.hash : null) ?? state.chain[0]?.hash ?? GENESIS;
    const now = new Date();
    const payload = makePayload({
      now,
      temp: state.temp,
      humidity: state.humidity,
      lon: state.lon,
      lat: state.lat,
      event,
    });
    return commitRecord(payload, state.seq + 1, prev, now.getTime(), buffered);
  }

  async function transmit() {
    if (busy) return;
    if (state.offline) {
      dispatch({ type: "buffer", row: nextRow("07", true) });
      return;
    }
    const row = nextRow("05", false);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      dispatch({ type: "commit", row });
      return;
    }
    for (const p of [1, 2, 3, 4] as const) {
      dispatch({ type: "phase", phase: p });
      await wait(p === 4 ? 260 : 380);
    }
    dispatch({ type: "commit", row });
    window.setTimeout(() => dispatch({ type: "phase", phase: 0 }), 800);
  }

  function toggleNet() {
    if (state.offline) {
      dispatch({ type: "flush" });
      return;
    }
    dispatch({ type: "toggle-net" });
  }

  return (
    <Section
      id="laboratorio"
      kicker="06 · Laboratório"
      title="Envie um lote, tente adulterar a temperatura, veja o checksum recusar."
      lead="Modelo didático dos onze campos, do buffer da CU e da verificação por hash. Não é a rede Bowledger — replica o contrato do artigo o bastante para se sentir o clique da imutabilidade."
    >
      {!ready ? (
        <div className="h-96 rounded-2xl bg-card shadow-[var(--shadow-border)]" />
      ) : (
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Truck className="size-4 text-accent" aria-hidden />
                  <h3 className="text-sm font-medium">Caminhão refrigerado</h3>
                </div>
                <Badge variant={state.offline ? "danger" : "ok"}>
                  {state.offline ? "LTE em falha" : "CU em linha"}
                </Badge>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Readout
                  icon={Thermometer}
                  label="TAG_TP"
                  value={`${formatDecimal(state.temp, 3)} °C`}
                />
                <Readout
                  icon={RadioTower}
                  label="TAG_HM"
                  value={`${formatDecimal(state.humidity, 3)} %`}
                />
                <Readout label="COORD_X" value={state.lon.toFixed(6)} mono />
                <Readout label="COORD_Y" value={state.lat.toFixed(6)} mono />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button onClick={() => void transmit()} disabled={busy}>
                  {state.offline ? "Guardar na CU" : "Transmitir lote"}
                </Button>
                <Button variant="outline" onClick={toggleNet}>
                  {state.offline ? (
                    <>
                      <RadioTower /> Restaurar LTE
                    </>
                  ) : (
                    <>
                      <WifiOff /> Simular falha
                    </>
                  )}
                </Button>
                <Button variant="ghost" onClick={() => dispatch({ type: "reset" })}>
                  Limpar ledger
                </Button>
              </div>
              {state.buffer.length > 0 ? (
                <p className="mt-3 text-xs text-warn">
                  {state.buffer.length} pacote(s) em memória local da CU — o artigo
                  descreve exatamente este buffer. Ao restaurar o LTE, os dados
                  sobem para o ledger.
                </p>
              ) : null}
            </article>

            <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]">
              <h3 className="text-sm font-medium">Ciclo do chaincode</h3>
              <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {CONTRACT_PHASES.map((p) => (
                  <li
                    key={p.n}
                    className={cn(
                      "rounded-lg px-2 py-3 text-center text-xs transition-colors duration-200",
                      state.phase >= p.n
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    <span className="font-mono">{p.n}</span>
                    <div className="mt-1">{p.title}</div>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <div className="space-y-4 lg:col-span-7">
            <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-medium">
                  Ledger · {state.chain.length}{" "}
                  {state.chain.length === 1 ? "bloco" : "blocos"}
                </h3>
                {mismatches === 0 ? (
                  <Badge variant="ok">
                    <ShieldCheck className="mr-1 size-3" />
                    Íntegro
                  </Badge>
                ) : (
                  <Badge variant="danger">
                    <ShieldAlert className="mr-1 size-3" />
                    {mismatches} divergência(s)
                  </Badge>
                )}
              </div>
              <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto">
                {state.chain.length === 0 ? (
                  <li className="rounded-lg bg-muted px-3 py-6 text-center text-sm text-muted-foreground">
                    Ainda não há blocos. Transmita o primeiro lote.
                  </li>
                ) : (
                  state.chain.map((row) => {
                    const legacy = state.legacy.find((l) => l.id === row.id);
                    const ok = legacy ? isIntact(row, legacy) : false;
                    return (
                      <li key={row.id}>
                        <button
                          type="button"
                          onClick={() => dispatch({ type: "select", id: row.id })}
                          className={cn(
                            "flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors duration-150",
                            state.selected === row.id ? "bg-muted" : "hover:bg-muted/60",
                          )}
                        >
                          <span className="font-mono text-xs text-accent tabular">
                            #{row.seq}
                          </span>
                          <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
                            {shortHash(row.hash, 12)}
                          </span>
                          <span className="font-mono text-xs tabular">
                            {formatDecimal(row.payload.TAG_TP, 3)} °C
                          </span>
                          {ok ? (
                            <Check className="size-4 text-ok" aria-label="íntegro" />
                          ) : (
                            <ShieldAlert
                              className="size-4 text-danger"
                              aria-label="adulterado"
                            />
                          )}
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </article>

            {selectedChain && selectedLegacy ? (
              <Detail
                chain={selectedChain}
                legacy={selectedLegacy}
                onTamper={() => dispatch({ type: "tamper", id: selectedChain.id })}
              />
            ) : null}
          </div>
        </div>
      )}
    </Section>
  );
}

function Detail({
  chain,
  legacy,
  onTamper,
}: {
  chain: RecordRow;
  legacy: RecordRow;
  onTamper: () => void;
}) {
  const ok = isIntact(chain, legacy);
  const grid = hashGrid(chain.hash);
  const fields: [string, string, string][] = [
    ["TAG_SEQ", chain.payload.TAG_SEQ, legacy.payload.TAG_SEQ],
    ["TRACE_DATE", chain.payload.TRACE_DATE, legacy.payload.TRACE_DATE],
    ["EVENT_CODE", chain.payload.EVENT_CODE, legacy.payload.EVENT_CODE],
    ["TAG_TP", String(chain.payload.TAG_TP), String(legacy.payload.TAG_TP)],
    ["TAG_HM", String(chain.payload.TAG_HM), String(legacy.payload.TAG_HM)],
    ["QL_VAL", String(chain.payload.QL_VAL), String(legacy.payload.QL_VAL)],
    ["COORD_X", String(chain.payload.COORD_X), String(legacy.payload.COORD_X)],
    ["COORD_Y", String(chain.payload.COORD_Y), String(legacy.payload.COORD_Y)],
  ];

  return (
    <article className="grid gap-4 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:grid-cols-[minmax(0,1fr)_9rem]">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-medium">Bloco #{chain.seq}</h3>
          <Badge variant={ok ? "ok" : "danger"}>{ok ? "checksum ok" : "legado ≠ ledger"}</Badge>
        </div>
        <p className="mt-2 font-mono text-[0.7rem] break-all text-subtle">
          hash {chain.hash.slice(0, 32)}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          {fields.map(([k, a, b]) => (
            <div key={k} className="contents">
              <dt className="font-mono text-subtle">{k}</dt>
              <dd className={cn("font-mono tabular", a !== b && "text-danger")}>
                {a !== b ? (
                  <>
                    <span className="text-muted-foreground line-through">{a}</span> {b}
                  </>
                ) : (
                  a
                )}
              </dd>
            </div>
          ))}
        </dl>
        <Button variant="outline" size="sm" className="mt-4" onClick={onTamper} disabled={!ok}>
          Adulterar temperatura no legado
        </Button>
        {!ok ? (
          <p className="mt-3 text-xs leading-relaxed text-danger">
            O Smart Food System comparou o hash do bloco com o JSON legado. A
            temperatura mudou fora da cadeia — o módulo de forja do artigo faria
            exatamente este alerta.
          </p>
        ) : null}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Fingerprint className="mb-2 size-4 text-muted-foreground" aria-hidden />
        <div
          className="grid aspect-square w-full max-w-36 rounded-md bg-foreground p-1.5"
          style={{ gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))` }}
          aria-label="Impressão visual do hash do bloco"
        >
          {grid.flatMap((row, y) =>
            row.map((on, x) => (
              <span key={`${y}-${x}`} className={on ? "bg-background" : "bg-transparent"} />
            )),
          )}
        </div>
        <p className="mt-2 text-center text-[0.65rem] text-subtle">QR didático do lote</p>
      </div>
    </article>
  );
}

function Readout({
  icon: Icon,
  label,
  value,
  mono,
}: {
  icon?: typeof Thermometer;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="rounded-lg bg-muted px-3 py-3">
      <p className="flex items-center gap-1.5 font-mono text-[0.65rem] text-subtle">
        {Icon ? <Icon className="size-3" aria-hidden /> : null}
        {label}
      </p>
      <p className={cn("mt-1 text-sm", (mono || Icon) && "font-mono tabular")}>{value}</p>
    </div>
  );
}

function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}

function hashNoise(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
