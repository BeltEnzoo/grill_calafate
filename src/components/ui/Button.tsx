"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-gold text-charcoal hover:bg-cream shadow-[0_8px_30px_rgba(255,200,87,0.25)]",
  secondary:
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold backdrop-blur-sm",
  ghost: "bg-transparent text-cream hover:text-gold",
  outline:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-earth hover:text-earth",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
    "rounded-sm px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em]",
    "transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
    variants[variant],
    className,
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"
      />
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {inner}
    </motion.button>
  );
}
