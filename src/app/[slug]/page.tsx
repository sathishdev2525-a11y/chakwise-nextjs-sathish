import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { insightsArticles } from "@/data/insights/insights";
import { ArticleDetailPage } from "@/components/insights";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Chakwise",
    };
  }

  return {
    title: `${article.title} | Chakwise`,
    description: article.excerpt,
  };
}

export default async function ArticleRoutePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <ArticleDetailPage article={article} />
    </main>
  );
}
