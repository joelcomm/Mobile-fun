"use strict";
(function () {
  const cvs = document.getElementById("view");
  const ctx = cvs.getContext("2d");
  const RW = 320, RH = 200;
  cvs.width = RW; cvs.height = RH;

  // ─── MAP ──────────────────────────────────────────────
  // 1-4 = walls, D = door, L = locked door, X = exit,
  // . = floor, P = pup cage (item), K = key (item)
  const MAP = [
    "1111111111111111",
    "1..............1",
    "1..22..111..22.1",
    "1..22..1.P..22.1",
    "1......1....22.1",
    "1.1111.D.1111..1",
    "1.1..........1.1",
    "1.1..P...P...1.1",
    "1.1..........1.1",
    "1.111.111D11.1.1",
    "1.............L1",
    "1.1111111111111X",
    "1.1K.........1.X",
    "1.1..P.......D.1",
    "1.1..........1.1",
    "1111111111111111",
  ];
  const MH = MAP.length, MW = MAP[0].length;
  // Mutable wall grid so doors can open (become '.').
  const GRID = MAP.map(r => r.split(""));
  function g(x, y) {
    if (x < 0 || y < 0 || x >= MW || y >= MH) return "1";
    return GRID[y][x];
  }
  function setCell(x, y, v) { GRID[y][x] = v; }
  function isWall(c) { return c === "1" || c === "2" || c === "3" || c === "4" || c === "D" || c === "L" || c === "X"; }
  function isDoorLike(c) { return c === "D" || c === "L" || c === "X"; }

  // ─── PLAYER ───────────────────────────────────────────
  const player = {
    x: 2.5, y: 14.5, a: -Math.PI / 2,
    hp: 100, ammo: 20, pups: 0, maxPups: 0, hasKey: false,
    fireCd: 0, hitFlash: 0, bob: 0,
    kick: 0,
  };

  // ─── ENTITIES ─────────────────────────────────────────
  const entities = [];
  for (let y = 0; y < MH; y++) {
    for (let x = 0; x < MW; x++) {
      const c = MAP[y][x];
      if (c === "P") {
        entities.push({ kind: "pup", x: x + 0.5, y: y + 0.5, alive: true, bob: Math.random() * 6 });
        player.maxPups++;
        setCell(x, y, "."); // item on floor
      } else if (c === "K") {
        entities.push({ kind: "key", x: x + 0.5, y: y + 0.5, alive: true, bob: Math.random() * 6 });
        setCell(x, y, ".");
      }
    }
  }
  entities.push({ kind: "catcher", x: 7.5, y: 4.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "catcher", x: 4.5, y: 8.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "catcher", x: 11.5, y: 8.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "mascot", x: 7.5, y: 10.5, hp: 55, alive: true, vx: 0, vy: 0, fireCd: 1.5, wobble: 0 });
  entities.push({ kind: "boss", x: 13.5, y: 10.5, hp: 180, alive: true, vx: 0, vy: 0, fireCd: 2, wobble: 0 });
  entities.push({ kind: "toy", x: 3.5, y: 5.5, alive: true, bob: 0 });
  entities.push({ kind: "toy", x: 11.5, y: 13.5, alive: true, bob: 2 });
  entities.push({ kind: "ball", x: 10.5, y: 3.5, alive: true, bob: 0 });
  entities.push({ kind: "ball", x: 5.5, y: 10.5, alive: true, bob: 1 });
  entities.push({ kind: "ball", x: 12.5, y: 7.5, alive: true, bob: 2 });

  const shots = []; // { x, y, dx, dy, fromPlayer, ttl }

  // ─── INPUT ────────────────────────────────────────────
  const keys = {};
  const touch = { move: { active: false, dx: 0, dy: 0 }, look: { active: false, id: -1, lastX: 0 }, fire: false };
  addEventListener("keydown", e => { keys[e.key.toLowerCase()] = true; if ([" ", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(e.key.toLowerCase())) e.preventDefault(); });
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
    x.fillStyle = "#ffe9b6"; x.font = "bold 14px sans-serif"; x.textAlign = "center";
    x.fillText("EXIT", 32, 30);
    x.beginPath(); x.moveTo(20, 42); x.lineTo(36, 42); x.lineTo(36, 38); x.lineTo(46, 46); x.lineTo(36, 54); x.lineTo(36, 50); x.lineTo(20, 50); x.closePath(); x.fill();
  });

  window.__pb = { player, entities, shots, GRID, MW, MH, g, isWall, isDoorLike, keys, touch, sfxSquirt, sfxSqueak, sfxYelp, sfxPickup, sfxHurt, sfxDoor, sfxWin, setCell, RW, RH, cvs, ctx, textures, TEX_SIZE };
})();
