"use client";

import React, { useState } from "react";
import {
  siNotion,
  siGmail,
  siGoogledrive,
  siGooglecalendar,
  siZoom,
  siDropbox,
} from "simple-icons";

type SettingsTab =
  | "account"
  | "integrations"
  | "skills"
  | "subscription"
  | "recording";

const SETTINGS_TABS: { id: SettingsTab; label: string }[] = [
  { id: "account", label: "Account" },
  { id: "integrations", label: "Integrations" },
  { id: "skills", label: "Skills" },
  { id: "subscription", label: "Subscription" },
  { id: "recording", label: "Recording Preference" },
];

/* Helper: render a simple-icons icon as an SVG */
function SiIcon({
  icon,
  size = 20,
  color,
}: {
  icon: { path: string; hex: string };
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color ?? `#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

interface ThirdPartyApp {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
  connected: boolean;
}

const THIRD_PARTY_APPS: ThirdPartyApp[] = [
  {
    name: "Notion",
    subtitle: "Docs & Projects",
    icon: <SiIcon icon={siNotion} />,
    connected: false,
  },
  {
    name: "Zoom",
    subtitle: "Video Meetings",
    icon: <SiIcon icon={siZoom} />,
    connected: false,
  },
  {
    name: "Dropbox",
    subtitle: "Cloud Storage",
    icon: <SiIcon icon={siDropbox} />,
    connected: false,
  },
  {
    name: "Gmail",
    subtitle: "Communication",
    icon: <SiIcon icon={siGmail} />,
    connected: false,
  },
  {
    name: "Google Drive",
    subtitle: "Cloud Storage",
    icon: <SiIcon icon={siGoogledrive} />,
    connected: false,
  },
  {
    name: "Google Calendar",
    subtitle: "Events & Planning",
    icon: <SiIcon icon={siGooglecalendar} />,
    connected: false,
  },
];

/* ── Skills ── */
interface Skill {
  name: string;
  description: string;
  enabled: boolean;
  icon: React.ReactNode;
}

const SKILLS: Skill[] = [
  {
    name: "Meeting Summary",
    description: "Auto-summarize meetings and extract action items",
    enabled: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#FF8C00" opacity="0.12" />
        <path d="M5.5 6.5H14.5M5.5 10H12.5M5.5 13.5H10" stroke="#FF8C00" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Task Follow-up",
    description: "Track and follow up on assigned tasks automatically",
    enabled: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#34A853" opacity="0.12" />
        <path d="M5.5 10.5L8.5 13.5L14.5 6.5" stroke="#34A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Smart Search",
    description: "Search across all connected apps and files",
    enabled: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#4285F4" opacity="0.12" />
        <circle cx="9" cy="9" r="3.5" stroke="#4285F4" strokeWidth="1.4" />
        <path d="M12 12L15 15" stroke="#4285F4" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Email Draft",
    description: "Draft emails based on context and your writing style",
    enabled: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#6C5CE7" opacity="0.12" />
        <rect x="4" y="5.5" width="12" height="9" rx="2" stroke="#6C5CE7" strokeWidth="1.2" />
        <path d="M4.5 6L10 10.5L15.5 6" stroke="#6C5CE7" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "Calendar Prep",
    description: "Prepare briefings for upcoming meetings",
    enabled: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" fill="#FF5F57" opacity="0.12" />
        <rect x="4.5" y="5" width="11" height="10.5" rx="2" stroke="#FF5F57" strokeWidth="1.2" />
        <path d="M7.5 5V3.5M12.5 5V3.5" stroke="#FF5F57" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M4.5 8.5H15.5" stroke="#FF5F57" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("integrations");
  const [memoriesConnected, setMemoriesConnected] = useState(true);
  const [thirdPartyApps, setThirdPartyApps] = useState(THIRD_PARTY_APPS);
  const [skills, setSkills] = useState(SKILLS);

  const toggleThirdParty = (index: number) => {
    setThirdPartyApps((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, connected: !item.connected } : item,
      ),
    );
  };

  const toggleSkill = (index: number) => {
    setSkills((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, enabled: !item.enabled } : item,
      ),
    );
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      {/* Tab bar */}
      <div className="flex items-center border-b border-black/5 px-8 shrink-0">
        {SETTINGS_TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3.5 text-sm font-medium transition-colors ${
                isActive ? "text-[#1C1C1E]" : "text-[#AEAEB2] hover:text-[#8E8E93]"
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-5 right-5 h-[2px] rounded-full bg-[#FF8C00]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6 phone-scroll">
        {activeTab === "integrations" && (
          <div className="flex flex-col gap-8">
            {/* ── Core AI Integration ── */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-[#1C1C1E]">
                  Core AI Integration
                </h3>
                <span className="rounded-full border border-[#6C5CE7]/25 bg-[#6C5CE7]/5 px-3 py-1 text-xs font-semibold text-[#6C5CE7]">
                  Recommended
                </span>
              </div>
              <div className="rounded-2xl border border-[#6C5CE7]/15 bg-[#F8F7FF] px-6 py-5">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6C5CE7]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7Z" fill="#fff" />
                    </svg>
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-[#1C1C1E]">
                        Memories.ai
                      </span>
                      <span className="rounded bg-[#1C1C1E] px-2 py-0.5 text-xs font-bold text-white uppercase tracking-wide">
                        Core AI
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] leading-relaxed mb-2">
                      Powered by advanced AI Video Understanding to automatically
                      summarize and index your recordings. Connect to unlock smart
                      search across your entire library.
                    </p>
                    {memoriesConnected && (
                      <span className="text-xs font-medium text-[#6C5CE7]">
                        Connected as UserUser@gmail.com
                      </span>
                    )}
                  </div>
                  {/* Buttons */}
                  <div className="flex items-center gap-2 shrink-0 pt-1">
                    {memoriesConnected ? (
                      <>
                        <button className="rounded-lg bg-[#6C5CE7] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5B4ED6]">
                          Manage
                        </button>
                        <button
                          onClick={() => setMemoriesConnected(false)}
                          className="rounded-lg border border-[#6C5CE7]/25 bg-white px-4 py-2 text-xs font-semibold text-[#6C5CE7] hover:bg-[#6C5CE7]/5"
                        >
                          Disconnect
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setMemoriesConnected(true)}
                        className="rounded-lg bg-[#6C5CE7] px-4 py-2 text-xs font-semibold text-white hover:bg-[#5B4ED6]"
                      >
                        Connect
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Third-Party Apps ── */}
            <div>
              <h3 className="text-base font-bold text-[#1C1C1E] mb-3">
                Third-Party Apps
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {thirdPartyApps.map((app, i) => (
                  <div
                    key={app.name}
                    className="flex items-center gap-3 rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-4 py-3.5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                      {app.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-[#1C1C1E] truncate">
                        {app.name}
                      </div>
                      <div className="text-xs text-[#AEAEB2] truncate">
                        {app.subtitle}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleThirdParty(i)}
                      className={`shrink-0 rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                        app.connected
                          ? "border-[#6C5CE7]/25 bg-[#6C5CE7]/5 text-[#6C5CE7] hover:bg-[#6C5CE7]/10"
                          : "border-black/10 bg-white text-[#1C1C1E] hover:bg-[#F5F5F5]"
                      }`}
                    >
                      {app.connected ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "skills" && (
          <div className="flex flex-col gap-3">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-black/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  {skill.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#1C1C1E]">
                    {skill.name}
                  </div>
                  <div className="text-xs text-[#AEAEB2] leading-snug">
                    {skill.description}
                  </div>
                </div>
                <button
                  onClick={() => toggleSkill(i)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                    skill.enabled ? "bg-[#FF8C00]" : "bg-[#E5E5EA]"
                  }`}
                >
                  <span
                    className={`absolute top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                      skill.enabled ? "left-[22px]" : "left-[2px]"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "account" && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8C00] to-[#FFa030] text-white text-base font-bold">
                A
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-[#1C1C1E]">Alex Johnson</div>
                <div className="text-xs text-[#AEAEB2]">alex.johnson@company.com</div>
              </div>
              <button className="rounded-lg border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-[#1C1C1E] hover:bg-[#F5F5F5]">
                Edit
              </button>
            </div>
            <div className="rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-4">
              <div className="text-xs font-semibold text-[#AEAEB2] uppercase tracking-wider mb-3">
                Preferences
              </div>
              {["Language: English", "Timezone: UTC-8 (PST)", "Theme: System"].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between py-2.5 border-b border-black/[0.04] last:border-0"
                >
                  <span className="text-sm text-[#1C1C1E]">{item}</span>
                  <span className="text-xs text-[#AEAEB2]">›</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "subscription" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-[#FF8C00]/20 bg-gradient-to-br from-[#FF8C00]/5 to-[#FFa030]/5 px-6 py-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base font-bold text-[#1C1C1E]">Pro Plan</span>
                <span className="rounded-full bg-[#FF8C00] px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                  Active
                </span>
              </div>
              <div className="text-xs text-[#AEAEB2] mb-3">
                Unlimited meetings · All integrations · Priority support
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#1C1C1E]">$19</span>
                <span className="text-sm text-[#AEAEB2]">/month</span>
              </div>
            </div>
            <div className="rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-4">
              <div className="text-xs font-semibold text-[#AEAEB2] uppercase tracking-wider mb-3">
                Usage this month
              </div>
              {[
                { label: "Meetings analyzed", value: "23 / ∞" },
                { label: "Storage used", value: "1.2 GB / 10 GB" },
                { label: "API calls", value: "1,847 / ∞" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-2.5 border-b border-black/[0.04] last:border-0"
                >
                  <span className="text-sm text-[#1C1C1E]">{item.label}</span>
                  <span className="text-xs font-medium text-[#AEAEB2]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "recording" && (
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-4">
              <div className="text-xs font-semibold text-[#AEAEB2] uppercase tracking-wider mb-3">
                Recording
              </div>
              {[
                { label: "Auto-record meetings", on: true },
                { label: "Record audio only", on: false },
                { label: "Upload to cloud", on: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-3 border-b border-black/[0.04] last:border-0"
                >
                  <span className="text-sm text-[#1C1C1E]">{item.label}</span>
                  <div
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      item.on ? "bg-[#FF8C00]" : "bg-[#E5E5EA]"
                    }`}
                  >
                    <span
                      className={`absolute top-[2px] h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        item.on ? "left-[22px]" : "left-[2px]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-black/[0.04] bg-[#F9F9F9] px-5 py-4">
              <div className="text-xs font-semibold text-[#AEAEB2] uppercase tracking-wider mb-3">
                Quality
              </div>
              {["720p (Standard)", "1080p (HD)", "4K (Ultra)"].map((q, i) => (
                <div
                  key={q}
                  className="flex items-center justify-between py-3 border-b border-black/[0.04] last:border-0"
                >
                  <span className="text-sm text-[#1C1C1E]">{q}</span>
                  <div
                    className={`h-5 w-5 rounded-full border-2 ${
                      i === 1
                        ? "border-[#FF8C00] bg-[#FF8C00]"
                        : "border-[#D1D1D6] bg-white"
                    }`}
                  >
                    {i === 1 && (
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
