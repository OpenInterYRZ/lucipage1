"use client";

import { motion } from "framer-motion";
import { Brain, ArrowRight } from "lucide-react";

const nodes = [
  { id: "center", label: "Onboarding UX", x: 50, y: 50, size: "lg", color: "#E8622C" },
  { id: "n1", label: "Gamification idea", x: 20, y: 25, size: "sm", color: "#F59E0B" },
  { id: "n2", label: "User templates", x: 80, y: 20, size: "sm", color: "#8B5CF6" },
  { id: "n3", label: "Competitor analysis", x: 15, y: 70, size: "sm", color: "#3B82F6" },
  { id: "n4", label: "Community feedback", x: 82, y: 75, size: "sm", color: "#22C55E" },
  { id: "n5", label: "Sprint retro notes", x: 50, y: 85, size: "sm", color: "#EF4444" },
];

const connections = [
  { from: "center", to: "n1" },
  { from: "center", to: "n2" },
  { from: "center", to: "n3" },
  { from: "center", to: "n4" },
  { from: "center", to: "n5" },
  { from: "n1", to: "n4" },
  { from: "n2", to: "n5" },
];

export default function SceneSecondBrain() {
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
            <span className="text-sm font-bold text-[#8B5CF6]">2</span>
          </div>
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            Second Brain
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
              A knowledge graph that thinks with you
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI connects your ideas, notes, and references into a visual
              knowledge graph. See how concepts relate to each other — and
              discover connections you didn&apos;t know existed.
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
                  <Brain className="h-3.5 w-3.5 text-[#8B5CF6]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Knowledge Graph
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  6 nodes · 7 connections
                </span>
              </div>

              {/* Graph visualization mockup */}
              <div className="relative h-[280px] px-6 py-4">
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  {connections.map((conn) => {
                    const from = nodes.find((n) => n.id === conn.from)!;
                    const to = nodes.find((n) => n.id === conn.to)!;
                    return (
                      <motion.line
                        key={`${conn.from}-${conn.to}`}
                        x1={`${from.x}%`}
                        y1={`${from.y}%`}
                        x2={`${to.x}%`}
                        y2={`${to.y}%`}
                        stroke="#E5E7EB"
                        strokeWidth={1.5}
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    );
                  })}
                </svg>

                {/* Nodes */}
                {nodes.map((node, i) => (
                  <motion.div
                    key={node.id}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1 + i * 0.08,
                    }}
                  >
                    <div
                      className={`flex items-center gap-1.5 rounded-full border-2 border-white px-3 py-1.5 ${
                        node.size === "lg" ? "px-4 py-2" : ""
                      }`}
                      style={{
                        backgroundColor: node.color + "15",
                        boxShadow: `0 2px 8px ${node.color}20`,
                      }}
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <span
                        className={`whitespace-nowrap font-medium ${
                          node.size === "lg" ? "text-[12px]" : "text-[10px]"
                        }`}
                        style={{ color: node.color }}
                      >
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <span className="text-[11px] text-[#9CA3AF]">
                  Auto-linked from meetings, notes, and documents
                </span>
                <div className="flex items-center gap-1.5">
                  <ArrowRight className="h-3.5 w-3.5 text-[#8B5CF6]" />
                  <span className="text-[11px] font-medium text-[#8B5CF6]">
                    Explore graph
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
