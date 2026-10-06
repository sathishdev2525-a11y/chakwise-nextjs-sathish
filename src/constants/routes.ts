/**
 * Application routes and section identifiers
 */

export const ROUTES = {
  HOME: "/",
  INSIGHTS: "/insights",
  SECTIONS: {
    HERO: "#hero",
    PHILOSOPHY: "#philosophy",
    QUIET_REBUILD: "#quiet-rebuild",
    QUIET_ASSETS: "#quiet-assets",
    APPROACH: "#approach",
    BELIEFS: "#beliefs",
    INSIGHTS: "#insights",
    VIDEOS: "#videos",
    CONTACT: "#contact",
  },
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
