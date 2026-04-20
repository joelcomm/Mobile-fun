// Game is the long-lived singleton that owns managers and systems.
// Scenes talk to it via Game.instance().
import { ADOPTION_FEE_BASE_FRACTION, ADOPTION_FEE_FRACTION_PER_ADOPT, ADOPTION_FEE_MAX_FRACTION, MAX_OFFLINE_MS, NAMING_COST_JOY, SAVE_THROTTLE_MS, TICK_MS, } from "./config.js";
import { BuildingManager } from "./managers/BuildingManager.js";
import { CenterManager } from "./managers/CenterManager.js";
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
        this.wiping = false;
    }
    static instance() {
        if (!this._instance)
            this._instance = new Game();
        return this._instance;
    }
    boot() {
        const loaded = this.save.load();
        if (loaded) {
            this.centers = new CenterManager(loaded.centers, loaded.currentCenterId);
            const defaultCenterId = this.centers.current().id;
            // Migrate older saves: dogs default to named + the first center.
            const migratedDogs = loaded.dogs.map((d) => ({
                ...d,
                named: d.named ?? true,
                centerId: d.centerId ?? defaultCenterId,
            }));
            this.resources = new ResourceManager(loaded.resources);
            this.dogs = new DogManager(migratedDogs);
            this.dogs.setCurrentCenter(this.centers.currentIdValue());
            this.buildings = new BuildingManager(loaded.buildings);
            this.events = new EventSystem();
            this.production = new ProductionSystem(this.dogs, this.buildings, this.resources, this.events, this.centers);
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
            this.centers = new CenterManager();
            this.dogs = new DogManager();
            this.dogs.setCurrentCenter(this.centers.currentIdValue());
            this.buildings = new BuildingManager();
            this.events = new EventSystem();
            this.production = new ProductionSystem(this.dogs, this.buildings, this.resources, this.events, this.centers);
            this.dogs.spawnStarter();
        }
        // When the player switches centers, DogManager's view changes too.
        this.centers.on((_, currentId) => this.dogs.setCurrentCenter(currentId));
        // Autosave when tab hides / unloads. Skip while wiping so the wipe sticks.
        window.addEventListener("visibilitychange", () => {
            if (this.wiping)
                return;
            if (document.visibilityState === "hidden")
                this.forceSave();
        });
        window.addEventListener("beforeunload", () => {
            if (this.wiping)
                return;
            this.forceSave();
        });
    }
    /** Main tick. Called from YardScene.update. */
    tick(deltaMs) {
        try {
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
        catch (e) {
            console.error("[PupTown] tick error:", e);
            // Drop accumulated time so we don't re-hit the same error next frame.
            this.tickAccum = 0;
        }
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
    /**
     * Send-off fee is a fraction of the dog's adoption reward so the net is
     * always positive. The fraction creeps up with experience (veterans pay
     * a larger share, capped at ADOPTION_FEE_MAX_FRACTION) so adoptions
     * still feel costlier over time without ever turning net-negative.
     */
    nextSendOffFee(dog) {
        const fraction = Math.min(ADOPTION_FEE_BASE_FRACTION + ADOPTION_FEE_FRACTION_PER_ADOPT * this.totalAdoptions, ADOPTION_FEE_MAX_FRACTION);
        if (!dog) {
            // Fallback preview when the caller doesn't have a specific dog in
            // hand — approximate against a L15 companion baseline.
            const previewReward = 50 * Math.pow(15, 2.1) * 0.72;
            return Math.ceil(previewReward * fraction);
        }
        const reward = this.dogs.adoptionReward(dog);
        return Math.ceil(reward.joy * fraction);
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
        const fee = this.nextSendOffFee(dog);
        if (!this.resources.spend({ joy: fee }))
            return null;
        const reward = this.dogs.adoptionReward(dog);
        this.resources.add({ joy: reward.joy, reputation: reward.rep });
        if (dog.centerId)
            this.centers.recordAdoption(dog.centerId);
        this.dogs.remove(dogId);
        this.totalAdoptions += 1;
        return { joy: reward.joy, rep: reward.rep, fee };
    }
    /** Try to buy the next rescue center; returns true on success. */
    handleBuyCenter() {
        const cost = this.centers.costNext();
        if (this.totalAdoptions < cost.adoptions)
            return false;
        if (!this.resources.spend({ joy: cost.joy }))
            return false;
        this.centers.buyNext();
        return true;
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
        this.wiping = true;
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
            centers: this.centers.toData(),
            currentCenterId: this.centers.currentIdValue(),
        };
    }
}
Game._instance = null;
