// Dog panel: lists each dog with stats and an adoption/unlock button.

import {
  BREED_LABELS,
  LV_UP_BASE,
  LV_UP_MULT,
  NAMING_COST_JOY,
  ROLE_INFO,
  GAME_WIDTH,
} from "../config.js";
import { Game } from "../Game.js";
import { YardScene } from "../scenes/YardScene.js";
import { DogData } from "../types.js";
import { Panel } from "./Panel.js";
import { formatNumber } from "../util/format.js";

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
    const game = Game.instance();
    const ready = game.dogs.isReady(d);
    const isStray = !d.named;
    const rowBg = scene.add.rectangle(
      GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52,
      ready ? 0xfff0b8 : isStray ? 0xeae0d6 : 0xffffff
    );
    rowBg.setStrokeStyle(
      1,
      ready ? 0xc89818 : isStray ? 0x6b6b80 : 0x2a2a3e,
      ready ? 0.6 : isStray ? 0.4 : 0.1
    );
    rowBg.setOrigin(0.5);

    const roleLabel = ROLE_INFO[d.role].label;
    const breed = BREED_LABELS[d.breedType];
    const displayName = isStray ? "Stray pup" : d.name;
    const line1 = `${displayName}  Lv${d.level}${ready ? "  \u{1F393}" : ""}`;
    const line2 = `${breed} / ${roleLabel}`;
    const line3 = isStray
      ? `Name them to make them yours.`
      : ready
        ? `Ready for a forever home!`
        : `\u{1F60A} ${Math.floor(d.happiness)}%  +${d.baseJoyPerSecond.toFixed(1)}/s  tap +${d.tapBonus.toFixed(1)}`;
    const text = scene.add.text(18, y + 4, line1 + "\n" + line2 + "\n" + line3, {
      fontFamily: "monospace",
      fontSize: "13px",
      color: "#2a2a3e",
      lineSpacing: 2,
    });

    // Stray: only NAME button is offered.
    if (isStray) {
      const canPay = game.resources.canAfford({ joy: NAMING_COST_JOY });
      const btn = this.makeButton(
        GAME_WIDTH - 52, y + 26, 80, 40,
        `\u{1F3F7} NAME\n\u2600\uFE0F${NAMING_COST_JOY}`,
        canPay ? 0x7fc56b : 0xff9ac1
      );
      btn.bg.on("pointerdown", () => {
        if (Game.instance().handleNameStray(d.id)) {
          this.refresh();
        } else {
          this.flash(btn.bg, 0xff5a7e);
        }
      });
      this.content.add([rowBg, text, btn.bg, btn.label]);
      return;
    }

    if (ready) {
      const reward = game.dogs.adoptionReward(d);
      const fee = game.nextSendOffFee();
      const canPayFee = game.resources.canAfford({ joy: fee });
      const btn = this.makeButton(
        GAME_WIDTH - 52, y + 26, 80, 40,
        `SEND HOME\n+${formatNumber(reward.joy - fee)}\n(fee \u2600\uFE0F${formatNumber(fee)})`,
        canPayFee ? 0xffd86b : 0xff9ac1
      );
      btn.label.setFontSize(11);
      btn.bg.on("pointerdown", () => {
        const yard = this.getYard();
        const sprite = yard?.getSprite(d.id);
        const x = sprite?.x ?? d.position.x;
        const yPos = sprite?.y ?? d.position.y;
        const got = Game.instance().handleGraduate(d.id);
        if (got && yard) yard.showRewardBurst(x, yPos, got);
        if (!got) this.flash(btn.bg, 0xff5a7e);
        else this.refresh();
      });
      this.content.add([rowBg, text, btn.bg, btn.label]);
      return;
    }

    const cost = Math.ceil(LV_UP_BASE * Math.pow(LV_UP_MULT, d.level));
    const affordable = game.resources.canAfford({ joy: cost });
    const btn = this.makeButton(
      GAME_WIDTH - 52, y + 26, 80, 40,
      `LV UP\n\u2600\uFE0F${formatNumber(cost)}`,
      affordable ? 0x7fc56b : 0xff9ac1
    );
    btn.bg.on("pointerdown", () => {
      if (game.resources.spend({ joy: cost })) {
        game.dogs.levelUp(d.id);
        this.refresh();
      } else {
        this.flash(btn.bg, 0xff5a7e);
      }
    });

    this.content.add([rowBg, text, btn.bg, btn.label]);
  }

  private getYard(): YardScene | undefined {
    return this.scene.scene.get("Yard") as YardScene | undefined;
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

    const canAfford = game.resources.canAfford({ joy: cost });
    const color = locked
      ? 0xaaaaaa
      : canAfford
        ? 0x7fc56b
        : 0xff9ac1;
    const btn = this.makeButton(
      GAME_WIDTH - 52, y + 26,
      80, 40,
      `ADOPT\n\u2600\uFE0F${formatNumber(cost)}`,
      color
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

