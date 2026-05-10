import { ArrowRight } from "lucide-react"
import {
  EMAIL,
  INSTAGRAM_URL,
  TEL_DISPLAY,
  WHATSAPP_URL,
} from "@/data/content"
import "./banda-cta.css"

export function BandaCTA() {
  return (
    <section className="hold-banda" aria-label="Hablemos">
      <div className="hold-banda__pattern" aria-hidden />

      <div className="hold-banda__inner">
        <span className="hold-banda__eyebrow" data-reveal>
          ¿Empezamos?
        </span>

        <h2 className="hold-banda__title" data-reveal data-reveal-delay="0.1">
          Hablemos <em>en serio</em>.
        </h2>

        <p className="hold-banda__sub" data-reveal data-reveal-delay="0.2">
          Contanos en qué andás y agendamos una llamada de 30 minutos.
          Sin compromiso, sin guion.
        </p>

        <div className="hold-banda__ctas" data-reveal data-reveal-delay="0.3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hold-banda__btn"
            aria-label="Hablemos por WhatsApp"
          >
            Hablemos por WhatsApp
            <ArrowRight size={18} className="hold-banda__btn-arrow" aria-hidden />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hold-banda__btn hold-banda__btn--ghost"
            aria-label={`Escribir a ${EMAIL}`}
          >
            Escribir un email
          </a>
        </div>

        <div className="hold-banda__meta" data-reveal data-reveal-delay="0.4">
          <span className="hold-banda__meta-item">
            <span className="hold-banda__meta-dot" />
            {TEL_DISPLAY}
          </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hold-banda__meta-item"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="hold-banda__meta-dot" />
            @hold.agencia
          </a>
          <span className="hold-banda__meta-item">
            <span className="hold-banda__meta-dot" />
            Buenos Aires · AR
          </span>
        </div>
      </div>
    </section>
  )
}
