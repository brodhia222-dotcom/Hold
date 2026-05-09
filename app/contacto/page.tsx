import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | HOLD",
  description:
    "Hablemos. Escribinos por WhatsApp, mail o Instagram. Buenos Aires, Argentina.",
}

export default function ContactoPage() {
  return (
    <main className="section-container">
      <p className="t-micro">Hablemos</p>
      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Contacto
      </h1>
      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Datos + 3 botones (WhatsApp / Email / IG) · se completa en Fase 8.
      </p>
    </main>
  )
}
