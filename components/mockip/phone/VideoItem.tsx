"use client";

interface VideoItemProps {
  title?: string;
  duration?: string;
  thumbnailColor?: string;
}

export function VideoItem({
  title = "Video Title",
  duration = "32 min",
  thumbnailColor = "#1A1A1A",
}: VideoItemProps) {
  return (
    <div
      className="flex w-[220px] flex-col gap-2"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-[130px] w-full overflow-hidden rounded-lg"
        style={{ background: thumbnailColor }}
      >
        {/* Duration badge */}
        <div className="absolute right-2 bottom-2 rounded bg-black/60 px-2 py-[3px]">
          <span className="text-lg font-medium text-white">{duration}</span>
        </div>
      </div>

      {/* Title */}
      <span className="text-lg font-semibold text-[#222222]">{title}</span>
    </div>
  );
}
