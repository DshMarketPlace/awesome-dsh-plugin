# Contributing to Awesome DSH Plugins

Thank you for your interest in contributing! This guide explains how to submit your plugin to be featured in the Awesome List.

## 📋 Submission Criteria

To be included in the Awesome List, your plugin must meet these requirements:

### Essential Requirements

1. **Real DSH Plugin**: Must be a functional DeepSeek Harness plugin
2. **Public GitHub Repository**: Source code must be publicly accessible
3. **Clear Documentation**: README with installation instructions and usage guide
4. **Installation Method**: Must have a documented way to install (`dsh plugin add ...`)
5. **Active Maintenance**: Repository should not be archived or abandoned
6. **GitHub Topics**: Add `dsh-plugin` and `deepseek-harness` topics to your repo

### Quality Standards

- ✅ Plugin solves a real problem or adds useful functionality
- ✅ Code is reasonably documented
- ✅ Installation process is straightforward
- ✅ No malicious or harmful behavior
- ✅ License is specified

### Bonus Points (not required, but helpful)

- Has been validated by DSH Marketplace
- Good test coverage
- Active community engagement
- Detailed documentation
- Regular updates

## 🚀 How to Submit

### Step 1: Prepare Your Plugin

Make sure your plugin meets the criteria above. Check:
- [ ] README explains what the plugin does
- [ ] Installation command is documented
- [ ] GitHub topics include `dsh-plugin` and `deepseek-harness`
- [ ] Repository is not archived
- [ ] License file is present

### Step 2: Submit via Pull Request

1. **Fork this repository**

2. **Edit `data/curated.yml`**

   Find the appropriate category and add your plugin:

   ```yaml
   - name: Your Category
     slug: category-slug
     plugins:
       # ... existing plugins ...
       - repo: your-username/your-plugin-repo
         # Optional: if your plugin is in a monorepo subpath
         # subpath: path/to/plugin
   ```

   If your plugin doesn't fit existing categories, you can suggest a new one, but please explain why in your PR.

3. **Test your changes**

   Run validation locally:

   ```bash
   npm install
   npm test
   ```

   This will:
   - Validate YAML syntax
   - Check repo format
   - Fetch metadata from DSH Marketplace API
   - Generate README previews

4. **Submit the Pull Request**

   - Title: `Add [plugin-name]`
   - Description: Brief explanation of what your plugin does and why it should be included
   - Link to your GitHub repository
   - Mention the install command

### Step 3: PR Review

Our maintainers will review your submission within a few days. We check:

1. Does it meet the submission criteria?
2. Is the plugin functional and useful?
3. Is the category appropriate?
4. Does it duplicate existing functionality?

## 📝 PR Template

When submitting, please include:

```markdown
## Plugin Information

- **Repository**: https://github.com/username/plugin-name
- **Category**: [e.g., UI & Experience, Memory, Tools]
- **Install Command**: `dsh plugin --profile web add ...`

## What does it do?

[Brief description of functionality]

## Why should it be included?

[Explain why this plugin would be valuable to DSH users]

## Checklist

- [ ] Plugin is actively maintained
- [ ] README has installation instructions
- [ ] GitHub topics include `dsh-plugin` and `deepseek-harness`
- [ ] Plugin has been tested and works
- [ ] No duplicate functionality
- [ ] Validated YAML locally (`npm test`)
```

## 🎯 Selection Process

This is a **curated** list, not a comprehensive directory. We prioritize:

1. **Usefulness**: Does it solve a common problem?
2. **Quality**: Is it well-implemented and documented?
3. **Uniqueness**: Does it offer something different from existing plugins?
4. **Maintenance**: Is the author responsive and active?

Not every plugin that meets the technical requirements will be accepted. We aim to keep this list focused on plugins that DSH users should actually try.

## 🔄 Updating Your Plugin

If your plugin's information changes:

1. Fork the repository
2. Update `data/curated.yml` with the new information
3. Submit a PR with title: `Update [plugin-name]`

## ❌ Removal Requests

If you want your plugin removed from the list:

1. Open an issue with title: `Remove [plugin-name]`
2. We'll remove it in the next update

## 🤝 Code of Conduct

- Be respectful and constructive
- Focus on technical merit
- No spam or self-promotion without value
- Follow GitHub's community guidelines

## 📚 Resources

- **DSH Marketplace**: https://dshmarketplace.dev
- **Browse Full Catalog**: https://dshmarketplace.dev/plugins
- **DSH Documentation**: https://github.com/deepseek-ai/deepseek-harness
- **Plugin Development Guide**: [Coming soon]

## Questions?

Open an issue with the `question` label, and we'll help you out!

---

Thank you for contributing to the DSH plugin ecosystem! 🎉
