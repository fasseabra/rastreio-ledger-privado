import { Database, EyeOff, Link2Off, ShieldOff } from "lucide-react";
import { Section } from "@/components/layout/shell";
import { PROBLEM } from "@/lib/paper";
import { formatNumber as fmt } from "@/lib/utils";

const GAPS = [
  {
    icon: Database,
    title: "Bases centrais e cadernos manuais",
    body: "Os sistemas clássicos fragmentam-se entre fabricantes, transportadores e varejo. Um único administrador pode reescrever o passado.",
  },
  {
    icon: Link2Off,
    title: "Sem interoperabilidade",
    body: "Cada interveniente fala um formato. Sem GS1 EPCIS, o evento «saiu do caminhão» não é o mesmo objeto do outro lado da fronteira.",
  },
  {
    icon: EyeOff,
    title: "Públicas, mas pouco práticas",
    body: "Bitcoin e Ethereum cobram taxas, expõem dados e usam prova de trabalho. Uma cadeia do frio precisa de privacidade e de milissegundos, não de blocos a 10 minutos.",
  },
  {
    icon: ShieldOff,
    title: "Resposta lenta a surtos",
    body: "Quando um lote contamina, a pergunta é «onde esteve?». Sem um ledger partilhado, a recolha demora dias — e a marca paga a fatura.",
  },
];

export function Problem() {
  return (
    <Section
      id="problema"
      kicker="01 · O problema"
      title="A comida atravessa demasiadas mãos para caber numa base só."
      lead="A OMS estima 600 milhões de casos de doença de origem alimentar e cerca de 420 mil mortes por ano. O artigo parte daí: a cadeia moderna é longa, opaca, e os sistemas atuais não aguentam a regulação que se aproxima."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            Carga humana, por ano
          </p>
          <p className="mt-4 font-display text-5xl tracking-tight tabular">
            {fmt(PROBLEM.cases)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">casos de doença alimentar</p>
          <p className="mt-6 font-display text-4xl tracking-tight tabular">
            {fmt(PROBLEM.deaths)}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">mortes associadas</p>
          <p className="mt-6 text-xs text-subtle">{PROBLEM.source}</p>
        </article>
        <article className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            O que o artigo recusa
          </p>
          <p className="mt-4 font-display text-2xl tracking-tight">
            Não é mais um Ethereum para alface.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A proposta é uma rede <em>permissionada</em>: só processadores,
            distribuidores, varejistas e o operador entram. Raft assume nós
            honestos e otimiza latência. Privacidade, custo e débito — os três
            pontos em que as públicas falham para segurança alimentar em tempo real.
          </p>
        </article>
      </div>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {GAPS.map((gap) => (
          <li
            key={gap.title}
            className="flex gap-4 rounded-xl bg-card p-5 shadow-[var(--shadow-border)]"
          >
            <gap.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
            <div>
              <h3 className="text-sm font-medium">{gap.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{gap.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
