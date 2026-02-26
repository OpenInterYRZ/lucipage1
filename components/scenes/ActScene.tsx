interface AgentItemProps {
  iconColor: string;
  text: string;
  badgeColor: string;
  status: string;
}

function AgentItem({ iconColor, text, badgeColor, status }: AgentItemProps) {
  return (
    <div className="bg-surface rounded-[6px] py-[6px] px-[8px] flex items-center gap-[6px]">
      <div className="rounded-[4px] w-[20px] h-[20px]" style={{ backgroundColor: iconColor }} />
      <span className="text-secondary font-sans text-[9px] flex-1">
        {text}
      </span>
      <div className="rounded-full py-[2px] px-[6px]" style={{ backgroundColor: badgeColor }}>
        <span className="text-[8px] font-sans font-medium text-primary">
          {status}
        </span>
      </div>
    </div>
  );
}

export default function ActScene() {
  return (
    <div className="bg-surface-hover rounded-[10px] h-[180px] p-[12px] flex flex-col gap-[8px]">
      {/* Header */}
      <div className="flex items-center gap-[6px]">
        <div className="w-[8px] h-[8px] rounded-full bg-brand" />
        <span className="text-brand font-mono text-[9px] font-semibold tracking-[0.5px]">
          Agent Orchestrator
        </span>
      </div>

      {/* Agent List */}
      <div className="flex-1 flex flex-col gap-[6px]">
        <AgentItem
          iconColor="#22C55E15"
          text="Create Jira tickets"
          badgeColor="#22C55E18"
          status="✓"
        />
        <AgentItem
          iconColor="#FF5C0015"
          text="Send email to team"
          badgeColor="#FF5C0018"
          status="..."
        />
        <AgentItem
          iconColor="#FF5C0015"
          text="Update project docs"
          badgeColor="#FF5C0018"
          status="..."
        />
        <AgentItem
          iconColor="#6B6B7015"
          text="Schedule follow-up"
          badgeColor="#6B6B7018"
          status="○"
        />
      </div>
    </div>
  );
}
