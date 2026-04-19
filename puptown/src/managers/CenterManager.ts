// Owns the player's Rescue Centers and tracks which one the yard is
// currently showing. Each center acts as its own yard with its own dogs
// and slot unlocks; owning more centers gives a compounding global Joy
// bonus so the game keeps scaling.

import {
  CENTER_ADOPTIONS_PER_TIER,
  CENTER_BASE_JOY_COST,
  CENTER_JOY_BONUS_PER,
  CENTER_JOY_MULT,
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
      this.centers.push({
        id: `center_${this.idCounter++}`,
        name: centerNameFor(0),
        adoptions: 0,
      });
    }
    this.currentId = savedCurrentId ?? this.centers[0].id;
    if (!this.centers.some((c) => c.id === this.currentId)) {
      this.currentId = this.centers[0].id;
    }
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
    const center: Center = {
      id: `center_${this.idCounter++}`,
      name: centerNameFor(idx),
      adoptions: 0,
    };
    this.centers.push(center);
    this.currentId = center.id;
    this.emit();
    return center;
  }

  /** Tallied from a graduate; identifies which center the pup came from. */
  recordAdoption(centerId: string): void {
    const c = this.centers.find((x) => x.id === centerId);
    if (c) c.adoptions += 1;
  }

  /** +15% per additional center owned (1 center = 1x, 2 = 1.15x, …). */
  productionMultiplier(): number {
    return 1 + (this.centers.length - 1) * CENTER_JOY_BONUS_PER;
  }

  toData(): Center[] {
    return this.centers.map((c) => ({ ...c }));
  }
}
