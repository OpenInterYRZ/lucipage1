import React from 'react';

interface AppWindowProps {
  name: string;
  logo: React.ReactNode;
  position: {
    x: number;
    y: number;
    rotate?: number;
    zIndex?: number;
  };
  children?: React.ReactNode;
}

export function AppWindow({ name, logo, position, children }: AppWindowProps) {
  return (
    <div
      className="absolute bg-surface-elevated rounded-lg shadow-lg border border-divider"
      style={{
        left: `${position.x}rem`,
        top: `${position.y}rem`,
        transform: `rotate(${position.rotate || 0}deg)`,
        zIndex: position.zIndex || 1,
        width: '16rem',
      }}
    >
      {/* Window title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-divider">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-error" />
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <div className="w-3 h-3 rounded-full bg-success" />
        </div>
        <div className="flex items-center gap-2 ml-2">
          {logo}
          <span className="text-sm text-secondary">{name}</span>
        </div>
      </div>

      {/* Window content area (optional) */}
      {children && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
}
