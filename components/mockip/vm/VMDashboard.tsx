"use client";

import { useState } from "react";
import { Video, Brain, FileText, MessageCircle } from "lucide-react";
import VM1VideoLibrary from "./VM1VideoLibrary";
import VM2MemoryPage from "./VM2MemoryPage";
import VM3TaskExecution from "./VM3TaskExecution";
import VM4ChatScreen from "./VM4ChatScreen";

const tabs = [
  { key: "video", label: "Video", icon: Video },
  { key: "memory", label: "Memory", icon: Brain },
  { key: "task", label: "Task", icon: FileText },
  { key: "chat", label: "Chat", icon: MessageCircle },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export default function VMDashboard() {
  const [active, setActive] = useState<TabKey>("video");

  return (
    <div className="font-[family-name:var(--font-manrope)] flex flex-col w-full h-screen bg-white overflow-hidden">
      {/* Tab bar */}
      <div className="flex shrink-0 border-b border-[#F0F0F0]">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[13px] font-medium transition-colors relative ${
                isActive ? "text-[#FF8C00]" : "text-[#999] hover:text-[#666]"
              }`}
            >
              <Icon size={16} />
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#FF8C00] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Pages — all mounted, toggle visibility to avoid re-render */}
      <div className="flex-1 overflow-hidden relative">
        <div className={`absolute inset-0 overflow-y-auto ${active === "video" ? "" : "hidden"}`}>
          <VM1VideoLibrary />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${active === "memory" ? "" : "hidden"}`}>
          <VM2MemoryPage />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${active === "task" ? "" : "hidden"}`}>
          <VM3TaskExecution />
        </div>
        <div className={`absolute inset-0 overflow-y-auto ${active === "chat" ? "" : "hidden"}`}>
          <VM4ChatScreen />
        </div>
      </div>
    </div>
  );
}
