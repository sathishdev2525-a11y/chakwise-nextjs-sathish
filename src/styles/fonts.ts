import { Inter, Cormorant_Garamond, Cinzel } from "next/font/google";

/**
 * Primary UI and body font: Inter
 * Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
 */
export const fontInter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Editorial, quotes, and primary headings: Cormorant Garamond
 * Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
 * Styles: normal, italic
 */
export const fontCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

/**
 * Classical brand mark, badges, and category labels: Cinzel
 * Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
 */
export const fontCinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const fontVariables = `${fontInter.variable} ${fontCormorant.variable} ${fontCinzel.variable}`;
