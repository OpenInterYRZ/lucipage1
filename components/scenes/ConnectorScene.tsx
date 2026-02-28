import MarqueeRow from '../ui/MarqueeRow';

const connectors = [
  { emoji: '💬', name: 'Slack' },
  { emoji: '📧', name: 'Gmail' },
  { emoji: '📝', name: 'Notion' },
  { emoji: '🎫', name: 'Jira' },
  { emoji: '📋', name: 'Trello' },
  { emoji: '🎥', name: 'Zoom' },
  { emoji: '🐙', name: 'GitHub' },
  { emoji: '📅', name: 'Calendar' },
  { emoji: '🎮', name: 'Discord' },
  { emoji: '📐', name: 'Linear' },
  { emoji: '🎨', name: 'Figma' },
  { emoji: '✅', name: 'Asana' },
  { emoji: '📊', name: 'Sheets' },
  { emoji: '☁️', name: 'Drive' },
  { emoji: '🔗', name: 'Zapier' },
  { emoji: '📬', name: 'Outlook' },
];

function ConnectorPill({ emoji, name }: { emoji: string; name: string }) {
  return (
    <div className="bg-[#1f1f23] border border-[#2a2a2e] rounded-full py-[6px] px-[12px] flex items-center gap-[6px] whitespace-nowrap">
      <span className="text-[11px]">{emoji}</span>
      <span className="text-secondary font-sans text-[11px] font-medium">{name}</span>
    </div>
  );
}

export default function ConnectorScene() {
  const row1 = connectors.slice(0, 8);
  const row2 = connectors.slice(8);

  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="w-[6px] h-[6px] rounded-full bg-secondary" />
          <span className="text-secondary font-mono text-[9px] font-semibold">Connected Apps</span>
        </div>
        <span className="text-tertiary font-mono text-[8px]">{connectors.length}+ integrations</span>
      </div>

      {/* Marquee rows */}
      <div className="flex-1 flex flex-col justify-center gap-[10px]">
        <MarqueeRow
          items={row1.map((c, i) => <ConnectorPill key={i} emoji={c.emoji} name={c.name} />)}
          direction="left"
          speed={25}
        />
        <MarqueeRow
          items={row2.map((c, i) => <ConnectorPill key={i} emoji={c.emoji} name={c.name} />)}
          direction="right"
          speed={30}
        />
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-center">
        <span className="text-tertiary font-mono text-[8px]">+ growing every week</span>
      </div>
    </div>
  );
}
