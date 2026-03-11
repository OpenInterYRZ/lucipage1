"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, FileText } from "lucide-react";

/* ── Activity log entries ── */
const activityLog = [
  {
    action: "Meeting logged",
    detail: "Feb 10 Product Demo",
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: "#22C55E",
  },
  {
    action: "Email thread linked",
    detail: "Negotiation discussion",
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: "#3B82F6",
  },
  {
    action: "WhatsApp message logged",
    detail: "Pricing concern raised",
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: "#22C55E",
  },
  {
    action: "Contact activity updated",
    detail: "Last touch — Feb 22",
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: "#8B5CF6",
  },
  {
    action: "Internal product sync logged",
    detail: "Pilot scope confirmed",
    icon: <Check className="h-3 w-3 text-white" />,
    iconBg: "#22C55E",
  },
];

export default function SceneUpdate() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10">
            <span className="text-sm font-bold text-[#22C55E]">3</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            CRM Auto-Update
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
              Your CRM updates itself
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI logs activity, updates the pipeline, and prepares the next
              step automatically. No manual data entry, no missed updates.
            </p>
          </div>

          {/* ─── Right: CRM Update Mockup ─── */}
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
                  Activity Feed
                </span>
                <span className="rounded-full bg-[#22C55E]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#22C55E]">
                  Auto-updated by LUCI
                </span>
              </div>

              {/* Activity log */}
              <div className="flex flex-col px-6 py-4">
                {activityLog.map((item, i) => (
                  <motion.div
                    key={item.action}
                    className="flex items-start gap-3 py-3"
                    style={{
                      borderBottom:
                        i < activityLog.length - 1
                          ? "1px solid #F3F4F6"
                          : "none",
                    }}
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
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: item.iconBg }}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-medium text-[#1A1A2E]">
                        {item.action}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {item.detail}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pipeline change */}
              <motion.div
                className="mx-6 mb-4 flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="rounded bg-[#3B82F6]/10 px-2 py-0.5 font-medium text-[#3B82F6]">
                    Qualification
                  </span>
                  <ArrowRight className="h-3 w-3 text-[#9CA3AF]" />
                  <span className="rounded bg-[#F59E0B]/10 px-2 py-0.5 font-medium text-[#F59E0B]">
                    Negotiation
                  </span>
                </div>
                <span className="ml-auto text-[10px] text-[#9CA3AF]">
                  Stage updated
                </span>
              </motion.div>

              {/* Next step + Summary */}
              <div className="border-t border-[#E5E7EB] px-6 py-4">
                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                >
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-3.5 w-3.5 text-[#E8622C]" />
                    <span className="text-[12px] font-medium text-[#1A1A2E]">
                      Next step:
                    </span>
                    <span className="text-[12px] text-[#374151]">
                      Send revised proposal
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-[#8B5CF6]" />
                    <span className="text-[12px] font-medium text-[#1A1A2E]">
                      Deal Summary
                    </span>
                    <span className="rounded-full bg-[#8B5CF6]/10 px-2 py-0.5 text-[9px] font-semibold text-[#8B5CF6]">
                      Generated
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
