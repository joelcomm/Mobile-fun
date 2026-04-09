const FALLBACK_PUZZLES = [
  {
    words: ["GLACIER", "SAPPHIRE", "OCEAN", "COBALT", "FROST", "DIAMOND", "STEEL", "CRYSTAL", "ICE"],
    culprit: "ICE",
    categories: [
      { name: "Things that are blue", members: ["SAPPHIRE", "OCEAN", "ICE"] },
      { name: "Things that are cold", members: ["GLACIER", "FROST", "ICE"] },
      { name: "Hard/tough materials", members: ["DIAMOND", "STEEL", "ICE"] }
    ],
    culprit_explanation: "Ice is blue-tinted, freezing cold, and a hard solid — fitting perfectly into all three categories."
  },
  {
    words: ["VELVET", "MIDNIGHT", "SHADOW", "RAVEN", "PANTHER", "COAL", "SILK", "INK", "JET"],
    culprit: "JET",
    categories: [
      { name: "Things that are black", members: ["RAVEN", "COAL", "JET"] },
      { name: "Things that are fast", members: ["PANTHER", "SHADOW", "JET"] },
      { name: "Smooth/sleek things", members: ["VELVET", "SILK", "JET"] }
    ],
    culprit_explanation: "Jet is jet-black, jet-fast, and jet-smooth — a gem prized for its sleek dark luster."
  },
  {
    words: ["CROWN", "TOWER", "BRIDGE", "RIVER", "GUARD", "GATE", "PALM", "THRONE", "KING"],
    culprit: "KING",
    categories: [
      { name: "Parts of a castle", members: ["TOWER", "GATE", "KING"] },
      { name: "Playing card terms", members: ["CROWN", "BRIDGE", "KING"] },
      { name: "Things that are royal", members: ["THRONE", "GUARD", "KING"] }
    ],
    culprit_explanation: "A king rules the castle, leads the deck, and embodies royalty itself."
  },
  {
    words: ["MATCH", "CANDLE", "LANTERN", "TORCH", "SPIRIT", "PEPPER", "GINGER", "SPARK", "FIRE"],
    culprit: "FIRE",
    categories: [
      { name: "Sources of light", members: ["CANDLE", "LANTERN", "FIRE"] },
      { name: "Things you ignite", members: ["MATCH", "TORCH", "FIRE"] },
      { name: "___ hot/spicy things", members: ["PEPPER", "GINGER", "FIRE"] }
    ],
    culprit_explanation: "Fire is a light source, something you ignite, and synonymous with heat and spice."
  },
  {
    words: ["BASS", "DRUM", "RECORD", "CURRENT", "WAVE", "SPEAKER", "VOLUME", "TIDE", "SOUND"],
    culprit: "SOUND",
    categories: [
      { name: "Music equipment/terms", members: ["BASS", "DRUM", "SOUND"] },
      { name: "Things with volume", members: ["SPEAKER", "RECORD", "SOUND"] },
      { name: "Water/ocean related", members: ["WAVE", "TIDE", "SOUND"] }
    ],
    culprit_explanation: "A sound is musical, has volume, and in geography a sound is a body of water between landmasses."
  }
];

let fallbackIndex = 0;

export async function generatePuzzle() {
  try {
    const res = await fetch('/api/puzzle', { method: 'POST' });
    if (!res.ok) throw new Error('API error');
    return await res.json();
  } catch {
    // Fallback to built-in puzzles
    const puzzle = FALLBACK_PUZZLES[fallbackIndex % FALLBACK_PUZZLES.length];
    fallbackIndex++;
    return puzzle;
  }
}
