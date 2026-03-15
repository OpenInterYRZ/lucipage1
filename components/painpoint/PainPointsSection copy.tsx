"use client";
import React from "react";
import { LuciCenter } from "./LuciCenter";
import { NotionNotesCard } from "../cards/NotionNotesCard";
import { ZoomMeetingCard } from "../cards/ZoomMeetingCard";
import { ZoomRecordingCard } from "../cards/ZoomRecordingCard";
import { GmailInboxCard } from "../cards/GmailInboxCard";

/* ─── Static display ─────────────────────────────────── */

function PainPointsSectionStatic() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        background: "#0a0a0f",
        aspectRatio: "4 / 3",
      }}
    >
      {/* ── LUCI logo centered ── */}
      <div className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <LuciCenter size={100} glowIntensity="high" />
      </div>

      {/* ── 2×2 grid of cards ── */}
      <div className="absolute inset-0 z-10 grid grid-cols-2 grid-rows-2 gap-4 p-6">
        <div className="flex items-start justify-start">
          <NotionNotesCard />
        </div>
        <div className="flex items-start justify-end">
          <GmailInboxCard />
        </div>
        <div className="flex items-end justify-start">
          <ZoomRecordingCard />
        </div>
        <div className="flex items-end justify-end">
          <ZoomMeetingCard />
        </div>
      </div>
    </div>
  );
}

/* ─── Text constants ─────────────────────────────────── */
const LINE1 = "Every tool promises to save you time.";
const LINE2 = "None of them talk to each other.";
const SUBTITLE =
  "Your tools are siloed. LUCI connects them so nothing falls through the cracks.";

/* ─── Wrapper: left static + right text ──────────────── */
export default function PainPointsWithText() {
  return (
    <section
      data-navbar-dark
      className="relative w-full py-16 md:py-24 px-6"
      style={{ background: "#0a0a0f" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: static display */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <PainPointsSectionStatic />
        </div>

        {/* Right: text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <h2
            className="text-[28px] md:text-[36px] lg:text-[42px] font-extrabold leading-[1.2] tracking-tight"
            style={{ fontFamily: "var(--font-manrope, Manrope), sans-serif" }}
          >
            <span className="inline decoration-clone bg-[#fffbeb] text-[#0a0a0f] px-2 py-0.5 box-decoration-clone leading-[1.6]">
              {LINE1}
            </span>
            <br />
            <span className="inline decoration-clone bg-[#fffbeb] text-[#0a0a0f] px-2 py-0.5 box-decoration-clone leading-[1.6]">
              {LINE2}
            </span>
          </h2>

          <p
            className="text-white text-xl md:text-2xl lg:text-[28px] leading-[1.4] font-medium max-w-lg"
            style={{ fontFamily: "var(--font-manrope, Manrope), sans-serif" }}
          >
            {SUBTITLE}
          </p>
        </div>
      </div>
    </section>
  );
}
