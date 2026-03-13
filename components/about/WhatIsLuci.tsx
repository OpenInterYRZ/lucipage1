const traits = [
  {
    label: "Remembers",
    desc: "Every conversation, preference, and context \u2014 carried forward, never lost.",
  },
  {
    label: "Private",
    desc: "Your own dedicated instance. Your data stays yours, period.",
  },
  {
    label: "Evolves",
    desc: "Gets sharper with every interaction. The more you use it, the more it gets you.",
  },
];

export default function WhatIsLuci() {
  return (
    <section className="px-6 py-28 sm:py-36 bg-web-bg-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-text-2 mb-5">
          02 &mdash; What Is LUCI
        </span>

        {/* Hero statement */}
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tight">
            Your AI that actually{" "}
            <span className="text-primary">knows you</span>
          </h2>

          <p className="mt-8 text-[1.05rem] text-text-1 leading-[1.9] max-w-2xl">
            LUCI isn&rsquo;t another chatbot. It&rsquo;s a personal AI that
            remembers what you&rsquo;ve said, seen, and thought&nbsp;&mdash;
            growing to understand you over time. Your second brain, running on
            your own instance.
          </p>
        </div>

        {/* Trait cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {traits.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/[0.06] bg-grey-0/60 px-7 py-8"
            >
              <span className="text-sm font-semibold font-mono tracking-wide uppercase text-primary">
                {t.label}
              </span>
              <p className="mt-3 text-[0.95rem] text-text-1 leading-[1.75]">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
