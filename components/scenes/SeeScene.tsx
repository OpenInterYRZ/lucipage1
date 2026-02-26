export default function SeeScene() {
  return (
    <div className="bg-surface-hover rounded-[10px] h-[180px] flex flex-col">
      {/* Top Bar */}
      <div className="bg-surface rounded-t-[10px] h-[24px] flex items-center px-[10px] gap-[6px]">
        <div className="w-[6px] h-[6px] rounded-full bg-error" />
        <div className="w-[6px] h-[6px] rounded-full bg-border" />
        <div className="w-[6px] h-[6px] rounded-full bg-border" />
        <div className="h-[1px] flex-1" />
        <span className="text-tertiary font-sans text-[9px] font-medium">
          Meeting — Q4 Review
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 p-[12px] flex flex-col gap-[10px]">
        {/* Video Feed */}
        <div className="bg-surface rounded-[6px] flex-1 p-[8px] flex gap-[10px]">
          <div className="bg-divider rounded-[4px] flex-1" />
          <div className="bg-divider rounded-[4px] flex-1" />
          <div className="bg-divider rounded-[4px] flex-1" />
        </div>

        {/* Recording Bar */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[8px] h-[8px] rounded-full bg-error animate-pulse" />
          <span className="text-error font-mono text-[9px] font-medium">
            REC 00:34:12
          </span>
          <div className="flex-1" />
          <div className="bg-border rounded-[2px] h-[4px] w-[80px] relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[60%] bg-error" />
          </div>
        </div>
      </div>
    </div>
  );
}
