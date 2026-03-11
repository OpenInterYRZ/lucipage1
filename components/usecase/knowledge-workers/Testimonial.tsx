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
            &ldquo;I used to spend my mornings just catching up on what happened
            yesterday. Now LUCI gives me a 2-minute briefing and I start my day
            actually working, not reading.&rdquo;
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-[#E5E7EB] flex items-center justify-center">
              <span className="text-[16px] font-semibold text-[#9CA3AF]">
                MR
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[14px] font-semibold text-text-0">
                Michael Rodriguez
              </span>
              <span className="text-[13px] text-text-2">
                Senior Analyst, DataVenture
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
