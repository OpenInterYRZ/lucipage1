"use client";

import {
  ChevronDown,
  ChevronRight,
  Video,
  CircleCheck,
  Gem,
  Sparkles,
  Bot,
} from "lucide-react";

const font = "font-[family-name:var(--font-manrope)]";

/* ─── Sub-components ───────────────────────────────────────────────── */

function ChatHeader() {
  return (
    <div className="flex items-center gap-2.5 px-4 py-3 bg-white border-b border-black/[.03] rounded-t-3xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
      {/* Avatar */}
      <div
        className="w-8 h-8 rounded-full shrink-0"
        style={{
          background: "linear-gradient(135deg, #FF8C00, #FFB347)",
          boxShadow: "0 2px 6px rgba(255,140,0,0.2)",
        }}
      />
      <div className="flex flex-col gap-0.5">
        <span className={`text-[15px] font-bold text-[#1A1A1A] ${font}`}>
          LUCI
        </span>
        <span className={`text-[11px] font-medium text-[#34C759] tracking-wide ${font}`}>
          Online
        </span>
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end w-full">
      <div
        className="rounded-[18px_18px_4px_18px] px-4 py-2.5 max-w-[240px]"
        style={{
          background: "linear-gradient(135deg, #FF8C00, #FFa030)",
          boxShadow: "0 2px 8px rgba(255,140,0,0.15)",
        }}
      >
        <p className={`text-[13px] leading-[1.45] text-white ${font}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

function LuciBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-start w-full">
      <div className="rounded-[18px_18px_18px_4px] bg-[#F5F5F7] px-4 py-2.5 max-w-[240px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
        <p className={`text-[13px] leading-[1.45] text-[#2C2C2E] ${font}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

function ActionCompletePill({
  icon: Icon,
  text,
}: {
  icon: typeof CircleCheck;
  text: string;
}) {
  return (
    <div className="flex items-center gap-[7px] bg-[#F7F7F8] border border-[#E8E8EC] rounded-full pl-2.5 pr-3 py-[5px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <Icon size={14} className="text-[#555]" />
      <span className={`text-xs font-medium text-[#555] tracking-wide ${font}`}>
        {text}
      </span>
      <ChevronDown size={12} className="text-[#999]" />
    </div>
  );
}

function ThinkingPill() {
  return (
    <div className="flex items-center gap-[7px] bg-[#F7F7F8] rounded-full pl-2.5 pr-3 py-[5px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <Sparkles size={14} className="text-[#555]" />
      <span className={`text-xs font-medium text-[#555] tracking-wide ${font}`}>
        思考过程
      </span>
      <ChevronDown size={12} className="text-[#999]" />
    </div>
  );
}

function AgentCallingPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#F7F7F8] rounded-full pl-2.5 pr-3.5 py-1.5">
      <div className="w-5 h-5 rounded-[10px] bg-[#E8E8EC] flex items-center justify-center">
        <Bot size={12} className="text-[#555]" />
      </div>
      <span className={`text-xs font-semibold text-[#333] ${font}`}>
        {name}
      </span>
      <div className="flex items-center gap-[3px]">
        <span className="w-1 h-1 rounded-full bg-[#999]" />
        <span className="w-1 h-1 rounded-full bg-[#BBB]" />
        <span className="w-1 h-1 rounded-full bg-[#DDD]" />
      </div>
    </div>
  );
}

function StatusPill({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-[7px] bg-[#F7F7F8] border border-[#FFE0B2] rounded-full pl-3 pr-2.5 py-[5px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <span className="w-[7px] h-[7px] rounded-full bg-[#FF8C00]" />
      <span className={`text-xs font-medium text-[#555] tracking-wide ${font}`}>
        {text}
      </span>
      <ChevronRight size={12} className="text-[#FF8C00]" />
    </div>
  );
}

function MemoryUpdateNotification() {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-2xl p-4 px-[18px] w-full shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      {/* Top row */}
      <div className="flex items-center gap-1.5 w-full">
        <Gem size={16} className="text-[#4A6CF7]" />
        <span className={`text-sm font-bold text-[#1A1A2E] ${font}`}>
          记忆更新
        </span>
        <div className="flex-1" />
        <ChevronDown size={16} className="text-[#AAA]" />
      </div>

      {/* Body */}
      <p className={`text-xs leading-[1.5] text-[#4A6CF7] ${font}`}>
        我认为在今天阶段，AI辅助开发虽然减少了基础的CRUD重复性工作，但频繁的心智切换（context
        switching）反而显著增加了认知负担。
      </p>

      {/* Buttons */}
      <div className="flex gap-2.5 w-full">
        <button
          className={`flex-1 h-9 rounded-lg bg-white border border-[#E0E0E8] text-xs font-semibold text-[#666] tracking-wide ${font}`}
        >
          UNDO
        </button>
        <button
          className={`flex-1 h-9 rounded-lg bg-white border border-[#E0E0E8] text-xs font-semibold text-[#666] tracking-wide ${font}`}
        >
          ACCEPT
        </button>
      </div>

      {/* View link */}
      <div className="flex justify-center">
        <span className={`text-xs font-medium text-[#4A6CF7] ${font}`}>
          View Memories
        </span>
      </div>
    </div>
  );
}

function InputBar() {
  return (
    <div className="flex items-center gap-2 px-3 py-2.5 bg-white border-t border-black/[.03] shadow-[0_-1px_4px_rgba(0,0,0,0.04)]">
      <div className="flex items-center flex-1 h-9 rounded-full bg-[#F7F7F8] border border-[#E8E8EC] px-3.5">
        <span className={`text-[13px] text-[#AAA] ${font}`}>Ask LUCI...</span>
      </div>
      <div
        className="w-8 h-8 rounded-full shrink-0"
        style={{
          background: "linear-gradient(135deg, #FF8C00, #FFB347)",
          boxShadow: "0 2px 6px rgba(255,140,0,0.2)",
        }}
      />
    </div>
  );
}

/* ─── Main Component ───────────────────────────────────────────────── */

export default function VM4ChatScreen() {
  return (
    <div
      className={`flex flex-col bg-white rounded-3xl overflow-hidden w-full h-full ${font}`}
    >
      <ChatHeader />

      {/* Messages area */}
      <div
        className="flex flex-col gap-2.5 flex-1 p-4"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
        }}
      >
        <UserBubble text="Help me analyze today's meeting recording" />
        <ActionCompletePill icon={Video} text="Video analyzed ✓" />
        <LuciBubble text="Lisa mentioned Q3 budget is $2.4M and needs your approval by Friday." />
        <MemoryUpdateNotification />
      </div>

      <InputBar />
    </div>
  );
}
