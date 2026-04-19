// Top resource bar: Joy / Treats / Reputation + current Joy/s rate.

import { GAME_WIDTH } from "../config.js";
import { Resources } from "../types.js";

declare const Phaser: typeof import("phaser");

export class ResourceBar extends Phaser.GameObjects.Container {
  private joyText: Phaser.GameObjects.Text;
  private treatsText: Phaser.GameObjects.Text;
  private repText: Phaser.GameObjects.Text;
  private rateText: Phaser.GameObjects.Text;

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0);
    const bg = scene.add.rectangle(GAME_WIDTH / 2, 32, GAME_WIDTH - 8, 60, 0xfff6d6);
    bg.setStrokeStyle(2, 0x2a2a3e, 0.25);
    bg.setOrigin(0.5);

    const labelStyle = {
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#2a2a3e",
    } as Phaser.Types.GameObjects.Text.TextStyle;
    const valueStyle = {
      fontFamily: "monospace",
      fontSize: "20px",
      fontStyle: "bold",
    } as Phaser.Types.GameObjects.Text.TextStyle;

    // Three columns across a 360px canvas: joy | treats | rep.
    const colW = GAME_WIDTH / 3;

    const joyLabel = scene.add.text(colW * 0 + 12, 8, "\u2600\uFE0F JOY", labelStyle);
    this.joyText = scene.add.text(colW * 0 + 12, 28, "0", { ...valueStyle, color: "#c89818" });

    const treatsLabel = scene.add.text(colW * 1 + 8, 8, "\u{1F36A} TREATS", labelStyle);
    this.treatsText = scene.add.text(colW * 1 + 8, 28, "0", { ...valueStyle, color: "#8a6d00" });

    const repLabel = scene.add.text(colW * 2 + 8, 8, "\u2B50 REP", labelStyle);
    this.repText = scene.add.text(colW * 2 + 8, 28, "0", { ...valueStyle, color: "#4a6ee0" });

    this.rateText = scene.add.text(GAME_WIDTH - 10, 58, "+0/s", {
      fontFamily: "monospace",
      fontSize: "13px",
      color: "#6b6b80",
    });
    this.rateText.setOrigin(1, 0.5);

    this.add([bg, joyLabel, this.joyText, treatsLabel, this.treatsText, repLabel, this.repText, this.rateText]);
    scene.add.existing(this);
  }

  updateResources(res: Resources): void {
    this.joyText.setText(formatNumber(res.joy));
    this.treatsText.setText(formatNumber(res.treats));
    this.repText.setText(Math.floor(res.reputation).toString());
  }

  updateRate(joyPerSec: number): void {
    this.rateText.setText(`+${formatNumber(joyPerSec)}/s`);
  }
}

function formatNumber(n: number): string {
  if (n < 10) return n.toFixed(1);
  if (n < 1000) return Math.floor(n).toString();
  if (n < 1_000_000) return (n / 1000).toFixed(2) + "k";
  if (n < 1_000_000_000) return (n / 1_000_000).toFixed(2) + "m";
  return (n / 1_000_000_000).toFixed(2) + "b";
}
