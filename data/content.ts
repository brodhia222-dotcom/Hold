import type {
  Curso,
  MiembroEquipo,
  NavLink,
  Servicio,
  Testimonio,
} from "@/types"

/* ─── CONTACTO ─────────────────────────────────────────────────────────────── */

export const WHATSAPP_NUMBER = "5491159516214"
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_HANDLE = "@hold.agencia"
export const INSTAGRAM_URL = "https://instagram.com/hold.agencia"
export const EMAIL = "holdagenciadigital@gmail.com"
export const TEL_DISPLAY = "+54 9 11 2710 8165"
export const TEL_HREF = "tel:+5491127108165"

/* Helper: arma URL de WhatsApp con mensaje pre-armado. */
export function waUrl(mensaje: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`
}

/* Helper específico para click en curso de Academy. */
export function waUrlCurso(curso: Curso): string {
  return waUrl(`Hola, me interesa el curso ${curso.id} ${curso.nombre}.`)
}

/* ─── NAVEGACIÓN (rutas planas, igual al navbar del DS) ───────────────────── */

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Academy", href: "/academy" },
  { label: "Redes Sociales", href: "/redes-sociales" },
  { label: "Performance", href: "/performance" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Clientes", href: "/clientes" },
] as const

/* ─── SERVICIOS ────────────────────────────────────────────────────────────── */

export const servicios: readonly Servicio[] = [
  {
    slug: "academy",
    numero: "01",
    nombre: "Hold Academy",
    eyebrow: "Educación",
    tagline: "Todo lo que aprendimos haciendo, ahora lo enseñamos.",
    descripcion:
      "Cursos, entrenamientos y mentorías para creadores de contenido, emprendedores y profesionales que quieren dejar de improvisar.",
    items: [
      "Claude para creadores de contenido",
      "Meta para creadores de contenido",
      "Creatividad aplicada",
      "Contenido con colaboradores",
      "Entrenamientos para emprendedores",
      "Mentorías 1:1 360",
    ],
    acento: "#E96951",
    href: "/academy",
    precioDesde: "250",
    precioPeriodo: "curso",
    incluye: [
      "Acceso a clases en vivo",
      "Material y grabaciones",
      "Comunidad privada de Hold",
      "Sesión 1:1 final con tu mentor",
      "Certificado de finalización",
    ],
  },
  {
    slug: "redes-sociales",
    numero: "02",
    nombre: "Redes Sociales",
    eyebrow: "Marcas y negocios",
    tagline: "Sin improvisación.",
    descripcion:
      "Nos hacemos cargo de tu presencia digital con estrategia, contenido, diseño, producción y community management. Con un equipo dedicado a tu marca.",
    items: [
      "Estrategia y calendario mensual",
      "Diseño gráfico y producción audiovisual",
      "Community management",
      "Branding e identidad de marca",
      "Dirección creativa",
    ],
    acento: "#F08A3E",
    href: "/redes-sociales",
    precioDesde: "800",
    precioPeriodo: "mes",
    incluye: [
      "Estrategia y calendario mensual",
      "Diseño y producción audiovisual",
      "Community management diario",
      "Branding e identidad",
      "Reportes y reuniones mensuales",
    ],
  },
  {
    slug: "performance",
    numero: "03",
    nombre: "Performance",
    eyebrow: "Resultados medibles",
    tagline: "Resultados medibles.",
    descripcion:
      "Campañas pensadas desde la estrategia creativa, con analítica real y foco en resultados. Convertimos tu inversión en ventas.",
    items: [
      "Meta Ads, Google Ads, TikTok Ads",
      "Creatividades para pauta",
      "Implementación de CRM",
      "Automatizaciones de captación y seguimiento",
      "Reportes y optimización mensual",
    ],
    acento: "#F9423A",
    href: "/performance",
    precioDesde: "700",
    precioPeriodo: "mes",
    incluye: [
      "Setup completo de campañas",
      "Meta + Google + TikTok Ads",
      "Creatividades para pauta",
      "CRM y automatizaciones",
      "Optimización constante con data",
    ],
  },
] as const

/* ─── CURSOS ACADEMY (del DS) ─────────────────────────────────────────────── */

export const cursos: readonly Curso[] = [
  { id: "ACA · 01", nombre: "Claude para creadores de contenido", formato: "4 sesiones · Online", estado: "Inscripción abierta" },
  { id: "ACA · 02", nombre: "Meta para creadores de contenido",   formato: "6 sesiones · Online", estado: "Inscripción abierta" },
  { id: "ACA · 03", nombre: "Creatividad aplicada",               formato: "8 sesiones · Híbrido", estado: "Próximamente" },
  { id: "ACA · 04", nombre: "Contenido con colaboradores",        formato: "Workshop · 1 día",     estado: "Próximamente" },
  { id: "ACA · 05", nombre: "Entrenamientos para emprendedores",  formato: "Programa · 3 meses",   estado: "Inscripción abierta" },
  { id: "ACA · 06", nombre: "Mentorías 1:1 360",                  formato: "Encuentros mensuales", estado: "Cupo limitado" },
] as const

/* ─── TESTIMONIOS (placeholder · 3 por servicio) ──────────────────────────── */

export const testimonios: readonly Testimonio[] = [
  // Academy
  {
    texto: "Tenía ideas pero no sabía cómo estructurarlas. Después de la mentoría empecé a publicar con un criterio que antes no tenía.",
    nombre: "Valentina G.",
    rol: "Creadora de contenido",
    servicio: "academy",
  },
  {
    texto: "El módulo de Meta me cambió la forma de pensar la pauta. Dejé de boostear posts y empecé a hacer campañas de verdad.",
    nombre: "Matías R.",
    rol: "Emprendedor",
    servicio: "academy",
  },
  {
    texto: "La mentoría 1:1 fue lo mejor que hice para mi marca personal. Salí con un plan claro y sin el pánico habitual.",
    nombre: "Camila D.",
    rol: "Consultora independiente",
    servicio: "academy",
  },
  // Redes Sociales
  {
    texto: "Teníamos contenido de sobra pero sin hilo. Hold nos ayudó a encontrar el tono y desde ahí todo fluyó.",
    nombre: "Lucía F.",
    rol: "Dueña de tienda online",
    servicio: "redes-sociales",
  },
  {
    texto: "En tres meses de trabajar juntos duplicamos el alcance orgánico. Sin magia, con estrategia.",
    nombre: "Tomás M.",
    rol: "Marca de indumentaria",
    servicio: "redes-sociales",
  },
  {
    texto: "Lo que más valoro es que no nos dieron una fórmula genérica. Entendieron nuestro negocio y lo comunicaron bien.",
    nombre: "Sofía V.",
    rol: "Estudio de diseño",
    servicio: "redes-sociales",
  },
  // Performance
  {
    texto: "Veníamos gastando en Meta sin resultados. Con Hold reorganizamos la estrategia y el ROAS mejoró notablemente en el primer mes.",
    nombre: "Andrés P.",
    rol: "E-commerce de accesorios",
    servicio: "performance",
  },
  {
    texto: "Las creatividades para pauta que hicieron son las primeras que realmente convierten. Hay una lógica detrás de cada pieza.",
    nombre: "Florencia K.",
    rol: "Marca de bienestar",
    servicio: "performance",
  },
  {
    texto: "El seguimiento mensual es lo que diferencia. No son solo campañas, es una estrategia en movimiento.",
    nombre: "Rodrigo H.",
    rol: "Servicios B2B",
    servicio: "performance",
  },
] as const

/* ─── EQUIPO ──────────────────────────────────────────────────────────────── */

export const equipo: readonly MiembroEquipo[] = [
  { nombre: "Victoria",   rol: "Co-fundadora",       iniciales: "V" },
  { nombre: "Florentina", rol: "Co-fundadora",       iniciales: "F" },
] as const

/* ─── STATS DECORATIVOS ───────────────────────────────────────────────────── */

export const STATS = [
  { valor: "3+",      label: "años de experiencia" },
  { valor: "+50",     label: "marcas acompañadas" },
  { valor: "Academy", label: "activa y creciendo" },
] as const

/* ─── COPY GENERAL ────────────────────────────────────────────────────────── */

export const TAGLINE = "Sostener sin perder la esencia."
export const SUBTAGLINE =
  "Acá no te tiramos la posta: te acompañamos a crear la tuya."
