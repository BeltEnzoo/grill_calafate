/**
 * Grill Calafate — Contenido editable centralizado
 * Reemplazá textos, imágenes y datos desde este archivo.
 * Imágenes: poné archivos en /public/images/... y actualizá las rutas.
 */

export const brand = {
  name: "Grill Calafate",
  tagline: "Experiencia Patagónica",
  location: "El Calafate, Santa Cruz, Argentina",
  phone: "+54 9 2902 000000",
  whatsapp: "5492902000000",
  email: "info@grillcalafate.com",
  address: "El Calafate, Santa Cruz, Argentina",
  hours: "Todos los días · 12:00 – 15:00 / 19:00 – 23:30",
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

export const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#restaurante", label: "Restaurante" },
  { href: "#agencias", label: "Agencias" },
  { href: "#eventos", label: "Eventos" },
  { href: "#shows", label: "Shows" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  title: "Viví la verdadera experiencia Patagónica.",
  subtitle:
    "Gastronomía premium, convenios con agencias de viajes y eventos exclusivos en El Calafate.",
  primaryCta: { label: "Reservar Mesa", href: "#contacto" },
  secondaryCta: { label: "Conocer Más", href: "#nosotros" },
  /** Reemplazar: /public/images/hero.jpg o video en /public/videos/hero.mp4 */
  image: "/images/hero.jpg",
  video: "",
};

export const about = {
  eyebrow: "Sobre nosotros",
  title: "Donde el fuego, la hospitalidad y la celebración se encuentran.",
  lead: "En Grill Calafate ofrecemos parrilla patagónica de alto nivel, convenios para agencias de viajes y un salón para momentos únicos.",
  blocks: [
    {
      title: "Nuestra historia",
      text: "Nacimos en El Calafate con una visión clara: honrar la magia de la Patagonia desde el primer corte en la parrilla hasta la última copa de la noche.",
      image: "/images/about-1.jpg",
      imageAlt: "Ambiente Grill Calafate — reemplazar imagen",
    },
    {
      title: "Experiencia",
      text: "Cada detalle está pensado para quien busca calidad: sabores de autor, atención a grupos de agencias y un salón listo para celebrar con elegancia.",
      image: "/images/about-2.jpg",
      imageAlt: "Experiencia gastronómica — reemplazar imagen",
    },
    {
      title: "Compromiso",
      text: "Trabajamos con productores locales y un equipo que vive la hospitalidad como un arte. Calidad, confianza y autenticidad en cada encuentro.",
      image: "/images/about-3.jpg",
      imageAlt: "Ambiente del restaurante — reemplazar imagen",
    },
  ],
  stats: [
    { value: 12, suffix: "+", label: "Años de experiencia" },
    { value: 50, suffix: "k+", label: "Comensales felices" },
    { value: 40, suffix: "+", label: "Agencias aliadas" },
    { value: 200, suffix: "+", label: "Eventos realizados" },
  ],
};

export const restaurant = {
  eyebrow: "Restaurante",
  title: "El fuego como lenguaje.",
  description:
    "Carnes premium, cordero patagónico, pastas artesanales, postres de autor y una cava de vinos seleccionados.",
  cta: { label: "Ver Carta", href: "#contacto" },
  highlights: [
    { name: "Carnes", image: "/images/food-carnes.jpg" },
    { name: "Cordero Patagónico", image: "/images/food-cordero.jpg" },
    { name: "Pastas", image: "/images/food-pastas.jpg" },
    { name: "Postres", image: "/images/food-postres.jpg" },
    { name: "Vinos", image: "/images/food-vinos.jpg" },
  ],
};

/** Convenios con agencias de viajes (no vendemos excursiones) */
export const agencies = {
  eyebrow: "Para agencias de viajes",
  title: "Traé a tus viajeros. Nosotros los recibimos.",
  description:
    "Trabajamos con agencias de El Calafate y de todo el país: ustedes traen a sus clientes al restaurante y acceden a condiciones preferenciales.",
  image: "/images/salon-eventos.jpg",
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
  image: "/images/salon-eventos.jpg",
  types: [
    {
      name: "Casamientos",
      description: "Bodas íntimas o grandes celebraciones con servicio integral.",
      image: "/images/event-casamientos.jpg",
    },
    {
      name: "Cumpleaños",
      description: "Fiestas memorables con gastronomía y ambientación a medida.",
      image: "/images/event-cumpleanos.jpg",
    },
    {
      name: "Empresas",
      description: "Convenciones, incentives y cenas corporativas de alto nivel.",
      image: "/images/event-empresas.jpg",
    },
    {
      name: "Eventos privados",
      description: "Encuentros exclusivos con la atención que merecés.",
      image: "/images/event-privados.jpg",
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
  eyebrow: "Calendario de shows",
  title: "Noches que se sienten.",
  description:
    "Música en vivo, encuentros y experiencias especiales. Explorá el mes y elegí tu noche.",
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
  { src: "/images/galeria-parrilla.jpg", alt: "Parrilla y carne a la brasa", span: "wide" as const },
  { src: "/images/galeria-corte.jpg", alt: "Corte premium a la parrilla", span: "tall" as const },
  { src: "/images/food-vinos.jpg", alt: "Selección de vinos", span: "normal" as const },
  { src: "/images/salon-eventos.jpg", alt: "Salón de eventos", span: "normal" as const },
  { src: "/images/food-pastas.jpg", alt: "Pastas de la casa", span: "wide" as const },
  { src: "/images/event-privados.jpg", alt: "Mesa para eventos", span: "normal" as const },
];

export const instagramFeed = [
  { src: "/images/ig-1.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/ig-2.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/ig-3.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/ig-4.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/ig-5.jpg", href: "https://www.instagram.com/grillcalafate/" },
  { src: "/images/ig-6.jpg", href: "https://www.instagram.com/grillcalafate/" },
];
