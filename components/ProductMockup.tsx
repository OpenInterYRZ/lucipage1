'use client';

import { useState } from 'react';

type NavItem = 'Dashboard' | 'Memories' | 'Tasks' | 'Agents' | 'Settings';

interface ContentConfig {
  title: string;
  subtitle: string;
  showCards: boolean;
  cardCount?: number;
}

const contentMap: Record<NavItem, ContentConfig> = {
  Dashboard: {
    title: 'Good evening, Alex',
    subtitle: '3 tasks completed today · 12 memories captured',
    showCards: true,
    cardCount: 3,
  },
  Memories: {
    title: 'Your Memories',
    subtitle: '156 memories stored · 23 from today',
    showCards: true,
    cardCount: 4,
  },
  Tasks: {
    title: 'Active Tasks',
    subtitle: '8 pending tasks · 2 due today',
    showCards: false,
  },
  Agents: {
    title: 'AI Agents',
    subtitle: '5 agents configured · 3 active',
    showCards: true,
    cardCount: 2,
  },
  Settings: {
    title: 'Settings',
    subtitle: 'Manage your preferences and account',
    showCards: false,
  },
};

export default function ProductMockup() {
  const [activeNav, setActiveNav] = useState<NavItem>('Dashboard');
  const [isHovered, setIsHovered] = useState(false);

  const content = contentMap[activeNav];
  const navItems: NavItem[] = ['Dashboard', 'Memories', 'Tasks', 'Agents', 'Settings'];

  return (
    <div
      className={`bg-surface-elevated rounded-[12px] p-[2px] w-[1100px] h-[580px] flex flex-col transition-all duration-300 ${
        isHovered ? 'scale-[1.02] shadow-2xl shadow-brand/20' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mockup Screen */}
      <div className="bg-surface rounded-[10px] h-full flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-surface-elevated h-[40px] flex items-center px-[16px] gap-[8px]">
          <div className="w-[10px] h-[10px] rounded-full bg-border" />
          <div className="w-[10px] h-[10px] rounded-full bg-border" />
          <div className="w-[10px] h-[10px] rounded-full bg-border" />
        </div>

        {/* App Content */}
        <div className="flex h-full overflow-hidden">
          {/* Sidebar */}
          <div className="bg-bg w-[220px] h-full flex flex-col gap-[12px] py-[20px] px-[16px]">
            <div className="text-brand font-mono text-[14px] font-semibold tracking-[2px] mb-[8px]">
              LUCI
            </div>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`text-left font-sans text-[13px] transition-all duration-200 rounded-[6px] px-[8px] py-[6px] -mx-[8px] ${
                  activeNav === item
                    ? 'text-primary font-medium bg-surface-elevated'
                    : 'text-tertiary hover:text-secondary hover:bg-surface-elevated/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Main Area */}
          <div className="bg-surface flex-1 h-full flex flex-col gap-[20px] py-[24px] px-[28px] overflow-hidden">
            <div className="transition-all duration-300">
              <div className="text-primary font-sans text-[22px] font-semibold">
                {content.title}
              </div>
              <div className="text-tertiary font-sans text-[13px]">
                {content.subtitle}
              </div>
            </div>

            {/* Cards Row */}
            {content.showCards && (
              <div className="flex gap-[16px] transition-all duration-300">
                {Array.from({ length: content.cardCount || 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-surface-elevated rounded-[8px] flex-1 h-[100px] transition-all duration-300 hover:bg-surface-hover"
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${i * 0.1}s both`,
                    }}
                  />
                ))}
              </div>
            )}

            {/* Task Section */}
            <div
              className="bg-surface-elevated rounded-[10px] flex-1 p-[16px] transition-all duration-300"
              style={{
                animation: 'fadeInUp 0.4s ease-out 0.3s both',
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
