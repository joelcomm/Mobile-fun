#!/usr/bin/env node
// Audit all puzzles for quality issues:
// 1. Decoys that don't plausibly fit any kept group (no "near-miss tension")
// 2. Groups with words that seem wrong for the category
// 3. Duplicate words within a puzzle
// 4. Empty or too-short groups
// 5. Pool size outside 11-14

const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync(__dirname + '/puzzles.js', 'utf8');
const sandbox = {};
vm.runInNewContext(src.replace('const PUZZLES', 'var PUZZLES'), sandbox);
const PUZZLES = sandbox.PUZZLES;

const issues = [];

PUZZLES.forEach(p => {
  const allWords = [];
  p.groups.forEach(g => {
    g.words.forEach(w => allWords.push(w));
    // Check for tiny groups
    if (g.words.length < 3) {
      issues.push({ id: p.id, type: 'SMALL_GROUP', detail: `"${g.category}" has only ${g.words.length} words: ${g.words.join(', ')}` });
    }
  });
  (p.decoys || []).forEach(w => allWords.push(w));

  // Check pool size
  if (allWords.length < 11 || allWords.length > 14) {
    issues.push({ id: p.id, type: 'POOL_SIZE', detail: `Pool has ${allWords.length} words (want 11-14)` });
  }

  // Check for duplicates
  const seen = new Set();
  allWords.forEach(w => {
    if (seen.has(w)) {
      issues.push({ id: p.id, type: 'DUPLICATE', detail: `"${w}" appears more than once` });
    }
    seen.add(w);
  });

  // Check decoy count
  if (!p.decoys || p.decoys.length === 0) {
    issues.push({ id: p.id, type: 'NO_DECOYS', detail: 'No decoys at all' });
  }

  // Print each puzzle summary for manual review
  const groupSummary = p.groups.map(g => `  ${g.category} (${g.words.length}): ${g.words.join(', ')}`).join('\n');
  const decoyStr = (p.decoys || []).join(', ');

  // Flag puzzles where decoys seem unrelated to any group category
  // This is heuristic - just flag for review
});

if (issues.length === 0) {
  console.log('No structural issues found in', PUZZLES.length, 'puzzles.');
} else {
  console.log('Found', issues.length, 'issues:');
  issues.forEach(i => {
    console.log(`  Puzzle ${i.id} [${i.type}]: ${i.detail}`);
  });
}

// Now print all puzzles in a reviewable format
console.log('\n=== FULL PUZZLE DUMP ===\n');
PUZZLES.forEach(p => {
  console.log(`--- Puzzle ${p.id} (${p.groups.reduce((s,g) => s + g.words.length, 0) + (p.decoys||[]).length} words) ---`);
  p.groups.forEach(g => {
    console.log(`  [${g.category}] (${g.words.length}): ${g.words.join(', ')}`);
  });
  console.log(`  DECOYS: ${(p.decoys||[]).join(', ')}`);
});
