import Link from "next/link";
import type { ButtonProps, ButtonVariant, ButtonSize } from "@/types/components";
import { cn } from "@/utils/cn";

const VARIANT_MAP: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-[#030c16] font-bold border border-gold hover:bg-gold-2 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(213,154,61,0.3)] active:translate-y-0",
  outline:
    "border-2 border-gold text-gold-2 uppercase tracking-[0.14em] font-semibold bg-[#030d1847] backdrop-blur-md hover:bg-gold hover:text-[#07121c] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(213,154,61,0.26)] active:translate-y-0",
  pill:
    "rounded-full border border-line text-gold-2 uppercase tracking-[0.08em] font-semibold bg-[#05121fb8] backdrop-blur-md hover:bg-gold hover:text-[#030c16] hover:border-gold-2 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(213,154,61,0.28)] active:translate-y-0",
  ghost:
    "text-gold hover:text-cream bg-transparent hover:bg-white/5 active:bg-white/10",
};

const SIZE_MAP: Record<ButtonSize, string> = {
  sm: "text-xs px-4 py-2 min-h-[38px] gap-2",
  md: "text-sm px-6 py-2.5 min-h-[46px] gap-2.5",
  lg: "text-base px-8 py-3.5 min-h-[58px] gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-sans transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    VARIANT_MAP[variant],
    SIZE_MAP[size],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, target, rel, ...restAnchorProps } = props;
    const isExternal = href.startsWith("http") || target === "_blank";

    return (
      <Link
        href={href}
        target={target}
        rel={isExternal ? rel ?? "noopener noreferrer" : rel}
        className={baseClasses}
        {...restAnchorProps}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...restButtonProps } =
    props as React.ComponentPropsWithoutRef<"button">;

  return (
    <button
      type={type}
      disabled={disabled}
      className={baseClasses}
      {...restButtonProps}
    >
      {content}
    </button>
  );
}
