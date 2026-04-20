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
        this.scene.start("Yard");
        this.scene.launch("UI");
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
