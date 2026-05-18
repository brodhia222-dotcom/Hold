import { Button } from "@/components/ui/Button"
import { ShaderAnimation } from "@/components/ui/shader-animation"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/* H's decorativas esquineras — una por color HOLD sobre negro. */
const DECO_HS = [
  { pos: "tl", color: "#E96951", rotate: -12, delay: 1.6 }, // Coral
  { pos: "tr", color: "#2B63FF", rotate: 8, delay: 1.8 },   // Bright Blue
  { pos: "bl", color: "#EBBDD9", rotate: 15, delay: 2.0 },  // Soft Pink
  { pos: "br", color: "#F9423A", rotate: -10, delay: 2.2 }, // Warm Red
] as const

/* Palabras de la línea 1 — cada una entra desde un lado distinto.
 * Lo que arma la "composición tipográfica viva": vienen desde puntos
 * opuestos del viewport y se alinean al centro. */
const LINE1_WORDS = [
  { fromX: -160, fromY: 0, delay: 0.4, text: "Sostener" },
  { fromX: 160, fromY: 0, delay: 0.65, text: "sin perder" },
  { fromX: 0, fromY: 80, delay: 0.9, text: null }, // "la esencia." con em
] as const

/**
 * Hero editorial premium con composición tipográfica viva.
 *
 * Secuencia (~4s):
 *   0.4–1.4s · 3 palabras de la línea 1 entran desde lados distintos
 *              (izq, der, abajo) y se alinean al centro. Cada una con
 *              su propio movimiento.
 *   1.5s    · CTAs aparecen (acción disponible temprano).
 *   1.6–2.4s · 4 h's decorativas esquineras (stagger 0.2s).
 *   2.0s    · Scroll hint pulsa abajo.
 *   2.8–3.4s · Línea 1 fade-out per-word.
 *   3.4–4.4s · Línea 2 "Acá no te tiramos la posta..." reemplaza
 *              en el mismo lugar. Queda fija.
 */
export function HeroShader() {
  return (
    <section
      className="hold-hero-shader"
      aria-label="Inicio"
      data-hero-theme="dark"
    >
      <h1 className="hold-hero-shader__sr">Sostener sin perder la esencia.</h1>

      <div className="hold-hero-shader__bg" aria-hidden>
        <ShaderAnimation />
      </div>

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
          {LINE1_WORDS.map((w, i) => (
            <span
              key={i}
              className="hold-hero-shader__word"
              style={
                {
                  "--i": i,
                  "--from-x": `${w.fromX}px`,
                  "--from-y": `${w.fromY}px`,
                  "--delay": `${w.delay}s`,
                } as React.CSSProperties
              }
            >
              {w.text ?? (
                <>
                  la <em>esencia.</em>
                </>
              )}
            </span>
          ))}
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
