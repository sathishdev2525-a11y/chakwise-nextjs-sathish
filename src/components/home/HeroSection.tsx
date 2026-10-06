import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/types/content";
import { heroContent as defaultHeroContent } from "@/data/home/hero";

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content = defaultHeroContent }: HeroSectionProps) {
  const quoteLines = content.quote.split("\n");

  return (
    <section className="hero-panel" id="hero">
      {/* Background Skyline */}
      <Image
        src={content.backgroundSkyline}
        alt="Dubai skyline background"
        fill
        priority
        className="hero-bg-image"
        sizes="100vw"
      />

      {/* Decorative Blurs & Gradients */}
      <div className="hero-blur hero-blur-left" aria-hidden="true" />
      <div className="hero-blur hero-blur-right" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      {/* Main Content Grid */}
      <div className="hero-content-wrap">
        {/* Left Copy Column */}
        <div className="hero-copy">
          <Image
            src={content.logo}
            alt={`${content.brand} logo`}
            width={178}
            height={125}
            priority
            className="hero-logo"
          />
          <p className="hero-brand">{content.brand}</p>
          <h1>{content.title}</h1>
          <div className="gold-rule" aria-hidden="true" />
          <p className="hero-quote">
            {quoteLines.map((line, idx) => (
              <span key={idx}>
                {line}
                {idx < quoteLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="hero-text">{content.text}</p>
          <Link
            href={content.ctaHref}
            className="outline-cta"
            aria-label={content.ctaText}
          >
            <span>{content.ctaText}</span>
            <svg
              className="w-4 h-4 ml-1 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Right Portrait Column */}
        <div className="hero-portrait-wrap" aria-hidden="true">
          <div className="portrait-halo" />
          <Image
            src={content.portrait}
            alt="Chakravarthy Natarajan Santhakumar"
            width={560}
            height={710}
            priority
            className="hero-portrait"
          />
          <div className="desk-glow" />
          <div className="glass-orb">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
