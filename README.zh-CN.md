# Awesome DeepSeek Harness 插件

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![浏览市场](https://img.shields.io/badge/浏览-DSH%20插件市场-blue?style=flat-square)](https://dshmarketplace.dev/zh)
[![插件数量](https://img.shields.io/badge/插件-8642+-success?style=flat-square)](https://dshmarketplace.dev/zh)
[![欢迎PR](https://img.shields.io/badge/PRs-欢迎-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

精选的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件列表，由 [DSH 插件市场](https://dshmarketplace.dev/zh)维护。

这是我们独立维护的推荐列表，与[上游注册表](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 是两个项目。在这里提交 PR 是申请加入推荐列表，不会直接触发市场收录。

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 为什么有这个列表

**DSH 插件市场**索引了完整的 DeepSeek Harness 插件生态 — 目前已收录 8642+ 个插件。

这个 **Awesome 列表**是精选子集：我们人工挑选值得优先尝试的插件。可以理解为"你应该安装的插件"而不是"所有存在的插件"。

---

## 🚀 开始使用

### 浏览完整市场

访问 **[dshmarketplace.dev](https://dshmarketplace.dev/zh)** 探索全部 8642+ 个已索引插件，支持：
- 高级搜索和筛选
- 安装验证状态
- 详细插件页面
- 分类和排行榜

### 在 DSH 内安装市场插件

将市场作为 DSH 插件安装，实现应用内浏览和安装：

```bash
dsh plugin --profile web add dshmarketplace-plugin
```

然后通过以下方式访问：
- DSH 中的 `/store` 命令
- 设置 → 插件 → 浏览商店
- 使用 Agent 搜索和安装插件

---

## 📦 入门套装

推荐新用户优先安装的核心插件：

- [dsh-market](https://github.com/dsh-market/dsh-market) — 在 DeepSeek Harness 设置页内浏览、搜索并安装社区插件，支持分类筛选、一键更新与停用，以及主题切换与配置备份。 ★3.2k · [详情](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。 ★3.4k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — 让纯文本模型处理视觉任务：粘贴图片后自动切换到 Vision Toolkit 变体，支持图片问答、多图比较、长截图 OCR、截图还原前端 UI、元素定位与像素对比。默认无需 API Key——图片经作者自建的免费服务处理，每台机器每天 100 张；也可改为指向自己的服务商。 ★0.9k · [详情](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [engramory](https://github.com/tinqiao-oss/engramory) — 把 Engramory 策展式记忆纪律做成可安装插件（[npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)）：通过 `ctx.tools.guard()` 对 `MEMORY.md` 索引施加确定性的 200 行 / 25KB 上限（增长即拒、缩小的重写一律放行），并把协议注册为运行时 skill。记忆库是纯 markdown、一条事实一个文件，与 Claude Code、Codex、Kiro、OpenClaw 共用。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams 多智能体团队。 ★1.3k · [详情](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [treg](https://github.com/superdesigndev/treg) — 给 Agent 的工具目录：按「要做的事」检索约 2,600 个外部接口（SEO 与 SERP、外链、社交、人物与公司信息补全、广告库、抓取），查看参数与单次调用价格后直接调用，凭据由服务端注入。附带技能，MCP 行在未设置 TREG_TOKEN 前保持禁用。 ★1.2k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.8k
- [modlens](https://github.com/liustack/modlens) — 为纯文本模型架起视觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。 ★3.9k · [详情](https://dshmarketplace.dev/plugins/liustack-modlens)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。 ★2.8k · [详情](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [Aegis](https://github.com/GanyuanRan/Aegis) — 面向编码 Agent 的软件工程方法包，提供基线优先规划、系统化调试、提示词卫生、完成前验证，以及修复/退役双轨跟踪技能。 ★1.2k · [详情](https://dshmarketplace.dev/plugins/ganyuanran-aegis)

---

## 📑 分类

### UI & Experience

- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。 ★3.4k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。 ★2.8k · [详情](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — Codex 风格的 `@file` 文件引用，输入框里直接搜索并引用工作区文件。 ★0.5k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-at-file)
- [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — DeepSeek Harness 的终端 UI（TUI）。 ★0.3k · [详情](https://dshmarketplace.dev/plugins/huiliyi37-dsh-tianshu-tui)
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览与沙箱渲染。 ★0.3k · [详情](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-visualize)
- [plugin-effort-slider](https://github.com/mrSutivu/plugin-effort-slider) — 与模型选择器连为一体的带刻度推理强度滑杆，位于输入框内，支持主题变量与中英法三语。 ★0k
- [dsh-code-ui](https://github.com/sogoodayo/dsh-code-ui) — Cursor 风格的 AI 代码编辑器工作台插件（DSH）：文件树、多标签页编辑、引用/备注/翻译、内嵌 AI 输入框、语法高亮 ★0k
- [dsh-just-chat](https://github.com/exoticknight/dsh-just-chat) — 为 DeepSeek Harness 提供一键原生对话入口，每次创建独立工作区和会话。

### Models & Providers

- [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) — 在 Workspace Write 与 Full access 之间增加 Auto 权限档：日常操作留在官方 workspace-write 沙箱内，由当前会话模型复核升权与破坏性调用，精确的越界访问按次放行一次，意图不明时询问，命中关键路径则拒绝。 ★0.2k
- [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — 基于 AnySearch 的实时网页与垂直搜索插件，为 DeepSeek Harness 提供搜索工具。 ★0.4k
- [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness ★0.1k
- [dockyard-dsh](https://github.com/AITabby/dockyard-dsh) — A macOS-only native account-pool and provider plugin for DeepSeek Harness. ★0.1k
- [dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) — 非官方 Command Code 模型接入插件：注册 `commandcode` 路由，带实时模型目录与推理强度支持。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/mars-sea-dsh-commandcode-provider)

### Memory

- [engramory](https://github.com/tinqiao-oss/engramory) — 把 Engramory 策展式记忆纪律做成可安装插件（[npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)）：通过 `ctx.tools.guard()` 对 `MEMORY.md` 索引施加确定性的 200 行 / 25KB 上限（增长即拒、缩小的重写一律放行），并把协议注册为运行时 skill。记忆库是纯 markdown、一条事实一个文件，与 Claude Code、Codex、Kiro、OpenClaw 共用。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 ★0.3k
- [dsh-context](https://github.com/bowenliang123/dsh-context) — DSH 上下文洞察面板：Context 仪表盘 + /context命令 + Context 浏览器，查看 Context的分类组成、内容详情、演进趋势、压缩/注入事件、统计等一站式 Context 全生命周期管理。 ★1.3k · [详情](https://dshmarketplace.dev/plugins/bowenliang123-dsh-context)
- [dsh-noema](https://github.com/ZSeven-W/dsh-noema) — 为 DSH Agent 提供长期记忆——可检索、可检视的持久记忆，带回忆、搜索、浏览与知识图谱工具，支持从十个其他 AI 编码工具导入记忆，并附设置页。 ★0.1k
- [Co-Engram](https://github.com/Co-Engram/Co-Engram) — 自进化团队记忆，以纯 Markdown 存于 Git：原生 Cordis 插件注册 38 个裸名记忆工具，并按每次组装动态注入 prompt-signals 段；含 RPE 强化、衰减与睡眠巩固；与 Claude Code（MCP）、OpenClaw 宿主共享同一数据仓；已对 DSH 0.1.0-rc.6 实测。 ★0k

### Tools & Capabilities

- [treg](https://github.com/superdesigndev/treg) — 给 Agent 的工具目录：按「要做的事」检索约 2,600 个外部接口（SEO 与 SERP、外链、社交、人物与公司信息补全、广告库、抓取），查看参数与单次调用价格后直接调用，凭据由服务端注入。附带技能，MCP 行在未设置 TREG_TOKEN 前保持禁用。 ★1.2k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [dsh-browser](https://github.com/Lum1104/dsh-browser) — Chrome 侧边栏扩展，让 DSH 直接操控你的浏览器，无需视觉能力。 ★0.6k · [详情](https://dshmarketplace.dev/plugins/lum1104-dsh-browser)
- [notes](https://github.com/zhaoolee/notes) — 将 DSH 对话导出为锤子便签风格 PNG，或在配置的账号工作区中新建和更新 Markdown 便签。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/zhaoolee-notes)
- [modsearch](https://github.com/liustack/modsearch) — 纯文本 agent 的联网搜索桥：搜索网页与 X，返回结构化 JSON 证据（search/fetch/引用）。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/liustack-modsearch)
- [dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) — DSH 撤销/回退系统：配置变更自动存档，一键撤销/恢复/回退到任意版本，支持 WebUI 与离线 CLI/GUI 工具（DSH 启动失败也能救）。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/lire1131-dsh-undo-plugin)
- [dsh-livedocs](https://github.com/sogoodayo/dsh-livedocs) — DSH 实时库文档：写代码前自动拉取项目安装版本的官方文档，消灭幻觉 API。零配置零 Key。Version-pinned live library docs for DeepSeek Harness — kill hallucinated APIs

### Vision & Multimodal

- [modlens](https://github.com/liustack/modlens) — 为纯文本模型架起视觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。 ★3.9k · [详情](https://dshmarketplace.dev/plugins/liustack-modlens)
- [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode ★1.2k
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — 让纯文本模型处理视觉任务：粘贴图片后自动切换到 Vision Toolkit 变体，支持图片问答、多图比较、长截图 OCR、截图还原前端 UI、元素定位与像素对比。默认无需 API Key——图片经作者自建的免费服务处理，每台机器每天 100 张；也可改为指向自己的服务商。 ★0.9k · [详情](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — 为纯文本 Agent 提供视觉能力：内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用。 ★1.1k · [详情](https://dshmarketplace.dev/plugins/ysr666-dsh-vision-router)
- [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） ★0k
- [dsh-labnana](https://github.com/exoticknight/dsh-labnana) — 为 DeepSeek Harness 接入 Labnana 图片生成：文生图 / 图生图 / 精准编辑，含积分预估、余额查询与网页设置界面。 ★0k

### Workflow & Automation

- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams 多智能体团队。 ★1.3k · [详情](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — 让 DeepSeek Harness 能够控制 Tabbit 浏览器：安装即自动加载 tabbit-browser skill，检测国际版 Tabbit 与国内版 Tabbit Browser 正式版（>= 1.9.0），检查 tabbit-cli 常驻运行时，按平台诊断调用 CLI 所需的 DSH sandbox 模式，并在没有合格版本时通过后台任务下载与系统地区匹配的正式版安装包。 ★0.1k
- [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — 把 UltraCode 式多 Agent 调度带给 DSH：可生成、可保存、可治理、可观察、可恢复的 Workflow 层。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/icetomoyo-dsh-workflow)
- [mstar-harness](https://github.com/btspoony/mstar-harness) — 技能驱动的 harness/loop 工程化工作流插件。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/btspoony-mstar-harness)
- [dsh-automation](https://github.com/titanwings/dsh-automation) — 定时任务：让 Coding 任务按计划在全新 Agent Session 中运行，保留可审计历史。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/titanwings-dsh-automation)

### Skills

- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.8k
- [Aegis](https://github.com/GanyuanRan/Aegis) — 面向编码 Agent 的软件工程方法包，提供基线优先规划、系统化调试、提示词卫生、完成前验证，以及修复/退役双轨跟踪技能。 ★1.2k · [详情](https://dshmarketplace.dev/plugins/ganyuanran-aegis)
- [superdesign-skill](https://github.com/superdesigndev/superdesign-skill) — 在 Superdesign 画布上做 UI 与营销图的设计技能：先读代码库拿上下文、抽取现有设计系统，再通过 Superdesign CLI 生成并迭代可分支的设计稿、流程页与可复用组件。 ★0.5k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-superdesign-skill)
- [MisakaNet](https://github.com/Ikalus1988/MisakaNet) — 失败恢复记忆库：从真实工程会话中搜索和记录失败恢复教训，支持 BM25 + 语义 RAG 检索和知识库管理。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/ikalus1988-misakanet)
- [Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia) — AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库 ★0.4k

### Sessions

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — 对话回退：基于持久 Change Ledger 回滚会话与工作区状态。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/anionex-dsh-turn-rewind)
- [dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) — DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web ★0.1k
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — 把 13 家 coding agent（Claude Code、Codex、ChatGPT、Cursor、Gemini、opencode 等）的完整对话历史导入为可续聊的 DeepSeek Harness 会话，并支持反向导出回 Claude Code。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/nwflower-dsh-chat-import)

### Theme & Appearance

- [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。 ★0.4k
- [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) — 自适应推理等级滑块皮肤，将当前模型可用档位映射到 0–30 视觉强度，并同步人物、背景和界面配色。 ★0.2k
- [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) — 面向官方 Harness rc.7 的非商业鲸鱼娘昼夜皮肤：当前无整屏边框布局、白昼水晶工坊与夜晚月潮观测室双场景、Q 版侧栏伙伴、透明花边与轻量氛围。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/ggbond2424648901-deep-whale-day-night-theme)
- [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) — 一键换肤插件：8 套原创主题、背景壁纸（透明度/模糊）、强调色、主题包导入/导出+分享链接、收藏与随机，纯原生 token 系统接入。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/revolutionla-dsh-dream-skin)

### Plugin Managers & Marketplaces

- [dsh-market](https://github.com/dsh-market/dsh-market) — 在 DeepSeek Harness 设置页内浏览、搜索并安装社区插件，支持分类筛选、一键更新与停用，以及主题切换与配置备份。 ★3.2k · [详情](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) — 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. ★0.1k
- [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) — 面向 GitHub dsh-plugin 话题的插件与技能市场：设置页内逛自动收录的全量索引（CI 每 2 小时刷新），一键安装带类型识别、安装脚本与宿主依赖遮蔽安全检查、环境变量密钥管理，并附 STANDARD.md 识别层规范。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/bradegithub-dsh-plugins-marketplace)
- [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — dsh Web GUI 内的社区插件市场：浏览 awesome-dsh-plugin.com 目录，从 设置 → 插件 → 插件市场 安装/卸载插件到 profile。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/sanqi-normal-dsh-webui-market-plugin)

### Development

- [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — 社区发行版：TUI、桌面端与 Web UI 统一体验，分层安装、一步到位。 ★0.3k · [详情](https://dshmarketplace.dev/plugins/hust-open-atom-club-oh-dsh)
- [forkprobe](https://github.com/Jayden-X-L/forkprobe) — 同一任务并行试跑多个技能，对比结果选出最优。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/jayden-x-l-forkprobe)
- [plugin-registry](https://github.com/vlln/plugin-registry) — 插件生态基建：浏览器面板管理官方 repository 插件（0 patch）+ make-dsh-plugin 插件开发引导技能。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/vlln-plugin-registry)
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) — 让 dsh 运行时跑在 Multica 上。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/forrestchang-dsh-multica-runtime)

### Fun & Experimental

- [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) — 2005 年中文站点风格的整活广告插件：侧栏广告/信息流/角落弹窗 + 假关闭叉，素材全虚构。 ★0.6k · [详情](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-ads)
- [whale-girl](https://github.com/vlln/whale-girl) — 桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。 ★0.3k · [详情](https://dshmarketplace.dev/plugins/vlln-whale-girl)

---

## 🤝 贡献

我们欢迎插件提交！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解：
- 如何提交你的插件
- 选择标准
- PR 要求

---

## 📚 相关项目

- **[DSH 插件市场](https://github.com/DshMarketPlace/dshmarketplace)** — 完整的 8642+ 插件目录
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — 可安装的市场插件
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — DSH 官方项目

---

## 📄 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，DSH Marketplace 已放弃对本作品的所有版权及相关权利。
