import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { PageHeroTextured } from "@/components/ui/PageHeroTextured"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { BentoTeach } from "@/components/sections/BentoTeach"
import { ServiceProcess } from "@/components/sections/ServiceProcess"
import type { ProcessStep } from "@/components/sections/ServiceProcess"
import { ServicePlanFeature } from "@/components/sections/ServicePlanFeature"
import { CTABand } from "@/components/sections/CTABand"
import { servicios, WHATSAPP_URL } from "@/data/content"

export const metadata: Metadata = {
  title: "Redes Sociales | HOLD",
  description:
    "Estrategia, contenido, diseño, producción y community management. Un equipo dedicado a tu marca.",
}

const REDES = servicios.find((s) => s.slug === "redes-sociales")!

const BENTO_ITEMS = [
  { title: "Estrategia y calendario mensual",     category: "Estrategia" },
  { title: "Diseño gráfico y producción audiovisual", category: "Diseño" },
  { title: "Community management",                category: "Comunidad" },
  { title: "Branding e identidad de marca",       category: "Branding" },
  { title: "Dirección creativa",                  category: "Dirección" },
] as const

const PROCESO: readonly ProcessStep[] = [
  {
    title: "Auditoría",
    desc: "Revisamos lo que ya hiciste, lo que funciona y lo que diluye la marca. Empezamos por entender, no por proponer.",
  },
  {
    title: "Estrategia",
    desc: "Definimos tono, pilares de contenido y calendario mensual. Tu marca con un criterio que se sostiene en el tiempo.",
  },
  {
    title: "Producción",
    desc: "Diseño gráfico, video y fotografía con un equipo que conoce tu marca. Cada pieza pensada para un objetivo claro.",
  },
  {
    title: "Comunidad",
    desc: "Community management diario: respondemos, escuchamos y traducimos lo que pasa en redes en información útil para tu negocio.",
  },
] as const

export default function RedesSocialesPage() {
  return (
    <main>
      <PageHeroTextured
        eyebrow={`${REDES.eyebrow} · ${REDES.numero}`}
        titulo={
          <>
            Tu marca en redes,{" "}
            <em>sin improvisación.</em>
          </>
        }
        intro={REDES.descripcion}
        actions={
          <>
            <Button
              size="large"
              href={WHATSAPP_URL}
              external
              ariaLabel="Quiero asesoramiento por WhatsApp"
            >
              Quiero saber más
            </Button>
            <Button size="large" variant="secondary" href="#proceso" arrow={false}>
              Cómo trabajamos
            </Button>
          </>
        }
      />

      <section className="section-container section-container--tight">
        <SectionHeader
          titulo="Un equipo dedicado a tu marca."
          intro="No tercerizamos en freelancers sueltos. Estrategas, diseñadores y community managers trabajando como una unidad."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <BentoTeach items={BENTO_ITEMS} />
        </div>
      </section>

      <section
        id="proceso"
        className="section-container section-container--tight"
        style={{ scrollMarginTop: "var(--hold-header-h, 72px)" }}
      >
        <SectionHeader
          titulo="Cuatro fases que se repiten cada mes."
          intro="No es un proyecto que arranca y termina: es una operación viva que se ajusta con cada ciclo."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <ServiceProcess steps={PROCESO} />
        </div>
      </section>

      <section className="section-container section-container--tight">
        <ServicePlanFeature servicio={REDES} />
      </section>

      <CTABand
        eyebrow="Próximo paso"
        title={
          <>
            Tenemos cupo para{" "}
            <em>dos marcas más</em> este trimestre.
          </>
        }
        sub="Charlemos sin compromiso para ver si encajamos."
      />
    </main>
  )
}
