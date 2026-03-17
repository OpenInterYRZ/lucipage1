import Link from "next/link";
import { jobs } from "@/data/careers";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers | LUCI",
  description:
    "Join the LUCI team. Explore open positions in AI research, engineering, product, and more.",
};

export default function CareersPage() {
  return (
    <div className="w-full min-h-screen bg-web-bg-0">
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-text-0 leading-tight ">
          Join us to push the boundaries!
        </h1>
        <div className="mt-6 text-grey-5 text-base leading-relaxed max-w-3xl space-y-1">
          <p>
            We&apos;re a passionate team of engineers and innovators who love
            solving hard problems.
          </p>
          <p>
            We welcome talented individuals who want to grow with us. If that
            sounds like you, don&apos;t hesitate – reach out.
          </p>
        </div>
      </section>

      {/* Job List */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 pb-24">
        <div className="flex flex-col gap-6">
          {jobs.map((job) => {
            const description = job.md
              .replace(/#{1,6}\s+.+/g, "")
              .replace(/^-\s+.+$/gm, "")
              .replace(/\n{2,}/g, "\n")
              .trim()
              .slice(0, 200);

            return (
              <div
                key={job.id}
                className="relative flex items-start justify-between gap-6 p-8 rounded-xl border border-grey-1 bg-grey-0/30"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-text-0">{job.title}</h3>
                  <div className="mt-2 flex items-center gap-4 text-sm font-medium text-primary">
                    <span>{job.department}</span>
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="mt-4 text-sm text-grey-4 leading-relaxed line-clamp-3">
                    {description}...
                  </p>
                </div>
                <Link
                  href={`/careers/${job.id}`}
                  className="shrink-0 self-center px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/80 transition-colors"
                >
                  More Details
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
