"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
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
 * Seamless robusto: medimos el ancho real del primer grupo + el gap entre
 * grupos en JS, y seteamos `--marquee-distance` (en píxeles). La animación
 * traduce exactamente esa distancia → el segundo grupo aterriza pixel-exacto
 * donde estaba el primero al iniciar. Sin half-gap residual ni jumps.
 */
export function MarqueeBand({
  items,
  durationSec = 50,
  separatorColor,
  invert = false,
  italic = false,
  className,
}: Props) {
  const groupRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState<string>("50%")

  useEffect(() => {
    const group = groupRef.current
    const container = containerRef.current
    if (!group || !container) return

    const measure = () => {
      const groupRect = group.getBoundingClientRect()
      const trackGap =
        parseFloat(
          getComputedStyle(group.parentElement ?? group).gap || "0",
        ) || 28
      // group_width + gap = exact px distance for group B to land where A started.
      const px = Math.round(groupRect.width + trackGap)
      container.style.setProperty("--marquee-distance", `${px}px`)
      setDistance(`${px}px`)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(group)
    window.addEventListener("resize", measure)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [items])

  const styleVars = {
    "--marquee-duration": `${durationSec}s`,
    "--marquee-sep": separatorColor ?? undefined,
    "--marquee-distance": distance,
  } as CSSProperties

  const renderGroup = (
    keyPrefix: string,
    ref?: React.RefObject<HTMLUListElement | null>,
    ariaHidden = false,
  ) => (
    <ul
      ref={ref}
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
      ref={containerRef}
      className={cn("hold-marquee", invert && "hold-marquee--invert", className)}
      style={styleVars}
      aria-hidden
    >
      <div className="hold-marquee__viewport">
        <div className="hold-marquee__track">
          {renderGroup("a", groupRef)}
          {renderGroup("b", undefined, true)}
        </div>
      </div>
    </div>
  )
}
