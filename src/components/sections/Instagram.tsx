"use client";

import Link from "next/link";
import { brand, instagramFeed } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { InstagramIcon } from "@/components/ui/SocialIcons";

export function InstagramSection() {
  return (
    <section className="relative bg-charcoal py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
                Instagram
              </p>
              <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
                @grillcalafate
              </h2>
            </div>
            <Link
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cream/60 transition hover:text-gold"
              data-cursor="hover"
            >
              <InstagramIcon className="h-4 w-4" />
              Seguir
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {instagramFeed.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.04}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden"
                data-cursor="hover"
                aria-label="Ver en Instagram"
              >
                <MediaImage
                  src={item.src}
                  alt="Publicación Instagram Grill Calafate"
                  sizes="(max-width: 768px) 50vw, 16vw"
                  label="Instagram"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition duration-500 group-hover:bg-charcoal/45 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6 text-cream" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
