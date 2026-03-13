import Image from "next/image";

const photos = [
  { src: "/about/about1.webp", alt: "Team outting" },
  { src: "/about/about2.webp", alt: "Conference talking" },
  { src: "/about/about4.webp", alt: "Team eventing" },
];

const stats = [
  {
    value: "30+",
    label: "Team Members",
    desc: "Engineers, designers & dreamers",
  },
  { value: "2", label: "Countries", desc: "USA & England" },
  { value: "1", label: "Goal", desc: "Make AI see and remember" },
];

export default function TeamGallery() {
  return (
    <section className="px-6 py-24 sm:py-32 bg-web-bg-0">
      <div className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-text-0 leading-[1.08] tracking-tigh my-10">
          About the Team
        </h2>

        {/* Row 1: wide photo + stat card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative sm:col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center rounded-2xl border border-white/10 py-10">
            <span className="text-5xl sm:text-6xl font-bold text-text-1 tracking-tight">
              {stats[0].value}
            </span>
            <span className="mt-3 text-sm font-medium text-text-1">
              {stats[0].label}
            </span>
            <span className="mt-1 text-sm text-text-1">{stats[0].desc}</span>
          </div>
        </div>

        {/* Row 2: stat card + wide photo (flipped) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center items-center rounded-2xl border border-white/10 py-10 sm:order-none order-last">
            <span className="text-5xl sm:text-6xl font-bold text-text-1 tracking-tight">
              {stats[1].value}
            </span>
            <span className="mt-3 text-sm font-medium text-text-1">
              {stats[1].label}
            </span>
            <span className="mt-1 text-sm text-text-1">{stats[1].desc}</span>
          </div>
          <div className="relative sm:col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Row 3: wide photo + stat card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative sm:col-span-2 rounded-2xl overflow-hidden aspect-[16/9]">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-center rounded-2xl border border-white/10 py-10">
            <span className="text-5xl sm:text-6xl font-bold text-text-1 tracking-tight">
              {stats[2].value}
            </span>
            <span className="mt-3 text-sm font-medium text-text-1">
              {stats[2].label}
            </span>
            <span className="mt-1 text-sm text-text-1">{stats[2].desc}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
