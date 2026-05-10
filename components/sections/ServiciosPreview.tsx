import { ServiceCard } from "@/components/sections/ServiceCard"
import { servicios } from "@/data/content"
import "./servicios-preview.css"

/**
 * Sección de servicios sobre fondo negro con blobs de color difuminados.
 * Las cards usan backdrop-filter para crear glass real (los blobs detrás
 * dan color al blur — sin blobs el "glass" se ve plano sobre negro).
 *
 * Reveal entrance: cada card emerge desde abajo con blur que se desblurea
 * (efecto liquid glass) en stagger.
 */
export function ServiciosPreview() {
  return (
    <section
      id="servicios"
      className="hold-servicios"
      aria-label="Servicios"
    >
      {/* Blobs de fondo: sin estos el backdrop-filter de las cards no tiene
          color que blurrear y el glass effect se ve plano. */}
      <div className="hold-servicios__bg" aria-hidden>
        <span className="hold-servicios__blob hold-servicios__blob--coral" />
        <span className="hold-servicios__blob hold-servicios__blob--orange" />
        <span className="hold-servicios__blob hold-servicios__blob--red" />
      </div>

      <div className="hold-servicios__inner">
        <header className="hold-servicios__header" data-reveal>
          <p className="hold-servicios__eyebrow">01 · Servicios</p>
          <h2 className="hold-servicios__title">
            Tres formas de <em>sostener</em> tu marca.
          </h2>
          <p className="hold-servicios__intro">
            Cada servicio con su color, su lógica y un equipo dedicado.
            Elegí por dónde te suena empezar.
          </p>
        </header>

        <div className="hold-servicios__grid">
          {servicios.map((s, i) => (
            <div
              key={s.slug}
              className="hold-servicios__card-wrap"
              data-reveal
              data-reveal-delay={`0.${i + 1}`}
            >
              <ServiceCard servicio={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
