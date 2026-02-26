interface TaskFlowItemProps {
  icon: string;
  iconColor: string;
  text: string;
  textColor: string;
  bgColor: string;
}

function TaskFlowItem({ icon, iconColor, text, textColor, bgColor }: TaskFlowItemProps) {
  return (
    <div className="rounded-[6px] py-[6px] px-[10px] flex items-center gap-[8px]" style={{ backgroundColor: bgColor }}>
      <span className="font-mono text-[10px] font-bold" style={{ color: iconColor }}>
        {icon}
      </span>
      <span className="font-sans text-[9px]" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
}

export default function AutoExecuteScene() {
  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[8px]">
      {/* Header */}
      <div className="flex items-center gap-[8px]">
        <div className="rounded-[5px] w-[10px] h-[10px] bg-success animate-pulse" />
        <span className="text-success font-mono text-[10px] font-semibold">
          LUCI Agent — Executing
        </span>
      </div>

      {/* Task Flow */}
      <div className="flex-1 flex flex-col gap-[6px]">
        <TaskFlowItem
          icon="✓"
          iconColor="#22C55E"
          text="Parse meeting notes → Extract 3 Action Items"
          textColor="#ADADB0"
          bgColor="#22C55E10"
        />
        <TaskFlowItem
          icon="✓"
          iconColor="#22C55E"
          text="Email Alex → Confirm technical approach"
          textColor="#ADADB0"
          bgColor="#22C55E10"
        />
        <TaskFlowItem
          icon="⟳"
          iconColor="#FF5C00"
          text="Create Jira Tickets → PROJ-142, 143, 144"
          textColor="#FF5C00"
          bgColor="#FF5C0010"
        />
        <TaskFlowItem
          icon="○"
          iconColor="#555558"
          text="Update CRM customer follow-up status"
          textColor="#555558"
          bgColor="#1A1A1D"
        />
        <TaskFlowItem
          icon="○"
          iconColor="#555558"
          text="Generate project weekly report draft"
          textColor="#555558"
          bgColor="#1A1A1D"
        />
      </div>

      {/* Progress Row */}
      <div className="flex items-center gap-[8px]">
        <span className="text-success font-mono text-[9px] font-medium">
          2/5 Done
        </span>
        <div className="bg-bg rounded-[2px] h-[4px] flex-1 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-[40%] bg-success rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}
