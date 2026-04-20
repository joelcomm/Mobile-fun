// Dog panel: lists each dog with stats and an adoption/unlock button.
import { BREED_LABELS, GAME_HEIGHT, LV_UP_BASE, LV_UP_MULT, MERGE_INPUT_COUNT, MERGE_SYNERGY_BONUS, NAMING_COST_JOY, ROLE_INFO, GAME_WIDTH, } from "../config.js";
import { Game } from "../Game.js";
import { Panel } from "./Panel.js";
import { formatNumber } from "../util/format.js";
export class DogPanel extends Panel {
    constructor(scene) {
        super(scene, "YOUR PUPS");
        this.refresh();
    }
    refresh() {
        this.clearContent();
        const game = Game.instance();
        const dogs = game.dogs.listCurrent();
        let y = Panel.TOP + 32;
        // Current center header so the player always knows which yard they're
        // managing, and a small ◀ ▶ shortcut when they own more than one.
        y = this.drawCenterHeader(y);
        for (const d of dogs) {
            this.drawDogRow(d, y);
            y += 58;
        }
        this.drawUnlockRow(y);
        y += 58;
        this.drawBuyCenterRow(y);
        y += 58;
        if (Game.instance().centers.canMerge()) {
            this.drawMergeCenterRow(y);
            y += 58;
        }
        this.setContentBottom(y);
    }
    drawCenterHeader(y) {
        const scene = this.scene;
        const game = Game.instance();
        const centers = game.centers.list();
        const current = game.centers.current();
        const many = centers.length > 1;
        const bg = scene.add.rectangle(GAME_WIDTH / 2, y + 16, GAME_WIDTH - 24, 32, 0xfff0b8);
        bg.setStrokeStyle(1, 0xc89818, 0.5);
        bg.setOrigin(0.5);
        const label = scene.add.text(GAME_WIDTH / 2, y + 16, `\u{1F3E1} ${current.name}  (${centers.length})`, {
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontStyle: "bold",
            color: "#2a2a3e",
        });
        label.setOrigin(0.5);
        this.content.add([bg, label]);
        if (many) {
            const left = this.makeButton(40, y + 16, 52, 28, "\u25C0", 0xffd86b);
            left.bg.on("pointerdown", () => { game.centers.cycle(-1); this.refresh(); });
            const right = this.makeButton(GAME_WIDTH - 40, y + 16, 52, 28, "\u25B6", 0xffd86b);
            right.bg.on("pointerdown", () => { game.centers.cycle(1); this.refresh(); });
            this.content.add([left.bg, left.label, right.bg, right.label]);
        }
        return y + 40;
    }
    drawBuyCenterRow(y) {
        const scene = this.scene;
        const game = Game.instance();
        const cost = game.centers.costNext();
        const needed = Math.max(0, cost.adoptions - game.totalAdoptions);
        const canAfford = game.resources.canAfford({ joy: cost.joy });
        const locked = needed > 0;
        const bg = scene.add.rectangle(GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52, 0xeadff2);
        bg.setStrokeStyle(1, 0x6b4aa2, 0.3);
        bg.setOrigin(0.5);
        const msg = locked
            ? `Unlocks after ${needed} more adoption${needed === 1 ? "" : "s"}.`
            : `Opens a new yard. +15% Joy/s globally!`;
        const info = scene.add.text(18, y + 6, `OPEN NEW RESCUE CENTER\n${msg}`, {
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#2a2a3e",
            lineSpacing: 3,
        });
        const color = locked ? 0xaaaaaa : canAfford ? 0x7fc56b : 0xff9ac1;
        const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, `OPEN\n\u2600\uFE0F${formatNumber(cost.joy)}`, color);
        btn.bg.on("pointerdown", () => {
            if (locked) {
                this.flash(btn.bg, 0xff5a7e);
                return;
            }
            if (Game.instance().handleBuyCenter()) {
                this.refresh();
            }
            else {
                this.flash(btn.bg, 0xff5a7e);
            }
        });
        this.content.add([bg, info, btn.bg, btn.label]);
    }
    drawMergeCenterRow(y) {
        const scene = this.scene;
        const bonus = Math.round(MERGE_SYNERGY_BONUS * 100);
        const bg = scene.add.rectangle(GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52, 0xfff0b8);
        bg.setStrokeStyle(1, 0xc89818, 0.5);
        bg.setOrigin(0.5);
        const info = scene.add.text(18, y + 6, `MERGE CENTERS\nFuse ${MERGE_INPUT_COUNT} into a Mega Rescue (+${bonus}% synergy).`, {
            fontFamily: "monospace",
            fontSize: "12px",
            color: "#2a2a3e",
            lineSpacing: 3,
        });
        const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, "MERGE", 0xffd86b);
        btn.bg.on("pointerdown", () => this.openMergePicker());
        this.content.add([bg, info, btn.bg, btn.label]);
    }
    openMergePicker() {
        const scene = this.scene;
        const game = Game.instance();
        const centers = game.centers.list().slice();
        const needed = game.centers.mergeInputCount();
        const layer = scene.add.container(0, 0);
        layer.setDepth(1000);
        const dim = scene.add.rectangle(GAME_WIDTH / 2, GAME_HEIGHT / 2, GAME_WIDTH, GAME_HEIGHT, 0x000000, 0.55);
        dim.setInteractive();
        const boxH = Math.min(GAME_HEIGHT - 80, 120 + centers.length * 34);
        const boxY = GAME_HEIGHT / 2;
        const box = scene.add.rectangle(GAME_WIDTH / 2, boxY, GAME_WIDTH - 32, boxH, 0xfff6d6);
        box.setStrokeStyle(2, 0x2a2a3e, 0.7);
        const title = scene.add.text(GAME_WIDTH / 2, boxY - boxH / 2 + 12, `Pick ${needed} centers to merge`, {
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontStyle: "bold",
            color: "#2a2a3e",
        });
        title.setOrigin(0.5, 0);
        const selection = new Set();
        const rowRefs = [];
        const rowTop = boxY - boxH / 2 + 44;
        centers.forEach((c, i) => {
            const ry = rowTop + i * 30;
            const rowBg = scene.add.rectangle(GAME_WIDTH / 2, ry, GAME_WIDTH - 56, 26, 0xffffff);
            rowBg.setStrokeStyle(1, 0x2a2a3e, 0.4);
            rowBg.setInteractive({ useHandCursor: true });
            const label = scene.add.text(GAME_WIDTH / 2 - (GAME_WIDTH - 56) / 2 + 8, ry - 8, `${c.name}  \u00D7${(c.mergeWeight ?? 1).toFixed(2)}`, {
                fontFamily: "monospace",
                fontSize: "12px",
                color: "#2a2a3e",
            });
            rowBg.on("pointerdown", () => {
                if (selection.has(c.id)) {
                    selection.delete(c.id);
                    rowBg.setFillStyle(0xffffff);
                }
                else if (selection.size < needed) {
                    selection.add(c.id);
                    rowBg.setFillStyle(0xffd86b);
                }
            });
            rowRefs.push({ id: c.id, bg: rowBg });
            layer.add([rowBg, label]);
        });
        const doBtn = this.makeButton(GAME_WIDTH / 2 - 60, boxY + boxH / 2 - 28, 100, 38, "MERGE", 0xff5a7e);
        doBtn.label.setColor("#fff6d6");
        const cancelBtn = this.makeButton(GAME_WIDTH / 2 + 60, boxY + boxH / 2 - 28, 100, 38, "CANCEL", 0x7fc56b);
        doBtn.bg.on("pointerdown", () => {
            if (selection.size !== needed) {
                this.flash(doBtn.bg, 0xffd86b);
                return;
            }
            if (Game.instance().handleMergeCenters(Array.from(selection))) {
                layer.destroy();
                this.refresh();
            }
            else {
                this.flash(doBtn.bg, 0xffd86b);
            }
        });
        cancelBtn.bg.on("pointerdown", () => layer.destroy());
        layer.add([dim, box, title, doBtn.bg, doBtn.label, cancelBtn.bg, cancelBtn.label]);
    }
    drawDogRow(d, y) {
        const scene = this.scene;
        const game = Game.instance();
        const ready = game.dogs.isReady(d);
        const isStray = !d.named;
        const rowBg = scene.add.rectangle(GAME_WIDTH / 2, y + 26, GAME_WIDTH - 24, 52, ready ? 0xfff0b8 : isStray ? 0xeae0d6 : 0xffffff);
        rowBg.setStrokeStyle(1, ready ? 0xc89818 : isStray ? 0x6b6b80 : 0x2a2a3e, ready ? 0.6 : isStray ? 0.4 : 0.1);
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
            const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, `\u{1F3F7} NAME\n\u2600\uFE0F${NAMING_COST_JOY}`, canPay ? 0x7fc56b : 0xff9ac1);
            btn.bg.on("pointerdown", () => {
                if (Game.instance().handleNameStray(d.id)) {
                    this.refresh();
                }
                else {
                    this.flash(btn.bg, 0xff5a7e);
                }
            });
            this.content.add([rowBg, text, btn.bg, btn.label]);
            return;
        }
        if (ready) {
            const reward = game.dogs.adoptionReward(d);
            const fee = game.nextSendOffFee(d);
            const canPayFee = game.resources.canAfford({ joy: fee });
            const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, `SEND HOME\n+${formatNumber(reward.joy - fee)}\n(fee \u2600\uFE0F${formatNumber(fee)})`, canPayFee ? 0xffd86b : 0xff9ac1);
            btn.label.setFontSize(11);
            btn.bg.on("pointerdown", () => {
                const yard = this.getYard();
                const sprite = yard?.getSprite(d.id);
                const x = sprite?.x ?? d.position.x;
                const yPos = sprite?.y ?? d.position.y;
                const got = Game.instance().handleGraduate(d.id);
                if (got && yard)
                    yard.showRewardBurst(x, yPos, got);
                if (!got)
                    this.flash(btn.bg, 0xff5a7e);
                else
                    this.refresh();
            });
            this.content.add([rowBg, text, btn.bg, btn.label]);
            return;
        }
        const cost = Math.ceil(LV_UP_BASE * Math.pow(LV_UP_MULT, d.level));
        const affordable = game.resources.canAfford({ joy: cost });
        const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, `LV UP\n\u2600\uFE0F${formatNumber(cost)}`, affordable ? 0x7fc56b : 0xff9ac1);
        btn.bg.on("pointerdown", () => {
            if (game.resources.spend({ joy: cost })) {
                game.dogs.levelUp(d.id);
                this.refresh();
            }
            else {
                this.flash(btn.bg, 0xff5a7e);
            }
        });
        this.content.add([rowBg, text, btn.bg, btn.label]);
    }
    getYard() {
        return this.scene.scene.get("Yard");
    }
    drawUnlockRow(y) {
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
        const info = scene.add.text(18, y + 6, `RESCUE A STRAY\n${msg}`, {
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
        const btn = this.makeButton(GAME_WIDTH - 52, y + 26, 80, 40, `RESCUE\n\u2600\uFE0F${formatNumber(cost)}`, color);
        btn.bg.on("pointerdown", () => {
            if (locked)
                return;
            const g = Game.instance();
            if (g.resources.spend({ joy: cost })) {
                g.dogs.adopt();
                this.refresh();
            }
            else {
                this.flash(btn.bg, 0xff5a7e);
            }
        });
        this.content.add([bg, info, btn.bg, btn.label]);
    }
    makeButton(x, y, w, h, label, color) {
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
    flash(rect, color) {
        const orig = rect.fillColor;
        rect.setFillStyle(color);
        this.scene.time.delayedCall(200, () => rect.setFillStyle(orig));
    }
}
