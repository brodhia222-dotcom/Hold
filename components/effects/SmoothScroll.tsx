"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

/**
 * Lenis smooth scroll integrado con GSAP ScrollTrigger.
 * Montado una sola vez en el root layout. No renderiza nada.
 *
 * - Lenis maneja el scroll suave del browser.
 * - GSAP ticker dirige el RAF de Lenis (única source of truth de la animación).
 * - ScrollTrigger.update se engancha al scroll de Lenis para que los triggers
 *   se sincronicen con el scroll suavizado en lugar del nativo.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Respeta reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    })

    const onScroll = () => ScrollTrigger.update()
    lenis.on("scroll", onScroll)

    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger después de que Lenis está vivo
    ScrollTrigger.refresh()

    return () => {
      lenis.off("scroll", onScroll)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return null
}
