import type { CSSProperties } from "react"
import { Button } from "@/components/ui/Button"
import { WHATSAPP_URL } from "@/data/content"
import "./hero-cards.css"

/* Paleta HOLD para las cards — esta animación es la excepción al monocromo.
 * Acá juegan todos los Pantone de marca. */
const HOLD_COLORS = [
  { bg: "#1D1D1B", fg: "#FAFFFA" }, // Black
  { bg: "#E96951", fg: "#FAFFFA" }, // Coral
  { bg: "#FAFFFA", fg: "#1D1D1B" }, // Star White
  { bg: "#2B63FF", fg: "#FAFFFA" }, // Bright Blue (Pantone HOLD nuevo)
  { bg: "#EBBDD9", fg: "#1D1D1B" }, // Soft Pink
  { bg: "#F9423A", fg: "#FAFFFA" }, // Warm Red
] as const

type CardSpec = {
  col: number
  row: number
  colSpan: number
  rowSpan: number
  rotate: number
  colorIdx: number
  glyph: string
}

const CARDS: readonly CardSpec[] = [
  { col: 1,  row: 1, colSpan: 3, rowSpan: 2, rotate: -8,  colorIdx: 0, glyph: "h" },
  { col: 4,  row: 1, colSpan: 2, rowSpan: 2, rotate: 4,   colorIdx: 1, glyph: "h" },
  { col: 6,  row: 1, colSpan: 3, rowSpan: 3, rotate: -3,  colorIdx: 3, glyph: "h" },
  { col: 9,  row: 1, colSpan: 2, rowSpan: 2, rotate: 7,   colorIdx: 2, glyph: "h" },
  { col: 11, row: 1, colSpan: 2, rowSpan: 3, rotate: -5,  colorIdx: 4, glyph: "h" },

  { col: 1,  row: 3, colSpan: 2, rowSpan: 2, rotate: 6,   colorIdx: 4, glyph: "h" },
  { col: 3,  row: 3, colSpan: 2, rowSpan: 2, rotate: -4,  colorIdx: 5, glyph: "h" },
  { col: 5,  row: 4, colSpan: 2, rowSpan: 2, rotate: 9,   colorIdx: 2, glyph: "h" },
  { col: 9,  row: 3, colSpan: 2, rowSpan: 2, rotate: -7,  colorIdx: 1, glyph: "h" },

  { col: 1,  row: 5, colSpan: 3, rowSpan: 2, rotate: -6,  colorIdx: 3, glyph: "h" },
  { col: 4,  row: 5, colSpan: 2, rowSpan: 2, rotate: 5,   colorIdx: 0, glyph: "h" },
  { col: 7,  row: 5, colSpan: 3, rowSpan: 2, rotate: -2,  colorIdx: 5, glyph: "h" },
  { col: 10, row: 5, colSpan: 3, rowSpan: 2, rotate: 8,   colorIdx: 2, glyph: "h" },
] as const

/* Animación: cada card entra con delay = i * STAGGER_S. Después de
 * ENTRANCE_TOTAL_S aparece la frase y los CTAs. CSS-driven, sin JS. */
const STAGGER_S = 0.09
const CARD_DUR_S = 0.55
const ENTRANCE_TOTAL_S = CARDS.length * STAGGER_S + CARD_DUR_S * 0.4 // ~1.4s

/**
 * Hero estilo manual de marca: mural de cards rotadas con la "h" cursiva
 * gigante (logo HOLD). Entrance staggered en CSS keyframes → estado final
 * estático. Después aparece la frase y los CTAs. Server component, sin JS.
 */
export function HeroCards() {
  return (
    <section className="hold-hero-cards" aria-label="Inicio">
      <h1 className="hold-hero-cards__sr">Sostener sin perder la esencia.</h1>

      <div className="hold-hero-cards__grid" aria-hidden>
        {CARDS.map((c, i) => {
          const color = HOLD_COLORS[c.colorIdx]
          const styleVars = {
            "--rotate": `${c.rotate}deg`,
            "--rotate-start": `${c.rotate - 24}deg`,
            "--delay": `${i * STAGGER_S}s`,
            "--dur": `${CARD_DUR_S}s`,
            gridColumn: `${c.col} / span ${c.colSpan}`,
            gridRow: `${c.row} / span ${c.rowSpan}`,
            background: color.bg,
            color: color.fg,
          } as CSSProperties
          return (
            <div key={i} className="hold-hero-cards__card" style={styleVars}>
              <span className="hold-hero-cards__glyph">{c.glyph}</span>
            </div>
          )
        })}
      </div>

      <div
        className="hold-hero-cards__phrase-wrap"
        style={{ "--delay": `${ENTRANCE_TOTAL_S + 0.05}s` } as CSSProperties}
      >
        <p className="hold-hero-cards__phrase">
          Acá no te tiramos la posta:{" "}
          <em>te acompañamos a crear la tuya.</em>
        </p>
      </div>

      <div className="hold-hero-cards__cta-wrap">
        <div
          className="hold-hero-cards__cta"
          style={{ "--delay": `${ENTRANCE_TOTAL_S + 0.35}s` } as CSSProperties}
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
        </div>
      </div>
    </section>
  )
}
