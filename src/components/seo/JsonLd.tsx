import { brand } from "@/content/site";

export function JsonLd() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: brand.name,
    image: "https://grillcalafate.com/images/hero.jpg",
    url: "https://grillcalafate.com",
    telephone: brand.phone,
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Calafate",
      addressRegion: "Santa Cruz",
      addressCountry: "AR",
      streetAddress: brand.address,
    },
    servesCuisine: ["Parrilla Argentina", "Patagónica", "Carnes"],
    priceRange: "$$$",
    acceptsReservations: true,
    openingHours: "Mo-Su 12:00-15:00,19:00-23:30",
    sameAs: [brand.social.instagram, brand.social.facebook],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description:
      "Restaurante, agencia de viajes y salón de eventos en El Calafate, Patagonia Argentina.",
    url: "https://grillcalafate.com",
    telephone: brand.phone,
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Calafate",
      addressRegion: "Santa Cruz",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -50.3379,
      longitude: -72.2648,
    },
    sameAs: [brand.social.instagram, brand.social.facebook],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
