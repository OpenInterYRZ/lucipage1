"use client";

import { motion } from "framer-motion";
import {
  Video,
  Mail,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";

/* ── Context cards data ── */
const contextCards = [
  {
    icon: <Video className="h-3.5 w-3.5" />,
    label: "Meeting recording found",
    detail: "Product Demo — Feb 10",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    icon: <Mail className="h-3.5 w-3.5" />,
    label: "Negotiation email thread found",
    detail: "Pricing discussion — Feb 20",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: <MessageCircle className="h-3.5 w-3.5" />,
    label: "Pricing concern raised on WhatsApp",
    detail: "Budget constraints mentioned — Feb 22",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: <Calendar className="h-3.5 w-3.5" />,
    label: "Internal product sync scheduled",
    detail: "Pilot scope discussion — Feb 23",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: <ArrowRight className="h-3.5 w-3.5" />,
    label: "Next step identified",
    detail: "Send revised proposal — Feb 23",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
];

export default function SceneContext() {
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
            <span className="text-sm font-bold text-[#8B5CF6]">2</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Context Discovery
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ─── Right: Text ─── */}
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              Finds the missing pieces
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI connects meetings, emails, messages, and notes into one
              timeline. Every relevant interaction is found and linked to the
              deal automatically.
            </p>
          </div>

          {/* ─── Left: Context Cards Mockup ─── */}
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
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Context Found
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  5 sources linked
                </span>
              </div>

              {/* Context cards */}
              <div className="flex flex-col gap-2 p-5">
                {contextCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] px-4 py-3 transition-colors hover:bg-[#F9FAFB]"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.1,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: card.bg, color: card.color }}
                    >
                      {card.icon}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[12px] font-medium text-[#1A1A2E]">
                        {card.label}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {card.detail}
                      </span>
                    </div>

                    {/* Connector line */}
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="h-px w-6 bg-[#E5E7EB]" />
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: card.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Deal name link bar */}
              <div className="flex items-center gap-2 border-t border-[#E5E7EB] px-6 py-3">
                <span className="text-[11px] text-[#9CA3AF]">Linked to:</span>
                <span className="text-[11px] font-medium text-[#3B82F6]">
                  ST Engineering — Video Intelligence Pilot
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
