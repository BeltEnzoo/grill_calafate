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
  { href: "#eventos", label: "Eventos" },
  { href: "#shows", label: "Shows" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  title: "Viví la verdadera experiencia Patagónica.",
  subtitle:
    "Gastronomía premium y eventos exclusivos en el corazón de El Calafate.",
  primaryCta: { label: "Reservar Mesa", href: "#contacto" },
  secondaryCta: { label: "Conocer Más", href: "#nosotros" },
  /** Reemplazar: /public/images/hero.jpg o video en /public/videos/hero.mp4 */
  image: "/images/hero.jpg",
  video: "",
};

export const about = {
  eyebrow: "Sobre nosotros",
  title: "Donde el fuego y la hospitalidad se encuentran.",
  lead: "En Grill Calafate ofrecemos parrilla patagónica de alto nivel y un salón listo para celebrar momentos únicos.",
  blocks: [
    {
      title: "Nuestra historia",
      text: "Nacimos en El Calafate con una visión clara: honrar la magia de la Patagonia desde el primer corte en la parrilla hasta la última copa de la noche.",
      image: "/images/about-1.jpg",
      imageAlt: "Ambiente Grill Calafate — reemplazar imagen",
    },
    {
      title: "Experiencia",
      text: "Cada detalle está pensado para quien busca calidad: sabores de autor, un salón elegante y un servicio que convierte cada visita en un recuerdo.",
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
    { value: 120, suffix: "+", label: "Platos signature" },
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

export type ShowStatus = "hoy" | "proximo" | "agotado" | "disponible";

export const shows = {
  eyebrow: "Calendario de shows",
  title: "Noches que se sienten.",
  description: "Música en vivo, encuentros y experiencias especiales en nuestro salón.",
  events: [
    {
      id: "1",
      title: "Noche de Folklore Patagónico",
      date: "2026-08-08",
      time: "21:30",
      image: "/images/show-1.jpg",
      status: "hoy" as ShowStatus,
      description: "Guitarras, voces y el alma del sur.",
    },
    {
      id: "2",
      title: "Jazz & Vinos",
      date: "2026-08-15",
      time: "21:00",
      image: "/images/show-2.jpg",
      status: "proximo" as ShowStatus,
      description: "Trío en vivo con maridaje de la casa.",
    },
    {
      id: "3",
      title: "Cena Show Internacional",
      date: "2026-08-22",
      time: "20:30",
      image: "/images/show-3.jpg",
      status: "disponible" as ShowStatus,
      description: "Menú degustación y espectáculo en vivo.",
    },
    {
      id: "4",
      title: "Tango Bajo las Estrellas",
      date: "2026-07-20",
      time: "22:00",
      image: "/images/show-4.jpg",
      status: "agotado" as ShowStatus,
      description: "Una noche íntima de tango y emoción.",
    },
  ],
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
