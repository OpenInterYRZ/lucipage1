"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const freePlanFeatures = [
  "3-day virtual machine trial",
  "5 agent runs per day",
  "Context-aware meeting reminders",
  "Meeting video recording",
  "3 coaching tips per meeting",
  "1 meeting transcription per day",
  "5 voice-triggered tasks per day",
  "Basic agent skills",
];

const proPlanFeatures = [
  "Always-on virtual machine",
  "Unlimited agent runs",
  "Priority meeting reminders with calendar sync",
  "Real-time coaching with action items",
  "Unlimited meeting transcriptions",
  "Unlimited voice-triggered tasks",
  "Advanced agent skills & custom workflows",
];

const humanRecruiterDrawbacks = [
  "High Monthly Salary",
  "Healthcare & Benefits",
  "Hiring & Onboarding Time",
  "Human Speed Constraints",
];

const efficiencyMetrics = [
  {
    metric: "Cost per Month",
    free: "$0",
    pro: "$100",
    human: "$5,000+",
  },
  {
    metric: "Meetings Managed",
    free: "5/day",
    pro: "Unlimited (24/7)",
    human: "~8/day",
  },
  {
    metric: "Response Time",
    free: "Instant",
    pro: "Instant",
    human: "Business Hours",
  },
  {
    metric: "Coaching Insights",
    free: "3/meeting",
    pro: "Real-time, unlimited",
    human: "Manual review",
  },
  {
    metric: "Transcriptions",
    free: "1/day",
    pro: "Unlimited",
    human: "Extra cost",
  },
];

const extraUsageOptions = [
  { label: "$10", sublabel: "+ 2x more usage than Free" },
  { label: "$20", sublabel: "+ 5x more usage than Free" },
  { label: "$50", sublabel: "+ 15x more usage than Free" },
];

function BillingToggle({
  isYearly,
  onToggle,
}: {
  isYearly: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-grey-1 bg-grey-1 p-1">
      <button
        onClick={() => !isYearly || onToggle()}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
          !isYearly
            ? "bg-bg-0 text-text-0 shadow-sm"
            : "bg-transparent text-grey-3 hover:text-grey-5"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => isYearly || onToggle()}
        className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
          isYearly
            ? "bg-bg-0 text-text-0 shadow-sm"
            : "bg-transparent text-grey-3 hover:text-grey-5"
        }`}
      >
        Yearly
        <span className="rounded-full bg-[#FF6B4A] px-2.5 py-0.5 text-xs font-semibold text-white">
          Save 20%
        </span>
      </button>
    </div>
  );
}

function ExtraUsageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, close]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-lg border border-grey-1 bg-bg-0 px-4 py-3 text-left transition-colors hover:border-grey-2"
      >
        <span className="text-2xl font-bold text-text-0">
          {extraUsageOptions[selected].label}
        </span>
        <svg
          className={`h-4 w-4 text-grey-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <p className="mt-1.5 text-sm text-grey-3">
        {extraUsageOptions[selected].sublabel}
      </p>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-grey-1 bg-bg-0 shadow-lg">
          {extraUsageOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(i);
                setIsOpen(false);
              }}
              className={`flex w-full flex-col px-4 py-3 text-left transition-colors hover:bg-grey-0 ${
                i === selected ? "bg-primary/5" : ""
              }`}
            >
              <span className="text-lg font-bold text-text-0">{opt.label}</span>
              <span className="text-xs text-grey-3">{opt.sublabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-web-bg-0 py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-[1100px]">
        {/* Header — left-aligned for asymmetry */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.15] text-text-0">
              Simple pricing,
              <br />
              powerful tools
            </h2>
            <p className="mt-4 text-base text-text-2 max-w-md">
              Start free. Upgrade when you need more memory, more agents, and
              unlimited access.
            </p>
          </div>
          <BillingToggle
            isYearly={isYearly}
            onToggle={() => setIsYearly(!isYearly)}
          />
        </div>

        {/* Plans — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto items-start">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="flex flex-col rounded-2xl border border-grey-1 bg-bg-0 p-8 md:mt-6"
          >
            <h3 className="text-lg font-semibold text-text-0">Free</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-0">$0</span>
              <span className="text-sm text-grey-3">/month</span>
            </div>

            <button className="mt-6 w-full rounded-full border border-grey-2 bg-bg-0 py-3 text-sm font-semibold text-text-1 transition-colors hover:border-grey-3 hover:text-text-0">
              Get Started Free
            </button>

            <div className="mt-6 pt-6 border-t border-grey-1">
              <p className="text-sm font-medium text-grey-4">
                What&apos;s included:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-grey-3"
                    />
                    <span className="text-sm text-grey-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Pro Plan — visually dominant */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="relative flex flex-col rounded-2xl border-2 border-[#FF6B4A] bg-primary-light-default p-8 shadow-[0_8px_40px_rgba(255,159,28,0.18)] md:scale-[1.03] md:origin-top"
          >
            <div className="absolute -top-3.5 left-8 rounded-full bg-[#FF6B4A] px-4 py-1 text-xs font-semibold text-white shadow-sm">
              Most popular
            </div>
            <h3 className="text-lg font-semibold text-text-0">Pro</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={`pro-${isYearly}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.25 }}
                  className="text-4xl font-bold text-text-0"
                >
                  ${isYearly ? 80 : 100}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-grey-3">/month</span>
            </div>

            <button className="mt-6 w-full rounded-full bg-[#FF6B4A] py-3.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(255,107,74,0.3)] transition-all hover:bg-[#ff5a36] hover:shadow-[0_4px_20px_rgba(255,107,74,0.4)] hover:scale-[1.02] active:scale-[0.98]">
              Upgrade to Pro
            </button>

            <div className="mt-6 pt-6 border-t border-primary/15">
              <p className="text-sm font-medium text-grey-4">
                Everything in Free and:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {proPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-sm text-grey-5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Human Recruiter — "The Old Way" */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
            className="relative flex flex-col rounded-2xl border border-dashed border-grey-2 bg-[#f5f3f0] p-8 md:mt-6"
          >
            <div className="absolute -top-3.5 left-8 rounded-full bg-grey-3 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
              The Old Way
            </div>
            <h3 className="mt-2 text-lg font-semibold text-grey-4">
              Human Recruiter
            </h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-grey-3">$5,000+</span>
              <span className="text-sm text-grey-3">/mo</span>
            </div>
            <div className="mt-8">
              <div className="w-full rounded-full border border-grey-2 py-3 text-center text-xs font-semibold uppercase tracking-wider text-grey-3">
                Inefficient &amp; Expensive
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-grey-2">
              <ul className="flex flex-col gap-4">
                {humanRecruiterDrawbacks.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-grey-2 text-[10px] font-bold text-grey-4">
                      !
                    </span>
                    <span className="text-sm text-grey-4">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Extra Usage — separate add-on section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.25, 0.1, 0, 1],
          }}
          className="mx-auto mt-6 max-w-[1100px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-2xl border border-grey-1 bg-bg-0 p-8"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-text-0">
              Need more usage?
            </h3>
            <p className="mt-1 text-sm text-grey-4">
              Add extra capacity on top of any plan. Free users must subscribe
              after the 3-day VM trial expires.
            </p>
          </div>
          <div className="w-full md:w-[220px] shrink-0">
            <ExtraUsageDropdown />
            <button className="mt-3 w-full rounded-full border border-[#FF6B4A] bg-bg-0 py-2.5 text-sm font-semibold text-[#FF6B4A] transition-colors hover:bg-[#FF6B4A]/5">
              Add Usage
            </button>
          </div>
        </motion.div>
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
          className="mx-auto mt-16 max-w-[1100px] rounded-3xl bg-[#FF6B4A]/10 p-10 md:p-14"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-text-0">
                Why spend $60k/year
                <br />
                on a human assistant?
              </h3>
              <p className="mt-4 text-base leading-relaxed text-text-2">
                Humans are great for building relationships, but for the heavy
                lifting of scheduling, meeting prep, and follow-ups, Luci does
                the work of a full-time assistant for 1% of the cost.{" "}
                <strong className="text-text-0">
                  Make the smart financial choice today.
                </strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button className="rounded-full bg-[#FF6B4A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_2px_12px_rgba(255,107,74,0.3)] transition-all hover:bg-[#ff5a36] hover:shadow-[0_4px_20px_rgba(255,107,74,0.4)] hover:scale-[1.02] active:scale-[0.98]">
                Start Saving Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Efficiency Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0, 1] }}
          className="mx-auto mt-20 max-w-[1100px]"
        >
          <h3 className="text-center text-3xl md:text-4xl font-semibold text-text-0 mb-10">
            Efficiency Breakdown
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-[#FF6B4A]/15">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-[#FF6B4A]/8 text-xs font-semibold uppercase tracking-wider">
              <div className="px-6 py-4 text-grey-4">Metric</div>
              <div className="px-6 py-4 text-center text-grey-4">Free</div>
              <div className="px-6 py-4 text-center text-[#FF6B4A]">
                Pro + AI
              </div>
              <div className="px-6 py-4 text-center text-grey-3">
                Human Assistant
              </div>
            </div>
            {/* Table Rows */}
            {efficiencyMetrics.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-4 border-t border-[#FF6B4A]/10 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#FF6B4A]/[0.03]"
                }`}
              >
                <div className="px-6 py-4 text-sm font-medium text-text-0">
                  {row.metric}
                </div>
                <div className="px-6 py-4 text-center text-sm text-grey-4">
                  {row.free}
                </div>
                <div className="px-6 py-4 text-center text-sm font-semibold text-[#FF6B4A]">
                  {row.pro}
                </div>
                <div className="px-6 py-4 text-center text-sm text-grey-3">
                  {row.human}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
