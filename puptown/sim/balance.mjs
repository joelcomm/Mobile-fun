// Pup Town economy simulator. Mirrors the in-game math so we can probe
// different cost / reward / adoption-level curves without playing the game.
// Run: node puptown/sim/balance.mjs [scenario]

const SECONDS_PER_HOUR = 3600;
const TICK_S = 1;

// ── Tunables: copy-paste from src/config.ts so the sim can swap them ────
const SCENARIOS = {
  current: {
    label: "current (L5 adopt, 40*2^lvl cost, 800*lvl^1.5 reward)",
    ADOPTION_LEVEL: 5,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(40 * Math.pow(2, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(800 * Math.pow(lvl, 1.5) * roleMult),
    HAPPY_DRIFT: -0.35,
  },
  attachLong: {
    label: "long bond (L20 adopt, slower cost ramp, big reward)",
    ADOPTION_LEVEL: 20,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(35 * Math.pow(1.55, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(160 * Math.pow(lvl, 2.2) * roleMult),
    HAPPY_DRIFT: -0.45,
  },
  attachMid: {
    label: "mid bond (L12 adopt)",
    ADOPTION_LEVEL: 12,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(40 * Math.pow(1.7, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(300 * Math.pow(lvl, 2) * roleMult),
    HAPPY_DRIFT: -0.4,
  },
  attach15: {
    label: "L15 adopt, cost 30*1.5^lvl, reward 250*lvl^2.2",
    ADOPTION_LEVEL: 15,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(30 * Math.pow(1.5, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(250 * Math.pow(lvl, 2.2) * roleMult),
    HAPPY_DRIFT: -0.4,
  },
  attach15Steep: {
    label: "L15 adopt, cost 25*1.6^lvl, reward 350*lvl^2.1",
    ADOPTION_LEVEL: 15,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(25 * Math.pow(1.6, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(350 * Math.pow(lvl, 2.1) * roleMult),
    HAPPY_DRIFT: -0.4,
  },
  attach20Fast: {
    label: "L20 adopt, easier early cost 25*1.4^lvl, big reward 200*lvl^2.3",
    ADOPTION_LEVEL: 20,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(25 * Math.pow(1.4, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(200 * Math.pow(lvl, 2.3) * roleMult),
    HAPPY_DRIFT: -0.4,
  },
  attach15EscalatingFee: {
    label: "L15 adopt + escalating per-adoption send-off fee",
    ADOPTION_LEVEL: 15,
    ADOPTION_HAPPINESS: 95,
    LV_UP_COST: (lvl) => Math.ceil(30 * Math.pow(1.5, lvl)),
    REWARD: (lvl, roleMult) => Math.floor(250 * Math.pow(lvl, 2.2) * roleMult),
    HAPPY_DRIFT: -0.4,
    SEND_OFF_FEE: (n) => Math.ceil(150 * Math.pow(1.6, n)), // n = previous adoptions
  },
};

// Static (shared across scenarios)
const ROLE_MULT_COMPANION = 0.6 + 0.02 * 6; // ≈0.72 — same formula as DogManager
const baseJoyForLevel = (lvl) => 1 + (lvl - 1) * 1.4 + Math.pow(lvl - 1, 1.35) * 0.4;
const baseTapForLevel = (lvl) => 1 + lvl * 0.6;

// Buildings (ordered as the player would buy them).
const BUILDINGS = {
  bowl:    { baseCost: 40,  mult: 1.8, max: 20, effect: { kind: "happiness",    value: 0.6 } },
  squeak:  { baseCost: 100, mult: 2.0, max: 15, effect: { kind: "production",   value: 0.15 } },
  agility: { baseCost: 75,  mult: 1.9, max: 25, effect: { kind: "tapBonus",     value: 2 } },
  kitchen: { baseCost: 300, mult: 2.1, max: 12, effect: { kind: "treatsPerSec", value: 0.5 } },
  walker:  { baseCost: 500, mult: 2.2, max: 10, effect: { kind: "automation",   value: 1 } },
};
const buildingCost = (def, level) =>
  Math.ceil(def.baseCost * Math.pow(def.mult, level));

const UNLOCK_COSTS = [0, 50, 250, 900, 2500, 7500, 20000, 50000, 120000, 300000];
const UNLOCK_REP   = [0, 0,  1,   3,   6,    10,   16,    25,    40,     60];
const nextUnlockCost = (n) =>
  UNLOCK_COSTS[n] ?? UNLOCK_COSTS[UNLOCK_COSTS.length - 1] * Math.pow(2.5, n - UNLOCK_COSTS.length + 1);
const nextUnlockRep = (n) => UNLOCK_REP[n] ?? UNLOCK_REP[UNLOCK_REP.length - 1];

function simulate(scenario, opts = {}) {
  const { simHours = 4, taps = "passive" } = opts;
  const totalTicks = (simHours * SECONDS_PER_HOUR) / TICK_S;

  const state = {
    t: 0,
    joy: 0,
    rep: 0,
    dogs: [{ level: 1, happiness: 80 }],
    unlockedSlots: 1,
    buildings: { bowl: 0, squeak: 0, agility: 0, kitchen: 0, walker: 0 },
    adoptions: 0,
    log: [],
  };
  const note = (msg) => state.log.push(`t=${fmtTime(state.t)}  Joy=${fmt(state.joy)}  ${msg}`);
  note("game start");

  const happinessRegen = () => state.buildings.bowl * BUILDINGS.bowl.effect.value;
  const productionMult = () => 1 + state.buildings.squeak * BUILDINGS.squeak.effect.value;
  const tapBonusFlat   = () => state.buildings.agility * BUILDINGS.agility.effect.value;
  const treatsPerSec   = () => state.buildings.kitchen * BUILDINGS.kitchen.effect.value;
  const autoTaps       = () => state.buildings.walker  * BUILDINGS.walker.effect.value;

  const joyRate = () => {
    let j = 0;
    for (const d of state.dogs) {
      const happyFactor = 0.4 + (d.happiness / 100) * 0.6;
      j += baseJoyForLevel(d.level) * happyFactor * productionMult() * ROLE_MULT_COMPANION;
    }
    // Auto-taps: each auto tap = (tapBonus + flat) joy on a random dog.
    if (state.dogs.length > 0) {
      const avgTap = state.dogs.reduce((s, d) => s + baseTapForLevel(d.level), 0) / state.dogs.length;
      j += autoTaps() * (avgTap + tapBonusFlat());
    }
    return j;
  };

  // Greedy AI policy: rational-ish player.
  const tryActions = () => {
    let didSomething = true;
    while (didSomething) {
      didSomething = false;

      // 1. Buy bowl L1 ASAP (essential for happiness).
      if (state.buildings.bowl === 0) {
        const c = buildingCost(BUILDINGS.bowl, 0);
        if (state.joy >= c) {
          state.joy -= c; state.buildings.bowl = 1;
          note(`buy bowl L1 (-${c})`);
          didSomething = true; continue;
        }
      }

      // 2. Adopt-out any ready dog (paying escalating send-off fee if defined).
      for (const d of state.dogs) {
        if (d.level >= scenario.ADOPTION_LEVEL && d.happiness >= scenario.ADOPTION_HAPPINESS) {
          const fee = scenario.SEND_OFF_FEE ? scenario.SEND_OFF_FEE(state.adoptions) : 0;
          if (state.joy < fee) continue; // can't afford the send-off
          const reward = scenario.REWARD(d.level, ROLE_MULT_COMPANION);
          state.joy = state.joy - fee + reward;
          state.rep += 1 + Math.floor(d.level / 5);
          state.adoptions += 1;
          state.dogs = state.dogs.filter((x) => x !== d);
          note(`ADOPT-OUT  Lv${d.level}  -${fmt(fee)} fee  +${fmt(reward)} Joy +${1+Math.floor(d.level/5)} Rep  (cycle #${state.adoptions})`);
          didSomething = true; break;
        }
      }
      if (didSomething) continue;

      // 3. Adopt new pup if affordable + Rep met + slot below 6 (don't sprawl).
      const want = state.dogs.length < 4;
      if (want) {
        const cost = nextUnlockCost(state.dogs.length);
        const repNeeded = nextUnlockRep(state.dogs.length);
        if (state.joy >= cost && state.rep >= repNeeded) {
          state.joy -= cost;
          state.dogs.push({ level: 1, happiness: 80 });
          note(`adopt new pup #${state.dogs.length} (-${cost})`);
          didSomething = true; continue;
        }
      }

      // 4. Squeak L1 once we have a base.
      if (state.buildings.squeak === 0) {
        const c = buildingCost(BUILDINGS.squeak, 0);
        if (state.joy >= c) {
          state.joy -= c; state.buildings.squeak = 1;
          note(`buy squeak L1 (-${c})`);
          didSomething = true; continue;
        }
      }

      // 5. Level up the lowest-level dog (closer to adoption).
      const sorted = [...state.dogs].sort((a, b) => a.level - b.level);
      for (const d of sorted) {
        if (d.level >= scenario.ADOPTION_LEVEL) continue;
        const c = scenario.LV_UP_COST(d.level);
        if (state.joy >= c) {
          state.joy -= c; d.level += 1;
          didSomething = true; break;
        }
      }
      if (didSomething) continue;

      // 6. Bowl upgrades for happiness sustainability as dog count grows.
      if (state.buildings.bowl < BUILDINGS.bowl.max) {
        const c = buildingCost(BUILDINGS.bowl, state.buildings.bowl);
        // Buy bowl upgrade only if happiness regen lags drift.
        const drift = -scenario.HAPPY_DRIFT;
        if (happinessRegen() < drift * 1.5 && state.joy >= c) {
          state.joy -= c; state.buildings.bowl += 1;
          note(`bowl L${state.buildings.bowl} (-${c})`);
          didSomething = true; continue;
        }
      }

      // 7. Squeak upgrades — only when ROI clearly worth it.
      if (state.buildings.squeak < BUILDINGS.squeak.max) {
        const c = buildingCost(BUILDINGS.squeak, state.buildings.squeak);
        if (state.joy >= c * 4) {
          state.joy -= c; state.buildings.squeak += 1;
          note(`squeak L${state.buildings.squeak} (-${c})`);
          didSomething = true; continue;
        }
      }
    }
  };

  for (let i = 0; i < totalTicks; i++) {
    state.t += TICK_S;
    state.joy += joyRate() * TICK_S;
    for (const d of state.dogs) {
      const drift = scenario.HAPPY_DRIFT + happinessRegen();
      d.happiness = Math.min(100, Math.max(0, d.happiness + drift * TICK_S));
    }
    if (i % 5 === 0) tryActions(); // act every 5s of sim time
  }

  return state;
}

function fmtTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}m${String(s).padStart(2, "0")}s`;
}
function fmt(n) {
  if (n < 1000) return Math.floor(n).toString();
  if (n < 1_000_000) return (n / 1000).toFixed(2) + "k";
  if (n < 1_000_000_000) return (n / 1_000_000).toFixed(2) + "M";
  return (n / 1_000_000_000).toFixed(2) + "B";
}

const scenarioName = process.argv[2];
const targets = scenarioName ? [scenarioName] : Object.keys(SCENARIOS);
for (const name of targets) {
  const s = SCENARIOS[name];
  if (!s) {
    console.log(`unknown scenario: ${name}`);
    continue;
  }
  console.log("\n=================================================================");
  console.log(`SCENARIO: ${name} — ${s.label}`);
  console.log("=================================================================");
  const result = simulate(s, { simHours: 4 });
  // Print the first 35 events + summary.
  result.log.slice(0, 35).forEach((line) => console.log(line));
  if (result.log.length > 35) console.log(`... (${result.log.length - 35} more)`);
  console.log("---");
  console.log(`After 4h: ${result.adoptions} adoptions, ${result.dogs.length} dogs in yard, ${fmt(result.joy)} Joy, ${result.rep} Rep`);
  // Sample timestamps for milestone adoptions.
  const adoptionEvents = result.log.filter((l) => l.includes("ADOPT-OUT"));
  const milestones = [1, 3, 5, 10, 20];
  for (const m of milestones) {
    const ev = adoptionEvents[m - 1];
    if (ev) console.log(`  Adoption #${m}: ${ev.split("  ")[0]}`);
  }
}
