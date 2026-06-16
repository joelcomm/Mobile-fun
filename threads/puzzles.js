const PUZZLES = [
  {
    id: 1,
    groups: [
      { category: "Planets", words: ["MERCURY", "VENUS", "SATURN", "NEPTUNE"] },
      { category: "Card games", words: ["BRIDGE", "POKER", "HEARTS", "SPADES"] },
      { category: "Shoes", words: ["LOAFER", "SANDAL", "MULE"] }
    ],
    decoys: ["BOOT", "BEE", "ANNE"]
  },
  {
    id: 2,
    groups: [
      { category: "Pasta shapes", words: ["PENNE", "RIGATONI", "FUSILLI", "ORZO"] },
      { category: "Things that are red", words: ["CHERRY", "FIRE ENGINE", "CARDINAL", "RUBY"] },
      { category: "Dance styles", words: ["TANGO", "WALTZ", "SWING"] }
    ],
    decoys: ["SALSA", "HEART", "LUNCH"]
  },
  {
    id: 3,
    groups: [
      { category: "Fruits", words: ["MANGO", "PAPAYA", "GUAVA", "LYCHEE"] },
      { category: "Instruments", words: ["DRUM", "FLUTE", "HARP", "CELLO"] },
      { category: "Types of clouds", words: ["CIRRUS", "NIMBUS", "STRATUS"] }
    ],
    decoys: ["CUMULUS", "STUPEFY", "EXPECTO"]
  },
  {
    id: 4,
    groups: [
      { category: "Colors of the rainbow", words: ["INDIGO", "VIOLET", "ORANGE", "YELLOW"] },
      { category: "Things with keys", words: ["PIANO", "KEYBOARD", "LOCK", "MAP"] },
      { category: "Baseball terms", words: ["DIAMOND", "STRIKE", "PITCH"] }
    ],
    decoys: ["FLY", "PEA", "SHOT"]
  },
  {
    id: 5,
    groups: [
      { category: "Dog breeds", words: ["POODLE", "BOXER", "BEAGLE", "COLLIE"] },
      { category: "Coffee drinks", words: ["LATTE", "MOCHA", "ESPRESSO", "CORTADO"] },
      { category: "Math concepts", words: ["PRIME", "MATRIX", "FUNCTION"] }
    ],
    decoys: ["ROOT", "HARE", "LION"]
  },
  {
    id: 6,
    groups: [
      { category: "Ocean creatures", words: ["OCTOPUS", "STARFISH", "DOLPHIN", "SEAHORSE"] },
      { category: "Currencies", words: ["POUND", "FRANC", "CROWN", "BUCK"] },
      { category: "Things that spin", words: ["TOP", "WHEEL", "RECORD"] }
    ],
    decoys: ["TORNADO", "TAKE", "DOWN"]
  },
  {
    id: 7,
    groups: [
      { category: "Breakfast foods", words: ["WAFFLE", "PANCAKE", "BAGEL", "CROISSANT"] },
      { category: "Fabrics", words: ["SILK", "DENIM", "COTTON", "VELVET"] },
      { category: "Movie genres", words: ["HORROR", "COMEDY", "THRILLER"] }
    ],
    decoys: ["WESTERN", "SLIDE", "STAR"]
  },
  {
    id: 8,
    groups: [
      { category: "Trees", words: ["MAPLE", "WILLOW", "CEDAR", "BIRCH"] },
      { category: "Kitchen tools", words: ["WHISK", "LADLE", "TONGS", "GRATER"] },
      { category: "Modes of transport", words: ["FERRY", "CABLE CAR", "RICKSHAW"] }
    ],
    decoys: ["GONDOLA", "HOLE", "SHEEP"]
  },
  {
    id: 9,
    groups: [
      { category: "Gemstones", words: ["EMERALD", "TOPAZ", "OPAL", "JADE"] },
      { category: "Things with wings", words: ["AIRPLANE", "ANGEL", "BUTTERFLY", "STAGE"] },
      { category: "Board games", words: ["RISK", "LIFE", "SORRY"] }
    ],
    decoys: ["CLUE", "TURKEY", "FRONT"]
  },
  {
    id: 10,
    groups: [
      { category: "Cheeses", words: ["BRIE", "GOUDA", "CHEDDAR", "FETA"] },
      { category: "Things that glow", words: ["EMBER", "FIREFLY", "NEON", "STAR"] },
      { category: "Olympic events", words: ["HURDLE", "RELAY", "VAULT"] }
    ],
    decoys: ["JAVELIN", "RANGER", "WASH"]
  },
  {
    id: 11,
    groups: [
      { category: "90s bands that are also everyday words", words: ["GARBAGE", "HOLE", "BUSH", "FUEL"] },
      { category: "Michael Jackson album titles", words: ["THRILLER", "BAD", "DANGEROUS", "INVINCIBLE"] },
      { category: "Artists who go by one name", words: ["PRINCE", "JEWEL", "PINK"] }
    ],
    decoys: ["SEAL", "NINE", "GREEN"]
  },
  {
    id: 12,
    groups: [
      { category: "Vegetables", words: ["CARROT", "BROCCOLI", "SPINACH", "CELERY"] },
      { category: "Zodiac signs", words: ["SCORPIO", "LEO", "ARIES", "GEMINI"] },
      { category: "Poker terms", words: ["FOLD", "FLUSH", "RIVER"] }
    ],
    decoys: ["BLIND", "PLACE", "TRUCK"]
  },
  {
    id: 13,
    groups: [
      { category: "Flowers", words: ["ROSE", "DAISY", "TULIP", "LILY"] },
      { category: "Types of bear", words: ["GRIZZLY", "POLAR", "PANDA", "KODIAK"] },
      { category: "Gym equipment", words: ["BENCH", "PLATE", "RACK"] }
    ],
    decoys: ["BAR", "SHIN", "TON"]
  },
  {
    id: 14,
    groups: [
      { category: "Countries in South America", words: ["BRAZIL", "CHILE", "PERU", "COLOMBIA"] },
      { category: "Types of hat", words: ["BERET", "FEDORA", "TURBAN", "STETSON"] },
      { category: "Things with strings", words: ["GUITAR", "KITE", "BOW"] }
    ],
    decoys: ["PUPPET", "BOTTOM", "PUNCH"]
  },
  {
    id: 15,
    groups: [
      { category: "Baby animals", words: ["KITTEN", "PUPPY", "CALF", "LAMB"] },
      { category: "Greek letters", words: ["ALPHA", "DELTA", "OMEGA", "SIGMA"] },
      { category: "Things in a wallet", words: ["CASH", "LICENSE", "RECEIPT"] }
    ],
    decoys: ["PHOTO", "SLAM", "PIANO"]
  },
  {
    id: 16,
    groups: [
      { category: "Rivers", words: ["NILE", "AMAZON", "THAMES", "DANUBE"] },
      { category: "Pizza toppings", words: ["MUSHROOM", "OLIVE", "PEPPER", "ONION"] },
      { category: "Words meaning 'smart'", words: ["BRIGHT", "CLEVER", "KEEN"] }
    ],
    decoys: ["SHARP", "BAG", "MADE"]
  },
  {
    id: 17,
    groups: [
      { category: "Insects", words: ["ANT", "BEETLE", "CRICKET", "MOTH"] },
      { category: "Sushi varieties", words: ["SALMON", "TUNA", "EEL", "SHRIMP"] },
      { category: "Things that are round", words: ["GLOBE", "COIN", "PLATE"] }
    ],
    decoys: ["MOON", "FIRE", "SNOW"]
  },
  {
    id: 18,
    groups: [
      { category: "Spices", words: ["CINNAMON", "TURMERIC", "PAPRIKA", "CUMIN"] },
      { category: "Classic video games", words: ["TETRIS", "PONG", "PACMAN", "FROGGER"] },
      { category: "Types of bridge", words: ["ARCH", "SUSPENSION", "DRAWBRIDGE"] }
    ],
    decoys: ["TRUSS", "PLAIN", "BRAIN"]
  },
  {
    id: 19,
    groups: [
      { category: "Desserts", words: ["BROWNIE", "SUNDAE", "TIRAMISU", "ECLAIR"] },
      { category: "Chemical elements", words: ["COPPER", "IRON", "SILVER", "GOLD"] },
      { category: "Things at a circus", words: ["TRAPEZE", "CLOWN", "TIGHTROPE"] }
    ],
    decoys: ["RINGMASTER", "PROOF", "MELON"]
  },
  {
    id: 20,
    groups: [
      { category: "Capital cities", words: ["PARIS", "LONDON", "TOKYO", "ROME"] },
      { category: "Things you blow", words: ["CANDLE", "WHISTLE", "BUBBLE", "HORN"] },
      { category: "Parts of a ship", words: ["HULL", "MAST", "ANCHOR"] }
    ],
    decoys: ["STERN", "PORT", "TIGHT"]
  },
  {
    id: 21,
    groups: [
      { category: "Reptiles", words: ["COBRA", "GECKO", "IGUANA", "TORTOISE"] },
      { category: "Shades of blue", words: ["NAVY", "COBALT", "TEAL", "AZURE"] },
      { category: "Dances", words: ["RUMBA", "FOXTROT", "MAMBO"] }
    ],
    decoys: ["POLKA", "TOWN", "SICK"]
  },
  {
    id: 22,
    groups: [
      { category: "Birds", words: ["EAGLE", "SPARROW", "PARROT", "PELICAN"] },
      { category: "Martial arts", words: ["JUDO", "KARATE", "BOXING", "FENCING"] },
      { category: "Things in a courtroom", words: ["GAVEL", "JURY", "BENCH"] }
    ],
    decoys: ["WITNESS", "BUTTON", "STAR"]
  },
  {
    id: 23,
    groups: [
      { category: "Planets visible to naked eye", words: ["MARS", "JUPITER", "VENUS", "SATURN"] },
      { category: "Types of cheese", words: ["SWISS", "PARMESAN", "STILTON", "MOZZARELLA"] },
      { category: "Things in space", words: ["COMET", "ASTEROID", "NEBULA"] }
    ],
    decoys: ["QUASAR", "WARE", "PLAY"]
  },
  {
    id: 24,
    groups: [
      { category: "Tools", words: ["HAMMER", "WRENCH", "DRILL", "PLIERS"] },
      { category: "Dips and sauces", words: ["HUMMUS", "SALSA", "GUACAMOLE", "TZATZIKI"] },
      { category: "Things that tick", words: ["CLOCK", "HEART", "METRONOME"] }
    ],
    decoys: ["BOMB", "BONE", "STAGE"]
  },
  {
    id: 25,
    groups: [
      { category: "Winter sports", words: ["SKIING", "HOCKEY", "CURLING", "LUGE"] },
      { category: "Famous Johns", words: ["LENNON", "WAYNE", "ADAMS", "KENNEDY"] },
      { category: "Things that drip", words: ["FAUCET", "CANDLE", "ICICLE"] }
    ],
    decoys: ["PAINT", "BREAK", "LINE"]
  },
  {
    id: 26,
    groups: [
      { category: "Herbs", words: ["BASIL", "THYME", "OREGANO", "MINT"] },
      { category: "Fictional detectives", words: ["SHERLOCK", "POIROT", "COLUMBO", "MORSE"] },
      { category: "Things with layers", words: ["ONION", "CAKE", "LASAGNA"] }
    ],
    decoys: ["EARTH", "FIRE", "CLOCK"]
  },
  {
    id: 27,
    groups: [
      { category: "Tropical fruits", words: ["COCONUT", "PINEAPPLE", "BANANA", "KIWI"] },
      { category: "Types of music", words: ["JAZZ", "BLUES", "REGGAE", "SOUL"] },
      { category: "Things at a carnival", words: ["CAROUSEL", "COTTON CANDY", "BUMPER CARS"] }
    ],
    decoys: ["FERRIS WHEEL", "SHINE", "STONE"]
  },
  {
    id: 28,
    groups: [
      { category: "Fish", words: ["SALMON", "TROUT", "COD", "BASS"] },
      { category: "Things in an office", words: ["STAPLER", "PRINTER", "FOLDER", "BINDER"] },
      { category: "Words meaning 'happy'", words: ["JOLLY", "MERRY", "CONTENT"] }
    ],
    decoys: ["GLAD", "PICK", "BRUSH"]
  },
  {
    id: 29,
    groups: [
      { category: "Asian countries", words: ["JAPAN", "CHINA", "INDIA", "VIETNAM"] },
      { category: "Sandwich types", words: ["CLUB", "WRAP", "PANINI", "SUB"] },
      { category: "Things that bounce", words: ["BALL", "CHECK", "TRAMPOLINE"] }
    ],
    decoys: ["SPRING", "END", "LOCK"]
  },
  {
    id: 30,
    groups: [
      { category: "Cat breeds", words: ["PERSIAN", "SIAMESE", "BENGAL", "TABBY"] },
      { category: "Shapes", words: ["HEXAGON", "TRIANGLE", "PENTAGON", "OCTAGON"] },
      { category: "Things that glow in the dark", words: ["STARS", "JELLYFISH", "RADIUM"] }
    ],
    decoys: ["FIREFLY", "WEIGHT", "NING"]
  },
  {
    id: 31,
    groups: [
      { category: "African animals", words: ["ELEPHANT", "GIRAFFE", "ZEBRA", "LION"] },
      { category: "Types of tea", words: ["CHAI", "MATCHA", "OOLONG", "EARL GREY"] },
      { category: "Things at the beach", words: ["SURFBOARD", "SHELL", "TOWEL"] }
    ],
    decoys: ["SANDCASTLE", "MAN", "BOARD"]
  },
  {
    id: 32,
    groups: [
      { category: "Cereals", words: ["CHEERIOS", "CORNFLAKES", "GRANOLA", "OATMEAL"] },
      { category: "Greek gods", words: ["ZEUS", "APOLLO", "ATHENA", "HERMES"] },
      { category: "Things with a lid", words: ["POT", "JAR", "TRUNK"] }
    ],
    decoys: ["COFFIN", "MATE", "OFF"]
  },
  {
    id: 33,
    groups: [
      { category: "Citrus fruits", words: ["LEMON", "LIME", "GRAPEFRUIT", "TANGERINE"] },
      { category: "Card suits", words: ["CLUB", "DIAMOND", "HEART", "SPADE"] },
      { category: "Things in a gym", words: ["DUMBBELL", "MAT", "LOCKER"] }
    ],
    decoys: ["TREADMILL", "CHECK", "BOW"]
  },
  {
    id: 34,
    groups: [
      { category: "Sharks", words: ["HAMMERHEAD", "GREAT WHITE", "BULL", "TIGER"] },
      { category: "Things in a park", words: ["BENCH", "FOUNTAIN", "SWING", "POND"] },
      { category: "Words that mean 'angry'", words: ["FURIOUS", "IRATE", "CROSS"] }
    ],
    decoys: ["LIVID", "THUMB", "HOUSE"]
  },
  {
    id: 35,
    groups: [
      { category: "Body parts", words: ["ELBOW", "KNEE", "SHOULDER", "ANKLE"] },
      { category: "Things that float", words: ["CORK", "BALLOON", "RAFT", "CLOUD"] },
      { category: "Dunder Mifflin employees", words: ["MICHAEL", "JIM", "STANLEY"] }
    ],
    decoys: ["DWIGHT", "GUN", "BREAK"]
  },
  {
    id: 36,
    groups: [
      { category: "Deserts", words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things with handles", words: ["MUG", "SUITCASE", "DOOR", "PAN"] },
      { category: "Words associated with royalty", words: ["THRONE", "SCEPTER", "PALACE"] }
    ],
    decoys: ["CROWN", "HAUL", "SIGHT"]
  },
  {
    id: 37,
    groups: [
      { category: "Mountain ranges", words: ["ALPS", "ANDES", "ROCKIES", "HIMALAYAS"] },
      { category: "Things at a wedding", words: ["BOUQUET", "VEIL", "CAKE", "TOAST"] },
      { category: "Words meaning 'fake'", words: ["SHAM", "PHONY", "MOCK"] }
    ],
    decoys: ["BOGUS", "BALL", "END"]
  },
  {
    id: 38,
    groups: [
      { category: "Constellations", words: ["ORION", "SCORPIUS", "CASSIOPEIA", "PEGASUS"] },
      { category: "Types of wine", words: ["MERLOT", "RIESLING", "SHIRAZ", "CHARDONNAY"] },
      { category: "Monopoly spaces", words: ["BOARDWALK", "PARK PLACE", "CHANCE"] }
    ],
    decoys: ["JAIL", "CARE", "DREAM"]
  },
  {
    id: 39,
    groups: [
      { category: "Baked goods", words: ["SCONE", "MUFFIN", "PRETZEL", "DONUT"] },
      { category: "Currencies of the world", words: ["YEN", "PESO", "RUPEE", "EURO"] },
      { category: "Things that are sticky", words: ["TAPE", "GLUE", "SAP"] }
    ],
    decoys: ["HONEY", "FIRE", "GOOSE"]
  },
  {
    id: 40,
    groups: [
      { category: "Oceans", words: ["ATLANTIC", "PACIFIC", "INDIAN", "ARCTIC"] },
      { category: "Things in a toolbox", words: ["LEVEL", "SAW", "TAPE", "NAIL"] },
      { category: "Words meaning 'walk'", words: ["MARCH", "STRIDE", "TRUDGE"] }
    ],
    decoys: ["STROLL", "BIRD", "BELL"]
  },
  {
    id: 41,
    groups: [
      { category: "Grains", words: ["RICE", "WHEAT", "BARLEY", "QUINOA"] },
      { category: "Things with wings", words: ["AIRPLANE", "BAT", "EAGLE", "MOTH"] },
      { category: "Shakespearean characters", words: ["HAMLET", "JULIET", "MACBETH"] }
    ],
    decoys: ["OTHELLO", "RED", "FIGURE"]
  },
  {
    id: 42,
    groups: [
      { category: "Martial arts movies", words: ["CROUCHING TIGER", "KILL BILL", "RUSH HOUR", "IP MAN"] },
      { category: "Types of knot", words: ["BOWLINE", "CLOVE", "REEF", "SLIP"] },
      { category: "Seinfeld characters", words: ["KRAMER", "GEORGE", "NEWMAN"] }
    ],
    decoys: ["ELAINE", "LINING", "TONGUE"]
  },
  {
    id: 43,
    groups: [
      { category: "Soups", words: ["MINESTRONE", "CHOWDER", "GUMBO", "GAZPACHO"] },
      { category: "Types of cloud", words: ["ALTO", "CIRRO", "STRATO", "NIMBO"] },
      { category: "Fictional islands", words: ["NEVERLAND", "SKULL", "AVALON"] }
    ],
    decoys: ["TRACEY", "ISLAND", "BOW"]
  },
  {
    id: 44,
    groups: [
      { category: "Famous Michaels", words: ["JORDAN", "JACKSON", "SCOTT", "PHELPS"] },
      { category: "Types of art", words: ["SCULPTURE", "MOSAIC", "MURAL", "PORTRAIT"] },
      { category: "Things with a point", words: ["NEEDLE", "PENCIL", "COMPASS"] }
    ],
    decoys: ["ARROW", "WEIGHT", "CLIP"]
  },
  {
    id: 45,
    groups: [
      { category: "Wines by color", words: ["RED", "WHITE", "ROSE", "ORANGE"] },
      { category: "Things at a concert", words: ["SPEAKER", "SPOTLIGHT", "STAGE", "MICROPHONE"] },
      { category: "Words with double O", words: ["BLOOD", "MOOSE", "GOOSE"] }
    ],
    decoys: ["FLOOD", "WALL", "MASON"]
  },
  {
    id: 46,
    groups: [
      { category: "Islands", words: ["BALI", "SICILY", "CRETE", "FIJI"] },
      { category: "Things in a classroom", words: ["CHALK", "DESK", "GLOBE", "TEXTBOOK"] },
      { category: "Words meaning 'big'", words: ["MASSIVE", "COLOSSAL", "IMMENSE"] }
    ],
    decoys: ["VAST", "KEEPER", "END"]
  },
  {
    id: 47,
    groups: [
      { category: "Composers", words: ["MOZART", "BEETHOVEN", "BACH", "CHOPIN"] },
      { category: "Things that melt", words: ["ICE", "CHEESE", "SNOW", "CHOCOLATE"] },
      { category: "Pixar films", words: ["UP", "COCO", "BRAVE"] }
    ],
    decoys: ["WALL-E", "UP", "ABOUT"]
  },
  {
    id: 48,
    groups: [
      { category: "Canines", words: ["WOLF", "FOX", "COYOTE", "JACKAL"] },
      { category: "Things in a cockpit", words: ["THROTTLE", "RUDDER", "ALTIMETER", "YOKE"] },
      { category: "Words ending in -tion", words: ["NATION", "STATION", "PORTION"] }
    ],
    decoys: ["MOTION", "BALL", "COVER"]
  },
  {
    id: 49,
    groups: [
      { category: "Fast food chains", words: ["WENDYS", "SUBWAY", "POPEYES", "ARBYS"] },
      { category: "Things with a crown", words: ["KING", "TOOTH", "ROLEX", "STATUE"] },
      { category: "Words meaning 'leave'", words: ["DEPART", "EXIT", "FLEE"] }
    ],
    decoys: ["BAIL", "LINE", "BURNS"]
  },
  {
    id: 50,
    groups: [
      { category: "Beans", words: ["KIDNEY", "BLACK", "PINTO", "LIMA"] },
      { category: "Things at a bar", words: ["STOOL", "TAP", "COASTER", "JUKEBOX"] },
      { category: "Famous Roberts", words: ["DOWNEY", "DENIRO", "PLANT"] }
    ],
    decoys: ["REDFORD", "BOW", "DROP"]
  },
  {
    id: 51,
    groups: [
      { category: "Primates", words: ["GORILLA", "CHIMP", "ORANGUTAN", "LEMUR"] },
      { category: "Things with a dial", words: ["WATCH", "RADIO", "OVEN", "SAFE"] },
      { category: "Tarantino films", words: ["PULP FICTION", "DJANGO", "RESERVOIR DOGS"] }
    ],
    decoys: ["JACKIE BROWN", "FIVE", "LIGHT"]
  },
  {
    id: 52,
    groups: [
      { category: "Lakes", words: ["MICHIGAN", "VICTORIA", "TAHOE", "COMO"] },
      { category: "Things that buzz", words: ["BEE", "ALARM", "PHONE", "RAZOR"] },
      { category: "Words meaning 'steal'", words: ["SWIPE", "PINCH", "LIFT"] }
    ],
    decoys: ["NICK", "CARD", "KEY"]
  },
  {
    id: 53,
    groups: [
      { category: "Metals", words: ["BRONZE", "STEEL", "TIN", "PLATINUM"] },
      { category: "Things at a campsite", words: ["TENT", "LANTERN", "COOLER", "FIREWOOD"] },
      { category: "Disney princesses", words: ["MOANA", "ARIEL", "MULAN"] }
    ],
    decoys: ["JASMINE", "SPOT", "DATE"]
  },
  {
    id: 54,
    groups: [
      { category: "Dairy products", words: ["BUTTER", "YOGURT", "CREAM", "WHEY"] },
      { category: "Things with a net", words: ["TENNIS", "FISHING", "BASKETBALL", "VOLLEYBALL"] },
      { category: "Words meaning 'surprise'", words: ["SHOCK", "STARTLE", "JAR"] }
    ],
    decoys: ["STUN", "ROCK", "SIDE"]
  },
  {
    id: 55,
    groups: [
      { category: "Cheeses of France", words: ["BRIE", "CAMEMBERT", "ROQUEFORT", "GRUYERE"] },
      { category: "Words meaning 'run'", words: ["SPRINT", "DASH", "BOLT", "GALLOP"] },
      { category: "Things with a shell", words: ["EGG", "LOBSTER", "NUT"] }
    ],
    decoys: ["TURTLE", "MINE", "SLIDE"]
  },
  {
    id: 56,
    groups: [
      { category: "Rodents", words: ["HAMSTER", "SQUIRREL", "MOUSE", "BEAVER"] },
      { category: "Things at an airport", words: ["TERMINAL", "RUNWAY", "GATE", "LOUNGE"] },
      { category: "TV show creators", words: ["SORKIN", "SIMON", "CHASE"] }
    ],
    decoys: ["GILLIGAN", "LEADER", "TONE"]
  },
  {
    id: 57,
    groups: [
      { category: "Root vegetables", words: ["BEET", "TURNIP", "RADISH", "PARSNIP"] },
      { category: "Things with a horn", words: ["UNICORN", "RHINO", "CAR", "TRUMPET"] },
      { category: "Words meaning 'small'", words: ["MINUTE", "PETITE", "WEE"] }
    ],
    decoys: ["TINY", "LINE", "TIRE"]
  },
  {
    id: 58,
    groups: [
      { category: "Legumes", words: ["LENTIL", "CHICKPEA", "SOYBEAN", "PEANUT"] },
      { category: "Things that crack", words: ["WHIP", "KNUCKLE", "ICE", "EGG"] },
      { category: "Famous paintings", words: ["MONA LISA", "THE SCREAM", "GUERNICA"] }
    ],
    decoys: ["STARRY NIGHT", "HORSE", "ROOM"]
  },
  {
    id: 59,
    groups: [
      { category: "Olympic sports", words: ["FENCING", "ROWING", "ARCHERY", "JUDO"] },
      { category: "Words with double O", words: ["VOODOO", "BAMBOO", "TABOO", "SHAMPOO"] },
      { category: "Famous bridges", words: ["BROOKLYN", "TOWER", "RIALTO"] }
    ],
    decoys: ["LONDON", "STONE", "BOARD"]
  },
  {
    id: 60,
    groups: [
      { category: "Breakfast foods", words: ["WAFFLE", "PANCAKE", "OMELETTE", "CREPE"] },
      { category: "Shades of blue", words: ["NAVY", "COBALT", "TEAL", "AZURE"] },
      { category: "Types of storms", words: ["BLIZZARD", "MONSOON", "CYCLONE"] }
    ],
    decoys: ["TYPHOON", "RUSH", "FISH"]
  },
  {
    id: 61,
    groups: [
      { category: "Wild cats", words: ["LYNX", "OCELOT", "CHEETAH", "BOBCAT"] },
      { category: "Things in a wallet", words: ["CASH", "LICENSE", "RECEIPT", "PHOTO"] },
      { category: "Words ending in -tion", words: ["NATION", "POTION", "RATION"] }
    ],
    decoys: ["STATION", "BAND", "SLIDE"]
  },
  {
    id: 62,
    groups: [
      { category: "Gemstones", words: ["EMERALD", "TOPAZ", "OPAL", "GARNET"] },
      { category: "Kitchen appliances", words: ["BLENDER", "TOASTER", "MIXER", "KETTLE"] },
      { category: "Famous explorers", words: ["COLUMBUS", "MAGELLAN", "POLO"] }
    ],
    decoys: ["DRAKE", "WEIGHT", "TRAIL"]
  },
  {
    id: 63,
    groups: [
      { category: "Berries", words: ["RASPBERRY", "BLACKBERRY", "CRANBERRY", "GOOSEBERRY"] },
      { category: "Fabrics", words: ["SILK", "DENIM", "COTTON", "LINEN"] },
      { category: "Mythical creatures", words: ["GRIFFIN", "PHOENIX", "CENTAUR"] }
    ],
    decoys: ["DRAGON", "FLY", "TRUCK"]
  },
  {
    id: 64,
    groups: [
      { category: "Nuts", words: ["WALNUT", "CASHEW", "PECAN", "ALMOND"] },
      { category: "Things that spin", words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Shakespeare plays", words: ["OTHELLO", "MACBETH", "TEMPEST"] }
    ],
    decoys: ["HAMLET", "MAN", "FLAKE"]
  },
  {
    id: 65,
    groups: [
      { category: "Rivers", words: ["DANUBE", "THAMES", "SEINE", "RHINE"] },
      { category: "Tools", words: ["HAMMER", "WRENCH", "PLIERS", "CHISEL"] },
      { category: "Types of music", words: ["REGGAE", "GRUNGE", "PUNK"] }
    ],
    decoys: ["GOSPEL", "CARD", "THUMB"]
  },
  {
    id: 66,
    groups: [
      { category: "Deserts", words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things with wings", words: ["EAGLE", "AIRPLANE", "BUTTERFLY", "ANGEL"] },
      { category: "Words meaning 'angry'", words: ["LIVID", "IRATE", "CROSS"] }
    ],
    decoys: ["FURIOUS", "PRESSURE", "TYPE"]
  },
  {
    id: 67,
    groups: [
      { category: "Spices", words: ["CUMIN", "SAFFRON", "PAPRIKA", "NUTMEG"] },
      { category: "Board games", words: ["CHESS", "RISK", "CLUE", "SORRY"] },
      { category: "Famous scientists", words: ["NEWTON", "CURIE", "TESLA"] }
    ],
    decoys: ["DARWIN", "TRAVEL", "LINE"]
  },
  {
    id: 68,
    groups: [
      { category: "Cheeses", words: ["GOUDA", "BRIE", "FETA", "CHEDDAR"] },
      { category: "Things that sting", words: ["WASP", "JELLYFISH", "NETTLE", "SCORPION"] },
      { category: "Words meaning 'happy'", words: ["ELATED", "JOYFUL", "BLISSFUL"] }
    ],
    decoys: ["MERRY", "FALL", "PROOF"]
  },
  {
    id: 69,
    groups: [
      { category: "Dog breeds", words: ["POODLE", "BEAGLE", "BOXER", "HUSKY"] },
      { category: "Currencies", words: ["FRANC", "POUND", "PESO", "YEN"] },
      { category: "Famous mountains", words: ["EVEREST", "FUJI", "BLANC"] }
    ],
    decoys: ["DENALI", "WAY", "BACK"]
  },
  {
    id: 70,
    groups: [
      { category: "Herbs", words: ["BASIL", "THYME", "SAGE", "DILL"] },
      { category: "Things that glow", words: ["CANDLE", "FIREFLY", "NEON", "EMBER"] },
      { category: "Star Wars characters", words: ["LEIA", "SOLO", "LUKE"] }
    ],
    decoys: ["YODA", "MOON", "TIME"]
  },
  {
    id: 71,
    groups: [
      { category: "Oceans", words: ["PACIFIC", "ATLANTIC", "INDIAN", "ARCTIC"] },
      { category: "Things that bounce", words: ["RUBBER", "TRAMPOLINE", "CHECK", "BALL"] },
      { category: "Types of tea", words: ["JASMINE", "CHAMOMILE", "MATCHA"] }
    ],
    decoys: ["OOLONG", "BOW", "HORN"]
  },
  {
    id: 72,
    groups: [
      { category: "Marsupials", words: ["KOALA", "KANGAROO", "WOMBAT", "POSSUM"] },
      { category: "Things in space", words: ["COMET", "ASTEROID", "NEBULA", "QUASAR"] },
      { category: "Palindromes", words: ["KAYAK", "RADAR", "CIVIC"] }
    ],
    decoys: ["LEVEL", "BANG", "BEN"]
  },
  {
    id: 73,
    groups: [
      { category: "Flowers", words: ["ORCHID", "DAHLIA", "PEONY", "IRIS"] },
      { category: "Types of hats", words: ["FEDORA", "BERET", "SOMBRERO", "TURBAN"] },
      { category: "Greek gods", words: ["ATHENA", "HERMES", "APOLLO"] }
    ],
    decoys: ["ZEUS", "TOOTH", "HEART"]
  },
  {
    id: 74,
    groups: [
      { category: "Islands", words: ["BALI", "FIJI", "CRETE", "MALTA"] },
      { category: "Things that drip", words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Phonetic alphabet", words: ["ALPHA", "BRAVO", "FOXTROT"] }
    ],
    decoys: ["DELTA", "SHEEP", "MARKET"]
  },
  {
    id: 75,
    groups: [
      { category: "Volcanoes", words: ["ETNA", "VESUVIUS", "KRAKATOA", "FUJI"] },
      { category: "Things that melt", words: ["GLACIER", "CHEESE", "CANDLE", "SNOWMAN"] },
      { category: "Silent letters (has one)", words: ["KNIGHT", "SALMON", "ISLAND"] }
    ],
    decoys: ["RECEIPT", "NAP", "WALK"]
  },
  {
    id: 76,
    groups: [
      { category: "Constellations", words: ["ORION", "CASSIOPEIA", "DRACO", "LYRA"] },
      { category: "Things with keys", words: ["PIANO", "KEYBOARD", "MAP", "LOCK"] },
      { category: "Words from Japanese", words: ["KARAOKE", "TSUNAMI", "EMOJI"] }
    ],
    decoys: ["TOFU", "MAN", "CURTAIN"]
  },
  {
    id: 77,
    groups: [
      { category: "Reptiles", words: ["GECKO", "IGUANA", "CHAMELEON", "COBRA"] },
      { category: "Round things", words: ["GLOBE", "PIZZA", "CLOCK", "COIN"] },
      { category: "Latin phrases", words: ["ALIAS", "BONUS", "VIRUS"] }
    ],
    decoys: ["CAMPUS", "PORT", "CRAFT"]
  },
  {
    id: 78,
    groups: [
      { category: "Dances", words: ["MAMBO", "POLKA", "RUMBA", "FOXTROT"] },
      { category: "Things that float", words: ["CORK", "RAFT", "BALLOON", "FEATHER"] },
      { category: "Words meaning 'steal'", words: ["SWIPE", "NICK", "LIFT"] }
    ],
    decoys: ["PINCH", "END", "LINE"]
  },
  {
    id: 79,
    groups: [
      { category: "Woodwind instruments", words: ["CLARINET", "OBOE", "BASSOON", "PICCOLO"] },
      { category: "Things with tails", words: ["KITE", "COMET", "MONKEY", "PEACOCK"] },
      { category: "Famous duos", words: ["BONNIE", "BATMAN", "SHERLOCK"] }
    ],
    decoys: ["ROMEO", "LINE", "STEP"]
  },
  {
    id: 80,
    groups: [
      { category: "Lakes", words: ["MICHIGAN", "TAHOE", "VICTORIA", "BAIKAL"] },
      { category: "Things that are sticky", words: ["HONEY", "TAPE", "SYRUP", "GLUE"] },
      { category: "One-word countries", words: ["BRAZIL", "EGYPT", "NORWAY"] }
    ],
    decoys: ["JAPAN", "SPOT", "SIDE"]
  },
  {
    id: 81,
    groups: [
      { category: "Seabirds", words: ["PELICAN", "ALBATROSS", "PUFFIN", "GANNET"] },
      { category: "Things that tick", words: ["CLOCK", "BOMB", "METRONOME", "WATCH"] },
      { category: "Compound words with SUN", words: ["SUNBURN", "SUNFLOWER", "SUNSCREEN"] }
    ],
    decoys: ["SUNRISE", "PLANT", "HOUSE"]
  },
  {
    id: 82,
    groups: [
      { category: "Whales", words: ["BELUGA", "NARWHAL", "ORCA", "HUMPBACK"] },
      { category: "Things in a gym", words: ["TREADMILL", "DUMBBELL", "BENCH", "MAT"] },
      { category: "Words with all vowels", words: ["EDUCATION", "EQUATION", "AUTHORIZE"] }
    ],
    decoys: ["SEQUOIA", "WOOD", "CARPET"]
  },
  {
    id: 83,
    groups: [
      { category: "Pasta sauces", words: ["MARINARA", "ALFREDO", "PESTO", "BOLOGNESE"] },
      { category: "Things with scales", words: ["FISH", "DRAGON", "PIANO", "JUSTICE"] },
      { category: "Famous walls", words: ["BERLIN", "CHINA", "WAILING"] }
    ],
    decoys: ["STREET", "PRINT", "BELL"]
  },
  {
    id: 84,
    groups: [
      { category: "Tectonic plates", words: ["PACIFIC", "EURASIAN", "AFRICAN", "NAZCA"] },
      { category: "Things that are sharp", words: ["KNIFE", "TACK", "WIT", "CHEDDAR"] },
      { category: "Double-letter animals", words: ["BUFFALO", "CHEETAH", "RABBIT"] }
    ],
    decoys: ["RACCOON", "WORK", "HOLD"]
  },
  {
    id: 85,
    groups: [
      { category: "Amphibians", words: ["NEWT", "SALAMANDER", "TOAD", "FROG"] },
      { category: "Things with strings", words: ["GUITAR", "PUPPET", "KITE", "BOW"] },
      { category: "NASA missions", words: ["APOLLO", "MERCURY", "ARTEMIS"] }
    ],
    decoys: ["GEMINI", "WEST", "LIFE"]
  },
  {
    id: 86,
    groups: [
      { category: "Mushrooms", words: ["SHIITAKE", "PORTOBELLO", "TRUFFLE", "MOREL"] },
      { category: "Things that fold", words: ["PAPER", "NAPKIN", "CHAIR", "MAP"] },
      { category: "Famous addresses", words: ["DOWNING", "BROADWAY", "BAKER"] }
    ],
    decoys: ["SESAME", "LANCE", "DOM"]
  },
  {
    id: 87,
    groups: [
      { category: "Primates", words: ["GORILLA", "CHIMP", "GIBBON", "LEMUR"] },
      { category: "Things that rust", words: ["IRON", "NAIL", "CHAIN", "ANCHOR"] },
      { category: "Words that are also colors", words: ["OLIVE", "PEACH", "PLUM"] }
    ],
    decoys: ["CORAL", "SET", "DAY"]
  },
  {
    id: 88,
    groups: [
      { category: "Sharks", words: ["HAMMERHEAD", "TIGER", "BULL", "MAKO"] },
      { category: "Things that pop", words: ["BALLOON", "CORN", "BUBBLE", "CHAMPAGNE"] },
      { category: "Words from Arabic", words: ["COTTON", "LEMON", "ZERO"] }
    ],
    decoys: ["ALGEBRA", "GATE", "DUST"]
  },
  {
    id: 89,
    groups: [
      { category: "Owls", words: ["BARN", "SNOWY", "EAGLE", "SCREECH"] },
      { category: "Things that freeze", words: ["WATER", "PIPE", "ASSET", "FRAME"] },
      { category: "Fictional detectives", words: ["POIROT", "MARPLE", "COLUMBO"] }
    ],
    decoys: ["MONK", "NOTCH", "KNOT"]
  },
  {
    id: 90,
    groups: [
      { category: "Minerals", words: ["QUARTZ", "FELDSPAR", "MICA", "CALCITE"] },
      { category: "Things that bloom", words: ["ROSE", "ALGAE", "CHERRY", "YOUTH"] },
      { category: "Portmanteau words", words: ["BRUNCH", "MOTEL", "SPORK"] }
    ],
    decoys: ["SMOG", "FOX", "LINING"]
  },
  {
    id: 91,
    groups: [
      { category: "Grains", words: ["QUINOA", "BARLEY", "MILLET", "SPELT"] },
      { category: "Things with teeth", words: ["SAW", "COMB", "GEAR", "ZIPPER"] },
      { category: "Nobel Prize categories", words: ["PEACE", "PHYSICS", "LITERATURE"] }
    ],
    decoys: ["CHEMISTRY", "BOW", "WORD"]
  },
  {
    id: 92,
    groups: [
      { category: "Penguins", words: ["EMPEROR", "ADELIE", "CHINSTRAP", "ROCKHOPPER"] },
      { category: "Things that echo", words: ["CANYON", "CAVE", "TUNNEL", "HALL"] },
      { category: "Words ending in -ight", words: ["BLIGHT", "PLIGHT", "KNIGHT"] }
    ],
    decoys: ["FLIGHT", "BODY", "MATE"]
  },
  {
    id: 93,
    groups: [
      { category: "Cactus types", words: ["SAGUARO", "PRICKLY PEAR", "BARREL", "CHOLLA"] },
      { category: "Things that roar", words: ["LION", "ENGINE", "CROWD", "THUNDER"] },
      { category: "Silent film stars", words: ["CHAPLIN", "LLOYD", "VALENTINO"] }
    ],
    decoys: ["KEATON", "BAND", "STRONG"]
  },
  {
    id: 94,
    groups: [
      { category: "Seashells", words: ["CONCH", "COWRIE", "SCALLOP", "NAUTILUS"] },
      { category: "Things that bloom in spring", words: ["TULIP", "DAFFODIL", "CROCUS", "HYACINTH"] },
      { category: "Ancient wonders", words: ["PYRAMID", "LIGHTHOUSE", "MAUSOLEUM"] }
    ],
    decoys: ["COLOSSUS", "CHANGE", "HAND"]
  },
  {
    id: 95,
    groups: [
      { category: "Knots", words: ["BOWLINE", "CLOVE", "REEF", "FIGURE EIGHT"] },
      { category: "Things that howl", words: ["WOLF", "WIND", "COYOTE", "SIREN"] },
      { category: "Words from French", words: ["BALLET", "DEPOT", "CHAUFFEUR"] }
    ],
    decoys: ["ROUGE", "WEIGHT", "YEAR"]
  },
  {
    id: 96,
    groups: [
      { category: "Ferns", words: ["MAIDENHAIR", "BRACKEN", "STAGHORN", "BOSTON"] },
      { category: "Things with layers", words: ["ONION", "CAKE", "LASAGNA", "EARTH"] },
      { category: "Words meaning 'brave'", words: ["GALLANT", "BOLD", "FEARLESS"] }
    ],
    decoys: ["VALIANT", "LOG", "STAGE"]
  },
  {
    id: 97,
    groups: [
      { category: "Teas of the world", words: ["DARJEELING", "EARL GREY", "ROOIBOS", "PU-ERH"] },
      { category: "Things that shimmer", words: ["SEQUIN", "GLITTER", "MIRAGE", "DIAMOND"] },
      { category: "Types of government", words: ["MONARCHY", "REPUBLIC", "THEOCRACY"] }
    ],
    decoys: ["OLIGARCHY", "RAIL", "SHAKE"]
  },
  {
    id: 98,
    groups: [
      { category: "Deer species", words: ["MOOSE", "ELK", "CARIBOU", "ANTELOPE"] },
      { category: "Things that sizzle", words: ["BACON", "STEAK", "FIREWORK", "LIGHTNING"] },
      { category: "Words that are also dances", words: ["JIVE", "TWIST", "STOMP"] }
    ],
    decoys: ["HUSTLE", "CUSHION", "STRIPE"]
  },
  {
    id: 99,
    groups: [
      { category: "Coral reef fish", words: ["CLOWNFISH", "ANGELFISH", "GROUPER", "PARROTFISH"] },
      { category: "Things that crumble", words: ["COOKIE", "WALL", "CLIFF", "EMPIRE"] },
      { category: "Famous last words", words: ["ROSEBUD", "BEAUTIFUL", "CURTAIN"] }
    ],
    decoys: ["FREEDOM", "TAKE", "CROSS"]
  },
  {
    id: 100,
    groups: [
      { category: "Pigeons and doves", words: ["MOURNING", "ROCK", "TURTLE", "WOOD"] },
      { category: "Things that crack under pressure", words: ["ICE", "GLASS", "VOICE", "FACADE"] },
      { category: "Brands named after founders", words: ["CHANEL", "ADIDAS", "DISNEY"] }
    ],
    decoys: ["FERRARI", "TRIP", "ABOUT"]
  },
  {
    id: 101,
    groups: [
      { category: "Climbing plants", words: ["IVY", "WISTERIA", "CLEMATIS", "JASMINE"] },
      { category: "Things that hum", words: ["BEE", "MOTOR", "FRIDGE", "POWER LINE"] },
      { category: "Words from Hindi", words: ["JUNGLE", "THUG", "SHAMPOO"] }
    ],
    decoys: ["LOOT", "EARTH", "MATE"]
  },
  {
    id: 102,
    groups: [
      { category: "Sandwiches", words: ["REUBEN", "CLUB", "CUBANO", "BANH MI"] },
      { category: "Things that orbit", words: ["MOON", "SATELLITE", "ELECTRON", "PLANET"] },
      { category: "Words from Italian", words: ["STUDIO", "VOLCANO", "FIASCO"] }
    ],
    decoys: ["PIANO", "GOWN", "MARE"]
  },
  {
    id: 103,
    groups: [
      { category: "Bats", words: ["FRUIT BAT", "VAMPIRE BAT", "HORSESHOE", "FLYING FOX"] },
      { category: "Things that are crispy", words: ["BACON", "CHIP", "LEAF", "CRACKER"] },
      { category: "Famous walls", words: ["WESTERN", "FIREWALL", "PAYWALL"] }
    ],
    decoys: ["HADRIAN", "THROUGH", "FAST"]
  },
  {
    id: 104,
    groups: [
      { category: "Parrots", words: ["MACAW", "COCKATOO", "BUDGIE", "LOVEBIRD"] },
      { category: "Things that are woven", words: ["BASKET", "TAPESTRY", "RUG", "FABRIC"] },
      { category: "Words that are also months", words: ["MARCH", "MAY", "JUNE"] }
    ],
    decoys: ["AUGUST", "FOREST", "BOW"]
  },
  {
    id: 105,
    groups: [
      { category: "Grape varieties", words: ["MERLOT", "RIESLING", "PINOT", "SHIRAZ"] },
      { category: "Things that sway", words: ["HAMMOCK", "BRIDGE", "TREE", "DANCER"] },
      { category: "Famous robots", words: ["WALL-E", "R2-D2", "TERMINATOR"] }
    ],
    decoys: ["OPTIMUS", "SHIP", "WARE"]
  },
  {
    id: 106,
    groups: [
      { category: "Falcons", words: ["PEREGRINE", "KESTREL", "MERLIN", "GYRFALCON"] },
      { category: "Things that bubble", words: ["SODA", "LAVA", "SOAP", "BROOK"] },
      { category: "Types of poetry", words: ["HAIKU", "SONNET", "LIMERICK"] }
    ],
    decoys: ["BALLAD", "JURY", "PRIX"]
  },
  {
    id: 107,
    groups: [
      { category: "Ancient civilizations", words: ["AZTEC", "MAYA", "INCA", "OLMEC"] },
      { category: "Things that crawl", words: ["SPIDER", "BABY", "SNAIL", "VINE"] },
      { category: "Fictional schools", words: ["HOGWARTS", "BAYSIDE", "RYDELL"] }
    ],
    decoys: ["XAVIER", "BURN", "WHITE"]
  },
  {
    id: 108,
    groups: [
      { category: "Coffee drinks", words: ["ESPRESSO", "CAPPUCCINO", "AMERICANO", "MACCHIATO"] },
      { category: "Things that tower", words: ["SKYSCRAPER", "REDWOOD", "GIRAFFE", "LIGHTHOUSE"] },
      { category: "Words with QU", words: ["QUILT", "UNIQUE", "MOSQUE"] }
    ],
    decoys: ["ANTIQUE", "WALL", "HEDGE"]
  },
  {
    id: 109,
    groups: [
      { category: "Eagles", words: ["BALD", "GOLDEN", "HARPY", "MARTIAL"] },
      { category: "Things that are tangled", words: ["YARN", "HEADPHONES", "HAIR", "VINES"] },
      { category: "Olympic host cities", words: ["TOKYO", "PARIS", "BEIJING"] }
    ],
    decoys: ["LONDON", "ROLL", "CLEAN"]
  },
  {
    id: 110,
    groups: [
      { category: "Bamboo-eating animals", words: ["PANDA", "GORILLA", "LEMUR", "RAT"] },
      { category: "Things that sparkle", words: ["STAR", "SNOW", "DIAMOND", "TINSEL"] },
      { category: "Famous canals", words: ["SUEZ", "ERIE", "VENICE"] }
    ],
    decoys: ["PANAMA", "IDEA", "EYES"]
  },
  {
    id: 111,
    groups: [
      { category: "Types of pasta", words: ["LINGUINE", "FETTUCCINE", "RAVIOLI", "TORTELLINI"] },
      { category: "Things in a cockpit", words: ["THROTTLE", "ALTIMETER", "RUDDER", "YOKE"] },
      { category: "Words meaning 'to criticize'", words: ["SLAM", "BASH", "ROAST"] }
    ],
    decoys: ["KNOCK", "TEAR", "NAME"]
  },
  {
    id: 112,
    groups: [
      { category: "African countries", words: ["KENYA", "GHANA", "MOROCCO", "TUNISIA"] },
      { category: "Things that sparkle", words: ["GLITTER", "CRYSTAL", "SEQUIN", "FIREWORK"] },
      { category: "Cartoon dogs", words: ["PLUTO", "SCOOBY", "GOOFY"] }
    ],
    decoys: ["SNOOPY", "BOARD", "NUT"]
  },
  {
    id: 113,
    groups: [
      { category: "Leafy greens", words: ["KALE", "ARUGULA", "ROMAINE", "WATERCRESS"] },
      { category: "Things with pedals", words: ["BICYCLE", "ORGAN", "CAR", "PIANO"] },
      { category: "Words meaning 'to leave quickly'", words: ["DASH", "FLEE", "SPLIT"] }
    ],
    decoys: ["BOLT", "BOX", "STICK"]
  },
  {
    id: 114,
    groups: [
      { category: "Brass instruments", words: ["TRUMPET", "TROMBONE", "TUBA", "FRENCH HORN"] },
      { category: "Things at a carnival", words: ["CLOWN", "FUNNEL CAKE", "RING TOSS", "STRONGMAN"] },
      { category: "Words that contain a body part", words: ["CARPET", "LEGEND", "THUMBNAIL"] }
    ],
    decoys: ["ELBOW", "COMB", "BEE"]
  },
  {
    id: 115,
    groups: [
      { category: "Winter clothing", words: ["SCARF", "MITTEN", "PARKA", "EARMUFF"] },
      { category: "Famous towers", words: ["EIFFEL", "BIG BEN", "BABEL", "PISA"] },
      { category: "Words with silent B", words: ["PLUMBER", "CLIMB", "THUMB"] }
    ],
    decoys: ["SUBTLE", "KNOWN", "SPRING"]
  },
  {
    id: 116,
    groups: [
      { category: "Sushi fish", words: ["TUNA", "YELLOWTAIL", "MACKEREL", "SNAPPER"] },
      { category: "Things with a dial", words: ["WATCH", "RADIO", "COMPASS", "THERMOSTAT"] },
      { category: "Words meaning 'to confuse'", words: ["BAFFLE", "BEWILDER", "STUMP"] }
    ],
    decoys: ["PUZZLE", "STONE", "STAFF"]
  },
  {
    id: 117,
    groups: [
      { category: "Root vegetables", words: ["GINGER", "TURMERIC", "BEET", "YAM"] },
      { category: "Things with a bell", words: ["CHURCH", "BICYCLE", "COW", "DOORBELL"] },
      { category: "Olympic medals", words: ["GOLD", "SILVER", "BRONZE"] }
    ],
    decoys: ["IRON", "PHRASE", "WORD"]
  },
  {
    id: 118,
    groups: [
      { category: "Ducks", words: ["MALLARD", "TEAL", "MERGANSER", "PINTAIL"] },
      { category: "Things at a spa", words: ["SAUNA", "MASSAGE", "FACIAL", "ROBE"] },
      { category: "Words that mean 'excellent'", words: ["SUPERB", "PRIME", "CRACK"] }
    ],
    decoys: ["STELLAR", "BELLY", "LUCK"]
  },
  {
    id: 119,
    groups: [
      { category: "Citrus fruits", words: ["KUMQUAT", "POMELO", "CLEMENTINE", "BERGAMOT"] },
      { category: "Things with a cap", words: ["BOTTLE", "MUSHROOM", "PEN", "TOOTH"] },
      { category: "Famous Georges", words: ["WASHINGTON", "CLOONEY", "LUCAS"] }
    ],
    decoys: ["ORWELL", "ROLL", "RUPT"]
  },
  {
    id: 120,
    groups: [
      { category: "Legumes", words: ["LENTIL", "CHICKPEA", "FAVA", "MUNG"] },
      { category: "Things in a studio", words: ["EASEL", "CANVAS", "PALETTE", "BRUSH"] },
      { category: "Famous Jacks", words: ["SPARROW", "BLACK", "FROST"] }
    ],
    decoys: ["NICHOLSON", "FACE", "TOWER"]
  },
  {
    id: 121,
    groups: [
      { category: "Melon types", words: ["HONEYDEW", "CANTALOUPE", "WATERMELON", "CASABA"] },
      { category: "Things with a blade", words: ["KNIFE", "WINDMILL", "SKATE", "HELICOPTER"] },
      { category: "Words ending in -ous", words: ["NERVOUS", "CURIOUS", "SERIOUS"] }
    ],
    decoys: ["FAMOUS", "WORK", "FLIX"]
  },
  {
    id: 122,
    groups: [
      { category: "Penguins", words: ["KING", "GENTOO", "MACARONI", "FAIRY"] },
      { category: "Things at a picnic", words: ["BLANKET", "BASKET", "LEMONADE", "ANTS"] },
      { category: "Words meaning 'to delay'", words: ["STALL", "TABLE", "SHELVE"] }
    ],
    decoys: ["DEFER", "ROOM", "PARK"]
  },
  {
    id: 123,
    groups: [
      { category: "Japanese food", words: ["RAMEN", "TEMPURA", "UDON", "SASHIMI"] },
      { category: "Things with a handle", words: ["AXE", "BROOM", "BRIEFCASE", "SHOVEL"] },
      { category: "Words that are also colors", words: ["IVORY", "SCARLET", "CRIMSON"] }
    ],
    decoys: ["AMBER", "BOX", "RELEASE"]
  },
  {
    id: 124,
    groups: [
      { category: "Butternut squash relatives", words: ["ACORN", "SPAGHETTI", "PUMPKIN", "ZUCCHINI"] },
      { category: "Things that rust", words: ["GATE", "PIPE", "NAIL", "BRIDGE"] },
      { category: "Words from Spanish", words: ["TORNADO", "PLAZA", "CANYON"] }
    ],
    decoys: ["RODEO", "FLOOR", "WORK"]
  },
  {
    id: 125,
    groups: [
      { category: "Whale species", words: ["MINKE", "BOWHEAD", "RIGHT", "GREY"] },
      { category: "Things with pockets", words: ["JACKET", "JEANS", "BILLIARD TABLE", "KANGAROO"] },
      { category: "Words meaning 'to annoy'", words: ["BUG", "NEEDLE", "RIDE"] }
    ],
    decoys: ["GRILL", "PIECE", "MIND"]
  },
  {
    id: 126,
    groups: [
      { category: "Types of cheese", words: ["MANCHEGO", "HAVARTI", "PROVOLONE", "EMMENTAL"] },
      { category: "Things that whisper", words: ["WIND", "LEAVES", "GRASS", "STREAM"] },
      { category: "Famous Jameses", words: ["DEAN", "BROWN", "MADISON"] }
    ],
    decoys: ["BOND", "OVER", "WORD"]
  },
  {
    id: 127,
    groups: [
      { category: "Terrier breeds", words: ["YORKIE", "SCOTTIE", "WESTIE", "AIREDALE"] },
      { category: "Things at a farm", words: ["SILO", "TRACTOR", "BARN", "SCARECROW"] },
      { category: "Words meaning 'money'", words: ["DOUGH", "CHEDDAR", "CABBAGE"] }
    ],
    decoys: ["BREAD", "PAPER", "NUT"]
  },
  {
    id: 128,
    groups: [
      { category: "Types of rice", words: ["BASMATI", "JASMINE", "ARBORIO", "WILD"] },
      { category: "Things with a clasp", words: ["NECKLACE", "PURSE", "BINDER", "BELT"] },
      { category: "Famous Alexanders", words: ["GREAT", "HAMILTON", "GRAHAM BELL"] }
    ],
    decoys: ["MCQUEEN", "FIELD", "WING"]
  },
  {
    id: 129,
    groups: [
      { category: "Songbirds", words: ["ROBIN", "WREN", "FINCH", "THRUSH"] },
      { category: "Things with a hinge", words: ["DOOR", "LAPTOP", "GATE", "JAW"] },
      { category: "Words meaning 'old'", words: ["ANCIENT", "ARCHAIC", "VINTAGE"] }
    ],
    decoys: ["ANTIQUE", "ARM", "BRAND"]
  },
  {
    id: 130,
    groups: [
      { category: "Curry ingredients", words: ["CARDAMOM", "CORIANDER", "FENUGREEK", "TURMERIC"] },
      { category: "Things that purr", words: ["CAT", "ENGINE", "PIGEON", "CONTENTED BABY"] },
      { category: "Words meaning 'to eat greedily'", words: ["GORGE", "WOLF", "SCARF"] }
    ],
    decoys: ["DEVOUR", "HOUSE", "JAW"]
  },
  {
    id: 131,
    groups: [
      { category: "Climbing gear", words: ["CARABINER", "HARNESS", "PITON", "CRAMPON"] },
      { category: "Things that are layered", words: ["PARFAIT", "SEDIMENT", "NACHOS", "ATMOSPHERE"] },
      { category: "Words from Portuguese", words: ["FLAMINGO", "COBRA", "MOSQUITO"] }
    ],
    decoys: ["MARMALADE", "CLOTH", "TENNIS"]
  },
  {
    id: 132,
    groups: [
      { category: "Herbs for cooking", words: ["ROSEMARY", "PARSLEY", "CILANTRO", "CHIVES"] },
      { category: "Things with an antenna", words: ["RADIO", "ANT", "SATELLITE", "SNAIL"] },
      { category: "Famous Charleses", words: ["DARWIN", "CHAPLIN", "SCHULZ"] }
    ],
    decoys: ["DICKENS", "CASE", "WORM"]
  },
  {
    id: 133,
    groups: [
      { category: "Types of bean", words: ["NAVY", "CANNELLINI", "GARBANZO", "ADZUKI"] },
      { category: "Things that are hollow", words: ["TUBE", "BAMBOO", "DRUM", "LOG"] },
      { category: "Words meaning 'to copy'", words: ["MIMIC", "APE", "ECHO"] }
    ],
    decoys: ["PARROT", "HOLDER", "MARKET"]
  },
  {
    id: 134,
    groups: [
      { category: "Cephalopods", words: ["SQUID", "OCTOPUS", "CUTTLEFISH", "NAUTILUS"] },
      { category: "Things with a stage", words: ["THEATER", "ROCKET", "CANCER", "CONCERT"] },
      { category: "Words from Arabic", words: ["ALGORITHM", "MAGAZINE", "TARIFF"] }
    ],
    decoys: ["SAFARI", "BASE", "BORN"]
  },
  {
    id: 135,
    groups: [
      { category: "Diving birds", words: ["KINGFISHER", "HERON", "OSPREY", "LOON"] },
      { category: "Things with a valve", words: ["TRUMPET", "HEART", "TIRE", "FAUCET"] },
      { category: "Words meaning 'to throw'", words: ["HURL", "FLING", "HEAVE"] }
    ],
    decoys: ["TOSS", "DOWN", "TWAIN"]
  },
  {
    id: 136,
    groups: [
      { category: "Mexican food", words: ["TACO", "BURRITO", "ENCHILADA", "QUESADILLA"] },
      { category: "Things that are braided", words: ["ROPE", "HAIR", "BREAD", "RIVER"] },
      { category: "Words meaning 'tip'", words: ["PEAK", "APEX", "CREST"] }
    ],
    decoys: ["SUMMIT", "TAIN", "STONE"]
  },
  {
    id: 137,
    groups: [
      { category: "Hound breeds", words: ["GREYHOUND", "BLOODHOUND", "BASSET", "DACHSHUND"] },
      { category: "Things at a carnival", words: ["MASK", "FLOAT", "CONFETTI", "STILTS"] },
      { category: "Words meaning 'edge'", words: ["BRINK", "VERGE", "MARGIN"] }
    ],
    decoys: ["FRINGE", "LOOK", "RAGE"]
  },
  {
    id: 138,
    groups: [
      { category: "Indian spices", words: ["GARAM MASALA", "CUMIN", "MUSTARD SEED", "FENNEL"] },
      { category: "Things that launch", words: ["ROCKET", "BOAT", "STARTUP", "CAMPAIGN"] },
      { category: "Words meaning 'group'", words: ["CLUSTER", "BATCH", "BUNCH"] }
    ],
    decoys: ["PACK", "DOWN", "STONE"]
  },
  {
    id: 139,
    groups: [
      { category: "Berries (true botanical)", words: ["GRAPE", "BANANA", "AVOCADO", "TOMATO"] },
      { category: "Things that have a trunk", words: ["ELEPHANT", "TREE", "CAR", "SUITCASE"] },
      { category: "Words meaning 'to shine'", words: ["GLEAM", "GLISTEN", "RADIATE"] }
    ],
    decoys: ["SHIMMER", "PIKE", "TABLE"]
  },
  {
    id: 140,
    groups: [
      { category: "Mediterranean herbs", words: ["OREGANO", "BASIL", "THYME", "MARJORAM"] },
      { category: "Things with horns", words: ["BULL", "RHINO", "UNICORN", "MOOSE"] },
      { category: "Scrabble high-point letters", words: ["Q", "Z", "X"] }
    ],
    decoys: ["J", "BACK", "SHOE"]
  },
  {
    id: 141,
    groups: [
      { category: "Raptor birds", words: ["HAWK", "FALCON", "BUZZARD", "VULTURE"] },
      { category: "Things that are inflatable", words: ["BALLOON", "TIRE", "MATTRESS", "RAFT"] },
      { category: "Words meaning 'to think'", words: ["PONDER", "MULL", "REFLECT"] }
    ],
    decoys: ["MUSE", "GATE", "BONE"]
  },
  {
    id: 142,
    groups: [
      { category: "Thai ingredients", words: ["LEMONGRASS", "GALANGAL", "FISH SAUCE", "COCONUT MILK"] },
      { category: "Things with a beak", words: ["TOUCAN", "EAGLE", "PLATYPUS", "SQUID"] },
      { category: "Words meaning 'a lot'", words: ["HEAPS", "OODLES", "LOADS"] }
    ],
    decoys: ["SCADS", "WORK", "TRIP"]
  },
  {
    id: 143,
    groups: [
      { category: "Retriever breeds", words: ["GOLDEN", "LABRADOR", "CHESAPEAKE", "FLAT COAT"] },
      { category: "Things with a shell", words: ["CRAB", "WALNUT", "TORTOISE", "CLAM"] },
      { category: "Words meaning 'strong'", words: ["ROBUST", "STURDY", "SOLID"] }
    ],
    decoys: ["STOUT", "AGE", "HOUSE"]
  },
  {
    id: 144,
    groups: [
      { category: "Soft cheeses", words: ["RICOTTA", "MASCARPONE", "BURRATA", "CHEVRE"] },
      { category: "Things that are winding", words: ["ROAD", "RIVER", "STAIRCASE", "CLOCK"] },
      { category: "Words that sound like numbers", words: ["WON", "ATE", "SICS"] }
    ],
    decoys: ["FORE", "STORY", "LETTER"]
  },
  {
    id: 145,
    groups: [
      { category: "Flatbreads", words: ["NAAN", "PITA", "TORTILLA", "ROTI"] },
      { category: "Things with a tail", words: ["DOG", "COMET", "AIRPLANE", "SCORPION"] },
      { category: "Words meaning 'to stop'", words: ["HALT", "CEASE", "QUIT"] }
    ],
    decoys: ["DESIST", "SHIELD", "FALL"]
  },
  {
    id: 146,
    groups: [
      { category: "Spanish foods", words: ["PAELLA", "GAZPACHO", "CHURROS", "TAPAS"] },
      { category: "Things in a gym locker", words: ["TOWEL", "PADLOCK", "SNEAKERS", "DEODORANT"] },
      { category: "Words meaning 'thin'", words: ["SLENDER", "SLIM", "LEAN"] }
    ],
    decoys: ["GAUNT", "TEASE", "MINE"]
  },
  {
    id: 147,
    groups: [
      { category: "Olive oil grades", words: ["EXTRA VIRGIN", "VIRGIN", "REFINED", "POMACE"] },
      { category: "Things that are frozen", words: ["TUNDRA", "YOGURT", "POPSICLE", "ASSET"] },
      { category: "Words meaning 'loud'", words: ["THUNDEROUS", "DEAFENING", "BLARING"] }
    ],
    decoys: ["BOOMING", "ISHED", "OUT"]
  },
  {
    id: 148,
    groups: [
      { category: "Chinese dishes", words: ["DIM SUM", "KUNG PAO", "CHOW MEIN", "FRIED RICE"] },
      { category: "Things with feathers", words: ["PILLOW", "ARROW", "QUILL", "PEACOCK"] },
      { category: "Words meaning 'scared'", words: ["ALARMED", "SPOOKED", "SHAKEN"] }
    ],
    decoys: ["RATTLED", "SHOT", "SUIT"]
  },
  {
    id: 149,
    groups: [
      { category: "Australian animals", words: ["PLATYPUS", "ECHIDNA", "QUOKKA", "WALLABY"] },
      { category: "Things at a desk", words: ["LAMP", "STAPLER", "MONITOR", "PEN CUP"] },
      { category: "Words from Dutch", words: ["COOKIE", "BOSS", "YACHT"] }
    ],
    decoys: ["WAFFLE", "TIME", "DREAM"]
  },
  {
    id: 150,
    groups: [
      { category: "Types of noodle", words: ["SOBA", "UDON", "RAMEN", "VERMICELLI"] },
      { category: "Things with a lens", words: ["CAMERA", "TELESCOPE", "GLASSES", "MICROSCOPE"] },
      { category: "Words meaning 'to look'", words: ["GAZE", "PEER", "GLANCE"] }
    ],
    decoys: ["STARE", "KICK", "MAT"]
  },
  {
    id: 151,
    groups: [
      { category: "Crustaceans", words: ["CRAB", "LOBSTER", "SHRIMP", "CRAWFISH"] },
      { category: "Things that unfold", words: ["MAP", "CHAIR", "NAPKIN", "STORY"] },
      { category: "Words meaning 'pale'", words: ["ASHEN", "PALLID", "SALLOW"] }
    ],
    decoys: ["WAN", "SHADE", "OWL"]
  },
  {
    id: 152,
    groups: [
      { category: "Middle Eastern foods", words: ["FALAFEL", "HUMMUS", "SHAWARMA", "BAKLAVA"] },
      { category: "Things with a loop", words: ["ROLLER COASTER", "LASSO", "BELT", "SHOELACE"] },
      { category: "Words meaning 'nonsense'", words: ["HOGWASH", "BUNK", "TRIPE"] }
    ],
    decoys: ["DRIVEL", "NAIL", "TIP"]
  },
  {
    id: 153,
    groups: [
      { category: "Types of salmon", words: ["SOCKEYE", "CHINOOK", "COHO", "ATLANTIC"] },
      { category: "Things that are coiled", words: ["SNAKE", "SPRING", "HOSE", "ROPE"] },
      { category: "Words meaning 'crazy'", words: ["BONKERS", "BANANAS", "BATTY"] }
    ],
    decoys: ["BARMY", "STILL", "POINT"]
  },
  {
    id: 154,
    groups: [
      { category: "Korean dishes", words: ["KIMCHI", "BIBIMBAP", "BULGOGI", "JAPCHAE"] },
      { category: "Things that reflect", words: ["MIRROR", "LAKE", "GLASS", "MOON"] },
      { category: "Words meaning 'stubborn'", words: ["DOGGED", "PIGHEADED", "BULLISH"] }
    ],
    decoys: ["MULISH", "STEP", "BELL"]
  },
  {
    id: 155,
    groups: [
      { category: "Tropical birds", words: ["TOUCAN", "MACAW", "PARROT", "COCKATOO"] },
      { category: "Things with a frame", words: ["PICTURE", "BICYCLE", "BED", "DOOR"] },
      { category: "Words meaning 'beautiful'", words: ["STUNNING", "GORGEOUS", "RAVISHING"] }
    ],
    decoys: ["EXQUISITE", "BREAK", "FELT"]
  },
  {
    id: 156,
    groups: [
      { category: "Italian cheeses", words: ["PARMESAN", "PECORINO", "GORGONZOLA", "FONTINA"] },
      { category: "Things that absorb", words: ["SPONGE", "TOWEL", "SOIL", "COTTON"] },
      { category: "Words meaning 'to fix'", words: ["MEND", "PATCH", "REPAIR"] }
    ],
    decoys: ["RESTORE", "TIME", "BREAK"]
  },
  {
    id: 157,
    groups: [
      { category: "Shellfish", words: ["MUSSEL", "OYSTER", "CLAM", "SCALLOP"] },
      { category: "Things with a dial", words: ["SAFE", "PHONE", "OVEN", "CLOCK"] },
      { category: "Words meaning 'to hurry'", words: ["RUSH", "HUSTLE", "HASTEN"] }
    ],
    decoys: ["SCRAMBLE", "HUNTER", "BAND"]
  },
  {
    id: 158,
    groups: [
      { category: "French pastries", words: ["MACARON", "ECLAIR", "CROISSANT", "MILLE FEUILLE"] },
      { category: "Things with a point", words: ["STAR", "PENCIL", "NEEDLE", "SPEAR"] },
      { category: "Words meaning 'foolish'", words: ["ABSURD", "DAFT", "INANE"] }
    ],
    decoys: ["SILLY", "END", "PIPE"]
  },
  {
    id: 159,
    groups: [
      { category: "Peruvian foods", words: ["CEVICHE", "LOMO SALTADO", "QUINOA", "ANTICUCHO"] },
      { category: "Things that are braided", words: ["CHALLAH", "LANYARD", "GARLIC", "WHIP"] },
      { category: "Words meaning 'bright'", words: ["LUMINOUS", "VIVID", "RADIANT"] }
    ],
    decoys: ["BRILLIANT", "LEADER", "TONE"]
  },
  {
    id: 160,
    groups: [
      { category: "Salamanders", words: ["AXE", "NEWT", "HELLBENDER", "MUDPUPPY"] },
      { category: "Things with a buckle", words: ["SHOE", "BELT", "HELMET", "WATCH"] },
      { category: "Words meaning 'to persuade'", words: ["COAX", "SWAY", "CAJOLE"] }
    ],
    decoys: ["URGE", "ART", "ORE"]
  },
  {
    id: 161,
    groups: [
      { category: "Ethiopian foods", words: ["INJERA", "WAT", "KITFO", "TIBS"] },
      { category: "Things that shimmer", words: ["SILK", "PEARL", "OIL SLICK", "AURORA"] },
      { category: "Words meaning 'brave'", words: ["COURAGEOUS", "INTREPID", "DARING"] }
    ],
    decoys: ["HEROIC", "SCOTCH", "FLY"]
  },
  {
    id: 162,
    groups: [
      { category: "Bears", words: ["SUN BEAR", "SPECTACLED", "SLOTH BEAR", "BLACK BEAR"] },
      { category: "Things with a cork", words: ["WINE", "BULLETIN BOARD", "FISHING ROD", "BAT"] },
      { category: "Words meaning 'to decrease'", words: ["WANE", "EBB", "TAPER"] }
    ],
    decoys: ["DWINDLE", "FINCH", "SMITH"]
  },
  {
    id: 163,
    groups: [
      { category: "Vietnamese dishes", words: ["PHO", "BANH MI", "SPRING ROLL", "BUN CHA"] },
      { category: "Things with a propeller", words: ["HELICOPTER", "BOAT", "FAN", "DRONE"] },
      { category: "Words meaning 'to shout'", words: ["BELLOW", "HOLLER", "YELL"] }
    ],
    decoys: ["ROAR", "DOG", "WORD"]
  },
  {
    id: 164,
    groups: [
      { category: "Pelicans and relatives", words: ["PELICAN", "CORMORANT", "FRIGATE", "GANNET"] },
      { category: "Things that are layered", words: ["TRIFLE", "ROCK", "WEDDING CAKE", "ONION"] },
      { category: "Words meaning 'to reveal'", words: ["DISCLOSE", "EXPOSE", "DIVULGE"] }
    ],
    decoys: ["UNVEIL", "SPRING", "BEAT"]
  },
  {
    id: 165,
    groups: [
      { category: "Clam varieties", words: ["LITTLENECK", "QUAHOG", "RAZOR", "GEODUCK"] },
      { category: "Things with a motor", words: ["BLENDER", "DRILL", "BOAT", "CAR"] },
      { category: "Words meaning 'tricky'", words: ["CRAFTY", "WILY", "CUNNING"] }
    ],
    decoys: ["SLY", "WISE", "PINCHER"]
  },
  {
    id: 166,
    groups: [
      { category: "Cacti", words: ["PRICKLY PEAR", "BARREL", "ORGAN PIPE", "HEDGEHOG"] },
      { category: "Things that cascade", words: ["WATERFALL", "HAIR", "DOMINOES", "FLOWERS"] },
      { category: "Words meaning 'to praise'", words: ["LAUD", "COMMEND", "HAIL"] }
    ],
    decoys: ["EXTOL", "STAIRS", "KEEP"]
  },
  {
    id: 167,
    groups: [
      { category: "Turkish dishes", words: ["KEBAB", "BOREK", "LAHMACUN", "PIDE"] },
      { category: "Things with a knob", words: ["DOOR", "STOVE", "DRAWER", "RADIO"] },
      { category: "Words meaning 'to predict'", words: ["FORECAST", "DIVINE", "AUGUR"] }
    ],
    decoys: ["FORESEE", "AGE", "MAN"]
  },
  {
    id: 168,
    groups: [
      { category: "Salamis", words: ["GENOA", "SOPRESSATA", "CHORIZO", "PEPPERONI"] },
      { category: "Things with a brim", words: ["HAT", "CUP", "VOLCANO", "BOWL"] },
      { category: "Words meaning 'to eat'", words: ["CONSUME", "DEVOUR", "NIBBLE"] }
    ],
    decoys: ["FEAST", "PHONE", "COUNT"]
  },
  {
    id: 169,
    groups: [
      { category: "Jamaican foods", words: ["JERK CHICKEN", "ACKEE", "PATTY", "CALLALOO"] },
      { category: "Things with a lid", words: ["POT", "CHEST", "TRASH CAN", "EYE"] },
      { category: "Words meaning 'fast'", words: ["NIMBLE", "AGILE", "HASTY"] }
    ],
    decoys: ["SPEEDY", "SHOE", "PLOW"]
  },
  {
    id: 170,
    groups: [
      { category: "Coral types", words: ["BRAIN", "STAGHORN", "FAN", "ELKHORN"] },
      { category: "Things with a saddle", words: ["HORSE", "BICYCLE", "MOUNTAIN", "SHOE"] },
      { category: "Words meaning 'calm'", words: ["SERENE", "PLACID", "COMPOSED"] }
    ],
    decoys: ["TRANQUIL", "CRAFT", "MARK"]
  },
  {
    id: 171,
    groups: [
      { category: "Hawaiian foods", words: ["POKE", "LOCO MOCO", "SPAM MUSUBI", "MALASADA"] },
      { category: "Things with a track", words: ["TRAIN", "RECORD", "RACECAR", "CURTAIN"] },
      { category: "Words meaning 'wet'", words: ["DAMP", "MOIST", "DRENCHED"] }
    ],
    decoys: ["SOGGY", "BAKED", "MOON"]
  },
  {
    id: 172,
    groups: [
      { category: "Indian breads", words: ["NAAN", "CHAPATI", "PARATHA", "KULCHA"] },
      { category: "Things with a web", words: ["SPIDER", "DUCK", "INTERNET", "FABRIC"] },
      { category: "Words meaning 'ugly'", words: ["GHASTLY", "GROTESQUE", "UNSIGHTLY"] }
    ],
    decoys: ["HIDEOUS", "DOWN", "ROOM"]
  },
  {
    id: 173,
    groups: [
      { category: "Mushroom types", words: ["OYSTER", "ENOKI", "LION MANE", "PORCINI"] },
      { category: "Things with a zipper", words: ["JACKET", "BAG", "TENT", "BOOT"] },
      { category: "Words meaning 'to agree'", words: ["CONCUR", "ASSENT", "CONSENT"] }
    ],
    decoys: ["ENDORSE", "FARE", "LAID"]
  },
  {
    id: 174,
    groups: [
      { category: "Moroccan dishes", words: ["TAGINE", "COUSCOUS", "HARIRA", "PASTILLA"] },
      { category: "Things with a magnet", words: ["FRIDGE", "COMPASS", "SPEAKER", "MRI"] },
      { category: "Words meaning 'to shake'", words: ["TREMBLE", "QUIVER", "QUAKE"] }
    ],
    decoys: ["SHUDDER", "WAY", "CASE"]
  },
  {
    id: 175,
    groups: [
      { category: "Apples", words: ["GALA", "FUJI", "HONEYCRISP", "GRANNY SMITH"] },
      { category: "Things with a fin", words: ["SHARK", "ROCKET", "SURFBOARD", "RADIATOR"] },
      { category: "Words meaning 'to avoid'", words: ["DODGE", "SIDESTEP", "DUCK"] }
    ],
    decoys: ["EVADE", "CREW", "FALL"]
  },
  {
    id: 176,
    groups: [
      { category: "Indonesian foods", words: ["SATAY", "NASI GORENG", "RENDANG", "TEMPEH"] },
      { category: "Things with a wheel", words: ["BICYCLE", "HAMSTER", "SHIP", "ROULETTE"] },
      { category: "Words meaning 'mysterious'", words: ["ARCANE", "ENIGMATIC", "OCCULT"] }
    ],
    decoys: ["CRYPTIC", "GUARD", "SETTER"]
  },
  {
    id: 177,
    groups: [
      { category: "Types of pepper", words: ["BELL", "GHOST", "CHIPOTLE", "POBLANO"] },
      { category: "Things with a stripe", words: ["ZEBRA", "TIGER", "FLAG", "CANDY CANE"] },
      { category: "Words meaning 'to help'", words: ["AID", "ASSIST", "BOLSTER"] }
    ],
    decoys: ["FOSTER", "WHEEL", "WEIGHT"]
  },
  {
    id: 178,
    groups: [
      { category: "Japanese sweets", words: ["MOCHI", "DANGO", "TAIYAKI", "DORAYAKI"] },
      { category: "Things with a stem", words: ["FLOWER", "CHERRY", "WINE GLASS", "MUSHROOM"] },
      { category: "Words meaning 'new'", words: ["NOVEL", "FRESH", "CURRENT"] }
    ],
    decoys: ["MODERN", "SESSION", "JAR"]
  },
  {
    id: 179,
    groups: [
      { category: "Frog species", words: ["TREE FROG", "BULLFROG", "DART FROG", "LEOPARD FROG"] },
      { category: "Things with a spout", words: ["TEAPOT", "WHALE", "GUTTER", "WATERING CAN"] },
      { category: "Words meaning 'to bother'", words: ["PESTER", "HARASS", "HASSLE"] }
    ],
    decoys: ["BADGER", "WORD", "HOLE"]
  },
  {
    id: 180,
    groups: [
      { category: "Brazilian dishes", words: ["FEIJOADA", "COXINHA", "BRIGADEIRO", "ACAI BOWL"] },
      { category: "Things with a mane", words: ["LION", "HORSE", "ZEBRA", "GUITARIST"] },
      { category: "Words meaning 'to boast'", words: ["BRAG", "FLAUNT", "GLOAT"] }
    ],
    decoys: ["CROW", "ABOUT", "DOWN"]
  },
  {
    id: 181,
    groups: [
      { category: "German foods", words: ["BRATWURST", "PRETZEL", "SCHNITZEL", "SAUERKRAUT"] },
      { category: "Things with a peak", words: ["MOUNTAIN", "CAP", "GRAPH", "WAVE"] },
      { category: "Words meaning 'to wander'", words: ["STRAY", "TREK", "TRAIPSE"] }
    ],
    decoys: ["ROVE", "FATHER", "CHILD"]
  },
  {
    id: 182,
    groups: [
      { category: "River fish", words: ["CATFISH", "PIKE", "PERCH", "CARP"] },
      { category: "Things that are transparent", words: ["GLASS", "WATER", "JELLYFISH", "CELLOPHANE"] },
      { category: "Words meaning 'to cut'", words: ["CARVE", "SLICE", "SEVER"] }
    ],
    decoys: ["CLEAVE", "KICK", "BACK"]
  },
  {
    id: 183,
    groups: [
      { category: "French cheeses", words: ["BRIE", "COMTE", "REBLOCHON", "SAINT AGUR"] },
      { category: "Things with a blade", words: ["SWORD", "FAN", "GRASS", "RAZOR"] },
      { category: "Words meaning 'to persuade'", words: ["CONVINCE", "TEMPT", "LURE"] }
    ],
    decoys: ["ENTICE", "ACHE", "BRUSH"]
  },
  {
    id: 184,
    groups: [
      { category: "Pelts and furs", words: ["MINK", "SABLE", "ERMINE", "CHINCHILLA"] },
      { category: "Things with a dock", words: ["BOAT", "PHONE", "COURTROOM", "SPACE STATION"] },
      { category: "Words meaning 'to vanish'", words: ["EVAPORATE", "FADE", "DISSIPATE"] }
    ],
    decoys: ["DISSOLVE", "BACK", "OUT"]
  },
  {
    id: 185,
    groups: [
      { category: "Lebanese dishes", words: ["TABBOULEH", "FATTOUSH", "KIBBEH", "MANOUSHE"] },
      { category: "Things with a cord", words: ["PHONE", "GUITAR", "PARACHUTE", "LAMP"] },
      { category: "Words meaning 'to try'", words: ["ENDEAVOR", "STRIVE", "VENTURE"] }
    ],
    decoys: ["ATTEMPT", "BALL", "OPENER"]
  },
  {
    id: 186,
    groups: [
      { category: "Polish foods", words: ["PIEROGI", "BIGOS", "KIELBASA", "BORSCHT"] },
      { category: "Things with a paddle", words: ["CANOE", "PING PONG", "BUTTER", "SPANKING"] },
      { category: "Words meaning 'to sparkle'", words: ["TWINKLE", "SHIMMER", "GLINT"] }
    ],
    decoys: ["GLITTER", "ROLL", "CHECK"]
  },
  {
    id: 187,
    groups: [
      { category: "Types of tuna", words: ["BLUEFIN", "YELLOWFIN", "ALBACORE", "SKIPJACK"] },
      { category: "Things with a perch", words: ["BIRD", "PARROT", "LIFEGUARD", "BALCONY"] },
      { category: "Words meaning 'to scatter'", words: ["DISPERSE", "SPRINKLE", "SPLAY"] }
    ],
    decoys: ["STREW", "LINE", "DOG"]
  },
  {
    id: 188,
    groups: [
      { category: "Succulents", words: ["ALOE", "JADE", "AGAVE", "SEDUM"] },
      { category: "Things that are elastic", words: ["RUBBER BAND", "WAISTBAND", "TRAMPOLINE", "BUNGEE"] },
      { category: "Words meaning 'weird'", words: ["EERIE", "SURREAL", "OUTLANDISH"] }
    ],
    decoys: ["UNCANNY", "TED", "CHECK"]
  },
  {
    id: 189,
    groups: [
      { category: "Spanish tapas", words: ["PATATAS BRAVAS", "CROQUETAS", "GAMBAS", "JAMON"] },
      { category: "Things with a chamber", words: ["HEART", "GUN", "CAVE", "SENATE"] },
      { category: "Words meaning 'to suggest'", words: ["PROPOSE", "HINT", "INSINUATE"] }
    ],
    decoys: ["IMPLY", "WASH", "COLLAR"]
  },
  {
    id: 190,
    groups: [
      { category: "Types of lettuce", words: ["ICEBERG", "ROMAINE", "BUTTER", "FRISEE"] },
      { category: "Things with a rudder", words: ["BOAT", "AIRPLANE", "SUBMARINE", "KAYAK"] },
      { category: "Words meaning 'to reveal'", words: ["UNCOVER", "BETRAY", "BARE"] }
    ],
    decoys: ["UNMASK", "CHEAP", "BIG"]
  },
  {
    id: 191,
    groups: [
      { category: "Diving equipment", words: ["SNORKEL", "WETSUIT", "TANK", "MASK"] },
      { category: "Things with a fuse", words: ["BOMB", "FIREWORK", "CIRCUIT", "TEMPER"] },
      { category: "Words meaning 'to wander'", words: ["AMBLE", "MOSEY", "GALLIVANT"] }
    ],
    decoys: ["SAUNTER", "POLISH", "GUN"]
  },
  {
    id: 192,
    groups: [
      { category: "Egyptian foods", words: ["KOSHARI", "FUL MEDAMES", "DUKKAH", "MOLOKHIA"] },
      { category: "Things with a nest", words: ["BIRD", "WASP", "EGG", "TABLE"] },
      { category: "Words meaning 'to defeat'", words: ["CONQUER", "ROUT", "TOPPLE"] }
    ],
    decoys: ["VANQUISH", "FALL", "LORD"]
  },
  {
    id: 193,
    groups: [
      { category: "Olives", words: ["KALAMATA", "CERIGNOLA", "PICHOLINE", "GAETA"] },
      { category: "Things with a root", words: ["TREE", "TOOTH", "WORD", "GINGER"] },
      { category: "Words meaning 'to jump'", words: ["LEAP", "BOUND", "SPRING"] }
    ],
    decoys: ["VAULT", "SHOT", "SHIP"]
  },
  {
    id: 194,
    groups: [
      { category: "Russian dishes", words: ["BORSCHT", "PELMENI", "BLINI", "BEEF STROGANOFF"] },
      { category: "Things with a hook", words: ["FISHING ROD", "CRANE", "COAT RACK", "PIRATE"] },
      { category: "Words meaning 'to grip'", words: ["CLUTCH", "GRASP", "CLENCH"] }
    ],
    decoys: ["CLASP", "HANDED", "LY"]
  },
  {
    id: 195,
    groups: [
      { category: "Antarctic animals", words: ["SEAL", "PENGUIN", "ALBATROSS", "KRILL"] },
      { category: "Things with a gauge", words: ["FUEL", "TIRE", "RAILROAD", "SHOTGUN"] },
      { category: "Words meaning 'empty'", words: ["HOLLOW", "BARREN", "VOID"] }
    ],
    decoys: ["VACANT", "CAST", "HEAD"]
  },
  {
    id: 196,
    groups: [
      { category: "Thai curries", words: ["GREEN", "RED", "YELLOW", "MASSAMAN"] },
      { category: "Things with a pedestal", words: ["STATUE", "SINK", "TROPHY", "COLUMN"] },
      { category: "Words meaning 'lazy'", words: ["SLOTHFUL", "INDOLENT", "LETHARGIC"] }
    ],
    decoys: ["IDLE", "STEP", "JAW"]
  },
  {
    id: 197,
    groups: [
      { category: "Salmon preparations", words: ["SMOKED", "GRAVLAX", "SASHIMI", "TARTARE"] },
      { category: "Things that are braided", words: ["RUG", "BELT", "CORD", "PASTRY"] },
      { category: "Words meaning 'rare'", words: ["SCARCE", "UNCOMMON", "SPARSE"] }
    ],
    decoys: ["ELUSIVE", "LASH", "HAND"]
  },
  {
    id: 198,
    groups: [
      { category: "Stews around the world", words: ["GOULASH", "GUMBO", "CASSOULET", "TAGINE"] },
      { category: "Things with a gauge", words: ["PRESSURE", "RAIN", "WIRE", "WIND"] },
      { category: "Words meaning 'to calm down'", words: ["SUBSIDE", "ABATE", "RECEDE"] }
    ],
    decoys: ["RELENT", "SPOT", "BEAM"]
  },
  {
    id: 199,
    groups: [
      { category: "Types of honey", words: ["MANUKA", "CLOVER", "WILDFLOWER", "BUCKWHEAT"] },
      { category: "Things with a spine", words: ["BOOK", "HEDGEHOG", "CACTUS", "HUMAN"] },
      { category: "Words meaning 'clever'", words: ["SHREWD", "SAVVY", "SHARP"] }
    ],
    decoys: ["ASTUTE", "SHED", "LINE"]
  },
  {
    id: 200,
    groups: [
      { category: "Dim sum items", words: ["SIU MAI", "HAR GOW", "CHAR SIU BAO", "TURNIP CAKE"] },
      { category: "Things with a bark", words: ["DOG", "TREE", "CHOCOLATE", "CINNAMON"] },
      { category: "Words meaning 'to strengthen'", words: ["REINFORCE", "BOLSTER", "BUTTRESS"] }
    ],
    decoys: ["FORTIFY", "TIME", "BACK"]
  },
  {
    id: 201,
    groups: [
      { category: "Bagel flavors", words: ["EVERYTHING", "SESAME", "POPPY", "ONION"] },
      { category: "Things with a plume", words: ["SMOKE", "PEACOCK", "HELMET", "VOLCANO"] },
      { category: "Words meaning 'to beg'", words: ["PLEAD", "IMPLORE", "ENTREAT"] }
    ],
    decoys: ["BESEECH", "RULE", "TIME"]
  },
  {
    id: 202,
    groups: [
      { category: "Chili varieties", words: ["ANCHO", "GUAJILLO", "PASILLA", "ARBOL"] },
      { category: "Things with a pedal", words: ["BICYCLE", "ORGAN", "SEWING MACHINE", "CAR"] },
      { category: "Words meaning 'to break'", words: ["SHATTER", "FRACTURE", "SPLINTER"] }
    ],
    decoys: ["RUPTURE", "REST", "PIT"]
  },
  {
    id: 203,
    groups: [
      { category: "Pizza styles", words: ["NEAPOLITAN", "DEEP DISH", "THIN CRUST", "SICILIAN"] },
      { category: "Things with a vent", words: ["VOLCANO", "DRYER", "HOOD", "SUBMARINE"] },
      { category: "Words meaning 'to flee'", words: ["ESCAPE", "BOLT", "SCARPER"] }
    ],
    decoys: ["ABSCOND", "BREED", "BAR"]
  },
  {
    id: 204,
    groups: [
      { category: "Coffee origins", words: ["COLOMBIAN", "ETHIOPIAN", "SUMATRA", "KONA"] },
      { category: "Things with a band", words: ["RING", "RUBBER", "WRIST", "ROCK"] },
      { category: "Words meaning 'to avoid'", words: ["SHUN", "SKIRT", "ESCHEW"] }
    ],
    decoys: ["ELUDE", "KICK", "OUT"]
  },
  {
    id: 205,
    groups: [
      { category: "Raptors", words: ["EAGLE", "OSPREY", "CONDOR", "KITE"] },
      { category: "Things with a strap", words: ["WATCH", "SANDAL", "GUITAR", "BACKPACK"] },
      { category: "Words meaning 'to lessen'", words: ["MITIGATE", "CURTAIL", "ALLEVIATE"] }
    ],
    decoys: ["DIMINISH", "MAID", "WEED"]
  },
  {
    id: 206,
    groups: [
      { category: "Types of cake", words: ["CHIFFON", "BUNDT", "POUND", "ANGEL FOOD"] },
      { category: "Things with a grid", words: ["CROSSWORD", "MAP", "WAFFLE", "CHESS BOARD"] },
      { category: "Words meaning 'to ban'", words: ["OUTLAW", "VETO", "EMBARGO"] }
    ],
    decoys: ["CENSOR", "PLANT", "WIFE"]
  },
  {
    id: 207,
    groups: [
      { category: "Nut butters", words: ["PEANUT", "ALMOND", "CASHEW", "TAHINI"] },
      { category: "Things with a scale", words: ["MOUNTAIN", "LIZARD", "BATHROOM", "GUITAR"] },
      { category: "Words meaning 'to hide'", words: ["CONCEAL", "STASH", "TUCK"] }
    ],
    decoys: ["HARBOR", "HOUSE", "CRASH"]
  },
  {
    id: 208,
    groups: [
      { category: "Sausage types", words: ["BRATWURST", "ANDOUILLE", "MERGUEZ", "LINGUICA"] },
      { category: "Things with a mirror", words: ["BATHROOM", "CAR", "TELESCOPE", "FUN HOUSE"] },
      { category: "Words meaning 'to destroy'", words: ["RAZE", "ANNIHILATE", "OBLITERATE"] }
    ],
    decoys: ["DEMOLISH", "FARE", "WISHER"]
  },
  {
    id: 209,
    groups: [
      { category: "Types of vinegar", words: ["BALSAMIC", "CIDER", "RICE", "MALT"] },
      { category: "Things with a ledge", words: ["CLIFF", "WINDOW", "SHELF", "BUILDING"] },
      { category: "Words meaning 'to wander aimlessly'", words: ["LOITER", "DAWDLE", "MILL"] }
    ],
    decoys: ["LINGER", "POWER", "STICK"]
  },
  {
    id: 210,
    groups: [
      { category: "Smoked meats", words: ["BRISKET", "PASTRAMI", "BACON", "JERKY"] },
      { category: "Things with a beam", words: ["FLASHLIGHT", "BARN", "GYMNAST", "SUNLIGHT"] },
      { category: "Words meaning 'to honor'", words: ["REVERE", "ESTEEM", "CHERISH"] }
    ],
    decoys: ["VENERATE", "PHONE", "PIECE"]
  },
  {
    id: 211,
    groups: [
      { category: "Steak cuts", words: ["RIBEYE", "SIRLOIN", "FILET", "FLANK"] },
      { category: "Things with a channel", words: ["TV", "RIVER", "ENGLISH", "RADIO"] },
      { category: "Words meaning 'to gather'", words: ["AMASS", "MUSTER", "CONVENE"] }
    ],
    decoys: ["ASSEMBLE", "FRONT", "CHASER"]
  },
  {
    id: 212,
    groups: [
      { category: "Dumpling types", words: ["GYOZA", "WONTON", "PIEROGI", "MOMO"] },
      { category: "Things with a sole", words: ["SHOE", "FISH", "FOOT", "SOUL MUSIC"] },
      { category: "Words meaning 'to anger'", words: ["INFURIATE", "PROVOKE", "INCENSE"] }
    ],
    decoys: ["ENRAGE", "RUS", "EYE"]
  },
  {
    id: 213,
    groups: [
      { category: "Cocktails", words: ["MOJITO", "MARGARITA", "DAIQUIRI", "NEGRONI"] },
      { category: "Things with a plug", words: ["BATHTUB", "OUTLET", "SPARK", "EAR"] },
      { category: "Words meaning 'to admire'", words: ["ADORE", "IDOLIZE", "TREASURE"] }
    ],
    decoys: ["WORSHIP", "BACK", "LINE"]
  },
  {
    id: 214,
    groups: [
      { category: "Charcuterie items", words: ["PROSCIUTTO", "SALAMI", "CAPICOLA", "MORTADELLA"] },
      { category: "Things with a hatch", words: ["SUBMARINE", "EGG", "SHIP", "ATTIC"] },
      { category: "Words meaning 'to hurry'", words: ["BOLT", "SPRINT", "ZOOM"] }
    ],
    decoys: ["DART", "WORK", "END"]
  },
  {
    id: 215,
    groups: [
      { category: "Tea varieties", words: ["ASSAM", "CEYLON", "OOLONG", "SENCHA"] },
      { category: "Things with a spine", words: ["PORCUPINE", "MOUNTAIN RANGE", "SEA URCHIN", "BOOK"] },
      { category: "Words meaning 'to argue'", words: ["DISPUTE", "SQUABBLE", "WRANGLE"] }
    ],
    decoys: ["BICKER", "FISH", "SHOCK"]
  },
  {
    id: 216,
    groups: [
      { category: "Soup varieties", words: ["PUMPKIN", "TOMATO", "LENTIL", "MUSHROOM"] },
      { category: "Things with a patch", words: ["EYE", "GARDEN", "JACKET", "SOFTWARE"] },
      { category: "Words meaning 'to shine'", words: ["GLEAM", "BEAM", "BLAZE"] }
    ],
    decoys: ["GLOW", "WAGON", "WIDTH"]
  },
  {
    id: 217,
    groups: [
      { category: "Wine regions", words: ["BORDEAUX", "TUSCANY", "NAPA", "RIOJA"] },
      { category: "Things with a harbor", words: ["PEARL", "CITY", "BOAT", "SEAL"] },
      { category: "Words meaning 'to charm'", words: ["CAPTIVATE", "ENCHANT", "MESMERIZE"] }
    ],
    decoys: ["BEWITCH", "SHED", "LOGGED"]
  },
  {
    id: 218,
    groups: [
      { category: "Breakfast foods", words: ["PANCAKE", "WAFFLE", "OMELET", "BAGEL"] },
      { category: "Olympic sports", words: ["FENCING", "JAVELIN", "ROWING", "ARCHERY"] },
      { category: "Words meaning 'to flee'", words: ["ESCAPE", "BOLT", "SCATTER"] }
    ],
    decoys: ["RETREAT", "STORM", "CLAP"]
  },
  {
    id: 219,
    groups: [
      { category: "Gemstones", words: ["EMERALD", "SAPPHIRE", "TOPAZ", "GARNET"] },
      { category: "Things in a gym", words: ["BENCH", "MAT", "ROPE", "MIRROR"] },
      { category: "Words meaning 'to steal'", words: ["SWIPE", "PINCH", "FILCH"] }
    ],
    decoys: ["PILFER", "WORK", "BALL"]
  },
  {
    id: 220,
    groups: [
      { category: "Dog breeds", words: ["BEAGLE", "POODLE", "BOXER", "COLLIE"] },
      { category: "Things that spin", words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Words meaning 'to annoy'", words: ["PESTER", "GRATE", "NETTLE"] }
    ],
    decoys: ["RANKLE", "PLACE", "TRUCK"]
  },
  {
    id: 221,
    groups: [
      { category: "Citrus fruits", words: ["LEMON", "LIME", "ORANGE", "TANGERINE"] },
      { category: "Things in a wallet", words: ["CASH", "LICENSE", "PHOTO", "RECEIPT"] },
      { category: "Words meaning 'to wander'", words: ["ROAM", "MEANDER", "RAMBLE"] }
    ],
    decoys: ["DRIFT", "BERRY", "SMITH"]
  },
  {
    id: 222,
    groups: [
      { category: "Musical genres", words: ["JAZZ", "BLUES", "FUNK", "REGGAE"] },
      { category: "Things with wings", words: ["AIRPLANE", "ANGEL", "BAT", "STAGE"] },
      { category: "Words meaning 'to praise'", words: ["LAUD", "EXTOL", "ACCLAIM"] }
    ],
    decoys: ["COMMEND", "ROOF", "DIAL"]
  },
  {
    id: 223,
    groups: [
      { category: "Salad greens", words: ["ARUGULA", "SPINACH", "KALE", "ROMAINE"] },
      { category: "Casino games", words: ["CRAPS", "ROULETTE", "BACCARAT", "SLOTS"] },
      { category: "Words meaning 'to hide'", words: ["CONCEAL", "SHROUD", "OBSCURE"] }
    ],
    decoys: ["CLOAK", "TRAIL", "WEIGHT"]
  },
  {
    id: 224,
    groups: [
      { category: "Zoo animals", words: ["GIRAFFE", "ZEBRA", "HIPPO", "GORILLA"] },
      { category: "Things with strings", words: ["GUITAR", "KITE", "PUPPET", "BALLOON"] },
      { category: "Words meaning 'to trick'", words: ["DUPE", "HOODWINK", "SWINDLE"] }
    ],
    decoys: ["BAMBOOZLE", "FIRE", "YARD"]
  },
  {
    id: 225,
    groups: [
      { category: "Italian dishes", words: ["RISOTTO", "LASAGNA", "GNOCCHI", "BRUSCHETTA"] },
      { category: "Camping gear", words: ["TENT", "LANTERN", "COMPASS", "CANTEEN"] },
      { category: "Words meaning 'to shatter'", words: ["SMASH", "FRACTURE", "SPLINTER"] }
    ],
    decoys: ["DEMOLISH", "ROADS", "BOW"]
  },
  {
    id: 226,
    groups: [
      { category: "Spices", words: ["CINNAMON", "TURMERIC", "PAPRIKA", "CUMIN"] },
      { category: "Things with keys", words: ["PIANO", "KEYBOARD", "LOCKSMITH", "MAP"] },
      { category: "Words meaning 'to glow'", words: ["SHIMMER", "GLISTEN", "LUMINOUS"] }
    ],
    decoys: ["RADIATE", "KICK", "SHOW"]
  },
  {
    id: 227,
    groups: [
      { category: "Martial arts", words: ["KARATE", "JUDO", "KUNG FU", "AIKIDO"] },
      { category: "Things that melt", words: ["ICE", "BUTTER", "CHOCOLATE", "WAX"] },
      { category: "Words meaning 'to reveal'", words: ["EXPOSE", "DISCLOSE", "UNVEIL"] }
    ],
    decoys: ["DIVULGE", "BAND", "LINE"]
  },
  {
    id: 228,
    groups: [
      { category: "Board games", words: ["CHESS", "CLUE", "RISK", "SORRY"] },
      { category: "Things with bark", words: ["DOG", "TREE", "COUGH", "CAPTAIN"] },
      { category: "Words meaning 'to confuse'", words: ["BAFFLE", "PERPLEX", "MYSTIFY"] }
    ],
    decoys: ["BEWILDER", "COLD", "MASON"]
  },
  {
    id: 229,
    groups: [
      { category: "Sushi fish", words: ["SALMON", "TUNA", "EEL", "MACKEREL"] },
      { category: "Things with a crown", words: ["KING", "TOOTH", "ROOSTER", "HILL"] },
      { category: "Words meaning 'to bother'", words: ["HARASS", "BADGER", "HASSLE"] }
    ],
    decoys: ["NAG", "WALK", "LIGHT"]
  },
  {
    id: 230,
    groups: [
      { category: "Cartoon cats", words: ["GARFIELD", "TOM", "SYLVESTER", "FELIX"] },
      { category: "Things in a pocket", words: ["KEYS", "LINT", "COIN", "PHONE"] },
      { category: "Words meaning 'to weaken'", words: ["ERODE", "UNDERMINE", "DIMINISH"] }
    ],
    decoys: ["SAP", "LEAF", "FISH"]
  },
  {
    id: 231,
    groups: [
      { category: "Herbs", words: ["BASIL", "THYME", "OREGANO", "DILL"] },
      { category: "Parts of a ship", words: ["HULL", "MAST", "STERN", "ANCHOR"] },
      { category: "Words meaning 'to grab'", words: ["CLUTCH", "SEIZE", "GRASP"] }
    ],
    decoys: ["SNATCH", "HOUSE", "WEIGHT"]
  },
  {
    id: 232,
    groups: [
      { category: "Ice cream flavors", words: ["VANILLA", "MOCHA", "PISTACHIO", "MANGO"] },
      { category: "Things with a ring", words: ["PHONE", "CIRCUS", "BOXING", "SATURN"] },
      { category: "Words meaning 'to mock'", words: ["RIDICULE", "TAUNT", "DERIDE"] }
    ],
    decoys: ["SCOFF", "BALL", "BOARD"]
  },
  {
    id: 233,
    groups: [
      { category: "Fabrics", words: ["SILK", "DENIM", "VELVET", "LINEN"] },
      { category: "Things that bounce", words: ["CHECK", "BALL", "TIGGER", "IDEA"] },
      { category: "Words meaning 'to mix'", words: ["BLEND", "COMBINE", "FUSE"] }
    ],
    decoys: ["MINGLE", "BRUSH", "FAIRY"]
  },
  {
    id: 234,
    groups: [
      { category: "World capitals", words: ["TOKYO", "OSLO", "LIMA", "CAIRO"] },
      { category: "Things with a shell", words: ["TORTOISE", "WALNUT", "TACO", "SHOTGUN"] },
      { category: "Words meaning 'to hurry'", words: ["HASTEN", "SCURRY", "HUSTLE"] }
    ],
    decoys: ["RUSH", "BOTTOM", "SLIDE"]
  },
  {
    id: 235,
    groups: [
      { category: "Dances", words: ["RUMBA", "SAMBA", "FOXTROT", "POLKA"] },
      { category: "Things with scales", words: ["FISH", "DRAGON", "MAP", "PIANO"] },
      { category: "Words meaning 'to scatter'", words: ["STREW", "BROADCAST", "SPRINKLE"] }
    ],
    decoys: ["DISPERSE", "CLUB", "FALL"]
  },
  {
    id: 236,
    groups: [
      { category: "Nuts", words: ["ALMOND", "CASHEW", "PECAN", "WALNUT"] },
      { category: "Things with a blade", words: ["FAN", "SKATE", "GRASS", "KNIFE"] },
      { category: "Words meaning 'to shrink'", words: ["DWINDLE", "CONTRACT", "WITHER"] }
    ],
    decoys: ["RECEDE", "BEE", "DEW"]
  },
  {
    id: 237,
    groups: [
      { category: "Cheeses", words: ["BRIE", "GOUDA", "CHEDDAR", "FETA"] },
      { category: "Things with a trunk", words: ["ELEPHANT", "CAR", "TREE", "SUITCASE"] },
      { category: "Words meaning 'to deny'", words: ["REFUTE", "REBUFF", "REJECT"] }
    ],
    decoys: ["RENOUNCE", "WORK", "CATCHER"]
  },
  {
    id: 238,
    groups: [
      { category: "Berries", words: ["RASPBERRY", "CRANBERRY", "BLUEBERRY", "MULBERRY"] },
      { category: "Things with a net", words: ["TENNIS", "FISHING", "HAMMOCK", "INTERNET"] },
      { category: "Words meaning 'to delay'", words: ["STALL", "DEFER", "SHELVE"] }
    ],
    decoys: ["POSTPONE", "WITNESS", "LASH"]
  },
  {
    id: 239,
    groups: [
      { category: "Woodwind instruments", words: ["FLUTE", "CLARINET", "OBOE", "BASSOON"] },
      { category: "Things with a cap", words: ["BOTTLE", "MUSHROOM", "KNEE", "PEN"] },
      { category: "Words meaning 'to beg'", words: ["IMPLORE", "PLEAD", "BESEECH"] }
    ],
    decoys: ["ENTREAT", "MADE", "CRAFT"]
  },
  {
    id: 240,
    groups: [
      { category: "Tropical fruits", words: ["PAPAYA", "GUAVA", "COCONUT", "PASSION"] },
      { category: "Things in a park", words: ["BENCH", "FOUNTAIN", "STATUE", "SQUIRREL"] },
      { category: "Words meaning 'to forbid'", words: ["PROHIBIT", "BAN", "VETO"] }
    ],
    decoys: ["OUTLAW", "FISH", "LIGHT"]
  },
  {
    id: 241,
    groups: [
      { category: "Knots", words: ["BOWLINE", "CLOVE", "REEF", "SLIP"] },
      { category: "Things with a face", words: ["CLOCK", "CLIFF", "COIN", "BUILDING"] },
      { category: "Words meaning 'to flourish'", words: ["THRIVE", "PROSPER", "BLOSSOM"] }
    ],
    decoys: ["BLOOM", "WORM", "KEEPER"]
  },
  {
    id: 242,
    groups: [
      { category: "Desserts", words: ["TIRAMISU", "CANNOLI", "STRUDEL", "ECLAIR"] },
      { category: "Things with teeth", words: ["COMB", "SAW", "GEAR", "ZIPPER"] },
      { category: "Words meaning 'to rush'", words: ["SCRAMBLE", "SPRINT", "BARREL"] }
    ],
    decoys: ["DASH", "STORM", "CASTLE"]
  },
  {
    id: 243,
    groups: [
      { category: "Reptiles", words: ["IGUANA", "COBRA", "GECKO", "PYTHON"] },
      { category: "Things with a bed", words: ["RIVER", "TRUCK", "FLOWER", "HOSPITAL"] },
      { category: "Words meaning 'to cheat'", words: ["SWINDLE", "DEFRAUD", "FLEECE"] }
    ],
    decoys: ["BILK", "WIFE", "HOLD"]
  },
  {
    id: 244,
    groups: [
      { category: "Cocktails", words: ["MOJITO", "MARTINI", "DAIQUIRI", "GIMLET"] },
      { category: "Things with a horn", words: ["UNICORN", "RHINO", "CAR", "TRUMPET"] },
      { category: "Words meaning 'to soothe'", words: ["MOLLIFY", "ASSUAGE", "APPEASE"] }
    ],
    decoys: ["PLACATE", "SAW", "LINK"]
  },
  {
    id: 245,
    groups: [
      { category: "Constellations", words: ["ORION", "GEMINI", "LEO", "DRACO"] },
      { category: "Things with a pit", words: ["CHERRY", "ORCHESTRA", "MINE", "PEACH"] },
      { category: "Words meaning 'to ponder'", words: ["MUSE", "RUMINATE", "MULL"] }
    ],
    decoys: ["REFLECT", "HOUSE", "HORN"]
  },
  {
    id: 246,
    groups: [
      { category: "Breads", words: ["FOCACCIA", "NAAN", "CHALLAH", "PITA"] },
      { category: "Things with a tail", words: ["COMET", "KITE", "COAT", "SHRIMP"] },
      { category: "Words meaning 'to vanish'", words: ["DISSOLVE", "DISSIPATE", "FADE"] }
    ],
    decoys: ["EVAPORATE", "BOARD", "HAUL"]
  },
  {
    id: 247,
    groups: [
      { category: "Volcanoes", words: ["VESUVIUS", "ETNA", "FUJI", "KRAKATOA"] },
      { category: "Things in a purse", words: ["LIPSTICK", "MIRROR", "WALLET", "TISSUE"] },
      { category: "Words meaning 'to stun'", words: ["DAZE", "STAGGER", "FLUMMOX"] }
    ],
    decoys: ["STUPEFY", "WORK", "HORSE"]
  },
  {
    id: 248,
    groups: [
      { category: "Mushrooms", words: ["SHIITAKE", "TRUFFLE", "CREMINI", "OYSTER"] },
      { category: "Things with a tongue", words: ["SHOE", "FLAME", "BELL", "SNAKE"] },
      { category: "Words meaning 'to scold'", words: ["CHASTISE", "REBUKE", "ADMONISH"] }
    ],
    decoys: ["BERATE", "TIGHT", "WAVE"]
  },
  {
    id: 249,
    groups: [
      { category: "Peppers", words: ["HABANERO", "SERRANO", "CAYENNE", "JALAPENO"] },
      { category: "Things with a drum", words: ["BAND", "STICK", "ROLL", "MAJOR"] },
      { category: "Words meaning 'to climb'", words: ["ASCEND", "SCALE", "SCRAMBLE"] }
    ],
    decoys: ["CLAMBER", "PRINT", "HOLD"]
  },
  {
    id: 250,
    groups: [
      { category: "Rivers", words: ["DANUBE", "THAMES", "NILE", "AMAZON"] },
      { category: "Things with a handle", words: ["MUG", "DOOR", "SUITCASE", "PAN"] },
      { category: "Words meaning 'to destroy'", words: ["DECIMATE", "RUIN", "WRECK"] }
    ],
    decoys: ["RAVAGE", "TROOPER", "DRAIN"]
  },
  {
    id: 251,
    groups: [
      { category: "Pasta shapes", words: ["PENNE", "RIGATONI", "FUSILLI", "ORZO"] },
      { category: "Things that spin", words: ["TOP", "WHEEL", "TORNADO", "RECORD"] },
      { category: "Words meaning 'to flee'", words: ["ABSCOND", "ESCAPE", "SCATTER"] }
    ],
    decoys: ["BOLT", "JACK", "SMITH"]
  },
  {
    id: 252,
    groups: [
      { category: "Breakfast foods", words: ["PANCAKE", "WAFFLE", "OMELET", "GRANOLA"] },
      { category: "Olympic sports", words: ["FENCING", "ROWING", "JAVELIN", "BOXING"] },
      { category: "Words meaning 'to sparkle'", words: ["SHIMMER", "TWINKLE", "GLIMMER"] }
    ],
    decoys: ["GLISTEN", "HIGH", "FLASH"]
  },
  {
    id: 253,
    groups: [
      { category: "Dog breeds", words: ["BEAGLE", "POODLE", "BOXER", "COLLIE"] },
      { category: "Things with strings", words: ["GUITAR", "KITE", "PUPPET", "BOW"] },
      { category: "Words meaning 'to annoy'", words: ["IRRITATE", "NETTLE", "GALL"] }
    ],
    decoys: ["PESTER", "CRACKER", "FLY"]
  },
  {
    id: 254,
    groups: [
      { category: "Gemstones", words: ["RUBY", "TOPAZ", "OPAL", "GARNET"] },
      { category: "Things that drip", words: ["FAUCET", "CANDLE", "ICICLE", "PAINT"] },
      { category: "Words meaning 'brave'", words: ["VALIANT", "GALLANT", "BOLD"] }
    ],
    decoys: ["INTREPID", "RUSH", "FISH"]
  },
  {
    id: 255,
    groups: [
      { category: "Dances", words: ["SALSA", "TANGO", "WALTZ", "POLKA"] },
      { category: "Things in a toolbox", words: ["WRENCH", "PLIERS", "HAMMER", "DRILL"] },
      { category: "Words meaning 'to praise'", words: ["COMMEND", "LAUD", "ACCLAIM"] }
    ],
    decoys: ["EXTOL", "BOARD", "PLOW"]
  },
  {
    id: 256,
    groups: [
      { category: "Berries", words: ["RASPBERRY", "CRANBERRY", "MULBERRY", "GOOSEBERRY"] },
      { category: "Things with a spine", words: ["BOOK", "CACTUS", "HEDGEHOG", "MOUNTAIN"] },
      { category: "Words meaning 'to wander'", words: ["MEANDER", "ROAM", "DRIFT"] }
    ],
    decoys: ["RAMBLE", "STONE", "CHAIN"]
  },
  {
    id: 257,
    groups: [
      { category: "Citrus fruits", words: ["LEMON", "LIME", "GRAPEFRUIT", "TANGERINE"] },
      { category: "Things that howl", words: ["WOLF", "WIND", "COYOTE", "SIREN"] },
      { category: "Words meaning 'to grab'", words: ["SEIZE", "SNATCH", "GRASP"] }
    ],
    decoys: ["CLUTCH", "WALK", "LIGHT"]
  },
  {
    id: 258,
    groups: [
      { category: "Sharks", words: ["HAMMER", "TIGER", "BULL", "NURSE"] },
      { category: "Things in a wallet", words: ["CASH", "LICENSE", "RECEIPT", "PHOTO"] },
      { category: "Words meaning 'to reveal'", words: ["DIVULGE", "EXPOSE", "UNVEIL"] }
    ],
    decoys: ["DISCLOSE", "BURN", "RISE"]
  },
  {
    id: 259,
    groups: [
      { category: "Cheeses", words: ["CHEDDAR", "BRIE", "GOUDA", "FETA"] },
      { category: "Things with a crown", words: ["KING", "TOOTH", "ROOSTER", "PINEAPPLE"] },
      { category: "Words meaning 'to shrink'", words: ["CONTRACT", "DIMINISH", "WANE"] }
    ],
    decoys: ["DWINDLE", "BOARD", "DUST"]
  },
  {
    id: 260,
    groups: [
      { category: "Garden flowers", words: ["DAHLIA", "PETUNIA", "MARIGOLD", "ZINNIA"] },
      { category: "Things that tick", words: ["CLOCK", "BOMB", "INSECT", "HEART"] },
      { category: "Words meaning 'to soothe'", words: ["PLACATE", "MOLLIFY", "APPEASE"] }
    ],
    decoys: ["PACIFY", "CUFF", "SHAKE"]
  },
  {
    id: 261,
    groups: [
      { category: "Nuts", words: ["CASHEW", "PECAN", "ALMOND", "WALNUT"] },
      { category: "Things that bloom", words: ["ROSE", "ALGAE", "YOUTH", "ROMANCE"] },
      { category: "Words meaning 'to mock'", words: ["RIDICULE", "SCOFF", "TAUNT"] }
    ],
    decoys: ["DERIDE", "STAGE", "LASH"]
  },
  {
    id: 262,
    groups: [
      { category: "Tropical fruits", words: ["MANGO", "PAPAYA", "GUAVA", "COCONUT"] },
      { category: "Things with a blade", words: ["KNIFE", "FAN", "SKATE", "GRASS"] },
      { category: "Words meaning 'to ponder'", words: ["RUMINATE", "MUSE", "REFLECT"] }
    ],
    decoys: ["MULL", "KICK", "LINE"]
  },
  {
    id: 263,
    groups: [
      { category: "Spices", words: ["CUMIN", "TURMERIC", "PAPRIKA", "SAFFRON"] },
      { category: "Things that hiss", words: ["SNAKE", "STEAM", "CAT", "TIRE"] },
      { category: "Words meaning 'to ban'", words: ["PROHIBIT", "FORBID", "BAR"] }
    ],
    decoys: ["OUTLAW", "BAND", "HUNTER"]
  },
  {
    id: 264,
    groups: [
      { category: "Woodwind family", words: ["CLARINET", "OBOE", "FLUTE", "BASSOON"] },
      { category: "Things with a shell", words: ["TURTLE", "EGG", "LOBSTER", "WALNUT"] },
      { category: "Words meaning 'to beg'", words: ["IMPLORE", "BESEECH", "ENTREAT"] }
    ],
    decoys: ["PLEAD", "WALK", "BOW"]
  },
  {
    id: 265,
    groups: [
      { category: "Deserts", words: ["SAHARA", "GOBI", "MOJAVE", "KALAHARI"] },
      { category: "Things that buzz", words: ["BEE", "PHONE", "RAZOR", "CROWD"] },
      { category: "Words meaning 'to hurry'", words: ["EXPEDITE", "HUSTLE", "DASH"] }
    ],
    decoys: ["HASTEN", "SHELF", "CASE"]
  },
  {
    id: 266,
    groups: [
      { category: "Sushi types", words: ["NIGIRI", "SASHIMI", "TEMAKI", "URAMAKI"] },
      { category: "Things with a wing", words: ["BIRD", "PLANE", "HOSPITAL", "MANSION"] },
      { category: "Words meaning 'to tremble'", words: ["QUIVER", "QUAKE", "SHIVER"] }
    ],
    decoys: ["SHUDDER", "LEADER", "TONE"]
  },
  {
    id: 267,
    groups: [
      { category: "Salad greens", words: ["ARUGULA", "KALE", "SPINACH", "ROMAINE"] },
      { category: "Things with a horn", words: ["RHINO", "CAR", "UNICORN", "BULL"] },
      { category: "Words meaning 'to glow'", words: ["RADIATE", "GLEAM", "LUMINOUS"] }
    ],
    decoys: ["BEAM", "BOARD", "TIME"]
  },
  {
    id: 268,
    groups: [
      { category: "Martial arts", words: ["KARATE", "JUDO", "AIKIDO", "TAEKWONDO"] },
      { category: "Things with a net", words: ["TENNIS", "SPIDER", "FISHING", "BASKET"] },
      { category: "Words meaning 'to hoard'", words: ["STOCKPILE", "STASH", "SQUIRREL"] }
    ],
    decoys: ["AMASS", "BOW", "HAND"]
  },
  {
    id: 269,
    groups: [
      { category: "Herbs", words: ["CILANTRO", "BASIL", "THYME", "OREGANO"] },
      { category: "Things with a tail", words: ["COMET", "KITE", "COAT", "MONKEY"] },
      { category: "Words meaning 'to linger'", words: ["LOITER", "DAWDLE", "TARRY"] }
    ],
    decoys: ["DALLY", "CAKE", "STOP"]
  },
  {
    id: 270,
    groups: [
      { category: "Volcanoes", words: ["VESUVIUS", "ETNA", "FUJI", "KRAKATOA"] },
      { category: "Things with a point", words: ["NEEDLE", "PENCIL", "STAR", "COMPASS"] },
      { category: "Words meaning 'to outwit'", words: ["OUTFOX", "DUPE", "BAMBOOZLE"] }
    ],
    decoys: ["HOODWINK", "DUTCH", "DOWN"]
  },
  {
    id: 271,
    groups: [
      { category: "Board games", words: ["CHESS", "RISK", "CLUE", "SORRY"] },
      { category: "Things that crack", words: ["WHIP", "ICE", "JOKE", "KNUCKLE"] },
      { category: "Words meaning 'to absorb'", words: ["ENGROSS", "SOAK", "CONSUME"] }
    ],
    decoys: ["IMMERSE", "HORN", "PEACE"]
  },
  {
    id: 272,
    groups: [
      { category: "Constellations", words: ["ORION", "CASSIOPEIA", "DRACO", "PEGASUS"] },
      { category: "Things that pop", words: ["BALLOON", "CORN", "BUBBLE", "CORK"] },
      { category: "Words meaning 'to flaunt'", words: ["PARADE", "SHOWCASE", "FLAUNT"] }
    ],
    decoys: ["BRANDISH", "GRASS", "JAY"]
  },
  {
    id: 273,
    groups: [
      { category: "Teas", words: ["OOLONG", "MATCHA", "CHAMOMILE", "EARL GREY"] },
      { category: "Things with a cap", words: ["MUSHROOM", "BOTTLE", "PEN", "KNEE"] },
      { category: "Words meaning 'to forbid'", words: ["EMBARGO", "RESTRICT", "TABOO"] }
    ],
    decoys: ["VETO", "LIFE", "CARD"]
  },
  {
    id: 274,
    groups: [
      { category: "Whales", words: ["HUMPBACK", "BELUGA", "NARWHAL", "ORCA"] },
      { category: "Things with a mouth", words: ["RIVER", "CAVE", "BOTTLE", "VOLCANO"] },
      { category: "Words meaning 'to enchant'", words: ["ENTRANCE", "CHARM", "ALLURE"] }
    ],
    decoys: ["BEGUILE", "LINE", "EYE"]
  },
  {
    id: 275,
    groups: [
      { category: "Knots", words: ["BOWLINE", "CLOVE", "REEF", "SQUARE"] },
      { category: "Things that roar", words: ["LION", "ENGINE", "CROWD", "OCEAN"] },
      { category: "Words meaning 'to baffle'", words: ["PERPLEX", "CONFOUND", "STUMP"] }
    ],
    decoys: ["MYSTIFY", "SLIDE", "BAND"]
  },
  {
    id: 276,
    groups: [
      { category: "Fabrics", words: ["SILK", "DENIM", "VELVET", "LINEN"] },
      { category: "Things with a bank", words: ["RIVER", "BLOOD", "PIGGY", "SNOW"] },
      { category: "Words meaning 'to pamper'", words: ["INDULGE", "SPOIL", "DOTE"] }
    ],
    decoys: ["CODDLE", "PIPER", "PAPER"]
  },
  {
    id: 277,
    groups: [
      { category: "Freshwater fish", words: ["TROUT", "PERCH", "BASS", "PIKE"] },
      { category: "Things that melt", words: ["BUTTER", "GLACIER", "CHOCOLATE", "HEART"] },
      { category: "Words meaning 'to scorch'", words: ["SINGE", "SEAR", "CHAR"] }
    ],
    decoys: ["BLISTER", "PIANO", "CANYON"]
  },
  {
    id: 278,
    groups: [
      { category: "Fossils", words: ["AMMONITE", "TRILOBITE", "AMBER", "FERN"] },
      { category: "Things with a pocket", words: ["JACKET", "POOL", "WATCH", "AIR"] },
      { category: "Words meaning 'to sway'", words: ["OSCILLATE", "WAVER", "VACILLATE"] }
    ],
    decoys: ["TEETER", "BACK", "WAY"]
  },
  {
    id: 279,
    groups: [
      { category: "Root vegetables", words: ["TURNIP", "BEET", "PARSNIP", "RADISH"] },
      { category: "Things that whistle", words: ["KETTLE", "REFEREE", "TRAIN", "WIND"] },
      { category: "Words meaning 'to soften'", words: ["MITIGATE", "CUSHION", "EASE"] }
    ],
    decoys: ["TEMPER", "LOCK", "BEAT"]
  },
  {
    id: 280,
    groups: [
      { category: "Clouds", words: ["CUMULUS", "STRATUS", "CIRRUS", "NIMBUS"] },
      { category: "Things with a bridge", words: ["GUITAR", "NOSE", "SHIP", "TOOTH"] },
      { category: "Words meaning 'to erase'", words: ["OBLITERATE", "EXPUNGE", "DELETE"] }
    ],
    decoys: ["EFFACE", "KEEPER", "HOLD"]
  },
  {
    id: 281,
    groups: [
      { category: "Owls", words: ["BARN", "SNOWY", "HORNED", "SCREECH"] },
      { category: "Things with a ring", words: ["BOXING", "SATURN", "PHONE", "CIRCUS"] },
      { category: "Words meaning 'to thwart'", words: ["FOIL", "FRUSTRATE", "STYMIE"] }
    ],
    decoys: ["IMPEDE", "WEIGHT", "BULB"]
  },
  {
    id: 282,
    groups: [
      { category: "Beans", words: ["PINTO", "KIDNEY", "NAVY", "LIMA"] },
      { category: "Things with a bed", words: ["RIVER", "FLOWER", "TRUCK", "OYSTER"] },
      { category: "Words meaning 'to bewitch'", words: ["ENTHRALL", "CAPTIVATE", "ENRAPTURE"] }
    ],
    decoys: ["SPELLBIND", "SPOT", "SIDE"]
  },
  {
    id: 283,
    groups: [
      { category: "Cactus types", words: ["SAGUARO", "PRICKLY", "BARREL", "CHOLLA"] },
      { category: "Things that echo", words: ["CANYON", "CAVE", "HALLWAY", "TUNNEL"] },
      { category: "Words meaning 'to ignite'", words: ["SPARK", "INFLAME", "COMBUST"] }
    ],
    decoys: ["KINDLE", "ORDER", "BOY"]
  }
];
