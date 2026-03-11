"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, FileText, Star, Clock } from "lucide-react";

const digestItems = [
  {
    source: "Gmail",
    icon: <Mail className="h-3 w-3" />,
    color: "#EF4444",
    bg: "#FEF2F2",
    title: "Q2 budget approval from CFO",
    detail: "Final numbers approved — $240K allocated for Project Atlas",
    time: "9:15 AM",
    starred: true,
  },
  {
    source: "Slack",
    icon: <MessageSquare className="h-3 w-3" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
    title: "Design team flagged API breaking change",
    detail: "v3 endpoint deprecation affects 2 active projects",
    time: "10:30 AM",
    starred: false,
  },
  {
    source: "Meeting",
    icon: <FileText className="h-3 w-3" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
    title: "Product sync: launch moved to April 15",
    detail: "QA needs 1 extra week — marketing adjusting campaign timeline",
    time: "11:00 AM",
    starred: true,
  },
  {
    source: "Notion",
    icon: <FileText className="h-3 w-3" />,
    color: "#22C55E",
    bg: "#F0FDF4",
    title: "Competitor analysis doc updated",
    detail: "3 new entries added by research team — pricing section revised",
    time: "2:45 PM",
    starred: false,
  },
];

export default function SceneSmartDigest() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-bold text-primary">1</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Smart Digest
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
              Your daily briefing, auto-generated
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              Every morning, LUCI scans your emails, Slack messages, meeting
              notes, and documents — then delivers a prioritized digest of
              what actually matters. No more inbox triage.
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
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E8622C]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Daily Digest — Mar 24
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  4 sources · 12 items filtered to 4
                </span>
              </div>

              <div className="flex flex-col px-6 py-4 gap-1">
                {digestItems.map((item, i) => (
                  <motion.div
                    key={item.title}
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
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
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
                        {item.starred && (
                          <Star className="h-3 w-3 text-[#F59E0B] fill-[#F59E0B] ml-auto shrink-0" />
                        )}
                      </div>
                      <span className="text-[12px] font-medium text-[#1A1A2E]">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {item.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF]">
                  <Clock className="h-3 w-3" />
                  Updated at 8:00 AM
                </div>
                <span className="text-[11px] font-medium text-primary cursor-pointer">
                  View all sources
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
