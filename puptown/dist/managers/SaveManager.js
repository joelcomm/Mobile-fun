// Handles persistence of SaveState to localStorage with versioning.
import { SAVE_KEY, SAVE_VERSION } from "../types.js";
export class SaveManager {
    constructor() {
        this.lastWriteAt = 0;
    }
    load() {
        try {
            const raw = localStorage.getItem(SAVE_KEY);
            if (!raw)
                return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== "object")
                return null;
            if (parsed.version !== SAVE_VERSION) {
                // No migrations yet — start fresh if we find an older schema.
                return null;
            }
            return parsed;
        }
        catch {
            return null;
        }
    }
    save(state, throttleMs = 0) {
        const now = Date.now();
        if (throttleMs > 0 && now - this.lastWriteAt < throttleMs)
            return;
        this.lastWriteAt = now;
        try {
            localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        }
        catch (e) {
            console.warn("[PupTown] Failed to save:", e);
        }
    }
    wipe() {
        try {
            localStorage.removeItem(SAVE_KEY);
        }
        catch {
            /* no-op */
        }
    }
}
