export function JiraWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1A1A1E] border border-[#333333] flex flex-col overflow-hidden">
      <div className="w-full h-full rounded-[10px] bg-[#1A1A1E] border border-[#333333] flex flex-col overflow-hidden">
        {/* Title Bar */}
        <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#242428] rounded-t-[10px]">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
          <span className="text-[11px] font-medium text-[#888888] ml-1">
            Jira
          </span>
        </div>

        {/* Body - Issue List */}
        <div className="flex-1 flex flex-col gap-[5px] p-2.5">
          <div className="flex items-center gap-1.5">
            <div className="bg-[#0052CC33] rounded-[3px] px-[5px] py-0.5">
              <div className="w-2 h-2" />
            </div>
            <span className="text-[9px] text-[#AAAAAA]">Login timeout</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="bg-[#36B37E33] rounded-[3px] px-[5px] py-0.5">
              <div className="w-2 h-2" />
            </div>
            <span className="text-[9px] text-[#AAAAAA]">API refactor</span>
          </div>
        </div>
      </div>
    </div>
  );
}
