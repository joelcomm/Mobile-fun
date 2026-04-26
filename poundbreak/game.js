"use strict";
(function () {
  const cvs = document.getElementById("view");
  const ctx = cvs.getContext("2d");
  const RW = 320, RH = 200;
  cvs.width = RW; cvs.height = RH;

  // ─── MAP ──────────────────────────────────────────────
  // 1-4 = walls, D = door, L = locked door, X = exit,
  // . = floor, P = pup cage (item), K = key (item)
  // 24×24 maze grid. Narrow corridors with multiple turns, small rooms,
  // and dead-end alcoves hiding pups. Boss arena top-right behind locked
  // door; key tucked into a side room reachable without the key. Player
  // starts bottom-left and works north through the kennel.
  // Fixed-size grid; loadLevel() rewrites it for each level.
  const MW = 24, MH = 24;
  const GRID = Array.from({ length: MH }, () => new Array(MW).fill("1"));
  function g(x, y) {
    if (x < 0 || y < 0 || x >= MW || y >= MH) return "1";
    return GRID[y][x];
  }
  function setCell(x, y, v) { GRID[y][x] = v; }
  function isWall(c) { return c === "1" || c === "2" || c === "3" || c === "4" || c === "D" || c === "L" || c === "X"; }
  function isDoorLike(c) { return c === "D" || c === "L" || c === "X"; }

  // ─── PLAYER ───────────────────────────────────────────
  const player = {
    x: 1.5, y: 22.5, a: -Math.PI / 2,
    hp: 100, ammo: 24, pups: 0, maxPups: 0, hasKey: false,
    fireCd: 0, hitFlash: 0, bob: 0,
    kick: 0,
  };

  // ─── LEVELS ───────────────────────────────────────────
  // L1-L4 are the early maze runs (no boss). L5 is the boss finale.
  // Each level: { map: 24 strings of 24 chars, playerStart, enemies[], pickups[] }.
  // L1: small concentric arena, single door from west corridor. Verified.
  const L1_MAP = [
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "11111111111............1",
    "11111111111.1111.1111.11",
    "11111111111.1..P.1..P.11",
    "11111111111.1.11.1.11..1",
    "11111111111.1.1..1.1...1",
    "11111111111.1.1111.1.111",
    "11111111111.1......1...1",
    "............D..........X",
    "11111111111.1......1...1",
    "11111111111.1.1111.1.111",
    "11111111111.1.1..1.1...1",
    "11111111111.1.11.1.11..1",
    "11111111111.1..P.1....11",
    "11111111111.1111.1111.11",
    "11111111111............1",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
  ];
  // L2: "Pillar Hall" — open arena with regular pillars, no doors/keys.
  const L2_MAP = [
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "1......................1",
    "1.11.11.P.11.11.11.P.111",
    "1......................1",
    "1.11...11.11...11.11.111",
    "1......................1",
    "1.11.11.11.P.11.11.11..1",
    "1......................1",
    "1.11.11.11.11.11.11.11.1",
    "1......................X",
    "1.11.11.11.11.11.11.11.1",
    "1......................1",
    "1.11.11.11.11.11.11.11.1",
    "1......................1",
    "1.11...11.11...11.11.111",
    "1......................1",
    "1.11.11.P.11.11.11.P.111",
    "1......................1",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
  ];
  // L3: "Split arena" — vertical wall splits west/east, locked door
  // mid-row, key tucked into the west half.
  const L3_MAP = [
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "1..........1...........1",
    "1.11.11.11.1.11.11.11..1",
    "1..........1...........1",
    "1.11.K.11..1.11.11.11..1",
    "1..........1...........1",
    "1.11.11.P..1..P.11.11..1",
    "1..........1...........1",
    "1.11.11.11.1.11.11.11..1",
    "1..........L...........X",
    "1.11.11.11.1.11.11.11..1",
    "1..........1...........1",
    "1.11.11.P..1..P.11.11..1",
    "1..........1...........1",
    "1.11...11..1.11.11.11..1",
    "1..........1...........1",
    "1.11.11.11.1.11.11.P...1",
    "1..........1...........1",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
  ];
  // L4: "Quadrants" — vertical wall col 11 + horizontal walls row 7/17
  // split into 4 quadrants linked by doors. Key NW, locked door at the
  // central corridor.
  const L4_MAP = [
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
    "1..........1...........1",
    "1.11.K.11..1..11.11.11.1",
    "1..........1...........1",
    "11111D1111111111D1111111",
    "1..........1...........1",
    "1.11.11.11.1.11.11.11..1",
    "1..........1...........1",
    "1.11.11.P..1..P.11.11..1",
    "1..........L...........X",
    "1.11.11.P..1..P.11.11..1",
    "1..........1...........1",
    "1.11.11.11.1.11.11.11..1",
    "1..........1...........1",
    "11111D1111111111D1111111",
    "1..........1...........1",
    "1.11...11..1..P...11...1",
    "1..........1...........1",
    "111111111111111111111111",
    "111111111111111111111111",
    "111111111111111111111111",
  ];

  const LEVEL_5 = {
    map: [
      "111111111111111111111111", //  0
      "1.....1...1............1", //  1
      "1.111.1.K.1............1", //  2
      "1.1.1.1...1............X", //  3  X = exit
      "1.1.1.111.1............1", //  4
      "1...1...1.1............1", //  5
      "111D111.1.111111L1111111", //  6  L = locked boss arena door
      "1.....1.1.1...........11", //  7
      "1.111.1.1.1.111111111..1", //  8
      "1.1...1...1.1.......1..1", //  9
      "1.1.111.111.1.11111.1..1", // 10
      "1.1.1.P...1.1.1.P.1.1..1", // 11
      "1...1.111.1.1.1...1.1.11", // 12
      "111.1.1...1.1.111.1.1..1", // 13
      "1...1.1.1.1.1.1...1.1..1", // 14
      "1.111.1.1.1...1.1.111..1", // 15
      "1.....1.1.1...1.1......1", // 16
      "1.1111.1.111111.111111.1", // 17
      "1.1..P.1........1...P1.1", // 18
      "1.1.1111.111111.1.1..1.1", // 19
      "1.1......1...P1.1.111..1", // 20
      "1.111111.1.111.1.....1D1", // 21
      "1.P............1.......1", // 22
      "111111111111111111111111", // 23
    ],
    playerStart: { x: 1.5, y: 22.5, a: -Math.PI / 2 },
    enemies: [
      { kind: "catcher", x: 10.5, y: 22.5, hp: 30, fireCd: 1 },
      { kind: "catcher", x: 5.5,  y: 16.5, hp: 30, fireCd: 1.2 },
      { kind: "catcher", x: 14.5, y: 18.5, hp: 30, fireCd: 1.4 },
      { kind: "catcher", x: 3.5,  y: 12.5, hp: 30, fireCd: 1 },
      { kind: "catcher", x: 17.5, y: 13.5, hp: 30, fireCd: 1.3 },
      { kind: "mascot",  x: 4.5,  y: 7.5,  hp: 55, fireCd: 1.5 },
      { kind: "mascot",  x: 13.5, y: 11.5, hp: 55, fireCd: 1.5 },
      { kind: "boss",    x: 17.5, y: 3.5,  hp: 220, fireCd: 2 },
    ],
    pickups: [
      { kind: "toy",  x: 1.5,  y: 19.5 },
      { kind: "toy",  x: 22.5, y: 17.5 },
      { kind: "toy",  x: 9.5,  y: 7.5  },
      { kind: "toy",  x: 13.5, y: 16.5 },
      { kind: "ball", x: 3.5,  y: 22.5 },
      { kind: "ball", x: 16.5, y: 22.5 },
      { kind: "ball", x: 22.5, y: 11.5 },
      { kind: "ball", x: 5.5,  y: 11.5 },
      { kind: "ball", x: 22.5, y: 22.5 },
    ],
  };

  const LEVELS = [
    // Level 1 — concentric arena, single door, gentle intro
    { map: L1_MAP, playerStart: { x: 1.5, y: 12.5, a: 0 }, enemies: [
        { kind: "catcher", x: 16.5, y: 7.5,  hp: 30, fireCd: 1.5 },
        { kind: "catcher", x: 16.5, y: 17.5, hp: 30, fireCd: 1.5 },
      ], pickups: [
        { kind: "toy",  x: 5.5,  y: 12.5 },
        { kind: "ball", x: 9.5,  y: 12.5 },
        { kind: "ball", x: 21.5, y: 5.5  },
        { kind: "toy",  x: 21.5, y: 19.5 },
      ] },
    // Level 2 — open Pillar Hall, no doors/keys
    { map: L2_MAP, playerStart: { x: 1.5, y: 12.5, a: 0 }, enemies: [
        { kind: "catcher", x: 6.5,  y: 6.5,  hp: 30, fireCd: 1.3 },
        { kind: "catcher", x: 17.5, y: 6.5,  hp: 30, fireCd: 1.3 },
        { kind: "catcher", x: 11.5, y: 18.5, hp: 30, fireCd: 1.3 },
        { kind: "mascot",  x: 11.5, y: 4.5,  hp: 55, fireCd: 1.5 },
      ], pickups: [
        { kind: "toy",  x: 12.5, y: 4.5  },
        { kind: "ball", x: 12.5, y: 20.5 },
        { kind: "ball", x: 4.5,  y: 12.5 },
        { kind: "toy",  x: 21.5, y: 12.5 },
      ] },
    // Level 3 — Split arena: vertical wall, locked door, key in west
    { map: L3_MAP, playerStart: { x: 1.5, y: 12.5, a: 0 }, enemies: [
        { kind: "catcher", x: 4.5,  y: 9.5,  hp: 30, fireCd: 1.2 },
        { kind: "catcher", x: 4.5,  y: 17.5, hp: 30, fireCd: 1.2 },
        { kind: "catcher", x: 15.5, y: 9.5,  hp: 30, fireCd: 1.2 },
        { kind: "catcher", x: 15.5, y: 17.5, hp: 30, fireCd: 1.2 },
        { kind: "mascot",  x: 18.5, y: 12.5, hp: 55, fireCd: 1.4 },
      ], pickups: [
        { kind: "toy",  x: 4.5,  y: 12.5 },
        { kind: "ball", x: 9.5,  y: 12.5 },
        { kind: "ball", x: 18.5, y: 12.5 },
        { kind: "toy",  x: 22.5, y: 19.5 },
      ] },
    // Level 4 — Quadrants: 4 sub-rooms, key NW, locked door east
    { map: L4_MAP, playerStart: { x: 1.5, y: 12.5, a: 0 }, enemies: [
        { kind: "catcher", x: 4.5,  y: 9.5,  hp: 30, fireCd: 1.0 },
        { kind: "catcher", x: 15.5, y: 9.5,  hp: 30, fireCd: 1.0 },
        { kind: "catcher", x: 4.5,  y: 15.5, hp: 30, fireCd: 1.0 },
        { kind: "catcher", x: 15.5, y: 15.5, hp: 30, fireCd: 1.0 },
        { kind: "catcher", x: 20.5, y: 19.5, hp: 30, fireCd: 1.2 },
        { kind: "mascot",  x: 18.5, y: 12.5, hp: 55, fireCd: 1.3 },
        { kind: "mascot",  x: 4.5,  y: 12.5, hp: 55, fireCd: 1.3 },
      ], pickups: [
        { kind: "toy",  x: 9.5,  y: 12.5 },
        { kind: "toy",  x: 18.5, y: 4.5  },
        { kind: "ball", x: 14.5, y: 12.5 },
        { kind: "ball", x: 22.5, y: 4.5  },
        { kind: "ball", x: 22.5, y: 19.5 },
      ] },
    // Level 5 — original full maze with the boss
    LEVEL_5,
  ];

  const entities = [];
  const shots = []; // { x, y, dx, dy, fromPlayer, ttl }
  let currentLevel = 0;

  function loadLevel(idx) {
    currentLevel = idx;
    const L = LEVELS[idx];
    // Reset grid from level map
    for (let y = 0; y < MH; y++) {
      for (let x = 0; x < MW; x++) {
        const c = L.map[y].charAt(x);
        GRID[y][x] = c;
      }
    }
    // Reset player position; carry hp/ammo with a small heal + topup
    player.x = L.playerStart.x;
    player.y = L.playerStart.y;
    player.a = L.playerStart.a;
    player.pups = 0; player.maxPups = 0; player.hasKey = false;
    player.hp = Math.min(100, player.hp + 25);
    player.ammo = Math.max(player.ammo, 18);
    // Clear runtime arrays
    entities.length = 0;
    shots.length = 0;
    if (typeof splashes !== "undefined") splashes.length = 0;
    // Scan grid for P/K and turn them into entities + floor
    for (let y = 0; y < MH; y++) {
      for (let x = 0; x < MW; x++) {
        const c = GRID[y][x];
        if (c === "P") {
          entities.push({ kind: "pup", x: x + 0.5, y: y + 0.5, alive: true, bob: Math.random() * 6 });
          player.maxPups++;
          GRID[y][x] = ".";
        } else if (c === "K") {
          entities.push({ kind: "key", x: x + 0.5, y: y + 0.5, alive: true, bob: Math.random() * 6 });
          GRID[y][x] = ".";
        }
      }
    }
    // Enemies + pickups from level config
    for (const e of L.enemies || []) {
      entities.push(Object.assign({ alive: true, vx: 0, vy: 0, wobble: 0 }, e));
    }
    for (const p of L.pickups || []) {
      entities.push(Object.assign({ alive: true, bob: Math.random() * 6 }, p));
    }
    showToast("LEVEL " + (idx + 1) + " of " + LEVELS.length);
    if (typeof updateHud === "function") updateHud();
  }

  // ─── INPUT ────────────────────────────────────────────
  const keys = {};
  const touch = { move: { active: false, dx: 0, dy: 0 }, look: { active: false, id: -1, lastX: 0 }, fire: false };
  let showMap = false;
  addEventListener("keydown", e => {
    const k = e.key.toLowerCase();
    keys[k] = true;
    if (k === "q") { showMap = !showMap; e.preventDefault(); return; }
    if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)) e.preventDefault();
  });
  addEventListener("keyup", e => { keys[e.key.toLowerCase()] = false; });

  // ─── SOUND (WebAudio) ─────────────────────────────────
  let ac = null;
  function actx() { if (!ac) ac = new (window.AudioContext || window.webkitAudioContext)(); return ac; }
  function beep(freq, dur, type, gain) {
    try {
      const a = actx();
      const o = a.createOscillator(); const g = a.createGain();
      o.type = type || "square"; o.frequency.value = freq;
      g.gain.value = gain || 0.12;
      g.gain.exponentialRampToValueAtTime(0.001, a.currentTime + dur);
      o.connect(g).connect(a.destination);
      o.start(); o.stop(a.currentTime + dur);
    } catch (e) {}
  }
  function sfxSquirt() { beep(220 + Math.random() * 80, 0.08, "sawtooth", 0.07); }
  function sfxSqueak() { beep(900, 0.05, "square", 0.1); setTimeout(() => beep(1400, 0.07, "square", 0.1), 50); }
  function sfxBark() {
    // Cartoon "yip yip!" — two short descending square-wave chirps.
    try {
      const a = actx();
      const yip = (start, f0, f1, dur) => {
        const o = a.createOscillator(); const g = a.createGain();
        o.type = "square";
        const t = a.currentTime + start;
        o.frequency.setValueAtTime(f0, t);
        o.frequency.exponentialRampToValueAtTime(f1, t + dur);
        g.gain.setValueAtTime(0.18, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + dur);
        o.connect(g).connect(a.destination);
        o.start(t); o.stop(t + dur + 0.02);
      };
      yip(0,    900, 500, 0.09);
      yip(0.13, 1100, 600, 0.09);
    } catch (e) {}
  }
  function sfxYelp() { beep(700, 0.08, "triangle", 0.12); setTimeout(() => beep(400, 0.12, "triangle", 0.1), 60); }
  function sfxPickup() { beep(660, 0.06, "triangle", 0.1); setTimeout(() => beep(990, 0.08, "triangle", 0.1), 50); }
  function sfxHurt() { beep(180, 0.15, "sawtooth", 0.14); }
  function sfxDoor() { beep(140, 0.2, "square", 0.08); }
  function sfxWin() { [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => beep(f, 0.15, "triangle", 0.12), i * 120)); }

  // ─── TEXTURES (procedural, 64x64) ─────────────────────
  const TEX_SIZE = 64;
  const textures = {};
  function mkTex(drawFn) {
    const c = document.createElement("canvas"); c.width = c.height = TEX_SIZE;
    const x = c.getContext("2d"); drawFn(x); return x.getImageData(0, 0, TEX_SIZE, TEX_SIZE);
  }
  textures["1"] = mkTex(x => { // concrete
    x.fillStyle = "#6a5a4a"; x.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 120; i++) { x.fillStyle = "rgba(0,0,0," + (Math.random() * 0.25) + ")"; x.fillRect(Math.random() * 64 | 0, Math.random() * 64 | 0, 2, 2); }
    x.strokeStyle = "#3a2e24"; x.lineWidth = 2;
    for (let y = 0; y <= 64; y += 16) { x.beginPath(); x.moveTo(0, y); x.lineTo(64, y); x.stroke(); }
    for (let yy = 0; yy < 4; yy++) for (let xx = 0; xx < 2; xx++) { x.beginPath(); x.moveTo(xx * 32 + (yy & 1 ? 16 : 0), yy * 16); x.lineTo(xx * 32 + (yy & 1 ? 16 : 0), yy * 16 + 16); x.stroke(); }
  });
  textures["2"] = mkTex(x => { // kibble sacks
    x.fillStyle = "#8a5a2a"; x.fillRect(0, 0, 64, 64);
    for (let row = 0; row < 2; row++) {
      const yo = row * 32;
      for (let col = 0; col < 2; col++) {
        const xo = col * 32 + (row & 1 ? 16 : 0);
        x.fillStyle = "#6a3e18"; x.fillRect(xo + 1, yo + 1, 30, 30);
        x.fillStyle = "#a06a34"; x.beginPath(); x.ellipse(xo + 16, yo + 16, 12, 12, 0, 0, Math.PI * 2); x.fill();
        x.fillStyle = "#3a2210"; // paw print
        x.beginPath(); x.arc(xo + 16, yo + 18, 3, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.arc(xo + 12, yo + 14, 1.5, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.arc(xo + 20, yo + 14, 1.5, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.arc(xo + 14, yo + 11, 1.5, 0, Math.PI * 2); x.fill();
        x.beginPath(); x.arc(xo + 18, yo + 11, 1.5, 0, Math.PI * 2); x.fill();
      }
    }
  });
  textures["3"] = mkTex(x => { // cage bars
    x.fillStyle = "#1a1a1a"; x.fillRect(0, 0, 64, 64);
    x.fillStyle = "#5a5a5a";
    for (let i = 0; i < 5; i++) x.fillRect(4 + i * 12, 0, 4, 64);
    x.fillStyle = "#8a8a8a";
    for (let i = 0; i < 5; i++) x.fillRect(5 + i * 12, 0, 1, 64);
    x.fillStyle = "#3a3a3a"; x.fillRect(0, 30, 64, 4);
  });
  textures["4"] = mkTex(x => { // wood plank
    x.fillStyle = "#6b3f1a"; x.fillRect(0, 0, 64, 64);
    x.strokeStyle = "#3a2210"; x.lineWidth = 2;
    for (let y = 0; y < 64; y += 16) { x.beginPath(); x.moveTo(0, y); x.lineTo(64, y); x.stroke(); }
    x.strokeStyle = "#4a2a10"; x.lineWidth = 1;
    for (let y = 0; y < 64; y += 4) { x.beginPath(); x.moveTo(0, y + Math.random() * 2); x.bezierCurveTo(20, y, 40, y + 2, 64, y); x.stroke(); }
  });
  textures["D"] = mkTex(x => { // wood door with paw
    x.fillStyle = "#a06030"; x.fillRect(0, 0, 64, 64);
    x.fillStyle = "#7a4520"; x.fillRect(4, 4, 56, 56);
    x.strokeStyle = "#4a2a10"; x.lineWidth = 2; x.strokeRect(4, 4, 56, 56);
    x.fillStyle = "#f3e9d2"; // paw
    x.beginPath(); x.arc(32, 38, 6, 0, Math.PI * 2); x.fill();
    for (let i = 0; i < 4; i++) { const a = -Math.PI / 2 + (i - 1.5) * 0.6; x.beginPath(); x.arc(32 + Math.cos(a) * 10, 38 + Math.sin(a) * 10, 3, 0, Math.PI * 2); x.fill(); }
    x.fillStyle = "#ffd447"; x.fillRect(52, 30, 4, 6); // knob
  });
  textures["L"] = mkTex(x => { // locked door
    x.fillStyle = "#c09040"; x.fillRect(0, 0, 64, 64);
    x.fillStyle = "#8a6020"; x.fillRect(4, 4, 56, 56);
    x.strokeStyle = "#4a2a10"; x.lineWidth = 2; x.strokeRect(4, 4, 56, 56);
    // padlock
    x.strokeStyle = "#222"; x.lineWidth = 4; x.beginPath(); x.arc(32, 28, 8, Math.PI, 0); x.stroke();
    x.fillStyle = "#ffd447"; x.fillRect(22, 26, 20, 18);
    x.fillStyle = "#4a2a10"; x.fillRect(30, 32, 4, 6);
  });
  textures["X"] = mkTex(x => { // exit
    x.fillStyle = "#4aa050"; x.fillRect(0, 0, 64, 64);
    x.fillStyle = "#2a6030"; x.fillRect(4, 4, 56, 56);
    // East-facing wall textures get u-mirrored by the raycaster, so
    // pre-mirror the sign content here so it reads correctly to the
    // player approaching from the west.
    x.save(); x.translate(64, 0); x.scale(-1, 1);
    x.fillStyle = "#ffe9b6"; x.font = "bold 14px sans-serif"; x.textAlign = "center";
    x.fillText("EXIT", 32, 30);
    x.beginPath(); x.moveTo(20, 42); x.lineTo(36, 42); x.lineTo(36, 38); x.lineTo(46, 46); x.lineTo(36, 54); x.lineTo(36, 50); x.lineTo(20, 50); x.closePath(); x.fill();
    x.restore();
  });

  // ─── RAYCASTER ────────────────────────────────────────
  const zbuf = new Float32Array(RW);
  const frame = ctx.createImageData(RW, RH);
  const fbuf = frame.data;

  function castColumn(x) {
    const camX = 2 * x / RW - 1;
    const dirX = Math.cos(player.a), dirY = Math.sin(player.a);
    // plane perpendicular, FOV ~66°
    const planeX = -Math.sin(player.a) * 0.66, planeY = Math.cos(player.a) * 0.66;
    const rdx = dirX + planeX * camX, rdy = dirY + planeY * camX;
    let mx = player.x | 0, my = player.y | 0;
    const ddx = Math.abs(1 / rdx), ddy = Math.abs(1 / rdy);
    let sx, sy, sdx, sdy;
    if (rdx < 0) { sx = -1; sdx = (player.x - mx) * ddx; } else { sx = 1; sdx = (mx + 1 - player.x) * ddx; }
    if (rdy < 0) { sy = -1; sdy = (player.y - my) * ddy; } else { sy = 1; sdy = (my + 1 - player.y) * ddy; }
    let side = 0, steps = 0, hit = "1";
    while (steps++ < 64) {
      if (sdx < sdy) { sdx += ddx; mx += sx; side = 0; } else { sdy += ddy; my += sy; side = 1; }
      const c = g(mx, my);
      if (isWall(c)) { hit = c; break; }
    }
    const dist = side === 0 ? (sdx - ddx) : (sdy - ddy);
    let wallX = side === 0 ? player.y + dist * rdy : player.x + dist * rdx;
    wallX -= Math.floor(wallX);
    if (side === 0 && rdx > 0) wallX = 1 - wallX;
    if (side === 1 && rdy < 0) wallX = 1 - wallX;
    return { dist, hit, wallX, side };
  }

  function renderFrame() {
    // Fill ceiling and floor
    for (let y = 0; y < RH; y++) {
      const isCeil = y < RH / 2;
      const shade = isCeil ? 0.3 + (y / (RH / 2)) * 0.35 : 0.65 - ((y - RH / 2) / (RH / 2)) * 0.35;
      let r, g2, b;
      if (isCeil) { r = 30 * shade; g2 = 20 * shade; b = 14 * shade; }
      else { r = 90 * shade; g2 = 68 * shade; b = 42 * shade; }
      for (let x = 0; x < RW; x++) {
        const i = (y * RW + x) * 4;
        fbuf[i] = r | 0; fbuf[i + 1] = g2 | 0; fbuf[i + 2] = b | 0; fbuf[i + 3] = 255;
      }
    }
    // Walls
    for (let x = 0; x < RW; x++) {
      const r = castColumn(x);
      zbuf[x] = r.dist;
      const h = Math.min(RH * 4, (RH / Math.max(0.0001, r.dist)) | 0);
      const y0 = Math.max(0, (RH - h) >> 1);
      const y1 = Math.min(RH, y0 + h);
      // Hide the EXIT sign until the level is complete; show as wall.
      const hitChar = (r.hit === "X" && !exitReady()) ? "1" : r.hit;
      const tex = textures[hitChar] || textures["1"];
      const td = tex.data;
      const texX = Math.min(TEX_SIZE - 1, (r.wallX * TEX_SIZE) | 0);
      const startY = (RH - h) >> 1;
      const shade = Math.min(1, 1.4 / (1 + r.dist * 0.25)) * (r.side === 1 ? 0.7 : 1);
      for (let y = y0; y < y1; y++) {
        const ty = Math.min(TEX_SIZE - 1, Math.max(0, (((y - startY) * TEX_SIZE / h) | 0)));
        const ti = (ty * TEX_SIZE + texX) * 4;
        const i = (y * RW + x) * 4;
        fbuf[i] = td[ti] * shade;
        fbuf[i + 1] = td[ti + 1] * shade;
        fbuf[i + 2] = td[ti + 2] * shade;
        fbuf[i + 3] = 255;
      }
    }
    ctx.putImageData(frame, 0, 0);
    drawSprites();
    drawWeapon();
    if (player.hitFlash > 0) {
      ctx.fillStyle = "rgba(255,60,60," + (player.hitFlash * 0.5) + ")";
      ctx.fillRect(0, 0, RW, RH);
    }
    if (showMap) drawMinimap();
  }

  // ─── MINIMAP OVERLAY ──────────────────────────────────
  function drawMinimap() {
    const cell = 7;
    const w = MW * cell, h = MH * cell;
    const ox = ((RW - w) >> 1), oy = ((RH - h) >> 1);
    // dim the scene
    ctx.fillStyle = "rgba(0,0,0,0.7)"; ctx.fillRect(0, 0, RW, RH);
    // panel border
    ctx.fillStyle = "#2a1609"; ctx.fillRect(ox - 6, oy - 18, w + 12, h + 26);
    ctx.strokeStyle = "#d9a05c"; ctx.lineWidth = 2; ctx.strokeRect(ox - 6, oy - 18, w + 12, h + 26);
    // title
    ctx.fillStyle = "#ffd447"; ctx.font = "bold 8px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("MAP — press Q to close", ox + w / 2, oy - 6);
    // tiles
    for (let y = 0; y < MH; y++) {
      for (let x = 0; x < MW; x++) {
        const c = GRID[y][x];
        let fill = null;
        if (c === "1" || c === "2" || c === "3" || c === "4") fill = "#5a4030";
        else if (c === "D") fill = "#a06030";
        else if (c === "L") fill = "#ffd447";
        else if (c === "X") fill = exitReady() ? "#4aa050" : "#5a4030";
        else fill = "#1a0e07";
        ctx.fillStyle = fill;
        ctx.fillRect(ox + x * cell, oy + y * cell, cell, cell);
      }
    }
    // grid lines (subtle)
    ctx.strokeStyle = "rgba(0,0,0,0.25)"; ctx.lineWidth = 0.5;
    for (let i = 0; i <= MH; i++) { ctx.beginPath(); ctx.moveTo(ox, oy + i * cell); ctx.lineTo(ox + w, oy + i * cell); ctx.stroke(); }
    for (let i = 0; i <= MW; i++) { ctx.beginPath(); ctx.moveTo(ox + i * cell, oy); ctx.lineTo(ox + i * cell, oy + h); ctx.stroke(); }
    // entities
    for (const e of entities) {
      if (!e.alive) continue;
      const ex = ox + e.x * cell, ey = oy + e.y * cell;
      if (e.kind === "pup") {
        ctx.fillStyle = "#d9a05c"; ctx.beginPath(); ctx.arc(ex, ey, cell * 0.32, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#3a2010"; ctx.lineWidth = 1; ctx.stroke();
      } else if (e.kind === "key") {
        ctx.fillStyle = "#ffd447"; ctx.beginPath(); ctx.arc(ex, ey, cell * 0.35, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#7a5a10"; ctx.lineWidth = 1; ctx.stroke();
      } else if (e.kind === "boss") {
        ctx.fillStyle = "#e24a4a"; ctx.beginPath(); ctx.arc(ex, ey, cell * 0.45, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "#3a0808"; ctx.lineWidth = 1; ctx.stroke();
      }
    }
    // player (arrow showing facing)
    const px = ox + player.x * cell, py = oy + player.y * cell;
    const dx = Math.cos(player.a), dy = Math.sin(player.a);
    ctx.fillStyle = "#6fd8ff";
    ctx.beginPath();
    ctx.moveTo(px + dx * cell * 0.7, py + dy * cell * 0.7);
    ctx.lineTo(px + (-dy - dx * 0.5) * cell * 0.5, py + (dx - dy * 0.5) * cell * 0.5);
    ctx.lineTo(px + (dy - dx * 0.5) * cell * 0.5, py + (-dx - dy * 0.5) * cell * 0.5);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "#0a3a5a"; ctx.lineWidth = 1; ctx.stroke();
    // legend (bottom)
    ctx.font = "bold 6px sans-serif"; ctx.textAlign = "left";
    const ly = oy + h + 6;
    ctx.fillStyle = "#d9a05c"; ctx.fillRect(ox, ly - 4, 5, 5);
    ctx.fillStyle = "#fff"; ctx.fillText("PUP", ox + 7, ly);
    ctx.fillStyle = "#ffd447"; ctx.fillRect(ox + 30, ly - 4, 5, 5);
    ctx.fillStyle = "#fff"; ctx.fillText("KEY/LOCK", ox + 37, ly);
    ctx.fillStyle = "#e24a4a"; ctx.fillRect(ox + 84, ly - 4, 5, 5);
    ctx.fillStyle = "#fff"; ctx.fillText("BOSS", ox + 91, ly);
    ctx.fillStyle = "#4aa050"; ctx.fillRect(ox + 120, ly - 4, 5, 5);
    ctx.fillStyle = "#fff"; ctx.fillText("EXIT", ox + 127, ly);
    ctx.fillStyle = "#6fd8ff"; ctx.fillRect(ox + 150, ly - 4, 5, 5);
    ctx.fillStyle = "#fff"; ctx.fillText("YOU", ox + 157, ly);
  }

  // ─── SPRITES ──────────────────────────────────────────
  function drawSprites() {
    const list = [];
    for (const e of entities) if (e.alive) list.push(e);
    for (const s of shots) list.push(s);
    for (const s of list) s._d = (s.x - player.x) ** 2 + (s.y - player.y) ** 2;
    list.sort((a, b) => b._d - a._d);
    const dirX = Math.cos(player.a), dirY = Math.sin(player.a);
    const planeX = -Math.sin(player.a) * 0.66, planeY = Math.cos(player.a) * 0.66;
    const invDet = 1 / (planeX * dirY - dirX * planeY);
    for (const s of list) {
      const sx = s.x - player.x, sy = s.y - player.y;
      const tx = invDet * (dirY * sx - dirX * sy);
      const ty = invDet * (-planeY * sx + planeX * sy);
      if (ty <= 0.1) continue;
      const screenX = ((RW / 2) * (1 + tx / ty)) | 0;
      const size = Math.min(RH * 3, Math.abs((RH / ty) | 0));
      const drawY = ((RH - size) >> 1) + size * (s.bobOff || 0);
      const left = screenX - (size >> 1);
      const right = left + size;
      const l0 = Math.max(0, left), r0 = Math.min(RW, right);
      // clip per-column using zbuf
      drawSpriteBillboard(s, left, drawY, size, ty, l0, r0);
    }
  }

  function drawSpriteBillboard(s, left, top, size, dist, l0, r0) {
    // Build a single clipping path from visible columns (those passing zbuf)
    let anyVisible = false;
    let runStart = -1;
    const runs = [];
    for (let x = l0; x < r0; x++) {
      const vis = dist < zbuf[x];
      if (vis && runStart < 0) runStart = x;
      if (!vis && runStart >= 0) { runs.push([runStart, x]); runStart = -1; anyVisible = true; }
      if (vis) anyVisible = true;
    }
    if (runStart >= 0) runs.push([runStart, r0]);
    if (!anyVisible) return;
    ctx.save();
    ctx.beginPath();
    for (const r of runs) ctx.rect(r[0], 0, r[1] - r[0], RH);
    ctx.clip();
    drawSpriteShape(s, left, top, size);
    ctx.restore();
  }

  function drawSpriteShape(s, x, y, sz) {
    const cx = x + sz / 2;
    const bob = Math.sin((performance.now() / 300) + (s.bob || 0)) * sz * 0.04;
    switch (s.kind) {
      case "pup": drawPup(cx, y + bob, sz); break;
      case "key": drawKey(cx, y + bob, sz); break;
      case "toy": drawToy(cx, y + bob, sz); break;
      case "ball": drawBall(cx, y + bob, sz); break;
      case "catcher": drawCatcher(cx, y, sz, s); break;
      case "mascot": drawMascot(cx, y, sz, s); break;
      case "boss": drawBoss(cx, y, sz, s); break;
      case "shot": drawShot(cx, y + sz / 2, sz, s); break;
      case "net": drawNet(cx, y + sz / 2, sz); break;
    }
  }

  function drawPup(cx, y, sz) {
    const t = performance.now() / 600;
    const wag = Math.sin(t * 4) * sz * 0.04;
    // cage box
    ctx.fillStyle = "#1a1a1a"; ctx.fillRect(cx - sz * 0.4, y + sz * 0.2, sz * 0.8, sz * 0.78);
    ctx.fillStyle = "#3a3a3a"; ctx.fillRect(cx - sz * 0.4, y + sz * 0.2, sz * 0.8, sz * 0.06);
    ctx.fillRect(cx - sz * 0.4, y + sz * 0.92, sz * 0.8, sz * 0.06);
    // pup body (tan with cream belly)
    ctx.fillStyle = "#c08040"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.78, sz * 0.22, sz * 0.16, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#f3d8a8"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.83, sz * 0.13, sz * 0.09, 0, 0, Math.PI * 2); ctx.fill();
    // tail wag
    ctx.fillStyle = "#c08040"; ctx.save(); ctx.translate(cx + sz * 0.2, y + sz * 0.72); ctx.rotate(wag); ctx.fillRect(0, -sz * 0.025, sz * 0.12, sz * 0.05); ctx.restore();
    // legs
    ctx.fillStyle = "#a06030"; ctx.fillRect(cx - sz * 0.14, y + sz * 0.88, sz * 0.06, sz * 0.07);
    ctx.fillRect(cx + sz * 0.08, y + sz * 0.88, sz * 0.06, sz * 0.07);
    // head (rounded)
    ctx.fillStyle = "#d9a05c"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.6, sz * 0.17, sz * 0.16, 0, 0, Math.PI * 2); ctx.fill();
    // muzzle
    ctx.fillStyle = "#f3d8a8"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.66, sz * 0.09, sz * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    // ears (floppy)
    ctx.fillStyle = "#8a5a2a";
    ctx.beginPath(); ctx.ellipse(cx - sz * 0.13, y + sz * 0.52, sz * 0.06, sz * 0.1, -0.3, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + sz * 0.13, y + sz * 0.52, sz * 0.06, sz * 0.1, 0.3, 0, Math.PI * 2); ctx.fill();
    // big eyes
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - sz * 0.06, y + sz * 0.58, sz * 0.035, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.06, y + sz * 0.58, sz * 0.035, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.05, y + sz * 0.59, sz * 0.018, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.07, y + sz * 0.59, sz * 0.018, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - sz * 0.045, y + sz * 0.585, sz * 0.006, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.075, y + sz * 0.585, sz * 0.006, 0, Math.PI * 2); ctx.fill();
    // nose + tongue
    ctx.fillStyle = "#222"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.65, sz * 0.022, sz * 0.016, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#ff8a8a"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.7, sz * 0.025, sz * 0.012, 0, 0, Math.PI * 2); ctx.fill();
    // ── BARS drawn LAST so the pup sits behind them ──
    ctx.lineWidth = Math.max(1.5, sz * 0.035); ctx.strokeStyle = "#888";
    for (let i = 0; i < 5; i++) { const bx = cx - sz * 0.36 + i * sz * 0.18; ctx.beginPath(); ctx.moveTo(bx, y + sz * 0.22); ctx.lineTo(bx, y + sz * 0.96); ctx.stroke(); }
    ctx.lineWidth = Math.max(0.8, sz * 0.012); ctx.strokeStyle = "#cfcfcf";
    for (let i = 0; i < 5; i++) { const bx = cx - sz * 0.36 + i * sz * 0.18 - sz * 0.008; ctx.beginPath(); ctx.moveTo(bx, y + sz * 0.22); ctx.lineTo(bx, y + sz * 0.96); ctx.stroke(); }
    // horizontal cross-bar across the middle
    ctx.lineWidth = Math.max(1, sz * 0.025); ctx.strokeStyle = "#888";
    ctx.beginPath(); ctx.moveTo(cx - sz * 0.4, y + sz * 0.6); ctx.lineTo(cx + sz * 0.4, y + sz * 0.6); ctx.stroke();
  }
  function drawKey(cx, y, sz) {
    const yy = y + sz * 0.45;
    // collar
    ctx.strokeStyle = "#d22"; ctx.lineWidth = Math.max(2, sz * 0.08); ctx.beginPath(); ctx.arc(cx, yy, sz * 0.18, 0, Math.PI * 2); ctx.stroke();
    // tag
    ctx.fillStyle = "#ffd447"; ctx.beginPath(); ctx.moveTo(cx, yy + sz * 0.2); ctx.lineTo(cx - sz * 0.1, yy + sz * 0.35); ctx.lineTo(cx + sz * 0.1, yy + sz * 0.35); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "#4a2a10"; ctx.lineWidth = Math.max(1, sz * 0.02); ctx.stroke();
  }
  function drawToy(cx, y, sz) {
    // Med kit — white case with bold red cross.
    const w = sz * 0.34, h = sz * 0.24;
    const x0 = cx - w / 2, y0 = y + sz * 0.55;
    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.82, w * 0.55, sz * 0.04, 0, 0, Math.PI * 2); ctx.fill();
    // case body
    ctx.fillStyle = "#f3f3f3"; ctx.fillRect(x0, y0, w, h);
    ctx.fillStyle = "#dcdcdc"; ctx.fillRect(x0, y0 + h * 0.7, w, h * 0.3);
    ctx.fillStyle = "#fff"; ctx.fillRect(x0, y0, w, h * 0.18);
    ctx.strokeStyle = "#1a1a1a"; ctx.lineWidth = Math.max(1, sz * 0.018); ctx.strokeRect(x0, y0, w, h);
    // handle
    ctx.strokeStyle = "#1a1a1a"; ctx.lineWidth = Math.max(1.2, sz * 0.02);
    ctx.beginPath(); ctx.arc(cx, y0, w * 0.18, Math.PI, 0); ctx.stroke();
    // red cross
    const cw = w * 0.4, ch = h * 0.55;
    ctx.fillStyle = "#e22020";
    ctx.fillRect(cx - cw * 0.12, y0 + (h - ch) / 2, cw * 0.24, ch);
    ctx.fillRect(cx - cw / 2, y0 + h / 2 - ch * 0.12, cw, ch * 0.24);
    ctx.strokeStyle = "#7a0000"; ctx.lineWidth = Math.max(0.8, sz * 0.01);
    ctx.strokeRect(cx - cw * 0.12, y0 + (h - ch) / 2, cw * 0.24, ch);
    ctx.strokeRect(cx - cw / 2, y0 + h / 2 - ch * 0.12, cw, ch * 0.24);
    // latch
    ctx.fillStyle = "#a8a8a8"; ctx.fillRect(cx - sz * 0.02, y0 + h - sz * 0.04, sz * 0.04, sz * 0.04);
  }
  function drawBall(cx, y, sz) {
    // Soaker magazine — translucent clip with stacked water drops.
    const w = sz * 0.18, h = sz * 0.36;
    const x0 = cx - w / 2, y0 = y + sz * 0.5;
    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath(); ctx.ellipse(cx, y0 + h + sz * 0.02, w * 0.6, sz * 0.04, 0, 0, Math.PI * 2); ctx.fill();
    // dark backing
    ctx.fillStyle = "#0a1a2a"; ctx.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
    // translucent body
    ctx.fillStyle = "rgba(190,225,255,0.85)"; ctx.fillRect(x0, y0, w, h);
    // top opening
    ctx.fillStyle = "#1a3a5a"; ctx.fillRect(x0 - 1, y0 - sz * 0.03, w + 2, sz * 0.04);
    ctx.fillStyle = "#3a78bb"; ctx.fillRect(x0, y0 - sz * 0.025, w, sz * 0.025);
    // baseplate
    ctx.fillStyle = "#1a3a5a"; ctx.fillRect(x0 - sz * 0.02, y0 + h, w + sz * 0.04, sz * 0.04);
    // water drops stacked inside
    const dropRows = 4;
    for (let i = 0; i < dropRows; i++) {
      const dy = y0 + sz * 0.04 + i * (h - sz * 0.06) / (dropRows - 0.4);
      ctx.fillStyle = "#1e7adc";
      // teardrop shape
      ctx.beginPath();
      ctx.moveTo(cx, dy);
      ctx.bezierCurveTo(cx + w * 0.4, dy + sz * 0.02, cx + w * 0.3, dy + sz * 0.06, cx, dy + sz * 0.07);
      ctx.bezierCurveTo(cx - w * 0.3, dy + sz * 0.06, cx - w * 0.4, dy + sz * 0.02, cx, dy);
      ctx.closePath(); ctx.fill();
      // highlight
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.beginPath(); ctx.arc(cx - w * 0.1, dy + sz * 0.025, sz * 0.008, 0, Math.PI * 2); ctx.fill();
    }
    // outer outline
    ctx.strokeStyle = "#0a1a2a"; ctx.lineWidth = Math.max(1, sz * 0.015); ctx.strokeRect(x0, y0, w, h);
  }
  function drawCatcher(cx, y, sz, s) {
    const t = performance.now() / 200;
    const wobble = s.wobble ? Math.sin(performance.now() / 50) * sz * 0.02 : 0;
    const step = Math.sin(t * 4) * sz * 0.015;
    const w = wobble;
    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.97, sz * 0.18, sz * 0.04, 0, 0, Math.PI * 2); ctx.fill();
    // legs (boots)
    ctx.fillStyle = "#1a1a2a"; ctx.fillRect(cx - sz * 0.13 + w, y + sz * 0.86 + step, sz * 0.09, sz * 0.12);
    ctx.fillRect(cx + sz * 0.04 + w, y + sz * 0.86 - step, sz * 0.09, sz * 0.12);
    ctx.fillStyle = "#222"; ctx.fillRect(cx - sz * 0.13 + w, y + sz * 0.95 + step, sz * 0.09, sz * 0.04);
    ctx.fillRect(cx + sz * 0.04 + w, y + sz * 0.95 - step, sz * 0.09, sz * 0.04);
    // pants
    ctx.fillStyle = "#2a2a4a"; ctx.fillRect(cx - sz * 0.16 + w, y + sz * 0.66, sz * 0.32, sz * 0.22);
    // belt
    ctx.fillStyle = "#1a1a1a"; ctx.fillRect(cx - sz * 0.16 + w, y + sz * 0.62, sz * 0.32, sz * 0.05);
    ctx.fillStyle = "#ffd447"; ctx.fillRect(cx - sz * 0.02 + w, y + sz * 0.625, sz * 0.04, sz * 0.04);
    // shirt body
    ctx.fillStyle = "#4a6ecc"; ctx.fillRect(cx - sz * 0.18 + w, y + sz * 0.42, sz * 0.36, sz * 0.22);
    // shirt highlights
    ctx.fillStyle = "#6a8edc"; ctx.fillRect(cx - sz * 0.18 + w, y + sz * 0.42, sz * 0.06, sz * 0.22);
    // badge
    ctx.fillStyle = "#ffd447"; ctx.beginPath(); ctx.arc(cx - sz * 0.08 + w, y + sz * 0.5, sz * 0.025, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#7a5a10"; ctx.lineWidth = Math.max(0.8, sz * 0.01); ctx.stroke();
    // arms
    ctx.fillStyle = "#4a6ecc"; ctx.fillRect(cx - sz * 0.24 + w, y + sz * 0.44, sz * 0.07, sz * 0.2);
    ctx.fillRect(cx + sz * 0.17 + w, y + sz * 0.44, sz * 0.07, sz * 0.2);
    // hands
    ctx.fillStyle = "#f3c99a"; ctx.beginPath(); ctx.arc(cx - sz * 0.205 + w, y + sz * 0.66, sz * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.205 + w, y + sz * 0.66, sz * 0.04, 0, Math.PI * 2); ctx.fill();
    // neck
    ctx.fillStyle = "#d9a878"; ctx.fillRect(cx - sz * 0.04 + w, y + sz * 0.4, sz * 0.08, sz * 0.05);
    // head
    ctx.fillStyle = "#f3c99a"; ctx.beginPath(); ctx.arc(cx + w, y + sz * 0.34, sz * 0.13, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#d9a878"; ctx.beginPath(); ctx.arc(cx + sz * 0.06 + w, y + sz * 0.36, sz * 0.04, 0, Math.PI * 2); ctx.fill();
    // cap
    ctx.fillStyle = "#1e2a60"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.24, sz * 0.15, sz * 0.07, 0, Math.PI, 0); ctx.fill();
    ctx.fillStyle = "#2a3a80"; ctx.fillRect(cx - sz * 0.18 + w, y + sz * 0.27, sz * 0.36, sz * 0.04);
    ctx.fillStyle = "#ffd447"; ctx.fillRect(cx - sz * 0.02 + w, y + sz * 0.21, sz * 0.04, sz * 0.04);
    // angry brows
    ctx.fillStyle = "#3a2a10"; ctx.beginPath(); ctx.moveTo(cx - sz * 0.09 + w, y + sz * 0.32); ctx.lineTo(cx - sz * 0.02 + w, y + sz * 0.34); ctx.lineTo(cx - sz * 0.02 + w, y + sz * 0.32); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + sz * 0.09 + w, y + sz * 0.32); ctx.lineTo(cx + sz * 0.02 + w, y + sz * 0.34); ctx.lineTo(cx + sz * 0.02 + w, y + sz * 0.32); ctx.closePath(); ctx.fill();
    // eyes
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - sz * 0.05 + w, y + sz * 0.36, sz * 0.022, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.05 + w, y + sz * 0.36, sz * 0.022, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.05 + w, y + sz * 0.365, sz * 0.012, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.05 + w, y + sz * 0.365, sz * 0.012, 0, Math.PI * 2); ctx.fill();
    // mustache
    ctx.fillStyle = "#3a2a10"; ctx.fillRect(cx - sz * 0.06 + w, y + sz * 0.41, sz * 0.12, sz * 0.018);
    // net pole
    ctx.strokeStyle = "#6b3f1a"; ctx.lineWidth = Math.max(2, sz * 0.035); ctx.beginPath(); ctx.moveTo(cx + sz * 0.22 + w, y + sz * 0.9); ctx.lineTo(cx + sz * 0.4 + w, y + sz * 0.22); ctx.stroke();
    ctx.strokeStyle = "#3a2010"; ctx.lineWidth = Math.max(1, sz * 0.012); ctx.beginPath(); ctx.moveTo(cx + sz * 0.222 + w, y + sz * 0.9); ctx.lineTo(cx + sz * 0.402 + w, y + sz * 0.22); ctx.stroke();
    // net hoop
    ctx.fillStyle = "#3a2010"; ctx.beginPath(); ctx.ellipse(cx + sz * 0.4 + w, y + sz * 0.18, sz * 0.13, sz * 0.07, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "rgba(230,230,230,0.55)"; ctx.beginPath(); ctx.ellipse(cx + sz * 0.4 + w, y + sz * 0.18, sz * 0.11, sz * 0.055, 0, 0, Math.PI * 2); ctx.fill();
    // net mesh
    ctx.strokeStyle = "rgba(80,80,80,0.6)"; ctx.lineWidth = Math.max(0.5, sz * 0.005);
    for (let i = -2; i <= 2; i++) { ctx.beginPath(); ctx.moveTo(cx + sz * 0.4 + i * sz * 0.04 + w, y + sz * 0.13); ctx.lineTo(cx + sz * 0.4 + i * sz * 0.04 + w, y + sz * 0.23); ctx.stroke(); }
  }
  function drawMascot(cx, y, sz, s) {
    const t = performance.now() / 250;
    const wobble = s.wobble ? Math.sin(performance.now() / 50) * sz * 0.03 : 0;
    const hop = Math.abs(Math.sin(t * 5)) * sz * 0.03;
    const w = wobble;
    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.97, sz * 0.22, sz * 0.05, 0, 0, Math.PI * 2); ctx.fill();
    // big fuzzy body
    ctx.fillStyle = "#7030b0"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.66 - hop, sz * 0.27, sz * 0.32, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#a060e0"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.12 + w, y + sz * 0.6 - hop, sz * 0.06, sz * 0.18, 0, 0, Math.PI * 2); ctx.fill();
    // belly tag
    ctx.fillStyle = "#ffd447"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.72 - hop, sz * 0.07, sz * 0.05, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#7a5a10"; ctx.lineWidth = Math.max(0.5, sz * 0.01); ctx.stroke();
    // arms
    ctx.fillStyle = "#7030b0"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.24 + w, y + sz * 0.62 - hop * 0.5, sz * 0.07, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + sz * 0.24 + w, y + sz * 0.62 - hop * 0.5, sz * 0.07, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    // feet
    ctx.fillStyle = "#3a1860"; ctx.fillRect(cx - sz * 0.18 + w, y + sz * 0.92 - hop, sz * 0.14, sz * 0.06);
    ctx.fillRect(cx + sz * 0.04 + w, y + sz * 0.92 - hop, sz * 0.14, sz * 0.06);
    // head
    ctx.fillStyle = "#a060e0"; ctx.beginPath(); ctx.arc(cx + w, y + sz * 0.32 - hop, sz * 0.2, 0, Math.PI * 2); ctx.fill();
    // ears (pointy)
    ctx.fillStyle = "#7030b0"; ctx.beginPath();
    ctx.moveTo(cx - sz * 0.22 + w, y + sz * 0.22 - hop); ctx.lineTo(cx - sz * 0.13 + w, y + sz * 0.06 - hop); ctx.lineTo(cx - sz * 0.05 + w, y + sz * 0.22 - hop); ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx + sz * 0.22 + w, y + sz * 0.22 - hop); ctx.lineTo(cx + sz * 0.13 + w, y + sz * 0.06 - hop); ctx.lineTo(cx + sz * 0.05 + w, y + sz * 0.22 - hop); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#ff80c0";
    ctx.beginPath(); ctx.moveTo(cx - sz * 0.18 + w, y + sz * 0.18 - hop); ctx.lineTo(cx - sz * 0.13 + w, y + sz * 0.1 - hop); ctx.lineTo(cx - sz * 0.08 + w, y + sz * 0.18 - hop); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + sz * 0.18 + w, y + sz * 0.18 - hop); ctx.lineTo(cx + sz * 0.13 + w, y + sz * 0.1 - hop); ctx.lineTo(cx + sz * 0.08 + w, y + sz * 0.18 - hop); ctx.closePath(); ctx.fill();
    // googly eyes
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - sz * 0.07 + w, y + sz * 0.31 - hop, sz * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.07 + w, y + sz * 0.31 - hop, sz * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.05 + w + Math.sin(t) * sz * 0.012, y + sz * 0.32 - hop, sz * 0.024, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.09 + w + Math.cos(t * 1.3) * sz * 0.012, y + sz * 0.32 - hop, sz * 0.024, 0, Math.PI * 2); ctx.fill();
    // crooked grin with teeth
    ctx.fillStyle = "#1a0010"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.42 - hop, sz * 0.06, sz * 0.025, 0, 0, Math.PI); ctx.fill();
    ctx.fillStyle = "#fff"; ctx.fillRect(cx - sz * 0.04 + w, y + sz * 0.42 - hop, sz * 0.018, sz * 0.025);
    ctx.fillRect(cx + sz * 0.022 + w, y + sz * 0.42 - hop, sz * 0.018, sz * 0.025);
  }
  function drawBoss(cx, y, sz, s) {
    const t = performance.now() / 200;
    const wobble = s.wobble ? Math.sin(performance.now() / 40) * sz * 0.04 : 0;
    const breathe = Math.sin(t) * sz * 0.012;
    const w = wobble;
    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.5)"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.97, sz * 0.36, sz * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    // legs (stout)
    ctx.fillStyle = "#5a3e20"; ctx.fillRect(cx - sz * 0.22 + w, y + sz * 0.85, sz * 0.14, sz * 0.13);
    ctx.fillRect(cx + sz * 0.08 + w, y + sz * 0.85, sz * 0.14, sz * 0.13);
    ctx.fillStyle = "#3a2810"; ctx.fillRect(cx - sz * 0.22 + w, y + sz * 0.94, sz * 0.14, sz * 0.04);
    ctx.fillRect(cx + sz * 0.08 + w, y + sz * 0.94, sz * 0.14, sz * 0.04);
    // claws
    ctx.fillStyle = "#fff";
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(cx - sz * 0.21 + i * sz * 0.05 + w, y + sz * 0.96); ctx.lineTo(cx - sz * 0.195 + i * sz * 0.05 + w, y + sz * 1); ctx.lineTo(cx - sz * 0.18 + i * sz * 0.05 + w, y + sz * 0.96); ctx.closePath(); ctx.fill(); }
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(cx + sz * 0.09 + i * sz * 0.05 + w, y + sz * 0.96); ctx.lineTo(cx + sz * 0.105 + i * sz * 0.05 + w, y + sz * 1); ctx.lineTo(cx + sz * 0.12 + i * sz * 0.05 + w, y + sz * 0.96); ctx.closePath(); ctx.fill(); }
    // body (huge barrel chest)
    ctx.fillStyle = "#6b4f2a"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.68 + breathe, sz * 0.36, sz * 0.26, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#8a6838"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.12 + w, y + sz * 0.62 + breathe, sz * 0.08, sz * 0.16, 0, 0, Math.PI * 2); ctx.fill();
    // chest scar
    ctx.strokeStyle = "#3a2010"; ctx.lineWidth = Math.max(1, sz * 0.012); ctx.beginPath(); ctx.moveTo(cx + sz * 0.05 + w, y + sz * 0.55 + breathe); ctx.lineTo(cx + sz * 0.18 + w, y + sz * 0.78 + breathe); ctx.stroke();
    // spiked collar (thick)
    ctx.fillStyle = "#1a1a1a"; ctx.fillRect(cx - sz * 0.27 + w, y + sz * 0.5 + breathe, sz * 0.54, sz * 0.08);
    ctx.fillStyle = "#3a1818"; ctx.fillRect(cx - sz * 0.27 + w, y + sz * 0.55 + breathe, sz * 0.54, sz * 0.03);
    ctx.fillStyle = "#e0e0e0";
    for (let i = 0; i < 7; i++) {
      const sx2 = cx - sz * 0.24 + i * sz * 0.08 + w;
      ctx.beginPath(); ctx.moveTo(sx2, y + sz * 0.5 + breathe); ctx.lineTo(sx2 - sz * 0.025, y + sz * 0.43 + breathe); ctx.lineTo(sx2 + sz * 0.025, y + sz * 0.43 + breathe); ctx.closePath(); ctx.fill();
      ctx.fillStyle = "#888"; ctx.fillRect(sx2 - sz * 0.005, y + sz * 0.46 + breathe, sz * 0.01, sz * 0.04); ctx.fillStyle = "#e0e0e0";
    }
    // bone tag
    ctx.fillStyle = "#f3e9d2"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.6 + breathe, sz * 0.05, sz * 0.025, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#3a2010"; ctx.lineWidth = Math.max(0.5, sz * 0.008); ctx.stroke();
    // head (broad bulldog)
    ctx.fillStyle = "#8a6838"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.36 + breathe, sz * 0.26, sz * 0.22, 0, 0, Math.PI * 2); ctx.fill();
    // ears (small flop)
    ctx.fillStyle = "#5a3e20"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.22 + w, y + sz * 0.22 + breathe, sz * 0.06, sz * 0.1, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + sz * 0.22 + w, y + sz * 0.22 + breathe, sz * 0.06, sz * 0.1, 0.4, 0, Math.PI * 2); ctx.fill();
    // jowls
    ctx.fillStyle = "#6b4f2a"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.11 + w, y + sz * 0.46 + breathe, sz * 0.1, sz * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + sz * 0.11 + w, y + sz * 0.46 + breathe, sz * 0.1, sz * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    // eyes (red glow)
    ctx.fillStyle = "rgba(255,80,80,0.35)"; ctx.beginPath(); ctx.arc(cx - sz * 0.09 + w, y + sz * 0.32 + breathe, sz * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.09 + w, y + sz * 0.32 + breathe, sz * 0.06, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#ffd447"; ctx.beginPath(); ctx.arc(cx - sz * 0.09 + w, y + sz * 0.32 + breathe, sz * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.09 + w, y + sz * 0.32 + breathe, sz * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#a00"; ctx.beginPath(); ctx.arc(cx - sz * 0.085 + w, y + sz * 0.325 + breathe, sz * 0.012, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.095 + w, y + sz * 0.325 + breathe, sz * 0.012, 0, Math.PI * 2); ctx.fill();
    // brows
    ctx.fillStyle = "#3a1810"; ctx.fillRect(cx - sz * 0.15 + w, y + sz * 0.27 + breathe, sz * 0.11, sz * 0.025);
    ctx.fillRect(cx + sz * 0.04 + w, y + sz * 0.27 + breathe, sz * 0.11, sz * 0.025);
    // nose
    ctx.fillStyle = "#1a1a1a"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.4 + breathe, sz * 0.04, sz * 0.025, 0, 0, Math.PI * 2); ctx.fill();
    // mouth + teeth
    ctx.fillStyle = "#1a0010"; ctx.beginPath(); ctx.ellipse(cx + w, y + sz * 0.46 + breathe, sz * 0.1, sz * 0.04, 0, 0, Math.PI); ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.moveTo(cx - sz * 0.06 + w, y + sz * 0.46 + breathe); ctx.lineTo(cx - sz * 0.04 + w, y + sz * 0.5 + breathe); ctx.lineTo(cx - sz * 0.02 + w, y + sz * 0.46 + breathe); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + sz * 0.02 + w, y + sz * 0.46 + breathe); ctx.lineTo(cx + sz * 0.04 + w, y + sz * 0.5 + breathe); ctx.lineTo(cx + sz * 0.06 + w, y + sz * 0.46 + breathe); ctx.closePath(); ctx.fill();
    // drool
    ctx.fillStyle = "#9fd8ff"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.04 + w, y + sz * 0.51 + breathe + Math.sin(t * 2) * sz * 0.005, sz * 0.012, sz * 0.025, 0, 0, Math.PI * 2); ctx.fill();
  }
  function drawShot(cx, cy, sz, s) {
    ctx.fillStyle = s.fromPlayer ? "#6fd8ff" : "#cfd56a";
    ctx.beginPath(); ctx.arc(cx, cy, sz * 0.08, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = s.fromPlayer ? "rgba(110,216,255,0.5)" : "rgba(207,213,106,0.5)";
    ctx.beginPath(); ctx.arc(cx, cy, sz * 0.15, 0, Math.PI * 2); ctx.fill();
  }
  function drawNet(cx, cy, sz) {
    ctx.strokeStyle = "rgba(240,240,240,0.7)"; ctx.lineWidth = Math.max(1, sz * 0.02);
    ctx.beginPath(); ctx.ellipse(cx, cy, sz * 0.15, sz * 0.1, 0, 0, Math.PI * 2); ctx.stroke();
    for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * sz * 0.15, cy + Math.sin(a) * sz * 0.1); ctx.lineTo(cx, cy); ctx.stroke(); }
  }

  // ─── WEAPON (first-person) ────────────────────────────
  // Splash particles emit upward from the muzzle (which sits near the
  // top of the foreshortened barrel).
  const splashes = [];
  function spawnSplash() {
    for (let i = 0; i < 8; i++) {
      const a = -Math.PI / 2 + (Math.random() - 0.5) * 1.4;
      const sp = 70 + Math.random() * 80;
      splashes.push({
        x: 0, y: 0,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp,
        life: 0.3 + Math.random() * 0.2,
        size: 2 + Math.random() * 3,
      });
    }
  }
  function updateSplashes(dt) {
    for (let i = splashes.length - 1; i >= 0; i--) {
      const p = splashes[i];
      p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 220 * dt; p.life -= dt;
      if (p.life <= 0) splashes.splice(i, 1);
    }
  }

  function drawWeapon() {
    const bob = Math.sin(player.bob) * 3;
    const kick = player.kick * 14;
    const sway = Math.cos(player.bob * 0.5) * 1.5;
    const cx = RW / 2 + sway;
    const baseY = RH + bob + kick;
    // Behind-the-gun perspective: hand+grip largest at bottom, receiver
    // smaller above, barrel a small foreshortened stub at the top with a
    // dark muzzle hole — reads as "pointing into the scene".

    // ── ARM / SLEEVE (closest, anchors the bottom edge) ──
    ctx.fillStyle = "#3a1f10";
    ctx.fillRect(cx - 50, baseY - 6, 100, 14);
    ctx.fillStyle = "#5a3018"; ctx.fillRect(cx - 50, baseY - 6, 100, 14);
    ctx.fillStyle = "#7a4528"; ctx.fillRect(cx - 50, baseY - 6, 100, 3);
    ctx.strokeStyle = "#1a0a04"; ctx.lineWidth = 2; ctx.strokeRect(cx - 50, baseY - 6, 100, 14);
    // cuff trim
    ctx.fillStyle = "#3a1808"; ctx.fillRect(cx - 50, baseY - 10, 100, 5);

    // ── HAND wrapping a vertical grip ──
    const handTop = baseY - 36;
    const handBot = baseY - 8;
    // back of hand
    ctx.fillStyle = "#f3c99a"; ctx.fillRect(cx - 28, handTop, 56, handBot - handTop);
    ctx.fillStyle = "#d9a878"; ctx.fillRect(cx - 28, handBot - 6, 56, 6);
    ctx.strokeStyle = "#4a2a10"; ctx.lineWidth = 1.5; ctx.strokeRect(cx - 28, handTop, 56, handBot - handTop);
    // knuckle ridges
    ctx.fillStyle = "#e0b88a";
    for (let i = 0; i < 4; i++) {
      const fx = cx - 24 + i * 12;
      ctx.fillRect(fx, handTop + 2, 9, 12);
      ctx.strokeStyle = "#4a2a10"; ctx.strokeRect(fx, handTop + 2, 9, 12);
    }
    // thumb on the right
    ctx.fillStyle = "#f3c99a"; ctx.fillRect(cx + 18, handTop - 8, 12, 18);
    ctx.strokeStyle = "#4a2a10"; ctx.strokeRect(cx + 18, handTop - 8, 12, 18);
    // index-finger curl across the trigger guard
    ctx.fillStyle = "#e0b88a"; ctx.beginPath();
    ctx.arc(cx - 16, handTop - 2, 6, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#4a2a10"; ctx.stroke();

    // ── REAR OF GUN (back face seen head-on, slightly above hand) ──
    const recTop = handTop - 30;
    const recBot = handTop - 2;
    const recHalfW = 22;
    // dark outline
    ctx.fillStyle = "#0a1a2a";
    ctx.fillRect(cx - recHalfW - 2, recTop - 2, recHalfW * 2 + 4, recBot - recTop + 4);
    // body
    ctx.fillStyle = "#1e5799";
    ctx.fillRect(cx - recHalfW, recTop, recHalfW * 2, recBot - recTop);
    // top highlight
    ctx.fillStyle = "#4a90e2"; ctx.fillRect(cx - recHalfW, recTop, recHalfW * 2, 4);
    // bottom shadow
    ctx.fillStyle = "#0f3a78"; ctx.fillRect(cx - recHalfW, recBot - 5, recHalfW * 2, 5);
    // recessed center panel (suggests depth — the barrel goes into here)
    ctx.fillStyle = "#0a2a4a"; ctx.fillRect(cx - 10, recTop + 6, 20, recBot - recTop - 12);
    ctx.fillStyle = "#1e5799"; ctx.fillRect(cx - 9, recTop + 7, 18, recBot - recTop - 14);
    // bolts at the four corners
    ctx.fillStyle = "#0a1a2a";
    ctx.beginPath(); ctx.arc(cx - recHalfW + 5, recTop + 6, 1.8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + recHalfW - 5, recTop + 6, 1.8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx - recHalfW + 5, recBot - 6, 1.8, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + recHalfW - 5, recBot - 6, 1.8, 0, Math.PI * 2); ctx.fill();
    // rear sight notch on top
    ctx.fillStyle = "#0a1a2a"; ctx.fillRect(cx - 4, recTop - 4, 8, 4);
    ctx.fillStyle = "#000"; ctx.fillRect(cx - 1, recTop - 4, 2, 4);

    // ── RESERVOIR (hump rising behind/above the receiver) ──
    const tankCy = recTop - 14;
    ctx.fillStyle = "#0a1a2a";
    ctx.beginPath(); ctx.ellipse(cx, tankCy, 28, 14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#a8d8ff";
    ctx.beginPath(); ctx.ellipse(cx, tankCy, 25, 11, 0, 0, Math.PI * 2); ctx.fill();
    // water level (clipped to tank)
    const waterPct = Math.max(0, Math.min(1, player.ammo / 30));
    ctx.save();
    ctx.beginPath(); ctx.ellipse(cx, tankCy, 25, 11, 0, 0, Math.PI * 2); ctx.clip();
    const waterY = tankCy + 11 - waterPct * 22;
    ctx.fillStyle = "#1e7adc"; ctx.fillRect(cx - 25, waterY, 50, 30);
    ctx.fillStyle = "#3a90ec"; ctx.beginPath();
    ctx.moveTo(cx - 25, waterY);
    for (let i = 0; i <= 10; i++) {
      const wx = cx - 25 + i * 5;
      const wy = waterY + Math.sin(player.bob * 2 + i * 0.7) * 1.2;
      ctx.lineTo(wx, wy);
    }
    ctx.lineTo(cx + 25, waterY + 30); ctx.lineTo(cx - 25, waterY + 30); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    for (let i = 0; i < 3; i++) {
      const t = (performance.now() / 700 + i * 0.33) % 1;
      ctx.beginPath(); ctx.arc(cx - 12 + i * 12, waterY + 4 + (1 - t) * 10, 1.5 + i * 0.4, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
    // tank cap (small, off-center suggests perspective)
    ctx.fillStyle = "#ffd447"; ctx.fillRect(cx + 16, tankCy - 11, 8, 6);
    ctx.strokeStyle = "#7a5a10"; ctx.lineWidth = 1; ctx.strokeRect(cx + 16, tankCy - 11, 8, 6);

    // ── BARREL / MUZZLE (small foreshortened stub at top center) ──
    const barrelY = tankCy - 4;
    // barrel cylinder seen mostly end-on: outer ring then inner dark hole
    ctx.fillStyle = "#0a1a2a";
    ctx.beginPath(); ctx.arc(cx, barrelY, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1e5799";
    ctx.beginPath(); ctx.arc(cx, barrelY, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#3a78bb";
    ctx.beginPath(); ctx.arc(cx - 2, barrelY - 2, 1.5, 0, Math.PI * 2); ctx.fill();
    // dark muzzle hole — the hint that the barrel points away from us
    ctx.fillStyle = "#000";
    ctx.beginPath(); ctx.arc(cx, barrelY, 4, 0, Math.PI * 2); ctx.fill();
    // inner glint at bottom of hole (suggests depth)
    ctx.fillStyle = "rgba(60,80,120,0.6)";
    ctx.beginPath(); ctx.arc(cx + 0.8, barrelY + 1.5, 1.2, 0, Math.PI * 2); ctx.fill();

    // ── TRIGGER + GUARD (visible just above the hand, in front of receiver) ──
    ctx.strokeStyle = "#0a1a2a"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(cx, recBot + 4, 9, -0.2, Math.PI + 0.2); ctx.stroke();
    ctx.fillStyle = "#1a1a1a"; ctx.fillRect(cx - 2, recBot, 4, 8);

    // ── MUZZLE FLASH + SPLASH PARTICLES ──
    if (player.kick > 0.05) {
      const k = player.kick;
      ctx.fillStyle = "rgba(170,220,255," + (0.5 + k * 0.5) + ")";
      ctx.beginPath(); ctx.arc(cx, barrelY - k * 4, 4 + k * 16, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "rgba(255,255,255," + (0.4 + k * 0.4) + ")";
      ctx.beginPath(); ctx.arc(cx, barrelY - k * 4, 2 + k * 7, 0, Math.PI * 2); ctx.fill();
    }
    for (const p of splashes) {
      ctx.fillStyle = "rgba(110,200,255," + Math.max(0, p.life * 3) + ")";
      ctx.beginPath(); ctx.arc(cx + p.x, barrelY + p.y, p.size, 0, Math.PI * 2); ctx.fill();
    }
  }

  // ─── SPRITE CLIPPING (fixed) ──────────────────────────
  // Replaces the naive per-column draw; builds a single clipping path.

  // ─── GAME LOGIC ───────────────────────────────────────
  function hasLOS(ax, ay, bx, by) {
    const dx = bx - ax, dy = by - ay;
    const d = Math.hypot(dx, dy);
    const steps = Math.ceil(d * 10);
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const c = g((ax + dx * t) | 0, (ay + dy * t) | 0);
      if (isWall(c)) return false;
    }
    return true;
  }

  function tryMove(nx, ny) {
    const r = 0.22;
    // X axis
    const tx = nx > player.x ? nx + r : nx - r;
    const cx = g(tx | 0, player.y | 0);
    if (!isWall(cx)) player.x = nx;
    else handleDoorContact(tx | 0, player.y | 0, cx);
    // Y axis
    const ty = ny > player.y ? ny + r : ny - r;
    const cy = g(player.x | 0, ty | 0);
    if (!isWall(cy)) player.y = ny;
    else handleDoorContact(player.x | 0, ty | 0, cy);
  }

  function handleDoorContact(cx, cy, c) {
    if (c === "D") { setCell(cx, cy, "."); sfxDoor(); showToast("Door opens"); }
    else if (c === "L") {
      if (player.hasKey) { setCell(cx, cy, "."); sfxDoor(); showToast("Locked door unlocked!"); player.hasKey = false; updateHud(); }
      else showToast("Need a collar key");
    } else if (c === "X") {
      if (player.pups < player.maxPups) showToast("Free all pups first (" + player.pups + "/" + player.maxPups + ")");
      else if (aliveBoss()) showToast("The Boss Bulldog still prowls...");
      else exitLevel();
    }
  }

  function exitLevel() {
    if (currentLevel >= LEVELS.length - 1) {
      triggerWin();
    } else {
      sfxDoor();
      loadLevel(currentLevel + 1);
    }
  }

  function aliveBoss() { return entities.some(e => e.kind === "boss" && e.alive); }
  function exitReady() { return player.pups >= player.maxPups && !aliveBoss(); }

  function fireWater() {
    if (player.ammo <= 0) return;
    player.ammo--; player.fireCd = 0.22; player.kick = 1;
    const sp = 9;
    shots.push({ kind: "shot", x: player.x + Math.cos(player.a) * 0.25, y: player.y + Math.sin(player.a) * 0.25, dx: Math.cos(player.a) * sp, dy: Math.sin(player.a) * sp, ttl: 1.2, fromPlayer: true, dmg: 18, bob: 0 });
    spawnSplash();
    sfxSquirt();
    updateHud();
  }

  function updateEntities(dt) {
    for (const e of entities) {
      if (!e.alive) continue;
      e.wobble = Math.max(0, (e.wobble || 0) - dt);
      if (e.hp == null) continue;
      const dx = player.x - e.x, dy = player.y - e.y;
      const d = Math.hypot(dx, dy) || 0.0001;
      const los = hasLOS(e.x, e.y, player.x, player.y);
      if (los && d < 14) {
        const maxSp = e.kind === "mascot" ? 2.2 : e.kind === "boss" ? 1.8 : 1.6;
        const desired = e.kind === "boss" ? 3 : 2;
        const pull = d > desired ? 1 : -0.3;
        const nx = e.x + (dx / d) * maxSp * pull * dt;
        const ny = e.y + (dy / d) * maxSp * pull * dt;
        if (!isWall(g(nx | 0, e.y | 0))) e.x = nx;
        if (!isWall(g(e.x | 0, ny | 0))) e.y = ny;
        e.wanderT = 0; // reset wander cooldown
        e.fireCd = (e.fireCd || 0) - dt;
        if (e.fireCd <= 0 && d < 11) {
          const sp = 5.5;
          const dmg = e.kind === "boss" ? 14 : e.kind === "mascot" ? 10 : 7;
          shots.push({ kind: "net", x: e.x, y: e.y, dx: (dx / d) * sp, dy: (dy / d) * sp, ttl: 2, fromPlayer: false, dmg, bob: 0 });
          e.fireCd = e.kind === "boss" ? 1 : e.kind === "mascot" ? 1.3 : 1.9;
        }
      } else {
        // No line-of-sight: gentle wander so enemies don't feel frozen.
        e.wanderT = (e.wanderT || 0) - dt;
        if (e.wanderT <= 0) {
          e.wanderA = Math.random() * Math.PI * 2;
          e.wanderT = 1.5 + Math.random() * 2;
        }
        const sp = 0.6;
        const wx = e.x + Math.cos(e.wanderA) * sp * dt;
        const wy = e.y + Math.sin(e.wanderA) * sp * dt;
        if (!isWall(g(wx | 0, e.y | 0))) e.x = wx;
        if (!isWall(g(e.x | 0, wy | 0))) e.y = wy;
      }
    }
  }

  function updateShots(dt) {
    for (let i = shots.length - 1; i >= 0; i--) {
      const s = shots[i];
      s.x += s.dx * dt; s.y += s.dy * dt; s.ttl -= dt;
      if (s.ttl <= 0) { shots.splice(i, 1); continue; }
      const c = g(s.x | 0, s.y | 0);
      if (isWall(c)) { shots.splice(i, 1); continue; }
      let consumed = false;
      if (s.fromPlayer) {
        for (const e of entities) {
          if (!e.alive || e.hp == null) continue;
          const dx = e.x - s.x, dy = e.y - s.y;
          if (dx * dx + dy * dy < 0.22 * 0.22) {
            e.hp -= s.dmg; e.wobble = 0.4; sfxYelp();
            if (e.hp <= 0) {
              e.alive = false;
              if (e.kind === "boss") showToast("BOSS DOWN!");
            }
            consumed = true; break;
          }
        }
      } else {
        const dx = player.x - s.x, dy = player.y - s.y;
        if (dx * dx + dy * dy < 0.28 * 0.28) {
          player.hp -= s.dmg; player.hitFlash = 1; sfxHurt();
          consumed = true;
          if (player.hp <= 0) triggerLose();
        }
      }
      if (consumed) shots.splice(i, 1);
    }
  }

  function updatePickupsAndPups() {
    for (const e of entities) {
      if (!e.alive || e.hp != null) continue;
      const dx = e.x - player.x, dy = e.y - player.y;
      if (dx * dx + dy * dy < 0.42 * 0.42) {
        if (e.kind === "pup") { player.pups++; sfxBark(); showToast("Pup rescued! " + player.pups + "/" + player.maxPups); }
        else if (e.kind === "key") { player.hasKey = true; sfxPickup(); showToast("Collar key!"); }
        else if (e.kind === "toy") { player.hp = Math.min(100, player.hp + 25); sfxPickup(); showToast("Med kit  +25 HP"); }
        else if (e.kind === "ball") { player.ammo = Math.min(60, player.ammo + 10); sfxPickup(); showToast("Water mag  +10"); }
        e.alive = false;
        updateHud();
      }
    }
  }

  // Anti-softlock: if the player is out of ammo and there are no
  // tennis balls left in the level (yet enemies still alive), drop a
  // fresh ball on a nearby floor tile.
  let _ammoSpawnCooldown = 0;
  function ensureAmmoAvailable() {
    if (_ammoSpawnCooldown > 0) { _ammoSpawnCooldown--; return; }
    if (player.ammo > 0) return;
    const ballsLeft = entities.some(e => e.kind === "ball" && e.alive);
    if (ballsLeft) return;
    const enemiesLeft = entities.some(e => e.alive && e.hp != null);
    if (!enemiesLeft) return;
    const px = player.x | 0, py = player.y | 0;
    for (let r = 1; r <= 6; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          const tx = px + dx, ty = py + dy;
          if (g(tx, ty) === "." && hasLOS(player.x, player.y, tx + 0.5, ty + 0.5)) {
            entities.push({ kind: "ball", x: tx + 0.5, y: ty + 0.5, alive: true, bob: Math.random() * 6 });
            showToast("A spare ball rolled out!");
            _ammoSpawnCooldown = 30; // ~half-second debounce
            return;
          }
        }
      }
    }
  }

  // ─── INPUT ────────────────────────────────────────────
  function readInput(dt) {
    let fwd = 0, strafe = 0, turn = 0;
    if (keys["w"] || keys["arrowup"]) fwd += 1;
    if (keys["s"] || keys["arrowdown"]) fwd -= 1;
    if (keys["a"]) strafe -= 1;
    if (keys["d"]) strafe += 1;
    if (keys["arrowleft"]) turn -= 1;
    if (keys["arrowright"]) turn += 1;
    if (touch.move.active) { fwd += -touch.move.dy; strafe += touch.move.dx; }
    player.a += turn * 3.8 * dt;
    if (touch.look.dxDelta) {
      player.a += touch.look.dxDelta * (Math.PI / 220);
      touch.look.dxDelta = 0;
    }
    const sp = 3.2 * dt;
    const mag = Math.hypot(fwd, strafe);
    if (mag > 0.15) {
      const norm = mag > 1 ? 1 / mag : 1;
      const fx = fwd * norm, sx = strafe * norm;
      const nx = player.x + Math.cos(player.a) * fx * sp + Math.cos(player.a + Math.PI / 2) * sx * sp;
      const ny = player.y + Math.sin(player.a) * fx * sp + Math.sin(player.a + Math.PI / 2) * sx * sp;
      tryMove(nx, ny);
      player.bob += dt * 9;
    }
    player.fireCd = Math.max(0, player.fireCd - dt);
    player.kick = Math.max(0, player.kick - dt * 3.5);
    player.hitFlash = Math.max(0, player.hitFlash - dt * 1.6);
    if ((keys[" "] || touch.fire) && player.fireCd <= 0) fireWater();
  }

  function setupTouch() {
    const stickZone = document.getElementById("stick-zone");
    const stickBase = document.getElementById("stick-base");
    const stickKnob = document.getElementById("stick-knob");
    const lookZone = document.getElementById("look-zone");
    const fireBtn = document.getElementById("fire-btn");
    let stickId = -1, stickOx = 0, stickOy = 0;
    function rect(el) { return el.getBoundingClientRect(); }
    stickZone.addEventListener("pointerdown", e => {
      stickId = e.pointerId; stickZone.setPointerCapture(e.pointerId);
      const r = rect(stickBase); stickOx = r.left + r.width / 2; stickOy = r.top + r.height / 2;
      touch.move.active = true; updateStick(e);
    });
    stickZone.addEventListener("pointermove", e => { if (e.pointerId === stickId) updateStick(e); });
    stickZone.addEventListener("pointerup", e => { if (e.pointerId === stickId) endStick(); });
    stickZone.addEventListener("pointercancel", e => { if (e.pointerId === stickId) endStick(); });
    function updateStick(e) {
      const dx = e.clientX - stickOx, dy = e.clientY - stickOy;
      const max = 44; const d = Math.hypot(dx, dy); const k = d > max ? max / d : 1;
      const kx = dx * k, ky = dy * k;
      stickKnob.style.transform = "translate(" + kx + "px," + ky + "px)";
      touch.move.dx = kx / max; touch.move.dy = ky / max;
    }
    function endStick() { stickId = -1; touch.move.active = false; touch.move.dx = 0; touch.move.dy = 0; stickKnob.style.transform = "translate(0,0)"; }

    let lookId = -1, lookX = 0;
    lookZone.addEventListener("pointerdown", e => { lookId = e.pointerId; lookZone.setPointerCapture(e.pointerId); touch.look.active = true; lookX = e.clientX; touch.look.dxDelta = 0; });
    lookZone.addEventListener("pointermove", e => { if (e.pointerId !== lookId) return; const dx = e.clientX - lookX; lookX = e.clientX; touch.look.dxDelta = (touch.look.dxDelta || 0) + dx; });
    lookZone.addEventListener("pointerup", e => { if (e.pointerId === lookId) { lookId = -1; touch.look.active = false; } });
    lookZone.addEventListener("pointercancel", e => { if (e.pointerId === lookId) { lookId = -1; touch.look.active = false; } });

    fireBtn.addEventListener("pointerdown", e => { touch.fire = true; e.preventDefault(); });
    fireBtn.addEventListener("pointerup", e => { touch.fire = false; });
    fireBtn.addEventListener("pointercancel", e => { touch.fire = false; });
  }

  // ─── HUD ──────────────────────────────────────────────
  const hudHp = document.getElementById("stat-health");
  const hudAmmo = document.getElementById("stat-ammo");
  const hudPups = document.getElementById("stat-pups");
  const hudKey = document.getElementById("stat-key");
  const hudLevel = document.getElementById("stat-level");
  const faceEl = document.getElementById("face");
  const toastEl = document.getElementById("toast");
  const overlay = document.getElementById("overlay");
  const endOverlay = document.getElementById("end-overlay");
  const endTitle = document.getElementById("end-title");
  const endBody = document.getElementById("end-body");

  function updateHud() {
    hudHp.textContent = Math.max(0, player.hp | 0);
    hudAmmo.textContent = player.ammo;
    hudPups.textContent = player.pups + "/" + player.maxPups;
    hudKey.classList.toggle("has-key", player.hasKey);
    hudKey.querySelector(".stat-value").textContent = player.hasKey ? "YES" : "—";
    if (hudLevel) {
      hudLevel.textContent = (currentLevel + 1) + "/" + LEVELS.length;
      hudLevel.classList.toggle("ready", exitReady());
    }
    let face = "😠";
    if (player.hp < 30) face = "😱";
    else if (player.hp < 60) face = "😖";
    else if (player.hitFlash > 0.3) face = "😡";
    else if (player.pups === player.maxPups) face = "😎";
    faceEl.textContent = face;
  }

  let toastTimer = 0;
  function showToast(msg) { toastEl.textContent = msg; toastEl.classList.add("show"); toastTimer = 2; }

  function triggerWin() {
    sfxWin();
    endTitle.textContent = "ALL PUPS FREE!";
    endBody.innerHTML = "Five kennels cleared. The Boss Bulldog soaked. Every last pup loaded into the rescue van.<br><br>" +
      "Health remaining: <strong>" + Math.max(0, player.hp | 0) + "</strong>";
    endOverlay.classList.remove("lose");
    endOverlay.classList.add("show");
    running = false;
  }
  function triggerLose() {
    endTitle.textContent = "NETTED!";
    endBody.innerHTML = "The catchers got you. The pups are still waiting.<br><br>Try again?";
    endOverlay.classList.add("lose");
    endOverlay.classList.add("show");
    running = false;
  }

  // ─── BOOT ─────────────────────────────────────────────
  let running = false, lastT = 0;
  function loop(t) {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0.016);
    lastT = t;
    if (running) {
      readInput(dt);
      updateEntities(dt);
      updateShots(dt);
      updatePickupsAndPups();
      ensureAmmoAvailable();
      updateSplashes(dt);
      if (toastTimer > 0) { toastTimer -= dt; if (toastTimer <= 0) toastEl.classList.remove("show"); }
      updateHud();
      renderFrame();
    }
    requestAnimationFrame(loop);
  }

  function resizeCanvas() {
    // Maintain aspect by letting CSS stretch; keep internal resolution fixed.
    const w = innerWidth, h = innerHeight;
    const ar = RW / RH;
    let cw = w, ch = w / ar;
    if (ch > h) { ch = h; cw = h * ar; }
    cvs.style.width = cw + "px";
    cvs.style.height = ch + "px";
  }
  addEventListener("resize", resizeCanvas);
  resizeCanvas();

  setupTouch();

  // Tapping the LEVEL pill in the HUD toggles the minimap (mobile-friendly
  // equivalent of the Q key on desktop).
  if (hudLevel) {
    const toggleMap = (e) => {
      showMap = !showMap;
      if (e) { e.preventDefault(); e.stopPropagation(); }
    };
    hudLevel.addEventListener("click", toggleMap);
    hudLevel.addEventListener("touchstart", toggleMap, { passive: false });
  }

  // ─── DESKTOP MOUSE-LOOK (pointer lock) ────────────────
  cvs.addEventListener("click", () => {
    if (!running) return;
    if (document.pointerLockElement !== cvs) cvs.requestPointerLock();
  });
  document.addEventListener("mousemove", e => {
    if (document.pointerLockElement === cvs && running) {
      player.a += e.movementX * 0.0028;
    }
  });
  document.addEventListener("mousedown", e => {
    if (document.pointerLockElement === cvs && running && e.button === 0) {
      if (player.fireCd <= 0) fireWater();
    }
  });

  document.getElementById("start-btn").addEventListener("click", () => {
    overlay.classList.remove("show");
    running = true;
    try { actx().resume(); } catch (e) {}
    // Auto-engage pointer lock on desktop so the user can immediately
    // turn with the trackpad/mouse without an extra click.
    if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
      try { cvs.requestPointerLock(); } catch (e) {}
    }
  });
  document.getElementById("retry-btn").addEventListener("click", () => {
    location.reload();
  });

  loadLevel(0);
  updateHud();
  requestAnimationFrame(loop);

  window.__pb = { player, entities, shots, GRID, MW, MH, g, isWall, isDoorLike, keys, touch, sfxSquirt, sfxSqueak, sfxYelp, sfxPickup, sfxHurt, sfxDoor, sfxWin, setCell, RW, RH, cvs, ctx, textures, TEX_SIZE, renderFrame };
})();
