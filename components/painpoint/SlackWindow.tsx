export function SlackWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-win-bg border border-win-border flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-win-titlebar rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-win-title-text ml-1">
          Slack
        </span>
      </div>

      {/* Body - Channel List */}
      <div className="flex-1 flex flex-col gap-[5px] p-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E01E5A]" />
          <span className="text-[10px] text-win-body-text-1">#general 3 new</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E01E5A]" />
          <span className="text-[10px] text-win-body-text-1">#design 12 unread</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#36C5F0]" />
          <span className="text-[10px] text-win-body-text-2">DM @alex</span>
        </div>
      </div>
    </div>
  );
}
