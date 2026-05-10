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
  const [academy, redes, performance] = servicios

  return (
    <section className="hold-servicios" id="servicios" aria-label="Servicios">
      <div className="hold-servicios__inner">
        <div className="hold-servicios__header" data-reveal>
          <SectionHeader
            numero="01"
            eyebrow="Servicios"
            titulo="Tres formas de sostener tu marca."
            intro="Cada servicio con su color, su lógica y un equipo dedicado. Elegí por dónde te suena empezar."
          />
        </div>

        <div className="hold-servicios__grid">
          <div className="hold-servicios__feature">
            <ServiceCard
              servicio={academy}
              variant="feature"
              mediaLabel={MEDIA_LABELS.academy}
            />
          </div>

          <div className="hold-servicios__split-a">
            <ServiceCard
              servicio={redes}
              variant="reverse"
              mediaLabel={MEDIA_LABELS["redes-sociales"]}
            />
          </div>

          <div className="hold-servicios__split-b">
            <ServiceCard
              servicio={performance}
              variant="default"
              mediaLabel={MEDIA_LABELS.performance}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
