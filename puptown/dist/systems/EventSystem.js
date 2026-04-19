// Random-event roller and active-effect tracker.
import { EVENT_ROLL_CHANCE, EVENT_ROLL_INTERVAL_MS, RANDOM_EVENTS, } from "../config.js";
export class EventSystem {
    constructor() {
        this.active = null;
        this.rollAccumMs = EVENT_ROLL_INTERVAL_MS * 0.6; // first roll sooner
        this.listeners = new Set();
    }
    on(listener) {
        this.listeners.add(listener);
        listener(this.active);
        return () => this.listeners.delete(listener);
    }
    getActive() {
        return this.active;
    }
    tick(deltaMs) {
        if (this.active) {
            this.active.remainingMs -= deltaMs;
            if (this.active.remainingMs <= 0) {
                this.active = null;
                this.emit();
            }
        }
        else {
            this.rollAccumMs += deltaMs;
            if (this.rollAccumMs >= EVENT_ROLL_INTERVAL_MS) {
                this.rollAccumMs = 0;
                if (Math.random() < EVENT_ROLL_CHANCE) {
                    const pick = RANDOM_EVENTS[Math.floor(Math.random() * RANDOM_EVENTS.length)];
                    this.active = { event: pick, remainingMs: pick.durationMs };
                    this.emit();
                }
            }
        }
    }
    /** Force a specific event (used by debug / testing / dog-pack bonus). */
    trigger(id) {
        const event = RANDOM_EVENTS.find((e) => e.id === id);
        if (!event)
            return;
        this.active = { event, remainingMs: event.durationMs };
        this.emit();
    }
    // ── Current multiplier helpers used by other systems ──────────────────
    joyMultiplier() {
        if (this.active?.event.effect.kind === "zoomies") {
            return this.active.event.effect.joyMultiplier;
        }
        return 1;
    }
    tapMultiplier() {
        if (this.active?.event.effect.kind === "goldenSqueaky") {
            return this.active.event.effect.tapMultiplier;
        }
        return 1;
    }
    treatRainPerSec() {
        if (this.active?.event.effect.kind === "treatRain") {
            return this.active.event.effect.perSec;
        }
        return 0;
    }
    emit() {
        for (const l of this.listeners)
            l(this.active);
    }
}
