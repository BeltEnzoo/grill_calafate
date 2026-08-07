"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-cream/10 bg-charcoal/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="#inicio" className="group relative z-50" data-cursor="hover">
          <span className="font-display text-xl tracking-wide text-cream md:text-2xl">
            Grill{" "}
            <span className="text-gold transition group-hover:text-cream">
              Calafate
            </span>
          </span>
          <span className="mt-0.5 block text-[9px] uppercase tracking-[0.35em] text-cream/45">
            {brand.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.22em] text-cream/70 transition hover:text-gold"
              data-cursor="hover"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            className="rounded-sm bg-gold px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition hover:bg-cream"
            data-cursor="hover"
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-50 text-cream lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-charcoal px-8 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-6" aria-label="Móvil">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
