# Awesome DeepSeek Harness Plugins

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Browse Marketplace](https://img.shields.io/badge/Browse-DSH%20Marketplace-blue?style=flat-square)](https://dshmarketplace.dev)
[![Plugins](https://img.shields.io/badge/plugins-8642+-success?style=flat-square)](https://dshmarketplace.dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

A curated list of useful plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), maintained by [DSH Marketplace](https://dshmarketplace.dev).

This is our independent recommendation list. The [upstream registry](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) is a separate project; a PR here does not itself register a plugin in the marketplace.

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 Why This List Exists

**DSH Marketplace** indexes the complete DeepSeek Harness plugin ecosystem — currently tracking 8642+ plugins.

This **Awesome List** is a curated subset: we hand-pick plugins worth trying first. Think of it as "the plugins you should actually install" rather than "every plugin that exists."

---

## 🚀 Getting Started

### Browse the Full Marketplace

Visit **[dshmarketplace.dev](https://dshmarketplace.dev)** to explore all 8642+ indexed plugins with:
- Advanced search and filtering
- Installation validation status
- Detailed plugin pages
- Categories and rankings

### Install the Marketplace Inside DSH

Get the marketplace as a DSH plugin for in-app browsing and installation:

```bash
dsh plugin --profile web add dshmarketplace-plugin
```

Then access it via:
- `/store` command in DSH
- Settings → Plugins → Browse Store
- Use agent to search and install plugins

---

## 📦 Starter Pack

Essential plugins recommended for new DSH users:

- [dsh-market](https://github.com/dsh-market/dsh-market) — Browse, search and install community plugins from inside DeepSeek Harness settings, with category filters, one-click updates, enable/disable, theme switching and configuration backup. ★3.2k · [Details](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. ★3.4k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — Vision for text-only models: paste an image and the model switches to a Vision Toolkit variant for image Q&A, multi-image comparison, long-screenshot OCR, screenshot-to-UI reproduction, element grounding, and pixel diff. No API key by default — images are processed by the author-hosted free service, 100 per machine per day; configurable to your own provider. ★0.9k · [Details](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [engramory](https://github.com/tinqiao-oss/engramory) — The Engramory curated-memory discipline as an installable plugin ([npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)): a deterministic 200-line / 25 KB cap on the `MEMORY.md` index via `ctx.tools.guard()` — growth denied, a shrinking rewrite always passes — plus the protocol registered as a runtime skill. The store is plain markdown, one file per fact, shared with Claude Code, Codex, Kiro, and OpenClaw. ★0.2k · [Details](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. ★1.3k · [Details](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [treg](https://github.com/superdesigndev/treg) — Tool catalog for agents: search ~2,600 external endpoints (SEO and SERP, backlinks, social, people and company enrichment, ad libraries, scraping) by the task you want done, read each one's parameters and per-call price, then call it with the credential injected server-side. Ships the skill plus an MCP row that stays disabled until TREG_TOKEN is set. ★1.2k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.8k
- [modlens](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). ★3.9k · [Details](https://dshmarketplace.dev/plugins/liustack-modlens)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. ★2.8k · [Details](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [Aegis](https://github.com/GanyuanRan/Aegis) — Software-engineering method pack for coding agents, with skills for baseline-first planning, systematic debugging, prompt hygiene, verification before completion, and repair/retirement tracking. ★1.2k · [Details](https://dshmarketplace.dev/plugins/ganyuanran-aegis)

---

## 📑 Categories

### UI & Experience

- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. ★3.4k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. ★2.8k · [Details](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — Codex-style `@file` mentions: search workspace files in the composer and attach their contents to prompts. ★0.5k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-at-file)
- [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — A terminal UI (TUI) for DeepSeek Harness. ★0.3k · [Details](https://dshmarketplace.dev/plugins/huiliyi37-dsh-tianshu-tui)
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — In-conversation generative UI: the model renders interactive HTML cards into the chat stream, with streaming preview and sandboxed rendering. ★0.3k · [Details](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-visualize)
- [plugin-effort-slider](https://github.com/mrSutivu/plugin-effort-slider) — Notched reasoning-effort slider grouped with the model picker in the composer, with theme variables and English, French and Chinese labels. ★0k
- [dsh-code-ui](https://github.com/sogoodayo/dsh-code-ui) — Cursor 风格的 AI 代码编辑器工作台插件（DSH）：文件树、多标签页编辑、引用/备注/翻译、内嵌 AI 输入框、语法高亮 ★0k
- [dsh-just-chat](https://github.com/exoticknight/dsh-just-chat) — One-click native conversations with independent workspaces for DeepSeek Harness.

### Models & Providers

- [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) — Adds an Auto permission preset between Workspace Write and Full access: routine work stays in the official workspace-write sandbox while the current session model reviews escalation and destructive calls, granting one exact wider access once, asking when the intent is ambiguous, and denying critical paths. ★0.2k
- [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — AnySearch-powered real-time web and vertical search provider for DeepSeek Harness. ★0.4k
- [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness ★0.1k
- [dockyard-dsh](https://github.com/AITabby/dockyard-dsh) — A macOS-only native account-pool and provider plugin for DeepSeek Harness. ★0.1k
- [dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) — Unofficial Command Code LLM provider: registers a `commandcode` route with a live model catalog and reasoning-effort support. ★0.2k · [Details](https://dshmarketplace.dev/plugins/mars-sea-dsh-commandcode-provider)

### Memory

- [engramory](https://github.com/tinqiao-oss/engramory) — The Engramory curated-memory discipline as an installable plugin ([npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)): a deterministic 200-line / 25 KB cap on the `MEMORY.md` index via `ctx.tools.guard()` — growth denied, a shrinking rewrite always passes — plus the protocol registered as a runtime skill. The store is plain markdown, one file per fact, shared with Claude Code, Codex, Kiro, and OpenClaw. ★0.2k · [Details](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 ★0.3k
- [dsh-context](https://github.com/bowenliang123/dsh-context) — DSH context insight panel: Context dashboard + /context command + Context browser — one-stop context lifecycle management with categorized composition, content details, evolution trends, compaction/injection events, and stats. ★1.3k · [Details](https://dshmarketplace.dev/plugins/bowenliang123-dsh-context)
- [dsh-noema](https://github.com/ZSeven-W/dsh-noema) — Long-term memory for DSH agents — durable, inspectable memories with recall, search, browse and knowledge-graph tools, import from ten other AI coding tools, and a settings page. ★0.1k
- [Co-Engram](https://github.com/Co-Engram/Co-Engram) — Self-evolving team memory as plain Markdown in git: a native Cordis plugin that registers 38 bare-name memory tools plus a prompt-signals section re-evaluated at every assembly, with RPE reinforcement, decay and sleep consolidation; shares one data repo with its Claude Code (MCP) and OpenClaw hosts; verified against DSH 0.1.0-rc.6. ★0k

### Tools & Capabilities

- [treg](https://github.com/superdesigndev/treg) — Tool catalog for agents: search ~2,600 external endpoints (SEO and SERP, backlinks, social, people and company enrichment, ad libraries, scraping) by the task you want done, read each one's parameters and per-call price, then call it with the credential injected server-side. Ships the skill plus an MCP row that stays disabled until TREG_TOKEN is set. ★1.2k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [dsh-browser](https://github.com/Lum1104/dsh-browser) — Chrome sidebar extension that lets DSH operate your browser directly, no vision capabilities required. ★0.6k · [Details](https://dshmarketplace.dev/plugins/lum1104-dsh-browser)
- [notes](https://github.com/zhaoolee/notes) — Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace. ★0.2k · [Details](https://dshmarketplace.dev/plugins/zhaoolee-notes)
- [modsearch](https://github.com/liustack/modsearch) — Web search bridge for text-only agents: ask the web or X, get structured JSON evidence (search, fetch, citations). ★0.4k · [Details](https://dshmarketplace.dev/plugins/liustack-modsearch)
- [dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) — Undo/redo & rollback system for DSH: every config change is auto-snapshotted; undo/redo/restore to any version from the WebUI or the offline CLI/GUI tools (works even when DSH fails to boot). ★0.1k · [Details](https://dshmarketplace.dev/plugins/lire1131-dsh-undo-plugin)
- [dsh-livedocs](https://github.com/sogoodayo/dsh-livedocs) — DSH 实时库文档：写代码前自动拉取项目安装版本的官方文档，消灭幻觉 API。零配置零 Key。Version-pinned live library docs for DeepSeek Harness — kill hallucinated APIs

### Vision & Multimodal

- [modlens](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). ★3.9k · [Details](https://dshmarketplace.dev/plugins/liustack-modlens)
- [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode ★1.2k
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — Vision for text-only models: paste an image and the model switches to a Vision Toolkit variant for image Q&A, multi-image comparison, long-screenshot OCR, screenshot-to-UI reproduction, element grounding, and pixel diff. No API key by default — images are processed by the author-hosted free service, 100 per machine per day; configurable to your own provider. ★0.9k · [Details](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image to use it. ★1.1k · [Details](https://dshmarketplace.dev/plugins/ysr666-dsh-vision-router)
- [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） ★0k
- [dsh-labnana](https://github.com/exoticknight/dsh-labnana) — Labnana image generation for DeepSeek Harness: text-to-image / image-to-image / precise editing with credits estimation, subscription balance and web settings UI. ★0k

### Workflow & Automation

- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. ★1.3k · [Details](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — Gives DeepSeek Harness control of the Tabbit Browser: auto-loads the tabbit-browser skill on install, detects official Tabbit and Tabbit Browser releases (>= 1.9.0), checks the tabbit-cli persistent runtime, diagnoses the per-platform DSH sandbox mode needed to call the CLI, and downloads the region-matched official installer via a background job when no qualifying version is present. ★0.1k
- [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — UltraCode-style multi-agent orchestration: a generatable, savable, governable, observable, resumable workflow layer. ★0.1k · [Details](https://dshmarketplace.dev/plugins/icetomoyo-dsh-workflow)
- [mstar-harness](https://github.com/btspoony/mstar-harness) — Skill-driven harness/loop engineering workflow agent plugin. ★0.1k · [Details](https://dshmarketplace.dev/plugins/btspoony-mstar-harness)
- [dsh-automation](https://github.com/titanwings/dsh-automation) — Scheduled coding runs in fresh agent sessions with auditable history. ★0.1k · [Details](https://dshmarketplace.dev/plugins/titanwings-dsh-automation)

### Skills

- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.8k
- [Aegis](https://github.com/GanyuanRan/Aegis) — Software-engineering method pack for coding agents, with skills for baseline-first planning, systematic debugging, prompt hygiene, verification before completion, and repair/retirement tracking. ★1.2k · [Details](https://dshmarketplace.dev/plugins/ganyuanran-aegis)
- [superdesign-skill](https://github.com/superdesigndev/superdesign-skill) — Design skill for UI and marketing graphics on the Superdesign canvas: reads the repo for context, extracts its design system, then generates and iterates branchable design drafts, flow pages, and reusable components through the Superdesign CLI. ★0.5k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-superdesign-skill)
- [MisakaNet](https://github.com/Ikalus1988/MisakaNet) — Failure-recovery memory: search and record failure-recovery lessons from real engineering sessions, with BM25 + semantic RAG retrieval and a lessons knowledge base. ★0.4k · [Details](https://dshmarketplace.dev/plugins/ikalus1988-misakanet)
- [Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia) — AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库 ★0.4k

### Sessions

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — Rewind conversation and workspace state, powered by a persistent Change Ledger. ★0.1k · [Details](https://dshmarketplace.dev/plugins/anionex-dsh-turn-rewind)
- [dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) — DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web ★0.1k
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — Import full-fidelity chat histories from 13 coding agents (Claude Code, Codex, ChatGPT, Cursor, Gemini, opencode, and more) as resumable DeepSeek Harness sessions, with reverse export back to Claude Code. ★0.1k · [Details](https://dshmarketplace.dev/plugins/nwflower-dsh-chat-import)

### Theme & Appearance

- [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。 ★0.4k
- [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) — Adaptive reasoning slider skin that maps each model's available reasoning efforts onto a 0–30 visual intensity scale, with synchronized portraits, background, and interface colors. ★0.2k
- [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) — Non-commercial day/night whale-girl skin for official Harness rc.7: current no-viewport-frame layout, paired crystal-workshop and moon-tide scenes, chibi companions, translucent ornaments, and lightweight ambience. ★0.1k · [Details](https://dshmarketplace.dev/plugins/ggbond2424648901-deep-whale-day-night-theme)
- [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) — One-command skin plugin: 8 original themes, translucent wallpaper with opacity/blur, per-user accent, and shareable theme-pack import/export, favorites and surprise-me — purely native on DSH's token system. ★0.1k · [Details](https://dshmarketplace.dev/plugins/revolutionla-dsh-dream-skin)

### Plugin Managers & Marketplaces

- [dsh-market](https://github.com/dsh-market/dsh-market) — Browse, search and install community plugins from inside DeepSeek Harness settings, with category filters, one-click updates, enable/disable, theme switching and configuration backup. ★3.2k · [Details](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) — 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. ★0.1k
- [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) — GitHub-topic-driven plugin & skill marketplace: a Settings page that browses the auto-collected registry (the whole dsh-plugin topic plus the skills index, CI-refreshed every 2 hours) with one-click install, type detection, install-script and host-shadow-dependency safety confirmations, env-key management, and the STANDARD.md recognition spec. ★0.2k · [Details](https://dshmarketplace.dev/plugins/bradegithub-dsh-plugins-marketplace)
- [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — In-harness plugin market for the dsh web GUI: browse the awesome-dsh-plugin.com catalog and install/uninstall plugins into a profile from Settings → Plugins → Plugin Market. ★0.1k · [Details](https://dshmarketplace.dev/plugins/sanqi-normal-dsh-webui-market-plugin)

### Development

- [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — Community distribution: TUI, desktop, and Web UI as one bundle with layered installation. ★0.3k · [Details](https://dshmarketplace.dev/plugins/hust-open-atom-club-oh-dsh)
- [forkprobe](https://github.com/Jayden-X-L/forkprobe) — Compare multiple skills on the same task and pick the winner. ★0.1k · [Details](https://dshmarketplace.dev/plugins/jayden-x-l-forkprobe)
- [plugin-registry](https://github.com/vlln/plugin-registry) — Ecosystem infrastructure: a thin browser console for managing official repository plugins (zero patches) plus a make-dsh-plugin skill for guided plugin development. ★0.1k · [Details](https://dshmarketplace.dev/plugins/vlln-plugin-registry)
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) — Run the dsh runtime on Multica. ★0.1k · [Details](https://dshmarketplace.dev/plugins/forrestchang-dsh-multica-runtime)

### Fun & Experimental

- [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) — Parody ads in 2005-Chinese-web style: sidebar banners, in-chat feeds, corner popups, and a close button whose hit area is smaller than it looks. All fictional. ★0.6k · [Details](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-ads)
- [whale-girl](https://github.com/vlln/whale-girl) — Desktop pet (QQ-pet style): floats in the corner, draggable, feedable, playable. ★0.3k · [Details](https://dshmarketplace.dev/plugins/vlln-whale-girl)

---

## 🤝 Contributing

We welcome plugin submissions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- How to submit your plugin
- Selection criteria
- PR requirements

---

## 📚 Related Projects

- **[DSH Marketplace](https://github.com/DshMarketPlace/dshmarketplace)** — The full 8642+ plugin directory
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — Installable marketplace plugin
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — The official DSH project

---

## 📄 License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, DSH Marketplace has waived all copyright and related rights to this work.
