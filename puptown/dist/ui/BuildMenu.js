// Build menu: shows every building, its effect, cost, and an UPGRADE button.
import { BUILDINGS, GAME_WIDTH } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";
export class BuildMenu extends Panel {
    constructor(scene) {
        super(scene, "BUILD / UPGRADE");
        this.refresh();
    }
    refresh() {
        this.clearContent();
        let y = Panel.TOP + 28;
        for (const def of BUILDINGS) {
            this.drawRow(def.id, y);
            y += 48;
        }
    }
    drawRow(id, y) {
        const scene = this.scene;
        const game = Game.instance();
        const def = game.buildings.def(id);
        const level = game.buildings.levelOf(id);
        const cost = game.buildings.costFor(id);
        const bg = scene.add.rectangle(GAME_WIDTH / 2, y + 20, GAME_WIDTH - 32, 42, 0xffffff);
        bg.setStrokeStyle(1, 0x2a2a3e, 0.12);
        bg.setOrigin(0.5);
        const title = scene.add.text(20, y + 2, `${def.icon} ${def.name}  Lv${level}/${def.maxLevel}`, {
            fontFamily: "monospace",
            fontSize: "12px",
            fontStyle: "bold",
            color: "#2a2a3e",
        });
        const desc = scene.add.text(20, y + 18, def.description, {
            fontFamily: "monospace",
            fontSize: "10px",
            color: "#6b6b80",
        });
        const btnX = GAME_WIDTH - 80;
        const btnY = y + 20;
        let label;
        let color;
        if (!cost) {
            label = "MAX";
            color = 0xcccccc;
        }
        else {
            const parts = [];
            if (cost.joy)
                parts.push(`\u2600\uFE0F${formatNumber(cost.joy)}`);
            if (cost.treats)
                parts.push(`\u{1F36A}${formatNumber(cost.treats)}`);
            if (cost.reputation)
                parts.push(`\u2B50${cost.reputation}`);
            label = `BUILD\n${parts.join(" ")}`;
            color = game.resources.canAfford(cost) ? 0x7fc56b : 0xeeeee6;
        }
        const btnBg = scene.add.rectangle(btnX, btnY, 72, 32, color);
        btnBg.setStrokeStyle(1, 0x2a2a3e, 0.4);
        btnBg.setInteractive({ useHandCursor: true });
        btnBg.on("pointerdown", () => {
            if (!cost)
                return;
            if (game.resources.spend(cost)) {
                game.buildings.upgrade(id);
                this.refresh();
            }
            else {
                btnBg.setFillStyle(0xff5a7e);
                scene.time.delayedCall(180, () => btnBg.setFillStyle(color));
            }
        });
        const btnLabel = scene.add.text(btnX, btnY, label, {
            fontFamily: "monospace",
            fontSize: "10px",
            fontStyle: "bold",
            color: "#2a2a3e",
            align: "center",
        });
        btnLabel.setOrigin(0.5);
        this.content.add([bg, title, desc, btnBg, btnLabel]);
    }
}
function formatNumber(n) {
    if (n < 1000)
        return Math.floor(n).toString();
    if (n < 1000000)
        return (n / 1000).toFixed(1) + "k";
    return (n / 1000000).toFixed(2) + "m";
}
