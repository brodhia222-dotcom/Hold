import { Button } from "@/components/ui/Button"
import { ShaderBackground } from "@/components/effects/ShaderBackground"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/* H's decorativas — 4 esquineras, cada una con un color HOLD distinto.
 * Aparecen en stagger después del texto principal. */
const DECO_HS = [
  { pos: "tl", color: "#E96951", rotate: -12, delay: 2.4 }, // Coral
  { pos: "tr", color: "#2B63FF", rotate: 8, delay: 2.7 },   // Bright Blue
  { pos: "bl", color: "#EBBDD9", rotate: 15, delay: 3.0 },  // Soft Pink
  { pos: "br", color: "#F9423A", rotate: -10, delay: 3.3 }, // Warm Red
] as const

/**
 * Hero cinematográfico editorial premium.
 *
 * Secuencia:
 *   0.0–1.8s · Veil negro fade-out → shader se ilumina gradualmente.
 *   1.2–2.6s · Línea 1 "Sostener sin perder la esencia" entra per-word.
 *   2.4–3.6s · 4 h's decorativas esquineras entran en stagger.
 *   4.0–4.6s · Línea 1 fade-out.
 *   4.8–5.6s · Línea 2 "Acá no te tiramos la posta..." entra en el mismo
 *              lugar (reemplaza a la 1), mismo display size.
 *   5.6s+    · CTAs aparecen. Estado final estático.
 */
export function HeroShader() {
  return (
    <section className="hold-hero-shader" aria-label="Inicio">
      <h1 className="hold-hero-shader__sr">Sostener sin perder la esencia.</h1>

      <ShaderBackground />

      {/* Veil negro inicial — fade-out revela el shader iluminándose. */}
      <div className="hold-hero-shader__veil" aria-hidden />

      {/* 4 h's decorativas — esquineras, una por color de marca. */}
      {DECO_HS.map((d) => (
        <span
          key={d.pos}
          className={`hold-hero-shader__deco hold-hero-shader__deco--${d.pos}`}
          style={
            {
              color: d.color,
              "--rotate": `${d.rotate}deg`,
              "--delay": `${d.delay}s`,
            } as React.CSSProperties
          }
          aria-hidden
        >
          h
        </span>
      ))}

      <div className="hold-hero-shader__stage">
        {/* LÍNEA 1 — "Sostener sin perder la esencia" — entra y sale. */}
        <h2 className="hold-hero-shader__line hold-hero-shader__line--1" aria-hidden>
          <span className="hold-hero-shader__word" style={{ "--i": 0 } as React.CSSProperties}>
            Sostener
          </span>{" "}
          <span className="hold-hero-shader__word" style={{ "--i": 1 } as React.CSSProperties}>
            sin perder
          </span>{" "}
          <span className="hold-hero-shader__word" style={{ "--i": 2 } as React.CSSProperties}>
            la <em>esencia.</em>
          </span>
        </h2>

        {/* LÍNEA 2 — "Acá no te tiramos la posta..." — entra cuando sale la 1. */}
        <p className="hold-hero-shader__line hold-hero-shader__line--2" aria-hidden>
          Acá no te tiramos la posta:{" "}
          <em>te acompañamos a crear la tuya.</em>
        </p>
      </div>

      <div className="hold-hero-shader__cta">
        <Button
          size="large"
          href={WHATSAPP_URL}
          external
          ariaLabel="Hablemos por WhatsApp"
        >
          Hablemos
        </Button>
        <Button
          size="large"
          variant="secondary"
          href="#servicios"
          arrow={false}
        >
          Servicios
        </Button>
      </div>
    </section>
  )
}
