import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { MasonryGrid } from "@/components/effects/MasonryGrid"
import { TestimonialMasonryCard } from "@/components/sections/TestimonialMasonryCard"
import { testimonios } from "@/data/content"
import "./clientes-preview.css"

/**
 * Sección de Clientes inspirada en image-testimonial-grid (21st.dev),
 * adaptada al DS HOLD: paleta de marca, sin border-radius, hatch en
 * lugar de fotos reales.
 *
 * El MasonryGrid maneja sus propias columnas responsive (1/2/3/4)
 * según viewport. Cada card del MasonryGrid se anima individualmente
 * con blur fade-in al entrar al viewport (whileInView).
 */
export function ClientesPreview() {
  return (
    <section className="hold-clientes" aria-label="Clientes">
      <div className="hold-clientes__inner">
        <header className="hold-clientes__header">
          <div data-reveal>
            <p className="hold-clientes__eyebrow">03 · Clientes</p>
            <h2 className="hold-clientes__title">
              Lo que dicen las marcas que <em>confiaron</em>.
            </h2>
          </div>
          <div
            className="hold-clientes__head-cta"
            data-reveal
            data-reveal-delay="0.2"
          >
            <Button variant="secondary" href="/clientes">
              Ver todos los casos
              <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden />
            </Button>
          </div>
        </header>

        <MasonryGrid gap={4}>
          {testimonios.map((t, i) => (
            <TestimonialMasonryCard
              key={`${t.servicio}-${i}`}
              testimonio={t}
              index={i}
            />
          ))}
        </MasonryGrid>
      </div>
    </section>
  )
}
