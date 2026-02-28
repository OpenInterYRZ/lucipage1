import { ReactNode } from 'react';

interface MarqueeRowProps {
  items: ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function MarqueeRow({ items, direction = 'left', speed = 30 }: MarqueeRowProps) {
  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-[12px] w-max"
        style={{
          animation: `${animationName} ${speed}s linear infinite`,
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0">{item}</div>
        ))}
        {items.map((item, i) => (
          <div key={`dup-${i}`} className="shrink-0">{item}</div>
        ))}
      </div>
    </div>
  );
}
