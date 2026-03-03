export function GmailWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-win-bg border border-win-border flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-win-titlebar rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-win-title-text ml-1">
          Gmail
        </span>
      </div>

      {/* Body - Email List */}
      <div className="flex-1 flex flex-col gap-1 p-2">
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-[#EA4335]" />
          <span className="text-[9px] font-semibold text-win-body-text-bright">
            Q3 Report Review
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-[#EA4335]" />
          <span className="text-[9px] text-win-body-text-1">Meeting follow-up</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-[5px] h-[5px] rounded-full bg-win-body-text-dim" />
          <span className="text-[9px] text-win-body-text-2">Invoice #2847</span>
        </div>
      </div>
    </div>
  );
}
