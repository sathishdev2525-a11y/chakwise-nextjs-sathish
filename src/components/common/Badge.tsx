import type { BadgeProps } from "@/types/components";
import { cn } from "@/utils/cn";

const VARIANT_MAP = {
  pill: "bg-[#030d17d9] border border-gold-2/70 text-[#ffd98a] rounded-full shadow-[0_0_14px_rgba(213,154,61,0.25)]",
  glow: "bg-gold/15 border border-gold text-gold-2 rounded-full shadow-[0_0_18px_rgba(213,154,61,0.35)]",
  text: "bg-transparent text-gold p-0",
} as const;

const SIZE_MAP = {
  sm: "text-[0.68rem] px-3 py-1 tracking-[0.12em]",
  md: "text-xs px-4 py-1.5 tracking-[0.14em]",
} as const;

export function Badge({
  variant = "pill",
  size = "md",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-cinzel uppercase font-semibold select-none",
        VARIANT_MAP[variant],
        variant !== "text" && SIZE_MAP[size],
        className
      )}
    >
      {children}
    </span>
  );
}
