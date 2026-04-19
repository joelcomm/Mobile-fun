// YardScene: renders the yard, spawns dogs, handles taps and floating Joy text.
import { GAME_WIDTH, YARD } from "../config.js";
import { DogSprite } from "../entities/Dog.js";
import { Game } from "../Game.js";
export class YardScene extends Phaser.Scene {
    constructor() {
        super("Yard");
        this.sprites = new Map();
        this.clouds = [];
        this.treatEmitterTimer = 0;
    }
    create() {
        const game = Game.instance();
        // Background sky.
        this.add.rectangle(GAME_WIDTH / 2, 55, GAME_WIDTH, 110, 0xbfe6ff).setDepth(-10);
        // Clouds (parallax).
        for (let i = 0; i < 3; i++) {
            const c = this.add.image(Math.random() * GAME_WIDTH, 20 + Math.random() * 60, "cloud");
            c.setDepth(-9);
            c.setAlpha(0.9);
            this.clouds.push(c);
        }
        // Grass yard.
        const grass = this.add.tileSprite(YARD.x + YARD.width / 2, YARD.y + YARD.height / 2, YARD.width, YARD.height, "grass");
        grass.setDepth(-5);
        // Fence border.
        const fenceCount = Math.ceil(YARD.width / 16);
        for (let i = 0; i < fenceCount; i++) {
            const top = this.add.image(YARD.x + i * 16 + 8, YARD.y - 6, "fence");
            top.setDepth(-4);
            const bot = this.add.image(YARD.x + i * 16 + 8, YARD.y + YARD.height + 10, "fence");
            bot.setFlipY(true);
            bot.setDepth(-4);
        }
        // Spawn sprites for all current dogs.
        for (const d of game.dogs.list()) {
            this.sprites.set(d.id, new DogSprite(this, d));
        }
        game.dogs.on((list) => this.syncDogs(list));
        // Tap handler emitted by DogSprite.
        this.events.on("dog:tap", (id, x, y) => {
            const gained = game.handleTap(id);
            this.showFloatingText(x, y - 20, `+${formatNumber(gained)}`);
        });
        // React to events: play zoomies animation.
        game.events.on((active) => {
            const zooming = active?.event.effect.kind === "zoomies";
            for (const s of this.sprites.values())
                s.setZoomies(zooming);
            if (active)
                this.flashBanner(active.event.name + " " + active.event.icon);
        });
    }
    update(_time, delta) {
        Game.instance().tick(delta);
        for (const s of this.sprites.values())
            s.tickUpdate(delta);
        // Drift clouds.
        for (const c of this.clouds) {
            c.x += (delta / 1000) * 8;
            if (c.x > GAME_WIDTH + 30) {
                c.x = -30;
                c.y = 20 + Math.random() * 60;
            }
        }
        // Auto-taps from Auto-Walker.
        const game = Game.instance();
        const auto = game.buildings.autoTapsPerSec();
        if (auto > 0 && game.dogs.count() > 0) {
            this.treatEmitterTimer += delta;
            const interval = 1000 / auto;
            while (this.treatEmitterTimer >= interval) {
                this.treatEmitterTimer -= interval;
                const dogs = game.dogs.list();
                const pick = dogs[Math.floor(Math.random() * dogs.length)];
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
    syncDogs(list) {
        const seen = new Set();
        for (const d of list) {
            seen.add(d.id);
            if (!this.sprites.has(d.id)) {
                this.sprites.set(d.id, new DogSprite(this, d));
            }
        }
        for (const [id, s] of this.sprites) {
            if (!seen.has(id)) {
                s.destroy();
                this.sprites.delete(id);
            }
        }
    }
    showFloatingText(x, y, text) {
        const t = this.add.text(x, y, text, {
            fontFamily: "monospace",
            fontSize: "14px",
            fontStyle: "bold",
            color: "#ffd86b",
            stroke: "#2a2a3e",
            strokeThickness: 3,
        });
        t.setOrigin(0.5);
        this.tweens.add({
            targets: t,
            y: y - 30,
            alpha: 0,
            duration: 700,
            ease: "Cubic.easeOut",
            onComplete: () => t.destroy(),
        });
    }
    spawnTreatDrop() {
        const x = YARD.x + Math.random() * YARD.width;
        const treat = this.add.text(x, YARD.y - 10, "\u{1F36A}", {
            fontSize: "16px",
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
    flashBanner(text) {
        const banner = this.add.text(GAME_WIDTH / 2, 92, text, {
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontStyle: "bold",
            color: "#fff6d6",
            backgroundColor: "#ff9ac1",
            padding: { left: 10, right: 10, top: 4, bottom: 4 },
        });
        banner.setOrigin(0.5);
        banner.setDepth(100);
        this.tweens.add({
            targets: banner,
            alpha: { from: 1, to: 0 },
            y: 72,
            duration: 2400,
            ease: "Quad.easeOut",
            onComplete: () => banner.destroy(),
        });
    }
}
function formatNumber(n) {
    if (n < 10)
        return n.toFixed(1);
    if (n < 1000)
        return Math.floor(n).toString();
    if (n < 1000000)
        return (n / 1000).toFixed(1) + "k";
    return (n / 1000000).toFixed(2) + "m";
}
