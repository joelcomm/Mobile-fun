// Events panel: shows the active random event and lists the possible ones.
import { GAME_WIDTH, RANDOM_EVENTS } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";
export class EventsPanel extends Panel {
    constructor(scene) {
        super(scene, "EVENTS");
        this.refresh();
    }
    refresh() {
        this.clearContent();
        const game = Game.instance();
        const active = game.events.getActive();
        let y = Panel.TOP + 30;
        const activeBg = this.scene.add.rectangle(GAME_WIDTH / 2, y + 22, GAME_WIDTH - 24, 48, active ? 0xffd86b : 0xe8e0cf);
        activeBg.setStrokeStyle(1, 0x2a2a3e, 0.2);
        activeBg.setOrigin(0.5);
        const msg = active
            ? `NOW: ${active.event.name} ${active.event.icon}  (${Math.ceil(active.remainingMs / 1000)}s)\n${active.event.description}`
            : `No active event.\nSomething fun rolls every ~45s.`;
        const text = this.scene.add.text(16, y + 6, msg, {
            fontFamily: "monospace",
            fontSize: "13px",
            color: "#2a2a3e",
            lineSpacing: 3,
        });
        this.content.add([activeBg, text]);
        y += 56;
        for (const ev of RANDOM_EVENTS) {
            const row = this.scene.add.rectangle(GAME_WIDTH / 2, y + 20, GAME_WIDTH - 24, 40, 0xffffff);
            row.setStrokeStyle(1, 0x2a2a3e, 0.1);
            row.setOrigin(0.5);
            const eText = this.scene.add.text(16, y + 4, `${ev.icon} ${ev.name}\n${ev.description}`, {
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#2a2a3e",
                lineSpacing: 2,
            });
            this.content.add([row, eText]);
            y += 44;
        }
        this.setContentBottom(y);
    }
}
