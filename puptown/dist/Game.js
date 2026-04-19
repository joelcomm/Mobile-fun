// Game is the long-lived singleton that owns managers and systems.
// Scenes talk to it via Game.instance().
import { ADOPTION_FEE_BASE, ADOPTION_FEE_MULT, MAX_OFFLINE_MS, NAMING_COST_JOY, SAVE_THROTTLE_MS, TICK_MS, } from "./config.js";
import { BuildingManager } from "./managers/BuildingManager.js";
import { DogManager } from "./managers/DogManager.js";
import { ResourceManager } from "./managers/ResourceManager.js";
import { SaveManager } from "./managers/SaveManager.js";
import { EventSystem } from "./systems/EventSystem.js";
import { ProductionSystem } from "./systems/ProductionSystem.js";
import { SAVE_VERSION } from "./types.js";
export class Game {
    constructor() {
        this.save = new SaveManager();
        this.totalPlaytimeMs = 0;
        this.totalAdoptions = 0;
        this.tickAccum = 0;
        this.startTime = Date.now();
        this.pendingOffline = null;
    }
    static instance() {
        if (!this._instance)
            this._instance = new Game();
        return this._instance;
    }
    boot() {
        const loaded = this.save.load();
        if (loaded) {
            // Migrate older saves: dogs without `named` should be considered named
            // so existing players don't have their pups demoted to "Stray".
            const migratedDogs = loaded.dogs.map((d) => ({
                ...d,
                named: d.named ?? true,
            }));
            this.resources = new ResourceManager(loaded.resources);
            this.dogs = new DogManager(migratedDogs);
            this.buildings = new BuildingManager(loaded.buildings);
            this.events = new EventSystem();
            this.production = new ProductionSystem(this.dogs, this.buildings, this.resources, this.events);
            this.totalPlaytimeMs = loaded.totalPlaytimeMs ?? 0;
            this.totalAdoptions = loaded.totalAdoptions ?? 0;
            // Offline earnings, capped.
            const elapsed = Math.min(Math.max(0, Date.now() - loaded.lastSavedAt), MAX_OFFLINE_MS);
            if (elapsed > 5000) {
                this.pendingOffline = this.production.applyOffline(elapsed);
            }
        }
        else {
            this.resources = new ResourceManager({ joy: 0, treats: 0, reputation: 0 });
            this.dogs = new DogManager();
            this.buildings = new BuildingManager();
            this.events = new EventSystem();
            this.production = new ProductionSystem(this.dogs, this.buildings, this.resources, this.events);
            this.dogs.spawnStarter();
        }
        // Autosave when tab hides / unloads.
        window.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden")
                this.forceSave();
        });
        window.addEventListener("beforeunload", () => this.forceSave());
    }
    /** Main tick. Called from YardScene.update. */
    tick(deltaMs) {
        this.totalPlaytimeMs += deltaMs;
        this.tickAccum += deltaMs;
        this.events.tick(deltaMs);
        while (this.tickAccum >= TICK_MS) {
            this.production.tick(TICK_MS);
            this.tickAccum -= TICK_MS;
        }
        // Throttled save.
        this.save.save(this.snapshotSave(), SAVE_THROTTLE_MS);
    }
    /** Process a tap on a dog; returns the Joy awarded. */
    handleTap(dogId) {
        const dog = this.dogs.get(dogId);
        if (!dog)
            return 0;
        const tapMult = this.events.tapMultiplier();
        const flat = this.buildings.tapBonusFlat();
        const joy = (dog.tapBonus + flat) * tapMult;
        this.resources.add({ joy });
        // Small happiness boost from petting.
        this.dogs.updateHappiness(dogId, dog.happiness + 0.8);
        return joy;
    }
    /** Send-off fee climbs each adoption to keep the loop self-pacing. */
    nextSendOffFee() {
        return Math.ceil(ADOPTION_FEE_BASE * Math.pow(ADOPTION_FEE_MULT, this.totalAdoptions));
    }
    /**
     * Send a ready dog to a forever home. Pays the send-off fee, awards
     * Joy + Reputation, removes the dog. Returns net reward + fee paid, or
     * null if not ready / can't pay the fee.
     */
    handleGraduate(dogId) {
        const dog = this.dogs.get(dogId);
        if (!dog || !this.dogs.isReady(dog))
            return null;
        const fee = this.nextSendOffFee();
        if (!this.resources.spend({ joy: fee }))
            return null;
        const reward = this.dogs.adoptionReward(dog);
        this.resources.add({ joy: reward.joy, reputation: reward.rep });
        this.dogs.remove(dogId);
        this.totalAdoptions += 1;
        return { joy: reward.joy, rep: reward.rep, fee };
    }
    /** Pay to name a stray; returns chosen name or null on failure. */
    handleNameStray(dogId) {
        const dog = this.dogs.get(dogId);
        if (!dog || dog.named)
            return null;
        if (!this.resources.spend({ joy: NAMING_COST_JOY }))
            return null;
        return this.dogs.nameStray(dogId);
    }
    forceSave() {
        this.save.save(this.snapshotSave(), 0);
    }
    wipeAndReload() {
        this.save.wipe();
        window.location.reload();
    }
    consumeOfflineEarnings() {
        const o = this.pendingOffline;
        this.pendingOffline = null;
        return o;
    }
    snapshotSave() {
        return {
            version: SAVE_VERSION,
            lastSavedAt: Date.now(),
            resources: { ...this.resources.snapshot },
            dogs: this.dogs.toData(),
            buildings: this.buildings.toData(),
            unlockedDogSlots: this.dogs.count(),
            totalPlaytimeMs: this.totalPlaytimeMs,
            totalAdoptions: this.totalAdoptions,
        };
    }
}
Game._instance = null;
