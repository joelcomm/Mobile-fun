// Tiny wrapper around the Resources record with event emission.
export class ResourceManager {
    constructor(initial) {
        this.listeners = new Set();
        this.res = { ...initial };
    }
    get snapshot() {
        return this.res;
    }
    add(delta) {
        if (delta.joy)
            this.res.joy = Math.max(0, this.res.joy + delta.joy);
        if (delta.treats)
            this.res.treats = Math.max(0, this.res.treats + delta.treats);
        if (delta.reputation)
            this.res.reputation = Math.max(0, this.res.reputation + delta.reputation);
        this.emit();
    }
    /** Attempt to spend. Returns true if successful, false if insufficient. */
    spend(cost) {
        if ((cost.joy ?? 0) > this.res.joy)
            return false;
        if ((cost.treats ?? 0) > this.res.treats)
            return false;
        if ((cost.reputation ?? 0) > this.res.reputation)
            return false;
        this.res.joy -= cost.joy ?? 0;
        this.res.treats -= cost.treats ?? 0;
        this.res.reputation -= cost.reputation ?? 0;
        this.emit();
        return true;
    }
    canAfford(cost) {
        return ((cost.joy ?? 0) <= this.res.joy &&
            (cost.treats ?? 0) <= this.res.treats &&
            (cost.reputation ?? 0) <= this.res.reputation);
    }
    replace(state) {
        this.res = { ...state };
        this.emit();
    }
    on(listener) {
        this.listeners.add(listener);
        listener(this.res);
        return () => this.listeners.delete(listener);
    }
    emit() {
        for (const l of this.listeners)
            l(this.res);
    }
}
