"use client";

import { motion } from "framer-motion";
import { Layers, Search, SplitSquareVertical } from "lucide-react";

const painPoints = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Information overload",
    description:
      "50+ emails, 6 meetings, 12 Slack threads a day. Critical insights get buried in the noise and you waste hours just catching up.",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Endless re-searching",
    description:
      "You know you read it somewhere — was it an email, a doc, or a meeting? You spend 30 minutes searching for something you already found last week.",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
  {
    icon: <SplitSquareVertical className="h-5 w-5" />,
    title: "Knowledge silos",
    description:
      "Insights from meetings never reach the docs. Email decisions don't sync with project tools. Context lives in 5 different places.",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
];

export default function PainPoints() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Before LUCI
          </span>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            Knowledge workers lose hours every day
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.12,
              }}
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                {item.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-text-0">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
