export function ChatGPTWindow() {
  return (
    <div className="w-full h-full rounded-[10px] bg-win-bg border border-win-border flex flex-col overflow-hidden">
      {/* Title Bar */}
      <div className="flex items-center gap-1.5 h-7 px-2.5 bg-win-titlebar rounded-t-[10px]">
        <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <div className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="text-[11px] font-medium text-win-title-text ml-1">
          ChatGPT
        </span>
      </div>

      {/* Body - Chat Bubbles */}
      <div className="flex-1 flex flex-col gap-2 p-3">
        <div className="bg-win-placeholder-2 rounded-[10px_10px_10px_2px] px-2.5 py-1.5 w-[140px]">
          <span className="text-[10px] text-win-body-text-1">Help me draft...</span>
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
