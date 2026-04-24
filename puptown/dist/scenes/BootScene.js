// BootScene prepares generated textures, then hands off to the Yard + UI.
export class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }
    create() {
        this.makeGrassTexture();
        this.makeFenceTexture();
        this.makeFenceLogTexture();
        this.makeFenceRopeTexture();
        this.makeFenceIronTexture();
        this.makeFenceGoldTexture();
        this.makeGateWoodTexture();
        this.makeGateIronTexture();
        this.makeGateGoldTexture();
        this.makeCloudTexture();
        this.makeShadowTexture();
        this.makePawTexture();
        this.makeSkyGradient();
        for (let t = 1; t <= 5; t++)
            this.makeKennelHouseTexture(t);
        this.scene.start("Yard");
        this.scene.launch("UI");
    }
    /** Soft drop-shadow oval rendered under each dog so they feel grounded. */
    makeShadowTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0.05);
        g.fillEllipse(16, 6, 32, 12);
        g.fillStyle(0x000000, 0.08);
        g.fillEllipse(16, 6, 24, 9);
        g.fillStyle(0x000000, 0.14);
        g.fillEllipse(16, 6, 16, 6);
        g.generateTexture("shadow_oval", 32, 12);
        g.destroy();
    }
    /** A tiny pixel paw print left as a particle on zoomies. */
    makePawTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 8, 8);
        g.fillStyle(0x4a3a2a, 0.55);
        g.fillEllipse(4, 5, 5, 4);
        g.fillCircle(2, 2, 1);
        g.fillCircle(4, 1, 1);
        g.fillCircle(6, 2, 1);
        g.fillCircle(7, 4, 1);
        g.generateTexture("paw_print", 8, 8);
        g.destroy();
    }
    /** Two-stop sky gradient. We tint per biome at draw time. */
    makeSkyGradient() {
        const w = 32;
        const h = 256;
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        for (let y = 0; y < h; y++) {
            const t = y / (h - 1);
            const v = Math.round(255 - t * t * 80);
            const color = (v << 16) | (v << 8) | 0xff;
            g.fillStyle(color, 1);
            g.fillRect(0, y, w, 1);
        }
        g.generateTexture("sky_gradient", w, h);
        g.destroy();
    }
    /** Small kennel-house sprite that grows fancier with center tier. */
    makeKennelHouseTexture(tier) {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        const W = 48;
        const H = 44;
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, W, H);
        const palettes = [
            { wall: 0xc59a6b, trim: 0x8a6a45, roof: 0x8b3a2e, roofHi: 0xc55a3a, door: 0x4a2a1a, flag: 0xff5a7e, accent: 0xfff6d6 },
            { wall: 0xeacf9b, trim: 0x9a7a56, roof: 0x6a4a8a, roofHi: 0x9a7ac6, door: 0x4a2a1a, flag: 0xffd86b, accent: 0xfff6d6 },
            { wall: 0xe8e0cf, trim: 0x6a4aa2, roof: 0x2a4a8e, roofHi: 0x4a7bd6, door: 0x2a2a3e, flag: 0x7fc56b, accent: 0xfff6d6 },
            { wall: 0xfff0b8, trim: 0xc89818, roof: 0x6e3a8a, roofHi: 0xa86ad8, door: 0x2a2a3e, flag: 0xff5a7e, accent: 0xfff6d6 },
            { wall: 0xfff6d6, trim: 0xcf9a1a, roof: 0xcf9a1a, roofHi: 0xffd86b, door: 0x2a2a3e, flag: 0xff5a7e, accent: 0xffd86b },
        ];
        const p = palettes[Math.max(0, Math.min(4, tier - 1))];
        g.fillStyle(p.wall, 1);
        g.fillRect(6, 18, W - 12, H - 18);
        g.fillStyle(p.trim, 1);
        g.fillRect(6, H - 6, W - 12, 3);
        g.fillStyle(p.door, 1);
        g.fillRect(W / 2 - 5, H - 16, 10, 12);
        g.fillStyle(p.accent, 0.3);
        g.fillEllipse(W / 2, H - 14, 8, 5);
        if (tier >= 2) {
            g.fillStyle(0xbfe6ff, 1);
            g.fillRect(10, 24, 6, 6);
            g.fillRect(W - 16, 24, 6, 6);
            g.fillStyle(p.trim, 1);
            g.fillRect(10, 27, 6, 1);
            g.fillRect(13, 24, 1, 6);
            g.fillRect(W - 16, 27, 6, 1);
            g.fillRect(W - 13, 24, 1, 6);
        }
        g.fillStyle(p.roof, 1);
        g.fillTriangle(2, 20, W - 2, 20, W / 2, 4);
        g.fillStyle(p.roofHi, 1);
        g.fillTriangle(W / 2 - 10, 12, W / 2 + 10, 12, W / 2, 4);
        g.fillStyle(p.trim, 1);
        g.fillRect(2, 18, W - 4, 2);
        if (tier >= 2) {
            g.fillStyle(0x6e522f, 1);
            g.fillRect(W / 2 - 1, 4 - tier, 2, tier + 4);
            g.fillStyle(p.flag, 1);
            g.fillTriangle(W / 2 + 1, 4 - tier, W / 2 + 1, 4 - tier + 4, W / 2 + 7, 4 - tier + 2);
        }
        if (tier >= 5) {
            g.fillStyle(p.trim, 1);
            g.fillRect(6, 18, 4, 3);
            g.fillRect(W - 10, 18, 4, 3);
            g.fillRect(6, 16, 2, 2);
            g.fillRect(10, 16, 2, 2);
            g.fillRect(W - 10, 16, 2, 2);
            g.fillRect(W - 14, 16, 2, 2);
        }
        g.fillStyle(0xff5a7e, 1);
        g.fillCircle(W / 2 - 1.5, H - 19, 1.5);
        g.fillCircle(W / 2 + 1.5, H - 19, 1.5);
        g.fillTriangle(W / 2 - 3, H - 19, W / 2 + 3, H - 19, W / 2, H - 15);
        g.generateTexture(`kennel_house_${tier}`, W, H);
        g.destroy();
    }
    makeGateWoodTexture() {
        // Double-width arched gate for the bottom-center of the yard fence.
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 32, 36);
        // Posts
        g.fillStyle(0x8a6a45, 1);
        g.fillRect(1, 6, 4, 28);
        g.fillRect(27, 6, 4, 28);
        // Arched top beam
        g.fillRect(4, 4, 24, 4);
        g.fillTriangle(12, 0, 20, 0, 16, 4);
        // Cross-planks
        g.fillStyle(0xf3dcb4, 1);
        g.fillRect(6, 12, 20, 3);
        g.fillRect(6, 20, 20, 3);
        g.fillRect(6, 28, 20, 3);
        // Latch dot
        g.fillStyle(0xcf9a1a, 1);
        g.fillCircle(16, 24, 1.5);
        g.generateTexture("gate_wood", 32, 36);
        g.destroy();
    }
    makeGateIronTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 32, 36);
        g.fillStyle(0x2a2a3e, 1);
        // Arched frame
        g.fillRect(2, 6, 3, 28);
        g.fillRect(27, 6, 3, 28);
        g.fillRect(4, 4, 24, 3);
        g.fillTriangle(12, 0, 20, 0, 16, 4);
        // Slim pickets
        for (let i = 0; i < 5; i++) {
            g.fillRect(7 + i * 4, 8, 1.5, 22);
        }
        // Cross-rails
        g.fillRect(4, 14, 24, 2);
        g.fillRect(4, 26, 24, 2);
        // Latch highlight
        g.fillStyle(0xb0b0c8, 1);
        g.fillCircle(16, 20, 1.5);
        g.generateTexture("gate_iron", 32, 36);
        g.destroy();
    }
    makeGateGoldTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 32, 36);
        g.fillStyle(0xcf9a1a, 1);
        g.fillRect(2, 6, 3, 28);
        g.fillRect(27, 6, 3, 28);
        g.fillRect(4, 4, 24, 3);
        g.fillStyle(0xffd86b, 1);
        g.fillTriangle(12, 0, 20, 0, 16, 4);
        for (let i = 0; i < 5; i++) {
            g.fillStyle(0xcf9a1a, 1);
            g.fillRect(7 + i * 4, 8, 2, 22);
        }
        g.fillStyle(0xffd86b, 1);
        g.fillRect(4, 14, 24, 2);
        g.fillRect(4, 26, 24, 2);
        // Jewel on latch
        g.fillStyle(0xff5a7e, 1);
        g.fillCircle(16, 20, 2);
        g.generateTexture("gate_gold", 32, 36);
        g.destroy();
    }
    makeGrassTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        // Base
        g.fillStyle(0x7fc56b, 1);
        g.fillRect(0, 0, 64, 64);
        // Darker patches
        g.fillStyle(0x6ab75b, 1);
        g.fillRect(8, 12, 6, 2);
        g.fillRect(40, 20, 8, 2);
        g.fillRect(20, 44, 6, 2);
        g.fillRect(50, 52, 6, 2);
        g.fillRect(4, 54, 4, 2);
        // Tiny flowers
        g.fillStyle(0xffd86b, 1);
        g.fillRect(16, 4, 2, 2);
        g.fillRect(48, 40, 2, 2);
        g.fillStyle(0xff9ac1, 1);
        g.fillRect(36, 32, 2, 2);
        g.fillRect(6, 36, 2, 2);
        g.generateTexture("grass", 64, 64);
        g.destroy();
    }
    makeFenceTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0xffffff, 0);
        g.fillRect(0, 0, 16, 32);
        // Picket
        g.fillStyle(0xffffff, 1);
        g.fillRect(4, 4, 8, 22);
        g.fillTriangle(4, 4, 12, 4, 8, 0);
        // Rail
        g.fillStyle(0xf0f0f0, 1);
        g.fillRect(0, 10, 16, 3);
        g.fillRect(0, 20, 16, 3);
        g.generateTexture("fence", 16, 32);
        g.destroy();
    }
    makeFenceLogTexture() {
        // Rough split-rail log fence for forest-y biomes.
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 16, 32);
        g.fillStyle(0x8a6a45, 1);
        g.fillRoundedRect(2, 6, 12, 20, 2);
        g.fillStyle(0x6e522f, 1);
        g.fillRect(2, 10, 12, 2);
        g.fillRect(2, 20, 12, 2);
        g.fillStyle(0xa8865d, 1);
        g.fillRect(4, 14, 8, 2);
        g.generateTexture("fence_log", 16, 32);
        g.destroy();
    }
    makeFenceRopeTexture() {
        // Rope+post — seaside vibe.
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 16, 32);
        g.fillStyle(0x6b4a28, 1);
        g.fillRect(6, 4, 4, 22);
        g.fillStyle(0xe4c68a, 1);
        g.fillRect(0, 14, 16, 3);
        g.fillStyle(0xc8a164, 1);
        g.fillRect(0, 20, 16, 3);
        g.generateTexture("fence_rope", 16, 32);
        g.destroy();
    }
    makeFenceIronTexture() {
        // Slim wrought-iron pickets for fancier late-tier yards.
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 16, 32);
        g.fillStyle(0x2a2a3e, 1);
        g.fillRect(7, 2, 2, 24);
        g.fillCircle(8, 2, 2);
        g.fillRect(0, 10, 16, 2);
        g.fillRect(0, 22, 16, 2);
        g.generateTexture("fence_iron", 16, 32);
        g.destroy();
    }
    makeFenceGoldTexture() {
        // Gilded late-game show-off fence.
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0x000000, 0);
        g.fillRect(0, 0, 16, 32);
        g.fillStyle(0xcf9a1a, 1);
        g.fillRect(7, 2, 2, 24);
        g.fillStyle(0xffd86b, 1);
        g.fillCircle(8, 2, 3);
        g.fillRect(0, 8, 16, 3);
        g.fillRect(0, 22, 16, 3);
        g.fillStyle(0xcf9a1a, 1);
        g.fillRect(4, 14, 8, 2);
        g.generateTexture("fence_gold", 16, 32);
        g.destroy();
    }
    makeCloudTexture() {
        const g = this.make.graphics({ x: 0, y: 0 }, false);
        g.fillStyle(0xffffff, 1);
        g.fillRoundedRect(0, 6, 40, 14, 7);
        g.fillCircle(10, 10, 8);
        g.fillCircle(22, 6, 10);
        g.fillCircle(32, 10, 8);
        g.generateTexture("cloud", 44, 22);
        g.destroy();
    }
}
