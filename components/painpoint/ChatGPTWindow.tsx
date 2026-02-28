export function ChatGPTWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-[#1A1A1A] border border-[#333333] flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-[#252525] rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-[#888888] ml-1">
          ChatGPT
        </span>
      </div>

      {/* Body - Chat Bubbles */}
      <div className="flex-1 flex flex-col gap-2 p-3">
        <div className="bg-[#2C2C2C] rounded-[10px_10px_10px_2px] px-2.5 py-1.5 w-[140px]">
          <span className="text-[10px] text-[#999999]">Help me draft...</span>
        </div>
        <div className="bg-[#0D6E6E33] rounded-[10px_10px_2px_10px] px-2.5 py-1.5 w-[160px]">
          <span className="text-[10px] text-[#0D9E9E]">
            Sure, here&apos;s a draft...
          </span>
        </div>
      </div>
    </div>
  );
}
