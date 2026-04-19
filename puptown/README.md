# Pup Town Idle

A cozy browser-based 2D idle game built with **Phaser 3** and **TypeScript**.
Dogs wander a pixel-art yard generating Joy. Tap them for bonus Joy, build
upgrades, adopt more pups, and watch for random events like Treat Rain,
Zoomies, and the Golden Squeaky Toy.

## Play

Open `index.html` in a browser, or serve the folder statically. The page
loads Phaser from a CDN and `dist/main.js` as an ES module — no build step
needed to play, so long as `dist/` is checked in.

## Develop

```bash
npm install
npm run watch   # rebuild dist/ on every change to src/*.ts
```

Then reload `index.html`. Your save persists in `localStorage` under
`puptown.save.v1`; wipe it from the in-game Settings tab.

## Code layout

```
src/
  main.ts              Phaser game config + boot
  Game.ts              Singleton that owns managers + systems
  config.ts            Tunables: breeds, roles, buildings, events, palettes
  types.ts             Domain types + SaveState schema
  entities/Dog.ts      Container-based dog sprite (wanders, taps, wags tail)
  managers/
    SaveManager.ts     localStorage load/save with versioning
    ResourceManager.ts Joy / Treats / Reputation + listeners
    DogManager.ts      Roster, unlock costs, level-ups
    BuildingManager.ts Building levels + aggregated modifier helpers
  systems/
    ProductionSystem.ts Per-second rates + offline earnings
    EventSystem.ts      Random-event roller + active-effect tracker
  scenes/
    BootScene.ts       Generates placeholder pixel textures
    YardScene.ts       Renders yard, spawns dogs, handles taps
    UIScene.ts         HUD overlay + tab panels
  ui/
    ResourceBar.ts     Top resource bar
    NavTabs.ts         Bottom nav tab bar
    Panel.ts           Base panel class
    DogPanel.ts        Dog roster + adoption
    BuildMenu.ts       Building upgrades
    EventsPanel.ts     Active event + reference list
    SettingsPanel.ts   Save / wipe / stats
```
