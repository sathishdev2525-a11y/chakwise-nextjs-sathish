/**
 * Chakwise Design Tokens
 * Extracted directly from live chakwise.com styling system.
 */

export const COLOR_TOKENS = {
  // Primary dark background palette
  navy: "#05121f",
  navy2: "#071927",
  ink: "#020810",

  // Warm light palette
  cream: "#f2eee8",
  cream2: "#e7ded3",

  // Golden accent palette
  gold: "#d59a3d",
  gold2: "#f0bd62",
  goldDeep: "#9b6724",

  // Typography & UI accents
  text: "#f8f4ec",
  muted: "#d7d5d0",
  line: "#d59a3d7a",
} as const;

export const LAYOUT_TOKENS = {
  maxSiteWidth: "1440px",
  containerPaddingX: {
    mobile: "1rem", // 16px
    tablet: "2rem", // 32px
    desktop: "3.5rem", // 56px
  },
  breakpoints: {
    mobile: "700px",
    tablet: "1100px",
    desktop: "1440px",
  },
} as const;

export const FONT_TOKENS = {
  sans: "var(--font-inter), system-ui, -apple-system, sans-serif",
  serif: "var(--font-cormorant), Georgia, serif",
  cinzel: "var(--font-cinzel), Georgia, serif",
} as const;
