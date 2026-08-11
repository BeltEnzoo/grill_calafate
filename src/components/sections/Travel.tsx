"use client";

import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { travel } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";

export function Travel() {
  return (
    <section
      id="viajes"
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-slate/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-earth/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={travel.eyebrow}
          title={travel.title}
          description={travel.description}
          light
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travel.excursions.map((ex, i) => (
            <Reveal key={ex.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-cream/[0.03] shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-cream/10 transition duration-500 hover:-translate-y-1 hover:ring-gold/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <MediaImage
                    src={ex.image}
                    alt={ex.name}
                    sizes="(max-width: 640px) 100vw, 25vw"
                    label={ex.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-70" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-sm bg-charcoal/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur-md">
                    <Clock className="h-3 w-3 text-gold" />
                    {ex.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-cream">{ex.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/55">
                    {ex.description}
                  </p>
                  <Link
                    href={ex.href}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold transition group-hover:gap-3"
                    data-cursor="hover"
                  >
                    Más información
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
