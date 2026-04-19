// Shared base: a scrollable-ish panel with a title bar and a content area
// rendered via simple text rows. Designed for a vertical-phone viewport.
import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";
export class Panel extends Phaser.GameObjects.Container {
    constructor(scene, title) {
        super(scene, 0, 0);
        const height = Panel.BOTTOM - Panel.TOP;
        this.bg = scene.add.rectangle(GAME_WIDTH / 2, Panel.TOP + height / 2, GAME_WIDTH - 16, height, 0xfff6d6);
        this.bg.setStrokeStyle(2, 0x2a2a3e, 0.35);
        this.titleText = scene.add.text(16, Panel.TOP + 6, title, {
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontStyle: "bold",
            color: "#2a2a3e",
        });
        this.content = scene.add.container(0, 0);
        this.add([this.bg, this.titleText, this.content]);
        scene.add.existing(this);
    }
    setTitle(title) {
        this.titleText.setText(title);
    }
    clearContent() {
        this.content.removeAll(true);
    }
    /** Subclasses rebuild their rows. Base no-op. */
    refresh() {
        // no-op; subclasses override
    }
}
Panel.TOP = 570;
Panel.BOTTOM = GAME_HEIGHT - 72;
