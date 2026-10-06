import type { PhilosophyContent } from "@/types/content";
import { philosophyContent as defaultPhilosophyContent } from "@/data/home/philosophy";
import { Icon } from "@/components/common/Icon";

interface PhilosophySectionProps {
  content?: PhilosophyContent;
}

export function PhilosophySection({
  content = defaultPhilosophyContent,
}: PhilosophySectionProps) {
  const whiteLines = content.headlineWhite.split("\n");
  const goldLines = content.headlineGold.split("\n");

  return (
    <section className="investor-grid" id="philosophy">
      {/* Left Dark Column */}
      <div className="investor-dark">
        <h2>
          {whiteLines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < whiteLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <h3>
          {goldLines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < goldLines.length - 1 && <br />}
            </span>
          ))}
        </h3>

        <div className="gold-rule" aria-hidden="true" />

        <div className="truth-list">
          {content.truths.map((item, idx) => (
            <div key={idx} className="truth-row">
              <span aria-hidden="true">
                <Icon name={item.icon} className="w-8 h-8" />
              </span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <p className="combine-label">{content.combineLabel}</p>

        <div className="pillar-row">
          {content.pillars.map((pillar, idx) => (
            <div key={idx} className="pillar">
              <Icon name={pillar.icon} className="w-9 h-9" />
              <p>{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Light Column */}
      <div className="investor-light">
        {content.quietCards.map((card) => (
          <article key={card.id} className="quiet-card" id={card.id}>
            <div className={`quiet-icon ${card.theme || "navy"}`} aria-hidden="true">
              <Icon name={card.icon} className="w-14 h-14" />
            </div>
            <div>
              <h2>{card.title}</h2>
              <div className="gold-rule" aria-hidden="true" />
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
