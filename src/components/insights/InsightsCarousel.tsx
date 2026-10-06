"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Icon } from "@/components/common";
import { InsightCard } from "./InsightCard";
import type { InsightArticle } from "@/types/content";

interface InsightsCarouselProps {
  articles: InsightArticle[];
}

export function InsightsCarousel({ articles }: InsightsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Responsive itemsPerView
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 700) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1100) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, articles.length - itemsPerView);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const totalPages = maxIndex + 1;

  return (
    <div
      className="media-scroll-row relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Insights Carousel"
    >
      <div className="blog-swiper relative overflow-hidden">
        {/* Carousel track */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="blog-swiper-slide flex-shrink-0 px-2.5"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <InsightCard article={article} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer"
          aria-label="Previous insight"
        >
          <Icon name="chevronLeft" className="w-5 h-5 text-[var(--gold)]" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer"
          aria-label="Next insight"
        >
          <Icon name="chevronRight" className="w-5 h-5 text-[var(--gold)]" />
        </button>

        {/* Pagination Dots */}
        <div className="swiper-pagination flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`swiper-pagination-bullet transition-all duration-300 ${
                currentIndex === idx
                  ? "swiper-pagination-bullet-active"
                  : ""
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentIndex === idx ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
