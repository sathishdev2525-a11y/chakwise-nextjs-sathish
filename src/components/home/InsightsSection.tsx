import { insightsArticles } from "@/data/insights/insights";
import { InsightsCarousel } from "@/components/insights/InsightsCarousel";
import type { InsightArticle } from "@/types/content";

interface InsightsSectionProps {
  articles?: InsightArticle[];
}

export function InsightsSection({
  articles = insightsArticles,
}: InsightsSectionProps) {
  return (
    <section className="blog-section" id="blog" aria-label="Insights">
      <div className="section-title-line">
        <span />
        <h2>INSIGHTS</h2>
        <span />
      </div>

      <div className="blog-header">
        <p>
          Short reads on Dubai real estate, investor psychology, and calm
          long-term wealth decisions.
        </p>
      </div>

      <InsightsCarousel articles={articles} />
    </section>
  );
}
