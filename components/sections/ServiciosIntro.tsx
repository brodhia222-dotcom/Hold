import type { CSSProperties } from "react"
import Link from "next/link"
import { servicios } from "@/data/content"
import "./servicios-intro.css"

/**
 * Section 2 del HeroScrollStack.
 * Pantalla completa centrada que presenta los 3 servicios.
 * El detalle (cards con media) llega después en ServiciosPreview.
 */
export function ServiciosIntro() {
  return (
    <div className="hold-servicios-intro" id="servicios">
      <p className="hold-servicios-intro__eyebrow">01 · Servicios</p>

      <h2 className="hold-servicios-intro__title">
        Tres formas de <em>sostener</em> tu marca.
      </h2>

      <p className="hold-servicios-intro__sub">
        Cada servicio con su color, su lógica y un equipo dedicado.
        Elegí por dónde te suena empezar.
      </p>

      <ul className="hold-servicios-intro__list">
        {servicios.map((s) => {
          const styleVars = { "--service-color": s.acento } as CSSProperties
          return (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="hold-servicios-intro__item"
                style={styleVars}
              >
                <span className="hold-servicios-intro__item-num">{s.numero}</span>
                <span className="hold-servicios-intro__item-dot" aria-hidden />
                {s.nombre}
              </Link>
            </li>
          )
        })}
      </ul>

      <span className="hold-servicios-intro__hint" aria-hidden>
        <span className="hold-servicios-intro__hint-line" />
        Ver detalle
        <span className="hold-servicios-intro__hint-line" />
      </span>
    </div>
  )
}
