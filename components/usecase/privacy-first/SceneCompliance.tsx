"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const certifications = [
  {
    name: "SOC 2 Type II",
    status: "Certified",
    color: "#22C55E",
    description: "Annual audit completed",
  },
  {
    name: "GDPR",
    status: "Compliant",
    color: "#3B82F6",
    description: "EU data protection standards",
  },
  {
    name: "HIPAA",
    status: "Ready",
    color: "#8B5CF6",
    description: "Healthcare data eligible",
  },
  {
    name: "ISO 27001",
    status: "Certified",
    color: "#E8622C",
    description: "Information security management",
  },
];

const auditLog = [
  { time: "14:32", action: "Data access by LUCI engine", user: "System", type: "read" },
  { time: "14:28", action: "Meeting transcript processed", user: "System", type: "process" },
  { time: "14:15", action: "Admin exported audit log", user: "admin@company.com", type: "export" },
  { time: "13:50", action: "User deleted meeting record", user: "sarah@company.com", type: "delete" },
];

export default function SceneCompliance() {
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
            Compliance & Audit
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
            Built for regulated industries
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-text-2 max-w-[560px]">
            Full compliance certifications, detailed audit logs, and
            transparent data processing. Everything your security team
            needs to say yes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB]"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 border-b border-[#E5E7EB] px-6 py-4">
              <Shield className="h-3.5 w-3.5 text-[#22C55E]" />
              <span className="text-[13px] font-semibold text-[#1A1A2E]">
                Certifications
              </span>
            </div>
            <div className="flex flex-col divide-y divide-[#E5E7EB]">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="flex items-center gap-3 px-6 py-3.5"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0"
                    style={{ color: cert.color }}
                  />
                  <div className="flex flex-col gap-0.5 flex-1">
                    <span className="text-[13px] font-medium text-[#1A1A2E]">
                      {cert.name}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF]">
                      {cert.description}
                    </span>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                    style={{
                      backgroundColor: cert.color + "12",
                      color: cert.color,
                    }}
                  >
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Audit Log */}
          <motion.div
            className="overflow-hidden rounded-xl bg-white border border-[#E5E7EB]"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
              <div className="flex items-center gap-2">
                <FileCheck className="h-3.5 w-3.5 text-[#3B82F6]" />
                <span className="text-[13px] font-semibold text-[#1A1A2E]">
                  Audit Log
                </span>
              </div>
              <span className="text-[11px] text-[#9CA3AF]">Live</span>
            </div>
            <div className="flex flex-col divide-y divide-[#E5E7EB]">
              {auditLog.map((log, i) => (
                <motion.div
                  key={`${log.time}-${log.action}`}
                  className="flex items-start gap-3 px-6 py-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
                >
                  <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                    <Clock className="h-3 w-3 text-[#9CA3AF]" />
                    <span className="text-[10px] tabular-nums text-[#9CA3AF]">
                      {log.time}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] text-[#374151]">
                      {log.action}
                    </span>
                    <span className="text-[10px] text-[#9CA3AF]">
                      {log.user}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-end border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
              <div className="flex items-center gap-1.5">
                <ArrowRight className="h-3.5 w-3.5 text-[#3B82F6]" />
                <span className="text-[11px] font-medium text-[#3B82F6]">
                  View full audit log
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
