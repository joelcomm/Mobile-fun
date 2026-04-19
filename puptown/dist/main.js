// Entry point: configures Phaser and kicks off the Game singleton.
import { GAME_HEIGHT, GAME_WIDTH } from "./config.js";
import { Game } from "./Game.js";
import { BootScene } from "./scenes/BootScene.js";
import { UIScene } from "./scenes/UIScene.js";
import { YardScene } from "./scenes/YardScene.js";
Game.instance().boot();
const config = {
    type: Phaser.AUTO,
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    parent: "game",
    backgroundColor: "#bfe6ff",
    pixelArt: true,
    roundPixels: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [BootScene, YardScene, UIScene],
};
new Phaser.Game(config);
