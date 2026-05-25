import { SectionLabel } from "./section-label"

const layers = [
  {
    name: "API",
    role: "Porta de entrada",
    desc: "Endpoints HTTP, validação de contrato, autenticação e idempotência.",
    items: ["ASP.NET Core", "Minimal APIs", "OpenAPI", "Auth"],
  },
  {
    name: "Application",
    role: "Casos de uso",
    desc: "Orquestração dos fluxos, regras determinísticas de triagem e composição com a camada de IA.",
    items: ["Use cases", "Triagem 0–3", "Guardrails", "Auditoria"],
  },
  {
    name: "Domain",
    role: "Coração do produto",
    desc: "Entidades, agregados e regras invariantes. Independente de framework, banco e LLM.",
    items: ["DDD", "Sinais de alerta", "Fatores confundidores", "Relatório"],
  },
  {
    name: "Infrastructure",
    role: "Bordas plugáveis",
    desc: "Persistência, integrações, IA generativa, RAG, telemetria e geração de PDF.",
    items: ["EF Core", "Vector store", "LLM provider", "Observability"],
  },
]

const principles = [
  "IA generativa não toma decisões clínicas — só refina linguagem.",
  "Toda saída de LLM passa por validação estruturada (structured output + schema).",
  "Prompts versionados, auditáveis e cobertos por testes.",
  "Fake AI no desenvolvimento para iterar sem custo nem risco.",
  "Dados sintéticos em testes; nenhum dado real em ambiente educacional.",
]

export function Architecture() {
  return (
    <section
      id="arquitetura"
      aria-labelledby="arquitetura-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel>05 — Arquitetura</SectionLabel>
            <h2
              id="arquitetura-title"
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
            >
              Camadas que protegem decisões.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
              A arquitetura não é um detalhe técnico — é uma escolha ética. Ao isolar
              o domínio clínico de qualquer modelo de linguagem, garantimos que a
              regra de negócio crítica seja explícita, testável e auditável.
            </p>

            <ul className="mt-8 space-y-3 border-t border-border pt-8">
              {principles.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" aria-hidden="true" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  neurocare-ai-lab.slnx
                </span>
              </div>
              <div className="divide-y divide-border">
                {layers.map((layer, i) => (
                  <div
                    key={layer.name}
                    className="grid grid-cols-12 gap-4 px-5 py-5 md:px-7"
                  >
                    <div className="col-span-12 md:col-span-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Camada 0{i + 1}
                      </p>
                      <p className="mt-1 font-mono text-base text-foreground">
                        {layer.name}
                      </p>
                      <p className="mt-1 text-xs text-accent">{layer.role}</p>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {layer.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {layer.items.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              C# / .NET 10 (LTS) · Clean Architecture · Domain-Driven Design ·
              Auditoria · Observabilidade · Testes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
