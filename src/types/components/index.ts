import type {
  ElementType,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";

/**
 * Shared base props for all components
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Generic polymorphic helper that merges custom props with native HTML props
 * based on the element tag passed to `as`.
 */
export type PolymorphicComponentProps<
  E extends ElementType,
  P = Record<string, unknown>
> = P & {
  as?: E;
} & Omit<ComponentPropsWithoutRef<E>, keyof P | "as">;

/**
 * Container component types
 */
export type ContainerSize = "default" | "narrow" | "wide" | "full";

export interface ContainerBaseProps extends BaseComponentProps {
  size?: ContainerSize;
}

export type ContainerProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, ContainerBaseProps>;

/**
 * Section component types
 */
export type SectionSpacing = "none" | "compact" | "default" | "spacious";
export type SectionBackground = "transparent" | "navy" | "navy2" | "ink";

export interface SectionBaseProps extends BaseComponentProps {
  spacing?: SectionSpacing;
  background?: SectionBackground;
  ariaLabelledBy?: string;
}

export type SectionProps<E extends ElementType = "section"> =
  PolymorphicComponentProps<E, SectionBaseProps>;

/**
 * SectionHeading component types
 */
export type SectionHeadingAlign = "left" | "center" | "right";
export type SectionHeadingTitleAs = "h1" | "h2" | "h3" | "h4";

export interface SectionHeadingProps extends BaseComponentProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeadingAlign;
  withFlankLines?: boolean;
  titleAs?: SectionHeadingTitleAs;
  titleId?: string;
}

/**
 * Button component types
 */
export type ButtonVariant = "primary" | "outline" | "pill" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string; target?: string; rel?: string } & Omit<
        ComponentPropsWithoutRef<"a">,
        keyof ButtonBaseProps | "href"
      >)
    | ({ href?: undefined } & Omit<
        ComponentPropsWithoutRef<"button">,
        keyof ButtonBaseProps | "href"
      >)
  );

/**
 * Divider component types
 */
export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "line" | "muted" | "glow";
export type DividerSpacing = "none" | "sm" | "md" | "lg";

export interface DividerProps extends BaseComponentProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  spacing?: DividerSpacing;
}

/**
 * Badge component types
 */
export type BadgeVariant = "pill" | "text" | "glow";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends BaseComponentProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
}
