export default function DataSovereigntyScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px]">
      {/* Header */}
      <div className="flex items-center gap-[6px]">
        <div className="rounded-[2px] w-[10px] h-[10px] bg-success" />
        <span className="text-primary font-mono text-[10px] font-semibold">
          Data Architecture
        </span>
      </div>

      {/* Deploy Options */}
      <div className="flex-1 flex gap-[8px]">
        {/* Local */}
        <div className="bg-bg rounded-[8px] p-[10px] flex-1 flex flex-col gap-[6px]">
          <span className="text-success font-mono text-[9px] font-semibold">
            Self-Hosted
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Data stored locally
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Fully offline
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Open source OpenClaw
          </span>
        </div>

        {/* Cloud */}
        <div className="bg-bg rounded-[8px] p-[10px] flex-1 flex flex-col gap-[6px]">
          <span className="text-accent font-mono text-[9px] font-semibold">
            Cloud-Hosted
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Your dedicated VM
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Isolated encrypted data
          </span>
          <span className="text-secondary font-sans text-[8px]">
            ◆ Export and migrate anytime
          </span>
        </div>
      </div>

      {/* Security Tags */}
      <div className="flex gap-[8px]">
        <div className="bg-[#22C55E15] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-success font-mono text-[8px] font-medium">
            E2E Encryption
          </span>
        </div>
        <div className="bg-[#22C55E15] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-success font-mono text-[8px] font-medium">
            Zero-Knowledge
          </span>
        </div>
        <div className="bg-[#22C55E15] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-success font-mono text-[8px] font-medium">
            GDPR
          </span>
        </div>
      </div>
    </div>
  );
}
