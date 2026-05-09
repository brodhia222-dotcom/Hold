import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hold Academy | HOLD",
  description:
    "Cursos, entrenamientos y mentorías para creadores de contenido, emprendedores y profesionales que quieren dejar de improvisar.",
}

export default function AcademyPage() {
  return (
    <main className="section-container">
      <p className="t-micro">Educación · 01</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Hold Academy
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Detalle del servicio · cursos · CTAs · se completa en Fase 5.
      </p>
    </main>
  )
}
