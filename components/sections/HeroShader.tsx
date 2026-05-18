import { Button } from "@/components/ui/Button"
import { ShaderBackground } from "@/components/effects/ShaderBackground"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-shader.css"

/**
 * Hero con shader animado (WebGL2) como background y contenido HOLD encima.
 * El shader se transforma con paleta de marca (coral / azul / rosa / rojo)
 * sobre Star White. Texto y CTAs aparecen en staggered fade-in via CSS.
 */
export function HeroShader() {
  return (
    <section className="hold-hero-shader" aria-label="Inicio">
      <h1 className="hold-hero-shader__sr">Sostener sin perder la esencia.</h1>

      <ShaderBackground />

      <div className="hold-hero-shader__overlay" aria-hidden />

      <div className="hold-hero-shader__content">
        <p className="hold-hero-shader__eyebrow">
          <span className="hold-hero-shader__eyebrow-dot" aria-hidden />
          HOLD · AGENCIA CREATIVA
        </p>

        <h2 className="hold-hero-shader__title" aria-hidden>
          <span className="hold-hero-shader__word" style={{ "--i": 0 } as React.CSSProperties}>
            Sostener
          </span>
          <span className="hold-hero-shader__word" style={{ "--i": 1 } as React.CSSProperties}>
            sin perder
          </span>
          <span className="hold-hero-shader__word" style={{ "--i": 2 } as React.CSSProperties}>
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
