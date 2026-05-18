import type { CSSProperties } from "react"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/**
 * Hero simple editorial: bg blanco, tipografía display negra centrada,
 * CTAs Hablemos + Servicios. Sin shader, sin decoraciones extra.
 * Pequeña animación de fade-up por palabra para sumar vida al cargar.
 */
export function HeroShader() {
  return (
    <section className="hold-hero-shader" aria-label="Inicio">
      <h1 className="hold-hero-shader__sr">Sostener sin perder la esencia.</h1>

      <div className="hold-hero-shader__content">
        <h2 className="hold-hero-shader__title" aria-hidden>
          <span className="hold-hero-shader__word" style={{ "--i": 0 } as CSSProperties}>
            Sostener
          </span>{" "}
          <span className="hold-hero-shader__word" style={{ "--i": 1 } as CSSProperties}>
            sin perder
          </span>{" "}
          <span className="hold-hero-shader__word" style={{ "--i": 2 } as CSSProperties}>
            la <em>esencia.</em>
          </span>
        </h2>

        <p className="hold-hero-shader__sub">
          Acá no te tiramos la posta:{" "}
          <em>te acompañamos a crear la tuya.</em>
        </p>

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
      </div>
    </section>
  )
}
