import type { ElementType } from "react";
import type { ContainerProps } from "@/types/components";
import { cn } from "@/utils/cn";

const SIZE_MAP = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[1440px]",
  full: "w-full",
} as const;

export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps & { [key: string]: unknown }) {
  const Element = Component as ElementType;

  return (
    <Element
      className={cn(
        "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12",
        SIZE_MAP[size],
        className
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}
