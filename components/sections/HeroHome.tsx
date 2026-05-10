"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import { Button } from "@/components/ui/Button"
import { SUBTAGLINE, WHATSAPP_URL } from "@/data/content"
import "./hero-home.css"

/**
 * Hero compacto · 78svh max · display 96px · 1 forma decorativa · 1 CTA.
 * Anatomía: eyebrow → headline (2 líneas) → subtagline → CTA primary.
 * GSAP entrance: stagger por línea con yPercent 110->0.
 */
export function HeroHome() {
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".hold-hero__title-line-inner")
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

      tl.from(".hold-hero__shape", {
        opacity: 0,
        scale: 0.92,
        duration: 1.1,
        ease: "power3.out",
      })
        .from(
          ".hold-hero__eyebrow",
          { opacity: 0, y: 12, duration: 0.5 },
          0.05,
        )
        .from(
          lines,
          { yPercent: 110, duration: 0.85, stagger: 0.08 },
          "-=0.3",
        )
        .from(
          ".hold-hero__sub",
          { opacity: 0, y: 16, duration: 0.55 },
          "-=0.4",
        )
        .from(
          ".hold-hero__ctas",
          { opacity: 0, y: 16, duration: 0.5 },
          "-=0.35",
        )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hold-hero" ref={root} aria-label="Inicio">
      <span className="hold-hero__shape" aria-hidden />

      <div className="hold-hero__inner">
        <p className="hold-hero__eyebrow">HOLD · Buenos Aires · 2025</p>

        <h1 className="hold-hero__title">
          <span className="hold-hero__title-line">
            <span className="hold-hero__title-line-inner">Sostener sin perder</span>
          </span>
          <span className="hold-hero__title-line">
            <span className="hold-hero__title-line-inner hold-hero__title-em">
              la esencia.
            </span>
          </span>
        </h1>

        <p className="hold-hero__sub">{SUBTAGLINE}</p>

        <div className="hold-hero__ctas">
          <Button href={WHATSAPP_URL} external ariaLabel="Hablemos por WhatsApp">
            Hablemos
          </Button>
        </div>
      </div>
    </section>
  )
}
