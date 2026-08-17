# Awesome DeepSeek Harness Plugins

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Browse Marketplace](https://img.shields.io/badge/Browse-DSH%20Marketplace-blue?style=flat-square)](https://dshmarketplace.dev)
[![Plugins](https://img.shields.io/badge/plugins-2348+-success?style=flat-square)](https://dshmarketplace.dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

A curated list of useful plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), maintained by [DSH Marketplace](https://dshmarketplace.dev).

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 Why This List Exists

**DSH Marketplace** indexes the complete DeepSeek Harness plugin ecosystem — currently tracking 2348+ plugins.

This **Awesome List** is a curated subset: we hand-pick plugins worth trying first. Think of it as "the plugins you should actually install" rather than "every plugin that exists."

---

## 🚀 Getting Started

### Browse the Full Marketplace

Visit **[dshmarketplace.dev](https://dshmarketplace.dev)** to explore all 2348+ indexed plugins with:
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

- [dsh-market](https://github.com/dsh-market/dsh-market) — (Recommended) The plugin market inside DSH: a Settings page to browse and search the full community catalog by category, with confirmed one-click installs and an installed-plugins view. ★0.5k · [Details](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. ★1.6k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — Vision tasks for text-only models: intent-aware image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff. ★0.6k · [Details](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [engramory](https://github.com/tinqiao-oss/engramory) — The Engramory curated-memory discipline as an installable plugin ([npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)): a deterministic 200-line / 25 KB cap on the `MEMORY.md` index via `ctx.tools.guard()` — growth denied, a shrinking rewrite always passes — plus the protocol registered as a runtime skill. The store is plain markdown, one file per fact, shared with Claude Code, Codex, Kiro, and OpenClaw. ★0.2k · [Details](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. ★0.4k · [Details](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [treg](https://github.com/superdesigndev/treg) — Tool catalog for agents: search ~2,600 external endpoints (SEO and SERP, backlinks, social, people and company enrichment, ad libraries, scraping) by the task you want done, read each one's parameters and per-call price, then call it with the credential injected server-side. Ships the skill plus an MCP row that stays disabled until TREG_TOKEN is set. ★0.4k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.3k
- [modlens](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). ★2.3k · [Details](https://dshmarketplace.dev/plugins/liustack-modlens)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. ★1.5k · [Details](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [Aegis](https://github.com/GanyuanRan/Aegis) — Software-engineering method pack for coding agents, with skills for baseline-first planning, systematic debugging, prompt hygiene, verification before completion, and repair/retirement tracking. ★1k · [Details](https://dshmarketplace.dev/plugins/ganyuanran-aegis)

---

## 📑 Categories

### UI & Experience

- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — Full sidebar workbench with file rendering and editing, terminal, Git, and subagents; third-party plugins can register new tabs. ★1.6k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code-style full-screen terminal UI: pixel-whale header, live status line, and streaming thought expansion. ★1.5k · [Details](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — Codex-style `@file` mentions: search workspace files in the composer and attach their contents to prompts. ★0.3k · [Details](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-at-file)
- [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — A terminal UI (TUI) for DeepSeek Harness. ★0.2k
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — In-conversation generative UI: the model renders interactive HTML cards into the chat stream, with streaming preview and sandboxed rendering. ★0.2k · [Details](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-visualize)

### Models & Providers

- [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) — Safe automatic permissions for DeepSeek Harness. ★0.1k
- [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) ★0.1k
- [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness ★0.1k
- [dockyard-dsh](https://github.com/AITabby/dockyard-dsh) — A macOS-only native account-pool and provider plugin for DeepSeek Harness. ★0.1k
- [dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) — Unofficial Command Code LLM provider: registers a `commandcode` route with a live model catalog and reasoning-effort support. ★0k · [Details](https://dshmarketplace.dev/plugins/mars-sea-dsh-commandcode-provider)

### Memory

- [engramory](https://github.com/tinqiao-oss/engramory) — The Engramory curated-memory discipline as an installable plugin ([npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)): a deterministic 200-line / 25 KB cap on the `MEMORY.md` index via `ctx.tools.guard()` — growth denied, a shrinking rewrite always passes — plus the protocol registered as a runtime skill. The store is plain markdown, one file per fact, shared with Claude Code, Codex, Kiro, and OpenClaw. ★0.2k · [Details](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 ★0.1k
- [dsh-context](https://github.com/bowenliang123/dsh-context) — Context insight panel: see what the model's context window is made of and how it evolves — composition vs. window size, per-request history, compression/injection events, and per-message token stats. ★0.1k
- [dsh-noema](https://github.com/ZSeven-W/dsh-noema) — Noema long-term memory plugin for DSH: durable, inspectable agent memory with recall tools and a settings page. ★0.1k
- [Co-Engram](https://github.com/Co-Engram/Co-Engram) — Self-evolving team memory as plain Markdown in git: a native Cordis plugin that registers 38 bare-name memory tools plus a prompt-signals section re-evaluated at every assembly, with RPE reinforcement, decay and sleep consolidation; shares one data repo with its Claude Code (MCP) and OpenClaw hosts; verified against DSH 0.1.0-rc.6. ★0.1k

### Tools & Capabilities

- [treg](https://github.com/superdesigndev/treg) — Tool catalog for agents: search ~2,600 external endpoints (SEO and SERP, backlinks, social, people and company enrichment, ad libraries, scraping) by the task you want done, read each one's parameters and per-call price, then call it with the credential injected server-side. Ships the skill plus an MCP row that stays disabled until TREG_TOKEN is set. ★0.4k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [dsh-browser](https://github.com/Lum1104/dsh-browser) — Chrome sidebar extension that lets DSH operate your browser directly, no vision capabilities required. ★0.2k · [Details](https://dshmarketplace.dev/plugins/lum1104-dsh-browser)
- [notes](https://github.com/zhaoolee/notes) — Export DSH conversations as Smartisan Notes-style PNGs, or create and update Markdown notes in a configured account-scoped workspace. ★0.1k · [Details](https://dshmarketplace.dev/plugins/zhaoolee-notes)
- [modsearch](https://github.com/liustack/modsearch) — Web search bridge for text-only agents: ask the web or X, get structured JSON evidence (search, fetch, citations). ★0.1k
- [dsh-undo-plugin](https://github.com/lire1131/dsh-undo-plugin) — Undo/redo & rollback system for DSH: every config change is auto-snapshotted; undo/redo/restore to any version from the WebUI or the offline CLI/GUI tools (works even when DSH fails to boot). ★0.1k

### Vision & Multimodal

- [modlens](https://github.com/liustack/modlens) — Vision bridge for text-only models: paste an image, get structured JSON evidence (OCR, layout, semantics). ★2.3k · [Details](https://dshmarketplace.dev/plugins/liustack-modlens)
- [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode ★1k
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — Vision tasks for text-only models: intent-aware image Q&A, long-screenshot OCR, UI reproduction, grounding, and pixel diff. ★0.6k · [Details](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — Free vision for text-only agents: built-in keyless vision chain plus pixel tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots); paste an image to use it. ★0.4k · [Details](https://dshmarketplace.dev/plugins/ysr666-dsh-vision-router)
- [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） ★0k

### Workflow & Automation

- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams multi-agent teams. ★0.4k · [Details](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — Tabbit Broser plugins for Deepseek Harness ★0.1k
- [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — UltraCode-style multi-agent orchestration: a generatable, savable, governable, observable, resumable workflow layer. ★0.1k
- [mstar-harness](https://github.com/btspoony/mstar-harness) — Skill-driven harness/loop engineering workflow agent plugin. ★0k
- [dsh-automation](https://github.com/titanwings/dsh-automation) — Scheduled coding runs in fresh agent sessions with auditable history. ★0k

### Skills

- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.3k
- [Aegis](https://github.com/GanyuanRan/Aegis) — Software-engineering method pack for coding agents, with skills for baseline-first planning, systematic debugging, prompt hygiene, verification before completion, and repair/retirement tracking. ★1k · [Details](https://dshmarketplace.dev/plugins/ganyuanran-aegis)
- [superdesign-skill](https://github.com/superdesigndev/superdesign-skill) — Design skill for UI and marketing graphics on the Superdesign canvas: reads the repo for context, extracts its design system, then generates and iterates branchable design drafts, flow pages, and reusable components through the Superdesign CLI. ★0.4k · [Details](https://dshmarketplace.dev/plugins/superdesigndev-superdesign-skill)
- [MisakaNet](https://github.com/Ikalus1988/MisakaNet) — Failure-recovery memory: search and record failure-recovery lessons from real engineering sessions, with BM25 + semantic RAG retrieval and a lessons knowledge base. ★0.4k · [Details](https://dshmarketplace.dev/plugins/ikalus1988-misakanet)
- [Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia) — AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库 ★0.2k

### Sessions

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — Rewind conversation and workspace state, powered by a persistent Change Ledger. ★0.1k
- [dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) — DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web ★0.1k
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — Import full-fidelity chat histories from 13 coding agents (Claude Code, Codex, ChatGPT, Cursor, Gemini, opencode, and more) as resumable DeepSeek Harness sessions, with reverse export back to Claude Code. ★0k

### Theme & Appearance

- [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。 ★0.2k
- [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) — DeepSeek Harness 滑动变阻器皮肤 ★0.1k
- [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) — Day/night whale-girl skin: a crystal workshop by day and a moon-tide observatory by night, with paired scenes, chibi companions, ornaments, and lightweight bubble and star ambience. ★0.1k
- [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) — One-command skin plugin: 8 original themes, translucent wallpaper with opacity/blur, per-user accent, and shareable theme-pack import/export, favorites and surprise-me — purely native on DSH's token system. ★0k

### Plugin Managers & Marketplaces

- [dsh-market](https://github.com/dsh-market/dsh-market) — (Recommended) The plugin market inside DSH: a Settings page to browse and search the full community catalog by category, with confirmed one-click installs and an installed-plugins view. ★0.5k · [Details](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) — 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. ★0.1k
- [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) — GitHub-topic-driven plugin & skill marketplace: a Settings page that browses the auto-collected registry (the whole dsh-plugin topic plus the skills index, CI-refreshed every 2 hours) with one-click install, type detection, install-script and host-shadow-dependency safety confirmations, env-key management, and the STANDARD.md recognition spec. ★0.1k
- [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — In-harness plugin market for the dsh web GUI: browse the awesome-dsh-plugin.com catalog and install/uninstall plugins into a profile from Settings → Plugins → Plugin Market. ★0.1k

### Development

- [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — Community distribution: TUI, desktop, and Web UI as one bundle with layered installation. ★0.2k · [Details](https://dshmarketplace.dev/plugins/hust-open-atom-club-oh-dsh)
- [forkprobe](https://github.com/Jayden-X-L/forkprobe) — Compare multiple skills on the same task and pick the winner. ★0.1k
- [plugin-registry](https://github.com/vlln/plugin-registry) — Ecosystem infrastructure: a thin browser console for managing official repository plugins (zero patches) plus a make-dsh-plugin skill for guided plugin development. ★0.1k
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) — Run the dsh runtime on Multica. ★0k

### Fun & Experimental

- [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) — Parody ads in 2005-Chinese-web style: sidebar banners, in-chat feeds, corner popups, and a close button whose hit area is smaller than it looks. All fictional. ★0.5k · [Details](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-ads)
- [whale-girl](https://github.com/vlln/whale-girl) — Desktop pet (QQ-pet style): floats in the corner, draggable, feedable, playable. ★0.2k

---

## 🤝 Contributing

We welcome plugin submissions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- How to submit your plugin
- Selection criteria
- PR requirements

---

## 📚 Related Projects

- **[DSH Marketplace](https://github.com/DshMarketPlace/dshmarketplace)** — The full 2348+ plugin directory
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — Installable marketplace plugin
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — The official DSH project

---

## 📄 License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, DSH Marketplace has waived all copyright and related rights to this work.
