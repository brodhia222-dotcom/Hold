import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import "./marquee.css"

type Props = {
  /** Items que se repiten en loop. Cada item se renderiza separado por un cuadrado de color. */
  items: readonly string[]
  /** Duración total de un loop completo. Default 40s. */
  durationSec?: number
  /** Color del separador (cuadrado entre items). Default: coral. */
  separatorColor?: string
  /** Variante invertida (fondo negro, texto blanco). */
  invert?: boolean
  /** Items en italic 400 — más editorial. */
  italic?: boolean
  className?: string
}

/**
 * Marquee infinita seamless: la track se duplica y se anima -50% para que el
 * loop quede continuo. Pause on hover. Honra prefers-reduced-motion (CSS).
 */
export function MarqueeBand({
  items,
  durationSec = 40,
  separatorColor,
  invert = false,
  italic = false,
  className,
}: Props) {
  const styleVars = {
    "--marquee-duration": `${durationSec}s`,
    "--marquee-sep": separatorColor ?? undefined,
  } as CSSProperties

  return (
    <div
      className={cn("hold-marquee", invert && "hold-marquee--invert", className)}
      style={styleVars}
      aria-hidden
    >
      <div className="hold-marquee__viewport">
        {/* Dos tracks idénticas para loop seamless. La animación mueve -50% del total. */}
        {[0, 1].map((trackIdx) => (
          <div className="hold-marquee__track" key={trackIdx}>
            {items.map((item, i) => (
              <span
                key={`${trackIdx}-${i}`}
                className={cn(
                  "hold-marquee__item",
                  italic && "hold-marquee__item--em",
                )}
              >
                {item}
                <span className="hold-marquee__sep" aria-hidden />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
