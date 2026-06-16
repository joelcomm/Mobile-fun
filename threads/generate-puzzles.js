#!/usr/bin/env node
// generate-puzzles.js — builds threads/puzzles.js (Missing Link puzzles)
// Run: node threads/generate-puzzles.js

const fs = require('fs');
const path = require('path');

// ─── Verified compound-word / phrase map ─────────────────────────
// ANSWER: [ [CUE, "compound phrase"], ... ]
// Every phrase must literally contain the answer word.
const LINKS = {
  CHEESE: [["COTTAGE","cottage cheese"],["SWISS","swiss cheese"],["CAKE","cheesecake"],["CREAM","cream cheese"],["STRING","string cheese"],["BLUE","blue cheese"],["GOAT","goat cheese"],["GRILLED","grilled cheese"],["MAC","mac and cheese"]],
  BALL: [["BASKET","basketball"],["FOOT","football"],["EYE","eyeball"],["SNOW","snowball"],["BASE","baseball"],["MEAT","meatball"],["PIN","pinball"],["ODD","oddball"],["ROOM","ballroom"],["PARK","ballpark"],["SOFT","softball"],["HAND","handball"],["CANNON","cannonball"],["FIRE","fireball"],["GUM","gumball"]],
  HOUSE: [["LIGHT","lighthouse"],["GREEN","greenhouse"],["WARE","warehouse"],["FARM","farmhouse"],["DOG","doghouse"],["TREE","treehouse"],["BOAT","houseboat"],["CLUB","clubhouse"],["HOLD","household"],["BIRD","birdhouse"],["FIRE","firehouse"],["COURT","courthouse"],["ROUND","roundhouse"],["POWER","powerhouse"],["PLAY","playhouse"],["TOWN","townhouse"],["FULL","full house"],["STORE","storehouse"],["OPEN","open house"]],
  BOARD: [["KEY","keyboard"],["CARD","cardboard"],["SURF","surfboard"],["SKATE","skateboard"],["WHITE","whiteboard"],["BLACK","blackboard"],["DASH","dashboard"],["BILL","billboard"],["CHALK","chalkboard"],["SCORE","scoreboard"],["SNOW","snowboard"],["SPRING","springboard"],["CLIP","clipboard"],["STAR","starboard"],["CUP","cupboard"],["OVER","overboard"],["CHECKER","checkerboard"]],
  LIGHT: [["MOON","moonlight"],["SUN","sunlight"],["SPOT","spotlight"],["FLASH","flashlight"],["DAY","daylight"],["HIGH","highlight"],["CANDLE","candlelight"],["STAR","starlight"],["LIME","limelight"],["HEAD","headlight"],["LAMP","lamplight"],["WEIGHT","lightweight"],["NIGHT","nightlight"],["STOP","stoplight"],["TAIL","taillight"],["DOWN","downlight"],["SKY","skylight"],["BACK","backlight"],["FLOOD","floodlight"],["GREEN","green light"],["TWIT","twilight"]],
  FIRE: [["CAMP","campfire"],["WILD","wildfire"],["PLACE","fireplace"],["WORK","fireworks"],["WOOD","firewood"],["ARM","firearm"],["CROSS","crossfire"],["BACK","backfire"],["BON","bonfire"],["GUN","gunfire"],["FLY","firefly"],["MAN","fireman"],["TRUCK","fire truck"],["RING","ring of fire"],["FIGHT","firefighter"],["HELL","hellfire"],["OPEN","open fire"],["SURE","surefire"],["CEASE","ceasefire"]],
  WATER: [["UNDER","underwater"],["FALL","waterfall"],["MELON","watermelon"],["PROOF","waterproof"],["RAIN","rainwater"],["SALT","saltwater"],["FRESH","freshwater"],["COLOR","watercolor"],["WAY","waterway"],["FRONT","waterfront"],["MARK","watermark"],["GROUND","groundwater"],["WASTE","wastewater"],["BREAK","breakwater"],["SHED","watershed"],["TIGHT","watertight"]],
  SNOW: [["BALL","snowball"],["MAN","snowman"],["FLAKE","snowflake"],["STORM","snowstorm"],["BOARD","snowboard"],["PLOW","snowplow"],["FALL","snowfall"],["SHOE","snowshoe"],["DRIFT","snowdrift"],["MOBILE","snowmobile"],["CAP","snowcap"],["DROP","snowdrop"],["BIRD","snowbird"]],
  SUN: [["SHINE","sunshine"],["FLOWER","sunflower"],["LIGHT","sunlight"],["RISE","sunrise"],["SET","sunset"],["BURN","sunburn"],["GLASSES","sunglasses"],["SCREEN","sunscreen"],["DIAL","sundial"],["BEAM","sunbeam"],["DOWN","sundown"],["TAN","suntan"],["ROOF","sunroof"],["STROKE","sunstroke"],["SPOT","sunspot"]],
  BOOK: [["NOTE","notebook"],["TEXT","textbook"],["COOK","cookbook"],["HAND","handbook"],["CASE","bookcase"],["MARK","bookmark"],["SHELF","bookshelf"],["GUIDE","guidebook"],["YEAR","yearbook"],["CHECK","checkbook"],["SCRAP","scrapbook"],["WORM","bookworm"],["STORE","bookstore"],["WORK","workbook"],["LOG","logbook"],["SONG","songbook"],["PLAY","playbook"],["PASS","passbook"]],
  TIME: [["DAY","daytime"],["NIGHT","nighttime"],["SOME","sometime"],["OVER","overtime"],["LIFE","lifetime"],["BED","bedtime"],["TABLE","timetable"],["LINE","timeline"],["OUT","timeout"],["PIECE","timepiece"],["SUMMER","summertime"],["HALF","halftime"],["SPRING","springtime"],["WINTER","wintertime"],["PART","part-time"],["FULL","full-time"],["MEAN","meantime"],["PAST","pastime"],["PRIME","primetime"],["DOWN","downtime"],["DINNER","dinnertime"],["WAR","wartime"],["PEACE","peacetime"]],
  WORK: [["HOME","homework"],["NET","network"],["TEAM","teamwork"],["FRAME","framework"],["ART","artwork"],["GUESS","guesswork"],["OUT","workout"],["SHOP","workshop"],["PLACE","workplace"],["FORCE","workforce"],["BENCH","workbench"],["LOAD","workload"],["HORSE","workhorse"],["GROUND","groundwork"],["DREAM","dreamwork"],["PATCH","patchwork"],["CLOCK","clockwork"],["HAND","handiwork"],["FOOT","footwork"]],
  BERRY: [["BLUE","blueberry"],["STRAW","strawberry"],["BLACK","blackberry"],["RASP","raspberry"],["CRAN","cranberry"],["GOOSE","gooseberry"],["MUL","mulberry"],["ELDER","elderberry"],["DEW","dewberry"],["BOY","boysenberry"],["HACK","hackberry"]],
  ROOM: [["BED","bedroom"],["BATH","bathroom"],["CLASS","classroom"],["MUSH","mushroom"],["COURT","courtroom"],["BALL","ballroom"],["DARK","darkroom"],["REST","restroom"],["SHOW","showroom"],["BOARD","boardroom"],["WASH","washroom"],["STORE","storeroom"],["STOCK","stockroom"],["NEWS","newsroom"],["CLEAN","cleanroom"],["HEAD","headroom"],["LEG","legroom"],["CLOAK","cloakroom"],["GREEN","greenroom"]],
  LINE: [["OUT","outline"],["UNDER","underline"],["GUIDE","guideline"],["DEAD","deadline"],["AIR","airline"],["BASE","baseline"],["BORDER","borderline"],["COAST","coastline"],["HAIR","hairline"],["HEAD","headline"],["LIFE","lifeline"],["NECK","neckline"],["ON","online"],["PIPE","pipeline"],["SIDE","sideline"],["SKY","skyline"],["PUNCH","punchline"],["SHORE","shoreline"],["WAIST","waistline"],["TIME","timeline"],["TREE","treeline"],["OFF","offline"],["FLAT","flatline"],["SLIM","slimline"],["STREAM","streamline"]],
  STONE: [["LIME","limestone"],["BIRTH","birthstone"],["CORNER","cornerstone"],["MILE","milestone"],["GRAVE","gravestone"],["COBBLE","cobblestone"],["KEY","keystone"],["SAND","sandstone"],["GEM","gemstone"],["HAIL","hailstone"],["TOMB","tombstone"],["FLAG","flagstone"],["BROWN","brownstone"],["GOLD","goldstone"],["FREE","freestone"],["BLOOD","bloodstone"]],
  HORSE: [["RACE","racehorse"],["SEA","seahorse"],["WORK","workhorse"],["SHOE","horseshoe"],["BACK","horseback"],["POWER","horsepower"],["RADISH","horseradish"],["PLAY","horseplay"],["SAW","sawhorse"],["DARK","dark horse"],["WAR","warhorse"],["PACK","packhorse"]],
  HEAD: [["ACHE","headache"],["LIGHT","headlight"],["LINE","headline"],["PHONE","headphone"],["BAND","headband"],["BOARD","headboard"],["FORE","forehead"],["EGG","egghead"],["HOT","hothead"],["RED","redhead"],["DEAD","deadhead"],["OVER","overhead"],["BALD","baldhead"],["BIG","bighead"],["FIGURE","figurehead"],["NAIL","nailhead"],["SKIN","skinhead"],["COPPER","copperhead"],["HAMMER","hammerhead"]],
  RAIN: [["BOW","rainbow"],["COAT","raincoat"],["DROP","raindrop"],["FALL","rainfall"],["FOREST","rainforest"],["STORM","rainstorm"],["WATER","rainwater"],["BRAIN","brainstorm"],["DRAIN","drain"]],
  GOLD: [["FISH","goldfish"],["SMITH","goldsmith"],["FINCH","goldfinch"],["MINE","gold mine"],["RUSH","gold rush"],["LEAF","gold leaf"],["POT","pot of gold"],["MARI","marigold"],["RING","gold ring"],["DUST","gold dust"],["MEDAL","gold medal"]],
  FOOT: [["BARE","barefoot"],["BIG","bigfoot"],["FLAT","flatfoot"],["PRINT","footprint"],["NOTE","footnote"],["BALL","football"],["STEP","footstep"],["HILL","foothill"],["HOLD","foothold"],["WEAR","footwear"],["REST","footrest"],["WORK","footwork"],["PATH","footpath"],["BRIDGE","footbridge"],["LIGHT","footlight"],["STOOL","footstool"]],
  HAND: [["BACK","backhand"],["SHORT","shorthand"],["SHAKE","handshake"],["WRITING","handwriting"],["BAG","handbag"],["RAIL","handrail"],["STAND","handstand"],["OUT","handout"],["MADE","handmade"],["CRAFT","handicraft"],["SOME","handsome"],["CUFF","handcuff"],["SPRING","handspring"],["FIRST","firsthand"],["SECOND","secondhand"],["FREE","freehand"]],
  SEA: [["SHELL","seashell"],["SHORE","seashore"],["WEED","seaweed"],["HORSE","seahorse"],["FOOD","seafood"],["SICK","seasick"],["SIDE","seaside"],["PORT","seaport"],["GULL","seagull"],["BED","seabed"],["OVER","overseas"],["SCAPE","seascape"],["BIRD","seabird"],["COAST","seacoast"]],
  BIRD: [["BLACK","blackbird"],["SONG","songbird"],["SNOW","snowbird"],["BLUE","bluebird"],["MOCK","mockingbird"],["THUNDER","thunderbird"],["JAIL","jailbird"],["LADY","ladybird"],["FIRE","firebird"],["HOUSE","birdhouse"],["CAGE","birdcage"],["BATH","birdbath"],["SEED","birdseed"],["WATCH","birdwatching"]],
  NIGHT: [["MID","midnight"],["OVER","overnight"],["GOOD","goodnight"],["TIME","nighttime"],["GOWN","nightgown"],["CLUB","nightclub"],["FALL","nightfall"],["MARE","nightmare"],["CAP","nightcap"],["STAND","nightstand"],["LIFE","nightlife"],["HAWK","nighthawk"],["SHADE","nightshade"],["SHIFT","night shift"],["VISION","night vision"]],
  DAY: [["BIRTH","birthday"],["EVERY","everyday"],["TO","today"],["YESTER","yesterday"],["MID","midday"],["BREAK","daybreak"],["LIGHT","daylight"],["DREAM","daydream"],["TIME","daytime"],["CARE","daycare"],["PLAY","play day"],["HOLI","holiday"],["SUN","sunday"],["PAY","payday"],["WORK","workday"],["WEEK","weekday"]],
  STAR: [["LIGHT","starlight"],["FISH","starfish"],["DUST","stardust"],["BOARD","starboard"],["ROCK","rock star"],["POP","pop star"],["GAZE","stargazer"],["ALL","all-star"],["SUPER","superstar"],["FIVE","five-star"],["GOLD","gold star"],["NORTH","north star"]],
  BLACK: [["BIRD","blackbird"],["BERRY","blackberry"],["BOARD","blackboard"],["JACK","blackjack"],["OUT","blackout"],["SMITH","blacksmith"],["MAIL","blackmail"],["LIST","blacklist"],["TOP","blacktop"],["THORN","blackthorn"],["MARKET","black market"]],
  BLUE: [["BIRD","bluebird"],["BERRY","blueberry"],["BELL","bluebell"],["PRINT","blueprint"],["GRASS","bluegrass"],["BONNET","bluebonnet"],["CHEESE","blue cheese"],["JAY","blue jay"],["COLLAR","blue-collar"],["BLOOD","blueblood"]],
  GREEN: [["HOUSE","greenhouse"],["BACK","greenback"],["HORN","greenhorn"],["PEACE","greenpeace"],["LIGHT","green light"],["THUMB","green thumb"],["CARD","green card"],["BELT","greenbelt"],["FIELD","greenfield"],["LAND","greenland"]],
  BACK: [["SET","setback"],["DRAW","drawback"],["FEED","feedback"],["COME","comeback"],["FLASH","flashback"],["PAY","payback"],["PLAY","playback"],["KICK","kickback"],["QUARTER","quarterback"],["CUT","cutback"],["HALF","halfback"],["HORSE","horseback"],["PACK","backpack"],["BONE","backbone"],["YARD","backyard"],["GROUND","background"],["FIRE","backfire"],["STAGE","backstage"],["TRACK","backtrack"],["LASH","backlash"],["DROP","backdrop"],["LOG","backlog"]],
  SIDE: [["IN","inside"],["OUT","outside"],["BED","bedside"],["ROAD","roadside"],["HILL","hillside"],["LAKE","lakeside"],["RING","ringside"],["FIRE","fireside"],["WATER","waterside"],["BLIND","blindside"],["DOWN","downside"],["UP","upside"],["BACK","backside"],["POOL","poolside"],["COURT","courtside"]],
  GROUND: [["BACK","background"],["UNDER","underground"],["PLAY","playground"],["CAMP","campground"],["FAIR","fairground"],["BATTLE","battleground"],["HOME","home ground"],["ABOVE","above ground"],["BREAK","groundbreaking"],["WORK","groundwork"],["HOG","groundhog"],["WATER","groundwater"],["COVER","ground cover"]],
  YARD: [["BACK","backyard"],["COURT","courtyard"],["BARN","barnyard"],["SCHOOL","schoolyard"],["SHIP","shipyard"],["VINE","vineyard"],["JUNK","junkyard"],["GRAVE","graveyard"],["BRICK","brickyard"],["STOCK","stockyard"],["SCOTLAND","scotland yard"],["LUMBER","lumberyard"]],
  KEY: [["BOARD","keyboard"],["STONE","keystone"],["CHAIN","keychain"],["NOTE","keynote"],["HOLE","keyhole"],["WORD","keyword"],["MASTER","master key"],["MONKEY","monkey"],["TURN","turnkey"],["DOOR","doorkey"],["PASS","passkey"]],
  EYE: [["BALL","eyeball"],["LID","eyelid"],["BROW","eyebrow"],["LASH","eyelash"],["SIGHT","eyesight"],["GLASS","eyeglass"],["DROP","eyedrop"],["PIECE","eyepiece"],["WITNESS","eyewitness"],["SORE","eyesore"],["BIRD","bird's-eye"],["BULL","bullseye"],["FISH","fisheye"],["HOOK","hook eye"]],
  MOON: [["LIGHT","moonlight"],["SHINE","moonshine"],["BEAM","moonbeam"],["STONE","moonstone"],["RISE","moonrise"],["WALK","moonwalk"],["HALF","half moon"],["FULL","full moon"],["NEW","new moon"],["HONEY","honeymoon"],["LIT","moonlit"]],
  SHIP: [["BATTLE","battleship"],["FRIEND","friendship"],["HARD","hardship"],["LEADER","leadership"],["OWNER","ownership"],["PARTNER","partnership"],["RELATION","relationship"],["SCHOLAR","scholarship"],["WORK","workmanship"],["FLAG","flagship"],["SPORTS","sportsmanship"],["FELLOW","fellowship"],["MEMBER","membership"],["CITIZEN","citizenship"],["AIR","airship"],["WAR","warship"]],
  FISH: [["GOLD","goldfish"],["SWORD","swordfish"],["STAR","starfish"],["JELLY","jellyfish"],["BLOW","blowfish"],["CAT","catfish"],["SHELL","shellfish"],["ANGEL","angelfish"],["CLOWN","clownfish"],["CRAY","crayfish"],["CRAW","crawfish"],["SUN","sunfish"]],
  NET: [["WORK","network"],["INTER","internet"],["BASKET","basketball net"],["HAIR","hairnet"],["FISH","fishnet"],["DRAG","dragnet"],["SAFETY","safety net"],["BUTTER","butterfly net"],["MAG","magnet"],["CAB","cabinet"]],
  GAME: [["VIDEO","video game"],["BOARD","board game"],["END","endgame"],["BALL","ball game"],["WAR","war game"],["WORD","word game"],["NAME","name game"],["FAIR","fair game"],["CARD","card game"],["MIND","mind game"],["BLAME","blame game"]],
  PLAY: [["HORSE","horseplay"],["SWORD","swordplay"],["GUN","gunplay"],["FOUL","foul play"],["FAIR","fair play"],["DOWN","downplay"],["CHILD","child's play"],["WORD","wordplay"],["FORE","foreplay"],["ROLE","role-play"],["POWER","power play"],["BACK","playback"],["GROUND","playground"],["MATE","playmate"],["BOOK","playbook"],["OFF","playoff"],["SCREEN","screenplay"]],
  OVER: [["TAKE","overtake"],["COME","overcome"],["TURN","overturn"],["LOOK","overlook"],["FLOW","overflow"],["COAT","overcoat"],["LOAD","overload"],["TIME","overtime"],["ALL","overall"],["BOARD","overboard"],["NIGHT","overnight"],["HEAD","overhead"],["PASS","overpass"],["SEE","oversee"],["CAST","overcast"],["HAUL","overhaul"],["JOY","overjoyed"],["DO","overdo"],["DUE","overdue"]],
  OUT: [["BREAK","outbreak"],["BURST","outburst"],["COME","outcome"],["DOOR","outdoor"],["FIT","outfit"],["GROW","outgrow"],["LAW","outlaw"],["LET","outlet"],["LINE","outline"],["LOOK","outlook"],["PUT","output"],["REACH","outreach"],["RUN","outrun"],["SET","outset"],["SKIRT","outskirt"],["STAND","outstanding"],["RAGE","outrage"],["WEIGH","outweigh"],["SMART","outsmart"],["SHINE","outshine"],["FIELD","outfield"]],
  DOWN: [["BREAK","breakdown"],["COUNT","countdown"],["FALL","downfall"],["LOAD","download"],["PLAY","downplay"],["POUR","downpour"],["SIDE","downside"],["STAIRS","downstairs"],["STREAM","downstream"],["TOWN","downtown"],["TURN","downturn"],["WARD","downward"],["SHOW","showdown"],["KNOCK","knockdown"],["LOCK","lockdown"],["SUN","sundown"],["LET","letdown"],["TOUCH","touchdown"],["MARK","markdown"],["HILL","downhill"],["SIZE","downsize"],["MELT","meltdown"],["SHUT","shutdown"]],
  BOX: [["SAND","sandbox"],["TOOL","toolbox"],["MAIL","mailbox"],["LUNCH","lunchbox"],["BREAD","breadbox"],["JUICE","juice box"],["MATCH","matchbox"],["CARD","cardboard box"],["POST","postbox"],["BOOM","boombox"],["BAND","bandbox"],["FOX","foxbox"],["JACK","jack-in-the-box"],["SKY","skybox"],["BLACK","black box"],["IN","inbox"],["OUT","outbox"]],
  CAR: [["SIDE","sidecar"],["STOCK","stock car"],["BOX","boxcar"],["RAIL","railcar"],["CATTLE","cattle car"],["CABLE","cable car"],["ARM","armcar"],["STREET","streetcar"],["PET","carpet"],["GO","cargo"],["WASH","car wash"]],
  ROAD: [["RAIL","railroad"],["CROSS","crossroad"],["OFF","off-road"],["SIDE","roadside"],["BLOCK","roadblock"],["TRIP","road trip"],["KILL","roadkill"],["WORK","roadwork"],["MAP","road map"],["SHOW","roadshow"],["WAY","roadway"],["RUNNER","roadrunner"],["WIDE","wide road"]],
  AIR: [["LINE","airline"],["PORT","airport"],["PLANE","airplane"],["CRAFT","aircraft"],["WAVE","airwave"],["WAY","airway"],["TIGHT","airtight"],["SHIP","airship"],["MAIL","airmail"],["LIFT","airlift"],["FORCE","air force"],["SICK","airsick"],["FARE","airfare"],["FIELD","airfield"],["BORN","airborne"],["BAG","airbag"],["DROP","airdrop"],["BRUSH","airbrush"]],
  WIND: [["MILL","windmill"],["SHIELD","windshield"],["PIPE","windpipe"],["STORM","windstorm"],["SOCK","windsock"],["SURF","windsurfing"],["WHIRL","whirlwind"],["TAIL","tailwind"],["HEAD","headwind"],["DOWN","downwind"],["FALL","windfall"],["BREAK","windbreak"],["SWEPT","windswept"]],
  STORM: [["BRAIN","brainstorm"],["THUNDER","thunderstorm"],["SNOW","snowstorm"],["RAIN","rainstorm"],["SAND","sandstorm"],["HAIL","hailstorm"],["FIRE","firestorm"],["ICE","ice storm"],["WIND","windstorm"],["BARN","barnstormer"],["ELECTRIC","electrical storm"]],
  ICE: [["CREAM","ice cream"],["BERG","iceberg"],["BREAK","icebreaker"],["CAP","icecap"],["BOUND","icebound"],["BOX","icebox"],["BLACK","black ice"],["DRY","dry ice"],["LAND","iceland"],["PRAC","practice"],["PACK","ice pack"],["PICK","ice pick"]],
  PAPER: [["NEWS","newspaper"],["WALL","wallpaper"],["SAND","sandpaper"],["TISSUE","tissue paper"],["CLIP","paperclip"],["BACK","paperback"],["WEIGHT","paperweight"],["WORK","paperwork"],["WHITE","white paper"],["WRAP","wrapping paper"],["FLY","flypaper"],["NOTE","notepaper"],["WAX","wax paper"],["TOILET","toilet paper"]],
  WALL: [["FIRE","firewall"],["STONE","stonewall"],["BRICK","brick wall"],["DRY","drywall"],["SEA","seawall"],["PAPER","wallpaper"],["FLOWER","wallflower"],["PAY","paywall"],["SIDE","sidewall"],["CORN","cornwall"]],
  DOOR: [["BELL","doorbell"],["STEP","doorstep"],["WAY","doorway"],["KNOB","doorknob"],["MAT","doormat"],["MAN","doorman"],["FRAME","doorframe"],["STOP","doorstop"],["BACK","backdoor"],["OUT","outdoor"],["IN","indoor"],["TRAP","trapdoor"],["NEXT","next door"],["FRONT","front door"]],
  CORN: [["POP","popcorn"],["PEPPER","peppercorn"],["ACORN","acorn"],["STALK","cornstalk"],["FIELD","cornfield"],["BREAD","cornbread"],["MEAL","cornmeal"],["CRIB","corncrib"],["HUSK","cornhusk"],["ROW","corn row"],["UNI","unicorn"]],
  BUTTER: [["CUP","buttercup"],["FLY","butterfly"],["MILK","buttermilk"],["SCOTCH","butterscotch"],["FINGER","butterfinger"],["NUT","butternut"],["BALL","butterball"],["CREAM","buttercream"],["PEANUT","peanut butter"],["BREAD","bread and butter"]],
  EGG: [["HEAD","egghead"],["NOG","eggnog"],["PLANT","eggplant"],["SHELL","eggshell"],["NEST","nest egg"],["BOILED","boiled egg"],["FRIED","fried egg"],["SCRAM","scrambled egg"]],
  HONEY: [["MOON","honeymoon"],["BEE","honeybee"],["COMB","honeycomb"],["DEW","honeydew"],["POT","honey pot"],["SUCKLE","honeysuckle"],["TRAP","honey trap"],["SWEET","sweet honey"]],
  TEA: [["POT","teapot"],["CUP","teacup"],["SPOON","teaspoon"],["KETTLE","tea kettle"],["CAKE","teacake"],["ROOM","tearoom"],["HOUSE","teahouse"],["LEAF","tea leaf"],["PARTY","tea party"],["SWEET","sweet tea"],["GREEN","green tea"],["ICE","iced tea"]],
  WOOD: [["FIRE","firewood"],["PLY","plywood"],["DRIFT","driftwood"],["RED","redwood"],["HARD","hardwood"],["DEAD","deadwood"],["DOG","dogwood"],["CUTTER","woodcutter"],["PECKER","woodpecker"],["LAND","woodland"],["CHUCK","woodchuck"],["CHIP","woodchip"],["WORK","woodwork"],["PILE","woodpile"]],
  IRON: [["FLAT","flatiron"],["GRID","gridiron"],["CAST","cast iron"],["PRESS","iron press"],["CLAD","ironclad"],["SMITH","ironsmith"],["WORK","ironwork"],["STONE","ironstone"],["STEAM","steam iron"],["WROUGHT","wrought iron"]],
  BRAIN: [["STORM","brainstorm"],["WASH","brainwash"],["CHILD","brainchild"],["WAVE","brain wave"],["FREEZE","brain freeze"],["DEAD","braindead"],["POWER","brainpower"],["TEASER","brain teaser"]],
  HEART: [["BREAK","heartbreak"],["BEAT","heartbeat"],["BURN","heartburn"],["FELT","heartfelt"],["LAND","heartland"],["STRING","heartstring"],["WARM","warmhearted"],["BROKEN","brokenhearted"],["SWEET","sweetheart"],["BRAVE","braveheart"],["WHOLE","wholehearted"],["CROSS","cross my heart"]],
  TOOTH: [["PASTE","toothpaste"],["BRUSH","toothbrush"],["PICK","toothpick"],["ACHE","toothache"],["FAIRY","tooth fairy"],["SWEET","sweet tooth"],["SABER","saber-tooth"],["BUCK","bucktooth"]],
  FINGER: [["PRINT","fingerprint"],["TIP","fingertip"],["NAIL","fingernail"],["BUTTER","butterfinger"],["INDEX","index finger"],["RING","ring finger"],["LADY","ladyfinger"],["POINT","finger pointing"]],
  CAKE: [["CUP","cupcake"],["PAN","pancake"],["CHEESE","cheesecake"],["FRUIT","fruitcake"],["SHORT","shortcake"],["POUND","pound cake"],["HOT","hotcake"],["COFFEE","coffee cake"],["LAYER","layer cake"],["ICE","ice cream cake"],["OAT","oatcake"],["RICE","rice cake"]],
  COAT: [["RAIN","raincoat"],["OVER","overcoat"],["TOP","topcoat"],["UNDER","undercoat"],["FUR","fur coat"],["TURN","turncoat"],["GOAT","goat coat"],["PET","petticoat"],["SUGAR","sugarcoat"],["WHITE","whitecoat"]],
  BED: [["ROOM","bedroom"],["ROCK","bedrock"],["SIDE","bedside"],["TIME","bedtime"],["BUG","bedbug"],["SPREAD","bedspread"],["FLOWER","flowerbed"],["RIVER","riverbed"],["HOT","hotbed"],["WATER","waterbed"],["SEA","seabed"],["ROAD","roadbed"],["SICK","sickbed"]],
  RING: [["EAR","earring"],["FINGER","finger ring"],["BOXING","boxing ring"],["SIDE","ringside"],["TONE","ringtone"],["LEADER","ringleader"],["SPRING","spring ring"],["MASTER","ringmaster"],["ENGAGE","engagement ring"],["WEDDING","wedding ring"],["KEY","key ring"],["DIAMOND","diamond ring"]],
  BAND: [["HEAD","headband"],["ARM","armband"],["WRIST","wristband"],["RUBBER","rubber band"],["BROAD","broadband"],["ROCK","rock band"],["STAND","bandstand"],["WAGON","bandwagon"],["WAIT","band-aid"],["HAT","hatband"],["CONTRA","contraband"],["HUSBAND","husband"],["WAVE","waveband"]],
  NAIL: [["FINGER","fingernail"],["TOE","toenail"],["THUMB","thumbnail"],["HEAD","nailhead"],["HANG","hangnail"],["HARD","hard as nails"],["HIT","hit the nail"]],
  MILK: [["BUTTER","buttermilk"],["SHAKE","milkshake"],["MAN","milkman"],["MAID","milkmaid"],["WEED","milkweed"],["WHOLE","whole milk"],["SKIM","skim milk"],["OAT","oat milk"],["SOY","soy milk"],["COCONUT","coconut milk"],["ALMOND","almond milk"]],
  SALT: [["WATER","saltwater"],["SHAKER","salt shaker"],["SEA","sea salt"],["ROCK","rock salt"],["MINE","salt mine"],["FLAT","salt flat"],["BATH","bath salts"],["PEPPER","salt and pepper"],["LAKE","salt lake"],["MARSH","salt marsh"]],
  PEPPER: [["CORN","peppercorn"],["MINT","peppermint"],["HOT","hot pepper"],["BLACK","black pepper"],["BELL","bell pepper"],["RED","red pepper"],["GREEN","green pepper"],["CHILI","chili pepper"],["SALT","salt and pepper"]],
  BONE: [["BACK","backbone"],["WISH","wishbone"],["JAW","jawbone"],["TROM","trombone"],["COLLAR","collarbone"],["HERRING","herringbone"],["CHEEK","cheekbone"],["SHIN","shinbone"],["SKULL","skull and bones"],["DRY","dry bone"],["WHALE","whalebone"],["BARE","bare bones"]],
  LAND: [["FARM","farmland"],["HOME","homeland"],["MAIN","mainland"],["WASTE","wasteland"],["WOOD","woodland"],["GRASS","grassland"],["WET","wetland"],["DREAM","dreamland"],["OVER","overland"],["MARK","landmark"],["LORD","landlord"],["SLIDE","landslide"],["LOCK","landlocked"],["SCAPE","landscape"],["FALL","landfall"],["MINE","land mine"],["ICE","iceland"],["GREEN","greenland"],["MARSH","marshland"]],
  FALL: [["WATER","waterfall"],["DOWN","downfall"],["NIGHT","nightfall"],["RAIN","rainfall"],["SNOW","snowfall"],["FREE","freefall"],["WIND","windfall"],["LAND","landfall"],["PIT","pitfall"],["FOOT","footfall"],["SHORT","shortfall"]],
  MARK: [["BOOK","bookmark"],["LAND","landmark"],["WATER","watermark"],["BENCH","benchmark"],["TRADE","trademark"],["POST","postmark"],["CHECK","checkmark"],["BIRTH","birthmark"],["HALL","hallmark"],["CROSS","crossmark"],["FINGER","fingermark"],["SKID","skidmark"],["EAR","earmark"],["QUESTION","question mark"]],
  MAN: [["SNOW","snowman"],["FIRE","fireman"],["MILK","milkman"],["DOOR","doorman"],["POST","postman"],["SALES","salesman"],["SPIDER","spiderman"],["HANDY","handyman"],["WORK","workman"],["SPORTS","sportsman"],["HORSE","horseman"],["SAND","sandman"],["SHOW","showman"]],
  FLOWER: [["SUN","sunflower"],["WALL","wallflower"],["WILD","wildflower"],["CORN","cornflower"],["BED","flowerbed"],["POT","flowerpot"],["CAULI","cauliflower"],["MAY","mayflower"],["POWER","flower power"],["GIRL","flower girl"],["PASS","passionflower"]],
  SHOE: [["HORSE","horseshoe"],["SNOW","snowshoe"],["GUM","gumshoe"],["OVER","overshoe"],["LACE","shoelace"],["MAKER","shoemaker"],["HORN","shoehorn"],["STRING","shoestring"],["FLAT","flat shoe"]],
  CROSS: [["FIRE","crossfire"],["ROAD","crossroad"],["BOW","crossbow"],["WORD","crossword"],["WALK","crosswalk"],["BAR","crossbar"],["CUT","cross-cut"],["BREED","crossbreed"],["CHECK","cross-check"],["RED","Red Cross"],["RAIL","railroad crossing"],["DOUBLE","double-cross"]],
  SHIRT: [["NIGHT","nightshirt"],["SWEAT","sweatshirt"],["DRESS","dress shirt"],["UNDER","undershirt"],["POLO","polo shirt"],["OVER","overshirt"],["HAIR","hair shirt"],["STUFF","stuffed shirt"]],
  TAIL: [["COCK","cocktail"],["PONY","ponytail"],["DETAIL","detail"],["LIGHT","taillight"],["GATE","tailgate"],["COAT","tailcoat"],["WIND","tailwind"],["SPIN","tailspin"],["DOVE","dovetail"],["RAT","rattail"],["FOX","foxtail"],["HORSE","horsetail"],["PIG","pigtail"]],
  POT: [["TEA","teapot"],["FLOWER","flowerpot"],["CRACK","crackpot"],["JACK","jackpot"],["HOT","hotpot"],["HONEY","honey pot"],["STOCK","stockpot"],["COOK","cooking pot"],["DEPOT","depot"],["SPOT","spot"],["CHIMNEY","chimney pot"],["COFFEE","coffee pot"]],
  STEP: [["DOOR","doorstep"],["FOOT","footstep"],["SIDE","sidestep"],["TWO","two-step"],["QUICK","quickstep"],["OVER","overstep"],["LOCK","lockstep"],["MIS","misstep"],["HALF","half step"],["FIRST","first step"]],
  SPRING: [["BOARD","springboard"],["TIME","springtime"],["WELL","wellspring"],["OFF","offspring"],["HOT","hot spring"],["HAND","handspring"],["DAY","day spring"],["COLD","cold spring"]],
  WEIGHT: [["LIGHT","lightweight"],["HEAVY","heavyweight"],["PAPER","paperweight"],["DEAD","deadweight"],["FEATHER","featherweight"],["FLY","flyweight"],["BANTAM","bantamweight"],["MIDDLE","middleweight"],["BODY","body weight"],["OVER","overweight"],["UNDER","underweight"],["NET","net weight"]],
  CLOUD: [["THUNDER","thundercloud"],["RAIN","rain cloud"],["STORM","storm cloud"],["BURST","cloudburst"],["OVER","overcloud"],["DARK","dark cloud"],["WHITE","white cloud"],["NINE","cloud nine"]],
  MASTER: [["KEY","master key"],["PIECE","masterpiece"],["MIND","mastermind"],["CLASS","master class"],["WORK","masterwork"],["PLAN","master plan"],["HEAD","headmaster"],["GRAND","grandmaster"],["POST","postmaster"],["WEB","webmaster"],["SCHOOL","schoolmaster"],["QUIZ","quizmaster"],["TASK","taskmaster"],["RING","ringmaster"]],
  BREAK: [["DAY","daybreak"],["JAW","jawbreaker"],["HEART","heartbreak"],["ICE","icebreaker"],["WIND","windbreak"],["FAST","breakfast"],["OUT","outbreak"],["DOWN","breakdown"],["THROUGH","breakthrough"],["GROUND","groundbreaking"],["NECK","breakneck"],["JAIL","jailbreak"],["WAVE","wavebreak"],["WATER","breakwater"]],
  STREET: [["WALL","Wall Street"],["MAIN","Main Street"],["SIDE","sidestreet"],["CAR","streetcar"],["LIGHT","streetlight"],["WISE","streetwise"],["BACK","backstreet"],["DOWN","downstreet"],["HIGH","high street"]],
  GATE: [["TAIL","tailgate"],["FLOOD","floodgate"],["CRASH","crashgate"],["WATER","watergate"],["TOLL","tollgate"],["STAR","stargate"],["SKY","sky gate"],["IRON","iron gate"]],
  TOP: [["TABLE","tabletop"],["HILL","hilltop"],["ROOF","rooftop"],["TREE","treetop"],["DESK","desktop"],["OVER","overtop"],["TIP","tiptop"],["LAP","laptop"],["MOUNT","mountaintop"],["COUNTER","countertop"],["FLAT","flat top"],["TANK","tank top"],["SPIN","spinning top"]],
  HILL: [["ANT","anthill"],["FOOT","foothill"],["DOWN","downhill"],["UP","uphill"],["SIDE","hillside"],["TOP","hilltop"],["MOLE","molehill"],["WIND","windmill hill"]],
  BRIDGE: [["DRAW","drawbridge"],["FOOT","footbridge"],["CAMBRIDGE","cambridge"],["OVER","overbridge"],["ROAD","road bridge"],["TOLL","toll bridge"],["LONDON","London Bridge"],["SUSPENSION","suspension bridge"]],
  WIRE: [["BAR","barbed wire"],["LIVE","live wire"],["HIGH","highwire"],["TRIP","tripwire"],["FIRE","firewire"],["HARD","hardwired"],["HAIR","hairwire"]],
  PACK: [["BACK","backpack"],["JET","jet pack"],["RAT","rat pack"],["SIX","six-pack"],["WOLF","wolf pack"],["ICE","ice pack"],["MUD","mudpack"],["POWER","power pack"],["FANNY","fanny pack"]],
  KNIFE: [["JACK","jackknife"],["PEN","penknife"],["POCKET","pocket knife"],["BUTTER","butter knife"],["STEAK","steak knife"],["SWISS","Swiss army knife"],["CARVING","carving knife"],["BREAD","bread knife"]],
  KEEPER: [["GOAL","goalkeeper"],["GATE","gatekeeper"],["BEE","beekeeper"],["BOOK","bookkeeper"],["HOUSE","housekeeper"],["SHOP","shopkeeper"],["GAME","gamekeeper"],["TIME","timekeeper"],["INN","innkeeper"],["PEACE","peacekeeper"],["ZOO","zookeeper"],["STORE","storekeeper"],["GROUND","groundskeeper"]],
  POINT: [["GUN","gunpoint"],["VIEW","viewpoint"],["CHECK","checkpoint"],["STAND","standpoint"],["MID","midpoint"],["PIN","pinpoint"],["BALL","ballpoint"],["BLUE","blue point"],["WEST","west point"],["DEW","dew point"],["MATCH","match point"],["BOILING","boiling point"],["TURNING","turning point"],["FOCAL","focal point"],["POWER","powerpoint"]],
  MATE: [["CHECK","checkmate"],["TEAM","teammate"],["PLAY","playmate"],["CLASS","classmate"],["ROOM","roommate"],["SHIP","shipmate"],["SOUL","soulmate"],["STALE","stalemate"],["CELL","cellmate"],["FLAT","flatmate"],["HOUSE","housemate"],["BED","bedmate"],["SCHOOL","schoolmate"],["WORK","workmate"],["HELP","helpmate"]],
  FIELD: [["AIR","airfield"],["CORN","cornfield"],["MINE","minefield"],["OIL","oil field"],["OUT","outfield"],["GREEN","greenfield"],["BROWN","brownfield"],["SPRING","springfield"],["TRACK","track and field"],["LEFT","left field"],["COAL","coalfield"],["GRAIN","grainfield"]],
  SPOT: [["LIGHT","spotlight"],["SUN","sunspot"],["BLIND","blind spot"],["HOT","hot spot"],["SWEET","sweet spot"],["SOFT","soft spot"],["DARK","dark spot"],["WEAK","weak spot"],["TROUBLE","trouble spot"],["CHECK","spot check"],["TIGHT","tight spot"]],
  SHELL: [["SEA","seashell"],["EGG","eggshell"],["NUT","nutshell"],["BOMB","bombshell"],["SHOT","shotgun shell"],["CLAM","clamshell"],["TURTLE","turtle shell"],["FISH","shellfish"],["SHOCK","shell shock"],["COCK","cockle shell"],["TORTOISE","tortoise shell"]],
  STONE: [["TOMB","tombstone"],["LIME","limestone"],["SAND","sandstone"],["KEY","keystone"],["MILE","milestone"],["BIRTH","birthstone"],["CORNER","cornerstone"],["COBBLE","cobblestone"],["GRAVE","gravestone"],["GEM","gemstone"],["HAIL","hailstone"],["FLAG","flagstone"],["BROWN","brownstone"],["BLOOD","bloodstone"],["FREE","freestone"],["GOLD","goldstone"]],
  FLY: [["BUTTER","butterfly"],["FIRE","firefly"],["MAY","mayfly"],["DRAGON","dragonfly"],["BAR","barfly"],["HORSE","horsefly"],["SHOE","shoefly"],["WHEEL","flywheel"],["PAPER","flypaper"],["CATCHER","flycatcher"],["BLOW","blowfly"],["HOUSE","housefly"],["OVER","flyover"],["WEIGHT","flyweight"]],
  WELL: [["FARE","farewell"],["STAIR","stairwell"],["INK","inkwell"],["OIL","oil well"],["SPRING","wellspring"],["GROUND","groundwell"],["WISHING","wishing well"],["MAXWELL","maxwell"],["DONE","well done"]],
  MATCH: [["BOX","matchbox"],["STICK","matchstick"],["MAKER","matchmaker"],["BOOK","matchbook"],["POINT","match point"],["MIS","mismatch"],["RE","rematch"],["FIRE","fire match"],["GRUDGE","grudge match"],["PLAY","play match"],["TEST","test match"]],
  SNOW: [["BALL","snowball"],["MAN","snowman"],["FLAKE","snowflake"],["STORM","snowstorm"],["BOARD","snowboard"],["PLOW","snowplow"],["FALL","snowfall"],["SHOE","snowshoe"],["DRIFT","snowdrift"],["MOBILE","snowmobile"],["CAP","snowcap"],["DROP","snowdrop"],["BIRD","snowbird"]],
  PIN: [["BALL","pinball"],["POINT","pinpoint"],["CUSHION","pincushion"],["STRIPE","pinstripe"],["WHEEL","pinwheel"],["PUSH","pushpin"],["STICK","stickpin"],["TIE","tiepin"],["KING","kingpin"],["HAT","hat pin"],["BOWLING","bowling pin"],["TAIL","pin the tail"],["HAIR","hairpin"],["CLOTHES","clothespin"],["ROLLING","rolling pin"],["SAFETY","safety pin"]],
  BOW: [["RAIN","rainbow"],["EL","elbow"],["CROSS","crossbow"],["LONG","longbow"],["OX","oxbow"]],
  BELL: [["DOOR","doorbell"],["BLUE","bluebell"],["COW","cowbell"],["DUMB","dumbbell"],["EGG","egg bell"],["CAMP","camp bell"],["LIBERTY","Liberty Bell"],["JINGLE","jingle bell"],["SILVER","silver bell"],["TACO","Taco Bell"]],
  LOCK: [["DOWN","lockdown"],["SMITH","locksmith"],["JAW","lockjaw"],["PAD","padlock"],["DEAD","deadlock"],["GRID","gridlock"],["GUN","gunlock"],["LAND","landlocked"],["BLOCK","block lock"],["AIR","airlock"],["FLINT","flintlock"],["INTER","interlock"],["OVER","overlock"],["HEM","hemlock"],["WAR","warlock"]],
  WORM: [["BOOK","bookworm"],["EARTH","earthworm"],["GLOW","glowworm"],["SILK","silkworm"],["INCH","inchworm"],["TAPE","tapeworm"],["RING","ringworm"],["ARMY","armyworm"]],
  STORM: [["BRAIN","brainstorm"],["THUNDER","thunderstorm"],["SNOW","snowstorm"],["RAIN","rainstorm"],["SAND","sandstorm"],["HAIL","hailstorm"],["FIRE","firestorm"],["ICE","ice storm"],["WIND","windstorm"],["BARN","barnstormer"]],
  DROP: [["RAIN","raindrop"],["BACK","backdrop"],["AIR","airdrop"],["DEW","dewdrop"],["GUM","gumdrop"],["TEAR","teardrop"],["SNOW","snowdrop"],["EYE","eyedrop"],["NAME","name-drop"]],
  POOL: [["CAR","carpool"],["TIDE","tidepool"],["WHIRL","whirlpool"],["SWIM","swimming pool"],["DEAD","deadpool"],["MOTOR","motor pool"],["ROCK","rock pool"],["GENE","gene pool"],["CESS","cesspool"],["LIVER","liverpool"]],
  BAG: [["HAND","handbag"],["AIR","airbag"],["SAND","sandbag"],["BEAN","beanbag"],["WIND","windbag"],["MAIL","mailbag"],["MONEY","money bag"],["SLEEPING","sleeping bag"],["TEA","tea bag"],["TRASH","trash bag"],["DUST","dustbag"],["GAS","gasbag"],["BODY","body bag"]],
  HOLD: [["HOUSE","household"],["FOOT","foothold"],["STRONG","stronghold"],["THRESH","threshold"],["WITH","withhold"],["BE","behold"],["UP","uphold"],["FREE","freehold"],["STAKE","stakeholder"],["LEASE","leasehold"]],
  POWER: [["HORSE","horsepower"],["MAN","manpower"],["BRAIN","brainpower"],["WILL","willpower"],["FIRE","firepower"],["AIR","airpower"],["FLOWER","flower power"],["SUPER","superpower"],["SOLAR","solar power"],["SEA","sea power"],["WIND","wind power"],["WATER","waterpower"],["OVER","overpower"]],
  FISH: [["GOLD","goldfish"],["SWORD","swordfish"],["STAR","starfish"],["JELLY","jellyfish"],["BLOW","blowfish"],["CAT","catfish"],["SHELL","shellfish"],["ANGEL","angelfish"],["CLOWN","clownfish"],["CRAY","crayfish"],["SUN","sunfish"],["SAIL","sailfish"],["CUT","cuttlefish"]],
  TRAIN: [["RAIN","rain train"],["STRAIN","strain"],["MAIN","main train"],["FREIGHT","freight train"],["BULLET","bullet train"],["EXPRESS","express train"],["STEAM","steam train"],["BRAIN","brain train"]],
  SHOP: [["WORK","workshop"],["BOOK","bookshop"],["KEEPER","shopkeeper"],["LIFT","shoplifter"],["PET","pet shop"],["COFFEE","coffee shop"],["GIFT","gift shop"],["PAWN","pawnshop"],["SWAP","swap shop"],["TOY","toy shop"],["BARBER","barbershop"]],
  BILL: [["BOARD","billboard"],["FOLD","billfold"],["DOLLAR","dollar bill"],["HAND","handbill"],["PLAY","playbill"],["WAY","way bill"],["HILL","hillbilly"],["HORN","hornbill"],["FOOT","foot the bill"]],
  WAY: [["WATER","waterway"],["AIR","airway"],["ROAD","roadway"],["DOOR","doorway"],["HALL","hallway"],["HIGH","highway"],["FREE","freeway"],["DRIVE","driveway"],["PATH","pathway"],["RAIL","railway"],["RUN","runway"],["STAIR","stairway"],["GATE","gateway"],["GET","getaway"],["SPEED","speedway"],["GIVE","giveaway"],["HIDE","hideaway"],["MIDDLE","midway"],["FAIR","fairway"]],
  GUARD: [["BODY","bodyguard"],["LIFE","lifeguard"],["SAFE","safeguard"],["COAST","coast guard"],["MOUTH","mouthguard"],["SHIN","shin guard"],["MUD","mudguard"],["NIGHT","night guard"],["OLD","old guard"],["VAN","vanguard"],["REAR","rearguard"]],
  SPIN: [["TAIL","tailspin"],["TOP","spinning top"],["WHEEL","spinning wheel"],["OFF","spinoff"],["WHIRL","whirlspin"],["HEAD","headspin"],["BACK","backspin"]],
  WEED: [["SEA","seaweed"],["MILK","milkweed"],["TUMBLE","tumbleweed"],["RAG","ragweed"],["KNOT","knotweed"],["BIND","bindweed"],["FIRE","fireweed"],["STINK","stinkweed"],["POKE","pokeweed"]],
  JACK: [["BLACK","blackjack"],["FLAP","flapjack"],["LUMBER","lumberjack"],["CRACK","crackerjack"],["YELLOW","yellowjacket"],["POT","jackpot"],["KNIFE","jackknife"],["HAMMER","jackhammer"],["RABBIT","jackrabbit"],["BOOT","bootjack"],["SKIP","skipjack"],["STEEPLE","steeplejack"],["HI","hijack"]],
  STOCK: [["LIVE","livestock"],["GUN","gunstock"],["OVER","overstock"],["YARD","stockyard"],["PILE","stockpile"],["ROOM","stockroom"],["POT","stockpot"],["BROKER","stockbroker"],["HOLDER","stockholder"],["BLOOD","bloodstock"],["LOCK","lockstock"],["ROOT","rootstock"],["CAR","stock car"]],
  PIT: [["FIRE","fire pit"],["SAND","sand pit"],["COCK","cockpit"],["ARM","armpit"],["GRAVEL","gravel pit"],["BULL","bull pit"]],
  TRAP: [["MOUSE","mousetrap"],["SPEED","speed trap"],["DEATH","death trap"],["SAND","sand trap"],["DOOR","trapdoor"],["FLY","flytrap"],["HONEY","honey trap"],["TOURIST","tourist trap"],["BOOBY","booby trap"],["COLD","cold trap"]],
  WARD: [["DOWN","downward"],["OUT","outward"],["FOR","forward"],["BACK","backward"],["IN","inward"],["UP","upward"],["ON","onward"],["RE","reward"],["TO","toward"],["HOME","homeward"],["SKY","skyward"],["NORTH","northward"]],
  RING: [["EAR","earring"],["BOXING","boxing ring"],["SIDE","ringside"],["TONE","ringtone"],["LEADER","ringleader"],["MASTER","ringmaster"],["ENGAGE","engagement ring"],["WEDDING","wedding ring"],["KEY","key ring"],["DIAMOND","diamond ring"],["SPRING","spring ring"]],
  FACE: [["BOOK","facebook"],["SURFACE","surface"],["CLOCK","clock face"],["TYPE","typeface"],["ABOUT","about-face"],["POKER","poker face"],["INTER","interface"],["BOLD","boldface"],["WHITE","whiteface"],["TWO","two-faced"]],
  GREEN: [["HOUSE","greenhouse"],["BACK","greenback"],["HORN","greenhorn"],["LIGHT","green light"],["THUMB","green thumb"],["CARD","green card"],["BELT","greenbelt"],["FIELD","greenfield"],["LAND","greenland"],["ROOM","greenroom"]],
};

// Deduplicate answer keys (SNOW, FISH, STONE, etc. may be listed twice in source)
const ANSWERS = {};
for (const [ans, partners] of Object.entries(LINKS)) {
  if (!ANSWERS[ans]) ANSWERS[ans] = [];
  const seen = new Set(ANSWERS[ans].map(p => p[0]));
  for (const p of partners) {
    if (!seen.has(p[0])) {
      ANSWERS[ans].push(p);
      seen.add(p[0]);
    }
  }
}

// ─── Validate each link contains the answer ──────────────────────
for (const [ans, partners] of Object.entries(ANSWERS)) {
  for (const [cue, phrase] of partners) {
    const phraseLetters = phrase.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const ansLetters = ans.toLowerCase();
    if (!phraseLetters.includes(ansLetters)) {
      throw new Error(`INVALID LINK: "${phrase}" does not contain "${ans}"`);
    }
    if (cue === ans) {
      throw new Error(`CUE equals ANSWER: ${cue} === ${ans}`);
    }
  }
}

console.log(`Answer words: ${Object.keys(ANSWERS).length}`);
console.log(`Total cue pairs: ${Object.values(ANSWERS).reduce((s, p) => s + p.length, 0)}`);

// ─── Generate all valid 3-combinations per answer ────────────────
function combinations(arr, k) {
  const results = [];
  function combo(start, current) {
    if (current.length === k) { results.push(current.slice()); return; }
    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      combo(i + 1, current);
      current.pop();
    }
  }
  combo(0, []);
  return results;
}

let allCandidates = [];
for (const [ans, partners] of Object.entries(ANSWERS)) {
  if (partners.length < 3) continue;
  const combos = combinations(partners, 3);
  for (const trio of combos) {
    const cues = trio.map(t => t[0]);
    const links = trio.map(t => t[1]);
    // Ensure all 3 cues are distinct and different from answer
    if (new Set(cues).size === 3 && !cues.includes(ans)) {
      allCandidates.push({ answer: ans, cues, links });
    }
  }
}

console.log(`Total candidate puzzles: ${allCandidates.length}`);

// ─── Select 365 puzzles with constraints ─────────────────────────
// Max 3 puzzles per answer word, max 4 appearances of any single cue
const MAX_PER_ANSWER = 3;
const MAX_CUE_APPEARANCES = 4;
const TARGET = 365;

// Shuffle candidates deterministically
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

const rng = seededRandom(20260616);
for (let i = allCandidates.length - 1; i > 0; i--) {
  const j = Math.floor(rng() * (i + 1));
  [allCandidates[i], allCandidates[j]] = [allCandidates[j], allCandidates[i]];
}

const selected = [];
const answerCount = {};
const cueCount = {};
const usedSets = new Set();

for (const candidate of allCandidates) {
  if (selected.length >= TARGET) break;

  const ans = candidate.answer;
  const cues = candidate.cues;

  // Check answer cap
  if ((answerCount[ans] || 0) >= MAX_PER_ANSWER) continue;

  // Check cue caps
  if (cues.some(c => (cueCount[c] || 0) >= MAX_CUE_APPEARANCES)) continue;

  // Check duplicate cue-set
  const setKey = [...cues].sort().join('|') + '|' + ans;
  if (usedSets.has(setKey)) continue;

  // Accept
  selected.push(candidate);
  answerCount[ans] = (answerCount[ans] || 0) + 1;
  for (const c of cues) {
    cueCount[c] = (cueCount[c] || 0) + 1;
  }
  usedSets.add(setKey);
}

if (selected.length < TARGET) {
  console.error(`Only generated ${selected.length} puzzles, need ${TARGET}`);
  console.error(`Answer words used: ${Object.keys(answerCount).length}`);
  console.error(`Answers with room:`, Object.entries(ANSWERS)
    .filter(([a]) => (answerCount[a] || 0) < MAX_PER_ANSWER && ANSWERS[a].length >= 3)
    .map(([a, p]) => `${a}(${p.length} partners, ${answerCount[a] || 0} used)`)
    .join(', '));
  process.exit(1);
}

// Assign sequential IDs
const puzzles = selected.map((p, i) => ({
  id: i + 1,
  cues: p.cues,
  answer: p.answer,
  links: p.links,
}));

// ─── Validation pass ─────────────────────────────────────────────
if (puzzles.length !== TARGET) throw new Error(`Expected ${TARGET} puzzles, got ${puzzles.length}`);

const dupCheck = new Set();
for (const p of puzzles) {
  // 3 distinct cues
  if (new Set(p.cues).size !== 3) throw new Error(`Puzzle ${p.id}: cues not distinct`);
  // Cues distinct from answer
  if (p.cues.includes(p.answer)) throw new Error(`Puzzle ${p.id}: cue equals answer`);
  // 3 link phrases
  if (p.links.length !== 3) throw new Error(`Puzzle ${p.id}: expected 3 links`);
  // Each link contains the answer
  for (let i = 0; i < 3; i++) {
    const phraseLetters = p.links[i].replace(/[^a-zA-Z]/g, '').toLowerCase();
    if (!phraseLetters.includes(p.answer.toLowerCase())) {
      throw new Error(`Puzzle ${p.id}: link "${p.links[i]}" doesn't contain "${p.answer}"`);
    }
  }
  // Duplicate cue-set check
  const key = [...p.cues].sort().join('|') + '|' + p.answer;
  if (dupCheck.has(key)) throw new Error(`Puzzle ${p.id}: duplicate`);
  dupCheck.add(key);
}

// Per-answer cap check
const finalAnswerCount = {};
for (const p of puzzles) {
  finalAnswerCount[p.answer] = (finalAnswerCount[p.answer] || 0) + 1;
  if (finalAnswerCount[p.answer] > MAX_PER_ANSWER) {
    throw new Error(`Answer "${p.answer}" used ${finalAnswerCount[p.answer]} times (max ${MAX_PER_ANSWER})`);
  }
}

// Per-cue cap check
const finalCueCount = {};
for (const p of puzzles) {
  for (const c of p.cues) {
    finalCueCount[c] = (finalCueCount[c] || 0) + 1;
    if (finalCueCount[c] > MAX_CUE_APPEARANCES) {
      throw new Error(`Cue "${c}" appears ${finalCueCount[c]} times (max ${MAX_CUE_APPEARANCES})`);
    }
  }
}

console.log(`\n✓ All ${TARGET} puzzles validated`);
console.log(`  Unique answers: ${Object.keys(finalAnswerCount).length}`);

// ─── Write puzzles.js ────────────────────────────────────────────
const jsContent = 'const PUZZLES = ' + JSON.stringify(puzzles, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'puzzles.js'), jsContent);
console.log(`\nWrote threads/puzzles.js (${puzzles.length} puzzles)`);

// ─── Sample output ──────────────────────────────────────────────
console.log('\nSample puzzles:');
const sampleIndices = [];
for (let i = 0; i < 10; i++) {
  sampleIndices.push(Math.floor(rng() * puzzles.length));
}
for (const idx of sampleIndices) {
  const p = puzzles[idx];
  console.log(`  #${p.id}: ${p.cues.join(' · ')} → ${p.answer} (${p.links.join(', ')})`);
}
