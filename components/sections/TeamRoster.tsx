import { Fragment } from "react"
import { team } from "@/data/content"
import "./team-roster.css"

/**
 * Listado editorial del equipo extendido. Cada área es una fila con
 * el label a la izquierda y los nombres a la derecha con tipografía
 * grande. Separadores tipográficos (·) entre nombres para que respire.
 */
export function TeamRoster() {
  return (
    <div className="hold-team">
      {team.map((area) => (
        <div key={area.area} className="hold-team__area">
          <p className="hold-team__label">{area.area}</p>
          <ul className="hold-team__members" role="list">
            {area.miembros.map((nombre, i) => (
              <Fragment key={nombre}>
                <li className="hold-team__member">{nombre}</li>
                {i < area.miembros.length - 1 ? (
                  <span className="hold-team__sep" aria-hidden>
                    ·
                  </span>
                ) : null}
              </Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
