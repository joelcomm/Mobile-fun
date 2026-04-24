// Shared domain types for Pup Town Idle.

export type BreedType =
  | "chihuahua"
  | "dachshund"
  | "shiba"
  | "corgi"
  | "beagle"
  | "mutt"
  | "poodle"
  | "bulldog"
  | "dalmatian"
  | "husky"
  | "goldie"
  | "greatdane"
  | "yorkiepoo"
  | "pomeranian";

export type Personality =
  | "playful"
  | "calm"
  | "brave"
  | "shy"
  | "clever"
  | "zoomy";

export type DogRole = "companion" | "therapy" | "agility" | "rescue";

export type AnimState = "idle" | "walk" | "bark" | "sleep" | "zoomies";

export interface Vec2 {
  x: number;
  y: number;
}

export interface DogData {
  id: string;
  name: string;
  breedType: BreedType;
  colorVariant: number;          // palette index
  personality: Personality;
  role: DogRole;
  level: number;
  happiness: number;             // 0..100
  baseJoyPerSecond: number;
  tapBonus: number;
  position: Vec2;
  animState: AnimState;
  readyForAdoption?: boolean;
  named?: boolean;
  centerId?: string;             // which Rescue Center this pup lives in
}

export type BiomeId =
  | "meadow"
  | "harbor"
  | "pine"
  | "cloudtop"
  | "moonlit"
  | "wildflower"
  | "coral"
  | "evergreen"
  | "starlight"
  | "sunny";

export interface Center {
  id: string;
  name: string;
  adoptions: number;             // pups sent home from this center
  biome?: BiomeId;               // cosmetic theme; inferred from name if absent
  tier?: number;                 // 1..5 — drives joy bonus, dog cap, kennel visuals
  mergeWeight?: number;          // legacy: kept on disk for old saves; unused now
}

export interface Resources {
  joy: number;
  treats: number;
  reputation: number;
}

export interface BuildingData {
  id: string;
  typeId: string;
  level: number;
}

export interface BuildingDef {
  id: string;
  name: string;
  icon: string;
  description: string;
  baseCost: { joy?: number; treats?: number; reputation?: number };
  costMultiplier: number;
  effect: {
    kind:
      | "happiness"
      | "production"
      | "automation"
      | "tapBonus"
      | "treatsPerSec";
    value: number; // per level
  };
  maxLevel: number;
}

export interface RandomEvent {
  id: string;
  name: string;
  icon: string;
  description: string;
  durationMs: number;
  effect:
    | { kind: "treatRain"; perSec: number }
    | { kind: "zoomies"; joyMultiplier: number }
    | { kind: "goldenSqueaky"; tapMultiplier: number };
}

export interface SaveState {
  version: number;
  lastSavedAt: number;           // unix ms
  resources: Resources;
  dogs: DogData[];
  buildings: BuildingData[];
  unlockedDogSlots: number;
  totalPlaytimeMs: number;
  totalAdoptions?: number;       // drives escalating send-off fees
  centers?: Center[];            // rescue centers owned; old saves default to one
  currentCenterId?: string;
  retiredNames?: string[];       // names of adopted-out dogs — never reused
}

export const SAVE_VERSION = 1;
export const SAVE_KEY = "puptown.save.v1";
