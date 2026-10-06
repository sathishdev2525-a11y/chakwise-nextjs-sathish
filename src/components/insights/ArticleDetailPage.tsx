import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/common";
import type { InsightArticle } from "@/types/content";

interface ArticleDetailPageProps {
  article: InsightArticle;
}

export function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const readTime = article.reading_time || 3;
  const publishDate = article.created_date ? article.created_date.split(" ")[0] : "2026-09-21";

  return (
    <section className="article-page" id="article-detail">
      {/* Top Navigation Bar */}
      <div className="article-topbar">
        <Link
          href="/#blog"
          className="topbar-back-btn"
          aria-label="Back to all insights"
        >
          <Icon name="arrowLeft" className="w-4 h-4" />
          <span>Back to insights</span>
        </Link>

        <div className="topbar-right-actions">
          <Link
            href="/#contact"
            className="topbar-contact-btn"
            aria-label="Go to contact section"
          >
            <span>Direct Connect</span>
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main 2-Column Layout */}
      <article className="article-layout">
        {/* Left Column: Sticky Sidebar */}
        <aside className="article-sidebar">
          {/* Article Image Card */}
          <div className="article-image-card">
            <div className="article-image-glow" />
            <div className="relative w-full aspect-[4/3] min-h-[260px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Private Advisory Access Card */}
          <div className="sidebar-advisory-card">
            <h4>Private Advisory Access</h4>
            <p>
              Independent due diligence and asset allocation across Abu Dhabi,
              Dubai, and Ras Al Khaimah.
            </p>
            <div className="sidebar-contacts">
              <a
                href="mailto:chak@chakwise.com"
                className="sidebar-contact-link"
              >
                <Icon name="envelope" className="w-4 h-4" />
                <span>chak@chakwise.com</span>
              </a>
              <a href="tel:+971509457928" className="sidebar-contact-link">
                <Icon name="phone" className="w-4 h-4" />
                <span>+971 50 945 7928</span>
              </a>
            </div>
            <Link
              href="/#contact"
              className="sidebar-cta-btn"
              aria-label="Book Advisory Session"
            >
              <span>Book Advisory Session</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </aside>

        {/* Right Column: Scrollable Content */}
        <div className="article-content">
          {/* Meta Header */}
          <div className="article-header-meta">
            <span className="article-category-badge">{article.category}</span>
            <div className="article-meta-chips">
              <span className="meta-chip">
                <Icon name="clock" className="w-4 h-4" />
                <span>{readTime} min read</span>
              </span>
              <span className="meta-chip">
                <Icon name="calendar" className="w-4 h-4" />
                <span>{publishDate}</span>
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="article-main-title">{article.title}</h1>
          <div className="article-gold-rule" />

          {/* Rich Body Content */}
          <div
            className="article-rich-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Footer Consultation Advisory Card */}
          <div className="article-footer-cta-card">
            <div className="cta-card-badge">Private Strategic Advisory</div>
            <h3>Looking to Allocate Capital Calmly in UAE Real Estate?</h3>
            <p>
              Evaluate location fundamentals, developer solvency, secondary
              liquidity, and risk-adjusted yield models before committing
              capital.
            </p>
            <ul className="cta-card-benefits">
              <li>
                <Icon name="checkCircle" className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>Zero-bias independent portfolio review</span>
              </li>
              <li>
                <Icon name="checkCircle" className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>Three-scenario risk stress test on prospective deals</span>
              </li>
              <li>
                <Icon name="checkCircle" className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <span>Cross-border tax & DIFC structure alignment</span>
              </li>
            </ul>
            <Link
              href="/#contact"
              className="outline-cta inline-flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Schedule a Clarity Consultation</span>
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}
