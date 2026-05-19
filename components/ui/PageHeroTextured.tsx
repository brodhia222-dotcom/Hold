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
  /** Versión compacta: title font-size y altura más chicos.
   *  Útil para títulos largos que de otra forma rompen el peek. */
  compact?: boolean
}

/**
 * Hero oscuro para páginas internas con shader Three.js de líneas
 * concéntricas coloreadas con la paleta HOLD. Grain + vignette CSS
 * encima del shader, texto editorial encima de todo. El shader es
 * reactivo al AccentSwitcher y respeta prefers-reduced-motion.
 */
export function PageHeroTextured({
  eyebrow,
  titulo,
  intro,
  actions,
  compact = false,
}: Props) {
  return (
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
  )
}
