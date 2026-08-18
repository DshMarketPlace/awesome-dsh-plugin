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
          const total = parsed.total || plugins.length;
          resolve({ plugins, total });
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

// Load cached data or fetch new
async function loadPluginData() {
  // Always use cache if it exists and is recent (within 24 hours)
  if (fs.existsSync(CACHE_FILE)) {
    const stats = fs.statSync(CACHE_FILE);
    const ageHours = (Date.now() - stats.mtimeMs) / 1000 / 60 / 60;

    if (ageHours < 24) {
      console.log(`✓ Using cached data (${Math.round(ageHours)}h old)`);
      const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      const plugins = cached.results || cached.plugins || cached;
      const total = cached.total || plugins.length;
      return {
        plugins: Array.isArray(plugins) ? plugins : [],
        total
      };
    }
  }

  // Fetch new data only if cache is missing or stale
  try {
    const response = await fetchPluginData();
    const plugins = response.results || response.plugins || response;
    const total = response.total || plugins.length;
    console.log(`✓ Fetched ${plugins.length} plugins from marketplace API (total indexed: ${total})`);
    return { plugins, total };
  } catch (error) {
    console.warn(`⚠ Failed to fetch from API: ${error.message}`);

    // Fall back to cache even if stale
    if (fs.existsSync(CACHE_FILE)) {
      console.log('Using stale cache as fallback');
      const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      const plugins = cached.results || cached.plugins || cached;
      const total = cached.total || plugins.length;
      return {
        plugins: Array.isArray(plugins) ? plugins : [],
        total
      };
    }
    throw new Error('No cache available and API fetch failed');
  }
}

// Sanitize text to remove invalid characters
function sanitizeText(text) {
  if (!text) return '';
  // Remove replacement characters and other problematic Unicode
  return text
    .replace(/�/g, '') // Remove � (replacement character)
    .replace(/[\x00-\x08\x0B-\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters
    .trim();
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
  const githubUrl = meta.repoUrl || `https://github.com/${meta.fullName}`;
  const marketplaceUrl = meta.url;
  const summary = sanitizeText(meta.summary || '');
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
  const githubUrl = meta.repoUrl || `https://github.com/${meta.fullName}`;
  const marketplaceUrl = meta.url;
  const summary = sanitizeText(meta.summaryZh || meta.summary || '');
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
function generateReadmeEN(data) {
  const { plugins: marketplaceData, total: totalPlugins } = data;
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
dsh plugin --profile web add dshmarketplace-plugin
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
  let starterCount = 0;
  curated.starter.forEach(repo => {
    const entry = generatePluginEntry(repo, marketplaceData);
    if (entry) {
      content += entry + '\n';
      starterCount++;
    }
  });

  content += '\n---\n\n## 📑 Categories\n\n';

  // Add categories
  let totalCategoryPlugins = 0;
  curated.categories.forEach(category => {
    content += `### ${category.name}\n\n`;

    let categoryCount = 0;
    category.plugins.forEach(plugin => {
      const entry = generatePluginEntry(plugin, marketplaceData);
      if (entry) {
        content += entry + '\n';
        categoryCount++;
      }
    });

    totalCategoryPlugins += categoryCount;
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

  fs.writeFileSync(README_EN, content, 'utf8');
  console.log(`✓ Generated ${README_EN}`);

  return { starterCount, totalCategoryPlugins };
}

// Generate Chinese README
function generateReadmeZH(data) {
  const { plugins: marketplaceData, total: totalPlugins } = data;
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
dsh plugin --profile web add dshmarketplace-plugin
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
  let starterCount = 0;
  curated.starter.forEach(repo => {
    const entry = generatePluginEntryZh(repo, marketplaceData);
    if (entry) {
      content += entry + '\n';
      starterCount++;
    }
  });

  content += '\n---\n\n## 📑 分类\n\n';

  // Add categories
  let totalCategoryPlugins = 0;
  curated.categories.forEach(category => {
    content += `### ${category.name}\n\n`;

    let categoryCount = 0;
    category.plugins.forEach(plugin => {
      const entry = generatePluginEntryZh(plugin, marketplaceData);
      if (entry) {
        content += entry + '\n';
        categoryCount++;
      }
    });

    totalCategoryPlugins += categoryCount;
    content += '\n';
  });

  content += `---

## 🤝 贡献

我们欢迎插件提交！请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 了解：
- 如何提交你的插件
- 选择标准
- PR 要求

---

## 📚 相关项目

- **[DSH 插件市场](https://github.com/DshMarketPlace/dshmarketplace)** — 完整的 ${totalPlugins}+ 插件目录
- **[dsh-plugins-store](https://github.com/DshMarketPlace/dsh-plugins-store)** — 可安装的市场插件
- **[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)** — DSH 官方项目

---

## 📄 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

在法律允许的范围内，DSH Marketplace 已放弃对本作品的所有版权及相关权利。
`;

  fs.writeFileSync(README_ZH, content, 'utf8');
  console.log(`✓ Generated ${README_ZH}`);

  return { starterCount, totalCategoryPlugins };
}

// Main
(async () => {
  try {
    console.log('🚀 Generating README files...\n');

    const data = await loadPluginData();

    const enStats = generateReadmeEN(data);
    const zhStats = generateReadmeZH(data);

    // Calculate unique plugins
    const curated = yaml.load(fs.readFileSync(DATA_FILE, 'utf8'));
    const categoryRepos = new Set();
    const detailsRepos = new Set();
    curated.categories.forEach(cat => {
      cat.plugins.forEach(p => {
        const key = (typeof p === 'string') ? p : (p.subpath ? `${p.repo}#${p.subpath}` : p.repo);
        categoryRepos.add(key);

        const meta = findPlugin(data.plugins, p);
        if (meta && typeof meta.url === 'string' && meta.url.startsWith('https://dshmarketplace.dev')) {
          detailsRepos.add(key);
        }
      });
    });

    console.log(`\n📊 Statistics:`);
    console.log(`  - Marketplace total: ${data.total}`);
    console.log(`  - Curated unique: ${categoryRepos.size}`);
    console.log(`  - Starter pack: ${enStats.starterCount}`);
    console.log(`  - Categories: ${curated.categories.length}`);
    console.log(`  - With Details links: ${detailsRepos.size} (${Math.round(detailsRepos.size/categoryRepos.size*100)}%)`);

    console.log('\n✅ Done!');
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
})();
