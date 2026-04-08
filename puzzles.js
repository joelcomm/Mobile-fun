const PUZZLES = [
  {
    id: 1,
    groups: [
      {
        category: "Planets",
        level: 0,
        words: ["MERCURY", "VENUS", "SATURN", "NEPTUNE"]
      },
      {
        category: "Card games",
        level: 1,
        words: ["BRIDGE", "POKER", "HEARTS", "SPADES"]
      },
      {
        category: "Shoes",
        level: 2,
        words: ["LOAFER", "SANDAL", "BOOT", "MULE"]
      },
      {
        category: "Queen ___",
        level: 3,
        words: ["BEE", "SIZE", "PIN", "ANNE"]
      }
    ]
  },
  {
    id: 2,
    groups: [
      {
        category: "Pasta shapes",
        level: 0,
        words: ["PENNE", "RIGATONI", "FUSILLI", "ORZO"]
      },
      {
        category: "Things that are red",
        level: 1,
        words: ["CHERRY", "FIRE ENGINE", "CARDINAL", "RUBY"]
      },
      {
        category: "Dance styles",
        level: 2,
        words: ["SALSA", "TANGO", "WALTZ", "SWING"]
      },
      {
        category: "___ break",
        level: 3,
        words: ["SPRING", "LUNCH", "JAIL", "HEART"]
      }
    ]
  },
  {
    id: 3,
    groups: [
      {
        category: "Fruits",
        level: 0,
        words: ["MANGO", "PAPAYA", "GUAVA", "LYCHEE"]
      },
      {
        category: "Instruments",
        level: 1,
        words: ["DRUM", "FLUTE", "HARP", "CELLO"]
      },
      {
        category: "Types of clouds",
        level: 2,
        words: ["CIRRUS", "NIMBUS", "STRATUS", "CUMULUS"]
      },
      {
        category: "Harry Potter spells",
        level: 3,
        words: ["LUMOS", "ACCIO", "STUPEFY", "EXPECTO"]
      }
    ]
  },
  {
    id: 4,
    groups: [
      {
        category: "Colors of the rainbow",
        level: 0,
        words: ["INDIGO", "VIOLET", "ORANGE", "YELLOW"]
      },
      {
        category: "Things with keys",
        level: 1,
        words: ["PIANO", "KEYBOARD", "LOCK", "MAP"]
      },
      {
        category: "Baseball terms",
        level: 2,
        words: ["DIAMOND", "STRIKE", "FLY", "PITCH"]
      },
      {
        category: "Snap ___",
        level: 3,
        words: ["CHAT", "DRAGON", "PEA", "SHOT"]
      }
    ]
  },
  {
    id: 5,
    groups: [
      {
        category: "Dog breeds",
        level: 0,
        words: ["POODLE", "BOXER", "BEAGLE", "COLLIE"]
      },
      {
        category: "Coffee drinks",
        level: 1,
        words: ["LATTE", "MOCHA", "ESPRESSO", "CORTADO"]
      },
      {
        category: "Math concepts",
        level: 2,
        words: ["PRIME", "MATRIX", "ROOT", "FUNCTION"]
      },
      {
        category: "The ___ of March",
        level: 3,
        words: ["IDES", "HARE", "WINDS", "LION"]
      }
    ]
  },
  {
    id: 6,
    groups: [
      {
        category: "Ocean creatures",
        level: 0,
        words: ["OCTOPUS", "STARFISH", "DOLPHIN", "SEAHORSE"]
      },
      {
        category: "Currencies",
        level: 1,
        words: ["POUND", "FRANC", "CROWN", "BUCK"]
      },
      {
        category: "Things that spin",
        level: 2,
        words: ["TOP", "WHEEL", "RECORD", "TORNADO"]
      },
      {
        category: "Double ___",
        level: 3,
        words: ["DUTCH", "AGENT", "TAKE", "DOWN"]
      }
    ]
  },
  {
    id: 7,
    groups: [
      {
        category: "Breakfast foods",
        level: 0,
        words: ["WAFFLE", "PANCAKE", "BAGEL", "CROISSANT"]
      },
      {
        category: "Fabrics",
        level: 1,
        words: ["SILK", "DENIM", "COTTON", "VELVET"]
      },
      {
        category: "Movie genres",
        level: 2,
        words: ["HORROR", "WESTERN", "COMEDY", "THRILLER"]
      },
      {
        category: "Rock ___",
        level: 3,
        words: ["BOTTOM", "STAR", "SLIDE", "CLIMBING"]
      }
    ]
  },
  {
    id: 8,
    groups: [
      {
        category: "Trees",
        level: 0,
        words: ["MAPLE", "WILLOW", "CEDAR", "BIRCH"]
      },
      {
        category: "Kitchen tools",
        level: 1,
        words: ["WHISK", "LADLE", "TONGS", "GRATER"]
      },
      {
        category: "Modes of transport",
        level: 2,
        words: ["FERRY", "CABLE CAR", "GONDOLA", "RICKSHAW"]
      },
      {
        category: "Black ___",
        level: 3,
        words: ["MARKET", "SHEEP", "HOLE", "FRIDAY"]
      }
    ]
  },
  {
    id: 9,
    groups: [
      {
        category: "Gemstones",
        level: 0,
        words: ["EMERALD", "TOPAZ", "OPAL", "JADE"]
      },
      {
        category: "Things with wings",
        level: 1,
        words: ["AIRPLANE", "ANGEL", "BUTTERFLY", "STAGE"]
      },
      {
        category: "Board games",
        level: 2,
        words: ["RISK", "CLUE", "LIFE", "SORRY"]
      },
      {
        category: "Cold ___",
        level: 3,
        words: ["SHOULDER", "TURKEY", "FRONT", "CASE"]
      }
    ]
  },
  {
    id: 10,
    groups: [
      {
        category: "Cheeses",
        level: 0,
        words: ["BRIE", "GOUDA", "CHEDDAR", "FETA"]
      },
      {
        category: "Things that glow",
        level: 1,
        words: ["EMBER", "FIREFLY", "NEON", "STAR"]
      },
      {
        category: "Olympic events",
        level: 2,
        words: ["JAVELIN", "HURDLE", "RELAY", "VAULT"]
      },
      {
        category: "Power ___",
        level: 3,
        words: ["PLANT", "NAP", "WASH", "RANGER"]
      }
    ]
  },
  {
    id: 11,
    groups: [
      {
        category: "90s bands that are also everyday words",
        level: 0,
        words: ["GARBAGE", "HOLE", "BUSH", "FUEL"]
      },
      {
        category: "Michael Jackson album titles",
        level: 1,
        words: ["THRILLER", "BAD", "DANGEROUS", "INVINCIBLE"]
      },
      {
        category: "Artists who go by one name",
        level: 2,
        words: ["SEAL", "PRINCE", "JEWEL", "PINK"]
      },
      {
        category: "First word of an 80s/90s band name",
        level: 3,
        words: ["JANE", "NINE", "SMASHING", "GREEN"]
      }
    ]
  }
];
