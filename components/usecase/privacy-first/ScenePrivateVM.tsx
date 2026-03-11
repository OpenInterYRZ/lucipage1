"use client";

import { motion } from "framer-motion";
import {
  Server,
  Shield,
  Lock,
  CheckCircle2,
} from "lucide-react";

const features = [
  { label: "Dedicated VM instance", status: "active" },
  { label: "Data encrypted at rest (AES-256)", status: "active" },
  { label: "Data encrypted in transit (TLS 1.3)", status: "active" },
  { label: "No data shared with third parties", status: "active" },
  { label: "Region-specific deployment", status: "active" },
];

export default function ScenePrivateVM() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <span className="text-sm font-bold text-primary">1</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Private VM
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
              Your own isolated environment
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI runs entirely on a dedicated virtual machine in your
              preferred region. Your data never leaves your infrastructure —
              no shared servers, no multi-tenancy risks.
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
                  <Server className="h-3.5 w-3.5 text-[#E8622C]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    VM Status — Your Instance
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#22C55E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                  Running
                </span>
              </div>

              <div className="px-6 py-5">
                {/* VM Details */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <motion.div
                    className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Region
                    </span>
                    <p className="mt-1 text-[13px] font-medium text-[#1A1A2E]">
                      EU West (Frankfurt)
                    </p>
                  </motion.div>
                  <motion.div
                    className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                      Uptime
                    </span>
                    <p className="mt-1 text-[13px] font-medium text-[#1A1A2E]">
                      99.97% (30d)
                    </p>
                  </motion.div>
                </div>

                {/* Security checklist */}
                <div className="flex flex-col gap-2.5">
                  {features.map((f, i) => (
                    <motion.div
                      key={f.label}
                      className="flex items-center gap-2.5"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + i * 0.08,
                      }}
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0" />
                      <span className="text-[12px] text-[#374151]">
                        {f.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <Lock className="h-3 w-3 text-[#9CA3AF]" />
                <span className="text-[11px] text-[#9CA3AF]">
                  Zero data transmitted to external servers
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
