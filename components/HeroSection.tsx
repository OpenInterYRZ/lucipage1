import Badge from "./Badge";
import ProductMockup from "./ProductMockup";

export default function HeroSection() {
  return (
    <section className="bg-bg w-full flex flex-col items-center gap-[48px] py-[100px] px-[80px]">
      {/* Badge */}
      <Badge text="Personal AI Assistant" />

      {/* Hero Title */}
      <h1 className="text-primary font-serif text-[72px] tracking-[-1px] text-center">
        See, Remember & Act
      </h1>

      {/* Hero Subtitle */}
      <p className="text-secondary font-sans text-[20px] leading-[1.6] text-center max-w-[800px]">
        LUCI remembers everything, then gets things done automatically.
        <br />
        Not just a note-taking tool — it&apos;s a personal AI assistant that builds memory and executes tasks.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-[16px]">
        {/* Primary CTA */}
        <div className="bg-brand rounded-[8px] py-[14px] px-[32px] flex gap-[8px] hover:opacity-90 transition-opacity cursor-pointer">
          <span className="text-primary font-sans text-[15px] font-medium">
            Sign Up for Cloud
          </span>
          <span className="text-primary font-sans text-[15px] font-medium">
            →
          </span>
        </div>

        {/* Secondary CTA */}
        <div className="rounded-[8px] py-[14px] px-[32px] flex gap-[8px] hover:bg-surface transition-colors cursor-pointer">
          <span className="text-secondary font-sans text-[15px] font-medium">
            Download Local
          </span>
          <span className="text-secondary font-sans text-[15px] font-medium">
            ↓
          </span>
        </div>
      </div>

      {/* Product Mockup */}
      <ProductMockup />

      {/* Trust Row */}
      <div className="flex items-center justify-center gap-[40px] w-full pt-[40px]">
        <span className="text-dim font-sans text-[12px] font-medium tracking-[0.5px]">
          Built on open source
        </span>
        <div className="h-[16px] bg-border" />
        <span className="text-tertiary font-mono text-[13px] font-medium">
          OpenClaw
        </span>
        <div className="h-[16px] bg-border" />
        <span className="text-tertiary font-mono text-[13px] font-medium">
          Memories.ai
        </span>
        <div className="h-[16px] bg-border" />
        <span className="text-tertiary font-mono text-[13px] font-medium">
          Self-hosted
        </span>
      </div>
    </section>
  );
}
