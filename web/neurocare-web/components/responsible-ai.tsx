import { SectionLabel } from "./section-label"
import {
  ShieldCheck,
  Lock,
  Eye,
  History,
  UserCheck,
  ScrollText,
} from "lucide-react"

const principles = [
  {
    icon: ShieldCheck,
    title: "Guardrails clínicos",
    body:
      "Blocklists de termos diagnósticos, prognósticos e prescritivos. Toda saída do LLM é validada contra um schema antes de chegar ao usuário.",
  },
  {
    icon: UserCheck,
    title: "Human-in-the-loop",
    body:
      "Pontos explícitos de revisão humana. Nenhum artefato clínico relevante é entregue sem que uma pessoa possa intervir.",
  },
  {
    icon: Eye,
    title: "Explicabilidade",
    body:
      "A classificação de prioridade é determinística e auditável. O usuário entende por que recebeu cada orientação.",
  },
  {
    icon: Lock,
    title: "Privacidade por design",
    body:
      "LGPD desde o consentimento até o descarte. Dados sintéticos em testes, minimização e segregação de informação sensível.",
  },
  {
    icon: History,
    title: "Auditoria de prompts",
    body:
      "Prompts versionados, telemetria estruturada e rastreabilidade ponta a ponta de qualquer interação com o modelo.",
  },
  {
    icon: ScrollText,
    title: "Comunicação responsável",
    body:
      "Linguagem cuidadosa, sem alarmismo, sem promessas, sem termos médicos. Disclaimers visíveis em cada artefato.",
  },
]

export function ResponsibleAi() {
  return (
    <section
      id="ia-responsavel"
      aria-labelledby="ia-responsavel-title"
      className="border-b border-border bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel>06 — IA responsável</SectionLabel>
          <h2
            id="ia-responsavel-title"
            className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
          >
            Princípios que vêm antes do código.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Em saúde, IA responsável não é uma camada — é o critério de aceitação.
            Estes princípios determinam o que entra, o que fica fora e o que precisa
            ser revisto antes de qualquer release.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => {
            const Icon = p.icon
            return (
              <li key={p.title} className="bg-background p-7">
                <span
                  aria-hidden="true"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-5 text-base font-medium text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
