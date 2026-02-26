# 核心价值主张

<aside>
🎯 LUCI = See, Remember & Act

一句话：LUCI 记住一切，然后帮你把事情做了。

</aside>

## 即刻价值流程（First Wow Moment）

会议结束 → REMEMBER（自动录制→转录→摘要+Action Items）→ ACT（Agent自动执行）→ REVIEW（用户确认）→ 🎉 完成

---

# 一、愿景

LUCI 是一个结合了全天候录制、长期记忆和自主 Agent 能力的个人 AI 助手。基于Memories + OpenClaw 构建，LUCI 通过视频记忆整合、主动任务执行和企业级安全控制实现差异化。

- 目标用户：非技术型专业人士 — CEO、PM、市场团队
- 核心价值：「一个记住一切并能把事情做好的 AI 员工」

---

# 二、架构 — 双 Agent 系统

## 本地 Agent（只读）

- 运行在用户设备上
- 索引本地文件、截图、录音 和录屏
- 无执行权限 — 纯观察与索引

## 云端 Agent（执行）

- 运行在按需 VM 中
- 利用本地索引作为上下文执行任务
- 完整工具访问：浏览器、API、文件操作

---

# 三、任务可视化

目标：用户应始终了解 AI 在做什么、进展到哪里。

- 实时子 Agent 进度追踪
- 任务树视图 — 父任务拆分为子任务
- 状态指示：排队中 → 执行中 → 已完成 / 失败

---

# 四、Agent 团队可视化

当多个 Agent 协作时，用户应能看到团队结构和通信流。

- Agent 拓扑视图 — 哪些 Agent 活跃、角色、依赖关系
- 角色标签：编排者、研究员、编码者、审核者等

---

# 五、安全可视化与控制

用户必须有掌控感。精确展示 AI 能访问什么、正在做什么。

## 安全仪表盘

- 数据访问日志 — Agent 访问了什么文件/API、何时访问
- 一键数据删除 — 删除特定任务/对话的所有痕迹
- 审计追踪 — 可导出的所有 Agent 操作历史

---

# 六、Safe Skills 框架

建立类似苹果 App Store 的 Skills 安全审核生态，从「早期安卓」升级为受控、可信的 Skills 市场。

## Skills 安全分级

- 🟢 官方认证 Skills：由 LUCI 团队开发或深度审核，最高信任级别
- 🟡 社区审核 Skills：第三方开发者提交，通过审核流程
- 🔴 未审核 Skills：开发者模式下可安装，强制沙箱隔离

---

# 七、记忆管理

## 记忆架构

- 短期记忆：当前对话上下文、活跃任务状态、近期观察
- 长期记忆：精选事实、偏好、关系、会议摘要、决策日志
- 集中数据存储：所有用户数据存储在持久化数据库中

---

# 八、按需 VM 供应

## VM 模式

- 🖥️ 浏览器模式：轻量 VM，用于网络调研、表单填写
- ⚙️ desktop模式：完整桌面环境，用于文档编辑、应用自动化
- 🔥 计算模式：高性能 VM + GPU，用于视频处理、ML 推理

---

# 九、产品体验

## 入驻流程

1. 简单注册
2. 连接数据源（Google、日历等）
3. 全天候录制设置（可选）
4. 第一个任务 — Agent 展示能力

## LUCI 五大核心差异化

1. 唯一的「全栈 AI 助手」：录制+索引+记忆+执行+硬件
2. Desktop First → Hardware Second（苹果路径）
3. Memories.ai 视频理解技术（技术护城河）
4. Safe Skills 生态（平台效应）
5. 双 Indexer 架构（数字+物理世界）

# 十五、竞品分析与差异化

市场上要么只做记录（Limitless），要么只做执行（OpenClaw），要么只做笔记（Granola），要么只做硬件（Humane）。LUCI 是唯一把索引+记忆+执行+硬件整合成一个产品的。

## 直接竞争对手

- Limitless（原 Rewind AI）：$35M 融资，只做记录不做执行
- Granola：只做会议笔记，没有 Agent
- Tab（Avi Schiffmann）：只有音频，没有 Desktop 整合
- Screenpipe：开源工具，没有产品化
- Humane AI Pin / Rabbit R1：都失败了（硬件先行，AI 能力跟不上）

## LUCI 五大核心差异化

1. 唯一的「全栈 AI 助手」：录制+索引+记忆+执行+硬件
2. Desktop First → Hardware Second（苹果路径）
3. Memories.ai 视频理解技术（技术护城河）
4. Safe Skills 生态（平台效应）
5. 双 Indexer 架构（数字+物理世界）

## 一、Phase 1 目标

交付一个可以真正使用的 LUCI Desktop 产品。目标用户：Founders / Sales。成功标准：产品稳定可用，不是 demo。

核心 Features（5个）：

1. 电脑端 App — 实时语音对讲 + 录屏 + 端侧模型
2. Task 可视化 — WebView 里的任务仪表盘
3. 安全权限可视化 — 用户掌控 AI 的访问和执行
4. Connectors — 第三方工具接入
5. 基础记忆加强 — 让 AI 真正「记住」

## 四、里程碑

✅ W1：方案 + 地基

- 每个 Feature Owner 输出 PRD
- 基础设施就位（app 骨架、Agent 引擎、DB、CI/CD）

✅ W2：核心链路

- 语音对讲跑通 + 录屏 → 转录 → 摘要跑通
- Task UI 能展示状态 + 第一个 Connector 接通

✅ W3：功能完整

- 5 个 Feature 全部功能完成
- 安全权限 UI + 记忆搜索 + Daily Review 可用

✅ W4：打磨上线

- 全员联调 + Bug Fix + 测试 + 性能优化 → 产品上线 🚀
