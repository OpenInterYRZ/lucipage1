import { Play, TrendingUp } from "lucide-react";

export default function VideoMemoryCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* ─── Left: Visual with floating cards ─── */}
      <div className="relative flex-1 aspect-square overflow-hidden rounded-3xl flex items-center justify-center">
        <img
          src="/pb.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />

        {/* Two-column card layout */}
        <div className="relative z-10 flex gap-3 w-full h-full p-5 md:p-8 items-center justify-center">
          {/* Left column — main video + transcription */}
          <div className="flex flex-1 flex-col gap-3">
            {/* Video card */}
            <div className="rounded-2xl bg-white  overflow-hidden">
              <div className="relative">
                <img
                  src="/hero/lib1.webp"
                  alt="Video thumbnail"
                  className="w-full aspect-video object-cover"
                />
                {/* Live Analysis badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-red-500 px-2.5 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  <span className="text-[9px] font-bold tracking-wider text-white uppercase">
                    Live Analysis
                  </span>
                </div>
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                    <Play className="h-4 w-4 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Transcribing + quote */}
            <div className="rounded-2xl bg-white px-5 py-4 ">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                </span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-700 uppercase">
                  Transcribing...
                </span>
              </div>
              <p className="text-[13px] leading-relaxed text-neutral-800 font-medium mb-3">
                &ldquo;We need to focus on the curation aspect of the
                editorial...&rdquo;
              </p>
              <p className="text-[13px] font-semibold text-neutral-800 mb-2 italic">
                Key Themes Identified
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-primary-light-default border border-primary/30 px-3 py-1 text-[9px] font-bold text-primary tracking-wide uppercase">
                  Scalability
                </span>
                <span className="rounded-full bg-primary-light-default border border-primary/30 px-3 py-1 text-[9px] font-bold text-primary tracking-wide uppercase">
                  UX Flow
                </span>
                <span className="rounded-full bg-primary-light-default border border-primary/30 px-3 py-1 text-[9px] font-bold text-primary tracking-wide uppercase">
                  AI Integration
                </span>
              </div>
            </div>
          </div>

          {/* Right column — Knowledge Index + AI Insights */}
          <div className="flex w-[38%] flex-col gap-3">
            {/* Knowledge Index */}
            <div className="rounded-2xl bg-white px-5 py-5 ">
              <p className="text-[15px] font-bold text-neutral-800 mb-3">
                Knowledge Index
              </p>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] text-neutral-500">
                  Video Processing:
                </span>
                <span className="text-[11px] font-semibold text-neutral-800">
                  85%
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 w-full rounded-full bg-neutral-100 mb-3">
                <div className="h-full w-[85%] rounded-full bg-primary" />
              </div>
              <p className="text-[11px] text-neutral-500">
                3 New Insights Found
              </p>
            </div>

            {/* AI Insights */}
            <div className="rounded-2xl bg-white px-5 py-5">
              <p className="text-[15px] font-bold text-neutral-800 mb-4">
                AI Insights
              </p>
              {/* Mini chart */}
              <div className="relative h-16 mb-3">
                <svg
                  viewBox="0 0 120 48"
                  fill="none"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 44 L15 40 L30 36 L45 32 L55 28 L65 20 L75 22 L85 14 L95 10 L105 6 L120 2"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M0 44 L15 40 L30 36 L45 32 L55 28 L65 20 L75 22 L85 14 L95 10 L105 6 L120 2 L120 48 L0 48 Z"
                    fill="url(#chartGrad)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="48">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-neutral-500">
                  Growth Trend
                </span>
                <span className="rounded-full bg-primary-light-default px-2.5 py-0.5 text-[11px] font-bold text-primary">
                  +24%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right: Title + Desc ─── */}
      <div className="flex w-full flex-1 md:shrink-0 flex-col gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-text-0">
          Video Understanding Memory
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Stop scrubbing through hours of footage. Our AI watches, listens, and
          indexes your visual meetings, transforming video data into searchable,
          actionable knowledge bites.
        </p>

        {/* Feature bullets */}
        <div className="grid grid-cols-2 gap-6 mt-2">
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1">
              Instant Summaries
            </h4>
            <p className="text-[12px] leading-relaxed text-text-2">
              Get the gist of any 60‑minute video in under 60 seconds.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1">
              Visual Search
            </h4>
            <p className="text-[12px] leading-relaxed text-text-2">
              Search for moments where specific slides or people appeared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
