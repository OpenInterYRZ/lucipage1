const connectors = [
  { name: "Zoom", abbr: "Zm" },
  { name: "Google Meet", abbr: "GM" },
  { name: "Slack", abbr: "Sl" },
  { name: "Telegram", abbr: "Tg" },
  { name: "WhatsApp", abbr: "WA" },
  { name: "Notion", abbr: "No" },
  { name: "Gmail", abbr: "Gm" },
  { name: "Google Calendar", abbr: "GC" },
  { name: "Outlook", abbr: "Ol" },
  { name: "GitHub", abbr: "GH" },
  { name: "Jira", abbr: "Ji" },
  { name: "Linear", abbr: "Li" },
  { name: "Figma", abbr: "Fi" },
  { name: "Lark", abbr: "Lk" },
  { name: "Obsidian", abbr: "Ob" },
  { name: "Discord", abbr: "Dc" },
];

export default function ConnectorsSection() {
  return (
    <section className="dark relative w-full overflow-hidden bg-bento-bg py-20 md:py-28">
      {/* Subtle radial glow from top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 35% at 50% 0%, var(--grad-cta-orange) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
          <p
            className="text-xs font-semibold uppercase text-primary"
            style={{
              letterSpacing: "0.2em",
              fontFamily: "var(--font-space, 'Space Grotesk', sans-serif)",
            }}
          >
            Connectors
          </p>
          <h2
            className="text-[clamp(28px,5vw,44px)] font-bold leading-[1.08] tracking-tight text-text-0"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Connect your workflow
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-text-2">
            Seamlessly integrate with the tools you already use
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 sm:gap-4 lg:grid-cols-8">
          {connectors.map((c) => (
            <div
              key={c.name}
              className="group flex aspect-square cursor-default flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-bg-1 transition-all duration-300 hover:border-input hover:bg-bg-2"
            >
              {/* Placeholder icon — replace with actual SVG */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-2 text-[13px] font-semibold text-text-2 transition-colors duration-300 group-hover:bg-bg-3 group-hover:text-text-1">
                {c.abbr}
              </div>
              <span className="text-[10px] font-medium text-text-3 transition-colors duration-300 group-hover:text-text-2">
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-10 flex justify-center">
          <button className="group flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 hover:gap-2.5">
            View all 40+ integrations
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
