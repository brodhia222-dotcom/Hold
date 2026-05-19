import type { ReactNode } from "react"
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
}

/**
 * Hero oscuro para páginas internas. Fondo negro HOLD + grano fino +
 * tres orbs del var(--accent) que orbitan lentamente en distinto tempo.
 * Texto blanco editorial. Performance: 100% CSS, sin WebGL.
 *
 * El atributo data-hero-theme="dark" lo detecta el Header para virar
 * los textos a blanco automáticamente.
 */
export function PageHeroTextured({
  eyebrow,
  titulo,
  intro,
  actions,
}: Props) {
  return (
    <header className="hold-hero-textured" data-hero-theme="dark">
      <div className="hold-hero-textured__orbs" aria-hidden>
        <span className="hold-hero-textured__orb hold-hero-textured__orb--1" />
        <span className="hold-hero-textured__orb hold-hero-textured__orb--2" />
        <span className="hold-hero-textured__orb hold-hero-textured__orb--3" />
      </div>
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
