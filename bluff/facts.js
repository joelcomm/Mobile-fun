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
  }
];
