"use client";

import { type ReactNode } from "react";

/**
 * Hero 区域渐变背景 — 四角各一团颜色，中间留白（CapCut 风格）
 * 颜色走 CSS 变量（--grad-tl / tr / bl / br），light / dark 自动切换。
 */
export function HeroGradientBg({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: "var(--bg-0)" }}
    >
      {/* 四角渐变 — 每角一团色，中间完全空白 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            // 左上 — 紫
            "radial-gradient(ellipse 50% 50% at 0% 0%, var(--grad-tl) 0%, transparent 70%)",
            // 右上 — 暖橙/桃
            "radial-gradient(ellipse 50% 50% at 100% 0%, var(--grad-tr) 0%, transparent 70%)",
            // 左下 — 粉
            "radial-gradient(ellipse 50% 50% at 0% 100%, var(--grad-bl) 0%, transparent 70%)",
            // 右下 — 蓝紫
            "radial-gradient(ellipse 50% 50% at 100% 100%, var(--grad-br) 0%, transparent 70%)",
          ].join(", "),
        }}
      />
      <div className="relative">{children}</div>
    </section>
  );
}

/**
 * Features 区域渐变背景 — 上下极淡紫→白→暖橙 + 微弱橙紫光晕
 */
export function FeaturesGradientBg({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{
        background: [
          "radial-gradient(ellipse 60% 80% at 80% 20%, var(--grad-feat-purple), transparent)",
          "radial-gradient(ellipse 50% 60% at 20% 80%, var(--grad-feat-orange), transparent)",
          "linear-gradient(180deg, var(--grad-feat-top) 0%, var(--grad-feat-mid) 50%, var(--grad-feat-bottom) 100%)",
        ].join(", "),
      }}
    >
      {children}
    </section>
  );
}
