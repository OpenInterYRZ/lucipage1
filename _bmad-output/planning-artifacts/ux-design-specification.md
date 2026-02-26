---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
inputDocuments:
  - docs/prd.md
  - user-provided-product-vision
---

# UX Design Specification — LUCI Landing Page

**Author:** runze
**Date:** 2026-02-25

---

## Product Core (User-Confirmed)

**LUCI** — 全自动个人 AI 助手，通过视频记忆和长期记忆库实现"记住一切，自动把事做了"。

### 核心差异化
1. **视频记忆能力** — 不只是文本记录，还能录制会议、健身动作等视频，基于视频内容建立记忆库
2. **全自动化执行** — 基于记忆库（包括文档、交互方式、上下文）自动调用 agent 完成任务
3. **数据主权** — 记忆和配置在用户自己的 VM 上，基于开源 OpenClaw，数据不被平台锁定

### 五年愿景
让个人 AI 助手像邮箱一样普遍 — 每个人都有一个专属、私密、开放格式的 AI。

### 用户体验目标
让用户感受到"全自动化的便捷"和"量身定制记忆库的强大"。

---

## Executive Summary

### Project Vision

为 LUCI 创建一个单页产品落地页。LUCI 是全自动个人 AI 助手，核心主张："记住一切，自动把事做了"。落地页需要同时完成品牌展示和引导注册转化，视觉效果要酷炫、现代，对标 Wisperflow 官网的整体质感。

### Target Users

- **主要受众：非技术型专业人士** — CEO、PM、创业者、市场团队等忙碌人群
- **次要受众：技术用户** — 了解 Agent、VM 等概念，关注数据主权和开源
- **文案策略：分层表达** — 产品展示通俗易懂，技术架构部分保留专业术语

### Key Design Challenges

1. **平衡"酷炫"与"可信"** — 落地页既要视觉冲击力，又要让用户相信这是一个靠谱的产品
2. **抽象概念的可视化** — "视频记忆""双 Agent 架构""数据主权"这些概念需要直观展示，不能只靠文字
3. **双受众适配** — 非技术用户需要通俗理解价值，技术用户需要看到架构深度

### Design Opportunities

1. **动效/交互展示产品能力** — 用动画演示"会议 → 记忆 → 自动执行"的流程，比文字更有说服力
2. **视频记忆的差异化视觉** — 这是核心卖点，可以用视觉重点突出，形成记忆点
3. **酷炫的技术感视觉风格** — 暗色系 + 渐变 + 微动效，对标 Wisperflow 的科技感

## Core User Experience

### Defining Experience

落地页的核心体验是一个**分层递进的认知旅程**：从"3 秒理解是什么"到"2 分钟决定要注册"。

**核心目标动作：**
- 主 CTA：**"Get Started"（开始使用/注册）** — Hero 区 + 页面底部各出现一次
- 辅 CTA：**"See How It Works"（看它怎么工作）** — 滚动到流程演示区

**信息递进节奏：**

| 时间 | 用户获得的认知 | 对应区域 |
|------|-------------|---------|
| 3 秒 | "这是一个会记住一切、帮我做事的 AI 助手" | Hero 标题 |
| 15 秒 | "它跟 ChatGPT 不一样 — 有视频记忆，能自动执行，数据在我手里" | 三个核心差异化卡片 |
| 30 秒 | "原来是这样工作的" — 看到流程动画 | 流程演示区：会议→记忆→自动执行 |
| 1 分钟 | "这个记忆库好强大" — 看到记忆可视化 | 记忆库展示区：视频记忆、文档记忆、交互记忆 |
| 2 分钟 | "数据安全，技术靠谱" + "我要试试" | 架构/安全 + 底部 CTA |

**核心逻辑：先打动（这东西不一样）→ 再说服（它是怎么做到的）→ 最后转化（我要用）**

### Platform Strategy

- **Web 端为主** — Next.js + React + Tailwind CSS 构建
- **移动端适配** — 响应式设计，确保手机浏览体验完整
- **动效策略** — 桌面端完整动效体验，移动端适当简化以保证性能

### Effortless Interactions

- **3 秒理解** — Hero 区标题一句话传达核心价值，无需思考
- **滚动即叙事** — 用户只需向下滚动，信息自然递进，无需点击跳转
- **视觉先行** — 抽象概念通过动画和可视化传达，而非长段文字

### Critical Success Moments

三个关键视觉焦点（落地页的"Wow Moment"）：

1. **流程动画** — "会议结束 → 自动执行任务"的完整流程动画，让用户直观感受全自动化
2. **视频记忆演示** — 展示 LUCI 如何从视频中提取和建立记忆，体现差异化能力
3. **记忆库全景可视化** — 展示所有记忆（视频、文档、交互）的汇聚，传达"量身定制记忆库的强大"

### Experience Principles

1. **渐进式说服** — 信息分层递进，每一屏解决一个认知问题，不一次性轰炸
2. **视觉即论证** — 用动画和可视化替代文字说教，让产品能力"看得见"
3. **响应式优先** — 桌面端酷炫体验，移动端流畅可用，不因适配牺牲核心信息
4. **双轨文案** — 产品展示通俗直白，技术架构保留专业深度，两类用户各取所需

## Desired Emotional Response

### Primary Emotional Goals

- **未来感** — "这个产品来自未来"，视觉和交互都传递前沿科技感
- **掌控感** — "我的数据、我的 AI、我的记忆库"，用户感到拥有和掌控
- **惊艳** — "这个我没见过"，视频记忆和全自动执行带来的差异化冲击

### Emotional Journey Mapping

| 阶段 | 用户感受 | 对应区域 |
|------|---------|---------|
| 初见 Hero | 好奇 + 未来感 — "这东西看起来不一样" | 亮色主题 Hero + 一句话标题 |
| 看到差异化 | 惊讶 + 兴奋 — "视频记忆？这个我没见过" | 三个核心差异化卡片 |
| 看流程动画 | 震撼 + 渴望 — "会议完自动帮我干活？我也想要" | 自动化流程演示 |
| 看记忆库可视化 | 信任 + 掌控感 — "它真的能记住这么多东西" | 记忆库全景 |
| 看架构/安全 | 安心 + 专业认可 — "数据在我自己手里，靠谱" | 技术架构区 |
| 底部 CTA | 紧迫感 + 行动欲 — "不想错过，现在就试" | 注册引导 |

### Micro-Emotions

- **信任 > 怀疑** — 通过专业视觉设计和架构展示建立可信度
- **兴奋 > 无聊** — 动效和可视化保持用户注意力
- **清晰 > 困惑** — 分层信息递进，不一次性轰炸

### Design Implications

- 未来感 → **亮色主题** + 精致渐变 + 流畅微动效，干净而有科技感
- 掌控感 → 记忆库可视化 + 数据主权架构图，让用户"看到"自己的 AI
- 惊艳 → 流程动画 + 视频记忆演示的视觉冲击，区别于竞品的静态页面

### Emotional Design Principles

1. **亮色科技感** — 亮色模式为主，通过精致配色和渐变传达未来感，不靠暗色堆砌
2. **动效即情绪** — 关键交互动画不是装饰，是情感触发器，每个动效都有情绪目的
3. **信任来自细节** — 专业的排版、精准的间距、高质量的可视化，细节传递"这个团队靠谱"
4. **克制的紧迫感** — CTA 有引导力但不焦虑，用价值驱动而非压力驱动转化

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**主要参考：Wispr Flow (wisprflow.ai)**

Wispr Flow 是核心视觉参考。其设计哲学 — "Clean Minimalism with Motion" — 非常适合 LUCI：

- **亮色为主** — 白色/米白 (#FFFFEB) 背景，干净清爽
- **极简配色** — 仅 5-6 色：深色文字 + 深青绿 (#034f46) + 蓝色 (#4d65ff) 点缀
- **不用渐变** — 纯色 + 阴影制造层次，保持高级感
- **动画即信息** — 每个动画都在传达产品能力（语音→文字实时转换演示）
- **SVG 曲线动画** — 随滚动绘制的 SVG 路径，精致流畅
- **无限滚动 Marquee** — 应用 logo、语言旗帜持续滚动，制造节奏感
- **GSAP + ScrollTrigger** — 内容随用户滚动渐入
- **设备 Mockup 错位叠放** — 多设备截图制造 3D 空间感
- **吸顶导航** — 动态隐藏/显示，滚动时收起，回滚时出现

**页面结构参考：**
导航栏（吸顶）→ 公告横幅（Marquee）→ Hero（大标题+CTA+产品动画）→ 速度对比 → 应用兼容 Logo 滚动 → 客户社交证明 → 功能 Tab 展示 → 功能细节网格 → 多设备展示 → 用户推荐 → 案例卡片 → 底部 CTA → Footer

**辅助参考：Granola.ai**
- 大留白 + 精致色彩点缀的亮色高级感
- 大号标题（68px+）驱动叙事
- Marquee 动画（多方向滚动）
- 产品界面 Mockup 嵌入展示

### Transferable UX Patterns

**导航模式：**
- 吸顶导航 + 滚动隐藏/显示 — 节省屏幕空间，需要时随时可达
- 公告横幅 Marquee — 可用于产品动态、新功能发布

**交互模式：**
- GSAP ScrollTrigger 滚动动画 — section 内容随滚动渐入，制造层次感
- SVG 路径绘制动画 — 可用于"会议→记忆→执行"流程线的绘制
- Marquee 无限滚动 — 可用于展示记忆类型、使用场景、集成平台

**视觉模式：**
- 大标题叙事 — 每个 section 一句大字做引导，辅以副标题和视觉
- 设备 Mockup 错位叠放 — LUCI 桌面端 + 移动端界面展示
- 纯色背景交替 — 白色/米白交替，section 之间自然分隔

### Anti-Patterns to Avoid

- **过度渐变** — 容易显得廉价，用纯色+阴影替代
- **纯文字 Feature 列表** — 用可视化和动画替代
- **通用 Stock 插图** — 用产品 Mockup 和自定义动画替代
- **过多 CTA** — 每屏只有一个明确动作，不造成选择焦虑
- **重型视频嵌入** — 用轻量 SVG/Canvas 动画替代，保证加载速度

### Design Inspiration Strategy

**采用：**
- Wispr Flow 的亮色极简 + 动效驱动叙事的整体风格
- GSAP + ScrollTrigger 滚动动画技术方案
- Marquee 无限滚动用于社交证明和场景展示
- 吸顶导航 + 大标题叙事的页面结构

**适配：**
- Wispr 的语音演示动画 → 改为 LUCI 的"记忆→执行"流程动画
- Wispr 的速度对比 → 改为 LUCI 的记忆库可视化全景
- Wispr 的应用兼容展示 → 改为 LUCI 的集成平台和使用场景展示

**避免：**
- Wispr 偏工具感的视觉 → LUCI 需要更多"AI 智能感"
- 过于密集的信息网格 → LUCI 保持大留白，每屏聚焦一个主题

## Design System Foundation

### Design System Choice

**Tailwind CSS + 自定义组件 + GSAP + ReactBits**（无 UI 组件库）

落地页需要高度视觉定制和复杂动效，UI 库（MUI、Ant Design 等）反而是限制。采用纯 Tailwind 自定义组件 + 动效库的组合。

### Rationale for Selection

1. **已有 Tailwind CSS** — 不引入额外 UI 库，减少样式冲突
2. **落地页组件少** — Nav、Hero、Card、Button、Footer 等自己写更灵活
3. **视觉高度定制** — UI 库的默认样式会阻碍对标 Wispr Flow 的酷炫感
4. **动效需要直接 DOM 操作** — GSAP + ReactBits 需要灵活控制，UI 库增加复杂度

### Implementation Approach

**技术选型清单：**

| 职责 | 技术 | 用途 |
|------|------|------|
| 样式 | Tailwind CSS | 全局样式、响应式、间距、颜色 |
| 基础动效 | GSAP + ScrollTrigger | 滚动触发动画、SVG 路径绘制、元素渐入 |
| 复杂动态效果 | ReactBits | 粒子效果、3D 变换、高级交互动画等酷炫效果 |
| 字体 | Inter / Geist | 现代无衬线，类似 Wispr Flow 风格 |
| 图标 | Lucide React | 轻量、风格统一 |
| 框架 | Next.js + React | 已有，SSR + 路由 |

### Customization Strategy

- **Design Tokens** — 在 `tailwind.config` 中定义品牌色、字体、间距等变量
- **组件粒度** — 按 section 拆分组件（HeroSection、FeaturesSection 等），不做过度抽象
- **动效分层** — 基础过渡用 Tailwind transition，滚动动画用 GSAP，复杂炫酷效果用 ReactBits
- **响应式策略** — Tailwind 断点系统，移动端适当简化动效保证性能

## 2. Core User Experience (Detailed)

### 2.1 Defining Experience

**"滚动即故事"** — 用户向下滚动，LUCI 的能力通过动画一步步展开，从好奇到震撼到想注册。

类比：
- Apple 产品页："滚动看产品在你面前展开"
- Wispr Flow："滚动看语音变文字的魔法"
- LUCI："滚动看 AI 如何记住一切并替你做事"

### 2.2 User Mental Model

用户浏览 AI 产品落地页时的心理：
- **来之前**："又一个 AI 产品？跟 ChatGPT 有什么不同？"（带着怀疑）
- **期望看到**：快速理解差异化 → 看到具体场景 → 确认可信度 → 决定是否试用
- **现有方案痛点**：大部分 AI 落地页靠文字堆功能列表，没有"看到它工作"的直观感

### 2.3 Success Criteria

1. **滚动到流程动画区时** — 用户停下来仔细看（停留 > 5 秒），而不是快速划过
2. **看完记忆库可视化后** — 用户理解"这不只是聊天机器人"
3. **到达底部 CTA 时** — 用户已经被说服，点击"Get Started"是自然动作

### 2.4 Novel UX Patterns

**采用成熟模式：**
- 滚动叙事（Apple/Wispr 已验证）
- Hero + CTA 模式（行业标准）
- 社交证明（Logo + 推荐语）

**创新点：**
- **记忆库可视化** — 动态展示记忆节点的连接和增长，而非静态截图
- **"会议→执行"流程动画** — 动画演示实际发生的事，而非流程图
- **ReactBits 炫酷效果** — 粒子/光效等增强 AI 智能感，区别于普通 SaaS 落地页

### 2.5 Experience Mechanics

```
1. 进入页面 → Hero 加载动画（ReactBits 粒子/光效背景）
2. 看到大标题 + CTA → 3 秒内理解核心价值
3. 向下滚动 → 三个差异化卡片依次渐入（GSAP ScrollTrigger）
4. 继续滚动 → 流程动画触发播放：会议 → 记忆提取 → Agent 自动执行
5. 继续滚动 → 记忆库全景可视化展开（ReactBits 动态效果）
6. 继续滚动 → 架构/安全简图 + 社交证明
7. 到达底部 → CTA 再次出现，引导注册
```

## Visual Foundation (Step 8)

### Color System — 已确定

**核心配色方案：暗色 + 橙 + 紫/绿区块混搭**

深色底色为主，橙色品牌色只用于关键 CTA，不同 section 用紫色渐变和深绿色做区块背景，形成视觉节奏。

#### 色板

| 角色 | 色值 | 用途 |
|------|------|------|
| **页面底色** | `#1A1A1A` | 全局背景 |
| **卡片底色** | `#262626` | 卡片、内容容器 |
| **品牌橙** | `#EF6915` | 仅关键 CTA 按钮（"Get Started"），橙色 logo，Hero 强调文字 |
| **紫色（左）** | `#785DE1` | 紫色区块、Tag |
| **紫色（右）** | `#747AF1` | 紫色渐变终点 |
| **紫色渐变** | `linear-gradient(270deg, #785DE1 0.24%, #747AF1 99.87%)` | "How It Works"等 section 背景 |
| **紫色浅底** | `#2D2545` | 紫色相关的 Tag/Badge 底色 |
| **深绿** | `#166534` | "Memory Vault"等 section 背景，点缀色 |
| **深绿浅底** | `#1A3D2A` | 绿色区块内的子卡片底色 |
| **主文字** | `#F5F5F5` | 标题、正文 |
| **副文字** | `#A3A3A3` | 描述、说明文字 |
| **边框** | `#333333` | 卡片边框、分隔线 |

#### 配色规则

1. **橙色克制使用** — 只用于品牌 logo、Hero 强调文字、主 CTA 按钮。不用于装饰
2. **导航栏** — 只有橙色 logo + 黑白文字 + 白色描边按钮，不出现紫色/绿色
3. **区块交替** — 深色底 → 紫色渐变底 → 深色底 → 深绿底 → 深色底，形成视觉节奏
4. **按钮层级** — 主 CTA 用橙色实心，次要按钮用白色描边，紫色渐变用于特定区块内
5. **暗色与亮色搭配** — 整体为暗色基调，但某些 feature 区块可以用紫色、深绿色做亮色区块

#### 参考测试页

测试页路径：`/theme-test` — 最后一个主题「暗色 + 橙 + 紫/绿区块混搭」即为最终确定方案

## Design Direction Decision (Step 9)

### 选定方向

**暗色科技感 + 区块撞色叙事**

暗色底色为基调，通过紫色渐变和深绿色区块交替穿插，形成视觉呼吸节奏。橙色品牌色极度克制，只在 logo 和关键 CTA 出现。整体感受：高级、沉稳、有科技感，同时区块撞色打破单调。

### 页面结构

| # | Section | 背景色 | 核心内容 |
|---|---------|--------|---------|
| 1 | **Nav（吸顶）** | `#1A1A1A` | 橙色 logo + 白色导航文字 + 白色描边 Sign In 按钮 |
| 2 | **Hero** | `#1A1A1A` | 大标题（白色 + 橙色强调）+ 副标题 + 橙色主 CTA + 描边次 CTA |
| 3 | **三大差异化** | `#262626` 卡片 | Video Memory / Auto Execution / Data Sovereignty 三张卡片 |
| 4 | **How It Works** | 紫色渐变 | 四步流程：会议结束 → 记忆提取 → Agent 执行 → 用户确认 |
| 5 | **Memory Vault** | `#166534` 深绿 | 记忆库可视化：视频记忆、文档、交互记录 |
| 6 | **产品演示** | `#1A1A1A` | 桌面端产品 Mockup / 功能截图展示 |
| 7 | **技术架构/安全** | `#262626` 卡片 | 双 Agent 架构简图 + 数据主权说明 |
| 8 | **社交证明** | `#1A1A1A` | 用户场景 Marquee / Logo 展示 |
| 9 | **底部 CTA** | `#0D0D0D` | 最终转化："Ready to Have an AI That Remembers?" + 橙色 CTA |
| 10 | **Footer** | `#1A1A1A` | 链接、版权 |

### 设计理念

1. **区块呼吸节奏** — 暗色底 → 紫色渐变 → 暗色底 → 深绿 → 暗色底，每个彩色区块承载一个关键卖点
2. **滚动叙事** — 用户向下滚动，信息分层递进，GSAP ScrollTrigger 驱动内容渐入
3. **橙色 = 行动** — 橙色只出现在需要用户行动的地方（CTA 按钮），强化品牌与行动的关联
4. **大标题引导** — 每个 section 一句大字，用户 3 秒内理解该区块主题

## User Journey Flow (Step 10)

### 落地页用户旅程

这是一个单页落地页，用户旅程即为**滚动浏览旅程**：

```
入口（搜索/广告/分享链接）
  │
  ▼
Nav + Hero — 3 秒理解核心价值
  │ "记住一切，自动把事做了"
  │ 选择：[Get Started] 或继续滚动
  │
  ▼
三大差异化卡片 — 15 秒理解"跟 ChatGPT 有什么不同"
  │ Video Memory / Auto Execution / Data Sovereignty
  │
  ▼
How It Works（紫色区块）— 30 秒看完流程
  │ 会议结束 → 记忆提取 → Agent 执行 → 用户确认
  │ GSAP 动画演示，用户停下来看
  │
  ▼
Memory Vault（绿色区块）— 1 分钟理解记忆库
  │ 视频记忆 + 文档 + 交互记录 的可视化
  │ ReactBits 动态效果增强 AI 智能感
  │
  ▼
产品演示 — 看到真实产品界面
  │ 桌面端 Mockup，建立产品真实感
  │
  ▼
技术架构/安全 — 建立信任
  │ 双 Agent 架构 + 数据在用户自己的 VM
  │ 技术用户在这里得到满足
  │
  ▼
社交证明 — 强化信任
  │ 使用场景/合作伙伴 Logo
  │
  ▼
底部 CTA — 转化
  │ [Get Started Free] — 橙色主按钮
  │ [Book a Demo] — 描边次按钮
  │
  ▼
Footer
```

### 关键转化节点

| 节点 | 位置 | CTA | 目标 |
|------|------|-----|------|
| **首次 CTA** | Hero | "Get Started Free"（橙色）| 高意向用户直接注册 |
| **辅助 CTA** | Hero | "See How It Works"（描边）| 低意向用户继续浏览 |
| **最终 CTA** | 底部 | "Get Started Free"（橙色）| 浏览完毕后转化 |
| **次要 CTA** | 底部 | "Book a Demo"（描边）| 企业用户预约演示 |

## Component Strategy (Step 11)

### 组件清单

落地页为单页，组件精简，按 section 拆分：

| 组件 | 类型 | 技术 | 说明 |
|------|------|------|------|
| `Navbar` | 布局 | Tailwind + GSAP | 吸顶导航，滚动隐藏/显示 |
| `HeroSection` | 区块 | Tailwind + ReactBits | 大标题 + CTA + 背景粒子/光效 |
| `FeatureCard` | 卡片 | Tailwind | 差异化功能卡片，GSAP 渐入 |
| `HowItWorks` | 区块 | Tailwind + GSAP | 紫色渐变背景，四步流程动画 |
| `MemoryVault` | 区块 | Tailwind + ReactBits | 深绿背景，记忆库可视化 |
| `ProductShowcase` | 区块 | Tailwind + GSAP | 产品 Mockup 展示 |
| `ArchitectureSection` | 区块 | Tailwind | 双 Agent 架构简图 |
| `SocialProof` | 区块 | Tailwind + CSS | Marquee 滚动 / 推荐语 |
| `CTASection` | 区块 | Tailwind | 底部转化区 |
| `Footer` | 布局 | Tailwind | 页脚 |
| `Button` | 基础 | Tailwind | 三种变体：橙色实心、描边、紫色渐变 |
| `SectionTag` | 基础 | Tailwind | 区块标签/Badge |
| `Marquee` | 动效 | CSS/ReactBits | 无限滚动组件 |

### Button 变体

```
主 CTA     → 橙色实心 (#EF6915)，白色文字，圆角 full
次要 CTA   → 白色描边 (#555 border)，白色文字，圆角 full
紫色按钮   → 紫色渐变 (785DE1→747AF1)，白色文字，用于紫色区块内
```

### 实现优先级

**P0 — 核心结构：** Navbar、HeroSection、FeatureCard、CTASection、Footer、Button
**P1 — 关键内容：** HowItWorks、MemoryVault、ProductShowcase
**P2 — 增强体验：** ArchitectureSection、SocialProof、Marquee

## UX Consistency Patterns (Step 12)

### 按钮层级

| 层级 | 样式 | 用途 | 出现位置 |
|------|------|------|---------|
| 主按钮 | 橙色实心 `#EF6915` | 核心转化动作 | Hero CTA、底部 CTA |
| 次按钮 | 白色描边 `border #555` | 辅助动作 | Hero 次 CTA、底部次 CTA、Nav Sign In |
| 区块按钮 | 紫色渐变 | 区块内动作 | How It Works 等紫色区块内 |
| 点缀按钮 | 深绿实心 `#166534` | 仅在绿色区块 | Memory Vault 区块内 |

### 间距系统

- Section 间距：`py-20`（80px）— 每个大区块上下留白
- 卡片间距：`gap-5`（20px）— 卡片网格间隔
- 内容最大宽度：`max-w-6xl`（1152px）— 居中内容区
- Section 内边距：`px-8`（32px）— 两侧留白

### 排版层级

| 层级 | 字号 | 字重 | 颜色 | 用途 |
|------|------|------|------|------|
| H1 | 56-64px | Bold | `#F5F5F5` | Hero 大标题（仅一处） |
| H2 | 32-40px | Bold | `#F5F5F5` | Section 标题 |
| H3 | 18-20px | Bold | `#F5F5F5` | 卡片标题 |
| Body | 16-18px | Regular | `#A3A3A3` | 正文、描述 |
| Small | 14px | Medium | `#A3A3A3` | 导航、标签、Badge |
| 强调 | 同级字号 | Bold | `#EF6915` | Hero 中的橙色强调词 |

### 动效规则

| 类型 | 技术 | 触发方式 | 持续时间 |
|------|------|---------|---------|
| Section 渐入 | GSAP ScrollTrigger | 滚动到视口 | 0.6-0.8s |
| 卡片依次渐入 | GSAP stagger | 滚动到视口 | 0.4s 间隔 |
| Hero 背景 | ReactBits | 页面加载 | 持续 |
| 记忆库可视化 | ReactBits | 滚动到视口 | 持续 |
| 流程线绘制 | GSAP SVG | 滚动到视口 | 1-2s |
| Nav 隐藏/显示 | GSAP | 滚动方向 | 0.3s |
| Marquee 滚动 | CSS animation | 持续 | infinite |

### 反馈模式

- **Hover** — 按钮 opacity 0.9 + 微缩放 scale(1.02)，卡片边框高亮
- **Focus** — 2px 橙色 outline offset，键盘可达
- **加载** — 骨架屏 shimmer 效果（暗色调适配）

## Responsive Design & Accessibility (Step 13)

### 响应式策略

**桌面优先设计，移动端适配**（落地页主要在桌面浏览）

| 断点 | 范围 | 布局变化 |
|------|------|---------|
| `sm` | < 640px | 单列布局，Nav 汉堡菜单，卡片堆叠，H1 降至 36px |
| `md` | 640-1024px | 两列网格，Nav 完整显示，H1 降至 48px |
| `lg` | > 1024px | 三列/四列网格，完整动效，H1 56-64px |

### 移动端适配要点

1. **Nav** — 汉堡菜单，展开后全屏遮罩，暗色背景
2. **Hero** — 标题字号缩小，CTA 按钮全宽堆叠
3. **Feature 卡片** — 单列堆叠，保持卡片完整内容
4. **How It Works** — 四步改为两行两列或纵向排列
5. **Marquee** — 保持滚动，缩小元素间距
6. **动效** — 移动端简化：关闭 ReactBits 粒子效果，保留 GSAP 基础渐入

### 无障碍

- **WCAG AA 级别** — 符合行业标准
- **色彩对比** — `#F5F5F5` on `#1A1A1A` = 16.7:1（超过 4.5:1 要求）
- **键盘导航** — Tab 可达所有交互元素，焦点指示器清晰
- **语义 HTML** — `<nav>`, `<main>`, `<section>`, `<footer>` 结构化
- **图片 alt** — 所有 Mockup 和装饰图提供描述性 alt 文字
- **触摸目标** — 按钮最小 44x44px
- **Skip Link** — 页面顶部提供"跳到主内容"链接
