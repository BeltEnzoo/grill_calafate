"use client";

import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-4 text-[11px] font-medium uppercase tracking-[0.35em]",
              light ? "text-gold" : "text-earth",
            )}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-display text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl",
            light ? "text-cream" : "text-charcoal",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-6 text-base leading-relaxed md:text-lg",
              light ? "text-cream/70" : "text-charcoal/65",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
