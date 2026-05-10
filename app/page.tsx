import { Button } from "@/components/ui/Button"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { MarqueeBand } from "@/components/effects/MarqueeBand"
import { SUBTAGLINE, TAGLINE, WHATSAPP_URL } from "@/data/content"

const MARQUEE_ITEMS = [
  "Hold Academy",
  "Redes Sociales",
  "Performance",
  "Sostener sin perder la esencia",
  "Buenos Aires",
] as const

/**
 * Home placeholder · Fase 0–3.
 * El hero animado, previews de servicios y banda CTA llegan en Fase 4.
 * Por ahora se muestra el partido conceptual + un primer marquee
 * (verificación visual de que Fase 3 está vivo en producción).
 */
export default function Home() {
  return (
    <>
      <main className="section-container">
        <Eyebrow tone="muted" data-reveal>
          HOLD · Buenos Aires · 2025
        </Eyebrow>

        <h1
          className="t-display"
          style={{ marginTop: 32, maxWidth: 1100 }}
          data-reveal
          data-reveal-delay="0.1"
        >
          {TAGLINE}
        </h1>

        <p
          className="t-lead"
          style={{ marginTop: 32, color: "var(--muted)", maxWidth: 560 }}
          data-reveal
          data-reveal-delay="0.2"
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
          data-reveal
          data-reveal-delay="0.3"
        >
          <Button href={WHATSAPP_URL} external ariaLabel="Hablemos por WhatsApp">
            Hablemos
          </Button>
          <Button variant="secondary" href="/academy" arrow={false}>
            Ver servicios
          </Button>
        </div>
      </main>

      <MarqueeBand items={MARQUEE_ITEMS} italic durationSec={50} />
    </>
  )
}
