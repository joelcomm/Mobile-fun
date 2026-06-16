#!/usr/bin/env node
// Fix decoys that don't create tension with any kept group.
// Replaces weak decoys (short fill-in-blank remnants) with better alternatives.

const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync(__dirname + '/puzzles.js', 'utf8');
const sb = {};
vm.runInNewContext(src.replace('const PUZZLES', 'var PUZZLES'), sb);
const PUZZLES = sb.PUZZLES;

// Category-aware replacements: words that LOOK like they belong to a category
const CAT_POOL = {
  "Planets": ["TITAN", "CERES", "EUROPA", "TRITON", "PLUTO"],
  "Card games": ["RUMMY", "SOLITAIRE", "CRIBBAGE", "PINOCHLE"],
  "Shoes": ["STILETTO", "CLOG", "SNEAKER", "PUMP", "OXFORD"],
  "Colors of the rainbow": ["CYAN", "SCARLET", "CRIMSON", "TEAL", "MAGENTA"],
  "Things with keys": ["TYPEWRITER", "SAFE", "DIARY", "ACCORDION"],
  "Baseball terms": ["BUNT", "STEAL", "HOMER", "SLIDE", "DUGOUT"],
  "Dog breeds": ["WHIPPET", "SETTER", "TERRIER", "SPANIEL", "MASTIFF"],
  "Coffee drinks": ["FRAPPE", "MACCHIATO", "CAPPUCCINO", "RISTRETTO"],
  "Math concepts": ["TANGENT", "VECTOR", "MEDIAN", "THEOREM"],
  "Ocean creatures": ["NARWHAL", "URCHIN", "MANATEE", "STINGRAY"],
  "Currencies": ["EURO", "PESO", "DINAR", "RUPEE", "SHEKEL"],
  "Things that spin": ["DRYER", "FAN", "TURBINE", "PROPELLER"],
  "Breakfast foods": ["MUFFIN", "OATMEAL", "GRANOLA", "TOAST"],
  "Fabrics": ["LINEN", "SATIN", "CHIFFON", "TWEED", "MUSLIN"],
  "Movie genres": ["NOIR", "ROMANCE", "DRAMA", "ACTION", "SATIRE"],
  "Trees": ["PINE", "OAK", "SPRUCE", "REDWOOD", "CYPRESS"],
  "Kitchen tools": ["SPATULA", "PEELER", "SIEVE", "COLANDER"],
  "Gemstones": ["GARNET", "SAPPHIRE", "ONYX", "AMETHYST", "ZIRCON"],
  "Board games": ["CHESS", "MONOPOLY", "SCRABBLE", "BOGGLE"],
  "Flowers": ["PEONY", "ORCHID", "DAHLIA", "ZINNIA", "ASTER"],
  "Types of bear": ["KODIAK", "SPECTACLED", "SLOTH", "KERMODE"],
  "Gym equipment": ["BARBELL", "KETTLEBELL", "TREADMILL", "DUMBBELL"],
  "Composers": ["VIVALDI", "BRAHMS", "HANDEL", "LISZT", "DVORAK"],
  "Things that melt": ["WAX", "BUTTER", "FROST", "CRAYON"],
  "Primates": ["LEMUR", "GIBBON", "BABOON", "TAMARIN", "MACAQUE"],
  "Things that rust": ["ANCHOR", "NAIL", "GATE", "HINGE"],
  "Words that are also colors": ["CORAL", "OLIVE", "IVORY", "SILVER"],
  "Crustaceans": ["BARNACLE", "KRILL", "CRAWFISH", "PRAWN"],
  "Salamanders": ["AXOLOTL", "HELLBENDER", "MUDPUPPY", "CAECILIAN"],
  "Turkish dishes": ["HUMMUS", "PIDE", "LAHMACUN", "SIMIT"],
  "Dumpling types": ["MOCHI", "SAMOSA", "EMPANADA", "PIEROGI"],
  "Nuts": ["PECAN", "PISTACHIO", "HAZELNUT", "MACADAMIA"],
  "Things with a blade": ["SKATE", "SAW", "SHEARS", "SCYTHE"],
  "Things with a buckle": ["HARNESS", "HELMET", "STRAP", "GAITER"],
  "Things with a knob": ["RADIO", "STOVE", "DRESSER", "FAUCET"],
  "Things with a sole": ["SLIPPER", "SNEAKER", "SKATE", "PUMP"],
  "Things that unfold": ["NAPKIN", "CHAIR", "STORY", "PARACHUTE"],
  "Pixar films": ["SOUL", "CARS", "LUCA", "ONWARD", "INSIDE"],
  "Rivers": ["THAMES", "DANUBE", "NILE", "GANGES"],
  "Pizza toppings": ["ANCHOVY", "ARUGULA", "CAPERS", "PROSCIUTTO"],
  "Asian countries": ["LAOS", "NEPAL", "BRUNEI", "BHUTAN"],
  "Sandwich types": ["PANINI", "HOAGIE", "REUBEN", "GRINDER"],
  "Things that bounce": ["RUBBER", "SPRING", "TRAMPOLINE", "POGO"],
  "African animals": ["IMPALA", "KUDU", "OKAPI", "HYENA"],
  "Types of tea": ["OOLONG", "MATCHA", "ROOIBOS", "CHAMOMILE"],
  "Things at the beach": ["DRIFTWOOD", "SEASHELL", "UMBRELLA", "JETTY"],
  "Cereals": ["GRANOLA", "MUESLI", "PORRIDGE", "FARINA"],
  "Greek gods": ["HERA", "ARES", "HADES", "HERMES"],
  "Things with a lid": ["TRUNK", "CASKET", "COOLER", "HAMPER"],
  "Citrus fruits": ["KUMQUAT", "POMELO", "BERGAMOT", "CLEMENTINE"],
  "Card suits": ["JOKER", "TRUMP", "CLUBS", "TRICK"],
  "Things in a gym": ["BENCH", "MAT", "ROPE", "RACK"],
  "Body parts": ["TEMPLE", "PALM", "CROWN", "NAPE"],
  "Things that float": ["CORK", "RAFT", "BUOY", "LILY"],
  "Mountain ranges": ["ANDES", "ROCKIES", "SIERRA", "CASCADES"],
  "Words meaning 'fake'": ["BOGUS", "SHAM", "PSEUDO", "MOCK"],
  "Grains": ["QUINOA", "SPELT", "FARRO", "MILLET"],
  "Things with wings": ["WINDMILL", "GLIDER", "DRAGONFLY", "MOTH"],
  "Soups": ["BISQUE", "BROTH", "GAZPACHO", "RAMEN"],
  "Types of cloud": ["NIMBUS", "CIRRUS", "STRATUS", "ALTO"],
  "Islands": ["CORSICA", "BORNEO", "SUMATRA", "CRETE"],
  "Words meaning 'big'": ["COLOSSAL", "IMMENSE", "MAMMOTH", "HEFTY"],
  "Beans": ["FAVA", "LENTIL", "CHICKPEA", "EDAMAME"],
  "Things at a bar": ["COASTER", "STOOL", "SHAKER", "GARNISH"],
  "Lakes": ["TAHOE", "BAIKAL", "COMO", "HURON"],
  "Things that buzz": ["CICADA", "NEON", "RAZOR", "ALARM"],
  "Berries": ["GOOSEBERRY", "ELDERBERRY", "BOYSENBERRY", "HUCKLEBERRY"],
  "Mythical creatures": ["GRIFFIN", "BASILISK", "CHIMERA", "HYDRA"],
  "Things that spin": ["GYROSCOPE", "POTTER", "LATHE", "REEL"],
  "Constellations": ["ANDROMEDA", "CASSIOPEIA", "PEGASUS", "LYRA"],
  "Marsupials": ["WOMBAT", "QUOKKA", "WALLABY", "BILBY"],
  "Things in space": ["NEBULA", "QUASAR", "PULSAR", "COMET"],
  "Palindromes": ["KAYAK", "MADAM", "REFER", "DEIFIED"],
  "Volcanoes": ["VESUVIUS", "KRAKATOA", "KILAUEA", "PINATUBO"],
  "Silent letters (has one)": ["KNIGHT", "PSALM", "GNOME", "DEBRIS"],
  "Things with keys": ["TYPEWRITER", "FLUTE", "DIARY", "SAFE"],
  "Words from Japanese": ["TSUNAMI", "KARATE", "ORIGAMI", "TOFU"],
  "Dances": ["MAMBO", "POLKA", "FOXTROT", "RUMBA"],
  "Mushrooms": ["SHIITAKE", "MOREL", "ENOKI", "OYSTER"],
  "Things that fold": ["NAPKIN", "CHAIR", "PAMPHLET", "TOWEL"],
  "Minerals": ["QUARTZ", "MICA", "FELDSPAR", "CALCITE"],
  "Things that bloom": ["TULIP", "CHERRY", "JASMINE", "IRIS"],
  "Things with teeth": ["GEAR", "ZIPPER", "COMB", "RAKE"],
  "Parrots": ["MACAW", "COCKATOO", "LORIKEET", "KAKAPO"],
  "African countries": ["CHAD", "NIGER", "MALI", "TOGO"],
  "Things that sparkle": ["DIAMOND", "GLITTER", "TINSEL", "DEW"],
  "Leafy greens": ["CHARD", "ENDIVE", "SORREL", "MIZUNA"],
  "Things with pedals": ["ORGAN", "KAYAK", "HARP", "TRACTOR"],
  "Brass instruments": ["BUGLE", "CORNET", "FLUGELHORN", "EUPHONIUM"],
  "Japanese food": ["TEMPURA", "UDON", "EDAMAME", "MISO"],
  "Things with a handle": ["MUG", "BROOM", "PAN", "AXE"],
  "Terrier breeds": ["CAIRN", "BORDER", "NORWICH", "SKYE"],
  "Songbirds": ["FINCH", "WREN", "LARK", "THRUSH"],
  "Things with a hinge": ["GATE", "LAPTOP", "CHEST", "CLAM"],
  "Curry ingredients": ["CUMIN", "CORIANDER", "FENUGREEK", "CARDAMOM"],
  "Things that purr": ["KITTEN", "ENGINE", "MOTOR", "HUMMINGBIRD"],
  "Mediterranean herbs": ["OREGANO", "BASIL", "THYME", "ROSEMARY"],
  "Scrabble high-point letters": ["QUICHE", "JINX", "ZEST", "XENON"],
  "Retriever breeds": ["LABRADOR", "CHESAPEAKE", "TOLLER", "VIZSLA"],
  "Things with a shell": ["TURTLE", "WALNUT", "TACO", "ARMOR"],
  "Olive oil grades": ["VIRGIN", "REFINED", "POMACE", "LAMPANTE"],
  "Things that are frozen": ["GLACIER", "TUNDRA", "POPSICLE", "SORBET"],
  "Types of noodle": ["UDON", "RAMEN", "VERMICELLI", "FETTUCCINE"],
  "Things with a lens": ["CAMERA", "TELESCOPE", "MONOCLE", "PROJECTOR"],
  "Middle Eastern foods": ["TAHINI", "BAKLAVA", "KIBBEH", "DOLMA"],
  "Things with a loop": ["LASSO", "NOOSE", "RIBBON", "CARABINER"],
  "French pastries": ["ECLAIR", "MACARON", "MILLE", "PALMIER"],
  "Things with a point": ["NEEDLE", "ARROW", "COMPASS", "SPEAR"],
  "Ethiopian foods": ["INJERA", "KITFO", "TIBS", "SHIRO"],
  "Vietnamese dishes": ["BANH MI", "PHO", "BUN CHA", "SPRING ROLL"],
  "Clam varieties": ["GEODUCK", "QUAHOG", "STEAMER", "COCKLE"],
  "Moroccan dishes": ["TAGINE", "PASTILLA", "HARIRA", "COUSCOUS"],
  "Japanese sweets": ["DAIFUKU", "TAIYAKI", "WAGASHI", "YOKAN"],
  "Pelts and furs": ["MINK", "SABLE", "ERMINE", "CHINCHILLA"],
  "Types of tuna": ["ALBACORE", "SKIPJACK", "BIGEYE", "BONITO"],
  "Succulents": ["AGAVE", "ALOE", "SEDUM", "ECHEVERIA"],
  "Types of lettuce": ["ROMAINE", "ICEBERG", "BIBB", "ENDIVE"],
  "Diving equipment": ["REGULATOR", "SNORKEL", "WETSUIT", "FLIPPERS"],
  "Russian dishes": ["BORSCHT", "BLINI", "PELMENI", "STROGANOFF"],
  "Thai curries": ["PANANG", "RENDANG", "LAKSA", "SATAY"],
  "Chili varieties": ["ANCHO", "SERRANO", "CHIPOTLE", "PASILLA"],
  "Pizza styles": ["SICILIAN", "DETROIT", "MARGHERITA", "GRANDMA"],
  "Coffee origins": ["SUMATRA", "COLOMBIAN", "KENYAN", "ETHIOPIAN"],
  "Charcuterie items": ["BRESAOLA", "COPPA", "MORTADELLA", "SOPPRESSATA"],
  "Italian dishes": ["RISOTTO", "OSSOBUCO", "CARBONARA", "SALTIMBOCCA"],
  "Camping gear": ["TARP", "CANTEEN", "COMPASS", "LANTERN"],
  "Sushi fish": ["HAMACHI", "UNAGI", "HIRAME", "OTORO"],
  "Cartoon cats": ["GARFIELD", "SYLVESTER", "STIMPY", "FIGARO"],
  "Cocktails": ["MARTINI", "GIMLET", "NEGRONI", "SIDECAR"],
  "Woodwind family": ["OBOE", "PICCOLO", "BASSOON", "RECORDER"],
  "Martial arts": ["AIKIDO", "JUDO", "KENDO", "HAPKIDO"],
  "Whales": ["BELUGA", "ORCA", "NARWHAL", "MINKE"],
  "Things with a mouth": ["CAVE", "BOTTLE", "RIVER", "TRUMPET"],
  "Fossils": ["TRILOBITE", "MAMMOTH", "RAPTOR", "MEGALODON"],
  "Cactus types": ["OPUNTIA", "AGAVE", "YUCCA", "ALOE"],
  "Things that echo": ["CAVE", "CANYON", "TUNNEL", "STAIRWELL"],
  "Words meaning 'to ignite'": ["LIGHT", "TORCH", "STOKE", "BLAZE"],
};

// Large pool of fallback words for puzzles that don't match any category above.
// These are interesting, evocative words that could plausibly fit many categories.
const FALLBACK_POOL = [
  "RHYTHM", "CANVAS", "PRISM", "RELIC", "EMBER", "NEXUS", "ATLAS",
  "VAPOR", "HELIX", "FACET", "MOTIF", "ANVIL", "GLYPH", "SIREN",
  "VERTEX", "QUILL", "FABLE", "HAVEN", "CREST", "TORQUE", "BASALT",
  "CIPHER", "FJORD", "MOSAIC", "ZENITH", "SCARAB", "LANTERN", "VELVET",
  "GRANITE", "COBALT", "FLINT", "LATCH", "ARCADE", "BEACON", "SUMMIT",
  "CHALICE", "QUARRY", "GAUNTLET", "PINNACLE", "OASIS", "THICKET",
  "TRELLIS", "CINDER", "FLARE", "TIMBER", "BRINE", "DUSK", "GORGE",
  "DELTA", "CAIRN", "SAGE", "FORGE", "PYLON", "LOOM", "TROVE",
  "ABYSS", "MANTLE", "BASTION", "PARCEL", "COVE", "GUILD", "HELM",
  "SPIRE", "VAULT", "ALCOVE", "RAVINE", "LEDGE", "GROVE", "LAGOON",
  "RIDGE", "STRAIT", "ISLE", "REEF", "KNOLL", "BLUFF", "MARSH",
  "SHOAL", "JETTY", "INLET", "MESA", "BUTTE", "CLIFF", "GULCH"
];

let fixCount = 0;
let fallbackIdx = 0;

PUZZLES.forEach(p => {
  const cats = p.groups.map(g => g.category);
  const puzzleWords = new Set();
  p.groups.forEach(g => g.words.forEach(w => puzzleWords.add(w)));
  p.decoys.forEach(d => puzzleWords.add(d));

  const newDecoys = [];
  const usedReplacements = new Set();

  p.decoys.forEach(d => {
    if (d.length > 3) {
      newDecoys.push(d);
      return;
    }

    // Find a replacement from a related category
    let replacement = null;
    for (const cat of cats) {
      const pool = CAT_POOL[cat];
      if (!pool) continue;
      for (const candidate of pool) {
        if (!puzzleWords.has(candidate) && !usedReplacements.has(candidate) &&
            !newDecoys.includes(candidate)) {
          replacement = candidate;
          break;
        }
      }
      if (replacement) break;
    }

    // Fallback
    if (!replacement) {
      while (fallbackIdx < FALLBACK_POOL.length) {
        const f = FALLBACK_POOL[fallbackIdx++];
        if (!puzzleWords.has(f) && !usedReplacements.has(f) && !newDecoys.includes(f)) {
          replacement = f;
          break;
        }
      }
    }

    if (replacement) {
      usedReplacements.add(replacement);
      fixCount++;
      console.log(`Puzzle ${p.id}: "${d}" -> "${replacement}" (${cats.join(' | ')})`);
      newDecoys.push(replacement);
    } else {
      newDecoys.push(d);
    }
  });

  p.decoys = newDecoys;
});

console.log('\nFixed', fixCount, 'weak decoys across', PUZZLES.length, 'puzzles.');

// Verify no duplicates
let dupeCount = 0;
PUZZLES.forEach(p => {
  const all = [];
  p.groups.forEach(g => g.words.forEach(w => all.push(w)));
  p.decoys.forEach(d => all.push(d));
  const s = new Set(all);
  if (s.size !== all.length) {
    dupeCount++;
    console.log('DUPLICATE in puzzle', p.id, ':', all.filter((w,i) => all.indexOf(w) !== i));
  }
});
if (dupeCount === 0) console.log('No duplicates found.');

// Regenerate puzzles.js
let output = 'const PUZZLES = [\n';
PUZZLES.forEach((puzzle, pi) => {
  output += '  {\n';
  output += `    id: ${puzzle.id},\n`;
  output += '    groups: [\n';
  puzzle.groups.forEach((g, gi) => {
    const words = g.words.map(w => JSON.stringify(w)).join(', ');
    output += `      { category: ${JSON.stringify(g.category)}, words: [${words}] }`;
    output += gi < puzzle.groups.length - 1 ? ',\n' : '\n';
  });
  output += '    ],\n';
  const decoyStr = puzzle.decoys.map(d => JSON.stringify(d)).join(', ');
  output += `    decoys: [${decoyStr}]\n`;
  output += '  }';
  output += pi < PUZZLES.length - 1 ? ',\n' : '\n';
});
output += '];\n';

fs.writeFileSync(__dirname + '/puzzles.js', output);
console.log('puzzles.js rewritten with', PUZZLES.length, 'puzzles.');
