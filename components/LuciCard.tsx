interface LuciFeature {
  title: string;
  description: string;
}

const features: LuciFeature[] = [
  {
    title: 'Video Memory',
    description: 'Record meetings, understand video content, build memory vault',
  },
  {
    title: 'Auto-Execute Tasks',
    description: 'Agents auto-send emails, create tickets, update CRM',
  },
  {
    title: '100% Data Sovereignty',
    description: 'Cloud VM or self-hosted, export data anytime',
  },
  {
    title: 'Unlimited Skills Extensions',
    description: 'Open source ecosystem, LUCI can do what your computer can',
  },
  {
    title: 'Cloud + Local Deployment',
    description: 'Flexible choice, get started in 3 minutes',
  },
];

export default function LuciCard() {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* Label */}
      <span className="text-brand font-mono text-[13px] font-semibold tracking-[1px]">
        LUCI
      </span>

      {/* Card */}
      <div className="bg-surface-elevated rounded-[16px] p-[28px] flex flex-col gap-[16px]">
        {/* Header */}
        <div className="flex items-center gap-[12px]">
          <div className="bg-brand rounded-[6px] w-[12px] h-[12px]" />
          <span className="text-primary font-sans text-[22px] font-bold">
            LUCI
          </span>
          <span className="text-brand font-mono text-[11px] font-medium">
            Full-Stack AI Assistant
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-[10px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#22C55E08] rounded-[8px] py-[10px] px-[14px] flex gap-[10px]"
            >
              <span className="text-success font-mono text-[13px] font-bold flex-shrink-0">
                ✓
              </span>
              <div className="flex flex-col gap-[2px] flex-1">
                <div className="text-primary font-sans text-[14px] font-semibold">
                  {feature.title}
                </div>
                <div className="text-secondary font-sans text-[11px]">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
