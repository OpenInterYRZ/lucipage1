"use client";

import { motion } from "framer-motion";
import {
  Video,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const meetings = [
  {
    date: "Mar 10",
    title: "Product Kickoff",
    topic: "Discussed V2 feature scope",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
    thread: true,
  },
  {
    date: "Mar 14",
    title: "Design Review",
    topic: "Confirmed billing page direction",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
    thread: false,
  },
  {
    date: "Mar 17",
    title: "1:1 with James",
    topic: "Frontend progress — V2 timeline concerns raised",
    icon: <MessageCircle className="h-3.5 w-3.5" />,
    color: "#22C55E",
    bg: "#F0FDF4",
    thread: true,
  },
  {
    date: "Mar 20",
    title: "Product Sync",
    topic: "V2 scope reduction discussion",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
    thread: true,
  },
  {
    date: "Mar 24",
    title: "Weekly Standup",
    topic: "Final V2 deadline confirmed: Mar 28",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#E8622C",
    bg: "#FFF7ED",
    thread: true,
  },
];

const threadSummary = {
  topic: "V2 Prototype",
  firstMentioned: "Mar 10",
  meetingCount: 4,
  status: "Resolved",
  conclusion: "After scope reduction, deadline set to Mar 28. James owns frontend.",
  openItems: ["Test cases pending from Lisa", "Client demo to be scheduled"],
};

export default function SceneCrossMeeting() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Step indicator */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5CF6]/10">
            <span className="text-sm font-bold text-[#8B5CF6]">4</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Cross-Meeting Context
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            Connect the dots across meetings
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            Same topic scattered across multiple meetings? LUCI automatically
            links discussions and tracks each topic from when it was first raised
            to its resolution.
          </p>
        </motion.div>

        {/* Full-width timeline + thread summary */}
        <motion.div
          className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB]"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 md:px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
              <span className="text-[14px] font-semibold text-[#1A1A2E]">
                Topic Thread: V2 Prototype
              </span>
            </div>
            <span className="text-[11px] text-[#9CA3AF]">
              Across {threadSummary.meetingCount} meetings · since{" "}
              {threadSummary.firstMentioned}
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Timeline */}
            <div className="flex-1 relative px-6 md:px-8 py-6">
              {/* Vertical line */}
              <div className="absolute left-[39px] md:left-[51px] top-6 bottom-6 w-px bg-[#E5E7EB]" />

              <div className="flex flex-col gap-1">
                {meetings.map((m, i) => (
                  <motion.div
                    key={`${m.date}-${m.title}`}
                    className="relative flex items-start gap-4 py-3"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.07,
                    }}
                  >
                    {/* Date */}
                    <span className="w-10 shrink-0 pt-1 text-right text-[11px] tabular-nums text-[#9CA3AF]">
                      {m.date}
                    </span>

                    {/* Icon dot */}
                    <div
                      className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: m.bg, color: m.color }}
                    >
                      {m.icon}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-0.5 pt-0.5 flex-1">
                      <span className="text-[13px] font-medium text-[#1A1A2E]">
                        {m.title}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {m.topic}
                      </span>
                    </div>

                    {/* Thread indicator */}
                    {m.thread && (
                      <div className="shrink-0 flex items-center gap-1">
                        <div className="h-px w-4 bg-[#8B5CF6]/30" />
                        <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Thread Summary Sidebar */}
            <motion.div
              className="w-full md:w-[280px] shrink-0 border-t md:border-t-0 md:border-l border-[#E5E7EB] px-6 md:px-6 py-6 bg-[#FAFAFE]"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                Thread Summary
              </span>

              <div className="mt-4 flex flex-col gap-4">
                {/* Status */}
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                  <span className="text-[12px] font-medium text-[#22C55E]">
                    {threadSummary.status}
                  </span>
                </div>

                {/* Conclusion */}
                <div className="rounded-lg bg-white border border-[#E5E7EB] px-4 py-3">
                  <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                    Conclusion
                  </span>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[#374151]">
                    {threadSummary.conclusion}
                  </p>
                </div>

                {/* Open items */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                    Open Items
                  </span>
                  {threadSummary.openItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[12px] text-[#374151]"
                    >
                      <AlertCircle className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 md:px-8 py-3 bg-[#F9FAFB]">
            <span className="text-[11px] text-[#9CA3AF]">
              LUCI automatically links all related discussions
            </span>
            <div className="flex items-center gap-1.5">
              <ArrowRight className="h-3.5 w-3.5 text-[#8B5CF6]" />
              <span className="text-[11px] font-medium text-[#8B5CF6]">
                View all topic threads
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
