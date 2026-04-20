// Owns the list of dogs and handles creation, leveling, and unlock logic.
//
// Multi-center aware: each dog carries a `centerId`. `list()` returns every
// dog (used by production + save). `listCurrent()` returns only dogs in the
// active center and is what UI subscribers see.
import { ADOPTION_BASE_REP, ADOPTION_HAPPINESS_REQ, ADOPTION_JOY_BASE, ADOPTION_LEVEL_EXP, ADOPTION_LEVEL_REQ, ALL_BREEDS, ALL_PERSONALITIES, DOG_NAMES, ROLE_INFO, SIGNATURE_DOGS, SIGNATURE_SPAWN_CHANCE, UNLOCK_COSTS, UNLOCK_REP, YARD, } from "../config.js";
export class DogManager {
    constructor(initial, retiredNames) {
        this.dogs = [];
        this.listeners = new Set();
        this.idCounter = 1;
        this.currentCenterId = "";
        // Names of dogs that have been adopted out. We never reuse them so the
        // player's pups always feel like individuals.
        this.retiredNames = new Set();
        if (initial && initial.length) {
            this.dogs = initial.map((d) => ({ ...d, position: { ...d.position } }));
            // Make sure id counter stays ahead of anything loaded.
            for (const d of this.dogs) {
                const n = parseInt(d.id.replace(/\D/g, ""), 10);
                if (!Number.isNaN(n) && n >= this.idCounter)
                    this.idCounter = n + 1;
            }
        }
        if (retiredNames)
            for (const n of retiredNames)
                this.retiredNames.add(n);
    }
    /** Names that can never be reused (adopted-out dogs). */
    retiredNamesList() {
        return Array.from(this.retiredNames);
    }
    /** Bind this manager to a current center. UI subscribers see that center. */
    setCurrentCenter(id) {
        if (this.currentCenterId === id)
            return;
        this.currentCenterId = id;
        this.emit();
    }
    /** All dogs across every center (used by production + save). */
    list() {
        return this.dogs;
    }
    /** Only dogs in the active center (used by the yard + dog panel). */
    listCurrent() {
        return this.dogs.filter((d) => (d.centerId ?? this.currentCenterId) === this.currentCenterId);
    }
    count() {
        return this.dogs.length;
    }
    countCurrent() {
        return this.listCurrent().length;
    }
    get(id) {
        return this.dogs.find((d) => d.id === id);
    }
    on(listener) {
        this.listeners.add(listener);
        listener(this.listCurrent());
        return () => this.listeners.delete(listener);
    }
    emit() {
        const visible = this.listCurrent();
        for (const l of this.listeners)
            l(visible);
    }
    /** Cost (in Joy) to unlock the next dog slot in the current center. */
    nextUnlockCost() {
        const i = this.countCurrent();
        return UNLOCK_COSTS[i] ?? UNLOCK_COSTS[UNLOCK_COSTS.length - 1] * Math.pow(2.5, i - UNLOCK_COSTS.length + 1);
    }
    /** Reputation needed before next slot can be unlocked. */
    nextUnlockRep() {
        const i = this.countCurrent();
        return UNLOCK_REP[i] ?? UNLOCK_REP[UNLOCK_REP.length - 1];
    }
    spawnStarter() {
        const dog = this.makeDog("companion", 1);
        dog.name = "Biscuit"; // starter always Biscuit, pre-named for the tutorial
        dog.named = true;
        dog.centerId = this.currentCenterId;
        this.dogs.push(dog);
        this.emit();
        return dog;
    }
    /** Create & adopt a new stray in the active center; player must name it. */
    adopt(role = pickRole()) {
        const dog = this.makeDog(role, 1);
        // Signature cameo: occasionally reroll this stray as a still-available
        // signature dog (Penny, Rufus, Ferris). Their name is applied when the
        // player pays to name them — we leave .named=false so the UX is the
        // same as any other stray adoption.
        const sig = this.pickAvailableSignature();
        if (sig && Math.random() < SIGNATURE_SPAWN_CHANCE) {
            dog.breedType = sig.breed;
            dog.colorVariant = sig.colorVariant;
        }
        dog.name = "Stray";
        dog.named = false;
        dog.centerId = this.currentCenterId;
        this.dogs.push(dog);
        this.emit();
        return dog;
    }
    /** A signature dog is "available" if not currently owned and not retired,
     *  and no un-named stray is already wearing that breed + color combo. */
    pickAvailableSignature() {
        const namedTaken = new Set();
        for (const d of this.dogs)
            if (d.named)
                namedTaken.add(d.name);
        const available = SIGNATURE_DOGS.filter((s) => {
            if (namedTaken.has(s.name))
                return false;
            if (this.retiredNames.has(s.name))
                return false;
            // Block rerolling if a matching un-named stray is already awaiting naming.
            for (const d of this.dogs) {
                if (!d.named && d.breedType === s.breed && d.colorVariant === s.colorVariant) {
                    return false;
                }
            }
            return true;
        });
        if (available.length === 0)
            return null;
        return available[Math.floor(Math.random() * available.length)];
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
    /**
     * Assigns a random name to a stray, filtered against names already used
     * by current dogs AND by dogs the player has previously adopted out.
     * Falls back to a numbered variant only once every name has been used.
     */
    nameStray(id) {
        const dog = this.get(id);
        if (!dog || dog.named)
            return null;
        // If this stray matches a signature dog (breed + exact color variant)
        // and that signature name is still available, claim the signature name.
        // Otherwise fall back to the random pool.
        const claimed = this.claimSignatureNameFor(dog.breedType, dog.colorVariant);
        dog.name = claimed ?? this.pickUnusedName();
        dog.named = true;
        this.emit();
        return dog.name;
    }
    claimSignatureNameFor(breed, variant) {
        const match = SIGNATURE_DOGS.find((s) => s.breed === breed && s.colorVariant === variant);
        if (!match)
            return null;
        if (this.retiredNames.has(match.name))
            return null;
        for (const d of this.dogs)
            if (d.named && d.name === match.name)
                return null;
        return match.name;
    }
    pickUnusedName() {
        const taken = new Set(this.retiredNames);
        for (const d of this.dogs)
            if (d.named)
                taken.add(d.name);
        const available = DOG_NAMES.filter((n) => !taken.has(n));
        if (available.length > 0) {
            return available[Math.floor(Math.random() * available.length)];
        }
        // Pool exhausted — append a Roman-numeral-ish suffix to the least-used
        // prefix so the player always gets something human-readable.
        const base = DOG_NAMES[Math.floor(Math.random() * DOG_NAMES.length)];
        for (let n = 2; n < 999; n++) {
            const candidate = `${base} ${romanNumeral(n)}`;
            if (!taken.has(candidate))
                return candidate;
        }
        return `${base} the ${this.dogs.length + 1}th`;
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
        const [gone] = this.dogs.splice(idx, 1);
        // A named dog who has been sent home retires their name for good.
        if (gone && gone.named && gone.name)
            this.retiredNames.add(gone.name);
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
function romanNumeral(n) {
    const table = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
    ];
    let out = "";
    let v = n;
    for (const [val, sym] of table) {
        while (v >= val) {
            out += sym;
            v -= val;
        }
    }
    return out;
}
