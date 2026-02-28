export default function DataSovereigntyScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-[6px]">
        <div className="w-[6px] h-[6px] rounded-full bg-brand" />
        <span className="text-brand font-mono text-[9px] font-semibold">Deploy Options</span>
      </div>

      {/* Three columns */}
      <div className="flex-1 flex gap-[6px]">
        {/* Cloud VM */}
        <div className="flex-1 bg-bg rounded-[8px] p-[10px] flex flex-col items-center gap-[6px]">
          <span className="text-[20px]">☁️</span>
          <span className="text-brand font-mono text-[9px] font-semibold text-center">Cloud VM</span>
          <div className="flex flex-col gap-[2px] items-center">
            <span className="text-tertiary font-mono text-[7px]">Your dedicated VM</span>
            <span className="text-tertiary font-mono text-[7px]">Encrypted storage</span>
          </div>
        </div>

        {/* On-premise */}
        <div className="flex-1 bg-bg rounded-[8px] p-[10px] flex flex-col items-center gap-[6px]">
          <span className="text-[20px]">🏠</span>
          <span className="text-success font-mono text-[9px] font-semibold text-center">On-Premise</span>
          <div className="flex flex-col gap-[2px] items-center">
            <span className="text-tertiary font-mono text-[7px]">Full data control</span>
            <span className="text-tertiary font-mono text-[7px]">Fully offline</span>
          </div>
        </div>

        {/* Hybrid */}
        <div className="flex-1 bg-bg rounded-[8px] p-[10px] flex flex-col items-center gap-[6px]">
          <span className="text-[20px]">🔗</span>
          <span className="text-accent font-mono text-[9px] font-semibold text-center">Hybrid</span>
          <div className="flex flex-col gap-[2px] items-center">
            <span className="text-tertiary font-mono text-[7px]">Best of both</span>
            <span className="text-tertiary font-mono text-[7px]">Sync on demand</span>
          </div>
        </div>
      </div>

      {/* Bottom: OpenClaw + Export */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="w-[14px] h-[14px] rounded-[3px] bg-[#FF5C0020] flex items-center justify-center">
            <span className="text-[8px]">🐾</span>
          </div>
          <span className="text-brand font-mono text-[8px] font-medium">OpenClaw · Open Source</span>
        </div>
        <div className="bg-[#FF5C0015] border border-[#FF5C0030] rounded-[6px] py-[3px] px-[8px]">
          <span className="text-brand font-mono text-[8px] font-medium">Export All Data ↗</span>
        </div>
      </div>
    </div>
  );
}
