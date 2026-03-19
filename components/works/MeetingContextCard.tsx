import { Check, Plus, Calendar, Flag, SmilePlus } from "lucide-react";

const features = [
  "Automatic sentiment analysis of past interactions",
  "Cross-referencing with project milestones",
];

const tasks = [
  { title: "Sales Review with Alex", subtitle: "Q3 Projections & Logistics" },
  { title: "Editorial Sync", subtitle: "Content Calendar Review" },
];

export default function MeetingContextCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      {/* ─── Left: Title + Desc ─── */}
      <div className="flex w-full flex-1 md:shrink-0 flex-col gap-4 pb-0 md:pb-6">
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-text-0">
          Context-Aware Meeting Prep
        </h3>
        <p className="text-[15px] leading-relaxed text-text-2">
          Your Second Brain understands the nuances of your professional
          landscape. It anticipates your needs by weaving together disparate
          threads of communication into a cohesive, ready-to-act briefing.
        </p>

        {/* Feature checklist */}
        <div className="flex flex-col gap-3 mt-2">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light-default">
                <Check
                  className="h-3.5 w-3.5 text-primary"
                  strokeWidth={2.5}
                />
              </span>
              <span className="text-[15px] text-text-1">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Right: Floating cards on landscape ─── */}
      <div className="relative flex-1 aspect-square overflow-hidden rounded-3xl">
        <img
          src="/landscape/lan2.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />

        <div className="relative z-10 w-full h-full p-5 md:p-8">
          {/* Card 1: Sentiment Analysis — top-left */}
          <div
            className="absolute left-5 top-[4%] md:left-8 md:top-[4%] w-[52%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <SmilePlus className="h-4 w-4 text-primary" strokeWidth={2} />
              <span className="text-[14px] font-bold text-neutral-800">
                Sentiment Analysis
              </span>
            </div>
            {/* Mini line chart */}
            <div className="relative mb-3">
              <svg
                viewBox="0 0 160 56"
                fill="none"
                className="w-full"
              >
                {/* Grid lines */}
                <line x1="0" y1="14" x2="160" y2="14" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="28" x2="160" y2="28" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="42" x2="160" y2="42" stroke="#f0f0f0" strokeWidth="1" />
                {/* Line */}
                <path
                  d="M8 38 L32 32 L56 28 L80 18 L104 14 L128 16 L152 8"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Dots */}
                <circle cx="8" cy="38" r="3" fill="var(--primary)" />
                <circle cx="32" cy="32" r="3" fill="var(--primary)" />
                <circle cx="56" cy="28" r="3" fill="var(--primary)" />
                <circle cx="80" cy="18" r="3.5" fill="var(--primary)" stroke="white" strokeWidth="2" />
                <circle cx="104" cy="14" r="3.5" fill="var(--primary)" stroke="white" strokeWidth="2" />
                <circle cx="128" cy="16" r="3" fill="var(--primary)" />
                <circle cx="152" cy="8" r="3" fill="var(--primary)" />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[11px] text-neutral-500">
                Last Week: <span className="font-semibold text-primary">Positive (85%)</span>
              </p>
              <p className="text-[11px] text-neutral-500">
                This Week: <span className="font-semibold text-primary">Trending Up (92%)</span>
              </p>
            </div>
          </div>

          {/* Card 2: Meeting Prep — top-right, overlapping */}
          <div
            className="absolute right-5 top-[34%] md:right-8 md:top-[34%] w-[52%] rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" strokeWidth={2} />
                <span className="text-[14px] font-bold text-neutral-800">
                  Meeting Prep
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">
                Today
              </span>
            </div>
            <div className="flex flex-col gap-2 px-5 pb-2">
              {tasks.map((task, i) => (
                <div key={i} className="rounded-xl bg-neutral-100 px-3.5 py-2.5">
                  <p className="text-[12px] font-semibold text-neutral-800">
                    {task.title}
                  </p>
                  <p className="text-[10px] text-neutral-400 mt-0.5">
                    {task.subtitle}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 px-5 pb-5 pt-1">
              <Plus className="h-3 w-3 text-primary" strokeWidth={2.5} />
              <span className="text-[12px] font-medium text-primary">
                Add New Task
              </span>
            </div>
          </div>

          {/* Card 3: Project Milestones — bottom-left */}
          <div
            className="absolute left-5 bottom-[4%] md:left-8 md:bottom-[4%] w-[52%] rounded-2xl bg-white px-5 py-5 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Flag className="h-4 w-4 text-primary" strokeWidth={2} />
              <span className="text-[14px] font-bold text-neutral-800">
                Project Milestones
              </span>
            </div>

            {/* Milestone 1 */}
            <div className="mb-3">
              <p className="text-[11px] font-semibold text-neutral-700 mb-1.5">
                Q3 Launch{" "}
                <span className="font-normal text-neutral-400">(On Track)</span>
              </p>
              <div className="h-3 w-full rounded-full bg-neutral-100">
                <div className="h-full w-[75%] rounded-full bg-primary" />
              </div>
            </div>

            {/* Milestone 2 */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-700 mb-1.5">
                Partnership Agreement{" "}
                <span className="font-normal text-neutral-400">
                  (Pending Review)
                </span>
              </p>
              <div className="h-3 w-full rounded-full bg-neutral-100">
                <div className="h-full w-[45%] rounded-full bg-primary/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
