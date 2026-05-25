import type { Metadata, Viewport } from "next"
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const googleAnalyticsId = "G-PM2W0V87DH"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "neurocare-ai-lab — Cognitive Report Generator for Consultation",
  description:
    "Laboratório educacional de IA generativa responsável aplicada à saúde cognitiva. Organiza relatos de familiares e cuidadores em um relatório estruturado, não diagnóstico, para apoiar a conversa com profissionais de saúde.",
  keywords: [
    "IA responsável",
    "saúde cognitiva",
    "Alzheimer",
    "triagem",
    "Clean Architecture",
    ".NET 10",
    "engenharia de software",
    "IA generativa",
    "guardrails",
    "RAG",
  ],
  authors: [{ name: "neurocare-ai-lab" }],
  openGraph: {
    title: "neurocare-ai-lab — Cognitive Report Generator for Consultation",
    description:
      "Um laboratório de IA generativa responsável em saúde cognitiva. Não diagnostica, não prescreve — apoia a conversa clínica.",
    type: "website",
    locale: "pt_BR",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5ee" },
    { media: "(prefers-color-scheme: dark)", color: "#10131a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans text-foreground antialiased">
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
      </body>
    </html>
  )
}
