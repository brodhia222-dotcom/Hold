"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import "./process-steps-3d.css"

export type ProcessStep3D = {
  title: string
  desc: string
  /** URL de imagen de fondo (Unsplash u otra). Se desatura + tinta
   *  con el bg de la card para mantener coherencia con la paleta. */
  bgImage?: string
}

type StepProps = {
  step: ProcessStep3D
}

function StepCard({ step }: StepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Tilt limitado a 4 grados — el efecto se quiere sutil, no mareante.
    setRotation({
      x: -(y / rect.height) * 4,
      y: (x / rect.width) * 4,
    })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.article
      ref={ref}
      className="hold-step3d"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        y: hovered ? -4 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 22,
      }}
    >
      {step.bgImage ? (
        <div
          className="hold-step3d__bg"
          style={{ backgroundImage: `url(${step.bgImage})` }}
          aria-hidden
        />
      ) : null}
      <div className="hold-step3d__shade" aria-hidden />
      <div className="hold-step3d__glow" aria-hidden />
      <div className="hold-step3d__grain" aria-hidden />

      <div className="hold-step3d__content">
        <h3 className="hold-step3d__title">{step.title}</h3>
        <p className="hold-step3d__desc">{step.desc}</p>
      </div>

      <div className="hold-step3d__beam" aria-hidden />
    </motion.article>
  )
}

type Props = {
  steps: readonly ProcessStep3D[]
}

/**
 * Cuatro cards en grid 2x2 con tilt 3D por mousemove (max 4°), lift al
 * hover, imagen de fondo opcional, glow del accent abajo y border-bottom
 * iluminado tipo LED. Adaptado del gradient-card de ravikatiyar (21st)
 * al DS HOLD: paleta b/n/azul, border 0, sin border-radius.
 */
export function ProcessSteps3D({ steps }: Props) {
  return (
    <div className="hold-steps3d-wrap">
      <div className="hold-steps3d">
        {steps.map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </div>
    </div>
  )
}
