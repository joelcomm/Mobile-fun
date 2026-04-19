// Dog panel: lists each dog with stats and an adoption/unlock button.

import {
  BREED_LABELS,
  ROLE_INFO,
  GAME_WIDTH,
} from "../config.js";
import { Game } from "../Game.js";
import { DogData } from "../types.js";
import { Panel } from "./Panel.js";

declare const Phaser: typeof import("phaser");

export class DogPanel extends Panel {
  constructor(scene: Phaser.Scene) {
    super(scene, "YOUR PUPS");
    this.refresh();
  }

  refresh(): void {
    this.clearContent();
    const game = Game.instance();
    const dogs = game.dogs.list();
    let y = Panel.TOP + 32;

    for (const d of dogs) {
      this.drawDogRow(d, y);
      y += 58;
    }

    this.drawUnlockRow(y);
    this.setContentBottom(y + 52);
  }

  private drawDogRow(d: DogData, y: number): void {
    const scene = this.scene;
    const rowBg = scene.add.rectangle(GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52, 0xffffff);
    rowBg.setStrokeStyle(1, 0x2a2a3e, 0.1);
    rowBg.setOrigin(0.5);

    const roleLabel = ROLE_INFO[d.role].label;
    const breed = BREED_LABELS[d.breedType];
    const line1 = `${d.name}  Lv${d.level}`;
    const line2 = `${breed} / ${roleLabel}`;
    const line3 = `\u{1F60A} ${Math.floor(d.happiness)}%  +${d.baseJoyPerSecond.toFixed(1)}/s  tap +${d.tapBonus.toFixed(1)}`;
    const text = scene.add.text(18, y + 4, line1 + "\n" + line2 + "\n" + line3, {
      fontFamily: "monospace",
      fontSize: "13px",
      color: "#2a2a3e",
      lineSpacing: 2,
    });

    const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, "LV UP", 0xff9ac1);
    btn.bg.on("pointerdown", () => {
      const game = Game.instance();
      const cost = Math.ceil(20 * Math.pow(1.7, d.level));
      if (game.resources.spend({ joy: cost })) {
        game.dogs.levelUp(d.id);
        this.refresh();
      } else {
        this.flash(btn.bg, 0xff5a7e);
      }
    });
    const cost = Math.ceil(20 * Math.pow(1.7, d.level));
    btn.label.setText(`LV UP\n${formatNumber(cost)}`);

    this.content.add([rowBg, text, btn.bg, btn.label]);
  }

  private drawUnlockRow(y: number): void {
    const scene = this.scene;
    const game = Game.instance();
    const cost = game.dogs.nextUnlockCost();
    const repNeeded = game.dogs.nextUnlockRep();
    const repCurrent = game.resources.snapshot.reputation;
    const slotsLeft = cost > 0;
    const repOk = repCurrent >= repNeeded;

    const bg = scene.add.rectangle(GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52, 0xe8e0cf);
    bg.setStrokeStyle(1, 0x2a2a3e, 0.15);
    bg.setOrigin(0.5);

    const locked = !repOk;
    const msg = slotsLeft
      ? locked
        ? `Needs \u2B50 ${repNeeded} Rep.`
        : `Random role!`
      : `All slots open!`;
    const info = scene.add.text(18, y + 6, `ADOPT NEXT PUP\n${msg}`, {
      fontFamily: "monospace",
      fontSize: "13px",
      color: "#2a2a3e",
      lineSpacing: 3,
    });

    const btn = this.makeButton(
      GAME_WIDTH - 52, y + 26,
      80, 40,
      `ADOPT\n${formatNumber(cost)}`,
      locked ? 0xaaaaaa : 0x7fc56b
    );
    btn.bg.on("pointerdown", () => {
      if (locked) return;
      const g = Game.instance();
      if (g.resources.spend({ joy: cost })) {
        g.dogs.adopt();
        this.refresh();
      } else {
        this.flash(btn.bg, 0xff5a7e);
      }
    });

    this.content.add([bg, info, btn.bg, btn.label]);
  }

  private makeButton(
    x: number, y: number, w: number, h: number, label: string, color: number
  ): { bg: Phaser.GameObjects.Rectangle; label: Phaser.GameObjects.Text } {
    const bg = this.scene.add.rectangle(x, y, w, h, color);
    bg.setStrokeStyle(1, 0x2a2a3e, 0.4);
    bg.setInteractive({ useHandCursor: true });
    const text = this.scene.add.text(x, y, label, {
      fontFamily: "monospace",
      fontSize: "13px",
      fontStyle: "bold",
      color: "#2a2a3e",
      align: "center",
    });
    text.setOrigin(0.5);
    return { bg, label: text };
  }

  private flash(rect: Phaser.GameObjects.Rectangle, color: number): void {
    const orig = rect.fillColor;
    rect.setFillStyle(color);
    this.scene.time.delayedCall(200, () => rect.setFillStyle(orig));
  }
}

function formatNumber(n: number): string {
  if (n < 1000) return Math.floor(n).toString();
  if (n < 1_000_000) return (n / 1000).toFixed(1) + "k";
  return (n / 1_000_000).toFixed(2) + "m";
}
