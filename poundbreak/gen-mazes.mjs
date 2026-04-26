// Procedural maze generator for Pound Break levels 2-4. Run:
//   node gen-mazes.mjs
// Emits 3 maze maps (L2, L3, L4) ready to paste into game.js.
// Uses a recursive backtracker on a 11x11 cell grid with 1-cell walls
// between, producing a 24x24 map (rows/cols 1-22 carved, 0/23 walls).
// L3/L4 also place a key in a dead-end and replace one corridor cell
// with a locked door near the exit.

function mulberry32(a) {
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = a;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function buildMaze(seed) {
  const rng = mulberry32(seed);
  const W = 24, H = 24;
  // Start with all walls
  const g = Array.from({ length: H }, () => Array(W).fill("1"));
  // 11x11 cell grid; cell (cx,cy) is at map (col=1+cx*2, row=1+cy*2)
  const N = 11;
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const stack = [[0, 0]];
  visited[0][0] = true;
  g[1][1] = ".";
  while (stack.length) {
    const [cx, cy] = stack[stack.length - 1];
    const cands = [[1,0],[-1,0],[0,1],[0,-1]].filter(([dx, dy]) => {
      const nx = cx + dx, ny = cy + dy;
      return nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[ny][nx];
    });
    if (cands.length === 0) { stack.pop(); continue; }
    const [dx, dy] = cands[Math.floor(rng() * cands.length)];
    const nx = cx + dx, ny = cy + dy;
    visited[ny][nx] = true;
    const mx = 1 + cx * 2, my = 1 + cy * 2;
    const nmx = 1 + nx * 2, nmy = 1 + ny * 2;
    g[my + dy][mx + dx] = ".";
    g[nmy][nmx] = ".";
    stack.push([nx, ny]);
  }
  // Player start: cell (0, 5) at map (1, 11). Confirm that cell carved.
  // (Always carved since DFS starts there.)
  // Exit X at (23, 11): carve map (22, 11) and put X at (23, 11).
  // First carve from cell (10, 5) at map (21, 11) east.
  g[11][22] = ".";
  g[11][23] = "X";
  // BFS distances from start to find nice spots for K and dead ends.
  const dist = Array.from({ length: H }, () => Array(W).fill(-1));
  const q = [[1, 11]]; // map [col, row] = (1, 11)? Hmm careful with coords.
  // Convention here: g[row][col]. Player start map row=11, col=1.
  // Wait — earlier I said start cell (0,5) → map (col=1+0*2, row=1+5*2)=(1,11).
  // So start is at row 11, col 1. Let me just be consistent.
  const startCol = 1, startRow = 11;
  q[0] = [startCol, startRow];
  dist[startRow][startCol] = 0;
  while (q.length) {
    const [x, y] = q.shift();
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
      if (dist[ny][nx] !== -1) continue;
      const c = g[ny][nx];
      if (c === "1") continue;
      dist[ny][nx] = dist[y][x] + 1;
      q.push([nx, ny]);
    }
  }
  // Find dead-end cells: a `.` cell with exactly 1 floor neighbor.
  const deadEnds = [];
  for (let cy = 0; cy < N; cy++) {
    for (let cx = 0; cx < N; cx++) {
      const x = 1 + cx * 2, y = 1 + cy * 2;
      if (g[y][x] !== ".") continue;
      let openN = 0;
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        if (g[y + dy]?.[x + dx] === ".") openN++;
      }
      if (openN === 1 && dist[y][x] > 4) deadEnds.push([x, y, dist[y][x]]);
    }
  }
  // Sort by distance descending → farthest dead ends first.
  deadEnds.sort((a, b) => b[2] - a[2]);
  return { grid: g, deadEnds, dist, startCol, startRow };
}

function placeLevel(seed, opts) {
  const { grid, deadEnds, dist } = buildMaze(seed);
  const G = grid.map(r => r.slice());
  const usedCells = new Set();
  function takeDeadEnd() {
    while (deadEnds.length) {
      const [x, y, d] = deadEnds.shift();
      const k = `${x},${y}`;
      if (!usedCells.has(k)) { usedCells.add(k); return [x, y, d]; }
    }
    return null;
  }
  // Place pups at the 5 farthest dead ends
  const pupCells = [];
  for (let i = 0; i < (opts.pups || 5); i++) {
    const cell = takeDeadEnd();
    if (cell) {
      G[cell[1]][cell[0]] = "P";
      pupCells.push(cell);
    }
  }
  // Place K at a far-but-not-pup dead end (if requested)
  if (opts.key) {
    const cell = takeDeadEnd();
    if (cell) G[cell[1]][cell[0]] = "K";
  }
  // Locked door at the corridor cell just before the exit X (col 22 row 11)
  if (opts.lock) {
    G[11][22] = "L";
  }
  return G.map(r => r.join(""));
}

// ────────────────────────────────────────────────
// Verification: same checks as verify-levels.mjs
function verify(L, name) {
  const errs = [];
  const m = L.map;
  if (m.length !== 24) errs.push(`height=${m.length}`);
  m.forEach((r, y) => { if (r.length !== 24) errs.push(`row ${y} len=${r.length}`); });
  for (let x = 0; x < 24; x++) {
    if (m[0][x] !== "1") errs.push(`top (${x}) bad`);
    if (m[23][x] !== "1") errs.push(`bot (${x}) bad`);
  }
  for (let y = 0; y < 24; y++) {
    if (m[y][0] !== "1") errs.push(`left (${y}) bad`);
    const c = m[y][23];
    if (c !== "1" && c !== "X") errs.push(`right (${y})='${c}'`);
  }
  for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
    const c = m[y][x];
    if (c === "D" || c === "L") {
      const n = y > 0 ? m[y-1][x] : "1";
      const s = y < 23 ? m[y+1][x] : "1";
      const e = x < 23 ? m[y][x+1] : "1";
      const w = x > 0 ? m[y][x-1] : "1";
      const passable = c2 => c2 === "." || c2 === "P" || c2 === "K" || c2 === "X";
      const v = n === "1" && s === "1" && passable(e) && passable(w);
      const h = e === "1" && w === "1" && passable(n) && passable(s);
      if (!v && !h) errs.push(`door (${x},${y})='${c}' N=${n} S=${s} E=${e} W=${w}`);
    }
  }
  const sx = Math.floor(L.playerStart.x), sy = Math.floor(L.playerStart.y);
  const vis = Array.from({length: 24}, () => Array(24).fill(false));
  const q = [{x: sx, y: sy}]; vis[sy][sx] = true;
  while (q.length) {
    const {x, y} = q.shift();
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= 24 || ny >= 24 || vis[ny][nx]) continue;
      if (m[ny][nx] === "1") continue;
      vis[ny][nx] = true; q.push({x: nx, y: ny});
    }
  }
  let pups = 0, keys = 0, exits = 0;
  for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
    const c = m[y][x];
    if (c === "P") { pups++; if (!vis[y][x]) errs.push(`pup (${x},${y}) unreachable`); }
    if (c === "K") { keys++; if (!vis[y][x]) errs.push(`key (${x},${y}) unreachable`); }
    if (c === "X") { exits++; if (!vis[y][x]) errs.push(`exit (${x},${y}) unreachable`); }
  }
  if (exits !== 1) errs.push(`exits=${exits}`);
  // K reachable without L
  if (keys > 0) {
    const v2 = Array.from({length: 24}, () => Array(24).fill(false));
    const q2 = [{x: sx, y: sy}]; v2[sy][sx] = true;
    while (q2.length) {
      const {x, y} = q2.shift();
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= 24 || ny >= 24 || v2[ny][nx]) continue;
        if (m[ny][nx] === "1" || m[ny][nx] === "L") continue;
        v2[ny][nx] = true; q2.push({x: nx, y: ny});
      }
    }
    for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
      if (m[y][x] === "K" && !v2[y][x]) errs.push(`key needs L`);
    }
  }
  for (const e of L.enemies || []) {
    const c = m[Math.floor(e.y)]?.[Math.floor(e.x)];
    if (c !== ".") errs.push(`enemy ${e.kind}@(${e.x},${e.y}) on '${c}'`);
  }
  for (const p of L.pickups || []) {
    const c = m[Math.floor(p.y)]?.[Math.floor(p.x)];
    if (c !== ".") errs.push(`pickup ${p.kind}@(${p.x},${p.y}) on '${c}'`);
  }
  if (errs.length === 0) {
    console.log(`PASS ${name}: pups=${pups} keys=${keys} exits=${exits}`);
    return true;
  }
  console.log(`FAIL ${name}:`);
  for (const e of errs) console.log(`  - ${e}`);
  return false;
}

// Find floor cells near a point for placing pickups/enemies
function findFloorNear(map, cx, cy, used, n) {
  const out = [];
  for (let r = 1; r < 12 && out.length < n; r++) {
    for (let dy = -r; dy <= r && out.length < n; dy++) {
      for (let dx = -r; dx <= r && out.length < n; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
        const x = cx + dx, y = cy + dy;
        if (x < 1 || y < 1 || x > 22 || y > 22) continue;
        if (map[y][x] !== ".") continue;
        const k = `${x},${y}`;
        if (used.has(k)) continue;
        used.add(k);
        out.push([x, y]);
      }
    }
  }
  return out;
}

function build(seed, opts, name) {
  const map = placeLevel(seed, opts);
  const used = new Set();
  // Reserve player start
  used.add(`1,11`);
  // Pick enemy positions near pups, far from player
  const enemies = [];
  const pups = [];
  for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
    if (map[y][x] === "P") pups.push([x, y]);
  }
  let ei = 0;
  for (const e of opts.enemies) {
    const target = pups[ei % pups.length] || [12, 12];
    ei++;
    const cells = findFloorNear(map, target[0], target[1], used, 3);
    if (cells.length === 0) { console.log(`no spot for enemy ${e.kind}`); continue; }
    const [ex, ey] = cells[0];
    enemies.push({ kind: e.kind, x: ex + 0.5, y: ey + 0.5, hp: e.hp, fireCd: e.fireCd });
  }
  // Pickups: scatter a few
  const pickups = [];
  for (const p of opts.pickups) {
    const target = [Math.floor(Math.random() * 20) + 2, Math.floor(Math.random() * 20) + 2];
    const cells = findFloorNear(map, target[0], target[1], used, 1);
    if (cells.length === 0) continue;
    const [px, py] = cells[0];
    pickups.push({ kind: p.kind, x: px + 0.5, y: py + 0.5 });
  }
  const L = {
    map,
    playerStart: { x: 1.5, y: 11.5, a: 0 },
    enemies,
    pickups,
  };
  if (verify(L, name)) {
    return L;
  }
  return null;
}

// ────────────────────────────────────────────────
// Generate L2/L3/L4 with curated seeds. Try a few seeds and pick the
// first that passes verification + has enough dead ends.

function tryBuild(opts, name, seedStart) {
  for (let seed = seedStart; seed < seedStart + 200; seed++) {
    const L = build(seed, opts, `${name}.seed${seed}`);
    if (L) return { ...L, _seed: seed };
  }
  return null;
}

const L2opts = {
  pups: 5,
  key: false,
  lock: false,
  enemies: [
    { kind: "catcher", hp: 30, fireCd: 1.3 },
    { kind: "catcher", hp: 30, fireCd: 1.3 },
    { kind: "catcher", hp: 30, fireCd: 1.3 },
    { kind: "mascot",  hp: 55, fireCd: 1.5 },
  ],
  pickups: [
    { kind: "toy" }, { kind: "toy" },
    { kind: "ball" }, { kind: "ball" }, { kind: "ball" },
  ],
};
const L3opts = {
  pups: 5,
  key: true,
  lock: true,
  enemies: [
    { kind: "catcher", hp: 30, fireCd: 1.2 },
    { kind: "catcher", hp: 30, fireCd: 1.2 },
    { kind: "catcher", hp: 30, fireCd: 1.2 },
    { kind: "catcher", hp: 30, fireCd: 1.2 },
    { kind: "mascot",  hp: 55, fireCd: 1.4 },
  ],
  pickups: [
    { kind: "toy" }, { kind: "toy" },
    { kind: "ball" }, { kind: "ball" }, { kind: "ball" },
  ],
};
const L4opts = {
  pups: 5,
  key: true,
  lock: true,
  enemies: [
    { kind: "catcher", hp: 30, fireCd: 1.0 },
    { kind: "catcher", hp: 30, fireCd: 1.0 },
    { kind: "catcher", hp: 30, fireCd: 1.0 },
    { kind: "catcher", hp: 30, fireCd: 1.0 },
    { kind: "catcher", hp: 30, fireCd: 1.2 },
    { kind: "mascot",  hp: 55, fireCd: 1.3 },
    { kind: "mascot",  hp: 55, fireCd: 1.3 },
  ],
  pickups: [
    { kind: "toy" }, { kind: "toy" },
    { kind: "ball" }, { kind: "ball" }, { kind: "ball" },
  ],
};

const L2 = tryBuild(L2opts, "L2", 7);
const L3 = tryBuild(L3opts, "L3", 42);
const L4 = tryBuild(L4opts, "L4", 99);

if (!L2 || !L3 || !L4) {
  console.log("Could not build all levels");
  process.exit(1);
}

function emit(name, L) {
  console.log(`\n  // ${name} — procedurally generated maze (seed ${L._seed})`);
  console.log(`  const ${name}_MAP = [`);
  for (const r of L.map) console.log(`    "${r}",`);
  console.log(`  ];`);
  // Inline LEVELS entry
  console.log(`  // LEVELS entry for ${name}:`);
  console.log(`  { map: ${name}_MAP, playerStart: { x: ${L.playerStart.x}, y: ${L.playerStart.y}, a: ${L.playerStart.a} }, enemies: [`);
  for (const e of L.enemies) {
    console.log(`      { kind: "${e.kind}", x: ${e.x}, y: ${e.y}, hp: ${e.hp}, fireCd: ${e.fireCd} },`);
  }
  console.log(`    ], pickups: [`);
  for (const p of L.pickups) {
    console.log(`      { kind: "${p.kind}", x: ${p.x}, y: ${p.y} },`);
  }
  console.log(`    ] },`);
}

emit("L2", L2);
emit("L3", L3);
emit("L4", L4);
