"use client";

import { useState } from "react";

const milestones = [
  {
    id: "without",
    label: "Without LUCI",
    cx: 240,
    cy: 280,
    labelX: -30,
    labelY: -44,
    cards: [
      {
        title: "Research Time",
        value: 6,
        suffix: "+ hrs/week",
        desc: "Knowledge workers manually re-watch lectures, webinars, and interviews to find key insights. Important details are buried in hours of content.",
      },
      {
        title: "Information Recall",
        value: 10,
        prefix: "~",
        suffix: "%",
        desc: "Crucial details from videos, tutorials, and talks are forgotten within days. Notes are incomplete and scattered across tools.",
      },
    ],
  },
  {
    id: "with",
    label: "Using LUCI",
    cx: 560,
    cy: 100,
    labelX: -24,
    labelY: -48,
    cards: [
      {
        title: "Research Time",
        value: 90,
        prefix: "-",
        suffix: "%",
        desc: "AI-powered search finds any moment instantly. Ask a question and get answers from across all your videos, lectures, and recordings.",
      },
      {
        title: "Information Recall",
        value: 5,
        prefix: "+",
        suffix: "x",
        desc: "Every video, webinar, and tutorial is automatically summarized, indexed, and linked. Your personal knowledge base grows with every piece of content.",
      },
    ],
  },
];

function NumberDisplay({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <span>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default function BeforeAfter() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = milestones[activeIdx];

  // Curve passes through both milestone points: (240,280) and (560,100)
  const curvePath =
    "M 40 330 C 120 320, 180 300, 240 280 S 380 195, 440 150 C 490 125, 530 108, 560 100 C 620 78, 690 40, 760 -10";
  const fillPath =
    "M 40 330 C 120 320, 180 300, 240 280 S 380 195, 440 150 C 490 125, 530 108, 560 100 C 620 78, 690 40, 760 -10 L 760 400 L 40 400 Z";

  return (
    <section className="w-full">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[13px] font-medium tracking-wide text-text-2 uppercase">
            The Difference
          </span>
          <h2 className="mt-3 text-[28px] md:text-[40px] font-semibold leading-tight text-text-0">
            Everything changes with LUCI
          </h2>
        </div>

        {/* Curve card */}
        <div
          className="relative rounded-t-3xl bg-white border border-[#E5E7EB] border-b-0 overflow-hidden"
          style={{ aspectRatio: "2.4 / 1" }}
        >
          <div className="absolute top-8 left-8 md:top-12 md:left-12 z-10">
            <h3 className="text-[22px] md:text-[32px] font-semibold leading-[1.2] text-[#1A1A2E] max-w-[340px]">
              Supercharge Your
              <br />
              Research Workflow
            </h3>
          </div>

          <svg
            viewBox="0 0 760 400"
            fill="none"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="0" x2="0.3" y2="1">
                <stop offset="0%" stopColor="#ff5c00" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#ff5c00" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <path
              d={fillPath}
              fill="url(#curveGrad)"
            />

            <path
              d={curvePath}
              stroke="#ff5c00"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />

            {milestones.map((m, i) => (
              <g
                key={m.id}
                className="cursor-pointer"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => setActiveIdx(i)}
              >
                <circle cx={m.cx} cy={m.cy} r="28" fill="transparent" />

                {activeIdx === i && (
                  <circle
                    cx={m.cx}
                    cy={m.cy}
                    r="22"
                    fill="none"
                    stroke="#ff5c00"
                    strokeWidth="2"
                  />
                )}

                <circle
                  cx={m.cx}
                  cy={m.cy}
                  r="14"
                  fill="white"
                  stroke={activeIdx === i ? "#ff5c00" : "#1A1A2E"}
                  strokeWidth="3"
                  className="transition-colors duration-200"
                />
                <circle
                  cx={m.cx}
                  cy={m.cy}
                  r="5"
                  fill={activeIdx === i ? "#ff5c00" : "#1A1A2E"}
                  className="transition-colors duration-200"
                />

                <rect
                  x={m.cx + m.labelX}
                  y={m.cy + m.labelY}
                  width={m.label.length * 8.5 + 28}
                  height="32"
                  rx="16"
                  fill={activeIdx === i ? "#ff5c00" : "#F1F3F5"}
                  className="transition-colors duration-200"
                />
                <text
                  x={m.cx + m.labelX + (m.label.length * 8.5 + 28) / 2}
                  y={m.cy + m.labelY + 21}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="inherit"
                  fill={activeIdx === i ? "white" : "#6B7280"}
                  className="transition-colors duration-200 pointer-events-none"
                >
                  {m.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Bottom info panel */}
        <div className="rounded-b-3xl bg-[#ECEDEF] border border-t-0 border-[#E5E7EB] p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            {milestones.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActiveIdx(i)}
                className={`text-[14px] md:text-[15px] font-medium transition-colors duration-200 ${
                  activeIdx === i
                    ? "text-primary"
                    : "text-text-2 hover:text-text-0"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((cardIdx) => (
              <div
                key={cardIdx}
                className="rounded-2xl bg-[#E0E1E4] p-6 md:p-8"
              >
                <span className="text-[13px] font-medium text-text-2">
                  {active.cards[cardIdx].title}
                </span>
                <div className="mt-2 text-[24px] md:text-[28px] font-bold text-text-0 leading-tight">
                  <NumberDisplay
                    value={active.cards[cardIdx].value}
                    prefix={active.cards[cardIdx].prefix}
                    suffix={active.cards[cardIdx].suffix}
                  />
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-text-2">
                  {active.cards[cardIdx].desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
