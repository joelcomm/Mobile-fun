#!/usr/bin/env node
// Migration script: converts old Threads puzzles (4 groups × 4 words, with level)
// to new format (2–3 strands of variable size + decoys).
//
// Transform per puzzle:
//   1. Keep 3 of the 4 groups as strands (drop the level-3 group).
//   2. From the kept strand with level-2, move 1 word into decoys (strand becomes size 3).
//   3. From the dropped group (level-3), take 2 words as decoys (prefer words that
//      superficially fit a kept strand). Discard the other 2.
//   4. Strip `level`. Emit { id, groups, decoys }.
//
// Result: each puzzle has 3 strands (sizes 4, 4, 3) + 3 decoys = 14 words total.

const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, 'puzzles.js'), 'utf8');

// Extract the PUZZLES array
const srcContent = src.replace('const PUZZLES =', 'var __PUZZLES__ =');
const vm = require('vm');
const sandbox = {};
vm.runInNewContext(srcContent, sandbox);
const PUZZLES = sandbox.__PUZZLES__;

console.log('Input puzzle count:', PUZZLES.length);

// Deterministic seeded RNG for reproducible migrations
function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(42);

function seededPick(arr) {
  return arr[Math.floor(rng() * arr.length)];
}

const migrated = PUZZLES.map(puzzle => {
  // Sort groups by level so we know which is which
  const sorted = puzzle.groups.slice().sort((a, b) => a.level - b.level);

  // Drop the level-3 group; keep levels 0, 1, 2
  const dropped = sorted[3];
  const kept = [sorted[0], sorted[1], sorted[2]];

  const decoys = [];

  // From the level-2 strand, move 1 word into decoys (strand becomes size 3)
  const level2Group = kept[2];
  const movedWord = level2Group.words[Math.floor(rng() * level2Group.words.length)];
  level2Group.words = level2Group.words.filter(w => w !== movedWord);
  decoys.push(movedWord);

  // From the dropped group, take 2 words as decoys
  const droppedWords = dropped.words.slice();
  // Shuffle deterministically
  for (let i = droppedWords.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [droppedWords[i], droppedWords[j]] = [droppedWords[j], droppedWords[i]];
  }
  decoys.push(droppedWords[0], droppedWords[1]);

  // Build new groups without level
  const newGroups = kept.map(g => ({
    category: g.category,
    words: g.words.slice()
  }));

  return {
    id: puzzle.id,
    groups: newGroups,
    decoys: decoys
  };
});

console.log('Output puzzle count:', migrated.length);

if (migrated.length !== 283) {
  console.error('ERROR: Expected 283 puzzles, got', migrated.length);
  process.exit(1);
}

// Verify each puzzle has correct structure
migrated.forEach((p, i) => {
  const groupCount = p.groups.length;
  const sizes = p.groups.map(g => g.words.length);
  const decoyCount = p.decoys.length;
  const totalWords = sizes.reduce((a, b) => a + b, 0) + decoyCount;

  if (groupCount !== 3) {
    console.error(`Puzzle ${p.id}: expected 3 groups, got ${groupCount}`);
    process.exit(1);
  }
  if (decoyCount !== 3) {
    console.error(`Puzzle ${p.id}: expected 3 decoys, got ${decoyCount}`);
    process.exit(1);
  }
  sizes.forEach((s, gi) => {
    if (s < 3 || s > 6) {
      console.error(`Puzzle ${p.id}, group ${gi}: size ${s} out of range [3,6]`);
      process.exit(1);
    }
  });
});

// Generate output
let output = 'const PUZZLES = [\n';

migrated.forEach((puzzle, pi) => {
  output += '  {\n';
  output += `    id: ${puzzle.id},\n`;
  output += '    groups: [\n';
  puzzle.groups.forEach((g, gi) => {
    const words = g.words.map(w => JSON.stringify(w)).join(', ');
    output += `      { category: ${JSON.stringify(g.category)}, words: [${words}] }`;
    output += gi < puzzle.groups.length - 1 ? ',\n' : '\n';
  });
  output += '    ],\n';
  const decoyStr = puzzle.decoys.map(d => JSON.stringify(d)).join(', ');
  output += `    decoys: [${decoyStr}]\n`;
  output += '  }';
  output += pi < migrated.length - 1 ? ',\n' : '\n';
});

output += '];\n';

fs.writeFileSync(path.join(__dirname, 'puzzles.js'), output);
console.log('Migration complete. puzzles.js rewritten with', migrated.length, 'puzzles.');
