#!/usr/bin/env node
// Fix duplicate words within puzzles
const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync(__dirname + '/puzzles.js', 'utf8');
const sb = {};
vm.runInNewContext(src.replace('const PUZZLES', 'var PUZZLES'), sb);
const PUZZLES = sb.PUZZLES;

const CAT_POOL = {
  "Colors of the rainbow": ["TEAL", "MAGENTA", "SCARLET"],
  "Things with keys": ["ACCORDION", "CASH REGISTER", "ORGAN"],
  "Baseball terms": ["DUGOUT", "BULLPEN", "INFIELD"],
  "Flowers": ["ZINNIA", "ASTER", "MARIGOLD"],
  "Types of bear": ["KERMODE", "MOON", "SPECTACLED"],
  "Gym equipment": ["BENCH", "PULLUP BAR", "MEDICINE BALL"],
  "Primates": ["MACAQUE", "MARMOSET", "CAPUCHIN"],
  "Things that rust": ["CHAIN", "RAILING", "PADLOCK"],
  "Words that are also colors": ["OLIVE", "SILVER", "IVORY"],
  "Crustaceans": ["PRAWN", "KRILL", "CRAWFISH"],
  "Things that unfold": ["PARACHUTE", "NAPKIN", "PAMPHLET"],
  "Words meaning 'pale'": ["ASHEN", "PALLID", "GHOSTLY"],
  "Salamanders": ["HELLBENDER", "MUDPUPPY", "CAECILIAN"],
  "Things with a buckle": ["GAITER", "HARNESS", "STRAP"],
  "Words meaning 'to persuade'": ["COAX", "ENTICE", "COMPEL"],
  "Turkish dishes": ["LAHMACUN", "SIMIT", "DONER"],
  "Things with a knob": ["FAUCET", "DIAL", "DRAWER"],
  "Words meaning 'to predict'": ["AUGUR", "PROPHESY", "DIVINE"],
  "Dumpling types": ["PIEROGI", "GYOZA", "KNODEL"],
  "Things with a sole": ["PUMP", "SKATE", "CLOG"],
  "Words meaning 'to anger'": ["RILE", "INCENSE", "PROVOKE"],
  "Nuts": ["MACADAMIA", "FILBERT", "CHESTNUT"],
  "Things with a blade": ["SCYTHE", "SHEARS", "CHISEL"],
  "Words meaning 'to shrink'": ["WANE", "DWINDLE", "RECOIL"],
};

const FALLBACK = [
  "CANVAS", "PRISM", "RELIC", "EMBER", "NEXUS", "ATLAS", "VAPOR",
  "HELIX", "FACET", "MOTIF", "ANVIL", "GLYPH", "SIREN", "VERTEX",
  "QUILL", "FABLE", "HAVEN", "CREST", "TORQUE", "BASALT", "FJORD",
  "MOSAIC", "ZENITH", "SCARAB", "VELVET", "GRANITE", "FLINT", "LATCH",
  "ARCADE", "BEACON", "SUMMIT", "CHALICE", "QUARRY", "OASIS", "THICKET",
  "CINDER", "FLARE", "TIMBER", "BRINE", "GORGE", "DELTA", "SAGE",
  "FORGE", "PYLON", "LOOM", "TROVE", "ABYSS", "MANTLE", "PARCEL"
];
let fbIdx = 0;
let fixCount = 0;

PUZZLES.forEach(p => {
  const all = [];
  p.groups.forEach(g => g.words.forEach(w => all.push(w)));
  const groupWords = new Set(all);

  const seen = new Set(all);
  const newDecoys = [];

  p.decoys.forEach(d => {
    if (!seen.has(d)) {
      seen.add(d);
      newDecoys.push(d);
      return;
    }

    // This decoy is a duplicate — find replacement
    const cats = p.groups.map(g => g.category);
    let replacement = null;

    for (const cat of cats) {
      const pool = CAT_POOL[cat];
      if (!pool) continue;
      for (const c of pool) {
        if (!seen.has(c)) {
          replacement = c;
          break;
        }
      }
      if (replacement) break;
    }

    if (!replacement) {
      while (fbIdx < FALLBACK.length) {
        const f = FALLBACK[fbIdx++];
        if (!seen.has(f)) { replacement = f; break; }
      }
    }

    if (replacement) {
      seen.add(replacement);
      newDecoys.push(replacement);
      fixCount++;
      console.log(`Puzzle ${p.id}: duplicate "${d}" -> "${replacement}"`);
    } else {
      seen.add(d + '_');
      newDecoys.push(d);
      console.log(`Puzzle ${p.id}: COULD NOT fix duplicate "${d}"`);
    }
  });

  p.decoys = newDecoys;
});

console.log('\nFixed', fixCount, 'duplicates.');

// Verify
let ok = true;
PUZZLES.forEach(p => {
  const all = [];
  p.groups.forEach(g => g.words.forEach(w => all.push(w)));
  p.decoys.forEach(d => all.push(d));
  if (new Set(all).size !== all.length) {
    console.log('STILL DUPLICATE in puzzle', p.id);
    ok = false;
  }
});
if (ok) console.log('All puzzles clean.');

// Regenerate
let output = 'const PUZZLES = [\n';
PUZZLES.forEach((puzzle, pi) => {
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
  output += pi < PUZZLES.length - 1 ? ',\n' : '\n';
});
output += '];\n';
fs.writeFileSync(__dirname + '/puzzles.js', output);
console.log('Written', PUZZLES.length, 'puzzles.');
