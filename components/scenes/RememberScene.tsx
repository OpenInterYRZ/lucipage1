export default function RememberScene() {
  return (
    <div className="bg-surface-hover rounded-[10px] h-[180px] p-[16px] flex gap-[12px]">
      {/* Video Thumbnail */}
      <div className="bg-surface rounded-[8px] w-[80px] h-[140px] flex flex-col items-center justify-center gap-[6px]">
        <div className="bg-[#785DE130] rounded-[12px] w-[24px] h-[24px] flex items-center justify-center">
          <span className="text-accent text-[10px]">▶</span>
        </div>
        <div className="text-tertiary font-mono text-[8px] font-medium text-center leading-[1.4]">
          Q4 Review<br />00:34:12
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[30px] h-[140px] flex items-center justify-center">
        <span className="text-[#785DE160] text-[14px]">→</span>
      </div>

      {/* Memory Nodes */}
      <div className="w-[80px] h-[140px] flex flex-col gap-[8px] justify-center">
        <div className="bg-[#22C55E15] rounded-[6px] py-[6px] px-[8px] flex items-center gap-[4px]">
          <div className="w-[6px] h-[6px] rounded-full bg-success" />
          <span className="text-success font-sans text-[8px] font-medium">Goal</span>
        </div>
        <div className="bg-[#FF5C0015] rounded-[6px] py-[6px] px-[8px] flex items-center gap-[4px]">
          <div className="w-[6px] h-[6px] rounded-full bg-brand" />
          <span className="text-brand font-sans text-[8px] font-medium">People</span>
        </div>
        <div className="bg-[#785DE115] rounded-[6px] py-[6px] px-[8px] flex items-center gap-[4px]">
          <div className="w-[6px] h-[6px] rounded-full bg-accent" />
          <span className="text-accent font-sans text-[8px] font-medium">Deadline</span>
        </div>
      </div>

      {/* Arrow */}
      <div className="w-[30px] h-[140px] flex items-center justify-center">
        <span className="text-[#785DE160] text-[14px]">→</span>
      </div>

      {/* Memory Vault */}
      <div className="bg-surface rounded-[8px] w-[80px] h-[140px] flex flex-col items-center justify-center gap-[8px]">
        <div className="bg-[#785DE120] rounded-[8px] w-[32px] h-[32px] flex items-center justify-center text-[16px]">
          🧠
        </div>
        <div className="text-accent font-mono text-[9px] font-medium text-center leading-[1.3]">
          Memory<br />Vault
        </div>
        <div className="text-primary font-mono text-[11px] font-semibold">
          1,284
        </div>
      </div>
    </div>
  );
}
