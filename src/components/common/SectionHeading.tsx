import type { SectionHeadingProps } from "@/types/components";
import { cn } from "@/utils/cn";

const ALIGN_MAP = {
  left: "text-left items-start",
  center: "text-center items-center mx-auto",
  right: "text-right items-end ml-auto",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  withFlankLines = false,
  titleAs: TitleTag = "h2",
  titleId,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-8 md:mb-12",
        ALIGN_MAP[align],
        className
      )}
    >
      {eyebrow && (
        <span className="font-cinzel text-xs font-semibold tracking-[0.14em] text-gold uppercase mb-2">
          {eyebrow}
        </span>
      )}

      {withFlankLines ? (
        <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 my-1">
          <span className="h-[1px] bg-line block w-full" aria-hidden="true" />
          <TitleTag
            id={titleId}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem] font-normal text-gold uppercase tracking-[0.06em] leading-tight px-2"
          >
            {title}
          </TitleTag>
          <span className="h-[1px] bg-line block w-full" aria-hidden="true" />
        </div>
      ) : (
        <TitleTag
          id={titleId}
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-cream leading-tight tracking-normal"
        >
          {title}
        </TitleTag>
      )}

      {description && (
        <p
          className={cn(
            "font-sans text-sm sm:text-base text-muted leading-relaxed mt-3 max-w-2xl",
            isCentered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
