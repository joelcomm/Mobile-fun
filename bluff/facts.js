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
  },
  {
    topic: "Bees",
    statements: [
      { text: "Honey bees can recognize human faces.", real: true },
      { text: "A single bee can visit up to 5,000 flowers in a day.", real: true },
      { text: "All bees die immediately after stinging.", real: false }
    ],
    explanation: "Only honey bees die after stinging because their barbed stingers tear from their bodies. Bumblebees and most other bee species can sting multiple times."
  },
  {
    topic: "The Sun",
    statements: [
      { text: "The Sun accounts for 99.86% of the total mass of the solar system.", real: true },
      { text: "Light from the Sun takes about 8 minutes to reach Earth.", real: true },
      { text: "The Sun is a yellow star.", real: false }
    ],
    explanation: "The Sun is actually a white star. It appears yellow from Earth because the atmosphere scatters blue light. From space, the Sun looks white."
  },
  {
    topic: "Cats",
    statements: [
      { text: "Cats spend about 70% of their lives sleeping.", real: true },
      { text: "A group of cats is called a 'clowder.'", real: true },
      { text: "Cats always land on their feet no matter the height.", real: false }
    ],
    explanation: "While cats have a righting reflex, very short falls don't give them time to rotate, and very high falls can still cause serious injuries despite landing feet-first."
  },
  {
    topic: "Mars",
    statements: [
      { text: "Mars has the tallest known mountain in the solar system — Olympus Mons.", real: true },
      { text: "A day on Mars is about 24 hours and 37 minutes.", real: true },
      { text: "Mars has a thick atmosphere similar to Earth's.", real: false }
    ],
    explanation: "Mars has an extremely thin atmosphere — about 1% the density of Earth's — composed mostly of carbon dioxide."
  },
  {
    topic: "Spiders",
    statements: [
      { text: "Spider silk is stronger than steel of the same thickness.", real: true },
      { text: "Most spiders have eight eyes.", real: true },
      { text: "The average person swallows 8 spiders per year in their sleep.", real: false }
    ],
    explanation: "This statistic was fabricated in 1993 by a columnist to demonstrate how quickly misinformation spreads. Spiders avoid sleeping humans."
  },
  {
    topic: "Antarctica",
    statements: [
      { text: "Antarctica has an active volcano called Mount Erebus.", real: true },
      { text: "Antarctica is the driest continent on Earth.", real: true },
      { text: "Polar bears live in Antarctica.", real: false }
    ],
    explanation: "Polar bears live only in the Arctic (North Pole region). Antarctica (South Pole) has penguins but no polar bears."
  },
  {
    topic: "Bones",
    statements: [
      { text: "Babies are born with about 300 bones, but adults have only 206.", real: true },
      { text: "The smallest bone in the body is in the ear.", real: true },
      { text: "Bones are the hardest material in the human body.", real: false }
    ],
    explanation: "Tooth enamel is actually harder than bone. Bones are strong and flexible, but enamel is the hardest substance in the human body."
  },
  {
    topic: "Satellites",
    statements: [
      { text: "There are over 7,000 active satellites orbiting Earth.", real: true },
      { text: "The International Space Station travels at about 17,500 mph.", real: true },
      { text: "GPS satellites are in geostationary orbit directly above the equator.", real: false }
    ],
    explanation: "GPS satellites orbit in medium Earth orbit at about 12,550 miles altitude with inclined orbits — not geostationary orbit, which is at 22,236 miles."
  },
  {
    topic: "Dogs",
    statements: [
      { text: "Dogs can smell certain diseases, including some cancers.", real: true },
      { text: "A dog's nose print is unique, like a human fingerprint.", real: true },
      { text: "Dogs see the world entirely in black and white.", real: false }
    ],
    explanation: "Dogs see in color, but their range is limited compared to humans. They see blues and yellows well but cannot distinguish red from green."
  },
  {
    topic: "Calendars",
    statements: [
      { text: "The month of September was originally the 7th month on the Roman calendar.", real: true },
      { text: "Julius Caesar introduced the leap year system.", real: true },
      { text: "A year is exactly 365 days long.", real: false }
    ],
    explanation: "A year is approximately 365.2422 days long. This is why we need leap years — to account for the extra roughly 6 hours per year."
  },
  {
    topic: "Frogs",
    statements: [
      { text: "Some frogs can freeze solid in winter and thaw back to life in spring.", real: true },
      { text: "The golden poison dart frog has enough toxin to kill 10 adult humans.", real: true },
      { text: "Frogs must drink water to stay hydrated.", real: false }
    ],
    explanation: "Frogs absorb water through their skin rather than drinking it. They have a special patch of skin on their belly called a 'drinking patch.'"
  },
  {
    topic: "Ice Cream",
    statements: [
      { text: "The ice cream cone was popularized at the 1904 World's Fair in St. Louis.", real: true },
      { text: "It takes about 50 licks to finish a single scoop of ice cream.", real: true },
      { text: "Vanilla is the least popular ice cream flavor worldwide.", real: false }
    ],
    explanation: "Vanilla is consistently the most popular ice cream flavor worldwide, not the least popular."
  },
  {
    topic: "Mountains",
    statements: [
      { text: "Mount Everest grows about 4 millimeters taller every year.", real: true },
      { text: "Mauna Kea in Hawaii is taller than Everest when measured from base to peak.", real: true },
      { text: "K2 has never been summited in winter.", real: false }
    ],
    explanation: "K2 was first summited in winter in January 2021 by a team of Nepalese climbers."
  },
  {
    topic: "Snakes",
    statements: [
      { text: "Snakes can sense vibrations through their jawbone.", real: true },
      { text: "Some snakes can fly — they glide through the air between trees.", real: true },
      { text: "Snakes dislocate their jaws to swallow large prey.", real: false }
    ],
    explanation: "Snakes don't dislocate their jaws. Their lower jaw consists of two separate bones connected by elastic ligaments, allowing them to stretch without any dislocation."
  },
  {
    topic: "Clouds",
    statements: [
      { text: "The average cumulus cloud weighs about 1.1 million pounds.", real: true },
      { text: "Clouds can form at ground level — that's what fog is.", real: true },
      { text: "Clouds are made of water vapor, which is why they look white.", real: false }
    ],
    explanation: "Clouds are made of tiny water droplets or ice crystals, not water vapor. Water vapor is invisible — the visible cloud forms when vapor condenses into droplets."
  },
  {
    topic: "Horses",
    statements: [
      { text: "Horses can sleep standing up.", real: true },
      { text: "A horse's hoof is essentially a single large toenail.", real: true },
      { text: "Horses can breathe through their mouths when running.", real: false }
    ],
    explanation: "Horses are obligate nasal breathers — they can only breathe through their noses. Unlike humans, they cannot breathe through their mouths."
  },
  {
    topic: "Salt",
    statements: [
      { text: "Roman soldiers were sometimes paid in salt, giving us the word 'salary.'", real: true },
      { text: "The human body contains about 250 grams of salt.", real: true },
      { text: "Sea salt is significantly healthier than table salt.", real: false }
    ],
    explanation: "Sea salt and table salt have the same basic nutritional value and sodium content. Sea salt may have trace minerals, but not in amounts that provide meaningful health benefits."
  },
  {
    topic: "Submarines",
    statements: [
      { text: "The first military submarine was used during the American Civil War.", real: true },
      { text: "Nuclear submarines can operate for over 20 years without refueling.", real: true },
      { text: "Submarines navigate primarily using sonar bounced off the ocean floor.", real: false }
    ],
    explanation: "Military submarines primarily use passive sonar (listening) to avoid detection. Active sonar (sending pings) reveals the submarine's position and is used sparingly."
  },
  {
    topic: "Castles",
    statements: [
      { text: "Japan has over 100 castles still standing today.", real: true },
      { text: "Medieval castle staircases spiraled clockwise to disadvantage right-handed attackers.", real: true },
      { text: "Moats around castles were always filled with water.", real: false }
    ],
    explanation: "Many moats were dry ditches rather than water-filled. Dry moats were still effective defensive barriers and were easier to maintain."
  },
  {
    topic: "Elephants",
    statements: [
      { text: "Elephants are the only animals that can't jump.", real: true },
      { text: "Elephants can hear through their feet via seismic vibrations.", real: true },
      { text: "Elephants have the best memory of any animal.", real: false }
    ],
    explanation: "While elephants have excellent memories, studies have shown that dolphins, chimpanzees, and Clark's nutcrackers may have equally impressive or superior memory in certain tasks."
  },
  {
    topic: "Diamonds",
    statements: [
      { text: "It rains diamonds on Jupiter and Saturn.", real: true },
      { text: "Diamonds can be burned and destroyed by fire.", real: true },
      { text: "Diamonds are the rarest gemstone on Earth.", real: false }
    ],
    explanation: "Diamonds are not particularly rare. Gemstones like tanzanite, alexandrite, and painite are far rarer. Diamond prices are largely controlled by supply management."
  },
  {
    topic: "Bacteria",
    statements: [
      { text: "There are more bacteria in your mouth than people on Earth.", real: true },
      { text: "Some bacteria can survive in space.", real: true },
      { text: "Antibacterial soap is significantly more effective than regular soap.", real: false }
    ],
    explanation: "Studies show regular soap is just as effective as antibacterial soap for everyday handwashing. The FDA banned certain antibacterial chemicals from consumer soaps in 2016."
  },
  {
    topic: "Bridges",
    statements: [
      { text: "The Golden Gate Bridge's color is officially called 'International Orange.'", real: true },
      { text: "London Bridge was sold and moved to Arizona in 1968.", real: true },
      { text: "The Brooklyn Bridge was the first bridge ever built using steel cables.", real: false }
    ],
    explanation: "While the Brooklyn Bridge was a pioneering steel-cable suspension bridge, earlier bridges had used steel wire, including the bridge at Niagara Falls designed by John Roebling's predecessor."
  },
  {
    topic: "Eyes",
    statements: [
      { text: "Your eyes can distinguish approximately 500 shades of gray.", real: true },
      { text: "Newborn babies can only see about 8-12 inches in front of them.", real: true },
      { text: "Brown eyes are actually blue underneath the brown pigment.", real: false }
    ],
    explanation: "While all eyes have melanin affecting color, brown eyes don't have a blue layer underneath. Laser procedures that claim to reveal blue beneath brown are altering the iris structure, not uncovering hidden blue pigment."
  },
  {
    topic: "Turtles",
    statements: [
      { text: "Some turtles can breathe through their butts.", real: true },
      { text: "Sea turtles can navigate using Earth's magnetic field.", real: true },
      { text: "Turtles can leave their shells if they outgrow them.", real: false }
    ],
    explanation: "A turtle's shell is fused to its spine and ribcage — it's part of their skeleton. They can never leave it or outgrow it."
  },
  {
    topic: "Airports",
    statements: [
      { text: "Denver International Airport is larger than the city of San Francisco.", real: true },
      { text: "Singapore's Changi Airport has a butterfly garden with over 1,000 butterflies.", real: true },
      { text: "The busiest airport in the world by passenger count is London Heathrow.", real: false }
    ],
    explanation: "Hartsfield-Jackson Atlanta International Airport has been the busiest airport by passenger count for over two decades, not London Heathrow."
  },
  {
    topic: "Ears",
    statements: [
      { text: "Your ears never stop growing throughout your life.", real: true },
      { text: "The inner ear contains the smallest muscles in the body.", real: true },
      { text: "Humans can only hear sounds between 20 Hz and 20,000 Hz from birth to death.", real: false }
    ],
    explanation: "While 20 Hz to 20,000 Hz is the typical range, the upper limit decreases significantly with age. Most adults over 50 can't hear above 12,000-14,000 Hz."
  },
  {
    topic: "Glaciers",
    statements: [
      { text: "Glaciers store about 69% of the world's fresh water.", real: true },
      { text: "Glacial ice can appear blue because it absorbs red light.", real: true },
      { text: "Glaciers only exist near the North and South Poles.", real: false }
    ],
    explanation: "Glaciers exist on every continent except Australia, including near the equator on high mountains like Mount Kilimanjaro in Tanzania and in the Andes in South America."
  },
  {
    topic: "Mushrooms",
    statements: [
      { text: "The largest living organism on Earth is a honey fungus in Oregon spanning 2,385 acres.", real: true },
      { text: "Mushrooms are more closely related to animals than to plants.", real: true },
      { text: "All brightly colored mushrooms are poisonous.", real: false }
    ],
    explanation: "Color is not a reliable indicator of toxicity. Many brightly colored mushrooms like chanterelles are edible, while the deadly destroying angel mushroom is plain white."
  },
  {
    topic: "Oceans Creatures",
    statements: [
      { text: "The giant squid has the largest eyes of any living creature.", real: true },
      { text: "Jellyfish have been around for over 500 million years — predating dinosaurs.", real: true },
      { text: "Starfish have a brain located in the center of their body.", real: false }
    ],
    explanation: "Starfish have no brain at all. They have a decentralized nervous system with a nerve ring and radial nerves, but no central brain."
  },
  {
    topic: "Clocks",
    statements: [
      { text: "Big Ben is actually the name of the bell, not the clock tower.", real: true },
      { text: "The first mechanical clocks had no minute hands — only hour hands.", real: true },
      { text: "Sundials work the same way in both hemispheres.", real: false }
    ],
    explanation: "Sundials must be designed differently for each hemisphere. In the Northern Hemisphere shadows move clockwise, but in the Southern Hemisphere they move counterclockwise."
  },
  {
    topic: "Skin",
    statements: [
      { text: "Your skin is the largest organ of your body.", real: true },
      { text: "Humans shed about 1.5 million skin cells every hour.", real: true },
      { text: "Fingerprints provide improved grip — that's their primary function.", real: false }
    ],
    explanation: "Research shows fingerprints actually reduce friction in many cases. Their primary function appears to be enhancing touch sensitivity by amplifying vibrations."
  },
  {
    topic: "Railroads",
    statements: [
      { text: "The Trans-Siberian Railway crosses 8 time zones.", real: true },
      { text: "The first underground railway opened in London in 1863.", real: true },
      { text: "Standard railroad gauge was based on the width of Roman chariot wheels.", real: false }
    ],
    explanation: "This is a popular myth. Standard gauge (4 feet 8.5 inches) was based on the width used by early colliery tramways in England, not Roman chariots."
  },
  {
    topic: "Coral Reefs",
    statements: [
      { text: "Coral reefs support about 25% of all marine species.", real: true },
      { text: "Coral is an animal, not a plant.", real: true },
      { text: "The Great Barrier Reef can be seen from the Moon.", real: false }
    ],
    explanation: "The Great Barrier Reef is visible from low Earth orbit (e.g., the ISS) but cannot be seen from the Moon, which is about 240,000 miles away."
  },
  {
    topic: "Penguins",
    statements: [
      { text: "Emperor penguins can dive to depths of over 1,800 feet.", real: true },
      { text: "Male emperor penguins incubate the eggs while females hunt.", real: true },
      { text: "Penguins mate for life without exception.", real: false }
    ],
    explanation: "While some penguin species show high partner fidelity, many penguins change partners between breeding seasons. Emperor penguins have only about an 85% reunion rate."
  },
  {
    topic: "Metals",
    statements: [
      { text: "Gallium metal will melt in your hand because its melting point is 85.6°F.", real: true },
      { text: "Titanium is as strong as steel but nearly 45% lighter.", real: true },
      { text: "Mercury is the only metal that is liquid at room temperature.", real: false }
    ],
    explanation: "Gallium also melts at near room temperature (85.6°F / 29.8°C), and francium and cesium are also liquid at slightly above room temperature."
  },
  {
    topic: "Astronauts",
    statements: [
      { text: "Astronauts can grow up to 2 inches taller in space.", real: true },
      { text: "Astronauts report that space smells like seared steak and gunpowder.", real: true },
      { text: "Astronauts must be under 40 years old to be selected by NASA.", real: false }
    ],
    explanation: "NASA has no age limit for astronaut candidates. John Glenn flew on the Space Shuttle at age 77, and many astronauts have been selected well over 40."
  },
  {
    topic: "Wine",
    statements: [
      { text: "The oldest known wine cellar is about 6,000 years old, found in Armenia.", real: true },
      { text: "There are more than 10,000 grape varieties used for winemaking worldwide.", real: true },
      { text: "Red wine should always be served at room temperature.", real: false }
    ],
    explanation: "'Room temperature' for red wine originally meant 60-65°F in European cellars, not modern heated rooms. Most red wines benefit from slight chilling below today's typical room temperature."
  },
  {
    topic: "Tornadoes",
    statements: [
      { text: "Tornadoes can occur on every continent except Antarctica.", real: false },
      { text: "The United States experiences more tornadoes than any other country.", real: true },
      { text: "A tornado's wind speed can exceed 300 mph.", real: true }
    ],
    explanation: "Tornadoes have been documented on every continent, including Antarctica. A tornado was recorded at a British research station in Antarctica in 2009."
  },
  {
    topic: "Batteries",
    statements: [
      { text: "The Baghdad Battery, dating to around 250 BC, may be an ancient electrochemical cell.", real: true },
      { text: "Lithium-ion batteries can catch fire if punctured or overcharged.", real: true },
      { text: "Storing batteries in the refrigerator significantly extends their life.", real: false }
    ],
    explanation: "Modern alkaline and lithium batteries do not benefit significantly from refrigeration. Cold temperatures can actually reduce their performance temporarily."
  },
  {
    topic: "Tigers",
    statements: [
      { text: "Every tiger has a unique pattern of stripes, like fingerprints.", real: true },
      { text: "A tiger's skin is also striped, not just its fur.", real: true },
      { text: "There are more wild tigers than captive tigers.", real: false }
    ],
    explanation: "There are estimated to be around 4,500 wild tigers but approximately 8,000 or more in captivity worldwide, with a large number in the United States alone."
  },
  {
    topic: "The Vatican",
    statements: [
      { text: "Vatican City is the smallest country in the world.", real: true },
      { text: "The Vatican has its own telescope and astronomical observatory.", real: true },
      { text: "The Vatican has the highest crime rate per capita of any country.", real: false }
    ],
    explanation: "While raw statistics might suggest this due to its tiny population and large tourist numbers, the 'crimes' are mostly petty theft by visitors — it's statistically misleading to call it the highest crime rate."
  },
  {
    topic: "Hair",
    statements: [
      { text: "A single strand of hair can support about 3.5 ounces of weight.", real: true },
      { text: "Hair grows faster in warm weather than in cold weather.", real: true },
      { text: "Shaving makes hair grow back thicker and darker.", real: false }
    ],
    explanation: "Shaving has no effect on hair thickness, color, or rate of growth. Stubble feels coarser because the blunt cut tip is more noticeable than a natural tapered end."
  },
  {
    topic: "Tea",
    statements: [
      { text: "Tea is the most consumed beverage in the world after water.", real: true },
      { text: "All types of tea (black, green, white, oolong) come from the same plant.", real: true },
      { text: "Herbal tea is technically a type of tea.", real: false }
    ],
    explanation: "Herbal 'tea' is not true tea — it's an infusion (tisane) of herbs, spices, or other plants. True tea comes only from the Camellia sinensis plant."
  },
  {
    topic: "Radio",
    statements: [
      { text: "The first radio broadcast of a presidential election was in 1920.", real: true },
      { text: "Radio signals travel at the speed of light.", real: true },
      { text: "FM radio was invented before AM radio.", real: false }
    ],
    explanation: "AM (amplitude modulation) radio came first, with regular broadcasts starting in the early 1920s. FM (frequency modulation) was developed later by Edwin Armstrong in the 1930s."
  },
  {
    topic: "Caves",
    statements: [
      { text: "The longest known cave system is Mammoth Cave in Kentucky at over 420 miles.", real: true },
      { text: "Cave-dwelling creatures can lose their eyesight over generations.", real: true },
      { text: "Stalactites grow from the ground up in caves.", real: false }
    ],
    explanation: "Stalactites grow from the ceiling down. Stalagmites grow from the ground up. A helpful mnemonic: stalactites hold 'tight' to the ceiling."
  },
  {
    topic: "Crocodiles",
    statements: [
      { text: "Crocodiles can go over a year without eating.", real: true },
      { text: "Crocodiles have the strongest bite force of any living animal.", real: true },
      { text: "Crocodiles can gallop at speeds over 30 mph on land.", real: false }
    ],
    explanation: "While some crocodile species can gallop briefly, their top speed on land is about 11 mph. They are ambush predators that rely on short bursts, not sustained speed."
  },
  {
    topic: "Oil",
    statements: [
      { text: "Crude oil is used to make aspirin and many other medications.", real: true },
      { text: "The first commercial oil well was drilled in Pennsylvania in 1859.", real: true },
      { text: "Oil is made from decomposed dinosaur remains.", real: false }
    ],
    explanation: "Oil is primarily formed from ancient marine organisms like plankton and algae, not dinosaurs. These organisms died and were buried on ocean floors millions of years before many dinosaurs existed."
  },
  {
    topic: "Eggs",
    statements: [
      { text: "The color of a chicken's egg is determined by the breed of the hen.", real: true },
      { text: "China produces more eggs than any other country in the world.", real: true },
      { text: "Brown eggs are more nutritious than white eggs.", real: false }
    ],
    explanation: "Brown and white eggs have virtually identical nutritional profiles. Shell color is determined by the hen's breed and has no effect on taste or nutrition."
  },
  {
    topic: "Migration",
    statements: [
      { text: "Arctic terns migrate from pole to pole, traveling about 44,000 miles annually.", real: true },
      { text: "Monarch butterflies migrate up to 3,000 miles each fall.", real: true },
      { text: "All birds migrate south for the winter.", real: false }
    ],
    explanation: "Many bird species are non-migratory (resident birds) and stay in the same area year-round. Examples include cardinals, chickadees, and many owl species."
  },
  {
    topic: "Potatoes",
    statements: [
      { text: "Potatoes were the first food grown in space.", real: true },
      { text: "There are over 4,000 varieties of potatoes worldwide.", real: true },
      { text: "Potatoes are root vegetables like carrots.", real: false }
    ],
    explanation: "Potatoes are tubers (modified stems that grow underground), not true roots. Carrots and sweet potatoes are root vegetables, but regular potatoes are stem tubers."
  },
  {
    topic: "Atoms",
    statements: [
      { text: "Atoms are 99.9999% empty space.", real: true },
      { text: "There are more atoms in a glass of water than glasses of water in all Earth's oceans.", real: true },
      { text: "Atoms are the smallest possible unit of matter — nothing is smaller.", real: false }
    ],
    explanation: "Atoms are made of smaller subatomic particles: protons, neutrons, and electrons. Protons and neutrons are further composed of quarks."
  },
  {
    topic: "Board Games",
    statements: [
      { text: "Chess originated in India around the 6th century.", real: true },
      { text: "The game of Monopoly was originally designed to teach about the dangers of monopolies.", real: true },
      { text: "Scrabble was invented in France in the 1800s.", real: false }
    ],
    explanation: "Scrabble was invented in the United States by Alfred Mosher Butts during the Great Depression in the 1930s, not in France."
  },
  {
    topic: "Rainforests",
    statements: [
      { text: "The Amazon Rainforest produces about 6% of the world's oxygen.", real: true },
      { text: "One-quarter of all modern medicines originated from rainforest plants.", real: true },
      { text: "The Amazon Rainforest produces 20% of the world's oxygen, called 'the lungs of the Earth.'", real: false }
    ],
    explanation: "The '20% of the world's oxygen' claim is a popular misconception. The Amazon produces roughly 6% — and it also consumes nearly the same amount through decomposition."
  },
  {
    topic: "Maps",
    statements: [
      { text: "Africa appears much smaller on most world maps than it actually is.", real: true },
      { text: "Greenland is shown on Mercator maps as roughly the size of Africa, though Africa is 14 times larger.", real: true },
      { text: "North is always at the top of maps because of a natural law of geography.", real: false }
    ],
    explanation: "Placing north at the top is a convention, not a rule. Many historical maps placed south or east at the top. The convention became standard largely because of European mapmakers."
  },
  {
    topic: "Vaccines",
    statements: [
      { text: "The first vaccine was developed for smallpox by Edward Jenner in 1796.", real: true },
      { text: "Vaccines have led to the complete eradication of smallpox.", real: true },
      { text: "Vaccines work by injecting a full-strength version of the disease.", real: false }
    ],
    explanation: "Vaccines use weakened, inactivated, or partial versions of pathogens — or just their proteins/mRNA — to train the immune system without causing the actual disease."
  },
  {
    topic: "Bamboo",
    statements: [
      { text: "Some bamboo species can grow up to 35 inches in a single day.", real: true },
      { text: "Bamboo is actually a type of grass, not a tree.", real: true },
      { text: "Bamboo only grows in tropical climates.", real: false }
    ],
    explanation: "While many bamboo species thrive in tropical climates, some species grow in cold regions, surviving temperatures below -20°F. Hardy bamboo grows in parts of the northern US and Europe."
  },
  {
    topic: "Magnets",
    statements: [
      { text: "Earth is essentially a giant magnet with a magnetic field.", real: true },
      { text: "If you break a magnet in half, you get two smaller magnets, each with a north and south pole.", real: true },
      { text: "Magnets lose their magnetism permanently when dropped.", real: false }
    ],
    explanation: "While dropping a magnet can weaken it slightly, it doesn't permanently demagnetize it. Magnets lose magnetism primarily through high heat (above their Curie temperature) or strong opposing magnetic fields."
  },
  {
    topic: "Languages of the World",
    statements: [
      { text: "Papua New Guinea has over 840 languages — the most of any country.", real: true },
      { text: "Mandarin Chinese has more native speakers than any other language.", real: true },
      { text: "English is the official language of the United States.", real: false }
    ],
    explanation: "The United States has no official language at the federal level. While English is the most widely spoken language, it has never been designated as the official language by law."
  },
  {
    topic: "Glass",
    statements: [
      { text: "Glass is 100% recyclable and can be recycled endlessly without loss of quality.", real: true },
      { text: "Lightning can create natural glass tubes called fulgurites when it strikes sand.", real: true },
      { text: "Glass is a liquid that flows very slowly over centuries.", real: false }
    ],
    explanation: "Glass is an amorphous solid, not a slow-moving liquid. The myth arose from old windowpanes being thicker at the bottom, but that's due to the manufacturing process, not flow."
  },
  {
    topic: "Perfume",
    statements: [
      { text: "Ambergris, a key perfume ingredient, comes from sperm whale intestines.", real: true },
      { text: "Chanel No. 5 was one of the first perfumes to use synthetic ingredients.", real: true },
      { text: "Perfume lasts longer when applied to clothing rather than skin.", real: false }
    ],
    explanation: "Perfume actually develops and diffuses better on skin because body heat activates the fragrance oils. On clothing, the scent doesn't evolve through its notes as intended."
  },
  {
    topic: "Sign Language",
    statements: [
      { text: "American Sign Language and British Sign Language are completely different languages.", real: true },
      { text: "Sign languages have their own grammar, which differs from spoken languages.", real: true },
      { text: "There is one universal sign language used by deaf people worldwide.", real: false }
    ],
    explanation: "There are over 300 different sign languages around the world. Each has its own vocabulary and grammar. Even countries sharing a spoken language often have different sign languages."
  },
  {
    topic: "Honey",
    statements: [
      { text: "A single bee produces only about 1/12 of a teaspoon of honey in its lifetime.", real: true },
      { text: "Bees must visit about 2 million flowers to make one pound of honey.", real: true },
      { text: "Honey is safe for infants under one year old.", real: false }
    ],
    explanation: "Honey can contain Clostridium botulinum spores, which can cause infant botulism in babies under 12 months whose digestive systems aren't mature enough to handle them."
  },
  {
    topic: "Black Holes",
    statements: [
      { text: "The first image of a black hole was captured in 2019.", real: true },
      { text: "Time slows down near a black hole due to gravitational time dilation.", real: true },
      { text: "Black holes suck in everything around them like cosmic vacuum cleaners.", real: false }
    ],
    explanation: "Black holes don't actively suck things in. Objects must cross the event horizon to be trapped. At a distance, a black hole's gravitational pull is the same as any object of equal mass."
  },
  {
    topic: "Martial Arts",
    statements: [
      { text: "Judo became the first martial art included in the Olympic Games in 1964.", real: true },
      { text: "Bruce Lee was so fast that they had to slow down film to capture his moves.", real: true },
      { text: "Karate originated in China.", real: false }
    ],
    explanation: "Karate originated in Okinawa, which is now part of Japan. While it was influenced by Chinese martial arts, karate itself developed in the Ryukyu Kingdom (Okinawa)."
  },
  {
    topic: "Waterfalls",
    statements: [
      { text: "Angel Falls in Venezuela is the tallest uninterrupted waterfall in the world.", real: true },
      { text: "Niagara Falls has been artificially turned off twice for engineering studies.", real: true },
      { text: "Victoria Falls is the widest waterfall in the world.", real: false }
    ],
    explanation: "Khone Phapheng Falls in Laos is the widest waterfall in the world at about 35,376 feet wide. Victoria Falls, while very wide at 5,604 feet, is not the widest."
  },
  {
    topic: "Printing",
    statements: [
      { text: "The Gutenberg Bible was the first major book printed with movable type in Europe.", real: true },
      { text: "Printer ink is one of the most expensive liquids in the world by volume.", real: true },
      { text: "Gutenberg invented the concept of movable type printing.", real: false }
    ],
    explanation: "Movable type was invented in China by Bi Sheng around 1040, about 400 years before Gutenberg. Gutenberg independently developed his system for the Latin alphabet."
  },
  {
    topic: "Wolves",
    statements: [
      { text: "Wolves can hear sounds up to 10 miles away in open terrain.", real: true },
      { text: "The reintroduction of wolves to Yellowstone changed the course of rivers.", real: true },
      { text: "Wolf packs are led by an 'alpha' male through dominance fights.", real: false }
    ],
    explanation: "The 'alpha wolf' concept was debunked by the same researcher who originally proposed it. Wild wolf packs are family units led by the breeding parents, not by dominance hierarchies."
  },
  {
    topic: "Cotton",
    statements: [
      { text: "Cotton has been cultivated for over 7,000 years.", real: true },
      { text: "It takes about 700 gallons of water to produce one cotton T-shirt.", real: true },
      { text: "Cotton is the most widely used fabric in the world because it's the strongest natural fiber.", real: false }
    ],
    explanation: "Cotton is popular for comfort and breathability, but it's not the strongest natural fiber. Silk, hemp, and flax (linen) are all stronger than cotton."
  },
  {
    topic: "Pollution",
    statements: [
      { text: "The Great Pacific Garbage Patch is roughly twice the size of Texas.", real: true },
      { text: "Air pollution kills more people annually than car accidents worldwide.", real: true },
      { text: "The ozone hole has been getting steadily larger since the 1990s.", real: false }
    ],
    explanation: "The ozone hole has actually been shrinking since the Montreal Protocol banned CFCs in 1987. Scientists expect it to recover to 1980 levels by around 2060-2070."
  },
  {
    topic: "Oranges",
    statements: [
      { text: "Brazil produces more oranges than any other country in the world.", real: true },
      { text: "Oranges are a hybrid between pomelos and mandarins.", real: true },
      { text: "Florida produces more oranges than California because it has better soil for citrus.", real: false }
    ],
    explanation: "Florida produces more oranges primarily because of its warm, humid climate — not better soil. California's drier climate is actually better suited for other citrus varieties."
  },
  {
    topic: "Sound",
    statements: [
      { text: "Sound travels about 4 times faster in water than in air.", real: true },
      { text: "The loudest natural sound ever recorded was the eruption of Krakatoa in 1883.", real: true },
      { text: "The speed of sound is constant regardless of temperature.", real: false }
    ],
    explanation: "The speed of sound varies with temperature. In air, it increases by about 0.6 m/s for every degree Celsius rise. At 0°C it's 331 m/s; at 20°C it's 343 m/s."
  },
  {
    topic: "Owls",
    statements: [
      { text: "Owls cannot move their eyeballs — they must turn their entire head to look around.", real: true },
      { text: "Owls can rotate their heads up to 270 degrees.", real: true },
      { text: "Owls are the wisest of all birds.", real: false }
    ],
    explanation: "Despite their reputation, owls are not particularly intelligent compared to other birds. Crows, ravens, and parrots consistently outperform owls in cognitive tests."
  },
  {
    topic: "Soap",
    statements: [
      { text: "The ancient Babylonians were making soap around 2800 BC.", real: true },
      { text: "Soap works by breaking apart the lipid membranes of bacteria and viruses.", real: true },
      { text: "Bar soap harbors bacteria and can spread germs between users.", real: false }
    ],
    explanation: "Studies show that bacteria on bar soap do not transfer to users. The mechanical action of washing rinses bacteria away, making bar soap safe for shared use."
  },
  {
    topic: "Lakes",
    statements: [
      { text: "Lake Baikal in Russia holds about 20% of the world's unfrozen fresh surface water.", real: true },
      { text: "The Dead Sea is actually a lake, not a sea.", real: true },
      { text: "The Great Lakes contain half of the world's fresh water.", real: false }
    ],
    explanation: "The Great Lakes hold about 21% of the world's surface fresh water, not half. Ice caps and glaciers hold far more fresh water overall."
  },
  {
    topic: "Camels",
    statements: [
      { text: "Camels store fat in their humps, not water.", real: true },
      { text: "Camels can drink up to 40 gallons of water in one sitting.", real: true },
      { text: "Camels originated in the Middle East.", real: false }
    ],
    explanation: "Camels actually originated in North America about 45 million years ago. They migrated to Asia and Africa via land bridges and later went extinct in North America."
  },
  {
    topic: "Nails",
    statements: [
      { text: "Fingernails grow faster on your dominant hand.", real: true },
      { text: "Nails are made of the same protein (keratin) as hair.", real: true },
      { text: "Nails continue to grow after death.", real: false }
    ],
    explanation: "Nails do not grow after death. The skin around them dehydrates and retracts, which makes the nails appear longer — creating the illusion of growth."
  },
  {
    topic: "Compass",
    statements: [
      { text: "The magnetic north pole moves and is currently drifting toward Siberia.", real: true },
      { text: "The Chinese invented the first compass around 200 BC for feng shui.", real: true },
      { text: "A compass needle points to true geographic north.", real: false }
    ],
    explanation: "A compass points to magnetic north, not true geographic north. The two are different locations, and the angular difference between them is called magnetic declination."
  },
  {
    topic: "Fireworks",
    statements: [
      { text: "Fireworks were invented in China over 2,000 years ago.", real: true },
      { text: "The different colors in fireworks come from different metal compounds.", real: true },
      { text: "Italy invented modern aerial firework displays in the 15th century.", real: false }
    ],
    explanation: "While Italy contributed to the development of aerial fireworks, modern pyrotechnics were developed over centuries across multiple cultures. The Chinese were creating aerial displays centuries before Europeans."
  },
  {
    topic: "Vitamins",
    statements: [
      { text: "Vitamin D is technically a hormone, not a vitamin.", real: true },
      { text: "Sailors used to get scurvy from a lack of vitamin C.", real: true },
      { text: "Taking extra vitamin C will prevent you from catching a cold.", real: false }
    ],
    explanation: "Studies show that extra vitamin C does not prevent colds. It may slightly reduce the duration of a cold once you have one, but it won't stop you from getting sick."
  },
  {
    topic: "Kites",
    statements: [
      { text: "Kites have been used for over 2,800 years, originating in China.", real: true },
      { text: "Kites were used in World War II for anti-aircraft target practice.", real: true },
      { text: "The Wright Brothers got the idea for airplane wings by watching kites fly.", real: false }
    ],
    explanation: "The Wright Brothers studied birds in flight, not kites, as inspiration for wing design. While they did use kite-like models for testing, the wing concept came from observing bird flight."
  },
  {
    topic: "Sloths",
    statements: [
      { text: "Sloths can hold their breath underwater for up to 40 minutes.", real: true },
      { text: "Sloths only go to the ground to defecate, roughly once a week.", real: true },
      { text: "Sloths are slow because they are lazy and have low energy.", real: false }
    ],
    explanation: "Sloths are slow due to their extremely low-calorie leaf diet and efficient energy conservation — not laziness. Their slow metabolism is an adaptation, not a character flaw."
  },
  {
    topic: "Cloning",
    statements: [
      { text: "Dolly the Sheep, the first cloned mammal, was born in 1996.", real: true },
      { text: "Scientists have successfully cloned endangered species like the black-footed ferret.", real: true },
      { text: "Cloned animals are always perfect genetic copies with no differences from the original.", real: false }
    ],
    explanation: "Cloned animals can differ due to epigenetic changes, mitochondrial DNA from the egg cell, and environmental factors during development. Even Dolly aged faster than normal sheep."
  },
  {
    topic: "Wonders of the World",
    statements: [
      { text: "The Great Pyramid of Giza is the only ancient wonder still standing.", real: true },
      { text: "The Colossus of Rhodes stood for only 54 years before being destroyed by an earthquake.", real: true },
      { text: "The Hanging Gardens of Babylon have been confirmed by archaeological evidence.", real: false }
    ],
    explanation: "The Hanging Gardens of Babylon have never been definitively located or confirmed by archaeology. Some historians even doubt they existed at all, or suggest they were in Nineveh instead."
  },
  {
    topic: "Octopuses",
    statements: [
      { text: "Octopuses have blue blood.", real: true },
      { text: "Some octopuses can edit their own RNA to adapt to cold water.", real: true },
      { text: "Octopuses have 10 brains — one for each tentacle plus two central ones.", real: false }
    ],
    explanation: "Octopuses have 9 brains — one central brain and eight smaller ones, one at the base of each arm. They have 8 arms, not 10."
  },
  {
    topic: "Volcanoes of the Solar System",
    statements: [
      { text: "Jupiter's moon Io is the most volcanically active body in the solar system.", real: true },
      { text: "Olympus Mons on Mars is about 2.5 times the height of Mount Everest.", real: true },
      { text: "Venus has no volcanic activity because it lacks tectonic plates.", real: false }
    ],
    explanation: "Venus has extensive volcanic features and may still have active volcanism today. Recent data from the Magellan spacecraft suggested ongoing eruptions."
  },
  {
    topic: "Cheese Making",
    statements: [
      { text: "Traditional mozzarella is made from water buffalo milk, not cow's milk.", real: true },
      { text: "Roquefort cheese is aged in natural limestone caves in France.", real: true },
      { text: "Swiss cheese gets its holes from bacteria releasing hydrogen gas during aging.", real: false }
    ],
    explanation: "Swiss cheese holes were long attributed to bacteria, but research from 2015 found they're actually caused by tiny hay particles that fall into milk during traditional milking."
  },
  {
    topic: "Blood",
    statements: [
      { text: "Coconut water can be used as an emergency IV fluid substitute.", real: true },
      { text: "Horseshoe crab blood is used to test the safety of medical equipment.", real: true },
      { text: "Deoxygenated blood is blue, which is why veins appear blue through the skin.", real: false }
    ],
    explanation: "Blood is never blue — it ranges from bright red (oxygenated) to dark red (deoxygenated). Veins appear blue because of how light penetrates and is absorbed by skin."
  },
  {
    topic: "Submarines in History",
    statements: [
      { text: "The H.L. Hunley was the first submarine to sink an enemy warship during the Civil War.", real: true },
      { text: "Germany's U-boats sank over 2,700 Allied ships during World War I.", real: true },
      { text: "The first submarine voyage under the North Pole ice was powered by diesel engines.", real: false }
    ],
    explanation: "The USS Nautilus, the first submarine to travel under the North Pole ice in 1958, was nuclear-powered — the world's first operational nuclear submarine."
  },
  {
    topic: "Butterflies",
    statements: [
      { text: "Butterflies can see ultraviolet light that humans cannot.", real: true },
      { text: "The Atlas moth has wing tips that resemble snake heads to deter predators.", real: true },
      { text: "Butterflies live for only 24 hours.", real: false }
    ],
    explanation: "Most butterfly species live for 2 to 4 weeks. Some, like monarchs, can live up to 9 months during their migratory generation."
  },
  {
    topic: "Coffee Varieties",
    statements: [
      { text: "Kopi luwak coffee is made from beans eaten and excreted by a civet cat.", real: true },
      { text: "Coffee is actually a fruit — the bean is the seed of a cherry-like berry.", real: true },
      { text: "Decaffeinated coffee contains absolutely zero caffeine.", real: false }
    ],
    explanation: "Decaf coffee still contains a small amount of caffeine — typically 2-15 mg per cup, compared to about 95 mg in a regular cup."
  },
  {
    topic: "Ancient Egypt",
    statements: [
      { text: "Ancient Egyptians used moldy bread as a treatment for infected wounds.", real: true },
      { text: "The Great Pyramid was the tallest man-made structure for over 3,800 years.", real: true },
      { text: "Only pharaohs and royalty were mummified in ancient Egypt.", real: false }
    ],
    explanation: "While elaborate mummification was reserved for the wealthy, many ordinary Egyptians were also mummified. Even animals like cats and ibises were mummified."
  },
  {
    topic: "Fruits",
    statements: [
      { text: "Strawberries are not technically berries, but avocados are.", real: true },
      { text: "A pineapple takes about 2-3 years to grow from planting to harvest.", real: true },
      { text: "Apples are native to North America.", real: false }
    ],
    explanation: "Apples originated in Central Asia, specifically in the region of modern-day Kazakhstan. They were brought to North America by European colonists."
  },
  {
    topic: "Skeletons",
    statements: [
      { text: "One-quarter of all your bones are in your feet.", real: true },
      { text: "The hyoid bone in your throat is the only bone not connected to another bone.", real: true },
      { text: "Humans and giraffes have different numbers of neck vertebrae.", real: false }
    ],
    explanation: "Both humans and giraffes have exactly 7 cervical (neck) vertebrae. Giraffe vertebrae are just much, much longer."
  },
  {
    topic: "Pasta",
    statements: [
      { text: "There are over 600 known shapes of pasta.", real: true },
      { text: "Pasta was a staple food in Italy for centuries before tomato sauce was introduced.", real: true },
      { text: "Marco Polo brought pasta to Italy from China.", real: false }
    ],
    explanation: "This is a popular myth. Pasta existed in Italy before Marco Polo's travels to China. Arab traders likely introduced dried pasta to Sicily centuries earlier."
  },
  {
    topic: "Earthquakes in History",
    statements: [
      { text: "The 1906 San Francisco earthquake caused fires that burned for three days.", real: true },
      { text: "The deadliest earthquake in recorded history occurred in China in 1556, killing about 830,000 people.", real: true },
      { text: "Scientists can now accurately predict earthquakes days in advance.", real: false }
    ],
    explanation: "Despite decades of research, scientists still cannot predict when, where, or how large an earthquake will be. They can only estimate probabilities over longer time periods."
  },
  {
    topic: "Apples",
    statements: [
      { text: "There are over 7,500 varieties of apples grown worldwide.", real: true },
      { text: "Apple seeds contain amygdalin, which can release cyanide when metabolized.", real: true },
      { text: "An apple a day has been scientifically proven to keep the doctor away.", real: false }
    ],
    explanation: "While apples are nutritious, the saying 'an apple a day keeps the doctor away' is a folk proverb, not a scientifically proven medical fact."
  },
  {
    topic: "Volcanoes and Civilization",
    statements: [
      { text: "The eruption of Mount Tambora in 1815 caused the 'Year Without a Summer' in 1816.", real: true },
      { text: "Pompeii was buried under volcanic ash so quickly that many victims were preserved in place.", real: true },
      { text: "Yellowstone's supervolcano is overdue for an eruption.", real: false }
    ],
    explanation: "Geologists say Yellowstone is not 'overdue.' Volcanic eruptions don't follow strict schedules, and the probability of an eruption in any given year is about 1 in 730,000."
  },
  {
    topic: "The Sahara",
    statements: [
      { text: "The Sahara was green and lush with vegetation about 6,000 years ago.", real: true },
      { text: "Sand dunes make up only about 25% of the Sahara — most of it is rocky plateau.", real: true },
      { text: "The Sahara has always been a desert for millions of years.", real: false }
    ],
    explanation: "The Sahara cycles between wet and dry periods roughly every 20,000 years due to changes in Earth's orbit. Rock art in the Sahara depicts hippos, crocodiles, and lush grasslands."
  },
  {
    topic: "Robots",
    statements: [
      { text: "The word 'robot' comes from the Czech word 'robota,' meaning forced labor.", real: true },
      { text: "The first industrial robot was installed in a General Motors factory in 1961.", real: true },
      { text: "Japan has more robots than people in its workforce.", real: false }
    ],
    explanation: "While Japan leads in robotic technology, robots are still vastly outnumbered by human workers. Japan has about 400,000 industrial robots versus a workforce of over 60 million."
  },
  {
    topic: "Canals",
    statements: [
      { text: "The Panama Canal uses a system of locks to raise and lower ships 85 feet.", real: true },
      { text: "Ships traveling through the Suez Canal don't need locks because the sea level is the same on both ends.", real: true },
      { text: "The Panama Canal runs east to west across Panama.", real: false }
    ],
    explanation: "Due to the S-shape of the isthmus, the Panama Canal actually runs roughly north to south. Ships entering from the Atlantic travel southeast to reach the Pacific."
  },
  {
    topic: "Pigeons",
    statements: [
      { text: "Pigeons can recognize themselves in mirrors, a sign of self-awareness.", real: true },
      { text: "Pigeons were used to carry messages in both World Wars and saved thousands of lives.", real: true },
      { text: "Pigeons are one of the least intelligent bird species.", real: false }
    ],
    explanation: "Pigeons are remarkably intelligent. They can learn abstract numerical rules, categorize objects, and even distinguish between paintings by Monet and Picasso."
  },
  {
    topic: "Sleep Habits",
    statements: [
      { text: "Giraffes sleep only about 30 minutes per day in short naps.", real: true },
      { text: "Koalas sleep up to 22 hours a day to conserve energy from their low-nutrient diet.", real: true },
      { text: "Fish never sleep because they have no eyelids.", real: false }
    ],
    explanation: "Fish do sleep — they enter restful states with reduced activity and metabolism. They don't need eyelids because water keeps their eyes moist."
  },
  {
    topic: "Satellites and GPS",
    statements: [
      { text: "GPS satellites must account for Einstein's relativity to stay accurate.", real: true },
      { text: "Sputnik, the first artificial satellite, was only the size of a beach ball.", real: true },
      { text: "GPS was invented by a private company, not the military.", real: false }
    ],
    explanation: "GPS was developed by the U.S. Department of Defense for military navigation. It was made freely available for civilian use by President Reagan in 1983 after a civilian airline disaster."
  },
  {
    topic: "Volcanism on Earth",
    statements: [
      { text: "About 75% of Earth's active volcanoes are located along the Pacific Ring of Fire.", real: true },
      { text: "Iceland sits on the Mid-Atlantic Ridge, making it one of the most volcanically active places on Earth.", real: true },
      { text: "Volcanic eruptions always produce hot lava flows.", real: false }
    ],
    explanation: "Not all eruptions produce lava flows. Many eruptions are explosive, producing ash clouds, pyroclastic flows, and lahars (volcanic mudflows) instead of flowing lava."
  },
  {
    topic: "Rice",
    statements: [
      { text: "Rice feeds more than half of the world's population.", real: true },
      { text: "There are over 40,000 varieties of rice worldwide.", real: true },
      { text: "Throwing rice at weddings is banned because it harms birds who eat it.", real: false }
    ],
    explanation: "This is a myth. Rice does not harm birds — they eat uncooked rice regularly in the wild. The ban at some venues is about cleanup, not bird safety."
  },
  {
    topic: "Renaissance",
    statements: [
      { text: "Leonardo da Vinci could write with one hand while drawing with the other.", real: true },
      { text: "The Renaissance started in Florence, Italy, in the 14th century.", real: true },
      { text: "Leonardo da Vinci and Michelangelo were close friends and collaborators.", real: false }
    ],
    explanation: "Da Vinci and Michelangelo were actually bitter rivals who publicly criticized each other's work. Their rivalry was well-documented in Renaissance Florence."
  },
  {
    topic: "Platelets",
    statements: [
      { text: "Your body produces about 200 billion red blood cells every day.", real: true },
      { text: "Blood makes up about 7% of your total body weight.", real: true },
      { text: "All blood cells are produced in the heart.", real: false }
    ],
    explanation: "Blood cells are produced in the bone marrow, not the heart. The heart is a pump — it circulates blood but doesn't create blood cells."
  },
  {
    topic: "Sunflowers",
    statements: [
      { text: "Young sunflowers track the sun from east to west, a behavior called heliotropism.", real: true },
      { text: "A single sunflower head can contain up to 2,000 seeds.", real: true },
      { text: "Mature sunflowers continue to follow the sun throughout the day.", real: false }
    ],
    explanation: "Only young sunflowers exhibit heliotropism. Once mature, sunflowers permanently face east, which warms them faster in the morning and attracts more pollinators."
  },
  {
    topic: "Teeth of Animals",
    statements: [
      { text: "Snails have thousands of tiny teeth arranged on a ribbon-like tongue called a radula.", real: true },
      { text: "Elephant tusks are actually elongated incisor teeth that grow throughout their lives.", real: true },
      { text: "Dolphins have two sets of teeth like humans — baby teeth and adult teeth.", real: false }
    ],
    explanation: "Dolphins are monophyodonts — they only get one set of teeth for their entire life. They don't chew their food anyway; they swallow fish whole."
  },
  {
    topic: "Mirrors",
    statements: [
      { text: "The first mirrors were made from polished volcanic glass (obsidian) about 8,000 years ago.", real: true },
      { text: "One-way mirrors work by having a brighter room on one side and a darker room on the other.", real: true },
      { text: "Mirrors reflect light at exactly the speed of light with no delay.", real: false }
    ],
    explanation: "When light hits a mirror, photons are absorbed by atoms in the reflective coating and re-emitted. This process introduces a tiny delay — roughly a few femtoseconds."
  },
  {
    topic: "Poison",
    statements: [
      { text: "King Mithridates VI built immunity to poisons by taking small doses daily.", real: true },
      { text: "The pufferfish contains tetrodotoxin, which is 1,200 times more lethal than cyanide.", real: true },
      { text: "Poison ivy is actually poisonous — its oils are a true toxin.", real: false }
    ],
    explanation: "Poison ivy causes an allergic reaction (contact dermatitis), not poisoning. Urushiol oil triggers an immune response. About 15% of people are not allergic to it at all."
  },
  {
    topic: "Lighthouses",
    statements: [
      { text: "The ancient Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.", real: true },
      { text: "Some lighthouses used giant Fresnel lenses that could project light over 20 miles.", real: true },
      { text: "All lighthouses rotate their beams clockwise.", real: false }
    ],
    explanation: "Lighthouses rotate in both directions depending on their design and manufacturer. There is no universal standard for rotation direction."
  },
  {
    topic: "Bears",
    statements: [
      { text: "Grizzly bears can run at speeds up to 35 mph.", real: true },
      { text: "Black bears are excellent climbers and can ascend trees quickly.", real: true },
      { text: "Bears hibernate continuously for months without ever waking up.", real: false }
    ],
    explanation: "Bears in torpor (not true hibernation) wake periodically to shift position and sometimes even leave the den briefly. Their body temperature drops less than true hibernators like ground squirrels."
  },
  {
    topic: "Currency",
    statements: [
      { text: "The British pound sterling is the oldest currency still in use today.", real: true },
      { text: "Rai stones — massive limestone discs — were used as currency on the island of Yap.", real: true },
      { text: "The US dollar has always featured presidents on its bills.", real: false }
    ],
    explanation: "Non-presidents have appeared on US currency. Alexander Hamilton ($10) was never president, nor was Benjamin Franklin ($100). Salmon P. Chase appeared on early bills too."
  },
  {
    topic: "Sand",
    statements: [
      { text: "Desert sand is mostly unusable for making concrete — the world faces a sand shortage.", real: true },
      { text: "There are more grains of sand on Earth than stars visible to the naked eye.", real: true },
      { text: "All beaches are made of the same type of sand.", real: false }
    ],
    explanation: "Beach sand varies dramatically. Some beaches are white (coral/quartz), black (volcanic), pink (red coral fragments), green (olivine), or even red depending on the local geology."
  },
  {
    topic: "Astronomy Myths",
    statements: [
      { text: "Polaris (the North Star) is not the brightest star in the night sky.", real: true },
      { text: "Many of the stars you see at night have already died — you're seeing ancient light.", real: true },
      { text: "Stars twinkle because they pulse with energy.", real: false }
    ],
    explanation: "Stars don't actually twinkle — the twinkling effect is caused by Earth's atmosphere bending and distorting starlight as it passes through turbulent air layers."
  },
  {
    topic: "Corn",
    statements: [
      { text: "An ear of corn always has an even number of rows.", real: true },
      { text: "Corn was originally a grass called teosinte, selectively bred by ancient Mesoamericans.", real: true },
      { text: "Corn can grow in any climate, which is why it's the world's most produced grain.", real: false }
    ],
    explanation: "Corn requires warm temperatures and adequate moisture — it cannot grow in very cold or very arid climates. Its top production status is due to intensive farming in suitable regions."
  },
  {
    topic: "Knots",
    statements: [
      { text: "The bowline knot has been used for at least 5,000 years.", real: true },
      { text: "There is an entire branch of mathematics dedicated to the study of knots.", real: true },
      { text: "The Gordian Knot was a real knot that Alexander the Great carefully untied.", real: false }
    ],
    explanation: "According to legend, Alexander the Great didn't untie the Gordian Knot — he cut through it with his sword, giving rise to the phrase 'cutting the Gordian Knot.'"
  },
  {
    topic: "Oxygen",
    statements: [
      { text: "Most of Earth's oxygen is produced by phytoplankton in the ocean, not by trees.", real: true },
      { text: "Oxygen is actually colorless as a gas but pale blue as a liquid.", real: true },
      { text: "Earth has always had the same level of oxygen in its atmosphere.", real: false }
    ],
    explanation: "Earth's atmosphere originally had almost no oxygen. The Great Oxygenation Event about 2.4 billion years ago dramatically increased oxygen levels, and they have fluctuated since."
  },
  {
    topic: "Cactus",
    statements: [
      { text: "Some cacti can live for over 200 years.", real: true },
      { text: "Cacti are only found naturally in the Americas.", real: true },
      { text: "You can drink water directly from a cactus in an emergency.", real: false }
    ],
    explanation: "Most cactus fluid contains alkaloids and acids that can cause nausea, vomiting, and diarrhea — making dehydration worse. Only a few species have drinkable fluid."
  },
  {
    topic: "Earthquakes and Buildings",
    statements: [
      { text: "Taipei 101 has a 730-ton pendulum to counteract earthquake and wind sway.", real: true },
      { text: "Japanese pagodas have survived major earthquakes for centuries due to their flexible design.", real: true },
      { text: "Earthquake-proof buildings are designed to be completely rigid so they don't move.", real: false }
    ],
    explanation: "Earthquake-resistant buildings are designed to be flexible, not rigid. They sway and absorb seismic energy. Rigid buildings are more likely to crack and collapse."
  },
  {
    topic: "Comic Books",
    statements: [
      { text: "Superman originally couldn't fly — he could only leap tall buildings.", real: true },
      { text: "A copy of Action Comics #1 (first Superman) sold for over $3 million.", real: true },
      { text: "Marvel Comics was always called Marvel from the beginning.", real: false }
    ],
    explanation: "Marvel was originally called Timely Publications (1939), then Atlas Comics (1951), before becoming Marvel Comics in 1961."
  },
  {
    topic: "Gambling",
    statements: [
      { text: "Las Vegas casinos have no clocks or windows to keep gamblers playing.", real: true },
      { text: "FedEx was saved from bankruptcy when its founder gambled the company's last $5,000 in Las Vegas.", real: true },
      { text: "The probability of winning the lottery increases the more tickets you've bought over time.", real: false }
    ],
    explanation: "Each lottery drawing is an independent event. Previous tickets have no effect on future odds — this is the gambler's fallacy. Your odds reset with every draw."
  },
  {
    topic: "Cement and Concrete",
    statements: [
      { text: "The ancient Romans made concrete that is stronger than most modern concrete.", real: true },
      { text: "Concrete is the most widely used man-made material in the world.", real: true },
      { text: "Cement and concrete are the same thing.", real: false }
    ],
    explanation: "Cement is an ingredient in concrete, not a synonym. Concrete is a mixture of cement, water, sand, and gravel. Cement alone is a powder."
  },
  {
    topic: "Dolphins",
    statements: [
      { text: "Dolphins call each other by unique signature whistles — essentially names.", real: true },
      { text: "Dolphins can stay awake for 15 days by sleeping with only half their brain.", real: true },
      { text: "Dolphins are the only marine mammals that are friendly to humans.", real: false }
    ],
    explanation: "Many marine mammals can be curious or friendly toward humans, including sea lions, manatees, and some whale species. And dolphins can also be aggressive."
  },
  {
    topic: "Photography History",
    statements: [
      { text: "The first selfie was taken by Robert Cornelius in 1839.", real: true },
      { text: "Early photography required subjects to sit still for several minutes.", real: true },
      { text: "Kodak invented the digital camera and immediately embraced it.", real: false }
    ],
    explanation: "A Kodak engineer invented the first digital camera in 1975, but Kodak famously suppressed it to protect their film business — eventually leading to the company's bankruptcy in 2012."
  },
  {
    topic: "Worms",
    statements: [
      { text: "Earthworms have five pairs of heart-like structures.", real: true },
      { text: "The bootlace worm can grow over 150 feet long, making it one of the longest animals on Earth.", real: true },
      { text: "If you cut an earthworm in half, both halves will regenerate into two complete worms.", real: false }
    ],
    explanation: "Only the head end of an earthworm can potentially regenerate. The tail end dies. Some species cannot regenerate at all."
  },
  {
    topic: "Astronomy Records",
    statements: [
      { text: "The Voyager 1 spacecraft is the farthest human-made object from Earth.", real: true },
      { text: "The Hubble Space Telescope has made over 1.5 million observations since its launch.", real: true },
      { text: "The International Space Station is the most expensive object ever built, costing $1 trillion.", real: false }
    ],
    explanation: "The ISS cost about $150 billion — incredibly expensive, but not $1 trillion. It is still one of the most expensive single objects ever constructed."
  },
  {
    topic: "Milk",
    statements: [
      { text: "Hippopotamus milk is naturally pink.", real: true },
      { text: "Humans are the only species that drinks milk from other animals.", real: true },
      { text: "Milk is white because it contains bleach-like chemicals.", real: false }
    ],
    explanation: "Milk is white because of casein, a protein that scatters light. The fat globules in milk also scatter light, giving it an opaque white appearance. No bleaching agents are involved."
  },
  {
    topic: "Static Electricity",
    statements: [
      { text: "Lightning is a massive discharge of static electricity.", real: true },
      { text: "You can generate static electricity by walking across a carpet because of electron transfer.", real: true },
      { text: "Static electricity is harmless and can never cause any damage.", real: false }
    ],
    explanation: "Static electricity can damage sensitive electronics, ignite flammable vapors at gas stations, and in industrial settings can cause fires and explosions."
  },
  {
    topic: "Ancient Rome",
    statements: [
      { text: "Romans used a sponge on a stick (tersorium) instead of toilet paper.", real: true },
      { text: "The Colosseum could be flooded for mock naval battles called naumachiae.", real: true },
      { text: "Julius Caesar was the first Roman Emperor.", real: false }
    ],
    explanation: "Caesar was a dictator, not an emperor. Augustus (his adopted son Octavian) became the first Roman Emperor in 27 BC, after Caesar's assassination."
  },
  {
    topic: "Memory",
    statements: [
      { text: "The smell of rosemary has been shown to improve memory performance.", real: true },
      { text: "Your brain can store approximately 2.5 petabytes of information.", real: true },
      { text: "Humans have a photographic memory that captures every detail of what they see.", real: false }
    ],
    explanation: "True photographic (eidetic) memory in adults has never been scientifically proven to exist. People with exceptional memories use mnemonic techniques, not photographic recall."
  },
  {
    topic: "Avocados",
    statements: [
      { text: "Avocados are toxic to many animals, including birds, cats, and dogs.", real: true },
      { text: "Avocados were originally spread by giant ground sloths that are now extinct.", real: true },
      { text: "Avocados are vegetables that grow underground like potatoes.", real: false }
    ],
    explanation: "Avocados are fruits — specifically large berries — that grow on trees. They contain a single large seed and develop from the flower of the avocado tree."
  },
  {
    topic: "Electricity Generation",
    statements: [
      { text: "Iceland generates nearly 100% of its electricity from renewable sources.", real: true },
      { text: "A single wind turbine can power over 1,500 homes.", real: true },
      { text: "Solar panels only work in direct sunlight and produce no power on cloudy days.", real: false }
    ],
    explanation: "Solar panels still produce electricity on cloudy days — typically 10-25% of their maximum output. They use diffuse light, not just direct sunlight."
  },
  {
    topic: "Maple Syrup",
    statements: [
      { text: "It takes about 40 gallons of maple sap to make 1 gallon of maple syrup.", real: true },
      { text: "Canada produces about 71% of the world's maple syrup.", real: true },
      { text: "Maple syrup can be made from any tree species.", real: false }
    ],
    explanation: "While several maple species can be tapped, maple syrup comes specifically from maple trees. Most other tree species produce sap that is not suitable for syrup production."
  },
  {
    topic: "Ants",
    statements: [
      { text: "The total weight of all ants on Earth is roughly equal to the total weight of all humans.", real: true },
      { text: "Some ant species practice agriculture by farming fungus.", real: true },
      { text: "Ants can lift 100 times their own body weight.", real: false }
    ],
    explanation: "Ants can typically lift 10-50 times their body weight depending on species, which is still impressive. But 100 times is an exaggeration that's become a common myth."
  },
  {
    topic: "Illusions",
    statements: [
      { text: "The horizon on a flat plain is only about 3 miles away for a person of average height.", real: true },
      { text: "Mirages are real optical phenomena caused by light bending through layers of hot air.", real: true },
      { text: "The Moon is larger when it's near the horizon due to atmospheric magnification.", real: false }
    ],
    explanation: "The Moon is the same size at the horizon as overhead — the 'Moon illusion' is a psychological effect, not optical magnification. The atmosphere doesn't magnify the Moon."
  },
  {
    topic: "Paper Money",
    statements: [
      { text: "US paper currency is made from a blend of cotton and linen, not wood pulp paper.", real: true },
      { text: "Australia was the first country to use polymer (plastic) banknotes.", real: true },
      { text: "The average lifespan of a US $1 bill is about 10 years.", real: false }
    ],
    explanation: "The average $1 bill lasts only about 6.6 years. Higher denominations last longer because they're handled less frequently."
  },
  {
    topic: "Lobsters",
    statements: [
      { text: "Lobsters were once considered poverty food and fed to prisoners in colonial America.", real: true },
      { text: "Lobsters can regenerate lost claws and legs.", real: true },
      { text: "Lobsters are biologically immortal and never die of old age.", real: false }
    ],
    explanation: "While lobsters don't show typical aging signs, they do die — usually from shell disease, predation, or exhaustion from molting. The 'immortal' claim is an oversimplification."
  },
  {
    topic: "Sign Language History",
    statements: [
      { text: "Martha's Vineyard had such a high deaf population that everyone — hearing and deaf — used sign language.", real: true },
      { text: "The first public school for the deaf in the US was founded in 1817 in Hartford, Connecticut.", real: true },
      { text: "American Sign Language was invented by Alexander Graham Bell.", real: false }
    ],
    explanation: "ASL evolved from French Sign Language brought by Laurent Clerc and combined with local signs. Bell actually advocated against sign language and promoted oralism."
  },
  {
    topic: "Forensics",
    statements: [
      { text: "Each person's ear shape is unique and can be used for identification.", real: true },
      { text: "Forensic entomology uses insect activity on a body to estimate time of death.", real: true },
      { text: "Lie detector (polygraph) tests are admissible as evidence in most US courts.", real: false }
    ],
    explanation: "Polygraph results are generally not admissible in US courts because they are considered unreliable. The National Academy of Sciences found them scientifically questionable."
  },
  {
    topic: "Rainbows",
    statements: [
      { text: "Every person sees their own unique rainbow because it depends on the observer's position.", real: true },
      { text: "A rainbow is actually a full circle — you just can't see the bottom half from the ground.", real: true },
      { text: "Rainbows can only occur when the sun is behind you.", real: false }
    ],
    explanation: "While common rainbows form opposite the sun, there are many types of atmospheric optics. Fogbows, moonbows, and reflection rainbows can appear in various positions relative to the light source."
  },
  {
    topic: "Bones and Healing",
    statements: [
      { text: "Broken bones heal stronger at the fracture site due to extra calcium deposits.", real: true },
      { text: "Children's bones heal faster than adults' bones because of their higher growth rate.", real: true },
      { text: "Cracking your knuckles causes arthritis.", real: false }
    ],
    explanation: "Multiple studies have found no link between knuckle cracking and arthritis. The sound comes from gas bubbles popping in the joint fluid, which is harmless."
  },
  {
    topic: "Sushi",
    statements: [
      { text: "Sushi originally referred to the fermented rice, not the fish.", real: true },
      { text: "Sushi chefs in Japan traditionally train for 10 years before being considered masters.", real: true },
      { text: "Sushi always contains raw fish.", real: false }
    ],
    explanation: "Sushi refers to vinegared rice and can be topped with cooked fish, vegetables, egg, or tofu. Sashimi is specifically raw fish. Many popular sushi rolls use cooked ingredients."
  },
  {
    topic: "Voting",
    statements: [
      { text: "New Zealand was the first country to grant women the right to vote in 1893.", real: true },
      { text: "Ancient Athens, the birthplace of democracy, only allowed about 10-20% of the population to vote.", real: true },
      { text: "Voting is optional in every democratic country.", real: false }
    ],
    explanation: "Several countries including Australia, Belgium, and Brazil have compulsory voting laws where citizens can be fined for not voting."
  },
  {
    topic: "Helium",
    statements: [
      { text: "Helium was discovered on the Sun before it was found on Earth.", real: true },
      { text: "The world is facing a helium shortage because it's a non-renewable resource.", real: true },
      { text: "Helium makes your voice higher by speeding up your vocal cords.", real: false }
    ],
    explanation: "Helium doesn't affect your vocal cords at all. It changes the speed of sound in your vocal tract, altering the resonant frequencies and making your voice sound higher-pitched."
  },
  {
    topic: "Clocks and Time",
    statements: [
      { text: "Before time zones, every city set its own local time based on the sun's position.", real: true },
      { text: "Leap seconds are occasionally added to account for Earth's slowing rotation.", real: true },
      { text: "There are exactly 24 time zones in the world.", real: false }
    ],
    explanation: "There are actually more than 24 time zones because some use 30- or 45-minute offsets. India is UTC+5:30, Nepal is UTC+5:45, and the Chatham Islands use UTC+12:45."
  },
  {
    topic: "Peanuts",
    statements: [
      { text: "Peanuts are not true nuts — they are legumes related to beans and lentils.", real: true },
      { text: "George Washington Carver developed over 300 uses for peanuts.", real: true },
      { text: "Peanut allergies have existed throughout all of human history.", real: false }
    ],
    explanation: "Peanut allergies were extremely rare before the 1990s and have risen dramatically. The exact cause of the increase is still debated among scientists."
  },
  {
    topic: "Architecture Wonders",
    statements: [
      { text: "The Burj Khalifa is so tall that you can watch the sunset from the base and ride the elevator to the top to watch it set again.", real: true },
      { text: "The Sagrada Familia in Barcelona has been under construction since 1882.", real: true },
      { text: "The Colosseum in Rome was built in just two years.", real: false }
    ],
    explanation: "The Colosseum took about 8-10 years to build, from around 70-80 AD. It was a massive construction project involving tens of thousands of workers."
  },
  {
    topic: "Genetics",
    statements: [
      { text: "Humans share about 98.7% of their DNA with chimpanzees.", real: true },
      { text: "A single gene mutation can turn brown eyes blue.", real: true },
      { text: "Children always have a blood type that matches one of their parents.", real: false }
    ],
    explanation: "Children can have a blood type that neither parent has. For example, two parents with type A and type B blood can have a child with type AB or type O."
  },
  {
    topic: "Garlic",
    statements: [
      { text: "Garlic has been used medicinally for over 5,000 years.", real: true },
      { text: "Elephant garlic is not actually garlic — it's more closely related to leeks.", real: true },
      { text: "Cooking garlic increases its health benefits.", real: false }
    ],
    explanation: "Cooking actually destroys allicin, the compound responsible for most of garlic's health benefits. Raw garlic contains the most beneficial compounds."
  },
  {
    topic: "Fossils",
    statements: [
      { text: "The oldest known fossils are about 3.5 billion years old.", real: true },
      { text: "Amber can preserve organisms so well that individual cells are visible under a microscope.", real: true },
      { text: "Fossils are only found in sedimentary rock.", real: false }
    ],
    explanation: "While most fossils are found in sedimentary rock, fossils can occasionally be preserved in volcanic ash and even some metamorphic rocks if conditions are right."
  },
  {
    topic: "Superheroes",
    statements: [
      { text: "Batman first appeared in Detective Comics, not his own title.", real: true },
      { text: "Wonder Woman was created by the inventor of the lie detector polygraph.", real: true },
      { text: "Spider-Man was originally published by DC Comics.", real: false }
    ],
    explanation: "Spider-Man was created by Stan Lee and Steve Ditko and has always been a Marvel Comics character, first appearing in Amazing Fantasy #15 in 1962."
  },
  {
    topic: "Clouds and Weather",
    statements: [
      { text: "Cumulonimbus clouds can reach heights of over 60,000 feet.", real: true },
      { text: "Ball lightning is a real, documented phenomenon that scientists still can't fully explain.", real: true },
      { text: "Red sky at morning is just a saying with no meteorological basis.", real: false }
    ],
    explanation: "'Red sky at morning, sailors take warning' has scientific basis. Red morning skies indicate moisture-laden air moving in from the west, often bringing storms."
  },
  {
    topic: "Seahorses",
    statements: [
      { text: "Male seahorses carry and give birth to the babies, not females.", real: true },
      { text: "Seahorses have no stomach — food passes through their digestive system very quickly.", real: true },
      { text: "Seahorses are actually insects that adapted to live in water.", real: false }
    ],
    explanation: "Seahorses are true fish belonging to the family Syngnathidae. They have gills, a swim bladder, and fins — all characteristics of fish."
  },
  {
    topic: "Elevators",
    statements: [
      { text: "Elisha Otis invented the safety elevator brake, not the elevator itself.", real: true },
      { text: "The 'close door' button in most elevators does nothing — it's a placebo.", real: true },
      { text: "If an elevator cable snaps, the elevator will freefall to the bottom.", real: false }
    ],
    explanation: "Modern elevators have multiple safety systems including multiple cables, electromagnetic brakes, and shock absorbers. A freefall is virtually impossible with these redundant safeguards."
  },
  {
    topic: "Braille",
    statements: [
      { text: "Louis Braille invented the Braille system when he was only 15 years old.", real: true },
      { text: "Braille was inspired by a military code called 'night writing' used by Napoleon's army.", real: true },
      { text: "Braille uses a grid of 8 dots for each character.", real: false }
    ],
    explanation: "Standard Braille uses a grid of 6 dots (3 rows of 2), allowing 64 possible combinations. An 8-dot system exists for computer Braille but is not the original standard."
  },
  {
    topic: "Saturn",
    statements: [
      { text: "Saturn's rings are mostly made of ice particles ranging from tiny grains to house-sized chunks.", real: true },
      { text: "Saturn is so light it would float in water if you could find a bathtub big enough.", real: true },
      { text: "Saturn's rings are billions of years old, formed when the planet itself formed.", real: false }
    ],
    explanation: "Recent data from the Cassini mission suggests Saturn's rings are surprisingly young — possibly only 100-200 million years old, far younger than the 4.5-billion-year-old planet."
  },
  {
    topic: "Writing Systems",
    statements: [
      { text: "Chinese characters are the oldest writing system still in continuous use.", real: true },
      { text: "The Rosetta Stone was the key to deciphering Egyptian hieroglyphics.", real: true },
      { text: "All writing systems in the world evolved from a single original system.", real: false }
    ],
    explanation: "Writing was independently invented at least three times: in Mesopotamia, China, and Mesoamerica. These systems developed completely separately with no connection."
  },
  {
    topic: "Vitamins in Food",
    statements: [
      { text: "Bell peppers contain more vitamin C than oranges by weight.", real: true },
      { text: "Carrots get their orange color from beta-carotene, which the body converts to vitamin A.", real: true },
      { text: "Spinach is the best source of iron among all vegetables.", real: false }
    ],
    explanation: "Spinach's reputation as an iron powerhouse came from a decimal point error in a 19th-century study. Many foods like lentils, soybeans, and white beans contain more usable iron."
  },
  {
    topic: "Eclipses",
    statements: [
      { text: "A total solar eclipse can make the temperature drop by over 10 degrees Fahrenheit.", real: true },
      { text: "Ancient Chinese believed a celestial dragon was eating the Sun during solar eclipses.", real: true },
      { text: "Solar eclipses can only happen during a full moon.", real: false }
    ],
    explanation: "Solar eclipses only happen during a new moon, when the Moon is between the Earth and Sun. Lunar eclipses occur during a full moon."
  },
  {
    topic: "Glue",
    statements: [
      { text: "Super glue was accidentally discovered while trying to make clear plastic gun sights during WWII.", real: true },
      { text: "Spider silk has been researched as a potential super-strong adhesive material.", real: true },
      { text: "Elmer's Glue is made from horse hooves.", real: false }
    ],
    explanation: "Elmer's Glue is made from synthetic polymers (polyvinyl acetate), not animal products. While animal-based glues exist historically, modern white glues are synthetic."
  },
  {
    topic: "Migration Patterns",
    statements: [
      { text: "Some bar-tailed godwits fly nonstop from Alaska to New Zealand — over 7,000 miles.", real: true },
      { text: "European eels migrate from European rivers to the Sargasso Sea to breed, then die.", real: true },
      { text: "All salmon return to the exact river they were born in to spawn.", real: false }
    ],
    explanation: "While most salmon return to their natal stream with impressive accuracy (around 90-95%), some do stray to other rivers. This straying is actually important for genetic diversity."
  },
  {
    topic: "Soap Bubbles",
    statements: [
      { text: "The colors in soap bubbles are caused by light interference, not pigments.", real: true },
      { text: "Soap bubbles in extremely cold weather can freeze into ice spheres before popping.", real: true },
      { text: "A soap bubble is always perfectly spherical.", real: false }
    ],
    explanation: "While surface tension pulls bubbles toward a sphere, they are distorted by air currents, gravity, and contact with surfaces. Free-floating bubbles are approximately but not perfectly spherical."
  },
  {
    topic: "Trains",
    statements: [
      { text: "Japan's Shinkansen bullet trains have an average delay of less than one minute per year.", real: true },
      { text: "The first passenger railway opened in England in 1825.", real: true },
      { text: "Maglev trains float because they use powerful fans to hover above the track.", real: false }
    ],
    explanation: "Maglev trains float using powerful electromagnets that create magnetic repulsion, not fans. The magnetic field lifts the train and propels it forward with virtually no friction."
  },
  {
    topic: "Platypus",
    statements: [
      { text: "The platypus is one of only five species of egg-laying mammals.", real: true },
      { text: "Male platypuses have venomous spurs on their hind legs.", real: true },
      { text: "When scientists first saw a platypus specimen, they immediately accepted it as real.", real: false }
    ],
    explanation: "When the first platypus specimen was sent to England in 1799, scientists thought it was a hoax — a duck bill sewn onto a beaver body. They even tried to find the stitches."
  },
  {
    topic: "Spices",
    statements: [
      { text: "Saffron is the most expensive spice in the world, worth more than gold by weight.", real: true },
      { text: "Black pepper was so valuable in the Middle Ages it was used as currency.", real: true },
      { text: "Cinnamon comes from the leaves of the cinnamon tree.", real: false }
    ],
    explanation: "Cinnamon comes from the inner bark of cinnamon trees, not the leaves. The bark is peeled, dried, and curled into the cinnamon sticks we recognize."
  },
  {
    topic: "Solar System Scale",
    statements: [
      { text: "If the Sun were the size of a front door, Earth would be the size of a nickel.", real: true },
      { text: "It would take a modern jet over 17 years to fly from Earth to the Sun.", real: true },
      { text: "Pluto is the smallest object in the solar system.", real: false }
    ],
    explanation: "Pluto is far from the smallest object in the solar system. Countless asteroids, comets, and Kuiper Belt objects are much smaller. Pluto itself is about 1,473 miles in diameter."
  },
  {
    topic: "Caves and Minerals",
    statements: [
      { text: "Mexico's Cave of Crystals contains selenite crystals up to 39 feet long.", real: true },
      { text: "Mammoth Cave in Kentucky has passages that have never been fully explored.", real: true },
      { text: "Cave formations grow at about an inch per year.", real: false }
    ],
    explanation: "Most cave formations like stalactites grow extremely slowly — typically about one inch per hundred years or even slower. Some formations took millions of years to reach their current size."
  },
  {
    topic: "Swimming",
    statements: [
      { text: "Humans are the only primates that naturally enjoy swimming.", real: true },
      { text: "Dead Sea water is so salty you can float without effort.", real: true },
      { text: "You should wait at least an hour after eating before swimming to avoid cramps.", real: false }
    ],
    explanation: "There is no scientific evidence that eating before swimming causes dangerous cramps. This common parental warning is a myth that likely originated from a 1911 Boy Scout handbook."
  },
  {
    topic: "Islands",
    statements: [
      { text: "Indonesia has over 17,000 islands, making it the largest archipelago in the world.", real: true },
      { text: "Manhattan Island was famously purchased from the Lenape people for about $24 worth of goods.", real: true },
      { text: "Australia is both a country and the world's largest island.", real: false }
    ],
    explanation: "Australia is classified as a continent, not an island. Greenland is considered the world's largest island at about 836,000 square miles."
  },
  {
    topic: "Metals and Alloys",
    statements: [
      { text: "Stainless steel was accidentally discovered by a metallurgist looking for gun barrel alloys.", real: true },
      { text: "Gold is so malleable that one ounce can be hammered into a sheet covering 100 square feet.", real: true },
      { text: "Bronze is an alloy of iron and copper.", real: false }
    ],
    explanation: "Bronze is an alloy of copper and tin, not iron and copper. The addition of iron to another metal produces different alloys like steel (iron and carbon)."
  },
  {
    topic: "Optical Fiber",
    statements: [
      { text: "A single optical fiber can carry over 10 million phone calls simultaneously.", real: true },
      { text: "Over 95% of international internet data travels through undersea fiber optic cables.", real: true },
      { text: "Fiber optic cables transmit data using electrical signals.", real: false }
    ],
    explanation: "Fiber optic cables transmit data using pulses of light, not electrical signals. The glass or plastic fibers carry photons, which is why they can achieve much higher speeds than copper wires."
  },
  {
    topic: "Sleep Science",
    statements: [
      { text: "Your brain is actually more active during REM sleep than when you're awake.", real: true },
      { text: "The record for the longest time without sleep is 11 days, set by Randy Gardner in 1964.", real: true },
      { text: "Everyone needs exactly 8 hours of sleep — no more, no less.", real: false }
    ],
    explanation: "Sleep needs vary by individual and age. Most adults need 7-9 hours, but some people function well on 6 and others need 10. Genetics play a significant role."
  },
  {
    topic: "Coral",
    statements: [
      { text: "Coral can bleach (turn white) due to stress from warm water temperatures.", real: true },
      { text: "Some deep-sea corals can live for over 4,000 years.", real: true },
      { text: "Coral bleaching always kills the coral immediately.", real: false }
    ],
    explanation: "Bleaching doesn't immediately kill coral — it expels the symbiotic algae that give it color. Coral can recover if conditions improve quickly, but prolonged bleaching is fatal."
  },
  {
    topic: "Alphabet",
    statements: [
      { text: "The letter 'E' is the most commonly used letter in the English language.", real: true },
      { text: "The ampersand (&) was once the 27th letter of the English alphabet.", real: true },
      { text: "Every language in the world uses an alphabet-based writing system.", real: false }
    ],
    explanation: "Many languages use non-alphabetic systems. Chinese uses logographic characters, Japanese uses a mix of logographic and syllabic systems, and some languages use abugidas or abjads."
  },
  {
    topic: "Hot Springs",
    statements: [
      { text: "The Grand Prismatic Spring in Yellowstone gets its colors from heat-loving bacteria.", real: true },
      { text: "Japan has over 27,000 natural hot springs (onsen).", real: true },
      { text: "Hot springs are heated by the Sun's energy stored deep underground.", real: false }
    ],
    explanation: "Hot springs are heated by geothermal energy — heat from Earth's interior, not the Sun. Magma and radioactive decay deep within the Earth heat the water."
  },
  {
    topic: "Board Games History",
    statements: [
      { text: "The Royal Game of Ur is one of the oldest known board games, dating to about 2600 BC.", real: true },
      { text: "Go is considered the most complex classic board game, with more possible positions than atoms in the universe.", real: true },
      { text: "Dice were invented in Las Vegas in the 1920s for casino gambling.", real: false }
    ],
    explanation: "Dice are among the oldest gaming implements in human history, dating back at least 5,000 years. Ancient dice have been found in archaeological sites across Mesopotamia, Egypt, and Asia."
  },
  {
    topic: "Teeth and Dentistry",
    statements: [
      { text: "Ancient Egyptians used a paste of crushed rock, vinegar, and pumice as toothpaste.", real: true },
      { text: "Narwhal tusks are actually elongated spiral teeth that can grow up to 10 feet long.", real: true },
      { text: "Wisdom teeth are called that because they help you think more wisely.", real: false }
    ],
    explanation: "Wisdom teeth are named for the age at which they appear — typically between 17 and 25, the 'age of wisdom.' They have nothing to do with intelligence."
  },
  {
    topic: "Popcorn",
    statements: [
      { text: "Popcorn has been eaten for over 5,000 years — ancient popcorn was found in Peru.", real: true },
      { text: "Popcorn pops because water inside the kernel turns to steam and explodes the hull.", real: true },
      { text: "Any variety of corn can be popped to make popcorn.", real: false }
    ],
    explanation: "Only one variety of corn — Zea mays everta — can be popped. Other corn types don't have the right hull thickness or moisture content to create the steam pressure needed for popping."
  },
  {
    topic: "Tides",
    statements: [
      { text: "The Moon has a greater effect on tides than the Sun despite being much smaller.", real: true },
      { text: "The Bay of Fundy in Canada has the highest tides in the world — over 50 feet.", real: true },
      { text: "Tides only occur in oceans, never in lakes or other bodies of water.", real: false }
    ],
    explanation: "Very large lakes like the Great Lakes do experience tides, though they are tiny (only a few centimeters). Even the atmosphere has tides caused by the Moon's gravity."
  },
  {
    topic: "Calendars and History",
    statements: [
      { text: "The Gregorian calendar replaced the Julian calendar, which had drifted 10 days off.", real: true },
      { text: "Ethiopia uses a calendar that is about 7-8 years behind the Gregorian calendar.", real: true },
      { text: "All ancient civilizations used a 365-day calendar.", real: false }
    ],
    explanation: "Many ancient calendars were lunar-based with about 354 days per year. The Islamic calendar still uses a 354-day lunar year. Some cultures used completely different systems."
  },
  {
    topic: "Immune System",
    statements: [
      { text: "Fever is actually a defense mechanism — your body heats up to fight infection.", real: true },
      { text: "Breast milk contains antibodies that help protect newborns from infections.", real: true },
      { text: "Being cold or going outside with wet hair causes you to catch a cold.", real: false }
    ],
    explanation: "Colds are caused by viruses, not cold temperatures or wet hair. The myth persists because cold season coincides with winter, when people spend more time indoors spreading viruses."
  },
  {
    topic: "Dams",
    statements: [
      { text: "The Three Gorges Dam in China is so massive it slightly slowed Earth's rotation.", real: true },
      { text: "Beavers build dams that can be seen from space — the largest is over 2,700 feet long.", real: true },
      { text: "The Hoover Dam will take 125 years for its concrete to fully cure.", real: false }
    ],
    explanation: "While the Hoover Dam's concrete did take a very long time to cool and cure, engineers used cooling pipes to speed the process. The 125-year figure without cooling was a theoretical estimate, not reality."
  },
  {
    topic: "Color Science",
    statements: [
      { text: "Magenta doesn't exist on the visible light spectrum — your brain invents it.", real: true },
      { text: "Dogs see the world in shades of blue and yellow, not black and white.", real: true },
      { text: "There are exactly 7 colors in a rainbow.", real: false }
    ],
    explanation: "A rainbow is a continuous spectrum of colors, not 7 distinct bands. Newton chose 7 because he wanted to match the number of musical notes. The divisions are arbitrary."
  },
  {
    topic: "Noodles",
    statements: [
      { text: "The oldest known noodles were found in China and are about 4,000 years old.", real: true },
      { text: "Instant ramen was invented in Japan in 1958 by Momofuku Ando.", real: true },
      { text: "Italian pasta and Chinese noodles share a common historical origin.", real: false }
    ],
    explanation: "Italian pasta and Chinese noodles were developed independently. Pasta in Italy evolved from ancient Roman and Arab influences, while noodles in China have a separate 4,000-year history."
  },
  {
    topic: "Quicksand",
    statements: [
      { text: "Quicksand is denser than the human body, so you can't actually sink all the way in.", real: true },
      { text: "Quicksand is typically only a few feet deep, not the bottomless pits shown in movies.", real: true },
      { text: "Struggling in quicksand helps you escape faster.", real: false }
    ],
    explanation: "Struggling in quicksand makes you sink faster because quick movements break the water-sand suspension and increase suction. Slow, gentle movements and leaning back are the best escape strategy."
  },
  {
    topic: "Musical Instruments",
    statements: [
      { text: "The piano has over 230 strings inside it.", real: true },
      { text: "The oldest known musical instrument is a flute made from a vulture bone, about 40,000 years old.", real: true },
      { text: "A violin has 6 strings like a guitar.", real: false }
    ],
    explanation: "A standard violin has 4 strings, tuned to G, D, A, and E. A standard guitar has 6 strings. The instruments are fundamentally different in design and playing technique."
  },
  {
    topic: "Geysers",
    statements: [
      { text: "Old Faithful in Yellowstone erupts approximately every 90 minutes.", real: true },
      { text: "Iceland's Great Geysir is the original geyser — the word 'geyser' comes from its name.", real: true },
      { text: "Geysers are found on every continent.", real: false }
    ],
    explanation: "Active geysers are found on only a few continents. Most of the world's geysers are concentrated in just five countries: the US, Iceland, Russia, Chile, and New Zealand."
  },
  {
    topic: "Whirlpools",
    statements: [
      { text: "The Maelstrom off Norway's coast is a real whirlpool that inspired Edgar Allan Poe's story.", real: true },
      { text: "Whirlpools can form at the meeting point of opposing tidal currents.", real: true },
      { text: "The Coriolis effect determines which direction water swirls down a drain.", real: false }
    ],
    explanation: "The Coriolis effect is far too weak to influence water draining from a sink or bathtub. The direction of the swirl is determined by the basin's shape, residual currents, and how the water was disturbed."
  },
  {
    topic: "Airports and Aviation",
    statements: [
      { text: "Airplane cabin air is recycled through HEPA filters that remove 99.97% of particles.", real: true },
      { text: "The black box flight recorder is actually bright orange to make it easier to find.", real: true },
      { text: "Airplane doors can be opened mid-flight by passengers.", real: false }
    ],
    explanation: "At cruising altitude, cabin pressure makes it physically impossible to open airplane doors. The pressure difference creates thousands of pounds of force holding the door shut."
  },
  {
    topic: "Waterfalls Records",
    statements: [
      { text: "Iguazu Falls on the Argentina-Brazil border is wider than Niagara Falls.", real: true },
      { text: "There is an underwater waterfall illusion visible from space near Mauritius.", real: true },
      { text: "Niagara Falls could never be stopped or turned off.", real: false }
    ],
    explanation: "Niagara Falls has been artificially stopped. In 1969, the US Army Corps of Engineers diverted the Niagara River to study and reinforce the American Falls' rock face."
  },
  {
    topic: "Wolves and Dogs",
    statements: [
      { text: "Dogs were domesticated from wolves at least 15,000 years ago.", real: true },
      { text: "All modern dog breeds descend from a common wolf ancestor, not multiple wolf species.", real: true },
      { text: "Wolves and dogs are different species that cannot interbreed.", real: false }
    ],
    explanation: "Wolves and dogs are the same species (Canis lupus) — dogs are a subspecies (Canis lupus familiaris). They can and do interbreed, producing fertile offspring called wolfdogs."
  },
  {
    topic: "Rubber",
    statements: [
      { text: "Natural rubber comes from the sap (latex) of rubber trees.", real: true },
      { text: "Charles Goodyear accidentally discovered vulcanization by dropping rubber on a hot stove.", real: true },
      { text: "Rubber bands last longer when stored in warm places.", real: false }
    ],
    explanation: "Rubber bands last longer when refrigerated. Heat and UV light break down the polymers in rubber, causing it to become brittle. Cool, dark storage extends their life."
  },
  {
    topic: "Mythology Creatures",
    statements: [
      { text: "The kraken from Norse mythology may have been inspired by real giant squid sightings.", real: true },
      { text: "The unicorn is Scotland's national animal.", real: true },
      { text: "Dragons appear in the mythology of European cultures only.", real: false }
    ],
    explanation: "Dragon-like creatures appear in mythologies worldwide — Chinese dragons, Mesoamerican feathered serpents, Japanese ryuu, Aboriginal rainbow serpents, and many others across cultures."
  },
  {
    topic: "Glacial History",
    statements: [
      { text: "The Great Lakes were formed by retreating glaciers at the end of the last Ice Age.", real: true },
      { text: "During the last Ice Age, so much water was locked in ice that sea levels were about 400 feet lower.", real: true },
      { text: "The last Ice Age ended about 1,000 years ago.", real: false }
    ],
    explanation: "The last Ice Age ended about 11,700 years ago. Human civilization developed largely after the ice retreated, during the current warm period called the Holocene."
  },
  {
    topic: "Firsts in Space",
    statements: [
      { text: "The first living creatures sent to space were fruit flies launched by the US in 1947.", real: true },
      { text: "Valentina Tereshkova became the first woman in space in 1963.", real: true },
      { text: "Neil Armstrong was the first person to orbit the Earth.", real: false }
    ],
    explanation: "Yuri Gagarin of the Soviet Union was the first person to orbit Earth on April 12, 1961. Neil Armstrong was the first person to walk on the Moon in 1969."
  },
  {
    topic: "Nuts",
    statements: [
      { text: "Cashews grow on the outside of a fruit called the cashew apple.", real: true },
      { text: "Almonds are closely related to peaches — they're in the same plant family.", real: true },
      { text: "Coconuts are true nuts, which is why they have 'nut' in their name.", real: false }
    ],
    explanation: "Despite the name, coconuts are not true nuts — they are drupes (stone fruits), in the same category as peaches, cherries, and plums."
  },
  {
    topic: "Navigation",
    statements: [
      { text: "Polynesian navigators crossed thousands of miles of open ocean using only stars, waves, and bird patterns.", real: true },
      { text: "Vikings may have used sunstones (calcite crystals) to navigate on cloudy days.", real: true },
      { text: "The compass was invented in Europe during the Age of Exploration.", real: false }
    ],
    explanation: "The magnetic compass was invented in China during the Han Dynasty (around 200 BC), centuries before European explorers used it for navigation."
  },
  {
    topic: "Venomous vs Poisonous",
    statements: [
      { text: "If it bites you and you get sick, it's venomous; if you bite it and get sick, it's poisonous.", real: true },
      { text: "The blue-ringed octopus carries enough venom to kill 26 adult humans.", real: true },
      { text: "All snakes are venomous.", real: false }
    ],
    explanation: "Only about 600 of the 3,000+ known snake species are venomous. Many common snakes like garter snakes, king snakes, and pythons are completely non-venomous."
  },
  {
    topic: "Pencils",
    statements: [
      { text: "Pencil 'lead' is actually graphite mixed with clay — it contains no lead.", real: true },
      { text: "The average pencil can draw a line about 35 miles long.", real: true },
      { text: "Yellow pencils became standard because yellow was the cheapest paint color.", real: false }
    ],
    explanation: "Yellow pencils became popular because the best graphite came from China, and in the 1890s, yellow was associated with Chinese royalty and prestige. It was a marketing choice, not a cost-saving one."
  },
  {
    topic: "Endangered Species",
    statements: [
      { text: "The vaquita porpoise is the world's most endangered marine mammal, with fewer than 10 remaining.", real: true },
      { text: "Giant pandas were downlisted from 'endangered' to 'vulnerable' in 2016.", real: true },
      { text: "The bald eagle is still on the endangered species list.", real: false }
    ],
    explanation: "The bald eagle was removed from the US endangered species list in 2007 after a remarkable recovery. It went from about 417 breeding pairs in 1963 to over 9,700 by 2006."
  },
  {
    topic: "Paper History",
    statements: [
      { text: "Ancient Egyptians wrote on papyrus, which is made from a reed-like plant.", real: true },
      { text: "Toilet paper wasn't widely available commercially until the mid-1800s.", real: true },
      { text: "Paper can only be recycled once before it becomes unusable.", real: false }
    ],
    explanation: "Paper can be recycled 5 to 7 times before the fibers become too short to hold together. Each recycling cycle shortens the fibers slightly."
  },
  {
    topic: "Shoes",
    statements: [
      { text: "The oldest known leather shoe is about 5,500 years old, found in Armenia.", real: true },
      { text: "Nike was originally called Blue Ribbon Sports.", real: true },
      { text: "High heels were originally designed for women's fashion.", real: false }
    ],
    explanation: "High heels were originally worn by men — Persian horse riders in the 10th century wore heeled boots for stability in stirrups. European aristocratic men adopted them as a status symbol."
  },
  {
    topic: "Desalination",
    statements: [
      { text: "Saudi Arabia is the world's largest producer of desalinated water.", real: true },
      { text: "Desalination can produce drinking water from seawater by removing salt.", real: true },
      { text: "Desalination is so efficient it uses less energy than pumping freshwater from rivers.", real: false }
    ],
    explanation: "Desalination is extremely energy-intensive, requiring 10-15 times more energy than conventional water treatment. This high energy cost remains its biggest limitation."
  },
  {
    topic: "Fungi",
    statements: [
      { text: "Penicillin, the first antibiotic, was derived from a mold (Penicillium fungus).", real: true },
      { text: "Truffles are so hard to find that specially trained pigs and dogs are used to locate them.", real: true },
      { text: "Yeasts are bacteria, not fungi.", real: false }
    ],
    explanation: "Yeasts are single-celled fungi, not bacteria. They belong to the kingdom Fungi and are used in baking, brewing, and winemaking. Bacteria are an entirely different domain of life."
  },
  {
    topic: "Wind",
    statements: [
      { text: "Wind is caused by uneven heating of Earth's surface by the Sun.", real: true },
      { text: "The fastest wind speed ever recorded on Earth's surface was 253 mph during Cyclone Olivia.", real: true },
      { text: "Wind always blows from areas of low pressure to areas of high pressure.", real: false }
    ],
    explanation: "Wind blows from areas of high pressure to areas of low pressure, not the reverse. Air moves to equalize pressure differences, flowing from high to low."
  },
  {
    topic: "Astronomy Distances",
    statements: [
      { text: "The nearest star to Earth (besides the Sun) is Proxima Centauri, about 4.24 light-years away.", real: true },
      { text: "Light from the Andromeda Galaxy takes about 2.5 million years to reach Earth.", real: true },
      { text: "A light-year is a measure of time, not distance.", real: false }
    ],
    explanation: "A light-year is a unit of distance — the distance light travels in one year, about 5.88 trillion miles. Despite having 'year' in the name, it measures how far, not how long."
  },
  {
    topic: "Chewing Gum",
    statements: [
      { text: "Humans have chewed gum-like substances for thousands of years — ancient Greeks chewed tree resin.", real: true },
      { text: "Singapore banned the sale of chewing gum in 1992.", real: true },
      { text: "Swallowed gum stays in your stomach for 7 years.", real: false }
    ],
    explanation: "Swallowed gum passes through the digestive system normally and is excreted within a few days. While the gum base isn't digestible, it doesn't stick to your insides."
  },
  {
    topic: "Magnification",
    statements: [
      { text: "The first microscopes in the 1600s could magnify objects up to 270 times.", real: true },
      { text: "Electron microscopes can magnify objects up to 10 million times.", real: true },
      { text: "Galileo invented the telescope.", real: false }
    ],
    explanation: "Galileo did not invent the telescope — Hans Lippershey applied for the first patent in 1608. Galileo improved upon the design and was the first to use it systematically for astronomy."
  },
  {
    topic: "Caves Underground",
    statements: [
      { text: "Son Doong Cave in Vietnam is the world's largest cave, with passages big enough to fly a Boeing 747 through.", real: true },
      { text: "Carlsbad Caverns in New Mexico has a colony of hundreds of thousands of bats.", real: true },
      { text: "All caves are formed by water dissolving limestone.", real: false }
    ],
    explanation: "While many caves form through limestone dissolution, caves can also be formed by lava tubes, wave erosion along coastlines, wind erosion, and even by glaciers melting."
  },
  {
    topic: "Bananas",
    statements: [
      { text: "The Cavendish banana we eat today replaced the Gros Michel, which was nearly wiped out by a fungus.", real: true },
      { text: "Bananas are slightly radioactive because they contain potassium-40.", real: true },
      { text: "Banana plants are trees with woody trunks.", real: false }
    ],
    explanation: "Banana plants are not trees — they are giant herbs. Their 'trunk' is actually a pseudostem made of tightly packed leaf bases, not wood."
  },
  {
    topic: "Earthquakes Geography",
    statements: [
      { text: "The New Madrid fault zone in the central US produced some of the strongest earthquakes in North American history.", real: true },
      { text: "Oklahoma now has more earthquakes than California due to wastewater injection from oil drilling.", real: true },
      { text: "Earthquakes only occur at tectonic plate boundaries.", real: false }
    ],
    explanation: "Intraplate earthquakes can occur far from plate boundaries. The New Madrid fault zone in Missouri and human-induced earthquakes in Oklahoma are examples of this."
  },
  {
    topic: "Coffee Culture",
    statements: [
      { text: "The Boston Tea Party helped make coffee the patriotic drink of choice in America.", real: true },
      { text: "The world's most expensive coffee, Black Ivory, is made from beans eaten by elephants.", real: true },
      { text: "Coffee was originally eaten as a food, not drunk as a beverage.", real: false }
    ],
    explanation: "While some African tribes did mix coffee berries with fat to make energy balls, coffee was primarily developed as a brewed beverage from its earliest widespread use in Yemen and Ethiopia."
  },
  {
    topic: "Pyramids",
    statements: [
      { text: "There are more pyramids in Sudan than in Egypt.", real: true },
      { text: "The Great Pyramid was originally covered in smooth white limestone that gleamed in the sun.", real: true },
      { text: "The pyramids were built by slaves.", real: false }
    ],
    explanation: "Archaeological evidence shows the pyramids were built by paid laborers, not slaves. Workers received food, medical care, and were buried with honor near the pyramids."
  },
  {
    topic: "Lightning",
    statements: [
      { text: "Lake Maracaibo in Venezuela has lightning storms about 300 nights per year.", real: true },
      { text: "The Empire State Building is struck by lightning about 23 times per year.", real: true },
      { text: "Lightning never strikes the same place twice.", real: false }
    ],
    explanation: "Lightning frequently strikes the same place multiple times. Tall structures and elevated terrain are hit repeatedly. The Empire State Building is struck roughly 23 times annually."
  }
];
