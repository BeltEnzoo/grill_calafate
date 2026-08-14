"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { shows } from "@/content/site";
import type { ShowEvent, ShowStatus } from "@/lib/shows";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { Button } from "@/components/ui/Button";
import { cn, formatShowDate } from "@/lib/utils";

const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

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

const statusDot: Record<ShowStatus, string> = {
  hoy: "bg-gold",
  proximo: "bg-slate",
  disponible: "bg-cream/70",
  agotado: "bg-earth",
};

function toKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function daysInMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
}

/** Monday-first weekday index 0-6 */
function mondayIndex(d: Date) {
  return (d.getDay() + 6) % 7;
}

type ShowsProps = {
  events: ShowEvent[];
  source?: "neon" | "google-sheets" | "fallback";
};

export function Shows({ events, source = "fallback" }: ShowsProps) {
  const today = useMemo(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), n.getDate());
  }, []);

  const [cursor, setCursor] = useState(() => startOfMonth(today));
  const [selectedKey, setSelectedKey] = useState<string | null>(() => {
    const withEvent = events.find((e) => e.date >= toKey(today));
    return withEvent?.date ?? events[0]?.date ?? null;
  });

  const byDate = useMemo(() => {
    const map = new Map<string, ShowEvent[]>();
    for (const ev of events) {
      const list = map.get(ev.date) ?? [];
      list.push(ev);
      map.set(ev.date, list);
    }
    return map;
  }, [events]);

  const cells = useMemo(() => {
    const first = startOfMonth(cursor);
    const total = daysInMonth(cursor);
    const lead = mondayIndex(first);
    const result: Array<{ date: Date | null; key: string | null }> = [];

    for (let i = 0; i < lead; i++) result.push({ date: null, key: null });
    for (let day = 1; day <= total; day++) {
      const date = new Date(cursor.getFullYear(), cursor.getMonth(), day);
      result.push({ date, key: toKey(date) });
    }
    while (result.length % 7 !== 0) result.push({ date: null, key: null });
    return result;
  }, [cursor]);

  const selectedEvents = selectedKey ? (byDate.get(selectedKey) ?? []) : [];
  const monthLabel = cursor.toLocaleDateString("es-AR", {
    month: "long",
    year: "numeric",
  });

  const upcoming = [...events]
    .filter((e) => e.date >= toKey(today))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 4);

  const prevMonth = () =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1));
  const nextMonth = () =>
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1));

  return (
    <section id="shows" className="relative bg-charcoal py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,200,87,0.08),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={shows.eyebrow}
          title={shows.title}
          description={shows.description}
          light
        />

        {source === "neon" && (
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-cream/30">
            Calendario en vivo
          </p>
        )}
        {source === "google-sheets" && (
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-cream/30">
            Actualizado desde Google Sheets
          </p>
        )}

        {/* Monthly schedules */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {shows.schedules.map((schedule, i) => (
            <Reveal key={schedule.month} delay={i * 0.08}>
              <div className="h-full border-t border-cream/15 pt-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl text-cream">
                  {schedule.month}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream/60">
                  {schedule.generalHours && (
                    <p>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-cream/35">
                        Horario general
                      </span>
                      <span className="mt-1 block text-cream/85">
                        {schedule.generalHours}
                      </span>
                    </p>
                  )}

                  {schedule.shifts.length > 0 && (
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-cream/35">
                        Turnos de cena
                      </span>
                      <ul className="mt-2 space-y-2">
                        {schedule.shifts.map((shift) => (
                          <li key={shift.name} className="text-cream/85">
                            <span className="text-cream/50">{shift.name}:</span>{" "}
                            {shift.hours}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {schedule.lastEntry && (
                    <p>
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-cream/35">
                        Último ingreso
                      </span>
                      <span className="mt-1 block text-cream/85">
                        {schedule.lastEntry}
                      </span>
                    </p>
                  )}

                  <p className="border-t border-cream/10 pt-4">
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gold/80">
                      Show exclusivo
                    </span>
                    <span className="mt-1 block font-display text-xl text-cream">
                      {schedule.showTime}
                    </span>
                    <span className="mt-1 block text-xs text-cream/40">
                      {shows.showHint}
                    </span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="max-w-3xl text-sm leading-relaxed text-cream/45 md:text-base">
            {shows.note}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Calendar grid */}
          <Reveal>
            <div className="rounded-sm bg-cream/[0.03] p-5 ring-1 ring-cream/10 md:p-8">
              <div className="mb-6 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={prevMonth}
                  aria-label="Mes anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition hover:border-gold hover:text-gold"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <h3 className="font-display text-2xl capitalize text-cream md:text-3xl">
                  {monthLabel}
                </h3>
                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Mes siguiente"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition hover:border-gold hover:text-gold"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-3 grid grid-cols-7 gap-1.5 md:gap-2">
                {WEEKDAYS.map((d) => (
                  <div
                    key={d}
                    className="py-2 text-center text-[10px] uppercase tracking-[0.2em] text-cream/40"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1.5 md:gap-2">
                {cells.map((cell, i) => {
                  if (!cell.date || !cell.key) {
                    return <div key={`empty-${i}`} className="aspect-square" />;
                  }

                  const dayEvents = byDate.get(cell.key) ?? [];
                  const hasEvents = dayEvents.length > 0;
                  const isToday = cell.key === toKey(today);
                  const isSelected = cell.key === selectedKey;
                  const primary = dayEvents[0];

                  return (
                    <button
                      key={cell.key}
                      type="button"
                      onClick={() => setSelectedKey(cell.key)}
                      data-cursor="hover"
                      className={cn(
                        "group relative flex aspect-square flex-col items-center justify-center rounded-sm transition duration-300",
                        hasEvents
                          ? "bg-cream/[0.06] hover:bg-cream/[0.1]"
                          : "hover:bg-cream/[0.04]",
                        isSelected && "ring-2 ring-gold bg-gold/10",
                        isToday && !isSelected && "ring-1 ring-cream/30",
                      )}
                      aria-label={`${cell.date.getDate()} de ${monthLabel}${hasEvents ? `, ${dayEvents.length} evento(s)` : ""}`}
                      aria-pressed={isSelected}
                    >
                      <span
                        className={cn(
                          "text-sm font-medium md:text-base",
                          isSelected
                            ? "text-gold"
                            : hasEvents
                              ? "text-cream"
                              : "text-cream/35",
                        )}
                      >
                        {cell.date.getDate()}
                      </span>

                      {hasEvents && (
                        <span className="mt-1 flex gap-0.5">
                          {dayEvents.slice(0, 3).map((ev) => (
                            <span
                              key={ev.id}
                              className={cn(
                                "h-1.5 w-1.5 rounded-full",
                                statusDot[ev.status],
                              )}
                            />
                          ))}
                        </span>
                      )}

                      {primary?.status === "hoy" && (
                        <span className="absolute right-1 top-1 hidden h-1.5 w-1.5 rounded-full bg-gold md:block" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-4 border-t border-cream/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-cream/45">
                <Legend color="bg-gold" label="Hoy" />
                <Legend color="bg-slate" label="Próximo" />
                <Legend color="bg-cream/70" label="Disponible" />
                <Legend color="bg-earth" label="Agotado" />
              </div>
            </div>
          </Reveal>

          {/* Selected day detail */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {selectedKey
                  ? formatShowDate(selectedKey)
                  : "Seleccioná un día"}
              </p>

              <div className="mt-4 flex-1">
                <AnimatePresence mode="wait">
                  {selectedEvents.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-sm border border-dashed border-cream/15 px-6 text-center"
                    >
                      <p className="font-display text-2xl text-cream/70">
                        Sin shows este día
                      </p>
                      <p className="mt-3 max-w-xs text-sm text-cream/40">
                        Elegí una fecha marcada en el calendario para ver el
                        detalle.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={selectedKey}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="space-y-4"
                    >
                      {selectedEvents.map((ev) => (
                        <article
                          key={ev.id}
                          className={cn(
                            "overflow-hidden rounded-sm ring-1 ring-cream/10",
                            ev.status === "agotado" && "opacity-75",
                          )}
                        >
                          <div className="relative aspect-[16/10]">
                            <MediaImage
                              src={ev.image}
                              alt={ev.title}
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              label={ev.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                            <span
                              className={cn(
                                "absolute left-4 top-4 rounded-sm px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em]",
                                statusStyles[ev.status],
                              )}
                            >
                              {statusLabel[ev.status]}
                            </span>
                          </div>
                          <div className="bg-cream/[0.03] p-6">
                            <p className="text-[11px] uppercase tracking-[0.22em] text-cream/45">
                              {ev.time} hs
                            </p>
                            <h4 className="mt-2 font-display text-2xl text-cream">
                              {ev.title}
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-cream/55">
                              {ev.description}
                            </p>
                            {ev.status === "agotado" ? (
                              <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-cream/35">
                                Sin cupos
                              </p>
                            ) : (
                              <div className="mt-5">
                                <Button href="whatsapp" variant="primary">
                                  Reservar
                                </Button>
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Upcoming strip */}
        {upcoming.length > 0 && (
          <Reveal className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                  Próximos
                </p>
                <h3 className="mt-2 font-display text-2xl text-cream md:text-3xl">
                  Lo que se viene
                </h3>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {upcoming.map((ev) => (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => {
                    const d = new Date(ev.date + "T12:00:00");
                    setCursor(startOfMonth(d));
                    setSelectedKey(ev.date);
                  }}
                  className="group overflow-hidden rounded-sm text-left ring-1 ring-cream/10 transition hover:ring-gold/40"
                  data-cursor="hover"
                >
                  <div className="relative aspect-[4/3]">
                    <MediaImage
                      src={ev.image}
                      alt={ev.title}
                      sizes="25vw"
                      label={ev.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
                    <span
                      className={cn(
                        "absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[9px] uppercase tracking-[0.18em]",
                        statusStyles[ev.status],
                      )}
                    >
                      {statusLabel[ev.status]}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cream/55">
                        {formatShowDate(ev.date)} · {ev.time}
                      </p>
                      <p className="mt-1 font-display text-lg text-cream">
                        {ev.title}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={cn("h-2 w-2 rounded-full", color)} />
      {label}
    </span>
  );
}
