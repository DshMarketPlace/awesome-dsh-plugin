const fs = require('node:fs');
const path = require('node:path');

const CACHE_FILE = path.join(__dirname, '../data/marketplace-cache.json');
const API = 'https://dshmarketplace.dev/api/v1/plugins';

function fullName(plugin) {
  return typeof plugin === 'string' ? plugin :
    plugin.subpath ? `${plugin.repo}#${plugin.subpath}` : plugin.repo;
}

function requiredNames(curated) {
  return [...new Set([
    ...curated.starter.map(fullName),
    ...curated.categories.flatMap(category => category.plugins.map(fullName)),
  ])];
}

function findPlugin(plugins, name) {
  return plugins.find(plugin => plugin.fullName?.toLowerCase() === name.toLowerCase());
}

async function getJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Marketplace HTTP ${response.status}`);
  const body = await response.json();
  if (!Array.isArray(body.results) || !Number.isFinite(body.total)) {
    throw new Error('Invalid Marketplace response');
  }
  return body;
}

// The API caps its page size. Query missing curated names explicitly instead
// of treating limit=2500 as a complete catalogue or dropping them from README.
async function fetchSnapshot(names, request = getJson) {
  const first = await request(`${API}?limit=100`);
  const plugins = [];
  for (const name of names) {
    let plugin = findPlugin(first.results, name);
    if (!plugin) {
      const page = await request(`${API}?q=${encodeURIComponent(name)}&limit=100`);
      plugin = findPlugin(page.results, name);
    }
    if (!plugin) throw new Error(`Plugin not found in marketplace: ${name}`);
    plugins.push(plugin);
  }
  return { total: first.total, count: plugins.length, results: plugins };
}

async function loadSnapshot(names) {
  if (process.env.MARKETPLACE_OFFLINE === '1') {
    const snapshot = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
    if (!Array.isArray(snapshot.results) || !Number.isFinite(snapshot.total)) {
      throw new Error('Invalid Marketplace snapshot; run npm test');
    }
    for (const name of names) {
      if (!findPlugin(snapshot.results, name)) {
        throw new Error(`Snapshot missing ${name}; run npm test and commit generated files`);
      }
    }
    return snapshot;
  }
  const snapshot = await fetchSnapshot(names);
  if (process.env.MARKETPLACE_WRITE_CACHE !== '0') {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(snapshot, null, 2) + '\n');
  }
  return snapshot;
}

module.exports = { fullName, requiredNames, findPlugin, fetchSnapshot, loadSnapshot };
