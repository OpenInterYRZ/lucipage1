"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bot, FileText, Link2 } from "lucide-react";

const chatMessages = [
  {
    role: "user" as const,
    text: "What did the client say about pricing in the Q1 review?",
  },
  {
    role: "assistant" as const,
    text: "In the Q1 Business Review (Jan 18), the client mentioned they're open to a 15% price increase if we bundle the analytics module. They specifically said \"we'd rather pay more for an integrated solution than manage two vendors.\"",
    sources: [
      { label: "Q1 Business Review", type: "meeting" },
      { label: "Client Notes — Jan", type: "doc" },
    ],
  },
  {
    role: "user" as const,
    text: "Who else was in that meeting?",
  },
  {
    role: "assistant" as const,
    text: "Attendees: Sarah Chen (us), Mark Davis (us), Jennifer Wu (client, VP Product), and Tom Zhang (client, Engineering Lead).",
    sources: [{ label: "Meeting Transcript", type: "meeting" }],
  },
];

export default function SceneResearchAssistant() {
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
            Research Assistant
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
              Ask anything about your work
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              Natural language search across all your meetings, emails, and
              documents. LUCI finds the answer and shows you exactly where it
              came from — with source citations.
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
                  <Bot className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    LUCI Research
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">
                  Searching across 847 items
                </span>
              </div>

              <div className="flex flex-col px-6 py-4 gap-3">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.08 + i * 0.15,
                    }}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/10 mt-0.5">
                        <Bot className="h-3 w-3 text-[#3B82F6]" />
                      </div>
                    )}
                    <div
                      className={`flex flex-col gap-2 max-w-[85%] ${
                        msg.role === "user"
                          ? "rounded-2xl rounded-tr-md bg-[#F3F4F6] px-4 py-2.5"
                          : ""
                      }`}
                    >
                      {msg.role === "user" ? (
                        <span className="text-[12px] text-[#374151]">
                          {msg.text}
                        </span>
                      ) : (
                        <>
                          <span className="text-[12px] leading-relaxed text-[#374151]">
                            {msg.text}
                          </span>
                          {msg.sources && (
                            <div className="flex flex-wrap gap-1.5">
                              {msg.sources.map((src) => (
                                <span
                                  key={src.label}
                                  className="inline-flex items-center gap-1 rounded-md bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-medium text-[#3B82F6]"
                                >
                                  {src.type === "meeting" ? (
                                    <MessageCircle className="h-2.5 w-2.5" />
                                  ) : (
                                    <FileText className="h-2.5 w-2.5" />
                                  )}
                                  {src.label}
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {msg.role === "user" && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E5E7EB] mt-0.5">
                        <span className="text-[9px] font-semibold text-[#9CA3AF]">
                          You
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center border-t border-[#E5E7EB] px-6 py-3 bg-[#F9FAFB]">
                <div className="flex items-center gap-1.5 text-[11px] text-[#9CA3AF]">
                  <Link2 className="h-3 w-3" />
                  Sources verified and linked
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
