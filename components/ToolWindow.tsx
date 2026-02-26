interface ToolWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function ToolWindow({ title, children }: ToolWindowProps) {
  return (
    <div className="bg-surface-elevated rounded-[8px] flex flex-col">
      {/* Title Bar */}
      <div className="bg-surface-hover h-[28px] flex items-center px-[10px] gap-[6px]">
        <div className="w-[7px] h-[7px] rounded-full bg-border" />
        <div className="w-[7px] h-[7px] rounded-full bg-border" />
        <div className="w-[7px] h-[7px] rounded-full bg-border" />
        <div className="h-[1px] flex-1" />
        <span className="text-tertiary font-sans text-[10px] font-medium">
          {title}
        </span>
      </div>
      {/* Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
