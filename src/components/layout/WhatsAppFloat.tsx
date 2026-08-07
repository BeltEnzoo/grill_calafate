"use client";

import Link from "next/link";
import { brand } from "@/content/site";
import { WhatsAppIcon } from "@/components/ui/SocialIcons";

export function WhatsAppFloat() {
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hola Grill Calafate, me gustaría hacer una consulta.",
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.45)] transition hover:scale-105 md:right-8"
      data-cursor="hover"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </Link>
  );
}
