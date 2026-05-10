import { ServiceCard } from "@/components/sections/ServiceCard"
import { servicios } from "@/data/content"
import "./servicios-preview.css"

const MEDIA_LABELS: Record<string, string> = {
  academy: "Foto del aula / clase en vivo",
  "redes-sociales": "Mockup de feed / posts",
  performance: "Captura de dashboard / data",
}

/**
 * Grid de las 3 cards de servicio.
 * El header (eyebrow + título + intro) vive en ServiciosIntro
 * (Section 2 del HeroScrollStack), no se duplica acá.
 */
export function ServiciosPreview() {
  return (
    <section className="hold-servicios" aria-label="Detalle de servicios">
      <div className="hold-servicios__inner">
        <div className="hold-servicios__grid">
          {servicios.map((s) => (
            <ServiceCard
              key={s.slug}
              servicio={s}
              mediaLabel={MEDIA_LABELS[s.slug] ?? "Imagen / Video"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
