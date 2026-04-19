// UIScene: runs on top of YardScene and owns the HUD + tab panels.
import { BuildMenu } from "../ui/BuildMenu.js";
import { DogPanel } from "../ui/DogPanel.js";
import { EventsPanel } from "../ui/EventsPanel.js";
import { NavTabs } from "../ui/NavTabs.js";
import { ResourceBar } from "../ui/ResourceBar.js";
import { SettingsPanel } from "../ui/SettingsPanel.js";
import { Game } from "../Game.js";
import { GAME_HEIGHT, GAME_WIDTH } from "../config.js";
export class UIScene extends Phaser.Scene {
    constructor() {
        super("UI");
        this.currentPanel = null;
        this.currentTab = "dogs";
        this.refreshTimer = 0;
    }
    create() {
        this.bar = new ResourceBar(this);
        this.tabs = new NavTabs(this, (key) => this.switchTab(key));
        const game = Game.instance();
        game.resources.on((r) => {
            this.bar.updateResources(r);
        });
        // Update rate periodically.
        this.time.addEvent({
            delay: 500,
            loop: true,
            callback: () => {
                const rates = game.production.rates();
                this.bar.updateRate(rates.joyPerSec);
            },
        });
        this.switchTab("dogs");
        // Offline earnings toast, if any.
        const offline = game.consumeOfflineEarnings();
        if (offline && (offline.joy > 1 || offline.treats > 0.5)) {
            this.showOfflineToast(offline);
        }
    }
    update(_time, delta) {
        // Lightly refresh the active panel so costs/levels reflect new totals.
        this.refreshTimer += delta;
        if (this.refreshTimer >= 600) {
            this.refreshTimer = 0;
            this.currentPanel?.refresh();
        }
    }
    switchTab(key) {
        if (this.currentPanel) {
            this.currentPanel.destroy();
            this.currentPanel = null;
        }
        this.currentTab = key;
        switch (key) {
            case "dogs":
                this.currentPanel = new DogPanel(this);
                break;
            case "build":
                this.currentPanel = new BuildMenu(this);
                break;
            case "events":
                this.currentPanel = new EventsPanel(this);
                break;
            case "settings":
                this.currentPanel = new SettingsPanel(this);
                break;
        }
    }
    showOfflineToast(earned) {
        const cx = GAME_WIDTH / 2;
        const cy = GAME_HEIGHT / 2 - 40;
        const msg = `Welcome back!\n+${Math.floor(earned.joy)} Joy, +${Math.floor(earned.treats)} Treats\n(offline earns 50%)`;
        const bg = this.add.rectangle(cx, cy, GAME_WIDTH - 40, 128, 0xfff6d6);
        bg.setStrokeStyle(2, 0x2a2a3e, 0.6);
        const text = this.add.text(cx, cy - 8, msg, {
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#2a2a3e",
            align: "center",
            lineSpacing: 6,
        });
        text.setOrigin(0.5);
        const btn = this.add.text(cx, cy + 44, "OK", {
            fontFamily: "monospace",
            fontSize: "16px",
            fontStyle: "bold",
            color: "#2a2a3e",
            backgroundColor: "#7fc56b",
            padding: { left: 20, right: 20, top: 6, bottom: 6 },
        });
        btn.setOrigin(0.5);
        btn.setInteractive({ useHandCursor: true });
        btn.on("pointerdown", () => {
            bg.destroy();
            text.destroy();
            btn.destroy();
        });
    }
}
