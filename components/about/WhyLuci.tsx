const painPoints = [
  {
    icon: "☁️",
    text: "Last week\u2019s meeting notes? Gone. Buried in some app I\u2019ve already forgotten about.",
  },
  {
    icon: "🤖",
    text: "AI is brilliant \u2014 yet every conversation starts at zero. Like a genius with amnesia.",
  },
  {
    icon: "🔒",
    text: "I\u2019d love AI to truly know me. But hand over all my data? No thanks.",
  },
];

export default function WhyLuci() {
  return (
    <section className="px-6 py-28 sm:py-36 bg-web-bg-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
            01 &mdash; Why LUCI
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight">
            The Problem Is Simple
          </h2>
        </div>

        {/* Two-column: copy left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — narrative (2/5) */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <p className="text-[1.05rem] text-text-1 leading-[1.9]">
              Every day you produce ideas, conversations, meetings, and
              notes&nbsp;&mdash; scattered across a dozen apps, eventually
              forgotten.
            </p>
            <p className="mt-5 text-[1.05rem] text-text-1 leading-[1.9]">
              Today&rsquo;s AI assistants are powerful, but they don&rsquo;t
              know{" "}
              <em className="text-text-0 not-italic font-medium">you</em>.
              Every chat resets to a blank slate.
            </p>
          </div>

          {/* Right — pain-point cards (3/5) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {painPoints.map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 rounded-2xl bg-grey-0/60 hover:bg-grey-0 border border-black/[0.06] px-7 py-6 transition-colors duration-300"
              >
                <span className="shrink-0 text-2xl pt-0.5">{item.icon}</span>
                <p className="text-[0.95rem] sm:text-base text-text-1 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
