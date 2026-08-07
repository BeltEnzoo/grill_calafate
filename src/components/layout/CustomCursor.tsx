"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** Cursor personalizado — solo desktop */
export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!fine || !wide) return;
    setEnabled(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.documentElement.classList.add("custom-cursor");

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: hover ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.2 }}
        aria-hidden
      >
        <div className="h-2 w-2 rounded-full bg-cream" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[89] mix-blend-difference"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hover ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.4 }}
        aria-hidden
      >
        <div className="h-10 w-10 rounded-full border border-cream/60" />
      </motion.div>
    </>
  );
}
