"use client";

import { Icon } from "@/components/common";
import { connectContent } from "@/data/home/connect";
import type { ConnectContent } from "@/types/content";

interface ConnectSectionProps {
  content?: ConnectContent;
}

export function ConnectSection({
  content = connectContent,
}: ConnectSectionProps) {
  const { title, socialPlatforms, contactChannels } = content;

  const getPlatformIconStyle = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return "bg-[#0077b5] text-white";
      case "youtube":
        return "bg-[#ff0000] text-white";
      case "instagram":
        return "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white";
      case "tiktok":
        return "bg-black text-white border border-[#222]";
      default:
        return "bg-[#0a1f33] text-[var(--gold)]";
    }
  };

  return (
    <section className="connect-section" aria-label="Connect & Contact">
      <div className="section-title-line">
        <span />
        <h2>{title}</h2>
        <span />
      </div>

      {/* Row 1: Social Platforms */}
      <div className="connect-social-grid">
        {socialPlatforms.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            onClick={(e) => e.preventDefault()}
            className="connect-social-item"
            aria-label={`${platform.name}: ${platform.handle}`}
          >
            <div
              className={`connect-platform-badge ${getPlatformIconStyle(
                platform.icon
              )}`}
            >
              <Icon
                name={platform.icon}
                className={
                  platform.icon === "linkedin"
                    ? "w-5 h-5"
                    : platform.icon === "youtube"
                    ? "w-6 h-6"
                    : platform.icon === "instagram"
                    ? "w-5 h-5"
                    : "w-5 h-5"
                }
              />
            </div>
            <div className="connect-social-info">
              <span className="connect-platform-name">{platform.name}</span>
              <span className="connect-platform-handle">{platform.handle}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="connect-divider-line" />

      {/* Row 2: Contact Channels */}
      <div className="connect-contact-grid">
        {contactChannels.map((channel) => (
          <a
            key={channel.id}
            href={channel.url}
            onClick={(e) => e.preventDefault()}
            className="connect-contact-item"
            aria-label={channel.label}
          >
            <Icon name={channel.icon} className="w-5 h-5 text-[var(--gold)] flex-shrink-0" />
            <span className="connect-contact-label">{channel.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
