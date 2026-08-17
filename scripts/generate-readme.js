#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const https = require('https');

const DATA_FILE = path.join(__dirname, '../data/curated.yml');
const CACHE_FILE = path.join(__dirname, '../data/marketplace-cache.json');
const README_EN = path.join(__dirname, '../README.md');
const README_ZH = path.join(__dirname, '../README.zh-CN.md');

// Load curated list
const curated = yaml.load(fs.readFileSync(DATA_FILE, 'utf8'));

// Fetch plugin data from marketplace API
async function fetchPluginData() {
  return new Promise((resolve, reject) => {
    // Use the full API with all metadata
    https.get('https://dshmarketplace.dev/api/v1/plugins?limit=2500', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          // Save cache
          fs.writeFileSync(CACHE_FILE, JSON.stringify(parsed, null, 2));

          // Extract results array
          const plugins = parsed.results || parsed.plugins || parsed;
          resolve(plugins);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Load cached data or fetch new
async function loadPluginData() {
  try {
    const data = await fetchPluginData();
    console.log(`✓ Fetched ${data.length} plugins from marketplace API`);
    return data;
  } catch (error) {
    console.warn(`⚠ Failed to fetch from API, using cache: ${error.message}`);
    if (fs.existsSync(CACHE_FILE)) {
      const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      const plugins = cached.results || cached.plugins || cached;
      return Array.isArray(plugins) ? plugins : [];
    }
    throw new Error('No cache available and API fetch failed');
  }
}

// Find plugin metadata by repo (string or object format)
function findPlugin(marketplaceData, repoOrPlugin) {
  let repo, subpath;

  if (typeof repoOrPlugin === 'string') {
    repo = repoOrPlugin;
    subpath = null;
  } else {
    repo = repoOrPlugin.repo;
    subpath = repoOrPlugin.subpath;
  }

  const fullName = subpath ? `${repo}#${subpath}` : repo;
  return marketplaceData.find(p => p.fullName === fullName || p.fullName === repo);
}

// Generate plugin entry
function generatePluginEntry(repoOrPlugin, marketplaceData) {
  const meta = findPlugin(marketplaceData, repoOrPlugin);

  if (!meta) {
    const display = typeof repoOrPlugin === 'string' ? repoOrPlugin :
                    (repoOrPlugin.subpath ? `${repoOrPlugin.repo}#${repoOrPlugin.subpath}` : repoOrPlugin.repo);
    console.warn(`⚠ Plugin not found in marketplace: ${display}`);
    return null;
  }

  const name = meta.name;
  const githubUrl = meta.repoUrl || `https://github.com/${repo}`;
  const marketplaceUrl = meta.url;
  const summary = meta.summary || '';
  const stars = meta.stars ? `★${Math.round(meta.stars / 1000 * 10) / 10}k` : '';

  let entry = `- [${name}](${githubUrl})`;
  if (summary) {
    entry += ` — ${summary}`;
  }
  if (stars) {
    entry += ` ${stars}`;
  }
  if (marketplaceUrl && marketplaceUrl.startsWith('https://dshmarketplace.dev')) {
    entry += ` · [Details](${marketplaceUrl})`;
  }

  return entry;
}

function generatePluginEntryZh(repoOrPlugin, marketplaceData) {
  const meta = findPlugin(marketplaceData, repoOrPlugin);

  if (!meta) {
    return null;
  }

  const name = meta.name;
  const githubUrl = meta.repoUrl || `https://github.com/${repo}`;
  const marketplaceUrl = meta.url;
  const summary = meta.summaryZh || meta.summary || '';
  const stars = meta.stars ? `★${Math.round(meta.stars / 1000 * 10) / 10}k` : '';

  let entry = `- [${name}](${githubUrl})`;
  if (summary) {
    entry += ` — ${summary}`;
  }
  if (stars) {
    entry += ` ${stars}`;
  }
  if (marketplaceUrl && marketplaceUrl.startsWith('https://dshmarketplace.dev')) {
    entry += ` · [详情](${marketplaceUrl})`;
  }

  return entry;
}

// Generate English README
function generateReadmeEN(marketplaceData) {
  const totalPlugins = marketplaceData.length;
  let content = `# Awesome DeepSeek Harness Plugins

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Browse Marketplace](https://img.shields.io/badge/Browse-DSH%20Marketplace-blue?style=flat-square)](https://dshmarketplace.dev)
[![Plugins](https://img.shields.io/badge/plugins-${totalPlugins}+-success?style=flat-square)](https://dshmarketplace.dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

A curated list of useful plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), maintained by [DSH Marketplace](https://dshmarketplace.dev).

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 Why This List Exists

**DSH Marketplace** indexes the complete DeepSeek Harness plugin ecosystem — currently tracking ${totalPlugins}+ plugins.

This **Awesome List** is a curated subset: we hand-pick plugins worth trying first. Think of it as "the plugins you should actually install" rather than "every plugin that exists."

---

## 🚀 Getting Started

### Browse the Full Marketplace

Visit **[dshmarketplace.dev](https://dshmarketplace.dev)** to explore all ${totalPlugins}+ indexed plugins with:
- Advanced search and filtering
- Installation validation status
- Detailed plugin pages
- Categories and rankings

### Install the Marketplace Inside DSH

Get the marketplace as a DSH plugin for in-app browsing and installation:

\`\`\`bash
dsh plugin --profile web add npm:dsh-plugins-store
\`\`\`

Then access it via:
- \`/store\` command in DSH
- Settings → Plugins → Browse Store
- Use agent to search and install plugins

---

## 📦 Starter Pack

Essential plugins recommended for new DSH users:

`;

  // Add starter pack
  curated.starter.forEach(plugin => {
    const entry = generatePluginEntry(plugin, marketplaceData);
    if (entry) content += entry + '\n';
  });

  content += '\n---\n\n## 📑 Categories\n\n';

  // Add categories
  curated.categories.forEach(category => {
    content += `### ${category.name}\n\n`;

    category.plugins.forEach(plugin => {
      const entry = generatePluginEntry(plugin, marketplaceData);
      if (entry) content += entry + '\n';
    });

    content += '\n';
  });

  content += `---

## 🤝 Contributing

We welcome plugin submissions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- How to submit your plugin
- Selection criteria
- PR requirements

---

## 📚 Related Projects

- **[DSH Marketplace](https://github.com/DshMarketPlace/dshmarketplace)** — The full ${totalPlugins}+ plugin directory
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — Installable marketplace plugin
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — The official DSH project

---

## 📄 License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, DSH Marketplace has waived all copyright and related rights to this work.
`;

  return content;
}

// Generate Chinese README
function generateReadmeZH(marketplaceData) {
  const totalPlugins = marketplaceData.length;
  let content = `# Awesome DeepSeek Harness 插件

<div align="center">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![浏览市场](https://img.shields.io/badge/浏览-DSH%20插件市场-blue?style=flat-square)](https://dshmarketplace.dev/zh)
[![插件数量](https://img.shields.io/badge/插件-${totalPlugins}+-success?style=flat-square)](https://dshmarketplace.dev/zh)
[![欢迎PR](https://img.shields.io/badge/PRs-欢迎-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

精选的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件列表，由 [DSH 插件市场](https://dshmarketplace.dev/zh)维护。

[English](README.md) · [简体中文](README.zh-CN.md)

</div>

---

## 🌟 为什么有这个列表

**DSH 插件市场**索引了完整的 DeepSeek Harness 插件生态 — 目前已收录 ${totalPlugins}+ 个插件。

这个 **Awesome 列表**是精选子集：我们人工挑选值得优先尝试的插件。可以理解为"你应该安装的插件"而不是"所有存在的插件"。

---

## 🚀 开始使用

### 浏览完整市场

访问 **[dshmarketplace.dev](https://dshmarketplace.dev/zh)** 探索全部 ${totalPlugins}+ 个已索引插件，支持：
- 高级搜索和筛选
- 安装验证状态
- 详细插件页面
- 分类和排行榜

### 在 DSH 内安装市场插件

将市场作为 DSH 插件安装，实现应用内浏览和安装：

\`\`\`bash
dsh plugin --profile web add npm:dsh-plugins-store
\`\`\`

然后通过以下方式访问：
- DSH 中的 \`/store\` 命令
- 设置 → 插件 → 浏览商店
- 使用 Agent 搜索和安装插件

---

## 📦 入门套装

推荐新用户优先安装的核心插件：

`;

  // Add starter pack
  curated.starter.forEach(plugin => {
    const entry = generatePluginEntryZh(plugin, marketplaceData);
    if (entry) content += entry + '\n';
  });

  content += '\n---\n\n## 📑 分类\n\n';

  // Category name translations
  const categoryTranslations = {
    'UI & Experience': 'UI 与体验',
    'Models & Providers': '模型与提供商',
    'Memory': '记忆',
    'Tools & Capabilities': '工具与能力',
    'Vision & Multimodal': '视觉与多模态',
    'Workflow & Automation': '工作流与自动化',
    'Skills': '技能',
    'Sessions': '会话',
    'Theme & Appearance': '主题与外观',
    'Plugin Managers & Marketplaces': '插件管理器与市场',
    'Development': '开发',
    'Fun & Experimental': '趣味与实验性'
  };

  // Add categories
  curated.categories.forEach(category => {
    const zhName = categoryTranslations[category.name] || category.name;
    content += `### ${zhName}\n\n`;

    category.plugins.forEach(plugin => {
      const entry = generatePluginEntryZh(plugin, marketplaceData);
      if (entry) content += entry + '\n';
    });

    content += '\n';
  });

  content += `---

## 🤝 贡献

我们欢迎插件提交！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解：
- 如何提交你的插件
- 收录标准
- PR 要求

---

## 📚 相关项目

- **[DSH 插件市场](https://github.com/DshMarketPlace/dshmarketplace)** — 完整的 ${totalPlugins}+ 插件目录
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — 可安装的市场插件
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — DSH 官方项目

---

## 📄 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，DSH 插件市场已放弃本作品的所有版权及相关权利。
`;

  return content;
}

// Main function
async function main() {
  console.log('🚀 Generating README files...\n');

  const marketplaceData = await loadPluginData();

  // Generate English README
  const readmeEN = generateReadmeEN(marketplaceData);
  fs.writeFileSync(README_EN, readmeEN);
  console.log(`✓ Generated ${README_EN}`);

  // Generate Chinese README
  const readmeZH = generateReadmeZH(marketplaceData);
  fs.writeFileSync(README_ZH, readmeZH);
  console.log(`✓ Generated ${README_ZH}`);

  // Count plugins
  const starterCount = curated.starter.length;
  const totalCurated = starterCount + curated.categories.reduce((sum, cat) => sum + cat.plugins.length, 0);

  console.log(`\n📊 Statistics:`);
  console.log(`  - Marketplace plugins: ${marketplaceData.length}`);
  console.log(`  - Curated plugins: ${totalCurated}`);
  console.log(`  - Starter pack: ${starterCount}`);
  console.log(`  - Categories: ${curated.categories.length}`);

  console.log('\n✅ Done!');
}

main().catch(error => {
  console.error('❌ Error:', error.message);
  process.exit(1);
});
