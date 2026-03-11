"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Video,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const mentions = [
  {
    date: "Jan 18",
    title: "Q1 Business Review",
    topic: "Client open to 15% price increase with analytics bundle",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
    linked: true,
  },
  {
    date: "Feb 5",
    title: "Pricing Strategy Doc",
    topic: "Competitive analysis shows 10-20% gap in market pricing",
    icon: <FileText className="h-3.5 w-3.5" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
    linked: false,
  },
  {
    date: "Feb 22",
    title: "#product — pricing thread",
    topic: "PM suggested tiered pricing model for enterprise",
    icon: <MessageSquare className="h-3.5 w-3.5" />,
    color: "#22C55E",
    bg: "#F0FDF4",
    linked: true,
  },
  {
    date: "Mar 10",
    title: "Product Sync",
    topic: "Final pricing: 3-tier model with analytics bundled in Pro",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
    linked: true,
  },
  {
    date: "Mar 20",
    title: "Board Deck Draft",
    topic: "New pricing projected to increase ARPU by 22%",
    icon: <FileText className="h-3.5 w-3.5" />,
    color: "#E8622C",
    bg: "#FFF7ED",
    linked: true,
  },
];

const threadSummary = {
  topic: "Pricing Strategy",
  firstMentioned: "Jan 18",
  sourceCount: 5,
  status: "Decided",
  conclusion:
    "3-tier pricing model adopted. Analytics bundled into Pro tier. Expected ARPU increase of 22%.",
  openItems: [
    "Update sales deck with new tiers",
    "Notify existing enterprise clients",
  ],
};

export default function SceneInsightConnections() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
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
            Insight Connections
          </span>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            Connect insights across everything
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            The same topic scattered across meetings, docs, and chats? LUCI
            automatically threads them together and tracks the full evolution
            of every decision.
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB]"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 md:px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-[#8B5CF6]" />
              <span className="text-[14px] font-semibold text-[#1A1A2E]">
                Topic Thread: Pricing Strategy
              </span>
            </div>
            <span className="text-[11px] text-[#9CA3AF]">
              Across {threadSummary.sourceCount} sources · since{" "}
              {threadSummary.firstMentioned}
            </span>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="flex-1 relative px-6 md:px-8 py-6">
              <div className="absolute left-[39px] md:left-[51px] top-6 bottom-6 w-px bg-[#E5E7EB]" />

              <div className="flex flex-col gap-1">
                {mentions.map((m, i) => (
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
                    <span className="w-10 shrink-0 pt-1 text-right text-[11px] tabular-nums text-[#9CA3AF]">
                      {m.date}
                    </span>
                    <div
                      className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: m.bg, color: m.color }}
                    >
                      {m.icon}
                    </div>
                    <div className="flex flex-col gap-0.5 pt-0.5 flex-1">
                      <span className="text-[13px] font-medium text-[#1A1A2E]">
                        {m.title}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {m.topic}
                      </span>
                    </div>
                    {m.linked && (
                      <div className="shrink-0 flex items-center gap-1">
                        <div className="h-px w-4 bg-[#8B5CF6]/30" />
                        <div className="h-2 w-2 rounded-full bg-[#8B5CF6]" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

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
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                  <span className="text-[12px] font-medium text-[#22C55E]">
                    {threadSummary.status}
                  </span>
                </div>

                <div className="rounded-lg bg-white border border-[#E5E7EB] px-4 py-3">
                  <span className="text-[10px] font-semibold text-[#9CA3AF] uppercase tracking-wider">
                    Conclusion
                  </span>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-[#374151]">
                    {threadSummary.conclusion}
                  </p>
                </div>

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

          <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 md:px-8 py-3 bg-[#F9FAFB]">
            <span className="text-[11px] text-[#9CA3AF]">
              LUCI automatically links insights across all sources
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
