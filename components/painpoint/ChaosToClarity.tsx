"use client";
import FeatureCards from "./ProductCarousel";

export default function ChaosToClarity() {
  return (
    <section className="relative w-full py-20 px-4 bg-web-bg-0">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-20">
        <div className="text-center">
          <h2
            className="text-text-0 font-extrabold text-[28px] md:text-[36px] lg:text-[48px] leading-[1.15]"
            style={{ fontFamily: "var(--font-manrope, Manrope), sans-serif" }}
          >
            How LUCI works
          </h2>
          <p className="text-text-2 text-base md:text-lg mt-4 max-w-xl mx-auto font-[family-name:var(--font-manrope,Manrope)]">
            Three simple steps to see, remember, and act.
          </p>
        </div>
        <div className="w-full">
          <FeatureCards />
        </div>
      </div>
    </section>
  );
}
