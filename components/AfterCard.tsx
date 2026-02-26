import Badge from './Badge';

interface TaskItemProps {
  dotColor: string;
  text: string;
  badgeColor: string;
  badgeText: string;
}

function TaskItem({ dotColor, text, badgeColor, badgeText }: TaskItemProps) {
  return (
    <div className="bg-surface-elevated rounded-[8px] p-[10px] px-[12px] flex items-center gap-[10px] w-full">
      <div className="w-[8px] h-[8px] rounded-full flex-shrink-0" style={{ backgroundColor: dotColor }} />
      <span className="text-secondary font-sans text-[11px] flex-1">
        {text}
      </span>
      <div
        className="rounded-full py-[3px] px-[8px]"
        style={{ backgroundColor: badgeColor }}
      >
        <span className="text-[10px] font-sans font-medium" style={{ color: dotColor }}>
          {badgeText}
        </span>
      </div>
    </div>
  );
}

export default function AfterCard() {
  return (
    <div className="bg-surface rounded-[12px] p-[32px] flex-1 h-[480px] flex flex-col gap-[24px]">
      {/* Label */}
      <Badge
        text="WITH LUCI"
        dotColor="#22C55E"
        textColor="#22C55E"
        bgColor="#22C55E18"
      />

      {/* LUCI Mini Mockup */}
      <div className="bg-bg rounded-[8px] flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-surface-elevated rounded-t-[8px] h-[28px] flex items-center px-[10px] gap-[6px]">
          <div className="w-[7px] h-[7px] rounded-full bg-brand" />
          <div className="w-[7px] h-[7px] rounded-full bg-border" />
          <div className="w-[7px] h-[7px] rounded-full bg-border" />
          <div className="h-[1px] flex-1" />
          <span className="text-brand font-mono text-[10px] font-semibold tracking-[2px]">
            LUCI
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 p-[16px] px-[20px] flex flex-col gap-[14px]">
          <div className="text-secondary font-sans text-[12px] font-medium">
            Meeting ended, LUCI is processing...
          </div>

          <TaskItem
            dotColor="#22C55E"
            text="Meeting summary generated"
            badgeColor="#22C55E18"
            badgeText="Done"
          />

          <TaskItem
            dotColor="#22C55E"
            text="Action Items extracted and Jira created"
            badgeColor="#22C55E18"
            badgeText="Done"
          />

          <TaskItem
            dotColor="var(--color-brand)"
            text="Email notification sent to team"
            badgeColor="#FF5C0018"
            badgeText="In progress"
          />

          <TaskItem
            dotColor="var(--color-brand)"
            text="Memory vault updated — 3 new memories"
            badgeColor="#FF5C0018"
            badgeText="In progress"
          />

          {/* Summary */}
          <div className="bg-[#FF5C0010] rounded-[8px] p-[12px] px-[14px] flex flex-col gap-[6px] mt-auto">
            <div className="text-brand-light font-sans text-[12px] font-semibold">
              Fully automated — no action needed
            </div>
            <div className="text-tertiary font-sans text-[11px]">
              LUCI handles recording to execution, end-to-end
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
