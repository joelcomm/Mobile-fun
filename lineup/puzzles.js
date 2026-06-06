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
      { label: "CO\u2082 (Carbon dioxide)", value: 3.1 },
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
      { label: "Jimmy Connors", value: 8.1 },
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
  },
  // ---- EXPANDED PUZZLE POOL (151–305) ----
  {
    instruction: "Shortest to longest coastline (km)",
    category: "Countries by Coastline Length",
    items: [
      { label: "Monaco", value: 4 },
      { label: "Slovenia", value: 47 },
      { label: "Belgium", value: 67 },
      { label: "Cuba", value: 3735 },
      { label: "Canada", value: 202080 }
    ]
  },
  {
    instruction: "Fewest to most syllables",
    category: "World Capitals by Syllable Count",
    items: [
      { label: "Rome", value: 1 },
      { label: "Paris", value: 2 },
      { label: "Ankara", value: 3 },
      { label: "Islamabad", value: 4 },
      { label: "Ouagadougou", value: 5 }
    ]
  },
  {
    instruction: "Lowest to highest fat content per 100g",
    category: "Cheeses by Fat Content (grams)",
    items: [
      { label: "Cottage Cheese", value: 4 },
      { label: "Mozzarella", value: 22 },
      { label: "Cheddar", value: 33 },
      { label: "Brie", value: 34 },
      { label: "Mascarpone", value: 44 }
    ]
  },
  {
    instruction: "Smallest to largest egg",
    category: "Birds by Egg Weight (grams)",
    items: [
      { label: "Hummingbird", value: 0.5 },
      { label: "Robin", value: 6 },
      { label: "Chicken", value: 60 },
      { label: "Emu", value: 550 },
      { label: "Ostrich", value: 1400 }
    ]
  },
  {
    instruction: "Fewest to most words in national anthem",
    category: "National Anthems by Word Count",
    items: [
      { label: "Japan (Kimigayo)", value: 32 },
      { label: "United Kingdom (God Save the King)", value: 94 },
      { label: "France (La Marseillaise)", value: 128 },
      { label: "United States (Star-Spangled Banner)", value: 183 },
      { label: "Greece (Hymn to Liberty)", value: 612 }
    ]
  },
  {
    instruction: "Lowest to highest average life expectancy",
    category: "Countries by Life Expectancy (years)",
    items: [
      { label: "Chad", value: 53 },
      { label: "Nigeria", value: 55 },
      { label: "India", value: 70 },
      { label: "United States", value: 77 },
      { label: "Japan", value: 84 }
    ]
  },
  {
    instruction: "Lightest to heaviest land vehicle",
    category: "Vehicles by Weight (kg)",
    items: [
      { label: "Electric Scooter", value: 12 },
      { label: "Motorcycle (sport)", value: 200 },
      { label: "Sedan (Toyota Camry)", value: 1500 },
      { label: "SUV (Range Rover)", value: 2500 },
      { label: "M1 Abrams Tank", value: 61000 }
    ]
  },
  {
    instruction: "Fewest to most rings on the Olympic flag",
    category: "Olympic Sports by Year Added",
    items: [
      { label: "Athletics (Track & Field)", value: 1896 },
      { label: "Basketball", value: 1936 },
      { label: "Judo", value: 1964 },
      { label: "Taekwondo", value: 2000 },
      { label: "Skateboarding", value: 2021 }
    ]
  },
  {
    instruction: "Shallowest to deepest mine",
    category: "Mines by Depth (meters)",
    items: [
      { label: "Bingham Canyon (USA, open pit)", value: 970 },
      { label: "Kidd Mine (Canada)", value: 3000 },
      { label: "TauTona (South Africa)", value: 3900 },
      { label: "Mponeng (South Africa)", value: 4000 },
      { label: "Kola Superdeep Borehole (Russia)", value: 12262 }
    ]
  },
  {
    instruction: "Shortest to longest river in Europe (km)",
    category: "European Rivers by Length",
    items: [
      { label: "Arno (Italy)", value: 241 },
      { label: "Seine (France)", value: 777 },
      { label: "Rhine (Germany)", value: 1230 },
      { label: "Danube", value: 2850 },
      { label: "Volga (Russia)", value: 3530 }
    ]
  },
  {
    instruction: "Lowest to highest surface temperature (°C)",
    category: "Planets by Average Surface Temperature",
    items: [
      { label: "Neptune", value: -214 },
      { label: "Mars", value: -65 },
      { label: "Earth", value: 15 },
      { label: "Mercury", value: 167 },
      { label: "Venus", value: 464 }
    ]
  },
  {
    instruction: "Fewest to most letters in country name",
    category: "Countries by Name Length",
    items: [
      { label: "Chad", value: 4 },
      { label: "Japan", value: 5 },
      { label: "Germany", value: 7 },
      { label: "Madagascar", value: 10 },
      { label: "Liechtenstein", value: 13 }
    ]
  },
  {
    instruction: "Lowest to highest alcohol content (%)",
    category: "Beverages by Alcohol Percentage",
    items: [
      { label: "Light Beer", value: 4 },
      { label: "Red Wine", value: 14 },
      { label: "Port Wine", value: 20 },
      { label: "Whiskey", value: 40 },
      { label: "Absinthe", value: 70 }
    ]
  },
  {
    instruction: "Fewest to most career Grand Prix wins",
    category: "F1 Drivers by Race Wins",
    items: [
      { label: "Niki Lauda", value: 25 },
      { label: "Fernando Alonso", value: 32 },
      { label: "Ayrton Senna", value: 41 },
      { label: "Michael Schumacher", value: 91 },
      { label: "Lewis Hamilton", value: 103 }
    ]
  },
  {
    instruction: "Shortest to longest snake (meters)",
    category: "Snakes by Maximum Length",
    items: [
      { label: "Barbados Threadsnake", value: 0.1 },
      { label: "Corn Snake", value: 1.5 },
      { label: "King Cobra", value: 5.5 },
      { label: "Green Anaconda", value: 7.5 },
      { label: "Reticulated Python", value: 10 }
    ]
  },
  {
    instruction: "Least to most passengers per year (millions)",
    category: "Airports by Annual Passengers",
    items: [
      { label: "Zurich Airport", value: 31 },
      { label: "Singapore Changi", value: 62 },
      { label: "London Heathrow", value: 80 },
      { label: "Dubai International", value: 87 },
      { label: "Hartsfield-Jackson Atlanta", value: 93 }
    ]
  },
  {
    instruction: "Earliest to most recent eruption",
    category: "Hawaiian Volcanoes by Last Major Eruption",
    items: [
      { label: "Kohala", value: 120000 },
      { label: "Mauna Kea", value: 4600 },
      { label: "Haleakalā", value: 1600 },
      { label: "Mauna Loa", value: 2022 },
      { label: "Kilauea", value: 2023 }
    ]
  },
  {
    instruction: "Lowest to highest daily water intake recommendation (liters)",
    category: "Animals by Daily Water Needs",
    items: [
      { label: "Hamster", value: 0.01 },
      { label: "Cat", value: 0.25 },
      { label: "Human", value: 2.5 },
      { label: "Horse", value: 40 },
      { label: "Elephant", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most career strikeouts (pitching)",
    category: "MLB Pitchers by Career Strikeouts",
    items: [
      { label: "Sandy Koufax", value: 2396 },
      { label: "Tom Seaver", value: 3640 },
      { label: "Roger Clemens", value: 4672 },
      { label: "Randy Johnson", value: 4875 },
      { label: "Nolan Ryan", value: 5714 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of body weight as brain",
    category: "Animals by Brain-to-Body Weight Ratio",
    items: [
      { label: "Blue Whale", value: 0.01 },
      { label: "Elephant", value: 0.1 },
      { label: "Dog", value: 0.6 },
      { label: "Human", value: 2.0 },
      { label: "Shrew", value: 3.0 }
    ]
  },
  {
    instruction: "Lowest to highest annual tourism revenue (billion USD)",
    category: "Countries by Tourism Revenue",
    items: [
      { label: "New Zealand", value: 10 },
      { label: "Thailand", value: 35 },
      { label: "Italy", value: 50 },
      { label: "France", value: 67 },
      { label: "United States", value: 239 }
    ]
  },
  {
    instruction: "Lightest to heaviest precious stone (carats of famous examples)",
    category: "Famous Diamonds by Carat Weight",
    items: [
      { label: "Hope Diamond", value: 45 },
      { label: "Koh-i-Noor", value: 105 },
      { label: "Centenary Diamond", value: 274 },
      { label: "Great Star of Africa", value: 530 },
      { label: "Golden Jubilee", value: 545 }
    ]
  },
  {
    instruction: "Fewest to most bones in the body",
    category: "Vertebrates by Bone Count",
    items: [
      { label: "Frog", value: 90 },
      { label: "Human", value: 206 },
      { label: "Cat", value: 230 },
      { label: "Dog", value: 320 },
      { label: "Python", value: 600 }
    ]
  },
  {
    instruction: "Slowest to fastest swimming speed (km/h)",
    category: "Marine Animals by Swimming Speed",
    items: [
      { label: "Sea Horse", value: 0.002 },
      { label: "Jellyfish", value: 8 },
      { label: "Great White Shark", value: 40 },
      { label: "Orca", value: 56 },
      { label: "Black Marlin", value: 129 }
    ]
  },
  {
    instruction: "Fewest to most career centuries (cricket)",
    category: "Cricket Batsmen by International Centuries",
    items: [
      { label: "Brian Lara", value: 34 },
      { label: "Steve Smith", value: 44 },
      { label: "Jacques Kallis", value: 62 },
      { label: "Ricky Ponting", value: 71 },
      { label: "Sachin Tendulkar", value: 100 }
    ]
  },
  {
    instruction: "Shortest to tallest statue",
    category: "Statues by Height (meters)",
    items: [
      { label: "Manneken Pis (Brussels)", value: 0.6 },
      { label: "The Little Mermaid (Copenhagen)", value: 1.25 },
      { label: "Christ the Redeemer (Rio)", value: 30 },
      { label: "Statue of Liberty (with pedestal)", value: 93 },
      { label: "Statue of Unity (India)", value: 182 }
    ]
  },
  {
    instruction: "Lowest to highest iron content per 100g (mg)",
    category: "Foods by Iron Content",
    items: [
      { label: "Apple", value: 0.1 },
      { label: "Egg", value: 1.8 },
      { label: "Beef (lean)", value: 3.5 },
      { label: "Tofu (firm)", value: 5.4 },
      { label: "Dark Chocolate (70%)", value: 12 }
    ]
  },
  {
    instruction: "Earliest to latest invention of writing system",
    category: "Writing Systems by Origin Date (BCE)",
    items: [
      { label: "Sumerian Cuneiform", value: -3400 },
      { label: "Egyptian Hieroglyphs", value: -3200 },
      { label: "Chinese Characters", value: -1200 },
      { label: "Phoenician Alphabet", value: -1050 },
      { label: "Greek Alphabet", value: -800 }
    ]
  },
  {
    instruction: "Least to most venomous (LD50, lower = more toxic)",
    category: "Spiders by Venom Toxicity",
    items: [
      { label: "Common House Spider", value: 5000 },
      { label: "Wolf Spider", value: 1000 },
      { label: "Black Widow", value: 90 },
      { label: "Redback Spider", value: 50 },
      { label: "Sydney Funnel-Web", value: 10 }
    ]
  },
  {
    instruction: "Shortest to tallest active player (as of 2024 cm)",
    category: "NBA Players by Height",
    items: [
      { label: "Chris Paul", value: 183 },
      { label: "Stephen Curry", value: 188 },
      { label: "Kevin Durant", value: 211 },
      { label: "Joel Embiid", value: 213 },
      { label: "Victor Wembanyama", value: 224 }
    ]
  },
  {
    instruction: "Lowest to highest carbon dioxide emissions (metric tons per capita)",
    category: "Countries by CO2 Emissions Per Capita",
    items: [
      { label: "India", value: 1.9 },
      { label: "Brazil", value: 2.3 },
      { label: "France", value: 4.6 },
      { label: "Japan", value: 8.5 },
      { label: "United States", value: 14.2 }
    ]
  },
  {
    instruction: "Fewest to most verses in the Bible",
    category: "Books of the Bible by Verse Count",
    items: [
      { label: "3 John", value: 14 },
      { label: "Obadiah", value: 21 },
      { label: "Philemon", value: 25 },
      { label: "Ruth", value: 85 },
      { label: "Psalms", value: 2461 }
    ]
  },
  {
    instruction: "Lowest to highest cruising altitude (meters)",
    category: "Flying Objects by Altitude",
    items: [
      { label: "Drone (recreational)", value: 120 },
      { label: "Helicopter", value: 3000 },
      { label: "Small Propeller Plane", value: 5500 },
      { label: "Commercial Airliner", value: 11000 },
      { label: "SR-71 Blackbird", value: 26000 }
    ]
  },
  {
    instruction: "Shortest to longest musical composition",
    category: "Classical Works by Duration (minutes)",
    items: [
      { label: "Chopin Minute Waltz", value: 1.5 },
      { label: "Beethoven Für Elise", value: 3 },
      { label: "Vivaldi Four Seasons (Spring)", value: 10 },
      { label: "Beethoven Symphony No. 9", value: 70 },
      { label: "Wagner Ring Cycle (full)", value: 930 }
    ]
  },
  {
    instruction: "Fewest to most career penalty goals (rugby)",
    category: "Rugby Players by Career Points",
    items: [
      { label: "Michael Lynagh", value: 911 },
      { label: "Neil Jenkins", value: 1090 },
      { label: "Ronan O'Gara", value: 1083 },
      { label: "Jonny Wilkinson", value: 1246 },
      { label: "Dan Carter", value: 1598 }
    ]
  },
  {
    instruction: "Lowest to highest average wind speed (km/h)",
    category: "Cities by Average Wind Speed",
    items: [
      { label: "Tokyo", value: 11 },
      { label: "New York City", value: 16 },
      { label: "London", value: 18 },
      { label: "Cape Town", value: 25 },
      { label: "Wellington (New Zealand)", value: 29 }
    ]
  },
  {
    instruction: "Smallest to largest coral reef (sq km)",
    category: "Coral Reefs by Area",
    items: [
      { label: "Raja Ampat (Indonesia)", value: 40000 },
      { label: "Red Sea Coral Reef", value: 44000 },
      { label: "New Caledonia Barrier Reef", value: 47000 },
      { label: "Mesoamerican Reef", value: 100000 },
      { label: "Great Barrier Reef (Australia)", value: 344400 }
    ]
  },
  {
    instruction: "Fewest to most career hat tricks",
    category: "Soccer Players by Career Hat Tricks",
    items: [
      { label: "Thierry Henry", value: 14 },
      { label: "Romario", value: 19 },
      { label: "Robert Lewandowski", value: 29 },
      { label: "Lionel Messi", value: 57 },
      { label: "Cristiano Ronaldo", value: 63 }
    ]
  },
  {
    instruction: "Lowest to highest fiber content per 100g (grams)",
    category: "Foods by Fiber Content",
    items: [
      { label: "White Rice (cooked)", value: 0.4 },
      { label: "Banana", value: 2.6 },
      { label: "Broccoli", value: 2.6 },
      { label: "Lentils (cooked)", value: 7.9 },
      { label: "Chia Seeds", value: 34 }
    ]
  },
  {
    instruction: "Least to most daily steps taken (average)",
    category: "Countries by Average Daily Steps",
    items: [
      { label: "Indonesia", value: 3513 },
      { label: "United States", value: 4774 },
      { label: "Germany", value: 5205 },
      { label: "United Kingdom", value: 5444 },
      { label: "Hong Kong", value: 6880 }
    ]
  },
  {
    instruction: "Smallest to largest crater",
    category: "Impact Craters by Diameter (km)",
    items: [
      { label: "Barringer Crater (Arizona)", value: 1.2 },
      { label: "Mistastin Lake (Canada)", value: 28 },
      { label: "Manicouagan (Canada)", value: 100 },
      { label: "Sudbury Basin (Canada)", value: 130 },
      { label: "Vredefort Crater (South Africa)", value: 300 }
    ]
  },
  {
    instruction: "Fewest to most Instagram followers (millions, approx 2024)",
    category: "Celebrities by Instagram Followers",
    items: [
      { label: "Dwayne Johnson", value: 395 },
      { label: "Kylie Jenner", value: 400 },
      { label: "Lionel Messi", value: 504 },
      { label: "Cristiano Ronaldo", value: 630 },
      { label: "Instagram (official)", value: 670 }
    ]
  },
  {
    instruction: "Lowest to highest average elevation (meters)",
    category: "Countries by Average Elevation",
    items: [
      { label: "Maldives", value: 2 },
      { label: "Netherlands", value: 30 },
      { label: "Denmark", value: 34 },
      { label: "Switzerland", value: 1350 },
      { label: "Bhutan", value: 3280 }
    ]
  },
  {
    instruction: "Fewest to most episodes in first season",
    category: "TV Shows by First Season Episode Count",
    items: [
      { label: "Chernobyl", value: 5 },
      { label: "Stranger Things", value: 8 },
      { label: "The Office (US)", value: 6 },
      { label: "Friends", value: 24 },
      { label: "Grey's Anatomy", value: 9 }
    ]
  },
  {
    instruction: "Shortest to longest suspension bridge span (meters)",
    category: "Suspension Bridges by Main Span",
    items: [
      { label: "Brooklyn Bridge", value: 486 },
      { label: "Golden Gate Bridge", value: 1280 },
      { label: "Humber Bridge (UK)", value: 1410 },
      { label: "Akashi Kaikyo Bridge (Japan)", value: 1991 },
      { label: "1915 Canakkale Bridge (Turkey)", value: 2023 }
    ]
  },
  {
    instruction: "Least to most career rebounds",
    category: "NBA Players by Career Rebounds",
    items: [
      { label: "Tim Duncan", value: 15091 },
      { label: "Karl Malone", value: 14968 },
      { label: "Moses Malone", value: 16212 },
      { label: "Kareem Abdul-Jabbar", value: 17440 },
      { label: "Wilt Chamberlain", value: 23924 }
    ]
  },
  {
    instruction: "Lowest to highest potassium per 100g (mg)",
    category: "Foods by Potassium Content",
    items: [
      { label: "White Rice (cooked)", value: 35 },
      { label: "Apple", value: 107 },
      { label: "Banana", value: 358 },
      { label: "Sweet Potato", value: 475 },
      { label: "White Beans (cooked)", value: 561 }
    ]
  },
  {
    instruction: "Smallest to largest national park (sq km)",
    category: "National Parks by Area",
    items: [
      { label: "Hot Springs (Arkansas, USA)", value: 22 },
      { label: "Kruger (South Africa)", value: 19485 },
      { label: "Yellowstone (USA)", value: 8983 },
      { label: "Serengeti (Tanzania)", value: 14763 },
      { label: "Northeast Greenland National Park", value: 972000 }
    ]
  },
  {
    instruction: "Fewest to most career aces (tennis)",
    category: "Tennis Players by Career Aces",
    items: [
      { label: "Rafael Nadal", value: 4290 },
      { label: "Pete Sampras", value: 8858 },
      { label: "Roger Federer", value: 11478 },
      { label: "Goran Ivanisevic", value: 12547 },
      { label: "Ivo Karlovic", value: 13728 }
    ]
  },
  {
    instruction: "Shortest to longest opera (hours)",
    category: "Operas by Duration",
    items: [
      { label: "Pagliacci (Leoncavallo)", value: 1.2 },
      { label: "La Bohème (Puccini)", value: 1.8 },
      { label: "Carmen (Bizet)", value: 2.5 },
      { label: "Aida (Verdi)", value: 2.75 },
      { label: "Parsifal (Wagner)", value: 4.5 }
    ]
  },
  {
    instruction: "Lightest to heaviest planet in the solar system",
    category: "Planets by Mass (Earth masses)",
    items: [
      { label: "Mercury", value: 0.055 },
      { label: "Mars", value: 0.107 },
      { label: "Earth", value: 1 },
      { label: "Neptune", value: 17.1 },
      { label: "Jupiter", value: 317.8 }
    ]
  },
  {
    instruction: "Lowest to highest average home price (thousand USD, 2024)",
    category: "Cities by Average Home Price",
    items: [
      { label: "Detroit", value: 85 },
      { label: "Dallas", value: 340 },
      { label: "Los Angeles", value: 900 },
      { label: "London", value: 950 },
      { label: "Hong Kong", value: 1300 }
    ]
  },
  {
    instruction: "Fewest to most lakes",
    category: "Countries by Number of Lakes",
    items: [
      { label: "Australia", value: 800 },
      { label: "Brazil", value: 3000 },
      { label: "United States", value: 102500 },
      { label: "Sweden", value: 100000 },
      { label: "Canada", value: 879800 }
    ]
  },
  {
    instruction: "Lowest to highest tensile strength (MPa)",
    category: "Materials by Tensile Strength",
    items: [
      { label: "Paper", value: 5 },
      { label: "Wood (pine)", value: 40 },
      { label: "Aluminum", value: 310 },
      { label: "Steel", value: 500 },
      { label: "Kevlar", value: 3620 }
    ]
  },
  {
    instruction: "Earliest to latest signing of peace treaty",
    category: "Peace Treaties by Year Signed",
    items: [
      { label: "Treaty of Westphalia", value: 1648 },
      { label: "Treaty of Paris (American Revolution)", value: 1783 },
      { label: "Treaty of Versailles", value: 1919 },
      { label: "Camp David Accords", value: 1978 },
      { label: "Good Friday Agreement", value: 1998 }
    ]
  },
  {
    instruction: "Smallest to largest ocean trench depth (meters)",
    category: "Ocean Trenches by Depth",
    items: [
      { label: "Puerto Rico Trench", value: 8376 },
      { label: "Japan Trench", value: 8412 },
      { label: "Philippine Trench", value: 10540 },
      { label: "Tonga Trench", value: 10823 },
      { label: "Mariana Trench", value: 10994 }
    ]
  },
  {
    instruction: "Fewest to most career wickets (cricket, Test matches)",
    category: "Cricket Bowlers by Test Wickets",
    items: [
      { label: "Dennis Lillee", value: 355 },
      { label: "Glenn McGrath", value: 563 },
      { label: "James Anderson", value: 700 },
      { label: "Shane Warne", value: 708 },
      { label: "Muttiah Muralitharan", value: 800 }
    ]
  },
  {
    instruction: "Smallest to largest cell",
    category: "Cell Types by Diameter (micrometers)",
    items: [
      { label: "Red Blood Cell", value: 7 },
      { label: "White Blood Cell", value: 15 },
      { label: "Skin Cell (keratinocyte)", value: 30 },
      { label: "Muscle Fiber", value: 100 },
      { label: "Human Egg Cell (ovum)", value: 120 }
    ]
  },
  {
    instruction: "Fewest to most career wins (horse racing jockey)",
    category: "Jockeys by Career Wins",
    items: [
      { label: "Lester Piggott", value: 4493 },
      { label: "Bill Shoemaker", value: 8833 },
      { label: "Laffit Pincay Jr.", value: 9530 },
      { label: "Russell Baze", value: 12842 },
      { label: "Jorge Ricardo", value: 13000 }
    ]
  },
  {
    instruction: "Lowest to highest daily oil production (million barrels)",
    category: "Countries by Oil Production",
    items: [
      { label: "Norway", value: 1.8 },
      { label: "Iraq", value: 4.4 },
      { label: "Canada", value: 5.6 },
      { label: "Saudi Arabia", value: 10.8 },
      { label: "United States", value: 12.9 }
    ]
  },
  {
    instruction: "Smallest to largest butterfly wingspan (cm)",
    category: "Butterflies by Wingspan",
    items: [
      { label: "Western Pygmy Blue", value: 1.2 },
      { label: "Common Blue", value: 3.5 },
      { label: "Monarch", value: 10 },
      { label: "Birdwing Butterfly", value: 21 },
      { label: "Queen Alexandra's Birdwing", value: 31 }
    ]
  },
  {
    instruction: "Fewest to most satellites launched (as of 2024)",
    category: "Countries by Satellites in Orbit",
    items: [
      { label: "India", value: 60 },
      { label: "Japan", value: 90 },
      { label: "United Kingdom", value: 120 },
      { label: "China", value: 700 },
      { label: "United States", value: 5000 }
    ]
  },
  {
    instruction: "Lightest to heaviest martial arts weight class (kg)",
    category: "UFC Weight Classes by Upper Limit",
    items: [
      { label: "Strawweight", value: 52 },
      { label: "Bantamweight", value: 61 },
      { label: "Lightweight", value: 70 },
      { label: "Middleweight", value: 84 },
      { label: "Heavyweight", value: 120 }
    ]
  },
  {
    instruction: "Lowest to highest annual cheese consumption (kg per capita)",
    category: "Countries by Cheese Consumption",
    items: [
      { label: "Japan", value: 2.7 },
      { label: "United Kingdom", value: 12 },
      { label: "United States", value: 18 },
      { label: "Germany", value: 25 },
      { label: "France", value: 27 }
    ]
  },
  {
    instruction: "Fewest to most paintings in a museum collection",
    category: "Art Museums by Collection Size (thousands)",
    items: [
      { label: "Uffizi Gallery (Florence)", value: 3 },
      { label: "Musée d'Orsay (Paris)", value: 5 },
      { label: "National Gallery (London)", value: 7 },
      { label: "Louvre (Paris)", value: 35 },
      { label: "Hermitage (St. Petersburg)", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest acceleration (0-60 mph in seconds, lower = faster)",
    category: "Cars by 0-60 Time (seconds)",
    items: [
      { label: "Rimac Nevera", value: 1.85 },
      { label: "Tesla Model S Plaid", value: 1.99 },
      { label: "Porsche 911 Turbo S", value: 2.6 },
      { label: "Chevrolet Corvette Z06", value: 2.7 },
      { label: "Ford Mustang GT", value: 4.2 }
    ]
  },
  {
    instruction: "Smallest to largest glacier (sq km)",
    category: "Glaciers by Area",
    items: [
      { label: "Pastoruri Glacier (Peru)", value: 1 },
      { label: "Aletsch Glacier (Switzerland)", value: 81 },
      { label: "Vatnajökull (Iceland)", value: 7900 },
      { label: "Pine Island Glacier (Antarctica)", value: 162300 },
      { label: "Lambert Glacier (Antarctica)", value: 400000 }
    ]
  },
  {
    instruction: "Fewest to most Olympic host cities",
    category: "Cities by Times Hosting Olympics",
    items: [
      { label: "Beijing", value: 2 },
      { label: "Tokyo", value: 2.1 },
      { label: "Athens", value: 3 },
      { label: "Paris", value: 3.1 },
      { label: "London", value: 3.2 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of forest cover",
    category: "Countries by Forest Cover (%)",
    items: [
      { label: "Egypt", value: 0.1 },
      { label: "Australia", value: 17 },
      { label: "United States", value: 34 },
      { label: "Brazil", value: 59 },
      { label: "Suriname", value: 93 }
    ]
  },
  {
    instruction: "Fewest to most career slam dunks",
    category: "NBA Players by Estimated Career Dunks",
    items: [
      { label: "Kobe Bryant", value: 850 },
      { label: "LeBron James", value: 1200 },
      { label: "Shaquille O'Neal", value: 3000 },
      { label: "Wilt Chamberlain", value: 3500 },
      { label: "Dwight Howard", value: 3700 }
    ]
  },
  {
    instruction: "Lowest to highest population growth rate (%)",
    category: "Countries by Annual Population Growth",
    items: [
      { label: "Japan", value: -0.5 },
      { label: "Germany", value: 0.1 },
      { label: "United States", value: 0.4 },
      { label: "India", value: 0.7 },
      { label: "Niger", value: 3.7 }
    ]
  },
  {
    instruction: "Fewest to most career doubles (tennis, Grand Slam titles)",
    category: "Tennis Players by Grand Slam Doubles Titles",
    items: [
      { label: "Venus Williams", value: 14 },
      { label: "Pam Shriver", value: 21 },
      { label: "John McEnroe", value: 9 },
      { label: "Bob Bryan", value: 16 },
      { label: "Mike Bryan", value: 18 }
    ]
  },
  {
    instruction: "Shortest to longest running Broadway show (performances)",
    category: "Broadway Shows by Number of Performances",
    items: [
      { label: "West Side Story (original)", value: 732 },
      { label: "My Fair Lady (original)", value: 2717 },
      { label: "A Chorus Line", value: 6137 },
      { label: "Les Misérables", value: 6680 },
      { label: "The Phantom of the Opera", value: 13981 }
    ]
  },
  {
    instruction: "Lowest to highest number of UNESCO World Heritage Sites",
    category: "Countries by UNESCO World Heritage Sites",
    items: [
      { label: "Australia", value: 20 },
      { label: "United Kingdom", value: 34 },
      { label: "Germany", value: 52 },
      { label: "China", value: 57 },
      { label: "Italy", value: 59 }
    ]
  },
  {
    instruction: "Lowest to highest thermal conductivity (W/m·K)",
    category: "Materials by Thermal Conductivity",
    items: [
      { label: "Wood (oak)", value: 0.17 },
      { label: "Glass", value: 1 },
      { label: "Steel", value: 50 },
      { label: "Aluminum", value: 237 },
      { label: "Diamond", value: 2200 }
    ]
  },
  {
    instruction: "Fewest to most rings in tree trunk (oldest trees)",
    category: "Tree Species by Maximum Known Age (years)",
    items: [
      { label: "Douglas Fir", value: 1400 },
      { label: "Giant Sequoia", value: 3300 },
      { label: "Alerce (Patagonia)", value: 3600 },
      { label: "Bristlecone Pine", value: 5066 },
      { label: "Old Tjikko (clonal spruce)", value: 9550 }
    ]
  },
  {
    instruction: "Smallest to largest battery capacity (kWh)",
    category: "Electric Vehicles by Battery Size",
    items: [
      { label: "Nissan Leaf (standard)", value: 40 },
      { label: "Chevrolet Bolt", value: 65 },
      { label: "Tesla Model 3 Long Range", value: 82 },
      { label: "Tesla Model S", value: 100 },
      { label: "GMC Hummer EV", value: 213 }
    ]
  },
  {
    instruction: "Fewest to most teeth replaced in a lifetime",
    category: "Animals by Tooth Replacement Rate (lifetime teeth)",
    items: [
      { label: "Human", value: 52 },
      { label: "Elephant", value: 24 },
      { label: "Crocodile", value: 4000 },
      { label: "Shark", value: 30000 },
      { label: "Spinner Dolphin", value: 252 }
    ]
  },
  {
    instruction: "Lowest to highest UV index (average peak)",
    category: "Cities by Average Peak UV Index",
    items: [
      { label: "London", value: 6 },
      { label: "New York", value: 8 },
      { label: "Sydney", value: 11 },
      { label: "Nairobi", value: 12 },
      { label: "Quito", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most career goals (ice hockey)",
    category: "NHL Players by Career Goals",
    items: [
      { label: "Mario Lemieux", value: 690 },
      { label: "Alex Ovechkin", value: 853 },
      { label: "Gordie Howe", value: 801 },
      { label: "Jaromír Jágr", value: 766 },
      { label: "Wayne Gretzky", value: 894 }
    ]
  },
  {
    instruction: "Lowest to highest tidal range (meters)",
    category: "Locations by Tidal Range",
    items: [
      { label: "Mediterranean Sea", value: 0.3 },
      { label: "Gulf of Mexico", value: 0.6 },
      { label: "English Channel", value: 6 },
      { label: "Bristol Channel (UK)", value: 12 },
      { label: "Bay of Fundy (Canada)", value: 16 }
    ]
  },
  {
    instruction: "Lowest to highest carbohydrate per 100g (grams)",
    category: "Foods by Carbohydrate Content",
    items: [
      { label: "Spinach", value: 1.4 },
      { label: "Strawberry", value: 7.7 },
      { label: "Sweet Potato", value: 20 },
      { label: "White Bread", value: 49 },
      { label: "Honey", value: 82 }
    ]
  },
  {
    instruction: "Shortest to longest highway (km)",
    category: "Highways by Length",
    items: [
      { label: "Autobahn A555 (Germany, first autobahn)", value: 20 },
      { label: "US Route 66 (original)", value: 3940 },
      { label: "Trans-Siberian Highway (Russia)", value: 11000 },
      { label: "Trans-Canada Highway", value: 12000 },
      { label: "Pan-American Highway", value: 48000 }
    ]
  },
  {
    instruction: "Fewest to most career wins (golf, PGA Tour)",
    category: "Golfers by PGA Tour Wins",
    items: [
      { label: "Phil Mickelson", value: 45 },
      { label: "Arnold Palmer", value: 62 },
      { label: "Jack Nicklaus", value: 73 },
      { label: "Tiger Woods", value: 82 },
      { label: "Sam Snead", value: 82.1 }
    ]
  },
  {
    instruction: "Slowest to fastest animal heartbeat (bpm)",
    category: "Animals by Heart Rate",
    items: [
      { label: "Blue Whale", value: 6 },
      { label: "Elephant", value: 30 },
      { label: "Human (resting)", value: 72 },
      { label: "Chicken", value: 275 },
      { label: "Hummingbird", value: 1200 }
    ]
  },
  {
    instruction: "Shortest to longest commercial flight (hours)",
    category: "Airline Routes by Flight Duration",
    items: [
      { label: "New York to Boston", value: 1.2 },
      { label: "London to Paris", value: 1.3 },
      { label: "New York to London", value: 7.5 },
      { label: "Los Angeles to Sydney", value: 15 },
      { label: "Singapore to New York (nonstop)", value: 18.5 }
    ]
  },
  {
    instruction: "Lowest to highest annual rainfall on a continent (mm average)",
    category: "Continents by Average Annual Rainfall",
    items: [
      { label: "Antarctica", value: 166 },
      { label: "Australia", value: 470 },
      { label: "Africa", value: 678 },
      { label: "North America", value: 756 },
      { label: "South America", value: 1564 }
    ]
  },
  {
    instruction: "Fewest to most career saves (baseball)",
    category: "MLB Closers by Career Saves",
    items: [
      { label: "Dennis Eckersley", value: 390 },
      { label: "Trevor Hoffman", value: 601 },
      { label: "Lee Smith", value: 478 },
      { label: "Francisco Rodriguez", value: 437 },
      { label: "Mariano Rivera", value: 652 }
    ]
  },
  {
    instruction: "Smallest to largest sand dune height (meters)",
    category: "Sand Dunes by Height",
    items: [
      { label: "Indiana Dunes (USA)", value: 60 },
      { label: "Dune of Pilat (France)", value: 110 },
      { label: "Cerro Blanco (Peru)", value: 1176 },
      { label: "Badain Jaran Dunes (China)", value: 500 },
      { label: "Star Dune (Sahara)", value: 450 }
    ]
  },
  {
    instruction: "Fewest to most islands",
    category: "Countries by Number of Islands",
    items: [
      { label: "Japan", value: 6852 },
      { label: "Philippines", value: 7641 },
      { label: "Canada", value: 52455 },
      { label: "Finland", value: 178947 },
      { label: "Sweden", value: 221831 }
    ]
  },
  {
    instruction: "Lowest to highest vitamin A per 100g (mcg)",
    category: "Foods by Vitamin A Content",
    items: [
      { label: "Apple", value: 3 },
      { label: "Egg", value: 149 },
      { label: "Mango", value: 180 },
      { label: "Carrot", value: 835 },
      { label: "Sweet Potato", value: 1043 }
    ]
  },
  {
    instruction: "Fewest to most lines of code (estimated, millions)",
    category: "Software Projects by Lines of Code",
    items: [
      { label: "Simple iPhone App", value: 0.05 },
      { label: "Photoshop CS6", value: 4.5 },
      { label: "Windows XP", value: 45 },
      { label: "Mac OS X Tiger", value: 86 },
      { label: "Google (all services combined)", value: 2000 }
    ]
  },
  {
    instruction: "Lightest to heaviest currency coin (grams)",
    category: "Coins by Weight",
    items: [
      { label: "US Dime", value: 2.3 },
      { label: "Euro 1-cent", value: 2.3 },
      { label: "British 1-pound", value: 8.75 },
      { label: "US Half Dollar", value: 11.3 },
      { label: "Australian 50-cent", value: 15.5 }
    ]
  },
  {
    instruction: "Lowest to highest number of languages spoken",
    category: "Countries by Number of Living Languages",
    items: [
      { label: "Iceland", value: 4 },
      { label: "Japan", value: 15 },
      { label: "Mexico", value: 289 },
      { label: "India", value: 447 },
      { label: "Papua New Guinea", value: 840 }
    ]
  },
  {
    instruction: "Shortest to longest snake venom effect time (hours to death untreated)",
    category: "Venomous Snakes by Time to Kill",
    items: [
      { label: "Blue Krait", value: 4 },
      { label: "King Cobra", value: 6 },
      { label: "Black Mamba", value: 7 },
      { label: "Eastern Brown Snake", value: 12 },
      { label: "Copperhead", value: 72 }
    ]
  },
  {
    instruction: "Lowest to highest daily calorie needs",
    category: "Animals by Daily Calorie Intake",
    items: [
      { label: "Mouse", value: 15 },
      { label: "Cat", value: 250 },
      { label: "Human (adult)", value: 2000 },
      { label: "Horse", value: 15000 },
      { label: "Elephant", value: 70000 }
    ]
  },
  {
    instruction: "Earliest to latest year of abolition of slavery",
    category: "Countries by Year Slavery Was Abolished",
    items: [
      { label: "Haiti", value: 1804 },
      { label: "United Kingdom", value: 1833 },
      { label: "France", value: 1848 },
      { label: "United States", value: 1865 },
      { label: "Brazil", value: 1888 }
    ]
  },
  {
    instruction: "Fewest to most nuclear warheads (estimated 2024)",
    category: "Countries by Nuclear Arsenal Size",
    items: [
      { label: "North Korea", value: 50 },
      { label: "Israel (estimated)", value: 90 },
      { label: "India", value: 172 },
      { label: "United States", value: 5500 },
      { label: "Russia", value: 6250 }
    ]
  },
  {
    instruction: "Lowest to highest average commute time (minutes one way)",
    category: "Cities by Average Commute Time",
    items: [
      { label: "Copenhagen", value: 21 },
      { label: "Berlin", value: 29 },
      { label: "New York City", value: 41 },
      { label: "Tokyo", value: 48 },
      { label: "Mumbai", value: 55 }
    ]
  },
  {
    instruction: "Fewest to most World Chess Championship titles",
    category: "Chess Players by World Championship Titles",
    items: [
      { label: "Bobby Fischer", value: 1 },
      { label: "Boris Spassky", value: 1.1 },
      { label: "Viswanathan Anand", value: 5 },
      { label: "Garry Kasparov", value: 6 },
      { label: "Emanuel Lasker", value: 5.1 }
    ]
  },
  {
    instruction: "Lowest to highest melting point of food (°C)",
    category: "Foods by Melting Point",
    items: [
      { label: "Ice Cream", value: -6 },
      { label: "Butter", value: 32 },
      { label: "Milk Chocolate", value: 34 },
      { label: "Dark Chocolate", value: 46 },
      { label: "Hard Candy", value: 160 }
    ]
  },
  {
    instruction: "Fewest to most career marathon wins",
    category: "Marathon Runners by Major Wins",
    items: [
      { label: "Haile Gebrselassie", value: 7 },
      { label: "Paula Radcliffe", value: 7.1 },
      { label: "Eliud Kipchoge", value: 15 },
      { label: "Bill Rodgers", value: 22 },
      { label: "Clarence DeMar", value: 7.2 }
    ]
  },
  {
    instruction: "Least to most venomous sea creature (LD50 scale, lower = more toxic)",
    category: "Marine Animals by Venom Toxicity",
    items: [
      { label: "Lionfish", value: 5000 },
      { label: "Portuguese Man o' War", value: 1000 },
      { label: "Stonefish", value: 200 },
      { label: "Blue-Ringed Octopus", value: 25 },
      { label: "Box Jellyfish", value: 5 }
    ]
  },
  {
    instruction: "Lowest to highest gravity on a moon (m/s²)",
    category: "Moons by Surface Gravity",
    items: [
      { label: "Deimos (Mars)", value: 0.003 },
      { label: "Phobos (Mars)", value: 0.006 },
      { label: "Europa (Jupiter)", value: 1.31 },
      { label: "Moon (Earth)", value: 1.62 },
      { label: "Titan (Saturn)", value: 1.35 }
    ]
  },
  {
    instruction: "Fewest to most career rushing yards (NFL)",
    category: "NFL Running Backs by Career Rushing Yards",
    items: [
      { label: "LaDainian Tomlinson", value: 13684 },
      { label: "Barry Sanders", value: 15269 },
      { label: "Frank Gore", value: 16000 },
      { label: "Walter Payton", value: 16726 },
      { label: "Emmitt Smith", value: 18355 }
    ]
  },
  {
    instruction: "Smallest to largest eye",
    category: "Animals by Eye Diameter (mm)",
    items: [
      { label: "Ant", value: 0.08 },
      { label: "Goldfish", value: 5 },
      { label: "Human", value: 24 },
      { label: "Horse", value: 50 },
      { label: "Giant Squid", value: 270 }
    ]
  },
  {
    instruction: "Lowest to highest renewable energy percentage",
    category: "Countries by Renewable Energy Share (%)",
    items: [
      { label: "Japan", value: 21 },
      { label: "United States", value: 22 },
      { label: "Germany", value: 46 },
      { label: "Brazil", value: 83 },
      { label: "Iceland", value: 100 }
    ]
  },
  {
    instruction: "Smallest to largest pizza chain by number of stores",
    category: "Pizza Chains by Global Store Count",
    items: [
      { label: "Papa Murphy's", value: 1200 },
      { label: "Little Caesars", value: 4000 },
      { label: "Papa John's", value: 5500 },
      { label: "Pizza Hut", value: 18000 },
      { label: "Domino's", value: 19500 }
    ]
  },
  {
    instruction: "Shortest to longest bone healing time (weeks)",
    category: "Bone Fractures by Healing Time",
    items: [
      { label: "Finger (phalanx)", value: 4 },
      { label: "Wrist (radius)", value: 8 },
      { label: "Ankle (fibula)", value: 10 },
      { label: "Femur (thigh)", value: 16 },
      { label: "Tibia (shin)", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most career Grand Prix podiums (F1)",
    category: "F1 Drivers by Career Podium Finishes",
    items: [
      { label: "Niki Lauda", value: 54 },
      { label: "Ayrton Senna", value: 80 },
      { label: "Sebastian Vettel", value: 122 },
      { label: "Michael Schumacher", value: 155 },
      { label: "Lewis Hamilton", value: 197 }
    ]
  },
  {
    instruction: "Lowest to highest omega-3 per 100g (grams)",
    category: "Fish by Omega-3 Content",
    items: [
      { label: "Tilapia", value: 0.2 },
      { label: "Cod", value: 0.3 },
      { label: "Tuna (canned)", value: 0.7 },
      { label: "Sardines", value: 1.5 },
      { label: "Mackerel", value: 2.6 }
    ]
  },
  {
    instruction: "Fewest to most career knockouts (boxing)",
    category: "Boxers by Career Knockouts",
    items: [
      { label: "Floyd Mayweather Jr.", value: 27 },
      { label: "Muhammad Ali", value: 37 },
      { label: "Mike Tyson", value: 44 },
      { label: "George Foreman", value: 68 },
      { label: "Archie Moore", value: 131 }
    ]
  },
  {
    instruction: "Lowest to highest number of official languages",
    category: "Countries by Official Languages",
    items: [
      { label: "Japan", value: 1 },
      { label: "Canada", value: 2 },
      { label: "Switzerland", value: 4 },
      { label: "India", value: 22 },
      { label: "South Africa", value: 11 }
    ]
  },
  {
    instruction: "Smallest to largest port by cargo volume (million TEU)",
    category: "Ports by Container Volume",
    items: [
      { label: "Los Angeles", value: 9 },
      { label: "Rotterdam (Netherlands)", value: 14 },
      { label: "Busan (South Korea)", value: 22 },
      { label: "Singapore", value: 37 },
      { label: "Shanghai", value: 47 }
    ]
  },
  {
    instruction: "Lowest to highest dam height (meters)",
    category: "Dams by Height",
    items: [
      { label: "Hoover Dam (USA)", value: 221 },
      { label: "Grand Dixence Dam (Switzerland)", value: 285 },
      { label: "Jinping-I Dam (China)", value: 305 },
      { label: "Nurek Dam (Tajikistan)", value: 300 },
      { label: "Rogun Dam (Tajikistan)", value: 335 }
    ]
  },
  {
    instruction: "Fewest to most career points (rugby, international)",
    category: "Rugby Union Players by International Points",
    items: [
      { label: "Jonah Lomu", value: 185 },
      { label: "Jonny Wilkinson", value: 1246 },
      { label: "Dan Carter", value: 1598 },
      { label: "Ronan O'Gara", value: 1083 },
      { label: "Neil Jenkins", value: 1090 }
    ]
  },
  {
    instruction: "Smallest to largest telescope mirror (meters)",
    category: "Telescopes by Primary Mirror Diameter",
    items: [
      { label: "Hubble Space Telescope", value: 2.4 },
      { label: "Hale Telescope (Palomar)", value: 5.1 },
      { label: "Keck Observatory", value: 10 },
      { label: "Gran Telescopio Canarias", value: 10.4 },
      { label: "Extremely Large Telescope (under construction)", value: 39 }
    ]
  },
  {
    instruction: "Fewest to most career wins (NASCAR)",
    category: "NASCAR Drivers by Career Wins",
    items: [
      { label: "Dale Earnhardt", value: 76 },
      { label: "Jeff Gordon", value: 93 },
      { label: "David Pearson", value: 105 },
      { label: "Richard Petty", value: 200 },
      { label: "Kyle Busch", value: 63 }
    ]
  },
  {
    instruction: "Lowest to highest annual milk production per cow (liters)",
    category: "Dairy Cow Breeds by Milk Yield",
    items: [
      { label: "Jersey", value: 6000 },
      { label: "Guernsey", value: 6500 },
      { label: "Brown Swiss", value: 9000 },
      { label: "Ayrshire", value: 9500 },
      { label: "Holstein", value: 10000 }
    ]
  },
  {
    instruction: "Fewest to most countries in a continent",
    category: "Continents by Number of Countries",
    items: [
      { label: "Australia/Oceania", value: 14 },
      { label: "South America", value: 12 },
      { label: "North America", value: 23 },
      { label: "Europe", value: 44 },
      { label: "Africa", value: 54 }
    ]
  },
  {
    instruction: "Lowest to highest wingspan of aircraft (meters)",
    category: "Aircraft by Wingspan",
    items: [
      { label: "Cessna 172", value: 11 },
      { label: "Boeing 737", value: 36 },
      { label: "Boeing 777", value: 65 },
      { label: "Airbus A380", value: 80 },
      { label: "Stratolaunch (Roc)", value: 117 }
    ]
  },
  {
    instruction: "Fewest to most craters visible from Earth",
    category: "Solar System Bodies by Crater Density",
    items: [
      { label: "Earth", value: 1 },
      { label: "Mars", value: 2 },
      { label: "Moon", value: 3 },
      { label: "Mercury", value: 4 },
      { label: "Callisto (Jupiter moon)", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most career blocked shots (NBA)",
    category: "NBA Players by Career Blocks",
    items: [
      { label: "David Robinson", value: 2954 },
      { label: "Tim Duncan", value: 3020 },
      { label: "Dikembe Mutombo", value: 3289 },
      { label: "Kareem Abdul-Jabbar", value: 3189 },
      { label: "Hakeem Olajuwon", value: 3830 }
    ]
  },
  {
    instruction: "Shortest to longest canal (km)",
    category: "Canals by Length",
    items: [
      { label: "Corinth Canal (Greece)", value: 6 },
      { label: "Suez Canal (Egypt)", value: 193 },
      { label: "Panama Canal", value: 82 },
      { label: "Erie Canal (USA)", value: 584 },
      { label: "Grand Canal (China)", value: 1776 }
    ]
  },
  {
    instruction: "Lowest to highest average temperature in January (°C)",
    category: "Cities by January Average Temperature",
    items: [
      { label: "Yakutsk (Russia)", value: -40 },
      { label: "Moscow", value: -10 },
      { label: "New York City", value: 0 },
      { label: "Los Angeles", value: 14 },
      { label: "Singapore", value: 26 }
    ]
  },
  {
    instruction: "Fewest to most career interceptions (NFL)",
    category: "NFL Defensive Backs by Career Interceptions",
    items: [
      { label: "Deion Sanders", value: 53 },
      { label: "Ed Reed", value: 64 },
      { label: "Rod Woodson", value: 71 },
      { label: "Emlen Tunnell", value: 79 },
      { label: "Paul Krause", value: 81 }
    ]
  },
  {
    instruction: "Smallest to largest active volcano by height (meters)",
    category: "Active Volcanoes by Height",
    items: [
      { label: "Stromboli (Italy)", value: 924 },
      { label: "Mount Etna (Italy)", value: 3357 },
      { label: "Mount Fuji (Japan)", value: 3776 },
      { label: "Mount Rainier (USA)", value: 4392 },
      { label: "Ojos del Salado (Chile-Argentina)", value: 6893 }
    ]
  },
  {
    instruction: "Fewest to most pages in the Harry Potter series",
    category: "Harry Potter Books by Page Count",
    items: [
      { label: "Philosopher's Stone", value: 223 },
      { label: "Chamber of Secrets", value: 251 },
      { label: "Prisoner of Azkaban", value: 317 },
      { label: "Half-Blood Prince", value: 607 },
      { label: "Order of the Phoenix", value: 766 }
    ]
  },
  {
    instruction: "Lowest to highest blood pressure systolic reading (normal range)",
    category: "Blood Pressure Categories (systolic mmHg)",
    items: [
      { label: "Low Blood Pressure", value: 85 },
      { label: "Normal", value: 110 },
      { label: "Elevated", value: 125 },
      { label: "High Blood Pressure Stage 1", value: 135 },
      { label: "Hypertensive Crisis", value: 180 }
    ]
  },
  {
    instruction: "Fewest to most characters in Chinese writing (common use)",
    category: "Languages by Common Character Set Size",
    items: [
      { label: "Hawaiian (letters)", value: 13 },
      { label: "English (letters)", value: 26 },
      { label: "Korean (Hangul jamo)", value: 51 },
      { label: "Japanese (hiragana + katakana)", value: 92 },
      { label: "Chinese (commonly used)", value: 3500 }
    ]
  },
  {
    instruction: "Lowest to highest electricity consumption per capita (kWh/year)",
    category: "Countries by Electricity Use Per Capita",
    items: [
      { label: "India", value: 1181 },
      { label: "Brazil", value: 2600 },
      { label: "United Kingdom", value: 4500 },
      { label: "United States", value: 12150 },
      { label: "Iceland", value: 53000 }
    ]
  },
  {
    instruction: "Fewest to most career Tour de France stage wins",
    category: "Cyclists by Tour de France Stage Wins",
    items: [
      { label: "Jacques Anquetil", value: 16 },
      { label: "Bernard Hinault", value: 28 },
      { label: "André Leducq", value: 25 },
      { label: "Mark Cavendish", value: 35 },
      { label: "Eddy Merckx", value: 34 }
    ]
  },
  {
    instruction: "Shortest to longest gestation for mammals (days)",
    category: "Marine Mammals by Gestation Period",
    items: [
      { label: "Harbor Seal", value: 280 },
      { label: "Dolphin (bottlenose)", value: 365 },
      { label: "Walrus", value: 456 },
      { label: "Orca", value: 510 },
      { label: "Sperm Whale", value: 535 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of salt (g/L)",
    category: "Bodies of Water by Salinity",
    items: [
      { label: "Lake Michigan", value: 0.1 },
      { label: "Baltic Sea", value: 8 },
      { label: "Atlantic Ocean", value: 35 },
      { label: "Red Sea", value: 40 },
      { label: "Dead Sea", value: 340 }
    ]
  },
  {
    instruction: "Fewest to most career doubles (baseball)",
    category: "MLB Players by Career Doubles",
    items: [
      { label: "Cal Ripken Jr.", value: 603 },
      { label: "George Brett", value: 665 },
      { label: "Craig Biggio", value: 668 },
      { label: "Pete Rose", value: 746 },
      { label: "Tris Speaker", value: 792 }
    ]
  },
  {
    instruction: "Smallest to largest penguin species (cm height)",
    category: "Penguins by Height",
    items: [
      { label: "Little Blue Penguin", value: 33 },
      { label: "Galápagos Penguin", value: 50 },
      { label: "African Penguin", value: 63 },
      { label: "Chinstrap Penguin", value: 72 },
      { label: "Emperor Penguin", value: 115 }
    ]
  },
  {
    instruction: "Lowest to highest literacy rate (%)",
    category: "Countries by Literacy Rate",
    items: [
      { label: "Chad", value: 22 },
      { label: "Ethiopia", value: 52 },
      { label: "India", value: 74 },
      { label: "Brazil", value: 93 },
      { label: "South Korea", value: 98 }
    ]
  },
  {
    instruction: "Fewest to most career sacks (NFL)",
    category: "NFL Players by Career Sacks",
    items: [
      { label: "Michael Strahan", value: 141 },
      { label: "Reggie White", value: 198 },
      { label: "Kevin Greene", value: 160 },
      { label: "T.J. Watt", value: 102 },
      { label: "Bruce Smith", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest price per kilogram (2024 USD)",
    category: "Common Metals by Price",
    items: [
      { label: "Iron (steel scrap)", value: 0.4 },
      { label: "Aluminum", value: 2.5 },
      { label: "Copper", value: 8 },
      { label: "Titanium", value: 35 },
      { label: "Platinum", value: 30000 }
    ]
  },
  {
    instruction: "Fewest to most Tour de France overall wins",
    category: "Cyclists by Tour de France Victories",
    items: [
      { label: "Tadej Pogačar", value: 2 },
      { label: "Alberto Contador", value: 2.1 },
      { label: "Chris Froome", value: 4 },
      { label: "Bernard Hinault", value: 5 },
      { label: "Jacques Anquetil", value: 5.1 }
    ]
  },
  {
    instruction: "Shortest to longest average song on a famous album (minutes)",
    category: "Albums by Average Track Length",
    items: [
      { label: "Ramones (Ramones)", value: 2.1 },
      { label: "Nevermind (Nirvana)", value: 3.5 },
      { label: "Abbey Road (Beatles)", value: 3.7 },
      { label: "The Dark Side of the Moon (Pink Floyd)", value: 5.3 },
      { label: "OK Computer (Radiohead)", value: 5.0 }
    ]
  },
  {
    instruction: "Lowest to highest number of subway stations",
    category: "Cities by Number of Metro Stations",
    items: [
      { label: "Dubai", value: 53 },
      { label: "London", value: 272 },
      { label: "Tokyo", value: 290 },
      { label: "Seoul", value: 340 },
      { label: "New York City", value: 472 }
    ]
  },
  {
    instruction: "Smallest to largest bear species by weight (kg)",
    category: "Bears by Average Weight",
    items: [
      { label: "Sun Bear", value: 45 },
      { label: "Spectacled Bear", value: 100 },
      { label: "Black Bear", value: 120 },
      { label: "Grizzly Bear", value: 360 },
      { label: "Polar Bear", value: 500 }
    ]
  },
  {
    instruction: "Lowest to highest annual beer consumption per capita (liters)",
    category: "Countries by Beer Consumption",
    items: [
      { label: "Italy", value: 34 },
      { label: "United States", value: 72 },
      { label: "Germany", value: 92 },
      { label: "Austria", value: 106 },
      { label: "Czech Republic", value: 141 }
    ]
  },
  {
    instruction: "Fewest to most World Series MVP awards",
    category: "MLB Players by World Series MVP Awards",
    items: [
      { label: "Derek Jeter", value: 1 },
      { label: "Sandy Koufax", value: 2 },
      { label: "Bob Gibson", value: 2.1 },
      { label: "Reggie Jackson", value: 2.2 },
      { label: "Mariano Rivera", value: 1.1 }
    ]
  },
  {
    instruction: "Lowest to highest elevation capital city (meters)",
    category: "Capital Cities by Elevation",
    items: [
      { label: "Jakarta (Indonesia)", value: 8 },
      { label: "Washington D.C. (USA)", value: 22 },
      { label: "Madrid (Spain)", value: 667 },
      { label: "Addis Ababa (Ethiopia)", value: 2355 },
      { label: "La Paz (Bolivia)", value: 3640 }
    ]
  },
  {
    instruction: "Fewest to most Nobel Prizes in Physics",
    category: "Institutions by Nobel Prizes in Physics",
    items: [
      { label: "Princeton University", value: 7 },
      { label: "Caltech", value: 8 },
      { label: "Stanford University", value: 9 },
      { label: "University of Cambridge", value: 11 },
      { label: "MIT", value: 12 }
    ]
  },
  {
    instruction: "Lowest to highest protein per serving in nuts (grams per 28g)",
    category: "Nuts by Protein Content",
    items: [
      { label: "Macadamia", value: 2.2 },
      { label: "Cashew", value: 4.3 },
      { label: "Walnut", value: 4.3 },
      { label: "Pistachio", value: 5.7 },
      { label: "Peanut", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most recorded earthquakes per year (magnitude 4+)",
    category: "Countries by Annual Earthquakes",
    items: [
      { label: "United Kingdom", value: 3 },
      { label: "Italy", value: 50 },
      { label: "Chile", value: 200 },
      { label: "Indonesia", value: 400 },
      { label: "Japan", value: 1500 }
    ]
  },
  {
    instruction: "Shortest to longest rail network (km)",
    category: "Countries by Railway Length",
    items: [
      { label: "Switzerland", value: 5196 },
      { label: "Japan", value: 27311 },
      { label: "Germany", value: 33440 },
      { label: "India", value: 68525 },
      { label: "United States", value: 150462 }
    ]
  },
  {
    instruction: "Fewest to most career wins in Grand Slam finals (tennis)",
    category: "Female Tennis Players by Grand Slam Singles Titles",
    items: [
      { label: "Venus Williams", value: 7 },
      { label: "Billie Jean King", value: 12 },
      { label: "Steffi Graf", value: 22 },
      { label: "Serena Williams", value: 23 },
      { label: "Margaret Court", value: 24 }
    ]
  },
  {
    instruction: "Lowest to highest average snowfall per year (cm)",
    category: "Cities by Annual Snowfall",
    items: [
      { label: "London (UK)", value: 5 },
      { label: "Tokyo", value: 12 },
      { label: "Chicago", value: 91 },
      { label: "Moscow", value: 152 },
      { label: "Sapporo (Japan)", value: 597 }
    ]
  }
];
