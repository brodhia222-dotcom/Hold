export interface Servicio {
  id: string
  numero: string
  nombre: string
  tagline: string
  descripcion: string
  items: string[]
  acento: string
}

export interface Testimonio {
  texto: string
  nombre: string
  rol: string
  servicio: "academy" | "redes" | "performance"
}

export interface MiembroEquipo {
  nombre: string
  rol: string
  iniciales: string
}
