"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { brand } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contacto"
          title="Estamos listos para recibirte."
          description="Reservá tu mesa o planificá tu evento con nosotros."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="space-y-5 rounded-sm bg-white p-8 shadow-[0_20px_60px_rgba(34,33,33,0.08)] md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Nombre" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Teléfono" name="phone" type="tel" />
              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
                >
                  Interés
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-earth"
                  defaultValue="restaurante"
                >
                  <option value="restaurante">Reservar mesa</option>
                  <option value="eventos">Eventos</option>
                  <option value="shows">Shows</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-earth"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                {sent ? "Mensaje enviado ✓" : "Enviar consulta"}
              </Button>
              {sent && (
                <p className="text-sm text-earth">
                  Gracias. Te responderemos a la brevedad.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <ul className="space-y-5 text-sm text-charcoal/70">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-earth" />
                  <span>{brand.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-earth" />
                  <a href={`tel:${brand.phone}`} className="hover:text-charcoal">
                    {brand.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-earth" />
                  <a
                    href={`mailto:${brand.email}`}
                    className="hover:text-charcoal"
                  >
                    {brand.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-earth" />
                  <span>{brand.hours}</span>
                </li>
              </ul>

              <div className="mt-8 flex gap-4">
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition hover:border-earth hover:text-earth"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href={brand.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal transition hover:border-earth hover:text-earth"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href={`https://wa.me/${brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center rounded-full border border-charcoal/10 px-5 text-[11px] uppercase tracking-[0.2em] text-charcoal transition hover:border-earth hover:text-earth"
                >
                  WhatsApp
                </a>
              </div>

              {/* Map embed — El Calafate */}
              <div className="mt-10 flex-1 overflow-hidden rounded-sm shadow-[0_16px_40px_rgba(34,33,33,0.1)] ring-1 ring-charcoal/5">
                <iframe
                  title="Mapa Grill Calafate — El Calafate"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10360.4!2d-72.27!3d-50.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcf8c5d0e0e0e0e0%3A0x0!2sEl%20Calafate!5e0!3m2!1ses!2sar!4v1700000000000"
                  className="h-64 w-full border-0 grayscale contrast-125 md:h-full min-h-[260px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-earth"
      />
    </div>
  );
}
