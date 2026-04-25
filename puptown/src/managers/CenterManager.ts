// Owns the player's Rescue Centers and tracks which one the yard is
// currently showing. Each center acts as its own yard with its own dogs
// and slot unlocks. Players can own up to CENTER_CAP centers, and each
// center can be UPGRADED through MAX_CENTER_TIER for a +15% global Joy
// bonus per tier above 1, +1 dog cap per tier, and a fancier kennel.

import {
  BIOMES,
  BiomeTheme,
  CENTER_ADOPTIONS_PER_TIER,
  CENTER_BASE_JOY_COST,
  CENTER_CAP,
  CENTER_DOG_CAP_BONUS_MAX,
  CENTER_DOG_CAP_PER_TIER,
  CENTER_JOY_BONUS_PER_TIER,
  CENTER_JOY_MULT,
  CENTER_TIER_ADOPTIONS_REQ,
  CENTER_TIER_ADOPTIONS_STEP,
  CENTER_TIER_JOY_COST,
  CENTER_TIER_JOY_MULT,
  biomeForName,
  centerNameFor,
} from "../config.js";
import { Center } from "../types.js";

type Listener = (centers: readonly Center[], currentId: string) => void;

export class CenterManager {
  private centers: Center[] = [];
  private currentId: string;
  private idCounter = 1;
  private listeners: Set<Listener> = new Set();

  constructor(saved?: Center[], savedCurrentId?: string) {
    if (saved && saved.length) {
      this.centers = saved.map((c) => ({ ...c }));
      for (const c of this.centers) {
        const n = parseInt(c.id.replace(/\D/g, ""), 10);
        if (!Number.isNaN(n) && n >= this.idCounter) this.idCounter = n + 1;
      }
    } else {
      const name = centerNameFor(0);
      this.centers.push({
        id: `center_${this.idCounter++}`,
        name,
        adoptions: 0,
        biome: biomeForName(name),
        tier: 1,
      });
    }
    // Backfill biome + tier on older saves so they don't render as a
    // blank yard or sit at undefined-tier after the upgrade.
    for (const c of this.centers) {
      if (!c.biome) c.biome = biomeForName(c.name);
      if (!c.tier || c.tier < 1) c.tier = 1;
    }
    this.currentId = savedCurrentId ?? this.centers[0].id;
    if (!this.centers.some((c) => c.id === this.currentId)) {
      this.currentId = this.centers[0].id;
    }
  }

  biomeFor(id: string): BiomeTheme {
    const c = this.centers.find((x) => x.id === id) ?? this.centers[0];
    return BIOMES[c.biome ?? "meadow"];
  }

  list(): readonly Center[] {
    return this.centers;
  }

  current(): Center {
    return this.centers.find((c) => c.id === this.currentId) ?? this.centers[0];
  }

  currentIdValue(): string {
    return this.currentId;
  }

  count(): number {
    return this.centers.length;
  }

  /** True if the player can still open another center (under CENTER_CAP). */
  canBuyMore(): boolean {
    return this.centers.length < CENTER_CAP;
  }

  on(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.centers, this.currentId);
    return () => this.listeners.delete(listener);
  }

  private emit(): void {
    for (const l of this.listeners) l(this.centers, this.currentId);
  }

  setCurrent(id: string): boolean {
    if (!this.centers.some((c) => c.id === id)) return false;
    if (this.currentId === id) return false;
    this.currentId = id;
    this.emit();
    return true;
  }

  cycle(direction: 1 | -1): void {
    if (this.centers.length <= 1) return;
    const idx = this.centers.findIndex((c) => c.id === this.currentId);
    const next = (idx + direction + this.centers.length) % this.centers.length;
    this.currentId = this.centers[next].id;
    this.emit();
  }

  /** Joy cost and lifetime-adoption requirement for the next center. */
  costNext(): { joy: number; adoptions: number } {
    const n = this.centers.length;
    return {
      joy: Math.ceil(CENTER_BASE_JOY_COST * Math.pow(CENTER_JOY_MULT, n - 1)),
      adoptions: CENTER_ADOPTIONS_PER_TIER * n,
    };
  }

  /** Create and activate a new center. Caller is responsible for charging. */
  buyNext(): Center | null {
    if (!this.canBuyMore()) return null;
    const idx = this.centers.length;
    const name = centerNameFor(idx);
    const center: Center = {
      id: `center_${this.idCounter++}`,
      name,
      adoptions: 0,
      biome: biomeForName(name),
      tier: 1,
    };
    this.centers.push(center);
    this.currentId = center.id;
    this.emit();
    return center;
  }

  /** Tier of the given center (defaults to 1 for legacy saves). */
  tierOf(id: string): number {
    const c = this.centers.find((x) => x.id === id);
    return c?.tier ?? 1;
  }

  /** Centers can always be upgraded — tiers go to infinity. */
  canUpgrade(_id: string): boolean {
    return true;
  }

  /**
   * Joy + lifetime-adoption requirement to reach the next tier of `id`.
   * Past the explicit table we scale Joy multiplicatively and adoptions
   * linearly so the late game keeps biting without flat-lining.
   */
  upgradeCost(id: string): { joy: number; adoptions: number } {
    const tier = this.tierOf(id);
    const tableMax = CENTER_TIER_JOY_COST.length - 1;
    let joy: number;
    if (tier <= tableMax) {
      joy = CENTER_TIER_JOY_COST[tier];
    } else {
      const last = CENTER_TIER_JOY_COST[tableMax];
      joy = Math.ceil(last * Math.pow(CENTER_TIER_JOY_MULT, tier - tableMax));
    }
    const adoptionsTableMax = CENTER_TIER_ADOPTIONS_REQ.length - 1;
    let adoptions: number;
    if (tier <= adoptionsTableMax) {
      adoptions = CENTER_TIER_ADOPTIONS_REQ[tier];
    } else {
      const last = CENTER_TIER_ADOPTIONS_REQ[adoptionsTableMax];
      adoptions = last + (tier - adoptionsTableMax) * CENTER_TIER_ADOPTIONS_STEP;
    }
    return { joy, adoptions };
  }

  /**
   * Upgrade the named center one tier. Returns the new tier or null if the
   * center can't be found. Caller is responsible for charging Joy + checking
   * adoption count beforehand.
   */
  upgradeTier(id: string): number | null {
    const c = this.centers.find((x) => x.id === id);
    if (!c) return null;
    c.tier = (c.tier ?? 1) + 1;
    this.emit();
    return c.tier;
  }

  /** Tallied from a graduate; identifies which center the pup came from. */
  recordAdoption(centerId: string): void {
    const c = this.centers.find((x) => x.id === centerId);
    if (c) c.adoptions += 1;
  }

  /** Sum of (tier - 1) across all owned centers — drives the global Joy% bonus. */
  productionMultiplier(): number {
    const tierBonus = this.centers.reduce((a, c) => a + ((c.tier ?? 1) - 1), 0);
    return 1 + tierBonus * CENTER_JOY_BONUS_PER_TIER;
  }

  /** How many extra dog slots a center earns from its tier (above tier 1).
   *  Capped at CENTER_DOG_CAP_BONUS_MAX so a yard never gets visually crushed
   *  even though tier itself goes to infinity. */
  dogCapBonus(id: string): number {
    const raw = Math.max(0, this.tierOf(id) - 1) * CENTER_DOG_CAP_PER_TIER;
    return Math.min(raw, CENTER_DOG_CAP_BONUS_MAX);
  }

  toData(): Center[] {
    return this.centers.map((c) => ({ ...c }));
  }
}
