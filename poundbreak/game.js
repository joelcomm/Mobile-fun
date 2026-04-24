"use strict";
(function () {
  const cvs = document.getElementById("view");
  const ctx = cvs.getContext("2d");
  const RW = 320, RH = 200;
  cvs.width = RW; cvs.height = RH;

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
  function cell(x, y) {
    if (x < 0 || y < 0 || x >= MW || y >= MH) return "1";
    return MAP[y][x];
  }
  function solid(c) { return c === "1" || c === "2" || c === "3" || c === "4" || c === "D" || c === "L" || c === "X"; }

  const WALL_COLORS = {
    "1": ["#6a5a4a", "#504236"],
    "2": ["#8a5a2a", "#5a3a18"],
    "3": ["#333", "#111"],
    "4": ["#6b3f1a", "#3a2210"],
    "D": ["#a06030", "#5a3418"],
    "L": ["#c09040", "#704820"],
    "X": ["#4aa050", "#2a6030"],
  };

  const player = {
    x: 2.5, y: 2.5, a: 0,
    hp: 100, ammo: 20, pups: 0, hasKey: false,
    fireCd: 0, hitCd: 0,
  };

  const entities = [];
  function addEntity(e) { entities.push(e); }

  // Pups, pickups, enemies from map markers
  for (let y = 0; y < MH; y++) {
    for (let x = 0; x < MW; x++) {
      const c = MAP[y][x];
      if (c === "P") addEntity({ type: "pup", x: x + 0.5, y: y + 0.5, alive: true });
      if (c === "K") addEntity({ type: "key", x: x + 0.5, y: y + 0.5, alive: true });
    }
  }
  // Enemies — hand-placed
  addEntity({ type: "catcher", x: 7.5, y: 3.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 0 });
  addEntity({ type: "catcher", x: 4.5, y: 7.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 0 });
  addEntity({ type: "catcher", x: 11.5, y: 7.5, hp: 30, alive: true, vx: 0, vy: 0, fireCd: 0 });
  addEntity({ type: "mascot", x: 7.5, y: 10.5, hp: 50, alive: true, vx: 0, vy: 0, fireCd: 0 });
  addEntity({ type: "boss", x: 13.5, y: 10.5, hp: 150, alive: true, vx: 0, vy: 0, fireCd: 0 });

  // Pickups
  addEntity({ type: "toy", x: 3.5, y: 5.5, alive: true });
  addEntity({ type: "ball", x: 10.5, y: 3.5, alive: true });
  addEntity({ type: "ball", x: 8.5, y: 10.5, alive: true });

  // Projectiles
  const shots = [];

  window.__pb = { player, entities, shots, MAP, MW, MH, cell, solid };
})();
