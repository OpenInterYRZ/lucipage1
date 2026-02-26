interface NotificationProps {
  dotColor: string;
  bgColor: string;
  title: string;
  titleColor: string;
  description: string;
}

function Notification({ dotColor, bgColor, title, titleColor, description }: NotificationProps) {
  return (
    <div className="rounded-[8px] py-[6px] px-[10px] flex gap-[8px]" style={{ backgroundColor: bgColor }}>
      <div className="rounded-[3px] w-[6px] h-[6px] mt-[4px] flex-shrink-0" style={{ backgroundColor: dotColor }} />
      <div className="flex flex-col gap-[2px] flex-1">
        <div className="font-sans text-[9px] font-semibold" style={{ color: titleColor }}>
          {title}
        </div>
        <div className="text-secondary font-sans text-[8px]">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function NotifyScene() {
  return (
    <div className="bg-surface-hover rounded-[12px] h-[180px] p-[12px] flex flex-col gap-[8px]">
      {/* Header */}
      <div className="flex items-center gap-[8px]">
        <div className="bg-accent rounded-[10px] w-[20px] h-[20px] relative">
          <div className="absolute -top-[2px] -right-[2px] bg-brand rounded-[4px] w-[8px] h-[8px]" />
        </div>
        <span className="text-primary font-sans text-[11px] font-semibold flex-1">
          Notifications
        </span>
        <div className="bg-brand rounded-[8px] py-[2px] px-[6px]">
          <span className="text-primary font-mono text-[9px] font-semibold">3</span>
        </div>
      </div>

      {/* Notifications */}
      <div className="flex-1 flex flex-col gap-[8px]">
        <Notification
          dotColor="#22C55E"
          bgColor="#22C55E15"
          title="Meeting summary sent"
          titleColor="#22C55E"
          description="Sent via email to 5 attendees"
        />
        <Notification
          dotColor="#22C55E"
          bgColor="#22C55E15"
          title="Jira Tickets created"
          titleColor="#22C55E"
          description="3 tasks assigned to dev team"
        />
        <Notification
          dotColor="#785DE1"
          bgColor="#785DE115"
          title="CRM updated"
          titleColor="#785DE1"
          description="Follow-up reminder set → Fri 14:00"
        />
      </div>
    </div>
  );
}
