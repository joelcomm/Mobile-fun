// BootScene prepares generated textures, then hands off to the Yard + UI.
export class BootScene extends Phaser.Scene {
    constructor() {
        super("Boot");
    }
    create() {
        this.makeGrassTexture();
        this.makeFenceTexture();
        this.makeCloudTexture();
        this.scene.start("Yard");
        this.scene.launch("UI");
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
