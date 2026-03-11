"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5h+",
    label: "Saved weekly",
    detail: "No more manual notes or weekly reports",
    color: "#E8622C",
  },
  {
    number: "0",
    label: "Missed action items",
    detail: "Every task auto-tracked to completion",
    color: "#22C55E",
  },
  {
    number: "30s",
    label: "Meeting notes generated",
    detail: "Follow-up emails sent instantly after meetings",
    color: "#3B82F6",
  },
  {
    number: "100%",
    label: "Context coverage",
    detail: "Cross-meeting topics linked automatically",
    color: "#8B5CF6",
  },
];

export default function DataHighlights() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
            >
              <span
                className="text-[40px] md:text-[52px] font-bold leading-none"
                style={{ color: stat.color }}
              >
                {stat.number}
              </span>
              <span className="text-[15px] font-semibold text-text-0">
                {stat.label}
              </span>
              <span className="text-[13px] text-text-2">{stat.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
