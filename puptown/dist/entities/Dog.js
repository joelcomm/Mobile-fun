// Visual representation of a dog: a Phaser.GameObjects.Container that draws
// itself from colored rectangles (placeholder pixel-art). Handles wandering
// and emits events when tapped.
import { ADOPTION_LEVEL_REQ, BREED_PALETTES, BREED_SIZE, BREED_STRETCH, YARD, } from "../config.js";
/** Visual growth stages tied to a dog's level. Puppies are small and floppy,
 *  veterans wear a graduation flair. The middle stage is the baseline. */
function growthScaleForLevel(level) {
    if (level <= 4)
        return 0.82; // puppy
    if (level >= ADOPTION_LEVEL_REQ)
        return 1.18; // veteran
    return 1.0; // adult
}
export class DogSprite extends Phaser.GameObjects.Container {
    constructor(scene, data) {
        super(scene, data.position.x, data.position.y);
        this.speed = 22;
        this.tailWave = 0;
        this.zoomTimer = 0;
        this.readyBob = 0;
        this.shownName = "";
        this.shownGrowth = 1;
        this.shownLevel = 0;
        this.baseScale = 1.5;
        // Breed-specific aspect ratio (dachshund is long-low, great dane is tall).
        this.stretchX = 1;
        this.stretchY = 1;
        this.dogData = data;
        this.setSize(36, 28);
        const stretch = BREED_STRETCH[data.breedType] ?? { x: 1, y: 1 };
        this.stretchX = stretch.x;
        this.stretchY = stretch.y;
        this.buildVisual();
        this.shownLevel = data.level;
        this.refreshAccessories();
        this.shownGrowth = growthScaleForLevel(data.level);
        this.baseScale = 1.5 * this.shownGrowth * (BREED_SIZE[data.breedType] ?? 1);
        this.setScale(this.baseScale * this.stretchX, this.baseScale * this.stretchY);
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
        // L5 bandana: a small kerchief hanging from the collar. Color varies by
        // color variant so bandanas don't all look identical across the yard.
        const bandanaColors = [0x4a7bd6, 0xe03b3b, 0xffd86b, 0x7fc56b, 0xb06bff];
        const bandanaColor = bandanaColors[this.dogData.colorVariant % bandanaColors.length];
        this.bandana = this.scene.add.rectangle(10, 5, 7, 4, bandanaColor);
        this.bandanaKnot = this.scene.add.rectangle(10, 2, 4, 2, bandanaColor);
        // L10 dog-tag charm: a gold circle dangling from the collar.
        this.charm = this.scene.add.circle(10, 7, 1.6, 0xffd86b);
        this.shownName = this.dogData.named ? this.dogData.name : "";
        this.nameLabel = this.scene.add.text(0, -26, this.shownName, {
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
        // Veteran flair (L15+): a little bandana bow that sits between the ears.
        this.veteranFlair = this.scene.add.text(13, -12, "\u{1F380}", {
            fontFamily: "sans-serif",
            fontSize: "10px",
        });
        this.veteranFlair.setOrigin(0.5);
        this.veteranFlair.setAlpha(this.dogData.level >= ADOPTION_LEVEL_REQ ? 1 : 0);
        // Dalmatian spots. Scattered black dots on the body so the breed reads
        // at a glance. Positions are deterministic per color variant so a dog
        // looks the same across saves, but varies between dogs.
        const breedExtras = [];
        if (this.dogData.breedType === "dalmatian") {
            const v = this.dogData.colorVariant;
            const spots = [
                [-6, -1], [2, 2], [8, -2], [-10, 4], [4, 6],
                [-2, -3], [10, 4],
            ];
            for (let i = 0; i < spots.length; i++) {
                const [sx, sy] = spots[i];
                const jitter = ((v + i) * 0.37) % 1;
                const dot = this.scene.add.rectangle(sx, sy + jitter, 2, 2, 0x1a1a1a);
                breedExtras.push(dot);
            }
            // Also a spot on the head.
            breedExtras.push(this.scene.add.rectangle(10, -6, 2, 2, 0x1a1a1a));
        }
        // Pomeranian: fluffy mane + extra tail puff so the silhouette reads as
        // a tiny cotton ball of a dog.
        if (this.dogData.breedType === "pomeranian") {
            const fluff = top;
            breedExtras.push(this.scene.add.rectangle(-2, -3, 22, 8, fluff));
            breedExtras.push(this.scene.add.rectangle(-14, -1, 6, 5, fluff));
            breedExtras.push(this.scene.add.rectangle(5, -6, 10, 4, fluff));
        }
        // YorkiePoo: curly-coat hint with a lighter tan chest patch and
        // matching ear tips, so the black body reads clearly as a YorkiePoo
        // rather than just "black dog".
        if (this.dogData.breedType === "yorkiepoo") {
            breedExtras.push(this.scene.add.rectangle(-2, 3, 10, 4, accent));
            breedExtras.push(this.scene.add.rectangle(13, -11, 5, 2, accent));
        }
        this.add([
            this.tail,
            legFL, legFR, legBL, legBR,
            this.bodyRect, this.belly,
            ...breedExtras,
            this.head, this.earL, this.earR, this.snout,
            this.eyeL, this.eyeR,
            collar,
            this.bandana, this.bandanaKnot, this.charm,
            this.veteranFlair,
            this.nameLabel, this.heart, this.readyMark,
        ]);
    }
    /** Toggle level-gated flair so a dog's look tracks their progression. */
    refreshAccessories() {
        const lvl = this.dogData.level;
        this.bandana.setAlpha(lvl >= 5 ? 1 : 0);
        this.bandanaKnot.setAlpha(lvl >= 5 ? 1 : 0);
        this.charm.setAlpha(lvl >= 10 ? 1 : 0);
        this.veteranFlair.setAlpha(lvl >= ADOPTION_LEVEL_REQ ? 1 : 0);
    }
    pickTarget() {
        return {
            x: YARD.x + 30 + Math.random() * (YARD.width - 60),
            y: YARD.y + 30 + Math.random() * (YARD.height - 60),
        };
    }
    tickUpdate(deltaMs) {
        const dt = deltaMs / 1000;
        // Level change: refresh gated accessories and pop a little bounce when
        // a dog unlocks a new piece of flair (L5 bandana, L10 charm, L15 bow).
        if (this.dogData.level !== this.shownLevel) {
            const prev = this.shownLevel;
            this.shownLevel = this.dogData.level;
            this.refreshAccessories();
            const crossed = (t) => prev < t && this.shownLevel >= t;
            if (crossed(5) || crossed(10) || crossed(ADOPTION_LEVEL_REQ)) {
                this.playTapBounce();
            }
        }
        // Keep the visual growth stage in sync with the dog's level. When a
        // dog crosses a stage boundary we animate the scale change so the
        // level-up button doesn't feel abstract.
        const wantGrowth = growthScaleForLevel(this.dogData.level);
        if (wantGrowth !== this.shownGrowth) {
            this.shownGrowth = wantGrowth;
            const nextBase = 1.5 * wantGrowth * (BREED_SIZE[this.dogData.breedType] ?? 1);
            const sign = this.scaleX < 0 ? -1 : 1;
            this.scene.tweens.add({
                targets: this,
                scaleX: sign * nextBase * this.stretchX,
                scaleY: nextBase * this.stretchY,
                duration: 320,
                ease: "Back.easeOut",
            });
            this.baseScale = nextBase;
        }
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
            this.setScale(facing * this.baseScale * this.stretchX, this.baseScale * this.stretchY);
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
        const restY = this.baseScale * this.stretchY;
        this.scene.tweens.add({
            targets: this,
            scaleY: { from: restY * 1.15, to: restY },
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
        this.shownName = name;
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
    /** Returns true if the visible label is out of sync with the data. */
    needsNameRefresh() {
        const wantName = this.dogData.named ? this.dogData.name : "";
        return wantName !== this.shownName;
    }
    /** Pop a little "!" bubble above the dog when a mood event lands. */
    playMoodBubble(icon) {
        const sign = this.scaleX < 0 ? -1 : 1;
        const bubble = this.scene.add.text(this.x, this.y - 34, icon, {
            fontFamily: "sans-serif",
            fontSize: "20px",
        });
        bubble.setOrigin(0.5);
        bubble.setScale(sign, 1);
        bubble.setDepth(80);
        this.scene.tweens.add({
            targets: bubble,
            y: this.y - 60,
            alpha: 0,
            duration: 1400,
            ease: "Cubic.easeOut",
            onComplete: () => bubble.destroy(),
        });
        // A small sad-bounce on the sprite itself so the mood drop is felt.
        const restY = this.baseScale * this.stretchY;
        this.scene.tweens.add({
            targets: this,
            scaleY: { from: restY * 0.88, to: restY },
            duration: 260,
            ease: "Quad.easeOut",
        });
    }
    /** Goodbye animation: float up, spin gently, fade out, then call onDone. */
    playGraduateAnimation(onDone) {
        this.disableInteractive();
        const sign = this.scaleX < 0 ? -1 : 1;
        this.scene.tweens.add({
            targets: this,
            y: this.y - 70,
            alpha: 0,
            scaleX: sign * this.baseScale * this.stretchX * 1.2,
            scaleY: this.baseScale * this.stretchY * 1.2,
            angle: 360,
            duration: 900,
            ease: "Cubic.easeIn",
            onComplete: onDone,
        });
    }
}
