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
      { category: "Planets visible to naked eye", level: 0, words: ["MARS", "JUPITER", "VENUS", "SATURN"] },
      { category: "Types of cheese", level: 1, words: ["SWISS", "PARMESAN", "STILTON", "MOZZARELLA"] },
      { category: "Things in space", level: 2, words: ["COMET", "ASTEROID", "NEBULA", "QUASAR"] },
      { category: "___ house", level: 3, words: ["WARE", "GREEN", "PLAY", "POWER"] }
    ]
  },
  {
    id: 24,
    groups: [
      { category: "Tools", level: 0, words: ["HAMMER", "WRENCH", "DRILL", "PLIERS"] },
      { category: "Dips and sauces", level: 1, words: ["HUMMUS", "SALSA", "GUACAMOLE", "TZATZIKI"] },
      { category: "Things that tick", level: 2, words: ["CLOCK", "BOMB", "HEART", "METRONOME"] },
      { category: "Back ___", level: 3, words: ["FIRE", "BONE", "YARD", "STAGE"] }
    ]
  },
  {
    id: 25,
    groups: [
      { category: "Winter sports", level: 0, words: ["SKIING", "HOCKEY", "CURLING", "LUGE"] },
      { category: "Famous Johns", level: 1, words: ["LENNON", "WAYNE", "ADAMS", "KENNEDY"] },
      { category: "Things that drip", level: 2, words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Out ___", level: 3, words: ["LAW", "BREAK", "LINE", "FIELD"] }
    ]
  },
  {
    id: 26,
    groups: [
      { category: "Herbs", level: 0, words: ["BASIL", "THYME", "OREGANO", "MINT"] },
      { category: "Fictional detectives", level: 1, words: ["SHERLOCK", "POIROT", "COLUMBO", "MORSE"] },
      { category: "Things with layers", level: 2, words: ["ONION", "CAKE", "LASAGNA", "EARTH"] },
      { category: "___ work", level: 3, words: ["NET", "FIRE", "FRAME", "CLOCK"] }
    ]
  },
  {
    id: 27,
    groups: [
      { category: "Tropical fruits", level: 0, words: ["COCONUT", "PINEAPPLE", "BANANA", "KIWI"] },
      { category: "Types of music", level: 1, words: ["JAZZ", "BLUES", "REGGAE", "SOUL"] },
      { category: "Things at a carnival", level: 2, words: ["CAROUSEL", "COTTON CANDY", "FERRIS WHEEL", "BUMPER CARS"] },
      { category: "Moon ___", level: 3, words: ["LIGHT", "SHINE", "WALK", "STONE"] }
    ]
  },
  {
    id: 28,
    groups: [
      { category: "Fish", level: 0, words: ["SALMON", "TROUT", "COD", "BASS"] },
      { category: "Things in an office", level: 1, words: ["STAPLER", "PRINTER", "FOLDER", "BINDER"] },
      { category: "Words meaning 'happy'", level: 2, words: ["GLAD", "JOLLY", "MERRY", "CONTENT"] },
      { category: "Tooth ___", level: 3, words: ["BRUSH", "PASTE", "FAIRY", "PICK"] }
    ]
  },
  {
    id: 29,
    groups: [
      { category: "Asian countries", level: 0, words: ["JAPAN", "CHINA", "INDIA", "VIETNAM"] },
      { category: "Sandwich types", level: 1, words: ["CLUB", "WRAP", "PANINI", "SUB"] },
      { category: "Things that bounce", level: 2, words: ["BALL", "CHECK", "SPRING", "TRAMPOLINE"] },
      { category: "Dead ___", level: 3, words: ["LINE", "LOCK", "END", "PAN"] }
    ]
  },
  {
    id: 30,
    groups: [
      { category: "Cat breeds", level: 0, words: ["PERSIAN", "SIAMESE", "BENGAL", "TABBY"] },
      { category: "Shapes", level: 1, words: ["HEXAGON", "TRIANGLE", "PENTAGON", "OCTAGON"] },
      { category: "Things that glow in the dark", level: 2, words: ["STARS", "FIREFLY", "JELLYFISH", "RADIUM"] },
      { category: "Light ___", level: 3, words: ["HOUSE", "WEIGHT", "YEAR", "NING"] }
    ]
  },
  {
    id: 31,
    groups: [
      { category: "African animals", level: 0, words: ["ELEPHANT", "GIRAFFE", "ZEBRA", "LION"] },
      { category: "Types of tea", level: 1, words: ["CHAI", "MATCHA", "OOLONG", "EARL GREY"] },
      { category: "Things at the beach", level: 2, words: ["SANDCASTLE", "SURFBOARD", "SHELL", "TOWEL"] },
      { category: "Iron ___", level: 3, words: ["MAN", "CLAD", "CURTAIN", "BOARD"] }
    ]
  },
  {
    id: 32,
    groups: [
      { category: "Cereals", level: 0, words: ["CHEERIOS", "CORNFLAKES", "GRANOLA", "OATMEAL"] },
      { category: "Greek gods", level: 1, words: ["ZEUS", "APOLLO", "ATHENA", "HERMES"] },
      { category: "Things with a lid", level: 2, words: ["POT", "JAR", "TRUNK", "COFFIN"] },
      { category: "Play ___", level: 3, words: ["GROUND", "WRIGHT", "MATE", "OFF"] }
    ]
  },
  {
    id: 33,
    groups: [
      { category: "Citrus fruits", level: 0, words: ["LEMON", "LIME", "GRAPEFRUIT", "TANGERINE"] },
      { category: "Card suits", level: 1, words: ["CLUB", "DIAMOND", "HEART", "SPADE"] },
      { category: "Things in a gym", level: 2, words: ["TREADMILL", "DUMBBELL", "MAT", "LOCKER"] },
      { category: "Cross ___", level: 3, words: ["WORD", "BOW", "ROADS", "CHECK"] }
    ]
  },
  {
    id: 34,
    groups: [
      { category: "Sharks", level: 0, words: ["HAMMERHEAD", "GREAT WHITE", "BULL", "TIGER"] },
      { category: "Things in a park", level: 1, words: ["BENCH", "FOUNTAIN", "SWING", "POND"] },
      { category: "Words that mean 'angry'", level: 2, words: ["FURIOUS", "LIVID", "IRATE", "CROSS"] },
      { category: "Green ___", level: 3, words: ["HOUSE", "PEACE", "THUMB", "CARD"] }
    ]
  },
  {
    id: 35,
    groups: [
      { category: "Body parts", level: 0, words: ["ELBOW", "KNEE", "SHOULDER", "ANKLE"] },
      { category: "Things that float", level: 1, words: ["CORK", "BALLOON", "RAFT", "CLOUD"] },
      { category: "Dunder Mifflin employees", level: 2, words: ["DWIGHT", "MICHAEL", "JIM", "STANLEY"] },
      { category: "___ point", level: 3, words: ["GUN", "VIEW", "BREAK", "CHECK"] }
    ]
  },
  {
    id: 36,
    groups: [
      { category: "Deserts", level: 0, words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things with handles", level: 1, words: ["MUG", "SUITCASE", "DOOR", "PAN"] },
      { category: "Words associated with royalty", level: 2, words: ["CROWN", "THRONE", "SCEPTER", "PALACE"] },
      { category: "Over ___", level: 3, words: ["BOARD", "FLOW", "HAUL", "SIGHT"] }
    ]
  },
  {
    id: 37,
    groups: [
      { category: "Mountain ranges", level: 0, words: ["ALPS", "ANDES", "ROCKIES", "HIMALAYAS"] },
      { category: "Things at a wedding", level: 1, words: ["BOUQUET", "VEIL", "CAKE", "TOAST"] },
      { category: "Words meaning 'fake'", level: 2, words: ["SHAM", "BOGUS", "PHONY", "MOCK"] },
      { category: "___ game", level: 3, words: ["BALL", "BOARD", "END", "BLAME"] }
    ]
  },
  {
    id: 38,
    groups: [
      { category: "Constellations", level: 0, words: ["ORION", "SCORPIUS", "CASSIOPEIA", "PEGASUS"] },
      { category: "Types of wine", level: 1, words: ["MERLOT", "RIESLING", "SHIRAZ", "CHARDONNAY"] },
      { category: "Monopoly spaces", level: 2, words: ["BOARDWALK", "JAIL", "PARK PLACE", "CHANCE"] },
      { category: "Day ___", level: 3, words: ["DREAM", "BREAK", "LIGHT", "CARE"] }
    ]
  },
  {
    id: 39,
    groups: [
      { category: "Baked goods", level: 0, words: ["SCONE", "MUFFIN", "PRETZEL", "DONUT"] },
      { category: "Currencies of the world", level: 1, words: ["YEN", "PESO", "RUPEE", "EURO"] },
      { category: "Things that are sticky", level: 2, words: ["TAPE", "HONEY", "GLUE", "SAP"] },
      { category: "Wild ___", level: 3, words: ["FIRE", "CARD", "LIFE", "GOOSE"] }
    ]
  },
  {
    id: 40,
    groups: [
      { category: "Oceans", level: 0, words: ["ATLANTIC", "PACIFIC", "INDIAN", "ARCTIC"] },
      { category: "Things in a toolbox", level: 1, words: ["LEVEL", "SAW", "TAPE", "NAIL"] },
      { category: "Words meaning 'walk'", level: 2, words: ["STROLL", "MARCH", "STRIDE", "TRUDGE"] },
      { category: "Blue ___", level: 3, words: ["PRINT", "BERRY", "BELL", "BIRD"] }
    ]
  },
  {
    id: 41,
    groups: [
      { category: "Grains", level: 0, words: ["RICE", "WHEAT", "BARLEY", "QUINOA"] },
      { category: "Things with wings", level: 1, words: ["AIRPLANE", "BAT", "EAGLE", "MOTH"] },
      { category: "Shakespearean characters", level: 2, words: ["HAMLET", "JULIET", "OTHELLO", "MACBETH"] },
      { category: "___ head", level: 3, words: ["DEAD", "FIGURE", "RED", "BALD"] }
    ]
  },
  {
    id: 42,
    groups: [
      { category: "Martial arts movies", level: 0, words: ["CROUCHING TIGER", "KILL BILL", "RUSH HOUR", "IP MAN"] },
      { category: "Types of knot", level: 1, words: ["BOWLINE", "CLOVE", "REEF", "SLIP"] },
      { category: "Seinfeld characters", level: 2, words: ["KRAMER", "ELAINE", "GEORGE", "NEWMAN"] },
      { category: "Silver ___", level: 3, words: ["SCREEN", "LINING", "TONGUE", "FOX"] }
    ]
  },
  {
    id: 43,
    groups: [
      { category: "Soups", level: 0, words: ["MINESTRONE", "CHOWDER", "GUMBO", "GAZPACHO"] },
      { category: "Types of cloud", level: 1, words: ["ALTO", "CIRRO", "STRATO", "NIMBO"] },
      { category: "Fictional islands", level: 2, words: ["NEVERLAND", "SKULL", "TRACEY", "AVALON"] },
      { category: "Long ___", level: 3, words: ["SHOT", "HORN", "ISLAND", "BOW"] }
    ]
  },
  {
    id: 44,
    groups: [
      { category: "Famous Michaels", level: 0, words: ["JORDAN", "JACKSON", "SCOTT", "PHELPS"] },
      { category: "Types of art", level: 1, words: ["SCULPTURE", "MOSAIC", "MURAL", "PORTRAIT"] },
      { category: "Things with a point", level: 2, words: ["NEEDLE", "PENCIL", "ARROW", "COMPASS"] },
      { category: "Paper ___", level: 3, words: ["CLIP", "WEIGHT", "BACK", "TRAIL"] }
    ]
  },
  {
    id: 45,
    groups: [
      { category: "Wines by color", level: 0, words: ["RED", "WHITE", "ROSE", "ORANGE"] },
      { category: "Things at a concert", level: 1, words: ["SPEAKER", "SPOTLIGHT", "STAGE", "MICROPHONE"] },
      { category: "Words with double O", level: 2, words: ["FLOOD", "BLOOD", "MOOSE", "GOOSE"] },
      { category: "Stone ___", level: 3, words: ["WALL", "COLD", "MASON", "HEDGE"] }
    ]
  },
  {
    id: 46,
    groups: [
      { category: "Islands", level: 0, words: ["BALI", "SICILY", "CRETE", "FIJI"] },
      { category: "Things in a classroom", level: 1, words: ["CHALK", "DESK", "GLOBE", "TEXTBOOK"] },
      { category: "Words meaning 'big'", level: 2, words: ["MASSIVE", "COLOSSAL", "IMMENSE", "VAST"] },
      { category: "Book ___", level: 3, words: ["WORM", "MARK", "KEEPER", "END"] }
    ]
  },
  {
    id: 47,
    groups: [
      { category: "Composers", level: 0, words: ["MOZART", "BEETHOVEN", "BACH", "CHOPIN"] },
      { category: "Things that melt", level: 1, words: ["ICE", "CHEESE", "SNOW", "CHOCOLATE"] },
      { category: "Pixar films", level: 2, words: ["UP", "COCO", "BRAVE", "WALL-E"] },
      { category: "Round ___", level: 3, words: ["TABLE", "TRIP", "ABOUT", "UP"] }
    ]
  },
  {
    id: 48,
    groups: [
      { category: "Canines", level: 0, words: ["WOLF", "FOX", "COYOTE", "JACKAL"] },
      { category: "Things in a cockpit", level: 1, words: ["THROTTLE", "RUDDER", "ALTIMETER", "YOKE"] },
      { category: "Words ending in -tion", level: 2, words: ["NATION", "STATION", "PORTION", "MOTION"] },
      { category: "Hard ___", level: 3, words: ["BALL", "WARE", "SHIP", "COVER"] }
    ]
  },
  {
    id: 49,
    groups: [
      { category: "Fast food chains", level: 0, words: ["WENDYS", "SUBWAY", "POPEYES", "ARBYS"] },
      { category: "Things with a crown", level: 1, words: ["KING", "TOOTH", "ROLEX", "STATUE"] },
      { category: "Words meaning 'leave'", level: 2, words: ["DEPART", "EXIT", "BAIL", "FLEE"] },
      { category: "Side ___", level: 3, words: ["KICK", "LINE", "BURNS", "TRACK"] }
    ]
  },
  {
    id: 50,
    groups: [
      { category: "Beans", level: 0, words: ["KIDNEY", "BLACK", "PINTO", "LIMA"] },
      { category: "Things at a bar", level: 1, words: ["STOOL", "TAP", "COASTER", "JUKEBOX"] },
      { category: "Famous Roberts", level: 2, words: ["DOWNEY", "DENIRO", "REDFORD", "PLANT"] },
      { category: "Rain ___", level: 3, words: ["BOW", "DROP", "COAT", "FOREST"] }
    ]
  },
  {
    id: 51,
    groups: [
      { category: "Primates", level: 0, words: ["GORILLA", "CHIMP", "ORANGUTAN", "LEMUR"] },
      { category: "Things with a dial", level: 1, words: ["WATCH", "RADIO", "OVEN", "SAFE"] },
      { category: "Tarantino films", level: 2, words: ["PULP FICTION", "DJANGO", "RESERVOIR DOGS", "JACKIE BROWN"] },
      { category: "High ___", level: 3, words: ["FIVE", "LIGHT", "WAY", "JACK"] }
    ]
  },
  {
    id: 52,
    groups: [
      { category: "Lakes", level: 0, words: ["MICHIGAN", "VICTORIA", "TAHOE", "COMO"] },
      { category: "Things that buzz", level: 1, words: ["BEE", "ALARM", "PHONE", "RAZOR"] },
      { category: "Words meaning 'steal'", level: 2, words: ["SWIPE", "PINCH", "NICK", "LIFT"] },
      { category: "___ board", level: 3, words: ["CARD", "SKATE", "KEY", "BLACK"] }
    ]
  },
  {
    id: 53,
    groups: [
      { category: "Metals", level: 0, words: ["BRONZE", "STEEL", "TIN", "PLATINUM"] },
      { category: "Things at a campsite", level: 1, words: ["TENT", "LANTERN", "COOLER", "FIREWOOD"] },
      { category: "Disney princesses", level: 2, words: ["MOANA", "ARIEL", "JASMINE", "MULAN"] },
      { category: "Blind ___", level: 3, words: ["SPOT", "FOLD", "SIDE", "DATE"] }
    ]
  },
  {
    id: 54,
    groups: [
      { category: "Dairy products", level: 0, words: ["BUTTER", "YOGURT", "CREAM", "WHEY"] },
      { category: "Things with a net", level: 1, words: ["TENNIS", "FISHING", "BASKETBALL", "VOLLEYBALL"] },
      { category: "Words meaning 'surprise'", level: 2, words: ["SHOCK", "STUN", "STARTLE", "JAR"] },
      { category: "Bed ___", level: 3, words: ["BUG", "ROCK", "SIDE", "ROOM"] }
    ]
  },
  {
    id: 55,
    groups: [
      { category: "Cheeses of France", level: 0, words: ["BRIE", "CAMEMBERT", "ROQUEFORT", "GRUYERE"] },
      { category: "Words meaning 'run'", level: 1, words: ["SPRINT", "DASH", "BOLT", "GALLOP"] },
      { category: "Things with a shell", level: 2, words: ["TURTLE", "EGG", "LOBSTER", "NUT"] },
      { category: "Land ___", level: 3, words: ["LORD", "MARK", "SLIDE", "MINE"] }
    ]
  },
  {
    id: 56,
    groups: [
      { category: "Rodents", level: 0, words: ["HAMSTER", "SQUIRREL", "MOUSE", "BEAVER"] },
      { category: "Things at an airport", level: 1, words: ["TERMINAL", "RUNWAY", "GATE", "LOUNGE"] },
      { category: "TV show creators", level: 2, words: ["SORKIN", "SIMON", "CHASE", "GILLIGAN"] },
      { category: "Ring ___", level: 3, words: ["LEADER", "WORM", "TONE", "MASTER"] }
    ]
  },
  {
    id: 57,
    groups: [
      { category: "Root vegetables", level: 0, words: ["BEET", "TURNIP", "RADISH", "PARSNIP"] },
      { category: "Things with a horn", level: 1, words: ["UNICORN", "RHINO", "CAR", "TRUMPET"] },
      { category: "Words meaning 'small'", level: 2, words: ["TINY", "MINUTE", "PETITE", "WEE"] },
      { category: "Flat ___", level: 3, words: ["IRON", "BED", "TIRE", "LINE"] }
    ]
  },
  {
    id: 58,
    groups: [
      { category: "Legumes", level: 0, words: ["LENTIL", "CHICKPEA", "SOYBEAN", "PEANUT"] },
      { category: "Things that crack", level: 1, words: ["WHIP", "KNUCKLE", "ICE", "EGG"] },
      { category: "Famous paintings", level: 2, words: ["MONA LISA", "STARRY NIGHT", "THE SCREAM", "GUERNICA"] },
      { category: "Dark ___", level: 3, words: ["HORSE", "MATTER", "ROOM", "WEB"] }
    ]
  },
  {
    id: 59,
    groups: [
      { category: "Olympic sports", level: 0, words: ["FENCING", "ROWING", "ARCHERY", "JUDO"] },
      { category: "Words with double O", level: 1, words: ["VOODOO", "BAMBOO", "TABOO", "SHAMPOO"] },
      { category: "Famous bridges", level: 2, words: ["BROOKLYN", "TOWER", "RIALTO", "LONDON"] },
      { category: "Key ___", level: 3, words: ["CHAIN", "BOARD", "STONE", "NOTE"] }
    ]
  },
  {
    id: 60,
    groups: [
      { category: "Breakfast foods", level: 0, words: ["WAFFLE", "PANCAKE", "OMELETTE", "CREPE"] },
      { category: "Shades of blue", level: 1, words: ["NAVY", "COBALT", "TEAL", "AZURE"] },
      { category: "Types of storms", level: 2, words: ["BLIZZARD", "MONSOON", "TYPHOON", "CYCLONE"] },
      { category: "Gold ___", level: 3, words: ["FISH", "MINE", "RUSH", "DIGGER"] }
    ]
  },
  {
    id: 61,
    groups: [
      { category: "Wild cats", level: 0, words: ["LYNX", "OCELOT", "CHEETAH", "BOBCAT"] },
      { category: "Things in a wallet", level: 1, words: ["CASH", "LICENSE", "RECEIPT", "PHOTO"] },
      { category: "Words ending in -tion", level: 2, words: ["NATION", "STATION", "POTION", "RATION"] },
      { category: "Rock ___", level: 3, words: ["BOTTOM", "STAR", "SLIDE", "BAND"] }
    ]
  },
  {
    id: 62,
    groups: [
      { category: "Gemstones", level: 0, words: ["EMERALD", "TOPAZ", "OPAL", "GARNET"] },
      { category: "Kitchen appliances", level: 1, words: ["BLENDER", "TOASTER", "MIXER", "KETTLE"] },
      { category: "Famous explorers", level: 2, words: ["COLUMBUS", "MAGELLAN", "DRAKE", "POLO"] },
      { category: "Paper ___", level: 3, words: ["WEIGHT", "CLIP", "TRAIL", "BACK"] }
    ]
  },
  {
    id: 63,
    groups: [
      { category: "Berries", level: 0, words: ["RASPBERRY", "BLACKBERRY", "CRANBERRY", "GOOSEBERRY"] },
      { category: "Fabrics", level: 1, words: ["SILK", "DENIM", "COTTON", "LINEN"] },
      { category: "Mythical creatures", level: 2, words: ["GRIFFIN", "PHOENIX", "DRAGON", "CENTAUR"] },
      { category: "Fire ___", level: 3, words: ["PLACE", "WORK", "TRUCK", "FLY"] }
    ]
  },
  {
    id: 64,
    groups: [
      { category: "Nuts", level: 0, words: ["WALNUT", "CASHEW", "PECAN", "ALMOND"] },
      { category: "Things that spin", level: 1, words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Shakespeare plays", level: 2, words: ["HAMLET", "OTHELLO", "MACBETH", "TEMPEST"] },
      { category: "Snow ___", level: 3, words: ["BALL", "FLAKE", "MAN", "BOARD"] }
    ]
  },
  {
    id: 65,
    groups: [
      { category: "Rivers", level: 0, words: ["DANUBE", "THAMES", "SEINE", "RHINE"] },
      { category: "Tools", level: 1, words: ["HAMMER", "WRENCH", "PLIERS", "CHISEL"] },
      { category: "Types of music", level: 2, words: ["REGGAE", "GOSPEL", "GRUNGE", "PUNK"] },
      { category: "Green ___", level: 3, words: ["HOUSE", "THUMB", "LIGHT", "CARD"] }
    ]
  },
  {
    id: 66,
    groups: [
      { category: "Deserts", level: 0, words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things with wings", level: 1, words: ["EAGLE", "AIRPLANE", "BUTTERFLY", "ANGEL"] },
      { category: "Words meaning 'angry'", level: 2, words: ["FURIOUS", "LIVID", "IRATE", "CROSS"] },
      { category: "Blood ___", level: 3, words: ["HOUND", "BANK", "PRESSURE", "TYPE"] }
    ]
  },
  {
    id: 67,
    groups: [
      { category: "Spices", level: 0, words: ["CUMIN", "SAFFRON", "PAPRIKA", "NUTMEG"] },
      { category: "Board games", level: 1, words: ["CHESS", "RISK", "CLUE", "SORRY"] },
      { category: "Famous scientists", level: 2, words: ["NEWTON", "CURIE", "DARWIN", "TESLA"] },
      { category: "Time ___", level: 3, words: ["ZONE", "LINE", "OUT", "TRAVEL"] }
    ]
  },
  {
    id: 68,
    groups: [
      { category: "Cheeses", level: 0, words: ["GOUDA", "BRIE", "FETA", "CHEDDAR"] },
      { category: "Things that sting", level: 1, words: ["WASP", "JELLYFISH", "NETTLE", "SCORPION"] },
      { category: "Words meaning 'happy'", level: 2, words: ["ELATED", "JOYFUL", "MERRY", "BLISSFUL"] },
      { category: "Water ___", level: 3, words: ["FALL", "MARK", "PROOF", "MELON"] }
    ]
  },
  {
    id: 69,
    groups: [
      { category: "Dog breeds", level: 0, words: ["POODLE", "BEAGLE", "BOXER", "HUSKY"] },
      { category: "Currencies", level: 1, words: ["FRANC", "POUND", "PESO", "YEN"] },
      { category: "Famous mountains", level: 2, words: ["EVEREST", "FUJI", "DENALI", "BLANC"] },
      { category: "Half ___", level: 3, words: ["TIME", "WAY", "BACK", "PIPE"] }
    ]
  },
  {
    id: 70,
    groups: [
      { category: "Herbs", level: 0, words: ["BASIL", "THYME", "SAGE", "DILL"] },
      { category: "Things that glow", level: 1, words: ["CANDLE", "FIREFLY", "NEON", "EMBER"] },
      { category: "Star Wars characters", level: 2, words: ["YODA", "LEIA", "SOLO", "LUKE"] },
      { category: "Full ___", level: 3, words: ["MOON", "HOUSE", "STOP", "TIME"] }
    ]
  },
  {
    id: 71,
    groups: [
      { category: "Oceans", level: 0, words: ["PACIFIC", "ATLANTIC", "INDIAN", "ARCTIC"] },
      { category: "Things that bounce", level: 1, words: ["RUBBER", "TRAMPOLINE", "CHECK", "BALL"] },
      { category: "Types of tea", level: 2, words: ["JASMINE", "CHAMOMILE", "OOLONG", "MATCHA"] },
      { category: "Long ___", level: 3, words: ["SHOT", "BOW", "HORN", "ISLAND"] }
    ]
  },
  {
    id: 72,
    groups: [
      { category: "Marsupials", level: 0, words: ["KOALA", "KANGAROO", "WOMBAT", "POSSUM"] },
      { category: "Things in space", level: 1, words: ["COMET", "ASTEROID", "NEBULA", "QUASAR"] },
      { category: "Palindromes", level: 2, words: ["KAYAK", "LEVEL", "RADAR", "CIVIC"] },
      { category: "Big ___", level: 3, words: ["BANG", "FOOT", "DEAL", "BEN"] }
    ]
  },
  {
    id: 73,
    groups: [
      { category: "Flowers", level: 0, words: ["ORCHID", "DAHLIA", "PEONY", "IRIS"] },
      { category: "Types of hats", level: 1, words: ["FEDORA", "BERET", "SOMBRERO", "TURBAN"] },
      { category: "Greek gods", level: 2, words: ["ZEUS", "ATHENA", "HERMES", "APOLLO"] },
      { category: "Sweet ___", level: 3, words: ["HEART", "TOOTH", "SPOT", "TALK"] }
    ]
  },
  {
    id: 74,
    groups: [
      { category: "Islands", level: 0, words: ["BALI", "FIJI", "CRETE", "MALTA"] },
      { category: "Things that drip", level: 1, words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Phonetic alphabet", level: 2, words: ["ALPHA", "BRAVO", "DELTA", "FOXTROT"] },
      { category: "Black ___", level: 3, words: ["SHEEP", "MARKET", "HOLE", "SMITH"] }
    ]
  },
  {
    id: 75,
    groups: [
      { category: "Volcanoes", level: 0, words: ["ETNA", "VESUVIUS", "KRAKATOA", "FUJI"] },
      { category: "Things that melt", level: 1, words: ["GLACIER", "CHEESE", "CANDLE", "SNOWMAN"] },
      { category: "Silent letters (has one)", level: 2, words: ["KNIGHT", "SALMON", "RECEIPT", "ISLAND"] },
      { category: "Cat ___", level: 3, words: ["FISH", "NAP", "WALK", "CALL"] }
    ]
  },
  {
    id: 76,
    groups: [
      { category: "Constellations", level: 0, words: ["ORION", "CASSIOPEIA", "DRACO", "LYRA"] },
      { category: "Things with keys", level: 1, words: ["PIANO", "KEYBOARD", "MAP", "LOCK"] },
      { category: "Words from Japanese", level: 2, words: ["KARAOKE", "TSUNAMI", "EMOJI", "TOFU"] },
      { category: "Iron ___", level: 3, words: ["MAN", "CURTAIN", "CLAD", "HORSE"] }
    ]
  },
  {
    id: 77,
    groups: [
      { category: "Reptiles", level: 0, words: ["GECKO", "IGUANA", "CHAMELEON", "COBRA"] },
      { category: "Round things", level: 1, words: ["GLOBE", "PIZZA", "CLOCK", "COIN"] },
      { category: "Latin phrases", level: 2, words: ["ALIAS", "BONUS", "CAMPUS", "VIRUS"] },
      { category: "Air ___", level: 3, words: ["PORT", "CRAFT", "LINE", "TIGHT"] }
    ]
  },
  {
    id: 78,
    groups: [
      { category: "Dances", level: 0, words: ["MAMBO", "POLKA", "RUMBA", "FOXTROT"] },
      { category: "Things that float", level: 1, words: ["CORK", "RAFT", "BALLOON", "FEATHER"] },
      { category: "Words meaning 'steal'", level: 2, words: ["SWIPE", "PINCH", "NICK", "LIFT"] },
      { category: "Dead ___", level: 3, words: ["END", "LINE", "LOCK", "PAN"] }
    ]
  },
  {
    id: 79,
    groups: [
      { category: "Woodwind instruments", level: 0, words: ["CLARINET", "OBOE", "BASSOON", "PICCOLO"] },
      { category: "Things with tails", level: 1, words: ["KITE", "COMET", "MONKEY", "PEACOCK"] },
      { category: "Famous duos", level: 2, words: ["BONNIE", "ROMEO", "BATMAN", "SHERLOCK"] },
      { category: "Side ___", level: 3, words: ["KICK", "STEP", "LINE", "SHOW"] }
    ]
  },
  {
    id: 80,
    groups: [
      { category: "Lakes", level: 0, words: ["MICHIGAN", "TAHOE", "VICTORIA", "BAIKAL"] },
      { category: "Things that are sticky", level: 1, words: ["HONEY", "TAPE", "SYRUP", "GLUE"] },
      { category: "One-word countries", level: 2, words: ["BRAZIL", "JAPAN", "EGYPT", "NORWAY"] },
      { category: "Blind ___", level: 3, words: ["SPOT", "DATE", "SIDE", "FOLD"] }
    ]
  },
  {
    id: 81,
    groups: [
      { category: "Seabirds", level: 0, words: ["PELICAN", "ALBATROSS", "PUFFIN", "GANNET"] },
      { category: "Things that tick", level: 1, words: ["CLOCK", "BOMB", "METRONOME", "WATCH"] },
      { category: "Compound words with SUN", level: 2, words: ["SUNBURN", "SUNFLOWER", "SUNRISE", "SUNSCREEN"] },
      { category: "Power ___", level: 3, words: ["HOUSE", "PLANT", "PLAY", "POINT"] }
    ]
  },
  {
    id: 82,
    groups: [
      { category: "Whales", level: 0, words: ["BELUGA", "NARWHAL", "ORCA", "HUMPBACK"] },
      { category: "Things in a gym", level: 1, words: ["TREADMILL", "DUMBBELL", "BENCH", "MAT"] },
      { category: "Words with all vowels", level: 2, words: ["EDUCATION", "SEQUOIA", "EQUATION", "AUTHORIZE"] },
      { category: "Red ___", level: 3, words: ["CARPET", "FLAG", "WOOD", "EYE"] }
    ]
  },
  {
    id: 83,
    groups: [
      { category: "Pasta sauces", level: 0, words: ["MARINARA", "ALFREDO", "PESTO", "BOLOGNESE"] },
      { category: "Things with scales", level: 1, words: ["FISH", "DRAGON", "PIANO", "JUSTICE"] },
      { category: "Famous walls", level: 2, words: ["BERLIN", "CHINA", "STREET", "WAILING"] },
      { category: "Blue ___", level: 3, words: ["PRINT", "BELL", "BIRD", "BERRY"] }
    ]
  },
  {
    id: 84,
    groups: [
      { category: "Tectonic plates", level: 0, words: ["PACIFIC", "EURASIAN", "AFRICAN", "NAZCA"] },
      { category: "Things that are sharp", level: 1, words: ["KNIFE", "TACK", "WIT", "CHEDDAR"] },
      { category: "Double-letter animals", level: 2, words: ["RACCOON", "BUFFALO", "CHEETAH", "RABBIT"] },
      { category: "House ___", level: 3, words: ["WORK", "HOLD", "KEEPER", "FLY"] }
    ]
  },
  {
    id: 85,
    groups: [
      { category: "Amphibians", level: 0, words: ["NEWT", "SALAMANDER", "TOAD", "FROG"] },
      { category: "Things with strings", level: 1, words: ["GUITAR", "PUPPET", "KITE", "BOW"] },
      { category: "NASA missions", level: 2, words: ["APOLLO", "GEMINI", "MERCURY", "ARTEMIS"] },
      { category: "Wild ___", level: 3, words: ["CARD", "FIRE", "LIFE", "WEST"] }
    ]
  },
  {
    id: 86,
    groups: [
      { category: "Mushrooms", level: 0, words: ["SHIITAKE", "PORTOBELLO", "TRUFFLE", "MOREL"] },
      { category: "Things that fold", level: 1, words: ["PAPER", "NAPKIN", "CHAIR", "MAP"] },
      { category: "Famous addresses", level: 2, words: ["DOWNING", "BROADWAY", "SESAME", "BAKER"] },
      { category: "Free ___", level: 3, words: ["LANCE", "STYLE", "DOM", "RANGE"] }
    ]
  },
  {
    id: 87,
    groups: [
      { category: "Primates", level: 0, words: ["GORILLA", "CHIMP", "GIBBON", "LEMUR"] },
      { category: "Things that rust", level: 1, words: ["IRON", "NAIL", "CHAIN", "ANCHOR"] },
      { category: "Words that are also colors", level: 2, words: ["OLIVE", "PEACH", "CORAL", "PLUM"] },
      { category: "Sun ___", level: 3, words: ["DIAL", "SET", "ROOF", "DAY"] }
    ]
  },
  {
    id: 88,
    groups: [
      { category: "Sharks", level: 0, words: ["HAMMERHEAD", "TIGER", "BULL", "MAKO"] },
      { category: "Things that pop", level: 1, words: ["BALLOON", "CORN", "BUBBLE", "CHAMPAGNE"] },
      { category: "Words from Arabic", level: 2, words: ["ALGEBRA", "COTTON", "LEMON", "ZERO"] },
      { category: "Star ___", level: 3, words: ["WARS", "FISH", "DUST", "GATE"] }
    ]
  },
  {
    id: 89,
    groups: [
      { category: "Owls", level: 0, words: ["BARN", "SNOWY", "EAGLE", "SCREECH"] },
      { category: "Things that freeze", level: 1, words: ["WATER", "PIPE", "ASSET", "FRAME"] },
      { category: "Fictional detectives", level: 2, words: ["POIROT", "MARPLE", "COLUMBO", "MONK"] },
      { category: "Top ___", level: 3, words: ["SECRET", "NOTCH", "SOIL", "KNOT"] }
    ]
  },
  {
    id: 90,
    groups: [
      { category: "Minerals", level: 0, words: ["QUARTZ", "FELDSPAR", "MICA", "CALCITE"] },
      { category: "Things that bloom", level: 1, words: ["ROSE", "ALGAE", "CHERRY", "YOUTH"] },
      { category: "Portmanteau words", level: 2, words: ["BRUNCH", "SMOG", "MOTEL", "SPORK"] },
      { category: "Silver ___", level: 3, words: ["SCREEN", "LINING", "TONGUE", "FOX"] }
    ]
  },
  {
    id: 91,
    groups: [
      { category: "Grains", level: 0, words: ["QUINOA", "BARLEY", "MILLET", "SPELT"] },
      { category: "Things with teeth", level: 1, words: ["SAW", "COMB", "GEAR", "ZIPPER"] },
      { category: "Nobel Prize categories", level: 2, words: ["PEACE", "PHYSICS", "CHEMISTRY", "LITERATURE"] },
      { category: "Cross ___", level: 3, words: ["WORD", "BOW", "ROAD", "FIT"] }
    ]
  },
  {
    id: 92,
    groups: [
      { category: "Penguins", level: 0, words: ["EMPEROR", "ADELIE", "CHINSTRAP", "ROCKHOPPER"] },
      { category: "Things that echo", level: 1, words: ["CANYON", "CAVE", "TUNNEL", "HALL"] },
      { category: "Words ending in -ight", level: 2, words: ["FLIGHT", "BLIGHT", "PLIGHT", "KNIGHT"] },
      { category: "Blank check", level: 3, words: ["RAIN", "BODY", "SPELL", "MATE"] }
    ]
  },
  {
    id: 93,
    groups: [
      { category: "Cactus types", level: 0, words: ["SAGUARO", "PRICKLY PEAR", "BARREL", "CHOLLA"] },
      { category: "Things that roar", level: 1, words: ["LION", "ENGINE", "CROWD", "THUNDER"] },
      { category: "Silent film stars", level: 2, words: ["CHAPLIN", "KEATON", "LLOYD", "VALENTINO"] },
      { category: "Head ___", level: 3, words: ["BAND", "LINE", "QUARTERS", "STRONG"] }
    ]
  },
  {
    id: 94,
    groups: [
      { category: "Seashells", level: 0, words: ["CONCH", "COWRIE", "SCALLOP", "NAUTILUS"] },
      { category: "Things that bloom in spring", level: 1, words: ["TULIP", "DAFFODIL", "CROCUS", "HYACINTH"] },
      { category: "Ancient wonders", level: 2, words: ["PYRAMID", "COLOSSUS", "LIGHTHOUSE", "MAUSOLEUM"] },
      { category: "Short ___", level: 3, words: ["CUT", "HAND", "CAKE", "CHANGE"] }
    ]
  },
  {
    id: 95,
    groups: [
      { category: "Knots", level: 0, words: ["BOWLINE", "CLOVE", "REEF", "FIGURE EIGHT"] },
      { category: "Things that howl", level: 1, words: ["WOLF", "WIND", "COYOTE", "SIREN"] },
      { category: "Words from French", level: 2, words: ["BALLET", "DEPOT", "ROUGE", "CHAUFFEUR"] },
      { category: "Light ___", level: 3, words: ["HOUSE", "WEIGHT", "YEAR", "SWITCH"] }
    ]
  },
  {
    id: 96,
    groups: [
      { category: "Ferns", level: 0, words: ["MAIDENHAIR", "BRACKEN", "STAGHORN", "BOSTON"] },
      { category: "Things with layers", level: 1, words: ["ONION", "CAKE", "LASAGNA", "EARTH"] },
      { category: "Words meaning 'brave'", level: 2, words: ["VALIANT", "GALLANT", "BOLD", "FEARLESS"] },
      { category: "Back ___", level: 3, words: ["FIRE", "BONE", "STAGE", "LOG"] }
    ]
  },
  {
    id: 97,
    groups: [
      { category: "Teas of the world", level: 0, words: ["DARJEELING", "EARL GREY", "ROOIBOS", "PU-ERH"] },
      { category: "Things that shimmer", level: 1, words: ["SEQUIN", "GLITTER", "MIRAGE", "DIAMOND"] },
      { category: "Types of government", level: 2, words: ["MONARCHY", "REPUBLIC", "THEOCRACY", "OLIGARCHY"] },
      { category: "Hand ___", level: 3, words: ["SHAKE", "RAIL", "MADE", "SPRING"] }
    ]
  },
  {
    id: 98,
    groups: [
      { category: "Deer species", level: 0, words: ["MOOSE", "ELK", "CARIBOU", "ANTELOPE"] },
      { category: "Things that sizzle", level: 1, words: ["BACON", "STEAK", "FIREWORK", "LIGHTNING"] },
      { category: "Words that are also dances", level: 2, words: ["JIVE", "TWIST", "HUSTLE", "STOMP"] },
      { category: "Pin ___", level: 3, words: ["POINT", "STRIPE", "BALL", "CUSHION"] }
    ]
  },
  {
    id: 99,
    groups: [
      { category: "Coral reef fish", level: 0, words: ["CLOWNFISH", "ANGELFISH", "GROUPER", "PARROTFISH"] },
      { category: "Things that crumble", level: 1, words: ["COOKIE", "WALL", "CLIFF", "EMPIRE"] },
      { category: "Famous last words", level: 2, words: ["ROSEBUD", "FREEDOM", "BEAUTIFUL", "CURTAIN"] },
      { category: "Double ___", level: 3, words: ["DUTCH", "CROSS", "AGENT", "TAKE"] }
    ]
  },
  {
    id: 100,
    groups: [
      { category: "Pigeons and doves", level: 0, words: ["MOURNING", "ROCK", "TURTLE", "WOOD"] },
      { category: "Things that crack under pressure", level: 1, words: ["ICE", "GLASS", "VOICE", "FACADE"] },
      { category: "Brands named after founders", level: 2, words: ["FERRARI", "CHANEL", "ADIDAS", "DISNEY"] },
      { category: "Round ___", level: 3, words: ["TABLE", "TRIP", "UP", "ABOUT"] }
    ]
  },
  {
    id: 101,
    groups: [
      { category: "Climbing plants", level: 0, words: ["IVY", "WISTERIA", "CLEMATIS", "JASMINE"] },
      { category: "Things that hum", level: 1, words: ["BEE", "MOTOR", "FRIDGE", "POWER LINE"] },
      { category: "Words from Hindi", level: 2, words: ["JUNGLE", "THUG", "SHAMPOO", "LOOT"] },
      { category: "Flat ___", level: 3, words: ["EARTH", "RATE", "MATE", "SCREEN"] }
    ]
  },
  {
    id: 102,
    groups: [
      { category: "Sandwiches", level: 0, words: ["REUBEN", "CLUB", "CUBANO", "BANH MI"] },
      { category: "Things that orbit", level: 1, words: ["MOON", "SATELLITE", "ELECTRON", "PLANET"] },
      { category: "Words from Italian", level: 2, words: ["PIANO", "STUDIO", "VOLCANO", "FIASCO"] },
      { category: "Night ___", level: 3, words: ["FALL", "CLUB", "MARE", "GOWN"] }
    ]
  },
  {
    id: 103,
    groups: [
      { category: "Bats", level: 0, words: ["FRUIT BAT", "VAMPIRE BAT", "HORSESHOE", "FLYING FOX"] },
      { category: "Things that are crispy", level: 1, words: ["BACON", "CHIP", "LEAF", "CRACKER"] },
      { category: "Famous walls", level: 2, words: ["HADRIAN", "WESTERN", "FIREWALL", "PAYWALL"] },
      { category: "Break ___", level: 3, words: ["DOWN", "THROUGH", "FAST", "WATER"] }
    ]
  },
  {
    id: 104,
    groups: [
      { category: "Parrots", level: 0, words: ["MACAW", "COCKATOO", "BUDGIE", "LOVEBIRD"] },
      { category: "Things that are woven", level: 1, words: ["BASKET", "TAPESTRY", "RUG", "FABRIC"] },
      { category: "Words that are also months", level: 2, words: ["MARCH", "MAY", "AUGUST", "JUNE"] },
      { category: "Rain ___", level: 3, words: ["BOW", "COAT", "DROP", "FOREST"] }
    ]
  },
  {
    id: 105,
    groups: [
      { category: "Grape varieties", level: 0, words: ["MERLOT", "RIESLING", "PINOT", "SHIRAZ"] },
      { category: "Things that sway", level: 1, words: ["HAMMOCK", "BRIDGE", "TREE", "DANCER"] },
      { category: "Famous robots", level: 2, words: ["WALL-E", "R2-D2", "TERMINATOR", "OPTIMUS"] },
      { category: "Hard ___", level: 3, words: ["WARE", "SHIP", "WOOD", "BALL"] }
    ]
  },
  {
    id: 106,
    groups: [
      { category: "Falcons", level: 0, words: ["PEREGRINE", "KESTREL", "MERLIN", "GYRFALCON"] },
      { category: "Things that bubble", level: 1, words: ["SODA", "LAVA", "SOAP", "BROOK"] },
      { category: "Types of poetry", level: 2, words: ["HAIKU", "SONNET", "LIMERICK", "BALLAD"] },
      { category: "Grand ___", level: 3, words: ["PIANO", "JURY", "CANYON", "PRIX"] }
    ]
  },
  {
    id: 107,
    groups: [
      { category: "Ancient civilizations", level: 0, words: ["AZTEC", "MAYA", "INCA", "OLMEC"] },
      { category: "Things that crawl", level: 1, words: ["SPIDER", "BABY", "SNAIL", "VINE"] },
      { category: "Fictional schools", level: 2, words: ["HOGWARTS", "XAVIER", "BAYSIDE", "RYDELL"] },
      { category: "Blank out", level: 3, words: ["WHITE", "BURN", "FREAK", "KNOCK"] }
    ]
  },
  {
    id: 108,
    groups: [
      { category: "Coffee drinks", level: 0, words: ["ESPRESSO", "CAPPUCCINO", "AMERICANO", "MACCHIATO"] },
      { category: "Things that tower", level: 1, words: ["SKYSCRAPER", "REDWOOD", "GIRAFFE", "LIGHTHOUSE"] },
      { category: "Words with QU", level: 2, words: ["QUILT", "UNIQUE", "MOSQUE", "ANTIQUE"] },
      { category: "Stone ___", level: 3, words: ["AGE", "COLD", "WALL", "HEDGE"] }
    ]
  },
  {
    id: 109,
    groups: [
      { category: "Eagles", level: 0, words: ["BALD", "GOLDEN", "HARPY", "MARTIAL"] },
      { category: "Things that are tangled", level: 1, words: ["YARN", "HEADPHONES", "HAIR", "VINES"] },
      { category: "Olympic host cities", level: 2, words: ["TOKYO", "PARIS", "LONDON", "BEIJING"] },
      { category: "Spring ___", level: 3, words: ["BOARD", "ROLL", "CHICKEN", "CLEAN"] }
    ]
  },
  {
    id: 110,
    groups: [
      { category: "Bamboo-eating animals", level: 0, words: ["PANDA", "GORILLA", "LEMUR", "RAT"] },
      { category: "Things that sparkle", level: 1, words: ["STAR", "SNOW", "DIAMOND", "TINSEL"] },
      { category: "Famous canals", level: 2, words: ["PANAMA", "SUEZ", "ERIE", "VENICE"] },
      { category: "Bright ___", level: 3, words: ["SIDE", "IDEA", "EYES", "FUTURE"] }
    ]
  },
  {
    id: 111,
    groups: [
      { category: "Types of pasta", level: 0, words: ["LINGUINE", "FETTUCCINE", "RAVIOLI", "TORTELLINI"] },
      { category: "Things in a cockpit", level: 1, words: ["THROTTLE", "ALTIMETER", "RUDDER", "YOKE"] },
      { category: "Words meaning 'to criticize'", level: 2, words: ["SLAM", "BASH", "KNOCK", "ROAST"] },
      { category: "___ drop", level: 3, words: ["TEAR", "BACK", "SNOW", "NAME"] }
    ]
  },
  {
    id: 112,
    groups: [
      { category: "African countries", level: 0, words: ["KENYA", "GHANA", "MOROCCO", "TUNISIA"] },
      { category: "Things that sparkle", level: 1, words: ["GLITTER", "CRYSTAL", "SEQUIN", "FIREWORK"] },
      { category: "Cartoon dogs", level: 2, words: ["SNOOPY", "PLUTO", "SCOOBY", "GOOFY"] },
      { category: "Chest ___", level: 3, words: ["NUT", "BOARD", "PLATE", "FIELD"] }
    ]
  },
  {
    id: 113,
    groups: [
      { category: "Leafy greens", level: 0, words: ["KALE", "ARUGULA", "ROMAINE", "WATERCRESS"] },
      { category: "Things with pedals", level: 1, words: ["BICYCLE", "ORGAN", "CAR", "PIANO"] },
      { category: "Words meaning 'to leave quickly'", level: 2, words: ["BOLT", "DASH", "FLEE", "SPLIT"] },
      { category: "Match ___", level: 3, words: ["STICK", "BOX", "MAKER", "POINT"] }
    ]
  },
  {
    id: 114,
    groups: [
      { category: "Brass instruments", level: 0, words: ["TRUMPET", "TROMBONE", "TUBA", "FRENCH HORN"] },
      { category: "Things at a carnival", level: 1, words: ["CLOWN", "FUNNEL CAKE", "RING TOSS", "STRONGMAN"] },
      { category: "Words that contain a body part", level: 2, words: ["CARPET", "ELBOW", "LEGEND", "THUMBNAIL"] },
      { category: "Honey ___", level: 3, words: ["BEE", "MOON", "COMB", "DEW"] }
    ]
  },
  {
    id: 115,
    groups: [
      { category: "Winter clothing", level: 0, words: ["SCARF", "MITTEN", "PARKA", "EARMUFF"] },
      { category: "Famous towers", level: 1, words: ["EIFFEL", "BIG BEN", "BABEL", "PISA"] },
      { category: "Words with silent B", level: 2, words: ["PLUMBER", "CLIMB", "THUMB", "SUBTLE"] },
      { category: "Well ___", level: 3, words: ["SPRING", "DONE", "KNOWN", "OFF"] }
    ]
  },
  {
    id: 116,
    groups: [
      { category: "Sushi fish", level: 0, words: ["TUNA", "YELLOWTAIL", "MACKEREL", "SNAPPER"] },
      { category: "Things with a dial", level: 1, words: ["WATCH", "RADIO", "COMPASS", "THERMOSTAT"] },
      { category: "Words meaning 'to confuse'", level: 2, words: ["BAFFLE", "BEWILDER", "PUZZLE", "STUMP"] },
      { category: "Flag ___", level: 3, words: ["SHIP", "POLE", "STONE", "STAFF"] }
    ]
  },
  {
    id: 117,
    groups: [
      { category: "Root vegetables", level: 0, words: ["GINGER", "TURMERIC", "BEET", "YAM"] },
      { category: "Things with a bell", level: 1, words: ["CHURCH", "BICYCLE", "COW", "DOORBELL"] },
      { category: "Olympic medals", level: 2, words: ["GOLD", "SILVER", "BRONZE", "IRON"] },
      { category: "Catch ___", level: 3, words: ["PHRASE", "UP", "WORD", "BASIN"] }
    ]
  },
  {
    id: 118,
    groups: [
      { category: "Ducks", level: 0, words: ["MALLARD", "TEAL", "MERGANSER", "PINTAIL"] },
      { category: "Things at a spa", level: 1, words: ["SAUNA", "MASSAGE", "FACIAL", "ROBE"] },
      { category: "Words that mean 'excellent'", level: 2, words: ["STELLAR", "SUPERB", "PRIME", "CRACK"] },
      { category: "Pot ___", level: 3, words: ["LUCK", "HOLE", "SHOT", "BELLY"] }
    ]
  },
  {
    id: 119,
    groups: [
      { category: "Citrus fruits", level: 0, words: ["KUMQUAT", "POMELO", "CLEMENTINE", "BERGAMOT"] },
      { category: "Things with a cap", level: 1, words: ["BOTTLE", "MUSHROOM", "PEN", "TOOTH"] },
      { category: "Famous Georges", level: 2, words: ["WASHINGTON", "CLOONEY", "ORWELL", "LUCAS"] },
      { category: "Bank ___", level: 3, words: ["ROLL", "NOTE", "RUPT", "SHOT"] }
    ]
  },
  {
    id: 120,
    groups: [
      { category: "Legumes", level: 0, words: ["LENTIL", "CHICKPEA", "FAVA", "MUNG"] },
      { category: "Things in a studio", level: 1, words: ["EASEL", "CANVAS", "PALETTE", "BRUSH"] },
      { category: "Famous Jacks", level: 2, words: ["NICHOLSON", "SPARROW", "BLACK", "FROST"] },
      { category: "Clock ___", level: 3, words: ["WISE", "TOWER", "WORK", "FACE"] }
    ]
  },
  {
    id: 121,
    groups: [
      { category: "Melon types", level: 0, words: ["HONEYDEW", "CANTALOUPE", "WATERMELON", "CASABA"] },
      { category: "Things with a blade", level: 1, words: ["KNIFE", "WINDMILL", "SKATE", "HELICOPTER"] },
      { category: "Words ending in -ous", level: 2, words: ["FAMOUS", "NERVOUS", "CURIOUS", "SERIOUS"] },
      { category: "Net ___", level: 3, words: ["WORK", "BALL", "WORTH", "FLIX"] }
    ]
  },
  {
    id: 122,
    groups: [
      { category: "Penguins", level: 0, words: ["KING", "GENTOO", "MACARONI", "FAIRY"] },
      { category: "Things at a picnic", level: 1, words: ["BLANKET", "BASKET", "LEMONADE", "ANTS"] },
      { category: "Words meaning 'to delay'", level: 2, words: ["STALL", "DEFER", "TABLE", "SHELVE"] },
      { category: "Ball ___", level: 3, words: ["PARK", "ROOM", "POINT", "GAME"] }
    ]
  },
  {
    id: 123,
    groups: [
      { category: "Japanese food", level: 0, words: ["RAMEN", "TEMPURA", "UDON", "SASHIMI"] },
      { category: "Things with a handle", level: 1, words: ["AXE", "BROOM", "BRIEFCASE", "SHOVEL"] },
      { category: "Words that are also colors", level: 2, words: ["AMBER", "IVORY", "SCARLET", "CRIMSON"] },
      { category: "Press ___", level: 3, words: ["RELEASE", "SURE", "CONFERENCE", "BOX"] }
    ]
  },
  {
    id: 124,
    groups: [
      { category: "Butternut squash relatives", level: 0, words: ["ACORN", "SPAGHETTI", "PUMPKIN", "ZUCCHINI"] },
      { category: "Things that rust", level: 1, words: ["GATE", "PIPE", "NAIL", "BRIDGE"] },
      { category: "Words from Spanish", level: 2, words: ["TORNADO", "RODEO", "PLAZA", "CANYON"] },
      { category: "Ground ___", level: 3, words: ["HOG", "WORK", "FLOOR", "BREAKING"] }
    ]
  },
  {
    id: 125,
    groups: [
      { category: "Whale species", level: 0, words: ["MINKE", "BOWHEAD", "RIGHT", "GREY"] },
      { category: "Things with pockets", level: 1, words: ["JACKET", "JEANS", "BILLIARD TABLE", "KANGAROO"] },
      { category: "Words meaning 'to annoy'", level: 2, words: ["BUG", "NEEDLE", "GRILL", "RIDE"] },
      { category: "Master ___", level: 3, words: ["MIND", "PIECE", "CLASS", "STROKE"] }
    ]
  },
  {
    id: 126,
    groups: [
      { category: "Types of cheese", level: 0, words: ["MANCHEGO", "HAVARTI", "PROVOLONE", "EMMENTAL"] },
      { category: "Things that whisper", level: 1, words: ["WIND", "LEAVES", "GRASS", "STREAM"] },
      { category: "Famous Jameses", level: 2, words: ["BOND", "DEAN", "BROWN", "MADISON"] },
      { category: "Pass ___", level: 3, words: ["PORT", "WORD", "OVER", "TIME"] }
    ]
  },
  {
    id: 127,
    groups: [
      { category: "Terrier breeds", level: 0, words: ["YORKIE", "SCOTTIE", "WESTIE", "AIREDALE"] },
      { category: "Things at a farm", level: 1, words: ["SILO", "TRACTOR", "BARN", "SCARECROW"] },
      { category: "Words meaning 'money'", level: 2, words: ["DOUGH", "BREAD", "CHEDDAR", "CABBAGE"] },
      { category: "Wall ___", level: 3, words: ["PAPER", "FLOWER", "STREET", "NUT"] }
    ]
  },
  {
    id: 128,
    groups: [
      { category: "Types of rice", level: 0, words: ["BASMATI", "JASMINE", "ARBORIO", "WILD"] },
      { category: "Things with a clasp", level: 1, words: ["NECKLACE", "PURSE", "BINDER", "BELT"] },
      { category: "Famous Alexanders", level: 2, words: ["GREAT", "HAMILTON", "GRAHAM BELL", "MCQUEEN"] },
      { category: "Right ___", level: 3, words: ["FIELD", "WING", "ANGLE", "HAND"] }
    ]
  },
  {
    id: 129,
    groups: [
      { category: "Songbirds", level: 0, words: ["ROBIN", "WREN", "FINCH", "THRUSH"] },
      { category: "Things with a hinge", level: 1, words: ["DOOR", "LAPTOP", "GATE", "JAW"] },
      { category: "Words meaning 'old'", level: 2, words: ["ANCIENT", "ARCHAIC", "VINTAGE", "ANTIQUE"] },
      { category: "Fire ___", level: 3, words: ["ARM", "BRAND", "SIDE", "WALL"] }
    ]
  },
  {
    id: 130,
    groups: [
      { category: "Curry ingredients", level: 0, words: ["CARDAMOM", "CORIANDER", "FENUGREEK", "TURMERIC"] },
      { category: "Things that purr", level: 1, words: ["CAT", "ENGINE", "PIGEON", "CONTENTED BABY"] },
      { category: "Words meaning 'to eat greedily'", level: 2, words: ["DEVOUR", "GORGE", "WOLF", "SCARF"] },
      { category: "Glass ___", level: 3, words: ["WARE", "HOUSE", "CEILING", "JAW"] }
    ]
  },
  {
    id: 131,
    groups: [
      { category: "Climbing gear", level: 0, words: ["CARABINER", "HARNESS", "PITON", "CRAMPON"] },
      { category: "Things that are layered", level: 1, words: ["PARFAIT", "SEDIMENT", "NACHOS", "ATMOSPHERE"] },
      { category: "Words from Portuguese", level: 2, words: ["FLAMINGO", "MARMALADE", "COBRA", "MOSQUITO"] },
      { category: "Table ___", level: 3, words: ["CLOTH", "TENNIS", "SPOON", "TOP"] }
    ]
  },
  {
    id: 132,
    groups: [
      { category: "Herbs for cooking", level: 0, words: ["ROSEMARY", "PARSLEY", "CILANTRO", "CHIVES"] },
      { category: "Things with an antenna", level: 1, words: ["RADIO", "ANT", "SATELLITE", "SNAIL"] },
      { category: "Famous Charleses", level: 2, words: ["DARWIN", "DICKENS", "CHAPLIN", "SCHULZ"] },
      { category: "Book ___", level: 3, words: ["CASE", "SHELF", "WORM", "MARK"] }
    ]
  },
  {
    id: 133,
    groups: [
      { category: "Types of bean", level: 0, words: ["NAVY", "CANNELLINI", "GARBANZO", "ADZUKI"] },
      { category: "Things that are hollow", level: 1, words: ["TUBE", "BAMBOO", "DRUM", "LOG"] },
      { category: "Words meaning 'to copy'", level: 2, words: ["MIMIC", "APE", "PARROT", "ECHO"] },
      { category: "Stock ___", level: 3, words: ["PILE", "YARD", "MARKET", "HOLDER"] }
    ]
  },
  {
    id: 134,
    groups: [
      { category: "Cephalopods", level: 0, words: ["SQUID", "OCTOPUS", "CUTTLEFISH", "NAUTILUS"] },
      { category: "Things with a stage", level: 1, words: ["THEATER", "ROCKET", "CANCER", "CONCERT"] },
      { category: "Words from Arabic", level: 2, words: ["ALGORITHM", "MAGAZINE", "SAFARI", "TARIFF"] },
      { category: "First ___", level: 3, words: ["AID", "BASE", "BORN", "CLASS"] }
    ]
  },
  {
    id: 135,
    groups: [
      { category: "Diving birds", level: 0, words: ["KINGFISHER", "HERON", "OSPREY", "LOON"] },
      { category: "Things with a valve", level: 1, words: ["TRUMPET", "HEART", "TIRE", "FAUCET"] },
      { category: "Words meaning 'to throw'", level: 2, words: ["HURL", "FLING", "TOSS", "HEAVE"] },
      { category: "Mark ___", level: 3, words: ["DOWN", "UP", "TWAIN", "SHEET"] }
    ]
  },
  {
    id: 136,
    groups: [
      { category: "Mexican food", level: 0, words: ["TACO", "BURRITO", "ENCHILADA", "QUESADILLA"] },
      { category: "Things that are braided", level: 1, words: ["ROPE", "HAIR", "BREAD", "RIVER"] },
      { category: "Words meaning 'tip'", level: 2, words: ["PEAK", "SUMMIT", "APEX", "CREST"] },
      { category: "Cap ___", level: 3, words: ["STONE", "TAIN", "SIZE", "ITAL"] }
    ]
  },
  {
    id: 137,
    groups: [
      { category: "Hound breeds", level: 0, words: ["GREYHOUND", "BLOODHOUND", "BASSET", "DACHSHUND"] },
      { category: "Things at a carnival", level: 1, words: ["MASK", "FLOAT", "CONFETTI", "STILTS"] },
      { category: "Words meaning 'edge'", level: 2, words: ["BRINK", "VERGE", "FRINGE", "MARGIN"] },
      { category: "Out ___", level: 3, words: ["CAST", "RAGE", "LOOK", "SKIRTS"] }
    ]
  },
  {
    id: 138,
    groups: [
      { category: "Indian spices", level: 0, words: ["GARAM MASALA", "CUMIN", "MUSTARD SEED", "FENNEL"] },
      { category: "Things that launch", level: 1, words: ["ROCKET", "BOAT", "STARTUP", "CAMPAIGN"] },
      { category: "Words meaning 'group'", level: 2, words: ["CLUSTER", "BATCH", "BUNCH", "PACK"] },
      { category: "Touch ___", level: 3, words: ["DOWN", "SCREEN", "STONE", "LINE"] }
    ]
  },
  {
    id: 139,
    groups: [
      { category: "Berries (true botanical)", level: 0, words: ["GRAPE", "BANANA", "AVOCADO", "TOMATO"] },
      { category: "Things that have a trunk", level: 1, words: ["ELEPHANT", "TREE", "CAR", "SUITCASE"] },
      { category: "Words meaning 'to shine'", level: 2, words: ["GLEAM", "GLISTEN", "SHIMMER", "RADIATE"] },
      { category: "Turn ___", level: 3, words: ["PIKE", "OVER", "TABLE", "COAT"] }
    ]
  },
  {
    id: 140,
    groups: [
      { category: "Mediterranean herbs", level: 0, words: ["OREGANO", "BASIL", "THYME", "MARJORAM"] },
      { category: "Things with horns", level: 1, words: ["BULL", "RHINO", "UNICORN", "MOOSE"] },
      { category: "Scrabble high-point letters", level: 2, words: ["Q", "Z", "X", "J"] },
      { category: "Horse ___", level: 3, words: ["POWER", "PLAY", "BACK", "SHOE"] }
    ]
  },
  {
    id: 141,
    groups: [
      { category: "Raptor birds", level: 0, words: ["HAWK", "FALCON", "BUZZARD", "VULTURE"] },
      { category: "Things that are inflatable", level: 1, words: ["BALLOON", "TIRE", "MATTRESS", "RAFT"] },
      { category: "Words meaning 'to think'", level: 2, words: ["PONDER", "MULL", "MUSE", "REFLECT"] },
      { category: "Tail ___", level: 3, words: ["GATE", "SPIN", "BONE", "COAT"] }
    ]
  },
  {
    id: 142,
    groups: [
      { category: "Thai ingredients", level: 0, words: ["LEMONGRASS", "GALANGAL", "FISH SAUCE", "COCONUT MILK"] },
      { category: "Things with a beak", level: 1, words: ["TOUCAN", "EAGLE", "PLATYPUS", "SQUID"] },
      { category: "Words meaning 'a lot'", level: 2, words: ["HEAPS", "OODLES", "LOADS", "SCADS"] },
      { category: "Field ___", level: 3, words: ["TRIP", "GOAL", "WORK", "DAY"] }
    ]
  },
  {
    id: 143,
    groups: [
      { category: "Retriever breeds", level: 0, words: ["GOLDEN", "LABRADOR", "CHESAPEAKE", "FLAT COAT"] },
      { category: "Things with a shell", level: 1, words: ["CRAB", "WALNUT", "TORTOISE", "CLAM"] },
      { category: "Words meaning 'strong'", level: 2, words: ["ROBUST", "STURDY", "SOLID", "STOUT"] },
      { category: "Rough ___", level: 3, words: ["NECK", "HOUSE", "DRAFT", "AGE"] }
    ]
  },
  {
    id: 144,
    groups: [
      { category: "Soft cheeses", level: 0, words: ["RICOTTA", "MASCARPONE", "BURRATA", "CHEVRE"] },
      { category: "Things that are winding", level: 1, words: ["ROAD", "RIVER", "STAIRCASE", "CLOCK"] },
      { category: "Words that sound like numbers", level: 2, words: ["WON", "ATE", "FORE", "SICS"] },
      { category: "Cover ___", level: 3, words: ["STORY", "BAND", "CHARGE", "LETTER"] }
    ]
  },
  {
    id: 145,
    groups: [
      { category: "Flatbreads", level: 0, words: ["NAAN", "PITA", "TORTILLA", "ROTI"] },
      { category: "Things with a tail", level: 1, words: ["DOG", "COMET", "AIRPLANE", "SCORPION"] },
      { category: "Words meaning 'to stop'", level: 2, words: ["HALT", "CEASE", "QUIT", "DESIST"] },
      { category: "Wind ___", level: 3, words: ["MILL", "SHIELD", "FALL", "PIPE"] }
    ]
  },
  {
    id: 146,
    groups: [
      { category: "Spanish foods", level: 0, words: ["PAELLA", "GAZPACHO", "CHURROS", "TAPAS"] },
      { category: "Things in a gym locker", level: 1, words: ["TOWEL", "PADLOCK", "SNEAKERS", "DEODORANT"] },
      { category: "Words meaning 'thin'", level: 2, words: ["SLENDER", "SLIM", "LEAN", "GAUNT"] },
      { category: "Strip ___", level: 3, words: ["MALL", "MINE", "TEASE", "SEARCH"] }
    ]
  },
  {
    id: 147,
    groups: [
      { category: "Olive oil grades", level: 0, words: ["EXTRA VIRGIN", "VIRGIN", "REFINED", "POMACE"] },
      { category: "Things that are frozen", level: 1, words: ["TUNDRA", "YOGURT", "POPSICLE", "ASSET"] },
      { category: "Words meaning 'loud'", level: 2, words: ["BOOMING", "THUNDEROUS", "DEAFENING", "BLARING"] },
      { category: "Burn ___", level: 3, words: ["OUT", "SIDE", "MARK", "ISHED"] }
    ]
  },
  {
    id: 148,
    groups: [
      { category: "Chinese dishes", level: 0, words: ["DIM SUM", "KUNG PAO", "CHOW MEIN", "FRIED RICE"] },
      { category: "Things with feathers", level: 1, words: ["PILLOW", "ARROW", "QUILL", "PEACOCK"] },
      { category: "Words meaning 'scared'", level: 2, words: ["ALARMED", "RATTLED", "SPOOKED", "SHAKEN"] },
      { category: "Jump ___", level: 3, words: ["SUIT", "START", "SHOT", "ROPE"] }
    ]
  },
  {
    id: 149,
    groups: [
      { category: "Australian animals", level: 0, words: ["PLATYPUS", "ECHIDNA", "QUOKKA", "WALLABY"] },
      { category: "Things at a desk", level: 1, words: ["LAMP", "STAPLER", "MONITOR", "PEN CUP"] },
      { category: "Words from Dutch", level: 2, words: ["COOKIE", "BOSS", "WAFFLE", "YACHT"] },
      { category: "Day ___", level: 3, words: ["BREAK", "DREAM", "LIGHT", "TIME"] }
    ]
  },
  {
    id: 150,
    groups: [
      { category: "Types of noodle", level: 0, words: ["SOBA", "UDON", "RAMEN", "VERMICELLI"] },
      { category: "Things with a lens", level: 1, words: ["CAMERA", "TELESCOPE", "GLASSES", "MICROSCOPE"] },
      { category: "Words meaning 'to look'", level: 2, words: ["GAZE", "PEER", "STARE", "GLANCE"] },
      { category: "Place ___", level: 3, words: ["MAT", "HOLDER", "KICK", "SETTING"] }
    ]
  },
  {
    id: 151,
    groups: [
      { category: "Crustaceans", level: 0, words: ["CRAB", "LOBSTER", "SHRIMP", "CRAWFISH"] },
      { category: "Things that unfold", level: 1, words: ["MAP", "CHAIR", "NAPKIN", "STORY"] },
      { category: "Words meaning 'pale'", level: 2, words: ["ASHEN", "PALLID", "WAN", "SALLOW"] },
      { category: "Night ___", level: 3, words: ["OWL", "CAP", "SHADE", "STAND"] }
    ]
  },
  {
    id: 152,
    groups: [
      { category: "Middle Eastern foods", level: 0, words: ["FALAFEL", "HUMMUS", "SHAWARMA", "BAKLAVA"] },
      { category: "Things with a loop", level: 1, words: ["ROLLER COASTER", "LASSO", "BELT", "SHOELACE"] },
      { category: "Words meaning 'nonsense'", level: 2, words: ["DRIVEL", "HOGWASH", "BUNK", "TRIPE"] },
      { category: "Finger ___", level: 3, words: ["TIP", "NAIL", "PRINT", "BOARD"] }
    ]
  },
  {
    id: 153,
    groups: [
      { category: "Types of salmon", level: 0, words: ["SOCKEYE", "CHINOOK", "COHO", "ATLANTIC"] },
      { category: "Things that are coiled", level: 1, words: ["SNAKE", "SPRING", "HOSE", "ROPE"] },
      { category: "Words meaning 'crazy'", level: 2, words: ["BONKERS", "BANANAS", "BATTY", "BARMY"] },
      { category: "Stand ___", level: 3, words: ["STILL", "OFF", "POINT", "PIPE"] }
    ]
  },
  {
    id: 154,
    groups: [
      { category: "Korean dishes", level: 0, words: ["KIMCHI", "BIBIMBAP", "BULGOGI", "JAPCHAE"] },
      { category: "Things that reflect", level: 1, words: ["MIRROR", "LAKE", "GLASS", "MOON"] },
      { category: "Words meaning 'stubborn'", level: 2, words: ["DOGGED", "MULISH", "PIGHEADED", "BULLISH"] },
      { category: "Door ___", level: 3, words: ["STEP", "BELL", "MAN", "WAY"] }
    ]
  },
  {
    id: 155,
    groups: [
      { category: "Tropical birds", level: 0, words: ["TOUCAN", "MACAW", "PARROT", "COCKATOO"] },
      { category: "Things with a frame", level: 1, words: ["PICTURE", "BICYCLE", "BED", "DOOR"] },
      { category: "Words meaning 'beautiful'", level: 2, words: ["STUNNING", "GORGEOUS", "EXQUISITE", "RAVISHING"] },
      { category: "Heart ___", level: 3, words: ["BREAK", "BEAT", "BURN", "FELT"] }
    ]
  },
  {
    id: 156,
    groups: [
      { category: "Italian cheeses", level: 0, words: ["PARMESAN", "PECORINO", "GORGONZOLA", "FONTINA"] },
      { category: "Things that absorb", level: 1, words: ["SPONGE", "TOWEL", "SOIL", "COTTON"] },
      { category: "Words meaning 'to fix'", level: 2, words: ["MEND", "PATCH", "REPAIR", "RESTORE"] },
      { category: "Lunch ___", level: 3, words: ["BOX", "TIME", "BREAK", "ROOM"] }
    ]
  },
  {
    id: 157,
    groups: [
      { category: "Shellfish", level: 0, words: ["MUSSEL", "OYSTER", "CLAM", "SCALLOP"] },
      { category: "Things with a dial", level: 1, words: ["SAFE", "PHONE", "OVEN", "CLOCK"] },
      { category: "Words meaning 'to hurry'", level: 2, words: ["RUSH", "HUSTLE", "HASTEN", "SCRAMBLE"] },
      { category: "Head ___", level: 3, words: ["BAND", "HUNTER", "MASTER", "ROOM"] }
    ]
  },
  {
    id: 158,
    groups: [
      { category: "French pastries", level: 0, words: ["MACARON", "ECLAIR", "CROISSANT", "MILLE FEUILLE"] },
      { category: "Things with a point", level: 1, words: ["STAR", "PENCIL", "NEEDLE", "SPEAR"] },
      { category: "Words meaning 'foolish'", level: 2, words: ["ABSURD", "DAFT", "SILLY", "INANE"] },
      { category: "Tail ___", level: 3, words: ["PIPE", "END", "WIND", "LIGHT"] }
    ]
  },
  {
    id: 159,
    groups: [
      { category: "Peruvian foods", level: 0, words: ["CEVICHE", "LOMO SALTADO", "QUINOA", "ANTICUCHO"] },
      { category: "Things that are braided", level: 1, words: ["CHALLAH", "LANYARD", "GARLIC", "WHIP"] },
      { category: "Words meaning 'bright'", level: 2, words: ["LUMINOUS", "VIVID", "RADIANT", "BRILLIANT"] },
      { category: "Ring ___", level: 3, words: ["SIDE", "LEADER", "FENCE", "TONE"] }
    ]
  },
  {
    id: 160,
    groups: [
      { category: "Salamanders", level: 0, words: ["AXE", "NEWT", "HELLBENDER", "MUDPUPPY"] },
      { category: "Things with a buckle", level: 1, words: ["SHOE", "BELT", "HELMET", "WATCH"] },
      { category: "Words meaning 'to persuade'", level: 2, words: ["COAX", "SWAY", "URGE", "CAJOLE"] },
      { category: "Rest ___", level: 3, words: ["ROOM", "LESS", "ORE", "ART"] }
    ]
  },
  {
    id: 161,
    groups: [
      { category: "Ethiopian foods", level: 0, words: ["INJERA", "WAT", "KITFO", "TIBS"] },
      { category: "Things that shimmer", level: 1, words: ["SILK", "PEARL", "OIL SLICK", "AURORA"] },
      { category: "Words meaning 'brave'", level: 2, words: ["COURAGEOUS", "INTREPID", "DARING", "HEROIC"] },
      { category: "Butter ___", level: 3, words: ["CUP", "FLY", "MILK", "SCOTCH"] }
    ]
  },
  {
    id: 162,
    groups: [
      { category: "Bears", level: 0, words: ["SUN BEAR", "SPECTACLED", "SLOTH BEAR", "BLACK BEAR"] },
      { category: "Things with a cork", level: 1, words: ["WINE", "BULLETIN BOARD", "FISHING ROD", "BAT"] },
      { category: "Words meaning 'to decrease'", level: 2, words: ["WANE", "DWINDLE", "EBB", "TAPER"] },
      { category: "Gold ___", level: 3, words: ["FISH", "MINE", "FINCH", "SMITH"] }
    ]
  },
  {
    id: 163,
    groups: [
      { category: "Vietnamese dishes", level: 0, words: ["PHO", "BANH MI", "SPRING ROLL", "BUN CHA"] },
      { category: "Things with a propeller", level: 1, words: ["HELICOPTER", "BOAT", "FAN", "DRONE"] },
      { category: "Words meaning 'to shout'", level: 2, words: ["BELLOW", "HOLLER", "YELL", "ROAR"] },
      { category: "Watch ___", level: 3, words: ["DOG", "MAN", "TOWER", "WORD"] }
    ]
  },
  {
    id: 164,
    groups: [
      { category: "Pelicans and relatives", level: 0, words: ["PELICAN", "CORMORANT", "FRIGATE", "GANNET"] },
      { category: "Things that are layered", level: 1, words: ["TRIFLE", "ROCK", "WEDDING CAKE", "ONION"] },
      { category: "Words meaning 'to reveal'", level: 2, words: ["DISCLOSE", "EXPOSE", "UNVEIL", "DIVULGE"] },
      { category: "Off ___", level: 3, words: ["SPRING", "SHORE", "BEAT", "HAND"] }
    ]
  },
  {
    id: 165,
    groups: [
      { category: "Clam varieties", level: 0, words: ["LITTLENECK", "QUAHOG", "RAZOR", "GEODUCK"] },
      { category: "Things with a motor", level: 1, words: ["BLENDER", "DRILL", "BOAT", "CAR"] },
      { category: "Words meaning 'tricky'", level: 2, words: ["CRAFTY", "SLY", "WILY", "CUNNING"] },
      { category: "Penny ___", level: 3, words: ["WISE", "LOAFER", "ANTE", "PINCHER"] }
    ]
  },
  {
    id: 166,
    groups: [
      { category: "Cacti", level: 0, words: ["PRICKLY PEAR", "BARREL", "ORGAN PIPE", "HEDGEHOG"] },
      { category: "Things that cascade", level: 1, words: ["WATERFALL", "HAIR", "DOMINOES", "FLOWERS"] },
      { category: "Words meaning 'to praise'", level: 2, words: ["LAUD", "EXTOL", "COMMEND", "HAIL"] },
      { category: "Up ___", level: 3, words: ["SHOT", "KEEP", "STAIRS", "ROAR"] }
    ]
  },
  {
    id: 167,
    groups: [
      { category: "Turkish dishes", level: 0, words: ["KEBAB", "BOREK", "LAHMACUN", "PIDE"] },
      { category: "Things with a knob", level: 1, words: ["DOOR", "STOVE", "DRAWER", "RADIO"] },
      { category: "Words meaning 'to predict'", level: 2, words: ["FORECAST", "FORESEE", "DIVINE", "AUGUR"] },
      { category: "Line ___", level: 3, words: ["BACKER", "UP", "MAN", "AGE"] }
    ]
  },
  {
    id: 168,
    groups: [
      { category: "Salamis", level: 0, words: ["GENOA", "SOPRESSATA", "CHORIZO", "PEPPERONI"] },
      { category: "Things with a brim", level: 1, words: ["HAT", "CUP", "VOLCANO", "BOWL"] },
      { category: "Words meaning 'to eat'", level: 2, words: ["CONSUME", "DEVOUR", "FEAST", "NIBBLE"] },
      { category: "Head ___", level: 3, words: ["LIGHT", "LINE", "COUNT", "PHONE"] }
    ]
  },
  {
    id: 169,
    groups: [
      { category: "Jamaican foods", level: 0, words: ["JERK CHICKEN", "ACKEE", "PATTY", "CALLALOO"] },
      { category: "Things with a lid", level: 1, words: ["POT", "CHEST", "TRASH CAN", "EYE"] },
      { category: "Words meaning 'fast'", level: 2, words: ["NIMBLE", "AGILE", "SPEEDY", "HASTY"] },
      { category: "Snow ___", level: 3, words: ["DRIFT", "SHOE", "DROP", "PLOW"] }
    ]
  },
  {
    id: 170,
    groups: [
      { category: "Coral types", level: 0, words: ["BRAIN", "STAGHORN", "FAN", "ELKHORN"] },
      { category: "Things with a saddle", level: 1, words: ["HORSE", "BICYCLE", "MOUNTAIN", "SHOE"] },
      { category: "Words meaning 'calm'", level: 2, words: ["SERENE", "TRANQUIL", "PLACID", "COMPOSED"] },
      { category: "Trade ___", level: 3, words: ["MARK", "WIND", "OFF", "CRAFT"] }
    ]
  },
  {
    id: 171,
    groups: [
      { category: "Hawaiian foods", level: 0, words: ["POKE", "LOCO MOCO", "SPAM MUSUBI", "MALASADA"] },
      { category: "Things with a track", level: 1, words: ["TRAIN", "RECORD", "RACECAR", "CURTAIN"] },
      { category: "Words meaning 'wet'", level: 2, words: ["DAMP", "MOIST", "SOGGY", "DRENCHED"] },
      { category: "Half ___", level: 3, words: ["MOON", "NOTE", "BROTHER", "BAKED"] }
    ]
  },
  {
    id: 172,
    groups: [
      { category: "Indian breads", level: 0, words: ["NAAN", "CHAPATI", "PARATHA", "KULCHA"] },
      { category: "Things with a web", level: 1, words: ["SPIDER", "DUCK", "INTERNET", "FABRIC"] },
      { category: "Words meaning 'ugly'", level: 2, words: ["HIDEOUS", "GHASTLY", "GROTESQUE", "UNSIGHTLY"] },
      { category: "Show ___", level: 3, words: ["DOWN", "TIME", "CASE", "ROOM"] }
    ]
  },
  {
    id: 173,
    groups: [
      { category: "Mushroom types", level: 0, words: ["OYSTER", "ENOKI", "LION MANE", "PORCINI"] },
      { category: "Things with a zipper", level: 1, words: ["JACKET", "BAG", "TENT", "BOOT"] },
      { category: "Words meaning 'to agree'", level: 2, words: ["CONCUR", "ASSENT", "CONSENT", "ENDORSE"] },
      { category: "Way ___", level: 3, words: ["SIDE", "WARD", "FARE", "LAID"] }
    ]
  },
  {
    id: 174,
    groups: [
      { category: "Moroccan dishes", level: 0, words: ["TAGINE", "COUSCOUS", "HARIRA", "PASTILLA"] },
      { category: "Things with a magnet", level: 1, words: ["FRIDGE", "COMPASS", "SPEAKER", "MRI"] },
      { category: "Words meaning 'to shake'", level: 2, words: ["TREMBLE", "QUIVER", "SHUDDER", "QUAKE"] },
      { category: "Stair ___", level: 3, words: ["CASE", "WAY", "WELL", "MASTER"] }
    ]
  },
  {
    id: 175,
    groups: [
      { category: "Apples", level: 0, words: ["GALA", "FUJI", "HONEYCRISP", "GRANNY SMITH"] },
      { category: "Things with a fin", level: 1, words: ["SHARK", "ROCKET", "SURFBOARD", "RADIATOR"] },
      { category: "Words meaning 'to avoid'", level: 2, words: ["DODGE", "EVADE", "SIDESTEP", "DUCK"] },
      { category: "Pit ___", level: 3, words: ["BULL", "FALL", "STOP", "CREW"] }
    ]
  },
  {
    id: 176,
    groups: [
      { category: "Indonesian foods", level: 0, words: ["SATAY", "NASI GORENG", "RENDANG", "TEMPEH"] },
      { category: "Things with a wheel", level: 1, words: ["BICYCLE", "HAMSTER", "SHIP", "ROULETTE"] },
      { category: "Words meaning 'mysterious'", level: 2, words: ["CRYPTIC", "ARCANE", "ENIGMATIC", "OCCULT"] },
      { category: "Point ___", level: 3, words: ["BLANK", "GUARD", "LESS", "SETTER"] }
    ]
  },
  {
    id: 177,
    groups: [
      { category: "Types of pepper", level: 0, words: ["BELL", "GHOST", "CHIPOTLE", "POBLANO"] },
      { category: "Things with a stripe", level: 1, words: ["ZEBRA", "TIGER", "FLAG", "CANDY CANE"] },
      { category: "Words meaning 'to help'", level: 2, words: ["AID", "ASSIST", "FOSTER", "BOLSTER"] },
      { category: "Fly ___", level: 3, words: ["WHEEL", "OVER", "PAPER", "WEIGHT"] }
    ]
  },
  {
    id: 178,
    groups: [
      { category: "Japanese sweets", level: 0, words: ["MOCHI", "DANGO", "TAIYAKI", "DORAYAKI"] },
      { category: "Things with a stem", level: 1, words: ["FLOWER", "CHERRY", "WINE GLASS", "MUSHROOM"] },
      { category: "Words meaning 'new'", level: 2, words: ["NOVEL", "FRESH", "MODERN", "CURRENT"] },
      { category: "Jam ___", level: 3, words: ["SESSION", "PACKED", "BOREE", "JAR"] }
    ]
  },
  {
    id: 179,
    groups: [
      { category: "Frog species", level: 0, words: ["TREE FROG", "BULLFROG", "DART FROG", "LEOPARD FROG"] },
      { category: "Things with a spout", level: 1, words: ["TEAPOT", "WHALE", "GUTTER", "WATERING CAN"] },
      { category: "Words meaning 'to bother'", level: 2, words: ["PESTER", "HARASS", "HASSLE", "BADGER"] },
      { category: "Key ___", level: 3, words: ["STONE", "HOLE", "WORD", "BOARD"] }
    ]
  },
  {
    id: 180,
    groups: [
      { category: "Brazilian dishes", level: 0, words: ["FEIJOADA", "COXINHA", "BRIGADEIRO", "ACAI BOWL"] },
      { category: "Things with a mane", level: 1, words: ["LION", "HORSE", "ZEBRA", "GUITARIST"] },
      { category: "Words meaning 'to boast'", level: 2, words: ["BRAG", "CROW", "FLAUNT", "GLOAT"] },
      { category: "Run ___", level: 3, words: ["DOWN", "OFF", "WAY", "ABOUT"] }
    ]
  },
  {
    id: 181,
    groups: [
      { category: "German foods", level: 0, words: ["BRATWURST", "PRETZEL", "SCHNITZEL", "SAUERKRAUT"] },
      { category: "Things with a peak", level: 1, words: ["MOUNTAIN", "CAP", "GRAPH", "WAVE"] },
      { category: "Words meaning 'to wander'", level: 2, words: ["STRAY", "ROVE", "TREK", "TRAIPSE"] },
      { category: "Step ___", level: 3, words: ["FATHER", "LADDER", "CHILD", "STONE"] }
    ]
  },
  {
    id: 182,
    groups: [
      { category: "River fish", level: 0, words: ["CATFISH", "PIKE", "PERCH", "CARP"] },
      { category: "Things that are transparent", level: 1, words: ["GLASS", "WATER", "JELLYFISH", "CELLOPHANE"] },
      { category: "Words meaning 'to cut'", level: 2, words: ["CARVE", "SLICE", "SEVER", "CLEAVE"] },
      { category: "Corner ___", level: 3, words: ["STONE", "BACK", "KICK", "SHOP"] }
    ]
  },
  {
    id: 183,
    groups: [
      { category: "French cheeses", level: 0, words: ["BRIE", "COMTE", "REBLOCHON", "SAINT AGUR"] },
      { category: "Things with a blade", level: 1, words: ["SWORD", "FAN", "GRASS", "RAZOR"] },
      { category: "Words meaning 'to persuade'", level: 2, words: ["CONVINCE", "ENTICE", "TEMPT", "LURE"] },
      { category: "Tooth ___", level: 3, words: ["ACHE", "BRUSH", "PASTE", "SOME"] }
    ]
  },
  {
    id: 184,
    groups: [
      { category: "Pelts and furs", level: 0, words: ["MINK", "SABLE", "ERMINE", "CHINCHILLA"] },
      { category: "Things with a dock", level: 1, words: ["BOAT", "PHONE", "COURTROOM", "SPACE STATION"] },
      { category: "Words meaning 'to vanish'", level: 2, words: ["EVAPORATE", "DISSOLVE", "FADE", "DISSIPATE"] },
      { category: "Pull ___", level: 3, words: ["OVER", "BACK", "OUT", "STRING"] }
    ]
  },
  {
    id: 185,
    groups: [
      { category: "Lebanese dishes", level: 0, words: ["TABBOULEH", "FATTOUSH", "KIBBEH", "MANOUSHE"] },
      { category: "Things with a cord", level: 1, words: ["PHONE", "GUITAR", "PARACHUTE", "LAMP"] },
      { category: "Words meaning 'to try'", level: 2, words: ["ATTEMPT", "ENDEAVOR", "STRIVE", "VENTURE"] },
      { category: "Eye ___", level: 3, words: ["BROW", "BALL", "OPENER", "CATCH"] }
    ]
  },
  {
    id: 186,
    groups: [
      { category: "Polish foods", level: 0, words: ["PIEROGI", "BIGOS", "KIELBASA", "BORSCHT"] },
      { category: "Things with a paddle", level: 1, words: ["CANOE", "PING PONG", "BUTTER", "SPANKING"] },
      { category: "Words meaning 'to sparkle'", level: 2, words: ["TWINKLE", "GLITTER", "SHIMMER", "GLINT"] },
      { category: "Pay ___", level: 3, words: ["CHECK", "DAY", "ROLL", "OFF"] }
    ]
  },
  {
    id: 187,
    groups: [
      { category: "Types of tuna", level: 0, words: ["BLUEFIN", "YELLOWFIN", "ALBACORE", "SKIPJACK"] },
      { category: "Things with a perch", level: 1, words: ["BIRD", "PARROT", "LIFEGUARD", "BALCONY"] },
      { category: "Words meaning 'to scatter'", level: 2, words: ["DISPERSE", "STREW", "SPRINKLE", "SPLAY"] },
      { category: "Hot ___", level: 3, words: ["DOG", "LINE", "POT", "SHOT"] }
    ]
  },
  {
    id: 188,
    groups: [
      { category: "Succulents", level: 0, words: ["ALOE", "JADE", "AGAVE", "SEDUM"] },
      { category: "Things that are elastic", level: 1, words: ["RUBBER BAND", "WAISTBAND", "TRAMPOLINE", "BUNGEE"] },
      { category: "Words meaning 'weird'", level: 2, words: ["EERIE", "UNCANNY", "SURREAL", "OUTLANDISH"] },
      { category: "Spot ___", level: 3, words: ["LIGHT", "CHECK", "LESS", "TED"] }
    ]
  },
  {
    id: 189,
    groups: [
      { category: "Spanish tapas", level: 0, words: ["PATATAS BRAVAS", "CROQUETAS", "GAMBAS", "JAMON"] },
      { category: "Things with a chamber", level: 1, words: ["HEART", "GUN", "CAVE", "SENATE"] },
      { category: "Words meaning 'to suggest'", level: 2, words: ["PROPOSE", "IMPLY", "HINT", "INSINUATE"] },
      { category: "White ___", level: 3, words: ["BOARD", "WASH", "HOUSE", "COLLAR"] }
    ]
  },
  {
    id: 190,
    groups: [
      { category: "Types of lettuce", level: 0, words: ["ICEBERG", "ROMAINE", "BUTTER", "FRISEE"] },
      { category: "Things with a rudder", level: 1, words: ["BOAT", "AIRPLANE", "SUBMARINE", "KAYAK"] },
      { category: "Words meaning 'to reveal'", level: 2, words: ["UNMASK", "UNCOVER", "BETRAY", "BARE"] },
      { category: "Blank shot", level: 3, words: ["LONG", "BIG", "CHEAP", "MOON"] }
    ]
  },
  {
    id: 191,
    groups: [
      { category: "Diving equipment", level: 0, words: ["SNORKEL", "WETSUIT", "TANK", "MASK"] },
      { category: "Things with a fuse", level: 1, words: ["BOMB", "FIREWORK", "CIRCUIT", "TEMPER"] },
      { category: "Words meaning 'to wander'", level: 2, words: ["AMBLE", "MOSEY", "SAUNTER", "GALLIVANT"] },
      { category: "Nail ___", level: 3, words: ["BED", "BITER", "GUN", "POLISH"] }
    ]
  },
  {
    id: 192,
    groups: [
      { category: "Egyptian foods", level: 0, words: ["KOSHARI", "FUL MEDAMES", "DUKKAH", "MOLOKHIA"] },
      { category: "Things with a nest", level: 1, words: ["BIRD", "WASP", "EGG", "TABLE"] },
      { category: "Words meaning 'to defeat'", level: 2, words: ["VANQUISH", "CONQUER", "ROUT", "TOPPLE"] },
      { category: "Land ___", level: 3, words: ["SCAPE", "LORD", "FALL", "LOCKED"] }
    ]
  },
  {
    id: 193,
    groups: [
      { category: "Olives", level: 0, words: ["KALAMATA", "CERIGNOLA", "PICHOLINE", "GAETA"] },
      { category: "Things with a root", level: 1, words: ["TREE", "TOOTH", "WORD", "GINGER"] },
      { category: "Words meaning 'to jump'", level: 2, words: ["LEAP", "VAULT", "BOUND", "SPRING"] },
      { category: "Gun ___", level: 3, words: ["POWDER", "FIRE", "SHIP", "SHOT"] }
    ]
  },
  {
    id: 194,
    groups: [
      { category: "Russian dishes", level: 0, words: ["BORSCHT", "PELMENI", "BLINI", "BEEF STROGANOFF"] },
      { category: "Things with a hook", level: 1, words: ["FISHING ROD", "CRANE", "COAT RACK", "PIRATE"] },
      { category: "Words meaning 'to grip'", level: 2, words: ["CLASP", "CLUTCH", "GRASP", "CLENCH"] },
      { category: "Bare ___", level: 3, words: ["LY", "FOOT", "HANDED", "KNUCKLE"] }
    ]
  },
  {
    id: 195,
    groups: [
      { category: "Antarctic animals", level: 0, words: ["SEAL", "PENGUIN", "ALBATROSS", "KRILL"] },
      { category: "Things with a gauge", level: 1, words: ["FUEL", "TIRE", "RAILROAD", "SHOTGUN"] },
      { category: "Words meaning 'empty'", level: 2, words: ["VACANT", "HOLLOW", "BARREN", "VOID"] },
      { category: "Fore ___", level: 3, words: ["HEAD", "CAST", "ARM", "SIGHT"] }
    ]
  },
  {
    id: 196,
    groups: [
      { category: "Thai curries", level: 0, words: ["GREEN", "RED", "YELLOW", "MASSAMAN"] },
      { category: "Things with a pedestal", level: 1, words: ["STATUE", "SINK", "TROPHY", "COLUMN"] },
      { category: "Words meaning 'lazy'", level: 2, words: ["IDLE", "SLOTHFUL", "INDOLENT", "LETHARGIC"] },
      { category: "Lock ___", level: 3, words: ["SMITH", "JAW", "DOWN", "STEP"] }
    ]
  },
  {
    id: 197,
    groups: [
      { category: "Salmon preparations", level: 0, words: ["SMOKED", "GRAVLAX", "SASHIMI", "TARTARE"] },
      { category: "Things that are braided", level: 1, words: ["RUG", "BELT", "CORD", "PASTRY"] },
      { category: "Words meaning 'rare'", level: 2, words: ["SCARCE", "UNCOMMON", "SPARSE", "ELUSIVE"] },
      { category: "Back ___", level: 3, words: ["HAND", "LASH", "DROP", "TRACK"] }
    ]
  },
  {
    id: 198,
    groups: [
      { category: "Stews around the world", level: 0, words: ["GOULASH", "GUMBO", "CASSOULET", "TAGINE"] },
      { category: "Things with a gauge", level: 1, words: ["PRESSURE", "RAIN", "WIRE", "WIND"] },
      { category: "Words meaning 'to calm down'", level: 2, words: ["SUBSIDE", "ABATE", "RELENT", "RECEDE"] },
      { category: "Sun ___", level: 3, words: ["BEAM", "SPOT", "STROKE", "LIGHT"] }
    ]
  },
  {
    id: 199,
    groups: [
      { category: "Types of honey", level: 0, words: ["MANUKA", "CLOVER", "WILDFLOWER", "BUCKWHEAT"] },
      { category: "Things with a spine", level: 1, words: ["BOOK", "HEDGEHOG", "CACTUS", "HUMAN"] },
      { category: "Words meaning 'clever'", level: 2, words: ["ASTUTE", "SHREWD", "SAVVY", "SHARP"] },
      { category: "Blood ___", level: 3, words: ["SHED", "LINE", "BATH", "STREAM"] }
    ]
  },
  {
    id: 200,
    groups: [
      { category: "Dim sum items", level: 0, words: ["SIU MAI", "HAR GOW", "CHAR SIU BAO", "TURNIP CAKE"] },
      { category: "Things with a bark", level: 1, words: ["DOG", "TREE", "CHOCOLATE", "CINNAMON"] },
      { category: "Words meaning 'to strengthen'", level: 2, words: ["FORTIFY", "REINFORCE", "BOLSTER", "BUTTRESS"] },
      { category: "Double ___", level: 3, words: ["DOWN", "BACK", "TIME", "HEADER"] }
    ]
  },
  {
    id: 201,
    groups: [
      { category: "Bagel flavors", level: 0, words: ["EVERYTHING", "SESAME", "POPPY", "ONION"] },
      { category: "Things with a plume", level: 1, words: ["SMOKE", "PEACOCK", "HELMET", "VOLCANO"] },
      { category: "Words meaning 'to beg'", level: 2, words: ["PLEAD", "IMPLORE", "BESEECH", "ENTREAT"] },
      { category: "Over ___", level: 3, words: ["COAT", "TIME", "LOAD", "RULE"] }
    ]
  },
  {
    id: 202,
    groups: [
      { category: "Chili varieties", level: 0, words: ["ANCHO", "GUAJILLO", "PASILLA", "ARBOL"] },
      { category: "Things with a pedal", level: 1, words: ["BICYCLE", "ORGAN", "SEWING MACHINE", "CAR"] },
      { category: "Words meaning 'to break'", level: 2, words: ["SHATTER", "FRACTURE", "RUPTURE", "SPLINTER"] },
      { category: "Arm ___", level: 3, words: ["CHAIR", "PIT", "REST", "BAND"] }
    ]
  },
  {
    id: 203,
    groups: [
      { category: "Pizza styles", level: 0, words: ["NEAPOLITAN", "DEEP DISH", "THIN CRUST", "SICILIAN"] },
      { category: "Things with a vent", level: 1, words: ["VOLCANO", "DRYER", "HOOD", "SUBMARINE"] },
      { category: "Words meaning 'to flee'", level: 2, words: ["ABSCOND", "ESCAPE", "BOLT", "SCARPER"] },
      { category: "Cross ___", level: 3, words: ["BAR", "WALK", "HAIR", "BREED"] }
    ]
  },
  {
    id: 204,
    groups: [
      { category: "Coffee origins", level: 0, words: ["COLOMBIAN", "ETHIOPIAN", "SUMATRA", "KONA"] },
      { category: "Things with a band", level: 1, words: ["RING", "RUBBER", "WRIST", "ROCK"] },
      { category: "Words meaning 'to avoid'", level: 2, words: ["SHUN", "ELUDE", "SKIRT", "ESCHEW"] },
      { category: "Drop ___", level: 3, words: ["KICK", "OUT", "LET", "SHIP"] }
    ]
  },
  {
    id: 205,
    groups: [
      { category: "Raptors", level: 0, words: ["EAGLE", "OSPREY", "CONDOR", "KITE"] },
      { category: "Things with a strap", level: 1, words: ["WATCH", "SANDAL", "GUITAR", "BACKPACK"] },
      { category: "Words meaning 'to lessen'", level: 2, words: ["DIMINISH", "MITIGATE", "CURTAIL", "ALLEVIATE"] },
      { category: "Milk ___", level: 3, words: ["SHAKE", "MAID", "MAN", "WEED"] }
    ]
  },
  {
    id: 206,
    groups: [
      { category: "Types of cake", level: 0, words: ["CHIFFON", "BUNDT", "POUND", "ANGEL FOOD"] },
      { category: "Things with a grid", level: 1, words: ["CROSSWORD", "MAP", "WAFFLE", "CHESS BOARD"] },
      { category: "Words meaning 'to ban'", level: 2, words: ["OUTLAW", "VETO", "EMBARGO", "CENSOR"] },
      { category: "House ___", level: 3, words: ["PLANT", "BOAT", "CAT", "WIFE"] }
    ]
  },
  {
    id: 207,
    groups: [
      { category: "Nut butters", level: 0, words: ["PEANUT", "ALMOND", "CASHEW", "TAHINI"] },
      { category: "Things with a scale", level: 1, words: ["MOUNTAIN", "LIZARD", "BATHROOM", "GUITAR"] },
      { category: "Words meaning 'to hide'", level: 2, words: ["CONCEAL", "STASH", "TUCK", "HARBOR"] },
      { category: "Gate ___", level: 3, words: ["WAY", "KEEPER", "HOUSE", "CRASH"] }
    ]
  },
  {
    id: 208,
    groups: [
      { category: "Sausage types", level: 0, words: ["BRATWURST", "ANDOUILLE", "MERGUEZ", "LINGUICA"] },
      { category: "Things with a mirror", level: 1, words: ["BATHROOM", "CAR", "TELESCOPE", "FUN HOUSE"] },
      { category: "Words meaning 'to destroy'", level: 2, words: ["DEMOLISH", "RAZE", "ANNIHILATE", "OBLITERATE"] },
      { category: "Well ___", level: 3, words: ["FARE", "COME", "BRED", "WISHER"] }
    ]
  },
  {
    id: 209,
    groups: [
      { category: "Types of vinegar", level: 0, words: ["BALSAMIC", "CIDER", "RICE", "MALT"] },
      { category: "Things with a ledge", level: 1, words: ["CLIFF", "WINDOW", "SHELF", "BUILDING"] },
      { category: "Words meaning 'to wander aimlessly'", level: 2, words: ["LOITER", "DAWDLE", "LINGER", "MILL"] },
      { category: "Candle ___", level: 3, words: ["LIGHT", "STICK", "WICK", "POWER"] }
    ]
  },
  {
    id: 210,
    groups: [
      { category: "Smoked meats", level: 0, words: ["BRISKET", "PASTRAMI", "BACON", "JERKY"] },
      { category: "Things with a beam", level: 1, words: ["FLASHLIGHT", "BARN", "GYMNAST", "SUNLIGHT"] },
      { category: "Words meaning 'to honor'", level: 2, words: ["REVERE", "ESTEEM", "VENERATE", "CHERISH"] },
      { category: "Ear ___", level: 3, words: ["PHONE", "MARK", "NEST", "PIECE"] }
    ]
  },
  {
    id: 211,
    groups: [
      { category: "Steak cuts", level: 0, words: ["RIBEYE", "SIRLOIN", "FILET", "FLANK"] },
      { category: "Things with a channel", level: 1, words: ["TV", "RIVER", "ENGLISH", "RADIO"] },
      { category: "Words meaning 'to gather'", level: 2, words: ["ASSEMBLE", "AMASS", "MUSTER", "CONVENE"] },
      { category: "Storm ___", level: 3, words: ["TROOPER", "DRAIN", "FRONT", "CHASER"] }
    ]
  },
  {
    id: 212,
    groups: [
      { category: "Dumpling types", level: 0, words: ["GYOZA", "WONTON", "PIEROGI", "MOMO"] },
      { category: "Things with a sole", level: 1, words: ["SHOE", "FISH", "FOOT", "SOUL MUSIC"] },
      { category: "Words meaning 'to anger'", level: 2, words: ["ENRAGE", "INFURIATE", "PROVOKE", "INCENSE"] },
      { category: "Wall ___", level: 3, words: ["PAPER", "ET", "EYE", "RUS"] }
    ]
  },
  {
    id: 213,
    groups: [
      { category: "Cocktails", level: 0, words: ["MOJITO", "MARGARITA", "DAIQUIRI", "NEGRONI"] },
      { category: "Things with a plug", level: 1, words: ["BATHTUB", "OUTLET", "SPARK", "EAR"] },
      { category: "Words meaning 'to admire'", level: 2, words: ["ADORE", "IDOLIZE", "WORSHIP", "TREASURE"] },
      { category: "Hard ___", level: 3, words: ["LINE", "CORE", "BACK", "TOP"] }
    ]
  },
  {
    id: 214,
    groups: [
      { category: "Charcuterie items", level: 0, words: ["PROSCIUTTO", "SALAMI", "CAPICOLA", "MORTADELLA"] },
      { category: "Things with a hatch", level: 1, words: ["SUBMARINE", "EGG", "SHIP", "ATTIC"] },
      { category: "Words meaning 'to hurry'", level: 2, words: ["BOLT", "DART", "SPRINT", "ZOOM"] },
      { category: "Leg ___", level: 3, words: ["ROOM", "END", "ACY", "WORK"] }
    ]
  },
  {
    id: 215,
    groups: [
      { category: "Tea varieties", level: 0, words: ["ASSAM", "CEYLON", "OOLONG", "SENCHA"] },
      { category: "Things with a spine", level: 1, words: ["PORCUPINE", "MOUNTAIN RANGE", "SEA URCHIN", "BOOK"] },
      { category: "Words meaning 'to argue'", level: 2, words: ["DISPUTE", "SQUABBLE", "BICKER", "WRANGLE"] },
      { category: "Shell ___", level: 3, words: ["FISH", "SHOCK", "FIRE", "TER"] }
    ]
  },
  {
    id: 216,
    groups: [
      { category: "Soup varieties", level: 0, words: ["PUMPKIN", "TOMATO", "LENTIL", "MUSHROOM"] },
      { category: "Things with a patch", level: 1, words: ["EYE", "GARDEN", "JACKET", "SOFTWARE"] },
      { category: "Words meaning 'to shine'", level: 2, words: ["GLEAM", "GLOW", "BEAM", "BLAZE"] },
      { category: "Band ___", level: 3, words: ["AID", "WAGON", "WIDTH", "STAND"] }
    ]
  },
  {
    id: 217,
    groups: [
      { category: "Wine regions", level: 0, words: ["BORDEAUX", "TUSCANY", "NAPA", "RIOJA"] },
      { category: "Things with a harbor", level: 1, words: ["PEARL", "CITY", "BOAT", "SEAL"] },
      { category: "Words meaning 'to charm'", level: 2, words: ["CAPTIVATE", "ENCHANT", "BEWITCH", "MESMERIZE"] },
      { category: "Water ___", level: 3, words: ["GATE", "FRONT", "SHED", "LOGGED"] }
    ]
  },
  {
    id: 218,
    groups: [
      { category: "Breakfast foods", level: 0, words: ["PANCAKE", "WAFFLE", "OMELET", "BAGEL"] },
      { category: "Olympic sports", level: 1, words: ["FENCING", "JAVELIN", "ROWING", "ARCHERY"] },
      { category: "Words meaning 'to flee'", level: 2, words: ["ESCAPE", "BOLT", "SCATTER", "RETREAT"] },
      { category: "Thunder ___", level: 3, words: ["STORM", "BOLT", "STRUCK", "CLAP"] }
    ]
  },
  {
    id: 219,
    groups: [
      { category: "Gemstones", level: 0, words: ["EMERALD", "SAPPHIRE", "TOPAZ", "GARNET"] },
      { category: "Things in a gym", level: 1, words: ["BENCH", "MAT", "ROPE", "MIRROR"] },
      { category: "Words meaning 'to steal'", level: 2, words: ["PILFER", "SWIPE", "PINCH", "FILCH"] },
      { category: "Basket ___", level: 3, words: ["BALL", "CASE", "WEAVE", "WORK"] }
    ]
  },
  {
    id: 220,
    groups: [
      { category: "Dog breeds", level: 0, words: ["BEAGLE", "POODLE", "BOXER", "COLLIE"] },
      { category: "Things that spin", level: 1, words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Words meaning 'to annoy'", level: 2, words: ["PESTER", "RANKLE", "GRATE", "NETTLE"] },
      { category: "Fire ___", level: 3, words: ["PLACE", "FLY", "TRUCK", "WORK"] }
    ]
  },
  {
    id: 221,
    groups: [
      { category: "Citrus fruits", level: 0, words: ["LEMON", "LIME", "ORANGE", "TANGERINE"] },
      { category: "Things in a wallet", level: 1, words: ["CASH", "LICENSE", "PHOTO", "RECEIPT"] },
      { category: "Words meaning 'to wander'", level: 2, words: ["ROAM", "DRIFT", "MEANDER", "RAMBLE"] },
      { category: "Black ___", level: 3, words: ["BIRD", "SMITH", "BERRY", "JACK"] }
    ]
  },
  {
    id: 222,
    groups: [
      { category: "Musical genres", level: 0, words: ["JAZZ", "BLUES", "FUNK", "REGGAE"] },
      { category: "Things with wings", level: 1, words: ["AIRPLANE", "ANGEL", "BAT", "STAGE"] },
      { category: "Words meaning 'to praise'", level: 2, words: ["LAUD", "EXTOL", "COMMEND", "ACCLAIM"] },
      { category: "Sun ___", level: 3, words: ["BURN", "FLOWER", "DIAL", "ROOF"] }
    ]
  },
  {
    id: 223,
    groups: [
      { category: "Salad greens", level: 0, words: ["ARUGULA", "SPINACH", "KALE", "ROMAINE"] },
      { category: "Casino games", level: 1, words: ["CRAPS", "ROULETTE", "BACCARAT", "SLOTS"] },
      { category: "Words meaning 'to hide'", level: 2, words: ["CONCEAL", "CLOAK", "SHROUD", "OBSCURE"] },
      { category: "Paper ___", level: 3, words: ["BACK", "CLIP", "WEIGHT", "TRAIL"] }
    ]
  },
  {
    id: 224,
    groups: [
      { category: "Zoo animals", level: 0, words: ["GIRAFFE", "ZEBRA", "HIPPO", "GORILLA"] },
      { category: "Things with strings", level: 1, words: ["GUITAR", "KITE", "PUPPET", "BALLOON"] },
      { category: "Words meaning 'to trick'", level: 2, words: ["DUPE", "HOODWINK", "BAMBOOZLE", "SWINDLE"] },
      { category: "Back ___", level: 3, words: ["BONE", "FIRE", "YARD", "TRACK"] }
    ]
  },
  {
    id: 225,
    groups: [
      { category: "Italian dishes", level: 0, words: ["RISOTTO", "LASAGNA", "GNOCCHI", "BRUSCHETTA"] },
      { category: "Camping gear", level: 1, words: ["TENT", "LANTERN", "COMPASS", "CANTEEN"] },
      { category: "Words meaning 'to shatter'", level: 2, words: ["SMASH", "FRACTURE", "SPLINTER", "DEMOLISH"] },
      { category: "Cross ___", level: 3, words: ["WORD", "BOW", "WALK", "ROADS"] }
    ]
  },
  {
    id: 226,
    groups: [
      { category: "Spices", level: 0, words: ["CINNAMON", "TURMERIC", "PAPRIKA", "CUMIN"] },
      { category: "Things with keys", level: 1, words: ["PIANO", "KEYBOARD", "LOCKSMITH", "MAP"] },
      { category: "Words meaning 'to glow'", level: 2, words: ["SHIMMER", "RADIATE", "GLISTEN", "LUMINOUS"] },
      { category: "Side ___", level: 3, words: ["KICK", "LINE", "SHOW", "STEP"] }
    ]
  },
  {
    id: 227,
    groups: [
      { category: "Martial arts", level: 0, words: ["KARATE", "JUDO", "KUNG FU", "AIKIDO"] },
      { category: "Things that melt", level: 1, words: ["ICE", "BUTTER", "CHOCOLATE", "WAX"] },
      { category: "Words meaning 'to reveal'", level: 2, words: ["EXPOSE", "DIVULGE", "DISCLOSE", "UNVEIL"] },
      { category: "Head ___", level: 3, words: ["BAND", "LINE", "QUARTERS", "STRONG"] }
    ]
  },
  {
    id: 228,
    groups: [
      { category: "Board games", level: 0, words: ["CHESS", "CLUE", "RISK", "SORRY"] },
      { category: "Things with bark", level: 1, words: ["DOG", "TREE", "COUGH", "CAPTAIN"] },
      { category: "Words meaning 'to confuse'", level: 2, words: ["BAFFLE", "PERPLEX", "BEWILDER", "MYSTIFY"] },
      { category: "Stone ___", level: 3, words: ["COLD", "WALL", "MASON", "HEDGE"] }
    ]
  },
  {
    id: 229,
    groups: [
      { category: "Sushi fish", level: 0, words: ["SALMON", "TUNA", "EEL", "MACKEREL"] },
      { category: "Things with a crown", level: 1, words: ["KING", "TOOTH", "ROOSTER", "HILL"] },
      { category: "Words meaning 'to bother'", level: 2, words: ["HARASS", "BADGER", "HASSLE", "NAG"] },
      { category: "Moon ___", level: 3, words: ["LIGHT", "SHINE", "WALK", "STONE"] }
    ]
  },
  {
    id: 230,
    groups: [
      { category: "Cartoon cats", level: 0, words: ["GARFIELD", "TOM", "SYLVESTER", "FELIX"] },
      { category: "Things in a pocket", level: 1, words: ["KEYS", "LINT", "COIN", "PHONE"] },
      { category: "Words meaning 'to weaken'", level: 2, words: ["ERODE", "SAP", "UNDERMINE", "DIMINISH"] },
      { category: "Gold ___", level: 3, words: ["FISH", "RUSH", "MINE", "LEAF"] }
    ]
  },
  {
    id: 231,
    groups: [
      { category: "Herbs", level: 0, words: ["BASIL", "THYME", "OREGANO", "DILL"] },
      { category: "Parts of a ship", level: 1, words: ["HULL", "MAST", "STERN", "ANCHOR"] },
      { category: "Words meaning 'to grab'", level: 2, words: ["CLUTCH", "SEIZE", "SNATCH", "GRASP"] },
      { category: "Light ___", level: 3, words: ["HOUSE", "YEAR", "WEIGHT", "BULB"] }
    ]
  },
  {
    id: 232,
    groups: [
      { category: "Ice cream flavors", level: 0, words: ["VANILLA", "MOCHA", "PISTACHIO", "MANGO"] },
      { category: "Things with a ring", level: 1, words: ["PHONE", "CIRCUS", "BOXING", "SATURN"] },
      { category: "Words meaning 'to mock'", level: 2, words: ["RIDICULE", "TAUNT", "DERIDE", "SCOFF"] },
      { category: "Snow ___", level: 3, words: ["BALL", "FLAKE", "BOARD", "DRIFT"] }
    ]
  },
  {
    id: 233,
    groups: [
      { category: "Fabrics", level: 0, words: ["SILK", "DENIM", "VELVET", "LINEN"] },
      { category: "Things that bounce", level: 1, words: ["CHECK", "BALL", "TIGGER", "IDEA"] },
      { category: "Words meaning 'to mix'", level: 2, words: ["BLEND", "MINGLE", "COMBINE", "FUSE"] },
      { category: "Tooth ___", level: 3, words: ["PASTE", "BRUSH", "FAIRY", "ACHE"] }
    ]
  },
  {
    id: 234,
    groups: [
      { category: "World capitals", level: 0, words: ["TOKYO", "OSLO", "LIMA", "CAIRO"] },
      { category: "Things with a shell", level: 1, words: ["TORTOISE", "WALNUT", "TACO", "SHOTGUN"] },
      { category: "Words meaning 'to hurry'", level: 2, words: ["HASTEN", "SCURRY", "RUSH", "HUSTLE"] },
      { category: "Rock ___", level: 3, words: ["STAR", "SLIDE", "BOTTOM", "BAND"] }
    ]
  },
  {
    id: 235,
    groups: [
      { category: "Dances", level: 0, words: ["RUMBA", "SAMBA", "FOXTROT", "POLKA"] },
      { category: "Things with scales", level: 1, words: ["FISH", "DRAGON", "MAP", "PIANO"] },
      { category: "Words meaning 'to scatter'", level: 2, words: ["DISPERSE", "STREW", "BROADCAST", "SPRINKLE"] },
      { category: "Night ___", level: 3, words: ["CAP", "CLUB", "FALL", "HAWK"] }
    ]
  },
  {
    id: 236,
    groups: [
      { category: "Nuts", level: 0, words: ["ALMOND", "CASHEW", "PECAN", "WALNUT"] },
      { category: "Things with a blade", level: 1, words: ["FAN", "SKATE", "GRASS", "KNIFE"] },
      { category: "Words meaning 'to shrink'", level: 2, words: ["DWINDLE", "CONTRACT", "WITHER", "RECEDE"] },
      { category: "Honey ___", level: 3, words: ["BEE", "MOON", "COMB", "DEW"] }
    ]
  },
  {
    id: 237,
    groups: [
      { category: "Cheeses", level: 0, words: ["BRIE", "GOUDA", "CHEDDAR", "FETA"] },
      { category: "Things with a trunk", level: 1, words: ["ELEPHANT", "CAR", "TREE", "SUITCASE"] },
      { category: "Words meaning 'to deny'", level: 2, words: ["REFUTE", "REBUFF", "REJECT", "RENOUNCE"] },
      { category: "Dream ___", level: 3, words: ["CATCHER", "LAND", "BOAT", "WORK"] }
    ]
  },
  {
    id: 238,
    groups: [
      { category: "Berries", level: 0, words: ["RASPBERRY", "CRANBERRY", "BLUEBERRY", "MULBERRY"] },
      { category: "Things with a net", level: 1, words: ["TENNIS", "FISHING", "HAMMOCK", "INTERNET"] },
      { category: "Words meaning 'to delay'", level: 2, words: ["STALL", "POSTPONE", "DEFER", "SHELVE"] },
      { category: "Eye ___", level: 3, words: ["BROW", "LASH", "SHADOW", "WITNESS"] }
    ]
  },
  {
    id: 239,
    groups: [
      { category: "Woodwind instruments", level: 0, words: ["FLUTE", "CLARINET", "OBOE", "BASSOON"] },
      { category: "Things with a cap", level: 1, words: ["BOTTLE", "MUSHROOM", "KNEE", "PEN"] },
      { category: "Words meaning 'to beg'", level: 2, words: ["IMPLORE", "PLEAD", "BESEECH", "ENTREAT"] },
      { category: "Hand ___", level: 3, words: ["SHAKE", "RAIL", "MADE", "CRAFT"] }
    ]
  },
  {
    id: 240,
    groups: [
      { category: "Tropical fruits", level: 0, words: ["PAPAYA", "GUAVA", "COCONUT", "PASSION"] },
      { category: "Things in a park", level: 1, words: ["BENCH", "FOUNTAIN", "STATUE", "SQUIRREL"] },
      { category: "Words meaning 'to forbid'", level: 2, words: ["PROHIBIT", "BAN", "OUTLAW", "VETO"] },
      { category: "Star ___", level: 3, words: ["FISH", "DUST", "BOARD", "LIGHT"] }
    ]
  },
  {
    id: 241,
    groups: [
      { category: "Knots", level: 0, words: ["BOWLINE", "CLOVE", "REEF", "SLIP"] },
      { category: "Things with a face", level: 1, words: ["CLOCK", "CLIFF", "COIN", "BUILDING"] },
      { category: "Words meaning 'to flourish'", level: 2, words: ["THRIVE", "PROSPER", "BLOOM", "BLOSSOM"] },
      { category: "Book ___", level: 3, words: ["WORM", "MARK", "SHELF", "KEEPER"] }
    ]
  },
  {
    id: 242,
    groups: [
      { category: "Desserts", level: 0, words: ["TIRAMISU", "CANNOLI", "STRUDEL", "ECLAIR"] },
      { category: "Things with teeth", level: 1, words: ["COMB", "SAW", "GEAR", "ZIPPER"] },
      { category: "Words meaning 'to rush'", level: 2, words: ["SCRAMBLE", "DASH", "SPRINT", "BARREL"] },
      { category: "Sand ___", level: 3, words: ["CASTLE", "STORM", "PAPER", "PIPER"] }
    ]
  },
  {
    id: 243,
    groups: [
      { category: "Reptiles", level: 0, words: ["IGUANA", "COBRA", "GECKO", "PYTHON"] },
      { category: "Things with a bed", level: 1, words: ["RIVER", "TRUCK", "FLOWER", "HOSPITAL"] },
      { category: "Words meaning 'to cheat'", level: 2, words: ["SWINDLE", "DEFRAUD", "FLEECE", "BILK"] },
      { category: "House ___", level: 3, words: ["HOLD", "WIFE", "PLANT", "BOAT"] }
    ]
  },
  {
    id: 244,
    groups: [
      { category: "Cocktails", level: 0, words: ["MOJITO", "MARTINI", "DAIQUIRI", "GIMLET"] },
      { category: "Things with a horn", level: 1, words: ["UNICORN", "RHINO", "CAR", "TRUMPET"] },
      { category: "Words meaning 'to soothe'", level: 2, words: ["PLACATE", "MOLLIFY", "ASSUAGE", "APPEASE"] },
      { category: "Chain ___", level: 3, words: ["SAW", "MAIL", "LINK", "GANG"] }
    ]
  },
  {
    id: 245,
    groups: [
      { category: "Constellations", level: 0, words: ["ORION", "GEMINI", "LEO", "DRACO"] },
      { category: "Things with a pit", level: 1, words: ["CHERRY", "ORCHESTRA", "MINE", "PEACH"] },
      { category: "Words meaning 'to ponder'", level: 2, words: ["MUSE", "RUMINATE", "MULL", "REFLECT"] },
      { category: "Green ___", level: 3, words: ["HOUSE", "BACK", "HORN", "PEACE"] }
    ]
  },
  {
    id: 246,
    groups: [
      { category: "Breads", level: 0, words: ["FOCACCIA", "NAAN", "CHALLAH", "PITA"] },
      { category: "Things with a tail", level: 1, words: ["COMET", "KITE", "COAT", "SHRIMP"] },
      { category: "Words meaning 'to vanish'", level: 2, words: ["EVAPORATE", "DISSOLVE", "DISSIPATE", "FADE"] },
      { category: "Over ___", level: 3, words: ["BOARD", "CAST", "TURE", "HAUL"] }
    ]
  },
  {
    id: 247,
    groups: [
      { category: "Volcanoes", level: 0, words: ["VESUVIUS", "ETNA", "FUJI", "KRAKATOA"] },
      { category: "Things in a purse", level: 1, words: ["LIPSTICK", "MIRROR", "WALLET", "TISSUE"] },
      { category: "Words meaning 'to stun'", level: 2, words: ["DAZE", "STAGGER", "STUPEFY", "FLUMMOX"] },
      { category: "Iron ___", level: 3, words: ["CLAD", "WORK", "CURTAIN", "HORSE"] }
    ]
  },
  {
    id: 248,
    groups: [
      { category: "Mushrooms", level: 0, words: ["SHIITAKE", "TRUFFLE", "CREMINI", "OYSTER"] },
      { category: "Things with a tongue", level: 1, words: ["SHOE", "FLAME", "BELL", "SNAKE"] },
      { category: "Words meaning 'to scold'", level: 2, words: ["CHASTISE", "REBUKE", "ADMONISH", "BERATE"] },
      { category: "Air ___", level: 3, words: ["PORT", "CRAFT", "TIGHT", "WAVE"] }
    ]
  },
  {
    id: 249,
    groups: [
      { category: "Peppers", level: 0, words: ["HABANERO", "SERRANO", "CAYENNE", "JALAPENO"] },
      { category: "Things with a drum", level: 1, words: ["BAND", "STICK", "ROLL", "MAJOR"] },
      { category: "Words meaning 'to climb'", level: 2, words: ["ASCEND", "SCALE", "CLAMBER", "SCRAMBLE"] },
      { category: "Foot ___", level: 3, words: ["NOTE", "PRINT", "HOLD", "BALL"] }
    ]
  },
  {
    id: 250,
    groups: [
      { category: "Rivers", level: 0, words: ["DANUBE", "THAMES", "NILE", "AMAZON"] },
      { category: "Things with a handle", level: 1, words: ["MUG", "DOOR", "SUITCASE", "PAN"] },
      { category: "Words meaning 'to destroy'", level: 2, words: ["RAVAGE", "DECIMATE", "RUIN", "WRECK"] },
      { category: "Storm ___", level: 3, words: ["TROOPER", "DRAIN", "CHASER", "FRONT"] }
    ]
  },
  {
    id: 251,
    groups: [
      { category: "Pasta shapes", level: 0, words: ["PENNE", "RIGATONI", "FUSILLI", "ORZO"] },
      { category: "Things that spin", level: 1, words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Words meaning 'to flee'", level: 2, words: ["ABSCOND", "BOLT", "ESCAPE", "SCATTER"] },
      { category: "Black ___", level: 3, words: ["BERRY", "SMITH", "JACK", "BIRD"] }
    ]
  },
  {
    id: 252,
    groups: [
      { category: "Breakfast foods", level: 0, words: ["PANCAKE", "WAFFLE", "OMELET", "GRANOLA"] },
      { category: "Olympic sports", level: 1, words: ["FENCING", "ROWING", "JAVELIN", "BOXING"] },
      { category: "Words meaning 'to sparkle'", level: 2, words: ["SHIMMER", "GLISTEN", "TWINKLE", "GLIMMER"] },
      { category: "___ light", level: 3, words: ["FLASH", "MOON", "STAR", "HIGH"] }
    ]
  },
  {
    id: 253,
    groups: [
      { category: "Dog breeds", level: 0, words: ["BEAGLE", "POODLE", "BOXER", "COLLIE"] },
      { category: "Things with strings", level: 1, words: ["GUITAR", "KITE", "PUPPET", "BOW"] },
      { category: "Words meaning 'to annoy'", level: 2, words: ["IRRITATE", "PESTER", "NETTLE", "GALL"] },
      { category: "Fire ___", level: 3, words: ["FLY", "WORK", "CRACKER", "PLACE"] }
    ]
  },
  {
    id: 254,
    groups: [
      { category: "Gemstones", level: 0, words: ["RUBY", "TOPAZ", "OPAL", "GARNET"] },
      { category: "Things that drip", level: 1, words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Words meaning 'brave'", level: 2, words: ["VALIANT", "GALLANT", "INTREPID", "BOLD"] },
      { category: "Gold ___", level: 3, words: ["FISH", "MINE", "RUSH", "DIGGER"] }
    ]
  },
  {
    id: 255,
    groups: [
      { category: "Dances", level: 0, words: ["SALSA", "TANGO", "WALTZ", "POLKA"] },
      { category: "Things in a toolbox", level: 1, words: ["WRENCH", "PLIERS", "HAMMER", "DRILL"] },
      { category: "Words meaning 'to praise'", level: 2, words: ["COMMEND", "EXTOL", "LAUD", "ACCLAIM"] },
      { category: "Snow ___", level: 3, words: ["FLAKE", "BOARD", "DRIFT", "PLOW"] }
    ]
  },
  {
    id: 256,
    groups: [
      { category: "Berries", level: 0, words: ["RASPBERRY", "CRANBERRY", "MULBERRY", "GOOSEBERRY"] },
      { category: "Things with a spine", level: 1, words: ["BOOK", "CACTUS", "HEDGEHOG", "MOUNTAIN"] },
      { category: "Words meaning 'to wander'", level: 2, words: ["MEANDER", "ROAM", "RAMBLE", "DRIFT"] },
      { category: "Key ___", level: 3, words: ["BOARD", "STONE", "CHAIN", "NOTE"] }
    ]
  },
  {
    id: 257,
    groups: [
      { category: "Citrus fruits", level: 0, words: ["LEMON", "LIME", "GRAPEFRUIT", "TANGERINE"] },
      { category: "Things that howl", level: 1, words: ["WOLF", "WIND", "COYOTE", "SIREN"] },
      { category: "Words meaning 'to grab'", level: 2, words: ["SEIZE", "CLUTCH", "SNATCH", "GRASP"] },
      { category: "Moon ___", level: 3, words: ["SHINE", "WALK", "BEAM", "LIGHT"] }
    ]
  },
  {
    id: 258,
    groups: [
      { category: "Sharks", level: 0, words: ["HAMMER", "TIGER", "BULL", "NURSE"] },
      { category: "Things in a wallet", level: 1, words: ["CASH", "LICENSE", "RECEIPT", "PHOTO"] },
      { category: "Words meaning 'to reveal'", level: 2, words: ["DISCLOSE", "DIVULGE", "EXPOSE", "UNVEIL"] },
      { category: "Sun ___", level: 3, words: ["BURN", "FLOWER", "SCREEN", "RISE"] }
    ]
  },
  {
    id: 259,
    groups: [
      { category: "Cheeses", level: 0, words: ["CHEDDAR", "BRIE", "GOUDA", "FETA"] },
      { category: "Things with a crown", level: 1, words: ["KING", "TOOTH", "ROOSTER", "PINEAPPLE"] },
      { category: "Words meaning 'to shrink'", level: 2, words: ["CONTRACT", "DIMINISH", "WANE", "DWINDLE"] },
      { category: "Star ___", level: 3, words: ["FISH", "BOARD", "DUST", "LIGHT"] }
    ]
  },
  {
    id: 260,
    groups: [
      { category: "Garden flowers", level: 0, words: ["DAHLIA", "PETUNIA", "MARIGOLD", "ZINNIA"] },
      { category: "Things that tick", level: 1, words: ["CLOCK", "BOMB", "INSECT", "HEART"] },
      { category: "Words meaning 'to soothe'", level: 2, words: ["PLACATE", "MOLLIFY", "APPEASE", "PACIFY"] },
      { category: "Hand ___", level: 3, words: ["SHAKE", "MADE", "CUFF", "STAND"] }
    ]
  },
  {
    id: 261,
    groups: [
      { category: "Nuts", level: 0, words: ["CASHEW", "PECAN", "ALMOND", "WALNUT"] },
      { category: "Things that bloom", level: 1, words: ["ROSE", "ALGAE", "YOUTH", "ROMANCE"] },
      { category: "Words meaning 'to mock'", level: 2, words: ["RIDICULE", "DERIDE", "SCOFF", "TAUNT"] },
      { category: "Back ___", level: 3, words: ["FIRE", "STAGE", "BONE", "LASH"] }
    ]
  },
  {
    id: 262,
    groups: [
      { category: "Tropical fruits", level: 0, words: ["MANGO", "PAPAYA", "GUAVA", "COCONUT"] },
      { category: "Things with a blade", level: 1, words: ["KNIFE", "FAN", "SKATE", "GRASS"] },
      { category: "Words meaning 'to ponder'", level: 2, words: ["MULL", "RUMINATE", "MUSE", "REFLECT"] },
      { category: "Side ___", level: 3, words: ["KICK", "TRACK", "LINE", "STEP"] }
    ]
  },
  {
    id: 263,
    groups: [
      { category: "Spices", level: 0, words: ["CUMIN", "TURMERIC", "PAPRIKA", "SAFFRON"] },
      { category: "Things that hiss", level: 1, words: ["SNAKE", "STEAM", "CAT", "TIRE"] },
      { category: "Words meaning 'to ban'", level: 2, words: ["PROHIBIT", "FORBID", "OUTLAW", "BAR"] },
      { category: "Head ___", level: 3, words: ["BAND", "LINE", "HUNTER", "STRONG"] }
    ]
  },
  {
    id: 264,
    groups: [
      { category: "Woodwind family", level: 0, words: ["CLARINET", "OBOE", "FLUTE", "BASSOON"] },
      { category: "Things with a shell", level: 1, words: ["TURTLE", "EGG", "LOBSTER", "WALNUT"] },
      { category: "Words meaning 'to beg'", level: 2, words: ["IMPLORE", "BESEECH", "ENTREAT", "PLEAD"] },
      { category: "Cross ___", level: 3, words: ["BOW", "WALK", "WORD", "ROADS"] }
    ]
  },
  {
    id: 265,
    groups: [
      { category: "Deserts", level: 0, words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things that buzz", level: 1, words: ["BEE", "PHONE", "RAZOR", "CROWD"] },
      { category: "Words meaning 'to hurry'", level: 2, words: ["HASTEN", "EXPEDITE", "HUSTLE", "DASH"] },
      { category: "Book ___", level: 3, words: ["WORM", "MARK", "CASE", "SHELF"] }
    ]
  },
  {
    id: 266,
    groups: [
      { category: "Sushi types", level: 0, words: ["NIGIRI", "SASHIMI", "TEMAKI", "URAMAKI"] },
      { category: "Things with a wing", level: 1, words: ["BIRD", "PLANE", "HOSPITAL", "MANSION"] },
      { category: "Words meaning 'to tremble'", level: 2, words: ["QUIVER", "SHUDDER", "QUAKE", "SHIVER"] },
      { category: "Ring ___", level: 3, words: ["LEADER", "TONE", "SIDE", "WORM"] }
    ]
  },
  {
    id: 267,
    groups: [
      { category: "Salad greens", level: 0, words: ["ARUGULA", "KALE", "SPINACH", "ROMAINE"] },
      { category: "Things with a horn", level: 1, words: ["RHINO", "CAR", "UNICORN", "BULL"] },
      { category: "Words meaning 'to glow'", level: 2, words: ["RADIATE", "GLEAM", "LUMINOUS", "BEAM"] },
      { category: "Over ___", level: 3, words: ["COAT", "BOARD", "LOOK", "TIME"] }
    ]
  },
  {
    id: 268,
    groups: [
      { category: "Martial arts", level: 0, words: ["KARATE", "JUDO", "AIKIDO", "TAEKWONDO"] },
      { category: "Things with a net", level: 1, words: ["TENNIS", "SPIDER", "FISHING", "BASKET"] },
      { category: "Words meaning 'to hoard'", level: 2, words: ["STOCKPILE", "AMASS", "STASH", "SQUIRREL"] },
      { category: "Long ___", level: 3, words: ["BOW", "HORN", "SHOT", "HAND"] }
    ]
  },
  {
    id: 269,
    groups: [
      { category: "Herbs", level: 0, words: ["CILANTRO", "BASIL", "THYME", "OREGANO"] },
      { category: "Things with a tail", level: 1, words: ["COMET", "KITE", "COAT", "MONKEY"] },
      { category: "Words meaning 'to linger'", level: 2, words: ["LOITER", "DAWDLE", "TARRY", "DALLY"] },
      { category: "Short ___", level: 3, words: ["CAKE", "STOP", "HAND", "CUT"] }
    ]
  },
  {
    id: 270,
    groups: [
      { category: "Volcanoes", level: 0, words: ["VESUVIUS", "ETNA", "FUJI", "KRAKATOA"] },
      { category: "Things with a point", level: 1, words: ["NEEDLE", "PENCIL", "STAR", "COMPASS"] },
      { category: "Words meaning 'to outwit'", level: 2, words: ["OUTFOX", "DUPE", "BAMBOOZLE", "HOODWINK"] },
      { category: "Double ___", level: 3, words: ["DUTCH", "CROSS", "DOWN", "TAKE"] }
    ]
  },
  {
    id: 271,
    groups: [
      { category: "Board games", level: 0, words: ["CHESS", "RISK", "CLUE", "SORRY"] },
      { category: "Things that crack", level: 1, words: ["WHIP", "ICE", "JOKE", "KNUCKLE"] },
      { category: "Words meaning 'to absorb'", level: 2, words: ["ENGROSS", "IMMERSE", "SOAK", "CONSUME"] },
      { category: "Green ___", level: 3, words: ["HOUSE", "HORN", "BACK", "PEACE"] }
    ]
  },
  {
    id: 272,
    groups: [
      { category: "Constellations", level: 0, words: ["ORION", "CASSIOPEIA", "DRACO", "PEGASUS"] },
      { category: "Things that pop", level: 1, words: ["BALLOON", "CORN", "BUBBLE", "CORK"] },
      { category: "Words meaning 'to flaunt'", level: 2, words: ["BRANDISH", "PARADE", "SHOWCASE", "FLAUNT"] },
      { category: "Blue ___", level: 3, words: ["PRINT", "JAY", "BELL", "GRASS"] }
    ]
  },
  {
    id: 273,
    groups: [
      { category: "Teas", level: 0, words: ["OOLONG", "MATCHA", "CHAMOMILE", "EARL GREY"] },
      { category: "Things with a cap", level: 1, words: ["MUSHROOM", "BOTTLE", "PEN", "KNEE"] },
      { category: "Words meaning 'to forbid'", level: 2, words: ["VETO", "EMBARGO", "RESTRICT", "TABOO"] },
      { category: "Wild ___", level: 3, words: ["FIRE", "LIFE", "CARD", "CAT"] }
    ]
  },
  {
    id: 274,
    groups: [
      { category: "Whales", level: 0, words: ["HUMPBACK", "BELUGA", "NARWHAL", "ORCA"] },
      { category: "Things with a mouth", level: 1, words: ["RIVER", "CAVE", "BOTTLE", "VOLCANO"] },
      { category: "Words meaning 'to enchant'", level: 2, words: ["BEGUILE", "ENTRANCE", "CHARM", "ALLURE"] },
      { category: "Red ___", level: 3, words: ["WOOD", "EYE", "NECK", "LINE"] }
    ]
  },
  {
    id: 275,
    groups: [
      { category: "Knots", level: 0, words: ["BOWLINE", "CLOVE", "REEF", "SQUARE"] },
      { category: "Things that roar", level: 1, words: ["LION", "ENGINE", "CROWD", "OCEAN"] },
      { category: "Words meaning 'to baffle'", level: 2, words: ["PERPLEX", "MYSTIFY", "CONFOUND", "STUMP"] },
      { category: "Rock ___", level: 3, words: ["SLIDE", "STAR", "BOTTOM", "BAND"] }
    ]
  },
  {
    id: 276,
    groups: [
      { category: "Fabrics", level: 0, words: ["SILK", "DENIM", "VELVET", "LINEN"] },
      { category: "Things with a bank", level: 1, words: ["RIVER", "BLOOD", "PIGGY", "SNOW"] },
      { category: "Words meaning 'to pamper'", level: 2, words: ["CODDLE", "INDULGE", "SPOIL", "DOTE"] },
      { category: "Sand ___", level: 3, words: ["CASTLE", "STORM", "PIPER", "PAPER"] }
    ]
  },
  {
    id: 277,
    groups: [
      { category: "Freshwater fish", level: 0, words: ["TROUT", "PERCH", "BASS", "PIKE"] },
      { category: "Things that melt", level: 1, words: ["BUTTER", "GLACIER", "CHOCOLATE", "HEART"] },
      { category: "Words meaning 'to scorch'", level: 2, words: ["SINGE", "SEAR", "CHAR", "BLISTER"] },
      { category: "Grand ___", level: 3, words: ["PIANO", "CANYON", "STAND", "MASTER"] }
    ]
  },
  {
    id: 278,
    groups: [
      { category: "Fossils", level: 0, words: ["AMMONITE", "TRILOBITE", "AMBER", "FERN"] },
      { category: "Things with a pocket", level: 1, words: ["JACKET", "POOL", "WATCH", "AIR"] },
      { category: "Words meaning 'to sway'", level: 2, words: ["OSCILLATE", "WAVER", "TEETER", "VACILLATE"] },
      { category: "Half ___", level: 3, words: ["TIME", "BACK", "PIPE", "WAY"] }
    ]
  },
  {
    id: 279,
    groups: [
      { category: "Root vegetables", level: 0, words: ["TURNIP", "BEET", "PARSNIP", "RADISH"] },
      { category: "Things that whistle", level: 1, words: ["KETTLE", "REFEREE", "TRAIN", "WIND"] },
      { category: "Words meaning 'to soften'", level: 2, words: ["MITIGATE", "TEMPER", "CUSHION", "EASE"] },
      { category: "Dead ___", level: 3, words: ["LINE", "LOCK", "PAN", "BEAT"] }
    ]
  },
  {
    id: 280,
    groups: [
      { category: "Clouds", level: 0, words: ["CUMULUS", "STRATUS", "CIRRUS", "NIMBUS"] },
      { category: "Things with a bridge", level: 1, words: ["GUITAR", "NOSE", "SHIP", "TOOTH"] },
      { category: "Words meaning 'to erase'", level: 2, words: ["OBLITERATE", "EXPUNGE", "EFFACE", "DELETE"] },
      { category: "House ___", level: 3, words: ["KEEPER", "WORK", "HOLD", "FLY"] }
    ]
  },
  {
    id: 281,
    groups: [
      { category: "Owls", level: 0, words: ["BARN", "SNOWY", "HORNED", "SCREECH"] },
      { category: "Things with a ring", level: 1, words: ["BOXING", "SATURN", "PHONE", "CIRCUS"] },
      { category: "Words meaning 'to thwart'", level: 2, words: ["FOIL", "FRUSTRATE", "STYMIE", "IMPEDE"] },
      { category: "Light ___", level: 3, words: ["HOUSE", "WEIGHT", "YEAR", "BULB"] }
    ]
  },
  {
    id: 282,
    groups: [
      { category: "Beans", level: 0, words: ["PINTO", "KIDNEY", "NAVY", "LIMA"] },
      { category: "Things with a bed", level: 1, words: ["RIVER", "FLOWER", "TRUCK", "OYSTER"] },
      { category: "Words meaning 'to bewitch'", level: 2, words: ["ENTHRALL", "CAPTIVATE", "SPELLBIND", "ENRAPTURE"] },
      { category: "Blind ___", level: 3, words: ["SPOT", "FOLD", "SIDE", "DATE"] }
    ]
  },
  {
    id: 283,
    groups: [
      { category: "Cactus types", level: 0, words: ["SAGUARO", "PRICKLY", "BARREL", "CHOLLA"] },
      { category: "Things that echo", level: 1, words: ["CANYON", "CAVE", "HALLWAY", "TUNNEL"] },
      { category: "Words meaning 'to ignite'", level: 2, words: ["KINDLE", "SPARK", "INFLAME", "COMBUST"] },
      { category: "Tall ___", level: 3, words: ["TALE", "SHIP", "ORDER", "BOY"] }
    ]
  }
];
