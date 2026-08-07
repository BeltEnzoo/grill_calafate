"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaImage } from "@/components/ui/MediaImage";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5500,
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading eyebrow="Testimonios" title="Lo que cuentan quienes nos eligen." />

        <div className="relative mt-16 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm bg-white p-8 shadow-[0_20px_60px_rgba(34,33,33,0.08)] md:p-12"
            >
              <Quote className="h-8 w-8 text-gold/70" strokeWidth={1.25} />
              <p className="mt-6 font-display text-2xl leading-snug text-charcoal md:text-3xl">
                “{t.quote}”
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <MediaImage
                    src={t.photo}
                    alt={t.name}
                    sizes="56px"
                    zoom={false}
                    label={t.name}
                  />
                </div>
                <div>
                  <cite className="not-italic font-medium text-charcoal">
                    {t.name}
                  </cite>
                  <p className="text-sm text-charcoal/50">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-3 bg-charcoal/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
