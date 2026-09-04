import { Section } from "@/components/layout/shell";
import { PAPER } from "@/lib/paper";

const LIMITS = [
  {
    title: "Quatro nós não são uma cadeia nacional",
    body: "O artigo trata quatro como o mínimo prático (cliente, endossante, committer, ordering). O próximo passo que os autores pedem são seis a oito nós, com papéis replicados.",
  },
  {
    title: "Raft não é BFT",
    body: "Funciona enquanto os participantes são de confiança. Não modela um nó malicioso. Energia também ficou de fora — Paris & Long (2015) sugerem quóruns menores e nós testemunha.",
  },
  {
    title: "O legado ainda fala outra língua",
    body: "GS1 EPCIS estrutura o evento, mas ERP e plataformas regulatórias continuam centrais e proprietárias. Falta middleware, não mais chaincode.",
  },
  {
    title: "O consumidor ainda não entrou",
    body: "O QR existe na arquitetura. A adoção depende de interface, confiança na neutralidade da plataforma, e de alguém querer mesmo apontar o celular para uma dúzia de ovos.",
  },
];

export function Closing() {
  return (
    <Section
      id="conclusao"
      kicker="07 · O que ficou por fazer"
      title="O teste de laboratório passou. A cadeia real ainda não."
      lead="Os autores concluem que blockchain privada + IoT + contratos inteligentes é viável, segura e escalável o bastante para rastreio em tempo útil. As reservas são honestas — e são o mapa da investigação seguinte."
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {LIMITS.map((item) => (
          <li key={item.title} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </li>
        ))}
      </ul>

      <blockquote className="mt-8 rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] md:p-8">
        <p className="font-display text-xl leading-snug md:text-2xl">
          «A tecnologia de blockchain privada — combinada com monitorização IoT e
          automação por contratos inteligentes — oferece uma solução viável, segura
          e escalável para a rastreabilidade alimentar.»
        </p>
        <footer className="mt-4 text-sm text-muted-foreground">
          Oh et al., {PAPER.journal} {PAPER.year}
        </footer>
      </blockquote>

      <div className="mt-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          Artigo original:{" "}
          <a
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-accent"
            href={PAPER.doiUrl}
            target="_blank"
            rel="noreferrer"
          >
            {PAPER.title}
          </a>
          . {PAPER.institute}, {PAPER.location}. Financiamento: {PAPER.funding}.
          Licença CC BY 4.0.
        </p>
      </div>
    </Section>
  );
}
