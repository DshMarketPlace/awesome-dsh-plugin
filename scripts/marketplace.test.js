const assert = require('node:assert/strict');
const test = require('node:test');
const { fetchSnapshot, findPlugin, requiredNames } = require('./marketplace');

test('fills missing curated entries beyond the first API page', async () => {
  const requested = [];
  const snapshot = await fetchSnapshot(['owner/first', 'owner/new'], async url => {
    requested.push(url);
    return { total: 8000, results: [{ fullName: url.includes('?q=') ? 'owner/new' : 'owner/first' }] };
  });
  assert.equal(snapshot.total, 8000);
  assert.deepEqual(snapshot.results.map(p => p.fullName), ['owner/first', 'owner/new']);
  assert.equal(requested.length, 2);
});

test('never substitutes a repository root for a missing subpackage', async () => {
  assert.equal(findPlugin([{ fullName: 'owner/repo' }], 'owner/repo#child'), undefined);
  await assert.rejects(fetchSnapshot(['owner/repo#child'], async () => ({
    total: 1, results: [{ fullName: 'owner/repo' }],
  })), /Plugin not found/);
});

test('API failures fail generation instead of silently shrinking the list', async () => {
  await assert.rejects(fetchSnapshot(['owner/repo'], async () => {
    throw new Error('Marketplace HTTP 503');
  }), /HTTP 503/);
});

test('starter overlap is deduplicated while subpackages remain distinct', () => {
  assert.deepEqual(requiredNames({
    starter: ['owner/repo'], categories: [{ plugins: [
      { repo: 'owner/repo' }, { repo: 'owner/repo', subpath: 'child' },
    ] }],
  }), ['owner/repo', 'owner/repo#child']);
});
