import Link from "next/link"
import { Github } from "lucide-react"

const nav = [
  { href: "#proposta", label: "Proposta" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#publicos", label: "Para quem" },
  { href: "#arquitetura", label: "Arquitetura" },
  { href: "#ia-responsavel", label: "IA responsável" },
  { href: "#roadmap", label: "Roadmap" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="neurocare-ai-lab — início"
        >
          <span
            aria-hidden="true"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0-2 7.5V17a3 3 0 0 0 6 0V7a4 4 0 0 0 0-4Z" />
              <path d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.5V17a3 3 0 0 1-6 0" />
            </svg>
          </span>
          <span className="font-mono text-sm tracking-tight text-foreground">
            neurocare<span className="text-muted-foreground">-ai-lab</span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ueidesantos/neurocare-ai-lab"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-card px-3 text-sm text-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Repositório</span>
          </a>
        </div>
      </div>
    </header>
  )
}
