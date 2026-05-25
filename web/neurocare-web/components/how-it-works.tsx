import { SectionLabel } from "./section-label"
import { ClipboardList, ListChecks, Sparkles, FileText, Stethoscope } from "lucide-react"

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Coleta estruturada",
    body:
      "Familiares ou cuidadores respondem questionários organizados sobre memória, comportamento, funcionalidade no dia a dia e fatores confundidores como sono, humor e medicação.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Triagem determinística",
    body:
      "Regras explícitas e auditáveis classificam apenas a prioridade de atenção (Níveis 0–3). Nenhum modelo de linguagem decide gravidade clínica.",
  },
  {
    n: "03",
    icon: Sparkles,
    title: "Refinamento por IA generativa",
    body:
      "A IA é usada para resumir relatos, padronizar linguagem e melhorar a clareza — sob guardrails que proíbem termos diagnósticos, prognósticos ou prescritivos.",
  },
  {
    n: "04",
    icon: FileText,
    title: "Relatório estruturado",
    body:
      "Saída em formato clínico legível: histórico, sinais de alerta, fatores confundidores, perguntas sugeridas para o médico e disclaimers explícitos.",
  },
  {
    n: "05",
    icon: Stethoscope,
    title: "Apoio à consulta",
    body:
      "O documento entra na consulta como insumo. A decisão, a hipótese diagnóstica e a conduta seguem com o profissional de saúde.",
  },
]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="border-b border-border bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel>02 — Como funciona</SectionLabel>
          <h2
            id="como-funciona-title"
            className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
          >
            Cinco passos, com responsabilidade em cada um.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            O fluxo foi desenhado para que cada etapa tenha uma responsabilidade
            clara. A IA atua apenas onde agrega valor com segurança, e a decisão
            clínica permanece com quem deve tê-la.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li
                key={step.n}
                className="flex flex-col gap-4 bg-background p-6 lg:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {step.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="text-base font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
