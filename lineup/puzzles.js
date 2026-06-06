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
      { label: "Leaning Tower of Pisa", value: 56 },
      { label: "Statue of Liberty", value: 93 },
      { label: "Big Ben", value: 96 },
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
      { label: "Ben-Hur", value: 11 },
      { label: "Titanic", value: 11.1 }
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
      { label: "Seinfeld", value: 180 },
      { label: "Friends", value: 236 },
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
      { label: "Platinum", value: 1000 },
      { label: "Gold", value: 2000 },
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
      { label: "David Beckham", value: 127 },
      { label: "Zinedine Zidane", value: 156 },
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
      { label: "Trumpet (valves)", value: 3 },
      { label: "Ukulele (strings)", value: 4 },
      { label: "Guitar (strings)", value: 6 },
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
    category: "Venomous Snakes by Danger",
    items: [
      { label: "Copperhead", value: 1 },
      { label: "King Cobra", value: 2 },
      { label: "Black Mamba", value: 3 },
      { label: "Eastern Brown Snake", value: 4 },
      { label: "Inland Taipan", value: 5 }
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
  },
  {
    instruction: "Earliest to latest first flight",
    category: "Aircraft by First Flight Year",
    items: [
      { label: "Wright Flyer", value: 1903 },
      { label: "Spirit of St. Louis", value: 1927 },
      { label: "Spitfire", value: 1936 },
      { label: "Boeing 747", value: 1969 },
      { label: "Concorde", value: 1969.5 }
    ]
  },
  {
    instruction: "Least to most total medals (all-time Summer Olympics)",
    category: "Countries by Olympic Medal Count",
    items: [
      { label: "Jamaica", value: 87 },
      { label: "South Korea", value: 301 },
      { label: "France", value: 763 },
      { label: "Great Britain", value: 916 },
      { label: "United States", value: 2629 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of Earth's surface",
    category: "Land Cover Types",
    items: [
      { label: "Urban Areas", value: 3 },
      { label: "Cropland", value: 12 },
      { label: "Forest", value: 31 },
      { label: "Desert/Barren", value: 33 },
      { label: "Ocean", value: 71 }
    ]
  },
  {
    instruction: "Shortest to tallest on average",
    category: "Countries by Average Male Height (cm)",
    items: [
      { label: "Guatemala", value: 164 },
      { label: "India", value: 167 },
      { label: "Japan", value: 172 },
      { label: "United States", value: 176 },
      { label: "Netherlands", value: 183 }
    ]
  },
  {
    instruction: "Earliest to latest establishment",
    category: "National Parks by Year Established",
    items: [
      { label: "Yellowstone", value: 1872 },
      { label: "Yosemite", value: 1890 },
      { label: "Grand Canyon", value: 1919 },
      { label: "Great Smoky Mountains", value: 1934 },
      { label: "Channel Islands", value: 1980 }
    ]
  },
  {
    instruction: "Lowest to highest protein per 100g",
    category: "Foods by Protein Content (grams)",
    items: [
      { label: "Apple", value: 0.3 },
      { label: "Rice (cooked)", value: 2.7 },
      { label: "Egg", value: 13 },
      { label: "Chicken Breast", value: 31 },
      { label: "Parmesan Cheese", value: 35 }
    ]
  },
  {
    instruction: "Fewest to most championship titles",
    category: "NBA Teams by Championships Won",
    items: [
      { label: "Dallas Mavericks", value: 2 },
      { label: "San Antonio Spurs", value: 5 },
      { label: "Chicago Bulls", value: 6 },
      { label: "Los Angeles Lakers", value: 17 },
      { label: "Boston Celtics", value: 18 }
    ]
  },
  {
    instruction: "Shortest to longest wavelength",
    category: "Electromagnetic Spectrum (nanometers)",
    items: [
      { label: "Gamma Rays", value: 0.01 },
      { label: "X-Rays", value: 1 },
      { label: "Ultraviolet", value: 300 },
      { label: "Visible Light", value: 550 },
      { label: "Infrared", value: 10000 }
    ]
  },
  {
    instruction: "Least to most densely populated",
    category: "Countries by Population Density (per sq km)",
    items: [
      { label: "Mongolia", value: 2 },
      { label: "Canada", value: 4 },
      { label: "United States", value: 36 },
      { label: "India", value: 464 },
      { label: "Bangladesh", value: 1265 }
    ]
  },
  {
    instruction: "Earliest to latest premiere",
    category: "Broadway Musicals by Opening Year",
    items: [
      { label: "West Side Story", value: 1957 },
      { label: "Grease", value: 1972 },
      { label: "Les Misérables", value: 1987 },
      { label: "The Lion King", value: 1997 },
      { label: "Hamilton", value: 2015 }
    ]
  },
  {
    instruction: "Smallest to largest hard drive capacity",
    category: "Storage Media by Capacity",
    items: [
      { label: "Floppy Disk (3.5\")", value: 1.44 },
      { label: "CD-ROM", value: 700 },
      { label: "DVD", value: 4700 },
      { label: "Blu-ray Disc", value: 25000 },
      { label: "Modern Hard Drive (TB)", value: 20000000 }
    ]
  },
  {
    instruction: "Least to most abundant element in Earth's crust",
    category: "Elements by Crustal Abundance (ppm)",
    items: [
      { label: "Gold", value: 0.004 },
      { label: "Silver", value: 0.075 },
      { label: "Carbon", value: 200 },
      { label: "Iron", value: 50000 },
      { label: "Oxygen", value: 461000 }
    ]
  },
  {
    instruction: "Shortest to tallest",
    category: "Skyscrapers by Height (meters)",
    items: [
      { label: "Empire State Building", value: 443 },
      { label: "Willis Tower (Sears Tower)", value: 527 },
      { label: "One World Trade Center", value: 541 },
      { label: "Shanghai Tower", value: 632 },
      { label: "Burj Khalifa", value: 828 }
    ]
  },
  {
    instruction: "Least to most expensive spice per kg",
    category: "Spices by Price (USD/kg)",
    items: [
      { label: "Black Pepper", value: 15 },
      { label: "Cinnamon", value: 25 },
      { label: "Cardamom", value: 60 },
      { label: "Vanilla", value: 600 },
      { label: "Saffron", value: 5000 }
    ]
  },
  {
    instruction: "Smallest to largest moon",
    category: "Moons in the Solar System by Diameter (km)",
    items: [
      { label: "Deimos (Mars)", value: 12 },
      { label: "Phobos (Mars)", value: 22 },
      { label: "Europa (Jupiter)", value: 3122 },
      { label: "Titan (Saturn)", value: 5150 },
      { label: "Ganymede (Jupiter)", value: 5268 }
    ]
  },
  {
    instruction: "Fewest to most Super Bowl wins",
    category: "NFL Teams by Super Bowl Victories",
    items: [
      { label: "Kansas City Chiefs", value: 4 },
      { label: "Green Bay Packers", value: 4.1 },
      { label: "Dallas Cowboys", value: 5 },
      { label: "San Francisco 49ers", value: 5.1 },
      { label: "New England Patriots", value: 6 }
    ]
  },
  {
    instruction: "Lowest to highest pH",
    category: "Common Substances by pH Level",
    items: [
      { label: "Battery Acid", value: 1 },
      { label: "Lemon Juice", value: 2 },
      { label: "Coffee", value: 5 },
      { label: "Pure Water", value: 7 },
      { label: "Bleach", value: 13 }
    ]
  },
  {
    instruction: "Earliest to latest founding",
    category: "Tech Companies by Year Founded",
    items: [
      { label: "IBM", value: 1911 },
      { label: "Microsoft", value: 1975 },
      { label: "Apple", value: 1976 },
      { label: "Google", value: 1998 },
      { label: "Facebook (Meta)", value: 2004 }
    ]
  },
  {
    instruction: "Shortest to longest bone in the human body",
    category: "Human Bones by Length (cm)",
    items: [
      { label: "Stapes (ear bone)", value: 0.3 },
      { label: "Distal phalanx (little toe)", value: 1 },
      { label: "Patella (kneecap)", value: 5 },
      { label: "Humerus (upper arm)", value: 36 },
      { label: "Femur (thigh bone)", value: 48 }
    ]
  },
  {
    instruction: "Least to most letters in the alphabet",
    category: "Languages by Alphabet Size",
    items: [
      { label: "Hawaiian", value: 13 },
      { label: "Italian", value: 21 },
      { label: "English", value: 26 },
      { label: "Russian (Cyrillic)", value: 33 },
      { label: "Khmer (Cambodian)", value: 74 }
    ]
  },
  {
    instruction: "Lowest to highest average annual rainfall (mm)",
    category: "Cities by Annual Rainfall",
    items: [
      { label: "Cairo, Egypt", value: 25 },
      { label: "Los Angeles, USA", value: 380 },
      { label: "London, UK", value: 600 },
      { label: "Tokyo, Japan", value: 1530 },
      { label: "Cherrapunji, India", value: 11430 }
    ]
  },
  {
    instruction: "Least to most lanes",
    category: "Roads by Width (number of lanes)",
    items: [
      { label: "Country Lane", value: 1 },
      { label: "Main Street", value: 2 },
      { label: "US Highway", value: 4 },
      { label: "Interstate Highway", value: 6 },
      { label: "Katy Freeway (Houston)", value: 26 }
    ]
  },
  {
    instruction: "Earliest to latest eruption",
    category: "Famous Volcanic Eruptions by Year",
    items: [
      { label: "Mount Vesuvius (Pompeii)", value: 79 },
      { label: "Tambora (Indonesia)", value: 1815 },
      { label: "Krakatoa", value: 1883 },
      { label: "Mount St. Helens", value: 1980 },
      { label: "Eyjafjallajökull (Iceland)", value: 2010 }
    ]
  },
  {
    instruction: "Lowest to highest calorie burn per hour",
    category: "Exercises by Calories Burned",
    items: [
      { label: "Walking (slow)", value: 200 },
      { label: "Yoga", value: 300 },
      { label: "Swimming", value: 500 },
      { label: "Cycling (vigorous)", value: 700 },
      { label: "Running (8 mph)", value: 860 }
    ]
  },
  {
    instruction: "Earliest to latest independence",
    category: "Countries by Year of Independence",
    items: [
      { label: "United States", value: 1776 },
      { label: "Brazil", value: 1822 },
      { label: "Italy (unification)", value: 1861 },
      { label: "India", value: 1947 },
      { label: "South Sudan", value: 2011 }
    ]
  },
  {
    instruction: "Lightest to heaviest organ",
    category: "Human Organs by Weight (grams)",
    items: [
      { label: "Thyroid", value: 20 },
      { label: "Kidney", value: 150 },
      { label: "Heart", value: 310 },
      { label: "Brain", value: 1400 },
      { label: "Liver", value: 1500 }
    ]
  },
  {
    instruction: "Slowest to fastest sound speed (m/s)",
    category: "Materials by Speed of Sound",
    items: [
      { label: "Air", value: 343 },
      { label: "Water", value: 1480 },
      { label: "Wood (oak)", value: 3850 },
      { label: "Steel", value: 5960 },
      { label: "Diamond", value: 12000 }
    ]
  },
  {
    instruction: "Smallest to largest lake",
    category: "Lakes by Surface Area (sq km)",
    items: [
      { label: "Lake Como", value: 146 },
      { label: "Lake Tahoe", value: 495 },
      { label: "Lake Victoria", value: 68870 },
      { label: "Lake Superior", value: 82100 },
      { label: "Caspian Sea", value: 371000 }
    ]
  },
  {
    instruction: "Fewest to most World Series wins",
    category: "MLB Teams by Championships",
    items: [
      { label: "Cleveland Guardians", value: 2 },
      { label: "Boston Red Sox", value: 9 },
      { label: "Oakland Athletics", value: 9.1 },
      { label: "St. Louis Cardinals", value: 11 },
      { label: "New York Yankees", value: 27 }
    ]
  },
  {
    instruction: "Lowest to highest vitamin C content (mg per 100g)",
    category: "Fruits by Vitamin C",
    items: [
      { label: "Blueberry", value: 10 },
      { label: "Pineapple", value: 48 },
      { label: "Orange", value: 53 },
      { label: "Kiwi", value: 93 },
      { label: "Guava", value: 228 }
    ]
  },
  {
    instruction: "Earliest to latest discovery",
    category: "Dwarf Planets by Discovery Year",
    items: [
      { label: "Ceres", value: 1801 },
      { label: "Pluto", value: 1930 },
      { label: "Haumea", value: 2004 },
      { label: "Eris", value: 2005 },
      { label: "Makemake", value: 2005.5 }
    ]
  },
  {
    instruction: "Smallest to largest island",
    category: "Islands by Area (sq km)",
    items: [
      { label: "Manhattan", value: 59 },
      { label: "Bali", value: 5780 },
      { label: "Jamaica", value: 10990 },
      { label: "Iceland", value: 103000 },
      { label: "Greenland", value: 2166086 }
    ]
  },
  {
    instruction: "Fewest to most speaking roles",
    category: "Shakespeare Plays by Named Characters",
    items: [
      { label: "The Tempest", value: 15 },
      { label: "Macbeth", value: 21 },
      { label: "Romeo and Juliet", value: 23 },
      { label: "A Midsummer Night's Dream", value: 23.5 },
      { label: "Henry VI Part 2", value: 50 }
    ]
  },
  {
    instruction: "Least to most daily visitors",
    category: "Theme Parks by Annual Attendance (millions)",
    items: [
      { label: "LEGOLAND California", value: 5 },
      { label: "Universal Studios Japan", value: 14 },
      { label: "Tokyo Disneyland", value: 16 },
      { label: "Disneyland (Anaheim)", value: 17 },
      { label: "Magic Kingdom (Walt Disney World)", value: 20 }
    ]
  },
  {
    instruction: "Least to most abundant gas in Earth's atmosphere",
    category: "Atmospheric Gases by Percentage",
    items: [
      { label: "Helium", value: 0.0005 },
      { label: "Neon", value: 0.0018 },
      { label: "Carbon Dioxide", value: 0.04 },
      { label: "Argon", value: 0.93 },
      { label: "Nitrogen", value: 78.09 }
    ]
  },
  {
    instruction: "Shortest to longest bridge",
    category: "Bridges by Length (meters)",
    items: [
      { label: "Rialto Bridge (Venice)", value: 48 },
      { label: "Tower Bridge (London)", value: 244 },
      { label: "Golden Gate Bridge", value: 2737 },
      { label: "Akashi Kaikyō Bridge (Japan)", value: 3911 },
      { label: "Danyang-Kunshan Grand Bridge (China)", value: 164800 }
    ]
  },
  {
    instruction: "Earliest to latest presidency",
    category: "US Presidents by Inauguration Year",
    items: [
      { label: "Thomas Jefferson", value: 1801 },
      { label: "Abraham Lincoln", value: 1861 },
      { label: "Theodore Roosevelt", value: 1901 },
      { label: "John F. Kennedy", value: 1961 },
      { label: "Barack Obama", value: 2009 }
    ]
  },
  {
    instruction: "Least to most daily coffee consumption",
    category: "Countries by Coffee Consumption (kg per capita/year)",
    items: [
      { label: "United Kingdom", value: 1.4 },
      { label: "United States", value: 4.4 },
      { label: "Italy", value: 5.8 },
      { label: "Norway", value: 8.8 },
      { label: "Finland", value: 12 }
    ]
  },
  {
    instruction: "Lowest to highest gravity",
    category: "Solar System Bodies by Surface Gravity (m/s²)",
    items: [
      { label: "Moon", value: 1.6 },
      { label: "Mercury", value: 3.7 },
      { label: "Mars", value: 3.72 },
      { label: "Earth", value: 9.8 },
      { label: "Jupiter", value: 24.8 }
    ]
  },
  {
    instruction: "Smallest to largest desert",
    category: "Deserts by Area (sq km)",
    items: [
      { label: "Mojave", value: 124000 },
      { label: "Gobi", value: 1300000 },
      { label: "Arabian Desert", value: 2330000 },
      { label: "Sahara", value: 9200000 },
      { label: "Antarctic Desert", value: 14200000 }
    ]
  },
  {
    instruction: "Least to most goals in a single World Cup",
    category: "Players by Goals in One World Cup",
    items: [
      { label: "Pelé (1958)", value: 6 },
      { label: "Oleg Salenko (1994)", value: 6.1 },
      { label: "Ronaldo (2002)", value: 8 },
      { label: "Gerd Müller (1970)", value: 10 },
      { label: "Just Fontaine (1958)", value: 13 }
    ]
  },
  {
    instruction: "Lowest to highest Scoville heat units",
    category: "Peppers by Heat Level",
    items: [
      { label: "Bell Pepper", value: 0 },
      { label: "Jalapeño", value: 5000 },
      { label: "Serrano", value: 15000 },
      { label: "Habanero", value: 300000 },
      { label: "Carolina Reaper", value: 2200000 }
    ]
  },
  {
    instruction: "Fewest to most points in NBA career",
    category: "NBA All-Time Scoring Leaders",
    items: [
      { label: "Shaquille O'Neal", value: 28596 },
      { label: "Michael Jordan", value: 32292 },
      { label: "Kobe Bryant", value: 33643 },
      { label: "Karl Malone", value: 36928 },
      { label: "LeBron James", value: 40474 }
    ]
  },
  {
    instruction: "Lowest to highest number of keys on keyboard",
    category: "Keyboard Instruments by Key Count",
    items: [
      { label: "Toy Piano", value: 25 },
      { label: "Accordion", value: 41 },
      { label: "Harpsichord", value: 61 },
      { label: "Organ (single manual)", value: 61.1 },
      { label: "Grand Piano", value: 88 }
    ]
  },
  {
    instruction: "Least to most expensive gemstone per carat",
    category: "Gemstones by Price (USD/carat)",
    items: [
      { label: "Amethyst", value: 30 },
      { label: "Topaz (blue)", value: 60 },
      { label: "Sapphire", value: 5000 },
      { label: "Ruby", value: 15000 },
      { label: "Diamond (flawless)", value: 65000 }
    ]
  },
  {
    instruction: "Shortest to longest tunnel",
    category: "Tunnels by Length (km)",
    items: [
      { label: "Lincoln Tunnel (NYC)", value: 2.4 },
      { label: "Mont Blanc Tunnel (Alps)", value: 11.6 },
      { label: "Channel Tunnel (England-France)", value: 50.5 },
      { label: "Gotthard Base Tunnel (Switzerland)", value: 57 },
      { label: "Delaware Aqueduct (NYC water)", value: 137 }
    ]
  },
  {
    instruction: "Earliest to latest written",
    category: "Religious Texts by Approximate Date",
    items: [
      { label: "Rig Veda", value: -1500 },
      { label: "Torah", value: -600 },
      { label: "Tao Te Ching", value: -400 },
      { label: "New Testament", value: 70 },
      { label: "Quran", value: 632 }
    ]
  },
  {
    instruction: "Lowest to highest album sales (millions worldwide)",
    category: "Best-Selling Albums of All Time",
    items: [
      { label: "Rumours (Fleetwood Mac)", value: 40 },
      { label: "Greatest Hits (Eagles)", value: 44 },
      { label: "The Bodyguard Soundtrack", value: 45 },
      { label: "Back in Black (AC/DC)", value: 50 },
      { label: "Thriller (Michael Jackson)", value: 66 }
    ]
  },
  {
    instruction: "Fewest to most career assists",
    category: "NHL Players by Career Assists",
    items: [
      { label: "Gordie Howe", value: 1049 },
      { label: "Steve Yzerman", value: 1063 },
      { label: "Mark Messier", value: 1193 },
      { label: "Ron Francis", value: 1249 },
      { label: "Wayne Gretzky", value: 1963 }
    ]
  },
  {
    instruction: "Smallest to largest waterfall by height (meters)",
    category: "Waterfalls by Height",
    items: [
      { label: "Niagara Falls", value: 51 },
      { label: "Victoria Falls", value: 108 },
      { label: "Yosemite Falls", value: 739 },
      { label: "Tugela Falls (South Africa)", value: 948 },
      { label: "Angel Falls (Venezuela)", value: 979 }
    ]
  },
  {
    instruction: "Lowest to highest hardness",
    category: "Minerals on the Mohs Scale",
    items: [
      { label: "Talc", value: 1 },
      { label: "Gypsum", value: 2 },
      { label: "Quartz", value: 7 },
      { label: "Topaz", value: 8 },
      { label: "Diamond", value: 10 }
    ]
  },
  {
    instruction: "Earliest to latest first season",
    category: "TV Shows by Premiere Year",
    items: [
      { label: "I Love Lucy", value: 1951 },
      { label: "Star Trek (Original)", value: 1966 },
      { label: "The Fresh Prince of Bel-Air", value: 1990 },
      { label: "The Office (US)", value: 2005 },
      { label: "Stranger Things", value: 2016 }
    ]
  },
  {
    instruction: "Least to most daily passengers",
    category: "Subway Systems by Daily Ridership (millions)",
    items: [
      { label: "Washington D.C. Metro", value: 0.6 },
      { label: "London Underground", value: 3.5 },
      { label: "New York City Subway", value: 3.6 },
      { label: "Moscow Metro", value: 6.8 },
      { label: "Beijing Subway", value: 10 }
    ]
  },
  {
    instruction: "Lightest to heaviest ball",
    category: "Sports Balls by Weight (grams)",
    items: [
      { label: "Table Tennis Ball", value: 2.7 },
      { label: "Golf Ball", value: 46 },
      { label: "Tennis Ball", value: 58 },
      { label: "Baseball", value: 145 },
      { label: "Basketball", value: 620 }
    ]
  },
  {
    instruction: "Lowest to highest IQ estimate",
    category: "Historical Figures by Estimated IQ",
    items: [
      { label: "Napoleon Bonaparte", value: 145 },
      { label: "Albert Einstein", value: 160 },
      { label: "Isaac Newton", value: 190 },
      { label: "Leonardo da Vinci", value: 200 },
      { label: "Johann Goethe", value: 210 }
    ]
  },
  {
    instruction: "Smallest to largest flower",
    category: "Flowers by Bloom Diameter (cm)",
    items: [
      { label: "Wolffia (Duckweed)", value: 0.1 },
      { label: "Lily of the Valley", value: 1 },
      { label: "Rose", value: 10 },
      { label: "Sunflower", value: 30 },
      { label: "Rafflesia arnoldii", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most career touchdowns",
    category: "NFL Quarterbacks by Passing Touchdowns",
    items: [
      { label: "Joe Montana", value: 273 },
      { label: "Dan Marino", value: 420 },
      { label: "Peyton Manning", value: 539 },
      { label: "Drew Brees", value: 571 },
      { label: "Tom Brady", value: 649 }
    ]
  },
  {
    instruction: "Shortest to longest wall",
    category: "Famous Walls by Length (km)",
    items: [
      { label: "Western Wall (Jerusalem)", value: 0.5 },
      { label: "Great Wall of India (Kumbhalgarh)", value: 36 },
      { label: "Hadrian's Wall", value: 117 },
      { label: "Berlin Wall", value: 155 },
      { label: "Great Wall of China", value: 21196 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of global internet users",
    category: "Countries by Internet Penetration Rate (%)",
    items: [
      { label: "Nigeria", value: 36 },
      { label: "India", value: 47 },
      { label: "Brazil", value: 75 },
      { label: "United States", value: 92 },
      { label: "Iceland", value: 99 }
    ]
  },
  {
    instruction: "Earliest to latest invention",
    category: "Writing Instruments by Year Invented",
    items: [
      { label: "Quill Pen", value: 600 },
      { label: "Pencil", value: 1564 },
      { label: "Fountain Pen", value: 1827 },
      { label: "Ballpoint Pen", value: 1888 },
      { label: "Felt-Tip Marker", value: 1910 }
    ]
  },
  {
    instruction: "Least to most massive",
    category: "Celestial Objects by Mass (relative to Earth)",
    items: [
      { label: "Pluto", value: 0.002 },
      { label: "Moon", value: 0.012 },
      { label: "Earth", value: 1 },
      { label: "Neptune", value: 17 },
      { label: "Sun", value: 333000 }
    ]
  },
  {
    instruction: "Lowest to highest salary (average annual, USD)",
    category: "Professions by Average Salary",
    items: [
      { label: "Fast Food Worker", value: 25000 },
      { label: "Teacher", value: 60000 },
      { label: "Software Engineer", value: 120000 },
      { label: "Airline Pilot", value: 170000 },
      { label: "Neurosurgeon", value: 620000 }
    ]
  },
  {
    instruction: "Fewest to most total matches played",
    category: "Wimbledon Champions by Career Matches Won",
    items: [
      { label: "Boris Becker", value: 713 },
      { label: "Pete Sampras", value: 762 },
      { label: "Novak Djokovic", value: 1100 },
      { label: "Roger Federer", value: 1251 },
      { label: "Jimmy Connors", value: 1274 }
    ]
  },
  {
    instruction: "Lowest to highest box office gross (billion USD)",
    category: "Highest-Grossing Films Worldwide",
    items: [
      { label: "Frozen II", value: 1.45 },
      { label: "The Lion King (2019)", value: 1.66 },
      { label: "Titanic", value: 2.26 },
      { label: "Avengers: Endgame", value: 2.80 },
      { label: "Avatar", value: 2.92 }
    ]
  },
  {
    instruction: "Fewest to most active volcanoes",
    category: "Countries by Number of Active Volcanoes",
    items: [
      { label: "Iceland", value: 30 },
      { label: "Chile", value: 36 },
      { label: "Japan", value: 111 },
      { label: "Indonesia", value: 127 },
      { label: "United States", value: 161 }
    ]
  },
  {
    instruction: "Lowest to highest number of time zones",
    category: "Countries by Number of Time Zones",
    items: [
      { label: "Japan", value: 1 },
      { label: "Australia", value: 5 },
      { label: "Canada", value: 6 },
      { label: "Russia", value: 11 },
      { label: "France (with territories)", value: 12 }
    ]
  },
  {
    instruction: "Earliest to latest construction completion",
    category: "Ancient Wonders by Approximate Completion",
    items: [
      { label: "Great Pyramid of Giza", value: -2560 },
      { label: "Hanging Gardens of Babylon", value: -600 },
      { label: "Statue of Zeus at Olympia", value: -435 },
      { label: "Colossus of Rhodes", value: -280 },
      { label: "Lighthouse of Alexandria", value: -247 }
    ]
  },
  {
    instruction: "Least to most Olympic gold medals (individual)",
    category: "Athletes by Individual Olympic Gold Medals",
    items: [
      { label: "Usain Bolt", value: 8 },
      { label: "Carl Lewis", value: 9 },
      { label: "Paavo Nurmi", value: 9.1 },
      { label: "Mark Spitz", value: 9.2 },
      { label: "Michael Phelps", value: 23 }
    ]
  },
  {
    instruction: "Smallest to largest seed",
    category: "Plants by Seed Size (mm diameter)",
    items: [
      { label: "Orchid", value: 0.05 },
      { label: "Poppy", value: 1 },
      { label: "Sunflower", value: 12 },
      { label: "Avocado", value: 50 },
      { label: "Coconut", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest wind speed category (mph)",
    category: "Storm Types by Wind Speed",
    items: [
      { label: "Tropical Depression", value: 38 },
      { label: "Tropical Storm", value: 63 },
      { label: "Category 1 Hurricane", value: 95 },
      { label: "Category 3 Hurricane", value: 129 },
      { label: "Category 5 Hurricane", value: 157 }
    ]
  },
  {
    instruction: "Least to most words",
    category: "Famous Speeches by Word Count",
    items: [
      { label: "Gettysburg Address (Lincoln)", value: 272 },
      { label: "JFK Inaugural Address", value: 1366 },
      { label: "\"I Have a Dream\" (MLK Jr.)", value: 1667 },
      { label: "FDR First Inaugural Address", value: 1883 },
      { label: "\"We Shall Fight on the Beaches\" (Churchill)", value: 4000 }
    ]
  },
  {
    instruction: "Lowest to highest freezing point (°C)",
    category: "Liquids by Freezing Point",
    items: [
      { label: "Ethanol", value: -114 },
      { label: "Mercury", value: -39 },
      { label: "Olive Oil", value: -6 },
      { label: "Water", value: 0 },
      { label: "Coconut Oil", value: 24 }
    ]
  },
  {
    instruction: "Earliest to latest completion",
    category: "Famous Cathedrals by Year Completed",
    items: [
      { label: "Hagia Sophia (Istanbul)", value: 537 },
      { label: "Notre-Dame (Paris)", value: 1345 },
      { label: "St. Peter's Basilica (Rome)", value: 1626 },
      { label: "St. Paul's Cathedral (London)", value: 1710 },
      { label: "Sagrada Família (Barcelona — ongoing)", value: 2026 }
    ]
  },
  {
    instruction: "Least to most Nobel Prizes won",
    category: "Countries by Total Nobel Prize Winners",
    items: [
      { label: "Japan", value: 29 },
      { label: "Sweden", value: 33 },
      { label: "France", value: 70 },
      { label: "Germany", value: 110 },
      { label: "United States", value: 400 }
    ]
  },
  {
    instruction: "Shortest to longest migration",
    category: "Animals by Migration Distance (km one-way)",
    items: [
      { label: "Monarch Butterfly", value: 4000 },
      { label: "Caribou", value: 5000 },
      { label: "Humpback Whale", value: 8000 },
      { label: "Leatherback Sea Turtle", value: 10000 },
      { label: "Arctic Tern", value: 35000 }
    ]
  },
  {
    instruction: "Lowest to highest rotational speed",
    category: "Spinning Objects by RPM",
    items: [
      { label: "Ferris Wheel", value: 0.5 },
      { label: "Vinyl Record (33 RPM)", value: 33 },
      { label: "Washing Machine (spin)", value: 1200 },
      { label: "Car Engine (highway)", value: 3000 },
      { label: "Dental Drill", value: 400000 }
    ]
  },
  {
    instruction: "Least to most expensive (average per night, USD)",
    category: "Hotel Stays by Cost",
    items: [
      { label: "Hostel Dorm Bed", value: 25 },
      { label: "Budget Motel", value: 70 },
      { label: "Mid-Range Hotel", value: 200 },
      { label: "Luxury Resort", value: 800 },
      { label: "Overwater Villa (Maldives)", value: 3000 }
    ]
  },
  {
    instruction: "Fewest to most chromosomes",
    category: "Organisms by Chromosome Count",
    items: [
      { label: "Jack Jumper Ant", value: 2 },
      { label: "Fruit Fly", value: 8 },
      { label: "Human", value: 46 },
      { label: "Dog", value: 78 },
      { label: "Adder's Tongue Fern", value: 1260 }
    ]
  },
  {
    instruction: "Smallest to largest stadium capacity",
    category: "Sports Stadiums by Seating Capacity",
    items: [
      { label: "Fenway Park (Boston)", value: 37755 },
      { label: "Old Trafford (Manchester)", value: 74310 },
      { label: "Wembley Stadium (London)", value: 90000 },
      { label: "Michigan Stadium", value: 107601 },
      { label: "Rungrado May Day Stadium (Pyongyang)", value: 114000 }
    ]
  },
  {
    instruction: "Lowest to highest average depth (meters)",
    category: "Oceans by Average Depth",
    items: [
      { label: "Arctic Ocean", value: 1038 },
      { label: "Southern Ocean", value: 3270 },
      { label: "Atlantic Ocean", value: 3646 },
      { label: "Indian Ocean", value: 3741 },
      { label: "Pacific Ocean", value: 4280 }
    ]
  },
  {
    instruction: "Earliest to latest publication",
    category: "Novels by Year of Publication",
    items: [
      { label: "Don Quixote (Cervantes)", value: 1605 },
      { label: "Pride and Prejudice (Austen)", value: 1813 },
      { label: "A Tale of Two Cities (Dickens)", value: 1859 },
      { label: "1984 (Orwell)", value: 1949 },
      { label: "One Hundred Years of Solitude (Márquez)", value: 1967 }
    ]
  },
  {
    instruction: "Lowest to highest density (g/cm³)",
    category: "Materials by Density",
    items: [
      { label: "Aerogel", value: 0.002 },
      { label: "Cork", value: 0.12 },
      { label: "Ice", value: 0.92 },
      { label: "Granite", value: 2.7 },
      { label: "Lead", value: 11.3 }
    ]
  },
  {
    instruction: "Fewest to most speaking lines",
    category: "Disney Princesses by Number of Spoken Lines",
    items: [
      { label: "Aurora (Sleeping Beauty)", value: 18 },
      { label: "Cinderella", value: 110 },
      { label: "Ariel (The Little Mermaid)", value: 114 },
      { label: "Belle (Beauty and the Beast)", value: 151 },
      { label: "Mulan", value: 185 }
    ]
  },
  {
    instruction: "Earliest to latest patent or invention",
    category: "Household Appliances by Year Invented",
    items: [
      { label: "Sewing Machine", value: 1846 },
      { label: "Vacuum Cleaner", value: 1901 },
      { label: "Washing Machine (electric)", value: 1908 },
      { label: "Refrigerator (home)", value: 1913 },
      { label: "Microwave Oven", value: 1945 }
    ]
  }
];
