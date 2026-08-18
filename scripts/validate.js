#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const https = require('https');

const DATA_FILE = path.join(__dirname, '../data/curated.yml');
const CACHE_FILE = path.join(__dirname, '../data/marketplace-cache.json');
const MARKETPLACE_API = 'https://dshmarketplace.dev/api/v1/plugins';

function getJson(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (res) => {
      let data = '';

      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`Marketplace API returned HTTP ${res.statusCode}`));
          return;
        }

        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error(`Invalid Marketplace API response: ${error.message}`));
        }
      });
    });

    request.setTimeout(15000, () => {
      request.destroy(new Error('Marketplace API request timed out'));
    });
    request.on('error', reject);
  });
}

// Fetch marketplace data for validation
async function fetchMarketplaceData() {
  const parsed = await getJson(`${MARKETPLACE_API}?limit=2500`);
  return parsed.results || parsed.plugins || parsed;
}

async function fetchPluginByFullName(fullName) {
  const parsed = await getJson(`${MARKETPLACE_API}?q=${encodeURIComponent(fullName)}`);
  const plugins = parsed.results || parsed.plugins || parsed;

  if (!Array.isArray(plugins)) return null;

  const normalizedFullName = fullName.toLowerCase();
  return plugins.find(plugin =>
    typeof plugin.fullName === 'string' &&
    plugin.fullName.toLowerCase() === normalizedFullName
  ) || null;
}

async function loadMarketplaceData() {
  try {
    return await fetchMarketplaceData();
  } catch (error) {
    console.warn(`⚠ Failed to fetch from API: ${error.message}`);
    if (fs.existsSync(CACHE_FILE)) {
      console.log('Using cached marketplace data');
      const cached = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      return cached.results || cached.plugins || cached;
    }
    return null; // Allow validation without network
  }
}

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
  const starterRepos = new Set();
  const categoryRepos = new Set();
  const allRepos = new Map();
  let errors = 0;

  function validateRepo(repo, location) {
    if (typeof repo !== 'string') {
      console.error(`✗ Plugin in ${location} should be a string, got: ${typeof repo}`);
      errors++;
      return;
    }

    // Check repo format
    if (!repo.match(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/)) {
      console.error(`✗ Invalid repo format in ${location}: ${repo}`);
      errors++;
      return;
    }

    if (starterRepos.has(repo)) {
      console.error(`✗ Duplicate plugin in ${location}: ${repo}`);
      errors++;
      return;
    }

    starterRepos.add(repo);
    if (!allRepos.has(repo)) {
      allRepos.set(repo, { repo, location });
    }
  }

  function validatePlugin(plugin, location) {
    if (!plugin || typeof plugin !== 'object' || !plugin.repo) {
      console.error(`✗ Plugin in ${location} missing "repo" field`);
      errors++;
      return;
    }

    // Check repo format
    if (!plugin.repo.match(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/)) {
      console.error(`✗ Invalid repo format in ${location}: ${plugin.repo}`);
      errors++;
      return;
    }

    const key = plugin.subpath ? `${plugin.repo}#${plugin.subpath}` : plugin.repo;

    if (categoryRepos.has(key)) {
      console.error(`✗ Duplicate plugin in ${location}: ${key}`);
      errors++;
      return;
    }

    categoryRepos.add(key);
    if (!allRepos.has(key)) {
      allRepos.set(key, { repo: plugin.repo, subpath: plugin.subpath, location });
    }
  }

  // Validate starter pack (string array)
  curated.starter.forEach((repo, idx) => {
    validateRepo(repo, `starter[${idx}]`);
  });

  // Validate categories
  curated.categories.forEach((category, catIdx) => {
    if (!category.name || !category.slug || !category.plugins) {
      console.error(`✗ Category ${catIdx} missing required fields (name, slug, plugins)`);
      errors++;
      return;
    }

    category.plugins.forEach((plugin, pluginIdx) => {
      validatePlugin(plugin, `categories[${catIdx}].plugins[${pluginIdx}] (${category.name})`);
    });
  });

  starterRepos.forEach(repo => {
    if (!categoryRepos.has(repo)) {
      console.error(`✗ Starter plugin is missing from categories: ${repo}`);
      errors++;
    }
  });

  if (errors > 0) {
    console.error(`\n✗ Found ${errors} error(s) in structure validation`);
    process.exit(1);
  }

  const starterAlsoInCategories = [...starterRepos].filter(repo => categoryRepos.has(repo)).length;
  const totalUnique = allRepos.size;

  console.log(`✓ Unique plugins in categories: ${categoryRepos.size}`);
  console.log(`✓ Plugins in starter: ${starterRepos.size}`);
  console.log(`✓ Starter also in categories: ${starterAlsoInCategories}`);
  console.log(`✓ Total unique plugins across both: ${totalUnique}`);

  // Check recommended range
  if (totalUnique < 50) {
    console.warn(`⚠ Plugin count (${totalUnique}) is below recommended minimum (50)`);
  }
  if (totalUnique > 100) {
    console.warn(`⚠ Plugin count (${totalUnique}) is above recommended maximum (100)`);
  }

  console.log('\n✅ Structure validation passed!');
  return { curated, allRepos: [...allRepos.values()] };
}

// Cross-check with marketplace
async function validateWithMarketplace(allRepos) {
  console.log('\n🔍 Validating against marketplace data...\n');

  const marketplaceData = await loadMarketplaceData();

  if (!marketplaceData || marketplaceData.length === 0) {
    console.log('⚠ Skipping marketplace validation (no data available)');
    return true;
  }

  console.log(`✓ Loaded ${marketplaceData.length} plugins from marketplace`);

  let notFound = 0;
  let notInstallable = 0;
  let installFailed = 0;
  const issues = [];

  for (const { repo, subpath, location } of allRepos) {
    const fullName = subpath ? `${repo}#${subpath}` : repo;
    let meta = marketplaceData.find(p => p.fullName === fullName);

    if (!meta) {
      try {
        meta = await fetchPluginByFullName(fullName);
        if (meta) {
          console.log(`✓ Found via exact Marketplace query: ${fullName}`);
        }
      } catch (error) {
        console.warn(`⚠ Exact Marketplace query failed for ${fullName}: ${error.message}`);
      }
    }

    if (!meta) {
      console.error(`✗ Plugin not found in marketplace: ${fullName} (${location})`);
      issues.push({ type: 'not_found', plugin: fullName, location });
      notFound++;
      continue;
    }

    // Check installability - now treated as error
    if (meta.installable === false) {
      console.error(`✗ Plugin not installable: ${fullName} (${location})`);
      issues.push({ type: 'not_installable', plugin: fullName, location });
      notInstallable++;
    }

    // Check install validation status
    if (meta.installCheck === 'failed') {
      console.error(`✗ Plugin install check failed: ${fullName} (${location})`);
      issues.push({ type: 'install_failed', plugin: fullName, location });
      installFailed++;
    }
  }

  const hasCriticalErrors = notFound > 0 || notInstallable > 0 || installFailed > 0;

  console.log(`\n📊 Marketplace validation results:`);
  console.log(`  - Found in marketplace: ${allRepos.length - notFound}/${allRepos.length}`);
  console.log(`  - Not found: ${notFound}`);
  console.log(`  - Not installable: ${notInstallable}`);
  console.log(`  - Install check failed: ${installFailed}`);

  if (hasCriticalErrors) {
    console.error(`\n✗ Marketplace validation failed!`);
    console.error(`Please remove plugins that are not found or have failed install checks.`);
    process.exit(1);
  }

  if (notInstallable > 0) {
    console.warn(`\n⚠ Warning: ${notInstallable} plugin(s) are not installable`);
    console.warn(`Consider replacing them with installable alternatives.`);
  }

  console.log('\n✅ Marketplace validation passed!');
  return true;
}

async function main() {
  const { curated, allRepos } = validateCuratedList();
  await validateWithMarketplace(allRepos);
  console.log('\n✅ All validations passed!');
}

main().catch(error => {
  console.error('\n❌ Validation failed:', error.message);
  process.exit(1);
});
