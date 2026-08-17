# Awesome DeepSeek Harness 插件

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![浏览市场](https://img.shields.io/badge/浏览-DSH%20插件市场-blue?style=flat-square)](https://dshmarketplace.dev/zh)
[![插件数量](https://img.shields.io/badge/插件-96+-success?style=flat-square)](https://dshmarketplace.dev/zh)
[![欢迎PR](https://img.shields.io/badge/PRs-欢迎-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

精选的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件列表，由 [DSH 插件市场](https://dshmarketplace.dev/zh)维护。

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 为什么有这个列表

**DSH 插件市场**索引了完整的 DeepSeek Harness 插件生态 — 目前已收录 96+ 个插件。

这个 **Awesome 列表**是精选子集：我们人工挑选值得优先尝试的插件。可以理解为"你应该安装的插件"而不是"所有存在的插件"。

---

## 🚀 开始使用

### 浏览完整市场

访问 **[dshmarketplace.dev](https://dshmarketplace.dev/zh)** 探索全部 96+ 个已索引插件，支持：
- 高级搜索和筛选
- 安装验证状态
- 详细插件页面
- 分类和排行榜

### 在 DSH 内安装市场插件

将市场作为 DSH 插件安装，实现应用内浏览和安装：

```bash
dsh plugin --profile web add npm:dsh-plugins-store
```

然后通过以下方式访问：
- DSH 中的 `/store` 命令
- 设置 → 插件 → 浏览商店
- 使用 Agent 搜索和安装插件

---

## 📦 入门套装

推荐新用户优先安装的核心插件：

- [dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) — 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. ★0.1k
- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。 ★1.6k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — 让纯文本模型更好地做视觉任务：带意图的图片问答、长截图 OCR、UI 还原等。 ★0.6k · [详情](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [engramory](https://github.com/tinqiao-oss/engramory) — 把 Engramory 策展式记忆纪律做成可安装插件（[npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)）：通过 `ctx.tools.guard()` 对 `MEMORY.md` 索引施加确定性的 200 行 / 25KB 上限（增长即拒、缩小的重写一律放行），并把协议注册为运行时 skill。记忆库是纯 markdown、一条事实一个文件，与 Claude Code、Codex、Kiro、OpenClaw 共用。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-market](https://github.com/dsh-market/dsh-market) — （推荐）装在 DSH 里的插件市场：设置页内逛/搜全部社区插件，按分类筛选，确认后一键安装，已装插件一目了然。 ★0.5k · [详情](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams 多智能体团队。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [treg](https://github.com/superdesigndev/treg) — 给 Agent 的工具目录：按「要做的事」检索约 2,600 个外部接口（SEO 与 SERP、外链、社交、人物与公司信息补全、广告库、抓取），查看参数与单次调用价格后直接调用，凭据由服务端注入。附带技能，MCP 行在未设置 TREG_TOKEN 前保持禁用。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.3k
- [modlens](https://github.com/liustack/modlens) — 为纯文本模型架起��觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。 ★2.3k · [详情](https://dshmarketplace.dev/plugins/liustack-modlens)

---

## 📑 分类

### UI 与体验

- [DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) — 侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。 ★1.6k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-better-sidebar)
- [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) — Claude Code 风格全屏终端 UI：像素鲸鱼顶栏、实时工作状态行、思考流式展开。 ★1.5k · [详情](https://dshmarketplace.dev/plugins/ccch1mneyyy-dsh-tui)
- [dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) — Codex 风格的 `@file` 文件引用，输入框里直接搜索并引用工作区文件。 ★0.3k · [详情](https://dshmarketplace.dev/plugins/omdsh-dev-dsh-at-file)
- [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) — DeepSeek Harness 的终端 UI（TUI）。 ★0.2k
- [dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) — 对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览与沙箱渲染。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-visualize)
- [dsh-web-ui-all](https://github.com/zhu1090093659/dsh-web-ui) — DSH Web UI 插件与皮肤合集：任务看板、git 图、右侧面板、远程移动端 UI、桌宠、实时 token 统计与皮肤中心。 ★3.7k · [详情](https://dshmarketplace.dev/plugins/zhu1090093659-dsh-web-ui-packages-dsh-web-ui-all)

### 模型与提供商

- [dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) — Safe automatic permissions for DeepSeek Harness. ★0.1k
- [anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) — AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH) ★0.1k
- [dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) — DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness ★0.1k
- [dockyard-dsh](https://github.com/AITabby/dockyard-dsh) — A macOS-only native account-pool and provider plugin for DeepSeek Harness. ★0.1k

### 记忆

- [engramory](https://github.com/tinqiao-oss/engramory) — 把 Engramory 策展式记忆纪律做成可安装插件（[npm: dsh-engramory](https://www.npmjs.com/package/dsh-engramory)）：通过 `ctx.tools.guard()` 对 `MEMORY.md` 索引施加确定性的 200 行 / 25KB 上限（增长即拒、缩小的重写一律放行），并把协议注册为运行时 skill。记忆库是纯 markdown、一条事实一个文件，与 Claude Code、Codex、Kiro、OpenClaw 共用。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/tinqiao-oss-engramory)
- [dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) — 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。 ★0.1k
- [dsh-context](https://github.com/bowenliang123/dsh-context) — 上下文洞察面板：一眼看清模型上下文窗口的组成与变化——构成对照窗口大小、按请求历史趋势、压缩/注入事件、消息级 token 统计。 ★0.1k
- [dsh-memory-plugin](https://github.com/volcengine/OpenViking) — 面向 DeepSeek Harness 的 OpenViking 记忆与上下文插件：pre-step 自动召回与画像注入、会话捕获、`viking://` URI 防护，以及对接 OpenViking 服务端的 recall/write 记忆工具。 ★28.6k · [详情](https://dshmarketplace.dev/plugins/volcengine-openviking-examples-dsh-memory-plugin)
- [coding-agents](https://github.com/vectorize-io/hindsight) — Hindsight：会学习的 Agent 长期记忆系统，自动召回/保存、知识页、深度反思与按仓库隔离的记忆银行。 ★20k · [详情](https://dshmarketplace.dev/plugins/vectorize-io-hindsight-coding-agents)

### 工具与能力

- [treg](https://github.com/superdesigndev/treg) — 给 Agent 的工具目录：按「要做的事」检索约 2,600 个外部接口（SEO 与 SERP、外链、社交、人物与公司信息补全、广告库、抓取），查看参数与单次调用价格后直接调用，凭据由服务端注入。附带技能，MCP 行在未设置 TREG_TOKEN 前保持禁用。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-treg)
- [dsh-browser](https://github.com/Lum1104/dsh-browser) — Chrome 侧边栏扩展，让 DSH 直接操控你的浏览器，无需视觉能力。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/lum1104-dsh-browser)
- [notes](https://github.com/zhaoolee/notes) — 将 DSH 对话导出为锤子便签风格 PNG，或在配置的账号工作区中新建和更新 Markdown 便签。 ★0.1k · [详情](https://dshmarketplace.dev/plugins/zhaoolee-notes)
- [modsearch](https://github.com/liustack/modsearch) — 纯文本 agent 的联网搜索桥：搜索网页与 X，返回结构化 JSON 证据（search/fetch/引用）。 ★0.1k
- [argo](https://github.com/taxueseek/argo) — 专为 agent 打造的搜索工具：多语言，覆盖中文/英文/学术/代码/购物/金融/新闻/百科。 ★0.1k

### 视觉与多模态

- [modlens](https://github.com/liustack/modlens) — 为纯文本模型架起��觉桥梁：粘贴图片，输出结构化 JSON 证据（OCR、版面、语义）。 ★2.3k · [详情](https://dshmarketplace.dev/plugins/liustack-modlens)
- [agent-vision-toolkit](https://github.com/Anionex/agent-vision-toolkit) — 为纯文本模型"看图“设计更好的视觉工具箱和技能，支持多图理解，图片问答，前端UI还原、GUI 自动化等，并可选无缝接入多个主流agent，直接识别粘贴图片｜ A vision toolkit and skill designed for text-only llms — image Q&A, long-screenshot OCR, frontend UI restoration, and GUI automation, with optional seamless integration for Codex, Claude Code, Pi, Oh My Pi, and OpenCode ★1k
- [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) — 让纯文本模型更好地做视觉任务：带意图的图片问答、长截图 OCR、UI 还原等。 ★0.6k · [详情](https://dshmarketplace.dev/plugins/anionex-dsh-vision-toolkit)
- [dsh-vision-router](https://github.com/ysr666/dsh-vision-router) — 为纯文本 Agent 提供视觉能力：内置免 Key 视觉链 + 像素级视觉工具（看图问答、定位、裁剪、像素对比、取色、OCR、矢量化、抠图、截图）；粘贴图片即可用。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/ysr666-dsh-vision-router)
- [dsh-vision](https://github.com/william-jin-cmu/dsh-vision) — dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型） ★0k

### 工作流与自动化

- [dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) — AgentTeams 多智能体团队。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/nanmicoder-dsh-agent-teams)
- [dsh-plugin](https://github.com/Tabbit-Browser/dsh-plugin) — Tabbit Broser plugins for Deepseek Harness ★0.1k
- [dsh_workflow](https://github.com/icetomoyo/dsh_workflow) — 把 UltraCode 式多 Agent 调度带给 DSH：可生成、可保存、可治理、可观察、可恢复的 Workflow 层。 ★0.1k
- [mstar-harness](https://github.com/btspoony/mstar-harness) — 技能驱动的 harness/loop 工程化工作流插件。 ★0k
- [dsh-automation](https://github.com/titanwings/dsh-automation) — 定时任务：让 Coding 任务按计划在全新 Agent Session 中运行，保留可审计历史。 ★0k

### 技能

- [vox-director](https://github.com/Alisa0808/vox-director) — Turn one topic into a finished Vox-style paper-collage explainer/ad video — automated end to end on Atlas Cloud + ffmpeg. An agent skill. ★1.3k
- [Aegis](https://github.com/GanyuanRan/Aegis) — 面向编码 Agent 的软件工程方法包，提供基线优先规划、系统化调试、提示词卫生、完成前验证，以及修复/退役双轨跟踪技能。 ★1k · [详情](https://dshmarketplace.dev/plugins/ganyuanran-aegis)
- [superdesign-skill](https://github.com/superdesigndev/superdesign-skill) — 在 Superdesign 画布上做 UI 与营销图的设计技能：先读代码库拿上下文、抽取现有设计系统，再通过 Superdesign CLI 生成并迭代可分支的设计稿、流程页与可复用组件。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/superdesigndev-superdesign-skill)
- [MisakaNet](https://github.com/Ikalus1988/MisakaNet) — 失败恢复记忆库：从真实工程会话中搜索和记录失败恢���教训，支持 BM25 + 语义 RAG 检索和知识库管理。 ★0.4k · [详情](https://dshmarketplace.dev/plugins/ikalus1988-misakanet)
- [Awesome-AI-Pedia](https://github.com/Awesome-AI-Pedia/Awesome-AI-Pedia) — AI skills大全 mcp ai知识库 Agent 全维度 AI 资源百科，DSH插件 收录大模型、智能 Agent、RAG 检索增强、多模态、MLOps、AI 应用工具、AI面试集、Vibe coding 大全、零基础学习路线，持续更新前沿 AI 开源项目，开发者一站式 AI 导航库 ★0.2k

### 会话

- [dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) — 对话回退：基于持久 Change Ledger 回滚会话与工作区状态。 ★0.1k
- [dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) — DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web ★0.1k
- [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) — 把 13 家 coding agent（Claude Code、Codex、ChatGPT、Cursor、Gemini、opencode 等）的完整对话历史导入为可续聊的 DeepSeek Harness 会话，并支持反向导出回 Claude Code。 ★0k

### 主题与外观

- [DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) — 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。 ★0.2k
- [dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) — DeepSeek Harness 滑动变阻器皮肤 ★0.1k
- [deep-whale-day-night-theme](https://github.com/GGBond2424648901/deep-whale-day-night-theme) — 鲸鱼娘昼夜皮肤：白昼水晶工坊与夜晚月潮观测室双场景，成对角色、Q 版侧栏��物、花边与气泡/星点轻量氛围。 ★0.1k
- [dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) — 一键换肤插件：8 套原创主题、背景壁纸（透明度/模糊）、强调色、主题包导入/导出+分享链接、收藏与随机，纯原生 token 系统接入。 ★0k
- [maid-atelier](https://github.com/Small-tailqwq/dsh-deep-whale) — DSH Web 鲸鱼娘皮肤系列（深海女仆工坊 maid-atelier）。 ★1.1k · [详情](https://dshmarketplace.dev/plugins/small-tailqwq-dsh-deep-whale-maid-atelier)

### 插件管理器与市场

- [dsh-market](https://github.com/dsh-market/dsh-market) — （推荐）装在 DSH 里的插件市场：设置页内逛/搜全部社区插件，按分类筛选，确认后一键安装，已装插件一目了然。 ★0.5k · [详情](https://dshmarketplace.dev/plugins/dsh-market-dsh-market)
- [DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) — 面向 GitHub dsh-plugin 话题的插件与技能市场：设置页内逛自动收录的全量索引（CI 每 2 小时刷新），一键安装带类型识别、安装脚本与宿主依赖遮蔽安全检查、环境变量密钥管理，并附 STANDARD.md 识别层规范。 ★0.1k
- [dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) — 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace. ★0.1k
- [dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) — dsh Web GUI 内的社区插件市场：浏览 awesome-dsh-plugin.com 目录，从 设置 → 插件 → 插件市场 安装/卸载插件到 profile。 ★0.1k

### 开发

- [oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) — 社区发行版：TUI、桌面端与 Web UI 统一体验，分层安装、一步到位。 ★0.2k · [详情](https://dshmarketplace.dev/plugins/hust-open-atom-club-oh-dsh)
- [forkprobe](https://github.com/Jayden-X-L/forkprobe) — 同一任务并行试跑多个技能，对比结果选出最优。 ★0.1k
- [plugin-registry](https://github.com/vlln/plugin-registry) — 插件生态基建：浏览器面板管理官方 repository 插件（0 patch）+ make-dsh-plugin 插件开发引导技能。 ★0.1k
- [dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) — 让 dsh 运行时跑在 Multica 上。 ★0k
- [mirage](https://github.com/strukto-ai/mirage) — 把文件系统与 bash 提供者换成 mirage 虚拟工作区：文件工具与 shell 命令作用于挂载的资源（RAM、S3、Redis、Slack、Gmail、Notion、Postgres）而非宿主磁盘，支持按挂载点设置读/写/执行模式、按命令选择沙箱（进程内 monty、pyodide、quickjs；远程 docker、e2b、daytona），并可在虚拟终端中安装 CLI（git、gh、slack、linear、ntn、gws，或自行注册的程序树）作为命令头词。 ★3.5k · [详情](https://dshmarketplace.dev/plugins/strukto-ai-mirage-dsh)

### 趣味与实验性

- [dsh-ads](https://github.com/Nagi-ovo/dsh-ads) — 2005 年中文站点风格的整活广告插件：侧栏广告/信息流/角落弹窗 + 假关闭叉，素材全虚构。 ★0.5k · [详情](https://dshmarketplace.dev/plugins/nagi-ovo-dsh-ads)
- [whale-girl](https://github.com/vlln/whale-girl) — 桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。 ★0.2k

---

## 🤝 贡献

我们欢迎插件提交！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解：
- 如何提交你的插件
- 收录标准
- PR 要求

---

## 📚 相关项目

- **[DSH 插件市场](https://github.com/DshMarketPlace/dshmarketplace)** — 完整的 96+ 插件目录
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — 可安装的市场插件
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — DSH 官方项目

---

## 📄 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，DSH 插件市场已放弃本作品的所有版权及相关权利。
