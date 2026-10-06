"use client";

import Image from "next/image";
import { Icon } from "@/components/common";
import { socialMediaContent } from "@/data/home/social";
import type { SocialMediaContent } from "@/types/content";

interface SocialMediaSectionProps {
  content?: SocialMediaContent;
}

export function SocialMediaSection({
  content = socialMediaContent,
}: SocialMediaSectionProps) {
  const { youtubeVideos, linkedinPosts, instagramStories } = content;

  return (
    <section className="social-media-container" aria-label="Media & Social Highlights">
      {/* 1. MY YOUTUBE VIDEOS */}
      <div className="social-media-block" id="videos">
        <div className="section-title-line">
          <span />
          <h2>MY YOUTUBE VIDEOS</h2>
          <span />
        </div>

        <div className="social-cards-row">
          {youtubeVideos.map((video) => (
            <article key={video.id} className="social-card">
              <a
                href={video.url}
                onClick={(e) => e.preventDefault()}
                aria-label={`Watch ${video.title} on YouTube`}
                className="social-card-inner"
              >
                <div className="social-card-image-wrap">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="social-card-badge">
                    <Icon name="youtube" className="w-5 h-5 text-[var(--gold)]" />
                  </div>
                </div>
                <div className="social-card-body">
                  <p className="social-card-category">{video.category}</p>
                  <h3 className="social-card-title">{video.title}</h3>
                  <div className="social-card-cta">
                    WATCH ON YOUTUBE
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="social-divider" />

      {/* 2. LINKEDIN HIGHLIGHTS */}
      <div className="social-media-block" id="linkedin-highlights">
        <div className="section-title-line">
          <span />
          <h2>LINKEDIN HIGHLIGHTS</h2>
          <span />
        </div>

        <div className="social-cards-row">
          {linkedinPosts.map((post) => (
            <article key={post.id} className="social-card">
              <a
                href={post.url}
                onClick={(e) => e.preventDefault()}
                aria-label={`Read ${post.title} on LinkedIn`}
                className="social-card-inner"
              >
                <div className="social-card-image-wrap">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="social-card-badge">
                    <Icon name="linkedin" className="w-4.5 h-4.5 text-[var(--gold)]" />
                  </div>
                </div>
                <div className="social-card-body">
                  <p className="social-card-category">{post.category}</p>
                  <h3 className="social-card-title">{post.title}</h3>
                  {post.text && <p className="social-card-text">{post.text}</p>}
                  {post.schedule && (
                    <time
                      dateTime={post.schedule.split(" at ")[0]}
                      className="social-card-time"
                    >
                      {post.schedule}
                    </time>
                  )}
                  <div className="social-card-cta">
                    VIEW ON LINKEDIN
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="social-divider" />

      {/* 3. INSTAGRAM STORIES */}
      <div className="social-media-block" id="instagram-stories">
        <div className="section-title-line">
          <span />
          <h2>INSTAGRAM STORIES</h2>
          <span />
        </div>

        <div className="social-cards-row">
          {instagramStories.map((story) => (
            <article key={story.id} className="social-card">
              <a
                href={story.url}
                onClick={(e) => e.preventDefault()}
                aria-label={`View ${story.title} on Instagram`}
                className="social-card-inner"
              >
                <div className="social-card-image-wrap">
                  <Image
                    src={story.thumbnail}
                    alt={story.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="social-card-badge">
                    <Icon name="instagram" className="w-4.5 h-4.5 text-[var(--gold)]" />
                  </div>
                </div>
                <div className="social-card-body">
                  <p className="social-card-category">{story.category}</p>
                  <h3 className="social-card-title">{story.title}</h3>
                  {story.text && <p className="social-card-text">{story.text}</p>}
                  {story.schedule && (
                    <time
                      dateTime={story.schedule.split(" at ")[0]}
                      className="social-card-time"
                    >
                      {story.schedule}
                    </time>
                  )}
                  <div className="social-card-cta">
                    VIEW ON INSTAGRAM
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
