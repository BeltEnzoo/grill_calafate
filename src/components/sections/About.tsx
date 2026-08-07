"use client";

import { about } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  return (
    <section id="nosotros" className="relative bg-cream py-24 md:py-32">
      <div className="patagonia-grain pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.lead}
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {about.blocks.map((block, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={block.title}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <Reveal
                  direction={reverse ? "left" : "right"}
                  className={reverse ? "md:order-2" : ""}
                >
                  <div className="group relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                    <MediaImage
                      src={block.image}
                      alt={block.imageAlt}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      label={block.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60" />
                  </div>
                </Reveal>

                <Reveal
                  direction={reverse ? "right" : "left"}
                  delay={0.1}
                  className={reverse ? "md:order-1" : ""}
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-earth">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 font-display text-3xl text-charcoal md:text-4xl">
                    {block.title}
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/65">
                    {block.text}
                  </p>
                  <div className="mt-8 h-px w-16 bg-gold" />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats band — distinctive element */}
      <div className="relative mt-28 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,200,87,0.12),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-16 md:grid-cols-4 md:px-8 md:py-20">
          {about.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
