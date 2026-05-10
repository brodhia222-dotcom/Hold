import type { ReactNode } from "react"
import { Eyebrow } from "./Eyebrow"
import { cn } from "@/lib/utils"

type Props = {
  /** Eyebrow text (ej. "Educación · 01"). */
  eyebrow: string
  /** Color del dot del eyebrow — default: ninguno. */
  eyebrowDot?: string
  /** Título grande del hero (H1). */
  titulo: ReactNode
  /** Subtítulo/lead opcional. */
  intro?: ReactNode
  /** Slot lateral (foto, video, ilustración). */
  side?: ReactNode
  className?: string
}

export function PageHero({
  eyebrow,
  eyebrowDot,
  titulo,
  intro,
  side,
  className,
}: Props) {
  return (
    <header
      className={cn("hold-page-hero", className)}
      style={{
        display: "grid",
        gridTemplateColumns: side ? "minmax(0, 1.2fr) minmax(0, 1fr)" : "1fr",
        gap: 64,
        paddingTop: 96,
        paddingBottom: 96,
        alignItems: "end",
      }}
    >
      <div>
        <Eyebrow dotColor={eyebrowDot} tone="default">
          {eyebrow}
        </Eyebrow>
        <h1
          className="t-h1"
          style={{ marginTop: 32, maxWidth: 900 }}
        >
          {titulo}
        </h1>
        {intro ? (
          <p
            className="t-lead"
            style={{
              marginTop: 32,
              color: "var(--muted)",
              maxWidth: 640,
            }}
          >
            {intro}
          </p>
        ) : null}
      </div>

      {side ? <div>{side}</div> : null}
    </header>
  )
}
