"use client";

export function AssistantAvatar() {
  return (
    <div
      className="shrink-0 overflow-hidden rounded-[6px]"
      style={{ width: 36, height: 36 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/luci.webp" alt="" className="h-full w-full object-cover" />
    </div>
  );
}

export function AssistantNameTime({
  name = "LUCI",
  time = "2:15 PM",
}: {
  name?: string;
  time?: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="font-bold text-text-0"
        style={{ fontSize: "var(--phone-chat-fs)" }}
      >
        {name}
      </span>
      <span
        className="inline-flex items-center rounded-full px-1.5 py-px font-semibold text-white"
        style={{
          fontSize: "calc(var(--phone-chat-fs) - 4px)",
          background: "linear-gradient(135deg, #FF8C00 0%, #FFa030 100%)",
          lineHeight: 1.4,
        }}
      >
        AI&nbsp;Assistant
      </span>
      <span
        className="text-text-2"
        style={{ fontSize: "calc(var(--phone-chat-fs) - 2px)" }}
      >
        {time}
      </span>
    </div>
  );
}
