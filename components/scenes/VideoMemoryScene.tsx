export default function VideoMemoryScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px]">
      {/* Recording Bar */}
      <div className="flex items-center gap-[8px]">
        <div className="rounded-[4px] w-[8px] h-[8px] bg-error animate-pulse" />
        <span className="text-error font-mono text-[9px] font-semibold">
          REC 00:23:41
        </span>
      </div>

      {/* Video Thumbnails */}
      <div className="bg-bg rounded-[8px] p-[8px] h-[100px] flex gap-[8px]">
        <div className="bg-[#22223A] rounded-[6px] flex-1" />
        <div className="bg-[#22223A] rounded-[6px] flex-1" />
      </div>

      {/* Analysis Tags */}
      <div className="flex gap-[6px]">
        <div className="bg-[#785DE120] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-accent font-mono text-[8px] font-medium">
            Face recognition ×3
          </span>
        </div>
        <div className="bg-[#22C55E20] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-success font-mono text-[8px] font-medium">
            Key decisions ×2
          </span>
        </div>
        <div className="bg-[#FF5C0020] rounded-[6px] py-[4px] px-[8px]">
          <span className="text-brand font-mono text-[8px] font-medium">
            Action ×4
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-bg rounded-[2px] h-[3px] w-full relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[60%] bg-accent rounded-[2px]" />
      </div>
    </div>
  );
}
