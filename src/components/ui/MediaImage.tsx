"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { normalizeImageUrl } from "@/lib/images";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
  label?: string;
};

/**
 * Imagen preparada para reemplazo.
 * Si el archivo aún no existe, muestra un placeholder premium de marca.
 */
export function MediaImage({
  src,
  alt,
  className,
  fill = true,
  sizes = "100vw",
  priority = false,
  zoom = true,
  label,
}: Props) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = normalizeImageUrl(src);

  useEffect(() => {
    setFailed(false);
  }, [resolvedSrc]);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full items-end overflow-hidden bg-gradient-to-br from-charcoal via-slate to-earth",
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <div className="patagonia-grain absolute inset-0 opacity-40" />
        <div className="relative z-10 w-full p-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">
            Reemplazar imagen
          </p>
          <p className="mt-1 font-display text-lg text-cream/90">
            {label || alt}
          </p>
          <p className="mt-1 truncate text-xs text-cream/40">{resolvedSrc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full min-h-[1px] w-full overflow-hidden", className)}>
      <Image
        key={resolvedSrc}
        src={resolvedSrc}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        unoptimized
        referrerPolicy="no-referrer"
        className={cn(
          "object-cover transition-transform duration-[1.4s] ease-out",
          zoom && "group-hover:scale-105",
        )}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
