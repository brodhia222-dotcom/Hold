import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design System | HOLD (dev)",
  robots: { index: false, follow: false },
}

const COLORS = [
  { name: "Star White", hex: "#FAFFFA", role: "Fondo principal" },
  { name: "Black", hex: "#1D1D1B", role: "Tipografía / fondo oscuro" },
  { name: "Cool Gray", hex: "#C7C9C7", role: "Separadores · 420 C" },
  { name: "Coral", hex: "#E96951", role: "Academy · 486 C" },
  { name: "Warm Red", hex: "#F9423A", role: "Performance · CTAs intensos" },
  { name: "Soft Pink", hex: "#EBBDD9", role: "Acento suave · 243 C" },
  { name: "Bright Blue", hex: "#0072CE", role: "Redes Sociales · 285 C" },
] as const

const TYPE_SCALE = [
  { name: "Display", spec: "128 / 118 · 300", className: "t-display" },
  { name: "H1", spec: "72 / 71 · 400", className: "t-h1" },
  { name: "H2", spec: "48 / 50 · 400", className: "t-h2" },
  { name: "H3", spec: "28 / 32 · 500", className: "t-h3" },
  { name: "Lead", spec: "22 / 32 · 400", className: "t-lead" },
  { name: "Body", spec: "16 / 25 · 400", className: "t-body" },
  { name: "Small", spec: "13 / 20 · 400", className: "t-small" },
  { name: "Micro", spec: "11 / 15 · 500 · uppercase", className: "t-micro" },
] as const

export default function DesignSystemPage() {
  return (
    <main className="section-container">
      <p className="t-micro">DEV · Solo referencia interna</p>

      <h1 className="t-h1" style={{ marginTop: 24 }}>
        Hold — Design System
      </h1>

      <p className="t-lead" style={{ color: "var(--muted)", marginTop: 24, maxWidth: 640 }}>
        Tokens del sistema, escala tipográfica y átomos de UI. Los componentes se agregan en Fase 1.
      </p>

      {/* COLORES */}
      <section style={{ marginTop: 96 }}>
        <p className="t-micro" style={{ color: "var(--muted)" }}>03 · Color</p>
        <h2 className="t-h2" style={{ marginTop: 16 }}>Paleta</h2>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {COLORS.map((c) => (
            <div key={c.hex} style={{ border: "1px solid var(--hairline)" }}>
              <div style={{ background: c.hex, height: 120 }} aria-hidden />
              <div style={{ padding: 16 }}>
                <p className="t-h3" style={{ fontSize: 18 }}>{c.name}</p>
                <p className="t-small" style={{ color: "var(--muted)", marginTop: 4 }}>
                  {c.role}
                </p>
                <p className="t-micro" style={{ marginTop: 8 }}>{c.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIPOGRAFÍA */}
      <section style={{ marginTop: 96 }}>
        <p className="t-micro" style={{ color: "var(--muted)" }}>04 · Tipografía</p>
        <h2 className="t-h2" style={{ marginTop: 16 }}>Escala</h2>

        <div style={{ marginTop: 32 }}>
          {TYPE_SCALE.map((t) => (
            <div
              key={t.name}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: "1px solid var(--hairline)",
                alignItems: "baseline",
              }}
            >
              <div>
                <p className="t-micro">{t.name}</p>
                <p className="t-small" style={{ color: "var(--muted)", marginTop: 4 }}>
                  {t.spec}
                </p>
              </div>
              <p className={t.className}>Sostener sin perder la esencia.</p>
            </div>
          ))}
        </div>
      </section>

      <p className="t-small" style={{ marginTop: 96, color: "var(--muted)" }}>
        Componentes (Button, Chip, Eyebrow, Badge, Placeholder, SectionHeader, PageHero) se agregan en Fase 1.
      </p>
    </main>
  )
}
