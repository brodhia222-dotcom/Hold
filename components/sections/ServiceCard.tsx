import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Servicio } from "@/types"
import { cn } from "@/lib/utils"
import "./service-card.css"

type Props = {
  servicio: Servicio
  /** Variant del layout asimétrico:
   *  - feature: full-width, body izq + media der grande (Academy)
   *  - reverse: media izq + body der (Redes)
   *  - default: body izq + media der (Performance) */
  variant?: "feature" | "reverse" | "default"
  /** Etiqueta inferior en la media (ej. "Foto del aula / clase en vivo") */
  mediaLabel?: string
  className?: string
}

export function ServiceCard({
  servicio,
  variant = "default",
  mediaLabel = "Imagen / Video",
  className,
}: Props) {
  const styleVars = { "--service-color": servicio.acento } as CSSProperties

  return (
    <article
      className={cn(
        "hold-service-card",
        variant === "feature" && "hold-service-card--feature",
        variant === "reverse" && "hold-service-card--reverse",
        className,
      )}
      style={styleVars}
      data-reveal
    >
      <div className="hold-service-card__media" aria-hidden>
        <span className="hold-service-card__media-num">{servicio.numero}</span>
        <span className="hold-service-card__media-label">{mediaLabel}</span>
      </div>

      <div className="hold-service-card__body">
        <span className="hold-service-card__num" aria-hidden>
          {servicio.numero}
        </span>

        <span className="hold-service-card__eyebrow">
          <span className="hold-service-card__eyebrow-dot" aria-hidden />
          {servicio.eyebrow}
        </span>

        <h3 className="hold-service-card__title">{servicio.nombre}</h3>

        <p className="hold-service-card__sub">{servicio.tagline}</p>

        <p className="hold-service-card__desc">{servicio.descripcion}</p>

        <ul className="hold-service-card__items">
          {servicio.items.slice(0, 4).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link
          href={servicio.href}
          className="hold-service-card__cta"
          aria-label={`Ver ${servicio.nombre}`}
        >
          <span>Quiero saber más</span>
          <span className="hold-service-card__cta-arrow">
            <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
          </span>
        </Link>
      </div>
    </article>
  )
}
