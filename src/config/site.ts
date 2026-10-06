/**
 * Global site configuration
 */

export const siteConfig = {
  name: "Chakwise",
  tagline: "Wisdom-Driven Wealth Advisory",
  founder: "Chakravarthy Natarajan Santhakumar",
  description:
    "Combining market intelligence with investor psychology to build enduring wealth.",
  url: "https://chakwise.com",
  contact: {
    email: "advisory@chakwise.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
