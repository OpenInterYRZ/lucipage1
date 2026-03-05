import {
  HeroGradientBg,
  FeaturesGradientBg,
} from "@/components/gradient/GradientBg";

export default function LightDemoPage() {
  return (
    <div className="min-h-screen font-sans text-text-0 bg-bg-0">
      {/* ═══ Hero ═══ */}
      <HeroGradientBg>
        <div className="flex flex-col items-center px-4 pt-24 pb-20 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-0/80 backdrop-blur-sm px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-[13px] font-medium text-brand-7">
              Now in public beta
            </span>
          </div>

          <h1
            className="max-w-[800px] font-bold"
            style={{ fontSize: 56, letterSpacing: -1.5, lineHeight: 1.1 }}
          >
            Build products your users actually love
          </h1>

          <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-text-2">
            The all-in-one platform for product teams to ship faster, measure
            smarter, and iterate with confidence.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-primary text-white font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              Start for free
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-bg-0/60 border border-grey-2 text-text-0 font-medium text-base backdrop-blur-sm hover:bg-bg-0/80 transition-all">
              Watch demo
            </button>
          </div>

          <div className="mt-14 w-full max-w-[1100px] rounded-2xl border border-grey-2/60 bg-bg-0/40 p-1 backdrop-blur-sm shadow-[0_20px_60px_-10px_rgba(26,23,20,0.06)]">
            <div className="flex h-[480px] items-center justify-center rounded-xl bg-bg-0/60">
              <span className="text-lg text-text-3">Product Screenshot</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5">
            <span className="text-[11px] font-semibold tracking-[2px] text-text-3">
              TRUSTED BY TEAMS AT
            </span>
            <div className="flex items-center gap-12">
              {["Stripe", "Linear", "Vercel", "Notion", "Figma"].map((n) => (
                <span key={n} className="text-lg font-semibold text-grey-2">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </HeroGradientBg>

      {/* ═══ Features ═══ */}
      <FeaturesGradientBg>
        <div className="flex flex-col items-center px-16 py-20 gap-12">
          <div className="flex flex-col items-center gap-4 max-w-[600px] text-center">
            <span className="text-xs font-semibold tracking-[2px] text-primary">
              FEATURES
            </span>
            <h2
              className="font-bold"
              style={{ fontSize: 36, letterSpacing: -0.5, lineHeight: 1.2 }}
            >
              Everything you need to ship with confidence
            </h2>
            <p className="text-base text-text-2 leading-relaxed max-w-[500px]">
              Powerful tools designed for modern product teams, from ideation to
              launch.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5 w-full max-w-[1100px]">
            {[
              {
                icon: "zap",
                title: "Lightning Fast",
                desc: "Deploy in seconds with zero-config CI/CD. No more waiting around.",
              },
              {
                icon: "chart",
                title: "Real-time Analytics",
                desc: "Understand your users with live dashboards and actionable insights.",
              },
              {
                icon: "shield",
                title: "Enterprise Security",
                desc: "SOC 2 compliant with end-to-end encryption and role-based access.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex flex-col gap-4 p-7 rounded-[14px] bg-bg-0/80 backdrop-blur-sm border border-grey-2/60 hover:shadow-md hover:bg-bg-0 transition-all"
              >
                <div className="w-11 h-11 rounded-[10px] bg-brand-0 flex items-center justify-center">
                  <FeatureIcon name={card.icon} />
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-text-2 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FeaturesGradientBg>

      {/* ═══ Footer ═══ */}
      <footer className="flex items-center justify-between px-16 py-10 bg-bg-0 border-t border-grey-2">
        <span className="text-sm font-medium">Produx Inc.</span>
        <div className="flex items-center gap-7">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <span
              key={l}
              className="text-[13px] text-text-2 cursor-pointer hover:text-text-0 transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
        <span className="text-[13px] text-text-3">
          &copy; 2026 All rights reserved
        </span>
      </footer>
    </div>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--primary)",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "zap":
      return (
        <svg {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
