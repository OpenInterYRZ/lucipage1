interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  scene: React.ReactNode;
}

export default function StepCard({ stepNumber, title, description, scene }: StepCardProps) {
  return (
    <div className="bg-surface-elevated rounded-[12px] p-[24px] flex-1 flex flex-col gap-[16px]">
      {/* Step Number */}
      <div className="text-accent font-mono text-[40px] font-medium tracking-[-1px]">
        {stepNumber}
      </div>

      {/* Scene Visualization */}
      {scene}

      {/* Title */}
      <h3 className="text-primary font-serif text-[24px] text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-secondary font-sans text-[13px] leading-[1.5] text-center whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
