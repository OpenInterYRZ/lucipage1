"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote className="h-8 w-8 text-primary/20 mb-6" />

          <blockquote className="max-w-[680px] text-[20px] md:text-[24px] font-medium leading-relaxed text-text-0">
            &ldquo;Our legal team approved LUCI in one day. The private VM
            deployment and SOC 2 certification meant we didn&apos;t have to
            go through months of security review. It just works — and our
            data stays ours.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
              <span className="text-[16px] font-semibold text-[#9CA3AF]">
                DL
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[14px] font-semibold text-text-0">
                David Lee
              </span>
              <span className="text-[13px] text-text-2">
                CISO, FinanceSecure Inc.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
