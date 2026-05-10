import type { CSSProperties } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { servicios, testimonios } from "@/data/content"
import type { ServicioSlug, Testimonio } from "@/types"
import "./clientes-preview.css"

const SERVICIO_NOMBRE: Record<ServicioSlug, string> = {
  academy: "Hold Academy",
  "redes-sociales": "Redes Sociales",
  performance: "Performance",
}

const SERVICIO_COLOR: Record<ServicioSlug, string> = Object.fromEntries(
  servicios.map((s) => [s.slug, s.acento]),
) as Record<ServicioSlug, string>

const MEDIA_LABEL: Record<ServicioSlug, string> = {
  academy: "Estudiante en clase",
  "redes-sociales": "Cliente de redes",
  performance: "Cliente performance",
}

/** Devuelve un testimonio por servicio (el primero de cada uno). */
function pickHighlights(): readonly Testimonio[] {
  const slugs: ServicioSlug[] = ["academy", "redes-sociales", "performance"]
  return slugs.map(
    (slug) => testimonios.find((t) => t.servicio === slug)!,
  )
}

type CardProps = {
  testimonio: Testimonio
  variant: "featured" | "medium" | "regular"
}

function TestimonioCard({ testimonio, variant }: CardProps) {
  const color = SERVICIO_COLOR[testimonio.servicio]
  const styleVars = { "--service-color": color } as CSSProperties
  const showMedia = variant !== "regular"
  const mediaLabel = MEDIA_LABEL[testimonio.servicio]

  return (
    <article
      className={`hold-clientes__card hold-clientes__card--${variant}`}
      style={styleVars}
    >
      {showMedia ? (
        <div className="hold-clientes__media" aria-hidden>
          <span className="hold-clientes__media-tag">{mediaLabel}</span>
        </div>
      ) : null}

      <div className="hold-clientes__body">
        <span className="hold-clientes__quote-mark" aria-hidden>
          &ldquo;
        </span>
        <p className="hold-clientes__text">{testimonio.texto}</p>

        <div className="hold-clientes__footer">
          <div className="hold-clientes__author">
            <span className="hold-clientes__author-name">{testimonio.nombre}</span>
            <span className="hold-clientes__author-rol">{testimonio.rol}</span>
          </div>
          <span className="hold-clientes__chip">
            {SERVICIO_NOMBRE[testimonio.servicio]}
          </span>
        </div>
      </div>
    </article>
  )
}

export function ClientesPreview() {
  const [academy, redes, performance] = pickHighlights()

  return (
    <section className="hold-clientes" aria-label="Clientes">
      <div className="hold-clientes__inner">
        <header className="hold-clientes__header">
          <div data-reveal>
            <p className="hold-clientes__eyebrow">03 · Clientes</p>
            <h2 className="hold-clientes__title">
              Lo que dicen las marcas que <em>confiaron</em>.
            </h2>
          </div>
          <div className="hold-clientes__head-cta" data-reveal data-reveal-delay="0.2">
            <Button variant="secondary" href="/clientes" accentColor="#E96951">
              Ver todos los casos
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
            </Button>
          </div>
        </header>

        <div className="hold-clientes__grid">
          <div className="hold-clientes__cell hold-clientes__cell--featured" data-reveal>
            <TestimonioCard testimonio={academy} variant="featured" />
          </div>
          <div
            className="hold-clientes__cell hold-clientes__cell--medium"
            data-reveal
            data-reveal-delay="0.15"
          >
            <TestimonioCard testimonio={redes} variant="medium" />
          </div>
          <div
            className="hold-clientes__cell hold-clientes__cell--regular"
            data-reveal
            data-reveal-delay="0.3"
          >
            <TestimonioCard testimonio={performance} variant="regular" />
          </div>
        </div>
      </div>
    </section>
  )
}
