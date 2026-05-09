import Link from "next/link"
import { NAV_LINKS, SUBTAGLINE, TAGLINE, WHATSAPP_URL } from "@/data/content"

/**
 * Home placeholder · Fase 0
 * El hero, servicios preview, nosotros preview, clientes slider y banda CTA
 * se construyen en Fase 4. Por ahora rutas accesibles y tagline visible.
 */
export default function Home() {
  return (
    <main className="section-container">
      <p className="t-micro">HOLD · Buenos Aires · 2025</p>

      <h1 className="t-display" style={{ marginTop: 32, maxWidth: 1100 }}>
        {TAGLINE}
      </h1>

      <p className="t-lead" style={{ marginTop: 32, color: "var(--muted)", maxWidth: 560 }}>
        {SUBTAGLINE}
      </p>

      <div style={{ display: "flex", gap: 16, marginTop: 48, flexWrap: "wrap" }}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            padding: "var(--pad-btn-y) var(--pad-btn-x)",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Hablemos →
        </a>
        <Link
          href="/academy"
          style={{
            border: "1px solid var(--fg)",
            color: "var(--fg)",
            padding: "var(--pad-btn-y) var(--pad-btn-x)",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Ver servicios
        </Link>
      </div>

      <nav style={{ marginTop: 80, display: "flex", gap: 24, flexWrap: "wrap" }}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="t-small" style={{ color: "var(--muted)" }}>
            {link.label} →
          </Link>
        ))}
      </nav>
    </main>
  )
}
