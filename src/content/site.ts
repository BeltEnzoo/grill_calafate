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
  { href: "#viajes", label: "Viajes" },
  { href: "#eventos", label: "Eventos" },
  { href: "#shows", label: "Shows" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  title: "Viví la verdadera experiencia Patagónica.",
  subtitle:
    "Gastronomía premium, excursiones inolvidables y eventos exclusivos en el corazón de El Calafate.",
  primaryCta: { label: "Reservar Mesa", href: "#contacto" },
  secondaryCta: { label: "Conocer Más", href: "#nosotros" },
  /** Reemplazar: /public/images/hero.jpg o video en /public/videos/hero.mp4 */
  image: "/images/hero.jpg",
  video: "",
};

export const about = {
  eyebrow: "Sobre nosotros",
  title: "Donde el fuego, el viaje y la celebración se encuentran.",
  lead: "En Grill Calafate unimos parrilla patagónica, turismo de aventura y un salón para momentos únicos.",
  blocks: [
    {
      title: "Nuestra historia",
      text: "Nacimos en El Calafate con una visión clara: ofrecer una experiencia integral que honre la magia de la Patagonia — desde el primer corte en la parrilla hasta el horizonte de un glaciar.",
      image: "/images/about-1.jpg",
      imageAlt: "Ambiente Grill Calafate — reemplazar imagen",
    },
    {
      title: "Experiencia",
      text: "Cada detalle está pensado para el viajero exigente: sabores de autor, excursiones curadas y un salón listo para celebrar con elegancia.",
      image: "/images/about-2.jpg",
      imageAlt: "Experiencia gastronómica — reemplazar imagen",
    },
    {
      title: "Compromiso",
      text: "Trabajamos con productores locales, guías expertos y un equipo que vive la hospitalidad como un arte. Calidad, confianza y autenticidad en cada encuentro.",
      image: "/images/about-3.jpg",
      imageAlt: "Ambiente del restaurante — reemplazar imagen",
    },
  ],
  stats: [
    { value: 12, suffix: "+", label: "Años de experiencia" },
    { value: 50, suffix: "k+", label: "Comensales felices" },
    { value: 80, suffix: "+", label: "Excursiones al año" },
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

export const travel = {
  eyebrow: "Agencia de viajes",
  title: "La Patagonia, a tu ritmo.",
  description:
    "Excursiones diseñadas para descubrir glaciares, lagos y aventura con la seguridad de quien conoce cada rincón.",
  excursions: [
    {
      name: "Glaciar Perito Moreno",
      description:
        "Navegación y pasarelas frente al icónico glaciar. Una jornada de asombro puro.",
      duration: "Día completo",
      image: "/images/tour-perito.jpg",
      href: "#contacto",
    },
    {
      name: "Navegación Upsala & Onelli",
      description:
        "Canal de los Témpanos, paredón azul y bosque de lengas. Patagonia desde el agua.",
      duration: "8 horas",
      image: "/images/tour-upsala.jpg",
      href: "#contacto",
    },
    {
      name: "Torres del Paine",
      description:
        "Cruce a Chile para contemplar una de las maravillas del sur del mundo.",
      duration: "Día completo",
      image: "/images/tour-paine.jpg",
      href: "#contacto",
    },
    {
      name: "Chaltén & Fitz Roy",
      description:
        "Senderismo en la capital del trekking argentino, con vistas al Fitz Roy.",
      duration: "Día completo",
      image: "/images/tour-chalten.jpg",
      href: "#contacto",
    },
  ],
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
