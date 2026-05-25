import { SectionLabel } from "./section-label"
import { Check, X } from "lucide-react"

const does = [
  "Coleta de consentimento e avisos explícitos de não diagnóstico (LGPD).",
  "Questionários estruturados para paciente e familiar.",
  "Identificação de sinais de alerta e fatores confundidores.",
  "Classificação determinística de prioridade (Níveis 0–3).",
  "Geração de relatório clínico estruturado para consulta.",
  "Uso de IA generativa apenas para resumir e melhorar comunicação.",
]

const doesNot = [
  "Diagnosticar Alzheimer, demência ou qualquer outra condição.",
  "Calcular score de risco individual de doença.",
  "Prescrever ou recomendar medicação ou exames.",
  "Tomar decisões clínicas com base em LLM.",
  "Substituir avaliação de profissional de saúde qualificado.",
  "Operar fora de um contexto educacional e de pesquisa.",
]

export function ClinicalLimits() {
  return (
    <section
      aria-labelledby="limites-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel>03 — Limites clínicos</SectionLabel>
          <h2
            id="limites-title"
            className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
          >
            O que o sistema faz — e o que não faz.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Definir o anti-escopo é tão importante quanto definir o escopo. Esta é a
            fronteira ética e técnica que orienta cada decisão de produto, design e
            engenharia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card title="O sistema faz" tone="positive" items={does} icon={Check} />
          <Card title="O sistema não faz" tone="negative" items={doesNot} icon={X} />
        </div>
      </div>
    </section>
  )
}

function Card({
  title,
  tone,
  items,
  icon: Icon,
}: {
  title: string
  tone: "positive" | "negative"
  items: string[]
  icon: React.ComponentType<{ className?: string }>
}) {
  const isPositive = tone === "positive"
  return (
    <div className="rounded-xl border border-border bg-card p-7">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`flex h-7 w-7 items-center justify-center rounded-md ${
            isPositive
              ? "bg-accent text-accent-foreground"
              : "bg-foreground text-background"
          }`}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${
                isPositive ? "bg-accent" : "bg-foreground"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
