// One-shot verifier for Pound Break levels. Usage: node verify-levels.mjs
// Pass tests by editing the MAPS array below, then run.

function verify(L, name) {
  const errs = [];
  const m = L.map;
  if (m.length !== 24) errs.push(`map height ${m.length} != 24`);
  m.forEach((r, y) => { if (r.length !== 24) errs.push(`row ${y} length ${r.length} != 24`); });
  // edges
  for (let x = 0; x < 24; x++) {
    if (m[0]?.[x] !== "1") errs.push(`top (${x},0) not wall`);
    if (m[23]?.[x] !== "1") errs.push(`bot (${x},23) not wall`);
  }
  for (let y = 0; y < 24; y++) {
    if (m[y]?.[0] !== "1") errs.push(`left (0,${y}) not wall`);
    const c = m[y]?.[23];
    if (c !== "1" && c !== "X") errs.push(`right (23,${y}) = '${c}'`);
  }
  // door audit
  const isWall = c => "1234DLX".includes(c);
  const isPass = c => !isWall(c) || c === "D" || c === "L" || c === "X";
  for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
    const c = m[y]?.[x];
    if (c === "D" || c === "L") {
      const n = y > 0 ? m[y-1][x] : "1";
      const s = y < 23 ? m[y+1][x] : "1";
      const e = x < 23 ? m[y][x+1] : "1";
      const w = x > 0 ? m[y][x-1] : "1";
      const vDoor = n === "1" && s === "1" && (e === "." || e === "P" || e === "K") && (w === "." || w === "P" || w === "K");
      const hDoor = e === "1" && w === "1" && (n === "." || n === "P" || n === "K") && (s === "." || s === "P" || s === "K");
      if (!vDoor && !hDoor) errs.push(`door (${x},${y})='${c}' bad: N=${n} S=${s} E=${e} W=${w}`);
    }
  }
  // BFS from player
  const sx = Math.floor(L.playerStart.x), sy = Math.floor(L.playerStart.y);
  if (m[sy]?.[sx] === undefined) errs.push(`player start out of bounds`);
  if (m[sy]?.[sx] === "1") errs.push(`player start (${sx},${sy})='${m[sy][sx]}' is wall`);
  const vis = Array.from({length: 24}, () => Array(24).fill(false));
  const q = [{x: sx, y: sy}];
  vis[sy][sx] = true;
  while (q.length) {
    const {x, y} = q.shift();
    for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= 24 || ny >= 24) continue;
      if (vis[ny][nx]) continue;
      const nc = m[ny][nx];
      if (nc === "1") continue;
      vis[ny][nx] = true;
      q.push({x: nx, y: ny});
    }
  }
  let pups = 0, keys = 0, exits = 0;
  for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
    const c = m[y][x];
    if (c === "P") { pups++; if (!vis[y][x]) errs.push(`pup (${x},${y}) unreachable`); }
    if (c === "K") { keys++; if (!vis[y][x]) errs.push(`key (${x},${y}) unreachable`); }
    if (c === "X") { exits++; if (!vis[y][x]) errs.push(`exit (${x},${y}) unreachable`); }
  }
  if (exits !== 1) errs.push(`exits=${exits} (need 1)`);
  if (pups < 3) errs.push(`only ${pups} pups`);
  // K reachable without L
  if (keys > 0) {
    const v2 = Array.from({length: 24}, () => Array(24).fill(false));
    const q2 = [{x: sx, y: sy}];
    v2[sy][sx] = true;
    while (q2.length) {
      const {x, y} = q2.shift();
      for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= 24 || ny >= 24 || v2[ny][nx]) continue;
        const nc = m[ny][nx];
        if (nc === "1" || nc === "L") continue;
        v2[ny][nx] = true;
        q2.push({x: nx, y: ny});
      }
    }
    for (let y = 0; y < 24; y++) for (let x = 0; x < 24; x++) {
      if (m[y][x] === "K" && !v2[y][x]) errs.push(`key (${x},${y}) needs key to reach (gated by L)`);
    }
  }
  // entities on .
  for (const e of L.enemies || []) {
    const c = m[Math.floor(e.y)]?.[Math.floor(e.x)];
    if (c !== ".") errs.push(`enemy ${e.kind} at (${e.x},${e.y}) on '${c}'`);
  }
  for (const p of L.pickups || []) {
    const c = m[Math.floor(p.y)]?.[Math.floor(p.x)];
    if (c !== ".") errs.push(`pickup ${p.kind} at (${p.x},${p.y}) on '${c}'`);
  }
  if (errs.length === 0) console.log(`PASS ${name}: pups=${pups} keys=${keys} exits=${exits}`);
  else { console.log(`FAIL ${name}:`); for (const e of errs) console.log(`  - ${e}`); }
  return errs.length === 0;
}

// LEVEL 2 — "Pillar Hall": open arena rows 4-19, cols 1-22, sparse pillars.
// Player enters from west corridor row 12. Exit east on row 12.
const L2 = {
  map: [
    "111111111111111111111111", //  0
    "111111111111111111111111", //  1
    "111111111111111111111111", //  2
    "111111111111111111111111", //  3
    "1......................1", //  4
    "1.11.11.P.11.11.11.P.111", //  5
    "1......................1", //  6
    "1.11...11.11...11.11.111", //  7
    "1......................1", //  8
    "1.11.11.11.P.11.11.11..1", //  9
    "1......................1", // 10
    "1.11.11.11.11.11.11.11.1", // 11
    "1......................X", // 12
    "1.11.11.11.11.11.11.11.1", // 13
    "1......................1", // 14
    "1.11.11.11.11.11.11.11.1", // 15
    "1......................1", // 16
    "1.11...11.11...11.11.111", // 17
    "1......................1", // 18
    "1.11.11.P.11.11.11.P.111", // 19
    "1......................1", // 20
    "111111111111111111111111", // 21
    "111111111111111111111111", // 22
    "111111111111111111111111", // 23
  ],
  playerStart: { x: 1.5, y: 12.5, a: 0 },
  enemies: [
    { kind: "catcher", x: 6.5,  y: 6.5,  hp: 30, fireCd: 1.3 },
    { kind: "catcher", x: 17.5, y: 6.5,  hp: 30, fireCd: 1.3 },
    { kind: "catcher", x: 11.5, y: 18.5, hp: 30, fireCd: 1.3 },
    { kind: "mascot",  x: 11.5, y: 4.5,  hp: 55, fireCd: 1.5 },
  ],
  pickups: [
    { kind: "toy",  x: 12.5, y: 4.5  },
    { kind: "ball", x: 12.5, y: 20.5 },
    { kind: "ball", x: 4.5,  y: 12.5 },
    { kind: "toy",  x: 21.5, y: 12.5 },
  ],
};

verify(L2, "L2");

// LEVEL 3 — "Split arena": vertical wall down col 11 splits west/east.
// Locked door in the middle, key in west alcove. Exit east.
const L3 = {
  map: [
    "111111111111111111111111", //  0
    "111111111111111111111111", //  1
    "111111111111111111111111", //  2
    "111111111111111111111111", //  3
    "1..........1...........1", //  4
    "1.11.11.11.1.11.11.11..1", //  5
    "1..........1...........1", //  6
    "1.11.K.11..1.11.11.11..1", //  7
    "1..........1...........1", //  8
    "1.11.11.P..1..P.11.11..1", //  9
    "1..........1...........1", // 10
    "1.11.11.11.1.11.11.11..1", // 11
    "1..........L...........X", // 12
    "1.11.11.11.1.11.11.11..1", // 13
    "1..........1...........1", // 14
    "1.11.11.P..1..P.11.11..1", // 15
    "1..........1...........1", // 16
    "1.11...11..1.11.11.11..1", // 17
    "1..........1...........1", // 18
    "1.11.11.11.1.11.11.P...1", // 19
    "1..........1...........1", // 20
    "111111111111111111111111", // 21
    "111111111111111111111111", // 22
    "111111111111111111111111", // 23
  ],
  playerStart: { x: 1.5, y: 12.5, a: 0 },
  enemies: [
    { kind: "catcher", x: 4.5,  y: 9.5,  hp: 30, fireCd: 1.2 },
    { kind: "catcher", x: 4.5,  y: 17.5, hp: 30, fireCd: 1.2 },
    { kind: "catcher", x: 15.5, y: 9.5,  hp: 30, fireCd: 1.2 },
    { kind: "catcher", x: 15.5, y: 17.5, hp: 30, fireCd: 1.2 },
    { kind: "mascot",  x: 18.5, y: 12.5, hp: 55, fireCd: 1.4 },
  ],
  pickups: [
    { kind: "toy",  x: 4.5,  y: 12.5 },
    { kind: "ball", x: 9.5,  y: 12.5 },
    { kind: "ball", x: 18.5, y: 12.5 },
    { kind: "toy",  x: 22.5, y: 19.5 },
  ],
};
verify(L3, "L3");

// LEVEL 4 — "Quadrants": vertical wall col 11 + horizontal walls rows 7
// and 17 split the play area into four small quadrants connected by
// doors. Key in NW quadrant; locked door blocks east half at row 12.
const L4 = {
  map: [
    "111111111111111111111111", //  0
    "111111111111111111111111", //  1
    "111111111111111111111111", //  2
    "111111111111111111111111", //  3
    "1..........1...........1", //  4
    "1.11.K.11..1..11.11.11.1", //  5
    "1..........1...........1", //  6
    "11111D1111111111D1111111", //  7
    "1..........1...........1", //  8
    "1.11.11.11.1.11.11.11..1", //  9
    "1..........1...........1", // 10
    "1.11.11.P..1..P.11.11..1", // 11
    "1..........L...........X", // 12
    "1.11.11.P..1..P.11.11..1", // 13
    "1..........1...........1", // 14
    "1.11.11.11.1.11.11.11..1", // 15
    "1..........1...........1", // 16
    "11111D1111111111D1111111", // 17
    "1..........1...........1", // 18
    "1.11...11..1..P...11...1", // 19
    "1..........1...........1", // 20
    "111111111111111111111111", // 21
    "111111111111111111111111", // 22
    "111111111111111111111111", // 23
  ],
  playerStart: { x: 1.5, y: 12.5, a: 0 },
  enemies: [
    { kind: "catcher", x: 4.5,  y: 9.5,  hp: 30, fireCd: 1.0 },
    { kind: "catcher", x: 15.5, y: 9.5,  hp: 30, fireCd: 1.0 },
    { kind: "catcher", x: 4.5,  y: 15.5, hp: 30, fireCd: 1.0 },
    { kind: "catcher", x: 15.5, y: 15.5, hp: 30, fireCd: 1.0 },
    { kind: "catcher", x: 20.5, y: 19.5, hp: 30, fireCd: 1.2 },
    { kind: "mascot",  x: 18.5, y: 12.5, hp: 55, fireCd: 1.3 },
    { kind: "mascot",  x: 4.5,  y: 12.5, hp: 55, fireCd: 1.3 },
  ],
  pickups: [
    { kind: "toy",  x: 9.5,  y: 12.5 },
    { kind: "toy",  x: 18.5, y: 4.5  },
    { kind: "ball", x: 14.5, y: 12.5 },
    { kind: "ball", x: 22.5, y: 4.5  },
    { kind: "ball", x: 22.5, y: 19.5 },
  ],
};
verify(L4, "L4");
