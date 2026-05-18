"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Check } from "lucide-react"
import "./accent-switcher.css"

/**
 * Acentos disponibles — paleta Pantone HOLD del DS.
 * `value` se inyecta en `--accent` de :root. Todas las superficies del sitio
 * que referencian var(--accent) reaccionan automáticamente.
 */
const ACCENTS = [
  { name: "Coral",      value: "#E96951" },
  { name: "Tangerine",  value: "#F08A3E" },
  { name: "Warm Red",   value: "#F9423A" },
  { name: "Bright Blue", value: "#2B63FF" },
  { name: "Soft Pink",  value: "#EBBDD9" },
] as const

const STORAGE_KEY = "hold:accent"
const DEFAULT_ACCENT = "#E96951"

function applyAccent(hex: string) {
  document.documentElement.style.setProperty("--accent", hex)
}

export function AccentSwitcher() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState<string>(DEFAULT_ACCENT)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    const initial = stored && ACCENTS.some((a) => a.value === stored) ? stored : DEFAULT_ACCENT
    setCurrent(initial)
    applyAccent(initial)
  }, [])

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  const pick = (hex: string) => {
    setCurrent(hex)
    applyAccent(hex)
    window.localStorage.setItem(STORAGE_KEY, hex)
  }

  return (
    <div ref={ref} className="hold-accent-switcher" data-open={open || undefined}>
      <button
        type="button"
        className="hold-accent-switcher__trigger"
        aria-label="Cambiar color de acento"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{ ["--current" as string]: current }}
      >
        <Palette size={16} strokeWidth={1.75} aria-hidden />
        <span className="hold-accent-switcher__trigger-dot" aria-hidden />
        <span className="hold-accent-switcher__trigger-label">Acento</span>
      </button>

      {open ? (
        <div className="hold-accent-switcher__panel" role="dialog" aria-label="Paleta de acento">
          <p className="hold-accent-switcher__title">Probá un acento</p>
          <ul className="hold-accent-switcher__list">
            {ACCENTS.map((a) => {
              const active = a.value === current
              return (
                <li key={a.value}>
                  <button
                    type="button"
                    className="hold-accent-switcher__swatch"
                    data-active={active || undefined}
                    style={{ background: a.value }}
                    onClick={() => pick(a.value)}
                    aria-label={`Acento ${a.name}`}
                    aria-pressed={active}
                  >
                    {active ? <Check size={14} strokeWidth={2.4} aria-hidden /> : null}
                  </button>
                  <span className="hold-accent-switcher__name">{a.name}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
