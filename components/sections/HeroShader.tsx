import type { CSSProperties } from "react"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/**
 * Hero simple editorial: bg Star White, tipografía display, CTAs.
 * El title nuevo: "No solo hacemos contenido, construimos marcas."
 * — "solo" va en italic + color accent azul,
 * — "construimos marcas." va en bold para cerrar fuerte.
 * Animación de fade-up por palabra al cargar.
 */
export function HeroShader() {
  return (
    <section className="hold-hero-shader" aria-label="Inicio">
      <h1 className="hold-hero-shader__sr">
        No solo hacemos contenido, construimos marcas.
      </h1>

      <div className="hold-hero-shader__content">
        <h2 className="hold-hero-shader__title" aria-hidden>
          <span className="hold-hero-shader__word" style={{ "--i": 0 } as CSSProperties}>
            No <em>solo</em>
          </span>{" "}
          <span className="hold-hero-shader__word" style={{ "--i": 1 } as CSSProperties}>
            hacemos contenido,
          </span>{" "}
          <span
            className="hold-hero-shader__word hold-hero-shader__word--strong"
            style={{ "--i": 2 } as CSSProperties}
          >
            construimos marcas.
          </span>
        </h2>

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
