import { AlertTriangle } from "lucide-react"

const items = [
  { label: "Não diagnostica Alzheimer ou demência" },
  { label: "Não calcula risco individual de doença" },
  { label: "Não recomenda tratamento" },
  { label: "Não prescreve exames" },
  { label: "Não substitui avaliação médica" },
]

export function NotADiagnosticBanner() {
  return (
    <section
      aria-labelledby="disclaimer-title"
      className="border-b border-border bg-muted/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          <div className="flex items-start gap-3 md:w-72 md:shrink-0">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-card"
            >
              <AlertTriangle className="h-4 w-4 text-foreground" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Posicionamento clínico
              </p>
              <h2
                id="disclaimer-title"
                className="mt-1 text-lg font-medium text-foreground"
              >
                O que este projeto não é.
              </h2>
            </div>
          </div>

          <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-start gap-2 text-sm leading-relaxed text-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
