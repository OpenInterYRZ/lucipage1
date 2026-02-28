import MarqueeRow from '../ui/MarqueeRow';

const skills = [
  { name: 'Email Drafting', type: 'built-in' as const },
  { name: 'Calendar Mgmt', type: 'built-in' as const },
  { name: 'Code Review', type: 'community' as const },
  { name: 'Data Analysis', type: 'built-in' as const },
  { name: 'Social Media', type: 'community' as const },
  { name: 'Translation', type: 'built-in' as const },
  { name: 'Doc Generation', type: 'built-in' as const },
  { name: 'Client Follow-up', type: 'community' as const },
  { name: 'Report Builder', type: 'built-in' as const },
  { name: 'Meeting Notes', type: 'built-in' as const },
  { name: 'CRM Sync', type: 'community' as const },
  { name: 'Expense Tracker', type: 'community' as const },
  { name: 'Recruiting', type: 'community' as const },
  { name: 'Onboarding', type: 'community' as const },
  { name: 'Design Brief', type: 'community' as const },
  { name: 'SEO Analyzer', type: 'community' as const },
];

function SkillTag({ name, type }: { name: string; type: 'built-in' | 'community' }) {
  const isBuiltIn = type === 'built-in';
  return (
    <div className="bg-[#1f1f23] border border-[#2a2a2e] rounded-[8px] py-[6px] px-[10px] flex items-center gap-[6px] whitespace-nowrap">
      <span className="text-primary font-sans text-[11px] font-medium">{name}</span>
      <span
        className="font-mono text-[7px] font-medium rounded-[3px] py-[1px] px-[4px]"
        style={{
          color: isBuiltIn ? '#22C55E' : '#adadb0',
          backgroundColor: isBuiltIn ? '#22C55E15' : '#adadb010',
        }}
      >
        {isBuiltIn ? 'Built-in' : 'Community'}
      </span>
    </div>
  );
}

export default function SkillsScene() {
  const row1 = skills.slice(0, 8);
  const row2 = skills.slice(8);

  return (
    <div className="bg-surface-hover rounded-t-[16px] h-[240px] p-[16px] flex flex-col gap-[10px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[6px]">
          <div className="w-[6px] h-[6px] rounded-full bg-secondary" />
          <span className="text-secondary font-mono text-[9px] font-semibold">Skill Store</span>
        </div>
        <span className="text-tertiary font-mono text-[8px]">{skills.length}+ skills</span>
      </div>

      {/* Marquee rows */}
      <div className="flex-1 flex flex-col justify-center gap-[10px]">
        <MarqueeRow
          items={row1.map((s, i) => <SkillTag key={i} name={s.name} type={s.type} />)}
          direction="left"
          speed={28}
        />
        <MarqueeRow
          items={row2.map((s, i) => <SkillTag key={i} name={s.name} type={s.type} />)}
          direction="right"
          speed={32}
        />
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-center gap-[12px]">
        <span className="text-tertiary font-mono text-[8px]">Install skills like apps</span>
      </div>
    </div>
  );
}
