---
stepsCompleted: [1, 2, 3]
inputDocuments:
  - docs/prd.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
workflowType: 'architecture'
project_name: 'demo3'
user_name: 'runze'
date: '2026-02-25'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

项目范围是 **LUCI 产品落地页**（单页应用），核心功能需求包括：

1. **单页滚动叙事结构** — 10 个 Section 通过滚动引导用户理解产品价值
2. **吸顶导航系统** — 滚动时动态隐藏/显示，移动端汉堡菜单
3. **Hero 区域** — 大标题 + 双 CTA（主按钮 + 次按钮）+ 粒子/光效背景动画
4. **三大差异化展示** — 视频记忆、自动执行、数据主权三张卡片，滚动触发渐入动画
5. **How It Works 流程动画** — 紫色渐变区块，四步流程 SVG 路径绘制动画
6. **Memory Vault 可视化** — 深绿区块，动态记忆节点可视化（ReactBits 驱动）
7. **产品演示区** — 桌面端产品 Mockup 展示
8. **技术架构/安全展示** — 双 Agent 架构简图 + 数据主权说明
9. **社交证明** — Marquee 无限滚动（使用场景/合作伙伴 Logo）
10. **底部 CTA + Footer** — 最终转化区 + 页脚链接

**Non-Functional Requirements:**

| NFR | 要求 | 架构影响 |
|-----|------|---------|
| **性能** | 首屏 3 秒内可交互，流畅 60fps 动效 | 需要 SSR/SSG + 动效懒加载 + 图片优化 + 移动端降级策略 |
| **响应式** | 三档断点（sm < 640px / md 640-1024px / lg > 1024px） | 每个组件需要三套布局适配，移动端简化动效 |
| **无障碍** | WCAG AA 级别 | 语义 HTML、焦点管理、16.7:1 色彩对比度、键盘导航 |
| **SEO** | 落地页需搜索引擎可索引 | SSR/SSG 必须，动效内容需优雅降级，完整 meta tags |
| **动效流畅性** | GSAP + ReactBits 在低端设备不卡顿 | 需设备检测和动效降级策略 |

### Scale & Complexity

- **主要技术领域：** 前端 Web（单页落地页）
- **复杂度级别：** 中等
  - 页面结构简单（单页 10 section）
  - 动效和可视化有一定技术深度（GSAP + ReactBits）
  - 无后端业务逻辑，纯静态内容
- **预估架构组件：** ~13 个 React 组件
  - 布局组件：Navbar、Footer
  - 内容组件：HeroSection、FeatureCard、HowItWorks、MemoryVault、ProductShowcase、ArchitectureSection、SocialProof、CTASection
  - 基础组件：Button、SectionTag、Marquee
- **无后端需求** — CTA 链接到外部注册页或表单服务

### Technical Constraints & Dependencies

**已确定技术栈（来自 UX 规范）：**

| 技术 | 用途 | 来源 |
|------|------|------|
| Next.js + React | 前端框架 | 项目已初始化 |
| Tailwind CSS | 样式方案 | 已配置 |
| GSAP + ScrollTrigger | 滚动触发动画、SVG 路径绘制 | UX 规范选定 |
| ReactBits | 复杂动态效果（粒子、光效、3D 变换） | UX 规范选定 |
| Inter / Geist | 字体系统 | UX 规范选定 |
| Lucide React | 图标库 | UX 规范选定 |

**设计约束：**

- 暗色主题基调（`#1A1A1A` 页面底色）+ 紫色渐变和深绿区块撞色
- 橙色品牌色（`#EF6915`）仅用于 logo 和主 CTA
- 按钮三种变体：橙色实心、白色描边、紫色渐变

### Cross-Cutting Concerns Identified

1. **动效性能管理**
   - GSAP ScrollTrigger 需配置合理触发阈值，避免过度计算
   - ReactBits 粒子效果需在移动端禁用或大幅简化
   - 需设备性能检测机制（GPU 能力、屏幕尺寸）

2. **暗色主题一致性**
   - Design Tokens 需在 Tailwind Config 中统一定义
   - 所有组件遵循相同色板和间距系统
   - 区块背景色切换需保持可读性和对比度

3. **响应式布局策略**
   - 每个 Section 需适配三种断点
   - 移动端：单列堆叠、汉堡菜单、字号缩小、动效简化
   - 平板端：两列网格、部分动效保留
   - 桌面端：完整动效体验、多列布局

4. **SEO 与 SSR 降级**
   - 核心内容（标题、文案、CTA）必须在首次 HTML 渲染
   - 动效通过客户端水合激活，不影响 SEO 抓取
   - Open Graph / Twitter Card meta tags 完整配置

5. **资源加载优先级**
   - 首屏关键资源：Hero 区文字 + CTA + Logo
   - 延迟加载：下方 Section 的动效库、ReactBits 组件
   - 字体优化：font-display: swap，避免 FOIT/FOUT
   - 图片优化：Next.js Image 组件 + WebP + 懒加载

## Technical Stack Summary

### Core Technologies

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.1.6 | 前端框架（App Router + SSR） |
| React | 19.2.3 | UI 库 |
| TypeScript | 5.x | 类型系统 |
| Tailwind CSS | 4.x | 样式方案（CSS-first） |
| GSAP | 3.14.2 | 滚动动画 + SVG 动画 |
| ReactBits | latest | 粒子/光效等复杂动效 |
| lucide-react | 0.575.0 | 图标库 |
| next/font | 内置 | 字体优化 |

### Architecture Decisions

**渲染策略：** SSR（服务端渲染）
- Server Components 为默认
- 动效组件标记为 Client Components (`'use client'`)

**部署：** 平台无关
- 兼容 Vercel / Netlify / 自建服务器

**样式架构：**
- Tailwind 4 CSS-first 配置
- Design Tokens 在 `globals.css` 通过 `@theme` 定义
- 组件级自定义组件，无 UI 库依赖

**性能优化：**
- 首屏关键资源优先加载
- 动效库按需懒加载
- 移动端动效降级策略
- Next.js 自动优化（图片、字体、代码分割）

## Implementation Notes

**第一个 Story 应包含：**
1. 安装补充依赖（GSAP、ReactBits、lucide-react）
2. 配置 Tailwind Design Tokens（颜色、间距、字体）
3. 设置 GSAP + ScrollTrigger 基础配置
4. 创建基础组件结构（Button、SectionTag）

**设计原则 — 具象 UI 组件示意图：**
- 每个区块必须包含具象的 UI 组件示意图（浏览器窗口、对话框、仪表盘、通知面板等），而非纯文字描述
- 这些示意图作为开发阶段 GSAP/ReactBits 动效的锚点，开发时为其添加滚动触发动画
- 示意图应尽可能还原真实产品界面，让用户直观理解每个功能的实际体验

**架构已完成** — 技术栈明确，可直接进入 Epics & Stories 创建阶段。

## Page Content Structure

### 内容区块规划

**目标用户：** Alex（开发者/创业者/PM）— 厌倦工具切换，需要整合记忆与执行的 AI 助手

**转化目标：** 3-10% 注册率

---

#### 区块 1: Hero Section（首屏）

**目标：** 3 秒内让用户明白 LUCI 是什么，与他有什么关系

**内容：**
- 主标题：`"LUCI = See, Remember & Act"`
- 副标题：`"一个记住一切，然后自动把事情做了的个人 AI 助手"`
- 核心差异化（一句话）：`"不只是记录工具 — 是在对话中积累记忆、自动帮你做事的执行助手"`
- CTA：
  - 主要：注册云端版
  - 次要：下载本地版
- 可选视觉元素：产品演示动画或视频

---

#### 区块 2: 核心痛点（用户困境）

**目标：** 让用户产生共鸣 — "这就是我现在的状态！"

**内容：**
- 标题：`"厌倦了在工具间切换？"`
- 痛点列表（Before 状态）：
  - ❌ Notion 记笔记 → ChatGPT 问问题 → 录音软件开会 → 记忆分散、容易遗漏
  - ❌ 会议结束后手动整理笔记、提取 Action Items，浪费时间
  - ❌ 数据被各个平台锁定，无法自由迁移

**视觉方案：** 对比式卡片，左侧展示"工具切换混乱"，右侧展示"LUCI 一体化"

---

#### 区块 3: LUCI 的解决方案（After 状态）

**目标：** 展示 LUCI 如何解决这些痛点

**内容：**
- 标题：`"LUCI 如何工作"`
- 流程演示：
  1. **See（观察）** — 会议时自动录制视频、记录对话
  2. **Remember（记忆）** — 基于视频内容建立记忆库，提取关键信息
  3. **Act（执行）** — 自动调用 agent 完成任务（发邮件、创建文档、更新项目）
  4. **Notify（通知）** — 通过聊天软件通知你"已完成"

**视觉方案：** 时间线或流程图，配合图标/插画

---

#### 区块 4: 三大核心差异化

**目标：** 强化 LUCI 与竞品的本质区别

**内容：**
- **卡片 1 - 视频记忆能力**
  - 标题：视频记忆，不只是文本
  - 内容：录制会议、健身动作，LUCI 能理解视频内容并建立记忆库
  - 场景示例：CEO 开会后自动联系有空的开发人员 / 健身教练对比"之前 vs 现在"的姿势

- **卡片 2 - 全自动化执行**
  - 标题：自动执行，不只是记录
  - 内容：基于记忆库自动调用 agent 完成任务，无需手动操作
  - 与竞品对比：Limitless/Granola 只能记录 → LUCI 能执行

- **卡片 3 - 数据主权**
  - 标题：你的数据，你做主
  - 内容：云端托管（数据在你的 VM）或本地部署，基于开源 OpenClaw
  - 与竞品对比：ChatGPT 锁定数据 → LUCI 开放架构

**视觉方案：** 3 个并排卡片（玻璃拟态或新粗野风格）

---

#### 区块 5: 竞品对比表

**目标：** 直观展示 LUCI 的优势

**内容：** 功能对比表

| 功能 | Limitless | Granola | ChatGPT | LUCI |
|------|-----------|---------|---------|------|
| 视频记忆 | ❌ | ❌ | ❌ | ✅ |
| 自动执行任务 | ❌ | ❌ | ❌ | ✅ |
| 数据主权 | ❌ | ❌ | ❌ | ✅ |
| Skills 扩展 | ❌ | ❌ | 有限 | ✅ 无限 |
| 部署方式 | 云端 | 云端 | 云端 | 云端 + 本地 |

**视觉方案：** 对比表格，LUCI 列高亮（橙色/绿色）

---

#### 区块 6: 使用场景（Social Proof）

**目标：** 让用户想象自己使用 LUCI 的场景

**内容：**
- **场景 1 - 开发者（Alex）：**
  "会议后自动生成 Jira tickets，联系相关开发人员，我只需要确认"

- **场景 2 - 创业者：**
  "LUCI 记住所有客户对话，自动更新 CRM，提醒我跟进时机"

- **场景 3 - PM：**
  "产品会议录制后，LUCI 自动提取需求、生成 PRD 草稿"

**视觉方案：** 用户头像 + 引用卡片

---

#### 区块 7: 数据与信任

**目标：** 缓解用户的"担心被锁定"恐惧

**内容：**
- 统计数据：
  - 100% 数据主权 — 存储在你的 VM 上
  - 零配置 — 注册即可使用
  - ∞ Skills 扩展 — 电脑能干的都能干

- 技术信任标识：
  - 基于开源 OpenClaw
  - 数据格式开放
  - 支持自托管

**视觉方案：** 数字递增动画 + 技术图标

---

#### 区块 8: Final CTA（最终行动召唤）

**目标：** 推动转化（3-10% 目标）

**内容：**
- 标题：`"开始你的 AI 助手之旅"`
- 副标题：`"云端托管或本地部署，3 分钟即可开始"`
- CTA 按钮：
  - 主要：免费试用云端版（14 天）
  - 次要：下载本地版（开源免费）

- 信任元素：
  - "无需信用卡"
  - "随时取消"
  - "数据随时导出"

**视觉方案：** 大面积渐变背景（紫色/绿色）+ 突出 CTA 按钮

---

### 页面结构总结

1. **Hero** — 核心价值主张 + CTA
2. **痛点** — 用户困境（Before）
3. **解决方案** — LUCI 如何工作（After）
4. **三大差异化** — 视频记忆 + 自动执行 + 数据主权
5. **竞品对比** — 功能对比表
6. **使用场景** — 用户证言/场景描述
7. **数据与信任** — 统计数据 + 技术信任
8. **Final CTA** — 最终转化
