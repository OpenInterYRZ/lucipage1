import { FileText } from "lucide-react";

export function NotionWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-win-bg border border-win-border flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-win-titlebar rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-win-title-text ml-1">
          Notion
        </span>
      </div>

      {/* Body - Document Lines */}
      <div className="flex-1 flex flex-col gap-1.5 p-3">
        <div className="h-2.5 bg-win-placeholder-1 rounded-[3px] w-full" />
        <div className="h-2.5 bg-win-placeholder-2 rounded-[3px] w-[140px]" />
        <div className="h-2.5 bg-win-placeholder-1 rounded-[3px] w-[180px]" />
        <div className="h-2.5 bg-win-placeholder-2 rounded-[3px] w-[100px]" />
        <FileText className="w-3.5 h-3.5 text-win-body-text-3 mt-1" />
      </div>
    </div>
  );
}
