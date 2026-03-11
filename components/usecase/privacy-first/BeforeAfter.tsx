"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const beforeItems = [
  "Sensitive data sent to third-party AI servers",
  "No visibility into how your data is processed or stored",
  "Weeks of security reviews before legal approves any AI tool",
  "Data potentially used to train someone else's model",
  "One breach affects all customers on shared infrastructure",
];

const afterItems = [
  "All data stays on your dedicated private VM",
  "Full audit logs for every data access and operation",
  "Pre-certified for SOC 2, GDPR, HIPAA — approved on day one",
  "Zero training on your data — contractually guaranteed",
  "Single-tenant isolation — your instance is yours alone",
];

export default function BeforeAfter() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            Everything changes with LUCI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF2F2]">
                <X className="h-4 w-4 text-[#EF4444]" />
              </div>
              <span className="text-[15px] font-semibold text-[#EF4444]">
                Other AI Tools
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                >
                  <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EF4444]" />
                  <span className="text-[14px] leading-relaxed text-[#6B7280]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-[#22C55E]/20 bg-[#F0FDF4] p-6 md:p-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10">
                <Check className="h-4 w-4 text-[#22C55E]" />
              </div>
              <span className="text-[15px] font-semibold text-[#22C55E]">
                LUCI Privacy-First
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {afterItems.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                  <span className="text-[14px] leading-relaxed text-[#374151]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] px-5 py-2">
            <span className="text-[13px] text-[#9CA3AF]">
              Security review approval time
            </span>
            <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF]" />
            <span className="text-[13px] font-bold text-[#22C55E]">
              Day one ready
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
