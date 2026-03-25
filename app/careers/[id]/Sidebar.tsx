"use client";

interface SidebarProps {
  department: string;
  type: string;
  location: string;
  postedDate: string;
  jobTitle: string;
}

export default function Sidebar({
  department,
  type,
  location,
  postedDate,
  jobTitle,
}: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 shrink-0 order-first lg:order-last">
      <div className="sticky top-28 rounded-xl border border-grey-1 p-6 space-y-5">
        <MetaField label="Department" value={department} />
        <MetaField label="Type" value={type} />
        <MetaField label="Location" value={location} />
        <MetaField label="Posted" value={postedDate} />

        <p className="text-sm leading-relaxed text-grey-6 pt-1">
          Apply by emailing{" "}
          <a
            href="mailto:hr@memories.ai"
            className="font-medium text-grey-9 underline underline-offset-2 hover:text-grey-8"
          >
            hr@memories.ai
          </a>
          . Use{" "}
          <span className="font-medium text-grey-9">
            [{jobTitle}] + [Your Name]
          </span>{" "}
          in the subject line (replace{" "}
          <span className="whitespace-nowrap">[Your Name]</span> with your
          name).
        </p>

        <a
          href={`mailto:hr@memories.ai?subject=${encodeURIComponent(`[${jobTitle}] + [Your Name]`)}`}
          className="block w-full text-center py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity mt-2"
        >
          Apply Now
        </a>
      </div>
    </aside>
  );
}

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-grey-4 uppercase tracking-wide">{label}</p>
      <p className="mt-1 text-sm font-semibold text-grey-9">{value}</p>
    </div>
  );
}
