// Settings panel: manual save, wipe save, show playtime.
import { GAME_WIDTH } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";
export class SettingsPanel extends Panel {
    constructor(scene) {
        super(scene, "SETTINGS");
        this.refresh();
    }
    refresh() {
        this.clearContent();
        const game = Game.instance();
        const y = Panel.TOP + 34;
        const info = this.scene.add.text(16, y, `Version 0.1.0\nPlaytime: ${formatDuration(game.totalPlaytimeMs)}\nDogs: ${game.dogs.count()}\nRep: ${Math.floor(game.resources.snapshot.reputation)}`, { fontFamily: "monospace", fontSize: "14px", color: "#2a2a3e", lineSpacing: 4 });
        this.content.add(info);
        const btnY = y + 108;
        const saveBtn = this.makeButton(GAME_WIDTH / 2 - 76, btnY, 140, 40, "\u{1F4BE} SAVE", 0x7fc56b);
        saveBtn.bg.on("pointerdown", () => {
            Game.instance().forceSave();
            this.flashText(saveBtn.label, "SAVED!");
        });
        const wipeBtn = this.makeButton(GAME_WIDTH / 2 + 76, btnY, 140, 40, "\u{1F5D1} WIPE", 0xff9ac1);
        wipeBtn.bg.on("pointerdown", () => {
            if (confirm("Wipe your Pup Town save? This cannot be undone.")) {
                Game.instance().wipeAndReload();
            }
        });
        this.content.add([saveBtn.bg, saveBtn.label, wipeBtn.bg, wipeBtn.label]);
    }
    makeButton(x, y, w, h, label, color) {
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
    flashText(t, newText) {
        const original = t.text;
        t.setText(newText);
        this.scene.time.delayedCall(900, () => t.setText(original));
    }
}
function formatDuration(ms) {
    const s = Math.floor(ms / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0)
        return `${h}h ${m}m ${sec}s`;
    if (m > 0)
        return `${m}m ${sec}s`;
    return `${sec}s`;
}
