"use client";

import { Send } from "lucide-react";
import { UserBubble } from "./UserBubble";
import { AssistantBubble } from "./AssistantBubble";
import { ThinkingPill } from "./ThinkingPill";
import { AgentCallingPill } from "./AgentCallingPill";
import { StatusPill } from "./StatusPill";
import { ActionCompletePill } from "./ActionCompletePill";
import { MemoryUpdateCard } from "./MemoryUpdateCard";
import { MemoryNotification } from "./MemoryNotification";

export function PhoneChatScreen() {
  return (
    <div className="mockup-phone  scale-75">
      <div className="mockup-phone-display  bg-white">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white my-6 text-left">
          {/* ── Chat Header ── */}
          <div
            className="flex items-center gap-2.5 border-b border-black/[0.03] px-4 py-3"
            style={{ boxShadow: "0 1px 4px rgba(0, 0, 0, 0.04)" }}
          >
            {/* LUCI Avatar */}
            <div
              className="h-8 w-8 shrink-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)",
                boxShadow: "0 2px 6px rgba(255, 140, 0, 0.2)",
              }}
            />
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold text-[#1A1A1A]">LUCI</span>
              <span className="text-lg font-medium tracking-[0.3px] text-[#34C759]">
                Online
              </span>
            </div>
          </div>

          {/* ── Messages ── */}
          <div
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
            }}
          >
            {/* User message */}
            <UserBubble text="Help me analyze today's meeting recording" />

            {/* Thinking */}
            <ThinkingPill />

            {/* Agent calling */}
            <AgentCallingPill agentName="agent_video" />

            {/* Status */}
            <StatusPill text="Analyzing video..." />

            {/* Assistant reply */}
            <AssistantBubble text="I've finished analyzing your meeting recording. Here's a summary of the key points:" />

            {/* Action complete */}
            <ActionCompletePill label="Video analysis complete" />

            {/* Memory card */}
            <MemoryUpdateCard
              title="YS had a casual chat with their clone"
              summary="I extracted memory points. I am someone with a lot of vibe..."
              timestamp="Just now"
            />

            {/* Memory notification expanded */}
            <MemoryNotification />
          </div>

          {/* ── Input Bar ── */}
          <div
            className="flex items-center gap-2 border-t border-black/[0.03] bg-white px-3 py-2.5 mb-10"
            style={{ boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="flex h-9 flex-1 items-center rounded-[20px] border border-[#E8E8EC] bg-[#F7F7F8] px-3.5">
              <span className="text-lg font-normal text-[#AAAAAA]">
                Ask LUCI...
              </span>
            </div>
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)",
                boxShadow: "0 2px 6px rgba(255, 140, 0, 0.2)",
              }}
            >
              <Send size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
