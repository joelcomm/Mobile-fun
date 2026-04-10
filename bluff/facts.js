const FACTS = [
  {
    topic: "The Human Body",
    statements: [
      { text: "The human nose can detect over 1 trillion different scents.", real: true },
      { text: "Your stomach gets a new lining every 3 to 4 days.", real: true },
      { text: "Humans use only 10% of their brain at any given time.", real: false }
    ],
    explanation: "The '10% of the brain' myth has been debunked — brain scans show activity across all regions."
  },
  {
    topic: "Space",
    statements: [
      { text: "A day on Venus is longer than a year on Venus.", real: true },
      { text: "There are more stars in the universe than grains of sand on Earth.", real: true },
      { text: "The Sun is the largest known star in the Milky Way.", real: false }
    ],
    explanation: "The Sun is actually a medium-sized star. Stars like UY Scuti are over 1,700 times larger."
  },
  {
    topic: "Animals",
    statements: [
      { text: "Octopuses have three hearts.", real: true },
      { text: "A group of flamingos is called a 'flamboyance.'", real: true },
      { text: "Goldfish have a 3-second memory.", real: false }
    ],
    explanation: "Goldfish can actually remember things for months — the 3-second myth is completely false."
  },
  {
    topic: "Geography",
    statements: [
      { text: "Russia spans 11 time zones.", real: true },
      { text: "Africa is larger than the USA, China, India and Europe combined.", real: true },
      { text: "Mount Everest is the closest point on Earth to the Sun.", real: false }
    ],
    explanation: "Due to Earth's equatorial bulge, Mount Chimborazo in Ecuador is actually closest to the Sun."
  },
  {
    topic: "Food & Drink",
    statements: [
      { text: "Honey never spoils — edible honey was found in Egyptian tombs.", real: true },
      { text: "Bananas are technically berries.", real: true },
      { text: "Carrots were always orange — they've never come in other colors.", real: false }
    ],
    explanation: "Carrots were originally purple and yellow. Orange carrots were bred in the 17th century in the Netherlands."
  },
  {
    topic: "History",
    statements: [
      { text: "Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid.", real: true },
      { text: "The Great Wall of China is visible from space with the naked eye.", real: false },
      { text: "Oxford University is older than the Aztec Empire.", real: true }
    ],
    explanation: "The Great Wall is not visible from space with the naked eye — this is a common myth confirmed by astronauts."
  },
  {
    topic: "Technology",
    statements: [
      { text: "The first computer mouse was made of wood.", real: true },
      { text: "Email existed before the World Wide Web.", real: true },
      { text: "The first text message ever sent said 'Hello World.'", real: false }
    ],
    explanation: "The first text message, sent in 1992, said 'Merry Christmas' — not 'Hello World.'"
  },
  {
    topic: "Music",
    statements: [
      { text: "The song 'Happy Birthday' was under copyright until 2016.", real: true },
      { text: "Freddie Mercury had a four-octave vocal range.", real: true },
      { text: "Mozart wrote his first symphony at age 3.", real: false }
    ],
    explanation: "Mozart wrote his first symphony at age 8 — impressive, but not 3."
  },
  {
    topic: "Science",
    statements: [
      { text: "Hot water can freeze faster than cold water under certain conditions.", real: true },
      { text: "Lightning strikes the Earth about 100 times every second.", real: true },
      { text: "Diamonds are made from compressed coal.", real: false }
    ],
    explanation: "Diamonds form from carbon deep in Earth's mantle — coal is found near the surface and is not involved."
  },
  {
    topic: "Movies",
    statements: [
      { text: "The movie 'Titanic' cost more to make than the actual Titanic ship.", real: true },
      { text: "All the clocks in 'Pulp Fiction' are set to 4:20.", real: false },
      { text: "The snow in 'Wizard of Oz' was made of 100% asbestos.", real: true }
    ],
    explanation: "Not all clocks in Pulp Fiction show 4:20 — this is an internet myth that spread widely."
  },
  {
    topic: "Language",
    statements: [
      { text: "'Bookkeeper' is the only English word with three consecutive double letters.", real: true },
      { text: "There are more English words beginning with 'S' than any other letter.", real: true },
      { text: "The word 'set' has only 5 definitions in the dictionary.", real: false }
    ],
    explanation: "The word 'set' actually has over 430 definitions — one of the most in the English language."
  },
  {
    topic: "Sports",
    statements: [
      { text: "Golf balls have an average of 336 dimples.", real: true },
      { text: "The Olympics used to award medals for art competitions.", real: true },
      { text: "A regulation NBA basketball hoop is 12 feet high.", real: false }
    ],
    explanation: "An NBA basketball hoop is 10 feet (3.05 meters) high — not 12."
  },
  {
    topic: "Countries",
    statements: [
      { text: "Canada has more lakes than the rest of the world combined.", real: true },
      { text: "There's a town in Norway called 'Hell' — and it freezes over every winter.", real: true },
      { text: "The Sahara Desert is larger than the entire United States including Alaska.", real: false }
    ],
    explanation: "The Sahara is about 3.6 million square miles, while the US (including Alaska) is about 3.8 million square miles — so the US is actually slightly bigger."
  },
  {
    topic: "The Ocean",
    statements: [
      { text: "More people have been to the Moon than to the deepest part of the ocean.", real: true },
      { text: "The ocean produces over 50% of the world's oxygen.", real: true },
      { text: "The average depth of the ocean is about 500 feet.", real: false }
    ],
    explanation: "The average depth of the ocean is about 12,100 feet (3,688 meters) — far deeper than 500 feet."
  },
  {
    topic: "Ancient World",
    statements: [
      { text: "Ancient Romans used urine as mouthwash.", real: true },
      { text: "The ancient Greeks had a word for the color blue.", real: false },
      { text: "Gladiator fights weren't always to the death.", real: true }
    ],
    explanation: "Ancient Greeks had no dedicated word for blue — Homer described the sea as 'wine-dark.' The concept of blue as a distinct color came later."
  },
  {
    topic: "Inventions",
    statements: [
      { text: "The microwave oven was invented by accident.", real: true },
      { text: "Bubble wrap was originally designed as wallpaper.", real: true },
      { text: "Thomas Edison invented the lightbulb from scratch.", real: false }
    ],
    explanation: "Edison improved on existing designs — over 20 inventors had worked on incandescent lights before him."
  },
  {
    topic: "Pop Culture",
    statements: [
      { text: "Mr. Rogers was a Navy SEAL sniper before his TV career.", real: false },
      { text: "The Barbie doll's full name is Barbara Millicent Roberts.", real: true },
      { text: "Nintendo was founded in 1889 as a playing card company.", real: true }
    ],
    explanation: "Fred Rogers was never in the military — he went straight from college to television. This is a persistent urban legend."
  },
  {
    topic: "Weather",
    statements: [
      { text: "It can be too cold to snow.", real: true },
      { text: "A single hurricane can release energy equivalent to 10,000 nuclear bombs.", real: true },
      { text: "No two snowflakes have ever been found to be identical.", real: false }
    ],
    explanation: "In 1988, scientist Nancy Knight found two identical snowflakes from a Wisconsin storm."
  },
  {
    topic: "Math",
    statements: [
      { text: "A pizza that has radius 'z' and height 'a' has volume Pi × z × z × a.", real: true },
      { text: "111,111,111 × 111,111,111 = 12,345,678,987,654,321.", real: true },
      { text: "Pi has been proven to contain every possible number sequence.", real: false }
    ],
    explanation: "Whether pi contains every possible finite number sequence is still an open question in mathematics — it has never been proven."
  },
  {
    topic: "Psychology",
    statements: [
      { text: "The average person spends 6 months of their life waiting for red lights.", real: true },
      { text: "Studies show humans are more creative when slightly tired.", real: true },
      { text: "People only dream in black and white.", real: false }
    ],
    explanation: "Most people dream in color. The myth may stem from early dream studies done when TV was black and white."
  },
  {
    topic: "Plants",
    statements: [
      { text: "There's a tree called the 'Sandbox Tree' that shoots its seeds at 160 mph.", real: true },
      { text: "Sunflowers move to face the Sun throughout the day.", real: true },
      { text: "Venus flytraps are native to tropical rainforests.", real: false }
    ],
    explanation: "Venus flytraps are native to a small area of North and South Carolina — not tropical rainforests."
  },
  {
    topic: "Money",
    statements: [
      { text: "More Monopoly money is printed each year than real US currency.", real: true },
      { text: "The cost to make a US penny is more than one cent.", real: true },
      { text: "The US $100 bill is the highest denomination ever printed.", real: false }
    ],
    explanation: "The US once printed $10,000 bills (featuring Salmon P. Chase). They were discontinued in 1969."
  },
  {
    topic: "Architecture",
    statements: [
      { text: "The Eiffel Tower can grow up to 6 inches taller in summer heat.", real: true },
      { text: "The Leaning Tower of Pisa took nearly 200 years to build.", real: true },
      { text: "The Empire State Building sways up to 15 feet in strong winds.", real: false }
    ],
    explanation: "The Empire State Building sways only about 1 inch in strong winds — 15 feet would be catastrophic."
  },
  {
    topic: "Sleep",
    statements: [
      { text: "Sea otters hold hands while sleeping so they don't drift apart.", real: true },
      { text: "Dolphins sleep with one eye open — literally.", real: true },
      { text: "Humans can survive indefinitely on 4 hours of sleep per night.", real: false }
    ],
    explanation: "Chronic sleep deprivation (under 7 hours) leads to serious health problems. Only a tiny fraction of people have a gene allowing less sleep."
  },
  {
    topic: "Transportation",
    statements: [
      { text: "The Wright brothers' first flight was shorter than a Boeing 747's wingspan.", real: true },
      { text: "There are more airplanes in the ocean than submarines in the sky.", real: true },
      { text: "The speed of light was first exceeded by a jet in 1997.", real: false }
    ],
    explanation: "Nothing with mass can travel at the speed of light according to Einstein's theory of relativity."
  },
  {
    topic: "Famous People",
    statements: [
      { text: "Albert Einstein failed his university entrance exam on the first try.", real: true },
      { text: "Walt Disney was fired from a newspaper for 'lacking imagination.'", real: true },
      { text: "Isaac Newton invented calculus while still a teenager.", real: false }
    ],
    explanation: "Newton developed calculus in his early-to-mid 20s during 1665-1666, not as a teenager."
  },
  {
    topic: "Mythology",
    statements: [
      { text: "In Norse mythology, cats pulled the goddess Freya's chariot.", real: true },
      { text: "The word 'volcano' comes from Vulcan, the Roman god of fire.", real: true },
      { text: "In Greek mythology, Poseidon was Zeus's father.", real: false }
    ],
    explanation: "Poseidon was Zeus's brother — not his father. Their father was Kronos (Cronus)."
  },
  {
    topic: "Crime",
    statements: [
      { text: "Al Capone's business card said he was a 'furniture dealer.'", real: true },
      { text: "Fingerprints were first used to solve a crime in Argentina.", real: true },
      { text: "Alcatraz prison was located in the middle of the Atlantic Ocean.", real: false }
    ],
    explanation: "Alcatraz is in San Francisco Bay (Pacific Ocean), not the Atlantic."
  },
  {
    topic: "Colors",
    statements: [
      { text: "The color orange was named after the fruit, not the other way around.", real: true },
      { text: "Mosquitoes are more attracted to people wearing dark colors.", real: true },
      { text: "Flamingos are naturally pink from birth.", real: false }
    ],
    explanation: "Flamingos are born gray or white — they turn pink from carotenoids in the shrimp and algae they eat."
  },
  {
    topic: "Medicine",
    statements: [
      { text: "Laughing 100 times burns roughly the same calories as 15 minutes on a bike.", real: true },
      { text: "Your brain uses about 20% of your body's total energy.", real: true },
      { text: "Antibiotics are effective against both bacteria and viruses.", real: false }
    ],
    explanation: "Antibiotics only work against bacteria. They have no effect on viruses like the common cold or flu."
  },
  {
    topic: "Obscure Laws",
    statements: [
      { text: "In Switzerland, it's illegal to own just one guinea pig.", real: true },
      { text: "In France, it's legal to marry a dead person under certain conditions.", real: true },
      { text: "In Japan, it's illegal to be overweight.", real: false }
    ],
    explanation: "Japan has a 'Metabo Law' requiring waistline measurements, but being overweight itself isn't illegal — there are no criminal penalties for individuals."
  },
  {
    topic: "The Universe",
    statements: [
      { text: "There's a giant cloud of alcohol in space spanning 288 billion miles.", real: true },
      { text: "Neutron stars are so dense that a teaspoon would weigh about 6 billion tons.", real: true },
      { text: "Sound travels faster in space than on Earth because there's no air resistance.", real: false }
    ],
    explanation: "Sound cannot travel in space at all — it requires a medium like air or water to propagate."
  },
  {
    topic: "World Records",
    statements: [
      { text: "The longest hiccuping spree lasted 68 years.", real: true },
      { text: "The tallest person ever recorded was over 8 feet 11 inches tall.", real: true },
      { text: "The fastest human footspeed ever recorded was 35 mph.", real: false }
    ],
    explanation: "Usain Bolt's peak speed was about 27.8 mph — nowhere near 35 mph."
  },
  {
    topic: "Chemistry",
    statements: [
      { text: "You can technically make diamonds from peanut butter.", real: true },
      { text: "Water can boil and freeze at the same time (triple point).", real: true },
      { text: "Gold is the rarest element in Earth's crust.", real: false }
    ],
    explanation: "Gold is not the rarest — elements like francium, astatine, and osmium are far rarer in Earth's crust."
  },
  {
    topic: "Linguistics",
    statements: [
      { text: "There's a language with only 123 words (Toki Pona).", real: true },
      { text: "The longest word in English has 189,819 letters (a protein name).", real: true },
      { text: "All languages on Earth have a word for the color red.", real: false }
    ],
    explanation: "Some languages (like the Pirahã language) have no specific color terms at all, including red."
  },
  {
    topic: "Dinosaurs",
    statements: [
      { text: "T. rex lived closer in time to us than to Stegosaurus.", real: true },
      { text: "Some dinosaurs had feathers.", real: true },
      { text: "Dinosaurs and humans coexisted for thousands of years.", real: false }
    ],
    explanation: "Dinosaurs went extinct about 66 million years ago. Modern humans appeared about 300,000 years ago — they never coexisted."
  },
  {
    topic: "The Brain",
    statements: [
      { text: "Your brain generates enough electricity to power a small light bulb.", real: true },
      { text: "The brain is about 73% water.", real: true },
      { text: "Brain cells cannot regenerate — once they die, they're gone forever.", real: false }
    ],
    explanation: "Neurogenesis (the creation of new brain cells) has been proven to occur in certain areas of the adult brain, especially the hippocampus."
  },
  {
    topic: "Royalty",
    statements: [
      { text: "Queen Elizabeth II was a trained mechanic and truck driver.", real: true },
      { text: "The British Crown Jewels contain the largest clear-cut diamond in the world.", real: true },
      { text: "Napoleon Bonaparte was unusually short for his era.", real: false }
    ],
    explanation: "Napoleon was about 5'7\" — average or even slightly above average height for a Frenchman of his time. The 'short' myth came from British propaganda."
  },
  {
    topic: "Insects",
    statements: [
      { text: "A cockroach can live for weeks without its head.", real: true },
      { text: "Butterflies taste with their feet.", real: true },
      { text: "All mosquitoes bite humans for food.", real: false }
    ],
    explanation: "Only female mosquitoes bite — they need blood protein for egg development. Males feed on plant nectar."
  },
  {
    topic: "The Internet",
    statements: [
      { text: "The first website ever created is still online today.", real: true },
      { text: "More than half of all internet traffic comes from bots, not humans.", real: true },
      { text: "Google was the first search engine on the internet.", real: false }
    ],
    explanation: "Several search engines predated Google, including Archie (1990), WebCrawler (1994), AltaVista (1995), and Yahoo (1995). Google launched in 1998."
  },
  {
    topic: "Human Senses",
    statements: [
      { text: "Humans have more than five senses — including balance and temperature.", real: true },
      { text: "Your tongue has specific zones for different tastes (sweet, salty, sour, bitter).", real: false },
      { text: "The human eye can distinguish about 10 million different colors.", real: true }
    ],
    explanation: "The 'tongue map' is a myth from a misinterpreted German study. All taste buds can detect all flavors across the entire tongue."
  },
  {
    topic: "Earthquakes",
    statements: [
      { text: "Alaska has more earthquakes than any other US state.", real: true },
      { text: "Animals have been observed behaving unusually before earthquakes.", real: true },
      { text: "The Richter scale goes from 1 to 10.", real: false }
    ],
    explanation: "The Richter scale (now replaced by the moment magnitude scale) has no upper limit. While earthquakes above 10 haven't been recorded, the scale doesn't cap at 10."
  },
  {
    topic: "Coffee",
    statements: [
      { text: "Coffee was discovered after a goat herder noticed his goats dancing after eating coffee berries.", real: true },
      { text: "Finland consumes more coffee per capita than any other country.", real: true },
      { text: "Espresso has more caffeine per cup than drip coffee.", real: false }
    ],
    explanation: "A standard cup of drip coffee has more total caffeine (95mg) than a shot of espresso (63mg). Espresso is more concentrated but served in much smaller quantities."
  },
  {
    topic: "Sharks",
    statements: [
      { text: "Sharks have been around longer than trees.", real: true },
      { text: "Some shark species need to keep swimming to breathe.", real: true },
      { text: "Sharks can detect a single drop of blood from a mile away.", real: false }
    ],
    explanation: "Sharks have an excellent sense of smell, but they can detect blood at about one part per million — roughly equivalent to a few hundred meters, not a mile."
  },
  {
    topic: "Art History",
    statements: [
      { text: "The Mona Lisa has no eyebrows.", real: true },
      { text: "Vincent van Gogh sold only one painting during his lifetime.", real: true },
      { text: "Michelangelo painted the Sistine Chapel ceiling while lying on his back.", real: false }
    ],
    explanation: "Michelangelo actually painted standing up on scaffolding with his arm extended above his head — not lying on his back as commonly depicted."
  },
  {
    topic: "Volcanoes",
    statements: [
      { text: "There are more active volcanoes under the ocean than on land.", real: true },
      { text: "Volcanic lightning is a real phenomenon that occurs during eruptions.", real: true },
      { text: "Lava is always red or orange in color.", real: false }
    ],
    explanation: "Lava can also appear black, silver, or even blue. In Indonesia, Kawah Ijen volcano produces blue lava due to burning sulfuric gases."
  },
  {
    topic: "The Moon",
    statements: [
      { text: "The Moon is slowly moving away from Earth at about 1.5 inches per year.", real: true },
      { text: "There is water ice on the Moon.", real: true },
      { text: "The Moon has its own magnetic field like Earth.", real: false }
    ],
    explanation: "The Moon has no global magnetic field. It has small, localized magnetic patches on its surface, but nothing like Earth's protective magnetosphere."
  },
  {
    topic: "Photography",
    statements: [
      { text: "The first photograph ever taken required an 8-hour exposure time.", real: true },
      { text: "More photos are taken every 2 minutes today than in the entire 1800s.", real: true },
      { text: "Color photography was invented in the 1950s.", real: false }
    ],
    explanation: "The first color photograph was taken in 1861 by James Clerk Maxwell. Color photography was available long before the 1950s."
  },
  {
    topic: "Teeth",
    statements: [
      { text: "Tooth enamel is the hardest substance in the human body.", real: true },
      { text: "Sharks can grow over 20,000 teeth in a lifetime.", real: true },
      { text: "George Washington had wooden teeth.", real: false }
    ],
    explanation: "Washington's dentures were made of ivory, gold, lead, and human and animal teeth — but never wood. The wood myth may stem from the stained appearance of ivory."
  },
  {
    topic: "Pandas",
    statements: [
      { text: "Giant pandas spend about 12 hours a day eating.", real: true },
      { text: "Pandas are technically classified as bears.", real: true },
      { text: "Pandas are naturally solitary and refuse to breed in captivity.", real: false }
    ],
    explanation: "While breeding in captivity is challenging, pandas do breed in captivity and conservation programs have been quite successful. China has bred hundreds."
  },
  {
    topic: "Electricity",
    statements: [
      { text: "Electric eels can produce shocks of up to 860 volts.", real: true },
      { text: "Benjamin Franklin discovered electricity by flying a kite in a storm.", real: false },
      { text: "A bolt of lightning is about 5 times hotter than the surface of the Sun.", real: true }
    ],
    explanation: "Franklin's kite experiment demonstrated that lightning was electrical, but he didn't 'discover' electricity. Electricity was studied by many scientists before him."
  },
  {
    topic: "Whales",
    statements: [
      { text: "Blue whale hearts are so large a small child could crawl through the arteries.", real: true },
      { text: "Humpback whales compose new songs each year.", real: true },
      { text: "Whales breathe underwater using gills hidden behind their flippers.", real: false }
    ],
    explanation: "Whales are mammals — they breathe air through blowholes on top of their heads. They have no gills whatsoever."
  },
  {
    topic: "Video Games",
    statements: [
      { text: "Pac-Man was originally going to be called Puck-Man.", real: true },
      { text: "The first video game console was made by Nintendo.", real: false },
      { text: "Tetris was invented by a Soviet software engineer.", real: true }
    ],
    explanation: "The first home video game console was the Magnavox Odyssey, released in 1972 — years before Nintendo entered the console market."
  },
  {
    topic: "Trees",
    statements: [
      { text: "There are more trees on Earth than stars in the Milky Way.", real: true },
      { text: "The oldest living tree is over 5,000 years old.", real: true },
      { text: "Most of a tree's mass comes from nutrients absorbed through its roots.", real: false }
    ],
    explanation: "Most of a tree's mass actually comes from carbon dioxide absorbed from the air during photosynthesis — not from the soil. The soil provides water and minerals, but the bulk of the wood is carbon from CO2."
  },
  {
    topic: "Flags",
    statements: [
      { text: "Nepal is the only country whose flag is not rectangular.", real: true },
      { text: "The flag of Libya was once entirely green with no other design.", real: true },
      { text: "The US flag has always had red, white, and blue colors since 1776.", real: false }
    ],
    explanation: "While the colors have remained the same, the design has changed 27 times. The original flag had 13 stars in a circle, and the number of stars and arrangement has changed with each new state."
  },
  {
    topic: "Deserts",
    statements: [
      { text: "Antarctica is technically a desert.", real: true },
      { text: "The Sahara Desert is expanding by about 10% every century.", real: true },
      { text: "All deserts are hot and sandy.", real: false }
    ],
    explanation: "Deserts are defined by low precipitation, not temperature. Antarctica, the Arctic, and the Gobi Desert can be extremely cold, and many deserts are rocky rather than sandy."
  },
  {
    topic: "DNA",
    statements: [
      { text: "Humans share about 60% of their DNA with bananas.", real: true },
      { text: "If you uncoiled all your DNA it would stretch to the Sun and back 600 times.", real: true },
      { text: "Identical twins have completely identical DNA with no differences whatsoever.", real: false }
    ],
    explanation: "Even identical twins develop small DNA differences called somatic mutations after conception. Their DNA is extremely similar but not perfectly identical."
  },
  {
    topic: "Cheese",
    statements: [
      { text: "There are over 1,800 different types of cheese in the world.", real: true },
      { text: "Cheese is the most shoplifted food in the world.", real: true },
      { text: "All cheese must be aged for at least 60 days to be safe to eat.", real: false }
    ],
    explanation: "Many popular cheeses like mozzarella, ricotta, and cream cheese are fresh cheeses that require no aging at all. The 60-day rule only applies to raw milk cheeses in US regulations."
  },
  {
    topic: "Pirates",
    statements: [
      { text: "Pirates wore eye patches to keep one eye adjusted to darkness below deck.", real: true },
      { text: "The skull and crossbones flag is called a Jolly Roger.", real: true },
      { text: "Walking the plank was a common pirate punishment.", real: false }
    ],
    explanation: "Walking the plank is largely a fictional invention. Real pirates were more likely to maroon captives on islands or simply throw them overboard."
  },
  {
    topic: "Eyesight",
    statements: [
      { text: "Carrots improve your night vision.", real: false },
      { text: "Mantis shrimp can see more colors than humans.", real: true },
      { text: "Reading in dim light won't permanently damage your eyes.", real: true }
    ],
    explanation: "The carrot myth was British WWII propaganda to hide their radar technology. While carrots contain vitamin A (good for eyes), eating them won't give you better-than-normal vision."
  },
  {
    topic: "Gravity",
    statements: [
      { text: "You weigh slightly less at the equator than at the poles.", real: true },
      { text: "Astronauts in the ISS experience zero gravity.", real: false },
      { text: "Objects of different masses fall at the same rate in a vacuum.", real: true }
    ],
    explanation: "The ISS experiences about 90% of Earth's gravity. Astronauts float because they're in continuous free fall (orbit), not because there's no gravity."
  },
  {
    topic: "Olympics",
    statements: [
      { text: "The Olympic gold medal is mostly made of silver.", real: true },
      { text: "The youngest Olympic champion was 10 years old.", real: true },
      { text: "The Olympic rings represent the five original competing countries.", real: false }
    ],
    explanation: "The five rings represent the five continents (Africa, Americas, Asia, Europe, Oceania), not five countries. Every national flag contains at least one of the ring colors."
  },
  {
    topic: "Paper",
    statements: [
      { text: "You cannot fold a piece of paper in half more than 7 times.", real: false },
      { text: "Paper was invented in China around 105 AD.", real: true },
      { text: "US dollar bills are not made of paper — they're 75% cotton.", real: true }
    ],
    explanation: "The 7-fold limit has been debunked. In 2002, a high school student folded a single piece of paper 12 times. It requires exponentially more force, but it's possible."
  },
  {
    topic: "Birds",
    statements: [
      { text: "Crows can recognize and remember human faces.", real: true },
      { text: "Penguins can be found in Africa.", real: true },
      { text: "Ostriches bury their heads in the sand when frightened.", real: false }
    ],
    explanation: "Ostriches never bury their heads in sand. When threatened, they either run (at up to 45 mph) or lie flat with their neck on the ground, which from a distance can look like head-burying."
  },
  {
    topic: "Chocolate",
    statements: [
      { text: "White chocolate doesn't actually contain any cocoa solids.", real: true },
      { text: "The Aztecs used cacao beans as currency.", real: true },
      { text: "Chocolate was first consumed as a solid bar, not as a drink.", real: false }
    ],
    explanation: "Chocolate was consumed as a bitter drink for thousands of years before the first solid chocolate bar was created by Joseph Fry in 1847."
  },
  {
    topic: "Rivers",
    statements: [
      { text: "The Amazon River has no bridges crossing it.", real: true },
      { text: "Some rivers flow north, defying the common misconception that all rivers flow south.", real: true },
      { text: "The Nile is the longest river in the world by a wide margin.", real: false }
    ],
    explanation: "The Nile and Amazon are extremely close in length, and depending on the measurement method, the Amazon may actually be longer. The difference is under 200 miles."
  }
];
