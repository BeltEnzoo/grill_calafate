import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showHover?: boolean;
};

const sizes = {
  sm: "text-xl md:text-2xl",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl",
};

/**
 * Logo tipográfico: Rodizio Grill + Calafate en gold.
 */
export function BrandMark({
  className,
  size = "sm",
  showHover = false,
}: BrandMarkProps) {
  return (
    <span
      className={cn(
        "font-display tracking-wide text-cream",
        sizes[size],
        className,
      )}
    >
      Rodizio Grill{" "}
      <span
        className={cn(
          "text-gold",
          showHover && "transition group-hover:text-cream",
        )}
      >
        Calafate
      </span>
    </span>
  );
}
