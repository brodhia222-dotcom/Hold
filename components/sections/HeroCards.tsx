"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_URL } from "@/data/content"
import { EASE_HOLD } from "@/lib/motion"
import "./hero-cards.css"

/* Paleta HOLD para las cards — esta animación es la excepción al monocromo
 * (igual que era el HeroParticles antes). Acá juegan todos los Pantone. */
const HOLD_COLORS = [
  { bg: "#1D1D1B", fg: "#FAFFFA" }, // Black
  { bg: "#E96951", fg: "#FAFFFA" }, // Coral
  { bg: "#FAFFFA", fg: "#1D1D1B" }, // Star White
  { bg: "#2B63FF", fg: "#FAFFFA" }, // Bright Blue (Pantone HOLD nuevo)
  { bg: "#EBBDD9", fg: "#1D1D1B" }, // Soft Pink
  { bg: "#F9423A", fg: "#FAFFFA" }, // Warm Red
] as const

/* Cards posicionadas en grid absoluto. Cada una con su rotation final,
 * letra (forma "l" cursiva), y posición. Estilo poster del manual de marca. */
type CardSpec = {
  /** Posición grid-column-start / grid-row-start (1-12). */
  col: number
  row: number
  /** Span (1-N). */
  colSpan: number
  rowSpan: number
  /** Rotation final en grados. */
  rotate: number
  /** Índice del color en HOLD_COLORS. */
  colorIdx: number
  /** Caracter mostrado dentro (típicamente "l" cursiva). */
  glyph: string
}

const CARDS: readonly CardSpec[] = [
  { col: 1,  row: 1, colSpan: 3, rowSpan: 2, rotate: -8,  colorIdx: 0, glyph: "l" },
  { col: 4,  row: 1, colSpan: 2, rowSpan: 2, rotate: 4,   colorIdx: 1, glyph: "l" },
  { col: 6,  row: 1, colSpan: 3, rowSpan: 3, rotate: -3,  colorIdx: 3, glyph: "l" },
  { col: 9,  row: 1, colSpan: 2, rowSpan: 2, rotate: 7,   colorIdx: 2, glyph: "l" },
  { col: 11, row: 1, colSpan: 2, rowSpan: 3, rotate: -5,  colorIdx: 4, glyph: "l" },

  { col: 1,  row: 3, colSpan: 2, rowSpan: 2, rotate: 6,   colorIdx: 4, glyph: "l" },
  { col: 3,  row: 3, colSpan: 2, rowSpan: 2, rotate: -4,  colorIdx: 5, glyph: "l" },
  { col: 5,  row: 4, colSpan: 2, rowSpan: 2, rotate: 9,   colorIdx: 2, glyph: "l" },
  { col: 9,  row: 3, colSpan: 2, rowSpan: 2, rotate: -7,  colorIdx: 1, glyph: "l" },

  { col: 1,  row: 5, colSpan: 3, rowSpan: 2, rotate: -6,  colorIdx: 3, glyph: "l" },
  { col: 4,  row: 5, colSpan: 2, rowSpan: 2, rotate: 5,   colorIdx: 0, glyph: "l" },
  { col: 7,  row: 5, colSpan: 3, rowSpan: 2, rotate: -2,  colorIdx: 5, glyph: "l" },
  { col: 10, row: 5, colSpan: 3, rowSpan: 2, rotate: 8,   colorIdx: 2, glyph: "l" },
] as const

const ENTRANCE_TOTAL_S = 1.6
const STAGGER_S = ENTRANCE_TOTAL_S / CARDS.length

export function HeroCards() {
  const reduced = useReducedMotion()

  return (
    <section className="hold-hero-cards" aria-label="Inicio">
      <h1 className="hold-hero-cards__sr">Sostener sin perder la esencia.</h1>

      <div className="hold-hero-cards__grid" aria-hidden>
        {CARDS.map((c, i) => {
          const color = HOLD_COLORS[c.colorIdx]
          const finalRotate = c.rotate
          // Entrance: parte de rotación opuesta + scale 0.6, llega a rotación final + scale 1.
          const initial = reduced
            ? { opacity: 1, rotate: finalRotate, scale: 1 }
            : { opacity: 0, rotate: finalRotate - 24, scale: 0.6 }
          const animate = reduced
            ? { opacity: 1, rotate: finalRotate, scale: 1 }
            : { opacity: 1, rotate: finalRotate, scale: 1 }
          return (
            <motion.div
              key={i}
              className="hold-hero-cards__card"
              style={{
                gridColumn: `${c.col} / span ${c.colSpan}`,
                gridRow: `${c.row} / span ${c.rowSpan}`,
                background: color.bg,
                color: color.fg,
              }}
              initial={initial}
              animate={animate}
              transition={{
                delay: reduced ? 0 : i * STAGGER_S,
                duration: reduced ? 0 : 0.55,
                ease: EASE_HOLD,
              }}
            >
              <span className="hold-hero-cards__glyph">{c.glyph}</span>
            </motion.div>
          )
        })}
      </div>

      <div className="hold-hero-cards__cta-wrap">
        <motion.div
          className="hold-hero-cards__cta"
          initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduced ? 0 : ENTRANCE_TOTAL_S + 0.1,
            duration: 0.5,
            ease: EASE_HOLD,
          }}
        >
          <Button
            size="large"
            href={WHATSAPP_URL}
            external
            ariaLabel="Hablemos por WhatsApp"
          >
            Hablemos
          </Button>
          <Button
            size="large"
            variant="secondary"
            href="#servicios"
            arrow={false}
          >
            Servicios
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
