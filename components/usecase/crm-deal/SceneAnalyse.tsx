"use client";

import { motion } from "framer-motion";

/* ── Deal mock data ── */
const dealFields = [
  { label: "Deal Name", value: "ST Engineering — Video Intelligence Pilot" },
  { label: "Amount", value: "$240,000" },
  { label: "Stage", value: "Qualification" },
  { label: "Close Date", value: "Mar 30, 2026" },
  { label: "Owner", value: "Sarah Chen" },
];

const activities = [
  { text: "Deal created", date: "Jan 15", dot: "#3B82F6" },
  { text: "First meeting scheduled", date: "Jan 20", dot: "#8B5CF6" },
  { text: "Proposal sent", date: "Feb 5", dot: "#22C55E" },
];

export default function SceneAnalyse() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Step indicator */}
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
            Deal Analysis
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ─── Left: Text ─── */}
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              LUCI analyses the deal
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              Instantly pulling context from meetings, emails, and messages.
              LUCI scans every connected source to find relevant information
              about the deal.
            </p>
          </div>

          {/* ─── Right: HubSpot-style Deal Mockup ─── */}
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
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#FF6B35]" />
                  <span className="text-[15px] font-semibold text-[#1A1A2E]">
                    ST Engineering — Video Intelligence Pilot
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <span className="text-[11px] font-medium text-[#22C55E]">
                    LUCI analysing...
                  </span>
                </div>
              </div>

              {/* Pipeline stages */}
              <div className="flex border-b border-[#E5E7EB]">
                {["Qualification", "Discovery", "Proposal", "Negotiation", "Closed Won"].map(
                  (stage, i) => (
                    <div
                      key={stage}
                      className={`flex-1 py-2 text-center text-[10px] font-medium ${
                        i === 0
                          ? "bg-[#3B82F6] text-white"
                          : "bg-[#F9FAFB] text-[#9CA3AF]"
                      }`}
                    >
                      {stage}
                    </div>
                  )
                )}
              </div>

              <div className="flex">
                {/* Deal properties */}
                <div className="flex-1 px-6 py-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Deal Properties
                  </span>
                  <div className="mt-3 flex flex-col gap-3">
                    {dealFields.map((f) => (
                      <div key={f.label} className="flex items-baseline justify-between">
                        <span className="text-[12px] text-[#6B7280]">{f.label}</span>
                        <span className="text-[12px] font-medium text-[#1A1A2E]">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity sidebar */}
                <div className="hidden md:flex w-[200px] shrink-0 flex-col border-l border-[#E5E7EB] px-4 py-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Recent Activity
                  </span>
                  <div className="mt-3 flex flex-col gap-3">
                    {activities.map((a) => (
                      <div key={a.text} className="flex items-start gap-2">
                        <div
                          className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: a.dot }}
                        />
                        <div className="flex flex-col">
                          <span className="text-[11px] text-[#374151]">{a.text}</span>
                          <span className="text-[9px] text-[#9CA3AF]">{a.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scan overlay animation */}
              <motion.div
                className="relative h-1 w-full overflow-hidden bg-[#F3F4F6]"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 w-1/3"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #FF6B35, transparent)",
                  }}
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
