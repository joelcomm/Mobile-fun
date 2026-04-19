// Owns the list of dogs and handles creation, leveling, and unlock logic.
import { ADOPTION_BASE_REP, ADOPTION_HAPPINESS_REQ, ADOPTION_JOY_BASE, ADOPTION_LEVEL_EXP, ADOPTION_LEVEL_REQ, ALL_BREEDS, ALL_PERSONALITIES, DOG_NAMES, ROLE_INFO, UNLOCK_COSTS, UNLOCK_REP, YARD, } from "../config.js";
export class DogManager {
    constructor(initial) {
        this.dogs = [];
        this.listeners = new Set();
        this.idCounter = 1;
        if (initial && initial.length) {
            this.dogs = initial.map((d) => ({ ...d, position: { ...d.position } }));
            // Make sure id counter stays ahead of anything loaded.
            for (const d of this.dogs) {
                const n = parseInt(d.id.replace(/\D/g, ""), 10);
                if (!Number.isNaN(n) && n >= this.idCounter)
                    this.idCounter = n + 1;
            }
        }
    }
    list() {
        return this.dogs;
    }
    count() {
        return this.dogs.length;
    }
    get(id) {
        return this.dogs.find((d) => d.id === id);
    }
    on(listener) {
        this.listeners.add(listener);
        listener(this.dogs);
        return () => this.listeners.delete(listener);
    }
    emit() {
        for (const l of this.listeners)
            l(this.dogs);
    }
    /** Cost (in Joy) to unlock the next dog slot. */
    nextUnlockCost() {
        const i = this.dogs.length;
        return UNLOCK_COSTS[i] ?? UNLOCK_COSTS[UNLOCK_COSTS.length - 1] * Math.pow(2.5, i - UNLOCK_COSTS.length + 1);
    }
    /** Reputation needed before next slot can be unlocked. */
    nextUnlockRep() {
        const i = this.dogs.length;
        return UNLOCK_REP[i] ?? UNLOCK_REP[UNLOCK_REP.length - 1];
    }
    spawnStarter() {
        const dog = this.makeDog("companion", 1);
        dog.name = "Biscuit"; // starter always Biscuit, pre-named for the tutorial
        dog.named = true;
        this.dogs.push(dog);
        this.emit();
        return dog;
    }
    /** Create & adopt a new stray with a given role; player must name it. */
    adopt(role = pickRole()) {
        const dog = this.makeDog(role, 1);
        dog.name = "Stray";
        dog.named = false;
        this.dogs.push(dog);
        this.emit();
        return dog;
    }
    levelUp(id) {
        const dog = this.get(id);
        if (!dog)
            return false;
        dog.level += 1;
        // Level up recomputes base production.
        const roleInfo = ROLE_INFO[dog.role];
        dog.baseJoyPerSecond = baseJoyForLevel(dog.level) * roleInfo.joyMult;
        dog.tapBonus = baseTapForLevel(dog.level) * roleInfo.tapMult;
        this.emit();
        return true;
    }
    updatePosition(id, x, y) {
        const dog = this.get(id);
        if (!dog)
            return;
        dog.position.x = x;
        dog.position.y = y;
    }
    updateHappiness(id, value) {
        const dog = this.get(id);
        if (!dog)
            return;
        dog.happiness = clamp(value, 0, 100);
    }
    /** Returns true if a dog has reached the threshold to graduate. */
    isReady(d) {
        if (!d.named)
            return false;
        if (d.readyForAdoption)
            return true;
        return d.level >= ADOPTION_LEVEL_REQ && d.happiness >= ADOPTION_HAPPINESS_REQ;
    }
    /** Assigns a random name to a stray; returns the chosen name. */
    nameStray(id) {
        const dog = this.get(id);
        if (!dog || dog.named)
            return null;
        dog.name = DOG_NAMES[Math.floor(Math.random() * DOG_NAMES.length)];
        dog.named = true;
        this.emit();
        return dog.name;
    }
    /** Mark any qualifying dogs as ready (sticky once true). */
    markReadyIfQualified() {
        let changed = false;
        for (const d of this.dogs) {
            if (!d.readyForAdoption && this.isReady(d)) {
                d.readyForAdoption = true;
                changed = true;
            }
        }
        if (changed)
            this.emit();
    }
    /** Joy + Reputation reward for graduating a given dog. */
    adoptionReward(d) {
        const roleMult = 0.6 + ROLE_INFO[d.role].repChance * 6; // rescue ~1.08, agility ~0.72
        const joy = Math.floor(ADOPTION_JOY_BASE * Math.pow(d.level, ADOPTION_LEVEL_EXP) * roleMult);
        const rep = ADOPTION_BASE_REP + Math.floor(d.level / 5);
        return { joy, rep };
    }
    /** Remove a dog by id; returns true if removed. */
    remove(id) {
        const idx = this.dogs.findIndex((d) => d.id === id);
        if (idx < 0)
            return false;
        this.dogs.splice(idx, 1);
        this.emit();
        return true;
    }
    toData() {
        return this.dogs.map((d) => ({ ...d, position: { ...d.position } }));
    }
    makeDog(role, level) {
        const id = `dog_${this.idCounter++}`;
        const breed = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)];
        const palette = Math.floor(Math.random() * 2); // 2 variants per breed
        const personality = ALL_PERSONALITIES[Math.floor(Math.random() * ALL_PERSONALITIES.length)];
        const name = DOG_NAMES[Math.floor(Math.random() * DOG_NAMES.length)];
        const roleInfo = ROLE_INFO[role];
        return {
            id,
            name,
            breedType: breed,
            colorVariant: palette,
            personality,
            role,
            level,
            happiness: 80,
            baseJoyPerSecond: baseJoyForLevel(level) * roleInfo.joyMult,
            tapBonus: baseTapForLevel(level) * roleInfo.tapMult,
            position: {
                x: YARD.x + 40 + Math.random() * (YARD.width - 80),
                y: YARD.y + 40 + Math.random() * (YARD.height - 80),
            },
            animState: "idle",
        };
    }
}
function baseJoyForLevel(level) {
    // Gentle ramp: 1, 2, 3.5, 5.5, 8, ...
    return 1 + (level - 1) * 1.4 + Math.pow(level - 1, 1.35) * 0.4;
}
function baseTapForLevel(level) {
    return 1 + level * 0.6;
}
function pickRole() {
    const roles = ["companion", "therapy", "agility", "rescue"];
    // Companion more common; others rarer.
    const weights = [0.5, 0.18, 0.2, 0.12];
    const r = Math.random();
    let acc = 0;
    for (let i = 0; i < roles.length; i++) {
        acc += weights[i];
        if (r < acc)
            return roles[i];
    }
    return "companion";
}
function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
}
