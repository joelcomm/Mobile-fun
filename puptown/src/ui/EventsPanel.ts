// Events panel: shows the active random event and lists the possible ones.

import { GAME_WIDTH, RANDOM_EVENTS } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";

declare const Phaser: typeof import("phaser");

export class EventsPanel extends Panel {
  constructor(scene: Phaser.Scene) {
    super(scene, "EVENTS");
    this.refresh();
  }

  refresh(): void {
    this.clearContent();
    const game = Game.instance();
    const active = game.events.getActive();
    let y = Panel.TOP + 28;

    // Active status card.
    const activeBg = this.scene.add.rectangle(
      GAME_WIDTH / 2,
      y + 22,
      GAME_WIDTH - 32,
      44,
      active ? 0xffd86b : 0xe8e0cf
    );
    activeBg.setStrokeStyle(1, 0x2a2a3e, 0.2);
    activeBg.setOrigin(0.5);

    const msg = active
      ? `NOW: ${active.event.name} ${active.event.icon}  (${Math.ceil(active.remainingMs / 1000)}s left)\n${active.event.description}`
      : `No active event.\nKeep playing — something fun rolls every ~45s.`;
    const text = this.scene.add.text(22, y + 6, msg, {
      fontFamily: "monospace",
      fontSize: "11px",
      color: "#2a2a3e",
      lineSpacing: 2,
    });
    this.content.add([activeBg, text]);
    y += 52;

    for (const ev of RANDOM_EVENTS) {
      const row = this.scene.add.rectangle(GAME_WIDTH / 2, y + 20, GAME_WIDTH - 32, 40, 0xffffff);
      row.setStrokeStyle(1, 0x2a2a3e, 0.1);
      row.setOrigin(0.5);
      const eText = this.scene.add.text(
        22, y + 4,
        `${ev.icon} ${ev.name}\n${ev.description} (${ev.durationMs / 1000}s)`,
        {
          fontFamily: "monospace",
          fontSize: "11px",
          color: "#2a2a3e",
          lineSpacing: 2,
        }
      );
      this.content.add([row, eText]);
      y += 48;
    }
  }
}
