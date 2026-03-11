"use client";

import { motion } from "framer-motion";
import {
  Video,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  Check,
  ArrowRight,
} from "lucide-react";

/* ── Full timeline data ── */
const timelineItems = [
  {
    date: "Jan 15",
    action: "Deal created",
    detail: "ST Engineering — Video Intelligence Pilot",
    icon: <FileText className="h-3.5 w-3.5" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    date: "Jan 20",
    action: "First meeting scheduled",
    detail: "Introductory call with engineering team",
    icon: <Calendar className="h-3.5 w-3.5" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    date: "Feb 5",
    action: "Proposal sent",
    detail: "Initial pricing for 3-month pilot program",
    icon: <Mail className="h-3.5 w-3.5" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    date: "Feb 10",
    action: "Product demo meeting",
    detail: "Live demo of video intelligence pipeline",
    icon: <Video className="h-3.5 w-3.5" />,
    color: "#E8622C",
    bg: "#FFF7ED",
  },
  {
    date: "Feb 20",
    action: "Negotiation email thread",
    detail: "Pricing discussion and scope adjustment",
    icon: <Mail className="h-3.5 w-3.5" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    date: "Feb 22",
    action: "WhatsApp: Pricing concern",
    detail: "Budget constraints raised by procurement",
    icon: <MessageCircle className="h-3.5 w-3.5" />,
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    date: "Feb 23",
    action: "Internal sync: Pilot scope confirmed",
    detail: "Product team aligned on deliverables",
    icon: <Calendar className="h-3.5 w-3.5" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    date: "Feb 23",
    action: "Stage → Negotiation",
    detail: "Pipeline auto-updated by LUCI",
    icon: <ArrowRight className="h-3.5 w-3.5" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    date: "Feb 23",
    action: "Next step: Send revised proposal",
    detail: "Deal summary generated",
    icon: <Check className="h-3.5 w-3.5" />,
    color: "#22C55E",
    bg: "#F0FDF4",
  },
];

export default function SceneTimeline() {
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
            <span className="text-sm font-bold text-[#3B82F6]">4</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Complete History
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
            A complete deal history
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            Every interaction is captured by LUCI. Every next step is clear.
            The full timeline of the deal — from first touch to close.
          </p>
        </motion.div>

        {/* Full-width timeline mockup */}
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
              <div className="h-3 w-3 rounded-full bg-[#FF6B35]" />
              <span className="text-[14px] font-semibold text-[#1A1A2E]">
                ST Engineering — Video Intelligence Pilot
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-[11px] text-[#9CA3AF]">
                9 interactions captured
              </span>
              <span className="rounded-full bg-[#F59E0B]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#F59E0B]">
                Negotiation
              </span>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative px-6 md:px-8 py-6">
            {/* Vertical line */}
            <div className="absolute left-[39px] md:left-[51px] top-6 bottom-6 w-px bg-[#E5E7EB]" />

            <div className="flex flex-col gap-1">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={`${item.date}-${item.action}`}
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
                    {item.date}
                  </span>

                  {/* Icon dot */}
                  <div
                    className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: item.bg, color: item.color }}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-0.5 pt-0.5">
                    <span className="text-[13px] font-medium text-[#1A1A2E]">
                      {item.action}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF]">
                      {item.detail}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 md:px-8 py-3 bg-[#F9FAFB]">
            <span className="text-[11px] text-[#9CA3AF]">
              Powered by LUCI — fully automated
            </span>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-[#22C55E]" />
              <span className="text-[11px] font-medium text-[#22C55E]">
                All data synced
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
