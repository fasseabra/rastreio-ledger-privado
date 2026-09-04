import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HEADLINE_STATS, PAPER } from "@/lib/paper";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
            {PAPER.journal} {PAPER.year} · Vol. {PAPER.volume} · {PAPER.article}
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.12] tracking-tight md:text-6xl">
            O rasto de um ovo, escrito em ledger privado.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Quatro investigadores do {PAPER.institute} ligaram sensores IoT,
            o padrão GS1 EPCIS e Hyperledger Fabric com consenso Raft. Em 50
            dias, 114.925 transações — e nenhuma adulteração passou.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a href="#problema">
                Ler o estudo
                <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#laboratorio">Simular a cadeia</a>
            </Button>
          </div>
          <p className="mt-8 max-w-xl text-xs leading-relaxed text-subtle">
            Oh, S. E.; Kim, J.-H.; Kim, J.-Y.; Ahn, J.-H. {PAPER.title}{" "}
            <em>{PAPER.journal}</em> {PAPER.year}, {PAPER.volume}, {PAPER.article}.{" "}
            Publicado {PAPER.published}.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:col-span-5">
          {HEADLINE_STATS.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]"
            >
              <p className="font-display text-3xl tracking-tight tabular md:text-4xl">
                {stat.value}
                <span className="ml-1 text-sm text-muted-foreground">{stat.unit}</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
