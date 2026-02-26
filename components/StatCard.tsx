interface StatCardProps {
  number: string;
  label: string;
  color: string;
}

export default function StatCard({ number, label, color }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-[8px]">
      <span
        className="font-mono text-[56px] font-bold tracking-[-2px]"
        style={{ color }}
      >
        {number}
      </span>
      <span className="text-secondary font-sans text-[14px] text-center">
        {label}
      </span>
    </div>
  );
}
