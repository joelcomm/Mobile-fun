// Settings panel: manual save, wipe save, show playtime.

import { GAME_WIDTH } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";

declare const Phaser: typeof import("phaser");

export class SettingsPanel extends Panel {
  constructor(scene: Phaser.Scene) {
    super(scene, "SETTINGS");
    this.refresh();
  }

  refresh(): void {
    this.clearContent();
    const game = Game.instance();
    const y = Panel.TOP + 36;

    const info = this.scene.add.text(
      20, y,
      `Version 0.1.0\nPlaytime: ${formatDuration(game.totalPlaytimeMs)}\nDogs: ${game.dogs.count()}\nReputation: ${Math.floor(game.resources.snapshot.reputation)}`,
      { fontFamily: "monospace", fontSize: "12px", color: "#2a2a3e", lineSpacing: 3 }
    );
    this.content.add(info);

    const saveBtn = this.makeButton(120, y + 92, 180, 36, "\u{1F4BE}  SAVE NOW", 0x7fc56b);
    saveBtn.bg.on("pointerdown", () => {
      Game.instance().forceSave();
      this.flashText(saveBtn.label, "SAVED!");
    });

    const wipeBtn = this.makeButton(GAME_WIDTH - 120, y + 92, 180, 36, "\u{1F5D1}  WIPE SAVE", 0xff9ac1);
    wipeBtn.bg.on("pointerdown", () => {
      if (confirm("Wipe your Pup Town save? This cannot be undone.")) {
        Game.instance().wipeAndReload();
      }
    });

    this.content.add([saveBtn.bg, saveBtn.label, wipeBtn.bg, wipeBtn.label]);
  }

  private makeButton(
    x: number, y: number, w: number, h: number, label: string, color: number
  ): { bg: Phaser.GameObjects.Rectangle; label: Phaser.GameObjects.Text } {
    const bg = this.scene.add.rectangle(x, y, w, h, color);
    bg.setStrokeStyle(1, 0x2a2a3e, 0.4);
    bg.setInteractive({ useHandCursor: true });
    const text = this.scene.add.text(x, y, label, {
      fontFamily: "monospace",
      fontSize: "12px",
      fontStyle: "bold",
      color: "#2a2a3e",
    });
    text.setOrigin(0.5);
    return { bg, label: text };
  }

  private flashText(t: Phaser.GameObjects.Text, newText: string): void {
    const original = t.text;
    t.setText(newText);
    this.scene.time.delayedCall(900, () => t.setText(original));
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
