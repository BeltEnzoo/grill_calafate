"use client";

import { restaurant } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";

export function Restaurant() {
  return (
    <section id="restaurante" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={restaurant.eyebrow}
          title={restaurant.title}
          description={restaurant.description}
        />

        {/* Masonry gallery — distinctive staggered heights */}
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
          {restaurant.highlights.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06} className="mb-4 break-inside-avoid lg:mb-5">
              <article
                className="group relative overflow-hidden"
                style={{ minHeight: i % 3 === 0 ? 360 : i % 3 === 1 ? 280 : 320 }}
                data-cursor="hover"
              >
                <div className="absolute inset-0">
                  <MediaImage
                    src={item.image}
                    alt={item.name}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    label={item.name}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    Especialidad
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-cream">
                    {item.name}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button href={restaurant.cta.href} variant="outline">
            {restaurant.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
