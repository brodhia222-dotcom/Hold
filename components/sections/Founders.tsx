import { Placeholder } from "@/components/ui/Placeholder"
import { founders } from "@/data/content"
import "./founders.css"

/**
 * Bloque editorial de fundadoras side-by-side: foto vertical 4/5 +
 * nombre grande + rol + bio. Lorem en las bios hasta que pasen el
 * copy real.
 */
export function Founders() {
  return (
    <div className="hold-founders">
      {founders.map((f, i) => (
        <article key={f.nombre} className="hold-founder">
          <div className="hold-founder__photo-wrap">
            <Placeholder
              ratio="4/5"
              label={`Foto · ${f.nombre}`}
            />
          </div>
          <div className="hold-founder__meta">
            <span className="hold-founder__num">
              {`Founder · 0${i + 1}`}
            </span>
            <h3 className="hold-founder__name">{f.nombre}</h3>
            <span className="hold-founder__role">{f.rol}</span>
            <p className="hold-founder__bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
