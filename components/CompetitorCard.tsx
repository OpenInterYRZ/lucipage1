interface Feature {
  icon: string;
  iconColor: string;
  text: string;
  textColor: string;
}

interface CompetitorCardProps {
  name: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  features: Feature[];
}

export default function CompetitorCard({
  name,
  tag,
  tagBg,
  tagColor,
  features,
}: CompetitorCardProps) {
  return (
    <div className="bg-surface-elevated rounded-[12px] p-[20px] flex flex-col gap-[10px]">
      {/* Header */}
      <div className="flex items-center gap-[8px]">
        <span className="text-secondary font-sans text-[16px] font-semibold">
          {name}
        </span>
        <div className="rounded-[6px] py-[3px] px-[8px]" style={{ backgroundColor: tagBg }}>
          <span className="font-mono text-[9px] font-medium" style={{ color: tagColor }}>
            {tag}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-[6px]">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-[8px]">
            <span className="font-mono text-[11px]" style={{ color: feature.iconColor }}>
              {feature.icon}
            </span>
            <span className="font-sans text-[12px]" style={{ color: feature.textColor }}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
