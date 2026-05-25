import { SectionLabel } from "./section-label"

const phases = [
  {
    n: "Fase 1",
    status: "Concluído",
    title: "Discovery e protótipo de relatório",
    body:
      "Definição de personas, jornada, anti-escopo e formato do relatório clínico em Markdown.",
  },
  {
    n: "Fase 2",
    status: "Em andamento",
    title: "Solution .NET 10 e camadas de domínio",
    body:
      "Estruturação da Clean Architecture, modelagem de domínio com DDD e contratos entre camadas.",
  },
  {
    n: "Fase 3",
    status: "Próximo",
    title: "Motor de triagem determinístico",
    body:
      "Implementação das regras de classificação de prioridade (Níveis 0–3) com cobertura de testes.",
  },
  {
    n: "Fase 4",
    status: "Planejado",
    title: "Integração de IA com guardrails",
    body:
      "Structured output, auditoria de prompts, RAG curado e geração de PDF do relatório clínico.",
  },
  {
    n: "Fase 5",
    status: "Planejado",
    title: "Validação clínica simulada",
    body:
      "Cenários sintéticos avaliados por especialistas convidados; ajustes de linguagem e guardrails.",
  },
]

const statusStyles: Record<string, string> = {
  Concluído: "bg-foreground text-background",
  "Em andamento": "bg-accent text-accent-foreground",
  Próximo: "bg-card text-foreground border border-border",
  Planejado: "bg-muted text-muted-foreground border border-border",
}

export function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>07 — Roadmap</SectionLabel>
            <h2
              id="roadmap-title"
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
            >
              Caminho de pesquisa, em fases honestas.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              Não é um cronograma de produto — é uma trilha de aprendizagem em
              público. Cada fase termina com um artefato auditável e um aprendizado
              registrado.
            </p>
          </div>

          <ol className="relative lg:col-span-8">
            <span
              aria-hidden="true"
              className="absolute left-3 top-2 hidden h-[calc(100%-1rem)] w-px bg-border md:block"
            />
            {phases.map((phase) => (
              <li
                key={phase.n}
                className="relative grid grid-cols-1 gap-3 border-b border-border py-6 last:border-0 md:grid-cols-12 md:gap-6 md:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 hidden h-6 w-6 items-center justify-center rounded-full border border-border bg-background md:flex"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </span>

                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {phase.n}
                  </p>
                  <span
                    className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                      statusStyles[phase.status]
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-base font-medium text-foreground">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
