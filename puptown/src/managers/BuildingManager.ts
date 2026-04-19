// Tracks owned buildings and computes costs/effects for current levels.

import { BUILDINGS } from "../config.js";
import { BuildingData, BuildingDef } from "../types.js";

export class BuildingManager {
  private items: BuildingData[];

  constructor(initial?: BuildingData[]) {
    // Ensure every defined building has a record so UI lookups are simple.
    const byId = new Map<string, BuildingData>();
    for (const def of BUILDINGS) {
      byId.set(def.id, { id: def.id, typeId: def.id, level: 0 });
    }
    if (initial) {
      for (const b of initial) {
        if (byId.has(b.typeId)) byId.set(b.typeId, { ...b });
      }
    }
    this.items = Array.from(byId.values());
  }

  list(): readonly BuildingData[] {
    return this.items;
  }

  def(id: string): BuildingDef | undefined {
    return BUILDINGS.find((b) => b.id === id);
  }

  levelOf(id: string): number {
    return this.items.find((b) => b.typeId === id)?.level ?? 0;
  }

  costFor(id: string): { joy: number; treats: number; reputation: number } | null {
    const def = this.def(id);
    if (!def) return null;
    const level = this.levelOf(id);
    if (level >= def.maxLevel) return null;
    const mult = Math.pow(def.costMultiplier, level);
    return {
      joy: Math.ceil((def.baseCost.joy ?? 0) * mult),
      treats: Math.ceil((def.baseCost.treats ?? 0) * mult),
      reputation: def.baseCost.reputation ?? 0,
    };
  }

  upgrade(id: string): boolean {
    const item = this.items.find((b) => b.typeId === id);
    const def = this.def(id);
    if (!item || !def) return false;
    if (item.level >= def.maxLevel) return false;
    item.level += 1;
    return true;
  }

  toData(): BuildingData[] {
    return this.items.map((b) => ({ ...b }));
  }

  // ── Aggregated modifiers used by the production system ────────────────
  happinessRegenPerSec(): number {
    let total = 0;
    for (const it of this.items) {
      const d = this.def(it.typeId);
      if (!d || d.effect.kind !== "happiness") continue;
      total += d.effect.value * it.level;
    }
    return total;
  }

  productionMultiplier(): number {
    let mult = 1;
    for (const it of this.items) {
      const d = this.def(it.typeId);
      if (!d || d.effect.kind !== "production") continue;
      mult += d.effect.value * it.level;
    }
    return mult;
  }

  tapBonusFlat(): number {
    let total = 0;
    for (const it of this.items) {
      const d = this.def(it.typeId);
      if (!d || d.effect.kind !== "tapBonus") continue;
      total += d.effect.value * it.level;
    }
    return total;
  }

  treatsPerSec(): number {
    let total = 0;
    for (const it of this.items) {
      const d = this.def(it.typeId);
      if (!d || d.effect.kind !== "treatsPerSec") continue;
      total += d.effect.value * it.level;
    }
    return total;
  }

  autoTapsPerSec(): number {
    let total = 0;
    for (const it of this.items) {
      const d = this.def(it.typeId);
      if (!d || d.effect.kind !== "automation") continue;
      total += d.effect.value * it.level;
    }
    return total;
  }
}
