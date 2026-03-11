"use client";

import { motion } from "framer-motion";
import {
  FolderOpen,
  FileText,
  Video,
  MessageSquare,
  Tag,
} from "lucide-react";

const categories = [
  {
    name: "Product",
    color: "#E8622C",
    bg: "#FFF7ED",
    items: [
      { type: "meeting", label: "Product Sync — Mar 20" },
      { type: "doc", label: "PRD v2.1 — Feature Spec" },
      { type: "slack", label: "#product — launch timeline discussion" },
    ],
  },
  {
    name: "Engineering",
    color: "#3B82F6",
    bg: "#EFF6FF",
    items: [
      { type: "meeting", label: "Architecture Review — Mar 18" },
      { type: "meeting", label: "Sprint Retro — Mar 22" },
      { type: "doc", label: "API Migration Guide" },
    ],
  },
  {
    name: "Sales",
    color: "#22C55E",
    bg: "#F0FDF4",
    items: [
      { type: "meeting", label: "Q1 Business Review — Jan 18" },
      { type: "doc", label: "Pricing Proposal v3" },
      { type: "slack", label: "#deals — Enterprise lead update" },
    ],
  },
];

const typeIcon = {
  meeting: <Video className="h-3 w-3" />,
  doc: <FileText className="h-3 w-3" />,
  slack: <MessageSquare className="h-3 w-3" />,
};

export default function SceneKnowledgeBase() {
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
            Auto Knowledge Base
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
              Knowledge that organizes itself
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI automatically categorizes information from meetings,
              documents, and messages into a searchable knowledge base.
              Topics are linked across sources — no manual filing needed.
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
                  <FolderOpen className="h-3.5 w-3.5 text-[#22C55E]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Knowledge Base
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  3 topics · 9 linked items
                </span>
              </div>

              <div className="flex flex-col divide-y divide-[#E5E7EB]">
                {categories.map((cat, ci) => (
                  <motion.div
                    key={cat.name}
                    className="px-6 py-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + ci * 0.12,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Tag
                        className="h-3.5 w-3.5"
                        style={{ color: cat.color }}
                      />
                      <span
                        className="text-[12px] font-semibold"
                        style={{ color: cat.color }}
                      >
                        {cat.name}
                      </span>
                      <span className="text-[10px] text-[#9CA3AF]">
                        {cat.items.length} items
                      </span>
                    </div>
                    <div className="flex flex-col gap-1.5 pl-5">
                      {cat.items.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2 text-[11px] text-[#374151]"
                        >
                          <div
                            className="flex h-5 w-5 shrink-0 items-center justify-center rounded"
                            style={{
                              backgroundColor: cat.bg,
                              color: cat.color,
                            }}
                          >
                            {typeIcon[item.type as keyof typeof typeIcon]}
                          </div>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <span className="text-[11px] text-[#9CA3AF]">
                  Auto-categorized from meetings, docs, and messages
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
