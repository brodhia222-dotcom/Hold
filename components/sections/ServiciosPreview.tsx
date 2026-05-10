import { SectionHeader } from "@/components/ui/SectionHeader"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { servicios } from "@/data/content"
import "./servicios-preview.css"

const MEDIA_LABELS: Record<string, string> = {
  academy: "Foto del aula / clase en vivo",
  "redes-sociales": "Mockup de feed / posts",
  performance: "Captura de dashboard / data",
}

export function ServiciosPreview() {
  return (
    <section className="hold-servicios" id="servicios" aria-label="Servicios">
      <div className="hold-servicios__inner">
        <div className="hold-servicios__header" data-reveal>
          <SectionHeader
            numero="01"
            eyebrow="Servicios"
            titulo="Tres formas de sostener tu marca."
            intro="Cada servicio con su color, su lógica y un equipo dedicado."
          />
        </div>

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
