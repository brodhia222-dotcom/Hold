import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import type { Servicio } from "@/types"
import { cn } from "@/lib/utils"
import "./service-card.css"

type Props = {
  servicio: Servicio
  className?: string
}

/**
 * Card pricing-style sobre fondo oscuro con efecto liquid glass.
 * Anatomía vertical: eyebrow → título → tagline → precio → divider →
 * "Lo que incluye" + lista → CTA full-width.
 * Border-top con el color del servicio como única seña de identidad.
 */
export function ServiceCard({ servicio, className }: Props) {
  const styleVars = { "--service-color": servicio.acento } as CSSProperties

  return (
    <article
      className={cn("hold-service-card", className)}
      style={styleVars}
    >
      <div className="hold-service-card__head">
        <span className="hold-service-card__eyebrow">
          <span className="hold-service-card__eyebrow-dot" aria-hidden />
          {servicio.eyebrow}
        </span>
        <span className="hold-service-card__num" aria-hidden>
          {servicio.numero}
        </span>
      </div>

      <h3 className="hold-service-card__title">{servicio.nombre}</h3>

      <div className="hold-service-card__price">
        <span className="hold-service-card__price-from">Desde</span>
        <span className="hold-service-card__price-row">
          <span className="hold-service-card__price-amount">
            USD {servicio.precioDesde}
          </span>
          {servicio.precioPeriodo ? (
            <span className="hold-service-card__price-period">
              / {servicio.precioPeriodo}
            </span>
          ) : null}
        </span>
      </div>

      <div className="hold-service-card__divider" aria-hidden />

      <p className="hold-service-card__features-label">Lo que incluye</p>
      <ul className="hold-service-card__features">
        {servicio.incluye.map((item) => (
          <li key={item}>
            <Check size={14} strokeWidth={2.25} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={servicio.href}
        className="hold-service-card__cta"
        aria-label={`Ver detalle de ${servicio.nombre}`}
      >
        <span>Quiero saber más</span>
        <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
      </Link>
    </article>
  )
}
