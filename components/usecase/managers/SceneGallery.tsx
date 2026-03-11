"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileText,
  BarChart3,
  CalendarClock,
  Search,
  Bell,
} from "lucide-react";

const scenes = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "1:1 Prep",
    description: "Auto-compiles last 1:1 notes, pending follow-ups, and the person's recent activity",
    color: "#E8622C",
    bg: "#FFF7ED",
    placeholder: "/api/placeholder/400/200",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Auto Weekly Report",
    description: "Generates team weekly reports and progress summaries from meeting data and tasks",
    color: "#3B82F6",
    bg: "#EFF6FF",
    placeholder: "/api/placeholder/400/200",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Meeting Health Analytics",
    description: "Which meetings are productive, which should be canceled, and action item completion rates",
    color: "#8B5CF6",
    bg: "#F3F0FF",
    placeholder: "/api/placeholder/400/200",
  },
  {
    icon: <CalendarClock className="h-5 w-5" />,
    title: "Pre-Meeting Briefing",
    description: "15 minutes before each meeting, get relevant context: what was discussed last time, what's still open",
    color: "#22C55E",
    bg: "#F0FDF4",
    placeholder: "/api/placeholder/400/200",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Meeting Search",
    description: "\"Who mentioned the budget last time?\" — natural language search across all meeting records",
    color: "#F59E0B",
    bg: "#FFFBEB",
    placeholder: "/api/placeholder/400/200",
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Overdue Alerts",
    description: "When action items pass their due date, automatically notify the owner and their manager",
    color: "#EF4444",
    bg: "#FEF2F2",
    placeholder: "/api/placeholder/400/200",
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
              {/* Placeholder image */}
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

              {/* Content */}
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
