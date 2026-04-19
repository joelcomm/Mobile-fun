// Shared base: a scrollable panel with a title bar and a content area.
// Subclasses add absolute-positioned rows and call setContentBottom(y) after
// building, which enables drag/wheel scrolling when the rows overflow.

import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";

declare const Phaser: typeof import("phaser");

export class Panel extends Phaser.GameObjects.Container {
  static readonly TOP = 334;
  static readonly BOTTOM = GAME_HEIGHT - 78;
  static readonly VIEW_TOP = Panel.TOP + 26;
  static readonly VIEW_BOTTOM = Panel.BOTTOM - 4;

  protected bg: Phaser.GameObjects.Rectangle;
  protected titleText: Phaser.GameObjects.Text;
  protected content: Phaser.GameObjects.Container;

  private maskGfx: Phaser.GameObjects.Graphics;
  private scrollY = 0;
  private maxScroll = 0;
  private dragging = false;
  private dragStartY = 0;
  private dragStartScroll = 0;
  private dragMoved = false;
  private onMove: (p: Phaser.Input.Pointer) => void;
  private onUp: () => void;
  private onWheel: (p: Phaser.Input.Pointer, _objs: unknown, _dx: number, dy: number) => void;

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
    this.maskGfx.fillRect(
      6,
      Panel.VIEW_TOP,
      GAME_WIDTH - 12,
      Panel.VIEW_BOTTOM - Panel.VIEW_TOP
    );
    this.content.setMask(this.maskGfx.createGeometryMask());

    this.add([this.bg, this.titleText, this.content]);
    scene.add.existing(this);

    // Drag to scroll within the panel.
    this.bg.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.dragging = true;
      this.dragMoved = false;
      this.dragStartY = p.y;
      this.dragStartScroll = this.scrollY;
    });
    this.onMove = (p: Phaser.Input.Pointer) => {
      if (!this.dragging || !p.isDown) return;
      const dy = p.y - this.dragStartY;
      if (Math.abs(dy) > 4) this.dragMoved = true;
      this.applyScroll(this.dragStartScroll - dy);
    };
    this.onUp = () => {
      this.dragging = false;
      this.dragMoved = false;
    };
    this.onWheel = (_p, _objs, _dx, dy) => {
      if (this.maxScroll <= 0) return;
      this.applyScroll(this.scrollY + dy * 0.5);
    };
    scene.input.on("pointermove", this.onMove);
    scene.input.on("pointerup", this.onUp);
    scene.input.on("wheel", this.onWheel);
  }

  setTitle(title: string): void {
    this.titleText.setText(title);
  }

  clearContent(): void {
    this.content.removeAll(true);
  }

  /** Call after building rows; pass the lowest Y (in world coords) used. */
  protected setContentBottom(bottomY: number): void {
    this.maxScroll = Math.max(0, bottomY + 8 - Panel.VIEW_BOTTOM);
    if (this.scrollY > this.maxScroll) this.applyScroll(this.maxScroll);
  }

  private applyScroll(y: number): void {
    const clamped = Math.max(0, Math.min(this.maxScroll, y));
    this.scrollY = clamped;
    this.content.y = -clamped;
  }

  /** Subclasses rebuild their rows. Base no-op. */
  refresh(): void {
    // no-op; subclasses override
  }

  destroy(fromScene?: boolean): void {
    this.scene.input.off("pointermove", this.onMove);
    this.scene.input.off("pointerup", this.onUp);
    this.scene.input.off("wheel", this.onWheel);
    this.maskGfx.destroy();
    super.destroy(fromScene);
  }
}
