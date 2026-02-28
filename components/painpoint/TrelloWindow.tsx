export function TrelloWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1E1E20] border border-[#333333] flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#292929] rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-[#888888] ml-1">
          Trello
        </span>
      </div>

      {/* Body - Kanban Columns */}
      <div className="flex-1 flex gap-1 p-2">
        <div className="flex-1 bg-[#2A2A2A] rounded" />
        <div className="flex-1 bg-[#2A2A2A] rounded" />
      </div>
    </div>
  );
}
