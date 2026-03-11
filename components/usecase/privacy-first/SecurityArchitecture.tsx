"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Lock,
  Database,
  Key,
  ArrowRight,
} from "lucide-react";

const layers = [
  {
    icon: <Key className="h-4 w-4" />,
    label: "End-to-End Encryption",
    detail: "TLS 1.3 in transit, AES-256 at rest",
    color: "#E8622C",
  },
  {
    icon: <Server className="h-4 w-4" />,
    label: "Isolated VM",
    detail: "Single-tenant, no shared infrastructure",
    color: "#3B82F6",
  },
  {
    icon: <Database className="h-4 w-4" />,
    label: "Local Processing",
    detail: "AI inference runs on your VM, no external calls",
    color: "#8B5CF6",
  },
  {
    icon: <Lock className="h-4 w-4" />,
    label: "Access Control",
    detail: "RBAC, SSO, MFA — enterprise-grade auth",
    color: "#22C55E",
  },
  {
    icon: <Shield className="h-4 w-4" />,
    label: "Zero Knowledge",
    detail: "We cannot access your data even if we wanted to",
    color: "#EF4444",
  },
];

export default function SecurityArchitecture() {
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B5CF6]/10">
            <span className="text-sm font-bold text-[#8B5CF6]">4</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Security Architecture
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
            Defense in depth
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            Multiple layers of security protect your data at every level.
            From encryption to access control, every component is designed
            with zero-trust principles.
          </p>
        </motion.div>

        {/* Layered architecture diagram */}
        <motion.div
          className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB] p-6 md:p-10"
          style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-3">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] px-5 py-4"
                style={{
                  marginLeft: `${i * 16}px`,
                  marginRight: `${i * 16}px`,
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: layer.color + "12",
                    color: layer.color,
                  }}
                >
                  {layer.icon}
                </div>
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-[14px] font-semibold text-[#1A1A2E]">
                    {layer.label}
                  </span>
                  <span className="text-[12px] text-[#9CA3AF]">
                    {layer.detail}
                  </span>
                </div>
                <div
                  className="hidden sm:flex h-6 items-center rounded-full px-2.5 text-[10px] font-semibold"
                  style={{
                    backgroundColor: layer.color + "12",
                    color: layer.color,
                  }}
                >
                  Layer {i + 1}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 rounded-lg border border-dashed border-[#E5E7EB] px-5 py-3">
              <Shield className="h-4 w-4 text-[#22C55E]" />
              <span className="text-[12px] font-medium text-[#374151]">
                Your data sits behind 5 layers of protection
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-[#9CA3AF]" />
              <span className="text-[12px] font-bold text-[#22C55E]">
                Zero external exposure
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
