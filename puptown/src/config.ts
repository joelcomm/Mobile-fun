// Central config: tunables, registries, and palette constants.

import {
  BiomeId,
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
//
// On tablets (iPad, Surface, Android tablets) we bump to a larger logical
// canvas so the UI gets more horizontal breathing room — more info per row,
// wider buttons, easier to tap.
function detectIsTablet(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const short = Math.min(window.innerWidth, window.innerHeight);
  const long = Math.max(window.innerWidth, window.innerHeight);
  // iPadOS 13+ reports MacIntel; fall back to touch + size checks.
  const ua = navigator.userAgent || "";
  const iPadLike =
    /iPad/i.test(ua) ||
    (ua.includes("Macintosh") && typeof navigator.maxTouchPoints === "number" && navigator.maxTouchPoints > 1);
  if (iPadLike) return true;
  return short >= 700 && long >= 1000;
}

export const IS_TABLET = detectIsTablet();
export const GAME_WIDTH = IS_TABLET ? 480 : 360;
export const GAME_HEIGHT = IS_TABLET ? 800 : 640;

// Yard is the play area where dogs wander (inside the UI frame).
export const YARD = {
  x: 16,
  y: 74,
  width: GAME_WIDTH - 32,
  height: IS_TABLET ? 330 : 250,
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
// Poodle variant 2 (pure white) is reserved for Penny — DogManager.makeDog
// only rolls variants 0..1 for random pups. The yorkiepoo + pomeranian
// breeds exist only for signature dogs and are excluded from ALL_BREEDS.
export const BREED_PALETTES: Record<BreedType, number[][]> = {
  chihuahua: [[0xe8c090, 0xb48860, 0x3a2a20], [0xf2d7a8, 0xcba77b, 0x3a2a20]],
  dachshund: [[0x7a4a22, 0x4e2f15, 0xf3c373], [0x2a2a3e, 0x1a1a2e, 0xdfaa3c]],
  shiba:     [[0xe6a752, 0xbf7a2b, 0xffffff], [0xf2d1a4, 0xc7996a, 0xffffff]],
  corgi:     [[0xf0c070, 0xe69a3b, 0xffffff], [0xe8b48c, 0xbb7d4a, 0xffffff]],
  beagle:    [[0xf0ddb4, 0x9a6636, 0x2a2a3e], [0xffffff, 0x8a5a2e, 0x2a2a3e]],
  mutt:      [[0xd9b382, 0xb5895a, 0x5a3a22], [0xeadfb4, 0xb09472, 0x5a4222]],
  poodle:    [
    [0xf6ecd6, 0xd8c9a5, 0xff9ac1],
    [0x3d3d4a, 0x22222c, 0xff9ac1],
    [0xffffff, 0xf2f2f2, 0xffc0d6], // Penny: white poodle
  ],
  bulldog:   [[0xeeeee6, 0xb8b0a2, 0x3a3a4a], [0xd8c2a4, 0xa68a68, 0x3a3a4a]],
  dalmatian: [[0xfafafa, 0xeaeaea, 0x1a1a1a], [0xfff6d6, 0xe8e8e8, 0x1a1a1a]],
  husky:     [[0xdfe6ee, 0x7f8ea3, 0x2a2a3e], [0xb8c8d8, 0x5d6d82, 0x2a2a3e]],
  goldie:    [[0xf2d79a, 0xd6a85a, 0xfff6d6], [0xf7e2b1, 0xc89a4c, 0xfff6d6]],
  greatdane: [[0x8a8272, 0x5e5849, 0x2a2a3e], [0xc0b9a8, 0x726b5a, 0x2a2a3e]],
  // Rufus: black YorkiePoo — dark coat with a tan chest + ear highlight.
  yorkiepoo: [[0x1a1a1e, 0x2a2a30, 0xa26a3a]],
  // Ferris: orange-sable Pomeranian — fluffy russet with a cream belly.
  pomeranian:[[0xe89038, 0xd67a2a, 0xfff0d0]],
};

export const BREED_LABELS: Record<BreedType, string> = {
  chihuahua: "Chihuahua",
  dachshund: "Dachshund",
  shiba: "Shiba",
  corgi: "Corgi",
  beagle: "Beagle",
  mutt: "Mutt",
  poodle: "Poodle",
  bulldog: "Bulldog",
  dalmatian: "Dalmatian",
  husky: "Husky",
  goldie: "Golden",
  greatdane: "Great Dane",
  yorkiepoo: "YorkiePoo",
  pomeranian: "Pomeranian",
};

// Real-world-ish size multipliers, compressed so every dog reads clearly
// on screen. Smallest breeds sit near the old "medium" baseline and the
// largest are only a hair bigger, so a chihuahua next to a great dane is
// obviously different without the chihuahua looking invisible.
export const BREED_SIZE: Record<BreedType, number> = {
  chihuahua: 0.90,
  dachshund: 0.92,
  shiba:     0.96,
  corgi:     0.94,
  beagle:    0.98,
  mutt:      1.00,
  poodle:    1.00,
  bulldog:   1.00,
  dalmatian: 1.05,
  husky:     1.08,
  goldie:    1.08,
  greatdane: 1.18,
  yorkiepoo: 0.90,
  pomeranian:0.88,
};

// Silhouette stretch — kept so breeds read by shape (dachshund long-low,
// bulldog squat-wide, great dane tall) but flattened toward 1.0 so the
// compressed size range doesn't get undone.
export const BREED_STRETCH: Record<BreedType, { x: number; y: number }> = {
  chihuahua: { x: 0.96, y: 0.96 },
  dachshund: { x: 1.22, y: 0.85 },
  shiba:     { x: 1.00, y: 1.00 },
  corgi:     { x: 1.14, y: 0.86 },
  beagle:    { x: 1.06, y: 0.96 },
  mutt:      { x: 1.00, y: 1.00 },
  poodle:    { x: 1.00, y: 1.04 },
  bulldog:   { x: 1.10, y: 0.92 },
  dalmatian: { x: 1.04, y: 1.00 },
  husky:     { x: 1.04, y: 1.02 },
  goldie:    { x: 1.06, y: 1.02 },
  greatdane: { x: 1.10, y: 1.10 },
  yorkiepoo: { x: 0.96, y: 1.02 },
  pomeranian:{ x: 1.00, y: 1.06 },
};

export const ALL_BREEDS: BreedType[] = [
  "chihuahua", "dachshund", "shiba", "corgi", "beagle",
  "mutt", "poodle", "bulldog", "dalmatian", "husky", "goldie", "greatdane",
];

export const ALL_PERSONALITIES: Personality[] = [
  "playful", "calm", "brave", "shy", "clever", "zoomy",
];

// ── Name pool ────────────────────────────────────────────────────────────
// Cozy, food-ish, nature-ish pet names. DogManager.nameStray filters this
// list against names already in use (current dogs + adopted-out history) so
// no two pups ever share a name until the pool is exhausted.
export const DOG_NAMES = [
  // ── Originals (kept for save-game continuity) ─────────────────────────
  "Biscuit", "Mochi", "Pepper", "Waffle", "Nugget", "Cinnamon", "Olive",
  "Pumpkin", "Scout", "Finn", "Luna", "Bean", "Ziggy", "Pickle", "Clover",
  "Toast", "Taffy", "Sprinkle", "Hazel", "Rusty", "Juniper", "Poppy",
  "Dumpling", "Noodle", "Marble", "Pebble", "Kiwi", "Peanut", "Apollo",
  "Willow", "Comet", "Tofu", "Muffin", "Biscotti", "Sesame",
  // ── Food & treats ─────────────────────────────────────────────────────
  "Pretzel", "Cookie", "Cupcake", "Brownie", "Sprout", "Pickles", "Marshmallow",
  "Butterscotch", "Caramel", "Truffle", "Churro", "Crumpet", "Gingersnap",
  "Honey", "Jellybean", "Meatball", "Miso", "Pudding", "Ravioli", "Scone",
  "Soba", "Sushi", "Tater", "Tortellini", "Twix", "Waffles", "Yogurt",
  "Cheddar", "Brie", "Gouda", "Parmesan", "Ricotta", "Gnocchi", "Latte",
  "Espresso", "Cocoa", "Pancake", "Popcorn", "Pringle", "Bagel",
  "Dumplin", "Fig", "Plum", "Peaches", "Cherry", "Berry", "Melon",
  // ── Nature & flora ────────────────────────────────────────────────────
  "Daisy", "Rosie", "Violet", "Iris", "Fern", "Ivy", "Magnolia", "Maple",
  "Cedar", "Birch", "Aspen", "Sage", "Basil", "Rosemary", "Thyme", "Mint",
  "Cove", "Meadow", "Dune", "Brook", "River", "Sunny", "Misty", "Cloud",
  "Breeze", "Rain", "Thunder", "Stormy", "Blaze", "Ember", "Ashes",
  // ── Celestial & sparkly ───────────────────────────────────────────────
  "Nova", "Stella", "Orion", "Milo", "Cosmo", "Galaxy", "Pixel", "Sparkle",
  "Twinkle", "Aurora", "Celeste", "Solar", "Lunar", "Halo", "Nebula",
  // ── Gem & metal ───────────────────────────────────────────────────────
  "Opal", "Jade", "Pearl", "Amber", "Onyx", "Coral", "Copper",
  "Quartz", "Topaz", "Sapphire", "Crystal",
  // ── Classic-cute ──────────────────────────────────────────────────────
  "Buddy", "Teddy", "Charlie", "Cooper", "Rocky", "Bear", "Loki", "Zeus",
  "Max", "Duke", "Toby", "Murphy", "Oliver", "Winston", "Oscar", "Gus",
  "Archie", "Walter", "Leo", "Chester", "Dexter", "Frankie", "Remy",
  "Moose", "Beau", "Banjo", "Scooter", "Rascal", "Shadow",
  // ── Girly-classic ─────────────────────────────────────────────────────
  "Bella", "Lucy", "Ruby", "Molly", "Sadie", "Zoe", "Lily",
  "Ginger", "Ellie", "Nala", "Willa", "Tilly", "Millie", "Goldie",
  "Piper", "Sassy", "Gracie", "Maggie", "Roxy", "Sophie",
  // ── Quirky / whimsical ────────────────────────────────────────────────
  "Mr Bean", "Pom", "Pip", "Yuki", "Bonsai", "Zuzu", "Koda",
  "Taro", "Boba", "Chai", "Panko", "Ramen", "Pom Pom", "Noo Noo",
  "Snickers", "Snoopy", "Doodle", "Button", "Bumble", "Bubbles", "Cricket",
  "Puddle", "Pebbs", "Truffles", "Whiskers", "Peanut Butter", "Kibble",
];

// ── Signature dogs ───────────────────────────────────────────────────────
// Cameo pups tied to specific real dogs. Their name, breed, and color
// variant are locked together — Penny is *always* a white poodle, Rufus
// is always a black YorkiePoo, Ferris is always an orange Pomeranian.
//
// Gameplay: when the player adopts a stray and at least one signature
// dog is not currently on the board and not retired, there is a
// SIGNATURE_SPAWN_CHANCE chance the stray is rerolled as that signature.
// On naming, a matching stray claims its signature name instead of the
// random pool. These names are NOT part of DOG_NAMES so the regular
// roller can never assign them to the "wrong" dog.
export interface SignatureDog {
  name: string;
  breed: BreedType;
  colorVariant: number;
  blurb: string;
}
export const SIGNATURE_DOGS: SignatureDog[] = [
  { name: "Penny",  breed: "poodle",     colorVariant: 2, blurb: "A fluffy white poodle." },
  { name: "Rufus",  breed: "yorkiepoo",  colorVariant: 0, blurb: "A scruffy black YorkiePoo." },
  { name: "Ferris", breed: "pomeranian", colorVariant: 0, blurb: "A fiery little Pomeranian." },
];
// Chance per adopt() call to force the next stray to be a still-available
// signature dog (only applies if at least one is waiting to appear).
export const SIGNATURE_SPAWN_CHANCE = 0.35;

// ── Buildings / upgrades ─────────────────────────────────────────────────
// Max levels are intentionally very high so the game keeps progressing into
// the long tail. Costs grow exponentially so the level you can *afford*
// still limits pacing.
export const BUILDINGS: BuildingDef[] = [
  {
    id: "kennel",
    name: "Kennel",
    icon: "\u{1F3E0}",
    description: "Upgrade the kennel: +4% Joy/s per level. Yard looks fancier too.",
    baseCost: { joy: 600 },
    costMultiplier: 1.55,
    effect: { kind: "production", value: 0.04 },
    maxLevel: 999,
  },
  {
    id: "bowl",
    name: "Treat Bowl",
    icon: "\u{1F374}",
    description: "+0.6 happiness/s (all dogs).",
    baseCost: { joy: 40 },
    costMultiplier: 1.7,
    effect: { kind: "happiness", value: 0.6 },
    maxLevel: 120,
  },
  {
    id: "squeak",
    name: "Squeaky Toy Box",
    icon: "\u{1F9F8}",
    description: "+15% Joy per second per level.",
    baseCost: { joy: 100 },
    costMultiplier: 1.9,
    effect: { kind: "production", value: 0.15 },
    maxLevel: 120,
  },
  {
    id: "agility",
    name: "Agility Course",
    icon: "\u{1F3C6}",
    description: "+2 tap bonus per level.",
    baseCost: { joy: 75, treats: 10 },
    costMultiplier: 1.8,
    effect: { kind: "tapBonus", value: 2 },
    maxLevel: 120,
  },
  {
    id: "kitchen",
    name: "Treat Kitchen",
    icon: "\u{1F36A}",
    description: "Bakes +0.5 Treats/s per level.",
    baseCost: { joy: 300 },
    costMultiplier: 2.0,
    effect: { kind: "treatsPerSec", value: 0.5 },
    maxLevel: 60,
  },
  {
    id: "dogwalker",
    name: "Auto-Walker",
    icon: "\u{1F6B6}",
    description: "Auto-tap: +1 tap/s per level.",
    baseCost: { joy: 500, reputation: 2 },
    costMultiplier: 2.1,
    effect: { kind: "automation", value: 1 },
    maxLevel: 50,
  },
];

// ── Kennel visual tiers ──────────────────────────────────────────────────
// Every 5 kennel levels unlocks a new grass tint — subtle progression the
// player can actually see in the yard as they invest.
export const KENNEL_TIERS: { minLevel: number; grassTint: number; label: string }[] = [
  { minLevel: 0,   grassTint: 0xffffff, label: "Starter Yard" },
  { minLevel: 5,   grassTint: 0xd8f0c8, label: "Fresh Turf" },
  { minLevel: 10,  grassTint: 0xc6ebb4, label: "Lush Lawn" },
  { minLevel: 20,  grassTint: 0xf0e6b0, label: "Sunny Meadow" },
  { minLevel: 35,  grassTint: 0xe0b0ff, label: "Enchanted Park" },
  { minLevel: 50,  grassTint: 0xffc68a, label: "Golden Grounds" },
  { minLevel: 75,  grassTint: 0x9ad0ff, label: "Cloudtop Kennel" },
  { minLevel: 100, grassTint: 0xff9ac1, label: "Rainbow Estate" },
];

export function kennelTierFor(level: number): typeof KENNEL_TIERS[number] {
  let tier = KENNEL_TIERS[0];
  for (const t of KENNEL_TIERS) {
    if (level >= t.minLevel) tier = t;
  }
  return tier;
}

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

// ── Happiness / mood tuning ──────────────────────────────────────────────
// Tapping a dog gives a small happiness bump, but only once per cooldown per
// dog — otherwise autoplay's 4 Hz spam would pin every pup to 100% forever
// and the bar would be decor. Joy gain is NOT cooldown-limited; only the
// happiness boost is.
export const TAP_HAPPINESS_COOLDOWN_MS = 1_400;
export const TAP_HAPPINESS_GAIN = 3.2;

// Random mood events: every so often a single dog in the active center gets
// bored / spooked / frumpy and drops happiness, so the player has to pay
// attention and intervene (tap, buy a Treat Bowl, etc). Intervals are in
// wall-clock ms; the game picks a new interval after each event.
export const MOOD_EVENT_MIN_MS = 35_000;
export const MOOD_EVENT_MAX_MS = 95_000;
export const MOOD_EVENT_DROP_MIN = 22;
export const MOOD_EVENT_DROP_MAX = 42;

// Flavor text shown on the dog's head when a mood event lands. Picked at
// random per event.
export const MOOD_EVENT_BUBBLES: { icon: string; label: string }[] = [
  { icon: "\u{1F611}", label: "bored" },
  { icon: "\u{1F628}", label: "spooked" },
  { icon: "\u{1F4A4}", label: "sleepy" },
  { icon: "\u{1F4A2}", label: "grumpy" },
  { icon: "\u{1F327}\uFE0F", label: "thunder" },
  { icon: "\u{1F41D}", label: "a bee!" },
  { icon: "\u{1F5A4}", label: "lonely" },
];

// ── Adoption (graduation) thresholds and reward tuning ───────────────────
// Tuned so a single adoption reward covers ~30% of the L1→L15 level-up
// grind. The rest must come from passive Joy/s, which forces the player
// to invest in buildings between cycles instead of self-funding back-to-
// back adoptions off a previous reward. See puptown/sim/balance.mjs for
// the comparison vs. the old (live) values.
export const ADOPTION_LEVEL_REQ = 15;
export const ADOPTION_HAPPINESS_REQ = 95;
// Joy lump-sum = JOY_BASE * level^EXP * roleMultiplier.
export const ADOPTION_JOY_BASE = 50;
export const ADOPTION_LEVEL_EXP = 2.1;
// Reputation per adoption: 1 + floor(level / 5).
export const ADOPTION_BASE_REP = 1;
// Send-off fee is a fraction of the dog's adoption reward — never a fixed
// exponential climb. This guarantees net-positive adoptions forever:
//   fee = min(BASE_FRACTION + PER_ADOPT * totalAdoptions, MAX_FRACTION) * reward
// Early cycles keep ~80% of the reward; veterans keep ~45%.
export const ADOPTION_FEE_BASE_FRACTION = 0.20;
export const ADOPTION_FEE_FRACTION_PER_ADOPT = 0.01;
export const ADOPTION_FEE_MAX_FRACTION = 0.55;
// Naming a stray costs Joy and locks them in as yours.
export const NAMING_COST_JOY = 80;
// LV UP cost curve — slightly steeper so deeper levels cost meaningfully.
export const LV_UP_BASE = 30;
export const LV_UP_MULT = 1.55;

// ── Rescue Centers (multi-yard expansion) ────────────────────────────────
// Players start with one center. Each additional center costs Joy and
// requires a minimum number of lifetime adoptions, then gives a compounding
// global Joy bonus. Use this to extend the game infinitely.
export const CENTER_BASE_JOY_COST = 500_000;
export const CENTER_JOY_MULT = 3;           // cost for center N+1 = base * mult^(N-1)
export const CENTER_ADOPTIONS_PER_TIER = 10; // center N unlocks after 10*(N-1) lifetime adoptions
export const CENTER_JOY_BONUS_PER = 0.15;   // +15% global Joy/s per extra center owned

export const CENTER_NAMES = [
  "Sunny Rescue",
  "Willow Haven",
  "Pine Ridge Pups",
  "Harborside Kennel",
  "Moonlit Meadow",
  "Evergreen Rescue",
  "Coral Bay Pups",
  "Starlight Shelter",
  "Wildflower Woofs",
  "Cloudtop Kennel",
];

export function centerNameFor(index: number): string {
  return CENTER_NAMES[index] ?? `Rescue Center ${index + 1}`;
}

// ── Biomes (cosmetic theme per Rescue Center) ────────────────────────────
// Each Rescue Center renders with its own grass tint, sky tint, fence skin,
// and a splash of decor. Biome is picked at creation time from the name so
// "Harborside" always gets sand + seafoam, "Cloudtop" always gets sky, etc.
export interface BiomeTheme {
  id: BiomeId;
  label: string;
  grassTint: number;   // base tint for the grass tilesprite
  skyTop: number;      // hex for the CSS background-equivalent (future use)
  fenceKey: string;    // which fence texture the yard uses
  decor: string;       // emoji accent string shown in a corner of the yard
}

export const BIOMES: Record<BiomeId, BiomeTheme> = {
  meadow:     { id: "meadow",     label: "Meadow",       grassTint: 0xffffff, skyTop: 0xbfe6ff, fenceKey: "fence",      decor: "\u{1F33C}" },
  harbor:     { id: "harbor",     label: "Harborside",   grassTint: 0xcfe9f2, skyTop: 0xa8d7f5, fenceKey: "fence_rope", decor: "\u{1F41A}" },
  pine:       { id: "pine",       label: "Pine Ridge",   grassTint: 0x9fd49a, skyTop: 0xb8d4a8, fenceKey: "fence_log",  decor: "\u{1F332}" },
  cloudtop:   { id: "cloudtop",   label: "Cloudtop",     grassTint: 0xe8d9ff, skyTop: 0xd7c4f7, fenceKey: "fence_iron", decor: "\u{2601}\uFE0F" },
  moonlit:    { id: "moonlit",    label: "Moonlit",      grassTint: 0xa5b4d8, skyTop: 0x4a4e7a, fenceKey: "fence_iron", decor: "\u{1F319}" },
  wildflower: { id: "wildflower", label: "Wildflower",   grassTint: 0xf6c5e4, skyTop: 0xffd9e0, fenceKey: "fence",      decor: "\u{1F337}" },
  coral:      { id: "coral",      label: "Coral Bay",    grassTint: 0xffd7cc, skyTop: 0xffe8da, fenceKey: "fence_rope", decor: "\u{1F41A}" },
  evergreen:  { id: "evergreen",  label: "Evergreen",    grassTint: 0x8fc28a, skyTop: 0xcde8c6, fenceKey: "fence_log",  decor: "\u{1F343}" },
  starlight:  { id: "starlight",  label: "Starlight",    grassTint: 0xb6b1e0, skyTop: 0x38406a, fenceKey: "fence_gold", decor: "\u{2B50}" },
  sunny:      { id: "sunny",      label: "Sunny",        grassTint: 0xfff0b8, skyTop: 0xfff6d6, fenceKey: "fence",      decor: "\u{2600}\uFE0F" },
};

/** Pick a biome from a human-readable center name. */
export function biomeForName(name: string): BiomeId {
  const n = name.toLowerCase();
  if (n.includes("harbor")) return "harbor";
  if (n.includes("pine"))   return "pine";
  if (n.includes("cloud"))  return "cloudtop";
  if (n.includes("moon"))   return "moonlit";
  if (n.includes("wildflower") || n.includes("woof")) return "wildflower";
  if (n.includes("coral"))  return "coral";
  if (n.includes("evergreen") || n.includes("willow")) return "evergreen";
  if (n.includes("star"))   return "starlight";
  if (n.includes("sun"))    return "sunny";
  return "meadow";
}

// ── Yard decorations (appear at Kennel tier milestones) ──────────────────
// Each entry renders once the kennel reaches `minLevel`. Coordinates are in
// yard-local pixels (0..YARD.width, 0..YARD.height) so the same decor map
// lands correctly even on the wider tablet canvas.
export const YARD_DECOR: { minLevel: number; emoji: string; x: number; y: number; size: number }[] = [
  { minLevel: 2,  emoji: "\u{1F33C}", x: 0.08, y: 0.88, size: 14 },  // daisy SW
  { minLevel: 5,  emoji: "\u{1F950}", x: 0.90, y: 0.10, size: 14 },  // croissant-ish (treat) NE
  { minLevel: 10, emoji: "\u{1F3BE}", x: 0.14, y: 0.12, size: 14 },  // tennis ball NW
  { minLevel: 18, emoji: "\u{1F332}", x: 0.93, y: 0.85, size: 18 },  // tree SE
  { minLevel: 28, emoji: "\u{1F6B6}", x: 0.50, y: 0.12, size: 14 },  // walker N
  { minLevel: 40, emoji: "\u{1F451}", x: 0.50, y: 0.92, size: 16 },  // crown S (late-game)
];

// ── Merge Centers (consolidation / prestige-lite) ────────────────────────
// When the player owns at least MERGE_UNLOCK_COUNT centers, the option to
// merge any MERGE_INPUT_COUNT into a single Mega Center appears. The new
// center inherits the sum of the inputs' mergeWeight plus a synergy kicker.
export const MERGE_UNLOCK_COUNT = 5;
export const MERGE_INPUT_COUNT = 3;
export const MERGE_SYNERGY_BONUS = 0.10;   // +10% on top of the summed weight
export const MERGE_MEGA_LABEL = "Mega Rescue";
