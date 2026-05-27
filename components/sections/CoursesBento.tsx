import { ArrowUpRight } from "lucide-react"
import { cursos, waUrlCurso } from "@/data/content"
import "./courses-bento.css"

/**
 * Bento de cursos para Academy. Fusiona el ex-BentoTeach (asimetría
 * editorial) con el ex-CoursesShowcase (info de curso + click a
 * WhatsApp). Cada celda muestra siempre: ID, status badge, nombre,
 * precio y formato. La celda hero (primera) muestra también la
 * descripción. Al hover: media scale + accent overlay + border accent.
 */
export function CoursesBento() {
  return (
    <div className="hold-courses-bento">
      {cursos.map((curso) => (
        <a
          key={curso.id}
          href={waUrlCurso(curso)}
          target="_blank"
          rel="noopener noreferrer"
          className="hold-courses-bento__card"
          aria-label={`Consultar por WhatsApp el curso ${curso.id} ${curso.nombre}`}
        >
          <div className="hold-courses-bento__media" aria-hidden />
          <div className="hold-courses-bento__overlay" aria-hidden />

          <div className="hold-courses-bento__head">
            <span className="hold-courses-bento__id">{curso.id}</span>
            <span className="hold-courses-bento__status">
              <span
                className="hold-courses-bento__status-dot"
                data-estado={curso.estado}
                aria-hidden
              />
              {curso.estado}
            </span>
          </div>

          <div className="hold-courses-bento__body">
            <h3 className="hold-courses-bento__nombre">{curso.nombre}</h3>

            {curso.descripcion ? (
              <p className="hold-courses-bento__desc">{curso.descripcion}</p>
            ) : null}

            <div className="hold-courses-bento__meta">
              <div className="hold-courses-bento__precio">
                {curso.precio ? (
                  <span className="hold-courses-bento__precio-amount">
                    {curso.precio}
                  </span>
                ) : null}
                <span className="hold-courses-bento__precio-formato">
                  {curso.formato}
                </span>
              </div>
              <ArrowUpRight
                className="hold-courses-bento__arrow"
                size={20}
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
