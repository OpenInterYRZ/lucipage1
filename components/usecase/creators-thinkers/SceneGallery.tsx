"use client";

import { motion } from "framer-motion";
import {
  Mic,
  BookOpen,
  Presentation,
  Newspaper,
  Bookmark,
  Share2,
} from "lucide-react";

const scenes = [
  {
    icon: <Mic className="h-5 w-5" />,
    title: "Voice-to-Insight",
    description:
      "Speak your ideas and LUCI transcribes, tags, and links them to your knowledge base",
    color: "#E8622C",
    bg: "#FFF7ED",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Reading Digest",
    description:
      "Save articles and documents — LUCI extracts key takeaways and links to related work",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    icon: <Presentation className="h-5 w-5" />,
    title: "Presentation Builder",
    description:
      "Turn your knowledge graph into slide decks with auto-generated talking points",
    color: "#8B5CF6",
    bg: "#F3F0FF",
  },
  {
    icon: <Newspaper className="h-5 w-5" />,
    title: "Newsletter Generator",
    description:
      "Curate content from your ideas and research into weekly newsletters automatically",
    color: "#22C55E",
    bg: "#F0FDF4",
  },
  {
    icon: <Bookmark className="h-5 w-5" />,
    title: "Reference Manager",
    description:
      "Every source, quote, and data point tracked with full provenance and context",
    color: "#F59E0B",
    bg: "#FFFBEB",
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: "Thought Sharing",
    description:
      "Export any branch of your knowledge graph as a shareable brief for collaborators",
    color: "#EF4444",
    bg: "#FEF2F2",
  },
];

export default function SceneGallery() {
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
