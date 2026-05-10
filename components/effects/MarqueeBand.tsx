import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import "./marquee.css"

type Props = {
  /** Items que se repiten en loop. Cada item se renderiza separado por un cuadrado de color. */
  items: readonly string[]
  /** Duración total de un loop completo. Default 50s. */
  durationSec?: number
  /** Color del separador (cuadrado entre items). Default: --accent. */
  separatorColor?: string
  /** Variante invertida (fondo negro, texto blanco). */
  invert?: boolean
  /** Items en italic 400 — más editorial. */
  italic?: boolean
  className?: string
}

/**
 * Marquee infinita seamless. Truco para que no quede un "gap visible" en el
 * punto del loop: cada item lleva `margin-right` (NO se usa flex `gap`). Así
 * el total width = 2N * (item + margin-right) y `translate -50%` cae exacto
 * en el inicio del item N+1 (la copia del primero). Sin half-gap de offset.
 */
export function MarqueeBand({
  items,
  durationSec = 50,
  separatorColor,
  invert = false,
  italic = false,
  className,
}: Props) {
  const styleVars = {
    "--marquee-duration": `${durationSec}s`,
    "--marquee-sep": separatorColor ?? undefined,
  } as CSSProperties

  // Items duplicados: el track se anima -50% y la mitad B reemplaza a la A sin salto.
  const doubled = [...items, ...items]

  return (
    <div
      className={cn("hold-marquee", invert && "hold-marquee--invert", className)}
      style={styleVars}
      aria-hidden
    >
      <div className="hold-marquee__viewport">
        <div className="hold-marquee__track">
          {doubled.map((item, i) => (
            <span
              key={i}
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
      </div>
    </div>
  )
}
