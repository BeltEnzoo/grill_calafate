"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MediaImage } from "@/components/ui/MediaImage";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {hero.video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <MediaImage
            src={hero.image}
            alt="Grill Calafate — experiencia Patagónica"
            priority
            zoom={false}
            label="Hero principal"
          />
        )}
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 vignette" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pb-28"
      >
        <motion.p
          className="mb-5 text-[11px] uppercase tracking-[0.4em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          El Calafate · Patagonia Argentina
        </motion.p>

        <motion.h1
          className="max-w-4xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.title}
        </motion.h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.8 }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#nosotros"
        aria-label="Desplazarse a Sobre nosotros"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/50 transition hover:text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2.8 },
          y: { delay: 2.8, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <ChevronDown className="h-6 w-6" strokeWidth={1.25} />
      </motion.a>
    </section>
  );
}
