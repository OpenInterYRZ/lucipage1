export function GmailWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1D1D1D] border border-[#333333] flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#282828] rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-[#888888] ml-1">
          Gmail
        </span>
      </div>

      {/* Body - Email List */}
      <div className="flex-1 flex flex-col gap-1 p-2">
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-[#EA4335]" />
          <span className="text-[9px] font-semibold text-[#CCCCCC]">
            Q3 Report Review
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-[#EA4335]" />
          <span className="text-[9px] text-[#999999]">Meeting follow-up</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-[#666666]" />
          <span className="text-[9px] text-[#777777]">Invoice #2847</span>
        </div>
      </div>
    </div>
  );
}
