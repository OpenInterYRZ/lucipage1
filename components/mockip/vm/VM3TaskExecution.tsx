"use client";

import { Pencil, FileText } from "lucide-react";

const font = "font-[family-name:var(--font-manrope)]";

export default function VM3TaskExecution() {
  return (
    <div className={`flex flex-col bg-white rounded-xl w-full ${font}`}>
      {/* Document content */}
      <div className="flex flex-col gap-6 p-8">
        {/* Title block */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-[#111]">Weekly Report</h1>
          <span className="text-[13px] text-[#999]">
            Week of March 3–7, 2026
          </span>
        </div>

        {/* Section 1 — Project Status */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-base font-semibold text-[#333]">
            Project Status
          </h2>
          <p className="text-sm leading-[1.6] text-[#666]">
            Mobile app redesign is on track. Design review completed with Lisa.
            Frontend implementation begins next week.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F0F0F0] w-full" />

        {/* Section 2 — Budget Summary (LUCI editing) */}
        <div className="flex flex-col gap-2 w-full rounded-lg bg-[#FFF8F0] border border-[#FFD19966] p-4">
          {/* Editing label */}
          <div className="flex items-center gap-1.5">
            <Pencil size={12} className="text-[#FF8C00]" />
            <span className="text-[11px] font-semibold text-[#FF8C00]">
              LUCI is updating this section
            </span>
          </div>
          <h2 className="text-base font-semibold text-[#333]">
            Budget Summary
          </h2>
          <p className="text-sm leading-[1.6] text-[#444]">
            Q3 budget confirmed at $2.4M (source: team standup, Mar 5). Approval
            pending — deadline Friday. Previous estimate was $2.1M.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#F0F0F0] w-full" />

        {/* Section 3 — Action Items */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-base font-semibold text-[#333]">Action Items</h2>
          <p className="text-sm leading-[1.6] text-[#666]">
            • Complete design handoff document
            <br />
            • Review Q3 budget proposal
            <br />• Schedule user testing for next sprint
          </p>
        </div>
      </div>

      {/* Doc toolbar */}
      <div className="flex items-center gap-4 h-10 px-6 border-t border-[#F0F0F0] bg-[#FAFAFA]">
        <FileText size={16} className="text-[#999]" />
        <span className="text-[13px] font-medium text-[#555]">
          Weekly Report — Mar 5.docx
        </span>
        <div className="flex items-center gap-1.5 bg-[#FFF0E0] rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00]" />
          <span className="text-[11px] font-semibold text-[#CC7000]">
            LUCI editing...
          </span>
        </div>
      </div>
    </div>
  );
}
