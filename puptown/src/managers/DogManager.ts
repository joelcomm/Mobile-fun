// Owns the list of dogs and handles creation, leveling, and unlock logic.
//
// Multi-center aware: each dog carries a `centerId`. `list()` returns every
// dog (used by production + save). `listCurrent()` returns only dogs in the
// active center and is what UI subscribers see.

import {
  ADOPTION_BASE_REP,
  ADOPTION_HAPPINESS_REQ,
  ADOPTION_JOY_BASE,
  ADOPTION_LEVEL_EXP,
  ADOPTION_LEVEL_REQ,
  ALL_BREEDS,
  ALL_PERSONALITIES,
  DOG_NAMES,
  ROLE_INFO,
  UNLOCK_COSTS,
  UNLOCK_REP,
  YARD,
} from "../config.js";
import { DogData, DogRole } from "../types.js";

type Listener = (dogs: readonly DogData[]) => void;

export class DogManager {
  private dogs: DogData[] = [];
  private listeners: Set<Listener> = new Set();
  private idCounter = 1;
  private currentCenterId: string = "";

  constructor(initial?: DogData[]) {
    if (initial && initial.length) {
      this.dogs = initial.map((d) => ({ ...d, position: { ...d.position } }));
      // Make sure id counter stays ahead of anything loaded.
      for (const d of this.dogs) {
        const n = parseInt(d.id.replace(/\D/g, ""), 10);
        if (!Number.isNaN(n) && n >= this.idCounter) this.idCounter = n + 1;
      }
    }
  }

  /** Bind this manager to a current center. UI subscribers see that center. */
  setCurrentCenter(id: string): void {
    if (this.currentCenterId === id) return;
    this.currentCenterId = id;
    this.emit();
  }

  /** All dogs across every center (used by production + save). */
  list(): readonly DogData[] {
    return this.dogs;
  }

  /** Only dogs in the active center (used by the yard + dog panel). */
  listCurrent(): readonly DogData[] {
    return this.dogs.filter((d) => (d.centerId ?? this.currentCenterId) === this.currentCenterId);
  }

  count(): number {
    return this.dogs.length;
  }

  countCurrent(): number {
    return this.listCurrent().length;
  }

  get(id: string): DogData | undefined {
    return this.dogs.find((d) => d.id === id);
  }

  on(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.listCurrent());
    return () => this.listeners.delete(listener);
  }

  emit(): void {
    const visible = this.listCurrent();
    for (const l of this.listeners) l(visible);
  }

  /** Cost (in Joy) to unlock the next dog slot in the current center. */
  nextUnlockCost(): number {
    const i = this.countCurrent();
    return UNLOCK_COSTS[i] ?? UNLOCK_COSTS[UNLOCK_COSTS.length - 1] * Math.pow(2.5, i - UNLOCK_COSTS.length + 1);
  }

  /** Reputation needed before next slot can be unlocked. */
  nextUnlockRep(): number {
    const i = this.countCurrent();
    return UNLOCK_REP[i] ?? UNLOCK_REP[UNLOCK_REP.length - 1];
  }

  spawnStarter(): DogData {
    const dog = this.makeDog("companion", 1);
    dog.name = "Biscuit"; // starter always Biscuit, pre-named for the tutorial
    dog.named = true;
    dog.centerId = this.currentCenterId;
    this.dogs.push(dog);
    this.emit();
    return dog;
  }

  /** Create & adopt a new stray in the active center; player must name it. */
  adopt(role: DogRole = pickRole()): DogData {
    const dog = this.makeDog(role, 1);
    dog.name = "Stray";
    dog.named = false;
    dog.centerId = this.currentCenterId;
    this.dogs.push(dog);
    this.emit();
    return dog;
  }

  levelUp(id: string): boolean {
    const dog = this.get(id);
    if (!dog) return false;
    dog.level += 1;
    // Level up recomputes base production.
    const roleInfo = ROLE_INFO[dog.role];
    dog.baseJoyPerSecond = baseJoyForLevel(dog.level) * roleInfo.joyMult;
    dog.tapBonus = baseTapForLevel(dog.level) * roleInfo.tapMult;
    this.emit();
    return true;
  }

  updatePosition(id: string, x: number, y: number): void {
    const dog = this.get(id);
    if (!dog) return;
    dog.position.x = x;
    dog.position.y = y;
  }

  updateHappiness(id: string, value: number): void {
    const dog = this.get(id);
    if (!dog) return;
    dog.happiness = clamp(value, 0, 100);
  }

  /** Returns true if a dog has reached the threshold to graduate. */
  isReady(d: DogData): boolean {
    if (!d.named) return false;
    if (d.readyForAdoption) return true;
    return d.level >= ADOPTION_LEVEL_REQ && d.happiness >= ADOPTION_HAPPINESS_REQ;
  }

  /** Assigns a random name to a stray; returns the chosen name. */
  nameStray(id: string): string | null {
    const dog = this.get(id);
    if (!dog || dog.named) return null;
    dog.name = DOG_NAMES[Math.floor(Math.random() * DOG_NAMES.length)];
    dog.named = true;
    this.emit();
    return dog.name;
  }

  /** Mark any qualifying dogs as ready (sticky once true). */
  markReadyIfQualified(): void {
    let changed = false;
    for (const d of this.dogs) {
      if (!d.readyForAdoption && this.isReady(d)) {
        d.readyForAdoption = true;
        changed = true;
      }
    }
    if (changed) this.emit();
  }

  /** Joy + Reputation reward for graduating a given dog. */
  adoptionReward(d: DogData): { joy: number; rep: number } {
    const roleMult = 0.6 + ROLE_INFO[d.role].repChance * 6; // rescue ~1.08, agility ~0.72
    const joy = Math.floor(ADOPTION_JOY_BASE * Math.pow(d.level, ADOPTION_LEVEL_EXP) * roleMult);
    const rep = ADOPTION_BASE_REP + Math.floor(d.level / 5);
    return { joy, rep };
  }

  /** Remove a dog by id; returns true if removed. */
  remove(id: string): boolean {
    const idx = this.dogs.findIndex((d) => d.id === id);
    if (idx < 0) return false;
    this.dogs.splice(idx, 1);
    this.emit();
    return true;
  }

  toData(): DogData[] {
    return this.dogs.map((d) => ({ ...d, position: { ...d.position } }));
  }

  private makeDog(role: DogRole, level: number): DogData {
    const id = `dog_${this.idCounter++}`;
    const breed = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)];
    const palette = Math.floor(Math.random() * 2); // 2 variants per breed
    const personality =
      ALL_PERSONALITIES[Math.floor(Math.random() * ALL_PERSONALITIES.length)];
    const name = DOG_NAMES[Math.floor(Math.random() * DOG_NAMES.length)];
    const roleInfo = ROLE_INFO[role];
    return {
      id,
      name,
      breedType: breed,
      colorVariant: palette,
      personality,
      role,
      level,
      happiness: 80,
      baseJoyPerSecond: baseJoyForLevel(level) * roleInfo.joyMult,
      tapBonus: baseTapForLevel(level) * roleInfo.tapMult,
      position: {
        x: YARD.x + 40 + Math.random() * (YARD.width - 80),
        y: YARD.y + 40 + Math.random() * (YARD.height - 80),
      },
      animState: "idle",
    };
  }
}

function baseJoyForLevel(level: number): number {
  // Gentle ramp: 1, 2, 3.5, 5.5, 8, ...
  return 1 + (level - 1) * 1.4 + Math.pow(level - 1, 1.35) * 0.4;
}

function baseTapForLevel(level: number): number {
  return 1 + level * 0.6;
}

function pickRole(): DogRole {
  const roles: DogRole[] = ["companion", "therapy", "agility", "rescue"];
  // Companion more common; others rarer.
  const weights = [0.5, 0.18, 0.2, 0.12];
  const r = Math.random();
  let acc = 0;
  for (let i = 0; i < roles.length; i++) {
    acc += weights[i];
    if (r < acc) return roles[i];
  }
  return "companion";
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}
