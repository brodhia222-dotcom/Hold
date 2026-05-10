import { HeroParticles } from "@/components/sections/HeroParticles"
import { ServiciosPreview } from "@/components/sections/ServiciosPreview"
import { NosotrosPreview } from "@/components/sections/NosotrosPreview"
import { ClientesPreview } from "@/components/sections/ClientesPreview"
import { MarqueeBand } from "@/components/effects/MarqueeBand"
import { HeroScrollStack } from "@/components/effects/HeroScrollStack"

const MARQUEE_TOP = [
  "Estrategia",
  "Contenido",
  "Performance",
  "Hold Academy",
  "Comunidad",
  "Resultados",
] as const

const MARQUEE_MID = [
  "Sostener sin perder la esencia",
  "Buenos Aires · 2025",
  "Marcas con propósito",
  "Equipo dedicado",
] as const

export default function Home() {
  return (
    <>
      <HeroScrollStack
        hero={<HeroParticles />}
        next={
          <>
            <MarqueeBand items={MARQUEE_TOP} durationSec={55} />
            <ServiciosPreview />
          </>
        }
      />
      <NosotrosPreview />
      <MarqueeBand items={MARQUEE_MID} invert italic durationSec={65} />
      <ClientesPreview />
    </>
  )
}
