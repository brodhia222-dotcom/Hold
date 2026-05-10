/* Slugs de servicios — coinciden 1:1 con las rutas del navbar. */
export type ServicioSlug = "academy" | "redes-sociales" | "performance"

export interface Servicio {
  slug: ServicioSlug
  numero: string
  nombre: string
  eyebrow: string        // "Educación", "Marcas y negocios", "Resultados medibles"
  tagline: string
  descripcion: string
  items: string[]
  acento: string         // hex
  href: string           // ruta interna
  /** Monto desde, sin unidad. Ej: "250", "800". */
  precioDesde: string
  /** Período opcional: "mes". Si se omite, es one-shot. */
  precioPeriodo?: "mes" | "curso" | "campaña"
  /** Items que se incluyen, para mostrar en la card de Pricing. */
  incluye: string[]
}

/* Estado de cursos del DS — color de dot incluido. */
export type CursoEstado = "Inscripción abierta" | "Próximamente" | "Cupo limitado"

export interface Curso {
  id: string             // "ACA · 01"
  nombre: string
  formato: string        // "4 sesiones · Online"
  estado: CursoEstado
}

export interface Testimonio {
  texto: string
  nombre: string
  rol: string
  servicio: ServicioSlug
}

export interface MiembroEquipo {
  nombre: string
  rol: string
  iniciales: string
}

export interface NavLink {
  label: string
  href: string
}
