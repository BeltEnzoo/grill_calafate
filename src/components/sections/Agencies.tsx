"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { agencies } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";

export function Agencies() {
  return (
    <section
      id="agencias"
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-slate/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-earth/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={agencies.eyebrow}
          title={agencies.title}
          description={agencies.description}
          light
        />

        {/* How it works */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {agencies.steps.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.08}>
              <article className="h-full rounded-sm bg-cream/[0.03] p-7 ring-1 ring-cream/10">
                <p className="font-display text-3xl text-gold">{item.step}</p>
                <h3 className="mt-4 font-display text-2xl text-cream">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Benefits + image */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="group relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
              <MediaImage
                src={agencies.image}
                alt="Experiencia Grill Calafate para grupos de agencias"
                sizes="(max-width: 1024px) 100vw, 50vw"
                label="Convenio agencias"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Convenio comercial
                </p>
                <p className="mt-2 max-w-sm font-display text-2xl text-cream md:text-3xl">
                  Tus pasajeros comen mejor. Tu agencia gana valor.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                Beneficios
              </p>
              <h3 className="mt-3 font-display text-3xl text-cream md:text-4xl">
                Pensado para operadores turísticos.
              </h3>
            </Reveal>

            <div className="mt-8 space-y-5">
              {agencies.benefits.map((b, i) => (
                <Reveal key={b.title} delay={0.06 * i}>
                  <div className="border-l border-gold/50 pl-5">
                    <h4 className="font-display text-xl text-cream">{b.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-cream/55">
                      {b.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25} className="mt-10">
              <Button href={agencies.cta.href}>{agencies.cta.label}</Button>
              <Link
                href="#contacto"
                className="ml-0 mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cream/50 transition hover:text-gold sm:ml-6 sm:mt-0"
                data-cursor="hover"
              >
                Hablar por WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
