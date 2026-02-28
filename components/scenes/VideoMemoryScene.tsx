export default function VideoMemoryScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px] overflow-hidden">
      {/* Recording indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="w-[6px] h-[6px] rounded-full bg-error animate-pulse" />
          <span className="text-error font-mono text-[9px] font-semibold tracking-wide">
            REC 00:23:41
          </span>
        </div>
        <span className="text-tertiary font-mono text-[8px]">720p · 30fps</span>
      </div>

      {/* Video area + AI overlay */}
      <div className="flex-1 flex gap-[8px]">
        {/* Video feed */}
        <div className="flex-[1.2] bg-[#1a1030] rounded-[8px] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#785DE120] to-transparent" />
          <div className="flex flex-col items-center gap-[4px] opacity-40">
            <span className="text-[20px]">▶</span>
            <span className="font-mono text-[7px] text-tertiary">Meeting Recording</span>
          </div>
          {/* Face detection boxes */}
          <div className="absolute top-[12px] left-[10px] w-[22px] h-[22px] border border-[#785DE180] rounded-[3px]" />
          <div className="absolute top-[12px] left-[40px] w-[22px] h-[22px] border border-[#785DE180] rounded-[3px]" />
          <div className="absolute top-[12px] left-[70px] w-[22px] h-[22px] border border-[#785DE180] rounded-[3px]" />
        </div>

        {/* AI analysis panel */}
        <div className="flex-1 flex flex-col gap-[6px]">
          <span className="text-[#785DE1] font-mono text-[8px] font-semibold">AI Analysis</span>
          <div className="flex flex-col gap-[4px]">
            <div className="bg-[#785DE115] rounded-[4px] py-[3px] px-[6px]">
              <span className="text-[#785DE1] font-mono text-[7px]">👤 Face ×3</span>
            </div>
            <div className="bg-[#785DE115] rounded-[4px] py-[3px] px-[6px]">
              <span className="text-[#785DE1] font-mono text-[7px]">💡 Decisions ×2</span>
            </div>
            <div className="bg-[#785DE115] rounded-[4px] py-[3px] px-[6px]">
              <span className="text-[#785DE1] font-mono text-[7px]">📋 Actions ×4</span>
            </div>
            <div className="bg-[#785DE115] rounded-[4px] py-[3px] px-[6px]">
              <span className="text-[#785DE1] font-mono text-[7px]">🎯 Topics ×5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex items-center gap-[6px]">
        <span className="text-tertiary font-mono text-[7px]">0:00</span>
        <div className="bg-bg rounded-[2px] h-[3px] flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[62%] bg-[#785DE1] rounded-[2px]" />
        </div>
        <span className="text-tertiary font-mono text-[7px]">0:38</span>
      </div>
    </div>
  );
}
