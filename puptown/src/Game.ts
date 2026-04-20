// Game is the long-lived singleton that owns managers and systems.
// Scenes talk to it via Game.instance().

import {
  ADOPTION_FEE_BASE_FRACTION,
  ADOPTION_FEE_FRACTION_PER_ADOPT,
  ADOPTION_FEE_MAX_FRACTION,
  ADOPTION_LEVEL_REQ,
  LV_UP_BASE,
  LV_UP_MULT,
  MAX_OFFLINE_MS,
  NAMING_COST_JOY,
  SAVE_THROTTLE_MS,
  TICK_MS,
} from "./config.js";
import { BuildingManager } from "./managers/BuildingManager.js";
import { CenterManager } from "./managers/CenterManager.js";
import { DogManager } from "./managers/DogManager.js";
import { ResourceManager } from "./managers/ResourceManager.js";
import { SaveManager } from "./managers/SaveManager.js";
import { EventSystem } from "./systems/EventSystem.js";
import { ProductionSystem } from "./systems/ProductionSystem.js";
import { DogData, SAVE_VERSION, SaveState } from "./types.js";

export class Game {
  private static _instance: Game | null = null;

  public readonly save = new SaveManager();
  public resources!: ResourceManager;
  public dogs!: DogManager;
  public buildings!: BuildingManager;
  public events!: EventSystem;
  public production!: ProductionSystem;
  public centers!: CenterManager;

  public totalPlaytimeMs = 0;
  public totalAdoptions = 0;
  private tickAccum = 0;
  private startTime = Date.now();
  private pendingOffline: { joy: number; treats: number } | null = null;
  private wiping = false;

  // PLAYTEST: speed + auto-play. Remove before shipping the final game.
  public speedMultiplier = 1;
  public autoPlay = false;
  private autoplayAccumMs = 0;
  private static readonly SPEED_OPTIONS = [1, 2, 4, 16, 64];

  static instance(): Game {
    if (!this._instance) this._instance = new Game();
    return this._instance;
  }

  boot(): void {
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
      this.dogs = new DogManager(migratedDogs, loaded.retiredNames);
      this.dogs.setCurrentCenter(this.centers.currentIdValue());
      this.buildings = new BuildingManager(loaded.buildings);
      this.events = new EventSystem();
      this.production = new ProductionSystem(this.dogs, this.buildings, this.resources, this.events, this.centers);
      this.totalPlaytimeMs = loaded.totalPlaytimeMs ?? 0;
      this.totalAdoptions = loaded.totalAdoptions ?? 0;
      // Offline earnings, capped.
      const elapsed = Math.min(
        Math.max(0, Date.now() - loaded.lastSavedAt),
        MAX_OFFLINE_MS
      );
      if (elapsed > 5_000) {
        this.pendingOffline = this.production.applyOffline(elapsed);
      }
    } else {
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
      if (this.wiping) return;
      if (document.visibilityState === "hidden") this.forceSave();
    });
    window.addEventListener("beforeunload", () => {
      if (this.wiping) return;
      this.forceSave();
    });
  }

  /** Main tick. Called from YardScene.update. */
  tick(deltaMs: number): void {
    try {
      const scaled = deltaMs * this.speedMultiplier;
      this.totalPlaytimeMs += scaled;
      this.tickAccum += scaled;
      this.events.tick(scaled);
      while (this.tickAccum >= TICK_MS) {
        this.production.tick(TICK_MS);
        this.tickAccum -= TICK_MS;
      }
      if (this.autoPlay) this.runAutoPlay(scaled);
      // Throttled save.
      this.save.save(this.snapshotSave(), SAVE_THROTTLE_MS);
    } catch (e) {
      console.error("[PupTown] tick error:", e);
      // Drop accumulated time so we don't re-hit the same error next frame.
      this.tickAccum = 0;
    }
  }

  /** PLAYTEST: cycle through 1x → 2x → 4x → 16x → 64x → 1x. */
  cycleSpeed(): number {
    const opts = Game.SPEED_OPTIONS;
    const idx = opts.indexOf(this.speedMultiplier);
    this.speedMultiplier = opts[(idx + 1) % opts.length];
    return this.speedMultiplier;
  }

  /** PLAYTEST: toggle greedy-AI autoplay. Returns the new state. */
  toggleAutoPlay(): boolean {
    this.autoPlay = !this.autoPlay;
    return this.autoPlay;
  }

  /** PLAYTEST: one autoplay decision pass, throttled to ~4 Hz of scaled time. */
  private runAutoPlay(scaledDeltaMs: number): void {
    this.autoplayAccumMs += scaledDeltaMs;
    if (this.autoplayAccumMs < 250) return;
    this.autoplayAccumMs = 0;

    // Passive tap on a random visible dog so level-ups happen even without
    // the Auto-Walker building.
    const visible = this.dogs.listCurrent();
    if (visible.length > 0) {
      const pick = visible[Math.floor(Math.random() * visible.length)];
      this.handleTap(pick.id);
    }

    // 1. Send home any ready dog (always net-positive under the new fee).
    for (const d of this.dogs.list()) {
      if (this.dogs.isReady(d)) {
        const fee = this.nextSendOffFee(d);
        if (this.resources.snapshot.joy >= fee) {
          this.handleGraduate(d.id);
          return;
        }
      }
    }

    // 2. Name any stray the player has adopted in.
    const stray = this.dogs.list().find((d) => !d.named);
    if (stray && this.resources.snapshot.joy >= NAMING_COST_JOY) {
      this.handleNameStray(stray.id);
      return;
    }

    // 3. Level up the lowest-level named dog toward the adoption threshold.
    const named = this.dogs
      .list()
      .filter((d) => d.named && d.level < ADOPTION_LEVEL_REQ)
      .sort((a, b) => a.level - b.level);
    if (named.length > 0) {
      const d = named[0];
      const cost = Math.ceil(LV_UP_BASE * Math.pow(LV_UP_MULT, d.level));
      if (this.resources.snapshot.joy >= cost && this.resources.spend({ joy: cost })) {
        this.dogs.levelUp(d.id);
        return;
      }
    }

    // 4. Rescue a new stray if there's room.
    const rescueCost = this.dogs.nextUnlockCost();
    const rescueRep = this.dogs.nextUnlockRep();
    if (
      rescueCost > 0 &&
      this.resources.snapshot.joy >= rescueCost &&
      this.resources.snapshot.reputation >= rescueRep
    ) {
      if (this.resources.spend({ joy: rescueCost })) {
        this.dogs.adopt();
        return;
      }
    }

    // 5. Buy the cheapest affordable building upgrade once we have a 4x
    // surplus, so progression keeps moving without draining the budget.
    let best: { id: string; joy: number; treats: number } | null = null;
    for (const b of this.buildings.list()) {
      const c = this.buildings.costFor(b.typeId);
      if (!c) continue;
      if (c.treats > this.resources.snapshot.treats) continue;
      if (c.reputation > this.resources.snapshot.reputation) continue;
      if (!best || c.joy < best.joy) best = { id: b.typeId, joy: c.joy, treats: c.treats };
    }
    if (best && this.resources.snapshot.joy >= best.joy * 4) {
      if (this.resources.spend({ joy: best.joy, treats: best.treats })) {
        this.buildings.upgrade(best.id);
      }
    }
  }

  /** Process a tap on a dog; returns the Joy awarded. */
  handleTap(dogId: string): number {
    const dog = this.dogs.get(dogId);
    if (!dog) return 0;
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
  nextSendOffFee(dog?: DogData): number {
    const fraction = Math.min(
      ADOPTION_FEE_BASE_FRACTION + ADOPTION_FEE_FRACTION_PER_ADOPT * this.totalAdoptions,
      ADOPTION_FEE_MAX_FRACTION
    );
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
  handleGraduate(dogId: string): { joy: number; rep: number; fee: number } | null {
    const dog = this.dogs.get(dogId);
    if (!dog || !this.dogs.isReady(dog)) return null;
    const fee = this.nextSendOffFee(dog);
    if (!this.resources.spend({ joy: fee })) return null;
    const reward = this.dogs.adoptionReward(dog);
    this.resources.add({ joy: reward.joy, reputation: reward.rep });
    if (dog.centerId) this.centers.recordAdoption(dog.centerId);
    this.dogs.remove(dogId);
    this.totalAdoptions += 1;
    return { joy: reward.joy, rep: reward.rep, fee };
  }

  /** Try to buy the next rescue center; returns true on success. */
  handleBuyCenter(): boolean {
    const cost = this.centers.costNext();
    if (this.totalAdoptions < cost.adoptions) return false;
    if (!this.resources.spend({ joy: cost.joy })) return false;
    this.centers.buyNext();
    return true;
  }

  /** Pay to name a stray; returns chosen name or null on failure. */
  handleNameStray(dogId: string): string | null {
    const dog = this.dogs.get(dogId);
    if (!dog || dog.named) return null;
    if (!this.resources.spend({ joy: NAMING_COST_JOY })) return null;
    return this.dogs.nameStray(dogId);
  }

  forceSave(): void {
    this.save.save(this.snapshotSave(), 0);
  }

  wipeAndReload(): void {
    this.wiping = true;
    this.save.wipe();
    window.location.reload();
  }

  consumeOfflineEarnings(): { joy: number; treats: number } | null {
    const o = this.pendingOffline;
    this.pendingOffline = null;
    return o;
  }

  private snapshotSave(): SaveState {
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
      retiredNames: this.dogs.retiredNamesList(),
    };
  }
}
