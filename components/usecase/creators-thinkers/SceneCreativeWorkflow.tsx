"use client";

import { motion } from "framer-motion";
import { Wand2, ArrowRight, FileText, Sparkles, PenLine } from "lucide-react";

const steps = [
  {
    step: "1",
    label: "Raw Ideas",
    description: "Scattered notes, voice memos, meeting snippets",
    icon: <PenLine className="h-4 w-4" />,
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    step: "2",
    label: "LUCI Organizes",
    description: "Auto-tagged, linked, and categorized",
    icon: <Sparkles className="h-4 w-4" />,
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    step: "3",
    label: "Draft Generated",
    description: "Blog post, presentation, or report outline",
    icon: <FileText className="h-4 w-4" />,
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    step: "4",
    label: "Ready to Publish",
    description: "Polished output with all sources cited",
    icon: <Wand2 className="h-4 w-4" />,
    color: "#22C55E",
    bg: "#F0FDF4",
  },
];

export default function SceneCreativeWorkflow() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10">
            <span className="text-sm font-bold text-[#22C55E]">3</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Creative Workflow
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
            From raw idea to polished output
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            LUCI transforms scattered thoughts into structured drafts. Your
            ideas flow from capture to publication with minimal manual work.
          </p>
        </motion.div>

        {/* Horizontal workflow */}
        <motion.div
          className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB] p-6 md:p-10"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                className="relative flex flex-col items-center text-center gap-3 rounded-xl border border-[#E5E7EB] p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: s.bg, color: s.color }}
                >
                  {s.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                    Step {s.step}
                  </span>
                  <span
                    className="text-[14px] font-semibold"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </span>
                  <span className="text-[12px] text-[#9CA3AF]">
                    {s.description}
                  </span>
                </div>

                {/* Arrow connector (hidden on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-[#D1D5DB]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Example output */}
          <motion.div
            className="mt-8 flex items-center gap-4 rounded-lg border border-dashed border-[#E5E7EB] px-6 py-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Sparkles className="h-5 w-5 text-[#8B5CF6] shrink-0" />
            <div className="flex flex-col gap-0.5">
              <span className="text-[12px] font-semibold text-[#1A1A2E]">
                Example: Blog post draft generated from 3 meeting ideas + 2 research notes
              </span>
              <span className="text-[11px] text-[#9CA3AF]">
                1,200 words · 5 sources cited · ready for review in 45 seconds
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
