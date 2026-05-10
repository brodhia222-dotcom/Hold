import { HeroScrollStack } from "@/components/sections/HeroScrollStack"
import { HeroParticles } from "@/components/sections/HeroParticles"
import { ServiciosPreview } from "@/components/sections/ServiciosPreview"
import { NosotrosPreview } from "@/components/sections/NosotrosPreview"
import { ClientesPreview } from "@/components/sections/ClientesPreview"
import { MarqueeBand } from "@/components/effects/MarqueeBand"

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
        first={<HeroParticles />}
        second={<ServiciosPreview />}
      />
      <MarqueeBand items={MARQUEE_TOP} durationSec={45} />
      <NosotrosPreview />
      <MarqueeBand
        items={MARQUEE_MID}
        invert
        italic
        durationSec={55}
        separatorColor="#E96951"
      />
      <ClientesPreview />
    </>
  )
}
