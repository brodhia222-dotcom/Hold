import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { PageHeroTextured } from "@/components/ui/PageHeroTextured"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { HeroScroll } from "@/components/sections/HeroScroll"
import { BentoTeach } from "@/components/sections/BentoTeach"
import { CoursesShowcase } from "@/components/sections/CoursesShowcase"
import { ServicePlanFeature } from "@/components/sections/ServicePlanFeature"
import { CTABand } from "@/components/sections/CTABand"
import { servicios, WHATSAPP_URL } from "@/data/content"

export const metadata: Metadata = {
  title: "Hold Academy | HOLD",
  description:
    "Cursos, entrenamientos y mentorías para creadores de contenido, emprendedores y profesionales que quieren dejar de improvisar.",
}

const ACADEMY = servicios.find((s) => s.slug === "academy")!

/* Categorías editoriales que diferencian el bento de la tabla de cursos.
   Los items vienen de ACADEMY.items en data/content.ts. */
const BENTO_ITEMS = [
  { title: "Claude para creadores de contenido", category: "Curso · IA" },
  { title: "Meta para creadores de contenido",   category: "Curso · Ads" },
  { title: "Creatividad aplicada",               category: "Programa" },
  { title: "Contenido con colaboradores",        category: "Workshop" },
  { title: "Entrenamientos para emprendedores",  category: "Programa" },
  { title: "Mentorías 1:1 360",                  category: "Mentoría" },
] as const

export default function AcademyPage() {
  return (
    <main>
      <PageHeroTextured
        eyebrow={`${ACADEMY.eyebrow} · ${ACADEMY.numero}`}
        titulo={
          <>
            Todo lo que aprendimos haciendo,{" "}
            <em>ahora lo enseñamos.</em>
          </>
        }
        intro={ACADEMY.descripcion}
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
            <Button size="large" variant="secondary" href="#cursos" arrow={false}>
              Ver cursos
            </Button>
          </>
        }
      />

      <HeroScroll
        introEyebrow="La filosofía"
        introTitle={
          <>
            Aprendé como nosotros: <em>haciendo</em>.
          </>
        }
        introSub="Lo que enseñamos lo aprendimos antes con clientes reales. No es teoría empacada bonita — son procedimientos que vimos funcionar."
        galleryTitle={
          <>
            Detrás de cada curso, <em>una historia real</em>.
          </>
        }
        galleryMeta="Academy · 2025"
        images={["Clase", "Mentoría", "Workshop", "1:1"]}
      />

      <section className="section-container section-container--tight">
        <SectionHeader
          titulo="Formatos que se adaptan a tu momento."
          intro="Cursos cortos, programas largos y mentorías 1:1. Todo lo que ofrecemos surgió primero de un cliente real con una necesidad real."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <BentoTeach items={BENTO_ITEMS} />
        </div>
      </section>

      <section
        id="cursos"
        className="section-container section-container--tight"
        style={{ scrollMarginTop: "var(--hold-header-h, 72px)" }}
      >
        <SectionHeader
          titulo="Cursos abiertos."
          intro="Tocá un curso para coordinar tu inscripción por WhatsApp. Te responde una persona del equipo, no un bot."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <CoursesShowcase />
        </div>
      </section>

      <section className="section-container section-container--tight">
        <ServicePlanFeature servicio={ACADEMY} />
      </section>

      <CTABand
        eyebrow="Próximo paso"
        title={
          <>
            ¿Querés sumarte a un curso o armar uno{" "}
            <em>a medida</em>?
          </>
        }
        sub="Te respondemos en menos de 24 hs hábiles."
      />
    </main>
  )
}
