"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import "./hero-scroll-stack.css"

type Props = {
  /** Sección sticky superior (ej. HeroParticles). */
  first: ReactNode
  /** Sección que entra desde abajo (ej. ServiciosIntro). */
  second: ReactNode
}

/**
 * Patrón "stacked sections" con scroll-driven scale + rotate.
 * En mobile y reduced-motion, el efecto se desactiva (CSS) y queda layout natural.
 */
export function HeroScrollStack({ first, second }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Section 1 — sale (achica leve + rota mínimo + se desvanece para que B emerja sin "caja blanca")
  const scaleA = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, -1.2])
  const opacityA = useTransform(scrollYProgress, [0.45, 0.95], [1, 0.1])

  // Section 2 — entra suave (con un fade-in leve para acompañar)
  const scaleB = useTransform(scrollYProgress, [0, 1], [0.96, 1])
  const rotateB = useTransform(scrollYProgress, [0, 1], [1.2, 0])
  const opacityB = useTransform(scrollYProgress, [0.2, 0.65], [0, 1])

  return (
    <div ref={ref} className="hold-stack">
      <motion.section
        className="hold-stack__a"
        style={{ scale: scaleA, rotate: rotateA, opacity: opacityA }}
      >
        {first}
      </motion.section>
      <motion.section
        className="hold-stack__b"
        style={{ scale: scaleB, rotate: rotateB, opacity: opacityB }}
      >
        {second}
      </motion.section>
    </div>
  )
}
