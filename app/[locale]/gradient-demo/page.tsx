import MeshGradientBg from "@/components/gradient/MeshGradientBg";

export default function GradientDemoPage() {
  return (
    // One gradient wraps the entire page — sections are transparent on top
    <MeshGradientBg className="min-h-screen font-sans">
      {/* ═══ Hero — transparent, gradient shows through ═══ */}
      <section className="flex flex-col items-center px-4 pt-24 pb-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#FFF1EB] px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C00]" />
          <span className="text-xs font-medium text-[#FF5C00]">
            Now in public beta
          </span>
        </div>

        <h1 className="max-w-3xl text-7xl font-bold leading-[1.05] tracking-tight text-[#0A0E17]">
          Build something
          <br />
          people remember
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B7280]">
          The modern platform that helps teams design, ship, and iterate faster.
          Simple by default, powerful when you need it.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <button className="rounded-xl bg-[#FF5C00] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#FF5C00]/20 transition hover:shadow-xl hover:shadow-[#FF5C00]/30">
            Start for Free
          </button>
          <button className="rounded-xl bg-white/60 px-8 py-3.5 text-base font-medium text-[#0A0E17] backdrop-blur-sm transition hover:bg-white/80">
            Watch Demo
          </button>
        </div>

        {/* Product mockup */}
        <div className="mt-16 w-full max-w-4xl rounded-2xl border border-[#E5E7EB] bg-white/70 p-1 shadow-[0_20px_60px_-10px_rgba(10,14,23,0.07)] backdrop-blur-sm">
          <div className="flex h-[400px] items-center justify-center rounded-xl bg-white/50">
            <span className="text-base text-[#C4C9D4]">Product Screenshot</span>
          </div>
        </div>
      </section>

      {/* ═══ Features — transparent, gradient naturally fades to white here ═══ */}
      <section className="px-12 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF5C00]">
              Features
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#0A0E17]">
              Everything you need to ship fast
            </h2>
            <p className="mt-3 text-base text-[#9CA3AF]">
              Powerful features wrapped in a simple interface
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Built on edge infrastructure for sub-50ms response times globally.",
              },
              {
                icon: "🛡️",
                title: "Secure by Default",
                desc: "End-to-end encryption, SOC 2 compliant, and zero-trust architecture.",
              },
              {
                icon: "🧩",
                title: "Modular Design",
                desc: "Compose your stack from 50+ pre-built modules. Extend with custom plugins.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#E5E7EB] bg-white/80 p-7 backdrop-blur-sm transition hover:bg-white hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1EB] text-xl">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0A0E17]">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B7280]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Spacer / trust logos — still on gradient ═══ */}
      <section className="py-16 text-center">
        <p className="text-sm font-medium text-[#9CA3AF]">
          Trusted by teams at
        </p>
        <div className="mt-6 flex items-center justify-center gap-12">
          {["Vercel", "Stripe", "Linear", "Notion"].map((name) => (
            <span key={name} className="text-lg font-semibold text-[#D1D5DB]">
              {name}
            </span>
          ))}
        </div>
      </section>
    </MeshGradientBg>
  );
}
