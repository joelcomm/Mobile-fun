// Calculates passive Joy / Treats / Reputation per second and applies deltas.
import { MOOD_EVENT_BUBBLES, MOOD_EVENT_DROP_MAX, MOOD_EVENT_DROP_MIN, MOOD_EVENT_MAX_MS, MOOD_EVENT_MIN_MS, REP_HAPPY_GAIN_INTERVAL_MS, REP_HAPPY_THRESHOLD, ROLE_INFO, } from "../config.js";
export class ProductionSystem {
    constructor(dogs, buildings, resources, events, centers) {
        this.dogs = dogs;
        this.buildings = buildings;
        this.resources = resources;
        this.events = events;
        this.centers = centers;
        this.repTickAccumMs = 0;
        this.nextMoodInMs = rollMoodInterval();
        this.moodListeners = new Set();
    }
    /** Subscribe for "a dog just got sad" events (UI bubbles etc.). */
    onMood(listener) {
        this.moodListeners.add(listener);
        return () => this.moodListeners.delete(listener);
    }
    /** Current per-second rate (joy includes event + center multipliers). */
    rates() {
        const joyMult = this.buildings.productionMultiplier() *
            this.events.joyMultiplier() *
            this.centers.productionMultiplier();
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
        // Happiness regen + drain. Drain scales with level so a fussy L15
        // veteran actually needs a Treat Bowl + attention to stay happy —
        // otherwise every dog instantly pins to 100% and the bar is decor.
        const regen = this.buildings.happinessRegenPerSec();
        for (const d of this.dogs.list()) {
            const roleGain = ROLE_INFO[d.role].happyGain;
            const levelDrain = 0.55 + d.level * 0.06;
            const drift = -levelDrain + regen * roleGain;
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
        // Random mood events. A single dog gets bored / spooked / sleepy and
        // drops happiness, forcing the player to tap in or let a Treat Bowl
        // catch them. Only picks from currently-visible dogs so the bubble is
        // actually visible on screen.
        this.nextMoodInMs -= deltaMs;
        if (this.nextMoodInMs <= 0) {
            this.nextMoodInMs = rollMoodInterval();
            const candidates = this.dogs
                .listCurrent()
                .filter((d) => d.happiness > 35);
            if (candidates.length > 0) {
                const victim = candidates[Math.floor(Math.random() * candidates.length)];
                const drop = MOOD_EVENT_DROP_MIN +
                    Math.random() * (MOOD_EVENT_DROP_MAX - MOOD_EVENT_DROP_MIN);
                this.dogs.updateHappiness(victim.id, victim.happiness - drop);
                const flavor = MOOD_EVENT_BUBBLES[Math.floor(Math.random() * MOOD_EVENT_BUBBLES.length)];
                const evt = {
                    dogId: victim.id,
                    icon: flavor.icon,
                    label: flavor.label,
                    drop,
                };
                for (const l of this.moodListeners)
                    l(evt);
            }
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
function rollMoodInterval() {
    return MOOD_EVENT_MIN_MS + Math.random() * (MOOD_EVENT_MAX_MS - MOOD_EVENT_MIN_MS);
}
