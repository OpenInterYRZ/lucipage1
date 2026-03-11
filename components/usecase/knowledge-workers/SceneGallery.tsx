"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  Lightbulb,
  Clock,
} from "lucide-react";

const scenes = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Weekly Report Generator",
    description:
      "Auto-compiles weekly progress reports from meetings, tasks, and team updates",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Competitive Intelligence",
    description:
      "Tracks competitor mentions across all conversations and documents in one feed",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Client Profile Builder",
    description:
      "Aggregates all interactions, preferences, and history for each client automatically",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Project Briefing",
    description:
      "Get up to speed on any project in 30 seconds — all decisions, status, and open items",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Idea Capture",
    description:
      "Ideas mentioned in meetings are tagged and collected — never lost in transcripts again",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Knowledge Handoff",
    description:
      "When team members change roles, LUCI creates a complete context package for the successor",
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
            More Scenarios
          </span>
          <h2 className="mt-3 text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
            What else LUCI can do for you
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
