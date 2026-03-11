"use client";

import { motion } from "framer-motion";
import { Mic, User, CheckCircle2 } from "lucide-react";

const transcript = [
  {
    speaker: "Sarah Chen",
    time: "02:15",
    text: "We need to finish the V2 prototype by end of month",
    highlight: false,
  },
  {
    speaker: "James Liu",
    time: "03:42",
    text: "Backend API is ready, frontend needs 3 more days",
    highlight: false,
  },
  {
    speaker: "Sarah Chen",
    time: "05:10",
    text: "Let's set the deadline to March 28. James owns frontend, Lisa owns testing",
    highlight: true,
  },
  {
    speaker: "Lisa Wang",
    time: "06:30",
    text: "Sounds good, I'll prepare the test cases ahead of time",
    highlight: false,
  },
];

const extractedActions = [
  { text: "Complete V2 prototype frontend", owner: "James", due: "Mar 28" },
  { text: "Prepare test cases", owner: "Lisa", due: "Mar 26" },
  { text: "Schedule client demo", owner: "Sarah", due: "Mar 30" },
];

export default function SceneMeetingMemory() {
  return (
    <section className="w-full bg-web-bg-0">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Step indicator */}
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
            Meeting Memory
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left: Text */}
          <div className="flex w-full md:w-[380px] md:shrink-0 flex-col justify-end gap-4 pb-0 md:pb-6">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-text-0">
              Every meeting, fully remembered
            </h2>
            <p className="text-[15px] leading-relaxed text-text-2">
              LUCI automatically joins your meetings, transcribes conversations
              in real-time, identifies speakers, and extracts key decisions and
              action items. No more note-taking during meetings.
            </p>
          </div>

          {/* Right: Meeting Transcript Mockup */}
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
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E5E7EB] px-6 py-4">
                <div className="flex items-center gap-2">
                  <Mic className="h-3.5 w-3.5 text-[#EF4444]" />
                  <span className="text-[13px] font-semibold text-[#1A1A2E]">
                    Weekly Standup — Mar 24
                  </span>
                </div>
                <span className="text-[11px] text-[#9CA3AF]">12:34 min</span>
              </div>

              {/* Transcript */}
              <div className="flex flex-col px-6 py-4 gap-1">
                {transcript.map((line, i) => (
                  <motion.div
                    key={`${line.speaker}-${line.time}`}
                    className={`flex items-start gap-3 rounded-lg px-3 py-2.5 ${
                      line.highlight ? "bg-[#FFF7ED] border border-[#E8622C]/20" : ""
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.08 + i * 0.1,
                    }}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
                      <User className="h-3 w-3 text-[#9CA3AF]" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#1A1A2E]">
                          {line.speaker}
                        </span>
                        <span className="text-[10px] text-[#9CA3AF]">
                          {line.time}
                        </span>
                      </div>
                      <span className="text-[12px] text-[#374151]">
                        {line.text}
                      </span>
                    </div>
                    {line.highlight && (
                      <span className="ml-auto shrink-0 rounded bg-[#E8622C]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#E8622C]">
                        Key Decision
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Extracted Actions */}
              <motion.div
                className="border-t border-[#E5E7EB] px-6 py-4"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Extracted Action Items
                </span>
                <div className="mt-2.5 flex flex-col gap-2">
                  {extractedActions.map((a) => (
                    <div
                      key={a.text}
                      className="flex items-center gap-2 text-[12px]"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
                      <span className="font-medium text-[#1A1A2E]">
                        {a.text}
                      </span>
                      <span className="ml-auto text-[#9CA3AF]">
                        {a.owner} · {a.due}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
