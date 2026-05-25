import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { NotADiagnosticBanner } from "@/components/not-a-diagnostic-banner"
import { Positioning } from "@/components/positioning"
import { HowItWorks } from "@/components/how-it-works"
import { Audiences } from "@/components/audiences"
import { Architecture } from "@/components/architecture"
import { ResponsibleAi } from "@/components/responsible-ai"
import { Roadmap } from "@/components/roadmap"
import { ClinicalLimits } from "@/components/clinical-limits"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative">
      <SiteHeader />
      <Hero />
      <NotADiagnosticBanner />
      <Positioning />
      <HowItWorks />
      <ClinicalLimits />
      <Audiences />
      <Architecture />
      <ResponsibleAi />
      <Roadmap />
      <Cta />
      <SiteFooter />
    </main>
  )
}
