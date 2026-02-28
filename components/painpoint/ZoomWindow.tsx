import { Video } from "lucide-react";

export function ZoomWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1B1B1B] border border-[#333333] flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#262626] rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-[#888888] ml-1">
          Zoom
        </span>
      </div>

      {/* Body - Meeting View */}
      <div className="flex-1 flex flex-col items-center justify-center gap-1.5 p-2.5">
        <Video className="w-7 h-7 text-[#2D8CFF]" />
        <span className="text-[10px] text-[#666666]">
          Meeting in progress...
        </span>
        <div className="flex gap-1 w-full h-[30px] mt-1">
          <div className="flex-1 bg-[#2A2A2A] rounded-[3px]" />
          <div className="flex-1 bg-[#2A2A2A] rounded-[3px]" />
          <div className="flex-1 bg-[#2A2A2A] rounded-[3px]" />
        </div>
      </div>
    </div>
  );
}
