// Shared base: a scrollable panel with a title bar and a content area.
// Subclasses add absolute-positioned rows and call setContentBottom(y) after
// building, which enables drag/wheel scrolling when the rows overflow.
import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";
export class Panel extends Phaser.GameObjects.Container {
    constructor(scene, title) {
        super(scene, 0, 0);
        this.scrollY = 0;
        this.maxScroll = 0;
        this.dragging = false;
        this.dragStartY = 0;
        this.dragStartScroll = 0;
        this.dragMoved = false;
        const height = Panel.BOTTOM - Panel.TOP;
        this.bg = scene.add.rectangle(GAME_WIDTH / 2, Panel.TOP + height / 2, GAME_WIDTH - 12, height, 0xfff6d6);
        this.bg.setStrokeStyle(2, 0x2a2a3e, 0.35);
        this.bg.setInteractive({ useHandCursor: false });
        this.titleText = scene.add.text(14, Panel.TOP + 6, title, {
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontStyle: "bold",
            color: "#2a2a3e",
        });
        this.content = scene.add.container(0, 0);
        this.maskGfx = scene.make.graphics({ x: 0, y: 0 }, false);
        this.maskGfx.fillStyle(0xffffff);
        this.maskGfx.fillRect(6, Panel.VIEW_TOP, GAME_WIDTH - 12, Panel.VIEW_BOTTOM - Panel.VIEW_TOP);
        this.content.setMask(this.maskGfx.createGeometryMask());
        this.add([this.bg, this.titleText, this.content]);
        scene.add.existing(this);
        // Drag to scroll within the panel.
        this.bg.on("pointerdown", (p) => {
            this.dragging = true;
            this.dragMoved = false;
            this.dragStartY = p.y;
            this.dragStartScroll = this.scrollY;
        });
        this.onMove = (p) => {
            if (!this.dragging || !p.isDown)
                return;
            const dy = p.y - this.dragStartY;
            if (Math.abs(dy) > 4)
                this.dragMoved = true;
            this.applyScroll(this.dragStartScroll - dy);
        };
        this.onUp = () => {
            this.dragging = false;
            this.dragMoved = false;
        };
        this.onWheel = (_p, _objs, _dx, dy) => {
            if (this.maxScroll <= 0)
                return;
            this.applyScroll(this.scrollY + dy * 0.5);
        };
        scene.input.on("pointermove", this.onMove);
        scene.input.on("pointerup", this.onUp);
        scene.input.on("wheel", this.onWheel);
    }
    setTitle(title) {
        this.titleText.setText(title);
    }
    clearContent() {
        this.content.removeAll(true);
    }
    /** Call after building rows; pass the lowest Y (in world coords) used. */
    setContentBottom(bottomY) {
        this.maxScroll = Math.max(0, bottomY + 8 - Panel.VIEW_BOTTOM);
        if (this.scrollY > this.maxScroll)
            this.applyScroll(this.maxScroll);
    }
    applyScroll(y) {
        const clamped = Math.max(0, Math.min(this.maxScroll, y));
        this.scrollY = clamped;
        this.content.y = -clamped;
    }
    /** Subclasses rebuild their rows. Base no-op. */
    refresh() {
        // no-op; subclasses override
    }
    destroy(fromScene) {
        this.scene.input.off("pointermove", this.onMove);
        this.scene.input.off("pointerup", this.onUp);
        this.scene.input.off("wheel", this.onWheel);
        this.maskGfx.destroy();
        super.destroy(fromScene);
    }
}
Panel.TOP = 334;
Panel.BOTTOM = GAME_HEIGHT - 78;
Panel.VIEW_TOP = Panel.TOP + 26;
Panel.VIEW_BOTTOM = Panel.BOTTOM - 4;
