import { Button } from "@/components/ui/Button"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { SUBTAGLINE, TAGLINE, WHATSAPP_URL } from "@/data/content"

/**
 * Home placeholder · Fase 0/2.
 * El hero animado, marquee, previews y banda CTA llegan en Fase 4.
 * Por ahora se muestra el partido conceptual del manual + CTAs.
 */
export default function Home() {
  return (
    <main className="section-container">
      <Eyebrow tone="muted">HOLD · Buenos Aires · 2025</Eyebrow>

      <h1 className="t-display" style={{ marginTop: 32, maxWidth: 1100 }}>
        {TAGLINE}
      </h1>

      <p
        className="t-lead"
        style={{ marginTop: 32, color: "var(--muted)", maxWidth: 560 }}
      >
        {SUBTAGLINE}
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          marginTop: 48,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Button href={WHATSAPP_URL} external ariaLabel="Hablemos por WhatsApp">
          Hablemos
        </Button>
        <Button variant="secondary" href="/academy" arrow={false}>
          Ver servicios
        </Button>
      </div>
    </main>
  )
}
