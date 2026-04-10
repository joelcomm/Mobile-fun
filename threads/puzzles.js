const PUZZLES = [
  {
    id: 1,
    groups: [
      { category: "Planets", level: 0, words: ["MERCURY", "VENUS", "SATURN", "NEPTUNE"] },
      { category: "Card games", level: 1, words: ["BRIDGE", "POKER", "HEARTS", "SPADES"] },
      { category: "Shoes", level: 2, words: ["LOAFER", "SANDAL", "BOOT", "MULE"] },
      { category: "Queen ___", level: 3, words: ["BEE", "SIZE", "PIN", "ANNE"] }
    ]
  },
  {
    id: 2,
    groups: [
      { category: "Pasta shapes", level: 0, words: ["PENNE", "RIGATONI", "FUSILLI", "ORZO"] },
      { category: "Things that are red", level: 1, words: ["CHERRY", "FIRE ENGINE", "CARDINAL", "RUBY"] },
      { category: "Dance styles", level: 2, words: ["SALSA", "TANGO", "WALTZ", "SWING"] },
      { category: "___ break", level: 3, words: ["SPRING", "LUNCH", "JAIL", "HEART"] }
    ]
  },
  {
    id: 3,
    groups: [
      { category: "Fruits", level: 0, words: ["MANGO", "PAPAYA", "GUAVA", "LYCHEE"] },
      { category: "Instruments", level: 1, words: ["DRUM", "FLUTE", "HARP", "CELLO"] },
      { category: "Types of clouds", level: 2, words: ["CIRRUS", "NIMBUS", "STRATUS", "CUMULUS"] },
      { category: "Harry Potter spells", level: 3, words: ["LUMOS", "ACCIO", "STUPEFY", "EXPECTO"] }
    ]
  },
  {
    id: 4,
    groups: [
      { category: "Colors of the rainbow", level: 0, words: ["INDIGO", "VIOLET", "ORANGE", "YELLOW"] },
      { category: "Things with keys", level: 1, words: ["PIANO", "KEYBOARD", "LOCK", "MAP"] },
      { category: "Baseball terms", level: 2, words: ["DIAMOND", "STRIKE", "FLY", "PITCH"] },
      { category: "Snap ___", level: 3, words: ["CHAT", "DRAGON", "PEA", "SHOT"] }
    ]
  },
  {
    id: 5,
    groups: [
      { category: "Dog breeds", level: 0, words: ["POODLE", "BOXER", "BEAGLE", "COLLIE"] },
      { category: "Coffee drinks", level: 1, words: ["LATTE", "MOCHA", "ESPRESSO", "CORTADO"] },
      { category: "Math concepts", level: 2, words: ["PRIME", "MATRIX", "ROOT", "FUNCTION"] },
      { category: "The ___ of March", level: 3, words: ["IDES", "HARE", "WINDS", "LION"] }
    ]
  },
  {
    id: 6,
    groups: [
      { category: "Ocean creatures", level: 0, words: ["OCTOPUS", "STARFISH", "DOLPHIN", "SEAHORSE"] },
      { category: "Currencies", level: 1, words: ["POUND", "FRANC", "CROWN", "BUCK"] },
      { category: "Things that spin", level: 2, words: ["TOP", "WHEEL", "RECORD", "TORNADO"] },
      { category: "Double ___", level: 3, words: ["DUTCH", "AGENT", "TAKE", "DOWN"] }
    ]
  },
  {
    id: 7,
    groups: [
      { category: "Breakfast foods", level: 0, words: ["WAFFLE", "PANCAKE", "BAGEL", "CROISSANT"] },
      { category: "Fabrics", level: 1, words: ["SILK", "DENIM", "COTTON", "VELVET"] },
      { category: "Movie genres", level: 2, words: ["HORROR", "WESTERN", "COMEDY", "THRILLER"] },
      { category: "Rock ___", level: 3, words: ["BOTTOM", "STAR", "SLIDE", "CLIMBING"] }
    ]
  },
  {
    id: 8,
    groups: [
      { category: "Trees", level: 0, words: ["MAPLE", "WILLOW", "CEDAR", "BIRCH"] },
      { category: "Kitchen tools", level: 1, words: ["WHISK", "LADLE", "TONGS", "GRATER"] },
      { category: "Modes of transport", level: 2, words: ["FERRY", "CABLE CAR", "GONDOLA", "RICKSHAW"] },
      { category: "Black ___", level: 3, words: ["MARKET", "SHEEP", "HOLE", "FRIDAY"] }
    ]
  },
  {
    id: 9,
    groups: [
      { category: "Gemstones", level: 0, words: ["EMERALD", "TOPAZ", "OPAL", "JADE"] },
      { category: "Things with wings", level: 1, words: ["AIRPLANE", "ANGEL", "BUTTERFLY", "STAGE"] },
      { category: "Board games", level: 2, words: ["RISK", "CLUE", "LIFE", "SORRY"] },
      { category: "Cold ___", level: 3, words: ["SHOULDER", "TURKEY", "FRONT", "CASE"] }
    ]
  },
  {
    id: 10,
    groups: [
      { category: "Cheeses", level: 0, words: ["BRIE", "GOUDA", "CHEDDAR", "FETA"] },
      { category: "Things that glow", level: 1, words: ["EMBER", "FIREFLY", "NEON", "STAR"] },
      { category: "Olympic events", level: 2, words: ["JAVELIN", "HURDLE", "RELAY", "VAULT"] },
      { category: "Power ___", level: 3, words: ["PLANT", "NAP", "WASH", "RANGER"] }
    ]
  },
  {
    id: 11,
    groups: [
      { category: "90s bands that are also everyday words", level: 0, words: ["GARBAGE", "HOLE", "BUSH", "FUEL"] },
      { category: "Michael Jackson album titles", level: 1, words: ["THRILLER", "BAD", "DANGEROUS", "INVINCIBLE"] },
      { category: "Artists who go by one name", level: 2, words: ["SEAL", "PRINCE", "JEWEL", "PINK"] },
      { category: "First word of an 80s/90s band name", level: 3, words: ["JANE", "NINE", "SMASHING", "GREEN"] }
    ]
  },
  {
    id: 12,
    groups: [
      { category: "Vegetables", level: 0, words: ["CARROT", "BROCCOLI", "SPINACH", "CELERY"] },
      { category: "Zodiac signs", level: 1, words: ["SCORPIO", "LEO", "ARIES", "GEMINI"] },
      { category: "Poker terms", level: 2, words: ["FOLD", "FLUSH", "BLIND", "RIVER"] },
      { category: "Fire ___", level: 3, words: ["TRUCK", "FLY", "PLACE", "WORK"] }
    ]
  },
  {
    id: 13,
    groups: [
      { category: "Flowers", level: 0, words: ["ROSE", "DAISY", "TULIP", "LILY"] },
      { category: "Types of bear", level: 1, words: ["GRIZZLY", "POLAR", "PANDA", "KODIAK"] },
      { category: "Gym equipment", level: 2, words: ["BENCH", "BAR", "PLATE", "RACK"] },
      { category: "Words inside 'WASHINGTON'", level: 3, words: ["WASH", "ASH", "SHIN", "TON"] }
    ]
  },
  {
    id: 14,
    groups: [
      { category: "Countries in South America", level: 0, words: ["BRAZIL", "CHILE", "PERU", "COLOMBIA"] },
      { category: "Types of hat", level: 1, words: ["BERET", "FEDORA", "TURBAN", "STETSON"] },
      { category: "Things with strings", level: 2, words: ["GUITAR", "KITE", "PUPPET", "BOW"] },
      { category: "___ line", level: 3, words: ["PUNCH", "BOTTOM", "PICK UP", "FINISH"] }
    ]
  },
  {
    id: 15,
    groups: [
      { category: "Baby animals", level: 0, words: ["KITTEN", "PUPPY", "CALF", "LAMB"] },
      { category: "Greek letters", level: 1, words: ["ALPHA", "DELTA", "OMEGA", "SIGMA"] },
      { category: "Things in a wallet", level: 2, words: ["CASH", "LICENSE", "RECEIPT", "PHOTO"] },
      { category: "Grand ___", level: 3, words: ["PIANO", "CANYON", "JURY", "SLAM"] }
    ]
  },
  {
    id: 16,
    groups: [
      { category: "Rivers", level: 0, words: ["NILE", "AMAZON", "THAMES", "DANUBE"] },
      { category: "Pizza toppings", level: 1, words: ["MUSHROOM", "OLIVE", "PEPPER", "ONION"] },
      { category: "Words meaning 'smart'", level: 2, words: ["SHARP", "BRIGHT", "CLEVER", "KEEN"] },
      { category: "Hand ___", level: 3, words: ["SHAKE", "RAIL", "BAG", "MADE"] }
    ]
  },
  {
    id: 17,
    groups: [
      { category: "Insects", level: 0, words: ["ANT", "BEETLE", "CRICKET", "MOTH"] },
      { category: "Sushi varieties", level: 1, words: ["SALMON", "TUNA", "EEL", "SHRIMP"] },
      { category: "Things that are round", level: 2, words: ["GLOBE", "COIN", "MOON", "PLATE"] },
      { category: "___ ball", level: 3, words: ["BASKET", "SNOW", "FIRE", "EYE"] }
    ]
  },
  {
    id: 18,
    groups: [
      { category: "Spices", level: 0, words: ["CINNAMON", "TURMERIC", "PAPRIKA", "CUMIN"] },
      { category: "Classic video games", level: 1, words: ["TETRIS", "PONG", "PACMAN", "FROGGER"] },
      { category: "Types of bridge", level: 2, words: ["ARCH", "SUSPENSION", "DRAWBRIDGE", "TRUSS"] },
      { category: "Words that rhyme with 'RAIN'", level: 3, words: ["BRAIN", "CRANE", "TRAIN", "PLAIN"] }
    ]
  },
  {
    id: 19,
    groups: [
      { category: "Desserts", level: 0, words: ["BROWNIE", "SUNDAE", "TIRAMISU", "ECLAIR"] },
      { category: "Chemical elements", level: 1, words: ["COPPER", "IRON", "SILVER", "GOLD"] },
      { category: "Things at a circus", level: 2, words: ["TRAPEZE", "CLOWN", "RINGMASTER", "TIGHTROPE"] },
      { category: "Water ___", level: 3, words: ["FALL", "MELON", "PROOF", "COLOR"] }
    ]
  },
  {
    id: 20,
    groups: [
      { category: "Capital cities", level: 0, words: ["PARIS", "LONDON", "TOKYO", "ROME"] },
      { category: "Things you blow", level: 1, words: ["CANDLE", "WHISTLE", "BUBBLE", "HORN"] },
      { category: "Parts of a ship", level: 2, words: ["HULL", "MAST", "STERN", "ANCHOR"] },
      { category: "Air ___", level: 3, words: ["PORT", "CRAFT", "TIGHT", "BORNE"] }
    ]
  },
  {
    id: 21,
    groups: [
      { category: "Reptiles", level: 0, words: ["COBRA", "GECKO", "IGUANA", "TORTOISE"] },
      { category: "Shades of blue", level: 1, words: ["NAVY", "COBALT", "TEAL", "AZURE"] },
      { category: "Dances", level: 2, words: ["RUMBA", "POLKA", "FOXTROT", "MAMBO"] },
      { category: "Home ___", level: 3, words: ["RUN", "SICK", "WORK", "TOWN"] }
    ]
  },
  {
    id: 22,
    groups: [
      { category: "Birds", level: 0, words: ["EAGLE", "SPARROW", "PARROT", "PELICAN"] },
      { category: "Martial arts", level: 1, words: ["JUDO", "KARATE", "BOXING", "FENCING"] },
      { category: "Things in a courtroom", level: 2, words: ["GAVEL", "WITNESS", "JURY", "BENCH"] },
      { category: "Bright as a ___", level: 3, words: ["BUTTON", "PENNY", "BULB", "STAR"] }
    ]
  },
  {
    id: 23,
    groups: [
      { category: "Nuts", level: 0, words: ["ALMOND", "WALNUT", "PECAN", "CASHEW"] },
      { category: "Horror movie villains", level: 1, words: ["FREDDY", "JASON", "CHUCKY", "LEATHERFACE"] },
      { category: "Things with teeth", level: 2, words: ["COMB", "SAW", "ZIPPER", "GEAR"] },
      { category: "Golden ___", level: 3, words: ["GATE", "RETRIEVER", "AGE", "RULE"] }
    ]
  },
  {
    id: 24,
    groups: [
      { category: "Planets visible to naked eye", level: 0, words: ["MARS", "JUPITER", "VENUS", "SATURN"] },
      { category: "Types of cheese", level: 1, words: ["SWISS", "PARMESAN", "STILTON", "MOZZARELLA"] },
      { category: "Things in space", level: 2, words: ["COMET", "ASTEROID", "NEBULA", "QUASAR"] },
      { category: "___ house", level: 3, words: ["WARE", "GREEN", "PLAY", "POWER"] }
    ]
  },
  {
    id: 25,
    groups: [
      { category: "Tools", level: 0, words: ["HAMMER", "WRENCH", "DRILL", "PLIERS"] },
      { category: "Dips and sauces", level: 1, words: ["HUMMUS", "SALSA", "GUACAMOLE", "TZATZIKI"] },
      { category: "Things that tick", level: 2, words: ["CLOCK", "BOMB", "HEART", "METRONOME"] },
      { category: "Back ___", level: 3, words: ["FIRE", "BONE", "YARD", "STAGE"] }
    ]
  },
  {
    id: 26,
    groups: [
      { category: "Winter sports", level: 0, words: ["SKIING", "HOCKEY", "CURLING", "LUGE"] },
      { category: "Famous Johns", level: 1, words: ["LENNON", "WAYNE", "ADAMS", "KENNEDY"] },
      { category: "Things that drip", level: 2, words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Out ___", level: 3, words: ["LAW", "BREAK", "LINE", "FIELD"] }
    ]
  },
  {
    id: 27,
    groups: [
      { category: "Herbs", level: 0, words: ["BASIL", "THYME", "OREGANO", "MINT"] },
      { category: "Fictional detectives", level: 1, words: ["SHERLOCK", "POIROT", "COLUMBO", "MORSE"] },
      { category: "Things with layers", level: 2, words: ["ONION", "CAKE", "LASAGNA", "EARTH"] },
      { category: "___ work", level: 3, words: ["NET", "FIRE", "FRAME", "CLOCK"] }
    ]
  },
  {
    id: 28,
    groups: [
      { category: "Tropical fruits", level: 0, words: ["COCONUT", "PINEAPPLE", "BANANA", "KIWI"] },
      { category: "Types of music", level: 1, words: ["JAZZ", "BLUES", "REGGAE", "SOUL"] },
      { category: "Things at a carnival", level: 2, words: ["CAROUSEL", "COTTON CANDY", "FERRIS WHEEL", "BUMPER CARS"] },
      { category: "Moon ___", level: 3, words: ["LIGHT", "SHINE", "WALK", "STONE"] }
    ]
  },
  {
    id: 29,
    groups: [
      { category: "Fish", level: 0, words: ["SALMON", "TROUT", "COD", "BASS"] },
      { category: "Things in an office", level: 1, words: ["STAPLER", "PRINTER", "FOLDER", "BINDER"] },
      { category: "Words meaning 'happy'", level: 2, words: ["GLAD", "JOLLY", "MERRY", "CONTENT"] },
      { category: "Tooth ___", level: 3, words: ["BRUSH", "PASTE", "FAIRY", "PICK"] }
    ]
  },
  {
    id: 30,
    groups: [
      { category: "Asian countries", level: 0, words: ["JAPAN", "CHINA", "INDIA", "VIETNAM"] },
      { category: "Sandwich types", level: 1, words: ["CLUB", "WRAP", "PANINI", "SUB"] },
      { category: "Things that bounce", level: 2, words: ["BALL", "CHECK", "SPRING", "TRAMPOLINE"] },
      { category: "Dead ___", level: 3, words: ["LINE", "LOCK", "END", "PAN"] }
    ]
  },
  {
    id: 31,
    groups: [
      { category: "Cat breeds", level: 0, words: ["PERSIAN", "SIAMESE", "BENGAL", "TABBY"] },
      { category: "Shapes", level: 1, words: ["HEXAGON", "TRIANGLE", "PENTAGON", "OCTAGON"] },
      { category: "Things that glow in the dark", level: 2, words: ["STARS", "FIREFLY", "JELLYFISH", "RADIUM"] },
      { category: "Light ___", level: 3, words: ["HOUSE", "WEIGHT", "YEAR", "NING"] }
    ]
  },
  {
    id: 32,
    groups: [
      { category: "African animals", level: 0, words: ["ELEPHANT", "GIRAFFE", "ZEBRA", "LION"] },
      { category: "Types of tea", level: 1, words: ["CHAI", "MATCHA", "OOLONG", "EARL GREY"] },
      { category: "Things at the beach", level: 2, words: ["SANDCASTLE", "SURFBOARD", "SHELL", "TOWEL"] },
      { category: "Iron ___", level: 3, words: ["MAN", "CLAD", "CURTAIN", "BOARD"] }
    ]
  },
  {
    id: 33,
    groups: [
      { category: "Berries", level: 0, words: ["BLUEBERRY", "RASPBERRY", "BLACKBERRY", "STRAWBERRY"] },
      { category: "Things in a hospital", level: 1, words: ["GURNEY", "SCALPEL", "STETHOSCOPE", "SYRINGE"] },
      { category: "Words that mean 'fast'", level: 2, words: ["SWIFT", "RAPID", "FLEET", "BRISK"] },
      { category: "Eye ___", level: 3, words: ["BROW", "LASH", "LID", "WITNESS"] }
    ]
  },
  {
    id: 34,
    groups: [
      { category: "Seas", level: 0, words: ["CARIBBEAN", "MEDITERRANEAN", "BALTIC", "CASPIAN"] },
      { category: "Famous Williams", level: 1, words: ["SHAKESPEARE", "SHATNER", "MURRAY", "PRINCE"] },
      { category: "Things that ring", level: 2, words: ["PHONE", "BELL", "ALARM", "DOORBELL"] },
      { category: "Sun ___", level: 3, words: ["BURN", "FLOWER", "ROOF", "DAY"] }
    ]
  },
  {
    id: 35,
    groups: [
      { category: "Cereals", level: 0, words: ["CHEERIOS", "CORNFLAKES", "GRANOLA", "OATMEAL"] },
      { category: "Greek gods", level: 1, words: ["ZEUS", "APOLLO", "ATHENA", "HERMES"] },
      { category: "Things with a lid", level: 2, words: ["POT", "JAR", "TRUNK", "COFFIN"] },
      { category: "Play ___", level: 3, words: ["GROUND", "WRIGHT", "MATE", "OFF"] }
    ]
  },
  {
    id: 36,
    groups: [
      { category: "Citrus fruits", level: 0, words: ["LEMON", "LIME", "GRAPEFRUIT", "TANGERINE"] },
      { category: "Card suits", level: 1, words: ["CLUB", "DIAMOND", "HEART", "SPADE"] },
      { category: "Things in a gym", level: 2, words: ["TREADMILL", "DUMBBELL", "MAT", "LOCKER"] },
      { category: "Cross ___", level: 3, words: ["WORD", "BOW", "ROADS", "CHECK"] }
    ]
  },
  {
    id: 37,
    groups: [
      { category: "Sharks", level: 0, words: ["HAMMERHEAD", "GREAT WHITE", "BULL", "TIGER"] },
      { category: "Things in a park", level: 1, words: ["BENCH", "FOUNTAIN", "SWING", "POND"] },
      { category: "Words that mean 'angry'", level: 2, words: ["FURIOUS", "LIVID", "IRATE", "CROSS"] },
      { category: "Green ___", level: 3, words: ["HOUSE", "PEACE", "THUMB", "CARD"] }
    ]
  },
  {
    id: 38,
    groups: [
      { category: "Body parts", level: 0, words: ["ELBOW", "KNEE", "SHOULDER", "ANKLE"] },
      { category: "Things that float", level: 1, words: ["CORK", "BALLOON", "RAFT", "CLOUD"] },
      { category: "Dunder Mifflin employees", level: 2, words: ["DWIGHT", "MICHAEL", "JIM", "STANLEY"] },
      { category: "___ point", level: 3, words: ["GUN", "VIEW", "BREAK", "CHECK"] }
    ]
  },
  {
    id: 39,
    groups: [
      { category: "Deserts", level: 0, words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things with handles", level: 1, words: ["MUG", "SUITCASE", "DOOR", "PAN"] },
      { category: "Words associated with royalty", level: 2, words: ["CROWN", "THRONE", "SCEPTER", "PALACE"] },
      { category: "Over ___", level: 3, words: ["BOARD", "FLOW", "HAUL", "SIGHT"] }
    ]
  },
  {
    id: 40,
    groups: [
      { category: "Whale types", level: 0, words: ["BLUE", "HUMPBACK", "BELUGA", "ORCA"] },
      { category: "TV show formats", level: 1, words: ["SITCOM", "DRAMA", "REALITY", "DOCUMENTARY"] },
      { category: "Things that grow", level: 2, words: ["PLANT", "HAIR", "CRYSTAL", "SAVINGS"] },
      { category: "Top ___", level: 3, words: ["NOTCH", "SOIL", "SECRET", "GUN"] }
    ]
  },
  {
    id: 41,
    groups: [
      { category: "Volcanoes", level: 0, words: ["VESUVIUS", "ETNA", "FUJI", "KRAKATOA"] },
      { category: "Types of bread", level: 1, words: ["SOURDOUGH", "BAGUETTE", "PUMPERNICKEL", "FOCACCIA"] },
      { category: "Things with buttons", level: 2, words: ["SHIRT", "ELEVATOR", "REMOTE", "ACCORDION"] },
      { category: "Half ___", level: 3, words: ["TIME", "BACK", "HEARTED", "WAY"] }
    ]
  },
  {
    id: 42,
    groups: [
      { category: "Mushrooms", level: 0, words: ["SHIITAKE", "PORTOBELLO", "TRUFFLE", "CHANTERELLE"] },
      { category: "Studio Ghibli films", level: 1, words: ["SPIRITED AWAY", "TOTORO", "PONYO", "HOWL"] },
      { category: "Things with scales", level: 2, words: ["FISH", "PIANO", "MAP", "JUSTICE"] },
      { category: "Short ___", level: 3, words: ["CUT", "CAKE", "STOP", "HAND"] }
    ]
  },
  {
    id: 43,
    groups: [
      { category: "Mountain ranges", level: 0, words: ["ALPS", "ANDES", "ROCKIES", "HIMALAYAS"] },
      { category: "Things at a wedding", level: 1, words: ["BOUQUET", "VEIL", "CAKE", "TOAST"] },
      { category: "Words meaning 'fake'", level: 2, words: ["SHAM", "BOGUS", "PHONY", "MOCK"] },
      { category: "___ game", level: 3, words: ["BALL", "BOARD", "END", "BLAME"] }
    ]
  },
  {
    id: 44,
    groups: [
      { category: "Constellations", level: 0, words: ["ORION", "SCORPIUS", "CASSIOPEIA", "PEGASUS"] },
      { category: "Types of wine", level: 1, words: ["MERLOT", "RIESLING", "SHIRAZ", "CHARDONNAY"] },
      { category: "Monopoly spaces", level: 2, words: ["BOARDWALK", "JAIL", "PARK PLACE", "CHANCE"] },
      { category: "Day ___", level: 3, words: ["DREAM", "BREAK", "LIGHT", "CARE"] }
    ]
  },
  {
    id: 45,
    groups: [
      { category: "Baked goods", level: 0, words: ["SCONE", "MUFFIN", "PRETZEL", "DONUT"] },
      { category: "Currencies of the world", level: 1, words: ["YEN", "PESO", "RUPEE", "EURO"] },
      { category: "Things that are sticky", level: 2, words: ["TAPE", "HONEY", "GLUE", "SAP"] },
      { category: "Wild ___", level: 3, words: ["FIRE", "CARD", "LIFE", "GOOSE"] }
    ]
  },
  {
    id: 46,
    groups: [
      { category: "Oceans", level: 0, words: ["ATLANTIC", "PACIFIC", "INDIAN", "ARCTIC"] },
      { category: "Things in a toolbox", level: 1, words: ["LEVEL", "SAW", "TAPE", "NAIL"] },
      { category: "Words meaning 'walk'", level: 2, words: ["STROLL", "MARCH", "STRIDE", "TRUDGE"] },
      { category: "Blue ___", level: 3, words: ["PRINT", "BERRY", "BELL", "BIRD"] }
    ]
  },
  {
    id: 47,
    groups: [
      { category: "Grains", level: 0, words: ["RICE", "WHEAT", "BARLEY", "QUINOA"] },
      { category: "Things with wings", level: 1, words: ["AIRPLANE", "BAT", "EAGLE", "MOTH"] },
      { category: "Shakespearean characters", level: 2, words: ["HAMLET", "JULIET", "OTHELLO", "MACBETH"] },
      { category: "___ head", level: 3, words: ["DEAD", "FIGURE", "RED", "BALD"] }
    ]
  },
  {
    id: 48,
    groups: [
      { category: "Martial arts movies", level: 0, words: ["CROUCHING TIGER", "KILL BILL", "RUSH HOUR", "IP MAN"] },
      { category: "Types of knot", level: 1, words: ["BOWLINE", "CLOVE", "REEF", "SLIP"] },
      { category: "Seinfeld characters", level: 2, words: ["KRAMER", "ELAINE", "GEORGE", "NEWMAN"] },
      { category: "Silver ___", level: 3, words: ["SCREEN", "LINING", "TONGUE", "FOX"] }
    ]
  },
  {
    id: 49,
    groups: [
      { category: "Soups", level: 0, words: ["MINESTRONE", "CHOWDER", "GUMBO", "GAZPACHO"] },
      { category: "Types of cloud", level: 1, words: ["ALTO", "CIRRO", "STRATO", "NIMBO"] },
      { category: "Fictional islands", level: 2, words: ["NEVERLAND", "SKULL", "TRACEY", "AVALON"] },
      { category: "Long ___", level: 3, words: ["SHOT", "HORN", "ISLAND", "BOW"] }
    ]
  },
  {
    id: 50,
    groups: [
      { category: "Famous Michaels", level: 0, words: ["JORDAN", "JACKSON", "SCOTT", "PHELPS"] },
      { category: "Types of art", level: 1, words: ["SCULPTURE", "MOSAIC", "MURAL", "PORTRAIT"] },
      { category: "Things with a point", level: 2, words: ["NEEDLE", "PENCIL", "ARROW", "COMPASS"] },
      { category: "Paper ___", level: 3, words: ["CLIP", "WEIGHT", "BACK", "TRAIL"] }
    ]
  },
  {
    id: 51,
    groups: [
      { category: "Wines by color", level: 0, words: ["RED", "WHITE", "ROSE", "ORANGE"] },
      { category: "Things at a concert", level: 1, words: ["SPEAKER", "SPOTLIGHT", "STAGE", "MICROPHONE"] },
      { category: "Words with double O", level: 2, words: ["FLOOD", "BLOOD", "MOOSE", "GOOSE"] },
      { category: "Stone ___", level: 3, words: ["WALL", "COLD", "MASON", "HEDGE"] }
    ]
  },
  {
    id: 52,
    groups: [
      { category: "Islands", level: 0, words: ["BALI", "SICILY", "CRETE", "FIJI"] },
      { category: "Things in a classroom", level: 1, words: ["CHALK", "DESK", "GLOBE", "TEXTBOOK"] },
      { category: "Words meaning 'big'", level: 2, words: ["MASSIVE", "COLOSSAL", "IMMENSE", "VAST"] },
      { category: "Book ___", level: 3, words: ["WORM", "MARK", "KEEPER", "END"] }
    ]
  },
  {
    id: 53,
    groups: [
      { category: "Composers", level: 0, words: ["MOZART", "BEETHOVEN", "BACH", "CHOPIN"] },
      { category: "Things that melt", level: 1, words: ["ICE", "CHEESE", "SNOW", "CHOCOLATE"] },
      { category: "Pixar films", level: 2, words: ["UP", "COCO", "BRAVE", "WALL-E"] },
      { category: "Round ___", level: 3, words: ["TABLE", "TRIP", "ABOUT", "UP"] }
    ]
  },
  {
    id: 54,
    groups: [
      { category: "Canines", level: 0, words: ["WOLF", "FOX", "COYOTE", "JACKAL"] },
      { category: "Things in a cockpit", level: 1, words: ["THROTTLE", "RUDDER", "ALTIMETER", "YOKE"] },
      { category: "Words ending in -tion", level: 2, words: ["NATION", "STATION", "PORTION", "MOTION"] },
      { category: "Hard ___", level: 3, words: ["BALL", "WARE", "SHIP", "COVER"] }
    ]
  },
  {
    id: 55,
    groups: [
      { category: "Peppers", level: 0, words: ["JALAPENO", "HABANERO", "CAYENNE", "SERRANO"] },
      { category: "Parts of a book", level: 1, words: ["CHAPTER", "INDEX", "SPINE", "COVER"] },
      { category: "Bond films", level: 2, words: ["GOLDFINGER", "SKYFALL", "SPECTRE", "THUNDERBALL"] },
      { category: "Main ___", level: 3, words: ["STREAM", "LAND", "FRAME", "STAY"] }
    ]
  },
  {
    id: 56,
    groups: [
      { category: "Fast food chains", level: 0, words: ["WENDYS", "SUBWAY", "POPEYES", "ARBYS"] },
      { category: "Things with a crown", level: 1, words: ["KING", "TOOTH", "ROLEX", "STATUE"] },
      { category: "Words meaning 'leave'", level: 2, words: ["DEPART", "EXIT", "BAIL", "FLEE"] },
      { category: "Side ___", level: 3, words: ["KICK", "LINE", "BURNS", "TRACK"] }
    ]
  },
  {
    id: 57,
    groups: [
      { category: "Beans", level: 0, words: ["KIDNEY", "BLACK", "PINTO", "LIMA"] },
      { category: "Things at a bar", level: 1, words: ["STOOL", "TAP", "COASTER", "JUKEBOX"] },
      { category: "Famous Roberts", level: 2, words: ["DOWNEY", "DENIRO", "REDFORD", "PLANT"] },
      { category: "Rain ___", level: 3, words: ["BOW", "DROP", "COAT", "FOREST"] }
    ]
  },
  {
    id: 58,
    groups: [
      { category: "Primates", level: 0, words: ["GORILLA", "CHIMP", "ORANGUTAN", "LEMUR"] },
      { category: "Things with a dial", level: 1, words: ["WATCH", "RADIO", "OVEN", "SAFE"] },
      { category: "Tarantino films", level: 2, words: ["PULP FICTION", "DJANGO", "RESERVOIR DOGS", "JACKIE BROWN"] },
      { category: "High ___", level: 3, words: ["FIVE", "LIGHT", "WAY", "JACK"] }
    ]
  },
  {
    id: 59,
    groups: [
      { category: "Lakes", level: 0, words: ["MICHIGAN", "VICTORIA", "TAHOE", "COMO"] },
      { category: "Things that buzz", level: 1, words: ["BEE", "ALARM", "PHONE", "RAZOR"] },
      { category: "Words meaning 'steal'", level: 2, words: ["SWIPE", "PINCH", "NICK", "LIFT"] },
      { category: "___ board", level: 3, words: ["CARD", "SKATE", "KEY", "BLACK"] }
    ]
  },
  {
    id: 60,
    groups: [
      { category: "Metals", level: 0, words: ["BRONZE", "STEEL", "TIN", "PLATINUM"] },
      { category: "Things at a campsite", level: 1, words: ["TENT", "LANTERN", "COOLER", "FIREWOOD"] },
      { category: "Disney princesses", level: 2, words: ["MOANA", "ARIEL", "JASMINE", "MULAN"] },
      { category: "Blind ___", level: 3, words: ["SPOT", "FOLD", "SIDE", "DATE"] }
    ]
  },
  {
    id: 61,
    groups: [
      { category: "Dairy products", level: 0, words: ["BUTTER", "YOGURT", "CREAM", "WHEY"] },
      { category: "Things with a net", level: 1, words: ["TENNIS", "FISHING", "BASKETBALL", "VOLLEYBALL"] },
      { category: "Words meaning 'surprise'", level: 2, words: ["SHOCK", "STUN", "STARTLE", "JAR"] },
      { category: "Bed ___", level: 3, words: ["BUG", "ROCK", "SIDE", "ROOM"] }
    ]
  },
  {
    id: 62,
    groups: [
      { category: "Cheeses of France", level: 0, words: ["BRIE", "CAMEMBERT", "ROQUEFORT", "GRUYERE"] },
      { category: "Words meaning 'run'", level: 1, words: ["SPRINT", "DASH", "BOLT", "GALLOP"] },
      { category: "Things with a shell", level: 2, words: ["TURTLE", "EGG", "LOBSTER", "NUT"] },
      { category: "Land ___", level: 3, words: ["LORD", "MARK", "SLIDE", "MINE"] }
    ]
  },
  {
    id: 63,
    groups: [
      { category: "Rodents", level: 0, words: ["HAMSTER", "SQUIRREL", "MOUSE", "BEAVER"] },
      { category: "Things at an airport", level: 1, words: ["TERMINAL", "RUNWAY", "GATE", "LOUNGE"] },
      { category: "TV show creators", level: 2, words: ["SORKIN", "SIMON", "CHASE", "GILLIGAN"] },
      { category: "Ring ___", level: 3, words: ["LEADER", "WORM", "TONE", "MASTER"] }
    ]
  },
  {
    id: 64,
    groups: [
      { category: "Root vegetables", level: 0, words: ["BEET", "TURNIP", "RADISH", "PARSNIP"] },
      { category: "Things with a horn", level: 1, words: ["UNICORN", "RHINO", "CAR", "TRUMPET"] },
      { category: "Words meaning 'small'", level: 2, words: ["TINY", "MINUTE", "PETITE", "WEE"] },
      { category: "Flat ___", level: 3, words: ["IRON", "BED", "TIRE", "LINE"] }
    ]
  },
  {
    id: 65,
    groups: [
      { category: "Legumes", level: 0, words: ["LENTIL", "CHICKPEA", "SOYBEAN", "PEANUT"] },
      { category: "Things that crack", level: 1, words: ["WHIP", "KNUCKLE", "ICE", "EGG"] },
      { category: "Famous paintings", level: 2, words: ["MONA LISA", "STARRY NIGHT", "THE SCREAM", "GUERNICA"] },
      { category: "Dark ___", level: 3, words: ["HORSE", "MATTER", "ROOM", "WEB"] }
    ]
  }
];
