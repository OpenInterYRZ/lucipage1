import { FileText } from "lucide-react";

export function NotionWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1E1E1E] border border-[#333333] flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#2A2A2A] rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-[#888888] ml-1">
          Notion
        </span>
      </div>

      {/* Body - Document Lines */}
      <div className="flex-1 flex flex-col gap-1.5 p-3">
        <div className="h-2.5 bg-[#333333] rounded-[3px] w-full" />
        <div className="h-2.5 bg-[#2D2D2D] rounded-[3px] w-[140px]" />
        <div className="h-2.5 bg-[#333333] rounded-[3px] w-[180px]" />
        <div className="h-2.5 bg-[#2D2D2D] rounded-[3px] w-[100px]" />
        <FileText className="w-3.5 h-3.5 text-[#555555] mt-1" />
      </div>
    </div>
  );
}
