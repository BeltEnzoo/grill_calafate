import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { brand, navLinks } from "@/content/site";
import { BrandMark } from "@/components/ui/BrandMark";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-cream/10 bg-charcoal text-cream">
      <div className="patagonia-grain pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 md:px-8 md:py-20">
        <div>
          <BrandMark size="md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">
            Restaurante, convenios con agencias de viajes y salón de eventos en
            el corazón de la Patagonia.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-cream/60 transition hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={brand.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-cream/60 transition hover:text-gold"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Accesos
          </p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/65 transition hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-earth" />
              {brand.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-earth" />
              <a href={`tel:${brand.phone}`} className="hover:text-cream">
                {brand.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-earth" />
              <a href={`mailto:${brand.email}`} className="hover:text-cream">
                {brand.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/40 md:flex-row md:px-8">
          <p>
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
          <p>El Calafate · Santa Cruz · Argentina</p>
        </div>
      </div>
    </footer>
  );
}
