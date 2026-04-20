// Settings panel: manual save, wipe save, show playtime.
//
// Unlike the other panels, we build the buttons once in the constructor and
// only mutate the info text on refresh. Tearing the SAVE button down every
// 600ms clobbered in-flight flashText tweens and felt like a lockup.

import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";

declare const Phaser: typeof import("phaser");

export class SettingsPanel extends Panel {
  private infoText!: Phaser.GameObjects.Text;
  private saveLabel!: Phaser.GameObjects.Text;
  private saveFlashTimer?: Phaser.Time.TimerEvent;

  constructor(scene: Phaser.Scene) {
    super(scene, "SETTINGS");
    this.buildOnce();
  }

  private buildOnce(): void {
    const game = Game.instance();
    const y = Panel.TOP + 34;

    this.infoText = this.scene.add.text(16, y, this.infoString(), {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#2a2a3e",
      lineSpacing: 4,
    });

    const btnY = y + 108;
    const saveBtn = this.makeButton(GAME_WIDTH / 2 - 76, btnY, 140, 40, "\u{1F4BE} SAVE", 0x7fc56b);
    this.saveLabel = saveBtn.label;
    saveBtn.bg.on("pointerdown", () => {
      Game.instance().forceSave();
      this.flashSaveLabel();
    });

    const wipeBtn = this.makeButton(GAME_WIDTH / 2 + 76, btnY, 140, 40, "\u{1F5D1} WIPE", 0xff9ac1);
    wipeBtn.bg.on("pointerdown", () => {
      this.showConfirm(
        "This will completely reset your progress. Are you sure?",
        () => Game.instance().wipeAndReload()
      );
    });

    this.content.add([this.infoText, saveBtn.bg, saveBtn.label, wipeBtn.bg, wipeBtn.label]);

    // ── PLAYTEST tools (remove before final release) ──────────────────────
    const devY = btnY + 52;
    const devLabel = this.scene.add.text(GAME_WIDTH / 2, devY - 12, "\u2014 PLAYTEST \u2014", {
      fontFamily: "Inter, sans-serif",
      fontSize: "11px",
      fontStyle: "italic",
      color: "#6b6b80",
    });
    devLabel.setOrigin(0.5);

    const autoOn = game.autoPlay;
    const autoBtn = this.makeButton(
      GAME_WIDTH / 2 - 76, devY + 18, 140, 38,
      `AUTO: ${autoOn ? "ON" : "OFF"}`,
      autoOn ? 0x7fc56b : 0xaaaaaa
    );
    autoBtn.bg.on("pointerdown", () => {
      const on = Game.instance().toggleAutoPlay();
      autoBtn.label.setText(`AUTO: ${on ? "ON" : "OFF"}`);
      autoBtn.bg.setFillStyle(on ? 0x7fc56b : 0xaaaaaa);
    });

    const speedBtn = this.makeButton(
      GAME_WIDTH / 2 + 76, devY + 18, 140, 38,
      `SPEED: ${game.speedMultiplier}x`,
      0xffd86b
    );
    speedBtn.bg.on("pointerdown", () => {
      const s = Game.instance().cycleSpeed();
      speedBtn.label.setText(`SPEED: ${s}x`);
    });

    this.content.add([devLabel, autoBtn.bg, autoBtn.label, speedBtn.bg, speedBtn.label]);
    this.setContentBottom(devY + 50);
  }

  refresh(): void {
    if (!this.infoText || !this.infoText.scene) return;
    this.infoText.setText(this.infoString());
  }

  private infoString(): string {
    const game = Game.instance();
    return `Version 0.1.0\nPlaytime: ${formatDuration(game.totalPlaytimeMs)}\nDogs: ${game.dogs.count()}\nAdoptions: ${game.totalAdoptions}\nRep: ${Math.floor(game.resources.snapshot.reputation)}`;
  }

  private flashSaveLabel(): void {
    this.saveLabel.setText("SAVED!");
    this.saveFlashTimer?.remove(false);
    this.saveFlashTimer = this.scene.time.delayedCall(900, () => {
      if (this.saveLabel && this.saveLabel.scene) {
        this.saveLabel.setText("\u{1F4BE} SAVE");
      }
    });
  }

  private showConfirm(message: string, onYes: () => void): void {
    const scene = this.scene;
    const layer = scene.add.container(0, 0);
    layer.setDepth(1000);

    const dim = scene.add.rectangle(
      GAME_WIDTH / 2, GAME_HEIGHT / 2,
      GAME_WIDTH, GAME_HEIGHT,
      0x000000, 0.55
    );
    dim.setInteractive();
    dim.on("pointerdown", () => {});

    const boxW = GAME_WIDTH - 48;
    const boxH = 170;
    const boxY = GAME_HEIGHT / 2;
    const box = scene.add.rectangle(GAME_WIDTH / 2, boxY, boxW, boxH, 0xfff6d6);
    box.setStrokeStyle(2, 0x2a2a3e, 0.7);
    box.setInteractive();
    box.on("pointerdown", () => {});

    const msg = scene.add.text(GAME_WIDTH / 2, boxY - 30, message, {
      fontFamily: "Inter, sans-serif",
      fontSize: "15px",
      color: "#2a2a3e",
      align: "center",
      wordWrap: { width: boxW - 28 },
    });
    msg.setOrigin(0.5);

    const yesBtn = this.makeButton(GAME_WIDTH / 2 - 60, boxY + 42, 100, 42, "YES", 0xff5a7e);
    yesBtn.label.setColor("#fff6d6");
    const noBtn = this.makeButton(GAME_WIDTH / 2 + 60, boxY + 42, 100, 42, "NO", 0x7fc56b);

    const close = () => layer.destroy();
    yesBtn.bg.on("pointerdown", () => { close(); onYes(); });
    noBtn.bg.on("pointerdown", close);

    layer.add([dim, box, msg, yesBtn.bg, yesBtn.label, noBtn.bg, noBtn.label]);
  }

  private makeButton(
    x: number, y: number, w: number, h: number, label: string, color: number
  ): { bg: Phaser.GameObjects.Rectangle; label: Phaser.GameObjects.Text } {
    const bg = this.scene.add.rectangle(x, y, w, h, color);
    bg.setStrokeStyle(1, 0x2a2a3e, 0.4);
    bg.setInteractive({ useHandCursor: true });
    const text = this.scene.add.text(x, y, label, {
      fontFamily: "monospace",
      fontSize: "14px",
      fontStyle: "bold",
      color: "#2a2a3e",
    });
    text.setOrigin(0.5);
    return { bg, label: text };
  }
}

function formatDuration(ms: number): string {
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h > 0) return `${h}h ${m}m ${sec}s`;
  if (m > 0) return `${m}m ${sec}s`;
  return `${sec}s`;
}
