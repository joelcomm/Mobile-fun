// Verify enemy + pickup positions in game.js are on '.' cells.
import fs from "node:fs";

const src = fs.readFileSync(new URL("./game.js", import.meta.url), "utf8");

function extractMap(name) {
  const re = new RegExp("const " + name + " = \\[\\s*([\\s\\S]*?)\\s*\\];", "m");
  const m = src.match(re);
  if (!m) throw new Error("missing " + name);
  return m[1].split("\n").map(l => {
    const mm = l.match(/"([^"]+)"/);
    return mm ? mm[1] : null;
  }).filter(Boolean);
}

function extractLevelMap(label) {
  const idx = src.indexOf(label);
  const slice = src.slice(idx);
  const re = /map:\s*\[\s*([\s\S]*?)\],/;
  const m = slice.match(re);
  if (!m) throw new Error("no map after " + label);
  return m[1].split("\n").map(l => {
    const mm = l.match(/"([^"]+)"/);
    return mm ? mm[1] : null;
  }).filter(Boolean);
}

const maps = {
  L1: extractMap("L1_MAP"),
  L2: extractMap("L2_MAP"),
  L3: extractMap("L3_MAP"),
  L4: extractMap("L4_MAP"),
  L5: extractLevelMap("const LEVEL_5"),
};

// Slice the LEVELS source between successive "// Level N" markers.
const labels = ["// Level 1 —", "// Level 2 —", "// Level 3 —", "// Level 4 —", "LEVEL_5,"];
const labelKeys = ["L1", "L2", "L3", "L4", "L5"];
const blocks = {};
for (let i = 0; i < labels.length; i++) {
  const start = src.indexOf(labels[i]);
  const end = i + 1 < labels.length ? src.indexOf(labels[i + 1]) : src.indexOf("];", start);
  blocks[labelKeys[i]] = src.slice(start, end);
}
// L5's enemies/pickups are inside the LEVEL_5 declaration earlier; use that block instead.
{
  const start = src.indexOf("const LEVEL_5");
  const end = src.indexOf("};", start);
  blocks.L5 = src.slice(start, end);
}

const errs = [];
for (const name of labelKeys) {
  const block = blocks[name];
  const map = maps[name];
  const re = /\{\s*kind:\s*"([^"]+)",\s*x:\s*([\d.]+),\s*y:\s*([\d.]+)/g;
  let m, count = { catcher: 0, mascot: 0, boss: 0, toy: 0, ball: 0, pup: 0, key: 0 };
  while ((m = re.exec(block))) {
    const kind = m[1], x = parseFloat(m[2]), y = parseFloat(m[3]);
    count[kind] = (count[kind] || 0) + 1;
    const cy = Math.floor(y), cx = Math.floor(x);
    const c = map[cy] && map[cy][cx];
    if (c !== ".") errs.push(`${name} ${kind} at (${x},${y}) on '${c}' (row ${cy} col ${cx})`);
  }
  console.log(`${name}: catchers=${count.catcher} mascots=${count.mascot} boss=${count.boss} toys=${count.toy} balls=${count.ball}`);
}

if (errs.length === 0) console.log("\nALL POSITIONS ON FLOOR");
else { console.log("\nFAIL:"); for (const e of errs) console.log("  " + e); }
