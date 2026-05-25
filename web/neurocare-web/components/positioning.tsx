import { SectionLabel } from "./section-label"

export function Positioning() {
  return (
    <section
      id="proposta"
      aria-labelledby="proposta-title"
      className="border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <SectionLabel>01 — Proposta</SectionLabel>
            <h2
              id="proposta-title"
              className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground text-balance md:text-5xl"
            >
              Por que existe um laboratório, e não um produto.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground text-pretty lg:col-span-8">
            <p>
              No Brasil, estima-se que cerca de{" "}
              <strong className="font-medium text-foreground">
                80% dos casos de demência não recebem diagnóstico
              </strong>
              . Famílias percebem mudanças, mas chegam ao consultório com relatos
              fragmentados, episódios soltos e sem o vocabulário clínico que ajudaria
              o profissional a investigar com precisão.
            </p>
            <p>
              O <strong className="font-medium text-foreground">neurocare-ai-lab</strong>{" "}
              não tenta resolver isso com um chatbot que finge ser médico. É um
              laboratório de pesquisa aplicada que estuda como a IA generativa pode{" "}
              <em className="text-foreground">organizar</em>,{" "}
              <em className="text-foreground">resumir</em> e{" "}
              <em className="text-foreground">traduzir</em> informações cotidianas em
              um relatório estruturado, auditável e respeitoso, que entra na consulta
              como insumo — nunca como conclusão.
            </p>
            <p>
              A IA generativa aqui tem um papel deliberadamente pequeno: melhorar a
              comunicação. A triagem de prioridade é{" "}
              <strong className="font-medium text-foreground">determinística</strong>,
              baseada em regras transparentes, e a decisão clínica permanece, sempre,
              com o profissional de saúde.
            </p>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              <Pillar
                label="Educacional"
                title="Aprender em domínio sensível"
                body="Estudo de caso de pós-graduação em Engenharia de Software e IA."
              />
              <Pillar
                label="Responsável"
                title="Limites antes do escopo"
                body="Guardrails, auditoria e human-in-the-loop por construção."
              />
              <Pillar
                label="Aplicado"
                title="Engenharia moderna"
                body="Clean Architecture, DDD, .NET 10, observabilidade e testes."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillar({
  label,
  title,
  body,
}: {
  label: string
  title: string
  body: string
}) {
  return (
    <div className="bg-background p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h3 className="mt-3 text-base font-medium text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  )
}
