interface BadgeProps {
  text: string;
  dotColor?: string;
  textColor?: string;
  bgColor?: string;
}

export default function Badge({
  text,
  dotColor = "var(--color-brand-primary)",
  textColor = "var(--color-brand-primary-light)",
  bgColor = "#FF5C0018"
}: BadgeProps) {
  return (
    <div
      className="flex items-center gap-[8px] rounded-full py-[6px] px-[16px]"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="w-[8px] h-[8px] rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <span
        className="font-sans text-[11px] font-medium tracking-[0.5px]"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  );
}
