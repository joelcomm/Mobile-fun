// Tiny wrapper around the Resources record with event emission.

import { Resources } from "../types.js";

type Listener = (res: Readonly<Resources>) => void;

export class ResourceManager {
  private res: Resources;
  private listeners: Set<Listener> = new Set();

  constructor(initial: Resources) {
    this.res = { ...initial };
  }

  get snapshot(): Readonly<Resources> {
    return this.res;
  }

  add(delta: Partial<Resources>): void {
    if (delta.joy) this.res.joy = Math.max(0, this.res.joy + delta.joy);
    if (delta.treats) this.res.treats = Math.max(0, this.res.treats + delta.treats);
    if (delta.reputation)
      this.res.reputation = Math.max(0, this.res.reputation + delta.reputation);
    this.emit();
  }

  /** Attempt to spend. Returns true if successful, false if insufficient. */
  spend(cost: Partial<Resources>): boolean {
    if ((cost.joy ?? 0) > this.res.joy) return false;
    if ((cost.treats ?? 0) > this.res.treats) return false;
    if ((cost.reputation ?? 0) > this.res.reputation) return false;
    this.res.joy -= cost.joy ?? 0;
    this.res.treats -= cost.treats ?? 0;
    this.res.reputation -= cost.reputation ?? 0;
    this.emit();
    return true;
  }

  canAfford(cost: Partial<Resources>): boolean {
    return (
      (cost.joy ?? 0) <= this.res.joy &&
      (cost.treats ?? 0) <= this.res.treats &&
      (cost.reputation ?? 0) <= this.res.reputation
    );
  }

  replace(state: Resources): void {
    this.res = { ...state };
    this.emit();
  }

  on(listener: Listener): () => void {
    this.listeners.add(listener);
    listener(this.res);
    return () => this.listeners.delete(listener);
  }

  private emit(): void {
    for (const l of this.listeners) l(this.res);
  }
}
