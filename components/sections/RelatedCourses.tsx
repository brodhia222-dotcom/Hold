import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Curso } from "@/types"
import { cursos } from "@/data/content"
import "./related-courses.css"

type Props = {
  /** Slug del curso actual (se excluye del grid). */
  currentSlug: string
}

/**
 * Grid 3-col de "otros cursos" al final del detalle. Filtra el curso
 * actual y muestra el resto con su ID, nombre, formato y flecha.
 * Click → navega al detalle de ese curso (link interno).
 */
export function RelatedCourses({ currentSlug }: Props) {
  const otros = cursos.filter((c) => c.slug !== currentSlug)

  return (
    <div className="hold-related">
      {otros.map((curso) => (
        <Link
          key={curso.slug}
          href={`/academy/${curso.slug}`}
          className="hold-related__card"
          aria-label={`Ver curso ${curso.id} ${curso.nombre}`}
        >
          <div className="hold-related__media">
            <span className="hold-related__id">{curso.id}</span>
          </div>
          <div className="hold-related__body">
            <h3 className="hold-related__nombre">{curso.nombre}</h3>
            <div className="hold-related__meta">
              <span>{curso.formato}</span>
              <ArrowUpRight
                className="hold-related__arrow"
                size={18}
                strokeWidth={1.5}
                aria-hidden
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
