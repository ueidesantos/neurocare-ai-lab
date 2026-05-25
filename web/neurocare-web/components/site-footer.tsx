export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-sm text-foreground">
              neurocare<span className="text-muted-foreground">-ai-lab</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Projeto educacional desenvolvido como parte de uma pós-graduação em
              Engenharia de Software com foco em Inteligência Artificial. Não é um
              produto médico.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            <FooterCol
              title="Projeto"
              links={[
                { label: "Proposta", href: "#proposta" },
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Roadmap", href: "#roadmap" },
              ]}
            />
            <FooterCol
              title="Engenharia"
              links={[
                { label: "Arquitetura", href: "#arquitetura" },
                { label: "IA responsável", href: "#ia-responsavel" },
                { label: "Repositório", href: "https://github.com/ueidesantos/neurocare-ai-lab" },
              ]}
            />
            <FooterCol
              title="Ética"
              links={[
                { label: "Disclaimer", href: "https://github.com/ueidesantos/neurocare-ai-lab/blob/main/DISCLAIMER.md" },
                { label: "LGPD", href: "https://github.com/ueidesantos/neurocare-ai-lab/blob/main/docs/lgpd.md" },
                { label: "Limites clínicos", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} neurocare-ai-lab. Conteúdo apenas para fins educacionais. Não
            constitui aconselhamento médico.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Built with care · Not a medical device
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
