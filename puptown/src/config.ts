// Central config: tunables, registries, and palette constants.

import {
  BreedType,
  BuildingDef,
  DogRole,
  Personality,
  RandomEvent,
} from "./types.js";

// ── Game field ───────────────────────────────────────────────────────────
// Logical canvas is small on purpose. Phaser's FIT scale mode will upscale
// to fill any phone/desktop viewport, which visually enlarges every pixel
// (including text). ~9:16 mirrors common phone aspect ratios.
export const GAME_WIDTH = 360;
export const GAME_HEIGHT = 640;

// Yard is the play area where dogs wander (inside the UI frame).
export const YARD = {
  x: 16,
  y: 74,
  width: GAME_WIDTH - 32,
  height: 250,
};

// ── Economy / pacing ─────────────────────────────────────────────────────
export const TICK_MS = 250;                 // main sim tick
export const SAVE_THROTTLE_MS = 5_000;      // don't save more than once per 5s
export const MAX_OFFLINE_MS = 8 * 3600_000; // cap offline earnings at 8h

// ── Dog unlock costs (joy cost for slot N, 1-indexed) ────────────────────
export const UNLOCK_COSTS: number[] = [
  0,        // slot 1 free at start
  50,
  250,
  900,
  2_500,
  7_500,
  20_000,
  50_000,
  120_000,
  300_000,
];

// Reputation threshold needed to unlock the Nth dog slot.
export const UNLOCK_REP: number[] = [
  0, 0, 1, 3, 6, 10, 16, 25, 40, 60,
];

// ── Role specializations ─────────────────────────────────────────────────
export const ROLE_INFO: Record<
  DogRole,
  { label: string; blurb: string; joyMult: number; happyGain: number; tapMult: number; repChance: number }
> = {
  companion: {
    label: "Companion",
    blurb: "Balanced. Good Joy and steady vibes.",
    joyMult: 1.0,
    happyGain: 1.0,
    tapMult: 1.0,
    repChance: 0.02,
  },
  therapy: {
    label: "Therapy",
    blurb: "Lower Joy, but boosts neighbors' happiness.",
    joyMult: 0.6,
    happyGain: 1.6,
    tapMult: 0.8,
    repChance: 0.05,
  },
  agility: {
    label: "Agility",
    blurb: "Zoomy! Higher base Joy, loves taps.",
    joyMult: 1.4,
    happyGain: 0.8,
    tapMult: 1.6,
    repChance: 0.02,
  },
  rescue: {
    label: "Rescue",
    blurb: "Earns Reputation more often.",
    joyMult: 0.9,
    happyGain: 1.1,
    tapMult: 1.0,
    repChance: 0.08,
  },
};

// ── Palettes (breed body + accent) ───────────────────────────────────────
// Each breed has an array of color variants: [bodyTop, bodyBottom, accent].
export const BREED_PALETTES: Record<BreedType, number[][]> = {
  mutt:     [[0xd9b382, 0xb5895a, 0x5a3a22], [0xeadfb4, 0xb09472, 0x5a4222]],
  shiba:    [[0xe6a752, 0xbf7a2b, 0xffffff], [0xf2d1a4, 0xc7996a, 0xffffff]],
  corgi:    [[0xf0c070, 0xe69a3b, 0xffffff], [0xe8b48c, 0xbb7d4a, 0xffffff]],
  husky:    [[0xdfe6ee, 0x7f8ea3, 0x2a2a3e], [0xb8c8d8, 0x5d6d82, 0x2a2a3e]],
  poodle:   [[0xf6ecd6, 0xd8c9a5, 0xff9ac1], [0x3d3d4a, 0x22222c, 0xff9ac1]],
  dachshund:[[0x7a4a22, 0x4e2f15, 0xf3c373], [0x2a2a3e, 0x1a1a2e, 0xdfaa3c]],
  bulldog:  [[0xeeeee6, 0xb8b0a2, 0x3a3a4a], [0xd8c2a4, 0xa68a68, 0x3a3a4a]],
  goldie:   [[0xf2d79a, 0xd6a85a, 0xfff6d6], [0xf7e2b1, 0xc89a4c, 0xfff6d6]],
};

export const BREED_LABELS: Record<BreedType, string> = {
  mutt: "Mutt",
  shiba: "Shiba",
  corgi: "Corgi",
  husky: "Husky",
  poodle: "Poodle",
  dachshund: "Dachshund",
  bulldog: "Bulldog",
  goldie: "Golden",
};

export const ALL_BREEDS: BreedType[] = [
  "mutt", "shiba", "corgi", "husky", "poodle", "dachshund", "bulldog", "goldie",
];

export const ALL_PERSONALITIES: Personality[] = [
  "playful", "calm", "brave", "shy", "clever", "zoomy",
];

// ── Name pool ────────────────────────────────────────────────────────────
export const DOG_NAMES = [
  "Biscuit", "Mochi", "Pepper", "Waffle", "Nugget", "Cinnamon", "Olive",
  "Pumpkin", "Scout", "Finn", "Luna", "Bean", "Ziggy", "Pickle", "Clover",
  "Toast", "Taffy", "Sprinkle", "Hazel", "Rusty", "Juniper", "Poppy",
  "Dumpling", "Noodle", "Marble", "Pebble", "Kiwi", "Peanut", "Apollo",
  "Willow", "Comet", "Tofu", "Muffin", "Biscotti", "Sesame",
];

// ── Buildings / upgrades ─────────────────────────────────────────────────
export const BUILDINGS: BuildingDef[] = [
  {
    id: "bowl",
    name: "Treat Bowl",
    icon: "\u{1F374}",
    description: "+0.6 happiness/s (all dogs).",
    baseCost: { joy: 40 },
    costMultiplier: 1.8,
    effect: { kind: "happiness", value: 0.6 },
    maxLevel: 20,
  },
  {
    id: "squeak",
    name: "Squeaky Toy Box",
    icon: "\u{1F9F8}",
    description: "+15% Joy per second per level.",
    baseCost: { joy: 100 },
    costMultiplier: 2.0,
    effect: { kind: "production", value: 0.15 },
    maxLevel: 15,
  },
  {
    id: "agility",
    name: "Agility Course",
    icon: "\u{1F3C6}",
    description: "+2 tap bonus per level.",
    baseCost: { joy: 75, treats: 10 },
    costMultiplier: 1.9,
    effect: { kind: "tapBonus", value: 2 },
    maxLevel: 25,
  },
  {
    id: "kitchen",
    name: "Treat Kitchen",
    icon: "\u{1F36A}",
    description: "Bakes +0.5 Treats/s per level.",
    baseCost: { joy: 300 },
    costMultiplier: 2.1,
    effect: { kind: "treatsPerSec", value: 0.5 },
    maxLevel: 12,
  },
  {
    id: "dogwalker",
    name: "Auto-Walker",
    icon: "\u{1F6B6}",
    description: "Auto-tap: +1 tap/s per level.",
    baseCost: { joy: 500, reputation: 2 },
    costMultiplier: 2.2,
    effect: { kind: "automation", value: 1 },
    maxLevel: 10,
  },
];

// ── Random events ────────────────────────────────────────────────────────
export const RANDOM_EVENTS: RandomEvent[] = [
  {
    id: "treatRain",
    name: "Treat Rain",
    icon: "\u{1F36A}",
    description: "Treats fall from the sky!",
    durationMs: 15_000,
    effect: { kind: "treatRain", perSec: 2 },
  },
  {
    id: "zoomies",
    name: "Zoomies!",
    icon: "\u{1F4A8}",
    description: "Everyone's running. Joy x3!",
    durationMs: 12_000,
    effect: { kind: "zoomies", joyMultiplier: 3 },
  },
  {
    id: "goldenSqueaky",
    name: "Golden Squeaky Toy",
    icon: "\u{2B50}",
    description: "Taps give 5x Joy!",
    durationMs: 20_000,
    effect: { kind: "goldenSqueaky", tapMultiplier: 5 },
  },
];

// Mean seconds between event rolls (not actual spawns — each roll may fail).
export const EVENT_ROLL_INTERVAL_MS = 45_000;
export const EVENT_ROLL_CHANCE = 0.45;

// Reputation is rare and global; given when dogs max happiness or by rescue.
export const REP_HAPPY_THRESHOLD = 95;
export const REP_HAPPY_GAIN_INTERVAL_MS = 30_000;

// ── Adoption (graduation) thresholds and reward tuning ───────────────────
export const ADOPTION_LEVEL_REQ = 5;
export const ADOPTION_HAPPINESS_REQ = 95;
// Joy lump-sum = JOY_BASE * level^1.5 * roleMultiplier.
export const ADOPTION_JOY_BASE = 800;
// Reputation per adoption: 1 + floor(level / 5).
export const ADOPTION_BASE_REP = 1;
