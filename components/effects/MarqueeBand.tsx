import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import "./marquee.css"

type Props = {
  /** Items que se repiten en loop. */
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
 * Marquee infinita seamless con 2 grupos lado a lado.
 *
 * Truco: cada grupo es un <ul> con gap interno = G. El track contiene los
 * dos grupos con gap = G entre ellos. La animación translatea
 * `calc(-50% - G/2)` que equivale exacto al ancho del primer grupo + el
 * gap entre grupos → el segundo grupo queda donde estaba el primero al
 * inicio. Sin half-gap residual.
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

  const renderGroup = (keyPrefix: string, ariaHidden = false) => (
    <ul
      className="hold-marquee__group"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((item, i) => (
        <li
          key={`${keyPrefix}-${i}`}
          className={cn(
            "hold-marquee__item",
            italic && "hold-marquee__item--em",
          )}
        >
          {item}
          <span className="hold-marquee__sep" aria-hidden />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={cn("hold-marquee", invert && "hold-marquee--invert", className)}
      style={styleVars}
      aria-hidden
    >
      <div className="hold-marquee__viewport">
        <div className="hold-marquee__track">
          {renderGroup("a")}
          {renderGroup("b", true)}
        </div>
      </div>
    </div>
  )
}
