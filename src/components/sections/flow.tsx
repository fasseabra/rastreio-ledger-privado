import { useState } from "react";
import { Section } from "@/components/layout/shell";
import { CONTRACT_PHASES, FLOW_STEPS } from "@/lib/paper";
import { cn } from "@/lib/utils";

export function Flow() {
  const [step, setStep] = useState(1);
  const active = FLOW_STEPS[step - 1]!;

  return (
    <Section
      id="fluxo"
      kicker="03 · Fluxo e contratos"
      title="Seis processos na operação, quatro no ciclo de vida de uma transação."
      lead="A figura 2 do artigo descreve o caminho do sensor até ao alerta no celular. A figura 4 descreve o chaincode: proposta, endosso, ordenação, commit. Clique para percorrer os dois."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Operação · figura 2
          </p>
          <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {FLOW_STEPS.map((s) => (
              <li key={s.n}>
                <button
                  type="button"
                  onClick={() => setStep(s.n)}
                  className={cn(
                    "flex min-h-11 w-full flex-col items-start rounded-xl px-3 py-3 text-left transition-[background-color,box-shadow,color] duration-150",
                    step === s.n
                      ? "bg-accent text-accent-foreground"
                      : "bg-card text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
                  )}
                >
                  <span className="font-mono text-[0.65rem] opacity-70 tabular">
                    {String(s.n).padStart(2, "0")}
                  </span>
                  <span className="mt-1 text-sm font-medium">{s.title}</span>
                </button>
              </li>
            ))}
          </ol>
          <article className="mt-4 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-xl">{active.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.body}</p>
          </article>
        </div>
        <div className="lg:col-span-5">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Chaincode · figura 4
          </p>
          <ol className="mt-4 space-y-2">
            {CONTRACT_PHASES.map((p, i) => (
              <li
                key={p.n}
                className="relative rounded-xl bg-card p-4 pl-5 shadow-[var(--shadow-border)]"
              >
                {i < CONTRACT_PHASES.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute top-10 left-[1.37rem] h-[calc(100%+0.5rem)] w-px bg-border"
                  />
                ) : null}
                <div className="flex gap-3">
                  <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-[0.65rem] text-accent">
                    {p.n}
                  </span>
                  <div>
                    <h4 className="text-sm font-medium">{p.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
