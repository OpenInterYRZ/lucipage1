export default function AutoExecuteScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[8px] overflow-hidden">
      {/* Trigger card */}
      <div className="bg-[#22C55E10] border border-[#22C55E30] rounded-[8px] py-[8px] px-[10px] flex items-center gap-[8px]">
        <span className="text-[12px]">⚡</span>
        <div className="flex flex-col">
          <span className="text-success font-mono text-[9px] font-semibold">Trigger: Meeting Ended</span>
          <span className="text-tertiary font-mono text-[7px]">Q4 Planning · 3 participants</span>
        </div>
      </div>

      {/* Connector line */}
      <div className="flex items-center justify-center">
        <div className="w-[1px] h-[8px] bg-[#22C55E40]" />
      </div>

      {/* Execution steps */}
      <div className="flex-1 flex flex-col gap-[4px]">
        {/* Step 1 - Done */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[16px] h-[16px] rounded-full bg-[#22C55E20] flex items-center justify-center shrink-0">
            <span className="text-success text-[8px]">✓</span>
          </div>
          <div className="flex-1 bg-[#22C55E08] rounded-[6px] py-[5px] px-[8px]">
            <span className="text-secondary font-mono text-[8px]">📧 Send summary to team@luci.ai</span>
          </div>
        </div>

        {/* Connector */}
        <div className="ml-[7px] w-[1px] h-[4px] bg-[#22C55E30]" />

        {/* Step 2 - Done */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[16px] h-[16px] rounded-full bg-[#22C55E20] flex items-center justify-center shrink-0">
            <span className="text-success text-[8px]">✓</span>
          </div>
          <div className="flex-1 bg-[#22C55E08] rounded-[6px] py-[5px] px-[8px]">
            <span className="text-secondary font-mono text-[8px]">🎫 Create Jira PROJ-142, 143, 144</span>
          </div>
        </div>

        {/* Connector */}
        <div className="ml-[7px] w-[1px] h-[4px] bg-[#FF5C0030]" />

        {/* Step 3 - In progress */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[16px] h-[16px] rounded-full bg-[#FF5C0020] flex items-center justify-center shrink-0 animate-pulse">
            <span className="text-brand text-[8px]">●</span>
          </div>
          <div className="flex-1 bg-[#FF5C0008] border border-[#FF5C0020] rounded-[6px] py-[5px] px-[8px]">
            <span className="text-brand font-mono text-[8px]">💬 Notify #dev-team on Slack</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-[8px]">
        <span className="text-success font-mono text-[8px] font-medium">2/3 Done</span>
        <div className="bg-bg rounded-[2px] h-[3px] flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[66%] bg-success rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}
