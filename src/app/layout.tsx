import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://grillcalafate.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grill Calafate | Experiencia Patagónica Premium",
    template: "%s | Grill Calafate",
  },
  description:
    "Restaurante, convenios con agencias de viajes y salón de eventos en El Calafate. Gastronomía premium y celebraciones exclusivas.",
  keywords: [
    "Grill Calafate",
    "restaurante El Calafate",
    "parrilla Patagonia",
    "convenio agencias turismo",
    "salón de eventos",
    "cordero patagónico",
    "asado El Calafate",
  ],
  authors: [{ name: "Grill Calafate" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Grill Calafate",
    title: "Grill Calafate | Experiencia Patagónica Premium",
    description:
      "Viví la verdadera experiencia Patagónica. Restaurante, agencias y eventos en El Calafate.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Grill Calafate — El Calafate, Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grill Calafate | Experiencia Patagónica Premium",
    description: "Gastronomía premium y eventos exclusivos en El Calafate.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#222121",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream font-sans antialiased">{children}</body>
    </html>
  );
}
