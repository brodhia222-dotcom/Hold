import type {
  Curso,
  EquipoArea,
  MiembroEquipo,
  NavLink,
  Servicio,
  Testimonio,
} from "@/types"

/* ─── CONTACTO ─────────────────────────────────────────────────────────────── */

export const WHATSAPP_NUMBER = "5491127108165"
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
      "Clases en vivo + grabaciones",
      "Comunidad privada de Hold",
      "Sesión 1:1 final con tu mentor",
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
      "Meta + Google + TikTok Ads",
      "Creatividades + CRM",
      "Optimización constante con data",
    ],
  },
] as const

/* ─── CURSOS ACADEMY (del DS) ─────────────────────────────────────────────── */

export const cursos: readonly Curso[] = [
  {
    id: "ACA · 01",
    slug: "claude",
    nombre: "Claude para creadores de contenido",
    formato: "4 sesiones · Online",
    estado: "Inscripción abierta",
    precio: "USD 250",
    descripcion:
      "Cómo usar Claude como copiloto para crear contenido más rápido y con mejor criterio — sin perder tu voz.",
    duracion: "4 sesiones de 90 minutos",
    modalidad: "100% online en vivo",
    proximaFecha: "Próximo grupo: abril 2026",
    destinatario:
      "Creadores, estrategas y profesionales del contenido que quieren acelerar su proceso sin perder voz propia.",
    modulos: [
      "Fundamentos: cómo conversar con Claude para sacar mejores resultados",
      "Workflows: integrar IA al proceso creativo sin volverse dependiente",
      "Calidad y voz: revisar la salida del modelo y darle tu identidad",
      "Práctica guiada: producir piezas reales con feedback en vivo",
    ],
    incluye: [
      "4 clases en vivo + grabaciones de cada sesión",
      "Plantillas y prompts curados por el equipo",
      "Comunidad privada de alumnos en Discord",
      "Sesión 1:1 final con tu mentor para revisar tu caso",
    ],
  },
  {
    id: "ACA · 02",
    slug: "meta",
    nombre: "Meta para creadores de contenido",
    formato: "6 sesiones · Online",
    estado: "Inscripción abierta",
    precio: "USD 320",
    descripcion:
      "Del boost al campaña: usar Meta Ads sin desperdiciar presupuesto y midiendo lo que importa.",
    duracion: "6 sesiones de 90 minutos",
    modalidad: "100% online en vivo",
    proximaFecha: "Próximo grupo: mayo 2026",
    destinatario:
      "Creadores, emprendedores y community managers que ya vienen invirtiendo en pauta pero sienten que el resultado no acompaña.",
    modulos: [
      "Cuentas, píxel y eventos: el setup que casi nadie hace bien",
      "Audiencias y segmentación: dejar de pelearle al algoritmo",
      "Creatividades para pauta: por qué tu mejor post no es siempre tu mejor ad",
      "Lectura de métricas: qué mirar, cuándo y qué hacer con eso",
      "Optimización: cuándo escalar, cuándo bajar, cuándo cortar",
      "Casos en vivo: aplicar lo visto a tu cuenta real",
    ],
    incluye: [
      "6 clases en vivo + grabaciones de cada sesión",
      "Templates de campañas listos para usar",
      "Acceso al canal privado con preguntas durante todo el curso",
      "Auditoría 1:1 de tu cuenta al finalizar",
    ],
  },
  {
    id: "ACA · 03",
    slug: "creatividad-aplicada",
    nombre: "Creatividad aplicada",
    formato: "8 sesiones · Híbrido",
    estado: "Próximamente",
    precio: "USD 580",
    descripcion: "Pensar como creativo: del insight a la ejecución concreta.",
    duracion: "8 sesiones de 2 horas",
    modalidad: "Híbrido (4 online + 4 presenciales)",
    proximaFecha: "Próximo grupo: junio 2026",
    destinatario:
      "Profesionales de marketing, diseño, contenido y dirección que quieren empezar a pensar la creatividad como una disciplina, no como una corazonada.",
    modulos: [
      "Insight: cómo encontrar la verdad que la marca todavía no dijo",
      "Bocetar: del concepto al primer prototipo de la idea",
      "Visualizar: traducir la idea a piezas concretas",
      "Defender: presentar el trabajo con criterio",
      "Producir: del aprobado a la pieza final",
      "Medir: cómo saber si la idea funcionó",
      "Iterar: qué hacer cuando no funcionó",
      "Cierre: portfolio personal con lo trabajado",
    ],
    incluye: [
      "8 encuentros (4 online + 4 presenciales en Buenos Aires)",
      "Material de lectura curado entre sesiones",
      "Mentoría grupal cada 15 días",
      "Pieza final con feedback del equipo HOLD",
    ],
  },
  {
    id: "ACA · 04",
    slug: "colaboradores",
    nombre: "Contenido con colaboradores",
    formato: "Workshop · 1 día",
    estado: "Próximamente",
    precio: "USD 180",
    descripcion:
      "Cómo dirigir colaboradores y producir contenido sin volverte el cuello de botella.",
    duracion: "1 jornada de 6 horas",
    modalidad: "Presencial intensivo",
    proximaFecha: "Próximo grupo: julio 2026",
    destinatario:
      "Marcas y emprendedores que ya trabajan con freelancers, fotógrafos o creadores y necesitan ordenar el flujo para escalar producción.",
    modulos: [
      "Brief: cómo pedir bien para no rehacer todo",
      "Workflow: del Slack al Drive — armar el sistema",
      "Feedback: criticar el trabajo, no a la persona",
      "Producción a escala: pasar de 1 pieza por semana a 20",
    ],
    incluye: [
      "Workshop intensivo de 1 día con almuerzo",
      "Plantilla de brief + workflow para descargar",
      "Acceso al canal privado del workshop",
      "Sesión de seguimiento online al mes",
    ],
  },
  {
    id: "ACA · 05",
    slug: "emprendedores",
    nombre: "Entrenamientos para emprendedores",
    formato: "Programa · 3 meses",
    estado: "Inscripción abierta",
    precio: "USD 1.200",
    descripcion:
      "Programa intensivo para que tu negocio empiece a comunicar como una marca.",
    duracion: "12 semanas · 1 encuentro semanal",
    modalidad: "Online en vivo + mentorías 1:1",
    proximaFecha: "Próximo grupo: abril 2026",
    destinatario:
      "Founders y emprendedoras que están haciendo crecer un negocio y necesitan que su comunicación deje de improvisarse.",
    modulos: [
      "Identidad: definir voz, tono y promesa de la marca",
      "Pilares de contenido: dejar de publicar cualquier cosa",
      "Calendario y producción: ordenar el qué, cuándo y cómo",
      "Pauta: introducción a Meta Ads sin desperdicio",
      "Métricas: leer lo que importa para tu negocio",
      "Ventas: cómo el contenido empuja al embudo",
    ],
    incluye: [
      "12 encuentros grupales de 90 minutos",
      "3 mentorías 1:1 de 60 minutos a lo largo del programa",
      "Comunidad privada con otros emprendedores del grupo",
      "Plan de comunicación de tu marca al cierre del programa",
    ],
  },
  {
    id: "ACA · 06",
    slug: "mentorias",
    nombre: "Mentorías 1:1 360",
    formato: "Encuentros mensuales",
    estado: "Cupo limitado",
    precio: "USD 350 / mes",
    descripcion:
      "Encuentros mensuales 1:1 para acompañarte mes a mes con criterio externo.",
    duracion: "Encuentros mensuales de 90 minutos",
    modalidad: "Online en vivo · sin contrato mínimo",
    proximaFecha: "Cupos disponibles para abril 2026",
    destinatario:
      "Profesionales y founders que ya tienen su marca pero quieren un sparring partner externo para sostener el rumbo.",
    modulos: [
      "Sesión inicial: diagnóstico de dónde estás y dónde querés ir",
      "Mes 1+: revisión de avances + temas que surjan",
      "Recursos compartidos entre sesiones según lo trabajado",
      "Reporte trimestral: dónde mejoraste y qué viene",
    ],
    incluye: [
      "1 encuentro mensual de 90 minutos",
      "Disponibilidad async por mensaje entre sesiones",
      "Acceso a las herramientas y plantillas que use el equipo HOLD",
      "Sin permanencia mínima — podés salir cuando quieras",
    ],
  },
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

/* ─── FOUNDERS ────────────────────────────────────────────────────────────── */

export const founders: readonly MiembroEquipo[] = [
  { nombre: "Victoria",   rol: "Co-fundadora",       iniciales: "V" },
  { nombre: "Florentina", rol: "Co-fundadora",       iniciales: "F" },
] as const

/* Alias retro-compatible — uso interno en NosotrosPreview de la home. */
export const equipo = founders

/* ─── EQUIPO EXTENDIDO (por áreas) ────────────────────────────────────────── */

export const team: readonly EquipoArea[] = [
  {
    area: "Comunicación",
    miembros: ["Soledad", "Maya", "Natalia", "Morena", "Katty"],
  },
  {
    area: "Diseño",
    miembros: ["Andrea", "Manuela", "Iara", "María", "Raquel"],
  },
  {
    area: "Performance",
    miembros: ["Gabriela", "Sofía"],
  },
  {
    area: "Producción",
    miembros: ["Valentina", "Josefina", "Camila", "Martina", "Coni"],
  },
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
