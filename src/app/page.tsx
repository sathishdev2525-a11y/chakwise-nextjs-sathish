import {
  ApproachSection,
  BeliefsSection,
  HeroSection,
  InsightsSection,
  PhilosophySection,
  SocialMediaSection,
  ConnectSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <ApproachSection />
      <BeliefsSection />
      <InsightsSection />
      <SocialMediaSection />
      <ConnectSection />
    </main>
  );
}
