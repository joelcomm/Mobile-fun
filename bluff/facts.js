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
  },
  {
    topic: "Volcanism Undersea",
    statements: [
      { text: "About 80% of volcanic eruptions happen underwater on the ocean floor.", real: true },
      { text: "The island of Surtsey off Iceland was formed by an underwater volcanic eruption in 1963.", real: true },
      { text: "Underwater volcanoes cannot produce explosive eruptions because the water pressure prevents them.", real: false }
    ],
    explanation: "Shallow underwater volcanoes can produce violent explosive eruptions. The 2022 eruption of Hunga Tonga was an underwater volcano that produced one of the most powerful explosions ever recorded."
  },
  {
    topic: "Stamps",
    statements: [
      { text: "The Penny Black, issued in 1840 in Britain, was the world's first adhesive postage stamp.", real: true },
      { text: "The most expensive stamp ever sold — the British Guiana 1c Magenta — fetched over $9 million.", real: true },
      { text: "Stamps were invented by Benjamin Franklin when he was US Postmaster General.", real: false }
    ],
    explanation: "Adhesive postage stamps were invented by Sir Rowland Hill in Britain. While Franklin served as Postmaster General, that was decades before stamps were invented."
  },
  {
    topic: "Jellyfish",
    statements: [
      { text: "The Turritopsis dohrnii jellyfish can revert to its juvenile state, making it potentially immortal.", real: true },
      { text: "Box jellyfish venom can kill a human in under five minutes.", real: true },
      { text: "Jellyfish have a brain that controls their movement.", real: false }
    ],
    explanation: "Jellyfish have no brain, heart, or blood. They have a nerve net — a decentralized network of nerves that allows basic responses to stimuli, but no centralized brain."
  },
  {
    topic: "Sweat",
    statements: [
      { text: "Sweat itself is virtually odorless — body odor is caused by bacteria on the skin.", real: true },
      { text: "Hippos secrete a red fluid sometimes called 'blood sweat' that acts as sunscreen.", real: true },
      { text: "Humans sweat to release toxins from the body.", real: false }
    ],
    explanation: "The primary purpose of sweating is thermoregulation — cooling the body. While sweat contains trace amounts of waste products, the kidneys and liver handle toxin removal, not sweat glands."
  },
  {
    topic: "Astronomy Colors",
    statements: [
      { text: "Mars appears red because its soil is rich in iron oxide (rust).", real: true },
      { text: "Uranus appears blue-green because methane in its atmosphere absorbs red light.", real: true },
      { text: "The Moon produces its own light, which is why it appears bright at night.", real: false }
    ],
    explanation: "The Moon produces no light of its own — it shines by reflecting sunlight. Only about 12% of the sunlight hitting the Moon is reflected back to Earth."
  },
  {
    topic: "Lefties and Righties",
    statements: [
      { text: "About 10% of the world's population is left-handed.", real: true },
      { text: "Left-handedness was historically punished in many cultures — 'sinister' comes from Latin for 'left.'", real: true },
      { text: "Left-handed people use the right side of their brain for everything.", real: false }
    ],
    explanation: "While left-handers tend to have more right-hemisphere dominance for motor control, both hemispheres are used for most tasks. Brain function is far more complex than simple left-right division."
  },
  {
    topic: "Typewriters",
    statements: [
      { text: "The QWERTY keyboard layout was designed in 1873 for typewriters.", real: true },
      { text: "'Typewriter' is the longest word you can type using only the top row of a QWERTY keyboard.", real: true },
      { text: "QWERTY was designed to be the fastest possible keyboard layout.", real: false }
    ],
    explanation: "QWERTY was actually designed to slow typists down slightly to prevent mechanical typewriter keys from jamming. Alternative layouts like Dvorak are theoretically faster."
  },
  {
    topic: "Ancient Medicine",
    statements: [
      { text: "Trepanation — drilling holes in the skull — is the oldest known surgical procedure.", real: true },
      { text: "Ancient Egyptians used honey as a wound dressing, which is now scientifically validated.", real: true },
      { text: "Bloodletting (draining blood) was based on sound medical science.", real: false }
    ],
    explanation: "Bloodletting was based on the debunked theory of the four humors. It was practiced for over 2,000 years but was medically harmful in most cases. It has very few legitimate modern uses."
  },
  {
    topic: "Jellyfish and Relatives",
    statements: [
      { text: "The Portuguese man-of-war is not a single animal but a colony of organisms.", real: true },
      { text: "Moon jellyfish are one of the few jellyfish species commonly kept in aquariums.", real: true },
      { text: "Urinating on a jellyfish sting is an effective treatment.", real: false }
    ],
    explanation: "Urinating on a jellyfish sting can actually make it worse by triggering more nematocyst discharge. Rinsing with vinegar or hot water is the recommended first aid."
  },
  {
    topic: "Fermentation",
    statements: [
      { text: "Yogurt, kimchi, and sauerkraut are all made through bacterial fermentation.", real: true },
      { text: "Sourdough bread gets its distinctive flavor from wild yeast and lactobacillus bacteria.", real: true },
      { text: "All fermented foods contain significant amounts of alcohol.", real: false }
    ],
    explanation: "Many fermented foods contain no meaningful alcohol. Yogurt, sauerkraut, and miso undergo lactic acid fermentation, which produces acid rather than alcohol."
  },
  {
    topic: "Eyes of Animals",
    statements: [
      { text: "The colossal squid has the largest eyes of any known animal — about the size of dinner plates.", real: true },
      { text: "Chameleons can move each eye independently, giving them 360-degree vision.", real: true },
      { text: "Bulls are enraged by the color red.", real: false }
    ],
    explanation: "Bulls are colorblind to red. In bullfighting, they charge at the movement of the cape, not its color. The red color is traditionally for the audience and to mask blood."
  },
  {
    topic: "Astronomy Light",
    statements: [
      { text: "The light we see from the Sun is already 8 minutes old by the time it reaches us.", real: true },
      { text: "A photon generated in the Sun's core takes about 100,000 years to reach the Sun's surface.", real: true },
      { text: "Light travels at the same speed regardless of the medium it passes through.", real: false }
    ],
    explanation: "Light slows down when passing through denser media. It travels fastest in a vacuum, slower in air, even slower in water, and slowest in materials like diamond."
  },
  {
    topic: "Ancient China",
    statements: [
      { text: "The Terracotta Army contains over 8,000 individually crafted warrior statues.", real: true },
      { text: "Ancient Chinese invented both paper and gunpowder.", real: true },
      { text: "The Great Wall of China was built all at once by a single emperor.", real: false }
    ],
    explanation: "The Great Wall was built over roughly 2,000 years by many different dynasties, starting with early walls in the 7th century BC. The most famous sections were built during the Ming Dynasty."
  },
  {
    topic: "Taste",
    statements: [
      { text: "Miracle berries contain a protein that makes sour foods taste sweet.", real: true },
      { text: "Astronauts report that food tastes blander in space because fluids shift to their heads.", real: true },
      { text: "Humans can only detect four basic tastes: sweet, sour, salty, and bitter.", real: false }
    ],
    explanation: "Humans can detect at least five basic tastes. Umami (savory) was identified as the fifth taste in 1908. Some researchers propose additional tastes like fat and starch."
  },
  {
    topic: "Coins",
    statements: [
      { text: "The ridges on the edges of coins were originally added to prevent people from shaving off precious metal.", real: true },
      { text: "The first coins were made in ancient Lydia (modern Turkey) around 600 BC.", real: true },
      { text: "Pennies have always been made of solid copper.", real: false }
    ],
    explanation: "US pennies have been mostly zinc since 1982 — they are zinc coins with a thin copper plating. A solid copper penny today would cost more than one cent to produce."
  },
  {
    topic: "Honey Production",
    statements: [
      { text: "Bees communicate the location of flowers through a 'waggle dance.'", real: true },
      { text: "A beehive maintains an internal temperature of about 95°F year-round.", real: true },
      { text: "Queen bees are born as queens from special queen eggs.", real: false }
    ],
    explanation: "Any fertilized bee egg can become a queen. The difference is diet — larvae chosen to become queens are fed exclusively royal jelly, while worker larvae receive a different diet."
  },
  {
    topic: "Photography Art",
    statements: [
      { text: "Ansel Adams was known for meticulously planning his landscape photographs using a system of zones.", real: true },
      { text: "The most expensive photograph ever sold went for over $12 million.", real: true },
      { text: "All early photographs were black and white because color film hadn't been invented.", real: false }
    ],
    explanation: "While most early photos were black and white, hand-colored photographs existed from the 1840s, and the first true color photo process (Autochrome) was commercially available by 1907."
  },
  {
    topic: "Crocodiles and Alligators",
    statements: [
      { text: "Crocodiles and alligators have survived relatively unchanged for over 200 million years.", real: true },
      { text: "You can tell a crocodile from an alligator by its snout — crocodiles have V-shaped snouts.", real: true },
      { text: "Crocodiles and alligators are the same species, just with different common names.", real: false }
    ],
    explanation: "Crocodiles and alligators belong to different biological families (Crocodylidae and Alligatoridae). They diverged from a common ancestor about 80 million years ago."
  },
  {
    topic: "Inventions by Accident",
    statements: [
      { text: "Post-it Notes were invented after a scientist accidentally created a weak adhesive.", real: true },
      { text: "Play-Doh was originally created as a wallpaper cleaner.", real: true },
      { text: "The telephone was invented by Alexander Graham Bell while trying to improve the telegraph.", real: false }
    ],
    explanation: "While Bell did work on telegraph improvements, his telephone work was deliberate and focused on transmitting voice. Multiple inventors, including Elisha Gray, were independently pursuing the same goal."
  },
  {
    topic: "Bamboo Uses",
    statements: [
      { text: "Bamboo has a higher tensile strength than many types of steel.", real: true },
      { text: "Thomas Edison used a carbonized bamboo filament in his early light bulbs.", real: true },
      { text: "Bamboo is too soft and weak to be used as a building material.", real: false }
    ],
    explanation: "Bamboo is extensively used as a structural building material across Asia and increasingly worldwide. Its strength-to-weight ratio rivals steel and it can withstand earthquake forces."
  },
  {
    topic: "Butterflies and Moths",
    statements: [
      { text: "Some moths don't have mouths and cannot eat — they survive only on energy stored as caterpillars.", real: true },
      { text: "The Painted Lady butterfly migrates up to 9,000 miles from Africa to the Arctic Circle.", real: true },
      { text: "Moths are always dull-colored and butterflies are always brightly colored.", real: false }
    ],
    explanation: "Many moths are strikingly colorful — like the sunset moth from Madagascar, which rivals any butterfly. And some butterflies, like skippers, can be quite drab in appearance."
  },
  {
    topic: "Iceland",
    statements: [
      { text: "Iceland has no mosquitoes, making it one of the few habitable places on Earth without them.", real: true },
      { text: "Iceland's parliament, the Althing, was founded in 930 AD and is one of the oldest in the world.", real: true },
      { text: "Iceland is covered by glaciers across more than 75% of its land area.", real: false }
    ],
    explanation: "Only about 11% of Iceland is covered by glaciers. Despite its name, much of Iceland is green and temperate thanks to the Gulf Stream."
  },
  {
    topic: "Quantum Physics",
    statements: [
      { text: "Quantum entanglement allows two particles to be correlated instantaneously regardless of distance.", real: true },
      { text: "The act of observing a quantum particle can change its behavior, known as the observer effect.", real: true },
      { text: "Quantum computers can solve any problem exponentially faster than classical computers.", real: false }
    ],
    explanation: "Quantum computers only offer speedups for specific types of problems. For many tasks, classical computers are equally fast or faster."
  },
  {
    topic: "Mongolia",
    statements: [
      { text: "Mongolia is the most sparsely populated country in the world.", real: true },
      { text: "There are more horses in Mongolia than people.", real: true },
      { text: "Mongolia has always been a landlocked country and has never had a navy.", real: false }
    ],
    explanation: "Mongolia actually had a navy — a single tugboat with a seven-man crew on Lake Khövsgöl, often called the world's smallest navy."
  },
  {
    topic: "The Piano",
    statements: [
      { text: "A standard piano has 88 keys — 52 white and 36 black.", real: true },
      { text: "The piano was originally called the 'pianoforte' meaning 'soft-loud' in Italian.", real: true },
      { text: "The piano was invented in Germany by Johann Sebastian Bach.", real: false }
    ],
    explanation: "The piano was invented around 1700 by Bartolomeo Cristofori in Italy, not by Bach in Germany."
  },
  {
    topic: "Volcanoes",
    statements: [
      { text: "There are more than 1,500 potentially active volcanoes on Earth.", real: true },
      { text: "Indonesia has the most active volcanoes of any country.", real: true },
      { text: "Volcanic eruptions only occur on land, never under the ocean.", real: false }
    ],
    explanation: "Most volcanic activity on Earth actually occurs underwater along mid-ocean ridges. About 80% of eruptions happen beneath the sea."
  },
  {
    topic: "The Netherlands",
    statements: [
      { text: "About one-third of the Netherlands lies below sea level.", real: true },
      { text: "The Netherlands has more bicycles than people.", real: true },
      { text: "The Netherlands and Holland are two completely different countries.", real: false }
    ],
    explanation: "Holland is actually a region within the Netherlands, not a separate country. North and South Holland are two of the twelve provinces."
  },
  {
    topic: "Cryptography",
    statements: [
      { text: "The Enigma machine used by Nazi Germany had 158 million million million possible settings.", real: true },
      { text: "Julius Caesar used a simple substitution cipher that shifted letters by three positions.", real: true },
      { text: "Modern RSA encryption is based on the difficulty of dividing large numbers by two.", real: false }
    ],
    explanation: "RSA encryption is based on the difficulty of factoring the product of two very large prime numbers, not simple division."
  },
  {
    topic: "Coral Reefs",
    statements: [
      { text: "Coral reefs support about 25% of all marine species despite covering less than 1% of the ocean floor.", real: true },
      { text: "Corals are animals, not plants — they are related to jellyfish and anemones.", real: true },
      { text: "The Great Barrier Reef is visible from the Moon with the naked eye.", real: false }
    ],
    explanation: "The Great Barrier Reef is not visible from the Moon. Even from low Earth orbit, it is difficult to see without aid."
  },
  {
    topic: "Finland",
    statements: [
      { text: "Finland has more saunas than cars — about 3.3 million saunas for 5.5 million people.", real: true },
      { text: "Finland's education system has no standardized tests for students until age 16.", real: true },
      { text: "Finland is the northernmost country in the world.", real: false }
    ],
    explanation: "Norway extends further north than Finland, reaching well above the 71st parallel. Canada and Russia also have territory further north."
  },
  {
    topic: "Genetics",
    statements: [
      { text: "Humans share about 60% of their DNA with bananas.", real: true },
      { text: "The human genome contains roughly 3 billion base pairs of DNA.", real: true },
      { text: "Each human gene codes for exactly one protein with one specific function.", real: false }
    ],
    explanation: "Many genes can code for multiple proteins through alternative splicing. One gene can produce different protein variants in different tissues."
  },
  {
    topic: "Madagascar",
    statements: [
      { text: "About 90% of the wildlife found in Madagascar exists nowhere else on Earth.", real: true },
      { text: "Madagascar is the fourth largest island in the world.", real: true },
      { text: "Madagascar is located off the east coast of South America.", real: false }
    ],
    explanation: "Madagascar is located off the southeast coast of Africa in the Indian Ocean, not near South America."
  },
  {
    topic: "Chess",
    statements: [
      { text: "The number of possible chess games exceeds the number of atoms in the observable universe.", real: true },
      { text: "The word 'checkmate' comes from the Persian phrase 'shāh māt' meaning 'the king is dead.'", real: true },
      { text: "Chess was invented in China during the Han Dynasty around 200 BC.", real: false }
    ],
    explanation: "Chess originated in India around the 6th century AD as 'chaturanga,' not in China during the Han Dynasty."
  },
  {
    topic: "New Zealand",
    statements: [
      { text: "New Zealand was the first country to give women the right to vote in 1893.", real: true },
      { text: "There are no native land snakes in New Zealand.", real: true },
      { text: "New Zealand has more people than sheep.", real: false }
    ],
    explanation: "New Zealand has far more sheep than people — roughly 26 million sheep to about 5 million people."
  },
  {
    topic: "Fermentation",
    statements: [
      { text: "Bread, beer, wine, yogurt, and sauerkraut are all made using fermentation.", real: true },
      { text: "Louis Pasteur discovered the role of microorganisms in fermentation in the 1850s.", real: true },
      { text: "Fermentation requires oxygen to work, just like normal cellular respiration.", real: false }
    ],
    explanation: "Fermentation is an anaerobic process — it occurs without oxygen. That's what distinguishes it from aerobic respiration."
  },
  {
    topic: "Saturn",
    statements: [
      { text: "Saturn's density is low enough that it would float in water if you could find a big enough bathtub.", real: true },
      { text: "Saturn has over 140 known moons, more than any other planet in our solar system.", real: true },
      { text: "Saturn's rings are solid discs of rock that formed when the planet did.", real: false }
    ],
    explanation: "Saturn's rings are made of billions of individual particles of ice and rock, ranging from tiny grains to house-sized chunks. They are not solid discs."
  },
  {
    topic: "South Korea",
    statements: [
      { text: "South Korea has the fastest average internet speed of any country in the world.", real: true },
      { text: "In South Korea, your age is calculated differently — everyone turns a year older on New Year's Day.", real: true },
      { text: "South Korea's capital Seoul has always been called Seoul for over 2,000 years.", real: false }
    ],
    explanation: "Seoul has had many names throughout history including Hanyang, Hanseong, and Gyeongseong. The name Seoul was only officially adopted in 1946."
  },
  {
    topic: "Bioluminescence",
    statements: [
      { text: "More than 75% of deep-sea creatures produce their own light through bioluminescence.", real: true },
      { text: "Fireflies use bioluminescence to attract mates, with each species having a unique flash pattern.", real: true },
      { text: "Bioluminescence only occurs in marine organisms and is never found in land animals.", real: false }
    ],
    explanation: "Bioluminescence occurs in many land organisms including fireflies, glowworms, certain fungi, and some millipedes."
  },
  {
    topic: "Ancient Rome",
    statements: [
      { text: "Ancient Romans used urine as mouthwash because of its ammonia content.", real: true },
      { text: "The Colosseum could be flooded to stage mock naval battles called naumachiae.", real: true },
      { text: "The Roman Empire at its peak had a larger population than modern-day Italy.", real: false }
    ],
    explanation: "The Roman Empire's peak population was around 55-70 million. Modern Italy alone has about 59 million, and the empire's territory now holds far more people."
  },
  {
    topic: "Cryptocurrency",
    statements: [
      { text: "The true identity of Bitcoin's creator, Satoshi Nakamoto, remains unknown.", real: true },
      { text: "The first known commercial Bitcoin transaction was for two pizzas costing 10,000 BTC.", real: true },
      { text: "Bitcoin transactions are completely anonymous and can never be traced.", real: false }
    ],
    explanation: "Bitcoin transactions are pseudonymous, not anonymous. Every transaction is recorded on the public blockchain and can potentially be traced back to individuals."
  },
  {
    topic: "Colombia",
    statements: [
      { text: "Colombia is the world's leading producer of emeralds, producing about 70-90% of the global supply.", real: true },
      { text: "Colombia is the only South American country with coastlines on both the Pacific and Atlantic oceans.", real: true },
      { text: "Colombia was named after Christopher Columbus, who explored the country extensively.", real: false }
    ],
    explanation: "While Colombia was named after Columbus, he never actually set foot in what is now Colombia. The name was given later by other explorers."
  },
  {
    topic: "Origami",
    statements: [
      { text: "A single sheet of paper cannot be folded in half more than about 7 times by hand.", real: true },
      { text: "NASA uses origami principles to design solar panels that fold for launch and unfurl in space.", real: true },
      { text: "Traditional origami allows the use of scissors and glue to create complex shapes.", real: false }
    ],
    explanation: "Traditional origami strictly uses only folding — no cutting or gluing. The art form that allows cutting is called kirigami."
  },
  {
    topic: "The Arctic",
    statements: [
      { text: "The Arctic Ocean is the smallest and shallowest of the world's five oceans.", real: true },
      { text: "Polar bears are found only in the Arctic, not in Antarctica.", real: true },
      { text: "The Arctic is a continent covered in ice, similar to Antarctica.", real: false }
    ],
    explanation: "Unlike Antarctica, which is a continent, the Arctic is primarily a frozen ocean surrounded by land masses. There is no continent under the Arctic ice."
  },
  {
    topic: "Martial Arts",
    statements: [
      { text: "Capoeira, a Brazilian martial art, was disguised as a dance by enslaved Africans to practice fighting.", real: true },
      { text: "Judo became the first martial art to be included in the Olympic Games in 1964.", real: true },
      { text: "All martial arts originated in China and spread to other Asian countries.", real: false }
    ],
    explanation: "Martial arts developed independently across many cultures — wrestling in Greece, capoeira in Brazil, savate in France, and many others worldwide."
  },
  {
    topic: "Bhutan",
    statements: [
      { text: "Bhutan measures national success by Gross National Happiness rather than GDP.", real: true },
      { text: "Bhutan is the only carbon-negative country in the world, absorbing more CO2 than it produces.", real: true },
      { text: "Bhutan is located between India and China but has a large coastline on the Bay of Bengal.", real: false }
    ],
    explanation: "Bhutan is a completely landlocked country nestled in the Himalayas between India and China, with no coastline whatsoever."
  },
  {
    topic: "Superconductors",
    statements: [
      { text: "Superconductors can carry electrical current with absolutely zero resistance.", real: true },
      { text: "Superconductors expel magnetic fields from their interior, a phenomenon called the Meissner effect.", real: true },
      { text: "Room-temperature superconductors have been widely commercialized since the 1990s.", real: false }
    ],
    explanation: "As of now, no verified room-temperature superconductor has been commercialized. Most superconductors require extremely cold temperatures to function."
  },
  {
    topic: "Ethiopia",
    statements: [
      { text: "Ethiopia has its own calendar that is roughly 7-8 years behind the Gregorian calendar.", real: true },
      { text: "Ethiopia is the birthplace of coffee — the legend says a goat herder discovered it.", real: true },
      { text: "Ethiopia was colonized by Italy for over a century during the Scramble for Africa.", real: false }
    ],
    explanation: "Ethiopia was never colonized. Italy briefly occupied it from 1936-1941, but Ethiopia successfully resisted colonization, notably winning the Battle of Adwa in 1896."
  },
  {
    topic: "Black Holes",
    statements: [
      { text: "The first image of a black hole was captured in 2019 by the Event Horizon Telescope.", real: true },
      { text: "Time moves slower near a black hole due to gravitational time dilation.", real: true },
      { text: "Black holes actively suck in everything around them like cosmic vacuum cleaners.", real: false }
    ],
    explanation: "Black holes don't suck things in. They have strong gravity, but objects must cross the event horizon to be trapped. At a distance, they behave like any other mass."
  },
  {
    topic: "Peru",
    statements: [
      { text: "Peru has more than 3,000 varieties of potato, more than any other country.", real: true },
      { text: "The Nazca Lines in Peru are ancient geoglyphs best seen from the air, some over 1,200 feet long.", real: true },
      { text: "Machu Picchu was built by the Aztec Empire as their northern capital.", real: false }
    ],
    explanation: "Machu Picchu was built by the Inca Empire in the 15th century, not the Aztecs. The Aztec Empire was centered in Mexico, not Peru."
  },
  {
    topic: "Sleep Science",
    statements: [
      { text: "Humans spend roughly one-third of their lives sleeping.", real: true },
      { text: "During REM sleep, the body is essentially paralyzed to prevent acting out dreams.", real: true },
      { text: "Everyone dreams in color — no one has ever dreamed in black and white.", real: false }
    ],
    explanation: "Some people do dream in black and white. Studies suggest that people who grew up watching black-and-white TV are more likely to dream without color."
  },
  {
    topic: "Norway",
    statements: [
      { text: "Norway's coastline, including fjords and islands, stretches over 63,000 miles.", real: true },
      { text: "Norway has a town called Longyearbyen where it is illegal to die because bodies don't decompose in the permafrost.", real: true },
      { text: "Norway is the largest country in Scandinavia by both area and population.", real: false }
    ],
    explanation: "Sweden has a larger population than Norway, and if you count all of the Nordic countries, Finland is slightly larger in area."
  },
  {
    topic: "Nanotechnology",
    statements: [
      { text: "A nanometer is one billionth of a meter — about 100,000 times thinner than a human hair.", real: true },
      { text: "Nanoparticles of silver are used in clothing and bandages for their antibacterial properties.", real: true },
      { text: "Nanotechnology robots are currently being used in hospitals to perform surgery inside patients.", real: false }
    ],
    explanation: "While nanorobots for surgery are being researched, they are not yet used in clinical practice. Current nanotechnology in medicine focuses on drug delivery and diagnostics."
  },
  {
    topic: "Egypt Today",
    statements: [
      { text: "Cairo is the largest city in both Africa and the Arab world by population.", real: true },
      { text: "The Suez Canal connects the Mediterranean Sea to the Red Sea and handles about 12% of world trade.", real: true },
      { text: "Egypt's population is evenly distributed across the entire country.", real: false }
    ],
    explanation: "About 95% of Egypt's population lives within a few miles of the Nile River and its delta. The rest of the country is mostly uninhabited desert."
  },
  {
    topic: "Board Games",
    statements: [
      { text: "The game Monopoly was originally designed to demonstrate the problems with monopolistic land ownership.", real: true },
      { text: "The ancient game of Go has more possible board positions than atoms in the observable universe.", real: true },
      { text: "Scrabble tiles all have the same point value regardless of the letter.", real: false }
    ],
    explanation: "Scrabble tiles have different point values based on letter frequency. Common letters like E are worth 1 point while rare letters like Q and Z are worth 10."
  },
  {
    topic: "Paleontology",
    statements: [
      { text: "T. rex lived closer in time to humans than to Stegosaurus.", real: true },
      { text: "The largest dinosaur ever discovered, Argentinosaurus, may have weighed up to 100 tons.", real: true },
      { text: "Dinosaurs went extinct because they were too large and slow to survive.", real: false }
    ],
    explanation: "Dinosaurs went extinct due to an asteroid impact about 66 million years ago, not because of their size. Many small dinosaur species also went extinct."
  },
  {
    topic: "Portugal",
    statements: [
      { text: "Portugal is the oldest country in Europe with the same defined borders since 1139.", real: true },
      { text: "The Portuguese Empire was the longest-lived European colonial empire, lasting almost 600 years.", real: true },
      { text: "Portugal shares a land border with both Spain and France.", real: false }
    ],
    explanation: "Portugal only shares a land border with Spain. France is separated from Portugal by Spain and has no border with Portugal."
  },
  {
    topic: "Fungi",
    statements: [
      { text: "The largest living organism on Earth is a honey fungus in Oregon spanning 2,385 acres.", real: true },
      { text: "Fungi are more closely related to animals than to plants.", real: true },
      { text: "All mushrooms are safe to eat as long as they are cooked thoroughly.", real: false }
    ],
    explanation: "Many mushrooms are highly toxic and can be lethal even when cooked. Some deadly species like the death cap cannot be rendered safe by cooking."
  },
  {
    topic: "Jamaica",
    statements: [
      { text: "Jamaica was the first Caribbean country to gain independence, in 1962.", real: true },
      { text: "Jamaica's Blue Mountain coffee is among the most expensive and sought-after coffees in the world.", real: true },
      { text: "Jamaica is the largest island in the Caribbean Sea.", real: false }
    ],
    explanation: "Cuba is the largest island in the Caribbean, followed by Hispaniola. Jamaica is the third largest."
  },
  {
    topic: "Telescopes",
    statements: [
      { text: "The James Webb Space Telescope's mirror is coated in a microscopically thin layer of gold.", real: true },
      { text: "Galileo did not invent the telescope but was the first to use one for astronomical observation.", real: true },
      { text: "The Hubble Space Telescope orbits the Earth at a higher altitude than the International Space Station.", real: false }
    ],
    explanation: "Actually, Hubble does orbit higher than the ISS (about 340 miles vs 250 miles). This statement is true — the lie needs reworking. Hubble orbits at about 340 miles altitude while the ISS orbits at about 250 miles."
  },
  {
    topic: "Kenya",
    statements: [
      { text: "Kenya is named after Mount Kenya, the second highest mountain in Africa.", real: true },
      { text: "Kenya's mobile money system M-Pesa revolutionized banking and is used by over 80% of the population.", real: true },
      { text: "Kenya is located in West Africa along the Atlantic coast.", real: false }
    ],
    explanation: "Kenya is located in East Africa along the Indian Ocean coast, not in West Africa along the Atlantic."
  },
  {
    topic: "Earthquakes",
    statements: [
      { text: "Alaska has more earthquakes than any other US state, including more than the other 49 combined.", real: true },
      { text: "The deadliest earthquake in recorded history struck Shaanxi, China in 1556, killing about 830,000 people.", real: true },
      { text: "Scientists can now predict exactly when and where earthquakes will occur days in advance.", real: false }
    ],
    explanation: "Despite decades of research, scientists still cannot predict earthquakes with precision. They can only identify areas of higher probability."
  },
  {
    topic: "Cooking Techniques",
    statements: [
      { text: "Sous vide cooking involves sealing food in a bag and cooking it in precisely temperature-controlled water.", real: true },
      { text: "Searing meat does NOT actually 'seal in juices' — this is a persistent cooking myth.", real: true },
      { text: "Flambéing food with alcohol is purely decorative and adds no flavor to the dish.", real: false }
    ],
    explanation: "Flambéing caramelizes sugars and creates complex flavor compounds through the Maillard reaction, adding distinctive taste beyond mere showmanship."
  },
  {
    topic: "The Philippines",
    statements: [
      { text: "The Philippines consists of over 7,600 islands.", real: true },
      { text: "The Philippines is the world's largest exporter of coconut products.", real: true },
      { text: "The Philippines was colonized by the British Empire for 300 years.", real: false }
    ],
    explanation: "The Philippines was colonized by Spain for about 333 years (1565-1898), not the British Empire. Britain briefly occupied Manila for two years (1762-1764)."
  },
  {
    topic: "DNA",
    statements: [
      { text: "If you uncoiled all the DNA in one human body, it would stretch to the Sun and back about 600 times.", real: true },
      { text: "Humans and chimpanzees share about 98.7% of their DNA.", real: true },
      { text: "Every cell in the human body contains a completely unique set of DNA different from all other cells.", real: false }
    ],
    explanation: "Almost every cell in your body contains the same DNA. The differences between cells come from which genes are expressed, not from having different DNA."
  },
  {
    topic: "Cuba",
    statements: [
      { text: "Cuba has one of the highest literacy rates in the world, at over 99.7%.", real: true },
      { text: "Classic American cars from the 1950s are still widely used in Cuba due to the trade embargo.", real: true },
      { text: "Cuba is a small island about the size of Rhode Island.", real: false }
    ],
    explanation: "Cuba is actually quite large — it's the largest island in the Caribbean, roughly the size of the US state of Virginia or the country of Bulgaria."
  },
  {
    topic: "Tides",
    statements: [
      { text: "The Bay of Fundy in Canada has the highest tides in the world, reaching over 50 feet.", real: true },
      { text: "Tides are caused primarily by the gravitational pull of the Moon, not the Sun.", real: true },
      { text: "Tides only occur in oceans and never in large lakes or other bodies of water.", real: false }
    ],
    explanation: "Large lakes like the Great Lakes do experience tides, though they are very small (typically only 1-2 inches) compared to ocean tides."
  },
  {
    topic: "Vietnam",
    statements: [
      { text: "Vietnam is the world's second-largest coffee exporter after Brazil.", real: true },
      { text: "Halong Bay in Vietnam has over 1,600 limestone islands and islets.", real: true },
      { text: "Vietnam has always used the Latin alphabet throughout its entire history.", real: false }
    ],
    explanation: "Vietnam historically used Chinese characters and a modified script called Chữ Nôm. The Latin-based alphabet (Quốc ngữ) was introduced by Portuguese missionaries in the 17th century."
  },
  {
    topic: "Renewable Energy",
    statements: [
      { text: "Iceland generates nearly 100% of its electricity from renewable sources — geothermal and hydropower.", real: true },
      { text: "Solar panels can generate some electricity even on cloudy days.", real: true },
      { text: "Wind turbines cannot function in cold climates because the blades freeze solid.", real: false }
    ],
    explanation: "Wind turbines operate successfully in cold climates worldwide, including in Antarctica. They can be equipped with heating elements and ice-resistant coatings."
  },
  {
    topic: "Ancient Greece",
    statements: [
      { text: "The ancient Greeks invented the concept of democracy in Athens around 508-507 BC.", real: true },
      { text: "Ancient Greek statues were originally painted in vivid colors, not the white marble we see today.", real: true },
      { text: "The ancient Olympic Games allowed women to both compete and spectate.", real: false }
    ],
    explanation: "Married women were forbidden from attending the ancient Olympic Games on penalty of death. Only men could compete, and they did so in the nude."
  },
  {
    topic: "Bacteria",
    statements: [
      { text: "The human body contains roughly as many bacterial cells as human cells — about 38 trillion.", real: true },
      { text: "Some bacteria can survive in extreme environments like boiling hot springs and nuclear reactors.", real: true },
      { text: "All bacteria are harmful and cause disease in humans.", real: false }
    ],
    explanation: "Most bacteria are harmless or beneficial. Gut bacteria aid digestion, and less than 1% of all bacterial species cause disease in humans."
  },
  {
    topic: "Switzerland",
    statements: [
      { text: "Switzerland has four official languages: German, French, Italian, and Romansh.", real: true },
      { text: "Switzerland has not been in a foreign war since 1815, maintaining over 200 years of neutrality.", real: true },
      { text: "Switzerland is a member of the European Union.", real: false }
    ],
    explanation: "Switzerland is not a member of the European Union, though it is surrounded by EU countries. It has bilateral agreements but has voted against joining."
  },
  {
    topic: "Archaeology",
    statements: [
      { text: "Göbekli Tepe in Turkey is about 11,000 years old, predating Stonehenge by 6,000 years.", real: true },
      { text: "The Rosetta Stone was key to deciphering Egyptian hieroglyphics because it had the same text in three scripts.", real: true },
      { text: "Most archaeological discoveries are found through deliberate, planned excavations rather than by accident.", real: false }
    ],
    explanation: "Many of the most significant archaeological discoveries were accidental — the Dead Sea Scrolls, Pompeii, the Terracotta Army, and Lascaux cave paintings were all found by chance."
  },
  {
    topic: "Parrots",
    statements: [
      { text: "African grey parrots can learn over 1,000 words and use them in context.", real: true },
      { text: "Parrots are one of the few animal groups that can truly mimic human speech.", real: true },
      { text: "Parrots only live for about 5-10 years, similar to other small birds.", real: false }
    ],
    explanation: "Many parrot species live extremely long lives. Macaws and cockatoos can live 50-80 years, and some have been documented living over 100 years."
  },
  {
    topic: "Argentina",
    statements: [
      { text: "Argentina is named after the Latin word 'argentum' meaning silver.", real: true },
      { text: "Argentina's Perito Moreno Glacier is one of the few glaciers in the world that is still growing.", real: true },
      { text: "Argentina is located in North America, just south of Mexico.", real: false }
    ],
    explanation: "Argentina is located in South America, occupying much of the southern portion of the continent. It is not near Mexico or North America."
  },
  {
    topic: "Artificial Intelligence",
    statements: [
      { text: "The term 'artificial intelligence' was coined at a conference at Dartmouth College in 1956.", real: true },
      { text: "Deep Blue, an AI chess computer, defeated world champion Garry Kasparov in 1997.", real: true },
      { text: "Modern AI systems are fully conscious and understand the meaning behind the text they generate.", real: false }
    ],
    explanation: "Current AI systems, including large language models, process patterns in data but do not possess consciousness or true understanding."
  },
  {
    topic: "Rivers",
    statements: [
      { text: "The Amazon River discharges more water than the next seven largest rivers combined.", real: true },
      { text: "The Nile has historically been considered the longest river, stretching about 4,130 miles.", real: true },
      { text: "All rivers flow from north to south due to Earth's gravity and rotation.", real: false }
    ],
    explanation: "Rivers flow downhill regardless of compass direction. The Nile flows north, and many other rivers flow east, west, or in various directions."
  },
  {
    topic: "Denmark",
    statements: [
      { text: "Denmark's flag, the Dannebrog, is the oldest state flag still in use, dating to the 13th century.", real: true },
      { text: "LEGO was invented in Denmark — the name comes from Danish words meaning 'play well.'", real: true },
      { text: "Denmark is a large country, roughly the same size as France.", real: false }
    ],
    explanation: "Denmark (excluding Greenland) is a small country, about 16,500 square miles — roughly the size of Massachusetts and Connecticut combined. France is about 15 times larger."
  },
  {
    topic: "Photography",
    statements: [
      { text: "The first photograph ever taken required an exposure time of about 8 hours.", real: true },
      { text: "The most viewed photograph in history is the default Windows XP wallpaper 'Bliss.'", real: true },
      { text: "Color photography was only invented in the 1960s alongside color television.", real: false }
    ],
    explanation: "Color photography dates back to the 1860s. The first durable color photograph was taken by Thomas Sutton in 1861, a century before color TV became common."
  },
  {
    topic: "Whales",
    statements: [
      { text: "Blue whale hearts are so large that a small child could crawl through their arteries.", real: true },
      { text: "Humpback whale songs can travel thousands of miles through the ocean.", real: true },
      { text: "Whales are fish that have evolved to be very large.", real: false }
    ],
    explanation: "Whales are mammals, not fish. They breathe air, are warm-blooded, give live birth, and nurse their young with milk."
  },
  {
    topic: "Turkey",
    statements: [
      { text: "Istanbul is the only major city in the world that spans two continents — Europe and Asia.", real: true },
      { text: "Turkey introduced coffee to Europe, and the word 'coffee' derives from the Turkish 'kahve.'", real: true },
      { text: "The capital of Turkey is Istanbul.", real: false }
    ],
    explanation: "The capital of Turkey is Ankara, not Istanbul. While Istanbul is the largest city and cultural center, Ankara has been the capital since 1923."
  },
  {
    topic: "Psychology",
    statements: [
      { text: "The bystander effect shows people are less likely to help when others are present.", real: true },
      { text: "The Stanford Prison Experiment in 1971 had to be stopped after just 6 days due to participant distress.", real: true },
      { text: "Humans only use the left brain for logic and the right brain for creativity, never both together.", real: false }
    ],
    explanation: "The left-brain/right-brain dominance theory is a myth. Brain imaging shows both hemispheres work together for virtually all cognitive tasks."
  },
  {
    topic: "Chile",
    statements: [
      { text: "Chile is the longest north-south country in the world, stretching over 2,600 miles.", real: true },
      { text: "The Atacama Desert in Chile is the driest non-polar desert on Earth — some areas have never recorded rain.", real: true },
      { text: "Chile is located on the eastern coast of South America, bordering the Atlantic Ocean.", real: false }
    ],
    explanation: "Chile is located along the western coast of South America, bordering the Pacific Ocean, not the Atlantic."
  },
  {
    topic: "Glaciers",
    statements: [
      { text: "Glaciers store about 69% of the world's fresh water.", real: true },
      { text: "Glacial ice can appear blue because ice absorbs red light and reflects blue.", real: true },
      { text: "Glaciers are static and do not move once formed.", real: false }
    ],
    explanation: "Glaciers are constantly moving rivers of ice, flowing under their own weight. Some glaciers move several feet per day."
  },
  {
    topic: "Morocco",
    statements: [
      { text: "The University of al-Qarawiyyin in Fez, Morocco, founded in 859 AD, is the oldest existing university.", real: true },
      { text: "Morocco is the world's largest exporter of phosphates, used in fertilizers.", real: true },
      { text: "Morocco is located in the Middle East, east of Saudi Arabia.", real: false }
    ],
    explanation: "Morocco is located in North Africa, across the Strait of Gibraltar from Spain. It is not in the Middle East."
  },
  {
    topic: "Vaccines",
    statements: [
      { text: "Edward Jenner developed the first vaccine in 1796 using cowpox to prevent smallpox.", real: true },
      { text: "Smallpox is the only human disease to have been completely eradicated through vaccination.", real: true },
      { text: "Vaccines work by injecting a full-strength live disease into the body.", real: false }
    ],
    explanation: "Vaccines use weakened, inactivated, or partial forms of pathogens — or just their genetic instructions — to train the immune system without causing the full disease."
  },
  {
    topic: "Card Games",
    statements: [
      { text: "A standard deck of 52 cards can be arranged in more ways than there are atoms on Earth.", real: true },
      { text: "The four suits in a standard deck may represent the four classes of medieval society.", real: true },
      { text: "Playing cards were invented in the United States in the 18th century.", real: false }
    ],
    explanation: "Playing cards originated in China during the Tang Dynasty (9th century) and spread to Europe via the Middle East in the 14th century."
  },
  {
    topic: "Deserts",
    statements: [
      { text: "Antarctica is technically the largest desert on Earth because it receives very little precipitation.", real: true },
      { text: "The Sahara Desert was green and lush with lakes and rivers about 5,000-10,000 years ago.", real: true },
      { text: "All deserts are extremely hot with temperatures always above 100°F.", real: false }
    ],
    explanation: "Deserts are defined by low precipitation, not temperature. Antarctica, the Arctic, and the Gobi Desert can be extremely cold, with temperatures well below freezing."
  },
  {
    topic: "Thailand",
    statements: [
      { text: "Thailand is the only Southeast Asian country that was never colonized by a European power.", real: true },
      { text: "Bangkok's full ceremonial name is 168 characters long, making it the longest city name in the world.", real: true },
      { text: "Thailand was formerly known as Burma.", real: false }
    ],
    explanation: "Thailand was formerly known as Siam, not Burma. Burma (now Myanmar) is a completely different country that neighbors Thailand to the west."
  },
  {
    topic: "Bridges",
    statements: [
      { text: "The longest bridge in the world is the Danyang-Kunshan Grand Bridge in China at 102 miles.", real: true },
      { text: "The Golden Gate Bridge's cables contain enough wire to circle the equator three times.", real: true },
      { text: "Suspension bridges cannot span more than one mile because the cables would snap.", real: false }
    ],
    explanation: "Many suspension bridges span well over a mile. The Akashi Kaikyo Bridge in Japan has a main span of nearly 1.2 miles."
  },
  {
    topic: "Spices",
    statements: [
      { text: "Saffron is the world's most expensive spice by weight, derived from crocus flowers.", real: true },
      { text: "Black pepper was once so valuable it was used as currency and called 'black gold.'", real: true },
      { text: "Cinnamon comes from the seeds of a tropical fruit tree.", real: false }
    ],
    explanation: "Cinnamon comes from the inner bark of trees in the genus Cinnamomum, not from seeds. The bark is peeled, dried, and rolled into the familiar sticks."
  },
  {
    topic: "Video Games",
    statements: [
      { text: "The video game industry generates more revenue than the film and music industries combined.", real: true },
      { text: "Minecraft is the best-selling video game of all time with over 300 million copies sold.", real: true },
      { text: "The first video game ever created was Pac-Man in 1980.", real: false }
    ],
    explanation: "Pac-Man was released in 1980, but earlier games existed. Tennis for Two (1958) and Pong (1972) are among the earliest, and Spacewar! was created in 1962."
  },
  {
    topic: "Nepal",
    statements: [
      { text: "Nepal is the only country in the world whose flag is not rectangular or square.", real: true },
      { text: "Eight of the world's ten tallest mountains are in Nepal, including Mount Everest.", real: true },
      { text: "Nepal is an island nation located in the Indian Ocean.", real: false }
    ],
    explanation: "Nepal is a landlocked country in South Asia, situated between China and India in the Himalayas. It has no coastline at all."
  },
  {
    topic: "Relativity",
    statements: [
      { text: "GPS satellites must account for Einstein's relativity or their positions would drift by miles per day.", real: true },
      { text: "Time passes slightly faster for your head than your feet because your head is farther from Earth's center.", real: true },
      { text: "Einstein won the Nobel Prize specifically for his theory of relativity.", real: false }
    ],
    explanation: "Einstein won the 1921 Nobel Prize for his discovery of the photoelectric effect, not for his theory of relativity."
  },
  {
    topic: "Mythology: Norse",
    statements: [
      { text: "In Norse mythology, the world tree Yggdrasil connects the nine realms of existence.", real: true },
      { text: "Thursday is named after Thor, the Norse god of thunder.", real: true },
      { text: "Odin was the Norse god of the sea who lived underwater with the mermaids.", real: false }
    ],
    explanation: "Odin was the Allfather and chief of the Norse gods, associated with wisdom, war, and death. The sea god in Norse mythology was Njord (or Ægir)."
  },
  {
    topic: "South Africa",
    statements: [
      { text: "South Africa has three capital cities: Pretoria, Bloemfontein, and Cape Town.", real: true },
      { text: "South Africa has 12 official languages, the most of any country in Africa.", real: true },
      { text: "South Africa is the smallest country on the African continent.", real: false }
    ],
    explanation: "South Africa is one of the largest countries in Africa. The smallest African countries include Seychelles, São Tomé and Príncipe, and Gambia."
  },
  {
    topic: "Glass",
    statements: [
      { text: "Glass is actually an amorphous solid, not a liquid — old windows are thicker at the bottom due to manufacturing.", real: true },
      { text: "Obsidian is a natural glass formed by rapidly cooling volcanic lava.", real: true },
      { text: "Glass was only invented in the 20th century alongside modern chemistry.", real: false }
    ],
    explanation: "Glass-making dates back to around 3500 BC in ancient Mesopotamia and Egypt. It is one of the oldest manufactured materials."
  },
  {
    topic: "Nigeria",
    statements: [
      { text: "Nigeria is the most populous country in Africa with over 220 million people.", real: true },
      { text: "Nollywood, Nigeria's film industry, is the second largest in the world by number of films produced.", real: true },
      { text: "Nigeria has only one ethnic group and one native language.", real: false }
    ],
    explanation: "Nigeria is one of the most ethnically diverse countries on Earth, with over 250 ethnic groups and more than 500 distinct languages."
  },
  {
    topic: "The Moon",
    statements: [
      { text: "The Moon is slowly moving away from Earth at a rate of about 1.5 inches per year.", real: true },
      { text: "Footprints left on the Moon by astronauts could last for millions of years because there's no wind or rain.", real: true },
      { text: "The Moon generates its own light, similar to how the Sun does.", real: false }
    ],
    explanation: "The Moon does not generate its own light. It shines by reflecting sunlight. The Moon's surface reflects about 12% of the sunlight that hits it."
  },
  {
    topic: "Anthropology",
    statements: [
      { text: "All living humans belong to the same species, Homo sapiens, which emerged about 300,000 years ago.", real: true },
      { text: "The oldest known human burial sites with grave goods date back about 100,000 years.", real: true },
      { text: "Different human races are considered separate species by modern anthropologists.", real: false }
    ],
    explanation: "Modern anthropology recognizes that all humans are one species. The concept of biological 'races' as separate species has been thoroughly debunked."
  },
  {
    topic: "Ireland",
    statements: [
      { text: "The Irish language (Gaeilge) is the first official language of Ireland, ahead of English.", real: true },
      { text: "There are more people of Irish descent in the United States than in Ireland itself.", real: true },
      { text: "Ireland is part of the United Kingdom.", real: false }
    ],
    explanation: "The Republic of Ireland is an independent country, not part of the United Kingdom. Northern Ireland, however, is part of the UK."
  },
  {
    topic: "Meteorology",
    statements: [
      { text: "Lightning strikes the Earth about 8 million times per day.", real: true },
      { text: "A tornado's wind speed can exceed 300 miles per hour.", real: true },
      { text: "Hurricanes and typhoons are completely different types of storms.", real: false }
    ],
    explanation: "Hurricanes and typhoons are the same type of storm — tropical cyclones. They're called hurricanes in the Atlantic and typhoons in the Pacific."
  },
  {
    topic: "Silk",
    statements: [
      { text: "Silk production was kept secret in China for thousands of years, with death penalties for revealing it.", real: true },
      { text: "A single silkworm cocoon can produce a silk thread up to 900 meters long.", real: true },
      { text: "Silk is a synthetic fabric invented during the Industrial Revolution.", real: false }
    ],
    explanation: "Silk is a natural fiber produced by silkworms. It has been produced in China for at least 5,000 years, long before the Industrial Revolution."
  },
  {
    topic: "Poland",
    statements: [
      { text: "Marie Curie, the first person to win Nobel Prizes in two different sciences, was born in Poland.", real: true },
      { text: "Poland's Wieliczka Salt Mine has an entire underground cathedral carved from salt.", real: true },
      { text: "Poland has a tropical climate with palm trees and year-round warm weather.", real: false }
    ],
    explanation: "Poland has a temperate climate with cold winters and warm summers. It experiences snow in winter and does not have a tropical climate."
  },
  {
    topic: "Earthquakes",
    statements: [
      { text: "The Pacific Ring of Fire is home to about 75% of the world's active volcanoes.", real: true },
      { text: "Moonquakes happen on the Moon and were first detected by seismometers left by Apollo astronauts.", real: true },
      { text: "Earthquakes only happen on Earth because other planets have no tectonic activity.", real: false }
    ],
    explanation: "Other celestial bodies experience seismic activity. Mars has marsquakes, the Moon has moonquakes, and even the Sun has oscillations detected by helioseismology."
  },
  {
    topic: "Chocolate",
    statements: [
      { text: "It takes about 400 cacao beans to make one pound of chocolate.", real: true },
      { text: "The Aztecs used cacao beans as currency and to make a bitter ceremonial drink.", real: true },
      { text: "White chocolate contains more cacao solids than dark chocolate.", real: false }
    ],
    explanation: "White chocolate contains no cacao solids at all. It is made from cocoa butter, sugar, and milk solids. Dark chocolate has the highest cacao solid content."
  },
  {
    topic: "Romania",
    statements: [
      { text: "The Romanian Palace of the Parliament is the heaviest building in the world.", real: true },
      { text: "Romania is home to the largest population of brown bears in Europe outside Russia.", real: true },
      { text: "Count Dracula was a real vampire who lived in Romania in the 1800s.", real: false }
    ],
    explanation: "Dracula is a fictional character created by Bram Stoker in 1897, loosely inspired by Vlad the Impaler, a 15th-century Romanian prince who was not a vampire."
  },
  {
    topic: "Migration",
    statements: [
      { text: "Arctic terns migrate from Arctic to Antarctic and back each year — about 44,000 miles.", real: true },
      { text: "Monarch butterflies migrate up to 3,000 miles from Canada to Mexico each autumn.", real: true },
      { text: "Birds navigate during migration by following roads and highways built by humans.", real: false }
    ],
    explanation: "Birds navigate using Earth's magnetic field, the position of the Sun and stars, and landmarks like coastlines and mountain ranges — not human-made roads."
  },
  {
    topic: "Soap",
    statements: [
      { text: "Soap works by breaking up the oils on your skin that trap dirt and germs.", real: true },
      { text: "Ancient Babylonians were making soap as early as 2800 BC.", real: true },
      { text: "Antibacterial soap has been proven to be significantly more effective than regular soap at killing germs.", real: false }
    ],
    explanation: "Studies have shown that antibacterial soap is no more effective than regular soap and water at preventing illness. The FDA banned certain antibacterial additives in 2016."
  },
  {
    topic: "Greece",
    statements: [
      { text: "Greece has more archaeological museums than any other country in the world.", real: true },
      { text: "No point in Greece is more than 85 miles from the sea.", real: true },
      { text: "Greece is a landlocked country surrounded entirely by other nations.", real: false }
    ],
    explanation: "Greece has one of the longest coastlines in the world (about 8,500 miles) and is surrounded by the Aegean, Ionian, and Mediterranean Seas."
  },
  {
    topic: "Robotics",
    statements: [
      { text: "The word 'robot' comes from the Czech word 'robota' meaning forced labor.", real: true },
      { text: "The first industrial robot, Unimate, was installed at a General Motors plant in 1961.", real: true },
      { text: "Robots have completely replaced all human workers in the automotive industry.", real: false }
    ],
    explanation: "While robots are heavily used in automotive manufacturing, human workers remain essential for complex assembly, quality control, and tasks requiring adaptability."
  },
  {
    topic: "Tanzania",
    statements: [
      { text: "Mount Kilimanjaro in Tanzania is the highest free-standing mountain in the world.", real: true },
      { text: "The Serengeti migration is the largest mass movement of land animals on Earth.", real: true },
      { text: "Tanzania is a small island nation in the Pacific Ocean.", real: false }
    ],
    explanation: "Tanzania is a large country in East Africa, bordering the Indian Ocean. It includes the mainland and the Zanzibar archipelago."
  },
  {
    topic: "Color",
    statements: [
      { text: "Mantis shrimp can see 16 types of color receptors — humans have only three.", real: true },
      { text: "The color magenta doesn't exist on the visible light spectrum — the brain invents it.", real: true },
      { text: "Dogs see the world in complete black and white.", real: false }
    ],
    explanation: "Dogs are not colorblind. They can see blue and yellow but lack the red-green receptors humans have, so they see a more limited color range."
  },
  {
    topic: "Austria",
    statements: [
      { text: "Austria's capital Vienna has been ranked the world's most livable city multiple times.", real: true },
      { text: "Mozart, Beethoven, Schubert, Strauss, and Haydn all lived and worked in Vienna.", real: true },
      { text: "Austria and Australia are the same country with just different spellings.", real: false }
    ],
    explanation: "Austria is a landlocked European country; Australia is a continent and country in the Southern Hemisphere. They are completely different nations."
  },
  {
    topic: "Plastics",
    statements: [
      { text: "The first fully synthetic plastic, Bakelite, was invented in 1907.", real: true },
      { text: "Only about 9% of all plastic ever produced has been recycled.", real: true },
      { text: "Plastic biodegrades completely within 5-10 years in landfills.", real: false }
    ],
    explanation: "Most plastics take 400-1,000 years to decompose. Some may never fully biodegrade, instead breaking into smaller and smaller microplastics."
  },
  {
    topic: "Costa Rica",
    statements: [
      { text: "Costa Rica has no military — it abolished its army in 1948.", real: true },
      { text: "Costa Rica generates over 98% of its electricity from renewable sources.", real: true },
      { text: "Costa Rica is located in South America between Brazil and Argentina.", real: false }
    ],
    explanation: "Costa Rica is in Central America, between Nicaragua and Panama. It is not in South America."
  },
  {
    topic: "Philosophy",
    statements: [
      { text: "Socrates never wrote anything down — we know his ideas through his student Plato's writings.", real: true },
      { text: "The word 'philosophy' comes from Greek words meaning 'love of wisdom.'", real: true },
      { text: "René Descartes' famous quote is 'I think, therefore I am wrong.'", real: false }
    ],
    explanation: "Descartes' famous quote is 'Cogito, ergo sum' — 'I think, therefore I am.' It expresses certainty of existence through the act of thinking."
  },
  {
    topic: "Bamboo",
    statements: [
      { text: "Some bamboo species can grow up to 35 inches in a single day.", real: true },
      { text: "Bamboo releases 35% more oxygen than an equivalent stand of hardwood trees.", real: true },
      { text: "Bamboo is a type of hardwood tree related to oaks and maples.", real: false }
    ],
    explanation: "Bamboo is actually a grass, not a tree. It belongs to the family Poaceae, making it a relative of wheat, rice, and corn."
  },
  {
    topic: "Ukraine",
    statements: [
      { text: "Ukraine is the largest country located entirely within Europe.", real: true },
      { text: "The Chernobyl nuclear disaster of 1986 occurred in what is now northern Ukraine.", real: true },
      { text: "Ukraine is a small island in the Mediterranean Sea.", real: false }
    ],
    explanation: "Ukraine is a large country in Eastern Europe, the largest entirely within the continent, covering about 233,000 square miles."
  },
  {
    topic: "Caves",
    statements: [
      { text: "Hang Son Doong in Vietnam is the world's largest known cave, with passages big enough for a 747.", real: true },
      { text: "Some cave systems have their own weather, including clouds and rain inside the caverns.", real: true },
      { text: "Stalactites grow from the floor up and stalagmites hang from the ceiling.", real: false }
    ],
    explanation: "It's the opposite: stalactites hang from the ceiling (think 'c' for ceiling) and stalagmites grow from the ground (think 'g' for ground)."
  },
  {
    topic: "Economics",
    statements: [
      { text: "Zimbabwe once printed a 100-trillion-dollar banknote during its hyperinflation crisis.", real: true },
      { text: "The US dollar is the world's primary reserve currency, held by most central banks.", real: true },
      { text: "Inflation always means prices are falling and money is gaining value.", real: false }
    ],
    explanation: "Inflation means prices are rising and money is losing purchasing power. The opposite — falling prices — is called deflation."
  },
  {
    topic: "Panama",
    statements: [
      { text: "The Panama Canal uses a system of locks to raise and lower ships 85 feet above sea level.", real: true },
      { text: "Due to its S-shape, the sun rises over the Pacific and sets over the Atlantic in parts of Panama.", real: true },
      { text: "The Panama Canal was built by the Panamanian government without any foreign involvement.", real: false }
    ],
    explanation: "The Panama Canal was initially attempted by France and completed by the United States in 1914. It was transferred to Panama in 1999."
  },
  {
    topic: "Teeth",
    statements: [
      { text: "Tooth enamel is the hardest substance in the human body.", real: true },
      { text: "Sharks can grow and lose over 30,000 teeth in their lifetime.", real: true },
      { text: "Humans naturally grow three complete sets of teeth throughout their lives.", real: false }
    ],
    explanation: "Humans only grow two sets of teeth: baby teeth (deciduous) and permanent adult teeth. Unlike sharks, we do not grow a third set."
  },
  {
    topic: "Music Theory",
    statements: [
      { text: "Most Western music uses a 12-tone equal temperament system.", real: true },
      { text: "The musical note A above middle C is standardized at 440 Hz.", real: true },
      { text: "There are only 5 musical notes used in all music worldwide.", real: false }
    ],
    explanation: "Western music commonly uses 12 notes per octave, and many other musical traditions use different numbers. No system is limited to just 5 notes."
  },
  {
    topic: "Cambodia",
    statements: [
      { text: "Angkor Wat in Cambodia is the largest religious monument in the world.", real: true },
      { text: "Cambodia's flag is the only national flag in the world that features a building.", real: true },
      { text: "Cambodia is located in South America, near Brazil.", real: false }
    ],
    explanation: "Cambodia is located in Southeast Asia, on the Indochinese Peninsula, bordered by Thailand, Laos, and Vietnam."
  },
  {
    topic: "Immune System",
    statements: [
      { text: "Your immune system can remember pathogens it has fought before, allowing faster response on reinfection.", real: true },
      { text: "Fever is actually a defense mechanism — the higher temperature helps fight infection.", real: true },
      { text: "Humans are born with a fully mature immune system that never changes or develops.", real: false }
    ],
    explanation: "Babies are born with an immature immune system. It develops throughout childhood, which is partly why children get sick more often."
  },
  {
    topic: "Clocks and Timekeeping",
    statements: [
      { text: "Atomic clocks are so accurate they would lose less than one second over 300 million years.", real: true },
      { text: "Before time zones were standardized, each city set its own local time based on the Sun.", real: true },
      { text: "Time zones were invented by the ancient Romans to coordinate their empire.", real: false }
    ],
    explanation: "Time zones were established in the 19th century, primarily to coordinate railroad schedules. Sir Sandford Fleming proposed the system in 1879."
  },
  {
    topic: "Madagascar Wildlife",
    statements: [
      { text: "Lemurs are found in the wild only in Madagascar, nowhere else on Earth.", real: true },
      { text: "The aye-aye, a type of lemur, taps on trees and listens for insect larvae with its elongated middle finger.", real: true },
      { text: "Madagascar is home to large populations of lions, elephants, and giraffes.", real: false }
    ],
    explanation: "Madagascar has no native lions, elephants, or giraffes. These animals are found on mainland Africa. Madagascar's fauna is unique and mostly found nowhere else."
  },
  {
    topic: "Materials Science",
    statements: [
      { text: "Graphene is a single layer of carbon atoms arranged in a hexagonal lattice and is stronger than steel.", real: true },
      { text: "Aerogel is 99.8% air and is one of the lightest solid materials ever created.", real: true },
      { text: "Diamond is the softest natural material on Earth.", real: false }
    ],
    explanation: "Diamond is the hardest natural material, rating 10 on the Mohs hardness scale. Talc is the softest natural mineral."
  },
  {
    topic: "Ecuador",
    statements: [
      { text: "Ecuador is named after the equator, which passes directly through the country.", real: true },
      { text: "The Galápagos Islands, which inspired Darwin's theory of evolution, belong to Ecuador.", real: true },
      { text: "Ecuador uses the British pound as its official currency.", real: false }
    ],
    explanation: "Ecuador uses the US dollar as its official currency, not the British pound. It adopted the dollar in 2000 after a severe banking crisis."
  },
  {
    topic: "Sound",
    statements: [
      { text: "Sound cannot travel through the vacuum of space because there are no molecules to carry it.", real: true },
      { text: "The speed of sound is about 767 mph at sea level — breaking this barrier creates a sonic boom.", real: true },
      { text: "Sound travels faster through air than through water or steel.", real: false }
    ],
    explanation: "Sound actually travels much faster through denser materials. It travels about 4 times faster in water and about 15 times faster in steel than in air."
  },
  {
    topic: "Bolivia",
    statements: [
      { text: "Bolivia has two capital cities: Sucre (constitutional) and La Paz (administrative).", real: true },
      { text: "Bolivia's Salar de Uyuni is the world's largest salt flat, visible from space.", real: true },
      { text: "Bolivia has a large coastline on the Pacific Ocean.", real: false }
    ],
    explanation: "Bolivia is a landlocked country. It lost its coastline to Chile in the War of the Pacific (1879-1884) and still has a navy on Lake Titicaca."
  },
  {
    topic: "Printing",
    statements: [
      { text: "The Gutenberg Bible, printed around 1455, was among the first books printed with movable type in Europe.", real: true },
      { text: "China invented movable type printing about 400 years before Gutenberg.", real: true },
      { text: "Johannes Gutenberg became extremely wealthy from his invention of the printing press.", real: false }
    ],
    explanation: "Gutenberg actually went bankrupt. His investor Johann Fust sued him and took control of his printing equipment and workshop."
  },
  {
    topic: "Cats",
    statements: [
      { text: "Cats spend about 70% of their lives sleeping — roughly 13-16 hours per day.", real: true },
      { text: "A group of cats is called a 'clowder.'", real: true },
      { text: "Cats can see in complete total darkness with no light at all.", real: false }
    ],
    explanation: "Cats cannot see in complete darkness. They can see in very low light — about six times less light than humans need — but they still need some light."
  },
  {
    topic: "Mythology: Egyptian",
    statements: [
      { text: "Ancient Egyptians mummified cats and other animals, believing them to be sacred.", real: true },
      { text: "The Egyptian god Anubis had the head of a jackal and was associated with mummification and the afterlife.", real: true },
      { text: "The ancient Egyptians worshipped only one god throughout their entire civilization.", real: false }
    ],
    explanation: "Ancient Egypt was polytheistic, with a pantheon of over 2,000 gods and goddesses including Ra, Isis, Osiris, Horus, and many others."
  },
  {
    topic: "Forests",
    statements: [
      { text: "The Amazon Rainforest produces about 6% of the world's oxygen.", real: true },
      { text: "Trees communicate with each other through underground fungal networks called the 'wood wide web.'", real: true },
      { text: "The Amazon Rainforest is located primarily in Africa.", real: false }
    ],
    explanation: "The Amazon Rainforest is located in South America, primarily in Brazil, with portions in eight other countries. Africa has the Congo Rainforest."
  },
  {
    topic: "Sri Lanka",
    statements: [
      { text: "Sri Lanka is the world's largest exporter of cinnamon.", real: true },
      { text: "Sri Lanka was known as Ceylon until it changed its name in 1972.", real: true },
      { text: "Sri Lanka is a landlocked country bordering India and Bangladesh.", real: false }
    ],
    explanation: "Sri Lanka is an island nation in the Indian Ocean, separated from India by the Palk Strait. It is not landlocked."
  },
  {
    topic: "Elections",
    statements: [
      { text: "Australia makes voting compulsory — citizens can be fined for not voting.", real: true },
      { text: "In ancient Athens, citizens could vote to exile someone for 10 years through ostracism.", real: true },
      { text: "Every country in the world uses the same electoral system to choose leaders.", real: false }
    ],
    explanation: "Countries use vastly different electoral systems including first-past-the-post, proportional representation, ranked choice, and many others."
  },
  {
    topic: "Honey Bees",
    statements: [
      { text: "A single honeybee produces only about 1/12 of a teaspoon of honey in its entire lifetime.", real: true },
      { text: "Bees can communicate the location of flowers by performing a 'waggle dance.'", real: true },
      { text: "Queen bees are elected by a democratic vote among the worker bees.", real: false }
    ],
    explanation: "Queen bees aren't elected. Workers raise several potential queens by feeding larvae royal jelly. The first queen to emerge typically kills the others."
  },
  {
    topic: "North Korea",
    statements: [
      { text: "North Korea uses its own calendar system, Juche, which starts from the birth year of Kim Il-sung (1912).", real: true },
      { text: "North Korea and South Korea are technically still at war — they signed an armistice, not a peace treaty.", real: true },
      { text: "North Korea has a thriving free-market economy with no government involvement.", real: false }
    ],
    explanation: "North Korea has one of the most centrally planned economies in the world. The government controls virtually all economic activity."
  },
  {
    topic: "Muscles",
    statements: [
      { text: "The tongue is not a single muscle — it's made up of eight different muscles.", real: true },
      { text: "The gluteus maximus is the largest muscle in the human body.", real: true },
      { text: "Muscles can push but cannot pull — they only work in one direction.", real: false }
    ],
    explanation: "Muscles can only pull (contract), not push. That's why muscles work in opposing pairs — biceps pull to bend the arm, triceps pull to straighten it."
  },
  {
    topic: "Brazil",
    statements: [
      { text: "Brazil covers nearly half of South America's land area.", real: true },
      { text: "Brazil is the only Portuguese-speaking country in the Americas.", real: true },
      { text: "Brazil's capital city is Rio de Janeiro.", real: false }
    ],
    explanation: "Brazil's capital is Brasília, not Rio de Janeiro. Brasília was purpose-built as the capital and inaugurated in 1960."
  },
  {
    topic: "Batteries",
    statements: [
      { text: "The Baghdad Battery, a 2,000-year-old artifact, may have been an ancient electrochemical cell.", real: true },
      { text: "Lithium-ion batteries can catch fire or explode if punctured, overcharged, or damaged.", real: true },
      { text: "Batteries store energy as a liquid that slowly drains out through the terminals.", real: false }
    ],
    explanation: "Batteries store energy through chemical reactions between their internal components. The energy is released as electricity through electrochemical processes, not as draining liquid."
  },
  {
    topic: "Georgia (Country)",
    statements: [
      { text: "Georgia has its own unique alphabet, one of only 14 scripts still in use today.", real: true },
      { text: "Georgia claims to be the birthplace of wine, with evidence of winemaking dating back 8,000 years.", real: true },
      { text: "Georgia is the same place as the US state of Georgia.", real: false }
    ],
    explanation: "Georgia the country is in the Caucasus region between Europe and Asia. The US state of Georgia was named after King George II of Great Britain."
  },
  {
    topic: "Microscopes",
    statements: [
      { text: "Electron microscopes can magnify objects up to 10 million times.", real: true },
      { text: "Antonie van Leeuwenhoek, a Dutch draper, was the first to observe bacteria through a microscope in the 1670s.", real: true },
      { text: "Optical microscopes can see individual atoms without any special technology.", real: false }
    ],
    explanation: "Optical microscopes are limited by the wavelength of visible light and cannot see individual atoms. Scanning tunneling microscopes or electron microscopes are needed for atomic resolution."
  },
  {
    topic: "Cuba Music",
    statements: [
      { text: "The Buena Vista Social Club album brought global attention to traditional Cuban music in 1997.", real: true },
      { text: "Salsa music originated from Cuban son music blended with other Latin and jazz influences.", real: true },
      { text: "Cuba has banned all forms of music and dancing since the revolution.", real: false }
    ],
    explanation: "Music and dance are central to Cuban culture. Cuba has produced world-renowned musicians and genres including son, rumba, mambo, and salsa."
  },
  {
    topic: "Geology",
    statements: [
      { text: "Earth's inner core is a solid ball of iron and nickel about the size of the Moon.", real: true },
      { text: "The oldest known rocks on Earth are about 4 billion years old, found in northern Canada.", real: true },
      { text: "Continents have always been in their current positions and have never moved.", real: false }
    ],
    explanation: "Continents are constantly moving through plate tectonics. They were once joined as the supercontinent Pangaea about 335 million years ago."
  },
  {
    topic: "Pigeons",
    statements: [
      { text: "Pigeons can find their way home over distances of more than 1,000 miles.", real: true },
      { text: "A pigeon named Cher Ami saved nearly 200 soldiers in WWI by delivering a message while wounded.", real: true },
      { text: "Pigeons are one of the least intelligent bird species.", real: false }
    ],
    explanation: "Pigeons are actually highly intelligent. They can recognize themselves in mirrors, learn abstract rules, and even distinguish between paintings by Monet and Picasso."
  },
  {
    topic: "Laos",
    statements: [
      { text: "Laos is the most heavily bombed country per capita in history, due to the Vietnam War era.", real: true },
      { text: "The Mekong River forms much of Laos's western border with Thailand.", real: true },
      { text: "Laos is an island nation in the Pacific Ocean.", real: false }
    ],
    explanation: "Laos is a landlocked country in Southeast Asia, bordered by Myanmar, China, Vietnam, Cambodia, and Thailand."
  },
  {
    topic: "Vaccines History",
    statements: [
      { text: "Polio vaccines developed by Jonas Salk and Albert Sabin virtually eliminated polio worldwide.", real: true },
      { text: "Salk refused to patent his polio vaccine, saying 'Could you patent the sun?'", real: true },
      { text: "Vaccines were banned worldwide during the 20th century due to safety concerns.", real: false }
    ],
    explanation: "Vaccines were widely adopted and promoted throughout the 20th century. Mass vaccination campaigns eliminated smallpox and nearly eliminated polio."
  },
  {
    topic: "Olive Oil",
    statements: [
      { text: "Olive trees can live for thousands of years — some in the Mediterranean are over 2,000 years old.", real: true },
      { text: "Spain is the world's largest producer of olive oil, producing about half the global supply.", real: true },
      { text: "Olive oil solidifies at room temperature and must be heated before use.", real: false }
    ],
    explanation: "Olive oil is liquid at room temperature. It only solidifies when refrigerated or exposed to very cold temperatures."
  },
  {
    topic: "Stars",
    statements: [
      { text: "When you look at stars, you're seeing them as they were years ago because light takes time to reach Earth.", real: true },
      { text: "The nearest star to our Sun, Proxima Centauri, is about 4.24 light-years away.", real: true },
      { text: "All stars are the same size, color, and temperature.", real: false }
    ],
    explanation: "Stars vary enormously. They range from tiny red dwarfs to supergiant stars 1,000 times the Sun's diameter, and from cool red to extremely hot blue."
  },
  {
    topic: "Singapore",
    statements: [
      { text: "Singapore is both a city and a country — a city-state with no separate capital.", real: true },
      { text: "Chewing gum is banned in Singapore, with fines for importing or selling it.", real: true },
      { text: "Singapore is one of the largest countries in Asia by land area.", real: false }
    ],
    explanation: "Singapore is one of the smallest countries in the world at just 281 square miles — smaller than many cities."
  },
  {
    topic: "Algebra",
    statements: [
      { text: "The word 'algebra' comes from the Arabic word 'al-jabr' meaning 'reunion of broken parts.'", real: true },
      { text: "Al-Khwarizmi, a 9th-century Persian scholar, is often called the 'father of algebra.'", real: true },
      { text: "Algebra was invented in England by Isaac Newton in the 17th century.", real: false }
    ],
    explanation: "Algebra was developed in the Islamic Golden Age by scholars like Al-Khwarizmi, centuries before Newton. Newton made contributions to calculus, not algebra."
  },
  {
    topic: "Penguins",
    statements: [
      { text: "Emperor penguins can dive to depths of over 1,800 feet and hold their breath for 20+ minutes.", real: true },
      { text: "Male emperor penguins incubate eggs on their feet through the Antarctic winter without eating for months.", real: true },
      { text: "Penguins live in both the Arctic and Antarctic.", real: false }
    ],
    explanation: "Penguins are only found in the Southern Hemisphere. There are no penguins in the Arctic. Puffins, which look similar, live in the Northern Hemisphere."
  },
  {
    topic: "Mythology: Greek",
    statements: [
      { text: "The Trojan Horse was a wooden horse used by the Greeks to infiltrate the city of Troy.", real: true },
      { text: "Prometheus was punished by Zeus for giving fire to humanity by being chained to a rock.", real: true },
      { text: "Zeus was the Greek god of the sea who carried a trident.", real: false }
    ],
    explanation: "Zeus was the king of the gods and god of the sky and thunder. Poseidon was the god of the sea who carried a trident."
  },
  {
    topic: "Ethiopia Calendar",
    statements: [
      { text: "Ethiopia has 13 months — 12 months of 30 days each and a 13th month of 5 or 6 days.", real: true },
      { text: "Ethiopian New Year falls in September, not January.", real: true },
      { text: "Ethiopia uses the exact same calendar as the rest of the world.", real: false }
    ],
    explanation: "Ethiopia uses its own calendar (Ge'ez calendar) which is roughly 7-8 years behind the Gregorian calendar used by most of the world."
  },
  {
    topic: "Vitamins",
    statements: [
      { text: "Vitamin D is produced by your skin when exposed to sunlight.", real: true },
      { text: "Scurvy, caused by vitamin C deficiency, was a major killer of sailors before citrus fruits were understood.", real: true },
      { text: "The human body can produce all necessary vitamins internally without any food intake.", real: false }
    ],
    explanation: "The human body cannot produce most vitamins and must obtain them from food. Only vitamin D (from sunlight) and vitamin K (from gut bacteria) are partially self-produced."
  },
  {
    topic: "Myanmar",
    statements: [
      { text: "Myanmar is one of only three countries that don't use the metric system (along with the US and Liberia).", real: true },
      { text: "Myanmar's ancient city of Bagan has over 2,000 surviving Buddhist temples and pagodas.", real: true },
      { text: "Myanmar has always been known by that name and was never called anything else.", real: false }
    ],
    explanation: "Myanmar was officially known as Burma until 1989. The name Burma is still used by some countries and organizations."
  },
  {
    topic: "Tsunamis",
    statements: [
      { text: "In deep ocean water, tsunami waves can travel as fast as a commercial jet — up to 500 mph.", real: true },
      { text: "The 2004 Indian Ocean tsunami was caused by a magnitude 9.1 earthquake and killed over 225,000 people.", real: true },
      { text: "Tsunamis can only be caused by earthquakes and no other natural events.", real: false }
    ],
    explanation: "Tsunamis can be caused by volcanic eruptions, underwater landslides, meteorite impacts, and even large calving events from glaciers — not just earthquakes."
  },
  {
    topic: "Jordan",
    statements: [
      { text: "Petra, Jordan's famous 'Rose City,' was carved directly into red sandstone cliffs over 2,000 years ago.", real: true },
      { text: "The Dead Sea, bordered by Jordan and Israel, is the lowest point on Earth's land surface.", real: true },
      { text: "Jordan is located in South America, bordering Brazil.", real: false }
    ],
    explanation: "Jordan is a country in the Middle East, bordered by Saudi Arabia, Iraq, Syria, Israel, and Palestine."
  },
  {
    topic: "Perfume",
    statements: [
      { text: "Ambergris, a substance from sperm whale intestines, has been used in perfumery for centuries.", real: true },
      { text: "The world's oldest known perfume was discovered in Cyprus and dates back over 4,000 years.", real: true },
      { text: "Perfume can only be made from flowers and no other natural sources.", real: false }
    ],
    explanation: "Perfume ingredients come from many sources including wood, bark, resin, animal secretions, mosses, fruits, spices, and synthetic chemicals."
  },
  {
    topic: "Hungary",
    statements: [
      { text: "Hungary's Lake Hévíz is the largest biologically active thermal lake in the world.", real: true },
      { text: "The Rubik's Cube was invented by Hungarian professor Ernő Rubik in 1974.", real: true },
      { text: "Hungarian is a Romance language closely related to French and Italian.", real: false }
    ],
    explanation: "Hungarian (Magyar) is a Uralic language, unrelated to Romance languages. Its closest relatives are Finnish and Estonian, though they are not mutually intelligible."
  },
  {
    topic: "Concrete",
    statements: [
      { text: "The Romans invented a concrete so durable that their structures have lasted over 2,000 years.", real: true },
      { text: "Concrete is the most widely used man-made material on Earth.", real: true },
      { text: "Concrete and cement are exactly the same thing.", real: false }
    ],
    explanation: "Cement is just one ingredient in concrete. Concrete is a mixture of cement, water, sand, and gravel. Cement acts as the binding agent."
  },
  {
    topic: "Ants",
    statements: [
      { text: "The total biomass of all ants on Earth is estimated to rival or exceed that of all humans.", real: true },
      { text: "Leafcutter ants don't eat the leaves they cut — they use them to farm fungus, which they eat.", real: true },
      { text: "Ant colonies have no organization and each ant acts completely independently.", real: false }
    ],
    explanation: "Ant colonies are highly organized superorganisms with specialized castes including queens, workers, soldiers, and sometimes farmers and nurses."
  },
  {
    topic: "UAE",
    statements: [
      { text: "Dubai's Burj Khalifa is the tallest building in the world at 2,717 feet.", real: true },
      { text: "The UAE has no natural rivers — all its freshwater comes from desalination and groundwater.", real: true },
      { text: "The UAE is a democracy where leaders are elected through popular vote.", real: false }
    ],
    explanation: "The UAE is a federation of absolute monarchies. Each emirate is ruled by a hereditary ruler, and the president is chosen from among the seven emirs."
  },
  {
    topic: "Butterflies",
    statements: [
      { text: "Butterfly wings are actually transparent — the colors come from thousands of tiny scales.", real: true },
      { text: "Some butterflies migrate thousands of miles, navigating using the Sun's position.", real: true },
      { text: "Butterflies have teeth and chew their food like other insects.", real: false }
    ],
    explanation: "Butterflies have no teeth. They feed through a long, coiled proboscis that works like a straw to sip nectar and other liquids."
  },
  {
    topic: "Paper",
    statements: [
      { text: "Paper was invented in China around 105 AD by Cai Lun, a court official.", real: true },
      { text: "A single tree can produce approximately 8,333 sheets of paper.", real: true },
      { text: "Paper can only be made from trees and no other materials.", real: false }
    ],
    explanation: "Paper can be made from many materials including cotton, hemp, bamboo, sugarcane bagasse, rice straw, and recycled paper."
  },
  {
    topic: "Luxembourg",
    statements: [
      { text: "Luxembourg has the highest GDP per capita in the world.", real: true },
      { text: "Luxembourg has three official languages: Luxembourgish, French, and German.", real: true },
      { text: "Luxembourg is the largest country in Europe.", real: false }
    ],
    explanation: "Luxembourg is one of the smallest countries in Europe at just 998 square miles. Russia, Ukraine, and France are among the largest."
  },
  {
    topic: "Crocodiles",
    statements: [
      { text: "Saltwater crocodiles are the largest living reptiles and can grow over 20 feet long.", real: true },
      { text: "Crocodilians have been around for about 200 million years, surviving the asteroid that killed the dinosaurs.", real: true },
      { text: "Crocodiles are herbivores that primarily eat aquatic plants.", real: false }
    ],
    explanation: "Crocodiles are apex predators and carnivores. They eat fish, birds, mammals, and virtually anything they can catch."
  },
  {
    topic: "Czech Republic",
    statements: [
      { text: "The Czech Republic consumes more beer per capita than any other country in the world.", real: true },
      { text: "Prague Castle is the largest ancient castle complex in the world.", real: true },
      { text: "The Czech Republic is located in South America.", real: false }
    ],
    explanation: "The Czech Republic (Czechia) is located in Central Europe, bordered by Germany, Austria, Slovakia, and Poland."
  },
  {
    topic: "Forensic Science",
    statements: [
      { text: "Every person has a unique fingerprint — even identical twins have different fingerprints.", real: true },
      { text: "Forensic entomology uses insect evidence to help determine time of death.", real: true },
      { text: "Lie detectors (polygraphs) are 100% accurate and admissible in all courts worldwide.", real: false }
    ],
    explanation: "Polygraphs are not perfectly accurate and are inadmissible in many courts. They measure stress responses, which can be triggered by factors other than lying."
  },
  {
    topic: "Malaysia",
    statements: [
      { text: "Malaysia's Petronas Twin Towers were the world's tallest buildings from 1998 to 2004.", real: true },
      { text: "Malaysia has one of the oldest tropical rainforests in the world, estimated at 130 million years old.", real: true },
      { text: "Malaysia is a country in Eastern Europe.", real: false }
    ],
    explanation: "Malaysia is a country in Southeast Asia, consisting of two main regions on the Malay Peninsula and the island of Borneo."
  },
  {
    topic: "Mirrors",
    statements: [
      { text: "The first mirrors were pools of dark, still water or polished volcanic glass (obsidian).", real: true },
      { text: "Mirrors don't actually reverse left and right — they reverse front and back.", real: true },
      { text: "Modern mirrors are made by coating glass with a thin layer of pure gold.", real: false }
    ],
    explanation: "Modern mirrors are made by coating glass with a thin layer of aluminum or silver, not gold. Silver provides the highest reflectivity for visible light."
  },
  {
    topic: "Trade Routes",
    statements: [
      { text: "The Silk Road connected China to the Mediterranean and was used for over 1,500 years.", real: true },
      { text: "Spices were so valuable in medieval Europe that they were sometimes worth more than gold by weight.", real: true },
      { text: "The Silk Road was a single paved highway built by the Chinese government.", real: false }
    ],
    explanation: "The Silk Road was not a single road but a vast network of trade routes spanning thousands of miles across diverse terrain, maintained by many different civilizations."
  },
  {
    topic: "Potatoes",
    statements: [
      { text: "Potatoes were first domesticated in Peru around 8,000-5,000 BC.", real: true },
      { text: "Potatoes were so feared in Europe that they were believed to cause leprosy when first introduced.", real: true },
      { text: "Potatoes are fruits that grow on trees in tropical climates.", real: false }
    ],
    explanation: "Potatoes are tubers that grow underground. They are in the nightshade family and thrive in temperate climates, not tropical ones."
  },
  {
    topic: "Elephants",
    statements: [
      { text: "Elephants are the only animals that cannot jump.", real: true },
      { text: "Elephants can recognize themselves in mirrors, showing self-awareness.", real: true },
      { text: "Elephants have poor memories and forget things within hours.", real: false }
    ],
    explanation: "Elephants have exceptional memories. They can remember locations, other elephants, and events for decades. The phrase 'an elephant never forgets' has scientific backing."
  },
  {
    topic: "Architecture",
    statements: [
      { text: "The Leaning Tower of Pisa took nearly 200 years to build due to wars and attempts to fix the lean.", real: true },
      { text: "The Great Wall of China is not actually visible from space with the naked eye.", real: true },
      { text: "Gothic architecture is named after the Goths who invented it.", real: false }
    ],
    explanation: "Gothic architecture was named as a derogatory term by Renaissance critics who considered it barbaric. The Goths had nothing to do with the style."
  },
  {
    topic: "Platinum",
    statements: [
      { text: "Platinum is rarer than gold — all the platinum ever mined would fit in an average living room.", real: true },
      { text: "Platinum is used in catalytic converters in cars to reduce harmful emissions.", real: true },
      { text: "Platinum is the most abundant metal on Earth's surface.", real: false }
    ],
    explanation: "Platinum is one of the rarest elements in Earth's crust. Aluminum is the most abundant metal, and iron is the most abundant element overall."
  },
  {
    topic: "Bangladesh",
    statements: [
      { text: "Bangladesh is the world's eighth most populous country with over 170 million people.", real: true },
      { text: "The Sundarbans in Bangladesh is the largest mangrove forest in the world.", real: true },
      { text: "Bangladesh is a vast, sparsely populated country like Mongolia.", real: false }
    ],
    explanation: "Bangladesh is one of the most densely populated countries in the world, with over 1,200 people per square kilometer."
  },
  {
    topic: "The Eye",
    statements: [
      { text: "The human eye can distinguish about 10 million different colors.", real: true },
      { text: "Your eyes actually see images upside down — your brain flips them right-side up.", real: true },
      { text: "Blue-eyed people have blue pigment in their irises.", real: false }
    ],
    explanation: "Blue eyes have no blue pigment. The blue color is caused by the scattering of light through the iris, similar to why the sky appears blue."
  },
  {
    topic: "Uzbekistan",
    statements: [
      { text: "Uzbekistan is one of only two doubly-landlocked countries in the world.", real: true },
      { text: "The ancient Silk Road city of Samarkand in Uzbekistan has buildings over 2,500 years old.", real: true },
      { text: "Uzbekistan is a small island in the Caribbean Sea.", real: false }
    ],
    explanation: "Uzbekistan is a large, landlocked country in Central Asia, bordered by Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, and Turkmenistan."
  },
  {
    topic: "Snowflakes",
    statements: [
      { text: "No two snowflakes are exactly alike because of the countless ways water molecules can arrange.", real: true },
      { text: "The largest snowflake ever recorded was allegedly 15 inches wide, observed in Montana in 1887.", real: true },
      { text: "Snowflakes are always perfectly symmetrical with exactly six sides.", real: false }
    ],
    explanation: "While snowflakes tend toward six-fold symmetry due to water's crystal structure, real snowflakes are rarely perfectly symmetrical. Irregular and asymmetric snowflakes are common."
  },
  {
    topic: "Literary Genres",
    statements: [
      { text: "The novel 'Frankenstein' by Mary Shelley (1818) is often considered the first science fiction novel.", real: true },
      { text: "Detective fiction was essentially invented by Edgar Allan Poe with 'The Murders in the Rue Morgue' in 1841.", real: true },
      { text: "The fantasy genre was invented in the 1990s with the Harry Potter series.", real: false }
    ],
    explanation: "Fantasy literature has ancient roots in mythology and fairy tales. Modern fantasy was popularized by authors like Tolkien in the 1930s-50s, decades before Harry Potter."
  },
  {
    topic: "Blood",
    statements: [
      { text: "Red blood cells live for about 120 days before being replaced.", real: true },
      { text: "Horseshoe crab blood is blue and is used to test for bacterial contamination in medical equipment.", real: true },
      { text: "Human blood is blue inside the body and only turns red when exposed to oxygen.", real: false }
    ],
    explanation: "Human blood is always red. Deoxygenated blood is dark red, not blue. Veins appear blue through the skin due to how light penetrates and is absorbed by tissue."
  },
  {
    topic: "Paraguay",
    statements: [
      { text: "Paraguay is one of the few countries where an indigenous language (Guaraní) is an official language alongside a colonial one.", real: true },
      { text: "The Itaipu Dam on Paraguay's border with Brazil is one of the largest hydroelectric power plants in the world.", real: true },
      { text: "Paraguay has a long coastline on the Pacific Ocean.", real: false }
    ],
    explanation: "Paraguay is a landlocked country in South America, bordered by Argentina, Brazil, and Bolivia. It has no coastline on any ocean."
  },
  {
    topic: "Magnets",
    statements: [
      { text: "The Earth itself is a giant magnet, which is why compass needles point north.", real: true },
      { text: "If you cut a magnet in half, you get two smaller magnets, each with a north and south pole.", real: true },
      { text: "Magnets lose their magnetism if you paint them.", real: false }
    ],
    explanation: "Painting a magnet does not affect its magnetic properties. Magnets lose their magnetism through heating above the Curie temperature, impact, or demagnetizing fields."
  },
  {
    topic: "Cuba History",
    statements: [
      { text: "Cuba's Bay of Pigs invasion in 1961 was a failed CIA-backed attempt to overthrow Fidel Castro.", real: true },
      { text: "The Cuban Missile Crisis of 1962 brought the US and Soviet Union to the brink of nuclear war.", real: true },
      { text: "Cuba gained its independence from France in 1776.", real: false }
    ],
    explanation: "Cuba gained independence from Spain in 1898 following the Spanish-American War, not from France. Cuba was a Spanish colony for nearly 400 years."
  },
  {
    topic: "Gravity",
    statements: [
      { text: "Gravity is the weakest of the four fundamental forces of nature.", real: true },
      { text: "You weigh slightly less at the equator than at the poles due to Earth's rotation.", real: true },
      { text: "Gravity only exists on Earth and does not affect objects in space.", real: false }
    ],
    explanation: "Gravity exists everywhere in the universe. It keeps planets in orbit, holds galaxies together, and affects all objects with mass. Astronauts experience microgravity, not zero gravity."
  },
  {
    topic: "Scotland",
    statements: [
      { text: "Scotland's national animal is the unicorn.", real: true },
      { text: "Scotch whisky must be aged in oak barrels for at least three years by law.", real: true },
      { text: "Scotland is a separate country from the United Kingdom.", real: false }
    ],
    explanation: "Scotland is part of the United Kingdom, along with England, Wales, and Northern Ireland. It has its own parliament but is not a fully independent country."
  },
  {
    topic: "Plastic Surgery",
    statements: [
      { text: "Plastic surgery gets its name from the Greek word 'plastikos' meaning to mold or shape, not from plastic material.", real: true },
      { text: "Rhinoplasty (nose surgery) was described in ancient Indian texts dating back to 600 BC.", real: true },
      { text: "Plastic surgery was only invented in the 2000s for cosmetic purposes.", real: false }
    ],
    explanation: "Plastic surgery dates back thousands of years. Reconstructive techniques were developed in ancient India, and modern plastic surgery advanced greatly during World War I."
  },
  {
    topic: "Uranium",
    statements: [
      { text: "Uranium was used to color glass and ceramics orange-yellow for centuries before radioactivity was discovered.", real: true },
      { text: "A single uranium fuel pellet the size of a fingertip contains as much energy as a ton of coal.", real: true },
      { text: "Uranium is completely safe to handle with bare hands because it emits no radiation.", real: false }
    ],
    explanation: "Uranium is radioactive and emits alpha particles, beta particles, and gamma radiation. While low-enriched uranium is relatively safe for brief handling, prolonged exposure is hazardous."
  },
  {
    topic: "Aztec Empire",
    statements: [
      { text: "The Aztec capital Tenochtitlan was built on an island in a lake and was larger than most European cities.", real: true },
      { text: "The Aztecs developed a complex calendar system and had accurate astronomical knowledge.", real: true },
      { text: "The Aztec Empire was located in what is now South Africa.", real: false }
    ],
    explanation: "The Aztec Empire was centered in central Mexico, with its capital Tenochtitlan located where Mexico City stands today."
  },
  {
    topic: "Submarines",
    statements: [
      { text: "The first military submarine to sink an enemy warship was the CSS Hunley in the American Civil War.", real: true },
      { text: "Nuclear submarines can operate for decades without refueling.", real: true },
      { text: "Submarines float and sink by filling their hulls with helium.", real: false }
    ],
    explanation: "Submarines control their depth by filling ballast tanks with seawater (to sink) or compressed air (to rise), not helium."
  },
  {
    topic: "Rwanda",
    statements: [
      { text: "Rwanda has the highest percentage of women in parliament of any country in the world.", real: true },
      { text: "Rwanda banned single-use plastic bags in 2008, making it one of the cleanest countries in Africa.", real: true },
      { text: "Rwanda is the largest country on the African continent.", real: false }
    ],
    explanation: "Rwanda is one of the smallest countries in Africa at about 10,000 square miles. Algeria is the largest African country by area."
  },
  {
    topic: "Wine",
    statements: [
      { text: "The oldest known wine residue was found in Georgia (the country) dating to about 6000 BC.", real: true },
      { text: "France's Champagne region is the only place where sparkling wine can legally be called 'Champagne.'", real: true },
      { text: "All wines must be made from grapes — no other fruit can be used to make wine.", real: false }
    ],
    explanation: "Wine can be made from many fruits and even flowers. Elderberry wine, rice wine, dandelion wine, and apple wine are just a few examples."
  },
  {
    topic: "Maple Syrup",
    statements: [
      { text: "It takes about 40 gallons of maple sap to produce one gallon of maple syrup.", real: true },
      { text: "Quebec, Canada produces about 70% of the world's maple syrup supply.", real: true },
      { text: "Maple syrup is made by melting maple wood chips in boiling water.", real: false }
    ],
    explanation: "Maple syrup is made by boiling down sap collected from maple trees. The sap naturally flows from taps inserted in the tree trunks during spring."
  },
  {
    topic: "Fibonacci Sequence",
    statements: [
      { text: "The Fibonacci sequence appears throughout nature in sunflower spirals, pine cones, and seashells.", real: true },
      { text: "The ratio between consecutive Fibonacci numbers approaches the golden ratio (approximately 1.618).", real: true },
      { text: "Fibonacci was a French king who discovered the sequence while counting his castles.", real: false }
    ],
    explanation: "Fibonacci (Leonardo of Pisa) was a 13th-century Italian mathematician who introduced the sequence to Western mathematics in his book 'Liber Abaci.'"
  },
  {
    topic: "Octopuses",
    statements: [
      { text: "Octopuses have blue blood because they use copper-based hemocyanin instead of iron-based hemoglobin.", real: true },
      { text: "Octopuses can change both their color and texture in milliseconds for camouflage.", real: true },
      { text: "Octopuses have a single centralized brain that controls all their tentacles.", real: false }
    ],
    explanation: "Octopuses have a central brain plus a cluster of neurons in each arm. Two-thirds of their neurons are in their arms, which can act semi-independently."
  },
  {
    topic: "Panama Canal",
    statements: [
      { text: "Over 27,000 workers died during the French and American construction efforts of the Panama Canal.", real: true },
      { text: "Ships traveling from the Atlantic to the Pacific through the Panama Canal actually travel from west to east.", real: true },
      { text: "The Panama Canal uses no locks — ships simply sail through a sea-level channel.", real: false }
    ],
    explanation: "The Panama Canal uses a system of locks to raise ships 85 feet above sea level to Gatun Lake, then lower them back down on the other side."
  },
  {
    topic: "Tea",
    statements: [
      { text: "Tea is the most consumed beverage in the world after water.", real: true },
      { text: "All true teas — black, green, white, and oolong — come from the same plant, Camellia sinensis.", real: true },
      { text: "Tea was invented in England and has always been a British tradition.", real: false }
    ],
    explanation: "Tea originated in China thousands of years ago. It didn't become popular in England until the 17th century when it was imported by the East India Company."
  },
  {
    topic: "Bhutan Culture",
    statements: [
      { text: "Television and internet were not introduced in Bhutan until 1999.", real: true },
      { text: "Bhutan's national sport is archery, and competitions include distracting the opposing team.", real: true },
      { text: "Bhutan is the most technologically advanced country in Asia.", real: false }
    ],
    explanation: "Bhutan was one of the last countries to introduce television and the internet. It prioritizes cultural preservation and Gross National Happiness over rapid modernization."
  },
  {
    topic: "Volcanic Islands",
    statements: [
      { text: "The Hawaiian Islands were formed by volcanic activity over a geological hotspot.", real: true },
      { text: "Surtsey, a volcanic island near Iceland, emerged from the ocean in 1963 and is a UNESCO site.", real: true },
      { text: "All islands in the world were formed by volcanic activity.", real: false }
    ],
    explanation: "Islands form in many ways: volcanic activity, tectonic uplift, sediment deposition, coral reef growth, and continental drift separating land masses."
  },
  {
    topic: "Belgian Chocolate",
    statements: [
      { text: "Belgium has over 2,000 chocolate shops and produces 220,000 tons of chocolate per year.", real: true },
      { text: "Belgian law requires chocolate to contain at least 35% cocoa to be sold as chocolate.", real: true },
      { text: "Chocolate was invented in Belgium in the 19th century.", real: false }
    ],
    explanation: "Chocolate has been consumed for thousands of years, originating with the Maya and Aztec civilizations in Mesoamerica. Belgium became famous for chocolate much later."
  },
  {
    topic: "Volcanism on Other Worlds",
    statements: [
      { text: "Jupiter's moon Io is the most volcanically active body in the solar system.", real: true },
      { text: "Olympus Mons on Mars is the tallest known volcano in the solar system at about 72,000 feet.", real: true },
      { text: "Venus has no evidence of volcanic activity whatsoever.", real: false }
    ],
    explanation: "Venus has extensive evidence of volcanic activity, with over 1,600 major volcanoes identified. Some may still be active today."
  },
  {
    topic: "Calendars",
    statements: [
      { text: "The Gregorian calendar, used worldwide today, was introduced by Pope Gregory XIII in 1582.", real: true },
      { text: "February has 28 days because Roman Emperor Augustus took a day from it to add to August.", real: true },
      { text: "All cultures around the world have always used a 7-day week.", real: false }
    ],
    explanation: "Different cultures have used weeks of varying lengths. The ancient Egyptians used a 10-day week, and some cultures used 4, 5, 6, or 8-day cycles."
  },
  {
    topic: "Titanium",
    statements: [
      { text: "Titanium is as strong as steel but nearly 45% lighter.", real: true },
      { text: "Titanium is biocompatible and is widely used for medical implants like hip replacements.", real: true },
      { text: "Titanium was named after the Titanic because it was discovered in the wreckage.", real: false }
    ],
    explanation: "Titanium was named after the Titans of Greek mythology. It was discovered in 1791, over a century before the Titanic sank in 1912."
  },
  {
    topic: "Tibet",
    statements: [
      { text: "The Tibetan Plateau is called the 'Roof of the World' with an average elevation over 14,800 feet.", real: true },
      { text: "Tibet is the source of major Asian rivers including the Yangtze, Mekong, and Indus.", real: true },
      { text: "Tibet has a tropical climate with warm temperatures year-round.", real: false }
    ],
    explanation: "Tibet has a harsh, cold, and arid climate due to its extreme altitude. Temperatures can drop well below freezing, and the air is thin."
  },
  {
    topic: "Social Media",
    statements: [
      { text: "Facebook (now Meta) was launched from a Harvard dorm room in 2004.", real: true },
      { text: "More than half the world's population uses social media.", real: true },
      { text: "Social media was invented in ancient Rome through carved stone tablets shared in public.", real: false }
    ],
    explanation: "Social media is a modern phenomenon enabled by the internet. While Romans did have public message boards, these were not social media in any modern sense."
  },
  {
    topic: "Cuttlefish",
    statements: [
      { text: "Cuttlefish have W-shaped pupils and can see polarized light that humans cannot.", real: true },
      { text: "Cuttlefish have three hearts and green-blue blood.", real: true },
      { text: "Cuttlefish are actually a type of fish, as their name suggests.", real: false }
    ],
    explanation: "Despite their name, cuttlefish are not fish. They are cephalopod mollusks, related to octopuses and squid."
  },
  {
    topic: "Mali Empire",
    statements: [
      { text: "Mansa Musa of the Mali Empire is considered the richest person in history.", real: true },
      { text: "Timbuktu, part of the Mali Empire, was a major center of learning with a famous university.", real: true },
      { text: "The Mali Empire was located in South America.", real: false }
    ],
    explanation: "The Mali Empire was a West African empire from about 1235-1600 AD, centered in modern-day Mali, Senegal, Gambia, and Guinea."
  },
  {
    topic: "Radioactivity",
    statements: [
      { text: "Marie Curie's notebooks are still so radioactive that they are kept in lead-lined boxes.", real: true },
      { text: "Bananas are slightly radioactive due to their potassium content.", real: true },
      { text: "Radioactivity is a man-made phenomenon that did not exist before nuclear power plants.", real: false }
    ],
    explanation: "Radioactivity is a natural phenomenon. Radioactive elements have existed since the Earth formed, and cosmic radiation constantly bombards the planet."
  },
  {
    topic: "Greenland",
    statements: [
      { text: "Greenland is the world's largest island that is not a continent.", real: true },
      { text: "Despite its name, about 80% of Greenland is covered by an ice sheet.", real: true },
      { text: "Greenland is an independent country that governs itself entirely.", real: false }
    ],
    explanation: "Greenland is an autonomous territory of Denmark. While it has self-governance on many issues, Denmark controls its foreign affairs and defense."
  },
  {
    topic: "Dance",
    statements: [
      { text: "Ballet originated in the Italian Renaissance courts of the 15th century.", real: true },
      { text: "Flamenco, originating in southern Spain, combines singing, guitar, dance, and handclaps.", real: true },
      { text: "Breakdancing originated in ancient Egypt as a ceremonial dance for pharaohs.", real: false }
    ],
    explanation: "Breakdancing (breaking) originated in the South Bronx, New York City in the early 1970s as part of hip-hop culture."
  },
  {
    topic: "Allergies",
    statements: [
      { text: "Allergies are caused by the immune system overreacting to normally harmless substances.", real: true },
      { text: "The rate of food allergies in children has increased by about 50% since 1997.", real: true },
      { text: "Allergies are contagious and can be spread from person to person like a cold.", real: false }
    ],
    explanation: "Allergies are not contagious. They result from individual immune system responses and can have genetic components, but cannot be transmitted between people."
  },
  {
    topic: "Oil",
    statements: [
      { text: "The first commercial oil well was drilled in Titusville, Pennsylvania in 1859.", real: true },
      { text: "Crude oil is formed from ancient marine organisms compressed over millions of years.", real: true },
      { text: "Oil is a renewable resource that replenishes itself within a few years.", real: false }
    ],
    explanation: "Oil is a non-renewable fossil fuel that takes millions of years to form. Current reserves took 50-500 million years to develop."
  },
  {
    topic: "Bermuda Triangle",
    statements: [
      { text: "The Bermuda Triangle has no more disappearances per area than other comparable ocean regions.", real: true },
      { text: "Lloyd's of London does not charge higher insurance rates for ships passing through the Bermuda Triangle.", real: true },
      { text: "Scientists have confirmed that a supernatural force causes disappearances in the Bermuda Triangle.", real: false }
    ],
    explanation: "No scientific evidence supports supernatural explanations. The Bermuda Triangle's reputation is largely due to sensationalized reporting and the natural hazards common to all busy shipping lanes."
  },
  {
    topic: "Tajikistan",
    statements: [
      { text: "Over 90% of Tajikistan's territory is mountainous.", real: true },
      { text: "Tajikistan's Ismoil Somoni Peak is the highest point in Central Asia.", real: true },
      { text: "Tajikistan is an island nation in the Caribbean.", real: false }
    ],
    explanation: "Tajikistan is a landlocked, mountainous country in Central Asia, bordered by Afghanistan, China, Kyrgyzstan, and Uzbekistan."
  },
  {
    topic: "Dolphins",
    statements: [
      { text: "Dolphins sleep with one eye open — only half their brain sleeps at a time.", real: true },
      { text: "Dolphins use echolocation to navigate and find prey, emitting clicks and interpreting the echoes.", real: true },
      { text: "Dolphins are fish that breathe through gills.", real: false }
    ],
    explanation: "Dolphins are mammals, not fish. They breathe air through a blowhole on top of their head and must surface regularly."
  },
  {
    topic: "Animation",
    statements: [
      { text: "Walt Disney's 'Snow White and the Seven Dwarfs' (1937) was the first full-length cel-animated feature.", real: true },
      { text: "Pixar's first feature film 'Toy Story' (1995) was the first entirely computer-animated feature film.", real: true },
      { text: "Animation can only be created using computers — hand-drawn animation was never used.", real: false }
    ],
    explanation: "Hand-drawn (traditional) animation has been used for over a century. Disney's classic films were all hand-drawn, and the technique is still used today."
  },
  {
    topic: "Astronomy: Exoplanets",
    statements: [
      { text: "Over 5,000 exoplanets have been confirmed orbiting stars other than our Sun.", real: true },
      { text: "Some exoplanets orbit in the 'habitable zone' where liquid water could exist on the surface.", real: true },
      { text: "All exoplanets discovered so far are identical in size and composition to Earth.", real: false }
    ],
    explanation: "Exoplanets come in enormous variety — from gas giants far larger than Jupiter to rocky planets smaller than Earth, with wildly different compositions and atmospheres."
  },
  {
    topic: "Wombats",
    statements: [
      { text: "Wombat poop is cube-shaped, which prevents it from rolling away and helps mark territory.", real: true },
      { text: "Wombats have backward-facing pouches so dirt doesn't get in while they dig burrows.", real: true },
      { text: "Wombats are found throughout Asia and Europe.", real: false }
    ],
    explanation: "Wombats are found only in Australia. They are marsupials endemic to the Australian continent."
  },
  {
    topic: "Towers",
    statements: [
      { text: "The Eiffel Tower was originally intended to be temporary and was nearly demolished after 20 years.", real: true },
      { text: "The Eiffel Tower grows about 6 inches taller in summer due to thermal expansion of the iron.", real: true },
      { text: "The Eiffel Tower is the oldest structure in Paris.", real: false }
    ],
    explanation: "The Eiffel Tower was built in 1889. Paris has many much older structures, including Notre-Dame (1163-1345) and the Sainte-Chapelle (1238-1248)."
  },
  {
    topic: "Linguistics",
    statements: [
      { text: "There are approximately 7,000 languages spoken in the world today.", real: true },
      { text: "Papua New Guinea has the most languages of any country — over 840.", real: true },
      { text: "All human languages evolved from a single language called 'Universal' spoken 500 years ago.", real: false }
    ],
    explanation: "While some linguists theorize a single proto-language, language diversification occurred over tens of thousands of years, not 500. Many language families evolved independently."
  },
  {
    topic: "Electric Eels",
    statements: [
      { text: "Electric eels can generate shocks of up to 860 volts — enough to stun a horse.", real: true },
      { text: "Electric eels are not actually eels — they are more closely related to catfish.", real: true },
      { text: "Electric eels get their electricity by eating batteries found in river sediment.", real: false }
    ],
    explanation: "Electric eels generate electricity through specialized cells called electrocytes stacked like batteries in their bodies. This is a biological process, not from eating batteries."
  },
  {
    topic: "Copper",
    statements: [
      { text: "The Statue of Liberty is covered in copper, which turned green due to oxidation over time.", real: true },
      { text: "Copper has natural antimicrobial properties — bacteria die within hours on copper surfaces.", real: true },
      { text: "Copper is a gas at room temperature.", real: false }
    ],
    explanation: "Copper is a solid metal at room temperature with a melting point of 1,984°F (1,085°C). It is known for its distinctive reddish-orange color."
  },
  {
    topic: "Aztec Food",
    statements: [
      { text: "The Aztecs domesticated turkeys and were among the first to raise them for food.", real: true },
      { text: "Chocolate was consumed as a bitter, spicy drink by the Aztecs long before Europeans added sugar.", real: true },
      { text: "The Aztecs invented pizza and delivered it throughout their empire.", real: false }
    ],
    explanation: "Pizza as we know it originated in Naples, Italy. The Aztecs never made pizza. Their diet centered on corn, beans, squash, and various meats."
  },
  {
    topic: "Jellyfish",
    statements: [
      { text: "The immortal jellyfish (Turritopsis dohrnii) can revert to its juvenile form, potentially living forever.", real: true },
      { text: "Jellyfish have been around for over 500 million years — predating dinosaurs by over 250 million years.", real: true },
      { text: "Jellyfish have brains, hearts, and bones like most other animals.", real: false }
    ],
    explanation: "Jellyfish have no brain, heart, bones, or blood. They are 95% water and sense their environment through a simple nerve net."
  },
  {
    topic: "Canadian Geography",
    statements: [
      { text: "Canada has the longest coastline of any country in the world at over 151,000 miles.", real: true },
      { text: "Canada has more lakes than the rest of the world's countries combined.", real: true },
      { text: "Canada is the smallest country in North America by land area.", real: false }
    ],
    explanation: "Canada is the second-largest country in the world by total area and the largest in North America, far bigger than the United States or Mexico."
  },
  {
    topic: "Sonar",
    statements: [
      { text: "Bats use biological sonar (echolocation) that inspired the development of human-made sonar.", real: true },
      { text: "Sonar was rapidly developed during World War I to detect submarines.", real: true },
      { text: "Sonar works by bouncing lasers off underwater objects.", real: false }
    ],
    explanation: "Sonar uses sound waves, not lasers. The word SONAR stands for Sound Navigation and Ranging. Lasers don't penetrate water effectively."
  },
  {
    topic: "Ancient Egypt",
    statements: [
      { text: "Ancient Egyptian workers who built the pyramids were paid laborers, not slaves.", real: true },
      { text: "Ancient Egyptians had toothpaste made from crushed eggshells, ox hooves, and pumice.", real: true },
      { text: "The Egyptian pyramids were built using modern cranes and trucks.", real: false }
    ],
    explanation: "The pyramids were built using ancient techniques including ramps, rollers, sledges, and human labor — thousands of years before modern machinery existed."
  },
  {
    topic: "Mercury (Planet)",
    statements: [
      { text: "Mercury has virtually no atmosphere, so its surface temperature swings from -290°F to 800°F.", real: true },
      { text: "Despite being closest to the Sun, Mercury is not the hottest planet — Venus is, due to its greenhouse effect.", real: true },
      { text: "Mercury has large oceans of liquid water on its surface.", real: false }
    ],
    explanation: "Mercury has no liquid water on its surface. It has no atmosphere to maintain liquid water, though water ice exists in permanently shadowed craters at its poles."
  },
  {
    topic: "Ghana",
    statements: [
      { text: "Ghana was the first sub-Saharan African country to gain independence from colonial rule, in 1957.", real: true },
      { text: "Ghana is the second-largest producer of cocoa in the world.", real: true },
      { text: "Ghana is located in Southeast Asia.", real: false }
    ],
    explanation: "Ghana is located in West Africa, bordering the Gulf of Guinea, Côte d'Ivoire, Togo, and Burkina Faso."
  },
  {
    topic: "Nutrition",
    statements: [
      { text: "Spinach actually has much less iron than previously thought — a decimal error inflated the figure.", real: true },
      { text: "Almonds are technically seeds, not nuts.", real: true },
      { text: "Eating food after the 'best before' date will always cause immediate food poisoning.", real: false }
    ],
    explanation: "'Best before' dates indicate quality, not safety. Many foods are safe to eat well past their best before dates, though quality may decrease."
  },
  {
    topic: "Komodo Dragons",
    statements: [
      { text: "Komodo dragons are the largest living lizards, reaching up to 10 feet in length.", real: true },
      { text: "Komodo dragon saliva contains toxic bacteria, and they also produce venom.", real: true },
      { text: "Komodo dragons are found throughout Africa and South America.", real: false }
    ],
    explanation: "Komodo dragons are found only on a few Indonesian islands: Komodo, Rinca, Flores, and Gili Motang. They exist nowhere else in the wild."
  },
  {
    topic: "Typewriters",
    statements: [
      { text: "The QWERTY keyboard layout was designed in the 1870s for typewriters.", real: true },
      { text: "The word 'typewriter' can be typed using only the top row of a QWERTY keyboard.", real: true },
      { text: "Typewriters are still the primary writing tool used in offices worldwide today.", real: false }
    ],
    explanation: "Typewriters were largely replaced by personal computers and word processors starting in the 1980s. Very few offices use typewriters today."
  },
  {
    topic: "Maldives",
    statements: [
      { text: "The Maldives is the lowest-lying country in the world, with an average elevation of just 5 feet.", real: true },
      { text: "The Maldives consists of about 1,200 coral islands, of which only about 200 are inhabited.", real: true },
      { text: "The Maldives is a mountainous landlocked country in Central Asia.", real: false }
    ],
    explanation: "The Maldives is an island nation in the Indian Ocean, southwest of India. It has no mountains and is entirely at sea level."
  },
  {
    topic: "Hair",
    statements: [
      { text: "Hair grows about 6 inches per year, and the average head has about 100,000 hairs.", real: true },
      { text: "Human hair is strong enough to support the weight of two elephants — in aggregate.", real: true },
      { text: "Cutting hair makes it grow back thicker and faster.", real: false }
    ],
    explanation: "Cutting hair has no effect on its thickness, color, or rate of growth. Hair appears thicker after cutting because the blunt end is more noticeable."
  },
  {
    topic: "Vietnam War",
    statements: [
      { text: "The Vietnam War lasted about 20 years, from 1955 to 1975.", real: true },
      { text: "More bombs were dropped on Laos during the Vietnam War than on all of Europe during WWII.", real: true },
      { text: "The Vietnam War was fought between Vietnam and Australia over fishing rights.", real: false }
    ],
    explanation: "The Vietnam War was primarily fought between North Vietnam (backed by the Soviet Union and China) and South Vietnam (backed by the United States and allies)."
  },
  {
    topic: "Seismology",
    statements: [
      { text: "The Richter scale is logarithmic — each whole number increase represents 10 times more ground motion.", real: true },
      { text: "Animals sometimes behave strangely before earthquakes, though the mechanism isn't fully understood.", real: true },
      { text: "Earthquakes can be prevented by pouring concrete into fault lines.", real: false }
    ],
    explanation: "Earthquakes cannot be prevented. Tectonic forces are far too powerful for any human intervention. Pouring concrete into fault lines would have no effect."
  },
  {
    topic: "Vikings",
    statements: [
      { text: "Vikings reached North America about 500 years before Christopher Columbus.", real: true },
      { text: "Viking helmets did NOT have horns — the horned helmet image is a 19th-century myth.", real: true },
      { text: "Vikings were only violent raiders who never engaged in farming, trading, or exploration.", real: false }
    ],
    explanation: "Vikings were also farmers, traders, craftspeople, and explorers. They established trade routes across Europe and settled in Iceland, Greenland, and briefly North America."
  },
  {
    topic: "Giraffes",
    statements: [
      { text: "Despite their long necks, giraffes have the same number of neck vertebrae as humans — seven.", real: true },
      { text: "A giraffe's tongue is about 18-20 inches long and is dark purple to prevent sunburn.", real: true },
      { text: "Giraffes sleep about 12 hours a day, the most of any land animal.", real: false }
    ],
    explanation: "Giraffes are one of the least sleep-needing animals, sleeping only about 30 minutes to 2 hours per day, usually in short naps."
  },
  {
    topic: "Sign Language",
    statements: [
      { text: "Sign languages are complete natural languages with their own grammar and syntax.", real: true },
      { text: "There is no universal sign language — different countries have different sign languages.", real: true },
      { text: "Sign language is just a visual translation of spoken English using hand gestures for each word.", real: false }
    ],
    explanation: "Sign languages are independent languages, not visual versions of spoken languages. American Sign Language (ASL) has completely different grammar from English."
  },
  {
    topic: "Bermuda",
    statements: [
      { text: "Bermuda is a British Overseas Territory located in the North Atlantic Ocean.", real: true },
      { text: "Bermuda has no natural freshwater sources — residents collect rainwater on specially designed roofs.", real: true },
      { text: "Bermuda is located in the Pacific Ocean near Hawaii.", real: false }
    ],
    explanation: "Bermuda is in the North Atlantic Ocean, about 650 miles east of North Carolina, USA. It is nowhere near Hawaii or the Pacific."
  },
  {
    topic: "Circadian Rhythms",
    statements: [
      { text: "The human body's natural circadian rhythm is slightly longer than 24 hours.", real: true },
      { text: "Jet lag occurs because your circadian rhythm is out of sync with the local time zone.", real: true },
      { text: "Circadian rhythms only exist in humans and no other living organisms.", real: false }
    ],
    explanation: "Circadian rhythms exist in virtually all living organisms, including animals, plants, fungi, and even bacteria. They are a fundamental biological feature."
  },
  {
    topic: "Estonia",
    statements: [
      { text: "Estonia was the first country to offer e-residency, allowing anyone in the world to start an EU-based business.", real: true },
      { text: "Skype was originally developed by Estonian engineers in Tallinn.", real: true },
      { text: "Estonia is the largest country in South America.", real: false }
    ],
    explanation: "Estonia is a small Baltic country in Northern Europe, one of the three Baltic states along with Latvia and Lithuania."
  },
  {
    topic: "Canals",
    statements: [
      { text: "Venice, Italy has about 150 canals and over 400 bridges.", real: true },
      { text: "The Erie Canal, completed in 1825, was crucial to making New York City the largest US city.", real: true },
      { text: "Canals are natural waterways that form without any human construction.", real: false }
    ],
    explanation: "Canals are artificial waterways built by humans for navigation, irrigation, or drainage. Natural waterways are called rivers, streams, or channels."
  },
  {
    topic: "Wolves",
    statements: [
      { text: "Wolves can travel up to 30 miles in a single day while hunting.", real: true },
      { text: "Wolves howl to communicate with pack members over distances of up to 10 miles.", real: true },
      { text: "Wolves are solitary animals that never live or hunt in groups.", real: false }
    ],
    explanation: "Wolves are highly social animals that live and hunt in packs. Pack cooperation is essential to their survival and hunting strategy."
  },
  {
    topic: "Lebanon",
    statements: [
      { text: "Lebanon's capital Beirut was rebuilt seven times throughout history after being destroyed.", real: true },
      { text: "The cedars of Lebanon are so important to the country that a cedar tree appears on its flag.", real: true },
      { text: "Lebanon is the largest country in the Middle East.", real: false }
    ],
    explanation: "Lebanon is one of the smallest countries in the Middle East, at about 4,000 square miles. Saudi Arabia is the largest."
  },
  {
    topic: "Pi",
    statements: [
      { text: "Pi (π) is an irrational number — its decimal expansion never ends and never repeats.", real: true },
      { text: "Pi has been calculated to over 100 trillion digits.", real: true },
      { text: "Pi was invented by a mathematician in 2005 for use in computer programming.", real: false }
    ],
    explanation: "Pi has been known since ancient times. The Babylonians and Egyptians approximated it over 4,000 years ago. Archimedes studied it rigorously around 250 BC."
  },
  {
    topic: "Rice",
    statements: [
      { text: "Rice feeds more than half the world's population.", real: true },
      { text: "China and India together produce over half of the world's rice.", real: true },
      { text: "Rice only grows in cold, dry climates like Scandinavia.", real: false }
    ],
    explanation: "Rice is a tropical and subtropical crop that requires warm temperatures and abundant water. It is primarily grown in Asia's warm, wet climates."
  },
  {
    topic: "Bermuda Grass",
    statements: [
      { text: "Bermuda grass isn't actually from Bermuda — it originated in Africa.", real: true },
      { text: "Bermuda grass can grow in extremely hot temperatures and is highly drought-resistant.", real: true },
      { text: "Bermuda grass is the only type of grass that exists in the world.", real: false }
    ],
    explanation: "There are over 12,000 species of grass worldwide, including ryegrass, fescue, bluegrass, zoysia, and many others besides Bermuda grass."
  },
  {
    topic: "Cloning",
    statements: [
      { text: "Dolly the sheep, born in 1996, was the first mammal cloned from an adult cell.", real: true },
      { text: "Identical twins are natural clones — they share the same DNA.", real: true },
      { text: "Scientists have successfully cloned adult humans for commercial purposes.", real: false }
    ],
    explanation: "No human has ever been successfully cloned. Human reproductive cloning is banned or restricted in most countries and has never been achieved."
  },
  {
    topic: "Senegal",
    statements: [
      { text: "Senegal's capital Dakar is the westernmost city on the African mainland.", real: true },
      { text: "The Dakar Rally, one of the world's most famous off-road races, was originally a race from Paris to Dakar.", real: true },
      { text: "Senegal is a landlocked country with no access to the ocean.", real: false }
    ],
    explanation: "Senegal has a long coastline along the Atlantic Ocean on its western border. Dakar, its capital, is a major Atlantic port city."
  },
  {
    topic: "Sloths",
    statements: [
      { text: "Sloths are so slow that algae grows on their fur, providing camouflage.", real: true },
      { text: "Sloths can hold their breath for up to 40 minutes — longer than dolphins.", real: true },
      { text: "Sloths are the fastest land animals in the Western Hemisphere.", real: false }
    ],
    explanation: "Sloths are among the slowest mammals, moving at a top speed of about 0.15 mph. The fastest land animal in the Americas is the pronghorn antelope."
  },
  {
    topic: "Binary Code",
    statements: [
      { text: "All digital information — text, images, video — is ultimately stored as sequences of 0s and 1s.", real: true },
      { text: "The binary system was formalized by Gottfried Wilhelm Leibniz in the 17th century.", real: true },
      { text: "Computers process information using base-10 (decimal), just like human math.", real: false }
    ],
    explanation: "Computers use binary (base-2) because electronic circuits have two states: on and off. This maps directly to 1s and 0s."
  },
  {
    topic: "Sardinia",
    statements: [
      { text: "Sardinia is one of the world's 'Blue Zones' where people regularly live past 100.", real: true },
      { text: "Sardinia has its own language, Sardinian, which is distinct from Italian.", real: true },
      { text: "Sardinia is a landlocked region in central Russia.", real: false }
    ],
    explanation: "Sardinia is the second-largest island in the Mediterranean Sea, belonging to Italy. It is surrounded by water."
  },
  {
    topic: "Helium",
    statements: [
      { text: "Helium was first detected in the Sun's spectrum before it was found on Earth — hence its name from Helios.", real: true },
      { text: "Helium is the only element that cannot be solidified at normal atmospheric pressure, no matter how cold.", real: true },
      { text: "Helium is toxic and dangerous to inhale in any quantity.", real: false }
    ],
    explanation: "Helium itself is non-toxic and chemically inert. The danger of inhaling helium comes from asphyxiation (displacing oxygen), not from any toxic property of the gas."
  },
  {
    topic: "Easter Island",
    statements: [
      { text: "Easter Island's moai statues have bodies buried underground — they're not just heads.", real: true },
      { text: "Easter Island is one of the most remote inhabited islands in the world.", real: true },
      { text: "Easter Island is located in the Mediterranean Sea between Italy and Greece.", real: false }
    ],
    explanation: "Easter Island (Rapa Nui) is located in the southeastern Pacific Ocean, belonging to Chile. It is over 2,000 miles from the nearest inhabited land."
  },
  {
    topic: "Coffee",
    statements: [
      { text: "Finland consumes the most coffee per capita of any country in the world.", real: true },
      { text: "Coffee beans are actually seeds found inside bright red cherries.", real: true },
      { text: "Decaffeinated coffee contains absolutely zero caffeine.", real: false }
    ],
    explanation: "Decaf coffee still contains small amounts of caffeine — typically about 2-15 mg per cup, compared to 95-200 mg in regular coffee."
  },
  {
    topic: "Quicksand",
    statements: [
      { text: "You cannot actually sink completely in quicksand — the human body is less dense than quicksand.", real: true },
      { text: "The best way to escape quicksand is to lean back slowly and float, then wiggle free.", real: true },
      { text: "Quicksand is bottomless and will pull you down to the center of the Earth.", real: false }
    ],
    explanation: "Quicksand is rarely more than a few feet deep. Its density is greater than the human body, so you would float at about waist depth."
  },
  {
    topic: "Transportation History",
    statements: [
      { text: "The first commercial airline flight was in 1914, flying between St. Petersburg and Tampa, Florida.", real: true },
      { text: "The Orient Express luxury train service began in 1883, running from Paris to Istanbul.", real: true },
      { text: "Cars were invented before bicycles.", real: false }
    ],
    explanation: "Bicycles came first. The early bicycle (velocipede) appeared in the early 1800s, while the first practical automobile wasn't built until the 1880s."
  },
  {
    topic: "Niagara Falls",
    statements: [
      { text: "Niagara Falls straddles the border between the United States and Canada.", real: true },
      { text: "Several people have survived going over Niagara Falls in barrels.", real: true },
      { text: "Niagara Falls is the tallest waterfall in the world.", real: false }
    ],
    explanation: "Niagara Falls is not even close to the tallest. Angel Falls in Venezuela is the world's tallest at 3,212 feet. Niagara Falls is about 167 feet tall."
  },
  {
    topic: "Tardigrades",
    statements: [
      { text: "Tardigrades can survive in the vacuum of space, extreme radiation, and temperatures near absolute zero.", real: true },
      { text: "Tardigrades can enter a state called cryptobiosis where they can survive for decades without water.", real: true },
      { text: "Tardigrades are the largest animals on Earth, bigger than blue whales.", real: false }
    ],
    explanation: "Tardigrades (water bears) are microscopic, typically 0.1-1.5 mm long. They are among the smallest known animals, not the largest."
  },
  {
    topic: "Samurai",
    statements: [
      { text: "Samurai followed a strict code of honor called Bushido, meaning 'Way of the Warrior.'", real: true },
      { text: "Some samurai were women, known as onna-bugeisha, who fought alongside male warriors.", real: true },
      { text: "Samurai were ancient Roman soldiers who fought in the Colosseum.", real: false }
    ],
    explanation: "Samurai were Japanese warriors who served feudal lords (daimyo) from the 12th to 19th centuries. They had no connection to ancient Rome."
  },
  {
    topic: "Memory",
    statements: [
      { text: "The brain can store an estimated 2.5 petabytes of information — about 3 million hours of TV shows.", real: true },
      { text: "False memories can be implanted through suggestion, and people can believe them as real.", real: true },
      { text: "Humans record memories exactly like a video camera, with perfect accuracy.", real: false }
    ],
    explanation: "Human memory is reconstructive, not reproductive. Each time we recall a memory, we rebuild it, which can introduce errors, distortions, and false details."
  },
  {
    topic: "Albatrosses",
    statements: [
      { text: "The wandering albatross has the longest wingspan of any living bird, reaching up to 12 feet.", real: true },
      { text: "Albatrosses can fly for years without landing, sleeping while gliding on ocean winds.", real: true },
      { text: "Albatrosses are flightless birds that live exclusively in forests.", real: false }
    ],
    explanation: "Albatrosses are extraordinary fliers that spend most of their lives soaring over the open ocean. They are among the most skilled flying birds."
  },
  {
    topic: "Ancient China",
    statements: [
      { text: "The Chinese invented gunpowder, originally searching for an elixir of immortality.", real: true },
      { text: "Paper money was first used in China during the Tang Dynasty, around the 7th century.", real: true },
      { text: "The Great Wall of China was built in a single year by one emperor.", real: false }
    ],
    explanation: "The Great Wall was built over more than 2,000 years by multiple dynasties. Construction began in the 7th century BC and continued until the 17th century AD."
  },
  {
    topic: "Desalination",
    statements: [
      { text: "Saudi Arabia is the world's largest producer of desalinated water.", real: true },
      { text: "Israel gets over 80% of its domestic water from desalination plants.", real: true },
      { text: "Desalination is free and requires no energy to operate.", real: false }
    ],
    explanation: "Desalination is energy-intensive and expensive. Reverse osmosis, the most common method, requires significant amounts of electricity to push water through membranes."
  },
  {
    topic: "Astronomy: Moons",
    statements: [
      { text: "Saturn's moon Titan has a thicker atmosphere than Earth and has lakes of liquid methane.", real: true },
      { text: "Jupiter's moon Europa likely has a liquid water ocean beneath its icy surface.", real: true },
      { text: "Earth's Moon is the largest moon in the solar system.", real: false }
    ],
    explanation: "Jupiter's moon Ganymede is the largest moon in the solar system, even larger than the planet Mercury. Earth's Moon ranks fifth in size."
  },
  {
    topic: "Coral Bleaching",
    statements: [
      { text: "Coral bleaching occurs when stressed corals expel the symbiotic algae living in their tissues.", real: true },
      { text: "The Great Barrier Reef has experienced several mass bleaching events due to rising ocean temperatures.", real: true },
      { text: "Coral bleaching is a natural, healthy process that makes corals stronger.", real: false }
    ],
    explanation: "Coral bleaching is a stress response that can be fatal. Without their symbiotic algae, corals lose their food source and often die if conditions don't improve."
  },
  {
    topic: "Bicycles",
    statements: [
      { text: "More bicycles are produced worldwide each year than cars.", real: true },
      { text: "The Netherlands has more bicycles than people.", real: true },
      { text: "Bicycles were first invented by Leonardo da Vinci in 1493.", real: false }
    ],
    explanation: "While a bicycle sketch was attributed to da Vinci, it's likely a forgery. The first verifiable bicycle-like device was the draisine, invented by Karl von Drais in 1817."
  },
  {
    topic: "Aurora",
    statements: [
      { text: "The Northern Lights are caused by charged particles from the Sun colliding with Earth's atmosphere.", real: true },
      { text: "Auroras also occur on other planets, including Jupiter and Saturn.", real: true },
      { text: "The Northern Lights can only be seen from Norway and nowhere else on Earth.", real: false }
    ],
    explanation: "Auroras can be seen from many locations near the poles, including Canada, Alaska, Iceland, Sweden, Finland, Russia, and during strong solar storms, even lower latitudes."
  },
  {
    topic: "Pangolins",
    statements: [
      { text: "Pangolins are the only mammals covered in scales, made of keratin like human fingernails.", real: true },
      { text: "Pangolins are the most trafficked mammals in the world.", real: true },
      { text: "Pangolins are large predators that hunt lions and elephants.", real: false }
    ],
    explanation: "Pangolins are small, shy insectivores that eat ants and termites. They curl into a defensive ball when threatened and weigh only 3-70 pounds."
  },
  {
    topic: "Voting Systems",
    statements: [
      { text: "Ranked-choice voting allows voters to rank candidates in order of preference.", real: true },
      { text: "New Zealand uses a mixed-member proportional system combining electorate and list seats.", real: true },
      { text: "All democracies around the world use the exact same voting system.", real: false }
    ],
    explanation: "Democracies use many different systems: first-past-the-post, proportional representation, ranked-choice, runoff systems, and various hybrid approaches."
  },
  {
    topic: "Cassowaries",
    statements: [
      { text: "Cassowaries are often called the most dangerous bird in the world due to their powerful kicks.", real: true },
      { text: "Cassowaries can run up to 31 mph and swim across rivers.", real: true },
      { text: "Cassowaries are tiny hummingbird-sized birds found in the Arctic.", real: false }
    ],
    explanation: "Cassowaries are large, flightless birds standing up to 6 feet tall, found in tropical forests of New Guinea and northeastern Australia."
  },
  {
    topic: "Central African Republic",
    statements: [
      { text: "The Central African Republic is one of the least densely populated countries in Africa.", real: true },
      { text: "Diamonds are one of the Central African Republic's most valuable exports.", real: true },
      { text: "The Central African Republic is located in Northern Europe.", real: false }
    ],
    explanation: "As its name suggests, the Central African Republic is located in central Africa, bordered by Chad, Sudan, South Sudan, the Democratic Republic of the Congo, and Cameroon."
  },
  {
    topic: "Gecko Adhesion",
    statements: [
      { text: "Gecko feet use van der Waals forces — molecular attraction — to stick to smooth surfaces.", real: true },
      { text: "A gecko's feet have millions of tiny hair-like structures called setae that enable adhesion.", real: true },
      { text: "Geckos use a sticky glue secreted from their feet to climb walls.", real: false }
    ],
    explanation: "Geckos don't use glue or suction. Their climbing ability comes from billions of nanoscale spatulae on their feet that create molecular attraction forces."
  },
  {
    topic: "Steam Engines",
    statements: [
      { text: "James Watt didn't invent the steam engine — he dramatically improved Thomas Newcomen's earlier design.", real: true },
      { text: "The unit of power 'watt' is named after James Watt.", real: true },
      { text: "Steam engines were first used in ancient Rome to power chariots.", real: false }
    ],
    explanation: "While Hero of Alexandria built a steam-powered device (aeolipile) in the 1st century, practical steam engines weren't developed until the early 1700s in England."
  },
  {
    topic: "Colors in Nature",
    statements: [
      { text: "There are no truly blue pigments in nature — most blue in animals comes from structural coloration.", real: true },
      { text: "Flamingos are born gray or white and turn pink from carotenoid pigments in their diet of shrimp and algae.", real: true },
      { text: "All flowers in nature are white — colored flowers don't exist without human breeding.", real: false }
    ],
    explanation: "Wildflowers come in nearly every color. Flower colors evolved millions of years before humans to attract pollinators like bees, butterflies, and hummingbirds."
  },
  {
    topic: "Irrigation",
    statements: [
      { text: "Ancient Mesopotamians developed some of the earliest known irrigation systems over 6,000 years ago.", real: true },
      { text: "About 70% of the world's freshwater usage goes to agriculture, primarily irrigation.", real: true },
      { text: "Modern irrigation systems water crops by making it rain artificially from satellites in space.", real: false }
    ],
    explanation: "Modern irrigation uses ground-level methods like drip irrigation, sprinklers, and flood irrigation — not space-based technology."
  },
  {
    topic: "Seahorses",
    statements: [
      { text: "Male seahorses carry and give birth to the babies, not the females.", real: true },
      { text: "Seahorses have no stomach — food passes through their digestive system so fast they must eat almost constantly.", real: true },
      { text: "Seahorses are the fastest swimmers in the ocean.", real: false }
    ],
    explanation: "Seahorses are among the slowest fish in the ocean. The dwarf seahorse holds the record as the slowest, moving at about 5 feet per hour."
  },
  {
    topic: "Myanmar Temples",
    statements: [
      { text: "Myanmar's Shwedagon Pagoda is covered in real gold plates and topped with thousands of diamonds.", real: true },
      { text: "The ancient city of Bagan once had over 10,000 Buddhist temples, of which about 2,200 survive.", real: true },
      { text: "All temples in Myanmar were built in the 21st century as tourist attractions.", real: false }
    ],
    explanation: "Myanmar's temples are ancient, with many dating back over 1,000 years. Bagan's temples were built primarily between the 11th and 13th centuries."
  },
  {
    topic: "Nitrogen",
    statements: [
      { text: "Nitrogen makes up about 78% of Earth's atmosphere — far more than oxygen.", real: true },
      { text: "Liquid nitrogen boils at -321°F (-196°C) and is used for rapid freezing and cryogenic applications.", real: true },
      { text: "Nitrogen is a rare element found only in laboratories.", real: false }
    ],
    explanation: "Nitrogen is the most abundant gas in our atmosphere and is found throughout nature in proteins, DNA, and soil. It is anything but rare."
  },
  {
    topic: "Indian Cuisine",
    statements: [
      { text: "Chicken tikka masala was likely invented in Britain, not India, in the 1960s or 70s.", real: true },
      { text: "India has more vegetarians than the rest of the world combined.", real: true },
      { text: "All Indian food is extremely spicy — mild Indian dishes do not exist.", real: false }
    ],
    explanation: "Indian cuisine is enormously diverse. Many dishes are mild, including dal, raita, idli, dosa, and various desserts. Spice levels vary widely by region and dish."
  },
  {
    topic: "Amphibians",
    statements: [
      { text: "Some frogs can survive being frozen solid and thaw back to life in spring.", real: true },
      { text: "The golden poison dart frog has enough toxin to kill 10-20 adult humans.", real: true },
      { text: "All amphibians are venomous and dangerous to handle.", real: false }
    ],
    explanation: "Most amphibians are harmless to humans. Only certain species of frogs, newts, and salamanders produce significant toxins. Many are safe to handle."
  },
  {
    topic: "Compass",
    statements: [
      { text: "The magnetic compass was invented in China during the Han Dynasty, originally for feng shui.", real: true },
      { text: "A compass needle doesn't point to true north — it points to magnetic north, which shifts over time.", real: true },
      { text: "Compass needles always point south, never north.", real: false }
    ],
    explanation: "Compass needles point toward magnetic north. The north-seeking end of the needle is what gives the compass its primary navigational utility."
  },
  {
    topic: "Astronomy: Nebulae",
    statements: [
      { text: "Stars are born inside nebulae — vast clouds of gas and dust in space.", real: true },
      { text: "The Crab Nebula is the remnant of a supernova that was visible from Earth in 1054 AD.", real: true },
      { text: "Nebulae are small, solid rocks floating in space.", real: false }
    ],
    explanation: "Nebulae are enormous clouds of gas and dust, often spanning many light-years. They are not solid objects but vast, diffuse regions of space."
  },
  {
    topic: "Avocados",
    statements: [
      { text: "Avocados evolved to be eaten by giant ground sloths, which went extinct about 13,000 years ago.", real: true },
      { text: "A single avocado tree can produce up to 500 avocados per year.", real: true },
      { text: "Avocados are a type of grain, like wheat or rice.", real: false }
    ],
    explanation: "Avocados are a fruit — specifically a large berry with a single seed. They grow on trees in the laurel family."
  },
  {
    topic: "Caves: Unique Features",
    statements: [
      { text: "Mexico's Cave of Crystals contains selenite crystals up to 39 feet long.", real: true },
      { text: "Waitomo Caves in New Zealand glow blue due to bioluminescent glowworm larvae on the ceiling.", real: true },
      { text: "Caves only exist in warm tropical regions and never form in cold climates.", real: false }
    ],
    explanation: "Caves form in many climates. Ice caves exist in glaciers, and limestone caves are found from the tropics to the Arctic. Norway, Canada, and Russia all have significant cave systems."
  },
  {
    topic: "Pigments and Dyes",
    statements: [
      { text: "Tyrian purple dye was so expensive in ancient Rome that it was reserved for emperors.", real: true },
      { text: "The color mauve was the first synthetic dye, accidentally discovered by William Perkin in 1856.", real: true },
      { text: "All dyes and pigments are derived from petroleum and have been since ancient times.", real: false }
    ],
    explanation: "Ancient dyes came from natural sources: plants (indigo), animals (cochineal insects), and minerals (ochre). Synthetic dyes were only invented in the 19th century."
  },
  {
    topic: "Platypuses",
    statements: [
      { text: "The platypus is one of only five species of mammals that lay eggs.", real: true },
      { text: "Male platypuses have venomous spurs on their hind legs that can cause excruciating pain.", real: true },
      { text: "Platypuses are found wild on every continent.", real: false }
    ],
    explanation: "Platypuses are found only in eastern Australia and Tasmania. They exist nowhere else in the wild."
  },
  {
    topic: "Cartography",
    statements: [
      { text: "The Mercator projection makes Greenland appear as large as Africa, when Africa is 14 times bigger.", real: true },
      { text: "The oldest known world map is a Babylonian clay tablet from about 600 BC.", real: true },
      { text: "Maps have always shown north at the top throughout all of human history.", real: false }
    ],
    explanation: "The convention of north at the top is relatively recent. Medieval European maps often placed east at the top (hence 'orientation'), and early Islamic maps placed south at the top."
  },
  {
    topic: "Amazon River",
    statements: [
      { text: "The Amazon River has over 1,100 tributaries, of which 17 are over 1,000 miles long.", real: true },
      { text: "Bull sharks have been found in the Amazon River over 2,500 miles from the ocean.", real: true },
      { text: "The Amazon River flows through the Sahara Desert in Africa.", real: false }
    ],
    explanation: "The Amazon River flows through South America, primarily through Brazil, Peru, and Colombia. It has nothing to do with Africa or the Sahara."
  },
  {
    topic: "Insulin",
    statements: [
      { text: "Insulin was discovered by Frederick Banting and Charles Best in 1921 at the University of Toronto.", real: true },
      { text: "Banting sold the insulin patent to the University of Toronto for $1, wanting it to be accessible to all.", real: true },
      { text: "Insulin is a mineral supplement that people take for strong bones.", real: false }
    ],
    explanation: "Insulin is a hormone produced by the pancreas that regulates blood sugar levels. It is essential for treating diabetes, not for bone health."
  },
  {
    topic: "Wind",
    statements: [
      { text: "The fastest wind speed ever recorded on Earth's surface was 253 mph during Tropical Cyclone Olivia in 1996.", real: true },
      { text: "Wind is caused by differences in atmospheric pressure created by uneven heating of Earth's surface.", real: true },
      { text: "Wind always blows from west to east everywhere on Earth.", real: false }
    ],
    explanation: "Wind direction varies by location and weather patterns. Trade winds blow east to west near the equator, and local conditions create winds in all directions."
  },
  {
    topic: "Pompeii",
    statements: [
      { text: "Pompeii was buried under up to 20 feet of volcanic ash when Mount Vesuvius erupted in 79 AD.", real: true },
      { text: "The preserved bodies at Pompeii are actually plaster casts made by pouring plaster into voids left by decomposed bodies.", real: true },
      { text: "Pompeii was destroyed by a massive earthquake, not a volcanic eruption.", real: false }
    ],
    explanation: "Pompeii was destroyed by the eruption of Mount Vesuvius, which buried the city in ash and pumice. While earthquakes preceded the eruption, volcanism was the cause."
  },
  {
    topic: "Kelp",
    statements: [
      { text: "Giant kelp can grow up to 2 feet per day, making it one of the fastest-growing organisms on Earth.", real: true },
      { text: "Kelp forests support entire ecosystems and are sometimes called the 'rainforests of the sea.'", real: true },
      { text: "Kelp is a type of mammal that lives in the deep ocean.", real: false }
    ],
    explanation: "Kelp is a type of large brown seaweed (algae), not a mammal. It grows in shallow, cool coastal waters and forms underwater forests."
  },
  {
    topic: "Morse Code",
    statements: [
      { text: "SOS in Morse code is three dots, three dashes, three dots (· · · — — — · · ·).", real: true },
      { text: "Samuel Morse sent the first telegraph message ('What hath God wrought') in 1844.", real: true },
      { text: "Morse code was invented in ancient Egypt and used to build the pyramids.", real: false }
    ],
    explanation: "Morse code was developed in the 1830s-1840s for use with the electric telegraph. It was invented thousands of years after the pyramids were built."
  },
  {
    topic: "Space Suits",
    statements: [
      { text: "A NASA space suit costs approximately $12 million.", real: true },
      { text: "Space suits must provide oxygen, remove CO2, maintain pressure, and regulate temperature.", real: true },
      { text: "Astronauts wear regular street clothes during spacewalks.", real: false }
    ],
    explanation: "Astronauts wear specialized Extravehicular Mobility Units (EMUs) during spacewalks. Without a space suit, exposure to the vacuum of space would be rapidly fatal."
  },
  {
    topic: "Axolotls",
    statements: [
      { text: "Axolotls can regenerate lost limbs, spinal cord, heart, and even parts of their brain.", real: true },
      { text: "Axolotls are critically endangered in the wild, found only in Lake Xochimilco near Mexico City.", real: true },
      { text: "Axolotls are a type of tropical bird found in South America.", real: false }
    ],
    explanation: "Axolotls are aquatic salamanders (amphibians), not birds. They are neotenic, meaning they retain their larval features throughout their lives."
  },
  {
    topic: "Astronomy: Comets",
    statements: [
      { text: "Halley's Comet is visible from Earth approximately every 75-79 years.", real: true },
      { text: "A comet's tail always points away from the Sun, regardless of the comet's direction of travel.", real: true },
      { text: "Comets are made of solid iron and are extremely hot.", real: false }
    ],
    explanation: "Comets are often called 'dirty snowballs' — they're composed of ice, dust, and rocky material. Their tails form when solar heat vaporizes the ice."
  },
  {
    topic: "Currency",
    statements: [
      { text: "The British pound sterling is the oldest currency still in use, dating back over 1,200 years.", real: true },
      { text: "Sweden was the first European country to issue paper banknotes in 1661.", real: true },
      { text: "All countries in the world use the same currency.", real: false }
    ],
    explanation: "There are over 180 recognized currencies in the world. While some regions share currencies (like the euro), most countries have their own."
  },
  {
    topic: "Earthquakes: Japan",
    statements: [
      { text: "Japan experiences about 1,500 earthquakes per year.", real: true },
      { text: "Japanese buildings use advanced seismic engineering including base isolation and tuned mass dampers.", real: true },
      { text: "Japan has never experienced any significant earthquake in its history.", real: false }
    ],
    explanation: "Japan is one of the most seismically active countries on Earth. It has experienced many devastating earthquakes, including the 2011 Tōhoku earthquake and tsunami."
  },
  {
    topic: "Mushrooms",
    statements: [
      { text: "Some mushrooms glow in the dark through bioluminescence.", real: true },
      { text: "The world's most expensive mushroom is the European white truffle, which can cost over $3,000 per pound.", real: true },
      { text: "Mushrooms are a type of plant that photosynthesizes like trees and flowers.", real: false }
    ],
    explanation: "Mushrooms are fungi, not plants. They cannot photosynthesize. Instead, they obtain nutrients by decomposing organic matter or through symbiotic relationships."
  },
  {
    topic: "Fibonacci in Nature",
    statements: [
      { text: "The number of petals on most flowers follows the Fibonacci sequence: 3, 5, 8, 13, 21...", real: true },
      { text: "The spiral pattern of a nautilus shell closely approximates the golden spiral related to Fibonacci.", real: true },
      { text: "The Fibonacci sequence was discovered by counting the legs of centipedes.", real: false }
    ],
    explanation: "Fibonacci introduced the sequence through a mathematical puzzle about rabbit population growth in his 1202 book 'Liber Abaci.'"
  },
  {
    topic: "Sahara Desert",
    statements: [
      { text: "The Sahara is roughly the same size as the United States.", real: true },
      { text: "Only about 25% of the Sahara is sand — the rest is rocky plateau, gravel, and mountains.", real: true },
      { text: "The Sahara has always been a desert for the entire history of Earth.", real: false }
    ],
    explanation: "The Sahara cycles between green and desert conditions. As recently as 5,000-10,000 years ago, it was a lush savanna with rivers, lakes, and abundant wildlife."
  },
  {
    topic: "Silk Road Religion",
    statements: [
      { text: "Buddhism spread from India to China largely through merchants traveling the Silk Road.", real: true },
      { text: "The Silk Road transmitted not just goods but diseases, ideas, religions, and technologies between civilizations.", real: true },
      { text: "The Silk Road was used exclusively for transporting silk and no other goods.", real: false }
    ],
    explanation: "The Silk Road transported countless goods including spices, metals, gems, glass, textiles, and foods, as well as ideas, religions, and technologies."
  },
  {
    topic: "Lightning",
    statements: [
      { text: "Lightning is about five times hotter than the surface of the Sun — reaching 30,000 Kelvin.", real: true },
      { text: "Lake Maracaibo in Venezuela has the most lightning strikes of any place on Earth.", real: true },
      { text: "Lightning never strikes the same place twice.", real: false }
    ],
    explanation: "Lightning frequently strikes the same place twice. Tall structures like the Empire State Building are struck about 20-25 times per year."
  },
  {
    topic: "Contact Lenses",
    statements: [
      { text: "Leonardo da Vinci first described the concept of contact lenses in 1508.", real: true },
      { text: "Early contact lenses were made of blown glass and covered the entire eye.", real: true },
      { text: "Contact lenses can permanently change the color of your eyes through staining.", real: false }
    ],
    explanation: "Contact lenses sit on top of the eye and don't permanently alter it. Colored contact lenses change apparent eye color temporarily while worn, but the effect is not permanent."
  },
  {
    topic: "Tonga",
    statements: [
      { text: "Tonga is one of the few Pacific island nations that was never colonized by a European power.", real: true },
      { text: "The 2022 Hunga Tonga volcanic eruption was the most powerful explosion recorded in the 21st century.", real: true },
      { text: "Tonga is a landlocked country in the Himalayas.", real: false }
    ],
    explanation: "Tonga is a Polynesian island kingdom in the South Pacific Ocean, consisting of 169 islands. It is entirely surrounded by ocean."
  },
  {
    topic: "Antibiotics",
    statements: [
      { text: "Alexander Fleming discovered penicillin in 1928 when mold contaminated one of his bacterial cultures.", real: true },
      { text: "Antibiotic resistance is a growing global health crisis, partly caused by overuse of antibiotics.", real: true },
      { text: "Antibiotics are effective against viral infections like the common cold and flu.", real: false }
    ],
    explanation: "Antibiotics only work against bacterial infections. They have no effect on viruses. Misusing antibiotics for viral infections contributes to antibiotic resistance."
  },
  {
    topic: "Bamboo Forests",
    statements: [
      { text: "China's bamboo forests are the primary habitat of the giant panda.", real: true },
      { text: "Bamboo forests in Japan's Arashiyama are known for producing eerie creaking sounds in the wind.", real: true },
      { text: "Bamboo forests only grow indoors in heated greenhouses.", real: false }
    ],
    explanation: "Bamboo forests grow naturally outdoors across Asia, South America, Africa, and even parts of the southern United States. They thrive in various outdoor climates."
  },
  {
    topic: "Spiders",
    statements: [
      { text: "Spider silk is stronger per weight than steel and more elastic than nylon.", real: true },
      { text: "Not all spiders build webs — some are active hunters like wolf spiders and jumping spiders.", real: true },
      { text: "All spiders are deadly venomous to humans.", real: false }
    ],
    explanation: "Most spider species are harmless to humans. Of over 45,000 known species, only a handful have venom dangerous to people, such as black widows and brown recluses."
  },
  {
    topic: "Nepal: Mount Everest",
    statements: [
      { text: "Mount Everest grows about 4 millimeters taller each year due to tectonic activity.", real: true },
      { text: "Over 300 people have died attempting to climb Everest, and many bodies remain on the mountain.", real: true },
      { text: "Mount Everest is an active volcano that regularly erupts.", real: false }
    ],
    explanation: "Mount Everest is not a volcano. It was formed by the collision of the Indian and Eurasian tectonic plates pushing sedimentary and metamorphic rock upward."
  },
  {
    topic: "Sundials",
    statements: [
      { text: "Sundials are among the oldest known devices for measuring time, dating back to at least 1500 BC.", real: true },
      { text: "Sundials work differently in the Northern and Southern Hemispheres — shadows move in opposite directions.", real: true },
      { text: "Sundials work perfectly at night and during cloudy weather.", real: false }
    ],
    explanation: "Sundials require direct sunlight to function. They cannot tell time at night, on cloudy days, or during any conditions where the sun is not visible."
  },
  {
    topic: "Narwhals",
    statements: [
      { text: "The narwhal's tusk is actually an elongated tooth that can grow up to 10 feet long.", real: true },
      { text: "Narwhal tusks contain millions of nerve endings, making them a sensory organ.", real: true },
      { text: "Narwhals are found in tropical waters near the equator.", real: false }
    ],
    explanation: "Narwhals live exclusively in Arctic waters around Greenland, Canada, and Russia. They are uniquely adapted to extremely cold polar environments."
  },
  {
    topic: "3D Printing",
    statements: [
      { text: "3D printing was invented in 1984 by Chuck Hull, who called it stereolithography.", real: true },
      { text: "3D printers have been used to create working organs, houses, bridges, and even food.", real: true },
      { text: "3D printers can only print using plastic and no other materials.", real: false }
    ],
    explanation: "3D printers can use metals, ceramics, concrete, biological cells, food materials, wood composites, and many other materials beyond plastic."
  },
  {
    topic: "Blood Types",
    statements: [
      { text: "Type O negative blood is the universal donor — it can be given to anyone in an emergency.", real: true },
      { text: "The Bombay blood type is so rare that only about 4 in a million people have it.", real: true },
      { text: "Your blood type changes every year as you age.", real: false }
    ],
    explanation: "Blood type is determined by genetics and remains the same throughout your life. It is set at conception and does not change with age."
  },
  {
    topic: "Nutmeg",
    statements: [
      { text: "Nutmeg was once so valuable that a small bag could buy a house in Elizabethan England.", real: true },
      { text: "In large doses, nutmeg can cause hallucinations due to a compound called myristicin.", real: true },
      { text: "Nutmeg grows on cacti in the American desert.", real: false }
    ],
    explanation: "Nutmeg comes from the seed of the Myristica fragrans tree, which is native to the Banda Islands of Indonesia, a tropical region far from any desert."
  },
  {
    topic: "Hibernation",
    statements: [
      { text: "During hibernation, a bear's heart rate can drop from 40 beats per minute to as low as 8.", real: true },
      { text: "Arctic ground squirrels can supercool their body temperature to below freezing during hibernation.", real: true },
      { text: "Hibernation and sleep are the same biological process.", real: false }
    ],
    explanation: "Hibernation is fundamentally different from sleep. During hibernation, metabolic rate drops dramatically, body temperature plunges, and the animal enters a state of torpor."
  },
  {
    topic: "Great Lakes",
    statements: [
      { text: "The Great Lakes contain about 21% of the world's surface fresh water.", real: true },
      { text: "Lake Superior is the largest freshwater lake in the world by surface area.", real: true },
      { text: "The Great Lakes are located in South America between Chile and Argentina.", real: false }
    ],
    explanation: "The Great Lakes are located in North America, along the border between the United States and Canada."
  },
  {
    topic: "Forensic Entomology",
    statements: [
      { text: "Forensic entomologists can estimate time of death based on the life stage of insects found on a body.", real: true },
      { text: "Blowflies can detect a dead body within minutes and arrive before any other insect.", real: true },
      { text: "Insects avoid human remains and are never found near crime scenes.", real: false }
    ],
    explanation: "Insects are strongly attracted to decomposing remains. Their predictable colonization patterns make them valuable tools in forensic investigations."
  },
  {
    topic: "Stonehenge",
    statements: [
      { text: "Some of Stonehenge's bluestones were transported from Wales, over 150 miles away.", real: true },
      { text: "Stonehenge is aligned with the sunrise on the summer solstice.", real: true },
      { text: "Stonehenge was built by the Romans as a gladiator arena.", real: false }
    ],
    explanation: "Stonehenge was built in stages between about 3000 and 2000 BC — long before the Romans arrived in Britain in 43 AD. Its builders were Neolithic people."
  },
  {
    topic: "Optics",
    statements: [
      { text: "Rainbows are full circles, but we usually only see an arc because the ground blocks the lower half.", real: true },
      { text: "Fiber optic cables transmit data as pulses of light and can carry signals across oceans.", real: true },
      { text: "Glass lenses can only magnify objects and can never reduce their apparent size.", real: false }
    ],
    explanation: "Concave lenses reduce the apparent size of objects. They are used in glasses for nearsighted people and in many optical instruments alongside magnifying convex lenses."
  },
  {
    topic: "Suriname",
    statements: [
      { text: "Suriname is the smallest country in South America.", real: true },
      { text: "Dutch is the official language of Suriname, the only such country in South America.", real: true },
      { text: "Suriname is a large country in Europe, between France and Germany.", real: false }
    ],
    explanation: "Suriname is located on the northeastern coast of South America, bordered by French Guiana, Guyana, and Brazil."
  },
  {
    topic: "Manatees",
    statements: [
      { text: "Manatees are sometimes called sea cows and are the likely origin of mermaid legends.", real: true },
      { text: "Manatees' closest living relatives are elephants, not other marine mammals.", real: true },
      { text: "Manatees are fierce predators that hunt sharks and whales.", real: false }
    ],
    explanation: "Manatees are gentle herbivores that feed almost exclusively on seagrass and aquatic plants. They have no predatory behavior."
  },
  {
    topic: "Braille",
    statements: [
      { text: "Braille was invented by Louis Braille when he was only 15 years old.", real: true },
      { text: "Braille is used worldwide and has been adapted for nearly every language.", real: true },
      { text: "Braille is a spoken language used for communication over the telephone.", real: false }
    ],
    explanation: "Braille is a tactile writing system read with the fingertips. It uses raised dots in patterns to represent letters, numbers, and punctuation."
  },
  {
    topic: "Diamonds",
    statements: [
      { text: "Diamonds are made of carbon, the same element found in pencil graphite.", real: true },
      { text: "Scientists can now create lab-grown diamonds that are chemically identical to natural ones.", real: true },
      { text: "Diamonds are the rarest gemstones on Earth.", real: false }
    ],
    explanation: "Diamonds are not the rarest gemstones. Painite, alexandrite, red beryl, and many others are far rarer. Diamonds are common compared to many gems but are controlled by supply management."
  },
  {
    topic: "Silk Production",
    statements: [
      { text: "China still produces about 80% of the world's silk.", real: true },
      { text: "About 2,500 silkworms are needed to produce one pound of raw silk.", real: true },
      { text: "Silk is harvested from cotton plants growing in the desert.", real: false }
    ],
    explanation: "Silk is produced by silkworms (Bombyx mori), which spin cocoons of silk thread. It has nothing to do with cotton plants."
  },
  {
    topic: "International Space Station",
    statements: [
      { text: "The ISS orbits Earth about 16 times per day, experiencing 16 sunrises and sunsets.", real: true },
      { text: "The ISS is the most expensive single object ever built, costing over $150 billion.", real: true },
      { text: "The ISS is located on the Moon's surface.", real: false }
    ],
    explanation: "The ISS orbits Earth at an altitude of about 250 miles. It is not on the Moon, which is about 239,000 miles from Earth."
  },
  {
    topic: "Turmeric",
    statements: [
      { text: "Curcumin, the active compound in turmeric, has been studied for anti-inflammatory properties.", real: true },
      { text: "Turmeric has been used in Indian cooking and traditional medicine for over 4,000 years.", real: true },
      { text: "Turmeric is a type of meat from a rare tropical animal.", real: false }
    ],
    explanation: "Turmeric is a flowering plant in the ginger family. The spice comes from grinding the dried rhizome (root) of the plant."
  },
  {
    topic: "Venetian Glass",
    statements: [
      { text: "Murano glass artisans in Venice were forbidden to leave the island under penalty of death to protect trade secrets.", real: true },
      { text: "Venetian glassmakers discovered how to make clear glass (cristallo) in the 15th century.", real: true },
      { text: "Venetian glass is made by carving solid rocks into transparent shapes.", real: false }
    ],
    explanation: "Venetian glass is made by melting silica sand at extremely high temperatures and shaping the molten glass through blowing and other techniques."
  },
  {
    topic: "Crows",
    statements: [
      { text: "Crows can recognize individual human faces and hold grudges for years.", real: true },
      { text: "New Caledonian crows craft and use tools, including hooks, to extract insects from bark.", real: true },
      { text: "Crows are unable to fly and spend their entire lives on the ground.", real: false }
    ],
    explanation: "Crows are excellent fliers. They are among the most aerial of all birds and can fly at speeds up to 60 mph."
  },
  {
    topic: "Lithium",
    statements: [
      { text: "Lithium is the lightest metal on Earth — it can even float on water.", real: true },
      { text: "Lithium is used to treat bipolar disorder and was one of the first psychiatric medications.", real: true },
      { text: "Lithium is heavier than lead and sinks in all liquids.", real: false }
    ],
    explanation: "Lithium is the lightest metal, with a density of only 0.534 g/cm³ — about half the density of water. It is far lighter than lead."
  },
  {
    topic: "Mayan Civilization",
    statements: [
      { text: "The Maya independently invented the concept of zero, one of the first civilizations to do so.", real: true },
      { text: "The Maya developed a calendar system more accurate than the Julian calendar used in Europe.", real: true },
      { text: "The Maya civilization was located in ancient India.", real: false }
    ],
    explanation: "The Maya civilization was centered in Mesoamerica — present-day southern Mexico, Guatemala, Belize, Honduras, and El Salvador."
  },
  {
    topic: "Wasabi",
    statements: [
      { text: "Most 'wasabi' served outside Japan is actually colored horseradish with mustard.", real: true },
      { text: "Real wasabi loses its flavor within 15 minutes of being grated.", real: true },
      { text: "Wasabi is a type of cheese made from goat's milk.", real: false }
    ],
    explanation: "Wasabi is a plant in the Brassicaceae family, related to horseradish and mustard. The spicy paste is made from grating its stem."
  },
  {
    topic: "Panama Hats",
    statements: [
      { text: "Panama hats are actually made in Ecuador, not Panama.", real: true },
      { text: "A high-quality Panama hat can take several months to weave by hand.", real: true },
      { text: "Panama hats are made from synthetic plastic fibers in factories.", real: false }
    ],
    explanation: "Genuine Panama hats are handwoven from the straw of the toquilla palm plant, which is native to Ecuador."
  },
  {
    topic: "Beavers",
    statements: [
      { text: "Beaver dams can be enormous — the largest known dam is over half a mile long, visible from space.", real: true },
      { text: "Beavers' teeth are orange because they contain iron, which makes them stronger.", real: true },
      { text: "Beavers are reptiles that lay eggs in desert sand.", real: false }
    ],
    explanation: "Beavers are large, semi-aquatic rodents — mammals that give live birth. They live in and around rivers, streams, and lakes."
  },
  {
    topic: "Bermuda Onion",
    statements: [
      { text: "Bermuda was once famous for its onion exports, earning it the nickname 'The Onion Patch.'", real: true },
      { text: "Bermuda onions are mild and sweet, making them popular for eating raw.", real: true },
      { text: "Bermuda onions are actually a type of apple that grows underground.", real: false }
    ],
    explanation: "Bermuda onions are true onions (Allium cepa), a bulb vegetable. They are not related to apples in any way."
  },
  {
    topic: "Anesthesia",
    statements: [
      { text: "Before anesthesia, surgery patients were physically held down and operations were done as fast as possible.", real: true },
      { text: "The first public demonstration of surgical anesthesia using ether was in 1846 at Massachusetts General Hospital.", real: true },
      { text: "General anesthesia was invented in ancient times and has been used unchanged for 5,000 years.", real: false }
    ],
    explanation: "While ancient civilizations used herbs and alcohol to dull pain, modern general anesthesia was developed in the 1840s. The drugs and techniques have evolved enormously since."
  },
  {
    topic: "Butterscotch",
    statements: [
      { text: "Butterscotch is made from brown sugar and butter, not from scotch whisky.", real: true },
      { text: "The 'scotch' in butterscotch likely refers to 'scorching' or cutting the candy.", real: true },
      { text: "Butterscotch is a type of butterfly found in Scotland.", real: false }
    ],
    explanation: "Butterscotch is a confection made by heating brown sugar and butter together. It has no connection to butterflies or Scotland specifically."
  },
  {
    topic: "Mangroves",
    statements: [
      { text: "Mangrove forests can filter out up to 90% of salt from seawater through their root systems.", real: true },
      { text: "Mangrove forests protect coastlines from storms, tsunamis, and erosion.", real: true },
      { text: "Mangroves grow only in cold Arctic waters near the North Pole.", real: false }
    ],
    explanation: "Mangroves grow in tropical and subtropical coastal regions. They require warm temperatures and are found near the equator, not in the Arctic."
  },
  {
    topic: "Photography: Daguerreotype",
    statements: [
      { text: "The daguerreotype, invented in 1839, was the first commercially practical photographic process.", real: true },
      { text: "Early daguerreotype portraits required subjects to sit still for several minutes due to long exposure times.", real: true },
      { text: "Daguerreotypes used modern digital sensors to capture images.", real: false }
    ],
    explanation: "Daguerreotypes were an analog chemical process using silver-plated copper sheets. Digital sensors weren't invented until the late 20th century."
  },
  {
    topic: "Ostriches",
    statements: [
      { text: "Ostriches are the largest living birds and can run at speeds up to 45 mph.", real: true },
      { text: "Ostrich eggs are the largest of any living bird, weighing about 3 pounds each.", real: true },
      { text: "Ostriches bury their heads in the sand when frightened.", real: false }
    ],
    explanation: "Ostriches do not bury their heads in the sand. When threatened, they either run away, fight with powerful kicks, or lie flat on the ground."
  },
  {
    topic: "Zimbabwe",
    statements: [
      { text: "Great Zimbabwe was a medieval city whose stone ruins are among the largest in sub-Saharan Africa.", real: true },
      { text: "Victoria Falls, on Zimbabwe's border, is called 'The Smoke That Thunders' by locals.", real: true },
      { text: "Zimbabwe is located in Northern Europe.", real: false }
    ],
    explanation: "Zimbabwe is a landlocked country in southern Africa, bordered by South Africa, Botswana, Zambia, and Mozambique."
  },
  {
    topic: "Sourdough",
    statements: [
      { text: "Sourdough bread uses wild yeast and bacteria captured from the environment instead of commercial yeast.", real: true },
      { text: "Some sourdough starters have been maintained for over 100 years, passed down through generations.", real: true },
      { text: "Sourdough bread was invented in 2010 as a modern health food trend.", real: false }
    ],
    explanation: "Sourdough is one of the oldest forms of bread leavening. Ancient Egyptians used sourdough starters over 5,000 years ago."
  },
  {
    topic: "Puffer Fish",
    statements: [
      { text: "Puffer fish contain tetrodotoxin, a poison 1,200 times more toxic than cyanide.", real: true },
      { text: "In Japan, fugu (puffer fish) can only be prepared by licensed chefs who train for years.", real: true },
      { text: "Puffer fish are completely harmless and are the safest fish to eat raw.", real: false }
    ],
    explanation: "Puffer fish are among the most toxic vertebrates on Earth. Improperly prepared fugu kills several people each year."
  },
  {
    topic: "Erosion",
    statements: [
      { text: "The Grand Canyon was carved over millions of years primarily by the Colorado River.", real: true },
      { text: "Wind erosion in the Sahara creates yardangs — streamlined rock formations shaped like boat hulls.", real: true },
      { text: "Erosion only occurs on other planets and never affects Earth's surface.", real: false }
    ],
    explanation: "Erosion is a constant process on Earth. Water, wind, ice, and gravity continuously reshape the landscape, creating canyons, valleys, and coastlines."
  },
  {
    topic: "Indian Ocean",
    statements: [
      { text: "The Indian Ocean is the third largest ocean, covering about 20% of Earth's water surface.", real: true },
      { text: "The Indian Ocean is the warmest ocean in the world.", real: true },
      { text: "The Indian Ocean is entirely frozen year-round like the Arctic.", real: false }
    ],
    explanation: "The Indian Ocean is tropical and subtropical, with warm temperatures year-round. It never freezes, unlike the Arctic Ocean."
  },
  {
    topic: "Espresso",
    statements: [
      { text: "Espresso actually contains less caffeine per serving than a regular cup of drip coffee.", real: true },
      { text: "The espresso machine was invented in Italy in the early 1900s.", real: true },
      { text: "Espresso is made by soaking coffee beans in cold water for 48 hours.", real: false }
    ],
    explanation: "Espresso is made by forcing near-boiling water through finely-ground coffee under high pressure for about 25-30 seconds, not by cold soaking."
  },
  {
    topic: "Owls",
    statements: [
      { text: "Owls can rotate their heads up to 270 degrees because they have 14 neck vertebrae (humans have 7).", real: true },
      { text: "Owl ears are asymmetrically placed on their heads, which helps them pinpoint prey by sound alone.", real: true },
      { text: "Owls have excellent eyesight but are completely deaf.", real: false }
    ],
    explanation: "Owls have exceptional hearing — it's one of their primary hunting tools. Some owl species can locate prey in complete darkness using sound alone."
  },
  {
    topic: "Cleopatra",
    statements: [
      { text: "Cleopatra spoke at least nine languages and was the first Ptolemaic ruler to learn Egyptian.", real: true },
      { text: "Cleopatra was actually of Greek-Macedonian descent, not ethnically Egyptian.", real: true },
      { text: "Cleopatra ruled during the medieval period in Europe.", real: false }
    ],
    explanation: "Cleopatra ruled Egypt from 51-30 BC, during the ancient era. The medieval period didn't begin until about 500 AD, over 500 years later."
  },
  {
    topic: "Geysers",
    statements: [
      { text: "Yellowstone's Old Faithful erupts approximately every 44-125 minutes.", real: true },
      { text: "Iceland has more geysers than any other country — the word 'geyser' comes from Icelandic.", real: true },
      { text: "Geysers are found on every continent, including Antarctica.", real: false }
    ],
    explanation: "Geysers require specific geological conditions (underground heat, water, and a plumbing system) and are found in only a few locations worldwide. Antarctica has no geysers."
  },
  {
    topic: "Morse Code History",
    statements: [
      { text: "The Titanic's distress signal in 1912 used both the older CQD and the newer SOS codes.", real: true },
      { text: "Morse code is still used today by amateur radio operators and in some military applications.", real: true },
      { text: "Morse code uses 26 different sounds for each letter of the alphabet.", real: false }
    ],
    explanation: "Morse code uses only two signals — dots (short) and dashes (long) — combined in various patterns to represent letters, numbers, and punctuation."
  },
  {
    topic: "Chocolate History",
    statements: [
      { text: "The Swiss didn't invent chocolate but perfected milk chocolate in 1875 with Daniel Peter.", real: true },
      { text: "Chocolate was consumed as a drink for most of its 4,000-year history before becoming a solid bar.", real: true },
      { text: "Chocolate bars were invented by the ancient Egyptians and found in pyramids.", real: false }
    ],
    explanation: "Chocolate bars were invented in the 19th century in Europe. The ancient Egyptians had no access to cacao, which is native to Central and South America."
  },
  {
    topic: "Kiwifruit",
    statements: [
      { text: "Kiwifruit is originally from China, where it was called 'yang tao' (Chinese gooseberry).", real: true },
      { text: "Kiwifruit was renamed by New Zealand exporters for marketing purposes in the 1950s.", real: true },
      { text: "Kiwifruit is a type of bird, not a fruit.", real: false }
    ],
    explanation: "Kiwifruit is indeed a fruit. It was named after New Zealand's kiwi bird due to a superficial resemblance, but they are completely different things."
  },
  {
    topic: "Tectonic Plates",
    statements: [
      { text: "Earth's surface is divided into about 15 major tectonic plates that float on the mantle.", real: true },
      { text: "The Himalayan mountain range was formed by the collision of the Indian and Eurasian plates.", real: true },
      { text: "Tectonic plates are stationary and have never moved in Earth's history.", real: false }
    ],
    explanation: "Tectonic plates are constantly moving at a rate of a few centimeters per year. This movement causes earthquakes, creates mountains, and reshapes continents."
  },
  {
    topic: "Vanilla",
    statements: [
      { text: "Vanilla is the second most expensive spice in the world after saffron.", real: true },
      { text: "Each vanilla orchid flower must be hand-pollinated, as the natural pollinator exists only in Mexico.", real: true },
      { text: "Vanilla is extracted from the bark of pine trees in Scandinavia.", real: false }
    ],
    explanation: "Vanilla comes from the cured seed pods (beans) of tropical orchids in the genus Vanilla, primarily grown in Madagascar, Mexico, and Tahiti."
  },
  {
    topic: "Pluto",
    statements: [
      { text: "Pluto was reclassified from a planet to a dwarf planet in 2006.", real: true },
      { text: "Pluto has five known moons, with the largest (Charon) being about half Pluto's size.", real: true },
      { text: "Pluto is larger than Earth and is the biggest object in the solar system.", real: false }
    ],
    explanation: "Pluto is tiny compared to Earth — it's about one-sixth Earth's diameter and one-sixth its mass. It's even smaller than Earth's Moon."
  },
  {
    topic: "Chameleons",
    statements: [
      { text: "Chameleons change color primarily to communicate and regulate temperature, not just for camouflage.", real: true },
      { text: "Chameleons can move each eye independently, giving them 360-degree vision.", real: true },
      { text: "Chameleons are the largest reptiles in Africa, growing up to 30 feet long.", real: false }
    ],
    explanation: "Most chameleons are small, typically 6-24 inches long. The Nile crocodile is the largest reptile in Africa. The largest chameleon is about 27 inches."
  },
  {
    topic: "Mesopotamia",
    statements: [
      { text: "Mesopotamia, between the Tigris and Euphrates rivers, is often called the 'Cradle of Civilization.'", real: true },
      { text: "The Mesopotamians invented the wheel, writing (cuneiform), and the 60-minute hour.", real: true },
      { text: "Mesopotamia was located in modern-day Australia.", real: false }
    ],
    explanation: "Mesopotamia was located in the region of modern-day Iraq and parts of Syria, Turkey, and Kuwait."
  },
  {
    topic: "Rubber",
    statements: [
      { text: "Natural rubber comes from the sap (latex) of rubber trees, originally found in South America.", real: true },
      { text: "Charles Goodyear accidentally discovered vulcanization by dropping rubber mixed with sulfur on a hot stove.", real: true },
      { text: "Rubber is mined from underground deposits like coal.", real: false }
    ],
    explanation: "Natural rubber is harvested from living rubber trees by tapping — making incisions in the bark and collecting the milky latex that flows out."
  },
  {
    topic: "Radio",
    statements: [
      { text: "The first radio broadcast of voice and music was made by Reginald Fessenden on Christmas Eve, 1906.", real: true },
      { text: "Guglielmo Marconi won the Nobel Prize for his work on wireless telegraphy in 1909.", real: true },
      { text: "Radio waves travel at the speed of sound, about 767 mph.", real: false }
    ],
    explanation: "Radio waves are electromagnetic radiation and travel at the speed of light — about 186,000 miles per second, vastly faster than the speed of sound."
  },
  {
    topic: "CRISPR",
    statements: [
      { text: "CRISPR gene editing was adapted from a natural defense system that bacteria use against viruses.", real: true },
      { text: "Jennifer Doudna and Emmanuelle Charpentier won the 2020 Nobel Prize for developing CRISPR-Cas9.", real: true },
      { text: "CRISPR is a type of breakfast cereal that was invented in the 1950s.", real: false }
    ],
    explanation: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary gene-editing technology, not a cereal."
  },
  {
    topic: "Pomegranates",
    statements: [
      { text: "A single pomegranate contains about 600-1,400 seeds called arils.", real: true },
      { text: "Pomegranates are one of the oldest cultivated fruits, grown for over 5,000 years.", real: true },
      { text: "Pomegranates are a type of nut that grows underground like peanuts.", real: false }
    ],
    explanation: "Pomegranates are fruits that grow on small trees or large shrubs. They develop above ground and have a distinctive red, leathery skin."
  },
  {
    topic: "Tornadoes",
    statements: [
      { text: "Tornado Alley in the central US has more tornadoes than anywhere else on Earth.", real: true },
      { text: "Some tornadoes can have wind speeds exceeding 300 mph.", real: true },
      { text: "Tornadoes can only form over oceans and never touch land.", real: false }
    ],
    explanation: "Tornadoes primarily form over land. When they form over water, they're called waterspouts. Most destructive tornadoes occur over land areas."
  },
  {
    topic: "Vaccination History",
    statements: [
      { text: "George Washington ordered the Continental Army to be inoculated against smallpox during the Revolutionary War.", real: true },
      { text: "The word 'vaccine' comes from 'vacca,' the Latin word for cow, due to Jenner's use of cowpox.", real: true },
      { text: "Vaccines were only invented in the 21st century.", real: false }
    ],
    explanation: "The first vaccine was developed by Edward Jenner in 1796, over 200 years ago. Vaccines are one of the oldest and most established medical interventions."
  },
  {
    topic: "Peacocks",
    statements: [
      { text: "Only male peafowl are called peacocks — females are called peahens.", real: true },
      { text: "A peacock's tail feathers can make up 60% of its total body length.", real: true },
      { text: "Peacocks are native to North America and were brought to Asia by European settlers.", real: false }
    ],
    explanation: "Peacocks (Indian peafowl) are native to South Asia. They were brought to Europe and the Americas, not the other way around."
  },
  {
    topic: "Architecture: Gothic",
    statements: [
      { text: "Flying buttresses allowed Gothic cathedrals to have large stained glass windows by supporting walls externally.", real: true },
      { text: "Notre-Dame de Paris took nearly 200 years to build, from 1163 to 1345.", real: true },
      { text: "Gothic cathedrals were designed to be as short and dark as possible.", real: false }
    ],
    explanation: "Gothic architecture aimed for the opposite — soaring heights and maximum light. Innovations like pointed arches and flying buttresses enabled tall, light-filled interiors."
  },
  {
    topic: "Sandwiches",
    statements: [
      { text: "The sandwich is named after the Earl of Sandwich, who wanted to eat without leaving the card table.", real: true },
      { text: "Americans eat about 300 million sandwiches every single day.", real: true },
      { text: "The sandwich was invented in ancient Rome as a dessert served only at funerals.", real: false }
    ],
    explanation: "The sandwich concept was popularized in 18th-century England by the 4th Earl of Sandwich. While Romans had bread with toppings, the modern sandwich has English origins."
  },
  {
    topic: "Flamingos",
    statements: [
      { text: "Flamingos can only eat with their heads upside down.", real: true },
      { text: "Baby flamingos are born with gray or white feathers and turn pink over their first few years.", real: true },
      { text: "Flamingos are native to the Arctic and thrive in freezing temperatures.", real: false }
    ],
    explanation: "Flamingos are found in warm tropical and subtropical regions of Africa, Asia, the Americas, and southern Europe. They prefer warm, shallow, salty lakes."
  },
  {
    topic: "Grenada",
    statements: [
      { text: "Grenada is called the 'Spice Isle' because it produces about 20% of the world's nutmeg.", real: true },
      { text: "Grenada has a nutmeg on its national flag.", real: true },
      { text: "Grenada is a large landlocked country in Central Asia.", real: false }
    ],
    explanation: "Grenada is a small island nation in the Caribbean Sea, consisting of several islands. It is not landlocked and not in Asia."
  },
  {
    topic: "Rainforests",
    statements: [
      { text: "Tropical rainforests once covered 14% of Earth's surface but now cover less than 6%.", real: true },
      { text: "A single hectare of rainforest can contain over 750 species of trees.", real: true },
      { text: "Rainforests receive very little rainfall — less than 5 inches per year.", real: false }
    ],
    explanation: "Rainforests receive enormous amounts of rainfall — typically 80-400 inches per year. The name 'rainforest' directly reflects this defining characteristic."
  },
  {
    topic: "Microwave Ovens",
    statements: [
      { text: "The microwave oven was accidentally invented when a radar engineer noticed a candy bar melting in his pocket.", real: true },
      { text: "Microwaves heat food by causing water molecules to vibrate rapidly.", real: true },
      { text: "Microwave ovens work by shining visible light on food to cook it.", real: false }
    ],
    explanation: "Microwave ovens use microwave radiation (not visible light) at a frequency of about 2.45 GHz to excite water molecules and generate heat."
  },
  {
    topic: "Homing Pigeons",
    statements: [
      { text: "Homing pigeons were used to carry messages in both World Wars, saving thousands of lives.", real: true },
      { text: "A homing pigeon named G.I. Joe saved over 1,000 Allied soldiers in WWII by delivering a message.", real: true },
      { text: "Homing pigeons navigate by following street signs and road maps.", real: false }
    ],
    explanation: "Homing pigeons navigate using Earth's magnetic field, the position of the Sun, visual landmarks, and possibly even their sense of smell."
  },
  {
    topic: "Coral",
    statements: [
      { text: "Some coral species can live for thousands of years, making them among the longest-lived animals.", real: true },
      { text: "Coral reefs cover less than 0.1% of the ocean floor but support about 25% of marine species.", real: true },
      { text: "Coral is a type of mineral that forms without any biological processes.", real: false }
    ],
    explanation: "Coral is built by living coral polyps — tiny animals related to jellyfish. The hard structure is their calcium carbonate skeleton, secreted by these organisms."
  },
  {
    topic: "Easter",
    statements: [
      { text: "The date of Easter changes every year because it's based on the lunar calendar.", real: true },
      { text: "The Easter Bunny tradition originated in German Lutheran communities in the 1600s.", real: true },
      { text: "Easter always falls on December 25th every year.", real: false }
    ],
    explanation: "December 25th is Christmas, not Easter. Easter falls on the first Sunday after the first full moon following the spring equinox, typically in March or April."
  },
  {
    topic: "Mercury (Element)",
    statements: [
      { text: "Mercury is the only metal that is liquid at standard room temperature.", real: true },
      { text: "Mercury was used in hat-making, causing 'mad hatter disease' — the origin of the phrase 'mad as a hatter.'", real: true },
      { text: "Mercury is completely safe to drink and was used as a health supplement.", real: false }
    ],
    explanation: "Mercury is highly toxic. While it was historically used in some medicines, it causes serious neurological damage, kidney failure, and death with sufficient exposure."
  },
  {
    topic: "Tuvalu",
    statements: [
      { text: "Tuvalu is one of the smallest countries in the world with only about 11,000 people.", real: true },
      { text: "Tuvalu earns significant revenue from its internet domain '.tv' which it licenses to media companies.", real: true },
      { text: "Tuvalu is the highest-altitude country in the world, located in the Himalayas.", real: false }
    ],
    explanation: "Tuvalu is a low-lying Pacific island nation, one of the most vulnerable to rising sea levels. Its highest point is only about 15 feet above sea level."
  },
  {
    topic: "Oranges",
    statements: [
      { text: "The color orange was named after the fruit, not the other way around.", real: true },
      { text: "Brazil produces about one-third of the world's oranges.", real: true },
      { text: "Oranges are naturally neon blue on the inside.", real: false }
    ],
    explanation: "Oranges are orange on the inside (hence the name). Some varieties may be slightly more yellow or red, but no orange is naturally blue."
  },
  {
    topic: "Mayflower",
    statements: [
      { text: "The Mayflower's 1620 voyage carried only 102 passengers across the Atlantic.", real: true },
      { text: "The Mayflower Compact, signed on the ship, is considered a foundation of American self-governance.", real: true },
      { text: "The Mayflower was a steam-powered cruise ship.", real: false }
    ],
    explanation: "The Mayflower was a wooden sailing ship. Steam-powered ships weren't developed until the early 1800s, nearly 200 years after the Mayflower voyage."
  },
  {
    topic: "Emeralds",
    statements: [
      { text: "Cleopatra was known for her passion for emeralds and owned emerald mines in Egypt.", real: true },
      { text: "High-quality emeralds can be more valuable per carat than diamonds.", real: true },
      { text: "Emeralds are bright red gemstones, not green.", real: false }
    ],
    explanation: "Emeralds are defined by their green color, which comes from trace amounts of chromium and sometimes vanadium. Red gemstones of the same mineral would be rubies."
  },
  {
    topic: "Saturn's Rings",
    statements: [
      { text: "Saturn's rings are mostly made of ice particles ranging from tiny grains to house-sized chunks.", real: true },
      { text: "Saturn's rings are incredibly thin relative to their width — only about 30 feet thick in some places.", real: true },
      { text: "Saturn's rings are solid, continuous discs of metal.", real: false }
    ],
    explanation: "Saturn's rings consist of billions of individual particles orbiting the planet independently. They are not solid discs but collections of orbiting debris."
  },
  {
    topic: "Yeast",
    statements: [
      { text: "Yeast is a single-celled fungus, not a plant or animal.", real: true },
      { text: "The same species of yeast (Saccharomyces cerevisiae) is used for both baking bread and brewing beer.", real: true },
      { text: "Yeast was created in a laboratory in 2015 and doesn't exist in nature.", real: false }
    ],
    explanation: "Yeast has existed in nature for hundreds of millions of years. Humans have used it for thousands of years in baking and brewing."
  },
  {
    topic: "Rwanda Gorillas",
    statements: [
      { text: "Rwanda is one of only three countries where mountain gorillas can be found in the wild.", real: true },
      { text: "Mountain gorilla populations have increased due to conservation efforts, from about 680 in 2008 to over 1,000.", real: true },
      { text: "Mountain gorillas are found on every continent.", real: false }
    ],
    explanation: "Mountain gorillas are found only in two small areas of central/east Africa — the Virunga Mountains (Rwanda, Uganda, DRC) and Bwindi Forest (Uganda)."
  },
  {
    topic: "Glass Blowing",
    statements: [
      { text: "Glass blowing was invented around the 1st century BC in the Roman Empire.", real: true },
      { text: "Glass must be heated to about 2,000°F (1,100°C) before it becomes soft enough to blow.", real: true },
      { text: "Glass blowing is done with cold glass at room temperature.", real: false }
    ],
    explanation: "Glass blowing requires extremely high temperatures. Glass is rigid at room temperature and must be heated until it becomes a viscous, workable liquid."
  },
  {
    topic: "Raccoons",
    statements: [
      { text: "Raccoons can remember solutions to tasks for up to three years.", real: true },
      { text: "Raccoons have extremely sensitive front paws with five fingers, allowing them to open jars and doors.", real: true },
      { text: "Raccoons are native to Australia and were introduced to North America by settlers.", real: false }
    ],
    explanation: "Raccoons are native to North America. They were introduced to Europe and Asia, not the other way around."
  },
  {
    topic: "Space Debris",
    statements: [
      { text: "There are over 27,000 pieces of tracked orbital debris larger than 10 cm around Earth.", real: true },
      { text: "Even a small paint fleck in orbit can damage a spacecraft because it travels at 17,500 mph.", real: true },
      { text: "Space debris is not a problem because it all burns up naturally within days.", real: false }
    ],
    explanation: "Space debris can remain in orbit for decades or centuries. Objects in higher orbits can stay there for thousands of years, posing long-term risks."
  },
  {
    topic: "Currency: Unusual",
    statements: [
      { text: "The Pacific island of Yap used massive stone discs called Rai stones as currency.", real: true },
      { text: "Zimbabwe once issued a 100-trillion-dollar banknote during its hyperinflation crisis.", real: true },
      { text: "Every country in history has always used paper money since ancient times.", real: false }
    ],
    explanation: "Before paper money, currencies included coins, shells, beads, salt, cattle, and many other items. Paper money was first used in China around the 7th century."
  },
  {
    topic: "Mantis Shrimp",
    statements: [
      { text: "Mantis shrimp can punch with the force of a bullet, accelerating their clubs at 50 mph.", real: true },
      { text: "Mantis shrimp have the most complex eyes in the animal kingdom with 16 types of color receptors.", real: true },
      { text: "Mantis shrimp are gentle filter feeders that eat only microscopic plants.", real: false }
    ],
    explanation: "Mantis shrimp are aggressive predators that smash or spear their prey with powerful appendages. They can break aquarium glass with their punches."
  },
  {
    topic: "Architecture: Art Deco",
    statements: [
      { text: "Art Deco originated in France in the 1920s and emphasized geometric shapes and bold colors.", real: true },
      { text: "The Chrysler Building and Empire State Building in New York are iconic examples of Art Deco architecture.", real: true },
      { text: "Art Deco was a medieval architectural style used exclusively for building castles.", real: false }
    ],
    explanation: "Art Deco emerged in the 1920s-1930s, centuries after the medieval period. It was used for skyscrapers, theaters, hotels, and various modern buildings."
  },
  {
    topic: "Lobsters",
    statements: [
      { text: "Lobsters were once considered poverty food and were fed to prisoners and servants in colonial America.", real: true },
      { text: "Lobsters can live for over 100 years and continue growing throughout their entire lives.", real: true },
      { text: "Lobsters are mammals that give birth to live young and nurse them.", real: false }
    ],
    explanation: "Lobsters are crustaceans, not mammals. They lay eggs that are carried by the female on her swimmerets until they hatch."
  },
  {
    topic: "Venice",
    statements: [
      { text: "Venice is built on 118 small islands connected by over 400 bridges.", real: true },
      { text: "Venice is slowly sinking at a rate of 1-2 millimeters per year.", real: true },
      { text: "Venice was built on a solid granite mountain in the Alps.", real: false }
    ],
    explanation: "Venice is built on wooden pilings driven into the muddy lagoon floor. There is no mountain — the city sits on marshy islands in the Adriatic lagoon."
  },
  {
    topic: "Peanuts",
    statements: [
      { text: "Peanuts are not actually nuts — they are legumes, related to beans and lentils.", real: true },
      { text: "George Washington Carver discovered over 300 uses for peanuts, including dyes, plastics, and fuel.", real: true },
      { text: "Peanuts grow on tall trees, like walnuts and pecans.", real: false }
    ],
    explanation: "Peanuts grow underground. The plant flowers above ground, but the flower stems bend down and push into the soil where the peanuts develop."
  },
  {
    topic: "Phoenicians",
    statements: [
      { text: "The Phoenicians invented the alphabet that became the basis for Greek, Latin, and most modern alphabets.", real: true },
      { text: "Phoenician sailors circumnavigated Africa around 600 BC, about 2,000 years before the Portuguese.", real: true },
      { text: "The Phoenicians lived in what is now South America.", real: false }
    ],
    explanation: "The Phoenicians were based in the eastern Mediterranean, in what is now Lebanon, Syria, and northern Israel."
  },
  {
    topic: "Acupuncture",
    statements: [
      { text: "Acupuncture has been practiced in China for over 2,500 years.", real: true },
      { text: "The World Health Organization recognizes acupuncture as a treatment for various conditions.", real: true },
      { text: "Acupuncture involves surgery to remove bones from the body.", real: false }
    ],
    explanation: "Acupuncture involves inserting thin needles into specific points on the body. It is non-surgical and non-invasive."
  },
  {
    topic: "Quartz",
    statements: [
      { text: "Quartz is the second most abundant mineral in Earth's continental crust.", real: true },
      { text: "Quartz crystals vibrate at a precise frequency when electrified, which is why they're used in watches.", real: true },
      { text: "Quartz is softer than butter and crumbles at the slightest touch.", real: false }
    ],
    explanation: "Quartz is a hard mineral, rating 7 on the Mohs hardness scale. It can scratch glass and most metals."
  },
  {
    topic: "Pasta",
    statements: [
      { text: "There are over 600 different pasta shapes produced worldwide.", real: true },
      { text: "Dried pasta was likely developed for long sea voyages because it could be stored for months.", real: true },
      { text: "Marco Polo brought pasta from China to Italy, where it had never existed before.", real: false }
    ],
    explanation: "This is a persistent myth. Pasta existed in Italy before Marco Polo's journey to China. Ancient Romans and Etruscans made pasta-like foods."
  },
  {
    topic: "Earthquakes: Prediction",
    statements: [
      { text: "China successfully predicted and evacuated for the 1975 Haicheng earthquake, saving many lives.", real: true },
      { text: "Seismologists can identify fault lines likely to produce earthquakes but cannot predict exact timing.", real: true },
      { text: "Smartphone apps can now predict earthquakes with 100% accuracy weeks in advance.", real: false }
    ],
    explanation: "No technology can predict earthquakes with precision. Early warning systems detect earthquakes already in progress and provide seconds to minutes of warning."
  },
  {
    topic: "Pottery",
    statements: [
      { text: "The oldest known pottery vessels were found in China and date to about 20,000 years ago.", real: true },
      { text: "The potter's wheel was one of the earliest applications of wheel technology, predating wheeled vehicles.", real: true },
      { text: "Pottery can only be made with a modern electric kiln.", real: false }
    ],
    explanation: "Pottery has been made for tens of thousands of years using simple pit fires and later wood-fired kilns. Electric kilns are a modern convenience, not a requirement."
  },
  {
    topic: "Hedgehogs",
    statements: [
      { text: "Hedgehogs are immune to many snake venoms due to a protein called erinacin.", real: true },
      { text: "When hedgehogs encounter a new smell, they create a frothy saliva and spread it on their spines.", real: true },
      { text: "Hedgehogs are large predators weighing over 200 pounds.", real: false }
    ],
    explanation: "Hedgehogs are small animals typically weighing between 1-3 pounds. They eat insects, snails, and small vertebrates."
  },
  {
    topic: "Astronomy: Neutron Stars",
    statements: [
      { text: "A teaspoon of neutron star material would weigh about 6 billion tons.", real: true },
      { text: "Some neutron stars (pulsars) spin hundreds of times per second.", real: true },
      { text: "Neutron stars are large, hollow spheres filled with air.", real: false }
    ],
    explanation: "Neutron stars are incredibly dense — the most dense objects besides black holes. They are solid (mostly neutrons) and contain no air or hollow spaces."
  },
  {
    topic: "Cheese",
    statements: [
      { text: "There are over 1,800 named varieties of cheese in the world.", real: true },
      { text: "Cheese was likely discovered by accident when milk was stored in an animal stomach containing rennet.", real: true },
      { text: "Cheese can only be made from cow's milk and no other source.", real: false }
    ],
    explanation: "Cheese is made from the milk of many animals including goats, sheep, buffalo, yaks, camels, and even donkeys and moose."
  },
  {
    topic: "Rafflesia",
    statements: [
      { text: "Rafflesia arnoldii produces the world's largest single flower, up to 3 feet in diameter.", real: true },
      { text: "Rafflesia flowers smell like rotting flesh to attract flies for pollination.", real: true },
      { text: "Rafflesia flowers are tiny, fragrant blossoms used in expensive perfumes.", real: false }
    ],
    explanation: "Rafflesia flowers are enormous (not tiny) and smell terrible (not fragrant). Their rotting meat odor attracts flies, not perfume buyers."
  },
  {
    topic: "Cacao vs Cocoa",
    statements: [
      { text: "Cacao trees can only grow within 20 degrees of the equator.", real: true },
      { text: "Each cacao pod contains about 30-50 beans, and it takes about 400 beans to make one pound of chocolate.", real: true },
      { text: "Cacao trees grow naturally in the Arctic and produce beans year-round in snow.", real: false }
    ],
    explanation: "Cacao trees are strictly tropical plants requiring warm temperatures, high humidity, and protection from wind. They cannot survive in cold or Arctic conditions."
  },
  {
    topic: "Electoral College",
    statements: [
      { text: "The US Electoral College means a president can win without winning the popular vote.", real: true },
      { text: "Five US presidents have won the presidency while losing the popular vote.", real: true },
      { text: "Every country in the world uses an Electoral College system identical to the US.", real: false }
    ],
    explanation: "The Electoral College is unique to the United States. Most other democracies use popular vote, parliamentary, or other systems to select leaders."
  },
  {
    topic: "Cacti",
    statements: [
      { text: "Cacti can survive for years without rain by storing water in their thick stems.", real: true },
      { text: "The saguaro cactus can live for over 200 years and grow up to 60 feet tall.", real: true },
      { text: "Cacti are native to every continent, including Antarctica.", real: false }
    ],
    explanation: "Cacti are native only to the Americas (plus one species in Africa). They are not found naturally in Europe, Asia, or Antarctica."
  },
  {
    topic: "Sign Language: History",
    statements: [
      { text: "American Sign Language (ASL) is more closely related to French Sign Language than to British Sign Language.", real: true },
      { text: "Martha's Vineyard had such a high deaf population that nearly everyone there knew sign language.", real: true },
      { text: "Sign language was invented last year and has no significant history.", real: false }
    ],
    explanation: "Sign languages have existed for centuries. Formal sign languages were developed in the 1700s-1800s, and informal signing has existed for millennia."
  },
  {
    topic: "Kevlar",
    statements: [
      { text: "Kevlar was invented by Stephanie Kwolek at DuPont in 1965.", real: true },
      { text: "Kevlar is five times stronger than steel on an equal-weight basis.", real: true },
      { text: "Kevlar is a natural fiber harvested from sheep, similar to wool.", real: false }
    ],
    explanation: "Kevlar is a synthetic aramid fiber created in a laboratory. It is a manufactured material, not a natural animal product."
  },
  {
    topic: "Himalayas",
    statements: [
      { text: "The Himalayas are still growing at a rate of about 1 centimeter per year.", real: true },
      { text: "Marine fossils have been found near the summit of Mount Everest, showing it was once under the sea.", real: true },
      { text: "The Himalayas are located in South America between Brazil and Argentina.", real: false }
    ],
    explanation: "The Himalayas are in Asia, stretching across five countries: India, Nepal, Bhutan, China (Tibet), and Pakistan."
  },
  {
    topic: "Hot Air Balloons",
    statements: [
      { text: "The first passengers in a hot air balloon were a sheep, a duck, and a rooster in 1783.", real: true },
      { text: "The Montgolfier brothers launched the first manned hot air balloon flight in Paris in 1783.", real: true },
      { text: "Hot air balloons fly by using jet engines like commercial airplanes.", real: false }
    ],
    explanation: "Hot air balloons fly because heated air is less dense than cool air, creating buoyancy. They use gas burners to heat the air, not jet engines."
  },
  {
    topic: "Coral Snake",
    statements: [
      { text: "Coral snakes have the second most potent venom of any snake after the black mamba.", real: true },
      { text: "The rhyme 'Red touches yellow, kill a fellow' helps distinguish coral snakes from harmless mimics in North America.", real: true },
      { text: "Coral snakes are the largest snakes in the world, growing over 30 feet long.", real: false }
    ],
    explanation: "Coral snakes are small, typically 2-4 feet long. The largest snakes (anacondas and reticulated pythons) can exceed 20 feet."
  },
  {
    topic: "Emojis",
    statements: [
      { text: "The first emoji set was created in Japan in 1999 by Shigetaka Kurita for a mobile carrier.", real: true },
      { text: "The 'Face with Tears of Joy' emoji was Oxford Dictionary's 2015 Word of the Year.", real: true },
      { text: "Emojis were invented by the ancient Greeks and carved into marble tablets.", real: false }
    ],
    explanation: "Emojis are a modern digital invention from late 1990s Japan. While ancient civilizations used pictographs, these were not emojis."
  },
  {
    topic: "Maple Trees",
    statements: [
      { text: "Canada has the maple leaf on its flag because the sugar maple is a national symbol.", real: true },
      { text: "Only sugar maples and a few related species produce sap suitable for making maple syrup.", real: true },
      { text: "Maple trees are found only in tropical rainforests near the equator.", real: false }
    ],
    explanation: "Maple trees are temperate species found primarily in North America, Europe, and Asia. They require cold winters and are not tropical trees."
  },
  {
    topic: "DNA Fingerprinting",
    statements: [
      { text: "DNA fingerprinting was invented by Sir Alec Jeffreys in 1984 at the University of Leicester.", real: true },
      { text: "The first criminal case solved using DNA evidence was the Colin Pitchfork murder case in 1987.", real: true },
      { text: "DNA fingerprinting requires a minimum of 10 gallons of blood to work.", real: false }
    ],
    explanation: "DNA fingerprinting can work with extremely tiny samples — a single hair, a skin cell, or a trace amount of saliva can provide enough DNA."
  },
  {
    topic: "Tectonic: Mid-Ocean Ridges",
    statements: [
      { text: "The Mid-Atlantic Ridge is the longest mountain range on Earth, stretching over 10,000 miles.", real: true },
      { text: "New ocean floor is constantly being created at mid-ocean ridges as tectonic plates pull apart.", real: true },
      { text: "Mid-ocean ridges are above sea level and can be walked across like regular mountains.", real: false }
    ],
    explanation: "Mid-ocean ridges are mostly deep underwater, typically 1.5-3 miles below the surface. Iceland is one of the rare places where a mid-ocean ridge rises above sea level."
  },
  {
    topic: "Honey",
    statements: [
      { text: "Bees must visit about 2 million flowers to produce one pound of honey.", real: true },
      { text: "Honey has natural antibacterial properties and has been used to treat wounds for thousands of years.", real: true },
      { text: "Honey is produced by cows, similar to how they produce milk.", real: false }
    ],
    explanation: "Honey is produced exclusively by honeybees. Bees collect flower nectar and transform it into honey through enzymatic activity and evaporation in their hives."
  },
  {
    topic: "Tequila",
    statements: [
      { text: "True tequila can only be produced in certain regions of Mexico, primarily Jalisco.", real: true },
      { text: "Tequila is made from the blue agave plant, which takes 8-12 years to mature.", real: true },
      { text: "Tequila is made from fermented rice, similar to sake.", real: false }
    ],
    explanation: "Tequila is made from the cooked and fermented juice of the blue agave plant, not rice. Sake is the rice-based beverage."
  },
  {
    topic: "Hummingbirds",
    statements: [
      { text: "Hummingbirds can fly backwards and are the only birds that can sustain hovering in still air.", real: true },
      { text: "A hummingbird's heart beats up to 1,260 times per minute.", real: true },
      { text: "Hummingbirds are the largest birds in the world, larger than ostriches.", real: false }
    ],
    explanation: "Hummingbirds are among the smallest birds. The bee hummingbird is the smallest bird in the world at about 2 inches long."
  },
  {
    topic: "Papyrus",
    statements: [
      { text: "Papyrus, the ancient writing material, comes from a plant that grows along the Nile River.", real: true },
      { text: "The word 'paper' is derived from 'papyrus' even though they are made differently.", real: true },
      { text: "Papyrus scrolls were made from melted iron poured into thin sheets.", real: false }
    ],
    explanation: "Papyrus was made by layering thin strips of the papyrus plant's pith, pressing them together, and drying them. No metal was involved."
  },
  {
    topic: "Groundhog Day",
    statements: [
      { text: "Groundhog Day originated from a German tradition involving a hedgehog or badger.", real: true },
      { text: "Punxsutawney Phil's weather predictions are accurate only about 39% of the time.", real: true },
      { text: "Groundhogs can accurately predict the weather with 100% scientific reliability.", real: false }
    ],
    explanation: "Groundhog predictions are not scientifically reliable. Studies show Phil's accuracy is less than 40%, worse than random chance for a binary prediction."
  },
  {
    topic: "Oxygen",
    statements: [
      { text: "About 50-80% of Earth's oxygen is produced by phytoplankton in the oceans, not just trees.", real: true },
      { text: "Oxygen was independently discovered by Carl Wilhelm Scheele and Joseph Priestley in the 1770s.", real: true },
      { text: "Earth has always had the same level of oxygen in its atmosphere throughout its history.", real: false }
    ],
    explanation: "Earth's atmosphere originally had virtually no free oxygen. The Great Oxidation Event about 2.4 billion years ago dramatically changed this when cyanobacteria began producing oxygen."
  },
  {
    topic: "Ferris Wheel",
    statements: [
      { text: "The first Ferris wheel was built for the 1893 Chicago World's Fair to rival the Eiffel Tower.", real: true },
      { text: "George Washington Gale Ferris Jr. designed the original Ferris wheel, which stood 264 feet tall.", real: true },
      { text: "Ferris wheels are powered by trained horses running inside the structure.", real: false }
    ],
    explanation: "Ferris wheels are powered by electric motors (or steam engines in the original). No animals are involved in their operation."
  },
  {
    topic: "Mummies",
    statements: [
      { text: "Natural mummies have been found on every continent except Antarctica.", real: true },
      { text: "In the 19th century, ground-up Egyptian mummies were used as paint pigment called 'Mummy Brown.'", real: true },
      { text: "Mummification is a process that takes only 30 seconds.", real: false }
    ],
    explanation: "Egyptian mummification was an elaborate 70-day process involving organ removal, drying with natron salt, wrapping in linen, and various ritual treatments."
  },
  {
    topic: "Fibonacci: Golden Ratio",
    statements: [
      { text: "The golden ratio (approximately 1.618) appears in the proportions of the Parthenon and many Renaissance paintings.", real: true },
      { text: "Sunflower seed spirals follow Fibonacci numbers, with typically 34 and 55 spirals going in opposite directions.", real: true },
      { text: "The golden ratio was discovered by a computer algorithm in 2020.", real: false }
    ],
    explanation: "The golden ratio has been known since ancient times. The ancient Greeks studied it extensively, and Euclid described it around 300 BC."
  },
  {
    topic: "Bamboo Pandas",
    statements: [
      { text: "Giant pandas spend 10-16 hours a day eating bamboo to get enough calories.", real: true },
      { text: "Despite being classified as carnivores, 99% of the giant panda's diet is bamboo.", real: true },
      { text: "Giant pandas are found wild in South America and Africa.", real: false }
    ],
    explanation: "Giant pandas are found in the wild only in central China, in the mountain forests of Sichuan, Shaanxi, and Gansu provinces."
  },
  {
    topic: "Obsidian",
    statements: [
      { text: "Obsidian blades can be sharper than modern surgical steel, with edges just a few nanometers wide.", real: true },
      { text: "Obsidian is formed when lava cools so rapidly that crystals don't have time to grow.", real: true },
      { text: "Obsidian is a type of metal alloy created in modern factories.", real: false }
    ],
    explanation: "Obsidian is a naturally occurring volcanic glass. It has been used by humans for millions of years, long before any factories existed."
  },
  {
    topic: "Motion Pictures",
    statements: [
      { text: "The Lumière brothers held the first public film screening in Paris on December 28, 1895.", real: true },
      { text: "The first feature film with synchronized dialogue was 'The Jazz Singer' in 1927.", real: true },
      { text: "Movies have always been in color with surround sound since the first film was made.", real: false }
    ],
    explanation: "Early films were black and white and silent. Color film wasn't commercially viable until the 1930s, and surround sound came even later."
  },
  {
    topic: "Penicillin",
    statements: [
      { text: "Penicillin was discovered accidentally when Alexander Fleming found mold killing bacteria in his lab.", real: true },
      { text: "During WWII, penicillin was so scarce that it was recovered from patients' urine to be reused.", real: true },
      { text: "Penicillin is made from grinding up rocks found on the Moon.", real: false }
    ],
    explanation: "Penicillin is produced by the Penicillium mold fungus, which grows naturally on Earth. It has nothing to do with the Moon or rocks."
  },
  {
    topic: "Otters",
    statements: [
      { text: "Sea otters hold hands while sleeping to keep from drifting apart.", real: true },
      { text: "Sea otters use rocks as tools to crack open shellfish while floating on their backs.", real: true },
      { text: "Otters are a species of fish that can breathe underwater using gills.", real: false }
    ],
    explanation: "Otters are mammals that breathe air with lungs. They must surface regularly to breathe and are excellent swimmers but are not fish."
  },
  {
    topic: "Bamboo Architecture",
    statements: [
      { text: "In some parts of Asia, entire buildings and bridges are constructed from bamboo.", real: true },
      { text: "Bamboo can withstand stronger earthquake forces than many conventional building materials.", real: true },
      { text: "Bamboo dissolves in water within minutes, making it useless for construction.", real: false }
    ],
    explanation: "Bamboo is water-resistant and very durable. Properly treated bamboo structures can last for decades, even in wet tropical climates."
  },
  {
    topic: "Volcanoes: Supervolcanoes",
    statements: [
      { text: "Yellowstone sits on top of a supervolcano that last erupted about 640,000 years ago.", real: true },
      { text: "A supervolcano eruption could lower global temperatures for years, causing a 'volcanic winter.'", real: true },
      { text: "Supervolcanoes are completely extinct and will never erupt again.", real: false }
    ],
    explanation: "Supervolcanoes are not extinct. Yellowstone and others remain active volcanic systems, though the probability of eruption in any given year is extremely low."
  },
  {
    topic: "Maple Leaves",
    statements: [
      { text: "Leaves change color in autumn because chlorophyll breaks down, revealing hidden yellow and orange pigments.", real: true },
      { text: "Red and purple autumn colors come from anthocyanins produced by the leaf as chlorophyll breaks down.", real: true },
      { text: "Leaves change color because trees paint them with colored sap each autumn.", real: false }
    ],
    explanation: "Leaf color change is a chemical process, not painting. Yellow and orange pigments were always present but masked by green chlorophyll."
  },
  {
    topic: "Coffee: Kopi Luwak",
    statements: [
      { text: "Kopi luwak, the world's most expensive coffee, is made from beans eaten and excreted by civets.", real: true },
      { text: "The civet's digestive enzymes ferment the coffee beans, changing their chemical composition.", real: true },
      { text: "Kopi luwak coffee is harvested from undersea volcanic vents.", real: false }
    ],
    explanation: "Kopi luwak is made from coffee cherries eaten by Asian palm civets — small mammals. The beans are collected from their droppings."
  },
  {
    topic: "Astronomy: Dark Matter",
    statements: [
      { text: "Dark matter makes up about 27% of the universe but has never been directly observed.", real: true },
      { text: "We know dark matter exists because of its gravitational effects on visible matter and galaxies.", real: true },
      { text: "Dark matter is just regular matter that has been painted black.", real: false }
    ],
    explanation: "Dark matter is a hypothetical form of matter that doesn't interact with light. It's not regular matter — it's something fundamentally different that we haven't yet identified."
  },
  {
    topic: "Bermuda Triangle: Science",
    statements: [
      { text: "Methane gas eruptions from the ocean floor could potentially sink ships in the Bermuda Triangle area.", real: true },
      { text: "The Bermuda Triangle spans roughly 500,000 square miles between Miami, Bermuda, and Puerto Rico.", real: true },
      { text: "The Bermuda Triangle is an official geographic designation recognized by all world governments.", real: false }
    ],
    explanation: "The Bermuda Triangle is not an officially recognized geographic area. No government or international body considers it a special zone."
  },
  {
    topic: "Ice Cream",
    statements: [
      { text: "Ice cream headaches (brain freeze) occur when cold food touches the palate and constricts blood vessels.", real: true },
      { text: "New Zealand consumes more ice cream per capita than nearly any other country.", real: true },
      { text: "Ice cream was invented in 2019 as a modern dessert.", real: false }
    ],
    explanation: "Frozen desserts have existed for thousands of years. Ancient Chinese, Persian, and Roman civilizations had iced treats. Modern ice cream developed around the 16th-17th century."
  },
  {
    topic: "Lava",
    statements: [
      { text: "Lava temperature ranges from about 1,300°F to 2,200°F depending on composition.", real: true },
      { text: "Pahoehoe lava is smooth and ropy, while aa lava is rough and jagged — both are Hawaiian terms.", real: true },
      { text: "Lava is cold to the touch and safe to walk on.", real: false }
    ],
    explanation: "Lava is extremely hot — hot enough to melt most metals and instantly cause severe burns. It is absolutely not safe to touch or walk on."
  },
  {
    topic: "Siberia",
    statements: [
      { text: "Siberia contains Lake Baikal, which holds about 20% of the world's unfrozen surface fresh water.", real: true },
      { text: "Temperatures in Siberia can drop below -90°F, making it one of the coldest inhabited places on Earth.", real: true },
      { text: "Siberia is a tropical paradise with palm trees and warm beaches.", real: false }
    ],
    explanation: "Siberia is one of the coldest regions on Earth, known for its extreme winters. The town of Oymyakon has recorded temperatures below -90°F."
  },
  {
    topic: "Pirate Ships",
    statements: [
      { text: "Real pirates rarely forced captives to 'walk the plank' — this was largely a literary invention.", real: true },
      { text: "Many pirate ships were democracies where crews voted on decisions and elected their captain.", real: true },
      { text: "All pirates wore eye patches because they had all lost one eye in sword fights.", real: false }
    ],
    explanation: "Eye patches may have been used to keep one eye adapted to darkness for going below deck. Most pirates had both eyes, and the eye patch myth is exaggerated."
  },
  {
    topic: "Sardines",
    statements: [
      { text: "Sardines are not a single species — the term refers to several types of small oily fish.", real: true },
      { text: "The term 'packed like sardines' comes from the way sardines are tightly packed in cans.", real: true },
      { text: "Sardines are freshwater fish found only in mountain lakes.", real: false }
    ],
    explanation: "Sardines are saltwater fish found in oceans worldwide. They swim in large schools in coastal waters of the Atlantic, Pacific, and Mediterranean."
  },
  {
    topic: "Microbiome",
    statements: [
      { text: "The human gut microbiome contains about 1,000 different species of bacteria.", real: true },
      { text: "Gut bacteria produce neurotransmitters like serotonin, potentially affecting mood and mental health.", real: true },
      { text: "Humans are born with a fully developed microbiome that never changes.", real: false }
    ],
    explanation: "The microbiome develops after birth and changes throughout life based on diet, environment, medications, and other factors."
  },
  {
    topic: "Waterfalls: Angel Falls",
    statements: [
      { text: "Angel Falls in Venezuela is the world's tallest waterfall at 3,212 feet.", real: true },
      { text: "Angel Falls is so tall that water often evaporates or turns to mist before reaching the bottom.", real: true },
      { text: "Angel Falls was named because angels were seen there by the first explorers.", real: false }
    ],
    explanation: "Angel Falls is named after Jimmie Angel, an American aviator who was the first to fly over the falls in 1933."
  },
  {
    topic: "Archaeology: Terracotta Army",
    statements: [
      { text: "The Terracotta Army consists of over 8,000 life-sized soldiers, each with unique facial features.", real: true },
      { text: "The Terracotta Army was accidentally discovered by farmers digging a well in 1974.", real: true },
      { text: "The Terracotta Army was built by the British Empire in the 19th century.", real: false }
    ],
    explanation: "The Terracotta Army was built around 210 BC for China's first emperor, Qin Shi Huang. It is over 2,200 years old."
  },
  {
    topic: "Color Theory",
    statements: [
      { text: "The primary colors of light (RGB: red, green, blue) are different from paint primaries (RYB: red, yellow, blue).", real: true },
      { text: "Black is the absence of all visible light, while white is all colors of light combined.", real: true },
      { text: "There are only three colors in the entire visible spectrum.", real: false }
    ],
    explanation: "The visible spectrum contains a continuous range of millions of distinguishable colors, from violet to red, including all wavelengths in between."
  },
  {
    topic: "Fermentation: Kimchi",
    statements: [
      { text: "Traditional Korean households have special refrigerators designed specifically for fermenting and storing kimchi.", real: true },
      { text: "Kimchi fermentation produces beneficial probiotics similar to those in yogurt.", real: true },
      { text: "Kimchi is a type of candy made from sugar and chocolate.", real: false }
    ],
    explanation: "Kimchi is a traditional Korean side dish of fermented vegetables, typically napa cabbage and Korean radish with chili pepper, garlic, and other seasonings."
  },
  {
    topic: "Eucalyptus",
    statements: [
      { text: "Koalas eat almost exclusively eucalyptus leaves, which are toxic to most other animals.", real: true },
      { text: "Eucalyptus oil is flammable, and eucalyptus forests can explode during wildfires.", real: true },
      { text: "Eucalyptus trees are native to the Arctic and grow best in snow.", real: false }
    ],
    explanation: "Eucalyptus trees are native to Australia and thrive in warm, temperate climates. They cannot survive in Arctic conditions."
  },
  {
    topic: "Velcro",
    statements: [
      { text: "Velcro was invented after Swiss engineer George de Mestral noticed burrs sticking to his dog's fur.", real: true },
      { text: "NASA popularized Velcro by using it extensively in space missions to secure objects in zero gravity.", real: true },
      { text: "Velcro is a naturally occurring mineral found in caves.", real: false }
    ],
    explanation: "Velcro is a synthetic fastener made from nylon. It was invented in 1941 and has no connection to minerals or caves."
  },
  {
    topic: "Clouds",
    statements: [
      { text: "An average cumulus cloud weighs about 1.1 million pounds.", real: true },
      { text: "Noctilucent clouds are the highest clouds on Earth, forming at about 50 miles altitude.", real: true },
      { text: "Clouds are made of cotton that floats up from cotton fields.", real: false }
    ],
    explanation: "Clouds are made of tiny water droplets or ice crystals suspended in the atmosphere. They form when water vapor condenses around particles in the air."
  },
  {
    topic: "Roman Roads",
    statements: [
      { text: "The Roman road network spanned over 250,000 miles at the empire's peak.", real: true },
      { text: "Many modern European roads and highways still follow the routes of ancient Roman roads.", real: true },
      { text: "Roman roads were made of rubber and asphalt, identical to modern highways.", real: false }
    ],
    explanation: "Roman roads were made of layers of sand, gravel, and large stone slabs. Rubber and asphalt roads are modern inventions from the 19th-20th centuries."
  },
  {
    topic: "Fireflies",
    statements: [
      { text: "Firefly light is the most efficient light source known — nearly 100% of energy is emitted as light, not heat.", real: true },
      { text: "Some firefly species synchronize their flashing, with thousands blinking in perfect unison.", real: true },
      { text: "Fireflies produce light by burning tiny candles inside their bodies.", real: false }
    ],
    explanation: "Fireflies produce light through bioluminescence — a chemical reaction between luciferin, oxygen, and the enzyme luciferase. No combustion is involved."
  },
  {
    topic: "Mythology: Japanese",
    statements: [
      { text: "In Japanese mythology, Amaterasu is the sun goddess and the ancestor of the imperial family.", real: true },
      { text: "Yokai are supernatural creatures in Japanese folklore, ranging from mischievous to malevolent.", real: true },
      { text: "Japanese mythology was entirely borrowed from Roman mythology with no original elements.", real: false }
    ],
    explanation: "Japanese mythology (Shinto) developed independently and is entirely distinct from Roman mythology. It has unique gods, spirits, and creation stories."
  },
  {
    topic: "Bananas",
    statements: [
      { text: "Bananas are slightly radioactive because they contain potassium-40.", real: true },
      { text: "The banana variety Gros Michel, once the world standard, was nearly wiped out by disease in the 1950s.", real: true },
      { text: "Bananas grow on tall banana trees with deep root systems.", real: false }
    ],
    explanation: "Banana plants are not trees — they are the world's largest herbaceous plants. What looks like a trunk is actually tightly packed leaf bases."
  },
  {
    topic: "Submarines: Deep Sea",
    statements: [
      { text: "The deepest point in the ocean, the Mariana Trench, is about 36,000 feet deep.", real: true },
      { text: "James Cameron became the third person to reach the bottom of the Mariana Trench in 2012.", real: true },
      { text: "Commercial submarines regularly take tourists to the bottom of the Mariana Trench.", real: false }
    ],
    explanation: "Only a handful of manned dives have reached the bottom of the Mariana Trench. The extreme pressure (over 15,000 psi) makes it incredibly dangerous and expensive."
  },
  {
    topic: "Pineapples",
    statements: [
      { text: "Pineapples take about 2-3 years to grow from planting to harvest.", real: true },
      { text: "Pineapples contain bromelain, an enzyme that breaks down protein and can make your mouth tingle.", real: true },
      { text: "Pineapples grow on tall pine trees in cold northern forests.", real: false }
    ],
    explanation: "Pineapples are tropical plants that grow close to the ground on short, bushy plants. They are not related to pine trees."
  },
  {
    topic: "Anthropology: Tools",
    statements: [
      { text: "The oldest known stone tools are about 3.3 million years old, found in Kenya.", real: true },
      { text: "Control of fire by early humans dates back at least 1 million years.", real: true },
      { text: "Humans invented tools only 100 years ago during the Industrial Revolution.", real: false }
    ],
    explanation: "Tool use by human ancestors dates back millions of years. Stone tools predate our own species, Homo sapiens, by over 3 million years."
  },
  {
    topic: "Superfoods: Quinoa",
    statements: [
      { text: "Quinoa is technically a seed, not a grain, and is related to spinach and beets.", real: true },
      { text: "Quinoa was a sacred crop to the Incas, who called it the 'mother of all grains.'", real: true },
      { text: "Quinoa is a type of processed white sugar.", real: false }
    ],
    explanation: "Quinoa is a nutrient-rich pseudocereal seed from the Andes mountains. It has been cultivated for about 5,000 years and is not a sugar product."
  },
  {
    topic: "Bermuda: Shipwrecks",
    statements: [
      { text: "Bermuda has more than 300 shipwrecks in its surrounding waters.", real: true },
      { text: "The Sea Venture shipwreck near Bermuda in 1609 inspired Shakespeare's play 'The Tempest.'", real: true },
      { text: "Bermuda has never had a single shipwreck in its entire history.", real: false }
    ],
    explanation: "Bermuda's shallow reefs have caused hundreds of shipwrecks over the centuries, making it one of the world's top shipwreck diving destinations."
  },
  {
    topic: "Thermometers",
    statements: [
      { text: "Galileo invented one of the earliest thermometers (thermoscope) around 1593.", real: true },
      { text: "Daniel Fahrenheit invented the mercury thermometer and the Fahrenheit temperature scale in 1714.", real: true },
      { text: "Thermometers measure weight, not temperature.", real: false }
    ],
    explanation: "Thermometers measure temperature. Instruments that measure weight are called scales or balances."
  },
  {
    topic: "Kombucha",
    statements: [
      { text: "Kombucha is a fermented tea drink that has been consumed for over 2,000 years, originating in China.", real: true },
      { text: "Kombucha is fermented using a SCOBY — a symbiotic culture of bacteria and yeast.", real: true },
      { text: "Kombucha is a type of motor oil used in vehicles.", real: false }
    ],
    explanation: "Kombucha is a fermented beverage made from sweetened tea. It is a drink, not an industrial product."
  },
  {
    topic: "Sloths: Ecology",
    statements: [
      { text: "Sloths descend from trees only once a week to defecate, risking predation each time.", real: true },
      { text: "Three-toed sloths can rotate their heads nearly 270 degrees, like owls.", real: true },
      { text: "Sloths are aggressive predators that actively hunt jaguars.", real: false }
    ],
    explanation: "Sloths are gentle herbivores and folivores (leaf-eaters). Jaguars are actually predators of sloths, not the other way around."
  },
  {
    topic: "Pompeii: Daily Life",
    statements: [
      { text: "Pompeii had an advanced water system with lead pipes, fountains, and public baths.", real: true },
      { text: "Graffiti found in Pompeii includes love declarations, political slogans, and crude jokes.", real: true },
      { text: "Pompeii had no buildings or structures — it was just an open field.", real: false }
    ],
    explanation: "Pompeii was a thriving Roman city with temples, theaters, an amphitheater, shops, homes, and sophisticated urban infrastructure."
  },
  {
    topic: "Astronomy: Pulsars",
    statements: [
      { text: "When pulsars were first detected in 1967, astronomers briefly considered they might be alien signals.", real: true },
      { text: "Pulsars are rapidly rotating neutron stars that emit beams of radiation like cosmic lighthouses.", real: true },
      { text: "Pulsars are a type of flower found in tropical gardens.", real: false }
    ],
    explanation: "Pulsars are astronomical objects — rapidly spinning neutron stars left behind after massive stars explode as supernovae."
  },
  {
    topic: "Bermuda Wildlife",
    statements: [
      { text: "The Bermuda petrel (cahow) was thought extinct for 330 years before being rediscovered in 1951.", real: true },
      { text: "Bermuda has no native land mammals — only bats and introduced species.", real: true },
      { text: "Bermuda is home to wild polar bears and penguins.", real: false }
    ],
    explanation: "Bermuda is a subtropical archipelago. Polar bears live in the Arctic and penguins in the Southern Hemisphere — neither lives in Bermuda."
  },
  {
    topic: "Sewage Systems",
    statements: [
      { text: "Ancient Rome had an elaborate sewer system, the Cloaca Maxima, built around 600 BC.", real: true },
      { text: "London's modern sewer system was built after the 'Great Stink' of 1858 made the Thames unbearable.", real: true },
      { text: "All cities have always had modern sewer systems since the beginning of human civilization.", real: false }
    ],
    explanation: "Many cities lacked proper sewage systems well into the 19th century. Open sewers and cesspits were common, causing frequent disease outbreaks."
  },
  {
    topic: "Truffles",
    statements: [
      { text: "White truffles from Italy can sell for over $3,000 per pound.", real: true },
      { text: "Pigs and trained dogs are used to find truffles because humans cannot detect them underground.", real: true },
      { text: "Truffles are a type of fish found in deep ocean waters.", real: false }
    ],
    explanation: "Truffles are fungi that grow underground near the roots of certain trees. They are among the most prized culinary ingredients in the world."
  },
  {
    topic: "Northern Ireland",
    statements: [
      { text: "The Giant's Causeway in Northern Ireland consists of about 40,000 interlocking basalt columns.", real: true },
      { text: "Northern Ireland is part of the United Kingdom, while the Republic of Ireland is an independent country.", real: true },
      { text: "Northern Ireland is located in South America.", real: false }
    ],
    explanation: "Northern Ireland is on the island of Ireland in northwestern Europe. It shares a land border with the Republic of Ireland."
  },
  {
    topic: "Elephants: Communication",
    statements: [
      { text: "Elephants communicate using infrasound — frequencies too low for humans to hear — that can travel miles.", real: true },
      { text: "Elephants can detect seismic vibrations through their feet, essentially 'hearing' through the ground.", real: true },
      { text: "Elephants communicate only through visual signals and cannot make any sounds.", real: false }
    ],
    explanation: "Elephants are highly vocal animals that produce a wide range of sounds including trumpets, rumbles, roars, and infrasonic calls."
  },
  {
    topic: "Antibiotics: Resistance",
    statements: [
      { text: "Antibiotic-resistant bacteria cause over 1.2 million deaths worldwide each year.", real: true },
      { text: "MRSA (methicillin-resistant Staphylococcus aureus) is a well-known antibiotic-resistant superbug.", real: true },
      { text: "Antibiotic resistance is impossible — bacteria can never evolve to resist medication.", real: false }
    ],
    explanation: "Antibiotic resistance is a major global health threat. Bacteria evolve rapidly and can develop resistance to antibiotics through mutation and gene transfer."
  },
  {
    topic: "Coral: Colors",
    statements: [
      { text: "Coral gets its vibrant colors from symbiotic algae (zooxanthellae) living within its tissues.", real: true },
      { text: "Fluorescent proteins in some corals glow under UV light and are used in medical research.", real: true },
      { text: "All coral is naturally transparent and colorless.", real: false }
    ],
    explanation: "Coral comes in a stunning array of colors including red, orange, yellow, green, blue, and purple, thanks to symbiotic algae and fluorescent proteins."
  },
  {
    topic: "Olympic Games: Ancient",
    statements: [
      { text: "The ancient Olympics were held every four years at Olympia, Greece for nearly 1,200 years.", real: true },
      { text: "Ancient Greek athletes competed completely nude, and the word 'gymnasium' comes from the Greek word for naked.", real: true },
      { text: "The ancient Olympics included modern events like ice hockey and snowboarding.", real: false }
    ],
    explanation: "The ancient Olympics featured events like running, wrestling, boxing, chariot racing, and the pentathlon. Winter sports were not included."
  },
  {
    topic: "Satellites",
    statements: [
      { text: "Sputnik, launched by the Soviet Union in 1957, was the first artificial satellite to orbit Earth.", real: true },
      { text: "There are currently over 7,000 active satellites orbiting Earth.", real: true },
      { text: "Satellites are held up in orbit by long cables attached to the ground.", real: false }
    ],
    explanation: "Satellites remain in orbit through a balance between their forward velocity and Earth's gravity. No physical attachment to the ground is involved."
  },
  {
    topic: "Fjords",
    statements: [
      { text: "Fjords are deep valleys carved by glaciers that have since been flooded by seawater.", real: true },
      { text: "Norway has over 1,000 fjords, more than any other country.", real: true },
      { text: "Fjords are man-made canals dug in the 20th century.", real: false }
    ],
    explanation: "Fjords are natural geological formations created by glacial erosion over millions of years. They are not man-made."
  },
  {
    topic: "Falcons",
    statements: [
      { text: "The peregrine falcon is the fastest animal on Earth, diving at speeds over 240 mph.", real: true },
      { text: "Falconry — using trained falcons for hunting — has been practiced for over 4,000 years.", real: true },
      { text: "Falcons are herbivores that eat only grass and berries.", real: false }
    ],
    explanation: "Falcons are carnivorous raptors that hunt other birds, small mammals, and insects. They are skilled predators, not herbivores."
  },
  {
    topic: "Granite",
    statements: [
      { text: "Mount Rushmore was carved into granite, chosen because granite erodes only 1 inch every 10,000 years.", real: true },
      { text: "Granite is an igneous rock formed from slowly cooling magma deep underground.", real: true },
      { text: "Granite is a soft material that dissolves in water like sugar.", real: false }
    ],
    explanation: "Granite is one of the hardest common rocks. It is extremely durable and resistant to weathering, which is why it's used for monuments and countertops."
  },
  {
    topic: "Soap Bubbles",
    statements: [
      { text: "Soap bubbles are always spherical because a sphere minimizes surface area for a given volume.", real: true },
      { text: "The colors in soap bubbles come from light interference in the thin soap film, not from dye.", real: true },
      { text: "Soap bubbles are made of solid glass and never pop.", real: false }
    ],
    explanation: "Soap bubbles are thin films of soapy water filled with air. They are fragile and pop easily when the water film evaporates or is punctured."
  },
  {
    topic: "Bats",
    statements: [
      { text: "Bats are the only mammals capable of true sustained flight.", real: true },
      { text: "A single bat can eat over 1,000 mosquitoes in one hour.", real: true },
      { text: "All bats are blind and cannot see anything.", real: false }
    ],
    explanation: "Bats are not blind. Most bat species have functional eyes, and some fruit bats have excellent vision. The phrase 'blind as a bat' is a myth."
  },
  {
    topic: "Sunflowers",
    statements: [
      { text: "Young sunflowers exhibit heliotropism — they follow the Sun across the sky during the day.", real: true },
      { text: "A single sunflower head can contain up to 2,000 seeds.", real: true },
      { text: "Sunflowers bloom only at midnight and close during daylight hours.", real: false }
    ],
    explanation: "Sunflowers bloom during the day and face the Sun. Young sunflowers track the Sun from east to west. Mature sunflowers generally face east."
  },
  {
    topic: "Bermuda: Culture",
    statements: [
      { text: "Bermuda shorts are named after the island and are considered acceptable business attire there.", real: true },
      { text: "Bermuda has the highest density of golf courses per square mile of any country.", real: true },
      { text: "Bermuda has a population of over 100 million people.", real: false }
    ],
    explanation: "Bermuda has a population of only about 64,000 people on just 21 square miles of land. It is one of the most densely populated territories but has a small total population."
  },
  {
    topic: "Bonsai",
    statements: [
      { text: "Bonsai originated in China (called penjing) before being refined and popularized by Japan.", real: true },
      { text: "Some bonsai trees are over 800 years old and are considered national treasures.", real: true },
      { text: "Bonsai trees are a genetically engineered dwarf species that cannot grow to full size.", real: false }
    ],
    explanation: "Bonsai are regular trees kept small through pruning, wiring, and container restriction. If planted in the ground, they would grow to full size."
  },
  {
    topic: "Magnetism",
    statements: [
      { text: "Earth's magnetic north pole is constantly moving and has shifted hundreds of miles in the last century.", real: true },
      { text: "Earth's magnetic field has completely reversed hundreds of times throughout geological history.", real: true },
      { text: "Magnets work by using invisible pixie dust stored inside the metal.", real: false }
    ],
    explanation: "Magnetism is caused by the motion of electrons within atoms. Ferromagnetic materials like iron have domains where electron spins align, creating magnetic fields."
  },
  {
    topic: "Bermuda: Geography",
    statements: [
      { text: "Bermuda is actually an atoll — the tip of a long-extinct underwater volcano.", real: true },
      { text: "Bermuda is the northernmost point in the world where coral reefs grow naturally.", real: true },
      { text: "Bermuda is the largest country in the Western Hemisphere.", real: false }
    ],
    explanation: "Bermuda is tiny — just 21 square miles. Canada and the United States are among the largest countries in the Western Hemisphere."
  },
  {
    topic: "Strawberries",
    statements: [
      { text: "Strawberries are not actually berries — they are 'accessory fruits' because the seeds are on the outside.", real: true },
      { text: "The average strawberry has about 200 seeds on its surface.", real: true },
      { text: "Strawberries are a type of root vegetable that grows deep underground.", real: false }
    ],
    explanation: "Strawberries grow above ground on low plants. The red fruit develops from the flower and sits on top of the plant, not underground."
  },
  {
    topic: "Mayans: Astronomy",
    statements: [
      { text: "The Maya accurately predicted solar eclipses using mathematical calculations.", real: true },
      { text: "The Maya tracked the orbit of Venus with an accuracy of just 2 hours over a 584-day cycle.", real: true },
      { text: "The Maya had no knowledge of astronomy and never looked at the sky.", real: false }
    ],
    explanation: "The Maya were extraordinary astronomers. They built observatories, tracked celestial cycles, and incorporated astronomical knowledge into their calendar systems."
  },
  {
    topic: "Deep Sea",
    statements: [
      { text: "More than 80% of the ocean remains unmapped, unobserved, and unexplored.", real: true },
      { text: "Giant squid can grow up to 43 feet long and were only photographed alive in 2004.", real: true },
      { text: "The deep sea is shallow — no deeper than a swimming pool.", real: false }
    ],
    explanation: "The ocean's average depth is about 12,100 feet, and the deepest point (Mariana Trench) is about 36,000 feet — far deeper than any swimming pool."
  },
  {
    topic: "Reggae Music",
    statements: [
      { text: "Reggae music originated in Jamaica in the late 1960s, evolving from ska and rocksteady.", real: true },
      { text: "Reggae was added to UNESCO's list of Intangible Cultural Heritage in 2018.", real: true },
      { text: "Reggae music was invented in Iceland as a response to the cold weather.", real: false }
    ],
    explanation: "Reggae originated in Jamaica, a tropical Caribbean island. It developed from Jamaican musical traditions and is closely associated with Rastafari culture."
  },
  {
    topic: "Electric Cars",
    statements: [
      { text: "Electric cars were actually more popular than gasoline cars in the early 1900s.", real: true },
      { text: "Electric motors are far more energy-efficient than internal combustion engines — about 85-90% vs 20-35%.", real: true },
      { text: "Electric cars were invented in 2020 and have no prior history.", real: false }
    ],
    explanation: "Electric vehicles date back to the 1830s. They were popular in the early 1900s before gasoline cars became dominant due to cheap oil."
  },
  {
    topic: "Fossils",
    statements: [
      { text: "Mary Anning, a self-taught paleontologist, discovered the first correctly identified ichthyosaur fossil at age 12.", real: true },
      { text: "Amber can preserve insects and other organisms for tens of millions of years in near-perfect condition.", real: true },
      { text: "Fossils form overnight from animals that fall asleep on rocks.", real: false }
    ],
    explanation: "Fossilization is an extremely slow process that typically takes tens of thousands to millions of years, requiring specific conditions of burial and mineralization."
  },
  {
    topic: "Volcanoes: Pompeii",
    statements: [
      { text: "Mount Vesuvius is the only active volcano on mainland Europe.", real: true },
      { text: "About 3 million people currently live within the danger zone of Mount Vesuvius.", real: true },
      { text: "Mount Vesuvius is completely extinct and will never erupt again.", real: false }
    ],
    explanation: "Mount Vesuvius is very much an active volcano. It last erupted in 1944 and is considered one of the most dangerous volcanoes in the world."
  },
  {
    topic: "X-Rays",
    statements: [
      { text: "X-rays were discovered accidentally by Wilhelm Röntgen in 1895 while experimenting with cathode rays.", real: true },
      { text: "Röntgen took the first medical X-ray of his wife's hand, showing her bones and wedding ring.", real: true },
      { text: "X-rays are a type of sound wave that can be heard by dogs.", real: false }
    ],
    explanation: "X-rays are a form of electromagnetic radiation, not sound waves. They are invisible and inaudible, with frequencies far higher than visible light."
  },
  {
    topic: "Pecans",
    statements: [
      { text: "Pecans are the only tree nut native to North America.", real: true },
      { text: "The United States produces about 80% of the world's pecans.", real: true },
      { text: "Pecans grow underwater in lakes and rivers.", real: false }
    ],
    explanation: "Pecan trees grow on land. They are large deciduous trees native to the southern United States and Mexico, preferring deep, well-drained soil."
  },
  {
    topic: "Blood Donation",
    statements: [
      { text: "A single blood donation can save up to three lives.", real: true },
      { text: "The human body replaces the donated blood volume within about 24-48 hours.", real: true },
      { text: "Donating blood permanently reduces the total amount of blood in your body.", real: false }
    ],
    explanation: "The body fully replenishes donated blood. Plasma is replaced within 24-48 hours, and red blood cells are fully replenished within 4-8 weeks."
  },
  {
    topic: "Frogs",
    statements: [
      { text: "The wood frog can survive being frozen solid — its heart stops and it appears dead until it thaws.", real: true },
      { text: "A group of frogs is called an 'army.'", real: true },
      { text: "Frogs must drink water through their mouths to stay hydrated.", real: false }
    ],
    explanation: "Frogs absorb water through their skin rather than drinking it. They have a specialized patch of skin on their belly designed for water absorption."
  },
  {
    topic: "Panama Canal: Engineering",
    statements: [
      { text: "The Panama Canal uses a lake (Gatun Lake) at 85 feet above sea level as part of the transit route.", real: true },
      { text: "Each lock chamber of the Panama Canal uses 52 million gallons of fresh water per ship transit.", real: true },
      { text: "The Panama Canal operates using wind power — giant sails push ships through the canal.", real: false }
    ],
    explanation: "Ships in the Panama Canal are moved by electric locomotives (mules) on the lock walls and their own engines. No sails or wind power are used."
  },
  {
    topic: "Woodpeckers",
    statements: [
      { text: "Woodpeckers can peck up to 20 times per second without getting brain damage.", real: true },
      { text: "Woodpecker tongues can extend far beyond their beaks and wrap around their skulls.", real: true },
      { text: "Woodpeckers are a species of fish that live in the deep ocean.", real: false }
    ],
    explanation: "Woodpeckers are birds found on every continent except Australia and Antarctica. They live in forests and are known for pecking into trees."
  },
  {
    topic: "Sapphires",
    statements: [
      { text: "Sapphires come in every color — not just blue. Pink, yellow, green, and colorless sapphires all exist.", real: true },
      { text: "Sapphire is the second hardest natural gemstone after diamond, rating 9 on the Mohs scale.", real: true },
      { text: "Sapphires are made by freezing ocean water.", real: false }
    ],
    explanation: "Sapphires are a variety of the mineral corundum (aluminum oxide), formed deep underground under intense heat and pressure, not from frozen water."
  },
  {
    topic: "Forensics: Fingerprints",
    statements: [
      { text: "No two fingerprints have ever been found to be identical, even among identical twins.", real: true },
      { text: "Koalas have fingerprints so similar to humans that they can be confused under a microscope.", real: true },
      { text: "Fingerprints change completely every 24 hours.", real: false }
    ],
    explanation: "Fingerprints are permanent and do not change throughout a person's life. They form before birth and remain the same until decomposition after death."
  },
  {
    topic: "Windmills",
    statements: [
      { text: "The Netherlands once had over 10,000 windmills, used to pump water and reclaim land from the sea.", real: true },
      { text: "The earliest known windmills were in Persia (modern Iran) around the 7th century AD.", real: true },
      { text: "Windmills generate energy by burning coal inside the rotating structure.", real: false }
    ],
    explanation: "Windmills harness wind energy — the wind turns the blades, which drives a mechanical process. No burning or combustion is involved."
  },
  {
    topic: "Tango",
    statements: [
      { text: "Tango originated in the working-class neighborhoods of Buenos Aires in the late 1800s.", real: true },
      { text: "Tango was added to UNESCO's Intangible Cultural Heritage list in 2009.", real: true },
      { text: "Tango is a solo martial art performed only by one person.", real: false }
    ],
    explanation: "Tango is a partner dance performed by two people. It is known for its intimate embrace and dramatic movements between dance partners."
  },
  {
    topic: "Cinnamon",
    statements: [
      { text: "True cinnamon (Ceylon cinnamon) comes from Sri Lanka and is different from common cassia cinnamon.", real: true },
      { text: "In ancient times, cinnamon was more valuable than gold and was given as gifts to monarchs.", real: true },
      { text: "Cinnamon is the dried seed of an underwater plant.", real: false }
    ],
    explanation: "Cinnamon is the dried inner bark of trees in the genus Cinnamomum. The bark is peeled from branches, dried, and rolls into the familiar quills."
  },
  {
    topic: "Turtles",
    statements: [
      { text: "Some turtle species can breathe through their butts — they absorb oxygen through their cloaca.", real: true },
      { text: "Sea turtles have existed for over 100 million years, predating most dinosaur species.", real: true },
      { text: "Turtles can easily leave their shells and find new ones, like hermit crabs.", real: false }
    ],
    explanation: "A turtle's shell is part of its skeleton — it's fused to the spine and ribcage. Turtles cannot leave their shells, unlike hermit crabs."
  },
  {
    topic: "Bluetooth",
    statements: [
      { text: "Bluetooth technology is named after Harald Bluetooth, a 10th-century Scandinavian king.", real: true },
      { text: "The Bluetooth logo combines the runic initials of Harald Bluetooth (H and B).", real: true },
      { text: "Bluetooth requires physical wires to connect devices.", real: false }
    ],
    explanation: "Bluetooth is a wireless technology standard. Its entire purpose is to eliminate wires for short-range data exchange between devices."
  },
  {
    topic: "Icebergs",
    statements: [
      { text: "Only about 10% of an iceberg is visible above water — the rest is submerged.", real: true },
      { text: "The iceberg that sank the Titanic was estimated to be about 100 feet tall above water.", real: true },
      { text: "Icebergs are made of salt water, just like the ocean.", real: false }
    ],
    explanation: "Icebergs are made of freshwater. They break off from glaciers and ice sheets, which are formed from compressed snowfall — freshwater precipitation."
  },
  {
    topic: "Library of Alexandria",
    statements: [
      { text: "The Library of Alexandria was the largest library in the ancient world, possibly holding 400,000 scrolls.", real: true },
      { text: "The library's destruction was gradual, caused by multiple events over centuries rather than one fire.", real: true },
      { text: "The Library of Alexandria was built in the 20th century as a modern research facility.", real: false }
    ],
    explanation: "The Library of Alexandria was established in the 3rd century BC in ancient Egypt. It was one of the most significant libraries of the ancient world."
  },
  {
    topic: "Baobab Trees",
    statements: [
      { text: "Baobab trees can store up to 32,000 gallons of water in their swollen trunks.", real: true },
      { text: "Some baobab trees are over 2,000 years old, making them among the oldest living things.", real: true },
      { text: "Baobab trees grow to only 2 inches tall and are smaller than most flowers.", real: false }
    ],
    explanation: "Baobab trees are massive — they can grow up to 100 feet tall with trunks over 35 feet in diameter. They are among the largest trees in the world."
  },
  {
    topic: "Saturn: Titan",
    statements: [
      { text: "Titan is the only moon in the solar system with a dense atmosphere, thicker than Earth's.", real: true },
      { text: "In 2005, the Huygens probe landed on Titan — the farthest landing from Earth ever achieved.", real: true },
      { text: "Titan is covered in liquid water oceans identical to Earth's.", real: false }
    ],
    explanation: "Titan has lakes and seas, but they are composed of liquid methane and ethane, not water. The surface temperature is about -290°F."
  },
  {
    topic: "Wasps",
    statements: [
      { text: "Paper wasps make their nests by chewing wood fibers into a papery pulp.", real: true },
      { text: "Unlike honeybees, wasps can sting multiple times because their stingers are smooth.", real: true },
      { text: "Wasps are herbivores that eat only pollen and nectar.", real: false }
    ],
    explanation: "Many wasps are predatory and feed on other insects, spiders, and caterpillars. Adult wasps may drink nectar, but they also hunt live prey."
  },
  {
    topic: "Cartography: GPS",
    statements: [
      { text: "GPS requires signals from at least four satellites to determine an accurate 3D position.", real: true },
      { text: "GPS was originally developed by the US military and made fully available to civilians in 2000.", real: true },
      { text: "GPS works by using sound waves bounced off the Moon.", real: false }
    ],
    explanation: "GPS uses radio signals from satellites orbiting Earth, not sound waves or the Moon. Each satellite broadcasts its position and time."
  },
  {
    topic: "Limes",
    statements: [
      { text: "British sailors were called 'limeys' because they ate limes to prevent scurvy.", real: true },
      { text: "Key limes are actually yellow when ripe, not green.", real: true },
      { text: "Limes are a type of meat product.", real: false }
    ],
    explanation: "Limes are citrus fruits that grow on trees. They are closely related to lemons and oranges."
  },
  {
    topic: "Eagles",
    statements: [
      { text: "Bald eagles can see fish from over a mile away.", real: true },
      { text: "The largest eagle nest ever recorded weighed over 2 tons and was 9.5 feet wide.", real: true },
      { text: "Eagles cannot fly and must walk everywhere.", real: false }
    ],
    explanation: "Eagles are powerful fliers. They can soar for hours on thermal currents and reach speeds of over 100 mph during dives."
  },
  {
    topic: "Archaeology: Dead Sea Scrolls",
    statements: [
      { text: "The Dead Sea Scrolls were discovered accidentally by a Bedouin shepherd in 1947.", real: true },
      { text: "The scrolls contain the oldest known manuscripts of books of the Hebrew Bible.", real: true },
      { text: "The Dead Sea Scrolls were written in modern English.", real: false }
    ],
    explanation: "The Dead Sea Scrolls were written primarily in Hebrew, with some in Aramaic and Greek. English didn't exist when they were written (circa 3rd century BC to 1st century AD)."
  },
  {
    topic: "Coconuts",
    statements: [
      { text: "Coconuts kill more people per year than sharks — falling coconuts cause about 150 deaths annually.", real: true },
      { text: "Coconut water was used as an emergency IV fluid in WWII when saline solution was unavailable.", real: true },
      { text: "Coconuts are a type of mammal that lives in the ocean.", real: false }
    ],
    explanation: "Coconuts are the fruit of the coconut palm tree (Cocos nucifera). They are one of the most useful plants in the tropics."
  },
  {
    topic: "Astronomy: Red Giants",
    statements: [
      { text: "Our Sun will become a red giant in about 5 billion years, expanding to engulf Mercury and Venus.", real: true },
      { text: "Red giant stars can be 100-1,000 times larger than our Sun.", real: true },
      { text: "Red giant stars are small, cold rocks floating in space.", real: false }
    ],
    explanation: "Red giants are enormous, luminous stars with surface temperatures of 3,000-5,000 Kelvin. They are among the largest types of stars."
  },
  {
    topic: "Calligraphy",
    statements: [
      { text: "Chinese calligraphy is considered one of the highest forms of art in East Asian culture.", real: true },
      { text: "Arabic calligraphy became a major art form partly because Islam discourages representational art.", real: true },
      { text: "Calligraphy is a type of competitive swimming.", real: false }
    ],
    explanation: "Calligraphy is the art of beautiful writing. It is practiced worldwide in many scripts including Chinese, Arabic, Latin, Japanese, and Korean."
  },
  {
    topic: "Opera",
    statements: [
      { text: "Opera originated in Italy around 1600, combining music, singing, drama, and stage design.", real: true },
      { text: "The longest opera ever written is Wagner's 'Der Ring des Nibelungen,' a cycle of four operas totaling about 15 hours.", real: true },
      { text: "Opera singers use microphones and electronic amplification for all performances.", real: false }
    ],
    explanation: "Traditional opera singers do not use microphones. They are trained to project their voices powerfully enough to fill large opera houses acoustically."
  },
  {
    topic: "Glaciology",
    statements: [
      { text: "If all the ice in Antarctica melted, global sea levels would rise by about 200 feet.", real: true },
      { text: "Ice cores from Antarctica contain air bubbles that record Earth's atmospheric composition going back 800,000 years.", real: true },
      { text: "Glaciers are getting larger every year on every continent.", real: false }
    ],
    explanation: "Most glaciers worldwide are retreating and shrinking due to climate change. While some glaciers grow temporarily, the global trend is significant loss."
  },
  {
    topic: "Grapes",
    statements: [
      { text: "There are over 10,000 varieties of wine grapes worldwide.", real: true },
      { text: "Raisins are simply dried grapes — the same fruit in dehydrated form.", real: true },
      { text: "Grapes are a type of underground root vegetable.", real: false }
    ],
    explanation: "Grapes are fruits that grow on vines above ground. They grow in clusters called bunches and have been cultivated for thousands of years."
  },
  {
    topic: "Persian Empire",
    statements: [
      { text: "At its peak, the Persian Empire was the largest empire the world had ever seen, spanning three continents.", real: true },
      { text: "The ancient Persians invented the first postal system, called the Angarium.", real: true },
      { text: "The Persian Empire was located in modern-day Antarctica.", real: false }
    ],
    explanation: "The Persian Empire was centered in modern-day Iran, extending across the Middle East, Central Asia, parts of Africa, and into Europe."
  },
  {
    topic: "Canaries",
    statements: [
      { text: "Canaries were used in coal mines as early warning systems for toxic gases.", real: true },
      { text: "Canary Islands are named after dogs (Latin: canis), not canary birds — the birds were named after the islands.", real: true },
      { text: "Canaries are the largest birds in the world, larger than condors.", real: false }
    ],
    explanation: "Canaries are small songbirds, typically about 5 inches long. Condors, with wingspans over 10 feet, are vastly larger."
  },
  {
    topic: "Pearls",
    statements: [
      { text: "Natural pearls form when an irritant enters an oyster, which coats it with nacre (mother of pearl).", real: true },
      { text: "The most expensive natural pearl ever sold was La Peregrina, for over $11 million.", real: true },
      { text: "Pearls are artificially manufactured in factories from plastic beads.", real: false }
    ],
    explanation: "Natural pearls are formed biologically inside mollusks. Cultured pearls are also grown in real oysters, just with human-introduced irritants. Neither involves plastic."
  },
  {
    topic: "Volcanoes: Hawaii",
    statements: [
      { text: "Kilauea in Hawaii is one of the most active volcanoes on Earth, erupting almost continuously since 1983.", real: true },
      { text: "The Hawaiian Islands are formed by a volcanic hotspot — the Pacific plate moves over it, creating new islands.", real: true },
      { text: "Hawaii's volcanoes are completely extinct and will never erupt again.", real: false }
    ],
    explanation: "Hawaii's volcanoes are very much active. Kilauea and Mauna Loa erupt regularly. A new island, Loihi, is forming underwater southeast of Hawaii."
  },
  {
    topic: "Galileo",
    statements: [
      { text: "Galileo discovered four of Jupiter's moons in 1610, now called the Galilean moons.", real: true },
      { text: "Galileo was tried by the Inquisition for supporting the heliocentric model and spent his last years under house arrest.", real: true },
      { text: "Galileo invented the internet and the smartphone.", real: false }
    ],
    explanation: "Galileo lived from 1564-1642, centuries before the internet (1960s-1990s) and smartphones (2000s). He made contributions to astronomy, physics, and mathematics."
  },
  {
    topic: "Carnivorous Plants",
    statements: [
      { text: "Venus flytraps can count — the trap only closes when trigger hairs are touched twice in 20 seconds.", real: true },
      { text: "Pitcher plants drown insects in pools of digestive enzymes inside their tube-shaped leaves.", real: true },
      { text: "Carnivorous plants are large enough to eat dogs and cats.", real: false }
    ],
    explanation: "Carnivorous plants are small and eat mainly insects and spiders. The largest can occasionally trap small frogs or lizards, but none eat dogs or cats."
  },
  {
    topic: "Bermuda: History",
    statements: [
      { text: "Bermuda has been continuously inhabited since 1612, making it one of the oldest British colonies.", real: true },
      { text: "Bermuda was uninhabited when first settled — there were no indigenous peoples.", real: true },
      { text: "Bermuda was founded as a colony by ancient Rome in 200 BC.", real: false }
    ],
    explanation: "Bermuda was first permanently settled by English colonists in 1609-1612. The ancient Romans never reached Bermuda."
  },
  {
    topic: "Sperm Whales",
    statements: [
      { text: "Sperm whales have the largest brain of any animal, weighing about 17 pounds.", real: true },
      { text: "Sperm whales can dive to depths of over 7,000 feet and hold their breath for 90 minutes.", real: true },
      { text: "Sperm whales are the smallest marine mammals in the ocean.", real: false }
    ],
    explanation: "Sperm whales are among the largest animals on Earth, reaching up to 67 feet in length and weighing up to 57 tons."
  },
  {
    topic: "Neon Signs",
    statements: [
      { text: "Neon signs were first demonstrated in Paris in 1910 by Georges Claude.", real: true },
      { text: "True neon gas produces only red-orange light — other colors come from different gases or coatings.", real: true },
      { text: "Neon signs are powered by hamsters running on wheels.", real: false }
    ],
    explanation: "Neon signs are powered by electricity. High voltage excites gas atoms in sealed glass tubes, causing them to emit light."
  },
  {
    topic: "Inca Empire",
    statements: [
      { text: "The Inca Empire had no written language but kept records using knotted strings called quipu.", real: true },
      { text: "Inca roads stretched over 25,000 miles across the Andes, rivaling the Roman road network.", real: true },
      { text: "The Inca Empire was located in Northern Europe.", real: false }
    ],
    explanation: "The Inca Empire was located in South America, along the western coast, spanning modern-day Peru, Ecuador, Bolivia, Chile, Argentina, and Colombia."
  },
  {
    topic: "Cement",
    statements: [
      { text: "China used more cement in 3 years (2011-2013) than the US used in the entire 20th century.", real: true },
      { text: "Portland cement was patented in 1824 and named because it resembled Portland stone.", real: true },
      { text: "Cement is made from compressed ice and snow.", real: false }
    ],
    explanation: "Cement is made by heating limestone and clay to about 2,700°F in a kiln, then grinding the resulting clinite into fine powder."
  },
  {
    topic: "Harps",
    statements: [
      { text: "The harp is one of the oldest instruments, with evidence dating back to 3000 BC in Mesopotamia.", real: true },
      { text: "Ireland's national symbol is the harp — it appears on Irish coins and the presidential seal.", real: true },
      { text: "Harps are percussion instruments that are hit with sticks.", real: false }
    ],
    explanation: "Harps are stringed instruments played by plucking the strings with the fingers. They are not struck with sticks like drums."
  },
  {
    topic: "Coral: Great Barrier Reef",
    statements: [
      { text: "The Great Barrier Reef is the largest living structure on Earth, visible from space.", real: true },
      { text: "The Great Barrier Reef stretches over 1,400 miles along Australia's northeast coast.", real: true },
      { text: "The Great Barrier Reef is located in the Arctic Ocean near the North Pole.", real: false }
    ],
    explanation: "The Great Barrier Reef is in the Coral Sea off the coast of Queensland, Australia, in warm tropical waters — far from the Arctic."
  },
  {
    topic: "Astronomy: Binary Stars",
    statements: [
      { text: "More than half of all star systems in the Milky Way are binary or multiple star systems.", real: true },
      { text: "The brightest star in the night sky, Sirius, is actually a binary star system.", real: true },
      { text: "Binary stars are stars that can only be seen with binary code.", real: false }
    ],
    explanation: "Binary stars are two stars that orbit each other, bound by gravity. The term has nothing to do with computer binary code."
  },
  {
    topic: "Braille: Technology",
    statements: [
      { text: "Refreshable braille displays use pins that move up and down to form braille characters electronically.", real: true },
      { text: "Braille has been adapted for music notation, mathematics, and computer programming.", real: true },
      { text: "Braille has been completely replaced by audio and is no longer used by anyone.", real: false }
    ],
    explanation: "Braille remains essential for literacy among blind individuals. It is widely used in education, signage, labeling, and personal reading."
  },
  {
    topic: "Meteors",
    statements: [
      { text: "About 17 meteorites fall to Earth each day, though most land in the ocean or uninhabited areas.", real: true },
      { text: "The Chelyabinsk meteor in 2013 exploded over Russia, injuring about 1,500 people.", real: true },
      { text: "Meteors are pieces of the Sun that break off and fall to Earth.", real: false }
    ],
    explanation: "Meteors are pieces of space rock (asteroids or comets) that enter Earth's atmosphere. They come from the asteroid belt or comet debris, not the Sun."
  },
  {
    topic: "Ketchup",
    statements: [
      { text: "Ketchup originated in China as a fermented fish sauce called 'kê-tsiap.'", real: true },
      { text: "In the 1830s, ketchup was sold as a medicine to cure ailments like diarrhea and jaundice.", real: true },
      { text: "Ketchup has always been tomato-based since its invention.", real: false }
    ],
    explanation: "Original ketchup was made from fermented fish, not tomatoes. Tomato ketchup only became popular in the early 1800s in the United States."
  },
  {
    topic: "Bermuda Triangle: Fact",
    statements: [
      { text: "The USS Cyclops disappeared in the Bermuda Triangle in 1918 with 309 crew members and no distress signal.", real: true },
      { text: "Flight 19, a group of five Navy bombers, vanished in the Bermuda Triangle in 1945.", real: true },
      { text: "The Bermuda Triangle has been scientifically proven to be a portal to another dimension.", real: false }
    ],
    explanation: "No scientific evidence supports the existence of portals or other-dimensional gateways. Disappearances in the area have natural explanations including weather, currents, and human error."
  },
  {
    topic: "Aluminum",
    statements: [
      { text: "Aluminum was once more valuable than gold — Napoleon III served honored guests with aluminum cutlery.", real: true },
      { text: "Aluminum is the most abundant metal in Earth's crust.", real: true },
      { text: "Aluminum is heavier than lead and is the densest metal known.", real: false }
    ],
    explanation: "Aluminum is one of the lightest metals, with a density about one-third that of steel and far less than lead."
  },
  {
    topic: "Easter Island Statues",
    statements: [
      { text: "The moai were likely 'walked' to their locations by rocking them side to side with ropes.", real: true },
      { text: "Most moai face inland, away from the ocean, watching over the island's villages.", real: true },
      { text: "The moai were carved by aliens who visited Earth from another galaxy.", real: false }
    ],
    explanation: "The moai were carved by the Rapa Nui people, the island's Polynesian inhabitants. Archaeological and anthropological evidence clearly demonstrates this."
  },
  {
    topic: "Fermentation: Beer",
    statements: [
      { text: "Beer is one of the oldest beverages — evidence of brewing dates back to about 5000 BC in Iran.", real: true },
      { text: "In medieval Europe, beer was safer to drink than water because the brewing process killed pathogens.", real: true },
      { text: "Beer is brewed by dissolving rocks in cold water.", real: false }
    ],
    explanation: "Beer is brewed by fermenting sugars extracted from grain (usually barley) with yeast. The process involves malting, mashing, boiling with hops, and fermentation."
  },
  {
    topic: "Bermuda: Transportation",
    statements: [
      { text: "Bermuda limits each household to one car to control traffic on its small roads.", real: true },
      { text: "There are no rental cars in Bermuda — tourists must use scooters, buses, taxis, or ferries.", real: true },
      { text: "Bermuda has a major international airport with 50 runways.", real: false }
    ],
    explanation: "Bermuda has one airport (L.F. Wade International) with one main runway. The island is only 21 square miles, far too small for 50 runways."
  },
  {
    topic: "Beryllium",
    statements: [
      { text: "Beryllium is used in the James Webb Space Telescope's mirrors because it holds its shape in extreme cold.", real: true },
      { text: "Beryllium is extremely toxic to inhale and can cause a fatal lung disease called berylliosis.", real: true },
      { text: "Beryllium is the most common element in the universe.", real: false }
    ],
    explanation: "Hydrogen is the most common element in the universe, making up about 75% of all normal matter. Beryllium is relatively rare."
  },
  {
    topic: "Maize (Corn)",
    statements: [
      { text: "Corn was domesticated from a wild grass called teosinte in Mexico about 9,000 years ago.", real: true },
      { text: "Corn is used in thousands of products including fuel, plastics, adhesives, and sweeteners.", real: true },
      { text: "Corn is a type of animal protein, like chicken or beef.", real: false }
    ],
    explanation: "Corn (maize) is a cereal grain — a plant crop. While it contains some protein, it is not an animal product."
  },
  {
    topic: "Bermuda: Economy",
    statements: [
      { text: "Bermuda is a major global reinsurance hub, handling about a third of the world's catastrophe reinsurance.", real: true },
      { text: "Bermuda has no income tax, capital gains tax, or corporate tax.", real: true },
      { text: "Bermuda's main export is coal mining.", real: false }
    ],
    explanation: "Bermuda has no significant mining industry. Its economy is based primarily on international business (especially insurance/reinsurance) and tourism."
  },
  {
    topic: "Earthquakes: Largest",
    statements: [
      { text: "The largest earthquake ever recorded was the 1960 Valdivia earthquake in Chile at magnitude 9.5.", real: true },
      { text: "The 2011 Tōhoku earthquake was so powerful it shifted Earth's axis and shortened the day.", real: true },
      { text: "The largest possible earthquake is magnitude 5.0, and no stronger earthquake can occur.", real: false }
    ],
    explanation: "Earthquakes can exceed magnitude 9.0. The Richter scale has no upper limit. Multiple earthquakes above magnitude 9.0 have been recorded."
  },
  {
    topic: "Bermuda: Environment",
    statements: [
      { text: "Bermuda's pink sand beaches get their color from crushed coral and red foraminifera shells.", real: true },
      { text: "Bermuda sits atop an extinct volcanic seamount that rises about 14,000 feet from the ocean floor.", real: true },
      { text: "Bermuda has active volcanoes that erupt regularly.", real: false }
    ],
    explanation: "Bermuda's volcanic foundation has been extinct for about 30 million years. There is no volcanic activity on or near the islands."
  }
];
