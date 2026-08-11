"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="galeria" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Momentos que se quedan."
          description="Una selección visual de nuestra cocina, paisajes y celebraciones."
          light
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.src + i}
              delay={i * 0.05}
              className={cn(
                item.span === "wide" && "md:col-span-2",
                item.span === "tall" && "row-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative h-full min-h-[180px] w-full overflow-hidden"
                data-cursor="hover"
                aria-label={`Ampliar: ${item.alt}`}
              >
                <MediaImage
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  label={item.alt}
                />
                <div className="absolute inset-0 bg-charcoal/0 transition duration-500 group-hover:bg-charcoal/35" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/92 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal
            aria-label="Imagen ampliada"
          >
            <button
              type="button"
              className="absolute right-5 top-5 text-cream/70 hover:text-cream"
              aria-label="Cerrar"
              onClick={() => setActive(null)}
            >
              <X className="h-7 w-7" />
            </button>
            <motion.div
              className="relative aspect-[4/3] w-full max-w-5xl overflow-hidden"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <MediaImage
                src={gallery[active].src}
                alt={gallery[active].alt}
                zoom={false}
                label={gallery[active].alt}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
