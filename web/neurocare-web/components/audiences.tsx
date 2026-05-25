"use client"

import { useState } from "react"
import { SectionLabel } from "./section-label"
import { Stethoscope, Briefcase, Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Audience = "medicos" | "headhunters" | "devs"

const data: Record<
  Audience,
  {
    icon: React.ComponentType<{ className?: string }>
    label: string
    title: string
    intro: string
    points: { k: string; v: string }[]
  }
> = {
  medicos: {
    icon: Stethoscope,
    label: "Para profissionais de saúde",
    title:
      "Construído com humildade clínica. Pensado para apoiar — nunca substituir.",
    intro:
      "Reconhecemos que medicina cognitiva exige escuta, exame clínico, contexto biopsicossocial e formação que nenhuma IA possui. Este projeto se posiciona um passo antes da consulta, organizando o que a família observa em casa.",
    points: [
      {
        k: "Sem diagnóstico",
        v: "Nenhuma saída do sistema afirma, sugere ou implica diagnóstico, prognóstico ou tratamento.",
      },
      {
        k: "Triagem auditável",
        v: "A classificação de prioridade é determinística, baseada em regras explícitas e revisáveis por especialistas.",
      },
      {
        k: "Linguagem cuidada",
        v: "Guardrails impedem o LLM de gerar termos diagnósticos, prescritivos ou alarmistas no relatório.",
      },
      {
        k: "Aberto a especialistas",
        v: "O laboratório busca, no futuro, validação simulada e contribuição de neurologistas, geriatras e neuropsicólogos.",
      },
    ],
  },
  headhunters: {
    icon: Briefcase,
    label: "Para recrutadores e líderes de tecnologia",
    title:
      "Maturidade em IA aplicada, ética de produto e engenharia em domínio sensível.",
    intro:
      "Este não é um chatbot. É um laboratório de IA responsável que trata produto, arquitetura, segurança e ética como dimensões inseparáveis. O exercício deliberado é construir bem em um domínio onde construir mal causa dano real.",
    points: [
      {
        k: "Senioridade de produto",
        v: "Definição clara de escopo, anti-escopo, personas e jornada — antes de qualquer linha de código.",
      },
      {
        k: "Engenharia moderna",
        v: ".NET 10, Clean Architecture, DDD, testes, observabilidade e auditoria de prompts.",
      },
      {
        k: "IA responsável aplicada",
        v: "Guardrails, structured output, RAG, human-in-the-loop, fake AI para desenvolvimento seguro.",
      },
      {
        k: "Privacidade e segurança",
        v: "LGPD by design, OWASP, gestão de risco e dados sintéticos para testes.",
      },
    ],
  },
  devs: {
    icon: Code2,
    label: "Para desenvolvedores e arquitetos",
    title:
      "Um estudo prático de IA responsável, separação de responsabilidades e engenharia de software.",
    intro:
      "O repositório é um exercício didático de Clean Architecture com camadas bem delimitadas, regras determinísticas separadas da camada de IA, e contratos claros entre Domain, Application, Infrastructure e API.",
    points: [
      {
        k: "Clean Architecture + DDD",
        v: "Domain isolada, Application orquestrando casos de uso, Infrastructure plugável, API como porta de entrada.",
      },
      {
        k: "IA com guardrails",
        v: "Structured output, validação de saída, blocklists de termos clínicos, prompts auditados e versionados.",
      },
      {
        k: "RAG e observabilidade",
        v: "Recuperação de contexto curado, telemetria de prompts, métricas e logs estruturados.",
      },
      {
        k: "Human-in-the-loop",
        v: "Pontos explícitos de revisão humana antes de qualquer artefato sair do sistema.",
      },
    ],
  },
}

const order: Audience[] = ["medicos", "headhunters", "devs"]

export function Audiences() {
  const [active, setActive] = useState<Audience>("medicos")
  const current = data[active]
  const Icon = current.icon

  return (
    <section
      id="publicos"
      aria-labelledby="publicos-title"
      className="border-b border-border bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel>04 — Para quem</SectionLabel>
          <h2
            id="publicos-title"
            className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
          >
            Três leituras, uma mesma ética.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            O projeto fala com profissionais de saúde, com o mercado de tecnologia
            e com a comunidade de engenharia. A mensagem central não muda — a
            profundidade, sim.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Públicos">
          {order.map((key) => {
            const item = data[key]
            const isActive = active === key
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${key}`}
                id={`tab-${key}`}
                onClick={() => setActive(key)}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="mt-10 grid grid-cols-1 gap-10 rounded-xl border border-border bg-card p-7 lg:grid-cols-12 lg:gap-14 lg:p-12"
        >
          <div className="lg:col-span-5">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent text-accent-foreground"
            >
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-foreground text-balance">
              {current.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
              {current.intro}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {current.points.map((p) => (
              <div key={p.k} className="bg-card p-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {p.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground">
                  {p.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
