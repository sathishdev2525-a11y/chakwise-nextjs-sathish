import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/common";
import type { InsightArticle } from "@/types/content";

interface InsightCardProps {
  article: InsightArticle;
}

export function InsightCard({ article }: InsightCardProps) {
  return (
    <article
      className="blog-card blog-card--clickable"
      aria-label={`Read full insight: ${article.title}`}
    >
      <Link href={`/${article.slug}`} className="flex flex-col h-full">
        <div className="blog-image-wrap relative">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={article.slug === "article-7"}
          />
        </div>
        <div className="blog-content">
          <p className="blog-category">{article.category}</p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="blog-card-link inline-flex items-center gap-1.5 mt-auto pt-2.5 text-[0.68rem] font-semibold uppercase tracking-wider text-[var(--gold-2)]">
            Read more <Icon name="arrowRight" className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </article>
  );
}
