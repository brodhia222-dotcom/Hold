"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"
import { Button } from "@/components/ui/Button"
import { SUBTAGLINE, WHATSAPP_URL } from "@/data/content"
import "./hero-home.css"

/**
 * Hero centrado de la home — el primer impacto del sitio.
 * Editorial++: display oversized (clamp 56–196px), formas decorativas planas
 * (círculo coral + cuadrado tangerine + barra warm-red), GSAP entrance
 * timeline en stagger por línea.
 */
export function HeroHome() {
  const root = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!root.current) return
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".hold-hero__title-line-inner")
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
      })

      tl.from(".hold-hero__eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.5,
      })
        .from(
          lines,
          {
            yPercent: 110,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=0.2",
        )
        .from(
          ".hold-hero__sub",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hold-hero__ctas",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.4",
        )
        .from(
          ".hold-hero__meta",
          {
            opacity: 0,
            y: 16,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hold-hero__shape",
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.1,
          },
          0,
        )
        .from(
          ".hold-hero__scroll",
          {
            opacity: 0,
            y: -8,
            duration: 0.5,
          },
          "-=0.2",
        )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hold-hero" ref={root} aria-label="Inicio">
      <div className="hold-hero__shapes" aria-hidden>
        <span className="hold-hero__shape hold-hero__shape--circle" />
        <span className="hold-hero__shape hold-hero__shape--bar" />
        <span className="hold-hero__shape hold-hero__shape--square" />
      </div>

      <div className="hold-hero__inner">
        <p className="hold-hero__eyebrow">HOLD · Buenos Aires · 2025</p>

        <h1 className="hold-hero__title">
          <span className="hold-hero__title-line">
            <span className="hold-hero__title-line-inner">Sostener</span>
          </span>
          <span className="hold-hero__title-line">
            <span className="hold-hero__title-line-inner">sin perder</span>
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
          <Button variant="secondary" href="#servicios" arrow={false}>
            Ver servicios
          </Button>
        </div>

        <div className="hold-hero__meta">
          <span className="hold-hero__meta-item">
            <span className="hold-hero__meta-dot" style={{ background: "#E96951" }} />
            Academy
          </span>
          <span className="hold-hero__meta-item">
            <span className="hold-hero__meta-dot" style={{ background: "#F08A3E" }} />
            Redes Sociales
          </span>
          <span className="hold-hero__meta-item">
            <span className="hold-hero__meta-dot" style={{ background: "#F9423A" }} />
            Performance
          </span>
        </div>
      </div>

      <div className="hold-hero__scroll" aria-hidden>
        <span>Scroll</span>
        <span className="hold-hero__scroll-line" />
      </div>
    </section>
  )
}
