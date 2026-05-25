import { ArrowUpRight, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-[0.35]" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="flex flex-col items-start gap-10 md:gap-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono uppercase tracking-wider">
              Laboratório educacional · Pós-graduação em IA
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Cognitive Report Generator for Consultation
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl leading-[1.05] tracking-tight text-balance text-foreground md:text-7xl lg:text-[5.5rem]"
            >
              IA generativa responsável,
              <br />
              <span className="italic text-muted-foreground">
                a serviço da conversa clínica.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              O <strong className="font-medium text-foreground">neurocare-ai-lab</strong> é
              um laboratório técnico de IA generativa aplicada à saúde cognitiva. Não
              diagnostica, não prescreve, não substitui o profissional de saúde — organiza
              relatos de familiares e cuidadores em um relatório estruturado para apoiar a
              consulta médica.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#proposta"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Conhecer a proposta
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#ia-responsavel"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Princípios de IA responsável
            </a>
          </div>

          <dl className="mt-6 grid w-full grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
            <Stat
              label="Status"
              value="MVP educacional"
              hint="não é produto médico"
            />
            <Stat
              label="Domínio"
              value="Saúde cognitiva"
              hint="apoio à consulta"
            />
            <Stat
              label="Stack"
              value=".NET 10 · Clean Architecture"
              hint="DDD, RAG, guardrails"
            />
            <Stat
              label="Posicionamento"
              value="Não diagnóstico"
              hint="human-in-the-loop"
            />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint: string
}) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-base font-medium text-foreground">{value}</dd>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  )
}
