#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const DATA_FILE = path.join(__dirname, '../data/curated.yml');

function validateCuratedList() {
  console.log('🔍 Validating curated list...\n');

  // Load and parse YAML
  let curated;
  try {
    curated = yaml.load(fs.readFileSync(DATA_FILE, 'utf8'));
    console.log('✓ YAML syntax is valid');
  } catch (error) {
    console.error('✗ YAML syntax error:', error.message);
    process.exit(1);
  }

  // Check structure
  if (!curated.starter || !Array.isArray(curated.starter)) {
    console.error('✗ Missing or invalid "starter" array');
    process.exit(1);
  }
  console.log(`✓ Starter pack has ${curated.starter.length} plugins`);

  if (!curated.categories || !Array.isArray(curated.categories)) {
    console.error('✗ Missing or invalid "categories" array');
    process.exit(1);
  }
  console.log(`✓ Found ${curated.categories.length} categories`);

  // Validate plugins
  const seenRepos = new Set();
  let totalPlugins = 0;

  function validateRepo(repo, location) {
    if (typeof repo !== 'string') {
      console.error(`✗ Plugin in ${location} should be a string, got: ${typeof repo}`);
      process.exit(1);
    }

    // Check repo format
    if (!repo.match(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/)) {
      console.error(`✗ Invalid repo format in ${location}: ${repo}`);
      process.exit(1);
    }

    seenRepos.add(repo);
    totalPlugins++;
  }

  function validatePlugin(plugin, location) {
    if (!plugin.repo) {
      console.error(`✗ Plugin in ${location} missing "repo" field`);
      process.exit(1);
    }

    // Check repo format
    if (!plugin.repo.match(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/)) {
      console.error(`✗ Invalid repo format in ${location}: ${plugin.repo}`);
      process.exit(1);
    }

    const key = plugin.subpath ? `${plugin.repo}#${plugin.subpath}` : plugin.repo;
    seenRepos.add(key);
    totalPlugins++;
  }

  // Validate starter pack (string array)
  curated.starter.forEach((repo, idx) => {
    validateRepo(repo, `starter[${idx}]`);
  });

  // Validate categories
  curated.categories.forEach((category, catIdx) => {
    if (!category.name || !category.slug || !category.plugins) {
      console.error(`✗ Category ${catIdx} missing required fields (name, slug, plugins)`);
      process.exit(1);
    }

    category.plugins.forEach((plugin, pluginIdx) => {
      validatePlugin(plugin, `categories[${catIdx}].plugins[${pluginIdx}]`);
    });
  });

  console.log(`✓ Total unique plugins: ${totalPlugins}`);
  console.log(`✓ Unique repos: ${seenRepos.size}`);

  // Check recommended range
  if (totalPlugins < 50) {
    console.warn(`⚠ Plugin count (${totalPlugins}) is below recommended minimum (50)`);
  }
  if (totalPlugins > 120) {
    console.warn(`⚠ Plugin count (${totalPlugins}) is above recommended maximum (120)`);
  }

  console.log('\n✅ Validation passed!');
}

validateCuratedList();
