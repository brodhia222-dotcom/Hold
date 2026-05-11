import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"
import "./marquee.css"

type Props = {
  /** Items que se repiten en loop. */
  items: readonly string[]
  /** Duración total de un loop completo. Default 22s. */
  durationSec?: number
  /** Color del separador (cuadrado entre items). Default: --accent. */
  separatorColor?: string
  /** Variante invertida (fondo negro, texto blanco). */
  invert?: boolean
  /** Items en italic 400 — más editorial. */
  italic?: boolean
  className?: string
}

/* Cuántas veces repetimos el set completo de items. Con 6 copias y translate
 * -50%, la pista siempre supera 3x el viewport, así que NUNCA se ve espacio
 * vacío al borde derecho durante el cycle, incluso con items cortos y pocos. */
const REPEATS = 6

/**
 * Marquee infinita seamless. Truco:
 * - Cada item tiene `margin-right` (incluido el último). NO se usa flex `gap`.
 * - El total de la pista es 2N copias × (item + margin) = par exacto.
 * - `translate -50%` aterriza pixel-perfecto en el inicio de la copia espejo
 *   → al reiniciar la animación, lo que se ve es idéntico. Sin saltos.
 * - Repetimos los items 6 veces para que la pista siempre supere el viewport
 *   y nunca quede un hueco visible al final del cycle.
 */
export function MarqueeBand({
  items,
  durationSec = 22,
  separatorColor,
  invert = false,
  italic = false,
  className,
}: Props) {
  const styleVars = {
    "--marquee-duration": `${durationSec}s`,
    "--marquee-sep": separatorColor ?? undefined,
  } as CSSProperties

  // 6 copias del set completo → pista larga + seamless en -50%.
  const repeated = Array.from({ length: REPEATS }, () => items).flat()

  return (
    <div
      className={cn("hold-marquee", invert && "hold-marquee--invert", className)}
      style={styleVars}
      aria-hidden
    >
      <div className="hold-marquee__viewport">
        <div className="hold-marquee__track">
          {repeated.map((item, i) => (
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
