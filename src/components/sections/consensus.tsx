import { useMemo, useState } from "react";
import { Section } from "@/components/layout/shell";
import { LATENCY, NODES } from "@/lib/paper";
import { cn, formatDecimal } from "@/lib/utils";

export function Consensus() {
  const [size, setSize] = useState<2 | 3 | 4>(4);
  const [down, setDown] = useState<number | null>(null);

  const row = LATENCY.find((l) => l.nodes === size)!;
  const majority = Math.floor(size / 2) + 1;
  const online = useMemo(() => {
    const ids = NODES.slice(0, size).map((n) => n.id);
    return ids.filter((id) => id !== down).length;
  }, [size, down]);
  const alive = online >= majority;

  return (
    <Section
      id="consenso"
      kicker="04 · Raft"
      title="Um líder, seguidores honestos, e a maioria a decidir."
      lead="Raft é Crash Fault Tolerant: assume que ninguém mente, só que alguém pode cair. O Node 4 lidera. Dois nós servem de linha de base experimental — em produção, a falha de um mata a rede. Quatro nós foi o teto deste estudo."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs text-muted-foreground">Tamanho da rede</p>
            {([2, 3, 4] as const).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setSize(n);
                  setDown((d) => (d && d > n ? null : d));
                }}
                className={cn(
                  "min-h-11 rounded-full px-4 text-sm transition-colors duration-150",
                  size === n
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-muted-foreground shadow-[var(--shadow-border)] hover:text-foreground",
                )}
              >
                {n} nós
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {NODES.slice(0, size).map((node) => {
              const isDown = down === node.id;
              const isLeader = node.id === 4 || (size < 4 && node.id === size);
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setDown(isDown ? null : node.id)}
                  className={cn(
                    "relative rounded-2xl p-4 text-left transition-[opacity,box-shadow] duration-150",
                    isDown ? "opacity-40" : "opacity-100",
                    "bg-card shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  <span
                    className={cn(
                      "mb-3 block size-2.5 rounded-full",
                      isDown ? "bg-danger" : isLeader ? "bg-accent" : "bg-ok",
                    )}
                    style={
                      !isDown && isLeader
                        ? { animation: "heartbeat 1.6s ease-in-out infinite" }
                        : undefined
                    }
                  />
                  <p className="font-mono text-[0.65rem] text-subtle">Nó {node.id}</p>
                  <p className="mt-1 text-sm font-medium">{node.label}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {isDown ? "desligado" : isLeader ? "líder" : "seguidor"}
                  </p>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-subtle">
            Clique num nó para o desligar. Maioria necessária: {majority} de {size}.
          </p>
        </div>

        <aside className="space-y-3 lg:col-span-5">
          <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]">
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Estado da rede
            </p>
            <p
              className={cn(
                "mt-3 font-display text-2xl",
                alive ? "text-ok" : "text-danger",
              )}
            >
              {alive ? "Consenso possível" : "Rede parada"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {alive
                ? `${online} nós ativos. O líder continua a ordenar blocos; os seguidores replicam o ledger.`
                : "Sem maioria Raft (N/2 + 1) a rede não finaliza transações. É o caso clássico de dois nós com um em falha."}
            </p>
          </article>
          <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)]">
            <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Tabela 4 · {size} nós
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <Metric
                k="Latência média"
                v={`${formatDecimal(row.avgMs)} ± ${formatDecimal(row.sdMs)} ms`}
              />
              <Metric
                k="Latência máxima"
                v={`${formatDecimal(row.maxMs)} ± ${formatDecimal(row.maxSd)} ms`}
              />
              <Metric
                k="Finalização de bloco"
                v={`${formatDecimal(row.blockS, 3)} ± ${formatDecimal(row.blockSd, 3)} s`}
              />
            </dl>
          </article>
        </aside>
      </div>
    </Section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-border pb-2 last:border-0 last:pb-0">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-mono text-xs tabular">{v}</dd>
    </div>
  );
}
