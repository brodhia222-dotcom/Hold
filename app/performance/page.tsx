import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { PageHeroTextured } from "@/components/ui/PageHeroTextured"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { HeroScroll } from "@/components/sections/HeroScroll"
import { BentoTeach } from "@/components/sections/BentoTeach"
import { ServiceProcess } from "@/components/sections/ServiceProcess"
import type { ProcessStep } from "@/components/sections/ServiceProcess"
import { ServicePlanFeature } from "@/components/sections/ServicePlanFeature"
import { CTABand } from "@/components/sections/CTABand"
import { servicios, WHATSAPP_URL } from "@/data/content"

export const metadata: Metadata = {
  title: "Performance | HOLD",
  description:
    "Campañas pensadas desde la estrategia creativa, con analítica real y foco en resultados. Convertimos tu inversión en ventas.",
}

const PERFORMANCE = servicios.find((s) => s.slug === "performance")!

const BENTO_ITEMS = [
  { title: "Meta Ads, Google Ads, TikTok Ads",         category: "Pauta" },
  { title: "Creatividades para pauta",                 category: "Creatividad" },
  { title: "Implementación de CRM",                    category: "CRM" },
  { title: "Automatizaciones de captación y seguimiento", category: "Automation" },
  { title: "Reportes y optimización mensual",          category: "Data" },
] as const

const PROCESO: readonly ProcessStep[] = [
  {
    title: "Diagnóstico",
    desc: "Analizamos cuentas, históricos, audiencias y embudos. Antes de invertir un peso, sabemos por qué.",
  },
  {
    title: "Estrategia",
    desc: "Definimos objetivos, plataformas, presupuesto y mensajes. Cada campaña con una hipótesis clara para validar.",
  },
  {
    title: "Creatividades",
    desc: "Diseñamos y producimos las piezas pensadas para convertir. La creatividad es la palanca más grande del rendimiento.",
  },
  {
    title: "Optimización",
    desc: "Lectura de datos semanal, ajustes constantes y reporte mensual. La pauta es una conversación con el mercado.",
  },
] as const

export default function PerformancePage() {
  return (
    <main>
      <PageHeroTextured
        eyebrow={`${PERFORMANCE.eyebrow} · ${PERFORMANCE.numero}`}
        titulo={
          <>
            Campañas que convierten,{" "}
            <em>no que decoran.</em>
          </>
        }
        intro={PERFORMANCE.descripcion}
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

      <HeroScroll
        introEyebrow="La filosofía"
        introTitle={
          <>
            Que cada peso <em>rinda</em>.
          </>
        }
        introSub="Campañas con hipótesis claras, creatividades que convierten y data que se usa para decidir — no para decorar."
        galleryTitle={
          <>
            El proceso <em>en acción</em>.
          </>
        }
        galleryMeta="Performance · 2025"
        images={["Ads", "Creatividad", "CRM", "Reporte"]}
      />

      <section className="section-container section-container--tight">
        <SectionHeader
          titulo="Toda la cadena, en un solo equipo."
          intro="Desde la estrategia inicial hasta el último ajuste del CRM. Sin pasarte de mano en mano."
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
          titulo="Un método que se mide en cada ciclo."
          intro="No optimizamos por sensación: cada decisión se apoya en data y se traduce en un próximo paso concreto."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <ServiceProcess steps={PROCESO} />
        </div>
      </section>

      <section className="section-container section-container--tight">
        <ServicePlanFeature servicio={PERFORMANCE} />
      </section>

      <CTABand
        eyebrow="Próximo paso"
        title={
          <>
            ¿Tu pauta no está rindiendo lo que{" "}
            <em>debería</em>?
          </>
        }
        sub="Charlemos. Te decimos en 15 minutos si podemos ayudarte."
      />
    </main>
  )
}
