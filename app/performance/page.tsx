import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Performance | HOLD",
  description:
    "Campañas pensadas desde la estrategia creativa, con analítica real y foco en resultados. Convertimos tu inversión en ventas.",
}

export default function PerformancePage() {
  return (
    <main className="section-container">
      <p className="t-micro">Resultados medibles · 03</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Performance
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Detalle del servicio · CTAs · se completa en Fase 5.
      </p>
    </main>
  )
}
