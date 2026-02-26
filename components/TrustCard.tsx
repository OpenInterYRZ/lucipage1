interface TrustCardProps {
  iconColor: string;
  title: string;
  description: string;
}

export default function TrustCard({ iconColor, title, description }: TrustCardProps) {
  return (
    <div className="bg-surface-hover rounded-[10px] p-[16px] flex flex-col items-center gap-[8px] min-w-[180px]">
      <div
        className="rounded-[16px] w-[32px] h-[32px]"
        style={{ backgroundColor: iconColor }}
      />
      <span className="text-primary font-sans text-[14px] font-semibold text-center">
        {title}
      </span>
      <span className="text-secondary font-sans text-[11px] text-center">
        {description}
      </span>
    </div>
  );
}
