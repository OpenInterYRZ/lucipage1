"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is my data secure?",
    a: "Cloud version: encrypted storage, isolated VMs, full data separation.\nLocal version: all data stays on your disk — nothing is ever uploaded.",
  },
  {
    q: "Is it hard to get started?",
    a: "Not at all. Install the app, sign in, and LUCI starts working immediately. No configuration needed — it learns your workflow as you go.",
  },
  {
    q: "What platforms are supported?",
    a: "LUCI runs on macOS, Windows, and Linux. Mobile apps for iOS and Android are on the roadmap. You can also access LUCI via Telegram and WhatsApp.",
  },
  {
    q: "Will my data be used to train models?",
    a: "Never. Your data is yours alone. We do not use any user data for model training, and our open-source codebase lets you verify this yourself.",
  },
  {
    q: "How long of a video can it handle?",
    a: "LUCI can process videos up to 4 hours long. It chunks and indexes the content so you can search, summarize, and extract action items from any segment.",
  },
  {
    q: "How do I cancel my subscription?",
    a: 'Head to Settings → Subscription and click "Cancel Plan." No need to contact support. Your account downgrades to Free at the end of the billing cycle and all data is preserved.',
  },
  {
    q: "Is there technical support?",
    a: "Yes. Free users get community support via Discord. Pro and Enterprise plans include priority email support with guaranteed response times.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#FAFAF8" }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-6 py-16 md:flex-row md:gap-[100px] md:px-[100px] md:py-24">
        {/* Left — Title Column */}
        <div className="flex shrink-0 flex-col gap-4 md:w-[400px]">
          <h2
            className="text-[36px] font-medium leading-[1.15] tracking-tight md:text-[52px]"
            style={{ color: "#1A1A1A", fontFamily: "var(--font-sans)" }}
          >
            Frequently
            <br />
            Asked
            <br />
            Questions.
          </h2>
          <p
            className="max-w-[360px] text-[15px] leading-relaxed md:text-base"
            style={{ color: "#8C8780" }}
          >
            Everything you need to know about Luci
          </p>
        </div>

        {/* Right — Accordion */}
        <div className="min-w-0 flex-1">
          {/* Top divider */}
          <div className="h-px w-full" style={{ backgroundColor: "#E5E2DD" }} />

          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className="text-base font-medium leading-snug transition-colors duration-200"
                    style={{ color: "#1A1A1A" }}
                  >
                    {faq.q}
                  </span>
                  <span className="flex size-5 shrink-0 items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      {isOpen ? (
                        <Minus size={20} style={{ color: "#E8600A" }} />
                      ) : (
                        <Plus size={20} style={{ color: "#E8600A" }} />
                      )}
                    </motion.div>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.2, delay: 0.05 },
                      }}
                      className="overflow-hidden"
                    >
                      <p
                        className="whitespace-pre-line pb-4 text-sm leading-[1.6]"
                        style={{ color: "#6B6560" }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ backgroundColor: "#E5E2DD" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
