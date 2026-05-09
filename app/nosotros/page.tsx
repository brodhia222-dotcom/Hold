import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros | HOLD",
  description:
    "Somos Victoria y Florentina. Acompañamos negocios y creadores que quieren comunicar con estrategia.",
}

export default function NosotrosPage() {
  return (
    <main className="section-container">
      <p className="t-micro">Quiénes somos</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Nosotros
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Texto de Victoria + Florentina · valores · foto · se completa en Fase 6.
      </p>
    </main>
  )
}
