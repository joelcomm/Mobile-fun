// YardScene: renders the yard, spawns dogs, handles taps and floating Joy text.

import { GAME_HEIGHT, GAME_WIDTH, YARD, YARD_DECOR, kennelTierFor } from "../config.js";
import { DogSprite } from "../entities/Dog.js";
import { Game } from "../Game.js";
import { formatNumber } from "../util/format.js";

declare const Phaser: typeof import("phaser");

export class YardScene extends Phaser.Scene {
  private sprites: Map<string, DogSprite> = new Map();
  private shadows: Map<string, Phaser.GameObjects.Image> = new Map();
  private treatEmitterTimer = 0;
  private pawTimer = 0;
  private grass!: Phaser.GameObjects.TileSprite;
  private sky!: Phaser.GameObjects.Image;
  private kennelHouse?: Phaser.GameObjects.Image;
  private kennelBanner!: Phaser.GameObjects.Text;
  private kennelVisualLevel = -1;
  private centerLabel!: Phaser.GameObjects.Text;
  private centerLeftArrow!: Phaser.GameObjects.Text;
  private centerRightArrow!: Phaser.GameObjects.Text;
  private biomeDecor!: Phaser.GameObjects.Text;
  private fenceSprites: Phaser.GameObjects.Image[] = [];
  private gateSprite?: Phaser.GameObjects.Image;
  private milestoneDecor: Phaser.GameObjects.Text[] = [];
  private shownBiomeKey = "";
  private shownFenceKey = "";
  private shownGateKey = "";
  private shownHouseTier = -1;

  constructor() {
    super("Yard");
  }

  create(): void {
    const game = Game.instance();

    // Sky gradient sits behind everything else; biome tints it at draw time.
    this.sky = this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "sky_gradient");
    this.sky.setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
    this.sky.setDepth(-10);

    // Grass yard. Tint and label come from the Kennel level.
    this.grass = this.add.tileSprite(
      YARD.x + YARD.width / 2,
      YARD.y + YARD.height / 2,
      YARD.width,
      YARD.height,
      "grass"
    );
    this.grass.setDepth(-5);
    this.kennelBanner = this.add.text(GAME_WIDTH / 2, YARD.y + YARD.height - 14, "", {
      fontFamily: "Inter, sans-serif",
      fontSize: "11px",
      fontStyle: "bold",
      color: "#2a2a3e",
      backgroundColor: "#fff6d6aa",
      padding: { left: 6, right: 6, top: 2, bottom: 2 },
    });
    this.kennelBanner.setOrigin(0.5);
    this.kennelBanner.setDepth(-4);
    this.refreshKennelVisual(true);

    // Fence border (texture key picked per biome + kennel tier).
    this.rebuildFences("fence");

    // Biome decor (single corner icon — grass tint carries the rest).
    this.biomeDecor = this.add.text(YARD.x + YARD.width - 18, YARD.y + YARD.height - 22, "", {
      fontFamily: "sans-serif",
      fontSize: "18px",
    });
    this.biomeDecor.setOrigin(0.5);
    this.biomeDecor.setDepth(-3);

    // Center switcher (only visible once the player owns 2+ centers).
    this.centerLeftArrow = this.add.text(YARD.x + 8, YARD.y + 10, "\u25C0", {
      fontFamily: "sans-serif",
      fontSize: "22px",
      color: "#2a2a3e",
      backgroundColor: "#fff6d6cc",
      padding: { left: 6, right: 6, top: 2, bottom: 2 },
    });
    this.centerLeftArrow.setOrigin(0, 0);
    this.centerLeftArrow.setDepth(60);
    this.centerLeftArrow.setInteractive({ useHandCursor: true });
    this.centerLeftArrow.on("pointerdown", () => game.centers.cycle(-1));

    this.centerRightArrow = this.add.text(YARD.x + YARD.width - 8, YARD.y + 10, "\u25B6", {
      fontFamily: "sans-serif",
      fontSize: "22px",
      color: "#2a2a3e",
      backgroundColor: "#fff6d6cc",
      padding: { left: 6, right: 6, top: 2, bottom: 2 },
    });
    this.centerRightArrow.setOrigin(1, 0);
    this.centerRightArrow.setDepth(60);
    this.centerRightArrow.setInteractive({ useHandCursor: true });
    this.centerRightArrow.on("pointerdown", () => game.centers.cycle(1));

    this.centerLabel = this.add.text(GAME_WIDTH / 2, YARD.y + 14, "", {
      fontFamily: "Inter, sans-serif",
      fontSize: "14px",
      fontStyle: "bold",
      color: "#2a2a3e",
      backgroundColor: "#fff6d6cc",
      padding: { left: 10, right: 10, top: 3, bottom: 3 },
    });
    this.centerLabel.setOrigin(0.5, 0);
    this.centerLabel.setDepth(60);

    game.centers.on((_list, _id) => {
      this.refreshCenterHeader();
      this.refreshBiome();
      this.refreshKennelHouse();
    });
    this.refreshBiome();
    this.refreshKennelHouse();

    // Spawn sprites for all current-center dogs.
    for (const d of game.dogs.listCurrent()) {
      this.spawnDogSprite(d);
    }
    game.dogs.on((list) => this.syncDogs(list));

    // Tap handler emitted by DogSprite.
    this.events.on("dog:tap", (id: string, x: number, y: number) => {
      const gained = game.handleTap(id);
      this.showFloatingText(x, y - 20, `+${formatNumber(gained)}`);
    });

    // React to events: play zoomies animation.
    game.events.on((active) => {
      const zooming = active?.event.effect.kind === "zoomies";
      for (const s of this.sprites.values()) s.setZoomies(zooming);
      if (active) this.flashBanner(active.event.name + " " + active.event.icon);
    });

    // Mood events: pop a bubble over the affected dog so the player sees
    // the happiness drop happen instead of just noticing the bar slid.
    game.production.onMood((m) => {
      const sprite = this.sprites.get(m.dogId);
      if (sprite) sprite.playMoodBubble(m.icon);
    });
  }

  update(_time: number, delta: number): void {
    Game.instance().tick(delta);
    for (const s of this.sprites.values()) s.tickUpdate(delta);
    // Keep each shadow glued to its dog so the lift feels grounded.
    for (const [id, shadow] of this.shadows) {
      const sprite = this.sprites.get(id);
      if (!sprite) continue;
      shadow.x = sprite.x;
      shadow.y = sprite.y + 14;
      const sx = Math.abs(sprite.scaleX);
      shadow.setScale(sx * 0.6, sx * 0.6);
    }
    this.refreshKennelVisual();
    this.refreshPawPrints(delta);

    // Auto-taps from Auto-Walker (targets the visible center's dogs).
    const game = Game.instance();
    const auto = game.buildings.autoTapsPerSec();
    const visible = game.dogs.listCurrent();
    if (auto > 0 && visible.length > 0) {
      this.treatEmitterTimer += delta;
      const interval = 1000 / auto;
      while (this.treatEmitterTimer >= interval) {
        this.treatEmitterTimer -= interval;
        const pick = visible[Math.floor(Math.random() * visible.length)];
        const gained = game.handleTap(pick.id);
        const sprite = this.sprites.get(pick.id);
        if (sprite) {
          sprite.playTapBounce();
          this.showFloatingText(sprite.x, sprite.y - 20, `+${formatNumber(gained)}`);
        }
      }
    }

    // Treat rain particles.
    if (game.events.treatRainPerSec() > 0 && Math.random() < 0.3) {
      this.spawnTreatDrop();
    }
  }

  private syncDogs(list: readonly import("../types.js").DogData[]): void {
    const seen = new Set<string>();
    for (const d of list) {
      seen.add(d.id);
      const existing = this.sprites.get(d.id);
      if (!existing) {
        this.spawnDogSprite(d);
      } else if (existing.needsNameRefresh()) {
        existing.setDogName(d.name);
      }
    }
    // A sprite not in the current list either graduated (no longer exists in
    // any center) or moved out of view because we switched centers. Only the
    // former should play the fly-away animation.
    const allIds = new Set(Game.instance().dogs.list().map((d) => d.id));
    for (const [id, s] of this.sprites) {
      if (!seen.has(id)) {
        this.sprites.delete(id);
        const shadow = this.shadows.get(id);
        if (shadow) { shadow.destroy(); this.shadows.delete(id); }
        if (allIds.has(id)) {
          s.destroy();
        } else {
          s.playGraduateAnimation(() => s.destroy());
        }
      }
    }
  }

  /** Construct the dog sprite + matching ground shadow in one place. */
  private spawnDogSprite(d: import("../types.js").DogData): void {
    const sprite = new DogSprite(this, d);
    this.sprites.set(d.id, sprite);
    const shadow = this.add.image(sprite.x, sprite.y + 14, "shadow_oval");
    shadow.setDepth(-1);
    shadow.setOrigin(0.5);
    this.shadows.set(d.id, shadow);
  }

  /** Sprinkle paw-print particles whenever any dog is in zoomies state. */
  private refreshPawPrints(delta: number): void {
    this.pawTimer += delta;
    if (this.pawTimer < 90) return;
    this.pawTimer = 0;
    for (const [, sprite] of this.sprites) {
      if (sprite.dogData.animState !== "zoomies") continue;
      const paw = this.add.image(sprite.x, sprite.y + 14, "paw_print");
      paw.setDepth(-2);
      paw.setAlpha(0.8);
      this.tweens.add({
        targets: paw,
        alpha: 0,
        duration: 700,
        ease: "Cubic.easeOut",
        onComplete: () => paw.destroy(),
      });
    }
  }

  /** Used by DogPanel to fetch a sprite for animation/positioning. */
  getSprite(id: string): DogSprite | undefined {
    return this.sprites.get(id);
  }

  /** Refresh the rescue-center header (arrows + label). */
  private refreshCenterHeader(): void {
    const game = Game.instance();
    const count = game.centers.count();
    const current = game.centers.current();
    this.centerLabel.setText(`\u{1F3E1} ${current.name}`);
    const many = count > 1;
    this.centerLeftArrow.setVisible(many);
    this.centerRightArrow.setVisible(many);
  }

  /** Recolor the grass + label when the kennel tier changes, and bubble
   *  any fence-tier or milestone-decor changes in at the same moment. */
  private refreshKennelVisual(force = false): void {
    const level = Game.instance().buildings.levelOf("kennel");
    if (!force && level === this.kennelVisualLevel) return;
    this.kennelVisualLevel = level;
    const tier = kennelTierFor(level);
    // Biome provides a base tint; kennel tier multiplies it so fancier
    // yards look richer without overriding the biome identity.
    const biome = Game.instance().centers.biomeFor(Game.instance().centers.currentIdValue());
    this.grass.setTint(blendColors(biome.grassTint, tier.grassTint));
    this.kennelBanner.setText(`\u{1F3E0} ${tier.label}  Lv${level}`);
    // Late-game fence upgrade: at kennel tier ≥20 always show wrought iron
    // (≥50 gold) regardless of biome — the biome still chooses the low-tier
    // skin so early yards feel individual.
    const fenceKey = level >= 50 ? "fence_gold" : level >= 20 ? "fence_iron" : biome.fenceKey;
    if (fenceKey !== this.shownFenceKey) this.rebuildFences(fenceKey);
    const gateKey = level >= 50 ? "gate_gold" : level >= 20 ? "gate_iron" : "gate_wood";
    if (gateKey !== this.shownGateKey) this.rebuildGate(gateKey);
    this.refreshMilestoneDecor(level);
  }

  /** Redraw all four fence edges (top/bottom/left/right) using the given
   *  texture key, then place a gate in the bottom-center gap. */
  private rebuildFences(key: string): void {
    for (const f of this.fenceSprites) f.destroy();
    this.fenceSprites = [];
    const gateHalfTiles = 1; // leave a 2-tile gap in the bottom for the gate
    const hCount = Math.ceil(YARD.width / 16);
    const midIdx = Math.floor(hCount / 2);
    // Top and bottom rows.
    for (let i = 0; i < hCount; i++) {
      const x = YARD.x + i * 16 + 8;
      const top = this.add.image(x, YARD.y - 6, key);
      top.setDepth(-4);
      this.fenceSprites.push(top);
      // Skip the middle tiles on the bottom row — gate fills that space.
      if (i >= midIdx - gateHalfTiles && i <= midIdx + gateHalfTiles - 1) continue;
      const bot = this.add.image(x, YARD.y + YARD.height + 10, key);
      bot.setFlipY(true);
      bot.setDepth(-4);
      this.fenceSprites.push(bot);
    }
    // Left and right columns. The fence texture is 16 wide × 32 tall so we
    // step every 16px vertically to produce a continuous-looking side wall.
    const vCount = Math.ceil(YARD.height / 16);
    for (let i = 0; i < vCount; i++) {
      const y = YARD.y + i * 16 + 8;
      const left = this.add.image(YARD.x - 6, y, key).setAngle(-90);
      left.setDepth(-4);
      const right = this.add.image(YARD.x + YARD.width + 6, y, key).setAngle(90);
      right.setDepth(-4);
      this.fenceSprites.push(left, right);
    }
    this.shownFenceKey = key;
  }

  /** Place / swap the gate sprite in the bottom-center of the fence. */
  private rebuildGate(gateKey: string): void {
    if (this.gateSprite) this.gateSprite.destroy();
    this.gateSprite = this.add.image(
      YARD.x + YARD.width / 2,
      YARD.y + YARD.height + 8,
      gateKey
    );
    this.gateSprite.setDepth(-3);
    this.shownGateKey = gateKey;
  }

  /** Reveal/hide milestone decor items based on the current kennel level. */
  private refreshMilestoneDecor(level: number): void {
    for (const d of this.milestoneDecor) d.destroy();
    this.milestoneDecor = [];
    for (const spec of YARD_DECOR) {
      if (level < spec.minLevel) continue;
      const x = YARD.x + YARD.width * spec.x;
      const y = YARD.y + YARD.height * spec.y;
      const t = this.add.text(x, y, spec.emoji, {
        fontFamily: "sans-serif",
        fontSize: `${spec.size}px`,
      });
      t.setOrigin(0.5);
      t.setDepth(-3);
      this.milestoneDecor.push(t);
    }
  }

  /** Sync the biome-owned visuals (grass accent + corner decor + sky). */
  private refreshBiome(): void {
    const game = Game.instance();
    const biome = game.centers.biomeFor(game.centers.currentIdValue());
    if (biome.id === this.shownBiomeKey) return;
    this.shownBiomeKey = biome.id;
    this.biomeDecor.setText(biome.decor);
    this.sky.setTint(biome.skyTop);
    // Force a kennel-visual redraw so the fence + grass tint pick up the
    // new biome immediately (without this the cache short-circuits).
    this.kennelVisualLevel = -1;
    this.refreshKennelVisual(true);
  }

  /** Place / swap the kennel house sprite when center tier changes. */
  private refreshKennelHouse(): void {
    const game = Game.instance();
    const tier = Math.max(1, Math.min(5, game.centers.tierOf(game.centers.currentIdValue())));
    if (tier === this.shownHouseTier && this.kennelHouse) return;
    if (this.kennelHouse) this.kennelHouse.destroy();
    this.kennelHouse = this.add.image(
      YARD.x + 36, YARD.y + 30,
      `kennel_house_${tier}`
    );
    this.kennelHouse.setOrigin(0.5);
    this.kennelHouse.setDepth(-2);
    this.shownHouseTier = tier;
  }

  /** Floating reward text where a graduating pup stood. */
  showRewardBurst(x: number, y: number, reward: { joy: number; rep: number }): void {
    this.showFloatingText(x, y - 10, `+${formatNumber(reward.joy)} JOY`);
    this.showFloatingText(x, y - 32, `+${reward.rep}\u2B50`);
  }

  private showFloatingText(x: number, y: number, text: string): void {
    const t = this.add.text(x, y, text, {
      fontFamily: "monospace",
      fontSize: "18px",
      fontStyle: "bold",
      color: "#ffd86b",
      stroke: "#2a2a3e",
      strokeThickness: 4,
    });
    t.setOrigin(0.5);
    this.tweens.add({
      targets: t,
      y: y - 34,
      alpha: 0,
      duration: 700,
      ease: "Cubic.easeOut",
      onComplete: () => t.destroy(),
    });
  }

  private spawnTreatDrop(): void {
    const x = YARD.x + Math.random() * YARD.width;
    const treat = this.add.text(x, YARD.y - 10, "\u{1F36A}", {
      fontSize: "20px",
    });
    treat.setOrigin(0.5);
    this.tweens.add({
      targets: treat,
      y: YARD.y + YARD.height - 10,
      duration: 1800,
      ease: "Cubic.easeIn",
      onComplete: () => treat.destroy(),
    });
  }

  private flashBanner(text: string): void {
    const banner = this.add.text(GAME_WIDTH / 2, YARD.y + 16, text, {
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "bold",
      color: "#fff6d6",
      backgroundColor: "#ff9ac1",
      padding: { left: 12, right: 12, top: 6, bottom: 6 },
    });
    banner.setOrigin(0.5);
    banner.setDepth(100);
    this.tweens.add({
      targets: banner,
      alpha: { from: 1, to: 0 },
      y: YARD.y + 4,
      duration: 2400,
      ease: "Quad.easeOut",
      onComplete: () => banner.destroy(),
    });
  }
}

/** Weighted blend of two 0xRRGGBB colors. Biome gets 70% weight so its
 *  identity reads through even when a kennel tier tint is layered on top;
 *  a simple channel average was washing every biome toward gray. */
function blendColors(a: number, b: number, aWeight = 0.7): number {
  const bw = 1 - aWeight;
  const ar = (a >> 16) & 0xff, ag = (a >> 8) & 0xff, ab = a & 0xff;
  const br = (b >> 16) & 0xff, bg = (b >> 8) & 0xff, bb = b & 0xff;
  const r = Math.round(ar * aWeight + br * bw);
  const g = Math.round(ag * aWeight + bg * bw);
  const bl = Math.round(ab * aWeight + bb * bw);
  return (r << 16) | (g << 8) | bl;
}

