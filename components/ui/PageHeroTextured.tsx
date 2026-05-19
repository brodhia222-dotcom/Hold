import type { ReactNode } from "react"
import { ShaderAnimation } from "./ShaderAnimation"
import "./page-hero-textured.css"

type Props = {
  /** Eyebrow text (ej. "Educación · 01"). */
  eyebrow: string
  /** Título grande del hero (H1). Acepta <em> para italic + acento. */
  titulo: ReactNode
  /** Sub/intro opcional. */
  intro?: ReactNode
  /** CTAs (típicamente 1-2 botones). */
  actions?: ReactNode
  /** Versión compacta: title font-size más chico para títulos largos. */
  compact?: boolean
}

/**
 * Hero oscuro para páginas internas con shader Three.js de líneas
 * concéntricas coloreadas con la paleta HOLD + trail residual debajo
 * (banda de fade negro → bg con grano) para que la transición al
 * contenido blanco no sea abrupta.
 *
 * Altura fija (72svh) para que las 3 páginas de servicio queden
 * exactamente del mismo tamaño, sin depender del largo del contenido.
 */
export function PageHeroTextured({
  eyebrow,
  titulo,
  intro,
  actions,
  compact = false,
}: Props) {
  return (
    <>
      <header
        className="hold-hero-textured"
        data-hero-theme="dark"
        data-compact={compact ? "true" : undefined}
      >
        <ShaderAnimation />
        <div className="hold-hero-textured__softener" aria-hidden />
        <div className="hold-hero-textured__grain" aria-hidden />
        <div className="hold-hero-textured__vignette" aria-hidden />

        <div className="hold-hero-textured__content">
          <p className="hold-hero-textured__eyebrow">{eyebrow}</p>
          <h1 className="hold-hero-textured__title">{titulo}</h1>
          {intro ? (
            <p className="hold-hero-textured__intro">{intro}</p>
          ) : null}
          {actions ? (
            <div className="hold-hero-textured__actions">{actions}</div>
          ) : null}
        </div>
      </header>

      {/* Trail residual: banda de transición con fade del negro al bg
          y grano sutil que continúa el "feel" del shader sin tapar el
          contenido que sigue. */}
      <div className="hold-hero-trail" aria-hidden>
        <div className="hold-hero-trail__grain" />
      </div>
    </>
  )
}
