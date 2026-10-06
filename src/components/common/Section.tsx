import type { ElementType } from "react";
import type { SectionProps } from "@/types/components";
import { cn } from "@/utils/cn";

const SPACING_MAP = {
  none: "py-0",
  compact: "py-8 md:py-12",
  default: "py-16 md:py-24",
  spacious: "py-24 md:py-32",
} as const;

const BG_MAP = {
  transparent: "bg-transparent",
  navy: "bg-navy",
  navy2: "bg-navy-2",
  ink: "bg-ink",
} as const;

export function Section({
  as: Component = "section",
  id,
  spacing = "default",
  background = "transparent",
  ariaLabelledBy,
  className,
  children,
  ...rest
}: SectionProps & { [key: string]: unknown }) {
  const Element = Component as ElementType;

  return (
    <Element
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full",
        SPACING_MAP[spacing],
        BG_MAP[background],
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}
