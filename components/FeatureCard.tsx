interface FeatureCardProps {
  scene: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  scene,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-surface-elevated rounded-[16px] flex-1 flex flex-col">
      {/* Scene */}
      {scene}

      {/* Content */}
      <div className="p-[24px] px-[24px] pb-[28px] flex flex-col gap-[12px]">
        <h3 className="text-primary font-serif text-[22px] tracking-[-0.5px]">
          {title}
        </h3>
        <p className="text-secondary font-sans text-[14px] leading-[1.6]">
          {description}
        </p>
      </div>
    </div>
  );
}
