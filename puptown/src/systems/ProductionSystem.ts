// Calculates passive Joy / Treats / Reputation per second and applies deltas.

import { BuildingManager } from "../managers/BuildingManager.js";
import { DogManager } from "../managers/DogManager.js";
import { ResourceManager } from "../managers/ResourceManager.js";
import { REP_HAPPY_GAIN_INTERVAL_MS, REP_HAPPY_THRESHOLD, ROLE_INFO } from "../config.js";
import { EventSystem } from "./EventSystem.js";

export interface RateSummary {
  joyPerSec: number;
  treatsPerSec: number;
  repPerMin: number;
}

export class ProductionSystem {
  private repTickAccumMs = 0;

  constructor(
    private dogs: DogManager,
    private buildings: BuildingManager,
    private resources: ResourceManager,
    private events: EventSystem
  ) {}

  /** Current per-second rate (joy includes event multipliers). */
  rates(): RateSummary {
    const joyMult = this.buildings.productionMultiplier() * this.events.joyMultiplier();
    let joy = 0;
    let repChancePerSec = 0;
    for (const d of this.dogs.list()) {
      const happinessFactor = 0.4 + (d.happiness / 100) * 0.6;
      joy += d.baseJoyPerSecond * happinessFactor * joyMult;
      repChancePerSec += ROLE_INFO[d.role].repChance * 0.002; // slow trickle
    }
    const treats = this.buildings.treatsPerSec() + this.events.treatRainPerSec();
    const repPerMin = repChancePerSec * 60;
    return { joyPerSec: joy, treatsPerSec: treats, repPerMin };
  }

  /** Advance the simulation by `deltaMs` and apply earned resources. */
  tick(deltaMs: number): void {
    const dt = deltaMs / 1000;
    const r = this.rates();

    // Happiness regen + slight drain pressure so bowls matter.
    const regen = this.buildings.happinessRegenPerSec();
    for (const d of this.dogs.list()) {
      const roleGain = ROLE_INFO[d.role].happyGain;
      const drift = -0.35 + regen * roleGain;
      this.dogs.updateHappiness(d.id, d.happiness + drift * dt);
    }

    this.resources.add({
      joy: r.joyPerSec * dt,
      treats: r.treatsPerSec * dt,
    });

    // Reputation: chance trickle (rescue dogs heavily weighted), plus
    // periodic bonus for keeping dogs very happy.
    for (const d of this.dogs.list()) {
      if (Math.random() < ROLE_INFO[d.role].repChance * dt * 0.2) {
        this.resources.add({ reputation: 1 });
      }
    }

    this.repTickAccumMs += deltaMs;
    if (this.repTickAccumMs >= REP_HAPPY_GAIN_INTERVAL_MS) {
      this.repTickAccumMs = 0;
      const veryHappy = this.dogs
        .list()
        .filter((d) => d.happiness >= REP_HAPPY_THRESHOLD).length;
      if (veryHappy > 0) this.resources.add({ reputation: veryHappy });
    }

    this.dogs.markReadyIfQualified();
  }

  /** Apply offline earnings for `ms` elapsed since last save. */
  applyOffline(ms: number): { joy: number; treats: number } {
    const dt = ms / 1000;
    const r = this.rates();
    const joy = r.joyPerSec * dt * 0.5; // offline earns 50% efficiency
    const treats = r.treatsPerSec * dt * 0.5;
    this.resources.add({ joy, treats });
    return { joy, treats };
  }
}
