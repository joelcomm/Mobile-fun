// Calculates passive Joy / Treats / Reputation per second and applies deltas.
import { REP_HAPPY_GAIN_INTERVAL_MS, REP_HAPPY_THRESHOLD, ROLE_INFO } from "../config.js";
export class ProductionSystem {
    constructor(dogs, buildings, resources, events) {
        this.dogs = dogs;
        this.buildings = buildings;
        this.resources = resources;
        this.events = events;
        this.repTickAccumMs = 0;
    }
    /** Current per-second rate (joy includes event multipliers). */
    rates() {
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
    tick(deltaMs) {
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
            if (veryHappy > 0)
                this.resources.add({ reputation: veryHappy });
        }
        this.dogs.markReadyIfQualified();
    }
    /** Apply offline earnings for `ms` elapsed since last save. */
    applyOffline(ms) {
        const dt = ms / 1000;
        const r = this.rates();
        const joy = r.joyPerSec * dt * 0.5; // offline earns 50% efficiency
        const treats = r.treatsPerSec * dt * 0.5;
        this.resources.add({ joy, treats });
        return { joy, treats };
    }
}
