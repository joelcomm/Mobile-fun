// Owns the player's Rescue Centers and tracks which one the yard is
// currently showing. Each center acts as its own yard with its own dogs
// and slot unlocks; owning more centers gives a compounding global Joy
// bonus so the game keeps scaling.

import {
  BIOMES,
  BiomeTheme,
  CENTER_ADOPTIONS_PER_TIER,
  CENTER_BASE_JOY_COST,
  CENTER_JOY_BONUS_PER,
  CENTER_JOY_MULT,
  MERGE_INPUT_COUNT,
  MERGE_MEGA_LABEL,
  MERGE_SYNERGY_BONUS,
  MERGE_UNLOCK_COUNT,
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
        mergeWeight: 1,
      });
    }
    // Backfill biome + mergeWeight on older saves so they don't render as a
    // blank yard after the upgrade.
    for (const c of this.centers) {
      if (!c.biome) c.biome = biomeForName(c.name);
      if (!c.mergeWeight) c.mergeWeight = 1;
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
  buyNext(): Center {
    const idx = this.centers.length;
    const name = centerNameFor(idx);
    const center: Center = {
      id: `center_${this.idCounter++}`,
      name,
      adoptions: 0,
      biome: biomeForName(name),
      mergeWeight: 1,
    };
    this.centers.push(center);
    this.currentId = center.id;
    this.emit();
    return center;
  }

  /** True if the player owns enough centers to use Merge. */
  canMerge(): boolean {
    return this.centers.length >= MERGE_UNLOCK_COUNT;
  }

  /** How many centers a single merge consumes. */
  mergeInputCount(): number {
    return MERGE_INPUT_COUNT;
  }

  /**
   * Consume `sourceIds` (length MUST equal MERGE_INPUT_COUNT) and produce
   * one Mega Rescue whose mergeWeight equals the sum of inputs * (1 + synergy).
   * Returns the new center's id so the caller can re-parent any dogs that
   * lived in the sacrificed centers.
   */
  merge(sourceIds: string[]): { newId: string; absorbedIds: string[] } | null {
    if (!this.canMerge()) return null;
    if (sourceIds.length !== MERGE_INPUT_COUNT) return null;
    const sources = sourceIds
      .map((id) => this.centers.find((c) => c.id === id))
      .filter((c): c is Center => !!c);
    if (sources.length !== MERGE_INPUT_COUNT) return null;
    const summedWeight = sources.reduce((acc, c) => acc + (c.mergeWeight ?? 1), 0);
    const newWeight = summedWeight * (1 + MERGE_SYNERGY_BONUS);
    const absorbedIds = sources.map((c) => c.id);
    // Pick a biome from the richest input so the new center looks like its
    // strongest ancestor. Starlight/gold biomes rank highest.
    const biomeRank: Record<string, number> = {
      meadow: 1, sunny: 2, wildflower: 3, harbor: 4, coral: 5,
      pine: 6, evergreen: 7, moonlit: 8, cloudtop: 9, starlight: 10,
    };
    const best = sources.slice().sort(
      (a, b) => (biomeRank[b.biome ?? "meadow"] ?? 0) - (biomeRank[a.biome ?? "meadow"] ?? 0)
    )[0];
    const newCenter: Center = {
      id: `center_${this.idCounter++}`,
      name: `${MERGE_MEGA_LABEL} \u2726`,
      adoptions: sources.reduce((a, c) => a + c.adoptions, 0),
      biome: best.biome ?? "starlight",
      mergeWeight: newWeight,
    };
    this.centers = this.centers.filter((c) => !absorbedIds.includes(c.id));
    this.centers.push(newCenter);
    this.currentId = newCenter.id;
    this.emit();
    return { newId: newCenter.id, absorbedIds };
  }

  /** Tallied from a graduate; identifies which center the pup came from. */
  recordAdoption(centerId: string): void {
    const c = this.centers.find((x) => x.id === centerId);
    if (c) c.adoptions += 1;
  }

  /** +15% per mergeWeight above 1 (a 2.2-weight mega center contributes 1.2). */
  productionMultiplier(): number {
    const totalWeight = this.centers.reduce((a, c) => a + (c.mergeWeight ?? 1), 0);
    return 1 + (totalWeight - 1) * CENTER_JOY_BONUS_PER;
  }

  toData(): Center[] {
    return this.centers.map((c) => ({ ...c }));
  }
}
