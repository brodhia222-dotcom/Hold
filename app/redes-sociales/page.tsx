import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Redes Sociales | HOLD",
  description:
    "Estrategia, contenido, diseño, producción y community management. Con un equipo dedicado a tu marca.",
}

export default function RedesSocialesPage() {
  return (
    <main className="section-container">
      <p className="t-micro">Marcas y negocios · 02</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Redes Sociales
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Detalle del servicio · CTAs · se completa en Fase 5.
      </p>
    </main>
  )
}
