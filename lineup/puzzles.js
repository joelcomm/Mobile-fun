const PUZZLES = [
  {
    instruction: "Oldest to newest",
    category: "Inventions by Year",
    items: [
      { label: "Printing Press", value: 1440 },
      { label: "Telescope", value: 1608 },
      { label: "Steam Engine", value: 1712 },
      { label: "Telephone", value: 1876 },
      { label: "Television", value: 1927 }
    ]
  },
  {
    instruction: "Smallest to largest population",
    category: "Countries by Population",
    items: [
      { label: "Iceland", value: 372000 },
      { label: "New Zealand", value: 5100000 },
      { label: "Sweden", value: 10400000 },
      { label: "Australia", value: 26000000 },
      { label: "Canada", value: 40000000 }
    ]
  },
  {
    instruction: "Shortest to tallest",
    category: "Structures by Height",
    items: [
      { label: "Statue of Liberty", value: 93 },
      { label: "Big Ben", value: 96 },
      { label: "Leaning Tower of Pisa", value: 56 },
      { label: "Great Pyramid of Giza", value: 139 },
      { label: "Eiffel Tower", value: 330 }
    ]
  },
  {
    instruction: "Earliest to latest release",
    category: "Movies by Release Year",
    items: [
      { label: "Jaws", value: 1975 },
      { label: "E.T.", value: 1982 },
      { label: "Jurassic Park", value: 1993 },
      { label: "The Matrix", value: 1999 },
      { label: "Avatar", value: 2009 }
    ]
  },
  {
    instruction: "Closest to farthest from the Sun",
    category: "Planets by Distance",
    items: [
      { label: "Mercury", value: 1 },
      { label: "Venus", value: 2 },
      { label: "Earth", value: 3 },
      { label: "Mars", value: 4 },
      { label: "Jupiter", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most letters",
    category: "Words by Length",
    items: [
      { label: "Cat", value: 3 },
      { label: "House", value: 5 },
      { label: "Elephant", value: 8 },
      { label: "Beautiful", value: 9 },
      { label: "Hippopotamus", value: 12 }
    ]
  },
  {
    instruction: "Lightest to heaviest",
    category: "Animals by Weight",
    items: [
      { label: "Hamster", value: 0.03 },
      { label: "House Cat", value: 4.5 },
      { label: "Labrador", value: 30 },
      { label: "Gorilla", value: 180 },
      { label: "Polar Bear", value: 450 }
    ]
  },
  {
    instruction: "Coldest to hottest",
    category: "Places by Average Temperature",
    items: [
      { label: "Antarctica", value: -49 },
      { label: "Reykjavik", value: 5 },
      { label: "London", value: 11 },
      { label: "Miami", value: 25 },
      { label: "Death Valley", value: 35 }
    ]
  },
  {
    instruction: "Smallest to largest area",
    category: "US States by Area",
    items: [
      { label: "Rhode Island", value: 1545 },
      { label: "Connecticut", value: 5543 },
      { label: "West Virginia", value: 24230 },
      { label: "Oregon", value: 98379 },
      { label: "Alaska", value: 665384 }
    ]
  },
  {
    instruction: "Earliest to most recent",
    category: "Historical Events",
    items: [
      { label: "Fall of Rome", value: 476 },
      { label: "Magna Carta", value: 1215 },
      { label: "Columbus sails", value: 1492 },
      { label: "French Revolution", value: 1789 },
      { label: "Moon Landing", value: 1969 }
    ]
  },
  {
    instruction: "Slowest to fastest top speed",
    category: "Animals by Speed",
    items: [
      { label: "Garden Snail", value: 0.03 },
      { label: "Chicken", value: 9 },
      { label: "Elephant", value: 25 },
      { label: "Greyhound", value: 45 },
      { label: "Cheetah", value: 70 }
    ]
  },
  {
    instruction: "Least to most Oscar wins",
    category: "Movies by Academy Awards",
    items: [
      { label: "Forrest Gump", value: 6 },
      { label: "Schindler's List", value: 7 },
      { label: "The Last Emperor", value: 9 },
      { label: "Titanic", value: 11 },
      { label: "Ben-Hur", value: 11 }
    ]
  },
  {
    instruction: "Shallowest to deepest",
    category: "Bodies of Water by Depth",
    items: [
      { label: "Lake Erie", value: 64 },
      { label: "Lake Michigan", value: 281 },
      { label: "Lake Baikal", value: 1642 },
      { label: "Caribbean Sea", value: 7686 },
      { label: "Mariana Trench", value: 10994 }
    ]
  },
  {
    instruction: "Shortest to longest",
    category: "Rivers by Length (km)",
    items: [
      { label: "Thames", value: 346 },
      { label: "Rhine", value: 1230 },
      { label: "Mississippi", value: 3766 },
      { label: "Amazon", value: 6400 },
      { label: "Nile", value: 6650 }
    ]
  },
  {
    instruction: "Least to most elements",
    category: "Chemical Compounds by Atoms",
    items: [
      { label: "H\u2082 (Hydrogen gas)", value: 2 },
      { label: "H\u2082O (Water)", value: 3 },
      { label: "CO\u2082 (Carbon dioxide)", value: 3 },
      { label: "C\u2082H\u2086O (Ethanol)", value: 9 },
      { label: "C\u2086H\u2081\u2082O\u2086 (Glucose)", value: 24 }
    ]
  },
  {
    instruction: "Earliest to latest birthday",
    category: "Famous People by Birth Year",
    items: [
      { label: "Leonardo da Vinci", value: 1452 },
      { label: "Shakespeare", value: 1564 },
      { label: "Mozart", value: 1756 },
      { label: "Einstein", value: 1879 },
      { label: "MLK Jr.", value: 1929 }
    ]
  },
  {
    instruction: "Lowest to highest calorie count",
    category: "Foods per Serving",
    items: [
      { label: "Celery Stick", value: 6 },
      { label: "Apple", value: 95 },
      { label: "Banana", value: 105 },
      { label: "Slice of Pizza", value: 285 },
      { label: "Cheeseburger", value: 300 }
    ]
  },
  {
    instruction: "Fewest to most sides",
    category: "Shapes by Number of Sides",
    items: [
      { label: "Triangle", value: 3 },
      { label: "Pentagon", value: 5 },
      { label: "Hexagon", value: 6 },
      { label: "Octagon", value: 8 },
      { label: "Dodecagon", value: 12 }
    ]
  },
  {
    instruction: "Shortest to longest reign",
    category: "British Monarchs by Reign Length",
    items: [
      { label: "Edward V", value: 0.2 },
      { label: "Edward VIII", value: 0.9 },
      { label: "Henry VIII", value: 38 },
      { label: "Victoria", value: 63 },
      { label: "Elizabeth II", value: 70 }
    ]
  },
  {
    instruction: "Least to most expensive (original price adjusted)",
    category: "Paintings by Auction Price",
    items: [
      { label: "The Scream", value: 120 },
      { label: "No. 5 (Pollock)", value: 140 },
      { label: "Women of Algiers (Picasso)", value: 179 },
      { label: "Interchange (de Kooning)", value: 300 },
      { label: "Salvator Mundi (da Vinci)", value: 450 }
    ]
  },
  {
    instruction: "Lowest to highest elevation",
    category: "Cities by Elevation (meters)",
    items: [
      { label: "Amsterdam", value: -2 },
      { label: "Miami", value: 2 },
      { label: "Denver", value: 1609 },
      { label: "Quito", value: 2850 },
      { label: "La Paz", value: 3640 }
    ]
  },
  {
    instruction: "Earliest to latest invention",
    category: "Communication Tech by Year",
    items: [
      { label: "Telegraph", value: 1837 },
      { label: "Telephone", value: 1876 },
      { label: "Radio", value: 1895 },
      { label: "Television", value: 1927 },
      { label: "Internet", value: 1983 }
    ]
  },
  {
    instruction: "Fewest to most bones",
    category: "Body Parts by Bone Count",
    items: [
      { label: "Arm (upper)", value: 1 },
      { label: "Ear (middle)", value: 3 },
      { label: "Foot", value: 26 },
      { label: "Hand", value: 27 },
      { label: "Spine", value: 33 }
    ]
  },
  {
    instruction: "Least to most spoken (native speakers)",
    category: "Languages by Native Speakers",
    items: [
      { label: "Italian", value: 68 },
      { label: "Japanese", value: 125 },
      { label: "Portuguese", value: 258 },
      { label: "Hindi", value: 345 },
      { label: "Mandarin", value: 920 }
    ]
  },
  {
    instruction: "Lowest to highest boiling point (\u00b0C)",
    category: "Substances by Boiling Point",
    items: [
      { label: "Nitrogen", value: -196 },
      { label: "Ethanol", value: 78 },
      { label: "Water", value: 100 },
      { label: "Mercury", value: 357 },
      { label: "Iron", value: 2862 }
    ]
  },
  // ---- NEW PUZZLES START HERE ----
  {
    instruction: "Smallest to largest diameter",
    category: "Planets by Diameter (km)",
    items: [
      { label: "Mercury", value: 4879 },
      { label: "Mars", value: 6779 },
      { label: "Earth", value: 12742 },
      { label: "Neptune", value: 49528 },
      { label: "Jupiter", value: 139820 }
    ]
  },
  {
    instruction: "Slowest to fastest",
    category: "Vehicles by Top Speed (mph)",
    items: [
      { label: "Bicycle", value: 15 },
      { label: "Speed Boat", value: 80 },
      { label: "Formula 1 Car", value: 230 },
      { label: "Bullet Train", value: 267 },
      { label: "Commercial Jet", value: 575 }
    ]
  },
  {
    instruction: "Least to most Grand Slam titles",
    category: "Tennis Players by Grand Slams",
    items: [
      { label: "Andre Agassi", value: 8 },
      { label: "Jimmy Connors", value: 8 },
      { label: "Pete Sampras", value: 14 },
      { label: "Rafael Nadal", value: 22 },
      { label: "Novak Djokovic", value: 24 }
    ]
  },
  {
    instruction: "Shortest to longest lifespan",
    category: "Animals by Average Lifespan (years)",
    items: [
      { label: "Mayfly", value: 0.003 },
      { label: "Mouse", value: 2 },
      { label: "Dog", value: 13 },
      { label: "Elephant", value: 70 },
      { label: "Bowhead Whale", value: 200 }
    ]
  },
  {
    instruction: "Smallest to largest",
    category: "Oceans by Area (million sq km)",
    items: [
      { label: "Arctic Ocean", value: 14 },
      { label: "Southern Ocean", value: 20 },
      { label: "Indian Ocean", value: 70 },
      { label: "Atlantic Ocean", value: 85 },
      { label: "Pacific Ocean", value: 168 }
    ]
  },
  {
    instruction: "Fewest to most World Cup wins",
    category: "Countries by FIFA World Cup Titles",
    items: [
      { label: "England", value: 1 },
      { label: "France", value: 2 },
      { label: "Argentina", value: 3 },
      { label: "Italy", value: 4 },
      { label: "Brazil", value: 5 }
    ]
  },
  {
    instruction: "Lightest to heaviest",
    category: "Fruits by Average Weight (grams)",
    items: [
      { label: "Grape", value: 5 },
      { label: "Strawberry", value: 12 },
      { label: "Lemon", value: 80 },
      { label: "Orange", value: 140 },
      { label: "Pineapple", value: 900 }
    ]
  },
  {
    instruction: "Youngest to oldest",
    category: "Deserts by Age (million years)",
    items: [
      { label: "Sahara", value: 2 },
      { label: "Gobi", value: 5 },
      { label: "Chihuahuan", value: 8 },
      { label: "Atacama", value: 25 },
      { label: "Namib", value: 55 }
    ]
  },
  {
    instruction: "Lowest to highest atomic number",
    category: "Elements on the Periodic Table",
    items: [
      { label: "Hydrogen", value: 1 },
      { label: "Carbon", value: 6 },
      { label: "Iron", value: 26 },
      { label: "Silver", value: 47 },
      { label: "Gold", value: 79 }
    ]
  },
  {
    instruction: "Fewest to most episodes",
    category: "TV Shows by Total Episodes",
    items: [
      { label: "Breaking Bad", value: 62 },
      { label: "Game of Thrones", value: 73 },
      { label: "Friends", value: 236 },
      { label: "Seinfeld", value: 180 },
      { label: "The Simpsons", value: 750 }
    ]
  },
  {
    instruction: "Closest to farthest from Earth",
    category: "Space Objects by Distance",
    items: [
      { label: "The Moon", value: 1 },
      { label: "Venus (closest approach)", value: 108 },
      { label: "The Sun", value: 401 },
      { label: "Jupiter (closest approach)", value: 1600 },
      { label: "Pluto", value: 12500 }
    ]
  },
  {
    instruction: "Lowest to highest summit",
    category: "Mountains by Elevation (meters)",
    items: [
      { label: "Mount Kosciuszko", value: 2228 },
      { label: "Mont Blanc", value: 4808 },
      { label: "Kilimanjaro", value: 5895 },
      { label: "Denali", value: 6190 },
      { label: "Mount Everest", value: 8849 }
    ]
  },
  {
    instruction: "Earliest to latest founding",
    category: "Universities by Year Founded",
    items: [
      { label: "University of Bologna", value: 1088 },
      { label: "Oxford", value: 1096 },
      { label: "Cambridge", value: 1209 },
      { label: "Harvard", value: 1636 },
      { label: "MIT", value: 1861 }
    ]
  },
  {
    instruction: "Lowest to highest",
    category: "Average NBA Player Heights (inches)",
    items: [
      { label: "Muggsy Bogues", value: 63 },
      { label: "Allen Iverson", value: 72 },
      { label: "Michael Jordan", value: 78 },
      { label: "LeBron James", value: 81 },
      { label: "Yao Ming", value: 90 }
    ]
  },
  {
    instruction: "Least to most pages",
    category: "Classic Novels by Page Count",
    items: [
      { label: "The Great Gatsby", value: 180 },
      { label: "To Kill a Mockingbird", value: 281 },
      { label: "Harry Potter & Sorcerer's Stone", value: 309 },
      { label: "Moby-Dick", value: 635 },
      { label: "War and Peace", value: 1225 }
    ]
  },
  {
    instruction: "Cheapest to most expensive",
    category: "Precious Metals by Price per Ounce (USD)",
    items: [
      { label: "Copper", value: 0.25 },
      { label: "Silver", value: 25 },
      { label: "Gold", value: 2000 },
      { label: "Platinum", value: 1000 },
      { label: "Rhodium", value: 4500 }
    ]
  },
  {
    instruction: "Fewest to most teeth",
    category: "Animals by Number of Teeth",
    items: [
      { label: "Hen (no teeth)", value: 0 },
      { label: "Human", value: 32 },
      { label: "Dog", value: 42 },
      { label: "Dolphin", value: 100 },
      { label: "Garden Snail", value: 14000 }
    ]
  },
  {
    instruction: "Shortest to tallest",
    category: "Trees by Maximum Height (meters)",
    items: [
      { label: "Japanese Maple", value: 10 },
      { label: "Silver Birch", value: 25 },
      { label: "Douglas Fir", value: 75 },
      { label: "Giant Sequoia", value: 85 },
      { label: "Coast Redwood", value: 115 }
    ]
  },
  {
    instruction: "Earliest to most recent debut",
    category: "Video Game Consoles by Release Year",
    items: [
      { label: "Atari 2600", value: 1977 },
      { label: "NES", value: 1985 },
      { label: "PlayStation", value: 1994 },
      { label: "Xbox 360", value: 2005 },
      { label: "Nintendo Switch", value: 2017 }
    ]
  },
  {
    instruction: "Lowest to highest sugar content (g per 100g)",
    category: "Foods by Sugar Content",
    items: [
      { label: "Broccoli", value: 1.7 },
      { label: "Carrot", value: 4.7 },
      { label: "Apple", value: 10 },
      { label: "Grape", value: 16 },
      { label: "Dried Dates", value: 63 }
    ]
  },
  {
    instruction: "Smallest to largest wingspan",
    category: "Birds by Wingspan (cm)",
    items: [
      { label: "Hummingbird", value: 10 },
      { label: "Robin", value: 25 },
      { label: "Bald Eagle", value: 200 },
      { label: "California Condor", value: 290 },
      { label: "Wandering Albatross", value: 350 }
    ]
  },
  {
    instruction: "Fewest to most goals in career",
    category: "Soccer Players by Career Goals",
    items: [
      { label: "Zinedine Zidane", value: 156 },
      { label: "David Beckham", value: 127 },
      { label: "Ronaldinho", value: 219 },
      { label: "Lionel Messi", value: 838 },
      { label: "Cristiano Ronaldo", value: 900 }
    ]
  },
  {
    instruction: "Shortest to longest orbit period",
    category: "Planets by Orbital Period (Earth days)",
    items: [
      { label: "Mercury", value: 88 },
      { label: "Venus", value: 225 },
      { label: "Earth", value: 365 },
      { label: "Mars", value: 687 },
      { label: "Saturn", value: 10747 }
    ]
  },
  {
    instruction: "Lowest to highest melting point (\u00b0C)",
    category: "Metals by Melting Point",
    items: [
      { label: "Mercury", value: -39 },
      { label: "Tin", value: 232 },
      { label: "Aluminum", value: 660 },
      { label: "Gold", value: 1064 },
      { label: "Tungsten", value: 3422 }
    ]
  },
  {
    instruction: "Least to most populated",
    category: "Cities by Population",
    items: [
      { label: "Venice", value: 260000 },
      { label: "Amsterdam", value: 900000 },
      { label: "Paris", value: 2100000 },
      { label: "London", value: 9000000 },
      { label: "Tokyo", value: 14000000 }
    ]
  },
  {
    instruction: "Earliest to latest discovery",
    category: "Scientific Discoveries by Year",
    items: [
      { label: "Gravity (Newton)", value: 1687 },
      { label: "Electricity (Franklin)", value: 1752 },
      { label: "Evolution (Darwin)", value: 1859 },
      { label: "Radioactivity (Curie)", value: 1896 },
      { label: "Penicillin (Fleming)", value: 1928 }
    ]
  },
  {
    instruction: "Lightest to heaviest",
    category: "Dog Breeds by Average Weight (kg)",
    items: [
      { label: "Chihuahua", value: 2 },
      { label: "Beagle", value: 10 },
      { label: "Border Collie", value: 18 },
      { label: "German Shepherd", value: 34 },
      { label: "Great Dane", value: 65 }
    ]
  },
  {
    instruction: "Fewest to most keys",
    category: "Instruments by Number of Keys/Strings",
    items: [
      { label: "Ukulele (strings)", value: 4 },
      { label: "Guitar (strings)", value: 6 },
      { label: "Trumpet (valves)", value: 3 },
      { label: "Saxophone (keys)", value: 23 },
      { label: "Piano (keys)", value: 88 }
    ]
  },
  {
    instruction: "Smallest to largest GDP (trillion USD)",
    category: "Countries by GDP",
    items: [
      { label: "New Zealand", value: 0.25 },
      { label: "South Korea", value: 1.7 },
      { label: "Germany", value: 4.3 },
      { label: "China", value: 17.7 },
      { label: "United States", value: 25.5 }
    ]
  },
  {
    instruction: "Least to most venomous",
    category: "Snakes by LD50 (lower = more venomous)",
    items: [
      { label: "Copperhead", value: 10.9 },
      { label: "King Cobra", value: 1.8 },
      { label: "Black Mamba", value: 0.32 },
      { label: "Eastern Brown", value: 0.053 },
      { label: "Inland Taipan", value: 0.025 }
    ]
  },
  {
    instruction: "Shortest to longest duration",
    category: "Songs by Length (minutes)",
    items: [
      { label: "Blitzkrieg Bop (Ramones)", value: 2.1 },
      { label: "Billie Jean (Michael Jackson)", value: 4.9 },
      { label: "Bohemian Rhapsody (Queen)", value: 5.9 },
      { label: "Hotel California (Eagles)", value: 6.5 },
      { label: "Stairway to Heaven (Led Zeppelin)", value: 8.0 }
    ]
  },
  {
    instruction: "Least to most moons",
    category: "Planets by Number of Moons",
    items: [
      { label: "Mercury", value: 0 },
      { label: "Earth", value: 1 },
      { label: "Mars", value: 2 },
      { label: "Neptune", value: 16 },
      { label: "Saturn", value: 146 }
    ]
  },
  {
    instruction: "Lowest to highest caffeine content (mg per cup)",
    category: "Beverages by Caffeine",
    items: [
      { label: "Decaf Coffee", value: 5 },
      { label: "Green Tea", value: 30 },
      { label: "Cola", value: 34 },
      { label: "Black Tea", value: 50 },
      { label: "Espresso", value: 63 }
    ]
  },
  {
    instruction: "Smallest to largest",
    category: "Continents by Area (million sq km)",
    items: [
      { label: "Australia", value: 8.5 },
      { label: "Europe", value: 10.2 },
      { label: "Antarctica", value: 14.2 },
      { label: "North America", value: 24.7 },
      { label: "Asia", value: 44.6 }
    ]
  },
  {
    instruction: "Oldest to newest",
    category: "Amendments to the US Constitution",
    items: [
      { label: "1st (Free Speech)", value: 1791 },
      { label: "2nd (Bear Arms)", value: 1791.1 },
      { label: "13th (Abolish Slavery)", value: 1865 },
      { label: "19th (Women's Suffrage)", value: 1920 },
      { label: "26th (Voting Age 18)", value: 1971 }
    ]
  },
  {
    instruction: "Smallest to largest country",
    category: "Countries by Area (sq km)",
    items: [
      { label: "Vatican City", value: 0.44 },
      { label: "Monaco", value: 2 },
      { label: "Singapore", value: 728 },
      { label: "United Kingdom", value: 243610 },
      { label: "Russia", value: 17098242 }
    ]
  },
  {
    instruction: "Slowest to fastest CPU clock speed",
    category: "Computers by Processor Speed",
    items: [
      { label: "Apple II (1977)", value: 1 },
      { label: "IBM PC (1981)", value: 4.77 },
      { label: "Pentium (1993)", value: 60 },
      { label: "Pentium 4 (2000)", value: 1500 },
      { label: "Core i9 (2023)", value: 6000 }
    ]
  },
  {
    instruction: "Fewest to most home runs in career",
    category: "Baseball Players by Career Home Runs",
    items: [
      { label: "Derek Jeter", value: 260 },
      { label: "Mickey Mantle", value: 536 },
      { label: "Willie Mays", value: 660 },
      { label: "Babe Ruth", value: 714 },
      { label: "Barry Bonds", value: 762 }
    ]
  },
  {
    instruction: "Shortest to longest gestation period",
    category: "Animals by Gestation (days)",
    items: [
      { label: "Mouse", value: 20 },
      { label: "Dog", value: 63 },
      { label: "Human", value: 270 },
      { label: "Cow", value: 283 },
      { label: "African Elephant", value: 660 }
    ]
  },
  {
    instruction: "Lowest to highest voltage",
    category: "Batteries and Power Sources (volts)",
    items: [
      { label: "AAA Battery", value: 1.5 },
      { label: "Car Battery", value: 12 },
      { label: "Household Outlet (US)", value: 120 },
      { label: "Electric Eel (max)", value: 860 },
      { label: "Lightning Bolt", value: 300000000 }
    ]
  },
  {
    instruction: "Nearest to farthest from Earth",
    category: "Stars by Distance (light-years)",
    items: [
      { label: "Proxima Centauri", value: 4.24 },
      { label: "Sirius", value: 8.6 },
      { label: "Vega", value: 25 },
      { label: "Polaris", value: 433 },
      { label: "Betelgeuse", value: 700 }
    ]
  }
];
