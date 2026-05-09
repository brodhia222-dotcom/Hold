import type { Servicio, Testimonio, MiembroEquipo } from "@/types"

export const WHATSAPP_URL = "https://wa.me/5491159516214"
export const INSTAGRAM_URL = "https://instagram.com/hold.agencia"
export const EMAIL = "holdagenciadigital@gmail.com"
export const TEL = "+54 9 11 2710 8165"

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clientes", href: "#clientes" },
] as const

export const servicios: Servicio[] = [
  {
    id: "academy",
    numero: "01",
    nombre: "Hold Academy",
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
  },
  {
    id: "redes",
    numero: "02",
    nombre: "Redes Sociales",
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
    acento: "#0072CE",
  },
  {
    id: "performance",
    numero: "03",
    nombre: "Performance",
    tagline: "Resultados medibles.",
    descripcion:
      "Soluciones que convierten tu inversión en ventas. Campañas pensadas desde la estrategia creativa, con analítica real y foco en resultados.",
    items: [
      "Meta Ads, Google Ads, TikTok Ads",
      "Creatividades para pauta",
      "Implementación de CRM",
      "Automatizaciones de captación y seguimiento",
      "Reportes y optimización mensual",
    ],
    acento: "#F9423A",
  },
]

export const testimonios: Testimonio[] = [
  // Academy
  {
    texto:
      "Tenía ideas pero no sabía cómo estructurarlas. Después de la mentoría empecé a publicar con un criterio que antes no tenía.",
    nombre: "Valentina G.",
    rol: "Creadora de contenido",
    servicio: "academy",
  },
  {
    texto:
      "El módulo de Meta me cambió la forma de pensar la pauta. Dejé de boostear posts y empecé a hacer campañas de verdad.",
    nombre: "Matías R.",
    rol: "Emprendedor",
    servicio: "academy",
  },
  {
    texto:
      "La mentoría 1:1 fue lo mejor que hice para mi marca personal. Salí con un plan claro y sin el pánico habitual.",
    nombre: "Camila D.",
    rol: "Consultora independiente",
    servicio: "academy",
  },
  // Redes
  {
    texto:
      "Teníamos contenido de sobra pero sin hilo. Hold nos ayudó a encontrar el tono y desde ahí todo fluyó.",
    nombre: "Lucía F.",
    rol: "Dueña de tienda online",
    servicio: "redes",
  },
  {
    texto:
      "En tres meses de trabajar juntos duplicamos el alcance orgánico. Sin magia, con estrategia.",
    nombre: "Tomás M.",
    rol: "Marca de indumentaria",
    servicio: "redes",
  },
  {
    texto:
      "Lo que más valoro es que no nos dieron una fórmula genérica. Entendieron nuestro negocio y lo comunicaron bien.",
    nombre: "Sofía V.",
    rol: "Estudio de diseño",
    servicio: "redes",
  },
  // Performance
  {
    texto:
      "Veníamos gastando en Meta sin resultados. Con Hold reorganizamos la estrategia y el ROAS mejoró notablemente en el primer mes.",
    nombre: "Andrés P.",
    rol: "E-commerce de accesorios",
    servicio: "performance",
  },
  {
    texto:
      "Las creatividades para pauta que hicieron son las primeras que realmente convierten. Hay una lógica detrás de cada pieza.",
    nombre: "Florencia K.",
    rol: "Marca de bienestar",
    servicio: "performance",
  },
  {
    texto:
      "El seguimiento mensual es lo que diferencia. No son solo campañas, es una estrategia en movimiento.",
    nombre: "Rodrigo H.",
    rol: "Servicios B2B",
    servicio: "performance",
  },
]

export const equipo: MiembroEquipo[] = [
  {
    nombre: "Flor",
    rol: "Co-fundadora / Estrategia",
    iniciales: "F",
  },
  {
    nombre: "Victoria",
    rol: "Co-fundadora / Creatividad",
    iniciales: "V",
  },
]

export const STATS = [
  { valor: "3+", label: "años de experiencia" },
  { valor: "+50", label: "marcas acompañadas" },
  { valor: "Academy", label: "activa y creciendo" },
] as const
