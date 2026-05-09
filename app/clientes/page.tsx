import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clientes | HOLD",
  description:
    "Marcas y creadores que confiaron en HOLD. Testimonios reales, filtrados por servicio.",
}

export default function ClientesPage() {
  return (
    <main className="section-container">
      <p className="t-micro">Confían en HOLD</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Clientes
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Tabs por servicio + testimonios · se completa en Fase 7.
      </p>
    </main>
  )
}
