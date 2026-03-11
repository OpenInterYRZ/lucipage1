"use client";

import { motion } from "framer-motion";
import {
  HardDrive,
  KeyRound,
  Globe,
  UserCheck,
  FileSearch,
  Workflow,
} from "lucide-react";

const scenes = [
  {
    icon: <HardDrive className="h-5 w-5" />,
    title: "On-Premise Deployment",
    description:
      "Deploy LUCI on your own hardware — air-gapped environments supported",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Bring Your Own Keys",
    description:
      "Use your own encryption keys — we never store or access them",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Data Residency",
    description:
      "Choose your deployment region — comply with local data sovereignty laws",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    icon: <UserCheck className="h-5 w-5" />,
    title: "SSO & RBAC",
    description:
      "Integrate with your identity provider and control access at granular level",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: <FileSearch className="h-5 w-5" />,
    title: "DPA & BAA Ready",
    description:
      "Data processing agreements and business associate agreements available",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Custom Retention",
    description:
      "Set data retention policies per category — auto-delete when rules expire",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
];

export default function SceneGallery() {
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
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            More Capabilities
          </span>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            Enterprise security, built in
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenes.map((scene, i) => (
            <motion.div
              key={scene.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
            >
              <div
                className="h-[140px] w-full"
                style={{ backgroundColor: scene.bg }}
              >
                <div className="flex h-full items-center justify-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80"
                    style={{ color: scene.color }}
                  >
                    <div className="scale-150">{scene.icon}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ backgroundColor: scene.bg, color: scene.color }}
                  >
                    {scene.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-text-0">
                    {scene.title}
                  </h3>
                </div>
                <p className="text-[13px] leading-relaxed text-text-2">
                  {scene.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
