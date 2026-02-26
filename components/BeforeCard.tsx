import Badge from './Badge';
import ToolWindow from './ToolWindow';

export default function BeforeCard() {
  return (
    <div className="bg-surface rounded-[12px] p-[32px] flex-1 h-[480px] flex flex-col gap-[24px]">
      {/* Label */}
      <Badge
        text="WITHOUT LUCI"
        dotColor="#EF4444"
        textColor="#EF4444"
        bgColor="#EF444418"
      />

      {/* Tool Stack - overlapping windows */}
      <div className="flex-1 flex flex-col gap-[-8px] relative">
        {/* Notion */}
        <ToolWindow title="Notion">
          <div className="flex flex-col gap-[6px] p-[10px] px-[14px]">
            <div className="text-secondary font-sans text-[11px] font-medium">
              Meeting Notes - Q4 Review
            </div>
            <div className="bg-divider rounded-[3px] h-[6px] w-[200px]" />
            <div className="bg-divider rounded-[3px] h-[6px] w-[160px]" />
            <div className="bg-divider rounded-[3px] h-[6px] w-[240px]" />
            <div className="bg-divider rounded-[3px] h-[6px] w-[180px]" />
          </div>
        </ToolWindow>

        {/* ChatGPT */}
        <ToolWindow title="ChatGPT">
          <div className="flex flex-col gap-[6px] p-[10px] px-[14px]">
            <div className="text-[#8B8B90] font-sans text-[11px]">
              Summarize the meeting...
            </div>
            <div className="bg-divider rounded-[3px] h-[6px] w-[180px]" />
            <div className="bg-divider rounded-[3px] h-[6px] w-[220px]" />
            <div className="bg-divider rounded-[3px] h-[6px] w-[140px]" />
          </div>
        </ToolWindow>

        {/* Voice Recorder */}
        <ToolWindow title="Voice Recorder">
          <div className="flex flex-col gap-[8px] p-[10px] px-[14px]">
            {/* Waveform visual */}
            <div className="flex gap-[3px] items-end h-[40px]">
              {[12, 20, 8, 16, 24, 14, 18, 10, 22, 16, 12, 20, 8, 16].map((height, i) => (
                <div
                  key={i}
                  className="bg-divider w-[4px] rounded-full"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
        </ToolWindow>
      </div>

      {/* Summary */}
      <div className="bg-[#EF444410] rounded-[8px] p-[12px] px-[14px] flex flex-col gap-[6px]">
        <div className="text-error font-sans text-[12px] font-semibold">
          Manual work — all on you
        </div>
        <div className="text-tertiary font-sans text-[11px]">
          5 tools to switch, scattered memory, Action Items manually organized
        </div>
      </div>
    </div>
  );
}
