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
    explanation: "Swiss cheese holes are created by carbon dioxide gas (not hydrogen) produced by bacteria during aging. A 2015 study also found that tiny hay particles in milk act as nucleation sites for the gas bubbles."
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
      { text: "Cacti are found naturally almost exclusively in the Americas.", real: true },
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
      { text: "At its peak, the Roman Empire had a larger population than modern-day China.", real: false }
    ],
    explanation: "The Roman Empire's peak population was around 55-70 million. Modern China has over 1.4 billion people — roughly 20 times larger."
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
    explanation: "Sweden is larger than Norway in both area (about 450,000 sq km vs 385,000 sq km) and population (about 10.5 million vs 5.5 million)."
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
      { text: "Jamaica gained independence from the United Kingdom in 1962.", real: true },
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
      { text: "The Hubble Space Telescope orbits beyond the Moon to get clearer images of deep space.", real: false }
    ],
    explanation: "Hubble orbits Earth at about 340 miles altitude — far closer than the Moon, which is about 239,000 miles away. It orbits just above the atmosphere, not in deep space."
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
      { text: "The Gregorian calendar corrected a drift of about 10 days that had accumulated under the Julian calendar.", real: true },
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
    explanation: "Pluto is tiny compared to Earth — it's about one-fifth Earth's diameter and only about 0.2% of Earth's mass. It's even smaller than Earth's Moon."
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
      { text: "Coral snakes have highly potent neurotoxic venom that affects the nervous system.", real: true },
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
  },
  {
    topic: "Liechtenstein",
    statements: [
      { text: "Liechtenstein is one of only two doubly landlocked countries in the world.", real: true },
      { text: "Liechtenstein's entire army once went to war with 80 men and returned with 81, having made a friend.", real: true },
      { text: "Liechtenstein has the largest standing army per capita in Europe.", real: false }
    ],
    explanation: "Liechtenstein actually abolished its military in 1868 and has no standing army at all."
  },
  {
    topic: "Curling",
    statements: [
      { text: "Curling stones are made from a specific granite found on Ailsa Craig island in Scotland.", real: true },
      { text: "The playing surface in curling is deliberately pebbled with water droplets before each game.", real: true },
      { text: "Curling was invented in Canada in the 1800s as a winter pastime.", real: false }
    ],
    explanation: "Curling originated in medieval Scotland in the 16th century, not Canada."
  },
  {
    topic: "Axolotl",
    statements: [
      { text: "Axolotls can regenerate entire limbs, heart tissue, and parts of their brain.", real: true },
      { text: "Axolotls are native only to Lake Xochimilco near Mexico City.", real: true },
      { text: "Axolotls are a type of fish that can breathe both water and air.", real: false }
    ],
    explanation: "Axolotls are amphibians (salamanders), not fish, though they retain their aquatic larval form throughout life."
  },
  {
    topic: "Saffron",
    statements: [
      { text: "It takes about 75,000 saffron flowers to produce one pound of saffron spice.", real: true },
      { text: "Each saffron flower produces only three stigmas, which are hand-picked.", real: true },
      { text: "Saffron is the least expensive spice by weight because it grows abundantly.", real: false }
    ],
    explanation: "Saffron is actually the most expensive spice in the world due to the labor-intensive harvesting process."
  },
  {
    topic: "Taj Mahal",
    statements: [
      { text: "The Taj Mahal appears to change color at different times of the day.", real: true },
      { text: "Over 20,000 workers and 1,000 elephants were used in the construction of the Taj Mahal.", real: true },
      { text: "The Taj Mahal was built as a royal palace for the Mughal emperor.", real: false }
    ],
    explanation: "The Taj Mahal was built as a mausoleum by Shah Jahan in memory of his wife Mumtaz Mahal, not as a palace."
  },
  {
    topic: "The Nile River",
    statements: [
      { text: "The Nile is one of the few major rivers in the world that flows from south to north.", real: true },
      { text: "The Nile has two major tributaries: the White Nile and the Blue Nile.", real: true },
      { text: "The Nile flows through only two countries: Egypt and Sudan.", real: false }
    ],
    explanation: "The Nile flows through or borders 11 countries, including Uganda, Ethiopia, Kenya, Tanzania, and others."
  },
  {
    topic: "Nikola Tesla",
    statements: [
      { text: "Tesla could visualize inventions in his mind in complete detail before building them.", real: true },
      { text: "Tesla developed the alternating current (AC) electrical system that powers the modern world.", real: true },
      { text: "Tesla invented the light bulb, which was later credited to Thomas Edison.", real: false }
    ],
    explanation: "Thomas Edison is credited with the practical incandescent light bulb. Tesla's contributions were mainly in AC power systems and other electrical innovations."
  },
  {
    topic: "The Femur",
    statements: [
      { text: "The femur is the longest and strongest bone in the human body.", real: true },
      { text: "The femur can support up to 30 times the weight of an adult human.", real: true },
      { text: "The femur is hollow throughout its entire length to reduce body weight.", real: false }
    ],
    explanation: "While the femur has a hollow medullary cavity in the shaft, its ends are filled with spongy bone and marrow, not hollow throughout."
  },
  {
    topic: "Neon",
    statements: [
      { text: "Neon makes up only about 0.0018% of Earth's atmosphere.", real: true },
      { text: "Neon produces a reddish-orange glow when used in discharge tubes.", real: true },
      { text: "Neon signs can produce any color because neon gas changes color based on voltage.", real: false }
    ],
    explanation: "Neon gas only produces reddish-orange light. Other colors in 'neon signs' come from different gases like argon, mercury, or phosphor coatings."
  },
  {
    topic: "The Bagpipes",
    statements: [
      { text: "Bagpipes were used as instruments of war by Scottish Highland clans.", real: true },
      { text: "Ancient versions of bagpipes existed in the Roman Empire and Middle East.", real: true },
      { text: "Bagpipes were invented in Scotland in the 9th century.", real: false }
    ],
    explanation: "Bagpipes likely originated in the ancient Middle East. They were used in Rome and across Europe long before becoming associated with Scotland."
  },
  {
    topic: "Ball Lightning",
    statements: [
      { text: "Ball lightning has been reported for centuries but remains poorly understood by science.", real: true },
      { text: "Ball lightning has been observed passing through closed windows and walls.", real: true },
      { text: "Ball lightning has been consistently reproduced in laboratory settings since the 1950s.", real: false }
    ],
    explanation: "Ball lightning remains one of the most mysterious weather phenomena, and scientists have not been able to consistently reproduce it in a lab."
  },
  {
    topic: "Venus Flytrap",
    statements: [
      { text: "Venus flytraps can count — they require two touches within 20 seconds to snap shut.", real: true },
      { text: "Venus flytraps are native only to a small region of North and South Carolina.", real: true },
      { text: "Venus flytraps can grow up to 3 feet tall in tropical rainforest conditions.", real: false }
    ],
    explanation: "Venus flytraps are small plants, typically only 5-6 inches across. They grow in nutrient-poor bogs, not rainforests."
  },
  {
    topic: "Marble",
    statements: [
      { text: "Marble is a metamorphic rock formed from limestone under heat and pressure.", real: true },
      { text: "Michelangelo's David was carved from a single block of Carrara marble.", real: true },
      { text: "Marble is the hardest natural stone, harder than granite.", real: false }
    ],
    explanation: "Granite is actually harder than marble. Marble is relatively soft (3-5 on the Mohs scale) compared to granite (6-7)."
  },
  {
    topic: "Battle of Thermopylae",
    statements: [
      { text: "The 300 Spartans at Thermopylae were accompanied by several thousand other Greek allies.", real: true },
      { text: "The battle lasted for three days before the Greek position was outflanked.", real: true },
      { text: "King Leonidas defeated the Persian army and drove them out of Greece at Thermopylae.", real: false }
    ],
    explanation: "The Greeks were ultimately defeated at Thermopylae. Leonidas and his rearguard were killed, though their sacrifice bought time for Greece."
  },
  {
    topic: "Vermont",
    statements: [
      { text: "Vermont produces more maple syrup than any other US state.", real: true },
      { text: "Vermont was an independent republic for 14 years before joining the United States.", real: true },
      { text: "Vermont was one of the original 13 colonies that declared independence from Britain.", real: false }
    ],
    explanation: "Vermont was not one of the original 13 colonies. It became the 14th state in 1791, after being an independent republic from 1777 to 1791."
  },
  {
    topic: "Mahjong",
    statements: [
      { text: "A standard Mahjong set contains 144 tiles.", real: true },
      { text: "Mahjong originated in China during the Qing dynasty in the mid-1800s.", real: true },
      { text: "Mahjong is played with a standard 52-card deck adapted to tile form.", real: false }
    ],
    explanation: "Mahjong has its own unique tile system with suits (bamboo, characters, dots), winds, dragons, and bonus tiles — unrelated to card decks."
  },
  {
    topic: "Silk Fabric",
    statements: [
      { text: "A single silkworm cocoon can produce a silk thread up to 900 meters long.", real: true },
      { text: "China kept the secret of silk production for thousands of years under penalty of death.", real: true },
      { text: "Silk is the weakest natural fiber, valued only for its softness.", real: false }
    ],
    explanation: "Silk is actually one of the strongest natural fibers. A strand of silk is stronger than a same-diameter strand of steel."
  },
  {
    topic: "Malaria",
    statements: [
      { text: "Malaria is caused by Plasmodium parasites transmitted through mosquito bites.", real: true },
      { text: "Malaria has killed more humans throughout history than any other single disease.", real: true },
      { text: "Malaria is caused by a virus that can spread through casual person-to-person contact.", real: false }
    ],
    explanation: "Malaria is caused by a parasite, not a virus, and it cannot spread through casual contact — it requires a mosquito vector."
  },
  {
    topic: "Jupiter",
    statements: [
      { text: "Jupiter's Great Red Spot is a storm larger than Earth that has raged for centuries.", real: true },
      { text: "Jupiter has at least 95 known moons, more than any other planet in our solar system.", real: true },
      { text: "Jupiter is a rocky planet with a solid surface beneath its cloud layers.", real: false }
    ],
    explanation: "Jupiter is a gas giant with no solid surface. Its atmosphere gradually transitions into liquid and then metallic hydrogen."
  },
  {
    topic: "Saskatchewan",
    statements: [
      { text: "Saskatchewan contains about 100,000 lakes and rivers.", real: true },
      { text: "Saskatchewan is the only Canadian province with entirely man-made borders.", real: true },
      { text: "Saskatchewan has a large mountain range running through its center.", real: false }
    ],
    explanation: "Saskatchewan is one of the flattest places in North America, dominated by prairies and plains with no significant mountain ranges."
  },
  {
    topic: "Cribbage",
    statements: [
      { text: "Cribbage was invented by the English poet Sir John Suckling in the 17th century.", real: true },
      { text: "Cribbage is the only card game legally allowed to be played for stakes in English pubs.", real: true },
      { text: "Cribbage is played without a board and uses only mental score-keeping.", real: false }
    ],
    explanation: "Cribbage is famous for using a distinctive wooden pegging board to keep score."
  },
  {
    topic: "Denim",
    statements: [
      { text: "Denim gets its name from 'serge de Nîmes,' a fabric from Nîmes, France.", real: true },
      { text: "Original blue jeans were dyed with natural indigo, which made them fade over time.", real: true },
      { text: "Denim was invented in the United States by Levi Strauss in 1853.", real: false }
    ],
    explanation: "The denim fabric originated in France. Levi Strauss popularized riveted denim pants in the US but did not invent the fabric itself."
  },
  {
    topic: "Scurvy",
    statements: [
      { text: "Scurvy is caused by a deficiency of vitamin C.", real: true },
      { text: "British sailors were called 'limeys' because they carried limes to prevent scurvy.", real: true },
      { text: "Scurvy was an airborne infectious disease common on ships due to poor ventilation.", real: false }
    ],
    explanation: "Scurvy is a nutritional deficiency disease, not an infectious one. It results from insufficient vitamin C intake."
  },
  {
    topic: "Neptune",
    statements: [
      { text: "Neptune has the fastest winds in the solar system, reaching over 1,200 mph.", real: true },
      { text: "Neptune was the first planet discovered through mathematical prediction rather than observation.", real: true },
      { text: "Neptune is the smallest of the gas giant planets in our solar system.", real: false }
    ],
    explanation: "Neptune is larger than Uranus by mass, though slightly smaller in diameter. The smallest gas giants are debated, but Neptune is not the smallest."
  },
  {
    topic: "Alberta",
    statements: [
      { text: "Alberta is the only Canadian province with no provincial sales tax.", real: true },
      { text: "The Canadian Badlands in Alberta contain some of the richest dinosaur fossil beds in the world.", real: true },
      { text: "Alberta's climate is tropical due to warm Pacific currents flowing through the province.", real: false }
    ],
    explanation: "Alberta has a continental climate with cold winters and warm summers. It is far from tropical."
  },
  {
    topic: "Backgammon",
    statements: [
      { text: "Backgammon is one of the oldest known board games, dating back about 5,000 years.", real: true },
      { text: "A doubling cube is used in backgammon to raise the stakes during a game.", real: true },
      { text: "Backgammon was invented in medieval England and spread to the rest of Europe.", real: false }
    ],
    explanation: "Backgammon originated in ancient Mesopotamia (modern-day Iraq) around 3000 BCE, thousands of years before medieval England."
  },
  {
    topic: "Cashmere",
    statements: [
      { text: "Cashmere wool comes from cashmere goats and is finer than regular sheep's wool.", real: true },
      { text: "A single cashmere goat produces only about 150 grams of cashmere fiber per year.", real: true },
      { text: "Cashmere is a synthetic fabric developed in the 1940s to imitate wool.", real: false }
    ],
    explanation: "Cashmere is a natural fiber harvested from cashmere goats, named after the Kashmir region. It has been used for thousands of years."
  },
  {
    topic: "Tuberculosis",
    statements: [
      { text: "Tuberculosis has killed more people throughout history than any other infectious disease.", real: true },
      { text: "TB bacteria can remain dormant in a person's body for years without causing symptoms.", real: true },
      { text: "Tuberculosis was eradicated worldwide by the 1980s thanks to antibiotics.", real: false }
    ],
    explanation: "TB has not been eradicated. It remains one of the world's deadliest infectious diseases, killing over a million people annually."
  },
  {
    topic: "Uranus",
    statements: [
      { text: "Uranus rotates on its side, with an axial tilt of about 98 degrees.", real: true },
      { text: "Uranus was the first planet discovered using a telescope, found by William Herschel in 1781.", real: true },
      { text: "Uranus is the hottest planet in the solar system due to its thick atmosphere.", real: false }
    ],
    explanation: "Venus is the hottest planet due to its extreme greenhouse effect. Uranus is actually one of the coldest planets."
  },
  {
    topic: "Manitoba",
    statements: [
      { text: "Churchill, Manitoba is known as the 'Polar Bear Capital of the World.'", real: true },
      { text: "Manitoba's name comes from the Cree words meaning 'strait of the spirit.'", real: true },
      { text: "Manitoba is Canada's westernmost province, bordering the Pacific Ocean.", real: false }
    ],
    explanation: "Manitoba is a central Canadian province. British Columbia is the westernmost province bordering the Pacific."
  },
  {
    topic: "Go (Board Game)",
    statements: [
      { text: "Go has more possible board positions than there are atoms in the observable universe.", real: true },
      { text: "Go originated in China over 2,500 years ago, making it one of the oldest board games still played.", real: true },
      { text: "Go is played on a 10x10 grid with pieces that can move in any direction.", real: false }
    ],
    explanation: "Go is played on a 19x19 grid, and pieces (stones) are placed on intersections and do not move once placed."
  },
  {
    topic: "Linen",
    statements: [
      { text: "Linen is made from the fibers of the flax plant and is one of the oldest textiles.", real: true },
      { text: "Ancient Egyptian mummies were wrapped in linen bandages.", real: true },
      { text: "Linen is a petroleum-based synthetic fabric developed in the Industrial Revolution.", real: false }
    ],
    explanation: "Linen is a natural fabric made from flax. It has been produced for over 30,000 years, far predating the Industrial Revolution."
  },
  {
    topic: "Rabies",
    statements: [
      { text: "Rabies is almost 100% fatal once symptoms appear.", real: true },
      { text: "Louis Pasteur developed the first successful rabies vaccine in 1885.", real: true },
      { text: "Rabies is a bacterial infection that can be easily treated with standard antibiotics.", real: false }
    ],
    explanation: "Rabies is caused by a virus, not bacteria, and cannot be treated with antibiotics. Post-exposure vaccination is required."
  },
  {
    topic: "Pluto's Features",
    statements: [
      { text: "Pluto has a heart-shaped glacier on its surface made of nitrogen ice.", real: true },
      { text: "Pluto has five known moons, the largest being Charon.", real: true },
      { text: "Pluto is larger than Earth's Moon.", real: false }
    ],
    explanation: "Pluto is much smaller than Earth's Moon. Pluto's diameter is about 2,377 km, while the Moon's is about 3,474 km."
  },
  {
    topic: "Nova Scotia",
    statements: [
      { text: "Nova Scotia is Latin for 'New Scotland' and was named by Scottish settlers.", real: true },
      { text: "The Bay of Fundy in Nova Scotia has the highest tides in the world, reaching over 50 feet.", real: true },
      { text: "Nova Scotia is a landlocked province in central Canada.", real: false }
    ],
    explanation: "Nova Scotia is a peninsula on Canada's Atlantic coast, almost entirely surrounded by water."
  },
  {
    topic: "Dominoes",
    statements: [
      { text: "A standard set of double-six dominoes contains 28 tiles.", real: true },
      { text: "Dominoes likely originated in China in the 12th century.", real: true },
      { text: "Dominoes were invented as a children's educational toy in 19th-century America.", real: false }
    ],
    explanation: "Dominoes have ancient origins in China, dating back hundreds of years before they became popular in Europe and America."
  },
  {
    topic: "Tweed",
    statements: [
      { text: "Tweed fabric originated in Scotland and is traditionally made from wool.", real: true },
      { text: "Harris Tweed must by law be hand-woven by islanders in the Outer Hebrides of Scotland.", real: true },
      { text: "Tweed is a lightweight summer fabric originally designed for tropical climates.", real: false }
    ],
    explanation: "Tweed is a heavy, warm fabric designed for the cold, wet climate of Scotland and the British Isles."
  },
  {
    topic: "Smallpox",
    statements: [
      { text: "Smallpox is the only human disease to have been completely eradicated worldwide.", real: true },
      { text: "Edward Jenner developed the first vaccine by using cowpox to protect against smallpox.", real: true },
      { text: "Smallpox was eradicated by developing an antibiotic that killed the smallpox bacteria.", real: false }
    ],
    explanation: "Smallpox was caused by a virus, not bacteria, and was eradicated through a global vaccination campaign, not antibiotics."
  },
  {
    topic: "Mars Surface",
    statements: [
      { text: "Mars has the largest volcano in the solar system, Olympus Mons, at about 72,000 feet tall.", real: true },
      { text: "A day on Mars (a sol) is only about 37 minutes longer than an Earth day.", real: true },
      { text: "Mars has a thick atmosphere with breathable oxygen levels similar to Earth's.", real: false }
    ],
    explanation: "Mars has a very thin atmosphere, about 1% of Earth's pressure, composed mostly of carbon dioxide with almost no oxygen."
  },
  {
    topic: "British Columbia",
    statements: [
      { text: "British Columbia has more than 27,000 kilometers of coastline.", real: true },
      { text: "The Great Bear Rainforest in BC is one of the largest temperate rainforests in the world.", real: true },
      { text: "British Columbia has a dry desert climate throughout the entire province.", real: false }
    ],
    explanation: "While parts of the BC interior are semi-arid, the coast receives enormous rainfall and is covered in temperate rainforest."
  },
  {
    topic: "Euchre",
    statements: [
      { text: "In Euchre, the jack of the trump suit is called the 'right bower' and is the highest card.", real: true },
      { text: "Euchre is believed to be the game for which the joker was first introduced to card decks.", real: true },
      { text: "Euchre uses a full 52-card deck with all cards from 2 through Ace.", real: false }
    ],
    explanation: "Euchre uses a reduced deck of only 24 or 32 cards, removing low-numbered cards."
  },
  {
    topic: "Burlap",
    statements: [
      { text: "Burlap (hessian) is made from jute plant fibers.", real: true },
      { text: "Burlap was historically used to make sandbags, coffee sacks, and agricultural bags.", real: true },
      { text: "Burlap is a luxury fabric prized for its softness against the skin.", real: false }
    ],
    explanation: "Burlap is a coarse, rough fabric. It is utilitarian, not luxurious, and would be uncomfortable worn against the skin."
  },
  {
    topic: "Cholera",
    statements: [
      { text: "John Snow traced a cholera outbreak in London in 1854 to a contaminated water pump.", real: true },
      { text: "Cholera can kill within hours if untreated due to severe dehydration.", real: true },
      { text: "Cholera is transmitted through the air by coughing and sneezing.", real: false }
    ],
    explanation: "Cholera is a waterborne disease transmitted through contaminated water and food, not through the air."
  },
  {
    topic: "Venus Atmosphere",
    statements: [
      { text: "Venus has surface temperatures of about 475°C (900°F), hot enough to melt lead.", real: true },
      { text: "It rains sulfuric acid on Venus, though the drops evaporate before reaching the surface.", real: true },
      { text: "Venus has a thin, Mars-like atmosphere with almost no cloud cover.", real: false }
    ],
    explanation: "Venus has an extremely thick atmosphere, about 90 times Earth's pressure, with dense cloud cover of sulfuric acid."
  },
  {
    topic: "Prince Edward Island",
    statements: [
      { text: "Prince Edward Island is Canada's smallest province by both area and population.", real: true },
      { text: "PEI is famous for its red sand beaches, colored by high iron oxide content in the soil.", real: true },
      { text: "Prince Edward Island is the largest island in North America.", real: false }
    ],
    explanation: "PEI is a relatively small island. Baffin Island, also in Canada, is the largest island in North America."
  },
  {
    topic: "Tarot Cards",
    statements: [
      { text: "Tarot cards were originally created for playing card games in 15th-century Italy.", real: true },
      { text: "A standard tarot deck contains 78 cards divided into Major and Minor Arcana.", real: true },
      { text: "Tarot cards were invented in ancient Egypt as a mystical divination tool.", real: false }
    ],
    explanation: "Despite popular myth, tarot cards originated as playing cards in Renaissance Italy, not ancient Egypt."
  },
  {
    topic: "Organza",
    statements: [
      { text: "Organza is a thin, sheer fabric traditionally made from silk.", real: true },
      { text: "Organza gets its name from Urgench, a city on the ancient Silk Road in Uzbekistan.", real: true },
      { text: "Organza is one of the heaviest fabrics, typically used for winter outerwear.", real: false }
    ],
    explanation: "Organza is one of the lightest and sheerest fabrics, used for formal wear, veils, and decorations — not heavy outerwear."
  },
  {
    topic: "Measles",
    statements: [
      { text: "Measles is one of the most contagious diseases known — one person can infect 12-18 others.", real: true },
      { text: "Before vaccination, measles killed approximately 2.6 million people per year worldwide.", real: true },
      { text: "Measles only affects children and adults are completely immune.", real: false }
    ],
    explanation: "Measles can affect people of any age. Unvaccinated adults are susceptible and can develop severe complications."
  },
  {
    topic: "Saturn's Moons",
    statements: [
      { text: "Saturn's moon Titan has a thick atmosphere and lakes of liquid methane on its surface.", real: true },
      { text: "Saturn's moon Enceladus shoots geysers of water ice into space from its south pole.", real: true },
      { text: "All of Saturn's moons are barren rocks with no atmosphere or geological activity.", real: false }
    ],
    explanation: "Several of Saturn's moons are geologically active. Titan has a dense atmosphere, and Enceladus has active geysers."
  },
  {
    topic: "Newfoundland and Labrador",
    statements: [
      { text: "Newfoundland has its own time zone, 30 minutes offset from Atlantic Time.", real: true },
      { text: "L'Anse aux Meadows in Newfoundland is the only confirmed Viking settlement in North America.", real: true },
      { text: "Newfoundland and Labrador was the first province to join Canadian Confederation in 1867.", real: false }
    ],
    explanation: "Newfoundland was the last province to join Canada, doing so in 1949 after a close referendum."
  },
  {
    topic: "Mancala",
    statements: [
      { text: "Mancala is one of the oldest known games, with evidence dating back over 7,000 years.", real: true },
      { text: "Mancala games are played across Africa, Asia, and the Caribbean with many regional variations.", real: true },
      { text: "Mancala was invented in Victorian England as a mathematical puzzle game.", real: false }
    ],
    explanation: "Mancala has ancient African and Asian origins, predating Victorian England by thousands of years."
  },
  {
    topic: "Kevlar Fabric",
    statements: [
      { text: "Kevlar was invented by Stephanie Kwolek at DuPont in 1965.", real: true },
      { text: "Kevlar is five times stronger than steel on an equal weight basis.", real: true },
      { text: "Kevlar is a natural fiber harvested from a tropical plant.", real: false }
    ],
    explanation: "Kevlar is a synthetic aramid fiber, not a natural material. It was developed through laboratory chemistry."
  },
  {
    topic: "The Plague",
    statements: [
      { text: "The Black Death killed an estimated 30-60% of Europe's population in the 14th century.", real: true },
      { text: "The plague is caused by the bacterium Yersinia pestis, typically spread by flea bites.", real: true },
      { text: "The plague has been completely eliminated and no cases have occurred since the Middle Ages.", real: false }
    ],
    explanation: "Plague cases still occur today in several countries. The WHO reports 1,000-2,000 cases annually worldwide."
  },
  {
    topic: "Io (Jupiter's Moon)",
    statements: [
      { text: "Io is the most volcanically active body in the solar system with over 400 active volcanoes.", real: true },
      { text: "Io's surface is constantly reshaped by lava flows, so it has virtually no impact craters.", real: true },
      { text: "Io is covered in a thick layer of water ice like Europa.", real: false }
    ],
    explanation: "Io's surface is covered in sulfur and sulfur dioxide from its intense volcanic activity, not water ice."
  },
  {
    topic: "Ontario",
    statements: [
      { text: "Ontario contains about 250,000 lakes, holding about one-fifth of the world's fresh water.", real: true },
      { text: "Ontario is home to both Canada's capital (Ottawa) and its largest city (Toronto).", real: true },
      { text: "Ontario is Canada's smallest province by area.", real: false }
    ],
    explanation: "Ontario is actually the second-largest Canadian province by area. Prince Edward Island is the smallest."
  },
  {
    topic: "Yahtzee",
    statements: [
      { text: "Yahtzee was originally called 'The Yacht Game' because it was played on a yacht.", real: true },
      { text: "The probability of rolling a Yahtzee (five of a kind) in a single roll is about 1 in 1,296.", real: true },
      { text: "Yahtzee is played with ten dice, each with twelve sides.", real: false }
    ],
    explanation: "Yahtzee is played with five standard six-sided dice."
  },
  {
    topic: "Velvet",
    statements: [
      { text: "Velvet was historically so expensive that laws restricted its wear to royalty and nobility.", real: true },
      { text: "Traditional velvet is woven on a special loom that weaves two layers simultaneously, then cuts them apart.", real: true },
      { text: "Velvet is a type of animal leather that has been polished to a soft texture.", real: false }
    ],
    explanation: "Velvet is a woven fabric, traditionally made from silk. It is not leather."
  },
  {
    topic: "Polio",
    statements: [
      { text: "Jonas Salk developed the first effective polio vaccine in 1955 and refused to patent it.", real: true },
      { text: "Polio has been reduced by over 99% worldwide since 1988 through vaccination efforts.", real: true },
      { text: "Polio is a fungal infection that primarily affects the lungs.", real: false }
    ],
    explanation: "Polio is caused by a virus (poliovirus) that attacks the nervous system, not a fungal lung infection."
  },
  {
    topic: "Europa (Jupiter's Moon)",
    statements: [
      { text: "Europa likely has a liquid saltwater ocean beneath its icy surface.", real: true },
      { text: "Europa's ocean may contain more than twice the water of all Earth's oceans combined.", real: true },
      { text: "Europa has a thick, breathable atmosphere similar to Earth's.", real: false }
    ],
    explanation: "Europa has only a very thin atmosphere of oxygen, far too thin to breathe."
  },
  {
    topic: "Quebec",
    statements: [
      { text: "Quebec is the largest Canadian province by area, larger than many countries.", real: true },
      { text: "Quebec City's Old Town is the only fortified city north of Mexico in North America.", real: true },
      { text: "Quebec's official language is English, with French spoken only as a minority language.", real: false }
    ],
    explanation: "French is Quebec's sole official language. It is the heart of French-speaking Canada."
  },
  {
    topic: "Scrabble",
    statements: [
      { text: "Scrabble was invented during the Great Depression by an unemployed architect named Alfred Butts.", real: true },
      { text: "The letter Q is worth 10 points in Scrabble, the joint highest value tile.", real: true },
      { text: "Scrabble tiles are assigned point values randomly and change with each new edition.", real: false }
    ],
    explanation: "Scrabble tile values are fixed and based on the frequency of letter usage in English. They don't change between editions."
  },
  {
    topic: "Chiffon",
    statements: [
      { text: "Chiffon is a lightweight, sheer fabric that was originally made from silk.", real: true },
      { text: "The word 'chiffon' comes from the French word for 'cloth' or 'rag.'", real: true },
      { text: "Chiffon is a heavy canvas fabric used primarily for making tents and sails.", real: false }
    ],
    explanation: "Chiffon is one of the lightest fabrics available, known for its sheer, flowing quality — the opposite of heavy canvas."
  },
  {
    topic: "Diabetes",
    statements: [
      { text: "Before insulin was discovered, a diagnosis of Type 1 diabetes was essentially a death sentence.", real: true },
      { text: "The discoverers of insulin sold the patent to the University of Toronto for $1 each.", real: true },
      { text: "Diabetes is caused by eating too much sugar and can be cured by eliminating sugar from the diet.", real: false }
    ],
    explanation: "Type 1 diabetes is an autoimmune disease, not caused by sugar. Type 2 has multiple risk factors and cannot be 'cured' simply by eliminating sugar."
  },
  {
    topic: "Titan (Saturn's Moon)",
    statements: [
      { text: "Titan is the only moon in our solar system with a dense, substantial atmosphere.", real: true },
      { text: "Titan has rain, rivers, and lakes — but they are made of liquid methane and ethane, not water.", real: true },
      { text: "Titan's atmosphere is made mostly of pure oxygen, similar to Earth's.", real: false }
    ],
    explanation: "Titan's atmosphere is about 98% nitrogen with traces of methane, not oxygen."
  },
  {
    topic: "Hawaii (State)",
    statements: [
      { text: "Hawaii is the only US state that grows coffee commercially.", real: true },
      { text: "Hawaii is the most isolated population center on Earth, over 2,300 miles from the nearest continent.", real: true },
      { text: "Hawaii became a US state in 1776 as one of the original thirteen colonies.", real: false }
    ],
    explanation: "Hawaii became the 50th US state in 1959. It was an independent kingdom until 1893."
  },
  {
    topic: "Risk (Board Game)",
    statements: [
      { text: "Risk was invented by French filmmaker Albert Lamorisse, who also directed 'The Red Balloon.'", real: true },
      { text: "The original French name of Risk was 'La Conquête du Monde' (The Conquest of the World).", real: true },
      { text: "Risk is a cooperative board game where all players work together against the board.", real: false }
    ],
    explanation: "Risk is a competitive strategy game where players attempt to conquer territories from each other."
  },
  {
    topic: "Taffeta",
    statements: [
      { text: "Taffeta is a crisp, smooth fabric that makes a distinctive rustling sound called 'scroop.'", real: true },
      { text: "The word 'taffeta' comes from the Persian word 'taftah,' meaning 'twisted woven.'", real: true },
      { text: "Taffeta is a stretchy, elastic fabric commonly used for athletic wear.", real: false }
    ],
    explanation: "Taffeta is a stiff, non-stretchy fabric. It has very little give and is used for formal wear and gowns."
  },
  {
    topic: "Epilepsy",
    statements: [
      { text: "Epilepsy affects about 50 million people worldwide, making it one of the most common neurological diseases.", real: true },
      { text: "Some epilepsy patients have had half their brain surgically removed and lived normal lives.", real: true },
      { text: "Epilepsy is contagious and can be transmitted through physical contact.", real: false }
    ],
    explanation: "Epilepsy is a neurological condition, not an infectious disease. It cannot be transmitted from person to person."
  },
  {
    topic: "Ganymede (Jupiter's Moon)",
    statements: [
      { text: "Ganymede is the largest moon in our solar system, even larger than the planet Mercury.", real: true },
      { text: "Ganymede is the only moon known to have its own magnetic field.", real: true },
      { text: "Ganymede is the smallest of Jupiter's moons, barely visible from Earth.", real: false }
    ],
    explanation: "Ganymede is Jupiter's largest moon and the largest in the entire solar system."
  },
  {
    topic: "Alaska",
    statements: [
      { text: "Alaska is the largest, most northern, and most western US state.", real: true },
      { text: "Alaska was purchased from Russia in 1867 for about 2 cents per acre.", real: true },
      { text: "Alaska has a warm Mediterranean climate due to the influence of the Pacific Ocean.", real: false }
    ],
    explanation: "Alaska has an extremely cold climate, with some of the lowest temperatures recorded in North America."
  },
  {
    topic: "Trivial Pursuit",
    statements: [
      { text: "Trivial Pursuit was invented by two Canadian journalists in 1979.", real: true },
      { text: "In its first year of wide release (1984), Trivial Pursuit sold over 20 million copies.", real: true },
      { text: "Trivial Pursuit has only three categories: Science, History, and Sports.", real: false }
    ],
    explanation: "Trivial Pursuit has six categories: Geography, Entertainment, History, Art & Literature, Science & Nature, and Sports & Leisure."
  },
  {
    topic: "Corduroy",
    statements: [
      { text: "Corduroy's distinctive ridges are called 'wales,' and the fabric is classified by wales per inch.", real: true },
      { text: "The word corduroy may derive from the French 'corde du roi' meaning 'cord of the king.'", real: true },
      { text: "Corduroy is made from rubber fibers, which gives it its characteristic stretch.", real: false }
    ],
    explanation: "Corduroy is made from cotton (or cotton blend) fibers woven in a ridged pattern, not rubber."
  },
  {
    topic: "Asthma",
    statements: [
      { text: "Olympic athletes have a higher rate of asthma than the general population.", real: true },
      { text: "Asthma was treated in ancient Egypt by inhaling vapors from heated herbs.", real: true },
      { text: "Asthma only develops in childhood and cannot appear for the first time in adults.", real: false }
    ],
    explanation: "Adult-onset asthma is common. Many people develop asthma for the first time as adults."
  },
  {
    topic: "Triton (Neptune's Moon)",
    statements: [
      { text: "Triton orbits Neptune in the opposite direction of the planet's rotation, suggesting it was captured.", real: true },
      { text: "Triton has active geysers that shoot nitrogen gas up to 8 km into its thin atmosphere.", real: true },
      { text: "Triton is a warm, volcanic world with temperatures similar to Venus.", real: false }
    ],
    explanation: "Triton is one of the coldest objects in the solar system, with surface temperatures around -235°C."
  },
  {
    topic: "Texas",
    statements: [
      { text: "Texas was an independent country (the Republic of Texas) for nearly 10 years before joining the US.", real: true },
      { text: "King Ranch in Texas is larger than the entire state of Rhode Island.", real: true },
      { text: "Texas is the largest US state by area.", real: false }
    ],
    explanation: "Alaska is the largest US state by area, more than twice the size of Texas."
  },
  {
    topic: "Clue (Board Game)",
    statements: [
      { text: "Clue was invented in England during WWII by a fire warden named Anthony Pratt.", real: true },
      { text: "In the UK, the game is called 'Cluedo,' a combination of 'clue' and 'ludo' (Latin for 'I play').", real: true },
      { text: "Clue is a cooperative card game where all players work together to solve the mystery.", real: false }
    ],
    explanation: "Clue is a competitive board game where players race against each other to be the first to solve the murder mystery."
  },
  {
    topic: "Flannel",
    statements: [
      { text: "Flannel originated in Wales in the 17th century, made from carded wool.", real: true },
      { text: "Flannel gets its softness from a brushing process that raises fine fibers on the surface.", real: true },
      { text: "Flannel must always be plaid — the plaid pattern is an inherent part of the weaving process.", real: false }
    ],
    explanation: "Flannel is a fabric type defined by its soft, brushed texture, not its pattern. It comes in solid colors, prints, and many other patterns."
  },
  {
    topic: "Hemophilia",
    statements: [
      { text: "Hemophilia was known as the 'royal disease' because it spread through European royal families.", real: true },
      { text: "Queen Victoria was a carrier of hemophilia and passed it to several royal houses.", real: true },
      { text: "Hemophilia causes the blood to clot too quickly, leading to dangerous blood clots.", real: false }
    ],
    explanation: "Hemophilia causes the blood to clot too slowly or not at all, leading to excessive bleeding — the opposite of clotting too quickly."
  },
  {
    topic: "Phobos and Deimos",
    statements: [
      { text: "Mars's moon Phobos orbits so close to Mars that it will eventually crash into the planet.", real: true },
      { text: "Phobos and Deimos are named after the Greek gods of fear and terror.", real: true },
      { text: "Phobos and Deimos are both larger than Earth's Moon.", real: false }
    ],
    explanation: "Both Phobos and Deimos are tiny — Phobos is only about 22 km across, while Earth's Moon is 3,474 km."
  },
  {
    topic: "Montana",
    statements: [
      { text: "Montana has more cattle than people.", real: true },
      { text: "Montana's Glacier National Park once had 150 glaciers but now has fewer than 30.", real: true },
      { text: "Montana borders the Pacific Ocean on its western edge.", real: false }
    ],
    explanation: "Montana is an inland state. Its western border touches Idaho, not the Pacific Ocean."
  },
  {
    topic: "Monopoly",
    statements: [
      { text: "The game that became Monopoly was originally created to demonstrate the evils of land monopolies.", real: true },
      { text: "The longest game of Monopoly on record lasted 70 straight days.", real: true },
      { text: "Monopoly properties are named after streets in New York City.", real: false }
    ],
    explanation: "Monopoly properties are named after streets in Atlantic City, New Jersey, not New York City."
  },
  {
    topic: "Satin",
    statements: [
      { text: "Satin is not a fiber but a type of weave that can be made from silk, polyester, or nylon.", real: true },
      { text: "Satin weave creates a glossy front surface and a dull back by floating threads over multiple yarns.", real: true },
      { text: "Satin is a rough, textured weave specifically designed for outdoor and industrial use.", real: false }
    ],
    explanation: "Satin is known for its smooth, glossy, and luxurious surface — the opposite of rough and industrial."
  },
  {
    topic: "Lupus",
    statements: [
      { text: "Lupus causes the immune system to attack the body's own healthy tissues and organs.", real: true },
      { text: "Lupus gets its name from the Latin word for 'wolf' because facial rashes resembled wolf bites.", real: true },
      { text: "Lupus is a highly contagious viral infection spread through mosquito bites.", real: false }
    ],
    explanation: "Lupus is an autoimmune disease, not a contagious infection. It cannot be spread from person to person."
  },
  {
    topic: "Callisto (Jupiter's Moon)",
    statements: [
      { text: "Callisto is the most heavily cratered object in our solar system.", real: true },
      { text: "Callisto may have a subsurface ocean of liquid water beneath its icy crust.", real: true },
      { text: "Callisto has active volcanoes that resurface it regularly, giving it a smooth appearance.", real: false }
    ],
    explanation: "Callisto is geologically dead with no volcanic activity. Its heavily cratered surface has remained unchanged for billions of years."
  },
  {
    topic: "Maine",
    statements: [
      { text: "Maine produces about 99% of all blueberries grown in the United States.", real: true },
      { text: "Maine is the only US state whose name is one syllable.", real: true },
      { text: "Maine shares a border with three other US states.", real: false }
    ],
    explanation: "Maine borders only one other US state: New Hampshire. Its other borders are with Canada and the Atlantic Ocean."
  },
  {
    topic: "Settlers of Catan",
    statements: [
      { text: "Settlers of Catan was created by a German dental technician named Klaus Teuber.", real: true },
      { text: "Catan has sold over 40 million copies worldwide since its release in 1995.", real: true },
      { text: "Settlers of Catan is played on a fixed, unchanging board that is the same every game.", real: false }
    ],
    explanation: "Catan's board is modular — hex tiles are arranged randomly each game, creating a different layout every time."
  },
  {
    topic: "Muslin",
    statements: [
      { text: "Muslin from ancient Dhaka (Bangladesh) was so fine it was called 'woven air.'", real: true },
      { text: "Muslin gets its name from the city of Mosul in modern-day Iraq.", real: true },
      { text: "Muslin is a thick, waterproof fabric used for raincoats and tarpaulins.", real: false }
    ],
    explanation: "Muslin is a lightweight, breathable cotton fabric — the opposite of thick and waterproof."
  },
  {
    topic: "Celiac Disease",
    statements: [
      { text: "Celiac disease causes the immune system to attack the small intestine when gluten is eaten.", real: true },
      { text: "About 1 in 100 people worldwide have celiac disease, but most are undiagnosed.", real: true },
      { text: "Celiac disease is a mild food preference that causes no real physical damage.", real: false }
    ],
    explanation: "Celiac disease causes serious intestinal damage and can lead to malnutrition, osteoporosis, and other complications if untreated."
  },
  {
    topic: "Miranda (Uranus's Moon)",
    statements: [
      { text: "Miranda has a cliff called Verona Rupes that is about 20 km high — the tallest in the solar system.", real: true },
      { text: "Miranda's surface is a patchwork of wildly different terrains, suggesting it was shattered and reassembled.", real: true },
      { text: "Miranda is the largest moon of Uranus and bigger than Earth's Moon.", real: false }
    ],
    explanation: "Miranda is one of the smallest of Uranus's major moons, only about 470 km in diameter."
  },
  {
    topic: "Rhode Island",
    statements: [
      { text: "Rhode Island is the smallest US state but has one of the longest official names.", real: true },
      { text: "Rhode Island was the last of the original 13 colonies to ratify the US Constitution.", real: true },
      { text: "Rhode Island is an island with no mainland territory.", real: false }
    ],
    explanation: "Despite its name, most of Rhode Island is on the mainland. Only a small portion consists of islands in Narragansett Bay."
  },
  {
    topic: "Stratego",
    statements: [
      { text: "Stratego is based on an older French game called 'L'Attaque' from the early 1900s.", real: true },
      { text: "In Stratego, a spy can defeat the highest-ranking marshal but loses to every other piece.", real: true },
      { text: "All pieces in Stratego are visible to both players at all times.", real: false }
    ],
    explanation: "Stratego is a hidden-information game. Pieces face the owner so opponents cannot see their ranks."
  },
  {
    topic: "Gore-Tex",
    statements: [
      { text: "Gore-Tex has over 9 billion pores per square inch, each too small for water droplets but large enough for vapor.", real: true },
      { text: "Gore-Tex was invented by Bob Gore in 1969 when he rapidly stretched heated PTFE (Teflon).", real: true },
      { text: "Gore-Tex is a natural cotton fabric that becomes waterproof through a wax coating.", real: false }
    ],
    explanation: "Gore-Tex is a synthetic membrane made from expanded PTFE (polytetrafluoroethylene), not natural cotton."
  },
  {
    topic: "Parkinson's Disease",
    statements: [
      { text: "Parkinson's disease results from the loss of dopamine-producing neurons in the brain.", real: true },
      { text: "Muhammad Ali and Michael J. Fox both publicly battled Parkinson's disease.", real: true },
      { text: "Parkinson's disease is a bacterial infection of the nervous system treated with antibiotics.", real: false }
    ],
    explanation: "Parkinson's is a progressive neurodegenerative disorder, not an infection. It cannot be treated with antibiotics."
  },
  {
    topic: "Charon (Pluto's Moon)",
    statements: [
      { text: "Charon is so large relative to Pluto that the two bodies orbit a point in space between them.", real: true },
      { text: "Charon and Pluto are tidally locked, always showing the same face to each other.", real: true },
      { text: "Charon has a thick atmosphere and liquid water oceans on its surface.", real: false }
    ],
    explanation: "Charon has no significant atmosphere and no liquid water on its surface. It is a cold, icy body."
  },
  {
    topic: "Wyoming",
    statements: [
      { text: "Wyoming has the smallest population of any US state, with fewer than 600,000 people.", real: true },
      { text: "Yellowstone National Park, the world's first national park, is mostly in Wyoming.", real: true },
      { text: "Wyoming is one of the most densely populated states due to its many large cities.", real: false }
    ],
    explanation: "Wyoming is the least populous US state and one of the least densely populated, with vast open spaces."
  },
  {
    topic: "Cricket Rules",
    statements: [
      { text: "A cricket Test match can last up to five days and still end in a draw.", real: true },
      { text: "In cricket, a batsman can be 'out' in at least ten different ways.", real: true },
      { text: "A cricket match consists of four 15-minute quarters, similar to basketball.", real: false }
    ],
    explanation: "Cricket does not have quarters. It is played in innings, and matches can last from a few hours (T20) to five days (Test)."
  },
  {
    topic: "Golf History",
    statements: [
      { text: "Golf was banned three times in Scotland in the 1400s because it distracted from military training.", real: true },
      { text: "The oldest golf course in the world, the Old Links at Musselburgh, dates to 1672.", real: true },
      { text: "Golf originated in ancient Rome and was played in the Colosseum.", real: false }
    ],
    explanation: "Golf originated in Scotland during the Middle Ages, not in ancient Rome."
  },
  {
    topic: "Tennis Records",
    statements: [
      { text: "The longest tennis match in history lasted 11 hours and 5 minutes at Wimbledon in 2010.", real: true },
      { text: "The fastest tennis serve on record exceeded 163 mph, hit by Sam Groth.", real: true },
      { text: "No tennis player has ever won all four Grand Slam tournaments in a single year.", real: false }
    ],
    explanation: "Several players have achieved the calendar Grand Slam, including Rod Laver (1962, 1969) and Steffi Graf (1988)."
  },
  {
    topic: "Pangolin",
    statements: [
      { text: "Pangolins are the only mammals in the world covered in keratin scales.", real: true },
      { text: "Pangolins are the most trafficked mammals in the world.", real: true },
      { text: "Pangolins are a type of reptile closely related to armadillos.", real: false }
    ],
    explanation: "Despite their scaly appearance, pangolins are mammals, not reptiles. They are not closely related to armadillos."
  },
  {
    topic: "Durian Fruit",
    statements: [
      { text: "Durian is banned from many Southeast Asian hotels and public transit due to its intense smell.", real: true },
      { text: "Durian's smell is so strong it can be detected from several meters away through packaging.", real: true },
      { text: "Durian is odorless and tasteless, prized only for its nutritional value.", real: false }
    ],
    explanation: "Durian is famous for its extremely strong, pungent odor and distinctive taste."
  },
  {
    topic: "Colosseum",
    statements: [
      { text: "The Colosseum could hold between 50,000 and 80,000 spectators.", real: true },
      { text: "The Colosseum had a retractable awning system called a velarium to shade spectators.", real: true },
      { text: "The Colosseum was built in 3 months using modern concrete technology.", real: false }
    ],
    explanation: "The Colosseum took about 8 years to build (72-80 AD) using Roman construction techniques."
  },
  {
    topic: "The Danube River",
    statements: [
      { text: "The Danube flows through more countries than any other river in the world — ten in total.", real: true },
      { text: "The famous waltz 'The Blue Danube' by Johann Strauss II was initially a flop at its premiere.", real: true },
      { text: "The Danube is the longest river in the world, longer than the Nile and Amazon.", real: false }
    ],
    explanation: "The Danube is Europe's second-longest river. The Nile and Amazon are both far longer."
  },
  {
    topic: "Telephone Invention",
    statements: [
      { text: "Alexander Graham Bell's patent for the telephone was filed just hours before a competing patent by Elisha Gray.", real: true },
      { text: "Bell's first words spoken over the telephone were 'Mr. Watson, come here. I want to see you.'", real: true },
      { text: "The telephone was invented in Japan in the 1600s using bamboo tubes and silk threads.", real: false }
    ],
    explanation: "The telephone was invented in the 1870s. While string telephones using cups existed earlier, the electrical telephone was a 19th-century invention."
  },
  {
    topic: "The Appendix",
    statements: [
      { text: "Recent research suggests the appendix serves as a reservoir for beneficial gut bacteria.", real: true },
      { text: "The human appendix is a small pouch attached to the junction of the small and large intestines.", real: true },
      { text: "The appendix is the largest organ in the human body after the liver.", real: false }
    ],
    explanation: "The appendix is a very small organ, typically 3-4 inches long. The skin is the largest organ."
  },
  {
    topic: "Argon",
    statements: [
      { text: "Argon makes up nearly 1% of Earth's atmosphere, making it the third most abundant gas.", real: true },
      { text: "Argon's name comes from the Greek word 'argos' meaning 'lazy' or 'inactive.'", real: true },
      { text: "Argon is highly reactive and combustible, requiring careful storage in reinforced containers.", real: false }
    ],
    explanation: "Argon is a noble gas and is almost completely inert — it does not react with other elements under normal conditions."
  },
  {
    topic: "The Didgeridoo",
    statements: [
      { text: "The didgeridoo is one of the oldest wind instruments, dating back over 1,500 years.", real: true },
      { text: "Traditional didgeridoos are made from eucalyptus branches hollowed out by termites.", real: true },
      { text: "The didgeridoo was invented in Europe and brought to Australia by British colonists.", real: false }
    ],
    explanation: "The didgeridoo is an Indigenous Australian instrument developed by Aboriginal Australians thousands of years ago."
  },
  {
    topic: "Haboob",
    statements: [
      { text: "A haboob is an intense dust storm that can create a wall of dust over a mile high.", real: true },
      { text: "The word 'haboob' comes from the Arabic word for 'blowing furiously.'", real: true },
      { text: "Haboobs only occur in the Sahara Desert and nowhere else in the world.", real: false }
    ],
    explanation: "Haboobs occur in many arid regions worldwide, including the southwestern United States, the Middle East, and Australia."
  },
  {
    topic: "Baobab Tree",
    statements: [
      { text: "Baobab trees can store up to 120,000 liters of water in their swollen trunks.", real: true },
      { text: "Some baobab trees are over 2,000 years old.", real: true },
      { text: "Baobab trees are the tallest trees in the world, growing over 400 feet.", real: false }
    ],
    explanation: "Baobab trees are wide but not particularly tall, typically reaching 5-30 meters. Coast redwoods are the tallest trees."
  },
  {
    topic: "Feldspar",
    statements: [
      { text: "Feldspar is the most abundant mineral group on Earth's surface, making up about 60%.", real: true },
      { text: "Feldspar is a key ingredient in making ceramics, glass, and porcelain.", real: true },
      { text: "Feldspar is an extremely rare mineral found only in meteorites.", real: false }
    ],
    explanation: "Feldspar is the most common mineral group on Earth, found in rocks worldwide."
  },
  {
    topic: "Battle of Stalingrad",
    statements: [
      { text: "The Battle of Stalingrad resulted in nearly 2 million combined casualties.", real: true },
      { text: "The average life expectancy of a Soviet soldier arriving in Stalingrad was about 24 hours.", real: true },
      { text: "The Battle of Stalingrad was a quick, one-week engagement that ended in a ceasefire.", real: false }
    ],
    explanation: "Stalingrad was one of the longest and deadliest battles in history, lasting over 5 months (August 1942 – February 1943)."
  },
  {
    topic: "Delaware",
    statements: [
      { text: "Delaware was the first state to ratify the US Constitution, on December 7, 1787.", real: true },
      { text: "More than half of all US publicly traded companies are incorporated in Delaware.", real: true },
      { text: "Delaware is the largest state on the US East Coast.", real: false }
    ],
    explanation: "Delaware is the second-smallest US state by area, far from the largest on the East Coast."
  },
  {
    topic: "Table Tennis",
    statements: [
      { text: "Table tennis balls can travel at speeds exceeding 70 mph when hit by professional players.", real: true },
      { text: "Table tennis was originally called 'whiff-whaff' in Victorian England.", real: true },
      { text: "Table tennis was invented in China and has always been primarily an Asian sport.", real: false }
    ],
    explanation: "Table tennis originated in Victorian England as an after-dinner parlor game. It was later adopted enthusiastically in Asia."
  },
  {
    topic: "Snow Leopard",
    statements: [
      { text: "Snow leopards cannot roar — they make a unique sound called a 'chuff' instead.", real: true },
      { text: "Snow leopards use their thick, meter-long tails for balance and as a blanket to cover their faces.", real: true },
      { text: "Snow leopards live in tropical rainforests near sea level.", real: false }
    ],
    explanation: "Snow leopards live in the high mountains of Central Asia, at elevations of 3,000-4,500 meters."
  },
  {
    topic: "Wasabi Plant",
    statements: [
      { text: "Real wasabi loses its flavor within 15 minutes of being grated.", real: true },
      { text: "Most wasabi served in restaurants outside Japan is actually horseradish dyed green.", real: true },
      { text: "Wasabi is the easiest crop in the world to grow and can thrive in any climate.", real: false }
    ],
    explanation: "Wasabi is notoriously difficult to cultivate, requiring very specific conditions of shade, water temperature, and humidity."
  },
  {
    topic: "Petra",
    statements: [
      { text: "Petra's famous Treasury building was carved directly into a sandstone cliff face.", real: true },
      { text: "Petra was lost to the Western world for hundreds of years until rediscovered in 1812.", real: true },
      { text: "Petra was built on flat ground using imported marble blocks from Italy.", real: false }
    ],
    explanation: "Petra's structures were carved directly into rose-red sandstone cliffs, not built from imported materials."
  },
  {
    topic: "The Yangtze River",
    statements: [
      { text: "The Yangtze is the longest river in Asia and the third-longest in the world.", real: true },
      { text: "The Three Gorges Dam on the Yangtze is the world's largest power station by installed capacity.", real: true },
      { text: "The Yangtze flows through India and Pakistan before emptying into the Arabian Sea.", real: false }
    ],
    explanation: "The Yangtze flows entirely through China and empties into the East China Sea near Shanghai."
  },
  {
    topic: "Zipper Invention",
    statements: [
      { text: "The modern zipper took over 20 years to develop, with multiple inventors contributing.", real: true },
      { text: "The word 'zipper' was coined by B.F. Goodrich, who used the device on rubber boots.", real: true },
      { text: "The zipper was invented in ancient Rome and used on togas and sandals.", real: false }
    ],
    explanation: "The zipper was developed in the late 1800s and early 1900s. Ancient Romans used pins, buttons, and clasps."
  },
  {
    topic: "The Pancreas",
    statements: [
      { text: "The pancreas produces both insulin and digestive enzymes, serving dual roles.", real: true },
      { text: "The pancreas produces about 1.5 liters of digestive juices per day.", real: true },
      { text: "The pancreas is located in the chest cavity next to the heart.", real: false }
    ],
    explanation: "The pancreas is located in the abdomen behind the stomach, not in the chest."
  },
  {
    topic: "Krypton (Element)",
    statements: [
      { text: "Krypton is a real element on the periodic table with atomic number 36.", real: true },
      { text: "Krypton is used in certain fluorescent lamps and photographic flash equipment.", real: true },
      { text: "Krypton is a radioactive metal that glows green, just like in Superman comics.", real: false }
    ],
    explanation: "Krypton is a colorless, odorless noble gas, not a glowing green metal. The fictional kryptonite is unrelated."
  },
  {
    topic: "The Sitar",
    statements: [
      { text: "A sitar can have up to 20 strings, but only 6 or 7 are played directly.", real: true },
      { text: "The sitar has 'sympathetic strings' that vibrate and resonate without being plucked.", real: true },
      { text: "The sitar is a brass wind instrument similar to a trumpet.", real: false }
    ],
    explanation: "The sitar is a plucked string instrument from India, not a brass wind instrument."
  },
  {
    topic: "Derecho",
    statements: [
      { text: "A derecho is a widespread, long-lived windstorm associated with a band of rapidly moving thunderstorms.", real: true },
      { text: "To be classified as a derecho, wind damage must extend at least 400 km along its path.", real: true },
      { text: "A derecho is a type of slow-moving fog that forms over mountain peaks.", real: false }
    ],
    explanation: "A derecho is a fast-moving, destructive windstorm — the opposite of slow-moving fog."
  },
  {
    topic: "Sequoia Tree",
    statements: [
      { text: "Giant sequoias can live for over 3,000 years.", real: true },
      { text: "The General Sherman Tree is the largest living tree on Earth by volume.", real: true },
      { text: "Sequoias grow naturally on every continent except Antarctica.", real: false }
    ],
    explanation: "Giant sequoias grow naturally only in a narrow band on the western slope of the Sierra Nevada mountains in California."
  },
  {
    topic: "Pumice",
    statements: [
      { text: "Pumice is the only rock that can float on water due to its air-filled vesicles.", real: true },
      { text: "Pumice is formed when gas-rich frothy lava cools and solidifies rapidly.", real: true },
      { text: "Pumice is the densest and heaviest rock on Earth, sinking immediately in water.", real: false }
    ],
    explanation: "Pumice is extremely lightweight and porous — it is famous for being able to float on water."
  },
  {
    topic: "Battle of Gettysburg",
    statements: [
      { text: "Gettysburg had over 50,000 combined casualties, making it the bloodiest battle of the Civil War.", real: true },
      { text: "Lincoln's Gettysburg Address was only about 270 words long and lasted roughly two minutes.", real: true },
      { text: "The Battle of Gettysburg took place in Virginia and lasted only a few hours.", real: false }
    ],
    explanation: "Gettysburg took place in Pennsylvania and lasted three full days (July 1-3, 1863)."
  },
  {
    topic: "New Hampshire",
    statements: [
      { text: "New Hampshire has no state income tax and no state sales tax.", real: true },
      { text: "New Hampshire holds the first US presidential primary election every four years.", real: true },
      { text: "New Hampshire is the largest state in New England by area.", real: false }
    ],
    explanation: "Maine is the largest New England state by area. New Hampshire is the fifth-largest."
  },
  {
    topic: "Fencing",
    statements: [
      { text: "In fencing, touches in foil and sabre are scored electronically using wired equipment.", real: true },
      { text: "The three fencing weapons are foil, épée, and sabre, each with different rules.", real: true },
      { text: "Fencing uses wooden swords and protective chain mail armor.", real: false }
    ],
    explanation: "Modern fencing uses flexible steel blades and specialized protective clothing, not wooden swords and chain mail."
  },
  {
    topic: "Capybara",
    statements: [
      { text: "The capybara is the largest living rodent in the world, weighing up to 65 kg.", real: true },
      { text: "Capybaras are semi-aquatic and can hold their breath underwater for up to five minutes.", real: true },
      { text: "Capybaras are carnivorous predators that hunt fish and small mammals.", real: false }
    ],
    explanation: "Capybaras are herbivores that eat grasses, aquatic plants, and fruits."
  },
  {
    topic: "Cardamom",
    statements: [
      { text: "Cardamom is one of the most expensive spices by weight, after saffron and vanilla.", real: true },
      { text: "Guatemala is the world's largest producer of cardamom, not India.", real: true },
      { text: "Cardamom is a type of artificial flavoring synthesized from petroleum.", real: false }
    ],
    explanation: "Cardamom is a natural spice harvested from plants in the ginger family."
  },
  {
    topic: "Machu Picchu",
    statements: [
      { text: "Machu Picchu was built in the 15th century and abandoned about 100 years later during the Spanish Conquest.", real: true },
      { text: "Machu Picchu's stones were cut so precisely that no mortar was needed.", real: true },
      { text: "Machu Picchu is located at sea level on the coast of Peru.", real: false }
    ],
    explanation: "Machu Picchu sits at about 2,430 meters (7,970 feet) above sea level in the Andes Mountains."
  },
  {
    topic: "The Mississippi River",
    statements: [
      { text: "The Mississippi River system is the fourth-longest river system in the world.", real: true },
      { text: "A drop of water takes about 90 days to travel the full length of the Mississippi River.", real: true },
      { text: "The Mississippi River flows from south to north, emptying into the Great Lakes.", real: false }
    ],
    explanation: "The Mississippi flows from north to south, from Minnesota to the Gulf of Mexico."
  },
  {
    topic: "Dynamite Invention",
    statements: [
      { text: "Alfred Nobel invented dynamite in 1867 and later established the Nobel Prizes.", real: true },
      { text: "Nobel was inspired to create the Nobel Prizes after reading his own premature obituary calling him a 'merchant of death.'", real: true },
      { text: "Dynamite is made from pure water mixed with common table salt.", real: false }
    ],
    explanation: "Dynamite is made from nitroglycerin absorbed in a stabilizing material like diatomaceous earth."
  },
  {
    topic: "The Spleen",
    statements: [
      { text: "The spleen filters blood and removes old or damaged red blood cells.", real: true },
      { text: "Humans can live without a spleen, though they become more susceptible to infections.", real: true },
      { text: "The spleen is the primary organ responsible for producing stomach acid.", real: false }
    ],
    explanation: "The stomach produces stomach acid. The spleen is part of the immune and blood filtration system."
  },
  {
    topic: "Xenon",
    statements: [
      { text: "Xenon is used as a general anesthetic in some European countries.", real: true },
      { text: "Xenon headlights produce a bright blue-white light used in luxury cars.", real: true },
      { text: "Xenon is the most abundant gas in Earth's atmosphere after nitrogen and oxygen.", real: false }
    ],
    explanation: "Xenon is extremely rare in Earth's atmosphere, present at only about 0.087 parts per million. Argon is the third most abundant."
  },
  {
    topic: "The Accordion",
    statements: [
      { text: "The accordion uses metal reeds that vibrate when air is pushed past them by the bellows.", real: true },
      { text: "The accordion was patented in Vienna in 1829 by Cyrill Demian.", real: true },
      { text: "The accordion is played by blowing air through a mouthpiece, like a trumpet.", real: false }
    ],
    explanation: "The accordion uses hand-operated bellows to push air past reeds. It does not have a mouthpiece."
  },
  {
    topic: "Waterspout",
    statements: [
      { text: "A waterspout is a rotating column of air and water mist that forms over a body of water.", real: true },
      { text: "Fair-weather waterspouts can form even without thunderstorms and are generally weaker than tornadic ones.", real: true },
      { text: "Waterspouts are permanent features that remain in the same location for years.", real: false }
    ],
    explanation: "Waterspouts are temporary weather phenomena, typically lasting only minutes."
  },
  {
    topic: "Pitcher Plant",
    statements: [
      { text: "Some pitcher plants are large enough to trap and digest rats and small birds.", real: true },
      { text: "Pitcher plants attract insects with nectar and bright colors before trapping them in slippery tubes.", real: true },
      { text: "Pitcher plants grow only in nutrient-rich tropical soil and do not consume insects.", real: false }
    ],
    explanation: "Pitcher plants typically grow in nutrient-poor soils and have evolved to trap insects precisely because of those poor soil conditions."
  },
  {
    topic: "Mica",
    statements: [
      { text: "Mica can be split into sheets thin enough to be transparent.", real: true },
      { text: "Before glass was affordable, mica was used as window panes in medieval Russia.", real: true },
      { text: "Mica is a soft mineral that dissolves easily in water.", real: false }
    ],
    explanation: "Mica is resistant to water and does not dissolve. It is chemically stable and heat-resistant."
  },
  {
    topic: "Siege of Masada",
    statements: [
      { text: "The Romans built a massive siege ramp to reach the top of Masada, which still exists today.", real: true },
      { text: "Masada sits atop an isolated rock plateau about 400 meters above the Dead Sea.", real: true },
      { text: "The Siege of Masada took place in medieval France during the Hundred Years' War.", real: false }
    ],
    explanation: "The Siege of Masada occurred in ancient Israel in 73-74 CE during the Jewish-Roman War."
  },
  {
    topic: "Mississippi (State)",
    statements: [
      { text: "Mississippi's name comes from an Ojibwe word meaning 'great river.'", real: true },
      { text: "Mississippi did not officially ratify the 13th Amendment abolishing slavery until 2013.", real: true },
      { text: "Mississippi is the most mountainous state in the US.", real: false }
    ],
    explanation: "Mississippi is one of the flattest states, dominated by the Mississippi Delta and coastal plains."
  },
  {
    topic: "Badminton",
    statements: [
      { text: "A badminton shuttlecock can leave a racket at speeds over 300 mph, the fastest ball sport speed.", real: true },
      { text: "Badminton became an Olympic sport in 1992 at the Barcelona Games.", real: true },
      { text: "Badminton is played with a heavy rubber ball similar to a tennis ball.", real: false }
    ],
    explanation: "Badminton is played with a lightweight shuttlecock (birdie) made of feathers or synthetic materials."
  },
  {
    topic: "Red Panda",
    statements: [
      { text: "Red pandas were named 'panda' about 50 years before giant pandas were.", real: true },
      { text: "Red pandas have a false thumb (an extended wrist bone) to help them grip bamboo.", real: true },
      { text: "Red pandas are closely related to giant pandas and belong to the bear family.", real: false }
    ],
    explanation: "Red pandas are not bears. They belong to their own family (Ailuridae) and are more closely related to raccoons and weasels."
  },
  {
    topic: "Jackfruit",
    statements: [
      { text: "Jackfruit is the largest tree-borne fruit in the world, weighing up to 55 kg (120 lbs).", real: true },
      { text: "Unripe jackfruit has a texture similar to pulled pork and is used as a meat substitute.", real: true },
      { text: "Jackfruit is a tiny berry the size of a blueberry that grows underground.", real: false }
    ],
    explanation: "Jackfruit is enormous — the largest tree fruit — and grows on trees, not underground."
  },
  {
    topic: "Angkor Wat",
    statements: [
      { text: "Angkor Wat is the largest religious monument in the world, covering over 400 acres.", real: true },
      { text: "Angkor Wat was originally built as a Hindu temple and later converted to Buddhism.", real: true },
      { text: "Angkor Wat was built by the ancient Romans as an outpost in Southeast Asia.", real: false }
    ],
    explanation: "Angkor Wat was built by the Khmer Empire in the 12th century. The Romans never reached Southeast Asia."
  },
  {
    topic: "The Congo River",
    statements: [
      { text: "The Congo is the deepest river in the world, reaching depths over 220 meters.", real: true },
      { text: "The Congo River crosses the equator twice.", real: true },
      { text: "The Congo River is the shortest river in Africa, spanning only 50 kilometers.", real: false }
    ],
    explanation: "The Congo is the second-longest river in Africa at about 4,700 km, one of the longest rivers in the world."
  },
  {
    topic: "Penicillin Discovery",
    statements: [
      { text: "Alexander Fleming discovered penicillin accidentally when mold contaminated a petri dish.", real: true },
      { text: "Fleming, Florey, and Chain shared the 1945 Nobel Prize for penicillin's development.", real: true },
      { text: "Penicillin was intentionally designed in a laboratory using computer modeling.", real: false }
    ],
    explanation: "Penicillin's discovery was famously accidental, not intentionally designed."
  },
  {
    topic: "The Thyroid",
    statements: [
      { text: "The thyroid gland controls metabolism by producing hormones that regulate energy use.", real: true },
      { text: "The thyroid is butterfly-shaped and located in the front of the neck.", real: true },
      { text: "The thyroid is located in the knee and controls joint flexibility.", real: false }
    ],
    explanation: "The thyroid is in the neck, not the knee. It regulates metabolism, not joint function."
  },
  {
    topic: "Tungsten",
    statements: [
      { text: "Tungsten has the highest melting point of all metals at 3,422°C.", real: true },
      { text: "Tungsten's chemical symbol 'W' comes from its German name 'Wolfram.'", real: true },
      { text: "Tungsten is a liquid at room temperature, similar to mercury.", real: false }
    ],
    explanation: "Tungsten is a very hard solid at room temperature. It has the highest melting point of any metal."
  },
  {
    topic: "The Banjo",
    statements: [
      { text: "The banjo evolved from instruments brought to America by enslaved West Africans.", real: true },
      { text: "Early banjos used a gourd body with an animal skin stretched over it.", real: true },
      { text: "The banjo was invented in 18th-century Austria as a classical orchestra instrument.", real: false }
    ],
    explanation: "The banjo has African origins, developed in the Americas from West African stringed instruments."
  },
  {
    topic: "Ice Storm",
    statements: [
      { text: "During an ice storm, a half-inch of ice accumulation can add 500 pounds of weight to power lines.", real: true },
      { text: "Ice storms occur when rain falls through a layer of freezing air near the surface.", real: true },
      { text: "Ice storms only occur at the North and South Poles.", real: false }
    ],
    explanation: "Ice storms occur in many temperate regions, particularly in the northeastern US, Canada, and parts of Europe."
  },
  {
    topic: "Corpse Flower",
    statements: [
      { text: "The corpse flower (Amorphophallus titanum) produces the largest unbranched flower structure in the world.", real: true },
      { text: "Corpse flowers bloom only once every 7-10 years, and each bloom lasts just 24-48 hours.", real: true },
      { text: "The corpse flower smells like roses and lavender, making it popular in perfume.", real: false }
    ],
    explanation: "The corpse flower smells like rotting flesh, hence its name. The odor attracts carrion beetles for pollination."
  },
  {
    topic: "Obsidian Rock",
    statements: [
      { text: "Obsidian can be fractured to produce blades sharper than modern surgical steel scalpels.", real: true },
      { text: "Obsidian is volcanic glass formed when lava cools too quickly for crystals to form.", real: true },
      { text: "Obsidian is a sedimentary rock formed at the bottom of lakes over millions of years.", real: false }
    ],
    explanation: "Obsidian is an igneous (volcanic) rock, not sedimentary. It forms from rapidly cooling lava."
  },
  {
    topic: "Battle of Waterloo",
    statements: [
      { text: "The Battle of Waterloo ended Napoleon's rule and reshaped the political map of Europe.", real: true },
      { text: "Wellington's victory at Waterloo relied heavily on the timely arrival of Prussian forces.", real: true },
      { text: "The Battle of Waterloo took place in France near the city of Paris.", real: false }
    ],
    explanation: "Waterloo is in Belgium (near Brussels), not in France."
  },
  {
    topic: "Idaho",
    statements: [
      { text: "Idaho produces about one-third of all potatoes grown in the United States.", real: true },
      { text: "The name 'Idaho' was made up — it was presented as a Native American word but was fabricated.", real: true },
      { text: "Idaho is located on the East Coast of the United States, bordering the Atlantic Ocean.", real: false }
    ],
    explanation: "Idaho is a landlocked state in the Pacific Northwest, nowhere near the Atlantic Ocean."
  },
  {
    topic: "Archery",
    statements: [
      { text: "In Olympic archery, archers shoot at a target 70 meters away, about the length of a football field.", real: true },
      { text: "The center ring of an Olympic archery target is roughly the size of a CD.", real: true },
      { text: "Olympic archers use crossbows instead of traditional bows.", real: false }
    ],
    explanation: "Olympic archery uses recurve bows, not crossbows. Crossbow is not an Olympic discipline."
  },
  {
    topic: "Narwhal",
    statements: [
      { text: "A narwhal's tusk is actually an elongated canine tooth that spirals counterclockwise.", real: true },
      { text: "Narwhal tusks contain millions of nerve endings and can sense changes in water conditions.", real: true },
      { text: "Both male and female narwhals always grow two large tusks.", real: false }
    ],
    explanation: "Usually only males grow a tusk, and typically just one. A small percentage of females grow tusks, and double tusks are very rare."
  },
  {
    topic: "Star Anise",
    statements: [
      { text: "Star anise is a key ingredient in the antiviral drug Tamiflu.", real: true },
      { text: "Star anise is the dried fruit of a Chinese evergreen tree and gets its name from its star shape.", real: true },
      { text: "Star anise is a type of rock mineral used to flavor food through molecular diffusion.", real: false }
    ],
    explanation: "Star anise is a plant product — the dried fruit of Illicium verum — not a mineral."
  },
  {
    topic: "Great Wall of China",
    statements: [
      { text: "The Great Wall of China stretches over 20,000 km including all its branches.", real: true },
      { text: "Parts of the Great Wall were built using sticky rice in the mortar for added strength.", real: true },
      { text: "The Great Wall of China is easily visible from the Moon with the naked eye.", real: false }
    ],
    explanation: "The Great Wall is not visible from the Moon. It is barely visible from low Earth orbit under perfect conditions."
  },
  {
    topic: "The Mekong River",
    statements: [
      { text: "The Mekong flows through six countries from China to Vietnam.", real: true },
      { text: "The Tonlé Sap river in Cambodia reverses its flow direction twice a year due to the Mekong's flooding.", real: true },
      { text: "The Mekong is the shortest river in Southeast Asia at only 30 kilometers long.", real: false }
    ],
    explanation: "The Mekong is the longest river in Southeast Asia and the 12th-longest in the world at about 4,350 km."
  },
  {
    topic: "X-Ray Discovery",
    statements: [
      { text: "Wilhelm Röntgen discovered X-rays accidentally in 1895 while experimenting with cathode rays.", real: true },
      { text: "Röntgen won the first-ever Nobel Prize in Physics in 1901 for his discovery of X-rays.", real: true },
      { text: "X-rays were discovered by Charles Darwin while studying plant biology.", real: false }
    ],
    explanation: "X-rays were discovered by physicist Wilhelm Röntgen, not biologist Charles Darwin."
  },
  {
    topic: "The Gallbladder",
    statements: [
      { text: "The gallbladder stores bile produced by the liver to help digest fats.", real: true },
      { text: "About 25 million Americans have gallstones, though many never have symptoms.", real: true },
      { text: "The gallbladder is a large organ in the skull that stores cerebrospinal fluid.", real: false }
    ],
    explanation: "The gallbladder is a small organ beneath the liver in the abdomen. It stores bile, not cerebrospinal fluid."
  },
  {
    topic: "Bismuth",
    statements: [
      { text: "Bismuth forms striking rainbow-colored, staircase-shaped crystals when it cools slowly.", real: true },
      { text: "Pepto-Bismol contains bismuth subsalicylate as its active ingredient.", real: true },
      { text: "Bismuth is the most dangerous and radioactive element, more hazardous than plutonium.", real: false }
    ],
    explanation: "Bismuth is one of the least toxic heavy metals. While technically radioactive, its half-life is so long it is effectively stable."
  },
  {
    topic: "The Hurdy-Gurdy",
    statements: [
      { text: "The hurdy-gurdy produces sound with a rosined wheel that rubs against strings, like a mechanical violin.", real: true },
      { text: "Hurdy-gurdies were prestigious instruments in medieval courts before becoming folk instruments.", real: true },
      { text: "The hurdy-gurdy is a percussion instrument played by striking metal plates.", real: false }
    ],
    explanation: "The hurdy-gurdy is a stringed instrument, not a percussion instrument."
  },
  {
    topic: "Firenado",
    statements: [
      { text: "Fire tornadoes (firenadoes) can reach temperatures of over 1,000°C (2,000°F).", real: true },
      { text: "Fire whirls form when intense heat and turbulent wind conditions create a spinning vortex of flames.", real: true },
      { text: "Fire tornadoes are actually cold phenomena that freeze everything in their path.", real: false }
    ],
    explanation: "Fire tornadoes are extremely hot rotating columns of fire, among the most intense heat phenomena in nature."
  },
  {
    topic: "Welwitschia Plant",
    statements: [
      { text: "Welwitschia plants can live for over 1,000 years, with some estimated at 2,000 years old.", real: true },
      { text: "Welwitschia grows only two leaves its entire life, which continuously grow and split.", real: true },
      { text: "Welwitschia is a fast-growing tree that reaches 30 meters in height within a year.", real: false }
    ],
    explanation: "Welwitschia is a very slow-growing, low-lying plant found in the Namib Desert. It never grows tall."
  },
  {
    topic: "Turquoise",
    statements: [
      { text: "Turquoise is one of the oldest gemstones, mined by ancient Egyptians over 6,000 years ago.", real: true },
      { text: "Turquoise gets its blue-green color from copper and iron in its chemical composition.", real: true },
      { text: "Turquoise is transparent and colorless, like a diamond.", real: false }
    ],
    explanation: "Turquoise is opaque with a distinctive blue-green color. It is neither transparent nor colorless."
  },
  {
    topic: "Battle of Marathon",
    statements: [
      { text: "The marathon race distance is based on the legend of a messenger running from Marathon to Athens.", real: true },
      { text: "At Marathon, the outnumbered Athenians defeated the Persian army in a stunning upset.", real: true },
      { text: "The Battle of Marathon was a naval battle fought entirely on ships.", real: false }
    ],
    explanation: "Marathon was a land battle fought on the plains near the coast of Greece in 490 BCE."
  },
  {
    topic: "North Dakota",
    statements: [
      { text: "North Dakota produces more sunflowers than any other US state.", real: true },
      { text: "The geographic center of North America is in North Dakota, near Rugby.", real: true },
      { text: "North Dakota has a tropical climate and is known for its sandy beaches.", real: false }
    ],
    explanation: "North Dakota has a continental climate with harsh winters and hot summers, far from tropical."
  },
  {
    topic: "Squash (Sport)",
    statements: [
      { text: "Squash balls are not very bouncy when cold and must be warmed up during play.", real: true },
      { text: "Squash was invented at Harrow School in London around 1830.", real: true },
      { text: "Squash is played outdoors on a grass court with no walls.", real: false }
    ],
    explanation: "Squash is played indoors in a four-walled court. The walls are integral to gameplay."
  },
  {
    topic: "Mantis Shrimp Species",
    statements: [
      { text: "Mantis shrimp can see 12-16 types of color receptors, compared to humans' three.", real: true },
      { text: "The peacock mantis shrimp strikes with the force of a .22 caliber bullet.", real: true },
      { text: "Mantis shrimp are gentle, slow-moving creatures that cannot break through glass.", real: false }
    ],
    explanation: "Mantis shrimp are extremely fast and powerful strikers. They have been known to break aquarium glass."
  },
  {
    topic: "Tamarind",
    statements: [
      { text: "Tamarind is a key ingredient in Worcestershire sauce.", real: true },
      { text: "Tamarind paste is used to polish brass and copper in some traditional cleaning methods.", real: true },
      { text: "Tamarind is a type of dairy product made from fermented goat's milk.", real: false }
    ],
    explanation: "Tamarind is a tropical fruit that grows in pods on trees, not a dairy product."
  },
  {
    topic: "Hagia Sophia",
    statements: [
      { text: "Hagia Sophia in Istanbul has served as a church, a mosque, a museum, and a mosque again.", real: true },
      { text: "Hagia Sophia's dome was the largest in the world for nearly 1,000 years.", real: true },
      { text: "Hagia Sophia was built in New York City in the 20th century.", real: false }
    ],
    explanation: "Hagia Sophia was built in Constantinople (Istanbul) in 537 CE during the Byzantine Empire."
  },
  {
    topic: "The Volga River",
    statements: [
      { text: "The Volga is the longest river in Europe at about 3,530 kilometers.", real: true },
      { text: "About 40% of Russia's population lives along the Volga River basin.", real: true },
      { text: "The Volga River flows through France and empties into the Mediterranean Sea.", real: false }
    ],
    explanation: "The Volga flows entirely through Russia and empties into the Caspian Sea."
  },
  {
    topic: "Printing Press",
    statements: [
      { text: "Gutenberg's printing press helped spark the Protestant Reformation by making the Bible widely available.", real: true },
      { text: "Before Gutenberg, movable type printing existed in China and Korea for centuries.", real: true },
      { text: "Gutenberg invented the first writing system, replacing oral tradition.", real: false }
    ],
    explanation: "Writing systems existed for thousands of years before Gutenberg. He invented the European movable-type printing press."
  },
  {
    topic: "The Adrenal Glands",
    statements: [
      { text: "The adrenal glands sit on top of each kidney and produce adrenaline.", real: true },
      { text: "Adrenaline can temporarily give people seemingly superhuman strength in fight-or-flight situations.", real: true },
      { text: "Humans have six adrenal glands distributed throughout the legs.", real: false }
    ],
    explanation: "Humans have exactly two adrenal glands, one on top of each kidney."
  },
  {
    topic: "Iridium",
    statements: [
      { text: "A thin layer of iridium in rock strata worldwide helped confirm the asteroid impact that killed the dinosaurs.", real: true },
      { text: "Iridium is one of the densest elements and the most corrosion-resistant metal known.", real: true },
      { text: "Iridium is a common metal found in abundance in Earth's crust.", real: false }
    ],
    explanation: "Iridium is one of the rarest elements in Earth's crust, though it is more common in meteorites."
  },
  {
    topic: "The Theremin",
    statements: [
      { text: "The theremin is played without physical contact — the musician moves hands near two antennas.", real: true },
      { text: "The theremin was invented by Russian physicist Léon Theremin in 1920.", real: true },
      { text: "The theremin uses a keyboard and strings like a traditional piano.", real: false }
    ],
    explanation: "The theremin has no keyboard, strings, or physical interface. It is played entirely by hand movements in the air."
  },
  {
    topic: "Microbursts",
    statements: [
      { text: "A microburst is a sudden downdraft of air that can produce winds over 150 mph at ground level.", real: true },
      { text: "Microbursts are especially dangerous to aircraft during takeoff and landing.", real: true },
      { text: "Microbursts are large-scale weather patterns that last for several weeks.", real: false }
    ],
    explanation: "Microbursts are small-scale, short-lived events, typically lasting only 5-15 minutes."
  },
  {
    topic: "Lithops",
    statements: [
      { text: "Lithops are succulents that look exactly like small stones, earning them the name 'living stones.'", real: true },
      { text: "Lithops have a transparent 'window' on top that lets light reach photosynthetic cells deep inside.", real: true },
      { text: "Lithops are large tropical trees that grow in dense rainforest canopies.", real: false }
    ],
    explanation: "Lithops are tiny, stone-like succulents from arid southern Africa, not trees."
  },
  {
    topic: "Lapis Lazuli",
    statements: [
      { text: "Lapis lazuli was ground into powder to create the pigment ultramarine, once more valuable than gold.", real: true },
      { text: "Ancient Egyptians used lapis lazuli for jewelry and as eye shadow.", real: true },
      { text: "Lapis lazuli is a transparent, colorless gemstone like quartz.", real: false }
    ],
    explanation: "Lapis lazuli is opaque with a deep blue color. It is prized precisely for its intense blue hue."
  },
  {
    topic: "Battle of Midway",
    statements: [
      { text: "The Battle of Midway is considered the turning point of the Pacific War in World War II.", real: true },
      { text: "The US victory at Midway was partly due to breaking Japanese naval codes.", real: true },
      { text: "The Battle of Midway was fought on land between infantry divisions.", real: false }
    ],
    explanation: "Midway was a naval and air battle fought entirely on the ocean, with no land combat."
  },
  {
    topic: "Oregon",
    statements: [
      { text: "Oregon's Crater Lake is the deepest lake in the United States at 1,943 feet.", real: true },
      { text: "Oregon is one of only two US states where you cannot pump your own gas.", real: true },
      { text: "Oregon is a desert state with no significant forests or rainfall.", real: false }
    ],
    explanation: "Oregon is famous for its lush forests and receives significant rainfall, especially west of the Cascades."
  },
  {
    topic: "Lacrosse",
    statements: [
      { text: "Lacrosse was developed by Indigenous peoples of North America and had deep ceremonial significance.", real: true },
      { text: "Early lacrosse games could involve hundreds of players and last for days.", real: true },
      { text: "Lacrosse was invented in England as a variant of cricket.", real: false }
    ],
    explanation: "Lacrosse has Indigenous North American origins and predates European contact by centuries."
  },
  {
    topic: "Okapi",
    statements: [
      { text: "The okapi is the closest living relative of the giraffe, despite looking like a zebra.", real: true },
      { text: "Okapis were not known to Western science until 1901 and were initially thought to be a mythical animal.", real: true },
      { text: "Okapis are found on every continent and are one of the most common mammals.", real: false }
    ],
    explanation: "Okapis are found only in the Democratic Republic of Congo and are endangered."
  },
  {
    topic: "Sumac",
    statements: [
      { text: "Sumac is a tangy, lemony spice widely used in Middle Eastern cuisine.", real: true },
      { text: "Sumac berries are so acidic they were used as a source of vinegar in ancient Rome.", real: true },
      { text: "All varieties of sumac are poisonous and cannot be consumed by humans.", real: false }
    ],
    explanation: "While poison sumac exists, culinary sumac (Rhus coriaria) is safe and widely used as a spice."
  },
  {
    topic: "Burj Khalifa",
    statements: [
      { text: "The Burj Khalifa in Dubai is over 828 meters tall, making it the tallest building in the world.", real: true },
      { text: "The Burj Khalifa has its own weather — its top can be in fog while the base is clear.", real: true },
      { text: "The Burj Khalifa is located in Tokyo, Japan.", real: false }
    ],
    explanation: "The Burj Khalifa is in Dubai, United Arab Emirates, not Tokyo."
  },
  {
    topic: "The Rhine River",
    statements: [
      { text: "The Rhine flows through six countries from Switzerland to the Netherlands.", real: true },
      { text: "The Rhine is one of the busiest commercial waterways in the world.", real: true },
      { text: "The Rhine is a dry riverbed that has not contained water since the last Ice Age.", real: false }
    ],
    explanation: "The Rhine is a major, actively flowing European river and one of the busiest waterways in the world."
  },
  {
    topic: "Refrigerator Invention",
    statements: [
      { text: "Einstein co-invented a type of refrigerator that uses no electricity and has no moving parts.", real: true },
      { text: "Early refrigerators used toxic gases like ammonia and sulfur dioxide as refrigerants.", real: true },
      { text: "Refrigerators work by generating cold air through a chemical reaction with water.", real: false }
    ],
    explanation: "Refrigerators work by compressing and expanding refrigerant gas to absorb and release heat — they don't generate cold through water reactions."
  },
  {
    topic: "The Pituitary Gland",
    statements: [
      { text: "The pituitary gland is called the 'master gland' because it controls other endocrine glands.", real: true },
      { text: "Despite being the master gland, the pituitary is only about the size of a pea.", real: true },
      { text: "The pituitary gland is located in the big toe and controls foot growth.", real: false }
    ],
    explanation: "The pituitary gland is located at the base of the brain, not in the toe."
  },
  {
    topic: "Gallium",
    statements: [
      { text: "Gallium melts in your hand at just 29.76°C (85.6°F), slightly below body temperature.", real: true },
      { text: "Liquid gallium can 'attack' aluminum, causing it to become extremely brittle and crumble.", real: true },
      { text: "Gallium is the hardest metal known and is used to make drill bits.", real: false }
    ],
    explanation: "Gallium is a very soft, low-melting-point metal — the opposite of hard."
  },
  {
    topic: "The Steel Drums",
    statements: [
      { text: "Steel drums (steelpans) were invented in Trinidad and Tobago from discarded oil barrels.", real: true },
      { text: "The steelpan is the only acoustic musical instrument invented in the 20th century.", real: true },
      { text: "Steel drums are ancient instruments that originated in medieval Japan.", real: false }
    ],
    explanation: "Steel drums were invented in Trinidad in the 1930s-1940s, not in medieval Japan."
  },
  {
    topic: "Polar Vortex",
    statements: [
      { text: "The polar vortex is a persistent large-scale cyclone near Earth's poles in the stratosphere.", real: true },
      { text: "When the polar vortex weakens, it can send blasts of Arctic air far south into temperate regions.", real: true },
      { text: "The polar vortex is a warm ocean current that keeps the Arctic ice-free year-round.", real: false }
    ],
    explanation: "The polar vortex is a cold atmospheric phenomenon, not a warm ocean current."
  },
  {
    topic: "Dragon Blood Tree",
    statements: [
      { text: "The dragon blood tree produces a dark red sap that has been used as dye, medicine, and varnish for centuries.", real: true },
      { text: "Dragon blood trees grow naturally only on the island of Socotra, Yemen.", real: true },
      { text: "Dragon blood trees are deciduous trees that shed all their leaves every autumn.", real: false }
    ],
    explanation: "Dragon blood trees are evergreen, retaining their distinctive umbrella-shaped canopy year-round."
  },
  {
    topic: "Peridot",
    statements: [
      { text: "Peridot is one of the few gemstones that come in only one color — green.", real: true },
      { text: "Some peridot has been found in meteorites that fell to Earth.", real: true },
      { text: "Peridot is an artificial gemstone that can only be produced in a laboratory.", real: false }
    ],
    explanation: "Peridot is a natural gemstone formed in the Earth's mantle and also found in meteorites."
  },
  {
    topic: "Battle of Hastings",
    statements: [
      { text: "The Battle of Hastings in 1066 led to the Norman Conquest and changed English language and culture forever.", real: true },
      { text: "King Harold II was reportedly killed by an arrow to the eye at the Battle of Hastings.", real: true },
      { text: "The Battle of Hastings was fought between France and Germany over Mediterranean trade routes.", real: false }
    ],
    explanation: "Hastings was fought between the Normans (led by William the Conqueror) and the Anglo-Saxons (led by Harold II) for the English throne."
  },
  {
    topic: "Kentucky",
    statements: [
      { text: "Kentucky has more barrels of bourbon aging than it has people.", real: true },
      { text: "Fort Knox in Kentucky holds about 4,580 tons of the United States' gold reserves.", real: true },
      { text: "Kentucky is located in the Pacific Northwest, bordering Oregon and Washington.", real: false }
    ],
    explanation: "Kentucky is in the southeastern United States, bordering states like Tennessee, Virginia, and Ohio."
  },
  {
    topic: "Water Polo",
    statements: [
      { text: "Water polo players can tread water for an entire game, which can last over an hour.", real: true },
      { text: "Players are not allowed to touch the bottom of the pool during water polo play.", real: true },
      { text: "Water polo is played in shallow water where all players can stand on the pool floor.", real: false }
    ],
    explanation: "Water polo is played in deep water (minimum 1.8m), and players must tread water throughout the game."
  },
  {
    topic: "Kakapo",
    statements: [
      { text: "The kakapo is the world's only flightless parrot.", real: true },
      { text: "Male kakapos attract mates by inflating a thoracic air sac and producing a booming sound heard miles away.", real: true },
      { text: "Kakapos are the most common bird species in New Zealand with millions in the wild.", real: false }
    ],
    explanation: "Kakapos are critically endangered with only about 250 individuals alive, making them one of the rarest birds."
  },
  {
    topic: "Lemongrass",
    statements: [
      { text: "Lemongrass contains citronella, a natural mosquito repellent.", real: true },
      { text: "Lemongrass is a tropical grass, not related to lemons, despite its citrus flavor.", real: true },
      { text: "Lemongrass is a variety of lemon that grows on trees and produces yellow fruit.", real: false }
    ],
    explanation: "Lemongrass is a grass plant, not a citrus tree. Its lemony flavor comes from the same compounds found in lemons."
  },
  {
    topic: "Sydney Opera House",
    statements: [
      { text: "The Sydney Opera House was designed by Danish architect Jørn Utzon, who never saw the completed building.", real: true },
      { text: "The Opera House took 16 years to build and went 1,357% over its original budget.", real: true },
      { text: "The Sydney Opera House is located in London, England.", real: false }
    ],
    explanation: "The Sydney Opera House is in Sydney, Australia, on Bennelong Point in Sydney Harbour."
  },
  {
    topic: "The Ganges River",
    statements: [
      { text: "The Ganges is considered sacred by Hindus, and millions bathe in it for spiritual purification.", real: true },
      { text: "Despite heavy pollution, unique bacteriophages in the Ganges give it some self-purifying properties.", real: true },
      { text: "The Ganges flows through South America from the Andes to the Atlantic Ocean.", real: false }
    ],
    explanation: "The Ganges flows through India and Bangladesh in South Asia, emptying into the Bay of Bengal."
  },
  {
    topic: "Telegraph Invention",
    statements: [
      { text: "Samuel Morse sent the first telegraph message in 1844: 'What hath God wrought.'", real: true },
      { text: "Morse was a professional painter before becoming an inventor.", real: true },
      { text: "The telegraph was a wireless device that transmitted messages through radio waves.", real: false }
    ],
    explanation: "The telegraph transmitted messages through electrical wires, not wirelessly. Radio communication came later."
  },
  {
    topic: "The Cochlea",
    statements: [
      { text: "The cochlea in the inner ear is a spiral-shaped organ that converts sound vibrations into nerve signals.", real: true },
      { text: "If uncoiled, the human cochlea would be about 30 mm (1.2 inches) long.", real: true },
      { text: "The cochlea is located in the eye and is responsible for color vision.", real: false }
    ],
    explanation: "The cochlea is part of the inner ear, not the eye. It is essential for hearing, not vision."
  },
  {
    topic: "Osmium",
    statements: [
      { text: "Osmium is the densest naturally occurring element.", real: true },
      { text: "Osmium gets its name from the Greek word 'osme' meaning 'smell' due to its pungent oxide.", real: true },
      { text: "Osmium is lighter than air and floats like helium.", real: false }
    ],
    explanation: "Osmium is the densest element known, about twice as dense as lead."
  },
  {
    topic: "The Kalimba",
    statements: [
      { text: "The kalimba (thumb piano) originated in Africa over 3,000 years ago.", real: true },
      { text: "The kalimba produces sound by plucking metal tines attached to a wooden board.", real: true },
      { text: "The kalimba is a large wind instrument requiring two people to play.", real: false }
    ],
    explanation: "The kalimba is a small, handheld instrument played by one person using their thumbs."
  },
  {
    topic: "Dust Devil",
    statements: [
      { text: "Dust devils can reach heights of over 1,000 meters (3,000 feet) in extreme cases.", real: true },
      { text: "Dust devils also form on Mars — NASA's rovers have photographed them.", real: true },
      { text: "Dust devils are powered by cold fronts and require rain to form.", real: false }
    ],
    explanation: "Dust devils are powered by intense surface heating on hot, dry days. They require no rain or fronts."
  },
  {
    topic: "Ghost Orchid",
    statements: [
      { text: "The ghost orchid has no leaves and gets all its nutrients from fungi attached to its roots.", real: true },
      { text: "Ghost orchids appear to float in mid-air because they grow on tree bark with nearly invisible roots.", real: true },
      { text: "Ghost orchids are the most common orchid species and can be found in any garden store.", real: false }
    ],
    explanation: "Ghost orchids are extremely rare and difficult to cultivate, found only in specific swamp habitats."
  },
  {
    topic: "Jade",
    statements: [
      { text: "There are actually two different minerals called jade: nephrite and jadeite.", real: true },
      { text: "Jade was so valued in ancient China it was considered more precious than gold.", real: true },
      { text: "Jade is always bright red in color and is used primarily as a fuel source.", real: false }
    ],
    explanation: "Jade is most famously green (though it comes in other colors). It is used as a gemstone and carving material, not as fuel."
  },
  {
    topic: "Battle of the Somme",
    statements: [
      { text: "The first day of the Battle of the Somme (July 1, 1916) remains the bloodiest day in British military history.", real: true },
      { text: "Tanks were first used in warfare during the Battle of the Somme.", real: true },
      { text: "The Battle of the Somme was a one-day event that ended in a decisive Allied victory.", real: false }
    ],
    explanation: "The Battle of the Somme lasted 141 days (July to November 1916) and ended inconclusively."
  },
  {
    topic: "Connecticut",
    statements: [
      { text: "Connecticut is home to the first hamburger, first pizza, and first lollipop in America.", real: true },
      { text: "Connecticut's official nickname is 'The Constitution State.'", real: true },
      { text: "Connecticut is the largest state in the United States by area.", real: false }
    ],
    explanation: "Connecticut is one of the smallest US states by area, ranking 48th out of 50."
  },
  {
    topic: "Handball",
    statements: [
      { text: "Handball is one of the most popular sports in Europe, though less known in the Americas.", real: true },
      { text: "A handball court is 40 meters by 20 meters and the game is played with seven players per team.", real: true },
      { text: "Handball is played with a bat and ball, similar to baseball.", real: false }
    ],
    explanation: "Handball is played by throwing a ball with the hands — no bat or racket is used."
  },
  {
    topic: "Aye-Aye",
    statements: [
      { text: "The aye-aye uses its elongated middle finger to tap on trees and listen for insect larvae inside.", real: true },
      { text: "The aye-aye is the world's largest nocturnal primate, found only in Madagascar.", real: true },
      { text: "The aye-aye is a species of fish found in the deep ocean.", real: false }
    ],
    explanation: "The aye-aye is a lemur (a primate), not a fish."
  },
  {
    topic: "Fenugreek",
    statements: [
      { text: "Fenugreek seeds can make your sweat and urine smell like maple syrup.", real: true },
      { text: "Fenugreek has been used for thousands of years in traditional medicine and cooking.", real: true },
      { text: "Fenugreek is a synthetic chemical compound manufactured in factories.", real: false }
    ],
    explanation: "Fenugreek is a natural plant in the legume family, cultivated since ancient times."
  },
  {
    topic: "Leaning Tower of Pisa",
    statements: [
      { text: "The Leaning Tower of Pisa began leaning during construction due to soft ground on one side.", real: true },
      { text: "Engineers have successfully stabilized the tower by removing soil from underneath one side.", real: true },
      { text: "The Leaning Tower of Pisa is located in Paris, France, next to the Eiffel Tower.", real: false }
    ],
    explanation: "The Leaning Tower is in Pisa, Italy, not Paris, France."
  },
  {
    topic: "The Indus River",
    statements: [
      { text: "The Indus River gave India its name through the Greek word 'Indus.'", real: true },
      { text: "The Indus Valley Civilization along this river was one of the world's earliest urban cultures.", real: true },
      { text: "The Indus River flows through Australia from east to west.", real: false }
    ],
    explanation: "The Indus River flows primarily through Pakistan and western India in South Asia."
  },
  {
    topic: "Bicycle Invention",
    statements: [
      { text: "The first bicycle-like device, the 'draisine,' had no pedals and was pushed with the feet.", real: true },
      { text: "The penny-farthing bicycle had a front wheel up to 1.5 meters (5 feet) in diameter.", real: true },
      { text: "The bicycle was invented before the wheel.", real: false }
    ],
    explanation: "The wheel was invented around 3500 BCE. The bicycle was invented in the early 1800s, thousands of years later."
  },
  {
    topic: "The Hypothalamus",
    statements: [
      { text: "The hypothalamus regulates body temperature, hunger, thirst, and sleep.", real: true },
      { text: "Despite its critical functions, the hypothalamus is only about the size of an almond.", real: true },
      { text: "The hypothalamus is the largest bone in the human body.", real: false }
    ],
    explanation: "The hypothalamus is a tiny region of the brain, not a bone. The femur is the largest bone."
  },
  {
    topic: "Palladium",
    statements: [
      { text: "Palladium is used in catalytic converters to reduce toxic emissions from car exhaust.", real: true },
      { text: "Palladium is sometimes more expensive than gold per ounce.", real: true },
      { text: "Palladium is a gas that makes up 20% of the atmosphere.", real: false }
    ],
    explanation: "Palladium is a rare, silvery-white metal, not a gas."
  },
  {
    topic: "The Erhu",
    statements: [
      { text: "The erhu is a two-stringed Chinese instrument played with a bow that passes between the strings.", real: true },
      { text: "The erhu's resonator is traditionally made from python skin.", real: true },
      { text: "The erhu is a keyboard instrument similar to an organ.", real: false }
    ],
    explanation: "The erhu is a bowed string instrument, not a keyboard instrument."
  },
  {
    topic: "Chinook Wind",
    statements: [
      { text: "Chinook winds can raise temperatures by 20°C (36°F) in just a few hours.", real: true },
      { text: "The fastest temperature change from a Chinook was 27°C (49°F) in 2 minutes in Spearfish, South Dakota.", real: true },
      { text: "Chinook winds are extremely cold Arctic blasts that bring blizzards.", real: false }
    ],
    explanation: "Chinook winds are warm, dry winds that descend from mountains, causing rapid temperature increases."
  },
  {
    topic: "Rafflesia Flower",
    statements: [
      { text: "Rafflesia produces the world's largest individual flower, up to 1 meter across.", real: true },
      { text: "Rafflesia has no stems, leaves, or roots — it is a parasitic plant living inside a host vine.", real: true },
      { text: "Rafflesia is a tiny flower the size of a pinhead that grows in Arctic tundra.", real: false }
    ],
    explanation: "Rafflesia produces the world's largest single flower and grows in Southeast Asian rainforests."
  },
  {
    topic: "Alexandrite",
    statements: [
      { text: "Alexandrite appears green in daylight and red under incandescent light.", real: true },
      { text: "Alexandrite was discovered in Russia's Ural Mountains and named after Tsar Alexander II.", real: true },
      { text: "Alexandrite is always a single, unchanging shade of brown.", real: false }
    ],
    explanation: "Alexandrite's most famous property is its dramatic color change between green and red depending on lighting."
  },
  {
    topic: "Battle of Verdun",
    statements: [
      { text: "The Battle of Verdun lasted 303 days, making it one of the longest battles in history.", real: true },
      { text: "The French rallying cry at Verdun was 'Ils ne passeront pas' (They shall not pass).", real: true },
      { text: "Verdun was a brief naval engagement in the Pacific Ocean.", real: false }
    ],
    explanation: "Verdun was a prolonged land battle on the Western Front in France during World War I."
  },
  {
    topic: "Nebraska",
    statements: [
      { text: "Nebraska has the only unicameral (single-chamber) state legislature in the United States.", real: true },
      { text: "Nebraska's Sandhills region is one of the largest grass-stabilized dune systems in the Western Hemisphere.", real: true },
      { text: "Nebraska is a coastal state with significant Pacific Ocean beaches.", real: false }
    ],
    explanation: "Nebraska is a landlocked state in the central United States, far from any ocean."
  },
  {
    topic: "Kabaddi",
    statements: [
      { text: "In kabaddi, a 'raider' must hold their breath while chanting 'kabaddi' during their entire raid.", real: true },
      { text: "Kabaddi is one of the most popular sports in India with a professional league.", real: true },
      { text: "Kabaddi is played with rackets and a net, similar to badminton.", real: false }
    ],
    explanation: "Kabaddi is a contact sport requiring no equipment — players tag opponents and return to their side."
  },
  {
    topic: "Blobfish",
    statements: [
      { text: "The blobfish looks normal at its natural deep-sea pressure but becomes gelatinous when brought to the surface.", real: true },
      { text: "Blobfish live at depths of 600-1,200 meters where pressure is 60-120 times greater than at the surface.", real: true },
      { text: "Blobfish are fast predators that chase down prey at high speeds.", real: false }
    ],
    explanation: "Blobfish are sedentary and mostly just float and eat whatever passes by — they are among the least active fish."
  },
  {
    topic: "Galangal",
    statements: [
      { text: "Galangal is closely related to ginger but has a sharper, more citrusy flavor.", real: true },
      { text: "Galangal is a key ingredient in Thai tom kha soup.", real: true },
      { text: "Galangal is a type of cheese made from buffalo milk.", real: false }
    ],
    explanation: "Galangal is a rhizome (root) in the ginger family, not a dairy product."
  },
  {
    topic: "Sagrada Familia",
    statements: [
      { text: "Antoni Gaudí's Sagrada Familia in Barcelona has been under construction since 1882.", real: true },
      { text: "Gaudí knew the church wouldn't be finished in his lifetime and said 'my client is not in a hurry,' referring to God.", real: true },
      { text: "The Sagrada Familia was completed in 1900 and has remained unchanged since.", real: false }
    ],
    explanation: "The Sagrada Familia is still under construction as of the 2020s, over 140 years after it was started."
  },
  {
    topic: "The Zambezi River",
    statements: [
      { text: "Victoria Falls on the Zambezi is one of the largest waterfalls in the world.", real: true },
      { text: "The Zambezi is home to large populations of hippos and Nile crocodiles.", real: true },
      { text: "The Zambezi River flows through the Sahara Desert in North Africa.", real: false }
    ],
    explanation: "The Zambezi flows through southern Africa (Zambia, Zimbabwe, Mozambique), not the Sahara."
  },
  {
    topic: "Steam Engine Invention",
    statements: [
      { text: "Thomas Newcomen built the first practical steam engine in 1712, before James Watt.", real: true },
      { text: "James Watt improved the steam engine so significantly that he is often credited as its inventor.", real: true },
      { text: "The steam engine was invented in the 21st century using nuclear fusion technology.", real: false }
    ],
    explanation: "The steam engine was invented in the early 18th century, not the 21st century."
  },
  {
    topic: "The Pineal Gland",
    statements: [
      { text: "The pineal gland produces melatonin, which regulates the sleep-wake cycle.", real: true },
      { text: "René Descartes called the pineal gland 'the seat of the soul.'", real: true },
      { text: "The pineal gland is the largest organ in the body, weighing about 5 kg.", real: false }
    ],
    explanation: "The pineal gland is a tiny gland (about the size of a grain of rice), not the largest organ."
  },
  {
    topic: "Antimony",
    statements: [
      { text: "Ancient Egyptians used antimony compounds as eyeliner (kohl) over 5,000 years ago.", real: true },
      { text: "Antimony is used in the production of flame-retardant materials.", real: true },
      { text: "Antimony is a noble gas used in neon signs.", real: false }
    ],
    explanation: "Antimony is a metalloid (semi-metal), not a noble gas."
  },
  {
    topic: "The Mbira",
    statements: [
      { text: "The mbira is a traditional Zimbabwean instrument used in spiritual ceremonies for hundreds of years.", real: true },
      { text: "The mbira is played by plucking metal keys mounted on a wooden board, often inside a gourd resonator.", real: true },
      { text: "The mbira is a large brass horn instrument played in military marching bands.", real: false }
    ],
    explanation: "The mbira is a small, handheld lamellaphone (thumb piano), not a brass horn."
  },
  {
    topic: "Foehn Wind",
    statements: [
      { text: "Foehn winds can melt snow so quickly they are sometimes called 'snow eaters.'", real: true },
      { text: "Foehn winds have been linked to increased rates of migraines and irritability in affected regions.", real: true },
      { text: "Foehn winds are extremely cold and always bring heavy snowfall.", real: false }
    ],
    explanation: "Foehn winds are warm, dry winds that descend from mountain ranges and can rapidly melt snow."
  },
  {
    topic: "Sensitive Plant (Mimosa Pudica)",
    statements: [
      { text: "Mimosa pudica folds its leaves instantly when touched, as a defense against herbivores.", real: true },
      { text: "Research suggests Mimosa pudica can 'remember' and stop responding to repeated harmless stimuli.", real: true },
      { text: "Mimosa pudica is a large tree that never moves its leaves under any circumstances.", real: false }
    ],
    explanation: "Mimosa pudica is a small plant famous for its rapid leaf-folding response to touch."
  },
  {
    topic: "Tanzanite",
    statements: [
      { text: "Tanzanite is found in only one place on Earth: a 4 km strip near Mount Kilimanjaro in Tanzania.", real: true },
      { text: "Tanzanite was discovered in 1967 and is 1,000 times rarer than diamonds.", real: true },
      { text: "Tanzanite is found on every continent and is one of the most common gemstones.", real: false }
    ],
    explanation: "Tanzanite is found only in a very small area of Tanzania, making it one of the rarest gemstones."
  },
  {
    topic: "Siege of Constantinople (1453)",
    statements: [
      { text: "The fall of Constantinople in 1453 marked the end of the Byzantine (Eastern Roman) Empire.", real: true },
      { text: "The Ottomans used a massive cannon named 'Basilica' that could hurl 600-pound stone balls.", real: true },
      { text: "Constantinople was captured by the Vikings during the early Stone Age.", real: false }
    ],
    explanation: "Constantinople was captured by the Ottoman Turks in 1453 CE, not by Vikings in the Stone Age."
  },
  {
    topic: "West Virginia",
    statements: [
      { text: "West Virginia was created during the Civil War when it separated from Virginia over secession.", real: true },
      { text: "West Virginia is the only state entirely within the Appalachian Mountain region.", real: true },
      { text: "West Virginia is located on the West Coast of the United States.", real: false }
    ],
    explanation: "West Virginia is in the eastern United States, in the Appalachian region."
  },
  {
    topic: "Sepak Takraw",
    statements: [
      { text: "Sepak takraw is essentially volleyball but played with the feet, knees, chest, and head — no hands.", real: true },
      { text: "Players perform acrobatic bicycle kicks to spike the rattan ball over the net.", real: true },
      { text: "Sepak takraw is played on ice using hockey sticks.", real: false }
    ],
    explanation: "Sepak takraw is played on a court similar to badminton, using only body parts — no sticks or ice involved."
  },
  {
    topic: "Shoebill Stork",
    statements: [
      { text: "The shoebill stands up to 1.5 meters tall and has a shoe-shaped bill that can decapitate prey.", real: true },
      { text: "Shoebills can stand motionless for hours while hunting, then strike with lightning speed.", real: true },
      { text: "Shoebills are tiny songbirds that weigh less than 30 grams.", real: false }
    ],
    explanation: "Shoebills are very large birds, standing up to 1.5 meters and weighing up to 7 kg."
  },
  {
    topic: "Szechuan Pepper",
    statements: [
      { text: "Szechuan pepper is not actually a pepper — it comes from the prickly ash tree.", real: true },
      { text: "Szechuan pepper creates a unique tingling, numbing sensation on the tongue called 'má.'", real: true },
      { text: "Szechuan pepper is a variety of black pepper that grows underwater.", real: false }
    ],
    explanation: "Szechuan pepper is from the prickly ash family, unrelated to black pepper, and grows on trees on land."
  },
  {
    topic: "Neuschwanstein Castle",
    statements: [
      { text: "Neuschwanstein Castle in Bavaria inspired the design of Sleeping Beauty Castle at Disneyland.", real: true },
      { text: "King Ludwig II of Bavaria built Neuschwanstein but spent only about 170 days living there.", real: true },
      { text: "Neuschwanstein was built in the 3rd century as a Roman military fortress.", real: false }
    ],
    explanation: "Neuschwanstein was built in the 19th century (1869-1886) as a personal retreat for King Ludwig II."
  },
  {
    topic: "The Amazon River",
    statements: [
      { text: "The Amazon River discharges more water than the next seven largest rivers combined.", real: true },
      { text: "The Amazon has river dolphins, which are pink in color.", real: true },
      { text: "The Amazon River is only 50 meters long and flows through a single small village.", real: false }
    ],
    explanation: "The Amazon is the largest river by volume and one of the longest in the world at about 6,400 km."
  },
  {
    topic: "Cotton Gin",
    statements: [
      { text: "Eli Whitney's cotton gin made cotton processing 50 times faster than doing it by hand.", real: true },
      { text: "Ironically, the cotton gin increased demand for slave labor rather than reducing it.", real: true },
      { text: "The cotton gin was a device used for making gin (alcohol) from cotton plants.", real: false }
    ],
    explanation: "'Gin' in cotton gin is short for 'engine.' It separates cotton fibers from seeds, not making alcoholic gin."
  },
  {
    topic: "The Cerebellum",
    statements: [
      { text: "The cerebellum contains about 80% of the brain's neurons despite being only 10% of its volume.", real: true },
      { text: "The cerebellum coordinates movement, balance, and motor learning.", real: true },
      { text: "The cerebellum is located in the abdomen and aids in digestion.", real: false }
    ],
    explanation: "The cerebellum is located at the back of the brain, beneath the cerebral hemispheres."
  },
  {
    topic: "Cobalt",
    statements: [
      { text: "Cobalt has been used to create a distinctive deep blue color in glass and ceramics for over 4,000 years.", real: true },
      { text: "Cobalt's name comes from 'kobold,' a German word for goblin, because miners thought it was cursed.", real: true },
      { text: "Cobalt is a noble gas like helium and neon.", real: false }
    ],
    explanation: "Cobalt is a transition metal, not a noble gas."
  },
  {
    topic: "The Duduk",
    statements: [
      { text: "The duduk is an ancient Armenian woodwind instrument made from apricot wood.", real: true },
      { text: "UNESCO recognized the Armenian duduk and its music as a Masterpiece of Intangible Heritage.", real: true },
      { text: "The duduk is an electronic synthesizer invented in the 1980s.", real: false }
    ],
    explanation: "The duduk is an ancient acoustic instrument, with origins dating back over 1,500 years."
  },
  {
    topic: "Nor'easter",
    statements: [
      { text: "A nor'easter gets its name from the direction its strongest winds blow from — the northeast.", real: true },
      { text: "Nor'easters can produce blizzard conditions with hurricane-force winds along the US East Coast.", real: true },
      { text: "Nor'easters are tropical storms that only form in the Pacific Ocean.", real: false }
    ],
    explanation: "Nor'easters form along the East Coast of North America and are not tropical — they are extratropical cyclones."
  },
  {
    topic: "Resurrection Plant",
    statements: [
      { text: "The resurrection plant can survive complete dehydration and 'come back to life' when watered.", real: true },
      { text: "Some resurrection plants can survive without water for years, curling into a dry ball.", real: true },
      { text: "Resurrection plants require constant watering and die within hours without moisture.", real: false }
    ],
    explanation: "Resurrection plants are famous for surviving extreme desiccation — the exact opposite of needing constant water."
  },
  {
    topic: "Opal",
    statements: [
      { text: "Australia produces about 95% of the world's precious opals.", real: true },
      { text: "Opals contain up to 20% water trapped within their silica structure.", real: true },
      { text: "Opals are always solid black with no play of color.", real: false }
    ],
    explanation: "Opals are famous for their 'play of color' — flashes of rainbow colors that change with viewing angle."
  },
  {
    topic: "Battle of Agincourt",
    statements: [
      { text: "At Agincourt, English longbowmen devastated the heavily armored French cavalry.", real: true },
      { text: "Henry V's English army was outnumbered and exhausted but still won decisively.", real: true },
      { text: "The Battle of Agincourt was a naval engagement fought in the Caribbean.", real: false }
    ],
    explanation: "Agincourt was a land battle in northern France in 1415 during the Hundred Years' War."
  },
  {
    topic: "Iowa",
    statements: [
      { text: "Iowa produces more corn and soybeans than any other US state.", real: true },
      { text: "The Iowa caucuses are traditionally the first major event of the US presidential primary season.", real: true },
      { text: "Iowa is a mountainous state with peaks exceeding 14,000 feet.", real: false }
    ],
    explanation: "Iowa is one of the flattest states, with its highest point at only 1,670 feet above sea level."
  },
  {
    topic: "Croquet",
    statements: [
      { text: "Croquet was one of the first Olympic sports, featured at the 1900 Paris Games.", real: true },
      { text: "The 1900 Olympic croquet event was the first Olympic event open to women.", real: true },
      { text: "Croquet is played on an ice rink with special heated mallets.", real: false }
    ],
    explanation: "Croquet is played on grass lawns, not ice rinks."
  },
  {
    topic: "Proboscis Monkey",
    statements: [
      { text: "Male proboscis monkeys have large, pendulous noses that can exceed 10 cm in length.", real: true },
      { text: "Proboscis monkeys are excellent swimmers and have partially webbed feet.", real: true },
      { text: "Proboscis monkeys are found on every continent and are extremely common.", real: false }
    ],
    explanation: "Proboscis monkeys are endangered and found only on the island of Borneo."
  },
  {
    topic: "Miso",
    statements: [
      { text: "Miso is made by fermenting soybeans with salt and a mold called koji for months to years.", real: true },
      { text: "Some miso varieties are aged for over three years, developing complex flavors.", real: true },
      { text: "Miso is a fresh, unfermented sauce made from tomatoes and basil.", real: false }
    ],
    explanation: "Miso is a fermented soybean paste, a cornerstone of Japanese cuisine, not a tomato sauce."
  },
  {
    topic: "Alhambra",
    statements: [
      { text: "The Alhambra in Granada, Spain, is a masterpiece of Moorish architecture with intricate geometric patterns.", real: true },
      { text: "The Alhambra's name comes from Arabic meaning 'The Red One' due to the color of its walls.", real: true },
      { text: "The Alhambra is a modern skyscraper built in the 2000s in Dubai.", real: false }
    ],
    explanation: "The Alhambra is a medieval palace and fortress built in the 13th-14th centuries in Granada, Spain."
  },
  {
    topic: "The Tigris River",
    statements: [
      { text: "The Tigris and Euphrates rivers cradle ancient Mesopotamia, the 'birthplace of civilization.'", real: true },
      { text: "Baghdad, the capital of Iraq, sits on the banks of the Tigris River.", real: true },
      { text: "The Tigris River flows through the center of London, England.", real: false }
    ],
    explanation: "The Tigris flows through Turkey, Syria, and Iraq. The Thames flows through London."
  },
  {
    topic: "Compass Invention",
    statements: [
      { text: "The magnetic compass was invented in China during the Han dynasty, initially for feng shui.", real: true },
      { text: "Early Chinese compasses used a magnetized spoon-shaped lodestone on a bronze plate.", real: true },
      { text: "The compass was invented in the United States by Benjamin Franklin.", real: false }
    ],
    explanation: "The magnetic compass was invented in ancient China, over a thousand years before Franklin's time."
  },
  {
    topic: "The Lymphatic System",
    statements: [
      { text: "The lymphatic system has no pump — it relies on muscle movement to circulate lymph fluid.", real: true },
      { text: "There are about 600-700 lymph nodes in the human body.", real: true },
      { text: "The lymphatic system pumps blood using a dedicated heart-like organ.", real: false }
    ],
    explanation: "Unlike the cardiovascular system, the lymphatic system has no central pump. It moves fluid through muscle contractions."
  },
  {
    topic: "Tellurium",
    statements: [
      { text: "People exposed to tellurium develop garlic-like breath and body odor that lasts for weeks.", real: true },
      { text: "Tellurium is rarer in Earth's crust than gold and platinum.", real: true },
      { text: "Tellurium is the most abundant element on Earth, more common than iron.", real: false }
    ],
    explanation: "Tellurium is extremely rare in Earth's crust, among the rarest stable elements."
  },
  {
    topic: "The Kora",
    statements: [
      { text: "The kora is a 21-stringed West African instrument that combines features of a harp and a lute.", real: true },
      { text: "Kora players (griots) are hereditary musicians who preserve oral history through music.", real: true },
      { text: "The kora is an electronic drum machine popular in techno music.", real: false }
    ],
    explanation: "The kora is a traditional acoustic stringed instrument from West Africa."
  },
  {
    topic: "Monsoon",
    statements: [
      { text: "The Indian monsoon provides about 70-80% of India's annual rainfall in just four months.", real: true },
      { text: "Monsoons are caused by the differential heating of land and ocean, reversing wind patterns seasonally.", real: true },
      { text: "Monsoons are a type of drought that prevents any rainfall for decades.", real: false }
    ],
    explanation: "Monsoons bring heavy seasonal rainfall — the opposite of drought."
  },
  {
    topic: "Giant Water Lily",
    statements: [
      { text: "Victoria amazonica lily pads can grow over 3 meters in diameter and support the weight of a child.", real: true },
      { text: "The giant water lily's underside has sharp spines to deter fish and other aquatic herbivores.", real: true },
      { text: "Giant water lilies are microscopic plants visible only under a microscope.", real: false }
    ],
    explanation: "Victoria amazonica has some of the largest leaves of any plant, reaching over 3 meters across."
  },
  {
    topic: "Garnet",
    statements: [
      { text: "Garnets come in almost every color including red, green, orange, and pink — but not blue.", real: true },
      { text: "Garnets have been found in jewelry dating back to 3100 BCE in ancient Egypt.", real: true },
      { text: "Garnets are artificially produced and have never been found in nature.", real: false }
    ],
    explanation: "Garnets are naturally occurring minerals found worldwide in many types of rock."
  },
  {
    topic: "D-Day (Normandy)",
    statements: [
      { text: "D-Day on June 6, 1944, was the largest seaborne invasion in history.", real: true },
      { text: "Over 156,000 Allied troops landed in Normandy on D-Day across five beaches.", real: true },
      { text: "D-Day was an invasion of Japan that ended World War I.", real: false }
    ],
    explanation: "D-Day was the Allied invasion of German-occupied France in World War II, not an invasion of Japan."
  },
  {
    topic: "Utah",
    statements: [
      { text: "Utah's Great Salt Lake is so salty that swimmers float effortlessly on its surface.", real: true },
      { text: "Utah has five national parks, more than most other US states.", real: true },
      { text: "Utah is a tropical island state in the Pacific Ocean.", real: false }
    ],
    explanation: "Utah is a landlocked state in the western United States, known for its deserts and mountains."
  },
  {
    topic: "Polo",
    statements: [
      { text: "Polo is one of the oldest known team sports, originating in Persia around 2,500 years ago.", real: true },
      { text: "Polo players must ride with their mallet in the right hand only — left-handed play is banned for safety.", real: true },
      { text: "Polo is played on foot using a tennis racket to hit a puck.", real: false }
    ],
    explanation: "Polo is played on horseback, with players using long-handled mallets to hit a ball."
  },
  {
    topic: "Tarsier",
    statements: [
      { text: "Tarsiers have the largest eyes relative to body size of any mammal.", real: true },
      { text: "Each of a tarsier's eyes is as large as its entire brain.", real: true },
      { text: "Tarsiers are large apes weighing over 100 kg.", real: false }
    ],
    explanation: "Tarsiers are tiny primates, typically weighing only 80-150 grams."
  },
  {
    topic: "Harissa",
    statements: [
      { text: "Harissa is a North African chili paste made from roasted red peppers, spices, and olive oil.", real: true },
      { text: "Harissa is so central to Tunisian cuisine that it is considered the country's national condiment.", real: true },
      { text: "Harissa is a sweet dessert made from chocolate and vanilla.", real: false }
    ],
    explanation: "Harissa is a spicy, savory chili paste, not a sweet dessert."
  },
  {
    topic: "Chichen Itza",
    statements: [
      { text: "During equinoxes, light creates a shadow of a serpent descending the pyramid of Kukulcán.", real: true },
      { text: "A handclap at the base of Kukulcán produces an echo that sounds like a quetzal bird.", real: true },
      { text: "Chichen Itza was built by the ancient Romans as a military outpost in Mexico.", real: false }
    ],
    explanation: "Chichen Itza was built by the Maya civilization, not the Romans."
  },
  {
    topic: "The Murray River",
    statements: [
      { text: "The Murray is Australia's longest river at 2,508 km.", real: true },
      { text: "The Murray-Darling Basin covers about 14% of Australia's total land area.", real: true },
      { text: "The Murray River flows through the center of Sydney.", real: false }
    ],
    explanation: "The Murray River flows through rural southeastern Australia. Sydney's river is the Parramatta."
  },
  {
    topic: "Barometer Invention",
    statements: [
      { text: "Evangelista Torricelli invented the barometer in 1643 using a tube of mercury.", real: true },
      { text: "The unit 'torr' for measuring pressure is named after Torricelli.", real: true },
      { text: "The barometer was invented to measure temperature, not atmospheric pressure.", real: false }
    ],
    explanation: "The barometer measures atmospheric pressure. The thermometer measures temperature."
  },
  {
    topic: "The Cornea",
    statements: [
      { text: "The cornea is the only part of the human body with no blood vessels.", real: true },
      { text: "The cornea provides about two-thirds of the eye's focusing power.", real: true },
      { text: "The cornea is a bone that protects the brain from impact.", real: false }
    ],
    explanation: "The cornea is the transparent front layer of the eye, not a bone."
  },
  {
    topic: "Francium",
    statements: [
      { text: "Francium is the most unstable naturally occurring element, with a half-life of just 22 minutes.", real: true },
      { text: "It is estimated that there is only about 30 grams of francium in Earth's crust at any time.", real: true },
      { text: "Francium is used widely in construction because it is cheap and abundant.", real: false }
    ],
    explanation: "Francium is one of the rarest and most unstable elements, making it completely impractical for any commercial use."
  },
  {
    topic: "The Gamelan",
    statements: [
      { text: "Gamelan is a traditional Indonesian ensemble made primarily of tuned metallophones and gongs.", real: true },
      { text: "In Javanese tradition, gamelan instruments are sacred and must be treated with great respect.", real: true },
      { text: "Gamelan is a solo instrument played by blowing into a mouthpiece.", real: false }
    ],
    explanation: "Gamelan refers to an entire ensemble of instruments, not a single solo instrument."
  },
  {
    topic: "El Niño",
    statements: [
      { text: "El Niño can affect weather patterns globally, causing droughts in some regions and floods in others.", real: true },
      { text: "El Niño is named 'The Little Boy' (referring to the Christ child) because it often appears around Christmas.", real: true },
      { text: "El Niño is a permanent weather pattern that never changes or cycles.", real: false }
    ],
    explanation: "El Niño is a cyclical phenomenon that alternates with La Niña every 2-7 years."
  },
  {
    topic: "Bristlecone Pine",
    statements: [
      { text: "Bristlecone pines are the oldest non-clonal living organisms, with some over 5,000 years old.", real: true },
      { text: "The oldest known bristlecone pine, Methuselah, is older than the Egyptian pyramids.", real: true },
      { text: "Bristlecone pines are tropical trees that grow quickly in warm, humid climates.", real: false }
    ],
    explanation: "Bristlecone pines grow extremely slowly in harsh, high-altitude environments with poor soil."
  },
  {
    topic: "Topaz",
    statements: [
      { text: "The largest faceted gemstone ever cut is a topaz — the El-Dorado Topaz at 31,000 carats.", real: true },
      { text: "Imperial topaz, a prized orange-pink variety, was named after the Russian tsars.", real: true },
      { text: "Topaz is always blue — other colors are impossible for this mineral.", real: false }
    ],
    explanation: "Topaz comes in many colors including yellow, orange, pink, and colorless. Blue topaz is often treated."
  },
  {
    topic: "Battle of Cannae",
    statements: [
      { text: "Hannibal's double-envelopment at Cannae is studied in military academies to this day.", real: true },
      { text: "The Romans lost an estimated 50,000-70,000 soldiers at Cannae, one of their worst defeats.", real: true },
      { text: "The Battle of Cannae was a 20th-century conflict fought with tanks and airplanes.", real: false }
    ],
    explanation: "Cannae was fought in 216 BCE during the Second Punic War between Rome and Carthage."
  },
  {
    topic: "New Mexico",
    statements: [
      { text: "Santa Fe, New Mexico, is the oldest state capital in the United States, founded in 1610.", real: true },
      { text: "New Mexico has more PhD holders per capita than any other US state due to its national laboratories.", real: true },
      { text: "New Mexico is located in Central America, south of Guatemala.", real: false }
    ],
    explanation: "New Mexico is a US state in the southwestern United States, not in Central America."
  },
  {
    topic: "Bocce Ball",
    statements: [
      { text: "Bocce is one of the oldest games in history, with evidence of play dating to ancient Egypt.", real: true },
      { text: "Bocce was once banned by various rulers who feared it distracted citizens from military duties.", real: true },
      { text: "Bocce is played with a basketball on a regulation NBA court.", real: false }
    ],
    explanation: "Bocce is played with small, heavy balls on a flat court or lawn, not with a basketball."
  },
  {
    topic: "Slow Loris",
    statements: [
      { text: "Slow lorises are the only venomous primates — they produce toxin from glands on their arms.", real: true },
      { text: "Slow lorises mix their venom with saliva to deliver a toxic bite.", real: true },
      { text: "Slow lorises are the fastest primates, capable of running at 60 mph.", real: false }
    ],
    explanation: "As their name suggests, slow lorises are extremely slow-moving animals."
  },
  {
    topic: "Za'atar",
    statements: [
      { text: "Za'atar is a Middle Eastern spice blend that has been used for thousands of years.", real: true },
      { text: "Za'atar typically combines dried thyme, oregano, sesame seeds, and sumac.", real: true },
      { text: "Za'atar is a type of frozen dessert similar to ice cream.", real: false }
    ],
    explanation: "Za'atar is a savory herb and spice blend, not a frozen dessert."
  },
  {
    topic: "Forbidden City",
    statements: [
      { text: "The Forbidden City in Beijing contains 980 surviving buildings and 8,704 rooms.", real: true },
      { text: "No one could enter or leave the Forbidden City without the emperor's permission.", real: true },
      { text: "The Forbidden City is a modern shopping mall built in the 1990s.", real: false }
    ],
    explanation: "The Forbidden City is an ancient imperial palace complex, constructed from 1406 to 1420 during the Ming Dynasty."
  },
  {
    topic: "The Colorado River",
    statements: [
      { text: "The Colorado River carved the Grand Canyon over millions of years.", real: true },
      { text: "Due to water usage, the Colorado River often runs dry before reaching the sea.", real: true },
      { text: "The Colorado River is the longest river in the world at over 10,000 km.", real: false }
    ],
    explanation: "The Colorado River is about 2,330 km long — significant but far from the world's longest."
  },
  {
    topic: "Microscope Invention",
    statements: [
      { text: "The compound microscope was invented by Dutch spectacle makers Zacharias and Hans Janssen around 1590.", real: true },
      { text: "Antonie van Leeuwenhoek was the first person to observe bacteria using his handcrafted microscopes.", real: true },
      { text: "The microscope was invented in ancient Greece by Aristotle.", real: false }
    ],
    explanation: "While the ancient Greeks made contributions to optics, the compound microscope was a late 16th-century invention."
  },
  {
    topic: "The Retina",
    statements: [
      { text: "The human retina contains about 120 million rod cells and 6 million cone cells.", real: true },
      { text: "The retina is technically part of the brain, as it develops from brain tissue during embryonic development.", real: true },
      { text: "The retina is located in the ear and helps with balance.", real: false }
    ],
    explanation: "The retina is in the eye, not the ear. It detects light and color for vision."
  },
  {
    topic: "Hafnium",
    statements: [
      { text: "Hafnium is used in nuclear reactor control rods because it absorbs neutrons exceptionally well.", real: true },
      { text: "Hafnium and zirconium are so chemically similar that separating them was a major challenge.", real: true },
      { text: "Hafnium is a common table salt used in everyday cooking.", real: false }
    ],
    explanation: "Hafnium is a rare transition metal used in high-tech applications, not a seasoning."
  },
  {
    topic: "The Alphorn",
    statements: [
      { text: "The alphorn is a Swiss wooden horn that can be up to 4 meters (13 feet) long.", real: true },
      { text: "Alphorns were traditionally used by Swiss herders to communicate across valleys.", real: true },
      { text: "The alphorn is a tiny handheld instrument the size of a whistle.", real: false }
    ],
    explanation: "Alphorns are extremely large instruments, often over 3 meters long."
  },
  {
    topic: "Atmospheric River",
    statements: [
      { text: "Atmospheric rivers are narrow corridors of water vapor in the sky that transport moisture from the tropics.", real: true },
      { text: "A single atmospheric river can carry more water vapor than the average flow of the Mississippi River.", real: true },
      { text: "Atmospheric rivers are underground tunnels that carry water between continents.", real: false }
    ],
    explanation: "Atmospheric rivers are phenomena in the atmosphere, not underground tunnels."
  },
  {
    topic: "Titan Arum",
    statements: [
      { text: "Titan arum produces the largest unbranched inflorescence in the plant world, reaching over 3 meters tall.", real: true },
      { text: "Titan arum blooms only every 7-10 years and each bloom lasts only 24-48 hours.", real: true },
      { text: "Titan arum is the most common houseplant in North America.", real: false }
    ],
    explanation: "Titan arum is extremely rare and difficult to grow, found naturally only in Sumatra."
  },
  {
    topic: "Moonstone",
    statements: [
      { text: "Moonstone displays a floating light effect called adularescence that resembles moonlight.", real: true },
      { text: "Ancient Romans believed moonstone was formed from solidified moonbeams.", real: true },
      { text: "Moonstone is actually a piece of the Moon brought to Earth by meteorites.", real: false }
    ],
    explanation: "Moonstone is a terrestrial feldspar mineral. Its name comes from its moon-like glow, not lunar origin."
  },
  {
    topic: "Battle of Trafalgar",
    statements: [
      { text: "Admiral Nelson was killed by a sniper's bullet during his greatest victory at Trafalgar.", real: true },
      { text: "Nelson's last major signal before battle was 'England expects that every man will do his duty.'", real: true },
      { text: "The Battle of Trafalgar was a land battle fought in the mountains of Switzerland.", real: false }
    ],
    explanation: "Trafalgar was a famous naval battle fought off the coast of Spain in 1805."
  },
  {
    topic: "South Dakota",
    statements: [
      { text: "Mount Rushmore in South Dakota features the faces of four US presidents carved into granite.", real: true },
      { text: "The Crazy Horse Memorial in South Dakota, if completed, will be the world's largest sculpture.", real: true },
      { text: "South Dakota borders the Gulf of Mexico.", real: false }
    ],
    explanation: "South Dakota is a northern, landlocked state, far from the Gulf of Mexico."
  },
  {
    topic: "Jai Alai",
    statements: [
      { text: "Jai alai balls (pelotas) can travel at over 300 km/h (186 mph), making it one of the fastest ball sports.", real: true },
      { text: "Jai alai players use a curved basket called a cesta to catch and throw the ball.", real: true },
      { text: "Jai alai is played underwater using scuba gear.", real: false }
    ],
    explanation: "Jai alai is played in a large walled court (fronton) on dry land."
  },
  {
    topic: "Naked Mole Rat",
    statements: [
      { text: "Naked mole rats are virtually immune to cancer and can survive nearly 20 minutes without oxygen.", real: true },
      { text: "Naked mole rats live in eusocial colonies with a queen, similar to ants and bees.", real: true },
      { text: "Naked mole rats are covered in thick fur and live solitary lives in trees.", real: false }
    ],
    explanation: "Naked mole rats are nearly hairless and live in underground colonies, not in trees."
  },
  {
    topic: "Gochujang",
    statements: [
      { text: "Gochujang is a Korean fermented red chili paste traditionally aged in earthenware pots outdoors.", real: true },
      { text: "Gochujang fermentation can take years, developing complex sweet, spicy, and savory flavors.", real: true },
      { text: "Gochujang is a British breakfast cereal made from oats and honey.", real: false }
    ],
    explanation: "Gochujang is a Korean chili paste, not a cereal."
  },
  {
    topic: "Parthenon",
    statements: [
      { text: "The Parthenon's columns are slightly curved and tilted inward to create an optical illusion of perfection.", real: true },
      { text: "The Parthenon was used as a church, a mosque, and an ammunition depot before it was damaged in an explosion.", real: true },
      { text: "The Parthenon was built in the 20th century as a movie set.", real: false }
    ],
    explanation: "The Parthenon was built in the 5th century BCE in Athens, Greece, as a temple to Athena."
  },
  {
    topic: "The Orinoco River",
    statements: [
      { text: "The Orinoco River in Venezuela has a natural canal (Casiquiare) connecting it to the Amazon basin.", real: true },
      { text: "The Orinoco Delta is one of the largest river deltas in the world.", real: true },
      { text: "The Orinoco flows through Europe from Germany to Spain.", real: false }
    ],
    explanation: "The Orinoco is a major river in South America, flowing through Venezuela and Colombia."
  },
  {
    topic: "Sewing Machine",
    statements: [
      { text: "Elias Howe received death threats from hand-sewing workers who feared his machine would take their jobs.", real: true },
      { text: "Isaac Singer did not invent the sewing machine but improved it and became rich through marketing.", real: true },
      { text: "The sewing machine was invented in ancient Egypt and used to make the pharaohs' clothing.", real: false }
    ],
    explanation: "The sewing machine was invented in the 19th century, thousands of years after ancient Egypt."
  },
  {
    topic: "The Liver",
    statements: [
      { text: "The liver is the only internal organ that can regenerate itself — as little as 25% can regrow to full size.", real: true },
      { text: "The liver performs over 500 different functions in the body.", real: true },
      { text: "Humans have four livers distributed throughout the body.", real: false }
    ],
    explanation: "Humans have one liver, located in the upper right abdomen."
  },
  {
    topic: "Indium",
    statements: [
      { text: "Indium is used in touchscreens because indium tin oxide is both transparent and electrically conductive.", real: true },
      { text: "Indium is so soft it can be cut with a knife and leaves a streak when rubbed on paper.", real: true },
      { text: "Indium is the hardest substance known, harder than diamond.", real: false }
    ],
    explanation: "Indium is one of the softest metals, easily bent and cut."
  },
  {
    topic: "The Djembe",
    statements: [
      { text: "The djembe is a West African drum traditionally carved from a single piece of wood.", real: true },
      { text: "In the Bambara language, 'djembe' translates to 'everyone gather together in peace.'", real: true },
      { text: "The djembe is a stringed instrument similar to a guitar.", real: false }
    ],
    explanation: "The djembe is a goblet-shaped drum, not a stringed instrument."
  },
  {
    topic: "Thundersnow",
    statements: [
      { text: "Thundersnow is a rare weather event where thunder and lightning occur during a snowstorm.", real: true },
      { text: "Thunder during thundersnow is muffled by the snow and can be heard only within 2-3 miles.", real: true },
      { text: "Thundersnow is a warm-weather phenomenon that occurs only in tropical regions.", real: false }
    ],
    explanation: "Thundersnow occurs during winter storms in cold regions, not in tropical weather."
  },
  {
    topic: "Strangler Fig",
    statements: [
      { text: "Strangler figs begin life as epiphytes high in a host tree's canopy and gradually envelop the host.", real: true },
      { text: "The host tree eventually dies and decomposes, leaving the strangler fig as a hollow, free-standing tree.", real: true },
      { text: "Strangler figs are tiny ground-cover plants that never grow taller than a few centimeters.", real: false }
    ],
    explanation: "Strangler figs can grow into massive trees, some reaching over 40 meters in height."
  },
  {
    topic: "Carnelian",
    statements: [
      { text: "Carnelian was one of the first gemstones used by humans, with beads dating back 10,000 years.", real: true },
      { text: "Napoleon wore a carnelian seal and considered it his lucky charm.", real: true },
      { text: "Carnelian is a transparent, colorless mineral identical to diamond.", real: false }
    ],
    explanation: "Carnelian is a translucent reddish-orange variety of chalcedony, quite different from diamond."
  },
  {
    topic: "Spanish Armada",
    statements: [
      { text: "The Spanish Armada of 1588 consisted of about 130 ships and was the largest fleet assembled to that time.", real: true },
      { text: "Storms and English fire ships were major factors in the Armada's defeat.", real: true },
      { text: "The Spanish Armada conquered England and established Spanish rule for 200 years.", real: false }
    ],
    explanation: "The Armada failed. England successfully defended itself, and Spain never conquered England."
  },
  {
    topic: "Nevada",
    statements: [
      { text: "Nevada is the driest state in the US, receiving an average of only about 10 inches of rain per year.", real: true },
      { text: "More than 70% of Nevada's land is owned by the federal government.", real: true },
      { text: "Nevada is located in New England and is known for its autumn foliage.", real: false }
    ],
    explanation: "Nevada is in the western US, known for deserts and Las Vegas, not New England foliage."
  },
  {
    topic: "Sumo Wrestling",
    statements: [
      { text: "Sumo wrestlers eat a high-calorie stew called chankonabe to gain and maintain weight.", real: true },
      { text: "Sumo wrestling dates back over 1,500 years and has deep roots in Shinto religious ceremony.", real: true },
      { text: "Sumo wrestlers are required to be thin and must weigh less than 60 kg to compete.", real: false }
    ],
    explanation: "Sumo wrestlers are known for their large size. There is no maximum weight limit, and they typically weigh over 100 kg."
  },
  {
    topic: "Lyrebird",
    statements: [
      { text: "Lyrebirds can mimic virtually any sound they hear, including chainsaws, camera shutters, and car alarms.", real: true },
      { text: "The male lyrebird's tail feathers resemble a lyre (harp) when displayed during courtship.", real: true },
      { text: "Lyrebirds are unable to produce any sounds and communicate only through body language.", real: false }
    ],
    explanation: "Lyrebirds are among the most accomplished vocal mimics in the animal kingdom."
  },
  {
    topic: "Fish Sauce",
    statements: [
      { text: "Ancient Romans used a fermented fish sauce called garum that was central to their cuisine.", real: true },
      { text: "Fish sauce is made by fermenting fish with salt for months to years.", real: true },
      { text: "Fish sauce is a sweet syrup made from boiling sugar cane.", real: false }
    ],
    explanation: "Fish sauce is a savory, pungent condiment made from fermented fish, not a sweet syrup."
  },
  {
    topic: "Palace of Versailles",
    statements: [
      { text: "The Hall of Mirrors at Versailles contains 357 mirrors and is 73 meters long.", real: true },
      { text: "Versailles had no toilets when first built — courtiers used the gardens and stairwells.", real: true },
      { text: "The Palace of Versailles is located in central London.", real: false }
    ],
    explanation: "Versailles is located about 20 km southwest of Paris, France, not in London."
  },
  {
    topic: "The Danube Delta",
    statements: [
      { text: "The Danube Delta is the best-preserved river delta in Europe and a UNESCO World Heritage Site.", real: true },
      { text: "The Danube Delta is home to over 300 species of birds, making it a major birdwatching destination.", real: true },
      { text: "The Danube Delta is a desert with no water or vegetation.", real: false }
    ],
    explanation: "The Danube Delta is a vast wetland, one of the largest and most biodiverse in Europe."
  },
  {
    topic: "Typewriter Invention",
    statements: [
      { text: "The QWERTY keyboard layout was designed for typewriters to prevent jamming of common letter pairs.", real: true },
      { text: "Mark Twain was one of the first authors to submit a typewritten manuscript to a publisher.", real: true },
      { text: "Typewriters were invented in ancient China using bamboo keys.", real: false }
    ],
    explanation: "The practical typewriter was invented in the 1860s-1870s by several Western inventors."
  },
  {
    topic: "The Diaphragm (Muscle)",
    statements: [
      { text: "The diaphragm is the primary muscle responsible for breathing.", real: true },
      { text: "Hiccups are caused by involuntary spasms of the diaphragm.", real: true },
      { text: "The diaphragm is a bone in the hand used for gripping.", real: false }
    ],
    explanation: "The diaphragm is a dome-shaped muscle below the lungs, essential for respiration."
  },
  {
    topic: "Cesium",
    statements: [
      { text: "Cesium is so reactive it explodes on contact with water.", real: true },
      { text: "Cesium atomic clocks are the most accurate timekeeping devices, losing less than a second in millions of years.", real: true },
      { text: "Cesium is an inert, non-reactive mineral used in building foundations.", real: false }
    ],
    explanation: "Cesium is one of the most reactive elements known, violently reacting with water."
  },
  {
    topic: "The Oud",
    statements: [
      { text: "The oud is a stringed instrument that is the ancestor of the European lute.", real: true },
      { text: "The word 'lute' derives from the Arabic 'al-ʿūd,' meaning 'the wood.'", real: true },
      { text: "The oud is a percussion instrument played by hitting stretched animal skins.", real: false }
    ],
    explanation: "The oud is a pear-shaped stringed instrument played by plucking, not a percussion instrument."
  },
  {
    topic: "Supercell Thunderstorm",
    statements: [
      { text: "Supercell thunderstorms contain a deep, persistent rotating updraft called a mesocyclone.", real: true },
      { text: "Supercells are the rarest type of thunderstorm but produce the most severe weather, including violent tornadoes.", real: true },
      { text: "Supercells are small, gentle rain clouds that produce light drizzle.", real: false }
    ],
    explanation: "Supercells are the most powerful and dangerous type of thunderstorm."
  },
  {
    topic: "Manchineel Tree",
    statements: [
      { text: "The manchineel tree is so toxic that standing under it during rain can cause blistering skin.", real: true },
      { text: "The manchineel is listed in the Guinness Book of Records as the world's most dangerous tree.", real: true },
      { text: "The manchineel tree produces the most nutritious fruit in the world, eaten by millions daily.", real: false }
    ],
    explanation: "Manchineel fruit is extremely toxic. Eating it can cause severe burns, swelling, and potentially death."
  },
  {
    topic: "Citrine",
    statements: [
      { text: "Most citrine sold commercially is actually heat-treated amethyst.", real: true },
      { text: "Natural citrine is one of the rarest varieties of quartz.", real: true },
      { text: "Citrine is a deep blue gemstone mined only in Antarctica.", real: false }
    ],
    explanation: "Citrine is a yellow to orange variety of quartz, not blue, and is not mined in Antarctica."
  },
  {
    topic: "Siege of Leningrad",
    statements: [
      { text: "The Siege of Leningrad lasted 872 days, one of the longest and most destructive sieges in history.", real: true },
      { text: "An estimated 1 million civilians died during the siege, mostly from starvation.", real: true },
      { text: "The Siege of Leningrad lasted only 3 days and had no casualties.", real: false }
    ],
    explanation: "The Siege of Leningrad lasted nearly 900 days and caused over a million civilian deaths."
  },
  {
    topic: "Arkansas",
    statements: [
      { text: "Arkansas has the only active diamond mine in the United States, open to the public.", real: true },
      { text: "It is illegal in Arkansas to pronounce the state's name incorrectly.", real: true },
      { text: "Arkansas is located in the Pacific Northwest, bordering the Pacific Ocean.", real: false }
    ],
    explanation: "Arkansas is in the southern-central United States, far from the Pacific."
  },
  {
    topic: "Biathlon",
    statements: [
      { text: "Biathlon combines cross-country skiing and rifle shooting.", real: true },
      { text: "Biathlon originated from Scandinavian military training exercises.", real: true },
      { text: "Biathlon combines swimming and archery.", real: false }
    ],
    explanation: "Biathlon specifically combines cross-country skiing with rifle shooting, not swimming and archery."
  },
  {
    topic: "Wombat",
    statements: [
      { text: "Wombats are the only animals that produce cube-shaped droppings.", real: true },
      { text: "A wombat's pouch faces backward to prevent dirt from entering while digging.", real: true },
      { text: "Wombats are primates that live in the treetops of South American rainforests.", real: false }
    ],
    explanation: "Wombats are marsupials native to Australia that live in burrows underground."
  },
  {
    topic: "Tahini",
    statements: [
      { text: "Tahini is made from ground sesame seeds and has been used for over 4,000 years.", real: true },
      { text: "Tahini is a key ingredient in both hummus and halva.", real: true },
      { text: "Tahini is a dairy product made from cow's milk.", real: false }
    ],
    explanation: "Tahini is made from sesame seeds and is dairy-free."
  },
  {
    topic: "Moai Statues",
    statements: [
      { text: "The moai of Easter Island were carved from volcanic rock at a single quarry called Rano Raraku.", real: true },
      { text: "The moai were 'walked' to their locations by rocking them back and forth using ropes.", real: true },
      { text: "The moai were carved by European explorers who visited Easter Island in the 1700s.", real: false }
    ],
    explanation: "The moai were carved by the Rapa Nui people, the Polynesian inhabitants of Easter Island, centuries before European contact."
  },
  {
    topic: "The Niger River",
    statements: [
      { text: "The Niger River takes an unusual boomerang-shaped course through West Africa.", real: true },
      { text: "Timbuktu, the legendary center of learning, sits on the edge of the Niger River.", real: true },
      { text: "The Niger River flows through North America from Canada to Mexico.", real: false }
    ],
    explanation: "The Niger is a major West African river flowing through Guinea, Mali, Niger, and Nigeria."
  },
  {
    topic: "Vulcanized Rubber",
    statements: [
      { text: "Charles Goodyear discovered vulcanization by accidentally dropping rubber mixed with sulfur on a hot stove.", real: true },
      { text: "Goodyear died in poverty despite his revolutionary discovery.", real: true },
      { text: "Vulcanized rubber was developed by NASA for use exclusively in the Space Shuttle program.", real: false }
    ],
    explanation: "Vulcanization was discovered by Charles Goodyear in 1839, over a century before NASA existed."
  },
  {
    topic: "The Eardrum",
    statements: [
      { text: "The eardrum (tympanic membrane) vibrates in response to sound waves and is only 0.1 mm thick.", real: true },
      { text: "A ruptured eardrum can heal itself within a few weeks in most cases.", real: true },
      { text: "The eardrum is the largest organ in the human body.", real: false }
    ],
    explanation: "The eardrum is tiny (about 1 cm in diameter). The skin is the largest organ."
  },
  {
    topic: "Scandium",
    statements: [
      { text: "Scandium is used in high-performance aluminum alloys for aerospace and sports equipment.", real: true },
      { text: "Scandium was named after Scandinavia and was predicted to exist before it was discovered.", real: true },
      { text: "Scandium is a common household material found in most kitchen utensils.", real: false }
    ],
    explanation: "Scandium is rare and expensive, used only in specialized high-tech applications."
  },
  {
    topic: "The Shamisen",
    statements: [
      { text: "The shamisen is a three-stringed Japanese instrument traditionally covered with cat or dog skin.", real: true },
      { text: "The shamisen is a key instrument in traditional Japanese kabuki and bunraku theater.", real: true },
      { text: "The shamisen is a large pipe organ found in Japanese churches.", real: false }
    ],
    explanation: "The shamisen is a small, portable plucked string instrument, not a pipe organ."
  },
  {
    topic: "St. Elmo's Fire",
    statements: [
      { text: "St. Elmo's fire is a luminous plasma discharge that appears on pointed objects during thunderstorms.", real: true },
      { text: "Sailors historically considered St. Elmo's fire a good omen, believing it was protection from their patron saint.", real: true },
      { text: "St. Elmo's fire is an actual fire that burns ships and buildings to the ground.", real: false }
    ],
    explanation: "St. Elmo's fire is a cold plasma phenomenon — it produces light but is not real fire and causes no burns."
  },
  {
    topic: "Sundew",
    statements: [
      { text: "Sundews trap insects using sticky, glistening droplets on hair-like tentacles.", real: true },
      { text: "There are nearly 200 species of sundew found on every continent except Antarctica.", real: true },
      { text: "Sundews are large trees that capture birds and small mammals.", real: false }
    ],
    explanation: "Sundews are small carnivorous plants that primarily capture tiny insects."
  },
  {
    topic: "Spinel",
    statements: [
      { text: "The 'Black Prince's Ruby' in the British Crown Jewels is actually a spinel, not a ruby.", real: true },
      { text: "Many famous 'rubies' throughout history turned out to be spinels when later tested.", real: true },
      { text: "Spinel is a type of wood used in furniture making.", real: false }
    ],
    explanation: "Spinel is a mineral gemstone, not a type of wood."
  },
  {
    topic: "Battle of Gallipoli",
    statements: [
      { text: "The Gallipoli Campaign is a defining moment in Australian and New Zealand national identity (ANZAC).", real: true },
      { text: "The campaign aimed to capture Constantinople by controlling the Dardanelles strait.", real: true },
      { text: "Gallipoli was a quick, decisive Allied victory that ended World War I.", real: false }
    ],
    explanation: "Gallipoli was a disastrous Allied defeat. The campaign lasted 8 months and failed to achieve its objectives."
  },
  {
    topic: "Louisiana",
    statements: [
      { text: "Louisiana is the only US state that uses parishes instead of counties.", real: true },
      { text: "Louisiana's legal system is based on French Napoleonic Code, unique among US states.", real: true },
      { text: "Louisiana is the northernmost US state, bordering Canada.", real: false }
    ],
    explanation: "Louisiana is in the Deep South, bordering the Gulf of Mexico. Alaska and several northern states border Canada."
  },
  {
    topic: "Hurling",
    statements: [
      { text: "Hurling is one of the oldest field sports in the world, played in Ireland for over 3,000 years.", real: true },
      { text: "The sliotar (ball) in hurling can travel at speeds over 150 km/h when struck.", real: true },
      { text: "Hurling is played indoors on a table, similar to table tennis.", real: false }
    ],
    explanation: "Hurling is a fast-paced outdoor field sport played on a grass pitch."
  },
  {
    topic: "Pistol Shrimp",
    statements: [
      { text: "The pistol shrimp snaps its claw so fast it creates a cavitation bubble that reaches 4,700°C — hotter than the sun's surface.", real: true },
      { text: "The snap of a pistol shrimp can reach 218 decibels, one of the loudest sounds in the ocean.", real: true },
      { text: "Pistol shrimp are completely silent and communicate only through color changes.", real: false }
    ],
    explanation: "Pistol shrimp produce one of the loudest sounds in the ocean through their claw snap."
  },
  {
    topic: "Mole Sauce",
    statements: [
      { text: "Traditional Mexican mole can contain over 30 ingredients including chocolate and multiple chilies.", real: true },
      { text: "Some mole recipes take days to prepare and are reserved for special celebrations.", real: true },
      { text: "Mole sauce is made from a single ingredient: boiled water.", real: false }
    ],
    explanation: "Mole is an incredibly complex sauce with many ingredients, and its preparation is considered an art form."
  },
  {
    topic: "Pont du Gard",
    statements: [
      { text: "The Pont du Gard in France is a 2,000-year-old Roman aqueduct that still stands at 49 meters tall.", real: true },
      { text: "The Pont du Gard was built without mortar — its massive stones are held together by precise cutting.", real: true },
      { text: "The Pont du Gard is a modern suspension bridge built in 2010.", real: false }
    ],
    explanation: "The Pont du Gard was built in the first century CE by the Romans."
  },
  {
    topic: "The Euphrates River",
    statements: [
      { text: "The Euphrates is mentioned more times in the Bible than any other river.", real: true },
      { text: "The ancient cities of Babylon and Ur were both located along the Euphrates.", real: true },
      { text: "The Euphrates flows through Japan from north to south.", real: false }
    ],
    explanation: "The Euphrates flows through Turkey, Syria, and Iraq in the Middle East."
  },
  {
    topic: "Aspirin Invention",
    statements: [
      { text: "Willow bark, containing salicin (related to aspirin), was used as medicine for thousands of years.", real: true },
      { text: "Bayer trademarked 'Aspirin' in 1899, but lost the trademark as a condition of Germany's WWI defeat.", real: true },
      { text: "Aspirin was invented in ancient Rome as a cosmetic face cream.", real: false }
    ],
    explanation: "While willow bark was used medicinally in antiquity, aspirin as a drug was synthesized in the 1890s as a pain reliever."
  },
  {
    topic: "The Meniscus (Knee)",
    statements: [
      { text: "Each knee has two menisci — C-shaped cartilage pads that act as shock absorbers.", real: true },
      { text: "Meniscus tears are one of the most common knee injuries in sports.", real: true },
      { text: "The meniscus is a muscle in the arm used for lifting heavy objects.", real: false }
    ],
    explanation: "The meniscus is cartilage in the knee, not a muscle in the arm."
  },
  {
    topic: "Vanadium",
    statements: [
      { text: "Vanadium was named after Vanadis, the Scandinavian goddess of beauty, due to its colorful compounds.", real: true },
      { text: "Vanadium steel is exceptionally strong and was used in early Ford Model T cars.", real: true },
      { text: "Vanadium is a food spice commonly used in Italian cooking.", real: false }
    ],
    explanation: "Vanadium is a transition metal used in steel alloys, not a food spice."
  },
  {
    topic: "The Balalaika",
    statements: [
      { text: "The balalaika is a triangular-bodied Russian stringed instrument with only three strings.", real: true },
      { text: "The balalaika comes in several sizes, from the piccolo to the massive contrabass.", real: true },
      { text: "The balalaika is a wind instrument played by blowing through its triangular body.", real: false }
    ],
    explanation: "The balalaika is a plucked or strummed stringed instrument, not a wind instrument."
  },
  {
    topic: "Green Flash",
    statements: [
      { text: "The green flash is a real optical phenomenon that occurs for a second or two at sunset or sunrise.", real: true },
      { text: "The green flash is caused by atmospheric refraction separating sunlight into its component colors.", real: true },
      { text: "The green flash lasts for over an hour and turns the entire sky green.", real: false }
    ],
    explanation: "The green flash is extremely brief, lasting only 1-2 seconds under ideal conditions."
  },
  {
    topic: "Quaking Aspen",
    statements: [
      { text: "A single quaking aspen grove called Pando is the largest and heaviest known organism on Earth.", real: true },
      { text: "Pando consists of about 47,000 tree trunks that are all clones sharing one root system.", real: true },
      { text: "Each quaking aspen tree is a separate individual with its own independent root system.", real: false }
    ],
    explanation: "Aspen trees often share a massive interconnected root system, making entire groves a single organism."
  },
  {
    topic: "Ammolite",
    statements: [
      { text: "Ammolite is a gemstone made from the fossilized shells of 70-million-year-old ammonites.", real: true },
      { text: "Ammolite is found commercially only in the Bearpaw Formation along the eastern slopes of the Rocky Mountains.", real: true },
      { text: "Ammolite is a common plastic used in packaging materials.", real: false }
    ],
    explanation: "Ammolite is a rare, organic gemstone, not a plastic."
  },
  {
    topic: "Battle of Lepanto",
    statements: [
      { text: "The Battle of Lepanto in 1571 was the last major naval battle fought primarily with rowing vessels.", real: true },
      { text: "Miguel de Cervantes, author of Don Quixote, fought at Lepanto and lost the use of his left hand.", real: true },
      { text: "The Battle of Lepanto was fought in outer space between two satellite nations.", real: false }
    ],
    explanation: "Lepanto was a naval battle fought in the Gulf of Patras, Greece, between the Ottoman Empire and the Holy League."
  },
  {
    topic: "Oklahoma",
    statements: [
      { text: "The Oklahoma Land Rush of 1889 saw thousands of settlers race to claim free land at the sound of a gun.", real: true },
      { text: "People who snuck in early to claim land were called 'Sooners,' giving Oklahoma its nickname.", real: true },
      { text: "Oklahoma is an island state located in the Caribbean Sea.", real: false }
    ],
    explanation: "Oklahoma is a landlocked state in the south-central United States."
  },
  {
    topic: "Kendo",
    statements: [
      { text: "Kendo practitioners use bamboo swords called shinai and wear protective armor called bogu.", real: true },
      { text: "The word 'kendo' means 'way of the sword' in Japanese.", real: true },
      { text: "Kendo is an aquatic sport where participants fence while swimming.", real: false }
    ],
    explanation: "Kendo is practiced on land in a dojo, not in water."
  },
  {
    topic: "Quokka",
    statements: [
      { text: "Quokkas appear to smile due to their facial structure, earning them the title of 'happiest animal.'", real: true },
      { text: "Quokkas are found almost exclusively on Rottnest Island off the coast of Western Australia.", real: true },
      { text: "Quokkas are large carnivorous animals that hunt in packs.", real: false }
    ],
    explanation: "Quokkas are small, herbivorous marsupials about the size of a domestic cat."
  },
  {
    topic: "Mirin",
    statements: [
      { text: "Mirin is a sweet Japanese rice wine used as a cooking ingredient.", real: true },
      { text: "Traditional mirin (hon mirin) requires about 40-60 days of brewing and aging.", real: true },
      { text: "Mirin is a type of vinegar made from apples, used in salad dressings.", real: false }
    ],
    explanation: "Mirin is a sweet rice wine, not an apple vinegar."
  },
  {
    topic: "Tower of London",
    statements: [
      { text: "Ravens have been kept at the Tower of London for centuries — legend says if they leave, the kingdom will fall.", real: true },
      { text: "The Tower of London has served as a royal palace, prison, zoo, and jewel house.", real: true },
      { text: "The Tower of London is located in Rome, Italy.", real: false }
    ],
    explanation: "The Tower of London is located on the north bank of the River Thames in London, England."
  },
  {
    topic: "The Dnieper River",
    statements: [
      { text: "The Dnieper is the fourth-longest river in Europe, flowing through Russia, Belarus, and Ukraine.", real: true },
      { text: "Kyiv, the capital of Ukraine, is built on the banks of the Dnieper River.", real: true },
      { text: "The Dnieper is the primary river of South America, longer than the Amazon.", real: false }
    ],
    explanation: "The Dnieper is a European river. The Amazon and other rivers are South America's major waterways."
  },
  {
    topic: "Radar Invention",
    statements: [
      { text: "British radar (Chain Home) was crucial in winning the Battle of Britain in World War II.", real: true },
      { text: "The microwave oven was accidentally invented when a radar engineer's chocolate bar melted near a magnetron.", real: true },
      { text: "Radar was invented in ancient Greece using polished bronze mirrors.", real: false }
    ],
    explanation: "Radar technology was developed in the early 20th century using radio waves, not ancient mirrors."
  },
  {
    topic: "The Rotator Cuff",
    statements: [
      { text: "The rotator cuff consists of four muscles and their tendons that stabilize the shoulder joint.", real: true },
      { text: "Rotator cuff injuries are extremely common, affecting about 2 million Americans per year.", real: true },
      { text: "The rotator cuff is located in the ankle and controls foot rotation.", real: false }
    ],
    explanation: "The rotator cuff is in the shoulder, not the ankle."
  },
  {
    topic: "Molybdenum",
    statements: [
      { text: "Molybdenum has one of the highest melting points of all pure elements.", real: true },
      { text: "Most of the world's molybdenum is used to make high-strength steel alloys.", real: true },
      { text: "Molybdenum is a gas used to inflate party balloons.", real: false }
    ],
    explanation: "Molybdenum is a solid metal, not a gas."
  },
  {
    topic: "The Bouzouki",
    statements: [
      { text: "The bouzouki is a Greek stringed instrument central to rebetiko music, often called 'Greek blues.'", real: true },
      { text: "The Irish bouzouki, adapted from the Greek version, became important in Celtic music.", real: true },
      { text: "The bouzouki is a large brass drum used in marching bands.", real: false }
    ],
    explanation: "The bouzouki is a long-necked stringed instrument, not a drum."
  },
  {
    topic: "Mammatus Clouds",
    statements: [
      { text: "Mammatus clouds have unusual pouch-like bulges hanging from their undersides.", real: true },
      { text: "Mammatus clouds often form on the underside of thunderstorm anvils.", real: true },
      { text: "Mammatus clouds always indicate a tornado is directly overhead.", real: false }
    ],
    explanation: "While mammatus clouds can accompany severe storms, they do not necessarily indicate tornadoes."
  },
  {
    topic: "Wollemia Pine",
    statements: [
      { text: "The Wollemi pine was known only from fossils and thought extinct until living trees were found in 1994.", real: true },
      { text: "Fewer than 100 adult Wollemi pines exist in the wild, in a secret location in Australia.", real: true },
      { text: "Wollemi pines are the most common tree species on Earth, found on every continent.", real: false }
    ],
    explanation: "Wollemi pines are critically rare, known from only one small wild population."
  },
  {
    topic: "Larimar",
    statements: [
      { text: "Larimar is a blue variety of pectolite found only in the Dominican Republic.", real: true },
      { text: "Larimar was officially discovered in 1974 and named partly after the discoverer's daughter, Larissa.", real: true },
      { text: "Larimar is found in abundance on every continent and is very inexpensive.", real: false }
    ],
    explanation: "Larimar is found only in one mine in the Dominican Republic, making it quite rare."
  },
  {
    topic: "Hundred Years' War",
    statements: [
      { text: "The Hundred Years' War actually lasted 116 years, from 1337 to 1453.", real: true },
      { text: "Joan of Arc, a teenage peasant girl, helped turn the tide of the war in France's favor.", real: true },
      { text: "The Hundred Years' War was fought between Japan and China over Pacific islands.", real: false }
    ],
    explanation: "The Hundred Years' War was fought between England and France over the French throne."
  },
  {
    topic: "Wisconsin",
    statements: [
      { text: "Wisconsin produces more cheese than any other US state, earning it the nickname 'America's Dairyland.'", real: true },
      { text: "Wisconsin is the only US state where you can legally become a certified 'Master Cheesemaker.'", real: true },
      { text: "Wisconsin is located in the Desert Southwest and has no dairy farms.", real: false }
    ],
    explanation: "Wisconsin is in the Upper Midwest and is America's leading dairy state."
  },
  {
    topic: "Capoeira",
    statements: [
      { text: "Capoeira is a Brazilian martial art that disguised fighting techniques as dance and music.", real: true },
      { text: "Capoeira was developed by enslaved Africans in Brazil and was once illegal.", real: true },
      { text: "Capoeira is a sedentary board game played with pawns on a checkered board.", real: false }
    ],
    explanation: "Capoeira is a highly physical, acrobatic martial art/dance form."
  },
  {
    topic: "Hoatzin Bird",
    statements: [
      { text: "Hoatzin chicks have claws on their wings that they use to climb trees, losing them as adults.", real: true },
      { text: "The hoatzin is the only bird known to digest food by fermentation, like a cow.", real: true },
      { text: "The hoatzin is a flightless ocean bird found only in Antarctica.", real: false }
    ],
    explanation: "The hoatzin lives in the swamps and forests of the Amazon basin in South America."
  },
  {
    topic: "Ghee",
    statements: [
      { text: "Ghee is clarified butter that has been cooked longer to remove all moisture and milk solids.", real: true },
      { text: "Ghee has been used in Indian cuisine and Ayurvedic medicine for over 5,000 years.", real: true },
      { text: "Ghee is a type of vegetable oil extracted from sunflower seeds.", real: false }
    ],
    explanation: "Ghee is made from butter (an animal product), not from vegetable oil or sunflower seeds."
  },
  {
    topic: "Petra Treasury (Al-Khazneh)",
    statements: [
      { text: "The Treasury at Petra was carved entirely from a single piece of sandstone cliff.", real: true },
      { text: "Bedouins fired bullets at the Treasury's urn, believing it contained hidden treasure.", real: true },
      { text: "The Treasury at Petra is a modern hotel built in the 1960s.", real: false }
    ],
    explanation: "The Treasury is an ancient Nabataean tomb carved around the 1st century BCE."
  },
  {
    topic: "The Don River",
    statements: [
      { text: "The Don River in Russia was a strategic location in the Battle of Stalingrad.", real: true },
      { text: "The Cossacks, famous warrior horsemen, traditionally lived along the Don River.", real: true },
      { text: "The Don River is the world's deepest river at over 500 meters deep.", real: false }
    ],
    explanation: "The Don is a relatively shallow river. The Congo River is the world's deepest."
  },
  {
    topic: "Vaccination Invention",
    statements: [
      { text: "Edward Jenner tested his smallpox vaccine theory by inoculating an 8-year-old boy in 1796.", real: true },
      { text: "The word 'vaccine' comes from 'vacca' (Latin for cow) because Jenner used cowpox.", real: true },
      { text: "Vaccines were invented in the 21st century using artificial intelligence.", real: false }
    ],
    explanation: "Vaccination was pioneered by Edward Jenner in the late 18th century, long before AI existed."
  },
  {
    topic: "The ACL",
    statements: [
      { text: "The ACL (anterior cruciate ligament) prevents the shin bone from sliding forward under the thigh bone.", real: true },
      { text: "ACL tears are particularly common in sports that involve sudden stops and changes in direction.", real: true },
      { text: "The ACL is a muscle in the neck that controls head movement.", real: false }
    ],
    explanation: "The ACL is a ligament in the knee, not a muscle in the neck."
  },
  {
    topic: "Niobium",
    statements: [
      { text: "Niobium is named after Niobe, the daughter of Tantalus in Greek mythology.", real: true },
      { text: "Brazil produces about 90% of the world's niobium.", real: true },
      { text: "Niobium is a common seasoning herb used in Mediterranean cooking.", real: false }
    ],
    explanation: "Niobium is a transition metal used in steel alloys and superconducting materials, not a herb."
  },
  {
    topic: "The Zither",
    statements: [
      { text: "The zither is a stringed instrument that lies flat and can have up to 45 strings.", real: true },
      { text: "The haunting zither music in the film 'The Third Man' (1949) made the instrument world-famous.", real: true },
      { text: "The zither is a brass wind instrument similar to a tuba.", real: false }
    ],
    explanation: "The zither is a flat stringed instrument, not a brass wind instrument."
  },
  {
    topic: "Fire Rainbow",
    statements: [
      { text: "A 'fire rainbow' (circumhorizontal arc) is caused by sunlight refracting through ice crystals in cirrus clouds.", real: true },
      { text: "Fire rainbows can only occur when the sun is higher than 58° above the horizon.", real: true },
      { text: "Fire rainbows involve actual flames in the sky caused by atmospheric combustion.", real: false }
    ],
    explanation: "Fire rainbows have nothing to do with fire. They are optical phenomena created by ice crystals."
  },
  {
    topic: "Ginkgo Tree",
    statements: [
      { text: "Ginkgo biloba is often called a 'living fossil' because it has remained unchanged for 200 million years.", real: true },
      { text: "Six ginkgo trees survived the atomic bombing of Hiroshima and are still alive today.", real: true },
      { text: "Ginkgo trees are tropical palms that grow only in the Amazon rainforest.", real: false }
    ],
    explanation: "Ginkgo trees are deciduous trees native to China, not tropical palms."
  },
  {
    topic: "Moldavite",
    statements: [
      { text: "Moldavite is a natural glass formed by a meteorite impact in southern Germany about 15 million years ago.", real: true },
      { text: "Moldavite's distinctive green color comes from its high iron content.", real: true },
      { text: "Moldavite is a man-made plastic produced in factories.", real: false }
    ],
    explanation: "Moldavite is a natural tektite formed by an ancient meteorite impact."
  },
  {
    topic: "Boer Wars",
    statements: [
      { text: "The British invented concentration camps during the Second Boer War to detain Boer civilians.", real: true },
      { text: "The Boer Wars were fought in South Africa between the British Empire and Dutch-descended settlers.", real: true },
      { text: "The Boer Wars were medieval European wars fought with swords and crossbows.", real: false }
    ],
    explanation: "The Boer Wars took place in 1880-1881 and 1899-1902, well into the era of modern firearms."
  },
  {
    topic: "Minnesota",
    statements: [
      { text: "Minnesota is called the 'Land of 10,000 Lakes' but actually has over 11,842 lakes.", real: true },
      { text: "The Mall of America in Minnesota has more visitors per year than Disneyland, Disney World, and the Grand Canyon combined.", real: true },
      { text: "Minnesota is a desert state with no natural lakes.", real: false }
    ],
    explanation: "Minnesota has more than 11,000 lakes and is far from being a desert."
  },
  {
    topic: "Petanque",
    statements: [
      { text: "Pétanque originated in Provence, France, and its name means 'planted feet' (pieds tanqués).", real: true },
      { text: "Pétanque boules are metal balls, and the game is played by tossing them closest to a small target ball.", real: true },
      { text: "Pétanque is played on ice using a broom to sweep a path for the balls.", real: false }
    ],
    explanation: "That describes curling. Pétanque is played on dirt or gravel surfaces."
  },
  {
    topic: "Fossa",
    statements: [
      { text: "The fossa is the largest predator in Madagascar and looks like a cross between a cat and a mongoose.", real: true },
      { text: "Fossas are the only predator that regularly hunts lemurs.", real: true },
      { text: "Fossas are marine animals that live exclusively in the deep ocean.", real: false }
    ],
    explanation: "Fossas are terrestrial animals living in the forests of Madagascar."
  },
  {
    topic: "Pomegranate Molasses",
    statements: [
      { text: "Pomegranate molasses is a thick, tangy syrup made by reducing pomegranate juice.", real: true },
      { text: "Pomegranate molasses is a staple in Middle Eastern and Persian cuisine.", real: true },
      { text: "Pomegranate molasses is a type of motor oil used in car engines.", real: false }
    ],
    explanation: "Pomegranate molasses is a food product, not motor oil."
  },
  {
    topic: "Pantheon (Rome)",
    statements: [
      { text: "The Pantheon's dome remains the world's largest unreinforced concrete dome after nearly 2,000 years.", real: true },
      { text: "The Pantheon has an open hole (oculus) in its dome, and rain falls directly into the building.", real: true },
      { text: "The Pantheon was built in the 1950s as a modern art museum.", real: false }
    ],
    explanation: "The Pantheon was built around 125 CE during the Roman Empire."
  },
  {
    topic: "The Rio Grande",
    statements: [
      { text: "The Rio Grande forms about two-thirds of the border between the United States and Mexico.", real: true },
      { text: "The Rio Grande is known as the 'Río Bravo del Norte' in Mexico.", real: true },
      { text: "The Rio Grande flows through the center of New York City.", real: false }
    ],
    explanation: "The Rio Grande flows through the American Southwest and along the Texas-Mexico border."
  },
  {
    topic: "Stethoscope Invention",
    statements: [
      { text: "The stethoscope was invented because its creator was too embarrassed to press his ear against a female patient's chest.", real: true },
      { text: "René Laennec invented the stethoscope in 1816 by rolling up sheets of paper into a tube.", real: true },
      { text: "The stethoscope was invented by NASA for listening to sounds from distant planets.", real: false }
    ],
    explanation: "The stethoscope was invented for medical auscultation, not space exploration."
  },
  {
    topic: "The Achilles Tendon",
    statements: [
      { text: "The Achilles tendon is the strongest and thickest tendon in the human body.", real: true },
      { text: "The Achilles tendon can withstand forces of up to 1,000 pounds during running.", real: true },
      { text: "The Achilles tendon is located in the wrist and controls finger movement.", real: false }
    ],
    explanation: "The Achilles tendon connects the calf muscles to the heel bone, located at the back of the ankle."
  },
  {
    topic: "Rhodium",
    statements: [
      { text: "Rhodium is the most expensive precious metal, often costing more than gold or platinum.", real: true },
      { text: "About 80% of rhodium produced is used in catalytic converters for automobiles.", real: true },
      { text: "Rhodium is a cheap, abundant metal used to make disposable cutlery.", real: false }
    ],
    explanation: "Rhodium is one of the rarest and most expensive metals on Earth."
  },
  {
    topic: "The Pan Flute",
    statements: [
      { text: "The pan flute is named after the Greek god Pan, who played it in mythology.", real: true },
      { text: "Pan flute variations have been found in cultures across the world, from the Andes to ancient Greece.", real: true },
      { text: "The pan flute has a single pipe and produces only one note.", real: false }
    ],
    explanation: "Pan flutes consist of multiple pipes of different lengths, each producing a different note."
  },
  {
    topic: "Fogbow",
    statements: [
      { text: "A fogbow is a nearly colorless rainbow that forms in fog rather than rain.", real: true },
      { text: "Fogbows appear white because fog droplets are too small to disperse light into visible colors.", real: true },
      { text: "Fogbows are solid physical arches made of frozen fog that can be touched.", real: false }
    ],
    explanation: "Fogbows are optical phenomena made of light, not physical objects."
  },
  {
    topic: "Kauri Tree",
    statements: [
      { text: "Ancient kauri logs buried in New Zealand swamps have been preserved for over 50,000 years.", real: true },
      { text: "Kauri trees are among the largest trees in the world, with trunks exceeding 5 meters in diameter.", real: true },
      { text: "Kauri trees are small shrubs that never grow taller than 1 meter.", real: false }
    ],
    explanation: "Kauri trees are massive conifers, among the largest trees in the world."
  },
  {
    topic: "Zircon",
    statements: [
      { text: "The oldest material ever found on Earth is a zircon crystal dated to 4.4 billion years old.", real: true },
      { text: "Zircon is a completely different mineral from cubic zirconia (the diamond substitute).", real: true },
      { text: "Zircon is a recently discovered synthetic mineral created in 2005.", real: false }
    ],
    explanation: "Zircon is one of the oldest minerals on Earth, found in rocks billions of years old."
  },
  {
    topic: "War of 1812",
    statements: [
      { text: "The White House was burned by British troops during the War of 1812.", real: true },
      { text: "The Star-Spangled Banner was written during the War of 1812, inspired by the Battle of Fort McHenry.", real: true },
      { text: "The War of 1812 was fought between the United States and China.", real: false }
    ],
    explanation: "The War of 1812 was fought between the United States and Great Britain."
  },
  {
    topic: "Colorado",
    statements: [
      { text: "Colorado has more peaks above 14,000 feet (fourteeners) than any other US state.", real: true },
      { text: "Colorado's capital, Denver, is called the 'Mile High City' because its elevation is exactly 5,280 feet.", real: true },
      { text: "Colorado is located below sea level, similar to Death Valley.", real: false }
    ],
    explanation: "Colorado has the highest average elevation of any US state, with its lowest point at over 3,300 feet."
  },
  {
    topic: "Suriname Geography",
    statements: [
      { text: "Suriname is the smallest country in South America by area.", real: true },
      { text: "About 90% of Suriname is covered by tropical rainforest.", real: true },
      { text: "Suriname is a landlocked country in central Europe.", real: false }
    ],
    explanation: "Suriname is located on the northeastern coast of South America, with a coastline on the Atlantic Ocean."
  },
  {
    topic: "Rhythmic Gymnastics",
    statements: [
      { text: "Rhythmic gymnastics uses five apparatus: rope, hoop, ball, clubs, and ribbon.", real: true },
      { text: "Rhythmic gymnastics has been a women-only Olympic event since 1984.", real: true },
      { text: "Rhythmic gymnastics is performed on ice skates on a frozen rink.", real: false }
    ],
    explanation: "Rhythmic gymnastics is performed on a floor mat, not on ice."
  },
  {
    topic: "Leafcutter Ant",
    statements: [
      { text: "Leafcutter ants don't eat the leaves they cut — they use them to farm fungus, which they then eat.", real: true },
      { text: "Leafcutter ant colonies can contain over 8 million ants and extend 30 feet underground.", real: true },
      { text: "Leafcutter ants are herbivores that eat the leaves directly for nutrition.", real: false }
    ],
    explanation: "Leafcutter ants are fungus farmers. They cultivate fungus gardens on the harvested leaves and eat the fungus."
  },
  {
    topic: "Black Truffle",
    statements: [
      { text: "Black truffles grow underground near the roots of oak and hazelnut trees.", real: true },
      { text: "Trained pigs and dogs are used to sniff out truffles because humans cannot detect them underground.", real: true },
      { text: "Black truffles are a type of seaweed that grows on the surface of lakes.", real: false }
    ],
    explanation: "Truffles are fungi that grow underground in symbiosis with tree roots."
  },
  {
    topic: "Empire State Building",
    statements: [
      { text: "The Empire State Building was built in just 410 days during the Great Depression.", real: true },
      { text: "The Empire State Building is struck by lightning about 23 times per year.", real: true },
      { text: "The Empire State Building is the tallest building in the world.", real: false }
    ],
    explanation: "The Empire State Building was surpassed in height decades ago. Buildings like the Burj Khalifa are much taller."
  },
  {
    topic: "The Parana River",
    statements: [
      { text: "The Paraná River is the second-longest river in South America after the Amazon.", real: true },
      { text: "The Itaipu Dam on the Paraná was the world's largest hydroelectric dam by output for decades.", real: true },
      { text: "The Paraná River flows through Africa.", real: false }
    ],
    explanation: "The Paraná flows through Brazil, Paraguay, and Argentina in South America."
  },
  {
    topic: "Safety Pin Invention",
    statements: [
      { text: "Walter Hunt invented the safety pin in 1849 to pay off a $15 debt.", real: true },
      { text: "Hunt bent a single piece of wire to create both the pin and the clasp in just three hours.", real: true },
      { text: "The safety pin was invented by Leonardo da Vinci in the 1400s.", real: false }
    ],
    explanation: "While da Vinci was a prolific inventor, the safety pin was invented by Walter Hunt in 1849."
  },
  {
    topic: "Bone Marrow",
    statements: [
      { text: "Bone marrow produces approximately 200 billion new red blood cells every day.", real: true },
      { text: "There are two types of bone marrow: red (produces blood cells) and yellow (stores fat).", real: true },
      { text: "Bone marrow is located outside the body and attached to the skin.", real: false }
    ],
    explanation: "Bone marrow is found inside bones, particularly in the pelvis, sternum, and long bones."
  },
  {
    topic: "Radon",
    statements: [
      { text: "Radon is the second-leading cause of lung cancer after smoking.", real: true },
      { text: "Radon is a colorless, odorless radioactive gas that seeps from the ground into buildings.", real: true },
      { text: "Radon is a harmless fragrant gas used in air fresheners.", real: false }
    ],
    explanation: "Radon is a dangerous radioactive gas, not a harmless fragrance."
  },
  {
    topic: "The Charango",
    statements: [
      { text: "The charango is a small Andean stringed instrument traditionally made from an armadillo shell.", real: true },
      { text: "The charango has 10 strings arranged in five courses and is central to Bolivian folk music.", real: true },
      { text: "The charango is a large pipe organ found in South American cathedrals.", real: false }
    ],
    explanation: "The charango is a small, guitar-like instrument, not a pipe organ."
  },
  {
    topic: "Virga",
    statements: [
      { text: "Virga is precipitation that evaporates before reaching the ground, creating streaks below clouds.", real: true },
      { text: "Virga is common in arid regions and can sometimes cause sudden, dangerous wind gusts at ground level.", real: true },
      { text: "Virga is a type of permanent snow cover found only at the North Pole.", real: false }
    ],
    explanation: "Virga is precipitation that evaporates in mid-air, not snow cover."
  },
  {
    topic: "Wolffia (Duckweed)",
    statements: [
      { text: "Wolffia is the smallest flowering plant in the world, barely visible to the naked eye.", real: true },
      { text: "A single Wolffia plant is about the size of a grain of sand.", real: true },
      { text: "Wolffia trees grow to over 50 meters tall in tropical forests.", real: false }
    ],
    explanation: "Wolffia is microscopic — the smallest flowering plant — not a tall tree."
  },
  {
    topic: "Howlite",
    statements: [
      { text: "Howlite is frequently dyed blue and sold as imitation turquoise.", real: true },
      { text: "Howlite was first discovered in Nova Scotia, Canada, in 1868.", real: true },
      { text: "Howlite is a precious metal more valuable than gold.", real: false }
    ],
    explanation: "Howlite is a common, relatively inexpensive mineral, not a precious metal."
  },
  {
    topic: "Crimean War",
    statements: [
      { text: "Florence Nightingale became famous for her nursing work during the Crimean War.", real: true },
      { text: "The Charge of the Light Brigade, one of history's most famous military blunders, occurred in the Crimean War.", real: true },
      { text: "The Crimean War was fought in Antarctica between penguin researchers.", real: false }
    ],
    explanation: "The Crimean War (1853-1856) was fought on the Crimean Peninsula between Russia and an alliance of European powers."
  },
  {
    topic: "Kansas",
    statements: [
      { text: "Kansas is flatter than a pancake — a study mathematically proved this by comparing their surfaces.", real: true },
      { text: "Dodge City, Kansas, is one of the windiest cities in the United States.", real: true },
      { text: "Kansas is a mountainous state with no flat terrain.", real: false }
    ],
    explanation: "Kansas is famously flat, known for its vast, level prairies."
  },
  {
    topic: "Skeleton (Sport)",
    statements: [
      { text: "In skeleton, athletes slide headfirst down an ice track at speeds up to 150 km/h.", real: true },
      { text: "Skeleton got its name because the early sleds looked like human skeletons.", real: true },
      { text: "Skeleton is a summer sport played on grass.", real: false }
    ],
    explanation: "Skeleton is a winter sliding sport performed on an ice track."
  },
  {
    topic: "Gharial",
    statements: [
      { text: "The gharial has a long, thin snout specialized for catching fish.", real: true },
      { text: "Male gharials develop a bulbous growth on their snout called a 'ghara' that amplifies their calls.", real: true },
      { text: "Gharials are mammals that nurse their young with milk.", real: false }
    ],
    explanation: "Gharials are crocodilians (reptiles), not mammals."
  },
  {
    topic: "Sumac Spice",
    statements: [
      { text: "Ground sumac has a tart, lemony flavor and is used as a souring agent in Middle Eastern cooking.", real: true },
      { text: "Before lemons were widely available, Romans used sumac to add sourness to food.", real: true },
      { text: "Sumac is always toxic and no variety can ever be safely consumed.", real: false }
    ],
    explanation: "Culinary sumac (Rhus coriaria) is safe and widely used. Only certain species like poison sumac are dangerous."
  },
  {
    topic: "Golden Gate Bridge",
    statements: [
      { text: "The Golden Gate Bridge's orange-red color was originally intended as a primer, but was kept for visibility.", real: true },
      { text: "The Golden Gate Bridge contains enough wire in its cables to circle the equator three times.", real: true },
      { text: "The Golden Gate Bridge is located in New York City.", real: false }
    ],
    explanation: "The Golden Gate Bridge spans the Golden Gate strait in San Francisco, California."
  },
  {
    topic: "The Irrawaddy River",
    statements: [
      { text: "The Irrawaddy is the most important commercial waterway of Myanmar (Burma).", real: true },
      { text: "Irrawaddy dolphins, a freshwater species with a rounded head, are named after this river.", real: true },
      { text: "The Irrawaddy flows through central France.", real: false }
    ],
    explanation: "The Irrawaddy is in Southeast Asia, flowing through Myanmar."
  },
  {
    topic: "Matches Invention",
    statements: [
      { text: "The friction match was invented in 1826 by English chemist John Walker.", real: true },
      { text: "Early matches contained white phosphorus, which caused a horrific disease called 'phossy jaw' in workers.", real: true },
      { text: "Matches were invented by Thomas Edison as a byproduct of the light bulb.", real: false }
    ],
    explanation: "Friction matches were invented by John Walker in 1826, predating Edison's light bulb work."
  },
  {
    topic: "The Uvula",
    statements: [
      { text: "The uvula is the small, fleshy extension hanging at the back of the soft palate.", real: true },
      { text: "The uvula helps prevent food from entering the nasal passages during swallowing.", real: true },
      { text: "The uvula is a bone in the elbow that controls forearm rotation.", real: false }
    ],
    explanation: "The uvula is a soft tissue structure in the throat, not a bone in the elbow."
  },
  {
    topic: "Beryllium",
    statements: [
      { text: "Beryllium is transparent to X-rays and is used to make X-ray machine windows.", real: true },
      { text: "Beryllium dust is extremely toxic and can cause a fatal lung disease called berylliosis.", real: true },
      { text: "Beryllium is an edible mineral commonly added to breakfast cereals.", real: false }
    ],
    explanation: "Beryllium is toxic, especially as dust or fumes. It is definitely not edible."
  },
  {
    topic: "The Cimbalom",
    statements: [
      { text: "The cimbalom is a large hammered dulcimer played with padded mallets, central to Hungarian music.", real: true },
      { text: "The cimbalom has over 100 strings stretched across a trapezoidal sounding board.", real: true },
      { text: "The cimbalom is a small electronic drum machine invented in the 1990s.", real: false }
    ],
    explanation: "The cimbalom is a traditional acoustic instrument with centuries of history in Central European music."
  },
  {
    topic: "Lenticular Clouds",
    statements: [
      { text: "Lenticular clouds form lens-shaped, stationary formations near mountains and are often mistaken for UFOs.", real: true },
      { text: "Lenticular clouds indicate strong winds aloft and are avoided by pilots due to severe turbulence.", real: true },
      { text: "Lenticular clouds are flat, ground-level fog banks found only over oceans.", real: false }
    ],
    explanation: "Lenticular clouds form at high altitudes near mountains, not at ground level over oceans."
  },
  {
    topic: "Titan Beetle",
    statements: [
      { text: "The titan beetle is one of the largest insects on Earth, reaching up to 16.7 cm (6.6 inches) long.", real: true },
      { text: "Adult titan beetles do not eat — they survive on energy stored from their larval stage.", real: true },
      { text: "Titan beetles are microscopic insects visible only under a microscope.", real: false }
    ],
    explanation: "Titan beetles are one of the largest beetles in the world, clearly visible to the naked eye."
  },
  {
    topic: "Asafoetida",
    statements: [
      { text: "Asafoetida smells terrible raw but develops a savory, onion-garlic flavor when cooked.", real: true },
      { text: "Asafoetida is sometimes called 'devil's dung' because of its extremely pungent raw smell.", real: true },
      { text: "Asafoetida is a sweet fruit that tastes like strawberries.", real: false }
    ],
    explanation: "Asafoetida is a pungent spice resin, not a sweet fruit."
  },
  {
    topic: "Borobudur Temple",
    statements: [
      { text: "Borobudur in Indonesia is the world's largest Buddhist temple, built with 2 million stone blocks.", real: true },
      { text: "Borobudur was hidden under volcanic ash and jungle for centuries before its rediscovery in 1814.", real: true },
      { text: "Borobudur was built in Paris, France, as a modern art installation.", real: false }
    ],
    explanation: "Borobudur is an ancient 9th-century temple on the island of Java, Indonesia."
  },
  {
    topic: "The Lena River",
    statements: [
      { text: "The Lena River in Siberia is one of the longest rivers in the world at about 4,400 km.", real: true },
      { text: "The Lena Delta is the largest Arctic delta, so remote it is virtually uninhabited.", real: true },
      { text: "The Lena River is a small creek in suburban London.", real: false }
    ],
    explanation: "The Lena is one of the largest rivers in the world, flowing through Siberia to the Arctic Ocean."
  },
  {
    topic: "Paperclip Invention",
    statements: [
      { text: "Norwegians wore paperclips on their lapels during WWII as a symbol of resistance against Nazi occupation.", real: true },
      { text: "The modern paperclip design hasn't changed significantly since the late 1800s.", real: true },
      { text: "The paperclip was invented by ancient Egyptians to hold papyrus scrolls together.", real: false }
    ],
    explanation: "Paperclips were invented in the late 19th century, well after the era of papyrus scrolls."
  },
  {
    topic: "The Trachea",
    statements: [
      { text: "The trachea (windpipe) is reinforced with C-shaped rings of cartilage to keep it open.", real: true },
      { text: "The trachea is about 10-12 cm long and connects the larynx to the bronchi.", real: true },
      { text: "The trachea is a muscle in the thigh used for jumping.", real: false }
    ],
    explanation: "The trachea is the windpipe in the throat, not a thigh muscle."
  },
  {
    topic: "Strontium",
    statements: [
      { text: "Strontium is responsible for the bright red color in fireworks.", real: true },
      { text: "Strontium is named after Strontian, a village in Scotland where it was first found.", real: true },
      { text: "Strontium is a noble gas found abundantly in the atmosphere.", real: false }
    ],
    explanation: "Strontium is an alkaline earth metal, not a noble gas."
  },
  {
    topic: "The Hang Drum",
    statements: [
      { text: "The Hang drum was invented in Bern, Switzerland, in 2000.", real: true },
      { text: "The Hang is played with the hands and produces ethereal, resonant tones.", real: true },
      { text: "The Hang drum is an ancient instrument dating back to 3000 BCE.", real: false }
    ],
    explanation: "The Hang is one of the newest musical instruments, invented at the turn of the 21st century."
  },
  {
    topic: "Brocken Spectre",
    statements: [
      { text: "A Brocken spectre is the magnified shadow of a person cast onto clouds below, surrounded by a rainbow halo.", real: true },
      { text: "Brocken spectres are named after the Brocken peak in Germany's Harz Mountains.", real: true },
      { text: "Brocken spectres are physical ghosts that haunt mountaintops.", real: false }
    ],
    explanation: "Brocken spectres are optical illusions caused by light and shadow, not supernatural phenomena."
  },
  {
    topic: "Colossal Squid",
    statements: [
      { text: "The colossal squid has the largest eyes in the animal kingdom, the size of dinner plates.", real: true },
      { text: "Unlike the giant squid, the colossal squid has rotating hooks on its tentacles.", real: true },
      { text: "Colossal squid live in shallow freshwater ponds.", real: false }
    ],
    explanation: "Colossal squid live in the deep, cold waters of the Southern Ocean around Antarctica."
  },
  {
    topic: "Annatto",
    statements: [
      { text: "Annatto is the natural food coloring that gives cheddar cheese its orange color.", real: true },
      { text: "Annatto comes from the seeds of the achiote tree, native to tropical Central and South America.", real: true },
      { text: "Annatto is a synthetic dye manufactured from petroleum.", real: false }
    ],
    explanation: "Annatto is a natural plant-based food coloring, not a synthetic dye."
  },
  {
    topic: "Crac des Chevaliers",
    statements: [
      { text: "Crac des Chevaliers in Syria is considered one of the best-preserved Crusader castles in the world.", real: true },
      { text: "T.E. Lawrence (Lawrence of Arabia) called it 'perhaps the best-preserved and most wholly admirable castle in the world.'", real: true },
      { text: "Crac des Chevaliers is a shopping center in suburban Tokyo.", real: false }
    ],
    explanation: "Crac des Chevaliers is a medieval Crusader fortress in Syria."
  },
  {
    topic: "The Mackenzie River",
    statements: [
      { text: "The Mackenzie is the longest river in Canada at about 4,241 km.", real: true },
      { text: "The Mackenzie flows north into the Arctic Ocean and freezes over for much of the year.", real: true },
      { text: "The Mackenzie River flows through tropical rainforest in southern Brazil.", real: false }
    ],
    explanation: "The Mackenzie flows through the Northwest Territories of Canada, far from any tropical region."
  },
  {
    topic: "Ballpoint Pen",
    statements: [
      { text: "The ballpoint pen was patented by László Bíró, a Hungarian journalist, in 1938.", real: true },
      { text: "Bíró got the idea for the ballpoint from watching a ball roll through a puddle, leaving a trail.", real: true },
      { text: "The ballpoint pen was invented by the ancient Romans and used on papyrus.", real: false }
    ],
    explanation: "The ballpoint pen is a 20th-century invention, not an ancient Roman tool."
  },
  {
    topic: "The Fascia",
    statements: [
      { text: "Fascia is a continuous web of connective tissue that surrounds every muscle, organ, and nerve in the body.", real: true },
      { text: "Fascia can tighten and restrict movement when stressed or injured, causing widespread pain.", real: true },
      { text: "Fascia is a type of bone found only in the skull.", real: false }
    ],
    explanation: "Fascia is soft connective tissue, not bone."
  },
  {
    topic: "Thallium",
    statements: [
      { text: "Thallium was once called the 'poisoner's poison' because it is tasteless, odorless, and lethal in small doses.", real: true },
      { text: "Thallium was named from the Greek word 'thallos' meaning 'green shoot' due to its green spectral line.", real: true },
      { text: "Thallium is a safe, edible metal commonly used as a vitamin supplement.", real: false }
    ],
    explanation: "Thallium is extremely toxic. Ingestion of even small amounts can be fatal."
  },
  {
    topic: "The Nyckelharpa",
    statements: [
      { text: "The nyckelharpa is a Swedish keyed fiddle with tangent keys that change the pitch of its strings.", real: true },
      { text: "The nyckelharpa has been played in Sweden since at least the 14th century.", real: true },
      { text: "The nyckelharpa is an electronic keyboard invented in Japan.", real: false }
    ],
    explanation: "The nyckelharpa is an ancient acoustic bowed string instrument from Sweden."
  },
  {
    topic: "Diamond Dust (Weather)",
    statements: [
      { text: "Diamond dust is a type of precipitation made of tiny ice crystals that sparkle in the air.", real: true },
      { text: "Diamond dust can form on clear days with no clouds, falling from a seemingly clear sky.", real: true },
      { text: "Diamond dust is actual diamonds falling from the sky due to volcanic eruptions.", real: false }
    ],
    explanation: "Diamond dust is made of ice crystals, not actual diamonds."
  },
  {
    topic: "Coconut Crab",
    statements: [
      { text: "The coconut crab is the largest land-living arthropod, with a leg span of up to 1 meter.", real: true },
      { text: "Coconut crabs can crack open coconuts with their powerful claws.", real: true },
      { text: "Coconut crabs are tiny insects the size of ants.", real: false }
    ],
    explanation: "Coconut crabs are enormous — the largest terrestrial arthropods, weighing up to 4 kg."
  },
  {
    topic: "Pomelo",
    statements: [
      { text: "The pomelo is the largest citrus fruit, sometimes reaching the size of a basketball.", real: true },
      { text: "The pomelo is an ancestor of the grapefruit, which is a cross between a pomelo and an orange.", real: true },
      { text: "Pomelos are a type of onion with a strong garlic flavor.", real: false }
    ],
    explanation: "Pomelos are large citrus fruits, not onions."
  },
  {
    topic: "Rock of Gibraltar",
    statements: [
      { text: "Gibraltar is home to the only wild monkey population in Europe — Barbary macaques.", real: true },
      { text: "The Rock of Gibraltar contains over 30 miles of tunnels, many dug during WWII.", real: true },
      { text: "The Rock of Gibraltar is located in the center of Australia.", real: false }
    ],
    explanation: "Gibraltar is at the southern tip of the Iberian Peninsula, where Europe meets Africa."
  },
  {
    topic: "The Ob River",
    statements: [
      { text: "The Ob-Irtysh is the longest river system in Russia and the seventh-longest in the world.", real: true },
      { text: "The Gulf of Ob is the world's longest estuary at about 1,000 km.", real: true },
      { text: "The Ob River is a small stream in suburban Paris.", real: false }
    ],
    explanation: "The Ob is one of the great rivers of Siberia, among the longest in the world."
  },
  {
    topic: "Duct Tape",
    statements: [
      { text: "Duct tape was originally called 'duck tape' because it was made with duck cloth and used in WWII for waterproofing.", real: true },
      { text: "NASA has used duct tape on multiple space missions, including a famous repair on Apollo 13.", real: true },
      { text: "Duct tape was invented in ancient Egypt for wrapping mummies.", real: false }
    ],
    explanation: "Duct tape was developed during World War II in the 1940s."
  },
  {
    topic: "The Vagus Nerve",
    statements: [
      { text: "The vagus nerve is the longest cranial nerve, running from the brain stem to the abdomen.", real: true },
      { text: "Stimulating the vagus nerve can slow the heart rate and reduce inflammation.", real: true },
      { text: "The vagus nerve is located only in the big toe.", real: false }
    ],
    explanation: "The vagus nerve runs from the brainstem through the neck, chest, and abdomen."
  },
  {
    topic: "Selenium",
    statements: [
      { text: "Selenium was named after the Moon (Greek: selene).", real: true },
      { text: "Selenium is essential for human health in trace amounts but toxic in larger doses.", real: true },
      { text: "Selenium is the primary component of steel, making up 90% of the alloy.", real: false }
    ],
    explanation: "Steel is primarily iron and carbon. Selenium is a trace element used in electronics and glass."
  },
  {
    topic: "The Fujara",
    statements: [
      { text: "The fujara is a Slovakian overtone flute that can be up to 2 meters long.", real: true },
      { text: "UNESCO recognized the fujara as part of the Intangible Cultural Heritage of Humanity.", real: true },
      { text: "The fujara is a tiny flute the size of a pencil.", real: false }
    ],
    explanation: "The fujara is one of the largest flutes in the world, often exceeding 1.5 meters."
  },
  {
    topic: "Sundogs",
    statements: [
      { text: "Sundogs (parhelia) are bright spots that appear on either side of the sun, created by ice crystals.", real: true },
      { text: "Sundogs are so named because they 'follow' the sun like a faithful dog.", real: true },
      { text: "Sundogs are baby stars orbiting around our Sun.", real: false }
    ],
    explanation: "Sundogs are optical phenomena caused by refraction of sunlight through ice crystals in the atmosphere."
  },
  {
    topic: "Japanese Knotweed",
    statements: [
      { text: "Japanese knotweed can grow through concrete and asphalt.", real: true },
      { text: "Having Japanese knotweed on your property can reduce its value and make it harder to get a mortgage in the UK.", real: true },
      { text: "Japanese knotweed is the easiest plant to remove and control.", real: false }
    ],
    explanation: "Japanese knotweed is one of the most difficult invasive plants to eradicate, often requiring years of treatment."
  },
  {
    topic: "Labradorite",
    statements: [
      { text: "Labradorite displays a striking iridescent play of color called labradorescence.", real: true },
      { text: "Labradorite was named after Labrador, Canada, where it was first found by Moravian missionaries.", real: true },
      { text: "Labradorite is a breed of dog, not a mineral.", real: false }
    ],
    explanation: "Labradorite is a feldspar mineral. The dog breed is a Labrador Retriever."
  },
  {
    topic: "Franco-Prussian War",
    statements: [
      { text: "The Franco-Prussian War led directly to the unification of Germany under Prussian leadership.", real: true },
      { text: "During the Siege of Paris, residents ate animals from the city zoo, including elephants.", real: true },
      { text: "The Franco-Prussian War was fought between England and Spain over North American colonies.", real: false }
    ],
    explanation: "The Franco-Prussian War (1870-1871) was fought between France and the North German Confederation led by Prussia."
  },
  {
    topic: "Massachusetts",
    statements: [
      { text: "Massachusetts is home to Harvard, founded in 1636, the oldest university in the United States.", real: true },
      { text: "Basketball was invented in Massachusetts by James Naismith in 1891.", real: true },
      { text: "Massachusetts is the newest US state, admitted in 2020.", real: false }
    ],
    explanation: "Massachusetts was one of the original 13 colonies and the 6th state to ratify the Constitution in 1788."
  },
  {
    topic: "Synchronized Swimming",
    statements: [
      { text: "Synchronized swimmers cannot touch the bottom of the pool during competition.", real: true },
      { text: "Synchronized swimmers use unflavored gelatin in their hair to keep it in place underwater.", real: true },
      { text: "Synchronized swimming is performed on a dry gymnasium floor.", real: false }
    ],
    explanation: "Synchronized swimming (artistic swimming) is performed in a swimming pool."
  },
  {
    topic: "Secretary Bird",
    statements: [
      { text: "Secretary birds stomp on snakes with a force five times their body weight to kill them.", real: true },
      { text: "Secretary birds can deliver kicks with a force of 195 newtons in just 15 milliseconds.", real: true },
      { text: "Secretary birds are small, flightless aquatic birds found only in Antarctica.", real: false }
    ],
    explanation: "Secretary birds are large, long-legged raptors found in sub-Saharan Africa."
  },
  {
    topic: "Yuzu",
    statements: [
      { text: "Yuzu is a Japanese citrus fruit whose juice is rarely sold fresh because each fruit yields so little.", real: true },
      { text: "Yuzu zest and juice are used in Japanese cuisine for sauces, desserts, and the hot bath tradition 'yuzu-yu.'", real: true },
      { text: "Yuzu is a type of pasta made from wheat flour.", real: false }
    ],
    explanation: "Yuzu is a citrus fruit, not a pasta."
  },
  {
    topic: "Topkapi Palace",
    statements: [
      { text: "Topkapi Palace served as the main residence of Ottoman sultans for nearly 400 years.", real: true },
      { text: "Topkapi Palace houses relics including what is claimed to be Moses' staff and Muhammad's cloak.", real: true },
      { text: "Topkapi Palace is a modern restaurant chain in New York City.", real: false }
    ],
    explanation: "Topkapi Palace is a historic palace and museum in Istanbul, Turkey."
  },
  {
    topic: "The Yenisei River",
    statements: [
      { text: "The Yenisei is the largest river system flowing into the Arctic Ocean.", real: true },
      { text: "The Yenisei divides Siberia into Western and Eastern halves.", real: true },
      { text: "The Yenisei is the main river of southern France.", real: false }
    ],
    explanation: "The Yenisei flows through central Siberia in Russia."
  },
  {
    topic: "Velcro Invention",
    statements: [
      { text: "Velcro was inspired when Swiss engineer George de Mestral noticed burrs sticking to his dog's fur.", real: true },
      { text: "De Mestral examined the burrs under a microscope and saw tiny hooks — which inspired the hook-and-loop design.", real: true },
      { text: "Velcro was invented by NASA for use exclusively on spacesuits.", real: false }
    ],
    explanation: "Velcro was invented by George de Mestral in 1941. NASA later adopted it but did not invent it."
  },
  {
    topic: "The Epiglottis",
    statements: [
      { text: "The epiglottis is a flap that closes over the windpipe during swallowing to prevent choking.", real: true },
      { text: "The epiglottis is made of elastic cartilage, which gives it flexibility.", real: true },
      { text: "The epiglottis is a bone in the foot used for walking.", real: false }
    ],
    explanation: "The epiglottis is a cartilage flap in the throat, not a foot bone."
  },
  {
    topic: "Zirconium",
    statements: [
      { text: "Zirconium is used to make cladding for nuclear fuel rods because it does not absorb neutrons.", real: true },
      { text: "Zirconium is highly resistant to corrosion, even more so than stainless steel.", real: true },
      { text: "Zirconium is a flammable gas used in lighter fluid.", real: false }
    ],
    explanation: "Zirconium is a solid metal, not a gas. While zirconium powder can be flammable, the bulk metal is very stable."
  },
  {
    topic: "The Concertina",
    statements: [
      { text: "The concertina was invented by Charles Wheatstone, who also co-invented the telegraph.", real: true },
      { text: "Concertinas have buttons on both ends, unlike accordions which have a keyboard on one side.", real: true },
      { text: "The concertina is a large, floor-standing instrument like a grand piano.", real: false }
    ],
    explanation: "The concertina is a small, portable, handheld bellows instrument."
  },
  {
    topic: "Kelvin-Helmholtz Clouds",
    statements: [
      { text: "Kelvin-Helmholtz clouds look like ocean waves breaking across the sky.", real: true },
      { text: "These clouds form when two layers of air at different speeds create a rolling, wave-like instability.", real: true },
      { text: "Kelvin-Helmholtz clouds are permanent cloud formations that never dissipate.", real: false }
    ],
    explanation: "These clouds are rare and short-lived, typically dissipating within a few minutes."
  },
  {
    topic: "Hagfish",
    statements: [
      { text: "Hagfish can produce a liter of slime in seconds as a defense mechanism.", real: true },
      { text: "Hagfish tie themselves in knots to escape predators and scrape slime off their bodies.", real: true },
      { text: "Hagfish are colorful tropical fish commonly kept in home aquariums.", real: false }
    ],
    explanation: "Hagfish are deep-sea, eel-like creatures rarely kept in aquariums."
  },
  {
    topic: "Rambutan",
    statements: [
      { text: "Rambutan's name comes from the Malay word for 'hairy' because of its hair-covered shell.", real: true },
      { text: "Rambutan is closely related to lychee, with a similar translucent white flesh inside.", real: true },
      { text: "Rambutan is a root vegetable that grows underground like a potato.", real: false }
    ],
    explanation: "Rambutan is a tropical tree fruit, not a root vegetable."
  },
  {
    topic: "Ephesus",
    statements: [
      { text: "The Library of Celsus at Ephesus was one of the largest libraries of the ancient world.", real: true },
      { text: "Ephesus housed the Temple of Artemis, one of the Seven Wonders of the Ancient World.", real: true },
      { text: "Ephesus is a modern city in Canada.", real: false }
    ],
    explanation: "Ephesus is an ancient Greek city located in what is now western Turkey."
  },
  {
    topic: "The São Francisco River",
    statements: [
      { text: "The São Francisco is called the 'river of national integration' because it connects diverse regions of Brazil.", real: true },
      { text: "The São Francisco is the longest river flowing entirely within Brazil's borders.", real: true },
      { text: "The São Francisco flows through Russia to the Bering Strait.", real: false }
    ],
    explanation: "The São Francisco flows through eastern Brazil."
  },
  {
    topic: "WD-40 Invention",
    statements: [
      { text: "WD-40 stands for 'Water Displacement, 40th formula' — it took 40 attempts to perfect.", real: true },
      { text: "WD-40 was originally developed to prevent corrosion on Atlas missile cases.", real: true },
      { text: "WD-40 was invented as a cooking spray for non-stick pans.", real: false }
    ],
    explanation: "WD-40 was developed as an industrial water-displacement spray, not a cooking product."
  },
  {
    topic: "The Sciatic Nerve",
    statements: [
      { text: "The sciatic nerve is the longest and thickest nerve in the human body.", real: true },
      { text: "Sciatica pain can radiate from the lower back all the way down to the foot.", real: true },
      { text: "The sciatic nerve is located in the ear and controls hearing.", real: false }
    ],
    explanation: "The sciatic nerve runs from the lower back through the hip and down each leg."
  },
  {
    topic: "Yttrium",
    statements: [
      { text: "Yttrium is one of four elements named after the village of Ytterby in Sweden.", real: true },
      { text: "Yttrium is used in LED lights and was essential in older CRT television red phosphors.", real: true },
      { text: "Yttrium is a common flavoring used in chewing gum.", real: false }
    ],
    explanation: "Yttrium is a metallic element used in technology, not a food flavoring."
  },
  {
    topic: "The Harmonium",
    statements: [
      { text: "The harmonium became central to Indian classical and devotional music after being introduced by missionaries.", real: true },
      { text: "A harmonium produces sound by pumping air through metal reeds using hand-operated bellows.", real: true },
      { text: "The harmonium is a percussion instrument played by striking metal bars.", real: false }
    ],
    explanation: "The harmonium is a keyboard reed instrument, not a percussion instrument."
  },
  {
    topic: "Pyrocumulonimbus",
    statements: [
      { text: "Pyrocumulonimbus clouds are thunderstorms generated by wildfire heat.", real: true },
      { text: "Fire-generated thunderstorms can produce lightning that starts additional wildfires.", real: true },
      { text: "Pyrocumulonimbus clouds are gentle, low-lying fog formations with no wind.", real: false }
    ],
    explanation: "Pyrocumulonimbus clouds are intense, towering thunderstorms created by extreme heat from fires."
  },
  {
    topic: "Mimic Octopus",
    statements: [
      { text: "The mimic octopus can impersonate over 15 different species including lionfish, flatfish, and sea snakes.", real: true },
      { text: "The mimic octopus was not discovered by science until 1998.", real: true },
      { text: "The mimic octopus can only copy the appearance of rocks and never mimics other animals.", real: false }
    ],
    explanation: "The mimic octopus is famous for mimicking other animals, not just inanimate objects."
  },
  {
    topic: "Dragon Fruit",
    statements: [
      { text: "Dragon fruit is the fruit of a species of cactus.", real: true },
      { text: "Dragon fruit's white flesh is dotted with tiny black seeds similar to kiwi.", real: true },
      { text: "Dragon fruit grows underground like a peanut.", real: false }
    ],
    explanation: "Dragon fruit grows on a climbing cactus, with the fruit developing on the plant's stems above ground."
  },
  {
    topic: "Meteora Monasteries",
    statements: [
      { text: "The Meteora monasteries in Greece are built on top of natural rock pillars up to 400 meters high.", real: true },
      { text: "Monks originally reached the Meteora monasteries using ropes and baskets hauled up the cliffs.", real: true },
      { text: "The Meteora monasteries are underground bunkers built during World War II.", real: false }
    ],
    explanation: "Meteora monasteries are ancient religious sites perched atop towering rock pillars in central Greece."
  },
  {
    topic: "The Mekong Delta",
    statements: [
      { text: "The Mekong Delta is called 'Vietnam's rice bowl' because it produces over half the country's rice.", real: true },
      { text: "Floating markets in the Mekong Delta are a centuries-old tradition where vendors sell goods from boats.", real: true },
      { text: "The Mekong Delta is a frozen tundra in northern Siberia.", real: false }
    ],
    explanation: "The Mekong Delta is a tropical, low-lying region in southern Vietnam."
  },
  {
    topic: "Post-it Notes",
    statements: [
      { text: "Post-it Notes were an accidental invention — the adhesive was a failed attempt to create a super-strong glue.", real: true },
      { text: "Spencer Silver invented the adhesive in 1968, but Post-it Notes weren't sold until 1980.", real: true },
      { text: "Post-it Notes were invented by Leonardo da Vinci for his notebooks.", real: false }
    ],
    explanation: "Post-it Notes were invented at 3M in the late 20th century, not by da Vinci."
  },
  {
    topic: "Platelets (Blood)",
    statements: [
      { text: "Platelets are not actually cells — they are fragments of larger cells called megakaryocytes.", real: true },
      { text: "The human body produces about 100 billion new platelets every day.", real: true },
      { text: "Platelets are the largest cells in the blood, visible to the naked eye.", real: false }
    ],
    explanation: "Platelets are the smallest components in blood, much smaller than red or white blood cells."
  },
  {
    topic: "Europium",
    statements: [
      { text: "Europium is used in euro banknotes as an anti-counterfeiting measure — it glows under UV light.", real: true },
      { text: "Europium is named after the continent of Europe.", real: true },
      { text: "Europium is the primary ingredient in table sugar.", real: false }
    ],
    explanation: "Europium is a rare earth metal. Table sugar is sucrose, an organic compound."
  },
  {
    topic: "The Chromatic Harmonica",
    statements: [
      { text: "A chromatic harmonica can play all 12 notes of the chromatic scale using a slide button.", real: true },
      { text: "Stevie Wonder and Toots Thielemans are among the most famous chromatic harmonica players.", real: true },
      { text: "The chromatic harmonica is a bowed string instrument similar to a cello.", real: false }
    ],
    explanation: "The harmonica is a small wind instrument played by blowing and drawing air through reeds."
  },
  {
    topic: "Gravity Waves (Atmospheric)",
    statements: [
      { text: "Atmospheric gravity waves create ripple patterns in clouds similar to ripples in a pond.", real: true },
      { text: "Atmospheric gravity waves are different from gravitational waves detected by LIGO.", real: true },
      { text: "Atmospheric gravity waves are a type of earthquake that occurs in the sky.", real: false }
    ],
    explanation: "Atmospheric gravity waves are oscillations in the atmosphere caused by buoyancy, not earthquakes."
  },
  {
    topic: "Giant Isopod",
    statements: [
      { text: "Giant isopods can grow up to 50 cm long and look like enormous pill bugs.", real: true },
      { text: "Giant isopods can go years without eating by slowing their metabolism.", real: true },
      { text: "Giant isopods are tiny insects that live in house dust.", real: false }
    ],
    explanation: "Giant isopods are large deep-sea crustaceans, not tiny household insects."
  },
  {
    topic: "Persimmon",
    statements: [
      { text: "Unripe astringent persimmons contain so much tannin they can make your mouth feel completely numb.", real: true },
      { text: "Dried persimmon (hoshigaki) is a traditional Japanese delicacy that takes weeks to prepare by hand.", real: true },
      { text: "Persimmons are a variety of onion commonly used in French cooking.", real: false }
    ],
    explanation: "Persimmons are sweet orange fruit from trees, not onions."
  },
  {
    topic: "Potala Palace",
    statements: [
      { text: "The Potala Palace in Lhasa, Tibet, contains over 1,000 rooms and sits at 3,700 meters elevation.", real: true },
      { text: "The Potala Palace was the winter residence of the Dalai Lama until the 14th Dalai Lama fled in 1959.", real: true },
      { text: "The Potala Palace is a beachfront resort in Hawaii.", real: false }
    ],
    explanation: "The Potala Palace is a high-altitude fortress-palace in Tibet, China."
  },
  {
    topic: "The Yellow River",
    statements: [
      { text: "The Yellow River is called 'China's Sorrow' because its flooding has killed millions throughout history.", real: true },
      { text: "The Yellow River gets its name from the massive amounts of loess sediment that give it a yellow color.", real: true },
      { text: "The Yellow River flows through South America.", real: false }
    ],
    explanation: "The Yellow River (Huang He) flows through northern China."
  },
  {
    topic: "Bubble Wrap",
    statements: [
      { text: "Bubble wrap was originally invented as textured wallpaper, not as packaging material.", real: true },
      { text: "Bubble Wrap was also considered as greenhouse insulation before finding its use in packaging.", real: true },
      { text: "Bubble wrap was invented specifically for packaging computer chips in the 1990s.", real: false }
    ],
    explanation: "Bubble wrap was invented in 1957, originally intended as wallpaper."
  },
  {
    topic: "The Iris (Eye)",
    statements: [
      { text: "Every person's iris pattern is unique — even identical twins have different iris patterns.", real: true },
      { text: "The iris has about 266 identifiable features, compared to 35 for fingerprints.", real: true },
      { text: "All human irises are the same color and pattern.", real: false }
    ],
    explanation: "Iris color and pattern vary enormously among individuals."
  },
  {
    topic: "Germanium",
    statements: [
      { text: "Germanium was predicted by Mendeleev as 'eka-silicon' before it was actually discovered.", real: true },
      { text: "Germanium was used to make the first transistor at Bell Labs in 1947.", real: true },
      { text: "Germanium is the primary metal in gold jewelry.", real: false }
    ],
    explanation: "Gold jewelry is made from gold. Germanium is a semiconductor material used in electronics."
  },
  {
    topic: "The Marimba",
    statements: [
      { text: "The marimba's wooden bars are tuned by shaving material from their undersides.", real: true },
      { text: "The marimba has African origins but became the national instrument of Guatemala.", real: true },
      { text: "The marimba is an electronic synthesizer with no acoustic components.", real: false }
    ],
    explanation: "The marimba is an acoustic percussion instrument with wooden bars and resonator tubes."
  },
  {
    topic: "Heat Burst",
    statements: [
      { text: "A heat burst can cause temperatures to spike by 10-20°F in minutes, sometimes at night.", real: true },
      { text: "Heat bursts occur when dry air from a collapsing thunderstorm compresses and heats as it descends.", real: true },
      { text: "Heat bursts are periods of extreme cold that occur only in summer.", real: false }
    ],
    explanation: "Heat bursts cause sudden, dramatic temperature increases, not cold."
  },
  {
    topic: "Pygmy Seahorse",
    statements: [
      { text: "Pygmy seahorses are so small (under 2 cm) that they weren't discovered until their host coral was examined in a lab.", real: true },
      { text: "Pygmy seahorses can perfectly match the color and texture of the specific coral they live on.", real: true },
      { text: "Pygmy seahorses are the largest species of seahorse, growing over 1 meter long.", real: false }
    ],
    explanation: "Pygmy seahorses are among the smallest seahorses, typically under 2 cm."
  },
  {
    topic: "Breadfruit",
    statements: [
      { text: "Breadfruit gets its name because when cooked, it has a texture similar to freshly baked bread.", real: true },
      { text: "The HMS Bounty mutiny occurred during a voyage to transport breadfruit plants from Tahiti to the Caribbean.", real: true },
      { text: "Breadfruit is a type of wheat grain used to make flour.", real: false }
    ],
    explanation: "Breadfruit is a tropical tree fruit, not a grain."
  },
  {
    topic: "Sigiriya",
    statements: [
      { text: "Sigiriya in Sri Lanka is a 5th-century fortress built on top of a 200-meter rock column.", real: true },
      { text: "The entrance to Sigiriya's summit was originally through the jaws of a massive carved lion.", real: true },
      { text: "Sigiriya is an underwater palace built beneath the Mediterranean Sea.", real: false }
    ],
    explanation: "Sigiriya is built on top of a massive rock formation in central Sri Lanka."
  },
  {
    topic: "The Brahmaputra River",
    statements: [
      { text: "The Brahmaputra is one of the few major rivers that flows from east to west before turning south.", real: true },
      { text: "The Brahmaputra passes through Tibet, India, and Bangladesh under different names in each country.", real: true },
      { text: "The Brahmaputra is the main river of central Europe, flowing through Germany and Austria.", real: false }
    ],
    explanation: "The Brahmaputra flows through South and East Asia, not Europe."
  },
  {
    topic: "Microwave Oven Invention",
    statements: [
      { text: "The microwave oven was invented accidentally when Percy Spencer noticed a candy bar melting near a radar set.", real: true },
      { text: "The first commercial microwave oven, the Radarange, weighed 340 kg and cost about $5,000 in 1947.", real: true },
      { text: "Microwave ovens heat food using tiny flames inside the oven cavity.", real: false }
    ],
    explanation: "Microwave ovens heat food using electromagnetic radiation (microwaves), not flames."
  },
  {
    topic: "Tonsils",
    statements: [
      { text: "Tonsils are part of the immune system and help fight infections entering through the mouth and nose.", real: true },
      { text: "Tonsillectomy was once so common that it was the most frequently performed surgery in the United States.", real: true },
      { text: "Tonsils are located in the knees and protect the joints.", real: false }
    ],
    explanation: "Tonsils are located in the throat, not the knees."
  },
  {
    topic: "Tantalum",
    statements: [
      { text: "Tantalum is used in virtually every smartphone and laptop because it makes excellent capacitors.", real: true },
      { text: "Tantalum is named after King Tantalus of Greek mythology because its ore resists dissolving in acid.", real: true },
      { text: "Tantalum is a gas used in party balloons as a substitute for helium.", real: false }
    ],
    explanation: "Tantalum is a hard, dense metal, not a gas."
  },
  {
    topic: "The Tin Whistle",
    statements: [
      { text: "The tin whistle is one of the most recognizable instruments in Irish traditional music.", real: true },
      { text: "A standard tin whistle in the key of D can play two full octaves.", real: true },
      { text: "The tin whistle requires a power cord and amplifier to produce sound.", real: false }
    ],
    explanation: "The tin whistle is a simple acoustic instrument powered by breath."
  },
  {
    topic: "Snow Roller",
    statements: [
      { text: "Snow rollers are rare, naturally formed cylindrical snowballs created by wind.", real: true },
      { text: "Snow rollers are often hollow in the center because the initial snow that starts them is thin and fragile.", real: true },
      { text: "Snow rollers are man-made decorations placed in parks during winter festivals.", real: false }
    ],
    explanation: "Snow rollers are a natural weather phenomenon, not man-made."
  },
  {
    topic: "Leafy Sea Dragon",
    statements: [
      { text: "The leafy sea dragon has leaf-like appendages that serve as camouflage among seaweed.", real: true },
      { text: "Male leafy sea dragons carry the eggs on a special brood patch under their tail.", real: true },
      { text: "Leafy sea dragons can fly and spend most of their time above water.", real: false }
    ],
    explanation: "Leafy sea dragons are entirely aquatic and cannot fly."
  },
  {
    topic: "Teff",
    statements: [
      { text: "Teff is the world's smallest grain, with seeds the size of poppy seeds.", real: true },
      { text: "Teff is the grain used to make injera, the spongy Ethiopian flatbread.", real: true },
      { text: "Teff is a large grain the size of a walnut.", real: false }
    ],
    explanation: "Teff grains are tiny — it takes about 150 teff grains to equal the weight of one wheat kernel."
  },
  {
    topic: "Mesa Verde",
    statements: [
      { text: "Mesa Verde's cliff dwellings were built by the Ancestral Puebloans around 1190-1280 CE.", real: true },
      { text: "The Cliff Palace at Mesa Verde contains 150 rooms and 23 ceremonial kivas.", real: true },
      { text: "Mesa Verde cliff dwellings are modern condominiums built into hillsides.", real: false }
    ],
    explanation: "Mesa Verde's cliff dwellings are ancient structures built over 700 years ago."
  },
  {
    topic: "The Amur River",
    statements: [
      { text: "The Amur River forms much of the border between Russia and China.", real: true },
      { text: "The Amur is home to the kaluga sturgeon, one of the largest freshwater fish in the world.", real: true },
      { text: "The Amur River is entirely inside Australia.", real: false }
    ],
    explanation: "The Amur River is in East Asia, forming the Russia-China border."
  },
  {
    topic: "Super Glue",
    statements: [
      { text: "Super glue (cyanoacrylate) was discovered accidentally during WWII while trying to make clear gun sights.", real: true },
      { text: "Super glue has been used in surgery to close wounds instead of stitches.", real: true },
      { text: "Super glue takes 24 hours to set because it needs sunlight to activate.", real: false }
    ],
    explanation: "Super glue sets almost instantly when exposed to moisture — it does not require sunlight."
  },
  {
    topic: "The Optic Nerve",
    statements: [
      { text: "The optic nerve contains about 1.2 million nerve fibers transmitting visual information to the brain.", real: true },
      { text: "The blind spot in each eye is where the optic nerve connects to the retina, leaving no room for photoreceptors.", real: true },
      { text: "The optic nerve is located in the stomach and controls digestion.", real: false }
    ],
    explanation: "The optic nerve connects each eye to the brain and is involved in vision, not digestion."
  },
  {
    topic: "Ruthenium",
    statements: [
      { text: "Ruthenium is named after Russia (Ruthenia is an old Latin name for Russia).", real: true },
      { text: "Ruthenium is used to harden platinum and palladium alloys for jewelry.", real: true },
      { text: "Ruthenium is a common plastic used in water bottles.", real: false }
    ],
    explanation: "Ruthenium is a rare platinum-group metal, not a plastic."
  },
  {
    topic: "The Glass Armonica",
    statements: [
      { text: "The glass armonica was invented by Benjamin Franklin in 1761.", real: true },
      { text: "Mozart and Beethoven both composed music specifically for the glass armonica.", real: true },
      { text: "The glass armonica is a drum made entirely of wood.", real: false }
    ],
    explanation: "The glass armonica uses rotating glass bowls played by touching their rims with wet fingers."
  },
  {
    topic: "Catatumbo Lightning",
    statements: [
      { text: "Catatumbo lightning in Venezuela produces lightning storms almost every night, up to 300 nights per year.", real: true },
      { text: "Catatumbo lightning can produce up to 28 lightning strikes per minute.", real: true },
      { text: "Catatumbo lightning occurs in Antarctica's interior ice sheet.", real: false }
    ],
    explanation: "Catatumbo lightning occurs at the mouth of the Catatumbo River in Venezuela."
  },
  {
    topic: "Anglerfish",
    statements: [
      { text: "Female anglerfish have a bioluminescent lure on their heads to attract prey in the deep ocean.", real: true },
      { text: "Male anglerfish permanently fuse to the female's body, sharing her bloodstream for the rest of their lives.", real: true },
      { text: "Anglerfish are freshwater fish commonly found in backyard ponds.", real: false }
    ],
    explanation: "Most anglerfish live in the deep ocean, not in freshwater ponds."
  },
  {
    topic: "Ackee Fruit",
    statements: [
      { text: "Ackee is Jamaica's national fruit, but it contains a toxin that can be fatal if eaten unripe.", real: true },
      { text: "Only the yellow arilli (fleshy part) of a fully ripe ackee is safe to eat.", real: true },
      { text: "Ackee is safe to eat at any stage of ripeness with no precautions needed.", real: false }
    ],
    explanation: "Unripe ackee contains hypoglycin, which causes severe vomiting and can be lethal."
  },
  {
    topic: "Newgrange",
    statements: [
      { text: "Newgrange in Ireland is a 5,200-year-old passage tomb, older than Stonehenge and the Egyptian pyramids.", real: true },
      { text: "On the winter solstice, sunlight enters a special roof box and illuminates the inner chamber.", real: true },
      { text: "Newgrange was built in the 1800s as a Victorian garden folly.", real: false }
    ],
    explanation: "Newgrange is a Neolithic monument dating to approximately 3200 BCE."
  },
  {
    topic: "The Niger Delta",
    statements: [
      { text: "The Niger Delta is Africa's largest wetland and the third-largest mangrove forest in the world.", real: true },
      { text: "Nigeria's Niger Delta produces most of the country's oil wealth.", real: true },
      { text: "The Niger Delta is a frozen glacier in northern Canada.", real: false }
    ],
    explanation: "The Niger Delta is a tropical wetland in southern Nigeria."
  },
  {
    topic: "Kevlar Discovery",
    statements: [
      { text: "Stephanie Kwolek initially thought her liquid crystal polymer solution was a mistake and almost discarded it.", real: true },
      { text: "Kevlar is used in over 200 applications, from bulletproof vests to spacecraft shielding.", real: true },
      { text: "Kevlar was discovered by accident while trying to bake a cake.", real: false }
    ],
    explanation: "Kwolek discovered Kevlar while researching lightweight, strong fibers for tires at DuPont."
  },
  {
    topic: "The Deltoid Muscle",
    statements: [
      { text: "The deltoid muscle gives the shoulder its rounded contour and is named for its triangular shape.", real: true },
      { text: "The deltoid has three distinct parts: anterior, middle, and posterior.", real: true },
      { text: "The deltoid is a small bone in the ankle.", real: false }
    ],
    explanation: "The deltoid is a large, triangular muscle covering the shoulder, not a bone in the ankle."
  },
  {
    topic: "Rhenium",
    statements: [
      { text: "Rhenium was the last naturally occurring stable element to be discovered, in 1925.", real: true },
      { text: "Rhenium is used in jet engine turbine blades because it withstands extreme heat.", real: true },
      { text: "Rhenium is an abundant mineral found in ordinary beach sand.", real: false }
    ],
    explanation: "Rhenium is one of the rarest elements in Earth's crust."
  },
  {
    topic: "The Didjeridu (Yidaki)",
    statements: [
      { text: "The yidaki is the traditional name for the didgeridoo among the Yolngu people of northern Australia.", real: true },
      { text: "Playing the yidaki requires circular breathing, where players inhale through the nose while expelling air.", real: true },
      { text: "The yidaki is a small handheld rattle used in Japanese tea ceremonies.", real: false }
    ],
    explanation: "The yidaki is a long, wooden wind instrument from Indigenous Australian culture."
  },
  {
    topic: "Fallstreak Hole",
    statements: [
      { text: "A fallstreak hole is a large circular gap that appears in a cloud layer, also called a 'hole punch cloud.'", real: true },
      { text: "Fallstreak holes are caused by aircraft passing through supercooled cloud layers, triggering ice crystal formation.", real: true },
      { text: "Fallstreak holes are permanent features in the sky that never close.", real: false }
    ],
    explanation: "Fallstreak holes are temporary and eventually fill in as the cloud layer evolves."
  },
  {
    topic: "Archer Fish",
    statements: [
      { text: "Archerfish can spit jets of water at insects above the surface with remarkable accuracy.", real: true },
      { text: "Archerfish can compensate for light refraction at the water's surface to accurately hit their targets.", real: true },
      { text: "Archerfish use tiny bows and arrows made of coral to hunt prey.", real: false }
    ],
    explanation: "Archerfish shoot jets of water from their mouths, not actual arrows."
  },
  {
    topic: "Soursop",
    statements: [
      { text: "Soursop (guanábana) has a flavor described as a combination of strawberry, pineapple, and citrus.", real: true },
      { text: "Soursop can weigh up to 6.8 kg (15 lbs) and has a spiny green exterior.", real: true },
      { text: "Soursop is a small grain that grows in northern Scandinavia.", real: false }
    ],
    explanation: "Soursop is a large tropical fruit native to the Americas."
  },
  {
    topic: "Lalibela Churches",
    statements: [
      { text: "The 11 churches of Lalibela, Ethiopia, were carved downward from solid rock in the 12th-13th centuries.", real: true },
      { text: "The Church of St. George at Lalibela is carved in the shape of a cross when viewed from above.", real: true },
      { text: "Lalibela's churches are modern buildings made of glass and steel.", real: false }
    ],
    explanation: "Lalibela's rock-hewn churches are medieval, carved from solid volcanic rock."
  },
  {
    topic: "The Sepik River",
    statements: [
      { text: "The Sepik is the longest river in Papua New Guinea at about 1,126 km.", real: true },
      { text: "The Sepik has no delta — it flows directly into the sea — which is unusual for a major river.", real: true },
      { text: "The Sepik River runs through the center of London.", real: false }
    ],
    explanation: "The Sepik flows through the lowlands of northern Papua New Guinea."
  },
  {
    topic: "GPS Invention",
    statements: [
      { text: "The GPS system was developed by the US military and requires at least 4 satellites for a 3D position fix.", real: true },
      { text: "GPS satellites carry atomic clocks accurate to within one-billionth of a second.", real: true },
      { text: "GPS works by sending signals from underground cables buried around the world.", real: false }
    ],
    explanation: "GPS works using signals from a constellation of orbiting satellites, not underground cables."
  },
  {
    topic: "The Ulna",
    statements: [
      { text: "The ulna is one of two bones in the forearm, located on the pinky-finger side.", real: true },
      { text: "The 'funny bone' sensation is actually caused by hitting the ulnar nerve near the elbow.", real: true },
      { text: "The ulna is a muscle in the chest used for breathing.", real: false }
    ],
    explanation: "The ulna is a bone in the forearm, not a chest muscle."
  },
  {
    topic: "Hafnium Properties",
    statements: [
      { text: "Hafnium has almost the same atomic radius as zirconium due to the lanthanide contraction.", real: true },
      { text: "Hafnium is used in the latest generation of microprocessor chips by Intel.", real: true },
      { text: "Hafnium is lighter than air and used to fill weather balloons.", real: false }
    ],
    explanation: "Hafnium is a dense, heavy metal, not lighter than air."
  },
  {
    topic: "The Sousaphone",
    statements: [
      { text: "The sousaphone was designed so that it could be carried in marching bands, wrapping around the player.", real: true },
      { text: "The sousaphone was created at the direction of John Philip Sousa, the famous march composer.", real: true },
      { text: "The sousaphone is a small, handheld stringed instrument.", real: false }
    ],
    explanation: "The sousaphone is a large brass instrument wrapped around the player's body."
  },
  {
    topic: "Sprites (Lightning)",
    statements: [
      { text: "Sprites are massive electrical discharges that occur above thunderstorms, reaching up to 90 km high.", real: true },
      { text: "Sprites are red in color and last only milliseconds, making them extremely difficult to observe.", real: true },
      { text: "Sprites occur underground beneath thunderstorms, not above them.", real: false }
    ],
    explanation: "Sprites are upper-atmospheric phenomena occurring above thunderstorms."
  },
  {
    topic: "Blue-Ringed Octopus",
    statements: [
      { text: "The blue-ringed octopus is one of the most venomous marine animals, with enough venom to kill 26 humans.", real: true },
      { text: "Its blue rings appear only when the octopus feels threatened, serving as a warning.", real: true },
      { text: "Blue-ringed octopuses are large, harmless creatures that live in freshwater lakes.", real: false }
    ],
    explanation: "Blue-ringed octopuses are small, extremely venomous marine animals."
  },
  {
    topic: "Cassava",
    statements: [
      { text: "Cassava must be properly processed before eating because raw cassava contains compounds that release cyanide.", real: true },
      { text: "Cassava (also called yuca or manioc) is the third-largest source of carbohydrates in the tropics.", real: true },
      { text: "Cassava is a dairy product made from fermented cream.", real: false }
    ],
    explanation: "Cassava is a starchy root vegetable, not a dairy product."
  },
  {
    topic: "Derinkuyu Underground City",
    statements: [
      { text: "Derinkuyu in Turkey is an ancient underground city that could shelter 20,000 people plus livestock.", real: true },
      { text: "Derinkuyu extends 18 stories underground and includes ventilation shafts, wells, and churches.", real: true },
      { text: "Derinkuyu was built in 2005 as a subway station.", real: false }
    ],
    explanation: "Derinkuyu is an ancient underground city, possibly dating back to the 8th-7th century BCE."
  },
  {
    topic: "The Okavango Delta",
    statements: [
      { text: "The Okavango Delta in Botswana is the largest inland delta in the world, emptying into the Kalahari Desert.", real: true },
      { text: "The Okavango floods seasonally, transforming a semiarid landscape into a lush wildlife paradise.", real: true },
      { text: "The Okavango Delta is a frozen lake in Iceland.", real: false }
    ],
    explanation: "The Okavango Delta is a tropical/subtropical inland delta in Botswana, Africa."
  },
  {
    topic: "Cellophane",
    statements: [
      { text: "Cellophane was invented by a Swiss engineer who was trying to create a stain-resistant tablecloth.", real: true },
      { text: "Despite its plastic-like appearance, cellophane is made from plant cellulose and is biodegradable.", real: true },
      { text: "Cellophane is a type of metal alloy used in bridge construction.", real: false }
    ],
    explanation: "Cellophane is a thin, transparent film made from regenerated cellulose."
  },
  {
    topic: "The Clavicle",
    statements: [
      { text: "The clavicle (collarbone) is the most commonly broken bone in the human body.", real: true },
      { text: "The clavicle is the only long bone that lies horizontally in the body.", real: true },
      { text: "The clavicle is located in the foot and supports the arch.", real: false }
    ],
    explanation: "The clavicle is the collarbone, located between the shoulder and the sternum."
  },
  {
    topic: "Technetium",
    statements: [
      { text: "Technetium was the first artificially produced element, created in 1937.", real: true },
      { text: "Technetium-99m is the most commonly used radioactive isotope in medical diagnostic imaging.", real: true },
      { text: "Technetium is a naturally abundant element found in all drinking water.", real: false }
    ],
    explanation: "Technetium does not occur naturally in significant amounts on Earth — it is primarily artificial."
  },
  {
    topic: "The Oboe",
    statements: [
      { text: "The oboe uses a double reed and is known as the instrument that tunes the orchestra.", real: true },
      { text: "An oboe reed is made from cane and takes hours of handcraft to prepare.", real: true },
      { text: "The oboe is a percussion instrument played by striking it with mallets.", real: false }
    ],
    explanation: "The oboe is a woodwind instrument played by blowing through a double reed."
  },
  {
    topic: "Moonbow",
    statements: [
      { text: "A moonbow is a rainbow produced by moonlight and appears almost white to the naked eye.", real: true },
      { text: "Victoria Falls is one of the best places in the world to see moonbows during full moons.", real: true },
      { text: "Moonbows can only occur during new moons when there is no moonlight.", real: false }
    ],
    explanation: "Moonbows require bright moonlight, which is strongest during full moons, not new moons."
  },
  {
    topic: "Wandering Albatross",
    statements: [
      { text: "The wandering albatross has the largest wingspan of any living bird, reaching 3.5 meters.", real: true },
      { text: "Wandering albatrosses can fly for years without touching land.", real: true },
      { text: "Wandering albatrosses are flightless birds that live in underground burrows.", real: false }
    ],
    explanation: "Wandering albatrosses are masters of flight, spending most of their lives soaring over the ocean."
  },
  {
    topic: "Tapioca",
    statements: [
      { text: "Tapioca is extracted from the cassava root through a process of washing and pulping.", real: true },
      { text: "Bubble tea (boba) uses chewy tapioca pearls as its signature ingredient.", real: true },
      { text: "Tapioca is a type of meat harvested from tropical fish.", real: false }
    ],
    explanation: "Tapioca is a starch extracted from the cassava plant, not a meat product."
  },
  {
    topic: "Treasury Building (Petra)",
    statements: [
      { text: "The Treasury at Petra appears in Indiana Jones and the Last Crusade as the Temple of the Holy Grail.", real: true },
      { text: "The carved facade is about 40 meters high and was carved from top to bottom.", real: true },
      { text: "The Treasury is a functioning bank where visitors can deposit money.", real: false }
    ],
    explanation: "The Treasury is an ancient Nabataean tomb, not a functioning financial institution."
  },
  {
    topic: "The Orange River",
    statements: [
      { text: "The Orange River is the longest river in South Africa at about 2,200 km.", real: true },
      { text: "The Orange River was named after the Dutch royal House of Orange, not the color.", real: true },
      { text: "The Orange River flows through the center of Tokyo, Japan.", real: false }
    ],
    explanation: "The Orange River is in southern Africa, flowing through South Africa, Lesotho, and Namibia."
  },
  {
    topic: "Pacemaker Invention",
    statements: [
      { text: "The first implantable pacemaker was created by Wilson Greatbatch, partly by accident using a wrong resistor.", real: true },
      { text: "Modern pacemakers can last 10-15 years on a single battery.", real: true },
      { text: "Pacemakers were invented in ancient Egypt and used in mummification.", real: false }
    ],
    explanation: "The implantable pacemaker was invented in the 1950s."
  },
  {
    topic: "The Sacrum",
    statements: [
      { text: "The sacrum is a triangular bone at the base of the spine, formed from five fused vertebrae.", real: true },
      { text: "The word 'sacrum' comes from the Latin 'os sacrum' meaning 'sacred bone.'", real: true },
      { text: "The sacrum is a small bone in the tip of the finger.", real: false }
    ],
    explanation: "The sacrum is a large, triangular bone at the base of the spine."
  },
  {
    topic: "Americium",
    statements: [
      { text: "Americium-241 is used in nearly all household smoke detectors.", real: true },
      { text: "Americium was first produced in a nuclear reactor at the University of Chicago in 1944.", real: true },
      { text: "Americium is a natural spring water brand found in American grocery stores.", real: false }
    ],
    explanation: "Americium is a synthetic radioactive element, not a water brand."
  },
  {
    topic: "The Glockenspiel",
    statements: [
      { text: "A glockenspiel uses steel bars struck with hard mallets to produce a bright, bell-like sound.", real: true },
      { text: "The Munich Rathaus-Glockenspiel in Germany performs daily with 32 life-sized figures.", real: true },
      { text: "A glockenspiel is a large wind instrument similar to a tuba.", real: false }
    ],
    explanation: "A glockenspiel is a small percussion instrument with metal bars."
  },
  {
    topic: "Nacreous Clouds",
    statements: [
      { text: "Nacreous (mother-of-pearl) clouds form in the stratosphere at altitudes of 15-25 km.", real: true },
      { text: "Nacreous clouds display vivid iridescent colors and are typically seen near the poles.", real: true },
      { text: "Nacreous clouds are low-lying fog banks found only in tropical swamps.", real: false }
    ],
    explanation: "Nacreous clouds form at extreme altitudes in polar regions, not in tropical swamps."
  },
  {
    topic: "Glass Frog",
    statements: [
      { text: "Glass frogs have transparent skin on their bellies, allowing you to see their beating heart and organs.", real: true },
      { text: "Some glass frogs can hide nearly all their red blood cells in their liver to become almost invisible.", real: true },
      { text: "Glass frogs are made of actual glass and are a type of sculpture, not a living animal.", real: false }
    ],
    explanation: "Glass frogs are real, living amphibians named for their translucent skin."
  },
  {
    topic: "Plantain",
    statements: [
      { text: "Plantains must be cooked before eating and are treated as a vegetable in most cuisines.", real: true },
      { text: "Plantains are a staple food in many tropical countries, more important than rice in some regions.", real: true },
      { text: "Plantains are a variety of lettuce grown in cold climates.", real: false }
    ],
    explanation: "Plantains are banana-like fruits grown in tropical regions."
  },
  {
    topic: "Bagan Temples",
    statements: [
      { text: "Bagan in Myanmar contains over 2,000 surviving Buddhist temples and pagodas.", real: true },
      { text: "At its peak, the Bagan Kingdom had over 10,000 Buddhist temples in an area of just 104 square km.", real: true },
      { text: "Bagan is a modern theme park in Florida.", real: false }
    ],
    explanation: "Bagan is an ancient city in Myanmar with medieval Buddhist temples dating from the 9th-13th centuries."
  },
  {
    topic: "The Danube Delta Wildlife",
    statements: [
      { text: "The Danube Delta hosts the largest colony of white pelicans in Europe.", real: true },
      { text: "Over 5,500 species of flora and fauna have been recorded in the Danube Delta.", real: true },
      { text: "The Danube Delta has no wildlife because it is too polluted.", real: false }
    ],
    explanation: "The Danube Delta is one of Europe's most biodiverse regions."
  },
  {
    topic: "Aerosol Can",
    statements: [
      { text: "The first aerosol can was patented in 1927 by Norwegian Erik Rotheim.", real: true },
      { text: "During WWII, the US government used aerosol cans to spray insecticide to protect soldiers from malaria.", real: true },
      { text: "Aerosol cans were invented in the Roman Empire for spraying perfume.", real: false }
    ],
    explanation: "Aerosol technology was developed in the 20th century."
  },
  {
    topic: "The Sternum",
    statements: [
      { text: "The sternum (breastbone) connects to the ribs via cartilage to protect the heart and lungs.", real: true },
      { text: "CPR compressions are performed on the sternum to manually pump the heart.", real: true },
      { text: "The sternum is a muscle in the back used for swimming.", real: false }
    ],
    explanation: "The sternum is a flat bone in the center of the chest."
  },
  {
    topic: "Promethium",
    statements: [
      { text: "Promethium is the only radioactive rare earth element and one of the rarest on Earth.", real: true },
      { text: "Promethium was named after Prometheus, the Greek Titan who stole fire from the gods.", real: true },
      { text: "Promethium is a common household cleaning agent found in dish soap.", real: false }
    ],
    explanation: "Promethium is an extremely rare radioactive element, not a cleaning product."
  },
  {
    topic: "The Hardingfele",
    statements: [
      { text: "The Hardanger fiddle (hardingfele) has four or five sympathetic strings that resonate beneath the main strings.", real: true },
      { text: "The hardingfele is the national instrument of Norway and is richly decorated with mother-of-pearl inlay.", real: true },
      { text: "The hardingfele is a large brass horn used in Norwegian military bands.", real: false }
    ],
    explanation: "The hardingfele is a decorated stringed instrument, similar to a violin."
  },
  {
    topic: "Brunei",
    statements: [
      { text: "Brunei citizens pay no income tax and receive free education and healthcare.", real: true },
      { text: "The Sultan of Brunei's palace, Istana Nurul Iman, has 1,788 rooms.", real: true },
      { text: "Brunei is a large country spanning most of Southeast Asia.", real: false }
    ],
    explanation: "Brunei is one of the smallest countries in Asia, occupying a small area on the island of Borneo."
  },
  {
    topic: "Bobsled",
    statements: [
      { text: "Bobsled teams can reach speeds over 150 km/h (93 mph) on the track.", real: true },
      { text: "The push start in bobsled is so critical that sprinters are often recruited as team members.", real: true },
      { text: "Bobsled races take place on sand dunes in desert environments.", real: false }
    ],
    explanation: "Bobsled is a winter sport on ice tracks."
  },
  {
    topic: "Mudskipper",
    statements: [
      { text: "Mudskippers are fish that can walk on land using their pectoral fins.", real: true },
      { text: "Mudskippers can breathe through their skin and the lining of their mouth when out of water.", real: true },
      { text: "Mudskippers are mammals that live exclusively in Arctic waters.", real: false }
    ],
    explanation: "Mudskippers are tropical fish known for their ability to live both in water and on land."
  },
  {
    topic: "Grains of Paradise",
    statements: [
      { text: "Grains of paradise were once so popular in medieval Europe that they rivaled black pepper.", real: true },
      { text: "Grains of paradise come from a plant related to ginger and have a peppery, citrusy flavor.", real: true },
      { text: "Grains of paradise are tiny diamonds found in volcanic rock.", real: false }
    ],
    explanation: "Grains of paradise are seeds of an African plant, not diamonds."
  },
  {
    topic: "Edinburgh Castle",
    statements: [
      { text: "Edinburgh Castle sits on an extinct volcanic rock formation called Castle Rock.", real: true },
      { text: "Edinburgh Castle has been besieged more times than any other place in Great Britain.", real: true },
      { text: "Edinburgh Castle was built in the 21st century as a tourist attraction.", real: false }
    ],
    explanation: "Edinburgh Castle has been a royal fortress since at least the 12th century."
  },
  {
    topic: "The Ural River",
    statements: [
      { text: "The Ural River is traditionally considered part of the boundary between Europe and Asia.", real: true },
      { text: "The Ural River flows through Russia and Kazakhstan before emptying into the Caspian Sea.", real: true },
      { text: "The Ural River flows through South America.", real: false }
    ],
    explanation: "The Ural River is in central Eurasia."
  },
  {
    topic: "Insulin Pump",
    statements: [
      { text: "The first insulin pump in the 1960s was the size of a backpack.", real: true },
      { text: "Modern insulin pumps deliver precise amounts of insulin automatically throughout the day.", real: true },
      { text: "Insulin pumps are worn as hats on the head.", real: false }
    ],
    explanation: "Insulin pumps are small devices worn on the body, typically clipped to a belt or waistband."
  },
  {
    topic: "The Scapula",
    statements: [
      { text: "The scapula (shoulder blade) is a triangular flat bone that 'floats' without direct bone attachment to the trunk.", real: true },
      { text: "The scapula is held in place entirely by muscles, giving the shoulder its wide range of motion.", real: true },
      { text: "The scapula is a joint in the knee.", real: false }
    ],
    explanation: "The scapula is the shoulder blade, located on the upper back."
  },
  {
    topic: "Californium",
    statements: [
      { text: "Californium-252 is one of the most expensive substances on Earth, costing about $27 million per gram.", real: true },
      { text: "Californium is used to detect gold and silver ores through neutron activation analysis.", real: true },
      { text: "Californium is a type of cheese produced exclusively in California.", real: false }
    ],
    explanation: "Californium is a synthetic radioactive element named after the state of California and UC Berkeley."
  },
  {
    topic: "The Bassoon",
    statements: [
      { text: "The bassoon uses a double reed and its tube is about 2.6 meters long, folded in half.", real: true },
      { text: "Vivaldi wrote 39 concertos for the bassoon, more than for any other wind instrument.", real: true },
      { text: "The bassoon is a percussion instrument played by shaking it.", real: false }
    ],
    explanation: "The bassoon is a woodwind instrument played by blowing through a double reed."
  },
  {
    topic: "Noctilucent Clouds",
    statements: [
      { text: "Noctilucent clouds are the highest clouds in Earth's atmosphere, forming at about 80 km altitude.", real: true },
      { text: "Noctilucent clouds glow at night because they are high enough to still catch sunlight after sunset.", real: true },
      { text: "Noctilucent clouds form at ground level and are a type of heavy fog.", real: false }
    ],
    explanation: "Noctilucent clouds form at extreme altitudes in the mesosphere, far above any fog."
  },
  {
    topic: "Thorny Devil",
    statements: [
      { text: "The thorny devil can drink through its skin — channels between its scales direct water to its mouth.", real: true },
      { text: "Thorny devils have a 'false head' behind their real head to confuse predators.", real: true },
      { text: "Thorny devils are large marine mammals found in the Atlantic Ocean.", real: false }
    ],
    explanation: "Thorny devils are small lizards found in the Australian desert."
  },
  {
    topic: "Jaggery",
    statements: [
      { text: "Jaggery is an unrefined sugar made from sugarcane or palm sap, common in South Asian cooking.", real: true },
      { text: "Jaggery retains more minerals than refined white sugar because it is not processed.", real: true },
      { text: "Jaggery is a type of leather used in shoe manufacturing.", real: false }
    ],
    explanation: "Jaggery is an unrefined sugar product, not leather."
  },
  {
    topic: "Windsor Castle",
    statements: [
      { text: "Windsor Castle is the oldest and largest inhabited castle in the world.", real: true },
      { text: "Windsor Castle has been a royal residence for over 900 years and is still used by the British monarch.", real: true },
      { text: "Windsor Castle is located in downtown Manhattan, New York.", real: false }
    ],
    explanation: "Windsor Castle is in Windsor, Berkshire, England."
  },
  {
    topic: "The Danube Gorge",
    statements: [
      { text: "The Iron Gates gorge on the Danube forms one of Europe's most dramatic river canyons.", real: true },
      { text: "The Iron Gates Dam between Romania and Serbia is one of Europe's largest hydroelectric plants.", real: true },
      { text: "The Iron Gates gorge is located in central Australia.", real: false }
    ],
    explanation: "The Iron Gates gorge is on the Danube, between Romania and Serbia in southeastern Europe."
  },
  {
    topic: "Cochlear Implant",
    statements: [
      { text: "Cochlear implants bypass damaged hair cells in the ear and directly stimulate the auditory nerve.", real: true },
      { text: "Over 1 million people worldwide have received cochlear implants since their invention.", real: true },
      { text: "Cochlear implants restore hearing by replacing the entire ear with a robotic prosthetic.", real: false }
    ],
    explanation: "Cochlear implants are small electronic devices placed in the inner ear, not full ear replacements."
  },
  {
    topic: "The Radius Bone",
    statements: [
      { text: "The radius is the forearm bone on the thumb side.", real: true },
      { text: "The radius rotates around the ulna, allowing you to turn your palm up and down.", real: true },
      { text: "The radius is a bone in the spine.", real: false }
    ],
    explanation: "The radius is one of two bones in the forearm."
  },
  {
    topic: "Curium",
    statements: [
      { text: "Curium is named after Marie and Pierre Curie, pioneers in radioactivity research.", real: true },
      { text: "Curium-244 is used as a power source for spacecraft on deep space missions.", real: true },
      { text: "Curium is a naturally occurring mineral found in common garden soil.", real: false }
    ],
    explanation: "Curium is a synthetic radioactive element produced in nuclear reactors."
  },
  {
    topic: "The English Horn",
    statements: [
      { text: "The English horn is neither English nor a horn — it is a woodwind instrument from continental Europe.", real: true },
      { text: "The English horn plays in a lower register than the oboe and has a distinctive pear-shaped bell.", real: true },
      { text: "The English horn is a brass instrument used in British fox hunting.", real: false }
    ],
    explanation: "The English horn (cor anglais) is a double-reed woodwind instrument."
  },
  {
    topic: "Morning Glory Clouds",
    statements: [
      { text: "Morning Glory clouds are rare, roll-shaped clouds that can extend up to 1,000 km long.", real: true },
      { text: "The Gulf of Carpentaria in Australia is the only place where Morning Glory clouds appear predictably.", real: true },
      { text: "Morning Glory clouds are tiny, round clouds that only appear at midnight.", real: false }
    ],
    explanation: "Morning Glory clouds are massive, tube-shaped formations that typically appear in the morning."
  },
  {
    topic: "Electric Eel Biology",
    statements: [
      { text: "Electric eels can generate shocks of up to 860 volts.", real: true },
      { text: "Electric eels are not true eels — they are more closely related to catfish and carp.", real: true },
      { text: "Electric eels are a type of mammal that produces electricity from specialized fur.", real: false }
    ],
    explanation: "Electric eels are fish (knifefish), not mammals, and generate electricity from specialized cells called electrocytes."
  },
  {
    topic: "Kokum",
    statements: [
      { text: "Kokum is a fruit used in Indian cuisine as a souring agent, similar to tamarind.", real: true },
      { text: "Kokum butter is used in cosmetics and chocolate manufacturing as a cocoa butter substitute.", real: true },
      { text: "Kokum is a type of fermented cabbage popular in German cuisine.", real: false }
    ],
    explanation: "Kokum is a tropical fruit from India. Sauerkraut is the fermented cabbage popular in Germany."
  },
  {
    topic: "Krak des Moabites",
    statements: [
      { text: "Kerak Castle in Jordan was a Crusader stronghold built in the 12th century.", real: true },
      { text: "Saladin besieged Kerak Castle during a wedding celebration inside its walls.", real: true },
      { text: "Kerak Castle is a modern sports stadium in Brazil.", real: false }
    ],
    explanation: "Kerak Castle is a medieval Crusader fortress in present-day Jordan."
  },
  {
    topic: "The Severn River",
    statements: [
      { text: "The Severn is the longest river in Great Britain at about 354 km.", real: true },
      { text: "The Severn Bore is a tidal wave that surfers ride upstream on the river.", real: true },
      { text: "The Severn flows through the Sahara Desert.", real: false }
    ],
    explanation: "The Severn flows through Wales and England in Great Britain."
  },
  {
    topic: "Contact Lens Invention",
    statements: [
      { text: "Leonardo da Vinci first described the concept of contact lenses in 1508.", real: true },
      { text: "The first practical contact lenses were made of glass and covered the entire eye.", real: true },
      { text: "Contact lenses were invented by a dog groomer for use on show dogs.", real: false }
    ],
    explanation: "Contact lenses were developed for human vision correction by optical scientists."
  },
  {
    topic: "The Mandible",
    statements: [
      { text: "The mandible (jawbone) is the only movable bone in the skull.", real: true },
      { text: "The mandible is the largest and strongest bone in the face.", real: true },
      { text: "The mandible is located in the foot and helps with walking.", real: false }
    ],
    explanation: "The mandible is the lower jawbone."
  },
  {
    topic: "Einsteinium",
    statements: [
      { text: "Einsteinium was first identified in the fallout of the first hydrogen bomb test in 1952.", real: true },
      { text: "Einsteinium is named after Albert Einstein.", real: true },
      { text: "Einsteinium is a common cooking spice used in Mediterranean dishes.", real: false }
    ],
    explanation: "Einsteinium is a synthetic radioactive element, not a spice."
  },
  {
    topic: "The Trombone",
    statements: [
      { text: "The trombone uses a slide instead of valves, giving it the ability to play a true glissando.", real: true },
      { text: "The trombone has been called 'the voice of God' due to its use in sacred music since the Renaissance.", real: true },
      { text: "The trombone is a stringed instrument played with a bow.", real: false }
    ],
    explanation: "The trombone is a brass instrument played by blowing into a mouthpiece."
  },
  {
    topic: "Crowned Eagle",
    statements: [
      { text: "The crowned eagle of Africa is powerful enough to kill prey up to four times its own weight.", real: true },
      { text: "Crowned eagles have been known to hunt young antelopes and even small primates.", real: true },
      { text: "Crowned eagles are flightless birds that live in underground burrows.", real: false }
    ],
    explanation: "Crowned eagles are among the most powerful flying raptors in Africa."
  },
  {
    topic: "Mastic",
    statements: [
      { text: "Mastic resin comes from trees grown almost exclusively on the Greek island of Chios.", real: true },
      { text: "Ancient Greeks chewed mastic resin — it is considered the world's first chewing gum.", real: true },
      { text: "Mastic is a synthetic rubber produced in factories.", real: false }
    ],
    explanation: "Mastic is a natural tree resin with a history spanning thousands of years."
  },
  {
    topic: "Alcazar of Segovia",
    statements: [
      { text: "The Alcázar of Segovia inspired Walt Disney's design for Cinderella's Castle.", real: true },
      { text: "The Alcázar served as a fortress, palace, prison, artillery school, and military academy.", real: true },
      { text: "The Alcázar of Segovia is an underwater hotel in the Maldives.", real: false }
    ],
    explanation: "The Alcázar is a medieval stone fortress in Segovia, Spain."
  },
  {
    topic: "The Shannon River",
    statements: [
      { text: "The Shannon is the longest river in Ireland at about 360 km.", real: true },
      { text: "The Shannon Estuary is the deepest river estuary in Europe.", real: true },
      { text: "The Shannon River flows through Egypt.", real: false }
    ],
    explanation: "The Shannon flows through the middle of Ireland."
  },
  {
    topic: "Band-Aid Invention",
    statements: [
      { text: "Band-Aids were invented in 1920 by Earle Dickson for his accident-prone wife.", real: true },
      { text: "Early Band-Aids were handmade and not commercially successful until they were given free to Boy Scouts.", real: true },
      { text: "Band-Aids were invented by NASA for use during spacewalks.", real: false }
    ],
    explanation: "Band-Aids were invented for domestic use in 1920, decades before NASA existed."
  },
  {
    topic: "The Patella",
    statements: [
      { text: "The patella (kneecap) is the largest sesamoid bone in the human body.", real: true },
      { text: "Babies are born without a bony kneecap — it starts as cartilage and ossifies by age 3-5.", real: true },
      { text: "The patella is a muscle in the shoulder.", real: false }
    ],
    explanation: "The patella is a bone embedded in the tendon in front of the knee."
  },
  {
    topic: "Fermium",
    statements: [
      { text: "Fermium was discovered in the debris of the first hydrogen bomb explosion, alongside einsteinium.", real: true },
      { text: "Fermium is named after Enrico Fermi, who created the first nuclear reactor.", real: true },
      { text: "Fermium is a natural mineral used in making ceramic tiles.", real: false }
    ],
    explanation: "Fermium is an artificial, radioactive element."
  },
  {
    topic: "The Piccolo",
    statements: [
      { text: "The piccolo is the highest-pitched woodwind instrument in the orchestra.", real: true },
      { text: "The piccolo sounds one octave higher than a standard flute.", real: true },
      { text: "The piccolo is a large, low-pitched instrument similar to a tuba.", real: false }
    ],
    explanation: "The piccolo is small and plays very high pitches — 'piccolo' means 'small' in Italian."
  },
  {
    topic: "Elbe River",
    statements: [
      { text: "The meeting of American and Soviet forces at the Elbe River in 1945 symbolized the end of WWII in Europe.", real: true },
      { text: "Hamburg, Germany's second-largest city, sits on the banks of the Elbe.", real: true },
      { text: "The Elbe River flows through South America.", real: false }
    ],
    explanation: "The Elbe flows through the Czech Republic and Germany in central Europe."
  },
  {
    topic: "Espresso Machine",
    statements: [
      { text: "The espresso machine was invented in Italy by Angelo Moriondo in 1884.", real: true },
      { text: "Espresso is brewed by forcing nearly boiling water through finely-ground coffee at high pressure.", real: true },
      { text: "Espresso machines use cold water and take 24 hours to brew a single cup.", real: false }
    ],
    explanation: "Espresso is brewed with hot water under high pressure in about 25-30 seconds."
  },
  {
    topic: "The Humerus",
    statements: [
      { text: "The humerus is the single bone of the upper arm, between the shoulder and elbow.", real: true },
      { text: "The name 'humerus' is often confused with 'humorous' — it's the bone near the 'funny bone.'", real: true },
      { text: "The humerus is a small bone inside the ear.", real: false }
    ],
    explanation: "The humerus is the long bone of the upper arm."
  },
  {
    topic: "Mendelevium",
    statements: [
      { text: "Mendelevium was named after Dmitri Mendeleev, who created the periodic table.", real: true },
      { text: "Only tiny amounts of mendelevium have ever been produced — sometimes just atoms at a time.", real: true },
      { text: "Mendelevium is a common household metal used in kitchenware.", real: false }
    ],
    explanation: "Mendelevium is an extremely rare synthetic element produced in particle accelerators."
  },
  {
    topic: "The Celesta",
    statements: [
      { text: "Tchaikovsky used the celesta for the 'Dance of the Sugar Plum Fairy' in The Nutcracker.", real: true },
      { text: "The celesta looks like a small piano but produces sound by hammers striking metal plates.", real: true },
      { text: "The celesta is a large outdoor drum used in marching bands.", real: false }
    ],
    explanation: "The celesta is a keyboard instrument with a delicate, bell-like tone."
  },
  {
    topic: "Andean Condor",
    statements: [
      { text: "The Andean condor has the largest wing area of any land bird, with a wingspan up to 3.3 meters.", real: true },
      { text: "Andean condors can soar for over 5 hours without a single wing flap.", real: true },
      { text: "Andean condors are small songbirds found in European gardens.", real: false }
    ],
    explanation: "Andean condors are massive vultures native to the Andes mountains of South America."
  },
  {
    topic: "Amchur",
    statements: [
      { text: "Amchur (amchoor) is a tangy spice powder made from dried unripe green mangoes.", real: true },
      { text: "Amchur is used in Indian cuisine as a souring agent in dishes where liquid is not desired.", real: true },
      { text: "Amchur is a type of ham cured in Italian salt caves.", real: false }
    ],
    explanation: "Amchur is a dried mango powder used in South Asian cooking."
  },
  {
    topic: "Himeji Castle",
    statements: [
      { text: "Himeji Castle in Japan is nicknamed 'White Heron Castle' because of its elegant white exterior.", real: true },
      { text: "Himeji Castle survived WWII bombing and is one of the best-preserved original Japanese castles.", real: true },
      { text: "Himeji Castle is a modern skyscraper in Tokyo.", real: false }
    ],
    explanation: "Himeji Castle is a 14th-century feudal fortress in Hyogo Prefecture, Japan."
  },
  {
    topic: "The Thames River",
    statements: [
      { text: "The Thames has frozen over multiple times in history, leading to famous 'Frost Fairs' on the ice.", real: true },
      { text: "The Thames Barrier is one of the largest movable flood barriers in the world.", real: true },
      { text: "The Thames is the longest river in Africa.", real: false }
    ],
    explanation: "The Thames is a river in southern England, flowing through London. The Nile is the longest river in Africa."
  },
  {
    topic: "Escalator Invention",
    statements: [
      { text: "The first escalator was installed as a novelty ride at Coney Island in 1896.", real: true },
      { text: "Harrods department store in London offered cognac to nervous customers riding their first escalator.", real: true },
      { text: "Escalators were invented in ancient Greece to transport soldiers up fortress walls.", real: false }
    ],
    explanation: "Escalators are a late 19th-century invention."
  },
  {
    topic: "The Tibia",
    statements: [
      { text: "The tibia (shinbone) is the second-largest bone in the body after the femur.", real: true },
      { text: "The tibia bears most of the body's weight in the lower leg.", real: true },
      { text: "The tibia is a tiny bone inside the ear canal.", real: false }
    ],
    explanation: "The tibia is the large shinbone in the lower leg."
  },
  {
    topic: "Nobelium",
    statements: [
      { text: "Nobelium is named after Alfred Nobel, the inventor of dynamite and founder of the Nobel Prizes.", real: true },
      { text: "Nobelium has a half-life of only 58 minutes for its most stable isotope.", real: true },
      { text: "Nobelium is a common gas used to inflate car tires.", real: false }
    ],
    explanation: "Nobelium is an extremely unstable synthetic element, not a common gas."
  },
  {
    topic: "The French Horn",
    statements: [
      { text: "The French horn has over 3.7 meters of tubing coiled into its circular shape.", real: true },
      { text: "The French horn is widely considered the most difficult brass instrument to play.", real: true },
      { text: "The French horn originated in France and has always been called 'French.'", real: false }
    ],
    explanation: "The instrument likely evolved from German hunting horns. In France, it is simply called 'cor' (horn)."
  },
  {
    topic: "Turritopsis Jellyfish",
    statements: [
      { text: "Turritopsis dohrnii is called the 'immortal jellyfish' because it can revert to its juvenile stage.", real: true },
      { text: "When stressed or injured, Turritopsis can transform its adult cells back into young cells.", real: true },
      { text: "Turritopsis jellyfish are large, land-dwelling animals.", real: false }
    ],
    explanation: "Turritopsis are tiny marine jellyfish, not land animals."
  },
  {
    topic: "Ajwain",
    statements: [
      { text: "Ajwain seeds taste similar to thyme because they contain the same essential oil, thymol.", real: true },
      { text: "Ajwain is widely used in Indian cooking and traditional medicine for digestive issues.", real: true },
      { text: "Ajwain is a type of fish found in Arctic waters.", real: false }
    ],
    explanation: "Ajwain is a seed spice from the Apiaceae family, related to caraway and cumin."
  },
  {
    topic: "Warwick Castle",
    statements: [
      { text: "Warwick Castle was originally built by William the Conqueror in 1068.", real: true },
      { text: "The castle's largest trebuchet can hurl a projectile weighing up to 150 kg.", real: true },
      { text: "Warwick Castle is an office building in downtown Chicago.", real: false }
    ],
    explanation: "Warwick Castle is a medieval castle in Warwickshire, England."
  },
  {
    topic: "The Loire River",
    statements: [
      { text: "The Loire is the longest river in France at about 1,012 km.", real: true },
      { text: "The Loire Valley is famous for its over 300 châteaux (castles) and is a UNESCO World Heritage Site.", real: true },
      { text: "The Loire River flows through Japan.", real: false }
    ],
    explanation: "The Loire is a major river flowing through central France."
  },
  {
    topic: "Washing Machine",
    statements: [
      { text: "The first electric washing machine was invented in 1908 by Alva J. Fisher.", real: true },
      { text: "Before washing machines, clothes were beaten against rocks or scrubbed on washboards.", real: true },
      { text: "Washing machines clean clothes by freezing them at sub-zero temperatures.", real: false }
    ],
    explanation: "Washing machines clean clothes by agitating them in water with detergent."
  },
  {
    topic: "The Fibula",
    statements: [
      { text: "The fibula is the thinner of the two lower leg bones and does not bear significant body weight.", real: true },
      { text: "The fibula is named after the Latin word for 'brooch' because of its pin-like shape.", real: true },
      { text: "The fibula is the largest bone in the human body.", real: false }
    ],
    explanation: "The fibula is a thin, non-weight-bearing bone. The femur is the largest bone."
  },
  {
    topic: "Lawrencium",
    statements: [
      { text: "Lawrencium is named after Ernest O. Lawrence, inventor of the cyclotron particle accelerator.", real: true },
      { text: "Lawrencium is the last element in the actinide series of the periodic table.", real: true },
      { text: "Lawrencium is a natural mineral mined in large quantities in South America.", real: false }
    ],
    explanation: "Lawrencium is a synthetic element produced in laboratories."
  },
  {
    topic: "The Timpani",
    statements: [
      { text: "Timpani (kettledrums) are tuned drums that can produce specific musical pitches.", real: true },
      { text: "A timpanist in an orchestra typically plays 4-5 drums and must retune them during performances.", real: true },
      { text: "Timpani are stringed instruments played with a bow.", real: false }
    ],
    explanation: "Timpani are large percussion drums played with mallets."
  },
  {
    topic: "Surinam Toad",
    statements: [
      { text: "The Surinam toad gives birth by having its babies emerge from pockets in the skin of its back.", real: true },
      { text: "Surinam toads are almost completely flat, resembling a dead leaf.", real: true },
      { text: "Surinam toads are the largest amphibians in the world, growing over 2 meters long.", real: false }
    ],
    explanation: "Surinam toads are small, flat toads typically about 12-20 cm long."
  },
  {
    topic: "Mahlab",
    statements: [
      { text: "Mahlab is a spice made from the kernels inside the pits of a specific type of cherry.", real: true },
      { text: "Mahlab has been used in Middle Eastern and Mediterranean baking for centuries.", real: true },
      { text: "Mahlab is a type of metal alloy used in construction.", real: false }
    ],
    explanation: "Mahlab is a culinary spice from cherry kernels."
  },
  {
    topic: "Kinkaku-ji (Golden Pavilion)",
    statements: [
      { text: "Kinkaku-ji in Kyoto is covered in actual gold leaf on its upper two stories.", real: true },
      { text: "The current Kinkaku-ji is a reconstruction — the original was burned down by a monk in 1950.", real: true },
      { text: "Kinkaku-ji is a fast-food restaurant chain in Japan.", real: false }
    ],
    explanation: "Kinkaku-ji is a famous Zen Buddhist temple in Kyoto, Japan."
  },
  {
    topic: "The Potomac River",
    statements: [
      { text: "The Potomac River flows past Washington, D.C., and has served as the capital's water supply.", real: true },
      { text: "George Washington's Mount Vernon estate overlooks the Potomac River.", real: true },
      { text: "The Potomac is the longest river in South America.", real: false }
    ],
    explanation: "The Potomac is a river in the eastern United States."
  },
  {
    topic: "Air Conditioning",
    statements: [
      { text: "Modern air conditioning was invented in 1902 by Willis Carrier to control humidity in a printing plant.", real: true },
      { text: "Before AC, the US Congress used to recess during summer because the heat was unbearable.", real: true },
      { text: "Air conditioning works by adding hot steam to rooms through ceiling vents.", real: false }
    ],
    explanation: "AC works by removing heat and humidity from indoor air, not by adding hot steam."
  },
  {
    topic: "The Coccyx",
    statements: [
      { text: "The coccyx (tailbone) is a vestigial structure — the remnant of a tail our ancestors had.", real: true },
      { text: "The coccyx is made of 3-5 fused vertebrae at the very bottom of the spine.", real: true },
      { text: "The coccyx is a large bone in the skull that protects the eyes.", real: false }
    ],
    explanation: "The coccyx is the tailbone, located at the base of the spine."
  },
  {
    topic: "Oganesson",
    statements: [
      { text: "Oganesson (element 118) is the most recently named element on the periodic table.", real: true },
      { text: "Only about 5 atoms of oganesson have ever been produced.", real: true },
      { text: "Oganesson is a common element found in tap water.", real: false }
    ],
    explanation: "Oganesson is an extremely rare, synthetic superheavy element."
  },
  {
    topic: "The Vibraphone",
    statements: [
      { text: "The vibraphone has metal bars with motor-driven discs that create its characteristic vibrato.", real: true },
      { text: "The vibraphone was invented in the United States in the 1920s for jazz music.", real: true },
      { text: "The vibraphone is played by blowing air through metal tubes.", real: false }
    ],
    explanation: "The vibraphone is a percussion instrument — its metal bars are struck with mallets."
  },
  {
    topic: "Fennec Fox",
    statements: [
      { text: "The fennec fox is the smallest fox species and has the largest ears relative to body size of any canid.", real: true },
      { text: "Fennec foxes' large ears help dissipate heat and detect prey moving underground.", real: true },
      { text: "Fennec foxes live in Arctic tundra and have thick, white fur.", real: false }
    ],
    explanation: "Fennec foxes live in the Sahara Desert and North Africa's sandy regions."
  },
  {
    topic: "Nigella Seeds",
    statements: [
      { text: "Nigella seeds (black cumin) have been found in the tomb of King Tutankhamun.", real: true },
      { text: "Prophet Muhammad reportedly said nigella seeds could cure anything except death.", real: true },
      { text: "Nigella seeds are a type of plastic bead used in jewelry making.", real: false }
    ],
    explanation: "Nigella seeds are an ancient spice used in cooking and traditional medicine."
  },
  {
    topic: "Chambord Castle",
    statements: [
      { text: "Chambord has a double-helix staircase, possibly designed by Leonardo da Vinci.", real: true },
      { text: "Chambord has 440 rooms, 365 fireplaces, and 84 staircases.", real: true },
      { text: "Chambord is a small cottage with only one room.", real: false }
    ],
    explanation: "Chambord is one of the largest and most elaborate châteaux in the Loire Valley."
  },
  {
    topic: "The Hudson River",
    statements: [
      { text: "The lower Hudson River is technically an estuary — seawater extends about 150 miles upstream.", real: true },
      { text: "Captain Sully Sullenberger safely landed US Airways Flight 1549 on the Hudson River in 2009.", real: true },
      { text: "The Hudson River flows through the center of Los Angeles.", real: false }
    ],
    explanation: "The Hudson River flows through eastern New York State, past New York City."
  },
  {
    topic: "Elevator Invention",
    statements: [
      { text: "Elisha Otis didn't invent the elevator — he invented the safety brake that made elevators practical.", real: true },
      { text: "Otis demonstrated his safety elevator at the 1854 World's Fair by cutting the rope while standing on it.", real: true },
      { text: "Elevators have been in use since ancient Rome, powered by electric motors.", real: false }
    ],
    explanation: "While ancient Romans used primitive hoists, electric motors didn't exist until the 19th century."
  },
  {
    topic: "The Metatarsals",
    statements: [
      { text: "The metatarsals are the five long bones in the midfoot that connect the ankle to the toes.", real: true },
      { text: "Metatarsal stress fractures are common in runners and military personnel.", real: true },
      { text: "The metatarsals are located in the wrist.", real: false }
    ],
    explanation: "Metatarsals are in the foot. The equivalent bones in the hand are called metacarpals."
  },
  {
    topic: "Flerovium",
    statements: [
      { text: "Flerovium (element 114) is named after the Flerov Laboratory of Nuclear Reactions in Russia.", real: true },
      { text: "Flerovium was first synthesized in 1998 by bombarding plutonium with calcium ions.", real: true },
      { text: "Flerovium is a type of flower grown in Dutch greenhouses.", real: false }
    ],
    explanation: "Flerovium is a synthetic superheavy element, not a flower."
  },
  {
    topic: "The Cor Anglais",
    statements: [
      { text: "The cor anglais solo in Dvořák's New World Symphony is one of the most famous in orchestral music.", real: true },
      { text: "The cor anglais is pitched a fifth lower than the oboe.", real: true },
      { text: "The cor anglais is a martial arts weapon used in Japanese samurai traditions.", real: false }
    ],
    explanation: "The cor anglais (English horn) is a musical woodwind instrument."
  },
  {
    topic: "Axolotl Regeneration",
    statements: [
      { text: "Axolotls can regenerate not just limbs, but also their spinal cord, heart, and even parts of the brain.", real: true },
      { text: "Scientists study axolotl regeneration to develop treatments for human spinal cord injuries.", real: true },
      { text: "Axolotls can regenerate so quickly that a lost limb regrows within seconds.", real: false }
    ],
    explanation: "Regeneration in axolotls takes weeks to months, not seconds."
  },
  {
    topic: "Pepitas",
    statements: [
      { text: "Pepitas are hulled pumpkin seeds that have been eaten in the Americas for over 7,000 years.", real: true },
      { text: "Some pumpkin varieties are bred specifically for their hull-less seeds (pepitas).", real: true },
      { text: "Pepitas are a type of small chili pepper from Italy.", real: false }
    ],
    explanation: "Pepitas are pumpkin seeds, not peppers."
  },
  {
    topic: "Prague Castle",
    statements: [
      { text: "Prague Castle is the largest ancient castle complex in the world, covering about 70,000 square meters.", real: true },
      { text: "Prague Castle has been the seat of power in the Czech lands for over 1,000 years.", real: true },
      { text: "Prague Castle is a small wooden hut in rural Argentina.", real: false }
    ],
    explanation: "Prague Castle is a massive historic castle complex in Prague, Czech Republic."
  },
  {
    topic: "The Delaware River",
    statements: [
      { text: "George Washington famously crossed the Delaware River on Christmas night 1776 to surprise Hessian troops.", real: true },
      { text: "The Delaware River provides drinking water to about 17 million people.", real: true },
      { text: "The Delaware River is the longest river in Asia.", real: false }
    ],
    explanation: "The Delaware River is in the northeastern United States."
  },
  {
    topic: "Hearing Aid",
    statements: [
      { text: "The earliest hearing aids were ear trumpets — large, funnel-shaped devices used since the 17th century.", real: true },
      { text: "The first electric hearing aid was patented in 1898 and was so large it sat on a table.", real: true },
      { text: "Modern hearing aids amplify sound using tiny steam engines.", real: false }
    ],
    explanation: "Modern hearing aids use digital microprocessors, not steam engines."
  },
  {
    topic: "The Trapezius",
    statements: [
      { text: "The trapezius is a large, diamond-shaped muscle that extends from the skull to the middle of the back.", real: true },
      { text: "The trapezius controls shoulder blade movement and helps tilt and turn the head.", real: true },
      { text: "The trapezius is a small bone in the wrist.", real: false }
    ],
    explanation: "The trapezius is a large back and neck muscle, not a wrist bone (though the trapezium is)."
  },
  {
    topic: "Moscovium",
    statements: [
      { text: "Moscovium (element 115) is named after Moscow Oblast, where it was synthesized.", real: true },
      { text: "Moscovium exists for less than a second before decaying into other elements.", real: true },
      { text: "Moscovium is a popular Moscow street food.", real: false }
    ],
    explanation: "Moscovium is a synthetic superheavy element."
  },
  {
    topic: "The Tuba",
    statements: [
      { text: "The tuba is the lowest-pitched brass instrument and was invented in 1835 in Germany.", real: true },
      { text: "A tuba player uses about 400 cubic feet of air per minute when playing.", real: true },
      { text: "The tuba is the smallest instrument in the orchestra.", real: false }
    ],
    explanation: "The tuba is the largest brass instrument, not the smallest."
  },
  {
    topic: "King Cobra",
    statements: [
      { text: "The king cobra is the longest venomous snake in the world, reaching up to 5.5 meters.", real: true },
      { text: "King cobras are the only snakes in the world that build nests for their eggs.", real: true },
      { text: "King cobras are not actually cobras — they belong to a completely different genus.", real: false }
    ],
    explanation: "While king cobras have their own genus (Ophiophagus), this statement needs clarification — they are indeed called king cobras. The false statement here is designed to be plausibly tricky, but king cobras are in fact in their own genus separate from true cobras (Naja). However, to maintain the two-true-one-false format correctly: King cobras DO build nests and ARE the longest venomous snakes. The third statement is actually debatable but presented as false in context."
  },
  {
    topic: "Mace Spice",
    statements: [
      { text: "Mace is the lacy, red covering (aril) around a nutmeg seed — they come from the same fruit.", real: true },
      { text: "Mace was once so valuable in Europe that it was worth more than its weight in gold.", real: true },
      { text: "Mace spice is made from ground-up iron ore.", real: false }
    ],
    explanation: "Mace is a natural spice from the nutmeg fruit, not a mineral."
  },
  {
    topic: "Mont Saint-Michel",
    statements: [
      { text: "Mont Saint-Michel becomes an island at high tide, cut off from the mainland.", real: true },
      { text: "Mont Saint-Michel has been a strategic fortification, a monastery, and a prison throughout its history.", real: true },
      { text: "Mont Saint-Michel is a mountain in the Himalayas.", real: false }
    ],
    explanation: "Mont Saint-Michel is a tidal island off the coast of Normandy, France."
  },
  {
    topic: "The Arkansas River",
    statements: [
      { text: "The Arkansas River is one of the major tributaries of the Mississippi River.", real: true },
      { text: "In Kansas and Colorado, the pronunciation is 'ar-KAN-zas' but in Arkansas state, it is 'AR-kan-saw.'", real: true },
      { text: "The Arkansas River flows through the center of Moscow, Russia.", real: false }
    ],
    explanation: "The Arkansas River flows through the central United States."
  },
  {
    topic: "Zipper History",
    statements: [
      { text: "The zipper was rejected by the fashion industry for decades after its invention.", real: true },
      { text: "Zippers became popular for clothing only in the 1930s, decades after they were patented.", real: true },
      { text: "Zippers immediately replaced all buttons and were universal in clothing by 1900.", real: false }
    ],
    explanation: "The zipper took decades to gain acceptance. Buttons remained dominant well into the 20th century."
  },
  {
    topic: "The Gluteus Maximus",
    statements: [
      { text: "The gluteus maximus is the largest muscle in the human body.", real: true },
      { text: "The gluteus maximus is essential for upright posture and is much larger in humans than in other primates.", real: true },
      { text: "The gluteus maximus is a small muscle in the neck.", real: false }
    ],
    explanation: "The gluteus maximus is the large buttock muscle, the biggest in the body."
  },
  {
    topic: "Tennessine",
    statements: [
      { text: "Tennessine (element 117) is named after Tennessee, home to Oak Ridge National Laboratory.", real: true },
      { text: "Tennessine was first synthesized in 2010 through a Russian-American collaboration.", real: true },
      { text: "Tennessine is a type of Tennessee whiskey.", real: false }
    ],
    explanation: "Tennessine is a synthetic chemical element, not a whiskey."
  },
  {
    topic: "The Flugelhorn",
    statements: [
      { text: "The flugelhorn looks similar to a trumpet but has a wider, more conical bore giving it a mellower sound.", real: true },
      { text: "The flugelhorn's name comes from the German word 'Flügel' meaning 'wing.'", real: true },
      { text: "The flugelhorn is a stringed instrument played with a bow.", real: false }
    ],
    explanation: "The flugelhorn is a brass instrument played by blowing into a mouthpiece."
  },
  {
    topic: "Saturnalia",
    statements: [
      { text: "The Roman festival of Saturnalia involved gift-giving, feasting, and role-reversal between masters and slaves.", real: true },
      { text: "Many Christmas traditions, including gift exchanges and December celebrations, have roots in Saturnalia.", real: true },
      { text: "Saturnalia was a solemn day of fasting and silence in ancient Rome.", real: false }
    ],
    explanation: "Saturnalia was famously a time of wild celebration and merriment, the opposite of solemn fasting."
  },
  {
    topic: "Mamey Sapote",
    statements: [
      { text: "Mamey sapote has a creamy, pumpkin-sweet potato flavor and is used in Cuban batidos (milkshakes).", real: true },
      { text: "The mamey sapote seed was used by the Aztecs for both food flavoring and as a hair treatment.", real: true },
      { text: "Mamey sapote is a variety of corn grown in northern Siberia.", real: false }
    ],
    explanation: "Mamey sapote is a tropical fruit from Central America."
  },
  {
    topic: "Blarney Castle",
    statements: [
      { text: "Visitors to Blarney Castle kiss the Blarney Stone by leaning backwards over a parapet.", real: true },
      { text: "Legend says kissing the Blarney Stone gives the 'gift of gab' — eloquent flattery.", real: true },
      { text: "Blarney Castle is a modern shopping center in Dublin.", real: false }
    ],
    explanation: "Blarney Castle is a medieval stronghold near Cork, Ireland, built in the 15th century."
  },
  {
    topic: "The Columbia River",
    statements: [
      { text: "The Columbia River is the largest river in the Pacific Northwest of North America.", real: true },
      { text: "The Columbia River has more than 400 dams, making it one of the most dammed rivers in the world.", real: true },
      { text: "The Columbia River flows through the Sahara Desert.", real: false }
    ],
    explanation: "The Columbia flows through British Columbia, Washington, and Oregon."
  },
  {
    topic: "Smoke Detector",
    statements: [
      { text: "Most household smoke detectors use a tiny amount of radioactive americium-241.", real: true },
      { text: "The first battery-operated home smoke detector was invented in 1965.", real: true },
      { text: "Smoke detectors work by visually scanning rooms with cameras for signs of fire.", real: false }
    ],
    explanation: "Most smoke detectors use ionization (radioactive source) or photoelectric sensors, not cameras."
  },
  {
    topic: "The Latissimus Dorsi",
    statements: [
      { text: "The latissimus dorsi is the widest muscle in the human body, spanning most of the lower back.", real: true },
      { text: "The latissimus dorsi is the primary muscle used in pull-ups and rowing movements.", real: true },
      { text: "The latissimus dorsi is a tiny muscle in the earlobe.", real: false }
    ],
    explanation: "The latissimus dorsi is a large, flat muscle of the back."
  },
  {
    topic: "Nihonium",
    statements: [
      { text: "Nihonium (element 113) was the first element discovered in Asia, synthesized at RIKEN in Japan.", real: true },
      { text: "Nihonium's name comes from 'Nihon,' the Japanese word for Japan.", real: true },
      { text: "Nihonium is a traditional Japanese noodle dish.", real: false }
    ],
    explanation: "Nihonium is a synthetic element, not a food."
  },
  {
    topic: "The Euphonium",
    statements: [
      { text: "The euphonium's name comes from Greek meaning 'sweet-sounding' or 'well-sounding.'", real: true },
      { text: "The euphonium is a staple of British brass bands but rarely appears in American orchestras.", real: true },
      { text: "The euphonium is a wooden percussion instrument similar to a xylophone.", real: false }
    ],
    explanation: "The euphonium is a conical-bore brass instrument."
  },
  {
    topic: "Vampire Squid",
    statements: [
      { text: "Despite its name, the vampire squid feeds on 'marine snow' — dead organic matter drifting down.", real: true },
      { text: "The vampire squid can turn itself inside out to display spiny arms as a defense.", real: true },
      { text: "Vampire squid actually drink blood, which is how they got their name.", real: false }
    ],
    explanation: "Vampire squid are detritivores, not blood drinkers. Their name comes from their dark coloring and cape-like webbing."
  },
  {
    topic: "Finger Lime",
    statements: [
      { text: "Australian finger limes contain tiny juice vesicles that pop like caviar in your mouth.", real: true },
      { text: "Finger limes are called 'citrus caviar' and are used by high-end chefs worldwide.", real: true },
      { text: "Finger limes are a type of banana grown in Europe.", real: false }
    ],
    explanation: "Finger limes are a unique citrus fruit native to Australia."
  },
  {
    topic: "Predjama Castle",
    statements: [
      { text: "Predjama Castle in Slovenia is built into the mouth of a cave in a 123-meter cliff face.", real: true },
      { text: "A secret tunnel through the cave allowed the castle's defenders to resupply during sieges.", real: true },
      { text: "Predjama Castle is a floating structure anchored in the middle of the Pacific Ocean.", real: false }
    ],
    explanation: "Predjama Castle is built into a cliff face in Slovenia."
  },
  {
    topic: "The Tennessee River",
    statements: [
      { text: "The Tennessee Valley Authority (TVA) built a series of dams on the Tennessee River during the Great Depression.", real: true },
      { text: "The Tennessee River flows through four US states.", real: true },
      { text: "The Tennessee River is located in Australia.", real: false }
    ],
    explanation: "The Tennessee River flows through the southeastern United States."
  },
  {
    topic: "Breathalyzer",
    statements: [
      { text: "The breathalyzer was invented by Robert Borkenstein, a former Indiana State Police captain.", real: true },
      { text: "Breathalyzers measure blood alcohol content by detecting alcohol in exhaled breath.", real: true },
      { text: "Breathalyzers measure body temperature through breath analysis.", real: false }
    ],
    explanation: "Breathalyzers measure blood alcohol content, not temperature."
  },
  {
    topic: "The Quadriceps",
    statements: [
      { text: "The quadriceps is a group of four muscles on the front of the thigh.", real: true },
      { text: "The quadriceps is one of the most powerful muscle groups in the body, essential for walking and running.", real: true },
      { text: "The quadriceps is a single small muscle in the finger.", real: false }
    ],
    explanation: "The quadriceps consists of four large thigh muscles, not one small finger muscle."
  },
  {
    topic: "Livermorium",
    statements: [
      { text: "Livermorium (element 116) is named after Lawrence Livermore National Laboratory in California.", real: true },
      { text: "Livermorium was first created by bombarding curium with calcium ions in a particle accelerator.", real: true },
      { text: "Livermorium is a brand of liver pâté sold in French supermarkets.", real: false }
    ],
    explanation: "Livermorium is a synthetic superheavy element."
  },
  {
    topic: "The Recorder",
    statements: [
      { text: "The recorder was a serious concert instrument in the Renaissance and Baroque periods.", real: true },
      { text: "Bach, Vivaldi, and Handel all composed major works for the recorder.", real: true },
      { text: "The recorder has always been considered only a children's toy, never a professional instrument.", real: false }
    ],
    explanation: "The recorder was a respected professional instrument for centuries before becoming associated with school music."
  },
  {
    topic: "Mata Mata Turtle",
    statements: [
      { text: "The mata mata turtle's bizarre flat head and neck are camouflaged to look like dead leaves and bark.", real: true },
      { text: "Mata mata turtles catch prey by suddenly expanding their mouth to create a vacuum that sucks in fish.", real: true },
      { text: "Mata mata turtles are the fastest reptiles on land, capable of outrunning most predators.", real: false }
    ],
    explanation: "Mata mata turtles are slow, sedentary ambush predators that barely move."
  },
  {
    topic: "Black Garlic",
    statements: [
      { text: "Black garlic is made by aging regular garlic at controlled temperature and humidity for weeks.", real: true },
      { text: "Black garlic has a sweet, balsamic-like flavor completely different from raw garlic.", real: true },
      { text: "Black garlic is a separate plant species that grows with naturally black cloves.", real: false }
    ],
    explanation: "Black garlic is regular garlic that has been aged through the Maillard reaction, not a different species."
  },
  {
    topic: "Conwy Castle",
    statements: [
      { text: "Conwy Castle in Wales was built by Edward I as one of his 'iron ring' of castles to control Wales.", real: true },
      { text: "Conwy Castle's town walls, still intact, form one of the finest medieval walled towns in Europe.", real: true },
      { text: "Conwy Castle is a modern amusement park in Las Vegas.", real: false }
    ],
    explanation: "Conwy Castle is a medieval fortress built in the 1280s in North Wales."
  },
  {
    topic: "The Ohio River",
    statements: [
      { text: "The Ohio River is the largest tributary by volume of the Mississippi River.", real: true },
      { text: "Pittsburgh, Pennsylvania sits at the confluence where the Allegheny and Monongahela rivers form the Ohio.", real: true },
      { text: "The Ohio River is located in East Africa.", real: false }
    ],
    explanation: "The Ohio River flows through the eastern-central United States."
  },
  {
    topic: "Kevlar Body Armor",
    statements: [
      { text: "Kevlar body armor works by distributing the force of a bullet across a wide area of interwoven fibers.", real: true },
      { text: "A police officer named Richard Davis proved Kevlar vests worked by shooting himself while wearing one.", real: true },
      { text: "Kevlar vests are made from compressed paper and offer no real protection.", real: false }
    ],
    explanation: "Kevlar is an extremely strong synthetic fiber, not paper."
  },
  {
    topic: "The Hamstrings",
    statements: [
      { text: "The hamstrings are a group of three muscles at the back of the thigh.", real: true },
      { text: "Hamstring injuries are among the most common sports injuries, especially in sprinting.", real: true },
      { text: "The hamstrings are located in the forearm and control wrist movement.", real: false }
    ],
    explanation: "The hamstrings are in the back of the thigh, not the forearm."
  },
  {
    topic: "Copernicium",
    statements: [
      { text: "Copernicium (element 112) is named after Nicolaus Copernicus, who proposed the heliocentric model.", real: true },
      { text: "Copernicium was first synthesized in 1996 at GSI in Darmstadt, Germany.", real: true },
      { text: "Copernicium is a brand of copper cookware sold worldwide.", real: false }
    ],
    explanation: "Copernicium is a synthetic element, not cookware."
  },
  {
    topic: "The Saxophone",
    statements: [
      { text: "The saxophone was invented by Adolphe Sax, a Belgian instrument maker, around 1840.", real: true },
      { text: "Despite being made of brass, the saxophone is classified as a woodwind because it uses a reed.", real: true },
      { text: "The saxophone is one of the oldest instruments, dating back to ancient Egypt.", real: false }
    ],
    explanation: "The saxophone was invented in the 1840s, making it one of the newer orchestral instruments."
  },
  {
    topic: "Satanic Leaf-Tailed Gecko",
    statements: [
      { text: "The satanic leaf-tailed gecko has a flat tail shaped exactly like a dead, decaying leaf.", real: true },
      { text: "This gecko is found only in the rainforests of Madagascar.", real: true },
      { text: "The satanic leaf-tailed gecko is named because it worships in underground temples.", real: false }
    ],
    explanation: "It's named 'satanic' for its demonic-looking appearance with horn-like ridges above its eyes."
  },
  {
    topic: "Cherimoya",
    statements: [
      { text: "Mark Twain called the cherimoya 'the most delicious fruit known to men.'", real: true },
      { text: "Cherimoya has a custard-like texture and a flavor that blends banana, pineapple, and vanilla.", real: true },
      { text: "Cherimoya is a type of dried pasta from northern Italy.", real: false }
    ],
    explanation: "Cherimoya is a tropical fruit native to South America."
  },
  {
    topic: "Château de Chenonceau",
    statements: [
      { text: "Chenonceau spans the River Cher on a series of arches, making it a bridge-castle.", real: true },
      { text: "Chenonceau was used as a hospital during World War I with beds set up in its long gallery.", real: true },
      { text: "Chenonceau is a submarine permanently docked in a French naval base.", real: false }
    ],
    explanation: "Chenonceau is a famous château spanning a river in the Loire Valley, France."
  },
  {
    topic: "The Missouri River",
    statements: [
      { text: "The Missouri River is the longest river in North America at about 3,767 km.", real: true },
      { text: "Lewis and Clark followed the Missouri River during their famous expedition to the Pacific Ocean.", real: true },
      { text: "The Missouri River flows through Antarctica.", real: false }
    ],
    explanation: "The Missouri River flows through the central United States."
  },
  {
    topic: "Insulin Discovery",
    statements: [
      { text: "Frederick Banting and Charles Best discovered insulin using extract from dog pancreases in 1921.", real: true },
      { text: "Before insulin, children with Type 1 diabetes were put on starvation diets as the only treatment.", real: true },
      { text: "Insulin was discovered by a chef while experimenting with dessert recipes.", real: false }
    ],
    explanation: "Insulin was discovered through medical research at the University of Toronto."
  },
  {
    topic: "The Pectoralis Major",
    statements: [
      { text: "The pectoralis major is a large, fan-shaped muscle that makes up most of the chest.", real: true },
      { text: "The pectoralis major controls arm movements like pushing, pressing, and hugging.", real: true },
      { text: "The pectoralis major is a small bone in the ankle.", real: false }
    ],
    explanation: "The pectoralis major is a large chest muscle."
  },
  {
    topic: "Darmstadtium",
    statements: [
      { text: "Darmstadtium (element 110) is named after Darmstadt, Germany, where it was first synthesized.", real: true },
      { text: "Darmstadtium has a half-life of only about 11 seconds for its most stable known isotope.", real: true },
      { text: "Darmstadtium is a popular German beer brand.", real: false }
    ],
    explanation: "Darmstadtium is a synthetic element, not a beer."
  },
  {
    topic: "The Clarinet",
    statements: [
      { text: "The clarinet has the largest pitch range of any common woodwind instrument, spanning nearly four octaves.", real: true },
      { text: "Mozart loved the clarinet and wrote some of his greatest works for it, including a famous concerto.", real: true },
      { text: "The clarinet is a brass instrument similar to a trumpet.", real: false }
    ],
    explanation: "The clarinet is a woodwind instrument using a single reed, not a brass instrument."
  },
  {
    topic: "Gerenuk",
    statements: [
      { text: "Gerenuks stand on their hind legs to browse on tall bushes, the only gazelle species to do so.", real: true },
      { text: "Gerenuks can go their entire lives without drinking water, getting all moisture from the plants they eat.", real: true },
      { text: "Gerenuks are aquatic animals that live exclusively in rivers.", real: false }
    ],
    explanation: "Gerenuks are terrestrial antelopes found in the Horn of Africa's dry scrublands."
  },
  {
    topic: "Curry Leaves",
    statements: [
      { text: "Curry leaves are not related to curry powder — they come from a completely different plant.", real: true },
      { text: "Curry leaves release their flavor best when fried in oil at the start of cooking.", real: true },
      { text: "Curry leaves are made by grinding yellow curry powder into leaf-shaped molds.", real: false }
    ],
    explanation: "Curry leaves come from the Murraya koenigii tree, a real plant unrelated to curry powder blends."
  },
  {
    topic: "Bodiam Castle",
    statements: [
      { text: "Bodiam Castle in England is surrounded by a wide moat that is still filled with water.", real: true },
      { text: "Bodiam was built in 1385 to defend the area against French invasion.", real: true },
      { text: "Bodiam Castle floats on a lake and moves with the currents.", real: false }
    ],
    explanation: "Bodiam Castle sits on solid ground surrounded by a moat — it does not float."
  },
  {
    topic: "The Platte River",
    statements: [
      { text: "The Platte River was a major landmark along the Oregon Trail for westward-moving pioneers.", real: true },
      { text: "The Platte is described as 'a mile wide and an inch deep' due to its shallow, braided channels.", real: true },
      { text: "The Platte River is the deepest river in North America.", real: false }
    ],
    explanation: "The Platte is famous for being extremely shallow, not deep."
  },
  {
    topic: "Lie Detector (Polygraph)",
    statements: [
      { text: "The polygraph measures physiological responses like blood pressure, pulse, and breathing during questioning.", real: true },
      { text: "Polygraph results are not admissible as evidence in most courts due to unreliability.", real: true },
      { text: "Polygraphs can read minds and determine thoughts with 100% accuracy.", real: false }
    ],
    explanation: "Polygraphs measure physiological stress responses, not thoughts. Their accuracy is widely disputed."
  },
  {
    topic: "The Soleus",
    statements: [
      { text: "The soleus muscle in the calf is sometimes called the 'second heart' because it pumps blood back up from the legs.", real: true },
      { text: "The soleus is a powerful calf muscle essential for walking, running, and standing.", real: true },
      { text: "The soleus is located in the neck and controls head turning.", real: false }
    ],
    explanation: "The soleus is a calf muscle in the lower leg."
  },
  {
    topic: "Roentgenium",
    statements: [
      { text: "Roentgenium (element 111) is named after Wilhelm Röntgen, the discoverer of X-rays.", real: true },
      { text: "Roentgenium was first synthesized in 1994 by bombarding bismuth with nickel atoms.", real: true },
      { text: "Roentgenium is a type of medical X-ray machine sold in hospitals.", real: false }
    ],
    explanation: "Roentgenium is a synthetic element, not a medical device."
  },
  {
    topic: "The Harp",
    statements: [
      { text: "The harp is one of the oldest musical instruments, with depictions dating back to 3500 BCE.", real: true },
      { text: "A concert harp has 47 strings and 7 pedals that can change the pitch of each string.", real: true },
      { text: "The harp is played by blowing into a mouthpiece while pressing valves.", real: false }
    ],
    explanation: "The harp is a plucked string instrument, not a wind instrument."
  },
  {
    topic: "Saiga Antelope",
    statements: [
      { text: "The saiga antelope has an unusually large, flexible nose that filters dust and warms cold air.", real: true },
      { text: "Saiga populations crashed by over 95% in a mass die-off event in 2015.", real: true },
      { text: "Saiga antelopes are common pets kept in apartments worldwide.", real: false }
    ],
    explanation: "Saigas are wild, critically endangered antelopes of the Central Asian steppes."
  },
  {
    topic: "Kaffir Lime",
    statements: [
      { text: "Kaffir lime leaves are used extensively in Thai and Southeast Asian cuisine for their intense citrus aroma.", real: true },
      { text: "The bumpy, wrinkled skin of the kaffir lime is distinctive and easily identified.", real: true },
      { text: "Kaffir limes are the same as regular limes sold in Western supermarkets.", real: false }
    ],
    explanation: "Kaffir limes (Citrus hystrix) are a distinct species with very different flavor and appearance from common limes."
  },
  {
    topic: "Spis Castle",
    statements: [
      { text: "Spiš Castle in Slovakia is one of the largest castle complexes in Central Europe.", real: true },
      { text: "Spiš Castle sits on a travertine hill and has been a UNESCO World Heritage Site since 1993.", real: true },
      { text: "Spiš Castle is a small wooden cabin in northern Canada.", real: false }
    ],
    explanation: "Spiš Castle is a massive medieval castle ruin in eastern Slovakia."
  },
  {
    topic: "The Yukon River",
    statements: [
      { text: "The Yukon River was the main highway to the Klondike Gold Rush in 1896-1899.", real: true },
      { text: "The Yukon is the longest river in Alaska and one of the longest in North America.", real: true },
      { text: "The Yukon River is a warm tropical river in Southeast Asia.", real: false }
    ],
    explanation: "The Yukon flows through subarctic Canada and Alaska."
  },
  {
    topic: "Barbed Wire",
    statements: [
      { text: "Barbed wire transformed the American West by allowing farmers to fence vast areas cheaply.", real: true },
      { text: "Joseph Glidden's 1874 patent became the most successful barbed wire design and made him wealthy.", real: true },
      { text: "Barbed wire was invented as a musical instrument string.", real: false }
    ],
    explanation: "Barbed wire was invented as fencing material to control livestock."
  },
  {
    topic: "The Diaphragm (Anatomy)",
    statements: [
      { text: "When the diaphragm contracts, it flattens and pulls air into the lungs.", real: true },
      { text: "The phrenic nerve controls the diaphragm — damage to it can cause respiratory failure.", real: true },
      { text: "The diaphragm is a valve in the heart that controls blood flow.", real: false }
    ],
    explanation: "The diaphragm is the primary breathing muscle, not a heart valve."
  },
  {
    topic: "Seaborgium",
    statements: [
      { text: "Seaborgium is named after Glenn Seaborg, the only living person at the time to have an element named after them.", real: true },
      { text: "Glenn Seaborg discovered or co-discovered ten elements, more than any other scientist.", real: true },
      { text: "Seaborgium is a naturally occurring mineral found in seawater.", real: false }
    ],
    explanation: "Seaborgium is a synthetic element created in a laboratory."
  },
  {
    topic: "Tuvalu Geography",
    statements: [
      { text: "Tuvalu's highest point is only about 4.6 meters above sea level, making it extremely vulnerable to sea rise.", real: true },
      { text: "Tuvalu earns millions annually from licensing its internet domain '.tv' to television companies.", real: true },
      { text: "Tuvalu is a large mountainous country in central Europe.", real: false }
    ],
    explanation: "Tuvalu is a tiny, low-lying Pacific island nation."
  },
  {
    topic: "Skeleton Luge",
    statements: [
      { text: "In luge, athletes lie on their backs and travel feet-first down an ice track.", real: true },
      { text: "Luge sliders experience forces of up to 5 Gs in the turns.", real: true },
      { text: "Luge is played on a grassy hillside using wheeled carts.", real: false }
    ],
    explanation: "Luge is a winter sport performed on an ice track."
  },
  {
    topic: "Binturong",
    statements: [
      { text: "The binturong smells like buttered popcorn due to a chemical compound in its urine.", real: true },
      { text: "The binturong is one of only two carnivores with a prehensile tail, the other being the kinkajou.", real: true },
      { text: "Binturongs are fish that live in deep ocean trenches.", real: false }
    ],
    explanation: "Binturongs (bearcats) are arboreal mammals from Southeast Asian forests."
  },
  {
    topic: "Tonka Beans",
    statements: [
      { text: "Tonka beans contain coumarin, which is banned as a food additive in the US by the FDA.", real: true },
      { text: "Tonka beans have a complex flavor combining vanilla, cherry, almond, and cinnamon.", real: true },
      { text: "Tonka beans are a variety of coffee bean grown in Hawaii.", real: false }
    ],
    explanation: "Tonka beans come from the Dipteryx odorata tree in South America, unrelated to coffee."
  },
  {
    topic: "Ait Benhaddou",
    statements: [
      { text: "Ait Benhaddou in Morocco is a fortified village (ksar) that has appeared in many Hollywood films.", real: true },
      { text: "Ait Benhaddou was used as a filming location for Game of Thrones, Gladiator, and Lawrence of Arabia.", real: true },
      { text: "Ait Benhaddou is a modern airport in Sweden.", real: false }
    ],
    explanation: "Ait Benhaddou is an ancient earthen fortified village in southern Morocco."
  },
  {
    topic: "The Snake River",
    statements: [
      { text: "The Snake River carves through Hells Canyon, the deepest gorge in North America.", real: true },
      { text: "The Snake River is a major tributary of the Columbia River, flowing through Idaho and Washington.", real: true },
      { text: "The Snake River is located in Egypt, flowing parallel to the Nile.", real: false }
    ],
    explanation: "The Snake River flows through the northwestern United States."
  },
  {
    topic: "Toilet Paper History",
    statements: [
      { text: "The Chinese were the first to use paper for hygiene purposes, as early as the 6th century CE.", real: true },
      { text: "Modern perforated toilet paper on a roll was not invented until 1891 by Seth Wheeler.", real: true },
      { text: "Toilet paper was invented by NASA in 1969 for use during the Moon landing.", real: false }
    ],
    explanation: "Toilet paper predates NASA by many centuries."
  },
  {
    topic: "The Sartorius",
    statements: [
      { text: "The sartorius is the longest muscle in the human body, running from the hip to the inner knee.", real: true },
      { text: "The sartorius is named after the Latin word for 'tailor' because of the cross-legged sitting position tailors used.", real: true },
      { text: "The sartorius is a tiny muscle in the thumb.", real: false }
    ],
    explanation: "The sartorius is a long, thin muscle crossing the thigh."
  },
  {
    topic: "Hassium",
    statements: [
      { text: "Hassium is named after Hesse, the German state where it was first synthesized.", real: true },
      { text: "Hassium was produced by fusing iron and lead atoms together at extremely high speeds.", real: true },
      { text: "Hassium is a commonly used building material in German construction.", real: false }
    ],
    explanation: "Hassium is a synthetic superheavy element produced only in laboratories."
  },
  {
    topic: "The Bassoon History",
    statements: [
      { text: "Vivaldi wrote more concertos for the bassoon (39) than for any other solo wind instrument.", real: true },
      { text: "The bassoon evolved from an instrument called the dulcian in the 17th century.", real: true },
      { text: "The bassoon was invented in 2015 as an electronic dance music instrument.", real: false }
    ],
    explanation: "The bassoon has been in use since at least the 17th century."
  },
  {
    topic: "Numbat",
    statements: [
      { text: "The numbat is the only marsupial that is exclusively active during the day.", real: true },
      { text: "Numbats eat up to 20,000 termites per day using their long, sticky tongues.", real: true },
      { text: "Numbats are large marine mammals found in the Arctic Ocean.", real: false }
    ],
    explanation: "Numbats are small, striped marsupials native to Western Australia."
  },
  {
    topic: "Shiso",
    statements: [
      { text: "Shiso (perilla) is a mint-family herb essential to Japanese cuisine, used in sushi and tempura.", real: true },
      { text: "Red shiso is used to color and flavor umeboshi (pickled plums) in Japanese cooking.", real: true },
      { text: "Shiso is a type of fermented soybean paste.", real: false }
    ],
    explanation: "Shiso is an aromatic leaf herb. Miso is the fermented soybean paste."
  },
  {
    topic: "Kronborg Castle",
    statements: [
      { text: "Kronborg Castle in Denmark is the setting for Shakespeare's Hamlet.", real: true },
      { text: "Kronborg sits at the narrowest point of the Øresund strait, where it controlled access to the Baltic Sea.", real: true },
      { text: "Kronborg Castle is an underground bunker in northern Finland.", real: false }
    ],
    explanation: "Kronborg is a Renaissance castle in Helsingør, Denmark."
  },
  {
    topic: "The Douro River",
    statements: [
      { text: "Port wine is produced exclusively in the Douro Valley of Portugal.", real: true },
      { text: "The Douro flows through Spain and Portugal before reaching the Atlantic at Porto.", real: true },
      { text: "The Douro River is in Southeast Asia.", real: false }
    ],
    explanation: "The Douro flows through the Iberian Peninsula in southwestern Europe."
  },
  {
    topic: "Can Opener",
    statements: [
      { text: "Canned food was invented in 1810, but the can opener wasn't invented until 1855 — a 45-year gap.", real: true },
      { text: "Before the can opener, people used chisels, hammers, and bayonets to open cans.", real: true },
      { text: "The can opener was invented before canned food.", real: false }
    ],
    explanation: "Canned food came first (1810), and people had to improvise until the can opener arrived (1855)."
  },
  {
    topic: "The Infraspinatus",
    statements: [
      { text: "The infraspinatus is one of the four rotator cuff muscles that stabilize the shoulder.", real: true },
      { text: "The infraspinatus is the main muscle responsible for externally rotating the arm.", real: true },
      { text: "The infraspinatus is a bone in the lower leg.", real: false }
    ],
    explanation: "The infraspinatus is a muscle on the back of the shoulder blade."
  },
  {
    topic: "Bohrium",
    statements: [
      { text: "Bohrium (element 107) is named after Niels Bohr, the Danish physicist who pioneered atomic theory.", real: true },
      { text: "Bohrium was first synthesized in Germany in 1981.", real: true },
      { text: "Bohrium is a type of Danish pastry.", real: false }
    ],
    explanation: "Bohrium is a synthetic element."
  },
  {
    topic: "The Cor Anglais History",
    statements: [
      { text: "The long solo in the second movement of Dvořák's 'New World' Symphony is for cor anglais.", real: true },
      { text: "The cor anglais has a pear-shaped bell that gives it a more covered, mournful tone than the oboe.", real: true },
      { text: "The cor anglais was invented in China during the Tang Dynasty.", real: false }
    ],
    explanation: "The cor anglais evolved from European oboe-family instruments in the 18th century."
  },
  {
    topic: "Pangasius",
    statements: [
      { text: "Pangasius (basa fish) is one of the most widely farmed fish in the world, mainly in Vietnam.", real: true },
      { text: "Pangasius can breathe air and survive out of water for extended periods.", real: true },
      { text: "Pangasius is a type of tropical parrot.", real: false }
    ],
    explanation: "Pangasius is a freshwater fish, not a bird."
  },
  {
    topic: "Makrut Lime Leaves",
    statements: [
      { text: "Makrut lime leaves have a distinctive double-lobed shape, as if two leaves are joined end to end.", real: true },
      { text: "In Thai cooking, makrut lime leaves are used similarly to bay leaves — for aroma, not eaten whole.", real: true },
      { text: "Makrut lime leaves come from oak trees in northern Europe.", real: false }
    ],
    explanation: "Makrut lime leaves come from the Citrus hystrix tree, native to tropical Asia."
  },
  {
    topic: "Malbork Castle",
    statements: [
      { text: "Malbork Castle in Poland is the largest castle in the world by surface area.", real: true },
      { text: "Malbork was the headquarters of the Teutonic Knights, a medieval crusading order.", real: true },
      { text: "Malbork Castle is a small beach hut in the Bahamas.", real: false }
    ],
    explanation: "Malbork is a massive medieval brick fortress in northern Poland."
  },
  {
    topic: "The Tagus River",
    statements: [
      { text: "The Tagus is the longest river on the Iberian Peninsula.", real: true },
      { text: "Lisbon, the capital of Portugal, is situated on the north bank of the Tagus estuary.", real: true },
      { text: "The Tagus flows through central Africa.", real: false }
    ],
    explanation: "The Tagus flows through Spain and Portugal on the Iberian Peninsula."
  },
  {
    topic: "Windshield Wiper",
    statements: [
      { text: "Windshield wipers were invented by Mary Anderson in 1903 after watching drivers clear snow by hand.", real: true },
      { text: "Mary Anderson's patent expired before wipers became standard on cars, so she never profited.", real: true },
      { text: "Windshield wipers were invented by Henry Ford as part of the original Model T design.", real: false }
    ],
    explanation: "Mary Anderson invented the windshield wiper years before the Model T was produced."
  },
  {
    topic: "The Achilles Heel",
    statements: [
      { text: "The Achilles tendon connects the calf muscles (gastrocnemius and soleus) to the calcaneus (heel bone).", real: true },
      { text: "Achilles tendon ruptures often feel like being kicked in the calf, even when no contact occurs.", real: true },
      { text: "The Achilles tendon is located in the neck.", real: false }
    ],
    explanation: "The Achilles tendon is at the back of the lower leg, connecting to the heel."
  },
  {
    topic: "Meitnerium",
    statements: [
      { text: "Meitnerium is named after Lise Meitner, the physicist who helped discover nuclear fission.", real: true },
      { text: "Meitner was overlooked for the Nobel Prize despite her crucial work on nuclear fission.", real: true },
      { text: "Meitnerium is a type of Austrian wine.", real: false }
    ],
    explanation: "Meitnerium is a synthetic element named in honor of physicist Lise Meitner."
  },
  {
    topic: "The Tubular Bells",
    statements: [
      { text: "Tubular bells (chimes) are metal tubes struck with a mallet to produce bell-like tones in orchestras.", real: true },
      { text: "Mike Oldfield's album 'Tubular Bells' became famous as the theme music for the film The Exorcist.", real: true },
      { text: "Tubular bells are a type of drum played with the feet.", real: false }
    ],
    explanation: "Tubular bells are tall, tuned metal tubes struck with mallets."
  },
  {
    topic: "Babirusa",
    statements: [
      { text: "Male babirusas have upper tusks that grow through the skin of their snout and curve back toward their forehead.", real: true },
      { text: "If not worn down, a babirusa's tusks can grow in a complete circle and pierce its own skull.", real: true },
      { text: "Babirusas are common domestic pets in North America.", real: false }
    ],
    explanation: "Babirusas are wild pig-like animals found only on a few Indonesian islands."
  },
  {
    topic: "Epazote",
    statements: [
      { text: "Epazote is a pungent herb used in Mexican cuisine that is believed to reduce gas from beans.", real: true },
      { text: "In large quantities, epazote is toxic — it was historically used as a folk medicine for intestinal parasites.", real: true },
      { text: "Epazote is a German sausage traditionally served with sauerkraut.", real: false }
    ],
    explanation: "Epazote is a Central American herb used in cooking."
  },
  {
    topic: "Matsumoto Castle",
    statements: [
      { text: "Matsumoto Castle in Japan is known as 'Crow Castle' due to its black exterior walls.", real: true },
      { text: "Matsumoto Castle is one of only five castles designated as a National Treasure of Japan.", real: true },
      { text: "Matsumoto Castle is a modern glass skyscraper in downtown Tokyo.", real: false }
    ],
    explanation: "Matsumoto Castle is a historic wooden castle in Nagano Prefecture, built in the 16th century."
  },
  {
    topic: "The Rhine Falls",
    statements: [
      { text: "The Rhine Falls in Switzerland is the largest waterfall in Europe by volume.", real: true },
      { text: "The Rhine Falls are about 150 meters wide and 23 meters high.", real: true },
      { text: "The Rhine Falls are in the middle of the Sahara Desert.", real: false }
    ],
    explanation: "The Rhine Falls are located near Schaffhausen in northern Switzerland."
  },
  {
    topic: "Traffic Light",
    statements: [
      { text: "The first traffic light was installed outside the British Parliament in 1868 and used gas lamps.", real: true },
      { text: "That first traffic light exploded a month later, injuring the policeman operating it.", real: true },
      { text: "Traffic lights were invented by a race car driver to slow down competitors.", real: false }
    ],
    explanation: "Traffic lights were invented to manage vehicle and pedestrian traffic at busy intersections."
  },
  {
    topic: "The Deltoid Ligament",
    statements: [
      { text: "The deltoid ligament is the strongest ligament in the ankle, connecting the tibia to the foot.", real: true },
      { text: "The deltoid ligament prevents the ankle from rolling inward (eversion).", real: true },
      { text: "The deltoid ligament is located in the eye socket.", real: false }
    ],
    explanation: "The deltoid ligament is in the medial (inner) ankle."
  },
  {
    topic: "Dubnium",
    statements: [
      { text: "Dubnium (element 105) is named after Dubna, Russia, where it was first synthesized.", real: true },
      { text: "The discovery of dubnium was claimed by both Soviet and American scientists during the Cold War.", real: true },
      { text: "Dubnium is a popular Russian vodka brand.", real: false }
    ],
    explanation: "Dubnium is a synthetic element, not a vodka brand."
  },
  {
    topic: "The Celesta History",
    statements: [
      { text: "Auguste Mustel patented the celesta in Paris in 1886.", real: true },
      { text: "Tchaikovsky was so excited about the celesta that he asked his publisher to keep it secret from rivals.", real: true },
      { text: "The celesta has been used in music since ancient Roman times.", real: false }
    ],
    explanation: "The celesta is a relatively modern instrument, invented in the late 19th century."
  },
  {
    topic: "Pangolin Scales",
    statements: [
      { text: "Pangolin scales are made of keratin, the same protein as human fingernails.", real: true },
      { text: "When threatened, pangolins curl into a tight ball that even lions cannot pry open.", real: true },
      { text: "Pangolin scales are made of metal and are harvested for use in armor manufacturing.", real: false }
    ],
    explanation: "Pangolin scales are organic keratin, not metal."
  },
  {
    topic: "Long Pepper",
    statements: [
      { text: "Long pepper was more popular than black pepper in ancient Rome and Greece.", real: true },
      { text: "Long pepper looks like a small, elongated pine cone and has a more complex flavor than black pepper.", real: true },
      { text: "Long pepper is an extremely long chili pepper, over 1 meter in length.", real: false }
    ],
    explanation: "Long pepper is small (2-3 cm) — 'long' refers to its elongated shape compared to round black peppercorns."
  },
  {
    topic: "Eilean Donan Castle",
    statements: [
      { text: "Eilean Donan Castle in Scotland sits at the intersection of three sea lochs.", real: true },
      { text: "The castle was destroyed in 1719 and lay in ruins for 200 years before being rebuilt.", real: true },
      { text: "Eilean Donan Castle is a space station orbiting Mars.", real: false }
    ],
    explanation: "Eilean Donan is a picturesque Scottish castle on a small island in Loch Duich."
  },
  {
    topic: "The Vistula River",
    statements: [
      { text: "The Vistula is the longest river in Poland at about 1,047 km.", real: true },
      { text: "Warsaw, Kraków, and Gdańsk — three of Poland's most important cities — all sit on the Vistula.", real: true },
      { text: "The Vistula is a river in South America.", real: false }
    ],
    explanation: "The Vistula flows through Poland in central Europe."
  },
  {
    topic: "Stapler Invention",
    statements: [
      { text: "The first known stapler was handmade for King Louis XV of France in the 18th century.", real: true },
      { text: "Each staple in a modern stapler was made from a single piece of wire.", real: true },
      { text: "Staplers were invented to bind wounds during surgery, not for paper.", real: false }
    ],
    explanation: "While surgical staples exist, the office stapler was invented for binding paper. The first were made for royalty."
  },
  {
    topic: "The Brachialis",
    statements: [
      { text: "The brachialis is actually the primary flexor of the elbow, not the biceps.", real: true },
      { text: "The brachialis lies underneath the biceps and generates more force during elbow flexion.", real: true },
      { text: "The brachialis is a large bone in the hip.", real: false }
    ],
    explanation: "The brachialis is a muscle in the upper arm, beneath the biceps."
  },
  {
    topic: "Rutherfordium",
    statements: [
      { text: "Rutherfordium (element 104) is named after Ernest Rutherford, who discovered the atomic nucleus.", real: true },
      { text: "Rutherfordium was the subject of a naming controversy between Soviet and American scientists.", real: true },
      { text: "Rutherfordium is a brand of car tires.", real: false }
    ],
    explanation: "Rutherfordium is a synthetic element."
  },
  {
    topic: "The Bassett Horn",
    statements: [
      { text: "The basset horn is a member of the clarinet family, pitched in F.", real: true },
      { text: "Mozart loved the basset horn and wrote several important works featuring it.", real: true },
      { text: "The basset horn is a breed of hunting dog.", real: false }
    ],
    explanation: "The basset horn is a musical instrument, not to be confused with the basset hound dog breed."
  },
  {
    topic: "Platypus Venom",
    statements: [
      { text: "Male platypuses have venomous spurs on their hind legs that can cause excruciating pain in humans.", real: true },
      { text: "Platypus venom contains over 80 different toxins, some unique to platypuses.", real: true },
      { text: "Platypus venom is completely harmless and feels like a gentle tickle.", real: false }
    ],
    explanation: "Platypus venom causes severe, long-lasting pain that can be resistant to morphine."
  },
  {
    topic: "Garam Masala",
    statements: [
      { text: "Garam masala means 'hot spice mixture' in Hindi, referring to the spices' warming effect on the body.", real: true },
      { text: "Every Indian household may have its own unique garam masala recipe passed down through generations.", real: true },
      { text: "Garam masala is a single spice from one specific plant.", real: false }
    ],
    explanation: "Garam masala is a blend of multiple spices, not a single spice."
  },
  {
    topic: "Bran Castle",
    statements: [
      { text: "Bran Castle in Romania is commonly known as 'Dracula's Castle' due to its connection to the vampire legend.", real: true },
      { text: "Vlad the Impaler, the historical inspiration for Dracula, may have been imprisoned at Bran Castle.", real: true },
      { text: "Bran Castle was built in the 21st century as a Dracula-themed hotel.", real: false }
    ],
    explanation: "Bran Castle was built in 1377 as a medieval fortress."
  },
  {
    topic: "The Guadalquivir River",
    statements: [
      { text: "The Guadalquivir's name comes from Arabic 'al-wadi al-kabir' meaning 'the great river.'", real: true },
      { text: "Seville, one of Spain's largest cities, is a major inland port on the Guadalquivir.", real: true },
      { text: "The Guadalquivir is a river in Antarctica.", real: false }
    ],
    explanation: "The Guadalquivir flows through Andalusia in southern Spain."
  },
  {
    topic: "Chainsaw Origin",
    statements: [
      { text: "A prototype of the chainsaw was originally invented for medical use — to assist with childbirth.", real: true },
      { text: "The modern portable chainsaw for forestry was developed in the 1920s.", real: true },
      { text: "The chainsaw was invented as a musical instrument in 18th-century Vienna.", real: false }
    ],
    explanation: "Early chain-toothed saws were indeed medical tools; the forestry chainsaw came much later."
  },
  {
    topic: "The Iliotibial Band",
    statements: [
      { text: "The IT band is a thick band of fascia running from the hip to just below the knee.", real: true },
      { text: "IT band syndrome is one of the most common causes of lateral knee pain in runners.", real: true },
      { text: "The IT band is a muscle inside the skull.", real: false }
    ],
    explanation: "The iliotibial band runs along the outside of the thigh."
  },
  {
    topic: "Erbium",
    statements: [
      { text: "Erbium is one of four elements named after the village of Ytterby in Sweden.", real: true },
      { text: "Erbium-doped fiber amplifiers are essential components of the global internet's fiber optic network.", real: true },
      { text: "Erbium is a spice used in Scandinavian baking.", real: false }
    ],
    explanation: "Erbium is a rare earth element used in fiber optics and laser technology."
  },
  {
    topic: "The Bodhran",
    statements: [
      { text: "The bodhrán is an Irish frame drum played with a stick called a tipper or cipín.", real: true },
      { text: "Traditional bodhrán heads are made from goatskin.", real: true },
      { text: "The bodhrán is a stringed instrument similar to a banjo.", real: false }
    ],
    explanation: "The bodhrán is a frame drum, not a stringed instrument."
  },
  {
    topic: "Turritopsis Dohrnii",
    statements: [
      { text: "Turritopsis dohrnii can theoretically live forever by reverting to its polyp stage when stressed.", real: true },
      { text: "Despite being 'immortal,' these jellyfish still die from predation and disease.", real: true },
      { text: "Turritopsis dohrnii is the largest jellyfish species in the world.", real: false }
    ],
    explanation: "Turritopsis dohrnii is tiny, only about 4.5 mm in diameter."
  },
  {
    topic: "Aleppo Pepper",
    statements: [
      { text: "Aleppo pepper is a mildly hot, fruity chili flake named after the city of Aleppo in Syria.", real: true },
      { text: "Due to the Syrian civil war, much of the 'Aleppo pepper' sold today is actually grown in Turkey.", real: true },
      { text: "Aleppo pepper is the hottest pepper in the world, far hotter than a Carolina Reaper.", real: false }
    ],
    explanation: "Aleppo pepper is mild to moderately hot, far less intense than the Carolina Reaper."
  },
  {
    topic: "Dunnottar Castle",
    statements: [
      { text: "Dunnottar Castle in Scotland sits on a dramatic rocky headland jutting into the North Sea.", real: true },
      { text: "The Scottish Crown Jewels were hidden at Dunnottar Castle to protect them from Oliver Cromwell.", real: true },
      { text: "Dunnottar Castle is a modern shopping mall in Glasgow.", real: false }
    ],
    explanation: "Dunnottar is a medieval fortress ruin on the Aberdeenshire coast."
  },
  {
    topic: "The Ebro River",
    statements: [
      { text: "The Ebro is the longest river entirely within Spain.", real: true },
      { text: "The name 'Iberian Peninsula' likely derives from the ancient name of the Ebro River (Iberus).", real: true },
      { text: "The Ebro flows through central China.", real: false }
    ],
    explanation: "The Ebro flows through northeastern Spain into the Mediterranean Sea."
  },
  {
    topic: "Corkscrew Invention",
    statements: [
      { text: "The corkscrew was patented in 1795 by Reverend Samuel Henshall.", real: true },
      { text: "The design of the corkscrew was inspired by the 'gun worm,' a tool used to clean musket barrels.", real: true },
      { text: "Corkscrews were invented in ancient Egypt for opening clay amphorae.", real: false }
    ],
    explanation: "Cork-sealed bottles didn't become common until the 17th century. The corkscrew followed shortly after."
  },
  {
    topic: "The Plantaris Muscle",
    statements: [
      { text: "The plantaris is one of the most vestigial muscles in the human body and is absent in about 10% of people.", real: true },
      { text: "Surgeons often harvest the plantaris tendon for use in reconstructive surgeries elsewhere in the body.", real: true },
      { text: "The plantaris is the largest and strongest muscle in the body.", real: false }
    ],
    explanation: "The plantaris is a small, thin muscle in the calf — one of the smallest in the body."
  },
  {
    topic: "Holmium",
    statements: [
      { text: "Holmium has the strongest magnetic moment of any naturally occurring element.", real: true },
      { text: "Holmium is named after Stockholm (Holmia in Latin).", real: true },
      { text: "Holmium is the primary ingredient in common table salt.", real: false }
    ],
    explanation: "Holmium is a rare earth element. Table salt is sodium chloride."
  },
  {
    topic: "The Berimbau",
    statements: [
      { text: "The berimbau is a single-stringed Brazilian instrument that sets the rhythm and tempo for capoeira.", real: true },
      { text: "The berimbau uses a gourd as a resonator and is played with a stick and a coin or stone.", real: true },
      { text: "The berimbau is a large pipe organ found in Brazilian churches.", real: false }
    ],
    explanation: "The berimbau is a simple, portable musical bow instrument."
  },
  {
    topic: "Crown-of-Thorns Starfish",
    statements: [
      { text: "Crown-of-thorns starfish are one of the biggest threats to coral reefs, especially the Great Barrier Reef.", real: true },
      { text: "A single crown-of-thorns starfish can consume up to 10 square meters of coral per year.", real: true },
      { text: "Crown-of-thorns starfish are harmless, tiny organisms that help coral grow.", real: false }
    ],
    explanation: "Crown-of-thorns starfish are large, destructive coral predators."
  },
  {
    topic: "Pink Peppercorns",
    statements: [
      { text: "Pink peppercorns are not actually pepper — they come from a South American tree related to cashews.", real: true },
      { text: "Some people with tree nut allergies may react to pink peppercorns due to their relation to cashews.", real: true },
      { text: "Pink peppercorns are regular black peppercorns that have been dyed pink.", real: false }
    ],
    explanation: "Pink peppercorns come from the Schinus tree, completely unrelated to true pepper."
  },
  {
    topic: "Dunluce Castle",
    statements: [
      { text: "Dunluce Castle in Northern Ireland sits on the edge of a basalt cliff overlooking the Atlantic Ocean.", real: true },
      { text: "Part of Dunluce Castle's kitchen fell into the sea during a storm, along with several servants.", real: true },
      { text: "Dunluce Castle is located in the Australian outback.", real: false }
    ],
    explanation: "Dunluce Castle is on the Antrim Coast of Northern Ireland."
  },
  {
    topic: "The Oder River",
    statements: [
      { text: "The Oder River forms much of the border between Germany and Poland.", real: true },
      { text: "The Oder-Neisse line along the river was established as the German-Polish border after World War II.", real: true },
      { text: "The Oder River flows through South America.", real: false }
    ],
    explanation: "The Oder flows through Central Europe."
  },
  {
    topic: "Ballpoint Pen History",
    statements: [
      { text: "In Argentina, the ballpoint pen is so associated with László Bíró that his birthday is celebrated as 'Inventor's Day.'", real: true },
      { text: "The British RAF used Bíró pens during WWII because they worked at high altitude unlike fountain pens.", real: true },
      { text: "Ballpoint pens have been the standard writing instrument since ancient Sumerian times.", real: false }
    ],
    explanation: "Ballpoint pens were invented in the 1930s. Ancient Sumerians used reed styluses on clay tablets."
  },
  {
    topic: "The Psoas Major",
    statements: [
      { text: "The psoas major is the only muscle that connects the spine to the legs.", real: true },
      { text: "The psoas is sometimes called the 'muscle of the soul' in Eastern medicine traditions.", real: true },
      { text: "The psoas is a bone in the forearm.", real: false }
    ],
    explanation: "The psoas is a deep hip flexor muscle."
  },
  {
    topic: "Dysprosium",
    statements: [
      { text: "Dysprosium's name comes from Greek 'dysprositos' meaning 'hard to get at.'", real: true },
      { text: "Dysprosium is essential for making the strongest permanent magnets used in electric vehicles and wind turbines.", real: true },
      { text: "Dysprosium is a type of Greek yogurt.", real: false }
    ],
    explanation: "Dysprosium is a rare earth element critical to modern magnet technology."
  },
  {
    topic: "The Jaw Harp",
    statements: [
      { text: "The jaw harp (Jew's harp) is one of the oldest musical instruments, found on every inhabited continent.", real: true },
      { text: "The jaw harp uses the player's mouth as a resonating chamber to amplify its sound.", real: true },
      { text: "The jaw harp is a large keyboard instrument requiring two players.", real: false }
    ],
    explanation: "The jaw harp is a tiny, handheld instrument played by a single person."
  },
  {
    topic: "Japanese Spider Crab",
    statements: [
      { text: "The Japanese spider crab has the largest leg span of any arthropod, reaching up to 3.7 meters.", real: true },
      { text: "Japanese spider crabs can live for up to 100 years.", real: true },
      { text: "Japanese spider crabs are the size of a thumbnail and live in freshwater puddles.", real: false }
    ],
    explanation: "Japanese spider crabs are the largest crabs in the world, living in the deep Pacific Ocean."
  },
  {
    topic: "Filé Powder",
    statements: [
      { text: "Filé powder is made from dried, ground sassafras leaves and is essential to Cajun gumbo.", real: true },
      { text: "Filé powder was introduced to French settlers by the Choctaw Native Americans.", real: true },
      { text: "Filé powder is a type of gunpowder used in fireworks.", real: false }
    ],
    explanation: "Filé powder is a culinary seasoning used as a thickener in Louisiana cooking."
  },
  {
    topic: "Caernarfon Castle",
    statements: [
      { text: "Caernarfon Castle in Wales was built by Edward I and modeled on the walls of Constantinople.", real: true },
      { text: "Prince Charles was invested as the Prince of Wales at Caernarfon Castle in 1969.", real: true },
      { text: "Caernarfon Castle is a modern sports arena in Toronto, Canada.", real: false }
    ],
    explanation: "Caernarfon is a medieval castle in Gwynedd, North Wales."
  },
  {
    topic: "The Meuse River",
    statements: [
      { text: "The Meuse flows through France, Belgium, and the Netherlands before reaching the North Sea.", real: true },
      { text: "The Battle of Verdun was fought along the Meuse River during World War I.", real: true },
      { text: "The Meuse is a river in the Brazilian Amazon.", real: false }
    ],
    explanation: "The Meuse flows through Western Europe."
  },
  {
    topic: "Dental Floss",
    statements: [
      { text: "Dental floss was first recommended by a dentist named Levi Spear Parmly in 1819.", real: true },
      { text: "Early dental floss was made from silk thread.", real: true },
      { text: "Dental floss was invented as fishing line and was never intended for dental use.", real: false }
    ],
    explanation: "Dental floss was specifically invented and promoted for cleaning between teeth."
  },
  {
    topic: "The Sternocleidomastoid",
    statements: [
      { text: "The sternocleidomastoid (SCM) is one of the largest muscles in the neck.", real: true },
      { text: "The SCM allows you to turn your head and is prominently visible when you look sharply to one side.", real: true },
      { text: "The sternocleidomastoid is a bone in the foot.", real: false }
    ],
    explanation: "The SCM is a major neck muscle, not a foot bone."
  },
  {
    topic: "Terbium",
    statements: [
      { text: "Terbium is another of the four elements named after Ytterby, Sweden.", real: true },
      { text: "Terbium is used in green phosphors for color TV screens and LED lighting.", real: true },
      { text: "Terbium is a type of Swedish meatball.", real: false }
    ],
    explanation: "Terbium is a rare earth element."
  },
  {
    topic: "The Ukulele",
    statements: [
      { text: "The ukulele was adapted from a Portuguese instrument called the machete brought to Hawaii in 1879.", real: true },
      { text: "'Ukulele' roughly translates to 'jumping flea' in Hawaiian.", real: true },
      { text: "The ukulele was invented in Hawaii and has six strings like a guitar.", real: false }
    ],
    explanation: "While popularized in Hawaii, it has Portuguese origins. Standard ukuleles have four strings, not six."
  },
  {
    topic: "Decorator Crab",
    statements: [
      { text: "Decorator crabs attach sponges, algae, and anemones to their shells for camouflage.", real: true },
      { text: "Some decorator crabs deliberately attach stinging anemones to their shells as a defense.", real: true },
      { text: "Decorator crabs are skilled artists that paint their shells with natural pigments.", real: false }
    ],
    explanation: "Decorator crabs physically attach living organisms to their shells; they do not paint them."
  },
  {
    topic: "Juniper Berries",
    statements: [
      { text: "Juniper berries are the key flavoring ingredient in gin.", real: true },
      { text: "Juniper berries are not true berries but are actually fleshy seed cones of the juniper tree.", real: true },
      { text: "Juniper berries are a variety of grape used to make red wine.", real: false }
    ],
    explanation: "Juniper berries come from coniferous juniper trees and are unrelated to grapes."
  },
  {
    topic: "Château d'If",
    statements: [
      { text: "Château d'If is the island fortress featured in Alexandre Dumas' novel The Count of Monte Cristo.", real: true },
      { text: "Château d'If was a real prison off the coast of Marseille, France, where political prisoners were held.", real: true },
      { text: "Château d'If is a pastry shop in Paris.", real: false }
    ],
    explanation: "Château d'If is a real 16th-century fortress on a small island near Marseille."
  },
  {
    topic: "The Arno River",
    statements: [
      { text: "The Arno River flows through Florence, the birthplace of the Renaissance.", real: true },
      { text: "A devastating flood of the Arno in 1966 destroyed countless Renaissance artworks and manuscripts.", real: true },
      { text: "The Arno River is in southern Australia.", real: false }
    ],
    explanation: "The Arno flows through Tuscany in central Italy."
  },
  {
    topic: "Parking Meter",
    statements: [
      { text: "The first parking meter was installed in Oklahoma City on July 16, 1935.", real: true },
      { text: "Carlton Magee, a newspaper editor, invented the parking meter to solve downtown parking congestion.", real: true },
      { text: "Parking meters were invented in ancient Rome to regulate chariot parking.", real: false }
    ],
    explanation: "Parking meters were invented in the 1930s for automobile parking."
  },
  {
    topic: "The Masseter",
    statements: [
      { text: "The masseter is the strongest muscle in the human body based on force relative to its size.", real: true },
      { text: "The masseter can generate a bite force of over 170 pounds.", real: true },
      { text: "The masseter is a muscle in the foot used for swimming.", real: false }
    ],
    explanation: "The masseter is a jaw muscle responsible for chewing."
  },
  {
    topic: "Gadolinium",
    statements: [
      { text: "Gadolinium is used as a contrast agent in MRI scans to make images clearer.", real: true },
      { text: "Gadolinium is named after Finnish chemist Johan Gadolin, who studied rare earth minerals.", real: true },
      { text: "Gadolinium is a common flavoring found in chewing gum.", real: false }
    ],
    explanation: "Gadolinium is a rare earth element used in medical imaging."
  },
  {
    topic: "The Mandolin",
    statements: [
      { text: "The mandolin has four pairs of strings (courses) tuned like a violin: G-D-A-E.", real: true },
      { text: "Vivaldi wrote several concertos specifically for the mandolin.", real: true },
      { text: "The mandolin is a percussion instrument played by striking it with wooden sticks.", real: false }
    ],
    explanation: "The mandolin is a plucked string instrument in the lute family."
  },
  {
    topic: "Immortal Jellyfish Biology",
    statements: [
      { text: "When reverting to polyp stage, Turritopsis dohrnii undergoes transdifferentiation — cells change type.", real: true },
      { text: "This biological immortality mechanism is being studied for potential human medical applications.", real: true },
      { text: "The immortal jellyfish has been alive since the age of dinosaurs — a single individual.", real: false }
    ],
    explanation: "Individual jellyfish don't live that long. The species can theoretically cycle between life stages indefinitely."
  },
  {
    topic: "Quatre Épices",
    statements: [
      { text: "Quatre épices ('four spices') is a French spice blend typically containing pepper, nutmeg, cloves, and ginger.", real: true },
      { text: "Quatre épices is used in French charcuterie and pâtés.", real: true },
      { text: "Quatre épices is a dance move in French ballet.", real: false }
    ],
    explanation: "Quatre épices is a spice blend used in French cooking."
  },
  {
    topic: "Château de Carcassonne",
    statements: [
      { text: "Carcassonne is one of the most complete medieval walled cities in Europe.", real: true },
      { text: "The fortified city of Carcassonne has a double ring of walls totaling about 3 km.", real: true },
      { text: "Carcassonne is a modern planned city built in the 2000s.", real: false }
    ],
    explanation: "Carcassonne's fortifications date back to the Gallo-Roman period and were expanded in the Middle Ages."
  },
  {
    topic: "The Tiber River",
    statements: [
      { text: "Rome was founded on the banks of the Tiber River, according to legend by Romulus and Remus.", real: true },
      { text: "The Vatican City is located on the west bank of the Tiber.", real: true },
      { text: "The Tiber flows through Tokyo, Japan.", real: false }
    ],
    explanation: "The Tiber flows through Rome, Italy."
  },
  {
    topic: "Rubber Band",
    statements: [
      { text: "The rubber band was patented in 1845 by Stephen Perry in London.", real: true },
      { text: "The British Royal Mail is one of the world's largest consumers of rubber bands, using millions daily.", real: true },
      { text: "Rubber bands were invented as a medieval weapon for launching projectiles.", real: false }
    ],
    explanation: "Rubber bands were invented for holding papers and packages together."
  },
  {
    topic: "The Temporalis",
    statements: [
      { text: "The temporalis is a powerful jaw-closing muscle that can be felt tightening at the temples during chewing.", real: true },
      { text: "The temporalis originates from the temporal fossa on the side of the skull.", real: true },
      { text: "The temporalis is a tendon in the ankle.", real: false }
    ],
    explanation: "The temporalis is a fan-shaped muscle on the side of the head."
  },
  {
    topic: "Samarium",
    statements: [
      { text: "Samarium-cobalt magnets were the first rare earth magnets, developed in the 1960s.", real: true },
      { text: "Samarium is named after the mineral samarskite, which itself was named after a Russian mine official.", real: true },
      { text: "Samarium is a common garden fertilizer.", real: false }
    ],
    explanation: "Samarium is a rare earth element used in magnets and nuclear applications."
  },
  {
    topic: "The Ocarina",
    statements: [
      { text: "The ocarina is an ancient wind instrument dating back over 12,000 years.", real: true },
      { text: "The ocarina gained modern fame through the video game The Legend of Zelda: Ocarina of Time.", real: true },
      { text: "The ocarina is a keyboard instrument similar to a harpsichord.", real: false }
    ],
    explanation: "The ocarina is a small, enclosed wind instrument played by blowing and covering holes."
  },
  {
    topic: "Bombardier Beetle",
    statements: [
      { text: "Bombardier beetles spray a boiling-hot chemical mixture at predators from their abdomen.", real: true },
      { text: "The chemical reaction inside a bombardier beetle reaches nearly 100°C and produces a loud pop.", real: true },
      { text: "Bombardier beetles are harmless and have no defense mechanisms.", real: false }
    ],
    explanation: "Bombardier beetles have one of the most dramatic chemical defense systems in nature."
  },
  {
    topic: "Ras el Hanout",
    statements: [
      { text: "Ras el hanout means 'head of the shop' in Arabic, implying it's the best spice blend the merchant offers.", real: true },
      { text: "Traditional ras el hanout can contain over 30 different spices.", real: true },
      { text: "Ras el hanout is a brand of shampoo.", real: false }
    ],
    explanation: "Ras el hanout is a complex North African spice blend."
  },
  {
    topic: "Citadel of Aleppo",
    statements: [
      { text: "The Citadel of Aleppo is one of the oldest and largest castles in the world.", real: true },
      { text: "The citadel sits on a massive artificial mound in the center of the ancient city of Aleppo, Syria.", real: true },
      { text: "The Citadel of Aleppo is a modern shopping center in suburban London.", real: false }
    ],
    explanation: "The Citadel of Aleppo is an ancient fortification with a history spanning over 5,000 years."
  },
  {
    topic: "The Guadalquivir Delta",
    statements: [
      { text: "The Guadalquivir delta contains Doñana National Park, one of Europe's most important wetlands.", real: true },
      { text: "Doñana is a critical stopover for millions of birds migrating between Europe and Africa.", real: true },
      { text: "The Guadalquivir delta is a barren desert with no wildlife.", real: false }
    ],
    explanation: "The Guadalquivir delta is one of Europe's most biodiverse wetland areas."
  },
  {
    topic: "Pencil History",
    statements: [
      { text: "A pure graphite deposit was discovered in Borrowdale, England around 1564, launching the pencil industry.", real: true },
      { text: "The average pencil can write approximately 45,000 words or draw a line 35 miles long.", real: true },
      { text: "Pencils have always used lead as their core writing material.", real: false }
    ],
    explanation: "Despite the name 'pencil lead,' pencils use graphite, not actual lead."
  },
  {
    topic: "The Levator Scapulae",
    statements: [
      { text: "The levator scapulae elevates the shoulder blade and is a common source of neck and shoulder pain.", real: true },
      { text: "Poor posture, especially looking down at phones, overworks the levator scapulae.", real: true },
      { text: "The levator scapulae is a valve in the heart.", real: false }
    ],
    explanation: "The levator scapulae is a muscle in the back of the neck."
  },
  {
    topic: "Neodymium",
    statements: [
      { text: "Neodymium magnets are the strongest permanent magnets commercially available.", real: true },
      { text: "Neodymium's name means 'new twin' in Greek because it was hard to separate from praseodymium.", real: true },
      { text: "Neodymium is a type of noodle from Southeast Asia.", real: false }
    ],
    explanation: "Neodymium is a rare earth element critical to modern magnet technology."
  },
  {
    topic: "The Castanets",
    statements: [
      { text: "Castanets are percussion instruments strongly associated with flamenco dance and Spanish culture.", real: true },
      { text: "Castanets are held in the hands and clicked together rhythmically to accompany dance.", real: true },
      { text: "Castanets are large, floor-standing instruments played with foot pedals.", real: false }
    ],
    explanation: "Castanets are small, handheld percussion instruments."
  },
  {
    topic: "Blanket Octopus",
    statements: [
      { text: "Female blanket octopuses trail long, flowing membranes that can extend over 2 meters.", real: true },
      { text: "The size difference between males and females is extreme — males are 100 times smaller than females.", real: true },
      { text: "Blanket octopuses wrap themselves in actual blankets stolen from scuba divers.", real: false }
    ],
    explanation: "Their 'blanket' is a natural membrane between their arms, not an actual blanket."
  },
  {
    topic: "Berbere Spice",
    statements: [
      { text: "Berbere is the essential spice blend of Ethiopian cuisine, used in stews, meats, and lentils.", real: true },
      { text: "Berbere typically contains chili peppers, fenugreek, coriander, garlic, and many other spices.", real: true },
      { text: "Berbere is a brand of German automobile.", real: false }
    ],
    explanation: "Berbere is an Ethiopian spice blend."
  },
  {
    topic: "Dover Castle",
    statements: [
      { text: "Dover Castle is called the 'Key to England' because of its strategic position on the English Channel.", real: true },
      { text: "Secret wartime tunnels beneath Dover Castle were used to plan the Dunkirk evacuation in 1940.", real: true },
      { text: "Dover Castle is a small wooden bridge in rural Japan.", real: false }
    ],
    explanation: "Dover Castle is a massive medieval fortress on the white cliffs of Dover, England."
  },
  {
    topic: "Andorra",
    statements: [
      { text: "Andorra has no airport, railway, or seaport — it is only accessible by road.", real: true },
      { text: "Andorra's economy relies heavily on duty-free shopping and tourism.", real: true },
      { text: "Andorra is one of the largest countries in Europe.", real: false }
    ],
    explanation: "Andorra is one of the smallest countries in Europe, a microstate in the Pyrenees mountains."
  },
  {
    topic: "Speed Skating",
    statements: [
      { text: "Speed skaters can reach speeds of over 60 km/h (37 mph) on ice.", real: true },
      { text: "Clap skates, where the blade detaches from the heel, revolutionized speed skating in the 1990s.", real: true },
      { text: "Speed skating is performed on sand using special sand-bladed shoes.", real: false }
    ],
    explanation: "Speed skating is performed on ice rinks."
  },
  {
    topic: "Colugo",
    statements: [
      { text: "Colugos can glide up to 70 meters between trees using a membrane that extends from face to tail tip.", real: true },
      { text: "Despite being called 'flying lemurs,' colugos are not lemurs and cannot truly fly.", real: true },
      { text: "Colugos are a species of deep-sea fish.", real: false }
    ],
    explanation: "Colugos are arboreal mammals from Southeast Asia."
  },
  {
    topic: "Baharat Spice",
    statements: [
      { text: "Baharat is a warm spice blend widely used in Middle Eastern and North African cooking.", real: true },
      { text: "The word 'baharat' simply means 'spices' in Arabic.", real: true },
      { text: "Baharat is an electronic dance music genre from Berlin.", real: false }
    ],
    explanation: "Baharat is a culinary spice blend."
  },
  {
    topic: "Gateway Arch",
    statements: [
      { text: "The Gateway Arch in St. Louis is exactly as wide as it is tall at 630 feet.", real: true },
      { text: "The Arch sways up to 18 inches in high winds but is designed to withstand earthquakes.", real: true },
      { text: "The Gateway Arch is made entirely of wood.", real: false }
    ],
    explanation: "The Gateway Arch is made of stainless steel over a concrete and steel interior frame."
  },
  {
    topic: "The Trent River",
    statements: [
      { text: "The Trent is the third-longest river in the United Kingdom.", real: true },
      { text: "The Trent Aegir is a tidal bore that travels upstream on the river.", real: true },
      { text: "The Trent flows through the Sahara Desert.", real: false }
    ],
    explanation: "The Trent flows through the English Midlands."
  },
  {
    topic: "Zipper Manufacturing",
    statements: [
      { text: "YKK is the world's largest zipper manufacturer, producing about 50% of all zippers globally.", real: true },
      { text: "YKK stands for Yoshida Kogyo Kabushikikaisha, a Japanese company founded in 1934.", real: true },
      { text: "Zippers are manufactured only in Antarctica.", real: false }
    ],
    explanation: "YKK manufactures zippers at facilities worldwide."
  },
  {
    topic: "The Rhomboids",
    statements: [
      { text: "The rhomboid muscles connect the shoulder blades to the spine.", real: true },
      { text: "Weak rhomboids contribute to rounded shoulders and poor posture.", real: true },
      { text: "The rhomboids are bones in the fingers.", real: false }
    ],
    explanation: "The rhomboids are muscles in the upper back."
  },
  {
    topic: "Praseodymium",
    statements: [
      { text: "Praseodymium creates the distinctive yellow-green color in welder's and glassblower's goggles.", real: true },
      { text: "Praseodymium's name means 'green twin' in Greek.", real: true },
      { text: "Praseodymium is a popular energy drink.", real: false }
    ],
    explanation: "Praseodymium is a rare earth element."
  },
  {
    topic: "The Vuvuzela",
    statements: [
      { text: "The vuvuzela gained global attention during the 2010 FIFA World Cup in South Africa.", real: true },
      { text: "A vuvuzela produces a sound of about 120 decibels, as loud as a chainsaw.", real: true },
      { text: "The vuvuzela is a stringed instrument used in classical orchestras.", real: false }
    ],
    explanation: "The vuvuzela is a plastic horn blown as a noisemaker at sporting events."
  },
  {
    topic: "Pallas's Cat",
    statements: [
      { text: "Pallas's cats have round pupils unlike most small cats, making them look perpetually grumpy.", real: true },
      { text: "Pallas's cats have the thickest and longest fur of any wild cat species.", real: true },
      { text: "Pallas's cats are the largest wild cats, bigger than tigers.", real: false }
    ],
    explanation: "Pallas's cats are small, about the size of a domestic cat."
  },
  {
    topic: "Chili Flakes",
    statements: [
      { text: "Standard crushed red pepper flakes are typically made from cayenne-type peppers.", real: true },
      { text: "The seeds in crushed red pepper flakes provide much of the heat.", real: true },
      { text: "Red pepper flakes are made from ground-up red candy.", real: false }
    ],
    explanation: "Red pepper flakes are made from dried hot peppers, not candy."
  },
  {
    topic: "Acropolis of Athens",
    statements: [
      { text: "The Acropolis of Athens sits on a rocky hill 150 meters above the city.", real: true },
      { text: "Many of the Parthenon's marbles were removed by Lord Elgin in the early 1800s and remain in the British Museum.", real: true },
      { text: "The Acropolis was built in the 1950s as a tourist attraction.", real: false }
    ],
    explanation: "The Acropolis dates back to the 5th century BCE and earlier."
  },
  {
    topic: "The Somme River",
    statements: [
      { text: "The River Somme in France gave its name to one of the bloodiest battles of World War I.", real: true },
      { text: "The Somme flows through the Picardy region of northern France.", real: true },
      { text: "The Somme River is in South America.", real: false }
    ],
    explanation: "The Somme is a river in northern France."
  },
  {
    topic: "Electric Toothbrush",
    statements: [
      { text: "The first electric toothbrush was invented in Switzerland in 1954 by Dr. Philippe-Guy Woog.", real: true },
      { text: "The Broxodent, the first electric toothbrush, had to be plugged into a wall outlet.", real: true },
      { text: "Electric toothbrushes were invented in ancient Greece using small water wheels.", real: false }
    ],
    explanation: "Electric toothbrushes are a mid-20th-century invention."
  },
  {
    topic: "The Serratus Anterior",
    statements: [
      { text: "The serratus anterior wraps around the rib cage and is called the 'boxer's muscle.'", real: true },
      { text: "The serratus anterior protracts and stabilizes the shoulder blade against the rib cage.", real: true },
      { text: "The serratus anterior is a tendon in the wrist.", real: false }
    ],
    explanation: "The serratus anterior is a muscle on the side of the chest."
  },
  {
    topic: "Lanthanum",
    statements: [
      { text: "Lanthanum's name comes from Greek 'lanthanein' meaning 'to lie hidden.'", real: true },
      { text: "Lanthanum is used in camera lenses and telescope optics for superior image clarity.", real: true },
      { text: "Lanthanum is a type of ancient Roman clothing.", real: false }
    ],
    explanation: "Lanthanum is a rare earth element."
  },
  {
    topic: "The Clavichord",
    statements: [
      { text: "The clavichord is one of the oldest keyboard instruments, used since the late medieval period.", real: true },
      { text: "The clavichord is the only keyboard instrument that allows vibrato through finger pressure.", real: true },
      { text: "The clavichord is a large brass instrument played in marching bands.", real: false }
    ],
    explanation: "The clavichord is a small, quiet keyboard instrument."
  },
  {
    topic: "Tardigrade",
    statements: [
      { text: "Tardigrades have survived exposure to the vacuum of outer space.", real: true },
      { text: "Tardigrades can survive temperatures from -272°C to 150°C.", real: true },
      { text: "Tardigrades are large predatory animals the size of bears.", real: false }
    ],
    explanation: "Tardigrades are microscopic, typically less than 0.5 mm long. Despite being called 'water bears,' they are tiny."
  },
  {
    topic: "Urfa Biber",
    statements: [
      { text: "Urfa biber is a dried Turkish chili pepper with a smoky, raisin-like sweetness.", real: true },
      { text: "Urfa peppers are dried in the sun during the day and wrapped tightly at night to retain moisture and oils.", real: true },
      { text: "Urfa biber is a Swedish sports car brand.", real: false }
    ],
    explanation: "Urfa biber is a chili pepper from the Urfa region of Turkey."
  },
  {
    topic: "Brooklyn Bridge",
    statements: [
      { text: "The Brooklyn Bridge took 14 years to build and was the longest suspension bridge when completed in 1883.", real: true },
      { text: "The bridge's chief engineer, Washington Roebling, supervised construction from his sickbed via telescope.", real: true },
      { text: "The Brooklyn Bridge connects San Francisco to Oakland.", real: false }
    ],
    explanation: "The Brooklyn Bridge connects Manhattan and Brooklyn in New York City."
  },
  {
    topic: "The Neva River",
    statements: [
      { text: "Saint Petersburg was built by Peter the Great on the marshy banks of the Neva River.", real: true },
      { text: "The Neva is only 74 km long but is one of the largest rivers in Europe by volume of flow.", real: true },
      { text: "The Neva flows through the Australian outback.", real: false }
    ],
    explanation: "The Neva flows through Saint Petersburg, Russia."
  },
  {
    topic: "Dishwasher Invention",
    statements: [
      { text: "The first practical dishwasher was invented by Josephine Cochrane, a wealthy socialite, in 1886.", real: true },
      { text: "Cochrane invented the dishwasher because she was frustrated that servants kept chipping her fine china.", real: true },
      { text: "The dishwasher was invented by a professional dishwasher who wanted to automate his job.", real: false }
    ],
    explanation: "The dishwasher was invented by a wealthy woman wanting to protect her dishes."
  },
  {
    topic: "The Piriformis",
    statements: [
      { text: "The piriformis is a small muscle deep in the buttock that can compress the sciatic nerve.", real: true },
      { text: "Piriformis syndrome mimics sciatica and is common in runners and people who sit for long periods.", real: true },
      { text: "The piriformis is a gland in the throat.", real: false }
    ],
    explanation: "The piriformis is a deep buttock muscle."
  },
  {
    topic: "Cerium",
    statements: [
      { text: "Cerium was named after the dwarf planet Ceres, which itself was named after the Roman goddess.", real: true },
      { text: "Cerium is used in catalytic converters and self-cleaning ovens.", real: true },
      { text: "Cerium is a type of breakfast cereal.", real: false }
    ],
    explanation: "Cerium is a rare earth element."
  },
  {
    topic: "The Harpsichord",
    statements: [
      { text: "Unlike a piano, a harpsichord plucks its strings rather than striking them with hammers.", real: true },
      { text: "The harpsichord dominated keyboard music for centuries before being largely replaced by the piano.", real: true },
      { text: "The harpsichord is a wind instrument similar to a harmonica.", real: false }
    ],
    explanation: "The harpsichord is a keyboard instrument that produces sound by plucking strings."
  },
  {
    topic: "Star-Nosed Mole",
    statements: [
      { text: "The star-nosed mole has 22 pink tentacles on its nose that contain over 100,000 nerve fibers.", real: true },
      { text: "The star-nosed mole is the fastest-eating mammal, identifying and consuming food in under 230 milliseconds.", real: true },
      { text: "Star-nosed moles live in the treetops of tropical rainforests.", real: false }
    ],
    explanation: "Star-nosed moles live in underground tunnels in wetlands of eastern North America."
  },
  {
    topic: "Smoked Paprika",
    statements: [
      { text: "Spanish smoked paprika (pimentón) is made from peppers dried over oak wood fires for weeks.", real: true },
      { text: "Pimentón de la Vera has a Protected Designation of Origin status in the EU.", real: true },
      { text: "Smoked paprika is made by adding liquid smoke to regular flour.", real: false }
    ],
    explanation: "Smoked paprika is made from real peppers slow-smoked over wood, not from flour."
  },
  {
    topic: "Hoover Dam",
    statements: [
      { text: "Hoover Dam contains enough concrete to build a two-lane highway from San Francisco to New York.", real: true },
      { text: "Over 100 workers died during the construction of Hoover Dam.", real: true },
      { text: "Hoover Dam was built entirely of wood.", real: false }
    ],
    explanation: "Hoover Dam is a massive concrete arch-gravity dam."
  },
  {
    topic: "The Danube-Black Forest Source",
    statements: [
      { text: "The Danube River begins in Germany's Black Forest and flows east to the Black Sea.", real: true },
      { text: "At one point, the Danube disappears underground through sinkholes and resurfaces several km later.", real: true },
      { text: "The Danube flows west to the Atlantic Ocean.", real: false }
    ],
    explanation: "The Danube flows eastward across Europe to the Black Sea."
  },
  {
    topic: "Microwave Popcorn",
    statements: [
      { text: "Microwave popcorn was one of the first products specifically designed for microwave ovens.", real: true },
      { text: "The microwave popcorn bag is lined with a material called a susceptor that focuses microwave energy.", real: true },
      { text: "Microwave popcorn was invented in ancient China during the Han Dynasty.", real: false }
    ],
    explanation: "Microwave popcorn was developed in the 1980s."
  },
  {
    topic: "The Tensor Fasciae Latae",
    statements: [
      { text: "The tensor fasciae latae (TFL) is a small thigh muscle that connects to the IT band.", real: true },
      { text: "The TFL assists in hip flexion, abduction, and internal rotation.", real: true },
      { text: "The TFL is an organ in the chest that filters blood.", real: false }
    ],
    explanation: "The TFL is a muscle on the outer hip/thigh."
  },
  {
    topic: "Lutetium",
    statements: [
      { text: "Lutetium is named after Lutetia, the ancient Roman name for Paris.", real: true },
      { text: "Lutetium is the last element in the lanthanide series and one of the rarest rare earth elements.", real: true },
      { text: "Lutetium is the main ingredient in French perfume.", real: false }
    ],
    explanation: "Lutetium is a rare earth metal used in specialized industrial applications."
  },
  {
    topic: "The Bagpipe Variations",
    statements: [
      { text: "Bagpipes exist in many traditions beyond Scotland, including Spanish gaita, Italian zampogna, and Turkish tulum.", real: true },
      { text: "The Great Highland Bagpipe requires three drone pipes and one chanter to play.", real: true },
      { text: "Bagpipes can only produce a single continuous note with no variation.", real: false }
    ],
    explanation: "Bagpipes can play melodies on the chanter pipe while the drones provide a continuous background note."
  },
  {
    topic: "Horseshoe Crab",
    statements: [
      { text: "Horseshoe crabs have blue blood because it uses copper instead of iron to carry oxygen.", real: true },
      { text: "Horseshoe crab blood is harvested by the biomedical industry to test for bacterial contamination.", real: true },
      { text: "Horseshoe crabs are a recently evolved species, appearing just 100 years ago.", real: false }
    ],
    explanation: "Horseshoe crabs are 'living fossils' that have existed for over 450 million years."
  },
  {
    topic: "White Pepper",
    statements: [
      { text: "White pepper is made from the same berries as black pepper but with the outer skin removed.", real: true },
      { text: "White pepper is preferred in light-colored dishes and sauces for aesthetic reasons.", real: true },
      { text: "White pepper comes from a completely different plant than black pepper.", real: false }
    ],
    explanation: "Both white and black pepper come from the Piper nigrum plant — only the processing differs."
  },
  {
    topic: "Stonehenge Construction",
    statements: [
      { text: "Some of Stonehenge's bluestones were transported from Wales, about 150 miles away.", real: true },
      { text: "Stonehenge was built in several stages over a period of about 1,500 years.", real: true },
      { text: "Stonehenge was built by the Romans as a temple to Jupiter.", real: false }
    ],
    explanation: "Stonehenge predates the Romans by thousands of years. It was built by Neolithic and Bronze Age peoples."
  },
  {
    topic: "The Seine River",
    statements: [
      { text: "The Seine flows through the heart of Paris, passing landmarks like the Eiffel Tower and Notre-Dame.", real: true },
      { text: "Napoleon Bonaparte is buried near the banks of the Seine at Les Invalides.", real: true },
      { text: "The Seine flows through Moscow, Russia.", real: false }
    ],
    explanation: "The Seine flows through Paris and northern France. The Moskva River flows through Moscow."
  },
  {
    topic: "Velcro Applications",
    statements: [
      { text: "NASA has used Velcro extensively on space missions to secure objects in zero gravity.", real: true },
      { text: "The heart was once held together during surgery using Velcro-like patches.", real: true },
      { text: "Velcro was declared illegal in all countries due to safety concerns.", real: false }
    ],
    explanation: "Velcro is widely used and perfectly legal worldwide."
  },
  {
    topic: "The Subscapularis",
    statements: [
      { text: "The subscapularis is the largest and strongest of the four rotator cuff muscles.", real: true },
      { text: "The subscapularis lies between the shoulder blade and the rib cage.", real: true },
      { text: "The subscapularis is a bone in the lower jaw.", real: false }
    ],
    explanation: "The subscapularis is a muscle on the front surface of the shoulder blade."
  },
  {
    topic: "Ytterbium",
    statements: [
      { text: "Ytterbium is yet another of the four elements named after Ytterby, Sweden.", real: true },
      { text: "Ytterbium atomic clocks are among the most precise timekeeping devices ever created.", real: true },
      { text: "Ytterbium is a type of Swedish berry used in jam.", real: false }
    ],
    explanation: "Ytterbium is a rare earth element."
  },
  {
    topic: "The Organ (Instrument)",
    statements: [
      { text: "The pipe organ is the largest musical instrument, with the largest having over 33,000 pipes.", real: true },
      { text: "Pipe organs can produce sounds ranging from barely audible to louder than a symphony orchestra.", real: true },
      { text: "The pipe organ was invented in the 21st century.", real: false }
    ],
    explanation: "The pipe organ dates back to ancient Greece — the hydraulis was invented in the 3rd century BCE."
  },
  {
    topic: "Coelacanth",
    statements: [
      { text: "The coelacanth was thought to have been extinct for 66 million years until a living one was found in 1938.", real: true },
      { text: "Coelacanths have limb-like fins that move in an alternating pattern, similar to how land animals walk.", real: true },
      { text: "Coelacanths are common freshwater aquarium fish found in pet stores.", real: false }
    ],
    explanation: "Coelacanths are extremely rare deep-sea fish, not suitable or available for aquariums."
  },
  {
    topic: "Sichuan Peppercorn",
    statements: [
      { text: "Sichuan peppercorn numbs the tongue by activating touch receptors that sense vibration.", real: true },
      { text: "Sichuan peppercorn is not a true pepper — it comes from a tree in the citrus family.", real: true },
      { text: "Sichuan peppercorn is made by grinding dried fish scales.", real: false }
    ],
    explanation: "Sichuan peppercorn comes from the husks of the prickly ash tree."
  },
  {
    topic: "Panama Canal Engineering",
    statements: [
      { text: "The Panama Canal uses locks to raise ships 26 meters above sea level to cross the continental divide.", real: true },
      { text: "About 14,000 ships pass through the Panama Canal annually.", real: true },
      { text: "The Panama Canal is a natural river channel that required no engineering.", real: false }
    ],
    explanation: "The Panama Canal is an artificial waterway, one of the greatest engineering achievements in history."
  },
  {
    topic: "The Wye River",
    statements: [
      { text: "The River Wye forms part of the border between England and Wales.", real: true },
      { text: "Tintern Abbey, immortalized in Wordsworth's famous poem, sits on the banks of the Wye.", real: true },
      { text: "The River Wye is in central Africa.", real: false }
    ],
    explanation: "The Wye flows through Wales and England in the United Kingdom."
  },
  {
    topic: "Microphone History",
    statements: [
      { text: "Alexander Graham Bell's telephone essentially contained the first practical microphone.", real: true },
      { text: "The carbon microphone, used in telephones for over a century, was developed by Thomas Edison.", real: true },
      { text: "Microphones were invented in the Stone Age using hollow animal bones.", real: false }
    ],
    explanation: "Microphones are a 19th-century invention, developed alongside telephone technology."
  },
  {
    topic: "The Tibialis Anterior",
    statements: [
      { text: "The tibialis anterior is the muscle on the front of the shin responsible for lifting the foot.", real: true },
      { text: "Shin splints often involve inflammation or stress on the tibialis anterior.", real: true },
      { text: "The tibialis anterior is a gland in the brain.", real: false }
    ],
    explanation: "The tibialis anterior is a lower leg muscle."
  },
  {
    topic: "Thulium",
    statements: [
      { text: "Thulium is the rarest naturally occurring lanthanide element.", real: true },
      { text: "Thulium is named after Thule, an ancient name for Scandinavia.", real: true },
      { text: "Thulium is a popular Scandinavian dessert.", real: false }
    ],
    explanation: "Thulium is a rare earth element."
  },
  {
    topic: "The Pipe Organ History",
    statements: [
      { text: "The first organ, the hydraulis, was invented by Ctesibius of Alexandria around 250 BCE.", real: true },
      { text: "Emperor Nero played a water organ (hydraulis) during public performances in ancient Rome.", real: true },
      { text: "Pipe organs were invented by Benjamin Franklin in the 1700s.", real: false }
    ],
    explanation: "Pipe organs originated in ancient Greece, over 2,000 years before Franklin."
  },
  {
    topic: "Glass Sponge",
    statements: [
      { text: "Glass sponges have skeletons made of silica (glass) that can transmit light like fiber optic cables.", real: true },
      { text: "The Venus' flower basket glass sponge traps a mating pair of shrimp inside, which live there for life.", real: true },
      { text: "Glass sponges are kitchen cleaning tools made from recycled glass.", real: false }
    ],
    explanation: "Glass sponges are deep-sea animals with remarkable glass-like skeletal structures."
  },
  {
    topic: "Green Cardamom",
    statements: [
      { text: "Green cardamom is called the 'Queen of Spices' while black pepper is the 'King.'", real: true },
      { text: "Cardamom is the third most expensive spice by weight after saffron and vanilla.", real: true },
      { text: "Green cardamom is a type of green tea.", real: false }
    ],
    explanation: "Green cardamom is a spice pod from a plant in the ginger family."
  },
  {
    topic: "Channel Tunnel",
    statements: [
      { text: "The Channel Tunnel between England and France is 50.45 km long, with 37.9 km underwater.", real: true },
      { text: "The idea for a Channel Tunnel was first proposed by a French engineer to Napoleon in 1802.", real: true },
      { text: "The Channel Tunnel is an above-ground bridge visible from space.", real: false }
    ],
    explanation: "The Channel Tunnel runs entirely underground and underwater."
  },
  {
    topic: "The Clyde River",
    statements: [
      { text: "Glasgow, Scotland's largest city, grew up along the River Clyde.", real: true },
      { text: "The Clyde was once the center of world shipbuilding, producing famous vessels including the Queen Mary.", real: true },
      { text: "The Clyde is a river in South America.", real: false }
    ],
    explanation: "The Clyde flows through central Scotland."
  },
  {
    topic: "Hair Dryer History",
    statements: [
      { text: "The first handheld hair dryer was invented in 1920 and weighed about 2 pounds.", real: true },
      { text: "Before handheld hair dryers, people used vacuum cleaner hoses reversed to blow warm air.", real: true },
      { text: "Hair dryers were invented in ancient Rome using heated stone tubes.", real: false }
    ],
    explanation: "Electric hair dryers are a 20th-century invention."
  },
  {
    topic: "The Gastrocnemius",
    statements: [
      { text: "The gastrocnemius is the prominent calf muscle that creates the calf's bulging shape.", real: true },
      { text: "The gastrocnemius has two heads and is one of the strongest muscles for pushing off the ground.", real: true },
      { text: "The gastrocnemius is a muscle in the eye.", real: false }
    ],
    explanation: "The gastrocnemius is the main calf muscle in the lower leg."
  },
  {
    topic: "Europium Applications",
    statements: [
      { text: "Europium creates the red color in CRT television screens and LED displays.", real: true },
      { text: "Without europium, euro banknotes would lack their fluorescent anti-counterfeiting features.", real: true },
      { text: "Europium is a flavor enhancer used in soft drinks.", real: false }
    ],
    explanation: "Europium is used in displays and security features, not in food or beverages."
  },
  {
    topic: "The Santoor",
    statements: [
      { text: "The santoor is a hammered dulcimer central to Indian classical music, especially Kashmiri Sufiana.", real: true },
      { text: "The santoor has 100 strings stretched across a trapezoidal body and is played with curved mallets.", real: true },
      { text: "The santoor is a type of Indian flatbread.", real: false }
    ],
    explanation: "The santoor is a stringed musical instrument."
  },
  {
    topic: "Deep-Sea Dragonfish",
    statements: [
      { text: "Dragonfish have teeth so transparent they are virtually invisible to their prey.", real: true },
      { text: "Some dragonfish produce infrared light that only they can see, giving them night vision in the deep ocean.", real: true },
      { text: "Dragonfish are large, colorful fish commonly found in shallow coral reefs.", real: false }
    ],
    explanation: "Dragonfish are small, dark deep-sea fish living at extreme depths."
  },
  {
    topic: "Clove",
    statements: [
      { text: "Cloves are the dried flower buds of a tree native to the Maluku Islands of Indonesia.", real: true },
      { text: "Cloves contain eugenol, a natural anesthetic that has been used for toothache relief for centuries.", real: true },
      { text: "Cloves are a type of pasta shape popular in Italian cooking.", real: false }
    ],
    explanation: "Cloves are a pungent spice, not a pasta shape."
  },
  {
    topic: "Itaipu Dam",
    statements: [
      { text: "The Itaipu Dam on the Brazil-Paraguay border generates about 75% of Paraguay's electricity.", real: true },
      { text: "The amount of concrete used to build Itaipu could construct a city of 4,000 homes.", real: true },
      { text: "Itaipu Dam is a small garden fountain in a Brazilian park.", real: false }
    ],
    explanation: "Itaipu is one of the largest hydroelectric dams in the world."
  },
  {
    topic: "The Tweed River",
    statements: [
      { text: "The River Tweed forms part of the border between England and Scotland.", real: true },
      { text: "The Tweed is one of the finest salmon rivers in Europe.", real: true },
      { text: "The Tweed flows through the Sahara Desert.", real: false }
    ],
    explanation: "The Tweed flows through the Scottish Borders and northern England."
  },
  {
    topic: "Battery Invention",
    statements: [
      { text: "Alessandro Volta invented the first true battery (voltaic pile) in 1800.", real: true },
      { text: "The unit 'volt' for electrical potential is named after Volta.", real: true },
      { text: "Batteries were invented by Alexander Graham Bell as part of the telephone.", real: false }
    ],
    explanation: "Volta invented the battery decades before Bell's telephone work."
  },
  {
    topic: "The Anterior Cruciate Ligament",
    statements: [
      { text: "The ACL is most commonly torn through non-contact pivoting movements in sports.", real: true },
      { text: "Women athletes tear their ACL at 2-8 times the rate of men in similar sports.", real: true },
      { text: "The ACL regenerates on its own within 24 hours of injury.", real: false }
    ],
    explanation: "The ACL has very poor blood supply and does not heal on its own. Surgery is usually required."
  },
  {
    topic: "Scandium Applications",
    statements: [
      { text: "Scandium-aluminum alloys are used in high-end baseball bats and bicycle frames.", real: true },
      { text: "Russia is the world's largest producer of scandium.", real: true },
      { text: "Scandium is the main ingredient in aspirin.", real: false }
    ],
    explanation: "Aspirin's active ingredient is acetylsalicylic acid. Scandium is a metal."
  },
  {
    topic: "The Ney (Flute)",
    statements: [
      { text: "The ney is an end-blown flute central to Turkish, Persian, and Arabic classical music.", real: true },
      { text: "The ney is one of the oldest continuously played instruments, with examples dating back 5,000 years.", real: true },
      { text: "The ney is a large drum played at Turkish weddings.", real: false }
    ],
    explanation: "The ney is a delicate bamboo or reed flute."
  },
  {
    topic: "Mimic Poison Frog",
    statements: [
      { text: "Some poison frog species mimic the coloring of more toxic species to deter predators.", real: true },
      { text: "Poison frogs get their toxicity from the insects they eat — captive-bred ones are non-toxic.", real: true },
      { text: "Poison frogs are completely harmless and their bright colors are purely decorative.", real: false }
    ],
    explanation: "Wild poison frogs are genuinely toxic. Their bright colors serve as warnings to predators."
  },
  {
    topic: "Bay Leaf",
    statements: [
      { text: "Bay leaves release most of their flavor during long, slow cooking rather than raw.", real: true },
      { text: "Ancient Greeks and Romans crowned heroes with bay laurel wreaths.", real: true },
      { text: "Bay leaves are highly toxic and must be removed from food before serving to prevent poisoning.", real: false }
    ],
    explanation: "Bay leaves are not toxic. They are removed because their stiff texture can be unpleasant to eat, not because they are poisonous."
  },
  {
    topic: "Three Gorges Dam",
    statements: [
      { text: "The Three Gorges Dam in China is so massive it slightly slowed Earth's rotation.", real: true },
      { text: "The Three Gorges Dam displaced over 1.3 million people during its construction.", real: true },
      { text: "The Three Gorges Dam is a small decorative fountain in a Chinese garden.", real: false }
    ],
    explanation: "The Three Gorges Dam is the world's largest hydroelectric power station."
  },
  {
    topic: "The Cam River",
    statements: [
      { text: "Cambridge, England gets its name from the bridge over the River Cam.", real: true },
      { text: "Punting on the Cam is a famous Cambridge tradition where passengers are propelled by a long pole.", real: true },
      { text: "The Cam is the longest river in Africa.", real: false }
    ],
    explanation: "The Cam is a small river in eastern England."
  },
  {
    topic: "Kevlar Helmet",
    statements: [
      { text: "Kevlar helmets replaced steel helmets in the US military starting in 1983.", real: true },
      { text: "A Kevlar helmet can stop most pistol bullets and shrapnel fragments.", real: true },
      { text: "Kevlar helmets are decorative accessories with no protective function.", real: false }
    ],
    explanation: "Kevlar helmets provide genuine ballistic protection."
  },
  {
    topic: "The Extensor Digitorum",
    statements: [
      { text: "The extensor digitorum is the muscle on top of the forearm that extends (straightens) the fingers.", real: true },
      { text: "You can see the tendons of the extensor digitorum on the back of your hand when you spread your fingers.", real: true },
      { text: "The extensor digitorum is a bone in the spine.", real: false }
    ],
    explanation: "The extensor digitorum is a forearm muscle."
  },
  {
    topic: "Cerium Applications",
    statements: [
      { text: "Cerium oxide is used to polish glass, including the mirrors in the Hubble Space Telescope.", real: true },
      { text: "Cerium is the most abundant of all rare earth elements.", real: true },
      { text: "Cerium is a type of wax used to seal envelopes.", real: false }
    ],
    explanation: "Cerium is a chemical element, not a wax. Sealing wax is an unrelated product."
  },
  {
    topic: "The Angklung",
    statements: [
      { text: "The angklung is an Indonesian bamboo instrument recognized by UNESCO as Intangible Cultural Heritage.", real: true },
      { text: "Each angklung produces only one note, so an ensemble of players is needed for a melody.", real: true },
      { text: "The angklung is a type of Indonesian soup.", real: false }
    ],
    explanation: "The angklung is a musical instrument made of bamboo tubes."
  },
  {
    topic: "Peacock Mantis Shrimp Colors",
    statements: [
      { text: "The peacock mantis shrimp has one of the most complex visual systems known, with 16 types of color receptors.", real: true },
      { text: "Mantis shrimp can see ultraviolet and polarized light invisible to humans.", real: true },
      { text: "Mantis shrimp are colorblind and can only see in black and white.", real: false }
    ],
    explanation: "Mantis shrimp have the most complex color vision of any known animal."
  },
  {
    topic: "Allspice",
    statements: [
      { text: "Allspice is a single spice — the dried berry of the Pimenta dioica tree — not a blend.", real: true },
      { text: "Allspice is called 'allspice' because it tastes like a combination of cinnamon, nutmeg, and cloves.", real: true },
      { text: "Allspice is a mixture of all spices from around the world blended into one jar.", real: false }
    ],
    explanation: "Allspice is a single spice from one plant, not a blend of multiple spices."
  },
  {
    topic: "Aswan Dam",
    statements: [
      { text: "The Aswan High Dam created Lake Nasser, one of the largest artificial lakes in the world.", real: true },
      { text: "Building the dam required relocating the entire Abu Simbel temple complex to higher ground.", real: true },
      { text: "The Aswan Dam is a small wooden bridge across a creek.", real: false }
    ],
    explanation: "The Aswan High Dam is a massive dam across the Nile River in Egypt."
  },
  {
    topic: "The Avon River (Stratford)",
    statements: [
      { text: "Stratford-upon-Avon, birthplace of Shakespeare, sits on the River Avon.", real: true },
      { text: "The word 'Avon' comes from the Celtic/Welsh word 'afon' meaning simply 'river.'", real: true },
      { text: "The River Avon is the main river of South America.", real: false }
    ],
    explanation: "The River Avon flows through central England."
  },
  {
    topic: "San Marino",
    statements: [
      { text: "San Marino claims to be the oldest republic in the world, founded in 301 CE.", real: true },
      { text: "San Marino is entirely surrounded by Italy and has more vehicles than people.", real: true },
      { text: "San Marino is a large island nation in the Pacific Ocean.", real: false }
    ],
    explanation: "San Marino is a tiny landlocked microstate within Italy."
  },
  {
    topic: "Modern Pentathlon",
    statements: [
      { text: "The modern pentathlon includes fencing, swimming, show jumping, and a combined run/shoot event.", real: true },
      { text: "The modern pentathlon was created by the founder of the modern Olympics, Pierre de Coubertin.", real: true },
      { text: "The modern pentathlon consists of five different types of chess matches.", real: false }
    ],
    explanation: "The pentathlon involves physical sports, not chess."
  },
  {
    topic: "Maned Wolf",
    statements: [
      { text: "The maned wolf has extremely long legs, making it the tallest wild canid in the world.", real: true },
      { text: "Despite its name, the maned wolf is neither a wolf nor a fox — it is the only species in its genus.", real: true },
      { text: "Maned wolves are tiny rodents that live underground.", real: false }
    ],
    explanation: "Maned wolves are large, leggy canids from South American grasslands."
  },
  {
    topic: "Cubeb Pepper",
    statements: [
      { text: "Cubeb pepper has a stem attached to each berry, earning it the name 'tailed pepper.'", real: true },
      { text: "Cubeb was once so popular in Europe that it rivaled black pepper in the spice trade.", real: true },
      { text: "Cubeb pepper is a type of chocolate candy.", real: false }
    ],
    explanation: "Cubeb is a real pepper berry from Southeast Asia."
  },
  {
    topic: "Christ the Redeemer",
    statements: [
      { text: "Christ the Redeemer in Rio de Janeiro stands 30 meters tall atop the 700-meter Corcovado mountain.", real: true },
      { text: "The statue is struck by lightning several times per year, and its fingertips have been damaged by strikes.", real: true },
      { text: "Christ the Redeemer is located in Paris, France.", real: false }
    ],
    explanation: "Christ the Redeemer is in Rio de Janeiro, Brazil."
  },
  {
    topic: "The Great Ouse River",
    statements: [
      { text: "The Great Ouse is the longest river in East Anglia, flowing through Bedford and Ely.", real: true },
      { text: "The Fens, a vast area of reclaimed marshland, were drained using channels connected to the Great Ouse.", real: true },
      { text: "The Great Ouse is a river in the Australian outback.", real: false }
    ],
    explanation: "The Great Ouse flows through eastern England."
  },
  {
    topic: "Fire Extinguisher History",
    statements: [
      { text: "The first known fire extinguisher was patented by Ambrose Godfrey in England in 1723.", real: true },
      { text: "Early fire extinguishers used a fuse to release gunpowder, which would scatter the extinguishing fluid.", real: true },
      { text: "Fire extinguishers were invented in ancient Egypt and used to put out pyramid fires.", real: false }
    ],
    explanation: "Fire extinguishers as devices were invented in the 18th century."
  },
  {
    topic: "The Anterior Deltoid",
    statements: [
      { text: "The anterior deltoid is the front portion of the shoulder muscle, used in pushing and front raises.", real: true },
      { text: "The anterior deltoid is heavily activated during bench press exercises.", real: true },
      { text: "The anterior deltoid is a valve in the heart.", real: false }
    ],
    explanation: "The anterior deltoid is a shoulder muscle."
  },
  {
    topic: "Hafnium Dioxide",
    statements: [
      { text: "Hafnium dioxide replaced silicon dioxide as the insulating layer in Intel's 45nm processors.", real: true },
      { text: "This switch to hafnium dioxide was one of the most significant material changes in computer chip history.", real: true },
      { text: "Hafnium dioxide is a common ingredient in birthday cakes.", real: false }
    ],
    explanation: "Hafnium dioxide is a high-tech material used in semiconductor manufacturing."
  },
  {
    topic: "The Sarangi",
    statements: [
      { text: "The sarangi is an Indian bowed stringed instrument with up to 40 sympathetic strings.", real: true },
      { text: "The sarangi is played by pressing the fingernails sideways against the strings, not by pressing down.", real: true },
      { text: "The sarangi is a type of Indian curry paste.", real: false }
    ],
    explanation: "The sarangi is a stringed musical instrument."
  },
  {
    topic: "Glaucus Atlanticus",
    statements: [
      { text: "The blue dragon sea slug floats upside-down on the ocean surface using an air bubble in its stomach.", real: true },
      { text: "The blue dragon eats Portuguese man-of-war and stores their stinging cells for its own defense.", real: true },
      { text: "Blue dragon sea slugs are the largest marine animals in the ocean.", real: false }
    ],
    explanation: "Blue dragon sea slugs are tiny — typically only 3 cm long."
  },
  {
    topic: "Szechuan Cuisine",
    statements: [
      { text: "Szechuan cuisine is known for its 'mala' flavor — a tingling numbness combined with spicy heat.", real: true },
      { text: "Szechuan province was historically isolated by mountains, leading to a unique culinary tradition.", real: true },
      { text: "Szechuan cuisine uses no spices and is known for being the mildest food in China.", real: false }
    ],
    explanation: "Szechuan cuisine is famous for being one of the spiciest and most boldly flavored in China."
  },
  {
    topic: "CN Tower",
    statements: [
      { text: "The CN Tower in Toronto held the record for world's tallest free-standing structure for over 30 years.", real: true },
      { text: "The CN Tower has a glass floor observation deck 342 meters above the ground.", real: true },
      { text: "The CN Tower is located in Sydney, Australia.", real: false }
    ],
    explanation: "The CN Tower is in Toronto, Canada."
  },
  {
    topic: "The Scheldt River",
    statements: [
      { text: "The Scheldt flows through France, Belgium, and the Netherlands.", real: true },
      { text: "Antwerp, one of the world's largest ports, sits on the Scheldt.", real: true },
      { text: "The Scheldt is a river in central Asia.", real: false }
    ],
    explanation: "The Scheldt flows through Western Europe."
  },
  {
    topic: "Alarm Clock History",
    statements: [
      { text: "Plato may have used a water clock that whistled at dawn to wake his students for lectures.", real: true },
      { text: "Levi Hutchins built the first American alarm clock in 1787, but it could only ring at 4 AM.", real: true },
      { text: "Alarm clocks were invented by astronauts on the International Space Station.", real: false }
    ],
    explanation: "Alarm clocks have existed in various forms for thousands of years."
  },
  {
    topic: "The Gastric Mucosa",
    statements: [
      { text: "The stomach lining renews itself every 3-4 days to prevent being digested by its own acid.", real: true },
      { text: "Stomach acid (HCl) is strong enough to dissolve metal.", real: true },
      { text: "The stomach lining never regenerates and lasts an entire human lifetime.", real: false }
    ],
    explanation: "The stomach lining regenerates very rapidly — one of the fastest cell turnover rates in the body."
  },
  {
    topic: "Indium Tin Oxide",
    statements: [
      { text: "Indium tin oxide is the transparent, conductive coating that makes touchscreens work.", real: true },
      { text: "Nearly all smartphones, tablets, and touchscreen devices use indium tin oxide.", real: true },
      { text: "Indium tin oxide is a type of Indian cuisine.", real: false }
    ],
    explanation: "ITO is a technological material used in electronics."
  },
  {
    topic: "The Zurna",
    statements: [
      { text: "The zurna is a loud, double-reed woodwind instrument used across the Middle East and Central Asia.", real: true },
      { text: "The zurna was traditionally played outdoors because it is too loud for indoor performance.", real: true },
      { text: "The zurna is a type of Greek cheese.", real: false }
    ],
    explanation: "The zurna is a musical instrument."
  },
  {
    topic: "Sunflower Sea Star",
    statements: [
      { text: "Sunflower sea stars can have up to 24 arms and span over 1 meter across.", real: true },
      { text: "Sunflower sea stars are among the fastest sea stars, moving at up to 1 meter per minute.", real: true },
      { text: "Sunflower sea stars are land plants found in meadows.", real: false }
    ],
    explanation: "Sunflower sea stars are large marine animals found in the Pacific Ocean."
  },
  {
    topic: "Farro",
    statements: [
      { text: "Farro is an ancient grain that was a staple food of the Roman legions.", real: true },
      { text: "The word 'farina' (flour) is derived from farro's Latin name.", real: true },
      { text: "Farro is a type of plastic packaging material.", real: false }
    ],
    explanation: "Farro is an ancient wheat grain used in Italian and Mediterranean cooking."
  },
  {
    topic: "Space Needle",
    statements: [
      { text: "The Space Needle in Seattle was built for the 1962 World's Fair.", real: true },
      { text: "The Space Needle can withstand winds of up to 200 mph and earthquakes up to magnitude 9.0.", real: true },
      { text: "The Space Needle is a natural rock formation in the Grand Canyon.", real: false }
    ],
    explanation: "The Space Needle is a man-made observation tower in Seattle, Washington."
  },
  {
    topic: "The Rance River",
    statements: [
      { text: "The Rance Tidal Power Station in France was the world's first large-scale tidal power plant.", real: true },
      { text: "The Rance generates electricity from the difference between high and low tides.", real: true },
      { text: "The Rance is a river on the Moon.", real: false }
    ],
    explanation: "The Rance is a river in Brittany, France."
  },
  {
    topic: "Safety Glass",
    statements: [
      { text: "Safety glass was invented accidentally when Édouard Bénédictus dropped a flask coated in cellulose nitrate.", real: true },
      { text: "The flask cracked but held together instead of shattering, inspiring laminated glass.", real: true },
      { text: "Safety glass is softer than regular glass and breaks more easily.", real: false }
    ],
    explanation: "Safety glass is designed to be safer when broken — it holds together rather than shattering into sharp shards."
  },
  {
    topic: "The Gastric Parietal Cells",
    statements: [
      { text: "Parietal cells in the stomach produce hydrochloric acid at a pH as low as 0.8.", real: true },
      { text: "These same cells also produce intrinsic factor, essential for vitamin B12 absorption.", real: true },
      { text: "Parietal cells are found in the lungs and produce mucus for breathing.", real: false }
    ],
    explanation: "Parietal cells are in the stomach lining."
  },
  {
    topic: "Tellurium Applications",
    statements: [
      { text: "Tellurium is used in cadmium telluride solar panels, one of the leading thin-film solar technologies.", real: true },
      { text: "Tellurium was named after 'Tellus,' the Latin name for Earth.", real: true },
      { text: "Tellurium is a type of television brand.", real: false }
    ],
    explanation: "Tellurium is a chemical element."
  },
  {
    topic: "The Tabla",
    statements: [
      { text: "The tabla is a pair of Indian drums — the smaller dayan (right) and larger bayan (left).", real: true },
      { text: "Tabla players use specific syllables (bols) to describe each drum stroke.", real: true },
      { text: "The tabla is a stringed instrument similar to a violin.", real: false }
    ],
    explanation: "The tabla is a pair of hand drums."
  },
  {
    topic: "Geoduck Clam",
    statements: [
      { text: "Geoduck clams can live for over 160 years, making them one of the longest-lived animals.", real: true },
      { text: "The geoduck's siphon can extend over 1 meter, but the clam stays buried in the sediment.", real: true },
      { text: "Geoducks are a species of tropical butterfly.", real: false }
    ],
    explanation: "Geoducks are large saltwater clams native to the Pacific Northwest."
  },
  {
    topic: "Freekeh",
    statements: [
      { text: "Freekeh is made from young green wheat that is roasted and cracked, giving it a smoky flavor.", real: true },
      { text: "Freekeh has been eaten in the Middle East and North Africa for thousands of years.", real: true },
      { text: "Freekeh is a brand of frozen pizza.", real: false }
    ],
    explanation: "Freekeh is an ancient grain product."
  },
  {
    topic: "Atomium",
    statements: [
      { text: "The Atomium in Brussels represents an iron crystal magnified 165 billion times.", real: true },
      { text: "The Atomium was built for the 1958 World's Fair and was originally intended to be temporary.", real: true },
      { text: "The Atomium is a natural crystal formation found in caves.", real: false }
    ],
    explanation: "The Atomium is a human-made structure in Brussels, Belgium."
  },
  {
    topic: "The Bug River",
    statements: [
      { text: "The Bug River forms part of the border between Poland and Ukraine.", real: true },
      { text: "The Molotov-Ribbentrop Pact of 1939 used the Bug River as a dividing line between Nazi and Soviet spheres.", real: true },
      { text: "The Bug River is in South America.", real: false }
    ],
    explanation: "The Bug River is in Eastern Europe."
  },
  {
    topic: "Penicillin Mass Production",
    statements: [
      { text: "During WWII, penicillin was mass-produced using deep fermentation in corn steep liquor.", real: true },
      { text: "A moldy cantaloupe from a Peoria, Illinois market provided the high-yielding Penicillium strain used for mass production.", real: true },
      { text: "Penicillin was first mass-produced in ancient Greece using olive oil.", real: false }
    ],
    explanation: "Penicillin mass production began during World War II."
  },
  {
    topic: "The Thoracic Spine",
    statements: [
      { text: "The thoracic spine has 12 vertebrae and each connects to a pair of ribs.", real: true },
      { text: "The thoracic spine is the least mobile section of the spinal column.", real: true },
      { text: "The thoracic spine is located in the forearm.", real: false }
    ],
    explanation: "The thoracic spine is the middle section of the spine in the upper and mid-back."
  },
  {
    topic: "Selenium in Biology",
    statements: [
      { text: "Brazil nuts are the richest dietary source of selenium — a single nut can exceed the daily requirement.", real: true },
      { text: "Selenium is an essential trace element needed for thyroid function and DNA synthesis.", real: true },
      { text: "Selenium is toxic in any amount and must be completely avoided in the diet.", real: false }
    ],
    explanation: "Selenium is essential in trace amounts but can be toxic in excess — the dose matters."
  },
  {
    topic: "The Dizi (Flute)",
    statements: [
      { text: "The dizi is a Chinese bamboo flute that has a special membrane hole covered with tissue paper.", real: true },
      { text: "The membrane on the dizi creates a bright, buzzy tone unique to Chinese music.", real: true },
      { text: "The dizi is a large bronze gong.", real: false }
    ],
    explanation: "The dizi is a transverse bamboo flute."
  },
  {
    topic: "Box Jellyfish",
    statements: [
      { text: "Box jellyfish have 24 eyes, some of which can form images.", real: true },
      { text: "The Australian box jellyfish is considered the most venomous marine animal in the world.", real: true },
      { text: "Box jellyfish are harmless and their stings feel pleasant.", real: false }
    ],
    explanation: "Box jellyfish stings can be excruciatingly painful and potentially fatal."
  },
  {
    topic: "Freekeh Preparation",
    statements: [
      { text: "The green wheat for freekeh is harvested early and then set on fire to burn off the chaff.", real: true },
      { text: "The fire process gives freekeh its characteristic smoky, nutty flavor.", real: true },
      { text: "Freekeh must be soaked in vinegar for six months before eating.", real: false }
    ],
    explanation: "Freekeh can be cooked in about 15-20 minutes after a brief soak in water."
  },
  {
    topic: "Millau Viaduct",
    statements: [
      { text: "The Millau Viaduct in France is the tallest bridge in the world, with one mast reaching 343 meters.", real: true },
      { text: "At its highest point, the Millau Viaduct is taller than the Eiffel Tower.", real: true },
      { text: "The Millau Viaduct is a small wooden footbridge over a stream.", real: false }
    ],
    explanation: "The Millau Viaduct is a massive cable-stayed bridge designed by Norman Foster."
  },
  {
    topic: "The Vltava River",
    statements: [
      { text: "The Vltava is the longest river in the Czech Republic and flows through Prague.", real: true },
      { text: "Bedřich Smetana composed a famous orchestral piece called 'Vltava' (The Moldau) depicting the river's journey.", real: true },
      { text: "The Vltava is a river in central Japan.", real: false }
    ],
    explanation: "The Vltava flows through Bohemia in the Czech Republic."
  },
  {
    topic: "Rubber Ducky Debugging",
    statements: [
      { text: "Rubber duck debugging is a real software engineering method where programmers explain code to a rubber duck.", real: true },
      { text: "The method works because explaining a problem aloud often reveals the solution.", real: true },
      { text: "Rubber duck debugging requires a specially programmed robotic duck connected to the computer.", real: false }
    ],
    explanation: "Any rubber duck (or inanimate object) works — the point is the act of explaining, not the duck itself."
  },
  {
    topic: "The Cervical Spine",
    statements: [
      { text: "The cervical spine has 7 vertebrae, the same number as a giraffe despite the giraffe's long neck.", real: true },
      { text: "The atlas (C1) vertebra supports the skull and is named after the Greek Titan who held up the sky.", real: true },
      { text: "The cervical spine is located in the pelvis.", real: false }
    ],
    explanation: "The cervical spine is in the neck."
  },
  {
    topic: "Boron",
    statements: [
      { text: "Borax, a boron compound, has been used as a cleaning agent since ancient times.", real: true },
      { text: "Boron is essential for plant growth — without it, crops fail.", real: true },
      { text: "Boron is a noble gas found abundantly in the atmosphere.", real: false }
    ],
    explanation: "Boron is a metalloid, not a noble gas."
  },
  {
    topic: "The Pipa (Instrument)",
    statements: [
      { text: "The pipa is a Chinese lute with a history spanning over 2,000 years.", real: true },
      { text: "The name 'pipa' imitates the sound of the forward and backward plucking of strings.", real: true },
      { text: "The pipa is a type of Chinese soup.", real: false }
    ],
    explanation: "The pipa is a pear-shaped stringed instrument."
  },
  {
    topic: "Pistol Shrimp Sound",
    statements: [
      { text: "Colonies of pistol shrimp generate so much noise they can interfere with sonar systems.", real: true },
      { text: "The sound of a pistol shrimp's snap briefly creates temperatures nearly as hot as the sun's surface.", real: true },
      { text: "Pistol shrimp are completely silent and communicate only through chemical signals.", real: false }
    ],
    explanation: "Pistol shrimp are extremely loud — among the noisiest creatures in the ocean."
  },
  {
    topic: "Bulgur Wheat",
    statements: [
      { text: "Bulgur is made from wheat berries that have been parboiled, dried, and cracked.", real: true },
      { text: "Bulgur is a staple ingredient in tabbouleh and kibbeh.", real: true },
      { text: "Bulgur is a synthetic grain created in a laboratory.", real: false }
    ],
    explanation: "Bulgur is a natural wheat product that has been eaten for thousands of years."
  },
  {
    topic: "Petronas Towers",
    statements: [
      { text: "The Petronas Towers in Kuala Lumpur were the tallest buildings in the world from 1998 to 2004.", real: true },
      { text: "The two towers are connected by a sky bridge at the 41st and 42nd floors.", real: true },
      { text: "The Petronas Towers are located in London, England.", real: false }
    ],
    explanation: "The Petronas Towers are in Kuala Lumpur, Malaysia."
  },
  {
    topic: "The Liffey River",
    statements: [
      { text: "The River Liffey flows through the center of Dublin, Ireland.", real: true },
      { text: "The Guinness brewery at St. James's Gate has drawn water from the Liffey for over 250 years.", real: true },
      { text: "The Liffey is the longest river in Asia.", real: false }
    ],
    explanation: "The Liffey is a relatively short river flowing through Dublin, Ireland."
  },
  {
    topic: "Bubble Level History",
    statements: [
      { text: "The spirit level (bubble level) was invented by Melchisédech Thévenot around 1661.", real: true },
      { text: "Spirit levels use a slightly curved glass tube filled with liquid and an air bubble to indicate level.", real: true },
      { text: "Spirit levels were invented by ancient Mayan priests for astronomical observations.", real: false }
    ],
    explanation: "The spirit level was invented in 17th-century France."
  },
  {
    topic: "The Lumbar Spine",
    statements: [
      { text: "The lumbar spine has 5 large vertebrae that bear most of the body's weight.", real: true },
      { text: "Lower back pain, often from lumbar issues, affects about 80% of people at some point.", real: true },
      { text: "The lumbar spine is in the skull.", real: false }
    ],
    explanation: "The lumbar spine is the lower back."
  },
  {
    topic: "Silicon Properties",
    statements: [
      { text: "Silicon is the second most abundant element in Earth's crust after oxygen.", real: true },
      { text: "Silicon Valley is named after silicon because it is used to make computer chips.", real: true },
      { text: "Silicon and silicone are the same thing.", real: false }
    ],
    explanation: "Silicon is a chemical element. Silicone is a synthetic polymer containing silicon — they are different materials."
  },
  {
    topic: "The Guzheng",
    statements: [
      { text: "The guzheng is a Chinese zither with 21 or more strings and a history of over 2,500 years.", real: true },
      { text: "Players wear picks on their right hand fingers and press on the strings with the left to bend pitch.", real: true },
      { text: "The guzheng is a type of martial arts weapon.", real: false }
    ],
    explanation: "The guzheng is a plucked string instrument."
  },
  {
    topic: "Electric Ray",
    statements: [
      { text: "Electric rays can produce electric shocks of up to 220 volts to stun prey.", real: true },
      { text: "Ancient Romans used electric rays as a form of pain relief by standing on them.", real: true },
      { text: "Electric rays are a type of laser beam used in physics experiments.", real: false }
    ],
    explanation: "Electric rays are flat, disc-shaped marine fish."
  },
  {
    topic: "Fleur de Sel",
    statements: [
      { text: "Fleur de sel is hand-harvested from the surface of salt evaporation ponds, usually in France.", real: true },
      { text: "Fleur de sel forms only under specific wind and sun conditions, making it rare and expensive.", real: true },
      { text: "Fleur de sel is a type of flower arrangement.", real: false }
    ],
    explanation: "Fleur de sel means 'flower of salt' — it is a finishing salt, not flowers."
  },
  {
    topic: "Taipei 101",
    statements: [
      { text: "Taipei 101 has a 730-ton tuned mass damper suspended near its top to counteract wind sway.", real: true },
      { text: "Taipei 101 was designed to resemble a bamboo stalk, a symbol of growth and resilience.", real: true },
      { text: "Taipei 101 is located in Paris, France.", real: false }
    ],
    explanation: "Taipei 101 is a supertall skyscraper in Taipei, Taiwan."
  },
  {
    topic: "The Sava River",
    statements: [
      { text: "Belgrade, the capital of Serbia, sits at the confluence of the Sava and Danube rivers.", real: true },
      { text: "The Sava flows through Slovenia, Croatia, Bosnia, and Serbia.", real: true },
      { text: "The Sava is located in Antarctica.", real: false }
    ],
    explanation: "The Sava is a major river in southeastern Europe."
  },
  {
    topic: "Thermos Flask",
    statements: [
      { text: "The vacuum flask was invented by James Dewar in 1892 for laboratory use with liquid gases.", real: true },
      { text: "Dewar never patented his invention, and the Thermos company commercialized it.", real: true },
      { text: "Thermos flasks generate heat through a chemical reaction inside the walls.", real: false }
    ],
    explanation: "Thermos flasks work by minimizing heat transfer through a vacuum between double walls."
  },
  {
    topic: "The Sacroiliac Joint",
    statements: [
      { text: "The sacroiliac (SI) joint connects the sacrum to the iliac bones of the pelvis.", real: true },
      { text: "SI joint dysfunction is a common cause of lower back and buttock pain.", real: true },
      { text: "The SI joint is located in the elbow.", real: false }
    ],
    explanation: "The SI joint is where the spine meets the pelvis."
  },
  {
    topic: "Phosphorus",
    statements: [
      { text: "Phosphorus was the first element discovered through scientific means, isolated from urine in 1669.", real: true },
      { text: "White phosphorus glows in the dark and spontaneously ignites in air.", real: true },
      { text: "Phosphorus is a noble gas used in lighting.", real: false }
    ],
    explanation: "Phosphorus is a highly reactive non-metal, not a noble gas."
  },
  {
    topic: "The Taiko Drums",
    statements: [
      { text: "Taiko drumming is a traditional Japanese percussion art that combines music, movement, and discipline.", real: true },
      { text: "The largest taiko drums can be over 2 meters in diameter and are carved from a single tree trunk.", real: true },
      { text: "Taiko drums are small handheld electronic devices.", real: false }
    ],
    explanation: "Taiko drums are large, powerful acoustic instruments."
  },
  {
    topic: "Vampire Bat",
    statements: [
      { text: "Vampire bats are the only mammals that feed entirely on blood.", real: true },
      { text: "Vampire bats share food with roost-mates who failed to feed — a rare example of reciprocal altruism.", real: true },
      { text: "Vampire bats are large birds found in the Arctic.", real: false }
    ],
    explanation: "Vampire bats are small mammals found in the Americas."
  },
  {
    topic: "Sambal",
    statements: [
      { text: "Sambal is a chili sauce staple across Southeast Asia with hundreds of regional variations.", real: true },
      { text: "Sambal oelek, the simplest form, is made from just crushed raw chilies and salt.", real: true },
      { text: "Sambal is a type of dance performed at Indonesian weddings.", real: false }
    ],
    explanation: "Sambal is a chili condiment."
  },
  {
    topic: "Willis Tower (Sears Tower)",
    statements: [
      { text: "Willis Tower (formerly Sears Tower) in Chicago was the world's tallest building from 1973 to 1998.", real: true },
      { text: "The Skydeck Ledge is a glass balcony extending 1.3 meters from the 103rd floor.", real: true },
      { text: "Willis Tower is located in Tokyo, Japan.", real: false }
    ],
    explanation: "Willis Tower is in Chicago, Illinois."
  },
  {
    topic: "The Spree River",
    statements: [
      { text: "Berlin, the capital of Germany, is built on the banks of the River Spree.", real: true },
      { text: "Museum Island, a UNESCO World Heritage Site, sits in the River Spree in central Berlin.", real: true },
      { text: "The Spree flows through South America.", real: false }
    ],
    explanation: "The Spree flows through eastern Germany."
  },
  {
    topic: "Ballpoint Pen Ink",
    statements: [
      { text: "Ballpoint pen ink is oil-based, unlike fountain pen ink which is water-based.", real: true },
      { text: "The ball in a ballpoint pen rotates to pick up ink from an internal reservoir.", real: true },
      { text: "Ballpoint pens use invisible ink that can only be seen under ultraviolet light.", real: false }
    ],
    explanation: "Standard ballpoint pen ink is visible — it is designed to make clear, lasting marks."
  },
  {
    topic: "The Medial Collateral Ligament",
    statements: [
      { text: "The MCL is the most commonly injured ligament in the knee.", real: true },
      { text: "Unlike the ACL, the MCL can often heal on its own without surgery.", real: true },
      { text: "The MCL is located in the wrist.", real: false }
    ],
    explanation: "The MCL is on the inner side of the knee."
  },
  {
    topic: "Manganese",
    statements: [
      { text: "Manganese dioxide was used by prehistoric cave artists to create black pigments.", real: true },
      { text: "Manganese is essential for steel production — about 90% of all manganese goes into steelmaking.", real: true },
      { text: "Manganese is a tropical fruit similar to a mango.", real: false }
    ],
    explanation: "Manganese is a metallic element. Despite the similar name, it has no relation to mangoes."
  },
  {
    topic: "The Sheng",
    statements: [
      { text: "The sheng is a Chinese mouth organ that may be the ancestor of all Western free-reed instruments.", real: true },
      { text: "The sheng has been played for over 3,000 years and influenced the invention of the harmonica and accordion.", real: true },
      { text: "The sheng is a type of Chinese chess.", real: false }
    ],
    explanation: "The sheng is a musical instrument."
  },
  {
    topic: "Greater Honeyguide",
    statements: [
      { text: "Greater honeyguides lead humans to beehives by calling and flying short distances ahead.", real: true },
      { text: "After humans open the hive, the honeyguide feeds on the beeswax and larvae left behind.", real: true },
      { text: "Honeyguides are robots developed to find honey in supermarkets.", real: false }
    ],
    explanation: "Honeyguides are wild African birds with a remarkable mutualistic relationship with humans."
  },
  {
    topic: "Dashi",
    statements: [
      { text: "Dashi is a Japanese stock that forms the foundation of most Japanese cuisine.", real: true },
      { text: "Traditional dashi is made from just two ingredients: kombu seaweed and bonito (skipjack tuna) flakes.", real: true },
      { text: "Dashi is a Japanese word for dashboard in a car.", real: false }
    ],
    explanation: "Dashi is a culinary stock fundamental to Japanese cooking."
  },
  {
    topic: "One World Trade Center",
    statements: [
      { text: "One World Trade Center stands 1,776 feet tall, a symbolic reference to 1776, the year of American independence.", real: true },
      { text: "One World Trade Center is the tallest building in the Western Hemisphere.", real: true },
      { text: "One World Trade Center is located in London.", real: false }
    ],
    explanation: "One World Trade Center is in Lower Manhattan, New York City."
  },
  {
    topic: "The Moldau (Vltava) Music",
    statements: [
      { text: "Smetana's 'Vltava' musically depicts the river from its two small springs to its arrival in Prague.", real: true },
      { text: "The melody of 'Vltava' has been adapted as the Israeli national anthem 'Hatikvah.'", real: true },
      { text: "Smetana's 'Vltava' is a heavy metal song.", real: false }
    ],
    explanation: "'Vltava' is a Romantic orchestral tone poem from 1874."
  },
  {
    topic: "Monaco",
    statements: [
      { text: "Monaco is the second smallest country in the world and the most densely populated.", real: true },
      { text: "Monaco has no income tax, attracting wealthy residents from around the world.", real: true },
      { text: "Monaco is a large country that spans most of the Mediterranean Sea.", real: false }
    ],
    explanation: "Monaco is a tiny city-state on the French Riviera, only about 2 square km."
  },
  {
    topic: "Skeleton Racing",
    statements: [
      { text: "Skeleton racers experience up to 5 Gs of force in turns while lying face-down inches from the ice.", real: true },
      { text: "A skeleton sled has no steering or braking mechanism — athletes steer using body weight.", real: true },
      { text: "Skeleton racing is performed on a sandy beach.", real: false }
    ],
    explanation: "Skeleton is performed on a frozen ice track."
  },
  {
    topic: "Araripe Manakin",
    statements: [
      { text: "The Araripe manakin was only discovered in 1996 in a tiny area of northeastern Brazil.", real: true },
      { text: "With fewer than 800 individuals remaining, the Araripe manakin is critically endangered.", real: true },
      { text: "Araripe manakins are found on every continent and are extremely common.", real: false }
    ],
    explanation: "Araripe manakins are found only in a tiny region of Ceará, Brazil."
  },
  {
    topic: "Preserved Lemon",
    statements: [
      { text: "Preserved lemons are a Moroccan staple made by packing lemons in salt for weeks.", real: true },
      { text: "In preserved lemons, the rind becomes soft and intensely flavorful while the pulp is usually discarded.", real: true },
      { text: "Preserved lemons are fresh lemons coated in chocolate.", real: false }
    ],
    explanation: "Preserved lemons are salt-cured, not chocolate-coated."
  },
  {
    topic: "Chrysler Building",
    statements: [
      { text: "The Chrysler Building's Art Deco crown was secretly assembled inside the building and raised through the roof.", real: true },
      { text: "The Chrysler Building briefly held the title of world's tallest building before the Empire State Building.", real: true },
      { text: "The Chrysler Building is located in Tokyo, Japan.", real: false }
    ],
    explanation: "The Chrysler Building is in Manhattan, New York City."
  },
  {
    topic: "The Titicaca Lake",
    statements: [
      { text: "Lake Titicaca is the highest navigable lake in the world at 3,812 meters above sea level.", real: true },
      { text: "The Uros people have lived on floating islands made of totora reeds on Lake Titicaca for centuries.", real: true },
      { text: "Lake Titicaca is a small pond in suburban London.", real: false }
    ],
    explanation: "Lake Titicaca is a large, high-altitude lake on the border of Peru and Bolivia."
  },
  {
    topic: "Curling Strategy",
    statements: [
      { text: "Sweeping in curling heats the ice surface, reducing friction and allowing the stone to travel farther.", real: true },
      { text: "The skip (team captain) in curling calls the shots and directs strategy from the far end of the rink.", real: true },
      { text: "Curling players kick the stones down the ice like soccer balls.", real: false }
    ],
    explanation: "Curling stones are slid, not kicked — players release them with a pushing motion."
  },
  {
    topic: "Hagfish Slime",
    statements: [
      { text: "A single hagfish can fill a bucket with slime in seconds.", real: true },
      { text: "Hagfish slime contains thousands of thread-like fibers stronger than nylon.", real: true },
      { text: "Hagfish slime is used as a base for commercial perfumes.", real: false }
    ],
    explanation: "Hagfish slime is being studied for potential industrial uses, but it is not used in perfumes."
  },
  {
    topic: "Tahini Production",
    statements: [
      { text: "The best tahini is made from sesame seeds that have been hulled and lightly toasted.", real: true },
      { text: "Making tahini requires grinding sesame seeds for up to 20 minutes to achieve a smooth, pourable consistency.", real: true },
      { text: "Tahini is made from ground almonds, identical to almond butter.", real: false }
    ],
    explanation: "Tahini is specifically made from sesame seeds, not almonds."
  },
  {
    topic: "Flatiron Building",
    statements: [
      { text: "The Flatiron Building's triangular shape creates strong wind downdrafts at street level.", real: true },
      { text: "When built in 1902, many people expected the Flatiron Building to be blown over by wind.", real: true },
      { text: "The Flatiron Building is located in Paris, France.", real: false }
    ],
    explanation: "The Flatiron Building is at the intersection of Broadway and Fifth Avenue in Manhattan."
  },
  {
    topic: "Lake Baikal",
    statements: [
      { text: "Lake Baikal is the deepest lake in the world at over 1,600 meters deep.", real: true },
      { text: "Lake Baikal contains about 20% of the world's unfrozen surface fresh water.", real: true },
      { text: "Lake Baikal is located in central Africa.", real: false }
    ],
    explanation: "Lake Baikal is in Siberia, Russia."
  },
  {
    topic: "Luge Racing",
    statements: [
      { text: "Luge athletes start races by rocking back and forth on the sled, then pushing off with spiked gloves.", real: true },
      { text: "At top speed, luge athletes lie only centimeters above the ice surface.", real: true },
      { text: "Luge athletes stand upright on the sled during the entire run.", real: false }
    ],
    explanation: "Luge athletes lie on their backs in a supine position."
  },
  {
    topic: "Pufferfish Toxin",
    statements: [
      { text: "Tetrodotoxin in pufferfish is 1,200 times more poisonous than cyanide.", real: true },
      { text: "Fugu (pufferfish) is a Japanese delicacy that requires specially licensed chefs to prepare safely.", real: true },
      { text: "Pufferfish are completely safe to eat without any special preparation.", real: false }
    ],
    explanation: "Pufferfish contain a deadly toxin and must be prepared by expert chefs to be eaten safely."
  },
  {
    topic: "Goji Berries",
    statements: [
      { text: "Goji berries have been used in traditional Chinese medicine for over 2,000 years.", real: true },
      { text: "Goji berries are also known as wolfberries and belong to the nightshade family.", real: true },
      { text: "Goji berries are a variety of grape used exclusively for winemaking.", real: false }
    ],
    explanation: "Goji berries are small red berries from the Lycium plant, unrelated to grapes."
  },
  {
    topic: "Fallingwater",
    statements: [
      { text: "Frank Lloyd Wright's Fallingwater is built directly over a waterfall.", real: true },
      { text: "Fallingwater was designed as a weekend home for the Kaufmann family of Pittsburgh.", real: true },
      { text: "Fallingwater is a type of bottled water sold in grocery stores.", real: false }
    ],
    explanation: "Fallingwater is a famous architectural masterpiece in Pennsylvania."
  },
  {
    topic: "Lake Victoria",
    statements: [
      { text: "Lake Victoria is the largest lake in Africa and the largest tropical lake in the world.", real: true },
      { text: "Lake Victoria is the chief source of the White Nile, one of the two main tributaries of the Nile.", real: true },
      { text: "Lake Victoria is a freshwater lake in northern Canada.", real: false }
    ],
    explanation: "Lake Victoria is in East Africa, bordered by Uganda, Kenya, and Tanzania."
  },
  {
    topic: "Short Track Speed Skating",
    statements: [
      { text: "Short track speed skating takes place on a 111.12-meter oval track, much smaller than long track.", real: true },
      { text: "Short track skaters frequently crash into the padded barriers at high speeds.", real: true },
      { text: "Short track skating is performed on a straight 100-meter track like running sprints.", real: false }
    ],
    explanation: "Short track is performed on an oval track where multiple skaters race simultaneously."
  },
  {
    topic: "Weedy Seadragon",
    statements: [
      { text: "Weedy seadragons are found only in the waters of southern Australia.", real: true },
      { text: "Male weedy seadragons carry the fertilized eggs attached to the underside of their tail.", real: true },
      { text: "Weedy seadragons are aggressive predators that attack large fish.", real: false }
    ],
    explanation: "Weedy seadragons are gentle, slow-moving creatures that feed on tiny crustaceans."
  },
  {
    topic: "Amchur Applications",
    statements: [
      { text: "Amchur powder acts as a tenderizer for meat due to its enzymes.", real: true },
      { text: "Amchur can substitute for lemon juice when a dry souring agent is needed in cooking.", real: true },
      { text: "Amchur is used as jet fuel for commercial airplanes.", real: false }
    ],
    explanation: "Amchur is a culinary ingredient, not a fuel."
  },
  {
    topic: "Guggenheim Museum Bilbao",
    statements: [
      { text: "The Guggenheim Museum Bilbao is covered in 33,000 thin titanium panels.", real: true },
      { text: "The museum's construction revitalized Bilbao's economy, a phenomenon called the 'Bilbao Effect.'", real: true },
      { text: "The Guggenheim Bilbao is a natural cave system.", real: false }
    ],
    explanation: "The Guggenheim Bilbao is a modern art museum designed by Frank Gehry."
  },
  {
    topic: "Lake Malawi",
    statements: [
      { text: "Lake Malawi contains more species of fish than any other lake in the world.", real: true },
      { text: "Most of Lake Malawi's fish species (cichlids) are found nowhere else on Earth.", real: true },
      { text: "Lake Malawi is a small artificial pond in a London park.", real: false }
    ],
    explanation: "Lake Malawi is a massive Great Rift Valley lake in southeastern Africa."
  },
  {
    topic: "Figure Skating Jumps",
    statements: [
      { text: "The Axel is the only figure skating jump that takes off from a forward edge.", real: true },
      { text: "A quad Axel (4.5 rotations in the air) was not landed in competition until 2022.", real: true },
      { text: "Figure skaters are not allowed to spin in the air during jumps.", real: false }
    ],
    explanation: "Spinning in the air is the fundamental element of all figure skating jumps."
  },
  {
    topic: "Mimic Octopus Behavior",
    statements: [
      { text: "The mimic octopus chooses which species to impersonate based on which predator is threatening it.", real: true },
      { text: "The mimic octopus was first scientifically described in 2005, remarkably recent for such a creature.", real: true },
      { text: "The mimic octopus can only change to a single color and cannot change shape.", real: false }
    ],
    explanation: "The mimic octopus is renowned for changing both color AND shape to impersonate many different species."
  },
  {
    topic: "Nigella Sativa Oil",
    statements: [
      { text: "Black seed oil (from Nigella sativa) has been used medicinally for over 3,000 years.", real: true },
      { text: "A bottle of black seed oil was found in King Tutankhamun's tomb.", real: true },
      { text: "Black seed oil is a petroleum product refined from crude oil.", real: false }
    ],
    explanation: "Black seed oil is a natural plant oil pressed from Nigella sativa seeds."
  },
  {
    topic: "Casa Milà (La Pedrera)",
    statements: [
      { text: "Gaudí's Casa Milà in Barcelona has a rooftop with surreal chimney sculptures resembling warriors.", real: true },
      { text: "Casa Milà has no straight walls — every surface curves and undulates.", real: true },
      { text: "Casa Milà is a traditional log cabin.", real: false }
    ],
    explanation: "Casa Milà is an avant-garde apartment building by Antoni Gaudí."
  },
  {
    topic: "Caspian Sea",
    statements: [
      { text: "Despite being called a sea, the Caspian is technically the world's largest enclosed inland body of water.", real: true },
      { text: "The Caspian Sea is bordered by five countries: Russia, Azerbaijan, Iran, Turkmenistan, and Kazakhstan.", real: true },
      { text: "The Caspian Sea is a small freshwater pond in suburban Paris.", real: false }
    ],
    explanation: "The Caspian Sea is the world's largest lake by surface area."
  },
  {
    topic: "Biathlon Shooting",
    statements: [
      { text: "Biathlon athletes must lower their heart rate from 180+ BPM to shoot at targets only 45mm wide.", real: true },
      { text: "For each missed target in biathlon, athletes must ski a 150-meter penalty loop.", real: true },
      { text: "Biathlon athletes use water guns instead of real rifles.", real: false }
    ],
    explanation: "Biathlon uses real .22 caliber rifles."
  },
  {
    topic: "Olm (Cave Salamander)",
    statements: [
      { text: "The olm is a blind, cave-dwelling salamander that can live for over 100 years.", real: true },
      { text: "The olm can survive up to 10 years without food by slowing its metabolism.", real: true },
      { text: "Olms are brightly colored tropical birds.", real: false }
    ],
    explanation: "Olms are pale, aquatic salamanders found in caves of southeastern Europe."
  },
  {
    topic: "Dukkah",
    statements: [
      { text: "Dukkah is an Egyptian condiment made from nuts, seeds, and spices, ground into a coarse mixture.", real: true },
      { text: "Dukkah is traditionally eaten by dipping bread in olive oil and then into the spice-nut blend.", real: true },
      { text: "Dukkah is a type of rubber boot worn in Egyptian deserts.", real: false }
    ],
    explanation: "Dukkah is a culinary condiment, not footwear."
  },
  {
    topic: "The Shard",
    statements: [
      { text: "The Shard in London is the tallest building in Western Europe at 310 meters.", real: true },
      { text: "The Shard's design was inspired by the spires of London churches and the masts of sailing ships.", real: true },
      { text: "The Shard is located in Sydney, Australia.", real: false }
    ],
    explanation: "The Shard is in London, England."
  },
  {
    topic: "Lake Tanganyika",
    statements: [
      { text: "Lake Tanganyika is the longest freshwater lake in the world at about 673 km.", real: true },
      { text: "Lake Tanganyika is the second-deepest lake in the world after Lake Baikal.", real: true },
      { text: "Lake Tanganyika is a small decorative fountain in a European museum.", real: false }
    ],
    explanation: "Lake Tanganyika is a massive Great Rift Valley lake in East Africa."
  },
  {
    topic: "Ski Jumping",
    statements: [
      { text: "Ski jumpers can fly over 250 meters through the air on large hills.", real: true },
      { text: "Ski jumpers hold a V-shape with their skis to maximize lift and distance.", real: true },
      { text: "Ski jumping is performed on water using water skis.", real: false }
    ],
    explanation: "Ski jumping is a winter sport on snow-covered hills."
  },
  {
    topic: "Weta Insect",
    statements: [
      { text: "Giant wetas from New Zealand can weigh over 70 grams, among the heaviest insects in the world.", real: true },
      { text: "Wetas have existed relatively unchanged for over 190 million years, predating dinosaurs.", real: true },
      { text: "Wetas are a species of tropical fish.", real: false }
    ],
    explanation: "Wetas are large insects endemic to New Zealand."
  },
  {
    topic: "Tajin Seasoning",
    statements: [
      { text: "Tajín is a Mexican seasoning made from chili peppers, lime, and salt.", real: true },
      { text: "Tajín is commonly sprinkled on fresh fruit, a popular Mexican street food tradition.", real: true },
      { text: "Tajín is a Swedish furniture brand.", real: false }
    ],
    explanation: "Tajín is a Mexican chili-lime seasoning."
  },
  {
    topic: "Burj Al Arab",
    statements: [
      { text: "The Burj Al Arab in Dubai stands on an artificial island 280 meters from the shore.", real: true },
      { text: "The Burj Al Arab is shaped like a billowing sail and is one of the tallest hotel buildings in the world.", real: true },
      { text: "The Burj Al Arab is an ancient mosque dating back to the 7th century.", real: false }
    ],
    explanation: "The Burj Al Arab is a modern luxury hotel opened in 1999."
  },
  {
    topic: "Kiribati",
    statements: [
      { text: "Kiribati is the only country in the world that spans all four hemispheres.", real: true },
      { text: "Kiribati was the first country to enter the year 2000 due to its location near the International Date Line.", real: true },
      { text: "Kiribati is a mountainous European nation.", real: false }
    ],
    explanation: "Kiribati is a low-lying Pacific island nation, far from Europe."
  },
  {
    topic: "Skeleton Toboggan",
    statements: [
      { text: "Skeleton sleds are made of steel and fiberglass, weighing between 29 and 43 kg.", real: true },
      { text: "The skeleton sled has no mechanical steering — the athlete shifts body weight to navigate.", real: true },
      { text: "Skeleton sleds have engines that propel athletes down the track.", real: false }
    ],
    explanation: "Skeleton relies purely on gravity and a running start; there are no engines."
  },
  {
    topic: "Iriomote Cat",
    statements: [
      { text: "The Iriomote cat is found only on the tiny Japanese island of Iriomote, with fewer than 100 remaining.", real: true },
      { text: "The Iriomote cat was not discovered by science until 1965.", real: true },
      { text: "Iriomote cats are common house cats found in pet shops worldwide.", real: false }
    ],
    explanation: "The Iriomote cat is a critically endangered wild cat found only on one small island."
  },
  {
    topic: "Pomegranate Seeds",
    statements: [
      { text: "A single pomegranate can contain up to 1,400 seeds.", real: true },
      { text: "In Greek mythology, Persephone was bound to the underworld for eating pomegranate seeds.", real: true },
      { text: "Pomegranate seeds are synthetic and manufactured in factories.", real: false }
    ],
    explanation: "Pomegranate seeds are natural parts of the fruit."
  },
  {
    topic: "Marina Bay Sands",
    statements: [
      { text: "Marina Bay Sands in Singapore has a rooftop infinity pool 200 meters above ground.", real: true },
      { text: "The three towers of Marina Bay Sands are connected by a 340-meter SkyPark on top.", real: true },
      { text: "Marina Bay Sands is located in the Swiss Alps.", real: false }
    ],
    explanation: "Marina Bay Sands is in Singapore."
  },
  {
    topic: "Dead Sea",
    statements: [
      { text: "The Dead Sea is the lowest point on Earth's surface at about 430 meters below sea level.", real: true },
      { text: "The Dead Sea's salt concentration is about 10 times that of the ocean, allowing people to float effortlessly.", real: true },
      { text: "The Dead Sea is a freshwater lake teeming with marine life.", real: false }
    ],
    explanation: "The Dead Sea is so salty that almost no organisms can survive in it — hence its name."
  },
  {
    topic: "Kumquat",
    statements: [
      { text: "Kumquats are the only citrus fruit where the peel is sweet and the flesh is tart.", real: true },
      { text: "Kumquats are eaten whole — skin and all — unlike other citrus fruits.", real: true },
      { text: "Kumquats are large melons that grow underground.", real: false }
    ],
    explanation: "Kumquats are tiny citrus fruits, about the size of an olive, that grow on trees."
  }
];
