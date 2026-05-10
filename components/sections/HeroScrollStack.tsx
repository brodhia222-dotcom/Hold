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

  // Section 1 — sale (achica + rota negativo)
  const scaleA = useTransform(scrollYProgress, [0, 1], [1, 0.86])
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, -3])

  // Section 2 — entra (escala desde 0.92 + rota desde 3°)
  const scaleB = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const rotateB = useTransform(scrollYProgress, [0, 1], [3, 0])

  return (
    <div ref={ref} className="hold-stack">
      <motion.section
        className="hold-stack__a"
        style={{ scale: scaleA, rotate: rotateA }}
      >
        {first}
      </motion.section>
      <motion.section
        className="hold-stack__b"
        style={{ scale: scaleB, rotate: rotateB }}
      >
        {second}
      </motion.section>
    </div>
  )
}
