import type { CSSProperties } from "react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"
import { servicios, testimonios } from "@/data/content"
import type { ServicioSlug } from "@/types"
import "./clientes-preview.css"

const SERVICIO_NOMBRE: Record<ServicioSlug, string> = {
  academy: "Hold Academy",
  "redes-sociales": "Redes Sociales",
  performance: "Performance",
}

const SERVICIO_COLOR: Record<ServicioSlug, string> = Object.fromEntries(
  servicios.map((s) => [s.slug, s.acento]),
) as Record<ServicioSlug, string>

/** Devuelve un testimonio por servicio (el primero de cada uno). */
function pickHighlights() {
  const slugs: ServicioSlug[] = ["academy", "redes-sociales", "performance"]
  return slugs.map(
    (slug) => testimonios.find((t) => t.servicio === slug)!,
  )
}

export function ClientesPreview() {
  const highlights = pickHighlights()

  return (
    <section className="hold-clientes" aria-label="Clientes">
      <div className="hold-clientes__inner">
        <div className="hold-clientes__header">
          <div data-reveal>
            <SectionHeader
              numero="03"
              eyebrow="Clientes"
              titulo="Lo que dicen las marcas que confiaron."
              intro="Equipos chicos y grandes, marcas en construcción y consolidadas. Tres voces, tres servicios."
            />
          </div>
          <div className="hold-clientes__head-cta" data-reveal data-reveal-delay="0.2">
            <Button variant="secondary" href="/clientes" accentColor="#E96951">
              Ver todos los casos
            </Button>
          </div>
        </div>

        <div className="hold-clientes__grid">
          {highlights.map((t, i) => {
            const color = SERVICIO_COLOR[t.servicio]
            const styleVars = { "--service-color": color } as CSSProperties
            return (
              <article
                key={`${t.servicio}-${i}`}
                className="hold-clientes__card"
                style={styleVars}
                data-reveal
                data-reveal-delay={`0.${i * 1 + 1}`}
              >
                <span className="hold-clientes__quote" aria-hidden>
                  &ldquo;
                </span>
                <p className="hold-clientes__text">{t.texto}</p>
                <div className="hold-clientes__divider" />
                <div className="hold-clientes__footer">
                  <div className="hold-clientes__author">
                    <span className="hold-clientes__author-name">{t.nombre}</span>
                    <span className="hold-clientes__author-rol">{t.rol}</span>
                  </div>
                  <span className="hold-clientes__chip">
                    {SERVICIO_NOMBRE[t.servicio]}
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
