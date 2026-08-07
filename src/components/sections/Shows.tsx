"use client";

import { shows, type ShowStatus } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { cn, formatShowDate } from "@/lib/utils";

const statusStyles: Record<ShowStatus, string> = {
  hoy: "bg-gold text-charcoal",
  proximo: "bg-slate text-cream",
  disponible: "bg-cream/15 text-cream ring-1 ring-cream/25",
  agotado: "bg-earth/80 text-cream",
};

const statusLabel: Record<ShowStatus, string> = {
  hoy: "Hoy",
  proximo: "Próximo",
  disponible: "Disponible",
  agotado: "Agotado",
};

export function Shows() {
  const sorted = [...shows.events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <section id="shows" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={shows.eyebrow}
          title={shows.title}
          description={shows.description}
          light
        />

        <div className="mt-16 space-y-4">
          {sorted.map((event, i) => (
            <Reveal key={event.id} delay={i * 0.06}>
              <article
                className={cn(
                  "group grid overflow-hidden rounded-sm ring-1 ring-cream/10 transition duration-500 md:grid-cols-[200px_1fr_auto]",
                  event.status === "hoy" && "ring-gold/50",
                  event.status === "agotado" && "opacity-70",
                )}
              >
                <div className="relative aspect-video md:aspect-auto md:h-full">
                  <MediaImage
                    src={event.image}
                    alt={event.title}
                    sizes="200px"
                    label={event.title}
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-6 md:px-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]",
                        statusStyles[event.status],
                      )}
                    >
                      {statusLabel[event.status]}
                    </span>
                    <time
                      dateTime={event.date}
                      className="text-[11px] uppercase tracking-[0.2em] text-cream/45"
                    >
                      {formatShowDate(event.date)} · {event.time}
                    </time>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-cream md:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-cream/55">{event.description}</p>
                </div>
                <div className="flex items-center px-6 pb-6 md:px-8 md:pb-0">
                  {event.status === "agotado" ? (
                    <span className="text-[11px] uppercase tracking-[0.2em] text-cream/35">
                      Sin cupos
                    </span>
                  ) : (
                    <a
                      href="#contacto"
                      className="text-[11px] uppercase tracking-[0.22em] text-gold transition hover:text-cream"
                      data-cursor="hover"
                    >
                      Reservar →
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
