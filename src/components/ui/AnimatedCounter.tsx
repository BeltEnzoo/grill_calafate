"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export function AnimatedCounter({ value, suffix = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(value);
      return;
    }
    const duration = 1600;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduce]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl text-gold md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-cream/55">
        {label}
      </p>
    </div>
  );
}
