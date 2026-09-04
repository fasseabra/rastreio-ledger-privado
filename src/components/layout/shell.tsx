import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#problema", label: "Problema" },
  { href: "#arquitetura", label: "Arquitetura" },
  { href: "#fluxo", label: "Fluxo" },
  { href: "#consenso", label: "Consenso" },
  { href: "#resultados", label: "Números" },
  { href: "#laboratorio", label: "Laboratório" },
];

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <a href="#conteudo" className="skip-link">
        Saltar para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <LogoMark />
            <span className="font-display text-lg tracking-tight">Rastro</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Secções">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="#laboratorio">Abrir o laboratório</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "border-t border-border bg-background lg:hidden",
            open ? "block" : "hidden",
          )}
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-2 py-2" aria-label="Secções móveis">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="conteudo">{children}</main>
      <Footer />
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-6 text-accent", className)}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        fill="currentColor"
        d="M8 17.5V7h4.4c1.85 0 3.05 1.05 3.05 2.65 0 1.12-.7 2-1.85 2.35L15.95 17.5h-1.8l-1.85-3.3H9.6v3.3H8zm1.6-4.6h2.7c1.05 0 1.7-.55 1.7-1.4s-.65-1.4-1.7-1.4H9.6v2.8z"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-6">
        <div>
          <p className="font-display text-lg">Rastro</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Leitura guiada do artigo Oh et al., Foods 2025, 14, 1405. Os números
            reproduzem as tabelas originais; o laboratório é um modelo didático,
            não a rede Bowledger do KFRI.
          </p>
        </div>
        <p className="text-xs text-subtle">
          CC BY 4.0 ·{" "}
          <a
            className="underline decoration-border underline-offset-4 hover:text-foreground"
            href="https://doi.org/10.3390/foods14081405"
            target="_blank"
            rel="noreferrer"
          >
            doi.org/10.3390/foods14081405
          </a>
        </p>
      </div>
    </footer>
  );
}

export function Section({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
          {kicker}
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight md:text-4xl">
          {title}
        </h2>
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {lead}
          </p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
