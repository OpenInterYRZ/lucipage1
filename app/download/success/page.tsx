"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";

function BrowserMockup() {
  const [progress, setProgress] = useState(0);
  const showComplete = progress >= 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate towards the end
        const step = p < 60 ? 4 : p < 90 ? 2 : 1;
        return Math.min(p + step, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[400px]">
      {/* Browser window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl border border-grey-1 bg-bg-0 shadow-lg overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-grey-1 bg-grey-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-grey-1 rounded-md px-4 py-1 text-[11px] text-text-2 font-medium">
              download
            </div>
          </div>
        </div>

        {/* Download bar */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-3 rounded-lg border border-grey-1 bg-grey-0 px-3 py-2.5">
            {/* DMG icon */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-white text-[10px] font-bold">.dmg</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-text-0 truncate">
                LUCI.dmg
              </p>
              {/* Progress bar */}
              <div className="mt-1.5 h-1 rounded-full bg-grey-1 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: showComplete
                      ? "#28c840"
                      : "linear-gradient(90deg, #FF8C00, #FFa030)",
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p
                className={`mt-1 text-[11px] font-medium transition-colors duration-300 ${showComplete ? "text-[#28c840]" : "text-text-2"}`}
              >
                {showComplete ? "Download complete" : `${progress}%`}
              </p>
            </div>
            {showComplete && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <CheckCircle2 size={18} className="text-[#28c840] shrink-0" />
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Installer window — offset below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showComplete ? 1 : 0, y: showComplete ? 0 : 20 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-3 ml-8 rounded-xl border border-grey-1 bg-bg-0 shadow-lg overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-grey-1 bg-grey-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <p className="flex-1 text-center text-[11px] text-text-2 font-medium">
            LUCI Installer
          </p>
        </div>

        {/* Installer content */}
        <div className="flex items-center justify-center gap-6 px-8 py-8">
          {/* App icon */}
          <div className="w-14 h-14 rounded-2xl bg-grey-1 flex items-center justify-center shadow-sm">
            <Image
              src="/lucilogo-black.svg"
              alt="LUCI"
              width={32}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={32}
              height={32}
              className="hidden dark:block"
            />
          </div>

          {/* Arrow */}
          <svg
            className="w-5 h-5 text-text-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>

          {/* Applications folder */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-14 h-14 rounded-2xl bg-[#1a9fff]/10 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-[#1a9fff]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
              </svg>
            </div>
            <span className="text-[11px] text-text-2 font-medium">
              Applications
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function DownloadSuccessPage() {
  const handleRetry = () => {
    const a = document.createElement("a");
    a.href = "/LUCI.dmg";
    a.download = "LUCI.dmg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-web-bg-0 flex">
      {/* Left column — instructions */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20">
        <div className="max-w-[460px]">
          {/* Logo */}
          <Link href="/" className="inline-block mb-14">
            <Image
              src="/lucilogo-black.svg"
              alt="LUCI"
              width={80}
              height={30}
              className="dark:hidden"
            />
            <Image
              src="/lucilogo.svg"
              alt="LUCI"
              width={80}
              height={30}
              className="hidden dark:block"
            />
          </Link>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-text-0 tracking-tight"
          >
            Install LUCI
            <br />
            <span className="text-text-2">in 3 steps</span>
          </motion.h1>

          {/* Steps */}
          <div className="mt-10 flex flex-col gap-0">
            {[
              { num: "1", text: "Open your Downloads folder" },
              { num: "2", text: "Double-click LUCI.dmg" },
              { num: "3", text: "Drag LUCI into Applications" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
              >
                <Step num={step.num} text={step.text} />
              </motion.div>
            ))}
          </div>

          {/* Retry + Platform */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-10 pt-6 border-t border-grey-1 flex items-center justify-between flex-wrap gap-3"
          >
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-1.5 text-[13px] text-text-2 font-medium hover:text-text-0 transition-colors cursor-pointer"
            >
              <RotateCcw size={13} />
              Download didn&apos;t start? Try again
            </button>
            <p className="text-[13px] text-text-2">
              <span className="text-text-0 font-medium">Mac Silicon</span> only
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right column — visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-grey-0 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #FF8C00 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-2"
          >
            <p className="text-[13px] text-text-2 mb-1.5 uppercase tracking-wider font-medium">
              Complete setup to claim
            </p>
            <p className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-text-0">
              3 days of free trial
            </p>
          </motion.div>

          <BrowserMockup />
        </div>
      </div>
    </div>
  );
}

function Step({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-grey-1 last:border-b-0">
      <span className="w-8 h-8 rounded-full bg-orange-400/10 flex items-center justify-center text-[13px] font-semibold text-orange-500 shrink-0">
        {num}
      </span>
      <p className="text-[clamp(0.938rem,2vw,1.125rem)] font-medium text-text-0 leading-snug">
        {text}
      </p>
    </div>
  );
}
