import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

export function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="border-b border-border bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/60">
              08 — Convite
            </p>
            <h2
              id="cta-title"
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl"
            >
              Construir bem,{" "}
              <span className="italic text-background/70">
                em um domínio onde construir mal causa dano.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/70 text-pretty">
              Se você é profissional de saúde e quer revisar a abordagem, recrutador
              avaliando trabalho sério em IA aplicada, ou pessoa técnica interessada
              em discutir arquitetura — a porta está aberta.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-end">
            <a
              href="https://github.com/ueidesantos/neurocare-ai-lab"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 w-full items-center justify-between gap-3 rounded-md bg-background px-5 text-sm font-medium text-foreground transition-opacity hover:opacity-90 lg:w-auto"
            >
              <span className="flex items-center gap-2.5">
                <Github className="h-4 w-4" aria-hidden="true" />
                Ver repositório no GitHub
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-12 w-full items-center justify-between gap-3 rounded-md border border-background/20 px-5 text-sm font-medium text-background transition-colors hover:bg-background/10 lg:w-auto"
            >
              <span className="flex items-center gap-2.5">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                Conversar no LinkedIn
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:contato@neurocare-ai-lab.dev"
              className="group inline-flex h-12 w-full items-center justify-between gap-3 rounded-md border border-background/20 px-5 text-sm font-medium text-background transition-colors hover:bg-background/10 lg:w-auto"
            >
              <span className="flex items-center gap-2.5">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enviar uma mensagem
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
