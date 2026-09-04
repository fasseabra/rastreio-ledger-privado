import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ClientOnly } from "@/components/client-only";
import { Section } from "@/components/layout/shell";
import {
  buildHeatmap,
  INTEGRITY,
  INTEGRITY_TOTAL,
  LATENCY,
  P_VALUES,
  THROUGHPUT,
} from "@/lib/paper";
import { formatNumber } from "@/lib/utils";

const tpsData = THROUGHPUT.map((t) => ({
  name: formatNumber(t.txs),
  media: t.avg,
  pico: t.max,
}));

const latData = LATENCY.map((l) => ({
  name: `${l.nodes} nós`,
  latencia: l.avgMs,
  bloco: l.blockS,
}));

const heat = buildHeatmap();
const heatMin = Math.min(...heat.flat());
const heatMax = Math.max(...heat.flat());

const tooltipStyle = {
  background: "var(--color-popover)",
  border: "1px solid var(--color-border)",
  borderRadius: 8,
  fontSize: 12,
};

export function Results() {
  return (
    <Section
      id="resultados"
      kicker="05 · Resultados"
      title="A vazão desce um pouco com a carga. A integridade, nunca."
      lead="Hyperledger Caliper correu dez vezes em três, depois quatro nós, num centro de distribuição do KFRI, com o caminhão refrigerado ligado. As diferenças de TPS são estatisticamente significativas — e irrisórias na prática."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6">
          <h3 className="text-sm font-medium">Tabela 2 · Transações por segundo</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Barras: média. Linha: máximo.
          </p>
          <div className="mt-4 h-64">
            <ClientOnly fallback={<div className="h-full rounded-lg bg-muted" />}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={tpsData} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
                  <CartesianGrid stroke="var(--color-border)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={{ stroke: "var(--color-border)" }}
                    tickLine={false}
                  />
                  <YAxis
                    width={44}
                    domain={[0, 260]}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar
                    dataKey="media"
                    fill="var(--color-chart-1)"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={48}
                  />
                  <Line
                    type="monotone"
                    dataKey="pico"
                    stroke="var(--color-chart-2)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--color-chart-2)" }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>
          <ul className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
            {P_VALUES.map((p) => (
              <li key={p.pair} className="font-mono">
                {p.pair} · p = {p.p} {p.sig}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6">
          <h3 className="text-sm font-medium">Tabela 4 · Latência e finalização</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Eixo esquerdo: ms. Direito: segundos até o bloco fechar.
          </p>
          <div className="mt-4 h-64">
            <ClientOnly fallback={<div className="h-full rounded-lg bg-muted" />}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={latData} margin={{ top: 8, right: 8, left: 4, bottom: 0 }}>
                  <CartesianGrid stroke="var(--color-border)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={{ stroke: "var(--color-border)" }}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="ms"
                    width={40}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    yAxisId="s"
                    width={36}
                    orientation="right"
                    domain={[2.8, 3.3]}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Bar
                    yAxisId="ms"
                    dataKey="latencia"
                    fill="var(--color-chart-3)"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={48}
                  />
                  <Line
                    yAxisId="s"
                    type="monotone"
                    dataKey="bloco"
                    stroke="var(--color-chart-2)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--color-chart-2)" }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>
        </article>
      </div>

      <article className="mt-6 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium">Tabela 3 · Integridade em 50 dias</h3>
            <p className="mt-1 max-w-xl text-xs text-muted-foreground">
              {formatNumber(INTEGRITY_TOTAL)} transações, dez ciclos de cinco dias, zero
              discrepâncias. A heatmap (figura 7) mostra o declínio esperado: as
              amostras foram sendo retiradas. Os picos iniciais são buffer da CU
              quando o LTE falhou — não falhas do ledger.
            </p>
          </div>
          <p className="font-display text-3xl tabular">
            0
            <span className="ml-2 text-sm text-muted-foreground">discrepâncias</span>
          </p>
        </div>
        <div className="mt-5 overflow-x-auto">
          <div
            className="grid min-w-xl gap-px"
            style={{ gridTemplateColumns: `repeat(${INTEGRITY.length}, minmax(0, 1fr))` }}
            role="img"
            aria-label="Mapa de calor de transações por intervalo de cinco dias"
          >
            {heat.map((row, ri) =>
              row.map((val, ci) => {
                const t = (val - heatMin) / (heatMax - heatMin || 1);
                return (
                  <div
                    key={`${ri}-${ci}`}
                    title={`${INTEGRITY[ci]?.label}: ~${val} tx/h`}
                    className="h-2.5 rounded-sm"
                    style={{
                      backgroundColor: `color-mix(in oklab, var(--color-accent) ${Math.round(t * 100)}%, var(--color-muted))`,
                    }}
                  />
                );
              }),
            )}
          </div>
          <div
            className="mt-2 grid min-w-xl text-center font-mono text-xs text-subtle"
            style={{ gridTemplateColumns: `repeat(${INTEGRITY.length}, minmax(0, 1fr))` }}
          >
            {INTEGRITY.map((i) => (
              <span key={i.label}>{i.label.replace("Dia ", "")}</span>
            ))}
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-lg text-left text-sm">
            <thead className="border-b border-border text-xs text-muted-foreground uppercase">
              <tr>
                <th className="py-2 pr-4 font-medium">Intervalo</th>
                <th className="py-2 pr-4 font-medium">Transações</th>
                <th className="py-2 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {INTEGRITY.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="py-2 pr-4">{row.label}</td>
                  <td className="py-2 pr-4 font-mono tabular">{formatNumber(row.txs)}</td>
                  <td className="py-2 text-ok">Verificado</td>
                </tr>
              ))}
              <tr className="font-medium">
                <td className="py-2 pr-4">Total</td>
                <td className="py-2 pr-4 font-mono tabular">
                  {formatNumber(INTEGRITY_TOTAL)}
                </td>
                <td className="py-2 text-ok">Verificado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </Section>
  );
}
