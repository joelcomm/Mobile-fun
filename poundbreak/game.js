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
    x: 1.5, y: 14.5, a: -Math.PI / 2,
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
  entities.push({ kind: "catcher", x: 10.5, y: 4.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "catcher", x: 4.5, y: 8.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "catcher", x: 11.5, y: 8.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 1, wobble: 0 });
  entities.push({ kind: "mascot", x: 7.5, y: 10.5, hp: 55, alive: true, vx: 0, vy: 0, fireCd: 1.5, wobble: 0 });
  entities.push({ kind: "boss", x: 13.5, y: 10.5, hp: 180, alive: true, vx: 0, vy: 0, fireCd: 2, wobble: 0 });
  entities.push({ kind: "toy", x: 13.5, y: 5.5, alive: true, bob: 0 });
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
      const tex = textures[r.hit] || textures["1"];
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
    // cage behind
    ctx.fillStyle = "#2a2a2a"; ctx.fillRect(cx - sz * 0.35, y + sz * 0.25, sz * 0.7, sz * 0.7);
    ctx.strokeStyle = "#888"; ctx.lineWidth = Math.max(1, sz * 0.03);
    for (let i = 0; i < 4; i++) { const bx = cx - sz * 0.35 + (i + 1) * sz * 0.14; ctx.beginPath(); ctx.moveTo(bx, y + sz * 0.25); ctx.lineTo(bx, y + sz * 0.95); ctx.stroke(); }
    // pup body
    ctx.fillStyle = "#d9a05c"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.68, sz * 0.18, sz * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#c08040"; ctx.beginPath(); ctx.ellipse(cx, y + sz * 0.55, sz * 0.14, sz * 0.13, 0, 0, Math.PI * 2); ctx.fill();
    // ears
    ctx.fillStyle = "#8a5a2a"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.1, y + sz * 0.5, sz * 0.05, sz * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(cx + sz * 0.1, y + sz * 0.5, sz * 0.05, sz * 0.08, 0, 0, Math.PI * 2); ctx.fill();
    // eyes
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.04, y + sz * 0.55, sz * 0.02, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.04, y + sz * 0.55, sz * 0.02, 0, Math.PI * 2); ctx.fill();
    // nose
    ctx.fillStyle = "#222"; ctx.beginPath(); ctx.arc(cx, y + sz * 0.59, sz * 0.02, 0, Math.PI * 2); ctx.fill();
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
    const yy = y + sz * 0.55;
    ctx.fillStyle = "#e24a4a"; ctx.beginPath(); ctx.ellipse(cx, yy, sz * 0.15, sz * 0.1, 0, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#ff8080"; ctx.beginPath(); ctx.ellipse(cx - sz * 0.05, yy - sz * 0.03, sz * 0.04, sz * 0.03, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#4a2a10"; ctx.lineWidth = Math.max(1, sz * 0.02); ctx.stroke();
  }
  function drawBall(cx, y, sz) {
    const yy = y + sz * 0.55;
    ctx.fillStyle = "#cbd96a"; ctx.beginPath(); ctx.arc(cx, yy, sz * 0.12, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#fff"; ctx.lineWidth = Math.max(1, sz * 0.015); ctx.beginPath(); ctx.arc(cx, yy, sz * 0.12, -0.3, 0.3); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, yy, sz * 0.12, Math.PI - 0.3, Math.PI + 0.3); ctx.stroke();
  }
  function drawCatcher(cx, y, sz, s) {
    const wobble = s.wobble ? Math.sin(performance.now() / 60) * sz * 0.02 : 0;
    // body
    ctx.fillStyle = "#4a6ecc"; ctx.fillRect(cx - sz * 0.17 + wobble, y + sz * 0.45, sz * 0.34, sz * 0.4);
    // head
    ctx.fillStyle = "#f3c99a"; ctx.beginPath(); ctx.arc(cx + wobble, y + sz * 0.4, sz * 0.13, 0, Math.PI * 2); ctx.fill();
    // cap
    ctx.fillStyle = "#2a3a80"; ctx.fillRect(cx - sz * 0.13 + wobble, y + sz * 0.28, sz * 0.26, sz * 0.1);
    ctx.fillRect(cx - sz * 0.18 + wobble, y + sz * 0.35, sz * 0.36, sz * 0.04);
    // eyes
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.05 + wobble, y + sz * 0.42, sz * 0.015, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.05 + wobble, y + sz * 0.42, sz * 0.015, 0, Math.PI * 2); ctx.fill();
    // net pole
    ctx.strokeStyle = "#6b3f1a"; ctx.lineWidth = Math.max(2, sz * 0.03); ctx.beginPath(); ctx.moveTo(cx + sz * 0.2 + wobble, y + sz * 0.9); ctx.lineTo(cx + sz * 0.36 + wobble, y + sz * 0.3); ctx.stroke();
    // net hoop
    ctx.fillStyle = "rgba(220,220,220,0.6)"; ctx.beginPath(); ctx.ellipse(cx + sz * 0.36 + wobble, y + sz * 0.27, sz * 0.1, sz * 0.06, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "#222"; ctx.lineWidth = Math.max(1, sz * 0.02); ctx.stroke();
    // legs
    ctx.fillStyle = "#2a2a4a"; ctx.fillRect(cx - sz * 0.15 + wobble, y + sz * 0.85, sz * 0.1, sz * 0.12); ctx.fillRect(cx + sz * 0.05 + wobble, y + sz * 0.85, sz * 0.1, sz * 0.12);
  }
  function drawMascot(cx, y, sz, s) {
    const wobble = s.wobble ? Math.sin(performance.now() / 60) * sz * 0.03 : 0;
    // fuzzy costume body
    ctx.fillStyle = "#8040c0"; ctx.beginPath(); ctx.ellipse(cx + wobble, y + sz * 0.62, sz * 0.22, sz * 0.28, 0, 0, Math.PI * 2); ctx.fill();
    // head
    ctx.fillStyle = "#a060e0"; ctx.beginPath(); ctx.arc(cx + wobble, y + sz * 0.35, sz * 0.18, 0, Math.PI * 2); ctx.fill();
    // ears
    ctx.beginPath(); ctx.arc(cx - sz * 0.13 + wobble, y + sz * 0.22, sz * 0.07, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.13 + wobble, y + sz * 0.22, sz * 0.07, 0, Math.PI * 2); ctx.fill();
    // googly eyes
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(cx - sz * 0.06 + wobble, y + sz * 0.34, sz * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.06 + wobble, y + sz * 0.34, sz * 0.04, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#111"; ctx.beginPath(); ctx.arc(cx - sz * 0.05 + wobble, y + sz * 0.35, sz * 0.015, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.07 + wobble, y + sz * 0.35, sz * 0.015, 0, Math.PI * 2); ctx.fill();
    // grin
    ctx.strokeStyle = "#200"; ctx.lineWidth = Math.max(1, sz * 0.015); ctx.beginPath(); ctx.arc(cx + wobble, y + sz * 0.42, sz * 0.04, 0, Math.PI); ctx.stroke();
  }
  function drawBoss(cx, y, sz, s) {
    const wobble = s.wobble ? Math.sin(performance.now() / 50) * sz * 0.03 : 0;
    // beefy body
    ctx.fillStyle = "#6b4f2a"; ctx.beginPath(); ctx.ellipse(cx + wobble, y + sz * 0.7, sz * 0.3, sz * 0.22, 0, 0, Math.PI * 2); ctx.fill();
    // head
    ctx.fillStyle = "#8a6838"; ctx.beginPath(); ctx.arc(cx + wobble, y + sz * 0.4, sz * 0.22, 0, Math.PI * 2); ctx.fill();
    // jowls
    ctx.fillStyle = "#5a3e20"; ctx.beginPath(); ctx.arc(cx - sz * 0.08 + wobble, y + sz * 0.48, sz * 0.07, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.08 + wobble, y + sz * 0.48, sz * 0.07, 0, Math.PI * 2); ctx.fill();
    // spiked collar
    ctx.fillStyle = "#333"; ctx.fillRect(cx - sz * 0.2 + wobble, y + sz * 0.55, sz * 0.4, sz * 0.06);
    ctx.fillStyle = "#ccc";
    for (let i = 0; i < 5; i++) { const sx2 = cx - sz * 0.16 + i * sz * 0.08 + wobble; ctx.beginPath(); ctx.moveTo(sx2, y + sz * 0.55); ctx.lineTo(sx2 - sz * 0.02, y + sz * 0.5); ctx.lineTo(sx2 + sz * 0.02, y + sz * 0.5); ctx.closePath(); ctx.fill(); }
    // angry eyes
    ctx.fillStyle = "#e24a4a"; ctx.beginPath(); ctx.arc(cx - sz * 0.07 + wobble, y + sz * 0.36, sz * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + sz * 0.07 + wobble, y + sz * 0.36, sz * 0.03, 0, Math.PI * 2); ctx.fill();
    // teeth
    ctx.fillStyle = "#fff"; ctx.fillRect(cx - sz * 0.05 + wobble, y + sz * 0.47, sz * 0.03, sz * 0.05);
    ctx.fillRect(cx + sz * 0.02 + wobble, y + sz * 0.47, sz * 0.03, sz * 0.05);
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

  // ─── WEAPON ───────────────────────────────────────────
  function drawWeapon() {
    const bob = Math.sin(player.bob) * 4;
    const kick = player.kick * 18;
    const bx = RW / 2 - 40, by = RH - 70 + bob + kick;
    // arm
    ctx.fillStyle = "#f3c99a"; ctx.fillRect(bx + 20, by + 30, 18, 40);
    ctx.strokeStyle = "#4a2a10"; ctx.lineWidth = 2; ctx.strokeRect(bx + 20, by + 30, 18, 40);
    // pistol body
    ctx.fillStyle = "#4a90e2"; ctx.fillRect(bx + 10, by + 10, 70, 28);
    ctx.fillStyle = "#2a70c2"; ctx.fillRect(bx + 10, by + 28, 70, 10);
    ctx.strokeStyle = "#0a1a2a"; ctx.lineWidth = 2; ctx.strokeRect(bx + 10, by + 10, 70, 28);
    // nozzle
    ctx.fillStyle = "#1e4a7a"; ctx.fillRect(bx + 72, by + 16, 14, 16);
    // trigger
    ctx.fillStyle = "#2a2a2a"; ctx.fillRect(bx + 34, by + 38, 10, 14);
    // reservoir
    ctx.fillStyle = "#8ed0ff"; ctx.fillRect(bx + 30, by - 6, 38, 18);
    ctx.strokeStyle = "#0a1a2a"; ctx.strokeRect(bx + 30, by - 6, 38, 18);
    // water level line
    const water = Math.max(0, Math.min(1, player.ammo / 30));
    ctx.fillStyle = "#2a90ff"; ctx.fillRect(bx + 32, by - 4 + (1 - water) * 14, 34, 2 + water * 14);
    // muzzle flash
    if (player.kick > 0.3) {
      ctx.fillStyle = "rgba(110,216,255,0.8)"; ctx.beginPath(); ctx.arc(bx + 90, by + 24, 6 + player.kick * 10, 0, Math.PI * 2); ctx.fill();
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
      if (player.pups >= player.maxPups && !aliveBoss()) triggerWin();
      else if (player.pups < player.maxPups) showToast("Free all pups first (" + player.pups + "/" + player.maxPups + ")");
      else showToast("The Boss Bulldog still prowls...");
    }
  }

  function aliveBoss() { return entities.some(e => e.kind === "boss" && e.alive); }

  function fireWater() {
    if (player.ammo <= 0) return;
    player.ammo--; player.fireCd = 0.22; player.kick = 1;
    const sp = 9;
    shots.push({ kind: "shot", x: player.x + Math.cos(player.a) * 0.25, y: player.y + Math.sin(player.a) * 0.25, dx: Math.cos(player.a) * sp, dy: Math.sin(player.a) * sp, ttl: 1.2, fromPlayer: true, dmg: 18, bob: 0 });
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
        const maxSp = e.kind === "mascot" ? 1.8 : e.kind === "boss" ? 1.3 : 1.1;
        const desired = e.kind === "boss" ? 3 : 2;
        const pull = d > desired ? 1 : -0.3;
        const nx = e.x + (dx / d) * maxSp * pull * dt;
        const ny = e.y + (dy / d) * maxSp * pull * dt;
        if (!isWall(g(nx | 0, e.y | 0))) e.x = nx;
        if (!isWall(g(e.x | 0, ny | 0))) e.y = ny;
        e.fireCd = (e.fireCd || 0) - dt;
        if (e.fireCd <= 0 && d < 11) {
          const sp = 5.5;
          const dmg = e.kind === "boss" ? 16 : e.kind === "mascot" ? 12 : 8;
          shots.push({ kind: "net", x: e.x, y: e.y, dx: (dx / d) * sp, dy: (dy / d) * sp, ttl: 2, fromPlayer: false, dmg, bob: 0 });
          e.fireCd = e.kind === "boss" ? 1 : e.kind === "mascot" ? 1.3 : 1.9;
        }
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
        if (e.kind === "pup") { player.pups++; sfxSqueak(); showToast("Pup rescued! " + player.pups + "/" + player.maxPups); }
        else if (e.kind === "key") { player.hasKey = true; sfxPickup(); showToast("Collar key!"); }
        else if (e.kind === "toy") { player.hp = Math.min(100, player.hp + 25); sfxPickup(); showToast("+25 health"); }
        else if (e.kind === "ball") { player.ammo = Math.min(60, player.ammo + 10); sfxPickup(); showToast("+10 soaker"); }
        e.alive = false;
        updateHud();
      }
    }
  }

  // ─── INPUT ────────────────────────────────────────────
  function readInput(dt) {
    let fwd = 0, strafe = 0, turn = 0;
    if (keys["w"] || keys["arrowup"]) fwd += 1;
    if (keys["s"] || keys["arrowdown"]) fwd -= 1;
    if (keys["a"] || keys["arrowleft"]) turn -= 1;
    if (keys["d"] || keys["arrowright"]) turn += 1;
    if (keys["q"]) strafe -= 1;
    if (keys["e"]) strafe += 1;
    if (touch.move.active) { fwd += -touch.move.dy; strafe += touch.move.dx; }
    if (touch.look.active && touch.look.dxDelta) { turn += touch.look.dxDelta * 6; touch.look.dxDelta = 0; }
    player.a += turn * 2.6 * dt;
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
    lookZone.addEventListener("pointermove", e => { if (e.pointerId !== lookId) return; const dx = e.clientX - lookX; lookX = e.clientX; touch.look.dxDelta = (touch.look.dxDelta || 0) + dx / 200; });
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
    endTitle.textContent = "PUPS FREE!";
    endBody.innerHTML = "Every pup's safe, the boss is soaked, and you walked out the back door like a hero.<br><br>" +
      "Pups rescued: <strong>" + player.pups + "/" + player.maxPups + "</strong><br>" +
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

  document.getElementById("start-btn").addEventListener("click", () => {
    overlay.classList.remove("show");
    running = true;
    try { actx().resume(); } catch (e) {}
  });
  document.getElementById("retry-btn").addEventListener("click", () => {
    location.reload();
  });

  updateHud();
  requestAnimationFrame(loop);

  window.__pb = { player, entities, shots, GRID, MW, MH, g, isWall, isDoorLike, keys, touch, sfxSquirt, sfxSqueak, sfxYelp, sfxPickup, sfxHurt, sfxDoor, sfxWin, setCell, RW, RH, cvs, ctx, textures, TEX_SIZE, renderFrame };
})();
