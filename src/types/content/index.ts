/**
 * Shared content models across site sections
 */

export interface HeroContent {
  brand: string;
  title: string;
  quote: string;
  text: string;
  ctaText: string;
  ctaHref: string;
  logo: string;
  portrait: string;
  backgroundSkyline: string;
}

export interface TruthItem {
  icon: "brain" | "heart" | "bullseye";
  text: string;
}

export interface PillarItem {
  icon: "chartLine" | "brain" | "chessKnight" | "bullseye" | "userTie";
  label: string;
}

export interface QuietCardItem {
  id: string;
  theme: "navy" | "gold";
  icon: "seedling" | "building";
  title: string;
  description: string;
}

export interface PhilosophyContent {
  headlineWhite: string;
  headlineGold: string;
  truths: TruthItem[];
  combineLabel: string;
  pillars: PillarItem[];
  quietCards: QuietCardItem[];
}

export interface ApproachItem {
  icon: "search" | "heart" | "route" | "shield" | "chartLine";
  title: string;
  desc: string;
}

export interface ApproachContent {
  title: string;
  lead: string;
  description: string;
  items: ApproachItem[];
}

export interface BeliefItem {
  icon: "seedling" | "prayingHands" | "city" | "lightbulb" | "heartbeat";
  text: string;
}

export interface BeliefsContent {
  title: string;
  items: BeliefItem[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  image: string;
  fallbackImage?: string;
  created_date?: string;
  reading_time?: number;
  excerpt: string;
  content: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  url: string;
}

export interface MediaHighlightItem {
  id: string;
  title: string;
  text?: string;
  category: string;
  thumbnail: string;
  url: string;
  schedule?: string;
}

export interface SocialMediaContent {
  youtubeVideos: VideoItem[];
  linkedinPosts: MediaHighlightItem[];
  instagramStories: MediaHighlightItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName?: string;
}

export interface SocialPlatformItem {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: "linkedin" | "youtube" | "instagram" | "tiktok";
}

export interface ContactChannelItem {
  id: string;
  label: string;
  url: string;
  icon: "globe" | "envelope" | "phone" | "mapPin";
}

export interface ConnectContent {
  title: string;
  socialPlatforms: SocialPlatformItem[];
  contactChannels: ContactChannelItem[];
}

