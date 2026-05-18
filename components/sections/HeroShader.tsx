import { Button } from "@/components/ui/Button"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/* H's decorativas — 4 esquineras sobre negro, cada una con un color HOLD.
 * Hacen el "firulete" del manual sin saturar. */
const DECO_HS = [
  { pos: "tl", color: "#E96951", rotate: -12, delay: 1.0 }, // Coral
  { pos: "tr", color: "#2B63FF", rotate: 8, delay: 1.2 },   // Bright Blue
  { pos: "bl", color: "#EBBDD9", rotate: 15, delay: 1.4 },  // Soft Pink
  { pos: "br", color: "#F9423A", rotate: -10, delay: 1.6 }, // Warm Red
] as const

/**
 * Hero editorial premium minimalista.
 *
 * Fondo negro pleno HOLD. Tipografía blanca display. Las h's de color
 * saltan limpias sobre el fondo (eso ES la identidad del manual).
 *
 * Secuencia (~3.5s total):
 *   0.6–2.0s · Línea 1 "Sostener sin perder la esencia" entra per-word.
 *   1.0–1.6s · 4 h's decorativas aparecen en stagger.
 *   1.5s     · CTAs entran al pie (acción disponible temprano).
 *   2.0s     · Scroll hint aparece abajo.
 *   2.6–3.2s · Línea 1 fade-out.
 *   3.2–4.0s · Línea 2 "Acá no te tiramos la posta..." reemplaza en el
 *              mismo lugar. Queda fija.
 */
export function HeroShader() {
  return (
    <section className="hold-hero-shader" aria-label="Inicio">
      <h1 className="hold-hero-shader__sr">Sostener sin perder la esencia.</h1>

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

      {/* Scroll hint: pulsa sutil, indica que hay más abajo. */}
      <a
        href="#servicios"
        className="hold-hero-shader__scroll"
        aria-label="Desplazate hacia abajo"
      >
        <span>Desplazate</span>
        <span className="hold-hero-shader__scroll-line" aria-hidden />
      </a>
    </section>
  )
}
