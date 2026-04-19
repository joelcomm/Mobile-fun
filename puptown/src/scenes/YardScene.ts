// YardScene: renders the yard, spawns dogs, handles taps and floating Joy text.

import { GAME_WIDTH, YARD, kennelTierFor } from "../config.js";
import { DogSprite } from "../entities/Dog.js";
import { Game } from "../Game.js";
import { formatNumber } from "../util/format.js";

declare const Phaser: typeof import("phaser");

export class YardScene extends Phaser.Scene {
  private sprites: Map<string, DogSprite> = new Map();
  private treatEmitterTimer = 0;
  private grass!: Phaser.GameObjects.TileSprite;
  private kennelBanner!: Phaser.GameObjects.Text;
  private kennelVisualLevel = -1;
  private centerLabel!: Phaser.GameObjects.Text;
  private centerLeftArrow!: Phaser.GameObjects.Text;
  private centerRightArrow!: Phaser.GameObjects.Text;

  constructor() {
    super("Yard");
  }

  create(): void {
    const game = Game.instance();

    // Canvas background is already sky-blue from the Phaser config; the
    // yard layout is compressed on phones so we skip the cloud strip.

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

    // Fence border.
    const fenceCount = Math.ceil(YARD.width / 16);
    for (let i = 0; i < fenceCount; i++) {
      const top = this.add.image(YARD.x + i * 16 + 8, YARD.y - 6, "fence");
      top.setDepth(-4);
      const bot = this.add.image(YARD.x + i * 16 + 8, YARD.y + YARD.height + 10, "fence");
      bot.setFlipY(true);
      bot.setDepth(-4);
    }

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

    game.centers.on((_list, _id) => this.refreshCenterHeader());

    // Spawn sprites for all current-center dogs.
    for (const d of game.dogs.listCurrent()) {
      this.sprites.set(d.id, new DogSprite(this, d));
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
  }

  update(_time: number, delta: number): void {
    Game.instance().tick(delta);
    for (const s of this.sprites.values()) s.tickUpdate(delta);
    this.refreshKennelVisual();

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
        this.sprites.set(d.id, new DogSprite(this, d));
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
        if (allIds.has(id)) {
          s.destroy();
        } else {
          s.playGraduateAnimation(() => s.destroy());
        }
      }
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

  /** Recolor the grass + label when the kennel tier changes. */
  private refreshKennelVisual(force = false): void {
    const level = Game.instance().buildings.levelOf("kennel");
    if (!force && level === this.kennelVisualLevel) return;
    this.kennelVisualLevel = level;
    const tier = kennelTierFor(level);
    this.grass.setTint(tier.grassTint);
    this.kennelBanner.setText(`\u{1F3E0} ${tier.label}  Lv${level}`);
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

