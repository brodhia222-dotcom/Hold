import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Servicio } from "@/types"
import { cn } from "@/lib/utils"
import "./service-card.css"

type Props = {
  servicio: Servicio
  /** Etiqueta inferior en la media (ej. "Foto del aula / clase en vivo") */
  mediaLabel?: string
  className?: string
}

/**
 * Card compacta vertical: media (4:3 con hatch del color) arriba,
 * body (eyebrow + título + tagline + CTA) abajo. Hover llena la card del
 * color del servicio (wipe vertical 0.5s).
 */
export function ServiceCard({
  servicio,
  mediaLabel = "Imagen / Video",
  className,
}: Props) {
  const styleVars = { "--service-color": servicio.acento } as CSSProperties

  return (
    <Link
      href={servicio.href}
      className={cn("hold-service-card", className)}
      style={styleVars}
      data-reveal
      aria-label={`Ver ${servicio.nombre}`}
    >
      <div className="hold-service-card__media" aria-hidden>
        <span className="hold-service-card__media-num">{servicio.numero}</span>
        <span className="hold-service-card__media-label">{mediaLabel}</span>
      </div>

      <div className="hold-service-card__body">
        <span className="hold-service-card__eyebrow">
          <span className="hold-service-card__eyebrow-dot" aria-hidden />
          {servicio.eyebrow}
        </span>

        <h3 className="hold-service-card__title">{servicio.nombre}</h3>

        <p className="hold-service-card__sub">{servicio.tagline}</p>

        <span className="hold-service-card__cta">
          Quiero saber más
          <span className="hold-service-card__cta-arrow">
            <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden />
          </span>
        </span>
      </div>
    </Link>
  )
}
