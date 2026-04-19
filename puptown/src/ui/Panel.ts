// Shared base: a scrollable-ish panel with a title bar and a content area
// rendered via simple text rows. Designed for a vertical-phone viewport.

import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";

declare const Phaser: typeof import("phaser");

export class Panel extends Phaser.GameObjects.Container {
  static readonly TOP = 334;
  static readonly BOTTOM = GAME_HEIGHT - 78;

  protected bg: Phaser.GameObjects.Rectangle;
  protected titleText: Phaser.GameObjects.Text;
  protected content: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene, title: string) {
    super(scene, 0, 0);
    const height = Panel.BOTTOM - Panel.TOP;
    this.bg = scene.add.rectangle(
      GAME_WIDTH / 2,
      Panel.TOP + height / 2,
      GAME_WIDTH - 12,
      height,
      0xfff6d6
    );
    this.bg.setStrokeStyle(2, 0x2a2a3e, 0.35);
    this.titleText = scene.add.text(14, Panel.TOP + 6, title, {
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      fontStyle: "bold",
      color: "#2a2a3e",
    });
    this.content = scene.add.container(0, 0);
    this.add([this.bg, this.titleText, this.content]);
    scene.add.existing(this);
  }

  setTitle(title: string): void {
    this.titleText.setText(title);
  }

  clearContent(): void {
    this.content.removeAll(true);
  }

  /** Subclasses rebuild their rows. Base no-op. */
  refresh(): void {
    // no-op; subclasses override
  }
}
