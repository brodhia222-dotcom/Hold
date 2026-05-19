"use client"

import { useMemo, useState } from "react"
import type { ServicioSlug, Testimonio } from "@/types"
import { TestimonialCard } from "./TestimonialCard"
import "./clientes-tabs.css"

type TabKey = "todos" | ServicioSlug

const TABS: { key: TabKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "academy", label: "Hold Academy" },
  { key: "redes-sociales", label: "Redes Sociales" },
  { key: "performance", label: "Performance" },
]

type Props = {
  testimonios: readonly Testimonio[]
}

/**
 * Filtro de testimonios por servicio. La tab "Todos" muestra los 9;
 * cada otra tab filtra al servicio correspondiente. La grilla se
 * adapta 3 → 2 → 1 según el viewport.
 */
export function ClientesTabs({ testimonios }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("todos")

  const filtered = useMemo(() => {
    if (activeTab === "todos") return testimonios
    return testimonios.filter((t) => t.servicio === activeTab)
  }, [activeTab, testimonios])

  const counts = useMemo(() => {
    const c: Record<TabKey, number> = {
      todos: testimonios.length,
      academy: 0,
      "redes-sociales": 0,
      performance: 0,
    }
    testimonios.forEach((t) => {
      c[t.servicio] += 1
    })
    return c
  }, [testimonios])

  return (
    <div className="hold-clientes-tabs">
      <div
        className="hold-clientes-tabs__bar"
        role="tablist"
        aria-label="Filtrar testimonios por servicio"
      >
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            data-active={activeTab === tab.key ? "true" : undefined}
            className="hold-clientes-tabs__tab"
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span className="hold-clientes-tabs__count">
              {String(counts[tab.key]).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      <div className="hold-clientes-tabs__grid" role="tabpanel">
        {filtered.length === 0 ? (
          <p className="hold-clientes-tabs__empty">
            No hay testimonios para este servicio todavía.
          </p>
        ) : (
          filtered.map((t, i) => (
            <TestimonialCard
              key={`${t.servicio}-${i}`}
              testimonio={t}
            />
          ))
        )}
      </div>
    </div>
  )
}
