import Link from "next/link";
import AboutVideoHero from "@/components/about/AboutVideoHero";
import WhyLuci from "@/components/about/WhyLuci";
import WhatIsLuci from "@/components/about/WhatIsLuci";
import OurBeliefs from "@/components/about/OurBeliefs";
import TeamGallery from "@/components/about/TeamGallery";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="w-full h-full mx-auto">
      <AboutVideoHero />

      <div className="relative bg-web-bg-0">
        <WhyLuci />
        <OurBeliefs />
        <TeamGallery />

        {/* CTA — Join Us */}
        <section className="py-20 px-6 sm:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-text-0 mb-4">
              Join us and build the future
            </h2>
            <p className="text-base text-text-2 mb-8 max-w-xl mx-auto">
              We&apos;re looking for curious, driven people who want to shape
              how the world works with AI.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full bg-orange-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              View Open Positions
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
