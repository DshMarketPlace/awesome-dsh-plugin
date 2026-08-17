# Awesome DSH Plugin - Project Summary

## 🎯 项目定位

**Awesome DeepSeek Harness Plugins** 是一个精选的 DSH 插件列表，由 DSH Marketplace 维护。

### 与其他项目的区别

| 项目 | 定位 | 插件数量 |
|------|------|---------|
| **dshmarketplace.dev** | 完整插件目录 + 详细页面 | 2,350+ |
| **dsh-plugins-store** | 可安装的市场插件 | - |
| **Awesome DSH Plugins** | GitHub 精选列表 | ~60 |

## 📊 当前状态

- **精选插件**: 66 个
- **入门套装**: 10 个核心插件
- **分类**: 12 个主要分类
- **语言**: 英文 + 简体中文

### 分类结构

1. UI & Experience (6 个插件)
2. Models & Providers (5 个插件)
3. Memory (5 个插件)
4. Tools & Capabilities (5 个插件)
5. Vision & Multimodal (5 个插件)
6. Workflow & Automation (5 个插件)
7. Skills (5 个插件)
8. Sessions (4 个插件)
9. Theme & Appearance (5 个插件)
10. Plugin Managers & Marketplaces (4 个插件)
11. Development (5 个插件)
12. Fun & Experimental (2 个插件)

## 🏗️ 技术架构

### 数据流

```
data/curated.yml (人工维护的精选列表)
        ↓
DSH Marketplace API (获取完整 metadata)
        ↓
scripts/generate-readme.js (生成脚本)
        ↓
README.md + README.zh-CN.md (自动生成)
```

### 文件结构

```
awesome-dsh-plugin/
├── data/
│   ├── curated.yml              # 精选插件列表 (人工维护)
│   └── marketplace-cache.json   # API 缓存 (自动生成)
├── scripts/
│   ├── generate-readme.js       # README 生成脚本
│   └── validate.js              # 数据验证脚本
├── .github/
│   ├── workflows/
│   │   └── validate.yml         # CI 验证
│   └── PULL_REQUEST_TEMPLATE.md # PR 模板
├── README.md                    # 英文主页 (自动生成)
├── README.zh-CN.md              # 中文主页 (自动生成)
├── CONTRIBUTING.md              # 贡献指南
├── LICENSE                      # CC0-1.0
└── package.json                 # 依赖配置
```

## 🔄 工作流程

### 维护者工作流

1. **添加新插件**:
   ```bash
   # 编辑 data/curated.yml，添加 repo
   npm test  # 验证 + 生成 README
   git commit -m "Add plugin-name"
   ```

2. **更新插件信息**:
   ```bash
   npm run generate  # 从 API 重新获取 metadata
   ```

### PR 贡献者工作流

1. Fork 仓库
2. 编辑 `data/curated.yml`
3. 运行 `npm test`
4. 提交 PR

### CI 自动化

- PR 时自动验证 YAML 格式
- 验证 repo 格式
- 生成 README 并检查是否有变更
- 如果生成的 README 与提交不一致，CI 失败

## 🎨 设计原则

### 1. 轻量优先

- 不重新实现主站功能
- 不维护重复的 metadata
- 脚本简单直接

### 2. 人工精选

- 不是自动收录所有插件
- 维护者人工评审质量
- 优先推荐实用且活跃的插件

### 3. 数据驱动

- metadata 从 API 获取
- 人工只维护"哪些插件被选中"
- 描述、stars、链接自动更新

### 4. 社区友好

- PR 流程简单
- 验证即时反馈
- 明确的准入标准

## 🚀 下一步计划

### Phase 2 (可选)

- [ ] 添加 GitHub Topics 到仓库
- [ ] 提交到 awesome-list registry
- [ ] 社区推广 (LINUX DO、NodeSeek)
- [ ] 定期更新 (weekly cron)

### Phase 3 (扩展)

- [ ] Badge 支持 (verified, installable)
- [ ] 插件更新日志
- [ ] 作者 highlight
- [ ] 多语言扩展 (日文等)

## 📝 需要人工设置的 GitHub 配置

### Repository Settings

**About 部分**:
- Description: `Awesome DeepSeek Harness plugins — curated DSH plugin list, installable extensions, tools, skills and plugin managers.`

**Topics** (建议添加):
```
awesome
awesome-list
deepseek
deepseek-harness
dsh
dsh-plugin
dsh-plugins
agent
ai-agent
plugins
developer-tools
```

### Branch Protection (可选)

建议对 `main` 分支启用:
- Require status checks to pass
- Require branches to be up to date

## 🔗 关联资源

- **主站**: https://github.com/DshMarketPlace/dshmarketplace
- **市场插件**: https://github.com/DshMarketPlace/dsh-plugins-store
- **网站**: https://dshmarketplace.dev
- **DSH 官方**: https://github.com/deepseek-ai/deepseek-harness

## 📞 维护者

- 仓库: https://github.com/DshMarketPlace/awesome-dsh-plugin
- 组织: https://github.com/DshMarketPlace

---

**最后更新**: 2026-08-17
