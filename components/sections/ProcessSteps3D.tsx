"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import "./process-steps-3d.css"

export type ProcessStep3D = {
  title: string
  desc: string
}

type StepProps = {
  step: ProcessStep3D
  index: number
}

function StepCard({ step, index }: StepProps) {
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
      <div className="hold-step3d__glow" aria-hidden />
      <div className="hold-step3d__grain" aria-hidden />

      <div className="hold-step3d__content">
        <span className="hold-step3d__num" aria-hidden>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <h3 className="hold-step3d__title">{step.title}</h3>
          <p className="hold-step3d__desc">{step.desc}</p>
        </div>
      </div>

      <div className="hold-step3d__beam" aria-hidden />
    </motion.article>
  )
}

type Props = {
  steps: readonly ProcessStep3D[]
}

/**
 * Reemplazo 3D del ServiceProcess. Cuatro cards en grid 2x2 con tilt
 * por mousemove (max 4°), lift al hover, glow del accent abajo y
 * border-bottom iluminado tipo LED. Adaptado del gradient-card de
 * ravikatiyar (21st.dev) al DS HOLD: paleta b/n/azul, border 0,
 * sin border-radius.
 *
 * Se renderiza dentro de un wrapper con bg propio (negro o azul según
 * data-service del <main> padre).
 */
export function ProcessSteps3D({ steps }: Props) {
  return (
    <div className="hold-steps3d-wrap">
      <div className="hold-steps3d">
        {steps.map((step, i) => (
          <StepCard key={step.title} step={step} index={i} />
        ))}
      </div>
    </div>
  )
}
