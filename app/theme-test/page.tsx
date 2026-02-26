"use client";

import { useState } from "react";

interface Theme {
  name: string;
  description: string;
  colors: {
    pageBg: string;
    cardBg: string;
    primary: string; // brand orange
    contrast: string; // 撞色
    contrastGradient?: string; // 撞色渐变（可选，有则按钮/背景用渐变）
    contrastLight: string; // 撞色浅版（tag/badge 背景）
    accent?: string; // 点缀色（可选，第三色）
    accentLight?: string; // 点缀色浅版
    text: string;
    textSecondary: string;
    border: string;
  };
}

// helper: 返回撞色的 background 样式
function contrastBg(c: Theme["colors"]): string {
  return c.contrastGradient || c.contrast;
}

const themes: Theme[] = [
  {
    name: "米黄 + 橙 + 渐变紫",
    description: "米黄底，橙色强调，紫色渐变撞色 — 温暖又有科技感",
    colors: {
      pageBg: "#FFFBF0",
      cardBg: "#FFFFFF",
      primary: "#EF6915",
      contrast: "#785DE1",
      contrastGradient: "linear-gradient(270deg, #785DE1 0.24%, #747AF1 99.87%)",
      contrastLight: "#E8E4FF",
      text: "#1A1A1A",
      textSecondary: "#6B7280",
      border: "#E5E1D8",
    },
  },
  {
    name: "米黄 + 橙 + 薰衣紫",
    description: "类似 Wispr Flow — 温暖米黄底，橙色强调，紫色撞色按钮",
    colors: {
      pageBg: "#FFFBF0",
      cardBg: "#FFFFFF",
      primary: "#EF6915",
      contrast: "#9333EA",
      contrastLight: "#E9D5FF",
      text: "#1A1A1A",
      textSecondary: "#6B7280",
      border: "#E5E1D8",
    },
  },
  {
    name: "暖白 + 橙 + 玫粉",
    description: "暖白底，橙色品牌，粉色撞色 — 活力年轻",
    colors: {
      pageBg: "#FFFCF9",
      cardBg: "#FFFFFF",
      primary: "#EF6915",
      contrast: "#DB2777",
      contrastLight: "#FBCFE8",
      text: "#1C1917",
      textSecondary: "#78716C",
      border: "#E7E5E4",
    },
  },
  {
    name: "米黄 + 橙 + 深森绿",
    description: "米黄底，橙色标签，深绿撞色 — 自然高级感",
    colors: {
      pageBg: "#FEFCE8",
      cardBg: "#FFFFFF",
      primary: "#EF6915",
      contrast: "#166534",
      contrastLight: "#BBF7D0",
      text: "#1A1A1A",
      textSecondary: "#6B7280",
      border: "#E5E1B0",
    },
  },
  {
    name: "暗色 + 橙（Claude 风格）",
    description: "深色底，橙色品牌高亮，浅色文字 — 高级沉稳",
    colors: {
      pageBg: "#1A1A1A",
      cardBg: "#262626",
      primary: "#EF6915",
      contrast: "#EF6915",
      contrastLight: "#3D2A1A",
      text: "#F5F5F5",
      textSecondary: "#A3A3A3",
      border: "#333333",
    },
  },
  {
    name: "暗色 + 橙 + 渐变紫按钮",
    description: "深色底，橙色高亮，蓝紫渐变撞色按钮 — 高级 + 科技感",
    colors: {
      pageBg: "#1A1A1A",
      cardBg: "#262626",
      primary: "#EF6915",
      contrast: "#785DE1",
      contrastGradient: "linear-gradient(270deg, #785DE1 0.24%, #747AF1 99.87%)",
      contrastLight: "#2D2545",
      text: "#F5F5F5",
      textSecondary: "#A3A3A3",
      border: "#333333",
    },
  },
  {
    name: "暗色 + 橙 + 紫/绿区块混搭",
    description: "深色底，导航纯橙+黑白，橙色只用关键CTA，区块交替紫色/绿色背景",
    colors: {
      pageBg: "#1A1A1A",
      cardBg: "#262626",
      primary: "#EF6915",
      contrast: "#785DE1",
      contrastGradient: "linear-gradient(270deg, #785DE1 0.24%, #747AF1 99.87%)",
      contrastLight: "#2D2545",
      accent: "#166534",
      accentLight: "#1A3D2A",
      text: "#F5F5F5",
      textSecondary: "#A3A3A3",
      border: "#333333",
    },
    _mixed: true, // 标记用特殊渲染
  } as Theme & { _mixed?: boolean },
];

function ThemeSelector({ themes, active, onSelect }: { themes: Theme[]; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {themes.map((t, i) => {
        const c = t.colors;
        const isActive = i === active;
        return (
          <button
            key={i}
            onClick={() => onSelect(i)}
            className="rounded-xl border-2 p-4 text-left transition-all"
            style={{
              borderColor: isActive ? c.primary : "#E5E7EB",
              background: isActive ? c.pageBg : "#FFFFFF",
            }}
          >
            <div className="mb-3 flex gap-2">
              <div className="h-6 w-6 rounded-full border" style={{ background: c.pageBg, borderColor: "#ddd" }} title="底色" />
              <div className="h-6 w-6 rounded-full" style={{ background: c.primary }} title="品牌橙" />
              <div className="h-6 w-6 rounded-full" style={{ background: contrastBg(c) }} title="撞色" />
              <div className="h-6 w-6 rounded-full" style={{ background: c.text }} title="文字" />
            </div>
            <div className="text-sm font-semibold" style={{ color: "#111827" }}>{t.name}</div>
            <div className="mt-0.5 text-xs" style={{ color: "#6B7280" }}>{t.description}</div>
          </button>
        );
      })}
    </div>
  );
}

function FullPreview({ theme }: { theme: Theme }) {
  const c = theme.colors;

  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: c.pageBg, borderColor: c.border }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5" style={{ borderBottom: `1px solid ${c.border}` }}>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg" style={{ background: c.primary }} />
          <span className="text-lg font-bold" style={{ color: c.text }}>LUCI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>Features</span>
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>How It Works</span>
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>Pricing</span>
        </div>
        <button
          className="rounded-full px-5 py-2 text-sm font-semibold text-white"
          style={{ background: contrastBg(c) }}
        >
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="px-8 py-20 text-center">
        <div
          className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
          style={{ background: c.contrastLight, color: c.contrast }}
        >
          Now in Beta
        </div>
        <h1 className="mx-auto max-w-2xl text-5xl font-bold leading-tight tracking-tight" style={{ color: c.text }}>
          Remember Everything.{" "}
          <span style={{ color: c.primary }}>Act Automatically.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg" style={{ color: c.textSecondary }}>
          Your fully automated AI assistant with video memory. It remembers everything and gets things done.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full px-7 py-3 text-base font-semibold text-white" style={{ background: c.primary }}>
            Get Started Free
          </button>
          <button className="rounded-full px-7 py-3 text-base font-semibold" style={{ background: contrastBg(c), color: "#FFFFFF" }}>
            Watch Demo
          </button>
        </div>
      </section>

      {/* Feature Tags Row */}
      <section className="px-8 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Video Memory", "Auto Execution", "Data Sovereignty", "Agent Teams", "Safe Skills"].map((tag, i) => {
            // 如果有 accent 点缀色，部分 tag 用 accent
            const useAccent = c.accent && (i === 1 || i === 3);
            return (
            <span
              key={tag}
              className="rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: useAccent ? c.accent : c.primary, color: "#FFFFFF" }}
            >
              {tag}
            </span>
            );
          })}
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-8 pb-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { icon: "🎬", title: "Video Memory", desc: "Record meetings and build a memory vault from video content." },
            { icon: "⚡", title: "Auto Execution", desc: "LUCI calls agents to complete tasks based on your memories." },
            { icon: "🔒", title: "Data Sovereignty", desc: "Your data lives on your own VM. Built on open-source." },
          ].map((f, i) => {
            // 第三张卡片用 accent 点缀色（如有）
            const iconBg = (c.accent && i === 2) ? (c.accentLight || c.accent + "20") : c.primary + "15";
            const cardBorder = (c.accent && i === 2) ? (c.accent + "40") : c.border;
            return (
            <div
              key={i}
              className="rounded-xl border p-7"
              style={{ background: c.cardBg, borderColor: cardBorder }}
            >
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-xl"
                style={{ background: iconBg }}
              >
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-base font-bold" style={{ color: c.text }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>{f.desc}</p>
            </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-8 mb-10 rounded-xl p-8" style={{ background: contrastBg(c), color: "#FFFFFF" }}>
        <h2 className="mb-8 text-center text-2xl font-bold">How It Works</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Meeting Ends" },
            { n: "02", t: "Memory Extracted" },
            { n: "03", t: "Agent Executes" },
            { n: "04", t: "You Review" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div
                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold"
                style={{ background: "#FFFFFF20", color: "#FFFFFF" }}
              >
                {s.n}
              </div>
              <div className="text-sm font-semibold">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-8 pb-12">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            { v: "100%", l: "Data Ownership" },
            { v: "24/7", l: "Always Recording" },
            { v: "< 3min", l: "Setup Time" },
            { v: "∞", l: "Memory Capacity" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-6 text-center" style={{ borderColor: c.border, background: c.cardBg }}>
              <div className="text-3xl font-bold" style={{ color: c.primary }}>{s.v}</div>
              <div className="mt-1 text-sm" style={{ color: c.textSecondary }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons & Elements Showcase */}
      <section className="mx-8 mb-10 rounded-xl border p-8" style={{ borderColor: c.border, background: c.cardBg }}>
        <h3 className="mb-5 text-base font-bold" style={{ color: c.text }}>Buttons & Tags</h3>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: c.primary }}>
            Brand Orange
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: contrastBg(c) }}>
            Contrast Color
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: c.text }}>
            Dark / Black
          </button>
          <button className="rounded-full border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: c.primary, color: c.primary }}>
            Outline Orange
          </button>
          <button className="rounded-full border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: c.contrast, color: c.contrast }}>
            Outline Contrast
          </button>
          {c.accent && (
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: c.accent }}>
              Accent Green
            </button>
          )}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.primary, color: "#FFF" }}>
            Orange Tag
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.contrastLight, color: c.contrast }}>
            Contrast Tag
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.primary + "15", color: c.primary }}>
            Light Orange
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.text, color: "#FFF" }}>
            Dark Tag
          </span>
          <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: c.border, color: c.textSecondary }}>
            Muted Tag
          </span>
          {c.accent && (
            <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.accent, color: "#FFF" }}>
              Accent Tag
            </span>
          )}
        </div>
      </section>

      {/* Color Swatches */}
      <section className="mx-8 mb-10 rounded-xl border p-8" style={{ borderColor: c.border, background: c.cardBg }}>
        <h3 className="mb-5 text-base font-bold" style={{ color: c.text }}>Color Palette</h3>
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
          {[
            { label: "Page BG", color: c.pageBg },
            { label: "Card BG", color: c.cardBg },
            { label: "Brand", color: c.primary },
            { label: "Contrast", color: c.contrast },
            { label: "Contrast Lt", color: c.contrastLight },
            ...(c.accent ? [{ label: "Accent", color: c.accent }, { label: "Accent Lt", color: c.accentLight || c.accent + "30" }] : []),
            { label: "Text", color: c.text },
            { label: "Text 2nd", color: c.textSecondary },
            { label: "Border", color: c.border },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div
                className="mx-auto h-14 w-full rounded-lg border"
                style={{ background: s.color, borderColor: s.color.toUpperCase() >= "#C" ? "#ddd" : "transparent" }}
              />
              <div className="mt-1.5 text-xs font-medium" style={{ color: c.textSecondary }}>{s.label}</div>
              <div className="text-xs font-mono opacity-60" style={{ color: c.textSecondary }}>{s.color}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-8 mb-8 rounded-xl p-10 text-center" style={{ background: c.text }}>
        <h2 className="text-2xl font-bold text-white">Ready to Have an AI That Remembers?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#ffffff80" }}>
          Your memory, your data, your agent.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="rounded-full px-7 py-3 text-sm font-semibold" style={{ background: c.primary, color: "#FFFFFF" }}>
            Get Started Free
          </button>
          <button className="rounded-full px-7 py-3 text-sm font-semibold" style={{ background: contrastBg(c), color: "#FFFFFF" }}>
            Book a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm" style={{ color: c.textSecondary, borderTop: `1px solid ${c.border}` }}>
        LUCI &copy; 2026 — Built with OpenClaw
      </footer>
    </div>
  );
}

function MixedPreview({ theme }: { theme: Theme }) {
  const c = theme.colors;
  const purple = "linear-gradient(270deg, #785DE1 0.24%, #747AF1 99.87%)";
  const green = "#166534";

  return (
    <div className="rounded-2xl border overflow-hidden" style={{ background: c.pageBg, borderColor: c.border }}>
      {/* Nav — 只有橙色 logo + 黑白 */}
      <nav className="flex items-center justify-between px-8 py-5" style={{ borderBottom: `1px solid ${c.border}` }}>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg" style={{ background: c.primary }} />
          <span className="text-lg font-bold" style={{ color: c.text }}>LUCI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>Features</span>
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>How It Works</span>
          <span className="text-sm font-medium" style={{ color: c.textSecondary }}>Pricing</span>
        </div>
        <button className="rounded-full border px-5 py-2 text-sm font-semibold" style={{ borderColor: "#555", color: c.text }}>
          Sign In
        </button>
      </nav>

      {/* Hero — 暗色底，橙色只在主 CTA */}
      <section className="px-8 py-20 text-center">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium" style={{ borderColor: "#444", color: c.textSecondary }}>
          Now in Beta
        </div>
        <h1 className="mx-auto max-w-2xl text-5xl font-bold leading-tight tracking-tight" style={{ color: c.text }}>
          Remember Everything.{" "}
          <span style={{ color: c.primary }}>Act Automatically.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg" style={{ color: c.textSecondary }}>
          Your fully automated AI assistant with video memory. It remembers everything and gets things done.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full px-7 py-3 text-base font-semibold text-white" style={{ background: c.primary }}>
            Get Started Free
          </button>
          <button className="rounded-full border px-7 py-3 text-base font-semibold" style={{ borderColor: "#555", color: c.text }}>
            See How It Works
          </button>
        </div>
      </section>

      {/* Feature Cards — 暗色卡片 */}
      <section className="px-8 pb-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { icon: "🎬", title: "Video Memory", desc: "Record meetings and build a memory vault from video content." },
            { icon: "⚡", title: "Auto Execution", desc: "LUCI calls agents to complete tasks based on your memories." },
            { icon: "🔒", title: "Data Sovereignty", desc: "Your data lives on your own VM. Built on open-source." },
          ].map((f, i) => (
            <div key={i} className="rounded-xl border p-7" style={{ background: c.cardBg, borderColor: c.border }}>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-xl" style={{ background: "#333" }}>
                {f.icon}
              </div>
              <h3 className="mb-1.5 text-base font-bold" style={{ color: c.text }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.textSecondary }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works — 紫色渐变区块 */}
      <section className="mx-8 mb-10 rounded-xl p-8" style={{ background: purple }}>
        <h2 className="mb-8 text-center text-2xl font-bold text-white">How It Works</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Meeting Ends" },
            { n: "02", t: "Memory Extracted" },
            { n: "03", t: "Agent Executes" },
            { n: "04", t: "You Review" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold" style={{ background: "#FFFFFF20", color: "#FFFFFF" }}>
                {s.n}
              </div>
              <div className="text-sm font-semibold text-white">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Memory Vault — 深绿色区块 */}
      <section className="mx-8 mb-10 rounded-xl p-8" style={{ background: green }}>
        <h2 className="mb-3 text-center text-2xl font-bold text-white">Your Memory Vault</h2>
        <p className="mx-auto mb-8 max-w-md text-center text-sm" style={{ color: "#BBF7D0" }}>
          Video memories, documents, interactions — all indexed and searchable
        </p>
        <div className="grid grid-cols-3 gap-4">
          {["Video Memories", "Documents", "Interactions"].map((label) => (
            <div key={label} className="rounded-lg p-5 text-center" style={{ background: "#1A3D2A" }}>
              <div className="text-sm font-semibold text-white">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats — 暗色卡片 */}
      <section className="px-8 pb-12">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            { v: "100%", l: "Data Ownership" },
            { v: "24/7", l: "Always Recording" },
            { v: "< 3min", l: "Setup Time" },
            { v: "∞", l: "Memory Capacity" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border p-6 text-center" style={{ borderColor: c.border, background: c.cardBg }}>
              <div className="text-3xl font-bold" style={{ color: c.primary }}>{s.v}</div>
              <div className="mt-1 text-sm" style={{ color: c.textSecondary }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons & Tags Showcase */}
      <section className="mx-8 mb-10 rounded-xl border p-8" style={{ borderColor: c.border, background: c.cardBg }}>
        <h3 className="mb-5 text-base font-bold" style={{ color: c.text }}>Buttons & Tags</h3>
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: c.primary }}>
            Brand Orange (CTA only)
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: purple }}>
            Purple Gradient
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: green }}>
            Deep Green
          </button>
          <button className="rounded-full border px-5 py-2.5 text-sm font-semibold" style={{ borderColor: "#555", color: c.text }}>
            Outline White
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: c.primary, color: "#FFF" }}>
            Orange
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: "#785DE1" }}>
            Purple
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: green }}>
            Green
          </span>
          <span className="rounded-full px-3 py-1 text-xs font-semibold" style={{ background: "#333", color: c.textSecondary }}>
            Muted
          </span>
          <span className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: "#555", color: c.textSecondary }}>
            Outline
          </span>
        </div>
      </section>

      {/* Color Palette */}
      <section className="mx-8 mb-10 rounded-xl border p-8" style={{ borderColor: c.border, background: c.cardBg }}>
        <h3 className="mb-5 text-base font-bold" style={{ color: c.text }}>Color Palette</h3>
        <div className="grid grid-cols-5 gap-4 md:grid-cols-10">
          {[
            { label: "Page BG", color: "#1A1A1A" },
            { label: "Card BG", color: "#262626" },
            { label: "Brand", color: "#EF6915" },
            { label: "Purple L", color: "#785DE1" },
            { label: "Purple R", color: "#747AF1" },
            { label: "Green", color: "#166534" },
            { label: "Green Lt", color: "#1A3D2A" },
            { label: "Text", color: "#F5F5F5" },
            { label: "Text 2nd", color: "#A3A3A3" },
            { label: "Border", color: "#333333" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto h-14 w-full rounded-lg border" style={{ background: s.color, borderColor: "transparent" }} />
              <div className="mt-1.5 text-xs font-medium" style={{ color: c.textSecondary }}>{s.label}</div>
              <div className="text-xs font-mono opacity-60" style={{ color: c.textSecondary }}>{s.color}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — 橙色主 CTA */}
      <section className="mx-8 mb-8 rounded-xl p-10 text-center" style={{ background: "#0D0D0D" }}>
        <h2 className="text-2xl font-bold text-white">Ready to Have an AI That Remembers?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm" style={{ color: "#ffffff60" }}>
          Your memory, your data, your agent.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button className="rounded-full px-7 py-3 text-sm font-semibold text-white" style={{ background: c.primary }}>
            Get Started Free
          </button>
          <button className="rounded-full border px-7 py-3 text-sm font-semibold" style={{ borderColor: "#444", color: "#F5F5F5" }}>
            Book a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center text-sm" style={{ color: c.textSecondary, borderTop: `1px solid ${c.border}` }}>
        LUCI &copy; 2026 — Built with OpenClaw
      </footer>
    </div>
  );
}

export default function ThemeTestPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold text-gray-900">LUCI — Color Scheme Explorer</h1>
          <span className="text-sm text-gray-500">Brand: #EF6915 + 撞色搭配</span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">
        <p className="mb-6 text-sm text-gray-500">
          点击选择不同的底色 + 撞色组合，下方会展示完整的落地页预览效果。所有方案品牌色固定为橙色 #EF6915。
        </p>

        <ThemeSelector themes={themes} active={active} onSelect={setActive} />

        <div className="mt-10">
          {(themes[active] as Theme & { _mixed?: boolean })._mixed ? (
            <MixedPreview theme={themes[active]} />
          ) : (
            <FullPreview theme={themes[active]} />
          )}
        </div>
      </div>
    </div>
  );
}
