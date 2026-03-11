"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Trash2,
  Download,
  Eye,
  ToggleRight,
} from "lucide-react";

const controls = [
  {
    icon: <Eye className="h-4 w-4" />,
    label: "Data Visibility",
    description: "Choose exactly what LUCI can access",
    status: "Configured",
    color: "#3B82F6",
  },
  {
    icon: <Download className="h-4 w-4" />,
    label: "Data Export",
    description: "Export all your data anytime, any format",
    status: "Available",
    color: "#22C55E",
  },
  {
    icon: <Trash2 className="h-4 w-4" />,
    label: "Data Deletion",
    description: "Permanent deletion with verification",
    status: "On Request",
    color: "#EF4444",
  },
  {
    icon: <ToggleRight className="h-4 w-4" />,
    label: "AI Training",
    description: "Your data is NEVER used for model training",
    status: "Disabled",
    color: "#8B5CF6",
  },
];

export default function SceneDataControl() {
  return (
    <section className="w-full bg-grey-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10">
            <span className="text-sm font-bold text-[#3B82F6]">2</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Data Control
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              Complete control over your data
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              You decide what LUCI can see, how long data is retained, and
              when it&apos;s deleted. Export everything at any time. Your data
              is never used for training — guaranteed.
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
                  <Settings className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Data Controls
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  Admin Panel
                </span>
              </div>

              <div className="flex flex-col divide-y divide-[#E5E7EB]">
                {controls.map((ctrl, i) => (
                  <motion.div
                    key={ctrl.label}
                    className="flex items-center gap-4 px-6 py-4"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.1,
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: ctrl.color + "12",
                        color: ctrl.color,
                      }}
                    >
                      {ctrl.icon}
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1">
                      <span className="text-[13px] font-medium text-[#1A1A2E]">
                        {ctrl.label}
                      </span>
                      <span className="text-[11px] text-[#9CA3AF]">
                        {ctrl.description}
                      </span>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                      style={{
                        backgroundColor: ctrl.color + "12",
                        color: ctrl.color,
                      }}
                    >
                      {ctrl.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
