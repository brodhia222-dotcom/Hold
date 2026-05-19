import { ArrowUpRight } from "lucide-react"
import { cursos, waUrlCurso } from "@/data/content"
import "./courses-showcase.css"

/**
 * Showcase visual de los 6 cursos en grid 3-col. Cada card es un link
 * a WhatsApp con mensaje pre-armado (`waUrlCurso`). La imagen es hatch
 * placeholder por ahora — se reemplaza por <Image /> cuando lleguen las
 * portadas reales.
 */
export function CoursesShowcase() {
  return (
    <div className="hold-courses-showcase">
      {cursos.map((curso) => (
        <a
          key={curso.id}
          href={waUrlCurso(curso)}
          target="_blank"
          rel="noopener noreferrer"
          className="hold-course-card"
          aria-label={`Consultar por WhatsApp el curso ${curso.id} ${curso.nombre}`}
        >
          <div className="hold-course-card__media">
            <span className="hold-course-card__media-id">{curso.id}</span>
            <span className="hold-course-card__media-arrow" aria-hidden>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </span>
            <span className="hold-course-card__estado-badge">
              <span
                className="hold-course-card__estado-dot"
                data-estado={curso.estado}
                aria-hidden
              />
              {curso.estado}
            </span>
          </div>
          <div className="hold-course-card__body">
            <h3 className="hold-course-card__name">{curso.nombre}</h3>
            <span className="hold-course-card__format">{curso.formato}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
