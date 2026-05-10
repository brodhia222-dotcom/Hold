import type { CSSProperties } from "react"
import type { ServicioSlug, Testimonio } from "@/types"
import { servicios } from "@/data/content"
import "./testimonial-masonry-card.css"

const SERVICIO_COLOR: Record<ServicioSlug, string> = Object.fromEntries(
  servicios.map((s) => [s.slug, s.acento]),
) as Record<ServicioSlug, string>

const SERVICIO_NOMBRE: Record<ServicioSlug, string> = {
  academy: "Hold Academy",
  "redes-sociales": "Redes Sociales",
  performance: "Performance",
}

/** Aspect-ratios moderados que rotan por índice — generan masonry sin
 *  alturas extremas (3 valores se distribuyen mejor en 3 columnas). */
const ASPECT_RATIOS = ["4 / 5", "1 / 1", "5 / 4"] as const

function getInitials(nombre: string): string {
  return nombre
    .split(/\s+/)
    .map((w) => w[0] ?? "")
    .filter(Boolean)
    .join("")
    .replace(/\W/g, "")
    .toUpperCase()
    .slice(0, 2)
}

interface Props {
  testimonio: Testimonio
  index?: number
}

export function TestimonialMasonryCard({ testimonio, index = 0 }: Props) {
  const color = SERVICIO_COLOR[testimonio.servicio]
  const aspectRatio = ASPECT_RATIOS[index % ASPECT_RATIOS.length]
  const initials = getInitials(testimonio.nombre)
  const styleVars = {
    "--service-color": color,
    aspectRatio,
  } as CSSProperties

  return (
    <article className="hold-test-card" style={styleVars}>
      <div className="hold-test-card__media" aria-hidden />
      <div className="hold-test-card__overlay" aria-hidden />

      <div className="hold-test-card__content">
        <div className="hold-test-card__head">
          <span className="hold-test-card__avatar" aria-hidden>
            {initials}
          </span>
          <span className="hold-test-card__name">{testimonio.nombre}</span>
        </div>

        <div className="hold-test-card__bottom">
          <p className="hold-test-card__quote">{testimonio.texto}</p>
          <div className="hold-test-card__meta">
            <span className="hold-test-card__rol">{testimonio.rol}</span>
            <span className="hold-test-card__chip">
              {SERVICIO_NOMBRE[testimonio.servicio]}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
