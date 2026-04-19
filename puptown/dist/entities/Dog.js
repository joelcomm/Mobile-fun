// Visual representation of a dog: a Phaser.GameObjects.Container that draws
// itself from colored rectangles (placeholder pixel-art). Handles wandering
// and emits events when tapped.
import { BREED_PALETTES, YARD } from "../config.js";
export class DogSprite extends Phaser.GameObjects.Container {
    constructor(scene, data) {
        super(scene, data.position.x, data.position.y);
        this.speed = 22;
        this.tailWave = 0;
        this.zoomTimer = 0;
        this.readyBob = 0;
        this.dogData = data;
        this.setSize(36, 28);
        this.buildVisual();
        this.setScale(1.35);
        this.target = this.pickTarget();
        this.setInteractive(new Phaser.Geom.Rectangle(-20, -22, 40, 40), Phaser.Geom.Rectangle.Contains);
        this.on("pointerdown", () => {
            this.scene.events.emit("dog:tap", this.dogData.id, this.x, this.y);
            this.playTapBounce();
        });
        scene.add.existing(this);
    }
    buildVisual() {
        const palette = BREED_PALETTES[this.dogData.breedType][this.dogData.colorVariant] ?? [
            0xd9b382, 0xb5895a, 0x5a3a22,
        ];
        const [top, bottom, accent] = palette;
        this.tail = this.scene.add.rectangle(-18, -2, 8, 4, top);
        this.bodyRect = this.scene.add.rectangle(0, 0, 28, 14, top);
        this.belly = this.scene.add.rectangle(0, 5, 24, 6, bottom);
        const legColor = bottom;
        const legFL = this.scene.add.rectangle(-8, 9, 4, 6, legColor);
        const legFR = this.scene.add.rectangle(-4, 9, 4, 6, legColor);
        const legBL = this.scene.add.rectangle(4, 9, 4, 6, legColor);
        const legBR = this.scene.add.rectangle(8, 9, 4, 6, legColor);
        this.head = this.scene.add.rectangle(14, -4, 14, 12, top);
        this.earL = this.scene.add.rectangle(10, -10, 5, 5, accent);
        this.earR = this.scene.add.rectangle(17, -10, 5, 5, accent);
        this.snout = this.scene.add.rectangle(20, -1, 6, 5, bottom);
        this.eyeL = this.scene.add.rectangle(12, -5, 2, 2, 0x1a1a2e);
        this.eyeR = this.scene.add.rectangle(16, -5, 2, 2, 0x1a1a2e);
        const collar = this.scene.add.rectangle(10, 1, 3, 8, 0xff5a7e);
        this.nameLabel = this.scene.add.text(0, -26, this.dogData.named ? this.dogData.name : "", {
            fontFamily: "monospace",
            fontSize: "12px",
            fontStyle: "bold",
            color: "#2a2a3e",
            backgroundColor: "#fff6d6cc",
            padding: { left: 4, right: 4, top: 1, bottom: 1 },
        });
        this.nameLabel.setOrigin(0.5);
        this.nameLabel.setVisible(!!this.dogData.named);
        this.heart = this.scene.add.text(0, -22, "", {
            fontFamily: "sans-serif",
            fontSize: "16px",
            color: "#ff5a7e",
        });
        this.heart.setOrigin(0.5);
        this.heart.setAlpha(0);
        this.readyMark = this.scene.add.text(0, -38, "\u{1F393}", {
            fontFamily: "sans-serif",
            fontSize: "16px",
        });
        this.readyMark.setOrigin(0.5);
        this.readyMark.setAlpha(0);
        this.add([
            this.tail,
            legFL, legFR, legBL, legBR,
            this.bodyRect, this.belly,
            this.head, this.earL, this.earR, this.snout,
            this.eyeL, this.eyeR,
            collar,
            this.nameLabel, this.heart, this.readyMark,
        ]);
    }
    pickTarget() {
        return {
            x: YARD.x + 30 + Math.random() * (YARD.width - 60),
            y: YARD.y + 30 + Math.random() * (YARD.height - 60),
        };
    }
    tickUpdate(deltaMs) {
        const dt = deltaMs / 1000;
        this.zoomTimer -= dt;
        if (this.dogData.animState === "zoomies") {
            this.speed = 120;
            if (this.zoomTimer <= 0) {
                this.target = this.pickTarget();
                this.zoomTimer = 0.4 + Math.random() * 0.6;
            }
        }
        else {
            this.speed = 22 + (this.dogData.happiness / 100) * 14;
        }
        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 3) {
            this.target = this.pickTarget();
            if (this.dogData.animState !== "zoomies") {
                this.dogData.animState = Math.random() < 0.2 ? "idle" : "walk";
            }
        }
        else if (this.dogData.animState !== "sleep") {
            const vx = (dx / dist) * this.speed;
            const vy = (dy / dist) * this.speed;
            this.x += vx * dt;
            this.y += vy * dt;
            const facing = vx < 0 ? -1 : 1;
            this.setScale(facing * 1.35, 1.35);
            // Container flips kids too; counter-flip text labels so they read normally.
            this.nameLabel.setScale(facing, 1);
            this.heart.setScale(facing, 1);
            this.readyMark.setScale(facing, 1);
        }
        this.tailWave += dt * 10;
        this.tail.rotation = Math.sin(this.tailWave) * 0.5;
        if (this.dogData.animState === "walk" || this.dogData.animState === "zoomies") {
            this.bodyRect.y = Math.sin(this.tailWave * 2) * 0.6;
        }
        else {
            this.bodyRect.y = 0;
        }
        if (this.dogData.readyForAdoption) {
            this.readyBob += dt * 4;
            this.readyMark.setAlpha(1);
            this.readyMark.y = -38 + Math.sin(this.readyBob) * 2;
        }
        else if (this.readyMark.alpha !== 0) {
            this.readyMark.setAlpha(0);
        }
        this.dogData.position.x = this.x;
        this.dogData.position.y = this.y;
    }
    playTapBounce() {
        this.scene.tweens.add({
            targets: this,
            scaleY: { from: 1.55, to: 1.35 },
            duration: 120,
            ease: "Quad.easeOut",
        });
        this.heart.setText("\u2665");
        this.heart.setAlpha(1);
        this.scene.tweens.add({
            targets: this.heart,
            y: -32,
            alpha: 0,
            duration: 600,
            ease: "Cubic.easeOut",
            onComplete: () => {
                this.heart.y = -18;
            },
        });
    }
    setZoomies(on) {
        this.dogData.animState = on ? "zoomies" : "walk";
    }
    setDogName(name) {
        this.dogData.name = name;
        this.dogData.named = true;
        this.nameLabel.setText(name);
        this.nameLabel.setVisible(true);
        // Fade the label in so the moment of becoming "yours" feels rewarding.
        this.nameLabel.setAlpha(0);
        this.scene.tweens.add({
            targets: this.nameLabel,
            alpha: 1,
            duration: 280,
            ease: "Cubic.easeOut",
        });
    }
    /** Goodbye animation: float up, spin gently, fade out, then call onDone. */
    playGraduateAnimation(onDone) {
        this.disableInteractive();
        const baseScale = this.scaleX < 0 ? -1.35 : 1.35;
        this.scene.tweens.add({
            targets: this,
            y: this.y - 70,
            alpha: 0,
            scaleX: baseScale * 1.6,
            scaleY: 1.6,
            angle: 360,
            duration: 900,
            ease: "Cubic.easeIn",
            onComplete: onDone,
        });
    }
}
