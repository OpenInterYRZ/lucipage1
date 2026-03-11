"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, AlertCircle, User } from "lucide-react";

const actionItems = [
  {
    text: "Complete V2 prototype frontend",
    owner: "James Liu",
    due: "Mar 28",
    status: "done" as const,
    source: "Weekly Standup · Mar 24",
  },
  {
    text: "Prepare test cases",
    owner: "Lisa Wang",
    due: "Mar 26",
    status: "in_progress" as const,
    source: "Weekly Standup · Mar 24",
  },
  {
    text: "Update client onboarding docs",
    owner: "David Kim",
    due: "Mar 22",
    status: "overdue" as const,
    source: "Product Sync · Mar 20",
  },
  {
    text: "Schedule client demo",
    owner: "Sarah Chen",
    due: "Mar 30",
    status: "pending" as const,
    source: "Weekly Standup · Mar 24",
  },
  {
    text: "Design billing page prototype",
    owner: "Amy Zhou",
    due: "Mar 29",
    status: "in_progress" as const,
    source: "Design Review · Mar 22",
  },
];

const statusConfig = {
  done: {
    icon: <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />,
    label: "Done",
    labelColor: "text-[#22C55E]",
    bg: "bg-[#F0FDF4]",
  },
  in_progress: {
    icon: <Circle className="h-4 w-4 text-[#3B82F6]" />,
    label: "In Progress",
    labelColor: "text-[#3B82F6]",
    bg: "bg-[#EFF6FF]",
  },
  overdue: {
    icon: <AlertCircle className="h-4 w-4 text-[#EF4444]" />,
    label: "Overdue",
    labelColor: "text-[#EF4444]",
    bg: "bg-[#FEF2F2]",
  },
  pending: {
    icon: <Circle className="h-4 w-4 text-[#9CA3AF]" />,
    label: "Pending",
    labelColor: "text-[#9CA3AF]",
    bg: "bg-[#F9FAFB]",
  },
};

export default function SceneActionItems() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10">
            <span className="text-sm font-bold text-[#3B82F6]">2</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Action Item Tracking
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Right: Text */}
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              Tasks that track themselves
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI automatically extracts action items from every meeting,
              assigns owners and due dates, and tracks completion in real time.
              Overdue tasks trigger automatic reminders — nothing falls through the cracks.
            </p>
          </div>

          {/* Left: Action Items Mockup */}
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
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
                <span className="text-[13px] font-semibold text-[#1A1A2E]">
                  Action Items
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#9CA3AF]">
                    5 items · 1 overdue
                  </span>
                  <span className="rounded-full bg-[#EF4444]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#EF4444]">
                    Needs Attention
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-col">
                {actionItems.map((item, i) => {
                  const cfg = statusConfig[item.status];
                  return (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-3 border-b border-[#F3F4F6] px-6 py-3.5 last:border-b-0"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.08 + i * 0.08,
                      }}
                    >
                      {cfg.icon}
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span
                          className={`text-[12px] font-medium ${
                            item.status === "done"
                              ? "text-[#9CA3AF] line-through"
                              : "text-[#1A1A2E]"
                          }`}
                        >
                          {item.text}
                        </span>
                        <span className="text-[10px] text-[#9CA3AF]">
                          {item.source}
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 shrink-0">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-[#9CA3AF]" />
                          <span className="text-[11px] text-[#6B7280]">
                            {item.owner}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#9CA3AF]">·</span>
                        <span
                          className={`text-[11px] ${
                            item.status === "overdue"
                              ? "text-[#EF4444] font-medium"
                              : "text-[#9CA3AF]"
                          }`}
                        >
                          {item.due}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold ${cfg.labelColor} ${cfg.bg}`}
                      >
                        {cfg.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <span className="text-[11px] text-[#9CA3AF]">
                  Auto-extracted from 3 meetings
                </span>
                <span className="text-[11px] font-medium text-[#3B82F6]">
                  Tracked by LUCI
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
