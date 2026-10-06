import type { DividerProps } from "@/types/components";
import { cn } from "@/utils/cn";

const VARIANT_MAP = {
  line: "bg-line",
  muted: "bg-white/10",
  glow: "bg-gradient-to-r from-transparent via-line to-transparent",
} as const;

const SPACING_MAP = {
  none: "my-0",
  sm: "my-4",
  md: "my-8",
  lg: "my-12",
} as const;

export function Divider({
  orientation = "horizontal",
  variant = "line",
  spacing = "md",
  className,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block w-[1px] self-stretch mx-4",
          VARIANT_MAP[variant],
          className
        )}
      />
    );
  }

  return (
    <hr
      className={cn(
        "w-full border-0 h-[1px]",
        SPACING_MAP[spacing],
        VARIANT_MAP[variant],
        className
      )}
    />
  );
}
