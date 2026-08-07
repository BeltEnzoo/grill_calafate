"use client";

import { events } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";

export function Events() {
  return (
    <section id="eventos" className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={events.eyebrow}
          title={events.title}
          description={events.description}
        />

        {/* Full-bleed cinematic photo */}
        <Reveal className="mt-14">
          <div className="group relative aspect-[21/9] min-h-[240px] overflow-hidden md:min-h-[360px]">
            <MediaImage
              src={events.image}
              alt="Salón de eventos Grill Calafate"
              sizes="100vw"
              label="Salón de eventos"
            />
            <div className="absolute inset-0 bg-charcoal/35" />
            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <p className="max-w-md font-display text-2xl text-cream md:text-4xl">
                Un escenario para tus momentos más importantes.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.types.map((type, i) => (
            <Reveal key={type.name} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-sm bg-white shadow-[0_12px_40px_rgba(34,33,33,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,33,33,0.12)]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <MediaImage
                    src={type.image}
                    alt={type.name}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    label={type.name}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-charcoal">
                    {type.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {type.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button href={events.cta.href}>{events.cta.label}</Button>
        </Reveal>
      </div>
    </section>
  );
}
