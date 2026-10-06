import { Icon } from "@/components/common";
import { approachContent } from "@/data/home/approach";
import type { ApproachContent } from "@/types/content";

interface ApproachSectionProps {
  content?: ApproachContent;
}

export function ApproachSection({
  content = approachContent,
}: ApproachSectionProps) {
  const { title, lead, description, items } = content;

  return (
    <section
      className="approach-section"
      id="approach"
      aria-label="Investment Approach"
    >
      <div className="approach-intro">
        <h2>
          {title.split("\n").map((line, idx, arr) => (
            <span key={idx}>
              {line}
              {idx < arr.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="approach-lead">
          {lead.split("\n").map((line, idx, arr) => (
            <span key={idx}>
              {line}
              {idx < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p>{description}</p>
      </div>

      <div className="approach-row">
        {items.map((item, index) => (
          <div key={item.title || index} className="approach-item">
            <div className="approach-icon">
              <Icon name={item.icon} className="w-8 h-8" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
