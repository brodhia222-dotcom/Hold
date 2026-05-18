import "./service-process.css"

export type ProcessStep = {
  title: string
  desc: string
}

type Props = {
  steps: readonly ProcessStep[]
}

/**
 * Grid 2x2 (desktop) de pasos numerados con descripción contenida.
 * El número va en el acento global (var(--accent)). Sin íconos.
 */
export function ServiceProcess({ steps }: Props) {
  return (
    <ol className="hold-service-process" role="list">
      {steps.map((step, i) => (
        <li key={step.title} className="hold-service-process__step">
          <span className="hold-service-process__num" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="hold-service-process__title">{step.title}</h3>
          <p className="hold-service-process__desc">{step.desc}</p>
        </li>
      ))}
    </ol>
  )
}
