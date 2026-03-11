"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Video,
  MessageSquare,
  Mic,
  Tag,
  Clock,
} from "lucide-react";

const capturedIdeas = [
  {
    source: "Meeting",
    icon: <Video className="h-3 w-3" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
    idea: "Use gamification for onboarding — mentioned by Alex during product brainstorm",
    tags: ["Product", "UX"],
    time: "10:15 AM",
  },
  {
    source: "Voice Note",
    icon: <Mic className="h-3 w-3" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
    idea: "What if we let users create templates from their own workflows?",
    tags: ["Feature Idea"],
    time: "2:30 PM",
  },
  {
    source: "Slack",
    icon: <MessageSquare className="h-3 w-3" />,
    color: "#22C55E",
    bg: "#F0FDF4",
    idea: "Competitor X just launched AI summaries — we should differentiate with context linking",
    tags: ["Strategy", "Competitive"],
    time: "4:45 PM",
  },
  {
    source: "Meeting",
    icon: <Video className="h-3 w-3" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
    idea: "Monthly newsletter could feature user-submitted use cases — builds community",
    tags: ["Marketing", "Community"],
    time: "11:00 AM",
  },
];

export default function SceneIdeaCapture() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B]/10">
            <span className="text-sm font-bold text-[#F59E0B]">1</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Idea Capture
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              Never lose an idea again
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI listens across your meetings, chats, and voice notes —
              automatically tagging and saving every creative spark. Ideas
              are captured the moment they happen, not when you remember
              to write them down.
            </p>
          </div>

          <div
            className="flex flex-1 items-end justify-end overflow-hidden rounded-[20px] p-5 md:p-10"
            style={{
              backgroundImage: "url(/pb.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="w-full overflow-hidden rounded-xl bg-white"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            >
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-3.5 w-3.5 text-[#F59E0B]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Idea Feed — Today
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  4 ideas captured
                </span>
              </div>

              <div className="flex flex-col px-6 py-4 gap-1">
                {capturedIdeas.map((item, i) => (
                  <motion.div
                    key={item.idea}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-[#F9FAFB]"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.08 + i * 0.1,
                    }}
                  >
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md mt-0.5"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider"
                          style={{ color: item.color }}
                        >
                          {item.source}
                        </span>
                        <span className="text-[10px] text-[#9CA3AF]">
                          {item.time}
                        </span>
                      </div>
                      <span className="text-[12px] leading-relaxed text-[#374151]">
                        {item.idea}
                      </span>
                      <div className="flex gap-1.5 mt-0.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-0.5 rounded bg-[#F3F4F6] px-1.5 py-0.5 text-[9px] font-medium text-[#6B7280]"
                          >
                            <Tag className="h-2 w-2" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF]">
                  <Clock className="h-3 w-3" />
                  Auto-captured from 3 sources
                </div>
                <span className="text-[11px] font-medium text-[#F59E0B] cursor-pointer">
                  View all ideas
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
