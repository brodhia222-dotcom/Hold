import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type Props = {
  numero: string
  eyebrow?: string
  titulo: ReactNode
  intro?: ReactNode
  className?: string
}

export function SectionHeader({ numero, eyebrow, titulo, intro, className }: Props) {
  return (
    <header
      className={cn("hold-section-header", className)}
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: 32,
        paddingTop: 24,
        borderTop: "1px solid var(--fg)",
      }}
    >
      <div data-reveal>
        <p className="t-micro">{numero}</p>
        {eyebrow ? (
          <p
            className="t-micro"
            style={{ marginTop: 8, color: "var(--muted)" }}
          >
            {eyebrow}
          </p>
        ) : null}
      </div>

      <div>
        <h2 className="t-h2" style={{ maxWidth: 900 }} data-reveal>
          {titulo}
        </h2>
        {intro ? (
          <p
            className="t-lead"
            style={{ marginTop: 24, color: "var(--muted)", maxWidth: 720 }}
            data-reveal
            data-reveal-delay="0.1"
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  )
}
