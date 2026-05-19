import type { Metadata } from "next"
import { Button } from "@/components/ui/Button"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Founders } from "@/components/sections/Founders"
import { TeamRoster } from "@/components/sections/TeamRoster"
import { PhotoGallery } from "@/components/sections/PhotoGallery"
import { BentoTeach } from "@/components/sections/BentoTeach"
import { CTABand } from "@/components/sections/CTABand"
import { WHATSAPP_URL } from "@/data/content"

export const metadata: Metadata = {
  title: "Nosotros | HOLD",
  description:
    "Somos una agencia creativa que ayuda a marcas, equipos y creadores a comunicar con identidad propia, sin caer en lo genérico.",
}

const POR_QUE = [
  {
    category: "Razón · 01",
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    category: "Razón · 02",
    title: "Consectetur adipiscing",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    category: "Razón · 03",
    title: "Eiusmod tempor",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    category: "Razón · 04",
    title: "Excepteur sint",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
] as const

export default function NosotrosPage() {
  return (
    <main>
      <section className="section-container section-container--tight">
        <PageHero
          eyebrow="Nosotros · 04"
          titulo={
            <>
              Una agencia creativa{" "}
              <em style={{ fontStyle: "italic", fontWeight: 500 }}>
                que parte de tu identidad.
              </em>
            </>
          }
          intro="Somos una agencia creativa que ayuda a marcas, equipos y creadores de contenido a transmitir sus valores, encontrar su identidad y comunicarla de forma clara, estética y coherente, evitando el contenido genérico y trabajando siempre desde su identidad."
          actions={
            <>
              <Button
                size="large"
                href={WHATSAPP_URL}
                external
                ariaLabel="Hablemos por WhatsApp"
              >
                Hablemos
              </Button>
              <Button size="large" variant="secondary" href="#equipo" arrow={false}>
                Conocer el equipo
              </Button>
            </>
          }
        />
      </section>

      <section className="section-container section-container--tight">
        <SectionHeader
          numero="01"
          eyebrow="Founders"
          titulo="Las que arrancaron HOLD."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <Founders />
        </div>
      </section>

      <section
        id="equipo"
        className="section-container section-container--tight"
        style={{ scrollMarginTop: "var(--hold-header-h, 72px)" }}
      >
        <SectionHeader
          numero="02"
          eyebrow="Equipo"
          titulo="Un equipo multidisciplinario."
          intro="Especialistas en comunicación, diseño, performance y producción trabajando como una sola unidad detrás de cada proyecto."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <TeamRoster />
        </div>
      </section>

      <section className="section-container section-container--tight">
        <SectionHeader
          numero="03"
          eyebrow="Galería"
          titulo="Detrás de escena."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <PhotoGallery />
        </div>
      </section>

      <section className="section-container section-container--tight">
        <SectionHeader
          numero="04"
          eyebrow="¿Por qué elegirnos?"
          titulo="Lo que nos diferencia."
          intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <div style={{ marginTop: 48 }} data-reveal data-reveal-delay="0.2">
          <BentoTeach items={POR_QUE} />
        </div>
      </section>

      <CTABand
        eyebrow="Trabajemos juntos"
        title={
          <>
            ¿Te interesa lo que hacemos? <em>Charlemos.</em>
          </>
        }
        sub="Te respondemos en menos de 24 hs hábiles."
      />
    </main>
  )
}
