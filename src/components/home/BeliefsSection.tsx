import { Icon } from "@/components/common";
import { beliefsContent } from "@/data/home/beliefs";
import type { BeliefsContent } from "@/types/content";

interface BeliefsSectionProps {
  content?: BeliefsContent;
}

export function BeliefsSection({
  content = beliefsContent,
}: BeliefsSectionProps) {
  const { title, items } = content;

  return (
    <section
      className="beliefs-section"
      id="beliefs"
      aria-label="Signature Beliefs"
    >
      <div className="section-title-line">
        <span />
        <h2>{title}</h2>
        <span />
      </div>

      <div className="belief-row">
        {items.map((item, index) => (
          <article key={item.text || index} className="belief-item">
            <span>
              <Icon name={item.icon} className="w-10 h-10" />
            </span>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
