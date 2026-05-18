import { ArrowUpRight } from "lucide-react"
import { cursos, waUrlCurso } from "@/data/content"
import "./courses-table.css"

/**
 * Tabla editorial de cursos de Academy. Cada fila linkea al WhatsApp
 * con un mensaje pre-armado (helper `waUrlCurso`). Sin imágenes — el
 * peso lo lleva el ID, el nombre del curso y la grilla.
 */
export function CoursesTable() {
  return (
    <div className="hold-courses-table">
      {cursos.map((curso) => (
        <a
          key={curso.id}
          href={waUrlCurso(curso)}
          target="_blank"
          rel="noopener noreferrer"
          className="hold-courses-table__row"
          aria-label={`Consultar por WhatsApp el curso ${curso.id} ${curso.nombre}`}
        >
          <span className="hold-courses-table__id">{curso.id}</span>
          <h3 className="hold-courses-table__name">{curso.nombre}</h3>
          <span className="hold-courses-table__format">{curso.formato}</span>
          <span className="hold-courses-table__estado">
            <span
              className="hold-courses-table__dot"
              data-estado={curso.estado}
              aria-hidden
            />
            {curso.estado}
          </span>
          <ArrowUpRight
            className="hold-courses-table__arrow"
            size={20}
            strokeWidth={1.5}
            aria-hidden
          />
        </a>
      ))}
    </div>
  )
}
