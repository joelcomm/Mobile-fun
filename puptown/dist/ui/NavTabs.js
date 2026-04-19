// Bottom nav tab bar: Dogs / Build / Events / Settings.
import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";
export class NavTabs extends Phaser.GameObjects.Container {
    constructor(scene, onChange) {
        super(scene, 0, 0);
        this.onChange = onChange;
        this.buttons = new Map();
        this.activeTab = "dogs";
        const y = GAME_HEIGHT - 38;
        const bg = scene.add.rectangle(GAME_WIDTH / 2, y, GAME_WIDTH, 76, 0x2a2a3e);
        bg.setOrigin(0.5);
        this.add(bg);
        const tabs = [
            ["dogs", "\u{1F436}", "DOGS"],
            ["build", "\u{1F528}", "BUILD"],
            ["events", "\u{2728}", "EVENTS"],
            ["settings", "\u{2699}", "SET"],
        ];
        const w = GAME_WIDTH / tabs.length;
        tabs.forEach(([key, icon, label], i) => {
            const cx = w * i + w / 2;
            const btnBg = scene.add.rectangle(cx, y, w - 4, 68, 0x3a3a4f);
            btnBg.setOrigin(0.5);
            btnBg.setInteractive({ useHandCursor: true });
            btnBg.on("pointerdown", () => this.select(key));
            const text = scene.add.text(cx, y, `${icon}\n${label}`, {
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontStyle: "bold",
                color: "#fff6d6",
                align: "center",
            });
            text.setOrigin(0.5);
            this.buttons.set(key, { bg: btnBg, label: text });
            this.add([btnBg, text]);
        });
        this.select("dogs");
        scene.add.existing(this);
    }
    select(key) {
        this.activeTab = key;
        for (const [k, v] of this.buttons) {
            v.bg.setFillStyle(k === key ? 0xff9ac1 : 0x3a3a4f);
            v.label.setColor(k === key ? "#2a2a3e" : "#fff6d6");
        }
        this.onChange(key);
    }
    getActive() {
        return this.activeTab;
    }
}
