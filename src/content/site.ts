/**
 * Grill Calafate — Contenido editable centralizado
 * Reemplazá textos, imágenes y datos desde este archivo.
 * Imágenes: poné archivos en /public/images/... y actualizá las rutas.
 */

export const brand = {
  name: "Rodizio Grill Calafate",
  tagline: "Experiencia Patagónica",
  location: "El Calafate, Santa Cruz, Argentina",
  phone: "+54 2966 54-9790",
  whatsapp: "542966549790",
  email: "info@grillcalafate.com",
  address: "El Calafate, Santa Cruz, Argentina",
  hours: "Todos los días · Horarios según temporada (ver Shows)",
  /** Mensaje prellenado al abrir WhatsApp desde “Reservar” */
  whatsappReserveText:
    "Hola! Quiero reservar una mesa en Rodizio Grill Calafate.",
  social: {
    instagram: "https://www.instagram.com/grillcalafate/",
    facebook: "https://www.facebook.com/grillcalafate",
  },
  /** Paleta oficial (Manual de Identidad) */
  colors: {
    charcoal: "#222121",
    slate: "#628395",
    earth: "#9E6240",
    cream: "#F3F0EB",
    gold: "#FFC857",
  },
} as const;

/** Link directo a WhatsApp (chat) con mensaje opcional */
export function whatsappLink(text?: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    text ?? brand.whatsappReserveText,
  )}`;
}

export const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#restaurante", label: "Menú" },
  { href: "#agencias", label: "Agencias" },
  { href: "#eventos", label: "Eventos" },
  { href: "#shows", label: "Horarios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  title: "Viví la verdadera experiencia Patagónica.",
  subtitle:
    "Gastronomía premium, convenios con agencias de viajes y eventos exclusivos en El Calafate.",
  primaryCta: { label: "Reservar Mesa", href: "whatsapp" },
  secondaryCta: { label: "Conocer Más", href: "#nosotros" },
  /** Reemplazar: /public/images/hero.jpg o video en /public/videos/hero.mp4 */
  image: "/images/hero-fire.jpg",
  video: "",
};

export const about = {
  eyebrow: "Sobre nosotros",
  title: "Donde el fuego, la hospitalidad y la celebración se encuentran.",
  lead: "En Rodizio Grill Calafate ofrecemos espeto corrido patagónico de alto nivel: un sistema de cocción y un formato de servicio gastronómico muy popular en Brasil (conocido como rodízio).",
  blocks: [
    {
      title: "Experiencia Rodizio Grill Calafate",
      highlight: "Fuego patagónico en tu mesa. Buffet libre sin límites.",
      text: "Cada detalle está pensado para quienes buscan excelencia: los mejores cortes de carne premium servidos al estilo rodizio y una completa propuesta de salad bar e isla de cocina ilimitada, directo a tu mesa.",
      image: "/images/about-fuego.jpg",
      imageAlt: "Fuego y brasas en Rodizio Grill Calafate",
    },
    {
      title: "Nuestro compromiso",
      text: "Seleccionamos materias primas de primera calidad y contamos con un equipo apasionado que entiende la hospitalidad como un arte. Nos mueve la excelencia, la confianza y la autenticidad en cada encuentro alrededor del fuego.",
      image: "/images/about-mesa.jpg",
      imageAlt: "Mesa y hospitalidad Grill Calafate",
    },
  ],
};

export const restaurant = {
  eyebrow: "Menú",
  title: "Menú Rodizio Grill Calafate",
  description:
    "Una propuesta gastronómica diseñada para los amantes del buen comer: un recorrido libre y continuo por los mejores cortes a las brasas, acompañados por una selección fresca y artesanal en nuestras estaciones de buffet.",
  cta: { label: "Reservar mesa", href: "whatsapp" },
  chapters: [
    {
      id: "fuego",
      title: "Fuego & Brasas",
      intro:
        "Nuestros maestros parrilleros llevan a tu mesa una secuencia ilimitada de carnes seleccionadas, trinchadas al momento sobre espadas y cocinadas a las brasas de carbón y leña.",
      categories: [
        {
          name: "Vacuno Premium",
          items: [
            {
              name: "Asado de Tira",
              description: "El clásico infaltable y dorado en su punto justo.",
            },
            {
              name: "Picanha",
              description:
                "La estrella del rodizio, con su capa perfecta de grasa crujiente.",
            },
            {
              name: "Bife de Chorizo",
              description:
                "Corte emblemático de intenso sabor y ternura.",
            },
            {
              name: "Ojo de Bife",
              description:
                "Veteado perfecto que garantiza máxima jugosidad.",
            },
            {
              name: "Colita de Cuadril",
              description: "Magra, tierna y sazonada a la perfección.",
            },
            {
              name: "Entraña",
              description:
                "Dorada por fuera, jugosa por dentro y llena de carácter.",
            },
            {
              name: "Lomo",
              description:
                "La máxima expresión de suavidad y delicadeza.",
            },
          ],
        },
        {
          name: "Cerdo Especial",
          items: [
            {
              name: "Bondiola",
              description:
                "Tierna, bien sazonada y lentamente caramelizada.",
            },
            {
              name: "Ribs de Cerdo a la Barbacoa",
              description:
                "Costillas tiernas glaseadas en salsa barbacoa artesanal.",
            },
            {
              name: "Matambrito de Cerdo",
              description:
                "Crocante por fuera, tierno por dentro y con un toque de limón.",
            },
          ],
        },
        {
          name: "Aves Seleccionadas",
          items: [
            {
              name: "Pata Muslo Deshuesada",
              description:
                "Tierna e impregnada del humo característico de la parrilla.",
            },
            {
              name: "Brochette de Pollo",
              description:
                "Cubos marinados intercalados con vegetales de estación.",
            },
            {
              name: "Alitas Crocantes",
              description: "Dorado perfecto y sabor intenso.",
            },
            {
              name: "Patitas de Pollo",
              description:
                "Preparación clásica pensada para el disfrute de toda la familia.",
            },
          ],
        },
        {
          name: "Especialidades Patagónicas",
          items: [
            {
              name: "Cordero a la Estaca",
              description:
                "Símbolo de nuestra tierra, cocinado lentamente al fuego directo.",
            },
            {
              name: "Lomo de Guanaco",
              description:
                "Corte autóctono de caza, magro, de sabor único y textura suave.",
            },
          ],
        },
        {
          name: "Achuras & Embutidos",
          items: [
            {
              name: "Mollejas",
              description:
                "Crocantes por fuera y de textura cremosa por dentro.",
            },
            {
              name: "Chorizos",
              description: "Puro cerdo.",
            },
          ],
        },
      ],
    },
    {
      id: "recepcion",
      title: "Recepción a la Mesa",
      intro:
        "Para dar la bienvenida a tu experiencia, servimos directamente en tu mesa una selección de clásicos bien calientes.",
      categories: [
        {
          name: "",
          items: [
            {
              name: "Empanadas Criollas",
              description:
                "Rellenas de carne cortada a cuchillo y auténtico cordero patagónico.",
            },
            {
              name: "Provoleta a las Brasas",
              description:
                "Queso provoleta dorado al fuego, crocante por fuera y fundido en el corazón.",
            },
            {
              name: "Escabeche de Berenjenas",
              description: "Elaboración artesanal de la casa.",
            },
            {
              name: "Papas Fritas Crocantes",
              description: "Recién hechas, doradas y livianas.",
            },
            {
              name: "Panera Artesanal",
              description: "Variedad de panes horneados diariamente.",
            },
          ],
        },
      ],
    },
    {
      id: "salad-bar",
      title: "Salad Bar & Estaciones Libres",
      intro:
        "Un recorrido autoservicio diseñado para complementar y refrescar cada bocado de carne.",
      categories: [
        {
          name: "Ensaladas Especiales & Frescas",
          items: [
            {
              name: "Caprese",
              description:
                "Tomates frescos, mozzarella fiordilatte y albahaca natural.",
            },
            {
              name: "Mediterránea",
              description:
                "Vegetales frescos, olivas y un toque de aceite de oliva virgen extra.",
            },
            {
              name: "Rúcula & Parmesano",
              description:
                "Hojas de rúcula fresca con láminas de queso parmesano madurado.",
            },
            {
              name: "Verduras Asadas",
              description:
                "Vegetales de estación caramelizados al horno de barro.",
            },
            {
              name: "Cous Cous Patagónico",
              description:
                "Esponjoso cous cous hidratado con vegetales y finas hierbas.",
            },
            {
              name: "Judías Verdes & Papas",
              description:
                "Combinación fresca y crocante sazonada a las hierbas.",
            },
            {
              name: "Ensalada Alemana",
              description:
                "Salchichas seleccionadas, papas y aderezo suave de mostaza.",
            },
            {
              name: "Rusa Tradicional",
              description:
                "Papas, zanahorias y arvejas con mayonesa casera.",
            },
            {
              name: "Opciones Clásicas",
              description:
                "Mix de hojas verdes, ensalada mixta, ensalada de pepino y papa, ensalada de papa, huevo y verdeo, ensalada de legumbres y combinación de palmitos con tomates cherry.",
            },
          ],
        },
        {
          name: "Charcutería & Quesos",
          items: [
            {
              name: "Estación de Fiambres",
              description:
                "Selección de fiambres artesanales, curados y embutidos de calidad premium.",
            },
            {
              name: "Estación de Quesos",
              description:
                "Variedad de quesos duros, semiduros y suaves de elaboración regional.",
            },
            {
              name: "Estación de Frutas Frescas",
              description:
                "Frutas de estación seleccionadas y cortadas al momento para aportar frescura y balance.",
            },
          ],
        },
      ],
    },
  ],
};

/** Convenios con agencias de viajes (no vendemos excursiones) */
export const agencies = {
  eyebrow: "Para agencias de viajes",
  title: "Traé a tus viajeros. Nosotros los recibimos.",
  description:
    "Trabajamos con agencias de El Calafate y de todo el país: ustedes traen a sus clientes al restaurante y acceden a condiciones preferenciales.",
  image: "/images/agencias-ambiente.jpg",
  steps: [
    {
      step: "01",
      title: "Contactanos",
      text: "Escribinos o llamanos para activar el convenio de tu agencia.",
    },
    {
      step: "02",
      title: "Traé tu grupo",
      text: "Reservá mesa para tus pasajeros: individuales, parejas o grupos.",
    },
    {
      step: "03",
      title: "Disfruten el descuento",
      text: "Tus clientes viven la experiencia Grill Calafate con beneficio especial.",
    },
  ],
  benefits: [
    {
      title: "Descuentos exclusivos",
      description:
        "Tarifas preferenciales para pasajeros de agencias adheridas.",
    },
    {
      title: "Reservas prioritarias",
      description:
        "Mesas aseguradas en horarios clave de almuerzo y cena.",
    },
    {
      title: "Atención a grupos",
      description:
        "Servicio pensado para grupos turísticos, con tiempos y menús ágiles.",
    },
    {
      title: "Experiencia premium",
      description:
        "Parrilla patagónica y ambiente de alto nivel para recomendar con confianza.",
    },
  ],
  cta: {
    label: "Quiero ser agencia aliada",
    href: "#contacto",
  },
};

export const events = {
  eyebrow: "Salón de eventos",
  title: "Celebrá con la Patagonia de fondo.",
  description:
    "Un espacio versátil y elegante para casamientos, cumpleaños, empresas y encuentros privados.",
  image: "/images/eventos-ambiente.jpg",
  types: [
    {
      name: "Casamientos",
      description: "Bodas íntimas o grandes celebraciones con servicio integral.",
      image: "/images/galeria-copas.jpg",
    },
    {
      name: "Cumpleaños",
      description: "Fiestas memorables con gastronomía y ambientación a medida.",
      image: "/images/galeria-vino-1.jpg",
    },
    {
      name: "Empresas",
      description: "Convenciones, incentives y cenas corporativas de alto nivel.",
      image: "/images/galeria-fuego-1.jpg",
    },
    {
      name: "Eventos privados",
      description: "Encuentros exclusivos con la atención que merecés.",
      image: "/images/galeria-vino-2.jpg",
    },
  ],
  cta: { label: "Consultar disponibilidad", href: "#contacto" },
};

export type { ShowStatus } from "@/lib/shows";

/**
 * Los shows viven en Google Sheets (si está configurado)
 * o en `src/content/shows.json` como respaldo.
 * Plantilla CSV: /public/templates/shows-template.csv
 */
export { default as showsEvents } from "./shows.json";

export const shows = {
  eyebrow: "Horarios & Shows",
  title: "Horarios & Shows Exclusivos",
  description:
    "Atendemos todos los días (lunes a lunes) para ofrecerte la experiencia completa de rodizio y buffet libre.",
  schedules: [
    {
      month: "Septiembre",
      generalHours: "18:00 a 00:00 hs",
      lastEntry: "23 hs",
      shifts: [],
      showTime: "22:30 hs",
    },
    {
      month: "Octubre",
      generalHours: "",
      lastEntry: "22:30 hs",
      shifts: [
        { name: "Primer turno", hours: "17:30 a 20:00 hs" },
        { name: "Segundo turno", hours: "20:30 a 00:00 hs" },
      ],
      showTime: "22:30 hs",
    },
    {
      month: "Noviembre",
      generalHours: "",
      lastEntry: "",
      shifts: [
        { name: "Turno Temprano", hours: "17:30 a 19:30 hs" },
        { name: "Turno Central", hours: "20:00 a 22:00 hs" },
        { name: "Turno Cierre", hours: "22:30 a 00:30 hs" },
      ],
      showTime: "23:00 hs",
    },
  ],
  showHint: "Consultar fechas en el calendario",
  note: "Para disfrutar de la experiencia gastronómica junto a nuestros shows exclusivos, te recomendamos realizar tu reserva previa seleccionando el día correspondiente en el calendario de eventos.",
};

export const testimonials = [
  {
    name: "María Fernanda López",
    role: "Buenos Aires",
    photo: "/images/testimonial-1.jpg",
    quote:
      "El cordero patagónico fue inolvidable. El servicio, impecable. Se siente el amor por cada detalle.",
  },
  {
    name: "James & Claire Whitmore",
    role: "Londres",
    photo: "/images/testimonial-2.jpg",
    quote:
      "One of the most elegant dining experiences we've had in South America. Unforgettable.",
  },
  {
    name: "Carolina Méndez",
    role: "Casamiento 2025",
    photo: "/images/testimonial-3.jpg",
    quote:
      "Nuestro casamiento en Grill Calafate superó todo lo que soñamos. Magia pura.",
  },
];

export const gallery = [
  { src: "/images/galeria-fuego-1.jpg", alt: "Fuego y brasas", span: "wide" as const },
  { src: "/images/galeria-copas.jpg", alt: "Mesa preparada", span: "tall" as const },
  { src: "/images/galeria-vino-1.jpg", alt: "Copa de vino", span: "normal" as const },
  { src: "/images/galeria-brasas.jpg", alt: "Brasas en la parrilla", span: "normal" as const },
  { src: "/images/galeria-fuego-2.jpg", alt: "Chispas del fuego", span: "wide" as const },
  { src: "/images/galeria-vino-2.jpg", alt: "Vino tinto en la mesa", span: "normal" as const },
];

export const instagramFeed = [
  { src: "/images/galeria-fuego-2.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/galeria-copas.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/galeria-vino-1.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/galeria-brasas.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/galeria-vino-2.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/galeria-fuego-1.jpg", href: "https://www.instagram.com/grillcalafate/" },
];
