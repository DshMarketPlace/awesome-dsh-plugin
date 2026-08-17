#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const https = require('https');

const DATA_FILE = path.join(__dirname, '../data/curated.yml');
const CACHE_FILE = path.join(__dirname, '../data/marketplace-cache.json');

// Fetch marketplace data for validation
async function fetchMarketplaceData() {
  return new Promise((resolve, reject) => {
    https.get('https://dshmarketplace.dev/api/v1/plugins?limit=2500', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const plugins = parsed.results || parsed.plugins || parsed;
          resolve(plugins);
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
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
  const starterRepos = new Set(curated.starter); // Starter repos to skip duplicate check
  const seenRepos = new Set();
  const allRepos = [];
  let totalPlugins = 0;
  let errors = 0;

  function validateRepo(repo, location, isStarter = false) {
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

    // Only add to seenRepos for duplicate checking if not in starter
    if (!isStarter) {
      if (seenRepos.has(repo)) {
        console.error(`✗ Duplicate plugin in ${location}: ${repo}`);
        errors++;
      }
      seenRepos.add(repo);
    }

    allRepos.push({ repo, location });
    totalPlugins++;
  }

  function validatePlugin(plugin, location) {
    if (!plugin.repo) {
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

    // Skip duplicate check if this repo is in starter pack
    const isInStarter = starterRepos.has(plugin.repo) || starterRepos.has(key);

    // Check for duplicates within categories only
    if (!isInStarter && seenRepos.has(key)) {
      console.error(`✗ Duplicate plugin in ${location}: ${key}`);
      errors++;
    }

    if (!isInStarter) {
      seenRepos.add(key);
    }

    allRepos.push({ repo: plugin.repo, subpath: plugin.subpath, location });
    totalPlugins++;
  }

  // Validate starter pack (string array)
  curated.starter.forEach((repo, idx) => {
    validateRepo(repo, `starter[${idx}]`, true);
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

  if (errors > 0) {
    console.error(`\n✗ Found ${errors} error(s) in structure validation`);
    process.exit(1);
  }

  console.log(`✓ Total plugins: ${totalPlugins}`);

  // Calculate actual unique plugins
  const uniqueInCategories = seenRepos.size;
  const uniqueInStarter = starterRepos.size;
  const starterAlsoInCategories = [...starterRepos].filter(r => seenRepos.has(r)).length;
  const totalUnique = uniqueInCategories + uniqueInStarter - starterAlsoInCategories;

  console.log(`✓ Unique plugins in categories: ${uniqueInCategories}`);
  console.log(`✓ Unique plugins in starter: ${uniqueInStarter}`);
  console.log(`✓ Starter also in categories: ${starterAlsoInCategories}`);
  console.log(`✓ Total unique plugins across both: ${totalUnique}`);

  // Check recommended range
  if (totalPlugins < 50) {
    console.warn(`⚠ Plugin count (${totalPlugins}) is below recommended minimum (50)`);
  }
  if (totalPlugins > 120) {
    console.warn(`⚠ Plugin count (${totalPlugins}) is above recommended maximum (120)`);
  }

  console.log('\n✅ Structure validation passed!');
  return { curated, allRepos };
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

  allRepos.forEach(({ repo, subpath, location }) => {
    const fullName = subpath ? `${repo}#${subpath}` : repo;
    const meta = marketplaceData.find(p => p.fullName === fullName || p.fullName === repo);

    if (!meta) {
      console.error(`✗ Plugin not found in marketplace: ${fullName} (${location})`);
      issues.push({ type: 'not_found', plugin: fullName, location });
      notFound++;
      return;
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
  });

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
