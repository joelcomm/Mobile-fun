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
  },
  {
    instruction: "Smallest to largest GDP (trillion USD, nominal 2023)",
    category: "Countries by GDP",
    items: [
      { label: "New Zealand", value: 0.25 },
      { label: "Sweden", value: 0.59 },
      { label: "Australia", value: 1.69 },
      { label: "United Kingdom", value: 3.33 },
      { label: "Germany", value: 4.46 }
    ]
  },
  {
    instruction: "Smallest to largest area (thousand km²)",
    category: "Countries by Area",
    items: [
      { label: "Japan", value: 378 },
      { label: "France", value: 640 },
      { label: "India", value: 3287 },
      { label: "Brazil", value: 8516 },
      { label: "Russia", value: 17098 }
    ]
  },
  {
    instruction: "Shortest to longest coastline (km)",
    category: "Countries by Coastline Length",
    items: [
      { label: "South Africa", value: 2798 },
      { label: "Brazil", value: 7491 },
      { label: "Australia", value: 25760 },
      { label: "Norway", value: 58133 },
      { label: "Canada", value: 202080 }
    ]
  },
  {
    instruction: "Lowest to highest point above sea level (m)",
    category: "Countries by Highest Point",
    items: [
      { label: "Denmark (Møllehøj)", value: 171 },
      { label: "Australia (Mt Kosciuszko)", value: 2228 },
      { label: "Japan (Mt Fuji)", value: 3776 },
      { label: "Argentina (Aconcagua)", value: 6961 },
      { label: "Nepal (Mt Everest)", value: 8849 }
    ]
  },
  {
    instruction: "Fewest to most time zones",
    category: "Countries by Number of Time Zones",
    items: [
      { label: "Japan", value: 1 },
      { label: "Brazil", value: 4 },
      { label: "Australia", value: 5 },
      { label: "Russia", value: 11 },
      { label: "France", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO World Heritage Sites",
    category: "Countries by UNESCO Sites",
    items: [
      { label: "Mexico", value: 35 },
      { label: "United Kingdom", value: 35 },
      { label: "Germany", value: 52 },
      { label: "China", value: 57 },
      { label: "Italy", value: 59 }
    ]
  },
  {
    instruction: "Fewest to most national parks",
    category: "Countries by Number of National Parks",
    items: [
      { label: "Japan", value: 34 },
      { label: "United Kingdom", value: 42 },
      { label: "United States", value: 63 },
      { label: "Indonesia", value: 65 },
      { label: "Australia", value: 685 }
    ]
  },
  {
    instruction: "Fewest to most Olympic gold medals (all time)",
    category: "Countries by Olympic Gold Medals",
    items: [
      { label: "South Korea", value: 96 },
      { label: "China", value: 285 },
      { label: "France", value: 306 },
      { label: "Great Britain", value: 310 },
      { label: "United States", value: 1180 }
    ]
  },
  {
    instruction: "Fewest to most Nobel Prize winners",
    category: "Countries by Nobel Prizes",
    items: [
      { label: "Japan", value: 29 },
      { label: "France", value: 72 },
      { label: "Germany", value: 112 },
      { label: "United Kingdom", value: 138 },
      { label: "United States", value: 409 }
    ]
  },
  {
    instruction: "Lowest to highest internet penetration (%)",
    category: "Countries by Internet Users Percentage",
    items: [
      { label: "Nigeria", value: 55 },
      { label: "India", value: 60 },
      { label: "Brazil", value: 81 },
      { label: "Japan", value: 93 },
      { label: "Denmark", value: 99 }
    ]
  },
  {
    instruction: "Lowest to highest CO₂ emissions per capita (tons/year)",
    category: "Countries by CO₂ Emissions Per Capita",
    items: [
      { label: "India", value: 1.9 },
      { label: "Brazil", value: 2.3 },
      { label: "United Kingdom", value: 5.2 },
      { label: "Germany", value: 8.1 },
      { label: "United States", value: 14.3 }
    ]
  },
  {
    instruction: "Lowest to highest forest coverage (% of land area)",
    category: "Countries by Forest Coverage",
    items: [
      { label: "Egypt", value: 0.1 },
      { label: "Australia", value: 17 },
      { label: "United States", value: 34 },
      { label: "Brazil", value: 59 },
      { label: "Suriname", value: 93 }
    ]
  },
  {
    instruction: "Lowest to highest renewable energy share (%)",
    category: "Countries by Renewable Energy Percentage",
    items: [
      { label: "Japan", value: 12 },
      { label: "United States", value: 21 },
      { label: "Germany", value: 46 },
      { label: "Brazil", value: 83 },
      { label: "Norway", value: 98 }
    ]
  },
  {
    instruction: "Lowest to highest life expectancy (years)",
    category: "Countries by Life Expectancy",
    items: [
      { label: "Nigeria", value: 53 },
      { label: "India", value: 70 },
      { label: "United States", value: 77 },
      { label: "Germany", value: 81 },
      { label: "Japan", value: 84 }
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
      { label: "South Korea", value: 99 }
    ]
  },
  {
    instruction: "Smallest to largest city population (metro, millions)",
    category: "Cities by Population",
    items: [
      { label: "Rome", value: 4.3 },
      { label: "London", value: 9.5 },
      { label: "Mumbai", value: 21 },
      { label: "Shanghai", value: 28 },
      { label: "Tokyo", value: 37 }
    ]
  },
  {
    instruction: "Lowest to highest city elevation (meters above sea level)",
    category: "Cities by Elevation",
    items: [
      { label: "Amsterdam", value: -2 },
      { label: "Tokyo", value: 40 },
      { label: "Denver", value: 1609 },
      { label: "Bogotá", value: 2640 },
      { label: "La Paz", value: 3640 }
    ]
  },
  {
    instruction: "Newest to oldest founding date",
    category: "Cities by Age (Oldest to Youngest)",
    items: [
      { label: "Canberra (1913)", value: 1 },
      { label: "Washington D.C. (1790)", value: 2 },
      { label: "London (~43 AD)", value: 3 },
      { label: "Athens (~3000 BC)", value: 4 },
      { label: "Damascus (~10000 BC)", value: 5 }
    ]
  },
  {
    instruction: "Least to most annual rainfall (mm)",
    category: "Cities by Annual Rainfall",
    items: [
      { label: "Cairo", value: 25 },
      { label: "Los Angeles", value: 379 },
      { label: "Rome", value: 798 },
      { label: "Tokyo", value: 1530 },
      { label: "Mumbai", value: 2422 }
    ]
  },
  {
    instruction: "Cheapest to most expensive (cost of living index)",
    category: "Cities by Cost of Living",
    items: [
      { label: "Cairo", value: 27 },
      { label: "Delhi", value: 30 },
      { label: "Mexico City", value: 37 },
      { label: "London", value: 78 },
      { label: "Zurich", value: 106 }
    ]
  },
  {
    instruction: "Fewest to most subway/metro stations",
    category: "Cities by Number of Metro Stations",
    items: [
      { label: "Dubai", value: 53 },
      { label: "Tokyo", value: 179 },
      { label: "Moscow", value: 259 },
      { label: "Beijing", value: 459 },
      { label: "Shanghai", value: 508 }
    ]
  },
  {
    instruction: "Fewest to most buildings over 150m tall",
    category: "Cities by Number of Skyscrapers",
    items: [
      { label: "London", value: 24 },
      { label: "Chicago", value: 53 },
      { label: "New York", value: 95 },
      { label: "Dubai", value: 116 },
      { label: "Hong Kong", value: 179 }
    ]
  },
  {
    instruction: "Slowest to fastest (km/h)",
    category: "Animals by Top Speed",
    items: [
      { label: "Garden Snail", value: 0.05 },
      { label: "Tortoise", value: 0.3 },
      { label: "Chicken", value: 14 },
      { label: "Greyhound", value: 74 },
      { label: "Cheetah", value: 120 }
    ]
  },
  {
    instruction: "Lightest to heaviest (kg)",
    category: "Animals by Weight",
    items: [
      { label: "Hummingbird", value: 0.004 },
      { label: "Rabbit", value: 2 },
      { label: "Wolf", value: 45 },
      { label: "Horse", value: 500 },
      { label: "Elephant", value: 6000 }
    ]
  },
  {
    instruction: "Shortest to longest lifespan (years)",
    category: "Animals by Lifespan",
    items: [
      { label: "Mayfly", value: 0.003 },
      { label: "Mouse", value: 2 },
      { label: "Dog", value: 13 },
      { label: "Elephant", value: 70 },
      { label: "Bowhead Whale", value: 200 }
    ]
  },
  {
    instruction: "Shortest to longest gestation period (days)",
    category: "Animals by Gestation Period",
    items: [
      { label: "Opossum", value: 13 },
      { label: "Rabbit", value: 31 },
      { label: "Dog", value: 63 },
      { label: "Human", value: 270 },
      { label: "Elephant", value: 660 }
    ]
  },
  {
    instruction: "Fewest to most teeth",
    category: "Animals by Number of Teeth",
    items: [
      { label: "Anteater", value: 0 },
      { label: "Human", value: 32 },
      { label: "Dog", value: 42 },
      { label: "Crocodile", value: 80 },
      { label: "Garden Snail", value: 14000 }
    ]
  },
  {
    instruction: "Slowest to fastest resting heart rate (bpm)",
    category: "Animals by Heart Rate",
    items: [
      { label: "Blue Whale", value: 8 },
      { label: "Elephant", value: 30 },
      { label: "Human", value: 72 },
      { label: "Cat", value: 140 },
      { label: "Hummingbird", value: 1260 }
    ]
  },
  {
    instruction: "Smallest to largest brain (grams)",
    category: "Animals by Brain Size",
    items: [
      { label: "Ant", value: 0.001 },
      { label: "Goldfish", value: 0.1 },
      { label: "Cat", value: 30 },
      { label: "Human", value: 1400 },
      { label: "Sperm Whale", value: 7800 }
    ]
  },
  {
    instruction: "Fewest to most calories per 100g",
    category: "Foods by Calories",
    items: [
      { label: "Cucumber", value: 15 },
      { label: "Apple", value: 52 },
      { label: "Banana", value: 89 },
      { label: "Bread", value: 265 },
      { label: "Olive Oil", value: 884 }
    ]
  },
  {
    instruction: "Least to most protein per 100g (grams)",
    category: "Foods by Protein Content",
    items: [
      { label: "Apple", value: 0.3 },
      { label: "Rice (cooked)", value: 2.7 },
      { label: "Egg", value: 13 },
      { label: "Chicken Breast", value: 31 },
      { label: "Parmesan Cheese", value: 38 }
    ]
  },
  {
    instruction: "Least to most fat per 100g (grams)",
    category: "Foods by Fat Content",
    items: [
      { label: "Carrot", value: 0.2 },
      { label: "Banana", value: 0.3 },
      { label: "Egg", value: 11 },
      { label: "Cheddar Cheese", value: 33 },
      { label: "Butter", value: 81 }
    ]
  },
  {
    instruction: "Least to most sugar per 100g (grams)",
    category: "Foods by Sugar Content",
    items: [
      { label: "Spinach", value: 0.4 },
      { label: "Lemon", value: 2.5 },
      { label: "Milk", value: 5 },
      { label: "Apple", value: 10 },
      { label: "Honey", value: 82 }
    ]
  },
  {
    instruction: "Least to most fiber per 100g (grams)",
    category: "Foods by Fiber Content",
    items: [
      { label: "White Rice", value: 0.4 },
      { label: "Apple", value: 2.4 },
      { label: "Broccoli", value: 2.6 },
      { label: "Lentils", value: 8 },
      { label: "Chia Seeds", value: 34 }
    ]
  },
  {
    instruction: "Least to most vitamin C per 100g (mg)",
    category: "Foods by Vitamin C",
    items: [
      { label: "Banana", value: 9 },
      { label: "Lemon", value: 53 },
      { label: "Strawberry", value: 59 },
      { label: "Kiwi", value: 93 },
      { label: "Red Bell Pepper", value: 128 }
    ]
  },
  {
    instruction: "Least to most iron per 100g (mg)",
    category: "Foods by Iron Content",
    items: [
      { label: "Banana", value: 0.3 },
      { label: "Egg", value: 1.8 },
      { label: "Beef", value: 2.6 },
      { label: "Spinach", value: 2.7 },
      { label: "Dark Chocolate", value: 12 }
    ]
  },
  {
    instruction: "Least to most water content (%)",
    category: "Foods by Water Content",
    items: [
      { label: "Crackers", value: 3 },
      { label: "Bread", value: 36 },
      { label: "Banana", value: 75 },
      { label: "Apple", value: 86 },
      { label: "Watermelon", value: 92 }
    ]
  },
  {
    instruction: "Shortest to longest typical shelf life (days)",
    category: "Foods by Shelf Life",
    items: [
      { label: "Fresh Fish", value: 2 },
      { label: "Milk", value: 7 },
      { label: "Eggs", value: 35 },
      { label: "Potatoes", value: 90 },
      { label: "Honey", value: 36500 }
    ]
  },
  {
    instruction: "Smallest to largest playing field (m²)",
    category: "Sports by Field/Court Size",
    items: [
      { label: "Table Tennis", value: 4 },
      { label: "Boxing Ring", value: 37 },
      { label: "Basketball Court", value: 420 },
      { label: "Tennis Court", value: 524 },
      { label: "Soccer/Football Pitch", value: 7140 }
    ]
  },
  {
    instruction: "Fewest to most players per team (on field)",
    category: "Sports by Team Size",
    items: [
      { label: "Tennis (singles)", value: 1 },
      { label: "Beach Volleyball", value: 2 },
      { label: "Basketball", value: 5 },
      { label: "Soccer/Football", value: 11 },
      { label: "Rugby Union", value: 15 }
    ]
  },
  {
    instruction: "Shortest to longest typical game duration (minutes)",
    category: "Sports by Game Duration",
    items: [
      { label: "100m Sprint", value: 0.17 },
      { label: "Boxing Round", value: 3 },
      { label: "Basketball Game", value: 48 },
      { label: "Soccer Match", value: 90 },
      { label: "Test Cricket (max)", value: 1800 }
    ]
  },
  {
    instruction: "Lightest to heaviest ball (grams)",
    category: "Sports by Ball Weight",
    items: [
      { label: "Table Tennis", value: 2.7 },
      { label: "Golf", value: 46 },
      { label: "Tennis", value: 58 },
      { label: "Baseball", value: 145 },
      { label: "Basketball", value: 624 }
    ]
  },
  {
    instruction: "Fewest to most transistors (billions)",
    category: "Processors by Transistor Count",
    items: [
      { label: "Intel Pentium 4 (2000)", value: 0.042 },
      { label: "Intel Core i7 (2008)", value: 0.731 },
      { label: "Apple A14 (2020)", value: 11.8 },
      { label: "Apple M2 Ultra (2023)", value: 134 },
      { label: "NVIDIA H100 (2022)", value: 80 }
    ]
  },
  {
    instruction: "Fewest to most monthly active users (billions, 2023)",
    category: "Social Media Platforms by Users",
    items: [
      { label: "Twitter/X", value: 0.37 },
      { label: "TikTok", value: 1.2 },
      { label: "Instagram", value: 2.0 },
      { label: "YouTube", value: 2.5 },
      { label: "Facebook", value: 3.0 }
    ]
  },
  {
    instruction: "Lowest to highest annual revenue (billion USD, 2023)",
    category: "Tech Companies by Revenue",
    items: [
      { label: "Netflix", value: 34 },
      { label: "Meta", value: 135 },
      { label: "Alphabet (Google)", value: 307 },
      { label: "Amazon", value: 575 },
      { label: "Apple", value: 383 }
    ]
  },
  {
    instruction: "Earliest to latest invention date",
    category: "Communication Technologies by Year",
    items: [
      { label: "Telegraph", value: 1837 },
      { label: "Radio", value: 1895 },
      { label: "Television", value: 1927 },
      { label: "Internet (ARPANET)", value: 1969 },
      { label: "World Wide Web", value: 1991 }
    ]
  },
  {
    instruction: "Smallest to largest screen size (inches, flagship)",
    category: "Smartphones by Screen Size",
    items: [
      { label: "iPhone 5 (2012)", value: 4.0 },
      { label: "iPhone 8 (2017)", value: 4.7 },
      { label: "Galaxy S21 (2021)", value: 6.2 },
      { label: "iPhone 15 Pro Max", value: 6.7 },
      { label: "Galaxy S24 Ultra", value: 6.8 }
    ]
  },
  {
    instruction: "Lowest to highest atomic number",
    category: "Elements by Atomic Number",
    items: [
      { label: "Hydrogen", value: 1 },
      { label: "Carbon", value: 6 },
      { label: "Iron", value: 26 },
      { label: "Silver", value: 47 },
      { label: "Gold", value: 79 }
    ]
  },
  {
    instruction: "Lowest to highest boiling point (°C)",
    category: "Elements by Boiling Point",
    items: [
      { label: "Helium", value: -269 },
      { label: "Nitrogen", value: -196 },
      { label: "Mercury", value: 357 },
      { label: "Iron", value: 2862 },
      { label: "Tungsten", value: 5555 }
    ]
  },
  {
    instruction: "Least to most dense (g/cm³)",
    category: "Elements by Density",
    items: [
      { label: "Lithium", value: 0.53 },
      { label: "Sodium", value: 0.97 },
      { label: "Aluminum", value: 2.7 },
      { label: "Iron", value: 7.87 },
      { label: "Osmium", value: 22.6 }
    ]
  },
  {
    instruction: "Softest to hardest (Mohs scale)",
    category: "Minerals by Hardness",
    items: [
      { label: "Talc", value: 1 },
      { label: "Gypsum", value: 2 },
      { label: "Calcite", value: 3 },
      { label: "Quartz", value: 7 },
      { label: "Diamond", value: 10 }
    ]
  },
  {
    instruction: "Lowest to highest thermal conductivity (W/m·K)",
    category: "Materials by Thermal Conductivity",
    items: [
      { label: "Wood", value: 0.12 },
      { label: "Glass", value: 1.0 },
      { label: "Steel", value: 50 },
      { label: "Aluminum", value: 237 },
      { label: "Diamond", value: 2000 }
    ]
  },
  {
    instruction: "Closest to farthest from Earth (million km, average)",
    category: "Planets by Distance from Earth",
    items: [
      { label: "Venus", value: 42 },
      { label: "Mars", value: 78 },
      { label: "Jupiter", value: 628 },
      { label: "Saturn", value: 1275 },
      { label: "Neptune", value: 4347 }
    ]
  },
  {
    instruction: "Smallest to largest diameter (km)",
    category: "Planets by Diameter",
    items: [
      { label: "Mercury", value: 4879 },
      { label: "Mars", value: 6792 },
      { label: "Earth", value: 12756 },
      { label: "Neptune", value: 49528 },
      { label: "Jupiter", value: 142984 }
    ]
  },
  {
    instruction: "Coldest to hottest surface temperature (°C average)",
    category: "Planets by Surface Temperature",
    items: [
      { label: "Neptune", value: -214 },
      { label: "Saturn", value: -178 },
      { label: "Jupiter", value: -145 },
      { label: "Mars", value: -63 },
      { label: "Venus", value: 464 }
    ]
  },
  {
    instruction: "Shortest to longest orbital period (Earth years)",
    category: "Planets by Orbital Period",
    items: [
      { label: "Mercury", value: 0.24 },
      { label: "Venus", value: 0.62 },
      { label: "Mars", value: 1.88 },
      { label: "Jupiter", value: 11.86 },
      { label: "Neptune", value: 164.8 }
    ]
  },
  {
    instruction: "Fewest to most moons",
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
    instruction: "Slowest to fastest BPM (typical tempo)",
    category: "Music Genres by Tempo",
    items: [
      { label: "Ambient", value: 60 },
      { label: "Hip Hop", value: 90 },
      { label: "Pop", value: 120 },
      { label: "House", value: 128 },
      { label: "Drum & Bass", value: 174 }
    ]
  },
  {
    instruction: "Fewest to most weeks on Billboard Hot 100 (single song)",
    category: "Songs by Billboard Chart Duration",
    items: [
      { label: "Bohemian Rhapsody (Queen)", value: 17 },
      { label: "Shape of You (Ed Sheeran)", value: 59 },
      { label: "Radioactive (Imagine Dragons)", value: 87 },
      { label: "Blinding Lights (The Weeknd)", value: 90 },
      { label: "Old Town Road (Lil Nas X)", value: 19 }
    ]
  },
  {
    instruction: "Lowest to highest range (number of notes playable)",
    category: "Musical Instruments by Range",
    items: [
      { label: "Bass Drum", value: 1 },
      { label: "Bugle", value: 5 },
      { label: "Trumpet", value: 34 },
      { label: "Violin", value: 52 },
      { label: "Piano", value: 88 }
    ]
  },
  {
    instruction: "Shortest to longest river (km)",
    category: "Rivers by Length",
    items: [
      { label: "Thames", value: 346 },
      { label: "Danube", value: 2860 },
      { label: "Mississippi", value: 3766 },
      { label: "Yangtze", value: 6300 },
      { label: "Nile", value: 6650 }
    ]
  },
  {
    instruction: "Smallest to largest lake by area (km²)",
    category: "Lakes by Surface Area",
    items: [
      { label: "Lake Geneva", value: 580 },
      { label: "Lake Erie", value: 25744 },
      { label: "Lake Victoria", value: 69485 },
      { label: "Lake Superior", value: 82100 },
      { label: "Caspian Sea", value: 371000 }
    ]
  },
  {
    instruction: "Shallowest to deepest ocean trench (m)",
    category: "Ocean Trenches by Depth",
    items: [
      { label: "Aleutian Trench", value: 7679 },
      { label: "Puerto Rico Trench", value: 8376 },
      { label: "Java Trench", value: 7450 },
      { label: "Tonga Trench", value: 10823 },
      { label: "Mariana Trench", value: 10994 }
    ]
  },
  {
    instruction: "Lowest to highest volcano (meters)",
    category: "Volcanoes by Height",
    items: [
      { label: "Mount Vesuvius", value: 1281 },
      { label: "Mount Etna", value: 3357 },
      { label: "Mount Fuji", value: 3776 },
      { label: "Mount Kilimanjaro", value: 5895 },
      { label: "Ojos del Salado", value: 6893 }
    ]
  },
  {
    instruction: "Smallest to largest desert (km²)",
    category: "Deserts by Area",
    items: [
      { label: "Mojave", value: 124000 },
      { label: "Kalahari", value: 900000 },
      { label: "Gobi", value: 1295000 },
      { label: "Arabian", value: 2330000 },
      { label: "Sahara", value: 9200000 }
    ]
  },
  {
    instruction: "Shortest to tallest waterfall (meters)",
    category: "Waterfalls by Height",
    items: [
      { label: "Niagara Falls", value: 51 },
      { label: "Victoria Falls", value: 108 },
      { label: "Yosemite Falls", value: 739 },
      { label: "Tugela Falls", value: 948 },
      { label: "Angel Falls", value: 979 }
    ]
  },
  {
    instruction: "Smallest to largest island (km²)",
    category: "Islands by Area",
    items: [
      { label: "Bali", value: 5780 },
      { label: "Iceland", value: 103000 },
      { label: "Great Britain", value: 229848 },
      { label: "Madagascar", value: 587041 },
      { label: "Greenland", value: 2166086 }
    ]
  },
  {
    instruction: "Lowest to highest mountain pass (meters)",
    category: "Mountain Passes by Elevation",
    items: [
      { label: "Brenner Pass (Alps)", value: 1370 },
      { label: "Gotthard Pass (Alps)", value: 2106 },
      { label: "Khyber Pass (Pakistan)", value: 1070 },
      { label: "Khardung La (India)", value: 5359 },
      { label: "Tanglang La (India)", value: 5328 }
    ]
  },
  {
    instruction: "Earliest to latest first human civilization",
    category: "Ancient Civilizations by Start Date",
    items: [
      { label: "Sumer (Mesopotamia)", value: -4500 },
      { label: "Ancient Egypt", value: -3100 },
      { label: "Indus Valley", value: -2600 },
      { label: "Ancient China (Shang)", value: -1600 },
      { label: "Ancient Greece", value: -800 }
    ]
  },
  {
    instruction: "Shortest to longest war duration (years)",
    category: "Wars by Duration",
    items: [
      { label: "Anglo-Zanzibar War", value: 0.001 },
      { label: "Six-Day War", value: 0.016 },
      { label: "Gulf War", value: 0.6 },
      { label: "World War I", value: 4.3 },
      { label: "Hundred Years' War", value: 116 }
    ]
  },
  {
    instruction: "Fewest to most casualties (millions)",
    category: "Wars by Casualties",
    items: [
      { label: "Falklands War", value: 0.001 },
      { label: "Korean War", value: 2.5 },
      { label: "World War I", value: 17 },
      { label: "World War II", value: 70 },
      { label: "Mongol Conquests", value: 40 }
    ]
  },
  {
    instruction: "Earliest to latest scientific discovery",
    category: "Scientific Discoveries by Year",
    items: [
      { label: "Gravity (Newton)", value: 1687 },
      { label: "Electricity (Faraday)", value: 1831 },
      { label: "X-rays (Röntgen)", value: 1895 },
      { label: "Penicillin (Fleming)", value: 1928 },
      { label: "DNA Structure (Watson & Crick)", value: 1953 }
    ]
  },
  {
    instruction: "Lowest to highest melting point (°C)",
    category: "Metals by Melting Point",
    items: [
      { label: "Mercury", value: -39 },
      { label: "Tin", value: 232 },
      { label: "Silver", value: 962 },
      { label: "Iron", value: 1538 },
      { label: "Tungsten", value: 3422 }
    ]
  },
  {
    instruction: "Lowest to highest electrical conductivity (MS/m)",
    category: "Metals by Electrical Conductivity",
    items: [
      { label: "Lead", value: 4.8 },
      { label: "Iron", value: 10 },
      { label: "Aluminum", value: 38 },
      { label: "Gold", value: 45 },
      { label: "Silver", value: 63 }
    ]
  },
  {
    instruction: "Lightest to heaviest land vehicle (kg)",
    category: "Vehicles by Weight",
    items: [
      { label: "Bicycle", value: 10 },
      { label: "Motorcycle", value: 200 },
      { label: "Sedan Car", value: 1500 },
      { label: "Fire Truck", value: 16000 },
      { label: "Loaded Semi Truck", value: 36000 }
    ]
  },
  {
    instruction: "Slowest to fastest aircraft (km/h)",
    category: "Aircraft by Top Speed",
    items: [
      { label: "Wright Flyer", value: 48 },
      { label: "Cessna 172", value: 302 },
      { label: "Boeing 747", value: 988 },
      { label: "Concorde", value: 2180 },
      { label: "SR-71 Blackbird", value: 3540 }
    ]
  },
  {
    instruction: "Smallest to largest wingspan (meters)",
    category: "Birds by Wingspan",
    items: [
      { label: "Hummingbird", value: 0.1 },
      { label: "Robin", value: 0.21 },
      { label: "Eagle", value: 2.0 },
      { label: "Condor", value: 3.2 },
      { label: "Wandering Albatross", value: 3.5 }
    ]
  },
  {
    instruction: "Shallowest to deepest diving animal (meters)",
    category: "Marine Animals by Dive Depth",
    items: [
      { label: "Sea Otter", value: 100 },
      { label: "Emperor Penguin", value: 565 },
      { label: "Leatherback Turtle", value: 1280 },
      { label: "Sperm Whale", value: 2250 },
      { label: "Cuvier's Beaked Whale", value: 2992 }
    ]
  },
  {
    instruction: "Shortest to tallest tree species (meters, max height)",
    category: "Trees by Maximum Height",
    items: [
      { label: "Bonsai (cultivated)", value: 0.3 },
      { label: "Japanese Maple", value: 10 },
      { label: "Oak", value: 35 },
      { label: "Douglas Fir", value: 75 },
      { label: "Coast Redwood", value: 116 }
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
    instruction: "Smallest to largest genome (billion base pairs)",
    category: "Organisms by Genome Size",
    items: [
      { label: "E. coli (bacteria)", value: 0.005 },
      { label: "Fruit Fly", value: 0.14 },
      { label: "Human", value: 3.1 },
      { label: "Axolotl", value: 32 },
      { label: "Paris japonica (plant)", value: 149 }
    ]
  },
  {
    instruction: "Lowest to highest pH",
    category: "Common Substances by pH",
    items: [
      { label: "Battery Acid", value: 0.5 },
      { label: "Lemon Juice", value: 2.0 },
      { label: "Coffee", value: 5.0 },
      { label: "Blood", value: 7.4 },
      { label: "Bleach", value: 12.5 }
    ]
  },
  {
    instruction: "Lowest to highest frequency (Hz)",
    category: "Sounds by Frequency",
    items: [
      { label: "Whale Song", value: 15 },
      { label: "Bass Guitar (low E)", value: 41 },
      { label: "Middle C (Piano)", value: 262 },
      { label: "Soprano High C", value: 1047 },
      { label: "Dog Whistle", value: 23000 }
    ]
  },
  {
    instruction: "Dimmest to brightest (absolute magnitude, reversed)",
    category: "Stars by Luminosity",
    items: [
      { label: "Proxima Centauri", value: 1 },
      { label: "Sun", value: 2 },
      { label: "Sirius", value: 3 },
      { label: "Betelgeuse", value: 4 },
      { label: "R136a1", value: 5 }
    ]
  },
  {
    instruction: "Nearest to farthest from Sun (AU)",
    category: "Dwarf Planets by Distance",
    items: [
      { label: "Ceres", value: 2.8 },
      { label: "Pluto", value: 39.5 },
      { label: "Haumea", value: 43.1 },
      { label: "Makemake", value: 45.8 },
      { label: "Eris", value: 67.7 }
    ]
  },
  {
    instruction: "Smallest to largest moon diameter (km)",
    category: "Solar System Moons by Diameter",
    items: [
      { label: "Deimos (Mars)", value: 12 },
      { label: "Phobos (Mars)", value: 22 },
      { label: "Europa (Jupiter)", value: 3122 },
      { label: "Titan (Saturn)", value: 5150 },
      { label: "Ganymede (Jupiter)", value: 5268 }
    ]
  },
  {
    instruction: "Fewest to most rings",
    category: "Countries by Number of Olympic Rings Sports",
    items: [
      { label: "Saturn (D ring)", value: 1 },
      { label: "Saturn (B ring)", value: 2 },
      { label: "Saturn (A ring)", value: 3 },
      { label: "Saturn (F ring)", value: 4 },
      { label: "Saturn (all major)", value: 7 }
    ]
  },
  {
    instruction: "Earliest to latest establishment",
    category: "Universities by Founding Year",
    items: [
      { label: "University of Bologna", value: 1088 },
      { label: "University of Oxford", value: 1096 },
      { label: "University of Cambridge", value: 1209 },
      { label: "Harvard University", value: 1636 },
      { label: "MIT", value: 1861 }
    ]
  },
  {
    instruction: "Smallest to largest economy in Africa (GDP, billion USD)",
    category: "African Countries by GDP",
    items: [
      { label: "Ethiopia", value: 127 },
      { label: "Kenya", value: 113 },
      { label: "Algeria", value: 195 },
      { label: "Egypt", value: 387 },
      { label: "Nigeria", value: 477 }
    ]
  },
  {
    instruction: "Lowest to highest minimum wage (USD/hour equivalent, 2023)",
    category: "Countries by Minimum Wage",
    items: [
      { label: "India", value: 0.28 },
      { label: "Mexico", value: 1.54 },
      { label: "Brazil", value: 1.60 },
      { label: "United Kingdom", value: 13.07 },
      { label: "Australia", value: 14.68 }
    ]
  },
  {
    instruction: "Fewest to most airports",
    category: "Countries by Number of Airports",
    items: [
      { label: "Singapore", value: 1 },
      { label: "United Kingdom", value: 46 },
      { label: "Germany", value: 539 },
      { label: "Mexico", value: 1714 },
      { label: "United States", value: 13513 }
    ]
  },
  {
    instruction: "Lowest to highest average IQ score (national estimate)",
    category: "Foods by Glycemic Index",
    items: [
      { label: "Peanuts", value: 13 },
      { label: "Apple", value: 36 },
      { label: "Brown Rice", value: 50 },
      { label: "White Bread", value: 75 },
      { label: "Glucose", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most species in animal class",
    category: "Animal Classes by Number of Species",
    items: [
      { label: "Mammals", value: 6400 },
      { label: "Reptiles", value: 11700 },
      { label: "Birds", value: 11000 },
      { label: "Fish", value: 35000 },
      { label: "Insects", value: 1000000 }
    ]
  },
  {
    instruction: "Least to most caffeine per 8 oz serving (mg)",
    category: "Beverages by Caffeine Content",
    items: [
      { label: "Decaf Coffee", value: 5 },
      { label: "Green Tea", value: 28 },
      { label: "Black Tea", value: 47 },
      { label: "Drip Coffee", value: 96 },
      { label: "Espresso (per 8 oz equiv.)", value: 212 }
    ]
  },
  {
    instruction: "Lowest to highest alcohol content (%)",
    category: "Alcoholic Beverages by ABV",
    items: [
      { label: "Light Beer", value: 3.5 },
      { label: "Wine (red)", value: 13.5 },
      { label: "Port Wine", value: 20 },
      { label: "Rum", value: 40 },
      { label: "Absinthe", value: 68 }
    ]
  },
  {
    instruction: "Least to most massive (solar masses)",
    category: "Stars by Mass",
    items: [
      { label: "Proxima Centauri", value: 0.12 },
      { label: "Sun", value: 1.0 },
      { label: "Sirius A", value: 2.06 },
      { label: "Rigel", value: 21 },
      { label: "R136a1", value: 196 }
    ]
  },
  {
    instruction: "Coolest to hottest star surface temperature (Kelvin)",
    category: "Stars by Surface Temperature",
    items: [
      { label: "Betelgeuse", value: 3500 },
      { label: "Sun", value: 5778 },
      { label: "Sirius A", value: 9940 },
      { label: "Rigel", value: 12100 },
      { label: "Spica", value: 22400 }
    ]
  },
  {
    instruction: "Lowest to highest calorie burn per hour (average person)",
    category: "Exercises by Calories Burned Per Hour",
    items: [
      { label: "Yoga", value: 183 },
      { label: "Walking (brisk)", value: 314 },
      { label: "Cycling (moderate)", value: 508 },
      { label: "Swimming (laps)", value: 590 },
      { label: "Running (8 mph)", value: 861 }
    ]
  },
  {
    instruction: "Least to most expensive spice (USD per kg)",
    category: "Spices by Price",
    items: [
      { label: "Black Pepper", value: 15 },
      { label: "Cinnamon", value: 25 },
      { label: "Cardamom", value: 60 },
      { label: "Vanilla", value: 600 },
      { label: "Saffron", value: 5000 }
    ]
  },
  {
    instruction: "Smallest to largest continent (km²)",
    category: "Continents by Area",
    items: [
      { label: "Australia/Oceania", value: 8526000 },
      { label: "Europe", value: 10180000 },
      { label: "Antarctica", value: 14200000 },
      { label: "Africa", value: 30370000 },
      { label: "Asia", value: 44580000 }
    ]
  },
  {
    instruction: "Lowest to highest elevation capital city (meters)",
    category: "Capital Cities by Elevation",
    items: [
      { label: "Baku (Azerbaijan)", value: -28 },
      { label: "Tokyo (Japan)", value: 40 },
      { label: "Madrid (Spain)", value: 667 },
      { label: "Addis Ababa (Ethiopia)", value: 2355 },
      { label: "La Paz (Bolivia)", value: 3640 }
    ]
  },
  {
    instruction: "Fewest to most islands in a country",
    category: "Countries by Number of Islands",
    items: [
      { label: "Japan", value: 6852 },
      { label: "Philippines", value: 7641 },
      { label: "Indonesia", value: 17508 },
      { label: "Finland", value: 178947 },
      { label: "Sweden", value: 267570 }
    ]
  },
  {
    instruction: "Lightest to heaviest dog breed (kg, average)",
    category: "Dog Breeds by Weight",
    items: [
      { label: "Chihuahua", value: 2 },
      { label: "Beagle", value: 11 },
      { label: "Labrador Retriever", value: 32 },
      { label: "German Shepherd", value: 34 },
      { label: "English Mastiff", value: 90 }
    ]
  },
  {
    instruction: "Shortest to longest snake (meters, max)",
    category: "Snakes by Maximum Length",
    items: [
      { label: "Barbados Threadsnake", value: 0.1 },
      { label: "Corn Snake", value: 1.8 },
      { label: "King Cobra", value: 5.5 },
      { label: "Burmese Python", value: 7.6 },
      { label: "Reticulated Python", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most legs",
    category: "Arthropods by Number of Legs",
    items: [
      { label: "Spider", value: 8 },
      { label: "Crab", value: 10 },
      { label: "Woodlouse", value: 14 },
      { label: "Centipede (house)", value: 30 },
      { label: "Millipede", value: 750 }
    ]
  },
  {
    instruction: "Fewest to most eyes",
    category: "Animals by Number of Eyes",
    items: [
      { label: "Starfish (no true eyes)", value: 0 },
      { label: "Cyclops (mythical)", value: 1 },
      { label: "Human", value: 2 },
      { label: "Spider (most species)", value: 8 },
      { label: "Scallop", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest average annual salary (USD, 2023)",
    category: "Professions by Average Salary",
    items: [
      { label: "Barista", value: 28000 },
      { label: "Teacher", value: 48000 },
      { label: "Registered Nurse", value: 81000 },
      { label: "Software Engineer", value: 120000 },
      { label: "Surgeon", value: 409000 }
    ]
  },
  {
    instruction: "Youngest to oldest billionaire (2023 age)",
    category: "Billionaires by Age in 2023",
    items: [
      { label: "Alexandr Wang (Scale AI)", value: 26 },
      { label: "Mark Zuckerberg", value: 39 },
      { label: "Elon Musk", value: 52 },
      { label: "Bill Gates", value: 68 },
      { label: "Warren Buffett", value: 93 }
    ]
  },
  {
    instruction: "Shortest to longest bridge (meters)",
    category: "Bridges by Length",
    items: [
      { label: "Rialto Bridge (Venice)", value: 48 },
      { label: "Golden Gate Bridge", value: 2737 },
      { label: "Akashi Kaikyo Bridge", value: 3911 },
      { label: "Bang Na Expressway (Bangkok)", value: 54000 },
      { label: "Danyang-Kunshan Grand Bridge", value: 164800 }
    ]
  },
  {
    instruction: "Shortest to tallest building (meters)",
    category: "Skyscrapers by Height",
    items: [
      { label: "Empire State Building", value: 443 },
      { label: "Petronas Towers", value: 452 },
      { label: "Shanghai Tower", value: 632 },
      { label: "Merdeka 118", value: 679 },
      { label: "Burj Khalifa", value: 828 }
    ]
  },
  {
    instruction: "Shortest to longest tunnel (km)",
    category: "Tunnels by Length",
    items: [
      { label: "Lincoln Tunnel (NYC)", value: 2.4 },
      { label: "Channel Tunnel (UK–France)", value: 50.5 },
      { label: "Gotthard Base Tunnel (Switzerland)", value: 57.1 },
      { label: "Seikan Tunnel (Japan)", value: 53.9 },
      { label: "Delaware Aqueduct (NYC water)", value: 137 }
    ]
  },
  {
    instruction: "Lightest to heaviest precious metal (g/cm³)",
    category: "Precious Metals by Density",
    items: [
      { label: "Silver", value: 10.5 },
      { label: "Palladium", value: 12.0 },
      { label: "Rhodium", value: 12.4 },
      { label: "Gold", value: 19.3 },
      { label: "Platinum", value: 21.5 }
    ]
  },
  {
    instruction: "Lowest to highest speed of sound in material (m/s)",
    category: "Materials by Speed of Sound",
    items: [
      { label: "Air (20°C)", value: 343 },
      { label: "Water", value: 1480 },
      { label: "Wood (oak)", value: 3850 },
      { label: "Steel", value: 5960 },
      { label: "Diamond", value: 12000 }
    ]
  },
  {
    instruction: "Fewest to most bones in the body",
    category: "Animals by Number of Bones",
    items: [
      { label: "Slug", value: 0 },
      { label: "Shark (cartilage)", value: 0 },
      { label: "Frog", value: 159 },
      { label: "Human", value: 206 },
      { label: "Snake (python)", value: 600 }
    ]
  },
  {
    instruction: "Lowest to highest vitamin D per 100g (IU)",
    category: "Foods by Vitamin D Content",
    items: [
      { label: "Egg", value: 87 },
      { label: "Canned Tuna", value: 236 },
      { label: "Salmon", value: 526 },
      { label: "Cod Liver Oil", value: 10000 },
      { label: "Dried Shiitake Mushroom", value: 1660 }
    ]
  },
  {
    instruction: "Lowest to highest potassium per 100g (mg)",
    category: "Foods by Potassium Content",
    items: [
      { label: "Apple", value: 107 },
      { label: "Carrot", value: 320 },
      { label: "Banana", value: 358 },
      { label: "Potato (baked)", value: 535 },
      { label: "Dried Apricots", value: 1162 }
    ]
  },
  {
    instruction: "Lowest to highest caffeine per bean (mg, average single bean)",
    category: "Coffee Varieties by Caffeine Per Bean",
    items: [
      { label: "Decaf Arabica", value: 0.07 },
      { label: "Arabica", value: 6 },
      { label: "Robusta", value: 10 },
      { label: "Excelsa", value: 11 },
      { label: "Liberica", value: 12 }
    ]
  },
  {
    instruction: "Smallest to largest country in Europe (km²)",
    category: "European Countries by Area",
    items: [
      { label: "Vatican City", value: 0.44 },
      { label: "Luxembourg", value: 2586 },
      { label: "Switzerland", value: 41285 },
      { label: "Germany", value: 357022 },
      { label: "France", value: 640679 }
    ]
  },
  {
    instruction: "Least to most densely populated (people/km²)",
    category: "Countries by Population Density",
    items: [
      { label: "Mongolia", value: 2 },
      { label: "Australia", value: 3 },
      { label: "United States", value: 36 },
      { label: "India", value: 464 },
      { label: "Singapore", value: 8358 }
    ]
  },
  {
    instruction: "Lowest to highest elevation city in Europe (meters)",
    category: "European Cities by Elevation",
    items: [
      { label: "Amsterdam", value: -2 },
      { label: "London", value: 11 },
      { label: "Munich", value: 519 },
      { label: "Madrid", value: 667 },
      { label: "Andorra la Vella", value: 1023 }
    ]
  },
  {
    instruction: "Fewest to most passengers per year (millions, 2023)",
    category: "Airports by Annual Passengers",
    items: [
      { label: "Singapore Changi", value: 59 },
      { label: "London Heathrow", value: 79 },
      { label: "Dubai International", value: 87 },
      { label: "Atlanta Hartsfield-Jackson", value: 104 },
      { label: "Istanbul Airport", value: 93 }
    ]
  },
  {
    instruction: "Lowest to highest Scoville heat units",
    category: "Peppers by Scoville Rating",
    items: [
      { label: "Bell Pepper", value: 0 },
      { label: "Jalapeño", value: 5000 },
      { label: "Cayenne", value: 40000 },
      { label: "Habanero", value: 350000 },
      { label: "Carolina Reaper", value: 2200000 }
    ]
  },
  {
    instruction: "Least to most expensive painting sold at auction (million USD)",
    category: "Paintings by Auction Price",
    items: [
      { label: "The Scream (Munch)", value: 120 },
      { label: "Shot Sage Blue Marilyn (Warhol)", value: 195 },
      { label: "Les Femmes d'Alger (Picasso)", value: 179 },
      { label: "Interchange (de Kooning)", value: 300 },
      { label: "Salvator Mundi (da Vinci)", value: 450 }
    ]
  },
  {
    instruction: "Smallest to largest organ in the human body (grams)",
    category: "Human Organs by Weight",
    items: [
      { label: "Pineal Gland", value: 0.1 },
      { label: "Thyroid", value: 25 },
      { label: "Heart", value: 300 },
      { label: "Brain", value: 1400 },
      { label: "Liver", value: 1500 }
    ]
  },
  {
    instruction: "Shortest to longest bone in the human body (cm)",
    category: "Human Bones by Length",
    items: [
      { label: "Stapes (ear)", value: 0.3 },
      { label: "Distal Phalanx (pinky toe)", value: 1.0 },
      { label: "Radius", value: 24 },
      { label: "Humerus", value: 36 },
      { label: "Femur", value: 48 }
    ]
  },
  {
    instruction: "Fewest to most taste buds",
    category: "Animals by Number of Taste Buds",
    items: [
      { label: "Chicken", value: 30 },
      { label: "Cat", value: 473 },
      { label: "Human", value: 10000 },
      { label: "Pig", value: 15000 },
      { label: "Catfish", value: 175000 }
    ]
  },
  {
    instruction: "Lowest to highest top speed (km/h)",
    category: "Marine Animals by Speed",
    items: [
      { label: "Manatee", value: 5 },
      { label: "Sea Turtle", value: 35 },
      { label: "Orca", value: 56 },
      { label: "Mako Shark", value: 74 },
      { label: "Sailfish", value: 110 }
    ]
  },
  {
    instruction: "Oldest to newest programming language",
    category: "Programming Languages by Year Created",
    items: [
      { label: "Fortran", value: 1957 },
      { label: "C", value: 1972 },
      { label: "Python", value: 1991 },
      { label: "Java", value: 1995 },
      { label: "Rust", value: 2010 }
    ]
  },
  {
    instruction: "Fewest to most keys on the instrument",
    category: "Keyboard Instruments by Number of Keys",
    items: [
      { label: "Melodica", value: 32 },
      { label: "Accordion (piano)", value: 41 },
      { label: "Harpsichord", value: 61 },
      { label: "Organ (single manual)", value: 61 },
      { label: "Grand Piano", value: 88 }
    ]
  },
  {
    instruction: "Fewest to most strings",
    category: "String Instruments by Number of Strings",
    items: [
      { label: "Erhu (Chinese)", value: 2 },
      { label: "Violin", value: 4 },
      { label: "Guitar", value: 6 },
      { label: "12-String Guitar", value: 12 },
      { label: "Concert Harp", value: 47 }
    ]
  },
  {
    instruction: "Lowest to highest frequency range (Hz, fundamental lowest note)",
    category: "Instruments by Lowest Playable Note",
    items: [
      { label: "Pipe Organ (32-foot stop)", value: 16 },
      { label: "Contrabassoon", value: 29 },
      { label: "Double Bass", value: 41 },
      { label: "Cello", value: 65 },
      { label: "Violin", value: 196 }
    ]
  },
  {
    instruction: "Fewest to most career goals in soccer/football",
    category: "Soccer Players by Career Goals",
    items: [
      { label: "Zinedine Zidane", value: 156 },
      { label: "Thierry Henry", value: 411 },
      { label: "Lionel Messi", value: 838 },
      { label: "Cristiano Ronaldo", value: 899 },
      { label: "Josef Bican", value: 805 }
    ]
  },
  {
    instruction: "Fewest to most home runs in MLB career",
    category: "Baseball Players by Career Home Runs",
    items: [
      { label: "Mickey Mantle", value: 536 },
      { label: "Willie Mays", value: 660 },
      { label: "Babe Ruth", value: 714 },
      { label: "Hank Aaron", value: 755 },
      { label: "Barry Bonds", value: 762 }
    ]
  },
  {
    instruction: "Fewest to most Grand Slam tennis titles (men's singles)",
    category: "Tennis Players by Grand Slam Titles",
    items: [
      { label: "Andre Agassi", value: 8 },
      { label: "Pete Sampras", value: 14 },
      { label: "Roger Federer", value: 20 },
      { label: "Rafael Nadal", value: 22 },
      { label: "Novak Djokovic", value: 24 }
    ]
  },
  {
    instruction: "Lowest to highest career points in NBA",
    category: "NBA Players by Career Points",
    items: [
      { label: "Larry Bird", value: 21791 },
      { label: "Michael Jordan", value: 32292 },
      { label: "Kobe Bryant", value: 33643 },
      { label: "Kareem Abdul-Jabbar", value: 38387 },
      { label: "LeBron James", value: 40474 }
    ]
  },
  {
    instruction: "Smallest to largest ocean (km²)",
    category: "Oceans by Area",
    items: [
      { label: "Arctic Ocean", value: 14060000 },
      { label: "Southern Ocean", value: 21960000 },
      { label: "Indian Ocean", value: 70560000 },
      { label: "Atlantic Ocean", value: 85130000 },
      { label: "Pacific Ocean", value: 168720000 }
    ]
  },
  {
    instruction: "Least to most viewed YouTube video (billions, all time)",
    category: "YouTube Videos by Views",
    items: [
      { label: "See You Again (Wiz Khalifa)", value: 5.9 },
      { label: "Shape of You (Ed Sheeran)", value: 6.1 },
      { label: "Despacito (Luis Fonsi)", value: 8.3 },
      { label: "Johny Johny Yes Papa", value: 6.7 },
      { label: "Baby Shark Dance", value: 14.2 }
    ]
  },
  {
    instruction: "Lowest to highest global box office (billion USD)",
    category: "Movies by Box Office Gross",
    items: [
      { label: "The Lion King (2019)", value: 1.66 },
      { label: "Titanic", value: 2.26 },
      { label: "Star Wars: The Force Awakens", value: 2.07 },
      { label: "Avengers: Endgame", value: 2.80 },
      { label: "Avatar (2009)", value: 2.92 }
    ]
  },
  {
    instruction: "Fewest to most Academy Awards won by a single film",
    category: "Movies by Oscar Wins",
    items: [
      { label: "Forrest Gump", value: 6 },
      { label: "Schindler's List", value: 7 },
      { label: "The Last Emperor", value: 9 },
      { label: "Titanic", value: 11 },
      { label: "The Lord of the Rings: Return of the King", value: 11 }
    ]
  },
  {
    instruction: "Fewest to most episodes in a TV series",
    category: "TV Shows by Number of Episodes",
    items: [
      { label: "Chernobyl", value: 5 },
      { label: "Breaking Bad", value: 62 },
      { label: "Friends", value: 236 },
      { label: "The Simpsons", value: 770 },
      { label: "Guiding Light (soap opera)", value: 18262 }
    ]
  },
  {
    instruction: "Lowest to highest global album sales (millions)",
    category: "Music Albums by Sales",
    items: [
      { label: "Rumours (Fleetwood Mac)", value: 40 },
      { label: "Back in Black (AC/DC)", value: 50 },
      { label: "The Dark Side of the Moon (Pink Floyd)", value: 45 },
      { label: "The Bodyguard Soundtrack", value: 45 },
      { label: "Thriller (Michael Jackson)", value: 70 }
    ]
  },
  {
    instruction: "Shortest to longest typical marathon time by category (minutes)",
    category: "Marathon Times by Runner Type",
    items: [
      { label: "World Record (male)", value: 121 },
      { label: "Elite Female", value: 132 },
      { label: "Good Amateur", value: 210 },
      { label: "Average Finisher", value: 270 },
      { label: "Casual Jogger", value: 360 }
    ]
  },
  {
    instruction: "Fewest to most satellites in orbit by country (2023)",
    category: "Countries by Active Satellites",
    items: [
      { label: "India", value: 58 },
      { label: "Japan", value: 95 },
      { label: "United Kingdom", value: 580 },
      { label: "China", value: 735 },
      { label: "United States", value: 5184 }
    ]
  },
  {
    instruction: "Smallest to largest particle",
    category: "Subatomic Particles by Mass (MeV/c²)",
    items: [
      { label: "Electron Neutrino", value: 0.000001 },
      { label: "Electron", value: 0.511 },
      { label: "Muon", value: 106 },
      { label: "Proton", value: 938 },
      { label: "Top Quark", value: 173000 }
    ]
  },
  {
    instruction: "Shortest to longest half-life",
    category: "Radioactive Isotopes by Half-Life (years)",
    items: [
      { label: "Francium-223", value: 0.000038 },
      { label: "Radon-222", value: 0.01 },
      { label: "Cobalt-60", value: 5.27 },
      { label: "Carbon-14", value: 5730 },
      { label: "Uranium-238", value: 4470000000 }
    ]
  },
  {
    instruction: "Smallest to largest wavelength (nm)",
    category: "Electromagnetic Radiation by Wavelength",
    items: [
      { label: "Gamma Rays", value: 0.001 },
      { label: "X-rays", value: 1 },
      { label: "Ultraviolet", value: 300 },
      { label: "Visible Light (green)", value: 550 },
      { label: "Infrared", value: 10000 }
    ]
  },
  {
    instruction: "Lowest to highest energy density (MJ/kg)",
    category: "Fuels by Energy Density",
    items: [
      { label: "Wood", value: 16 },
      { label: "Coal", value: 24 },
      { label: "Diesel", value: 45 },
      { label: "Natural Gas", value: 55 },
      { label: "Hydrogen", value: 142 }
    ]
  },
  {
    instruction: "Weakest to strongest fundamental force (relative strength)",
    category: "Fundamental Forces by Relative Strength",
    items: [
      { label: "Gravity", value: 1 },
      { label: "Weak Nuclear Force", value: 2 },
      { label: "Electromagnetic Force", value: 3 },
      { label: "Strong Nuclear Force", value: 4 },
      { label: "Strong Nuclear (residual)", value: 5 }
    ]
  },
  {
    instruction: "Shortest to longest day on a planet (Earth hours)",
    category: "Planets by Day Length",
    items: [
      { label: "Jupiter", value: 9.9 },
      { label: "Saturn", value: 10.7 },
      { label: "Earth", value: 24 },
      { label: "Mars", value: 24.6 },
      { label: "Venus", value: 5832 }
    ]
  },
  {
    instruction: "Earliest to latest space mission",
    category: "Space Missions by Year",
    items: [
      { label: "Sputnik 1", value: 1957 },
      { label: "Apollo 11", value: 1969 },
      { label: "Voyager 1", value: 1977 },
      { label: "Hubble Space Telescope", value: 1990 },
      { label: "James Webb Space Telescope", value: 2021 }
    ]
  },
  {
    instruction: "Smallest to largest impact crater (km diameter)",
    category: "Impact Craters by Diameter",
    items: [
      { label: "Barringer Crater (Arizona)", value: 1.2 },
      { label: "Manicouagan (Canada)", value: 100 },
      { label: "Popigai (Russia)", value: 100 },
      { label: "Chicxulub (Mexico)", value: 180 },
      { label: "Vredefort (South Africa)", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest surface gravity (m/s², relative to Earth=1)",
    category: "Celestial Bodies by Surface Gravity",
    items: [
      { label: "Moon", value: 0.17 },
      { label: "Mars", value: 0.38 },
      { label: "Venus", value: 0.9 },
      { label: "Earth", value: 1.0 },
      { label: "Jupiter", value: 2.53 }
    ]
  },
  {
    instruction: "Lowest to highest global television viewership (billions)",
    category: "Events by TV Viewership",
    items: [
      { label: "Super Bowl", value: 0.11 },
      { label: "Champions League Final", value: 0.38 },
      { label: "Olympics Opening Ceremony", value: 1.0 },
      { label: "FIFA World Cup Final", value: 1.5 },
      { label: "Cricket World Cup Final (2023)", value: 1.3 }
    ]
  },
  {
    instruction: "Least to most spoken language (million native speakers)",
    category: "Languages by Native Speakers",
    items: [
      { label: "Italian", value: 68 },
      { label: "Japanese", value: 125 },
      { label: "Hindi", value: 345 },
      { label: "Spanish", value: 475 },
      { label: "Mandarin Chinese", value: 920 }
    ]
  },
  {
    instruction: "Fewest to most letters in the alphabet",
    category: "Languages by Alphabet Size",
    items: [
      { label: "Hawaiian", value: 13 },
      { label: "Arabic", value: 28 },
      { label: "English", value: 26 },
      { label: "Russian (Cyrillic)", value: 33 },
      { label: "Khmer (Cambodian)", value: 74 }
    ]
  },
  {
    instruction: "Earliest to latest written language (approximate script origin)",
    category: "Writing Systems by Age",
    items: [
      { label: "Cuneiform (Sumerian)", value: -3400 },
      { label: "Egyptian Hieroglyphs", value: -3200 },
      { label: "Chinese Characters", value: -1200 },
      { label: "Greek Alphabet", value: -800 },
      { label: "Latin Alphabet", value: -700 }
    ]
  },
  {
    instruction: "Fewest to most words in a language (estimated vocabulary)",
    category: "Languages by Vocabulary Size (thousands of words)",
    items: [
      { label: "Toki Pona", value: 0.12 },
      { label: "Esperanto", value: 15 },
      { label: "French", value: 135 },
      { label: "Japanese", value: 500 },
      { label: "English", value: 600 }
    ]
  },
  {
    instruction: "Lowest to highest melting point of food items (°C)",
    category: "Foods by Melting Point of Main Fat",
    items: [
      { label: "Olive Oil", value: -6 },
      { label: "Butter", value: 32 },
      { label: "Coconut Oil", value: 24 },
      { label: "Lard", value: 36 },
      { label: "Cocoa Butter", value: 34 }
    ]
  },
  {
    instruction: "Smallest to largest typical serving size (grams)",
    category: "Condiments by Typical Serving",
    items: [
      { label: "Saffron (pinch)", value: 0.1 },
      { label: "Salt (pinch)", value: 1 },
      { label: "Soy Sauce", value: 15 },
      { label: "Ketchup", value: 17 },
      { label: "Mayonnaise", value: 30 }
    ]
  },
  {
    instruction: "Least to most expensive cut of beef (USD/lb, average)",
    category: "Beef Cuts by Price",
    items: [
      { label: "Ground Beef", value: 5 },
      { label: "Chuck Roast", value: 7 },
      { label: "Sirloin Steak", value: 12 },
      { label: "Ribeye Steak", value: 18 },
      { label: "Wagyu A5", value: 150 }
    ]
  },
  {
    instruction: "Shortest to longest fermentation time (days, typical)",
    category: "Fermented Foods by Fermentation Time",
    items: [
      { label: "Yogurt", value: 0.5 },
      { label: "Sauerkraut", value: 21 },
      { label: "Salami", value: 60 },
      { label: "Aged Cheddar", value: 365 },
      { label: "Balsamic Vinegar (traditional)", value: 4380 }
    ]
  },
  {
    instruction: "Lowest to highest proof (alcohol, US proof = 2x ABV)",
    category: "Spirits by Proof",
    items: [
      { label: "Aperol", value: 22 },
      { label: "Baileys", value: 34 },
      { label: "Standard Vodka", value: 80 },
      { label: "Bacardi 151", value: 151 },
      { label: "Spirytus (Polish)", value: 192 }
    ]
  },
  {
    instruction: "Least to most expensive gemstone (USD per carat, typical)",
    category: "Gemstones by Price",
    items: [
      { label: "Amethyst", value: 10 },
      { label: "Topaz (blue)", value: 25 },
      { label: "Sapphire", value: 1000 },
      { label: "Ruby", value: 5000 },
      { label: "Diamond (flawless)", value: 15000 }
    ]
  },
  {
    instruction: "Least to most expensive metal (USD per troy oz, 2023)",
    category: "Precious Metals by Price",
    items: [
      { label: "Silver", value: 24 },
      { label: "Platinum", value: 950 },
      { label: "Gold", value: 2000 },
      { label: "Palladium", value: 1100 },
      { label: "Rhodium", value: 4500 }
    ]
  },
  {
    instruction: "Smallest to largest cryptocurrency market cap (billion USD, 2023)",
    category: "Cryptocurrencies by Market Cap",
    items: [
      { label: "Cardano", value: 10 },
      { label: "Solana", value: 25 },
      { label: "BNB", value: 37 },
      { label: "Ethereum", value: 220 },
      { label: "Bitcoin", value: 850 }
    ]
  },
  {
    instruction: "Least to most traded currency pair (daily volume, billion USD)",
    category: "Currency Pairs by Trading Volume",
    items: [
      { label: "AUD/USD", value: 223 },
      { label: "USD/CHF", value: 227 },
      { label: "GBP/USD", value: 422 },
      { label: "USD/JPY", value: 714 },
      { label: "EUR/USD", value: 1170 }
    ]
  },
  {
    instruction: "Smallest to largest stock exchange (trillion USD market cap, 2023)",
    category: "Stock Exchanges by Market Cap",
    items: [
      { label: "Hong Kong Stock Exchange", value: 4.2 },
      { label: "Euronext", value: 5.3 },
      { label: "Shanghai Stock Exchange", value: 7.6 },
      { label: "NASDAQ", value: 20.6 },
      { label: "New York Stock Exchange", value: 25.2 }
    ]
  },
  {
    instruction: "Fewest to most keys on a standard keyboard layout",
    category: "Keyboard Types by Number of Keys",
    items: [
      { label: "60% Keyboard", value: 61 },
      { label: "65% Keyboard", value: 68 },
      { label: "75% Keyboard", value: 84 },
      { label: "Tenkeyless (TKL)", value: 87 },
      { label: "Full Size", value: 104 }
    ]
  },
  {
    instruction: "Fewest to most active volcanoes (Holocene)",
    category: "Countries by Number of Active Volcanoes",
    items: [
      { label: "Italy", value: 14 },
      { label: "Chile", value: 90 },
      { label: "Japan", value: 111 },
      { label: "United States", value: 161 },
      { label: "Indonesia", value: 139 }
    ]
  },
  {
    instruction: "Lowest to highest average wind speed for a city (km/h)",
    category: "Cities by Average Wind Speed",
    items: [
      { label: "Tokyo", value: 11 },
      { label: "London", value: 17 },
      { label: "New York City", value: 19 },
      { label: "Chicago", value: 24 },
      { label: "Wellington (NZ)", value: 29 }
    ]
  },
  {
    instruction: "Lowest to highest tidal range (meters, average spring tide)",
    category: "Locations by Tidal Range",
    items: [
      { label: "Mediterranean Sea", value: 0.3 },
      { label: "Gulf of Mexico", value: 0.6 },
      { label: "North Sea", value: 4.5 },
      { label: "Bristol Channel (UK)", value: 12 },
      { label: "Bay of Fundy (Canada)", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most F1 World Drivers' Championships",
    category: "F1 Drivers by Championships",
    items: [
      { label: "Niki Lauda", value: 3 },
      { label: "Alain Prost", value: 4 },
      { label: "Juan Manuel Fangio", value: 5 },
      { label: "Michael Schumacher", value: 7 },
      { label: "Lewis Hamilton", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most Tour de France wins",
    category: "Cyclists by Tour de France Victories",
    items: [
      { label: "Tadej Pogačar", value: 2 },
      { label: "Chris Froome", value: 4 },
      { label: "Miguel Indurain", value: 5 },
      { label: "Bernard Hinault", value: 5 },
      { label: "Eddy Merckx", value: 5 }
    ]
  },
  {
    instruction: "Lightest to heaviest boxing weight class limit (lbs)",
    category: "Boxing Weight Classes by Limit",
    items: [
      { label: "Minimumweight", value: 105 },
      { label: "Featherweight", value: 126 },
      { label: "Welterweight", value: 147 },
      { label: "Middleweight", value: 160 },
      { label: "Heavyweight", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of global electricity generation",
    category: "Energy Sources by Electricity Share (%)",
    items: [
      { label: "Solar", value: 4.5 },
      { label: "Wind", value: 7.6 },
      { label: "Hydropower", value: 15 },
      { label: "Natural Gas", value: 22 },
      { label: "Coal", value: 36 }
    ]
  },
  {
    instruction: "Least to most efficient energy conversion (%)",
    category: "Energy Conversion by Efficiency",
    items: [
      { label: "Incandescent Light Bulb", value: 5 },
      { label: "Car Engine (gasoline)", value: 25 },
      { label: "Solar Panel", value: 22 },
      { label: "Wind Turbine", value: 45 },
      { label: "Hydroelectric Dam", value: 90 }
    ]
  },
  {
    instruction: "Smallest to largest battery capacity (Wh, consumer devices)",
    category: "Devices by Battery Capacity",
    items: [
      { label: "AirPods (per bud)", value: 0.3 },
      { label: "Smartphone", value: 15 },
      { label: "Tablet (iPad)", value: 40 },
      { label: "Laptop", value: 70 },
      { label: "Tesla Model 3", value: 60000 }
    ]
  },
  {
    instruction: "Fewest to most World Cup wins (soccer/football)",
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
    instruction: "Shortest to longest gestation (days) for domestic animals",
    category: "Domestic Animals by Gestation Period",
    items: [
      { label: "Hamster", value: 16 },
      { label: "Cat", value: 65 },
      { label: "Dog", value: 63 },
      { label: "Cow", value: 283 },
      { label: "Horse", value: 340 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Intangible Cultural Heritage items",
    category: "Countries by Intangible Heritage Items",
    items: [
      { label: "India", value: 15 },
      { label: "Japan", value: 22 },
      { label: "South Korea", value: 22 },
      { label: "Turkey", value: 26 },
      { label: "China", value: 43 }
    ]
  },
  {
    instruction: "Lowest to highest average depth of lake (meters)",
    category: "Lakes by Average Depth",
    items: [
      { label: "Lake Erie", value: 19 },
      { label: "Lake Victoria", value: 40 },
      { label: "Lake Superior", value: 149 },
      { label: "Lake Tanganyika", value: 570 },
      { label: "Lake Baikal", value: 744 }
    ]
  },
  {
    instruction: "Fewest to most venomous snake LD50 (lower = more venomous, mg/kg)",
    category: "Snakes by Venom Toxicity (LD50, lower is deadlier)",
    items: [
      { label: "Inland Taipan", value: 0.025 },
      { label: "Eastern Brown Snake", value: 0.053 },
      { label: "Black Mamba", value: 0.32 },
      { label: "King Cobra", value: 1.8 },
      { label: "Rattlesnake", value: 11.4 }
    ]
  },
  {
    instruction: "Least to most expensive cheese (USD/lb)",
    category: "Cheeses by Price",
    items: [
      { label: "Cheddar", value: 6 },
      { label: "Brie", value: 12 },
      { label: "Gruyère", value: 20 },
      { label: "Parmigiano-Reggiano (aged)", value: 35 },
      { label: "Pule (donkey milk cheese)", value: 600 }
    ]
  },
  {
    instruction: "Shortest to longest opera (approximate performance time, hours)",
    category: "Operas by Duration",
    items: [
      { label: "Cavalleria Rusticana (Mascagni)", value: 1.2 },
      { label: "La Bohème (Puccini)", value: 1.8 },
      { label: "Carmen (Bizet)", value: 2.7 },
      { label: "Aida (Verdi)", value: 2.5 },
      { label: "Der Ring des Nibelungen (Wagner)", value: 15 }
    ]
  },
  {
    instruction: "Least to most common blood type (% of world population)",
    category: "Blood Types by Prevalence",
    items: [
      { label: "AB Negative", value: 0.6 },
      { label: "B Negative", value: 1.5 },
      { label: "AB Positive", value: 3.4 },
      { label: "A Positive", value: 27.4 },
      { label: "O Positive", value: 38.7 }
    ]
  },
  {
    instruction: "Fewest to most bones at birth vs adulthood",
    category: "Human Skeletal Development by Age",
    items: [
      { label: "Adult (fully fused)", value: 206 },
      { label: "Teenager (partially fused)", value: 250 },
      { label: "Child (age 5)", value: 280 },
      { label: "Toddler", value: 300 },
      { label: "Newborn", value: 270 }
    ]
  },
  {
    instruction: "Lowest to highest typical heart rate in exercise (bpm)",
    category: "Exercise Intensity by Heart Rate",
    items: [
      { label: "Resting", value: 65 },
      { label: "Light Walking", value: 100 },
      { label: "Jogging", value: 140 },
      { label: "Sprinting", value: 170 },
      { label: "Maximum Effort", value: 195 }
    ]
  },
  {
    instruction: "Shortest to tallest average male height by country (cm)",
    category: "Countries by Average Male Height",
    items: [
      { label: "Indonesia", value: 163 },
      { label: "India", value: 167 },
      { label: "Japan", value: 171 },
      { label: "United States", value: 176 },
      { label: "Netherlands", value: 184 }
    ]
  },
  {
    instruction: "Least to most coffee consumed per capita (kg/year)",
    category: "Countries by Coffee Consumption Per Capita",
    items: [
      { label: "Japan", value: 3.3 },
      { label: "United States", value: 4.4 },
      { label: "Italy", value: 5.9 },
      { label: "Norway", value: 9.9 },
      { label: "Finland", value: 12.0 }
    ]
  },
  {
    instruction: "Least to most beer consumed per capita (liters/year)",
    category: "Countries by Beer Consumption Per Capita",
    items: [
      { label: "Italy", value: 34 },
      { label: "United States", value: 72 },
      { label: "Germany", value: 99 },
      { label: "Austria", value: 106 },
      { label: "Czech Republic", value: 141 }
    ]
  },
  {
    instruction: "Fewest to most daily calories consumed per capita",
    category: "Countries by Daily Calorie Intake",
    items: [
      { label: "Somalia", value: 1710 },
      { label: "India", value: 2450 },
      { label: "Japan", value: 2690 },
      { label: "Germany", value: 3500 },
      { label: "United States", value: 3800 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of population that is urban",
    category: "Countries by Urbanization Rate",
    items: [
      { label: "Burundi", value: 14 },
      { label: "India", value: 36 },
      { label: "China", value: 64 },
      { label: "United States", value: 83 },
      { label: "Singapore", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most languages spoken in a country",
    category: "Countries by Number of Languages Spoken",
    items: [
      { label: "South Korea", value: 1 },
      { label: "Japan", value: 2 },
      { label: "United States", value: 350 },
      { label: "India", value: 447 },
      { label: "Papua New Guinea", value: 840 }
    ]
  },
  {
    instruction: "Lowest to highest tourist arrivals per year (millions, 2019)",
    category: "Countries by International Tourism",
    items: [
      { label: "Japan", value: 32 },
      { label: "United Kingdom", value: 40 },
      { label: "Italy", value: 65 },
      { label: "Spain", value: 84 },
      { label: "France", value: 90 }
    ]
  },
  {
    instruction: "Fewest to most cell phone subscriptions per 100 people",
    category: "Countries by Mobile Phone Penetration",
    items: [
      { label: "North Korea", value: 15 },
      { label: "Cuba", value: 54 },
      { label: "United States", value: 106 },
      { label: "Russia", value: 164 },
      { label: "Hong Kong", value: 290 }
    ]
  },
  {
    instruction: "Lowest to highest total road network length (thousand km)",
    category: "Countries by Road Network",
    items: [
      { label: "Australia", value: 874 },
      { label: "Brazil", value: 1580 },
      { label: "China", value: 5198 },
      { label: "India", value: 6372 },
      { label: "United States", value: 6740 }
    ]
  },
  {
    instruction: "Fewest to most commercial nuclear reactors (2023)",
    category: "Countries by Nuclear Reactors",
    items: [
      { label: "United Kingdom", value: 9 },
      { label: "South Korea", value: 25 },
      { label: "Japan", value: 33 },
      { label: "China", value: 55 },
      { label: "United States", value: 93 }
    ]
  },
  {
    instruction: "Lightest to heaviest bird (kg)",
    category: "Birds by Weight",
    items: [
      { label: "Bee Hummingbird", value: 0.002 },
      { label: "Sparrow", value: 0.03 },
      { label: "Bald Eagle", value: 5.5 },
      { label: "Emperor Penguin", value: 23 },
      { label: "Ostrich", value: 104 }
    ]
  },
  {
    instruction: "Slowest to fastest bird in flight (km/h)",
    category: "Birds by Flight Speed",
    items: [
      { label: "American Woodcock", value: 8 },
      { label: "Heron", value: 48 },
      { label: "Swan", value: 80 },
      { label: "Rock Dove (Pigeon)", value: 149 },
      { label: "Peregrine Falcon (dive)", value: 390 }
    ]
  },
  {
    instruction: "Shallowest to deepest root system (meters)",
    category: "Plants by Root Depth",
    items: [
      { label: "Lettuce", value: 0.3 },
      { label: "Wheat", value: 1.5 },
      { label: "Corn", value: 2.0 },
      { label: "Oak Tree", value: 5 },
      { label: "Shepherd's Tree (South Africa)", value: 68 }
    ]
  },
  {
    instruction: "Fewest to most petals (typical)",
    category: "Flowers by Number of Petals",
    items: [
      { label: "Tulip", value: 3 },
      { label: "Rose (wild)", value: 5 },
      { label: "Daisy", value: 21 },
      { label: "Sunflower (ray florets)", value: 34 },
      { label: "Chrysanthemum", value: 55 }
    ]
  },
  {
    instruction: "Shortest to longest migration distance (km, one way)",
    category: "Animals by Migration Distance",
    items: [
      { label: "Monarch Butterfly", value: 4000 },
      { label: "Caribou", value: 5000 },
      { label: "Humpback Whale", value: 8500 },
      { label: "Bar-tailed Godwit", value: 11000 },
      { label: "Arctic Tern", value: 18000 }
    ]
  },
  {
    instruction: "Youngest to oldest verified living tree (years, approximate)",
    category: "Trees by Age",
    items: [
      { label: "Angel Oak (South Carolina)", value: 500 },
      { label: "Jōmon Sugi (Japan)", value: 2200 },
      { label: "Methuselah (Bristlecone Pine)", value: 4855 },
      { label: "Old Tjikko (Norway Spruce, clonal)", value: 9550 },
      { label: "Pando (Quaking Aspen colony)", value: 80000 }
    ]
  },
  {
    instruction: "Least to most venomous spider (LD50, lower = more venomous)",
    category: "Spiders by Venom Toxicity",
    items: [
      { label: "Sydney Funnel-Web", value: 0.16 },
      { label: "Brazilian Wandering Spider", value: 0.28 },
      { label: "Black Widow", value: 0.9 },
      { label: "Brown Recluse", value: 1.5 },
      { label: "Tarantula (most species)", value: 10 }
    ]
  },
  {
    instruction: "Least to most expensive tea (USD per kg)",
    category: "Teas by Price",
    items: [
      { label: "Standard Black Tea", value: 5 },
      { label: "Matcha (ceremonial)", value: 100 },
      { label: "Gyokuro", value: 200 },
      { label: "Tieguanyin (premium)", value: 3000 },
      { label: "Da Hong Pao (aged)", value: 600000 }
    ]
  },
  {
    instruction: "Shortest to tallest cactus (meters, max height)",
    category: "Cacti by Maximum Height",
    items: [
      { label: "Blossfeldia liliputana", value: 0.01 },
      { label: "Peyote", value: 0.05 },
      { label: "Barrel Cactus", value: 3 },
      { label: "Saguaro", value: 12 },
      { label: "Cereus (Pachycereus)", value: 19 }
    ]
  },
  {
    instruction: "Least to most daily water usage per capita (liters)",
    category: "Countries by Daily Water Use Per Person",
    items: [
      { label: "Ethiopia", value: 20 },
      { label: "India", value: 90 },
      { label: "Germany", value: 120 },
      { label: "Japan", value: 220 },
      { label: "United States", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest CO₂ concentration in atmosphere (ppm by decade)",
    category: "Atmospheric CO₂ by Decade",
    items: [
      { label: "1960", value: 317 },
      { label: "1980", value: 339 },
      { label: "2000", value: 370 },
      { label: "2010", value: 390 },
      { label: "2023", value: 421 }
    ]
  },
  {
    instruction: "Fewest to most chess pieces at start of game",
    category: "Board Games by Number of Starting Pieces",
    items: [
      { label: "Checkers", value: 24 },
      { label: "Chess", value: 32 },
      { label: "Backgammon", value: 30 },
      { label: "Shogi (Japanese chess)", value: 40 },
      { label: "Go (typical game uses ~250)", value: 361 }
    ]
  },
  {
    instruction: "Fewest to most squares on a game board",
    category: "Board Games by Board Size",
    items: [
      { label: "Tic-Tac-Toe", value: 9 },
      { label: "Checkers/Chess", value: 64 },
      { label: "Scrabble", value: 225 },
      { label: "Monopoly (spaces around board)", value: 40 },
      { label: "Go (19x19)", value: 361 }
    ]
  },
  {
    instruction: "Fewest to most cards in a standard game deck",
    category: "Card Games by Deck Size",
    items: [
      { label: "Spanish Baraja (stripped)", value: 40 },
      { label: "Standard Poker Deck", value: 52 },
      { label: "Tarot (Major + Minor Arcana)", value: 78 },
      { label: "Hanafuda (Japanese)", value: 48 },
      { label: "UNO (full deck)", value: 108 }
    ]
  },
  {
    instruction: "Least to most global annual production (million tonnes)",
    category: "Crops by Global Production",
    items: [
      { label: "Coffee", value: 10 },
      { label: "Bananas", value: 120 },
      { label: "Potatoes", value: 370 },
      { label: "Wheat", value: 780 },
      { label: "Sugarcane", value: 1900 }
    ]
  },
  {
    instruction: "Fewest to most patents filed per year by company (2022)",
    category: "Companies by Annual Patent Filings",
    items: [
      { label: "Apple", value: 2800 },
      { label: "Microsoft", value: 3400 },
      { label: "Google (Alphabet)", value: 3800 },
      { label: "Huawei", value: 7689 },
      { label: "Samsung", value: 8513 }
    ]
  },
  {
    instruction: "Fewest to most employees (millions, 2023)",
    category: "Companies by Number of Employees",
    items: [
      { label: "Apple", value: 0.16 },
      { label: "Microsoft", value: 0.22 },
      { label: "Amazon", value: 1.54 },
      { label: "Walmart", value: 2.1 },
      { label: "Indian Railways", value: 1.3 }
    ]
  },
  {
    instruction: "Shortest to longest canal (km)",
    category: "Canals by Length",
    items: [
      { label: "Corinth Canal (Greece)", value: 6.4 },
      { label: "Panama Canal", value: 82 },
      { label: "Suez Canal", value: 193 },
      { label: "Erie Canal (USA)", value: 584 },
      { label: "Grand Canal (China)", value: 1776 }
    ]
  },
  {
    instruction: "Lowest to highest dam height (meters)",
    category: "Dams by Height",
    items: [
      { label: "Three Gorges Dam (China)", value: 185 },
      { label: "Hoover Dam (USA)", value: 221 },
      { label: "Inguri Dam (Georgia)", value: 272 },
      { label: "Nurek Dam (Tajikistan)", value: 300 },
      { label: "Jinping-I Dam (China)", value: 305 }
    ]
  },
  {
    instruction: "Least to most expensive city for a hotel night (USD average)",
    category: "Cities by Average Hotel Cost",
    items: [
      { label: "Bangkok", value: 55 },
      { label: "Istanbul", value: 70 },
      { label: "Rome", value: 120 },
      { label: "Paris", value: 180 },
      { label: "New York City", value: 280 }
    ]
  },
  {
    instruction: "Fewest to most Michelin-starred restaurants in a city",
    category: "Cities by Michelin Stars",
    items: [
      { label: "London", value: 75 },
      { label: "New York", value: 76 },
      { label: "Kyoto", value: 100 },
      { label: "Paris", value: 120 },
      { label: "Tokyo", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest average January temperature (°C)",
    category: "Cities by January Temperature",
    items: [
      { label: "Yakutsk (Russia)", value: -38 },
      { label: "Moscow", value: -8 },
      { label: "New York City", value: 1 },
      { label: "Sydney", value: 23 },
      { label: "Singapore", value: 26 }
    ]
  },
  {
    instruction: "Lowest to highest average July temperature (°C)",
    category: "Cities by July Temperature",
    items: [
      { label: "Ushuaia (Argentina)", value: 2 },
      { label: "London", value: 17 },
      { label: "Tokyo", value: 25 },
      { label: "Phoenix", value: 35 },
      { label: "Kuwait City", value: 37 }
    ]
  },
  {
    instruction: "Smallest to largest national park (km²)",
    category: "National Parks by Area",
    items: [
      { label: "Hot Springs (USA)", value: 22 },
      { label: "Yosemite (USA)", value: 3083 },
      { label: "Serengeti (Tanzania)", value: 14763 },
      { label: "Yellowstone (USA)", value: 8983 },
      { label: "Northeast Greenland", value: 972000 }
    ]
  },
  {
    instruction: "Least to most endangered (IUCN Red List species count)",
    category: "Animal Groups by Number of Endangered Species",
    items: [
      { label: "Insects", value: 1200 },
      { label: "Reptiles", value: 1700 },
      { label: "Birds", value: 1500 },
      { label: "Mammals", value: 1300 },
      { label: "Amphibians", value: 2600 }
    ]
  },
  {
    instruction: "Fewest to most Super Bowl wins (NFL team)",
    category: "NFL Teams by Super Bowl Wins",
    items: [
      { label: "Green Bay Packers", value: 4 },
      { label: "San Francisco 49ers", value: 5 },
      { label: "Dallas Cowboys", value: 5 },
      { label: "Pittsburgh Steelers", value: 6 },
      { label: "New England Patriots", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most Champions League titles (soccer)",
    category: "Soccer Clubs by Champions League Titles",
    items: [
      { label: "Manchester United", value: 3 },
      { label: "Barcelona", value: 5 },
      { label: "Liverpool", value: 6 },
      { label: "AC Milan", value: 7 },
      { label: "Real Madrid", value: 15 }
    ]
  },
  {
    instruction: "Shortest to longest suspension bridge main span (meters)",
    category: "Suspension Bridges by Main Span",
    items: [
      { label: "Brooklyn Bridge", value: 486 },
      { label: "Golden Gate Bridge", value: 1280 },
      { label: "Humber Bridge (UK)", value: 1410 },
      { label: "Akashi Kaikyo (Japan)", value: 1991 },
      { label: "1915 Çanakkale Bridge (Turkey)", value: 2023 }
    ]
  },
  {
    instruction: "Oldest to newest constitution still in effect",
    category: "National Constitutions by Year",
    items: [
      { label: "San Marino (1600)", value: 1600 },
      { label: "United States (1789)", value: 1789 },
      { label: "Norway (1814)", value: 1814 },
      { label: "Belgium (1831)", value: 1831 },
      { label: "Japan (1947)", value: 1947 }
    ]
  },
  {
    instruction: "Fewest to most amendments to national constitution",
    category: "Constitutions by Number of Amendments",
    items: [
      { label: "Japan", value: 0 },
      { label: "Australia", value: 8 },
      { label: "United States", value: 27 },
      { label: "Germany", value: 67 },
      { label: "India", value: 106 }
    ]
  },
  {
    instruction: "Lowest to highest military spending (billion USD, 2023)",
    category: "Countries by Military Budget",
    items: [
      { label: "Japan", value: 50 },
      { label: "United Kingdom", value: 68 },
      { label: "India", value: 83 },
      { label: "China", value: 292 },
      { label: "United States", value: 886 }
    ]
  },
  {
    instruction: "Fewest to most active military personnel (thousands)",
    category: "Countries by Military Size",
    items: [
      { label: "United Kingdom", value: 150 },
      { label: "Japan", value: 247 },
      { label: "Russia", value: 900 },
      { label: "United States", value: 1390 },
      { label: "China", value: 2035 }
    ]
  },
  {
    instruction: "Shortest to longest average commute time (minutes, one way)",
    category: "Cities by Commute Time",
    items: [
      { label: "Copenhagen", value: 22 },
      { label: "Berlin", value: 33 },
      { label: "New York City", value: 41 },
      { label: "Mumbai", value: 50 },
      { label: "Istanbul", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest honey production (thousand tonnes, 2022)",
    category: "Countries by Honey Production",
    items: [
      { label: "United States", value: 63 },
      { label: "Argentina", value: 68 },
      { label: "Iran", value: 80 },
      { label: "Turkey", value: 96 },
      { label: "China", value: 478 }
    ]
  },
  {
    instruction: "Fewest to most coral species in a reef system",
    category: "Coral Reefs by Number of Coral Species",
    items: [
      { label: "Hawaiian Reefs", value: 60 },
      { label: "Caribbean Reefs", value: 65 },
      { label: "Red Sea Reefs", value: 200 },
      { label: "Great Barrier Reef (Australia)", value: 400 },
      { label: "Coral Triangle (Indo-Pacific)", value: 600 }
    ]
  },
  {
    instruction: "Least to most words in the Bible (by translation)",
    category: "Bible Translations by Word Count",
    items: [
      { label: "NIV", value: 727969 },
      { label: "ESV", value: 757439 },
      { label: "NASB", value: 782815 },
      { label: "NKJV", value: 783137 },
      { label: "KJV", value: 783137 }
    ]
  },
  {
    instruction: "Fewest to most total career Grand Prix wins (F1)",
    category: "F1 Drivers by Total Race Wins",
    items: [
      { label: "Ayrton Senna", value: 41 },
      { label: "Alain Prost", value: 51 },
      { label: "Sebastian Vettel", value: 53 },
      { label: "Michael Schumacher", value: 91 },
      { label: "Lewis Hamilton", value: 103 }
    ]
  },
  {
    instruction: "Smallest to largest pizza chain by number of stores worldwide",
    category: "Pizza Chains by Store Count",
    items: [
      { label: "Papa Murphy's", value: 1200 },
      { label: "Little Caesars", value: 4000 },
      { label: "Papa John's", value: 5500 },
      { label: "Pizza Hut", value: 18000 },
      { label: "Domino's", value: 19500 }
    ]
  },
  {
    instruction: "Fewest to most daily newspaper circulation (millions)",
    category: "Newspapers by Daily Circulation",
    items: [
      { label: "The Guardian (UK)", value: 0.1 },
      { label: "The New York Times (USA)", value: 0.37 },
      { label: "The Times of India", value: 2.5 },
      { label: "Yomiuri Shimbun (Japan)", value: 6.9 },
      { label: "People's Daily (China)", value: 3.0 }
    ]
  },
  {
    instruction: "Smallest to largest fast food chain by revenue (billion USD)",
    category: "Fast Food Chains by Revenue",
    items: [
      { label: "Wendy's", value: 2.1 },
      { label: "Burger King", value: 5.6 },
      { label: "Subway", value: 9.4 },
      { label: "Starbucks", value: 32.3 },
      { label: "McDonald's", value: 23.2 }
    ]
  },
  {
    instruction: "Fewest to most visitors per year (millions) to a museum",
    category: "Museums by Annual Visitors",
    items: [
      { label: "Metropolitan Museum of Art (NYC)", value: 5.4 },
      { label: "Vatican Museums (Rome)", value: 5.5 },
      { label: "British Museum (London)", value: 5.8 },
      { label: "National Museum of China (Beijing)", value: 7.3 },
      { label: "Louvre (Paris)", value: 8.9 }
    ]
  },
  {
    instruction: "Least to most expensive city for a Big Mac (USD, 2023)",
    category: "Cities by Big Mac Price",
    items: [
      { label: "Cairo", value: 1.95 },
      { label: "New Delhi", value: 2.39 },
      { label: "Beijing", value: 3.80 },
      { label: "New York", value: 5.58 },
      { label: "Zurich", value: 7.73 }
    ]
  },
  {
    instruction: "Fewest to most Ballon d'Or awards won",
    category: "Soccer Players by Ballon d'Or Awards",
    items: [
      { label: "Zinedine Zidane", value: 1 },
      { label: "Ronaldo Nazário", value: 2 },
      { label: "Johan Cruyff", value: 3 },
      { label: "Cristiano Ronaldo", value: 5 },
      { label: "Lionel Messi", value: 8 }
    ]
  },
  {
    instruction: "Shortest to longest runway at major airports (meters)",
    category: "Airports by Runway Length",
    items: [
      { label: "London City Airport", value: 1508 },
      { label: "LaGuardia (NYC)", value: 2134 },
      { label: "Heathrow (London)", value: 3902 },
      { label: "Denver International", value: 4877 },
      { label: "Qamdo Bamda (Tibet)", value: 5500 }
    ]
  },
  {
    instruction: "Lowest to highest recorded wind speed (km/h)",
    category: "Weather Events by Wind Speed",
    items: [
      { label: "Strong Breeze (Beaufort 6)", value: 50 },
      { label: "Category 1 Hurricane", value: 120 },
      { label: "Category 5 Hurricane", value: 280 },
      { label: "Strongest Tornado (F5)", value: 482 },
      { label: "Mt. Washington Record (1934)", value: 372 }
    ]
  },
  {
    instruction: "Lowest to highest recorded temperature on Earth (°C)",
    category: "Temperature Extremes by Location",
    items: [
      { label: "Vostok Station, Antarctica (-89.2°C)", value: 1 },
      { label: "Oymyakon, Russia (-67.7°C)", value: 2 },
      { label: "Snag, Canada (-63°C)", value: 3 },
      { label: "Death Valley, USA (56.7°C)", value: 4 },
      { label: "Kebili, Tunisia (55°C)", value: 5 }
    ]
  },
  {
    instruction: "Smallest to largest cloud type by altitude (km, base height)",
    category: "Cloud Types by Altitude",
    items: [
      { label: "Fog (Stratus at ground)", value: 0 },
      { label: "Cumulus", value: 2 },
      { label: "Altostratus", value: 4 },
      { label: "Cirrus", value: 8 },
      { label: "Noctilucent Clouds", value: 80 }
    ]
  },
  {
    instruction: "Lowest to highest atmospheric layer altitude (km, approximate boundary)",
    category: "Atmospheric Layers by Altitude",
    items: [
      { label: "Troposphere (top)", value: 12 },
      { label: "Stratosphere (top)", value: 50 },
      { label: "Mesosphere (top)", value: 85 },
      { label: "Thermosphere (top)", value: 600 },
      { label: "Exosphere (top)", value: 10000 }
    ]
  },
  {
    instruction: "Fewest to most steps in Eiffel Tower vs other landmarks",
    category: "Landmarks by Number of Steps",
    items: [
      { label: "Leaning Tower of Pisa", value: 294 },
      { label: "Statue of Liberty (crown)", value: 354 },
      { label: "St. Peter's Basilica (dome)", value: 551 },
      { label: "Eiffel Tower (2nd floor)", value: 674 },
      { label: "CN Tower (metal staircase)", value: 1776 }
    ]
  },
  {
    instruction: "Fewest to most countries on a continent",
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
    instruction: "Least to most expensive city to rent a 1-bedroom apartment (USD/month)",
    category: "Cities by Apartment Rent",
    items: [
      { label: "Cairo", value: 150 },
      { label: "Bangkok", value: 400 },
      { label: "Berlin", value: 900 },
      { label: "London", value: 2200 },
      { label: "New York City", value: 3500 }
    ]
  },
  {
    instruction: "Fewest to most satellites launched by country (all time, as of 2023)",
    category: "Countries by Total Satellites Launched",
    items: [
      { label: "India", value: 127 },
      { label: "Japan", value: 217 },
      { label: "China", value: 791 },
      { label: "Russia/USSR", value: 3611 },
      { label: "United States", value: 5534 }
    ]
  },
  {
    instruction: "Shortest to longest bone healing time (weeks, average adult)",
    category: "Bones by Healing Time",
    items: [
      { label: "Finger", value: 4 },
      { label: "Wrist (radius)", value: 8 },
      { label: "Ankle", value: 10 },
      { label: "Femur (thigh)", value: 16 },
      { label: "Tibia (shin)", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most works composed by classical composer",
    category: "Classical Composers by Number of Works",
    items: [
      { label: "Ravel", value: 86 },
      { label: "Beethoven", value: 722 },
      { label: "Bach", value: 1128 },
      { label: "Mozart", value: 626 },
      { label: "Schubert", value: 998 }
    ]
  },
  {
    instruction: "Youngest to oldest debut age of famous musicians",
    category: "Musicians by Age at First Hit",
    items: [
      { label: "Stevie Wonder", value: 11 },
      { label: "Michael Jackson (with Jackson 5)", value: 11 },
      { label: "Taylor Swift", value: 16 },
      { label: "Elvis Presley", value: 19 },
      { label: "Leonard Cohen", value: 33 }
    ]
  },
  {
    instruction: "Shortest to longest wingspan for a plane (meters)",
    category: "Aircraft by Wingspan",
    items: [
      { label: "Cessna 172", value: 11 },
      { label: "F-16 Fighting Falcon", value: 10 },
      { label: "Boeing 737", value: 36 },
      { label: "Boeing 747", value: 64 },
      { label: "Stratolaunch", value: 117 }
    ]
  },
  {
    instruction: "Lowest to highest passenger capacity on a ship",
    category: "Cruise Ships by Passenger Capacity",
    items: [
      { label: "Wind Surf (sailing)", value: 342 },
      { label: "Queen Mary 2", value: 2691 },
      { label: "Oasis of the Seas", value: 5400 },
      { label: "Symphony of the Seas", value: 6680 },
      { label: "Icon of the Seas", value: 7600 }
    ]
  },
  {
    instruction: "Slowest to fastest train (km/h, regular service)",
    category: "Trains by Top Speed",
    items: [
      { label: "New York Subway", value: 55 },
      { label: "Eurostar", value: 300 },
      { label: "TGV (France)", value: 320 },
      { label: "Shanghai Maglev", value: 431 },
      { label: "Japan L0 Maglev (test)", value: 603 }
    ]
  },
  {
    instruction: "Fewest to most number of plays by Shakespeare",
    category: "Shakespeare's Play Categories by Count",
    items: [
      { label: "Romances", value: 4 },
      { label: "Problem Plays", value: 3 },
      { label: "Tragedies", value: 10 },
      { label: "Comedies", value: 14 },
      { label: "Histories", value: 10 }
    ]
  },
  {
    instruction: "Least to most expensive wood (USD per board foot)",
    category: "Woods by Price",
    items: [
      { label: "Pine", value: 3 },
      { label: "Oak", value: 8 },
      { label: "Walnut", value: 15 },
      { label: "Ebony", value: 60 },
      { label: "African Blackwood", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most goals in a single World Cup tournament",
    category: "World Cup Tournaments by Total Goals",
    items: [
      { label: "1990 Italy", value: 115 },
      { label: "2010 South Africa", value: 145 },
      { label: "1998 France", value: 171 },
      { label: "2014 Brazil", value: 171 },
      { label: "2022 Qatar", value: 172 }
    ]
  },
  {
    instruction: "Fewest to most words in a famous novel",
    category: "Novels by Word Count",
    items: [
      { label: "The Great Gatsby (Fitzgerald)", value: 47094 },
      { label: "Harry Potter and the Sorcerer's Stone", value: 77325 },
      { label: "Moby-Dick (Melville)", value: 206052 },
      { label: "War and Peace (Tolstoy)", value: 580000 },
      { label: "In Search of Lost Time (Proust)", value: 1267069 }
    ]
  },
  {
    instruction: "Least to most pages in a holy text",
    category: "Religious Texts by Length (pages, typical edition)",
    items: [
      { label: "Tao Te Ching", value: 81 },
      { label: "Quran", value: 604 },
      { label: "Torah (Five Books of Moses)", value: 304 },
      { label: "Bible (King James)", value: 1189 },
      { label: "Mahabharata", value: 5000 }
    ]
  },
  {
    instruction: "Fewest to most Olympic gold medals by a single athlete",
    category: "Athletes by Individual Olympic Gold Medals",
    items: [
      { label: "Usain Bolt", value: 8 },
      { label: "Carl Lewis", value: 9 },
      { label: "Paavo Nurmi", value: 9 },
      { label: "Mark Spitz", value: 9 },
      { label: "Michael Phelps", value: 23 }
    ]
  },
  {
    instruction: "Lowest to highest Richter scale magnitude of major earthquakes",
    category: "Famous Earthquakes by Magnitude",
    items: [
      { label: "San Francisco 1906", value: 7.9 },
      { label: "Haiti 2010", value: 7.0 },
      { label: "Sumatra 2004", value: 9.1 },
      { label: "Japan 2011 (Tōhoku)", value: 9.1 },
      { label: "Chile 1960 (Valdivia)", value: 9.5 }
    ]
  },
  {
    instruction: "Least to most annual chocolate consumption per capita (kg)",
    category: "Countries by Chocolate Consumption",
    items: [
      { label: "Japan", value: 2.2 },
      { label: "United States", value: 4.4 },
      { label: "United Kingdom", value: 7.6 },
      { label: "Germany", value: 8.4 },
      { label: "Switzerland", value: 10.4 }
    ]
  },
  {
    instruction: "Smallest to largest virus (nanometers)",
    category: "Viruses by Size",
    items: [
      { label: "Parvovirus", value: 22 },
      { label: "Influenza", value: 100 },
      { label: "HIV", value: 120 },
      { label: "Ebola", value: 970 },
      { label: "Mimivirus", value: 500 }
    ]
  },
  {
    instruction: "Fewest to most crewed spaceflights by country",
    category: "Countries by Number of Crewed Spaceflights",
    items: [
      { label: "China", value: 12 },
      { label: "Japan (via NASA/ESA)", value: 0 },
      { label: "Europe (via ESA/NASA)", value: 0 },
      { label: "Russia/USSR", value: 135 },
      { label: "United States", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest carbon footprint of foods (kg CO₂ per kg food)",
    category: "Foods by Carbon Footprint",
    items: [
      { label: "Lentils", value: 0.9 },
      { label: "Tofu", value: 2.0 },
      { label: "Chicken", value: 6.9 },
      { label: "Pork", value: 7.2 },
      { label: "Beef", value: 27 }
    ]
  },
  {
    instruction: "Least to most expensive Olympic Games (billion USD)",
    category: "Olympic Games by Cost",
    items: [
      { label: "Barcelona 1992", value: 9.4 },
      { label: "London 2012", value: 15 },
      { label: "Rio 2016", value: 13.1 },
      { label: "Tokyo 2020", value: 15.4 },
      { label: "Beijing 2008", value: 40 }
    ]
  },
  {
    instruction: "Fewest to most roller coasters in a theme park",
    category: "Theme Parks by Roller Coaster Count",
    items: [
      { label: "Disneyland (California)", value: 4 },
      { label: "Universal Studios Orlando", value: 8 },
      { label: "Busch Gardens Tampa Bay", value: 10 },
      { label: "Cedar Point (Ohio)", value: 17 },
      { label: "Six Flags Magic Mountain", value: 20 }
    ]
  },
  {
    instruction: "Lowest to highest rotational speed of a planet (km/h at equator)",
    category: "Planets by Rotational Speed",
    items: [
      { label: "Venus", value: 6.5 },
      { label: "Mercury", value: 10.9 },
      { label: "Mars", value: 866 },
      { label: "Earth", value: 1674 },
      { label: "Jupiter", value: 45583 }
    ]
  },
  {
    instruction: "Lightest to heaviest Nobel Prize medal (grams)",
    category: "Award Trophies/Medals by Weight",
    items: [
      { label: "Olympic Gold Medal (2020)", value: 556 },
      { label: "Nobel Prize Medal", value: 185 },
      { label: "FIFA World Cup Trophy", value: 6175 },
      { label: "Vince Lombardi Trophy (Super Bowl)", value: 3200 },
      { label: "Stanley Cup (NHL)", value: 15500 }
    ]
  },
  {
    instruction: "Fewest to most horses in famous races (typical field size)",
    category: "Horse Races by Typical Field Size",
    items: [
      { label: "Breeders' Cup Classic", value: 10 },
      { label: "Kentucky Derby", value: 20 },
      { label: "Melbourne Cup", value: 24 },
      { label: "Grand National (UK)", value: 40 },
      { label: "Mongolian Naadam Race", value: 1000 }
    ]
  },
  {
    instruction: "Least to most pages in a standard passport",
    category: "Countries by Passport Page Count",
    items: [
      { label: "Japan (standard)", value: 24 },
      { label: "United Kingdom", value: 32 },
      { label: "United States", value: 52 },
      { label: "India", value: 36 },
      { label: "South Africa", value: 48 }
    ]
  },
  {
    instruction: "Fewest to most countries a passport allows visa-free entry (2023)",
    category: "Passports by Visa-Free Access",
    items: [
      { label: "Afghanistan", value: 27 },
      { label: "Pakistan", value: 33 },
      { label: "India", value: 57 },
      { label: "United States", value: 186 },
      { label: "Japan", value: 193 }
    ]
  },
  {
    instruction: "Fewest to most floors in famous buildings",
    category: "Buildings by Number of Floors",
    items: [
      { label: "White House (Washington D.C.)", value: 6 },
      { label: "Taj Mahal", value: 1 },
      { label: "Empire State Building", value: 102 },
      { label: "Taipei 101", value: 101 },
      { label: "Burj Khalifa", value: 163 }
    ]
  },
  {
    instruction: "Lowest to highest body fat percentage (healthy range, male average)",
    category: "Animals by Body Fat Percentage",
    items: [
      { label: "Greyhound", value: 5 },
      { label: "Horse (athletic)", value: 8 },
      { label: "Human (fit male)", value: 15 },
      { label: "Pig", value: 35 },
      { label: "Seal", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most daily trains at a station",
    category: "Train Stations by Daily Trains",
    items: [
      { label: "Grand Central Terminal (NYC)", value: 481 },
      { label: "London Waterloo", value: 820 },
      { label: "Zurich HB", value: 870 },
      { label: "Gare du Nord (Paris)", value: 900 },
      { label: "Shinjuku Station (Tokyo)", value: 1500 }
    ]
  },
  {
    instruction: "Shortest to tallest statue (meters)",
    category: "Statues by Height",
    items: [
      { label: "The Little Mermaid (Copenhagen)", value: 1.25 },
      { label: "Christ the Redeemer (Rio)", value: 30 },
      { label: "Statue of Liberty (NYC)", value: 46 },
      { label: "Spring Temple Buddha (China)", value: 128 },
      { label: "Statue of Unity (India)", value: 182 }
    ]
  },
  {
    instruction: "Lowest to highest escape velocity (km/s)",
    category: "Celestial Bodies by Escape Velocity",
    items: [
      { label: "Moon", value: 2.4 },
      { label: "Mars", value: 5.0 },
      { label: "Earth", value: 11.2 },
      { label: "Saturn", value: 36.1 },
      { label: "Jupiter", value: 60.2 }
    ]
  },
  {
    instruction: "Fewest to most daily passengers at a train station (thousands)",
    category: "Train Stations by Daily Passengers",
    items: [
      { label: "Grand Central Terminal (NYC)", value: 274 },
      { label: "Gare du Nord (Paris)", value: 292 },
      { label: "Mumbai CST", value: 500 },
      { label: "Ikebukuro Station (Tokyo)", value: 2715 },
      { label: "Shinjuku Station (Tokyo)", value: 3590 }
    ]
  },
  {
    instruction: "Lowest to highest tensile strength (MPa)",
    category: "Materials by Tensile Strength",
    items: [
      { label: "Rubber", value: 15 },
      { label: "Copper", value: 220 },
      { label: "Mild Steel", value: 400 },
      { label: "Titanium Alloy", value: 1100 },
      { label: "Carbon Fiber", value: 4000 }
    ]
  },
  {
    instruction: "Least to most daily ridership on a metro system (millions)",
    category: "Metro Systems by Daily Ridership",
    items: [
      { label: "London Underground", value: 3.5 },
      { label: "New York City Subway", value: 3.6 },
      { label: "Moscow Metro", value: 6.5 },
      { label: "Tokyo Metro (all lines)", value: 8.7 },
      { label: "Beijing Subway", value: 10.5 }
    ]
  },
  {
    instruction: "Fewest to most Olympic sports (Summer Games, 2024)",
    category: "Olympic Events Growth by Year",
    items: [
      { label: "Athens 1896", value: 9 },
      { label: "Stockholm 1912", value: 14 },
      { label: "Tokyo 1964", value: 19 },
      { label: "Sydney 2000", value: 28 },
      { label: "Paris 2024", value: 32 }
    ]
  },
  {
    instruction: "Fewest to most ski resorts by country",
    category: "Countries by Number of Ski Resorts",
    items: [
      { label: "South Korea", value: 18 },
      { label: "Spain", value: 38 },
      { label: "Italy", value: 349 },
      { label: "Austria", value: 443 },
      { label: "Japan", value: 547 }
    ]
  },
  {
    instruction: "Least to most expensive Stradivarius violin sold (million USD)",
    category: "Musical Instruments by Auction Price",
    items: [
      { label: "Fender Stratocaster (Bob Dylan)", value: 0.97 },
      { label: "John Lennon's Steinway Piano", value: 2.37 },
      { label: "Hammer Stradivarius (violin)", value: 3.54 },
      { label: "Lady Blunt Stradivarius", value: 15.9 },
      { label: "Vieuxtemps Guarneri (viola)", value: 16.0 }
    ]
  },
  {
    instruction: "Least to most sodium per serving (mg)",
    category: "Foods by Sodium Content",
    items: [
      { label: "Fresh Fruit", value: 2 },
      { label: "Milk (1 cup)", value: 105 },
      { label: "Bread (1 slice)", value: 230 },
      { label: "Pizza (1 slice)", value: 640 },
      { label: "Ramen Noodles (1 package)", value: 1820 }
    ]
  },
  {
    instruction: "Fewest to most Wikipedia articles by language",
    category: "Wikipedia by Number of Articles (thousands)",
    items: [
      { label: "Hindi Wikipedia", value: 160 },
      { label: "Japanese Wikipedia", value: 1400 },
      { label: "Russian Wikipedia", value: 1900 },
      { label: "German Wikipedia", value: 2800 },
      { label: "English Wikipedia", value: 6700 }
    ]
  },
  {
    instruction: "Fewest to most wins at the Masters Golf Tournament",
    category: "Golfers by Masters Victories",
    items: [
      { label: "Bubba Watson", value: 2 },
      { label: "Phil Mickelson", value: 3 },
      { label: "Arnold Palmer", value: 4 },
      { label: "Tiger Woods", value: 5 },
      { label: "Jack Nicklaus", value: 6 }
    ]
  },
  {
    instruction: "Shortest to longest average song length by decade (minutes)",
    category: "Pop Song Length by Decade",
    items: [
      { label: "1960s", value: 2.5 },
      { label: "1970s", value: 3.5 },
      { label: "1980s", value: 4.0 },
      { label: "1990s", value: 4.2 },
      { label: "2020s", value: 3.2 }
    ]
  },
  {
    instruction: "Least to most daily food waste per capita (grams)",
    category: "Countries by Daily Food Waste",
    items: [
      { label: "Japan", value: 150 },
      { label: "Germany", value: 200 },
      { label: "United Kingdom", value: 280 },
      { label: "United States", value: 415 },
      { label: "Australia", value: 361 }
    ]
  },
  {
    instruction: "Fewest to most lighthouses by country",
    category: "Countries by Number of Lighthouses",
    items: [
      { label: "Brazil", value: 50 },
      { label: "France", value: 150 },
      { label: "United Kingdom", value: 197 },
      { label: "Japan", value: 3300 },
      { label: "United States", value: 700 }
    ]
  },
  {
    instruction: "Least to most protein per 100g in nuts",
    category: "Nuts by Protein Content",
    items: [
      { label: "Macadamia", value: 8 },
      { label: "Cashew", value: 18 },
      { label: "Walnut", value: 15 },
      { label: "Almond", value: 21 },
      { label: "Peanut", value: 26 }
    ]
  },
  {
    instruction: "Least to most omega-3 per 100g (grams)",
    category: "Fish by Omega-3 Content",
    items: [
      { label: "Tilapia", value: 0.2 },
      { label: "Tuna (canned)", value: 0.7 },
      { label: "Trout", value: 1.1 },
      { label: "Sardine", value: 1.5 },
      { label: "Mackerel", value: 2.7 }
    ]
  },
  {
    instruction: "Fewest to most volcanic eruptions in recorded history",
    category: "Volcanoes by Number of Recorded Eruptions",
    items: [
      { label: "Mount Vesuvius (Italy)", value: 8 },
      { label: "Mauna Loa (Hawaii)", value: 33 },
      { label: "Mount Etna (Italy)", value: 109 },
      { label: "Piton de la Fournaise (Réunion)", value: 154 },
      { label: "Stromboli (Italy)", value: 200 }
    ]
  },
  {
    instruction: "Lowest to highest egg production per hen per year",
    category: "Chicken Breeds by Egg Production",
    items: [
      { label: "Silkie", value: 100 },
      { label: "Orpington", value: 175 },
      { label: "Plymouth Rock", value: 200 },
      { label: "Rhode Island Red", value: 250 },
      { label: "White Leghorn", value: 300 }
    ]
  },
  {
    instruction: "Fewest to most tectonic plates by area (million km²)",
    category: "Tectonic Plates by Area",
    items: [
      { label: "Juan de Fuca Plate", value: 0.25 },
      { label: "Arabian Plate", value: 5 },
      { label: "Australian Plate", value: 47 },
      { label: "North American Plate", value: 76 },
      { label: "Pacific Plate", value: 104 }
    ]
  },
  {
    instruction: "Lowest to highest video game unit sales (millions, all time)",
    category: "Video Games by Units Sold",
    items: [
      { label: "The Legend of Zelda: BotW", value: 31 },
      { label: "Wii Sports", value: 82 },
      { label: "Grand Theft Auto V", value: 190 },
      { label: "Tetris (all platforms)", value: 520 },
      { label: "Minecraft", value: 300 }
    ]
  },
  {
    instruction: "Fewest to most gaming console units sold (millions, lifetime)",
    category: "Gaming Consoles by Units Sold",
    items: [
      { label: "Sega Dreamcast", value: 10 },
      { label: "Xbox 360", value: 84 },
      { label: "Wii", value: 102 },
      { label: "Game Boy (all models)", value: 118 },
      { label: "PlayStation 2", value: 155 }
    ]
  },
  {
    instruction: "Fewest to most daily active users (millions, 2023)",
    category: "Messaging Apps by Daily Users",
    items: [
      { label: "Telegram", value: 55 },
      { label: "Snapchat", value: 400 },
      { label: "Instagram", value: 500 },
      { label: "Facebook Messenger", value: 600 },
      { label: "WhatsApp", value: 2000 }
    ]
  },
  {
    instruction: "Shortest to longest typical battery life of devices (hours)",
    category: "Devices by Battery Life",
    items: [
      { label: "Smartwatch (screen on)", value: 1 },
      { label: "Smartphone (heavy use)", value: 6 },
      { label: "Laptop", value: 10 },
      { label: "E-reader (Kindle)", value: 168 },
      { label: "Pacemaker", value: 87600 }
    ]
  },
  {
    instruction: "Fewest to most characters in a writing system",
    category: "Writing Systems by Character Count",
    items: [
      { label: "Hawaiian (Latin-based)", value: 13 },
      { label: "Korean (Hangul jamo)", value: 40 },
      { label: "Hindi (Devanagari)", value: 47 },
      { label: "Japanese (Hiragana + Katakana)", value: 92 },
      { label: "Chinese (commonly used)", value: 3500 }
    ]
  },
  {
    instruction: "Lowest to highest GDP per capita (USD, 2023)",
    category: "Countries by GDP Per Capita",
    items: [
      { label: "Burundi", value: 240 },
      { label: "India", value: 2400 },
      { label: "Brazil", value: 8920 },
      { label: "Germany", value: 52820 },
      { label: "Luxembourg", value: 128820 }
    ]
  },
  {
    instruction: "Fewest to most public holidays per year",
    category: "Countries by Number of Public Holidays",
    items: [
      { label: "United Kingdom", value: 8 },
      { label: "United States", value: 11 },
      { label: "Japan", value: 16 },
      { label: "India", value: 21 },
      { label: "Cambodia", value: 28 }
    ]
  },
  {
    instruction: "Fewest to most billionaires (2023)",
    category: "Countries by Number of Billionaires",
    items: [
      { label: "Japan", value: 39 },
      { label: "United Kingdom", value: 56 },
      { label: "Germany", value: 126 },
      { label: "China", value: 495 },
      { label: "United States", value: 735 }
    ]
  },
  {
    instruction: "Lowest to highest annual rainfall by country (mm average)",
    category: "Countries by Average Annual Rainfall",
    items: [
      { label: "Egypt", value: 51 },
      { label: "Saudi Arabia", value: 59 },
      { label: "Australia", value: 534 },
      { label: "United States", value: 715 },
      { label: "Colombia", value: 3240 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO biosphere reserves",
    category: "Countries by Biosphere Reserves",
    items: [
      { label: "India", value: 12 },
      { label: "China", value: 34 },
      { label: "Mexico", value: 42 },
      { label: "Russia", value: 47 },
      { label: "United States", value: 28 }
    ]
  },
  {
    instruction: "Fewest to most Wimbledon singles titles (men)",
    category: "Tennis Players by Wimbledon Titles",
    items: [
      { label: "Boris Becker", value: 3 },
      { label: "Bjorn Borg", value: 5 },
      { label: "Pete Sampras", value: 7 },
      { label: "Roger Federer", value: 8 },
      { label: "Novak Djokovic", value: 7 }
    ]
  },
  {
    instruction: "Lightest to heaviest precious stone (specific gravity)",
    category: "Gemstones by Specific Gravity",
    items: [
      { label: "Opal", value: 2.1 },
      { label: "Quartz", value: 2.65 },
      { label: "Diamond", value: 3.52 },
      { label: "Ruby/Sapphire", value: 4.0 },
      { label: "Zircon", value: 4.7 }
    ]
  },
  {
    instruction: "Lowest to highest average commute distance (km, one way)",
    category: "Countries by Average Commute Distance",
    items: [
      { label: "Japan", value: 10 },
      { label: "United Kingdom", value: 15 },
      { label: "Germany", value: 17 },
      { label: "Australia", value: 16 },
      { label: "United States", value: 25 }
    ]
  },
  {
    instruction: "Fewest to most goals in a single NHL season (player)",
    category: "NHL Players by Single-Season Goals",
    items: [
      { label: "Mario Lemieux (1988-89)", value: 85 },
      { label: "Phil Esposito (1970-71)", value: 76 },
      { label: "Teemu Selanne (1992-93)", value: 76 },
      { label: "Alexander Ovechkin (2007-08)", value: 65 },
      { label: "Wayne Gretzky (1981-82)", value: 92 }
    ]
  },
  {
    instruction: "Smallest to largest penguin species (cm height)",
    category: "Penguin Species by Height",
    items: [
      { label: "Little Blue Penguin", value: 33 },
      { label: "African Penguin", value: 60 },
      { label: "Chinstrap Penguin", value: 72 },
      { label: "King Penguin", value: 95 },
      { label: "Emperor Penguin", value: 120 }
    ]
  },
  {
    instruction: "Lightest to heaviest cat breed (kg, average)",
    category: "Cat Breeds by Weight",
    items: [
      { label: "Singapura", value: 2.5 },
      { label: "Siamese", value: 4.5 },
      { label: "British Shorthair", value: 6 },
      { label: "Norwegian Forest Cat", value: 8 },
      { label: "Maine Coon", value: 9 }
    ]
  },
  {
    instruction: "Lowest to highest cruising altitude (meters)",
    category: "Aircraft Types by Cruising Altitude",
    items: [
      { label: "Helicopter", value: 1500 },
      { label: "Small Propeller Plane", value: 3000 },
      { label: "Regional Jet", value: 8000 },
      { label: "Commercial Airliner", value: 11000 },
      { label: "U-2 Spy Plane", value: 21000 }
    ]
  },
  {
    instruction: "Fewest to most official languages",
    category: "Countries by Number of Official Languages",
    items: [
      { label: "Japan", value: 1 },
      { label: "Canada", value: 2 },
      { label: "Switzerland", value: 4 },
      { label: "South Africa", value: 11 },
      { label: "Bolivia", value: 37 }
    ]
  },
  {
    instruction: "Smallest to largest eye (mm diameter)",
    category: "Animals by Eye Size",
    items: [
      { label: "Housefly", value: 1.5 },
      { label: "Human", value: 24 },
      { label: "Horse", value: 50 },
      { label: "Blue Whale", value: 150 },
      { label: "Colossal Squid", value: 270 }
    ]
  },
  {
    instruction: "Lowest to highest elasticity (Young's modulus, GPa)",
    category: "Materials by Stiffness",
    items: [
      { label: "Rubber", value: 0.01 },
      { label: "Bone", value: 17 },
      { label: "Aluminum", value: 69 },
      { label: "Steel", value: 200 },
      { label: "Diamond", value: 1050 }
    ]
  },
  {
    instruction: "Least to most expensive city for a liter of gasoline (USD, 2023)",
    category: "Cities by Gasoline Price",
    items: [
      { label: "Caracas (Venezuela)", value: 0.02 },
      { label: "Riyadh (Saudi Arabia)", value: 0.62 },
      { label: "New York City", value: 1.05 },
      { label: "Amsterdam", value: 2.15 },
      { label: "Hong Kong", value: 2.95 }
    ]
  },
  {
    instruction: "Fewest to most annual hours of sunshine",
    category: "Cities by Annual Sunshine Hours",
    items: [
      { label: "London", value: 1480 },
      { label: "Tokyo", value: 1877 },
      { label: "Los Angeles", value: 3254 },
      { label: "Phoenix", value: 3872 },
      { label: "Yuma (Arizona)", value: 4015 }
    ]
  },
  {
    instruction: "Lowest to highest average ocean salinity (parts per thousand)",
    category: "Bodies of Water by Salinity",
    items: [
      { label: "Baltic Sea", value: 8 },
      { label: "Black Sea", value: 18 },
      { label: "Pacific Ocean", value: 34 },
      { label: "Mediterranean Sea", value: 38 },
      { label: "Dead Sea", value: 340 }
    ]
  },
  {
    instruction: "Fewest to most teeth replaced in a lifetime",
    category: "Animals by Tooth Replacement",
    items: [
      { label: "Human", value: 1 },
      { label: "Elephant", value: 6 },
      { label: "Kangaroo", value: 16 },
      { label: "Alligator", value: 2000 },
      { label: "Shark", value: 30000 }
    ]
  },
  {
    instruction: "Shortest to longest sleep per day (hours)",
    category: "Animals by Daily Sleep",
    items: [
      { label: "Giraffe", value: 1.9 },
      { label: "Horse", value: 2.9 },
      { label: "Human", value: 8 },
      { label: "Cat", value: 12.5 },
      { label: "Koala", value: 22 }
    ]
  },
  {
    instruction: "Fewest to most taste receptors for sweet, sour, etc.",
    category: "Mammals by Number of Olfactory Receptors (millions)",
    items: [
      { label: "Human", value: 6 },
      { label: "Rabbit", value: 100 },
      { label: "Dog", value: 300 },
      { label: "Bear", value: 1200 },
      { label: "Elephant", value: 2000 }
    ]
  },
  {
    instruction: "Lowest to highest lactose content (%)",
    category: "Milks by Lactose Content",
    items: [
      { label: "Buffalo Milk", value: 4.5 },
      { label: "Cow Milk", value: 4.8 },
      { label: "Goat Milk", value: 4.7 },
      { label: "Human Breast Milk", value: 7.0 },
      { label: "Horse Milk", value: 6.2 }
    ]
  },
  {
    instruction: "Least to most expensive fruit per kg (USD)",
    category: "Fruits by Price",
    items: [
      { label: "Banana", value: 1.2 },
      { label: "Apple", value: 3 },
      { label: "Mango", value: 5 },
      { label: "Dragon Fruit", value: 15 },
      { label: "Yubari Melon (Japanese)", value: 200 }
    ]
  },
  {
    instruction: "Lightest to heaviest Olympic throwing implement (kg)",
    category: "Olympic Field Events by Implement Weight",
    items: [
      { label: "Javelin (women's)", value: 0.6 },
      { label: "Javelin (men's)", value: 0.8 },
      { label: "Discus (men's)", value: 2 },
      { label: "Shot Put (women's)", value: 4 },
      { label: "Shot Put (men's)", value: 7.26 }
    ]
  },
  {
    instruction: "Shortest to longest average lifespan of household items (years)",
    category: "Household Items by Lifespan",
    items: [
      { label: "Toothbrush", value: 0.25 },
      { label: "Running Shoes", value: 1 },
      { label: "Smartphone", value: 3 },
      { label: "Mattress", value: 10 },
      { label: "Roof (asphalt shingles)", value: 25 }
    ]
  },
  {
    instruction: "Lowest to highest voltage of common batteries",
    category: "Battery Types by Voltage",
    items: [
      { label: "Watch Battery (LR44)", value: 1.5 },
      { label: "AA Battery", value: 1.5 },
      { label: "Lithium Cell (CR2032)", value: 3.0 },
      { label: "9V Battery", value: 9 },
      { label: "Car Battery", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career assists in NBA",
    category: "NBA Players by Career Assists",
    items: [
      { label: "Magic Johnson", value: 10141 },
      { label: "Steve Nash", value: 10335 },
      { label: "Mark Jackson", value: 10334 },
      { label: "Jason Kidd", value: 12091 },
      { label: "John Stockton", value: 15806 }
    ]
  },
  {
    instruction: "Lowest to highest stadium capacity (thousands)",
    category: "Stadiums by Seating Capacity",
    items: [
      { label: "Wimbledon Centre Court", value: 15 },
      { label: "Yankee Stadium (NYC)", value: 47 },
      { label: "Wembley Stadium (London)", value: 90 },
      { label: "Melbourne Cricket Ground", value: 100 },
      { label: "Rungrado May Day Stadium (Pyongyang)", value: 114 }
    ]
  },
  {
    instruction: "Fewest to most holes on a standard course",
    category: "Sports/Games by Number of Holes or Targets",
    items: [
      { label: "Bowling (pins, not holes)", value: 0 },
      { label: "Pool/Billiards (pockets)", value: 6 },
      { label: "Mini Golf", value: 18 },
      { label: "Standard Golf Course", value: 18 },
      { label: "Disc Golf (typical)", value: 18 }
    ]
  },
  {
    instruction: "Least to most annual rice consumption per capita (kg)",
    category: "Countries by Rice Consumption Per Capita",
    items: [
      { label: "United States", value: 12 },
      { label: "Brazil", value: 35 },
      { label: "Japan", value: 50 },
      { label: "Indonesia", value: 97 },
      { label: "Bangladesh", value: 160 }
    ]
  },
  {
    instruction: "Least to most annual meat consumption per capita (kg)",
    category: "Countries by Meat Consumption Per Capita",
    items: [
      { label: "India", value: 4 },
      { label: "Japan", value: 52 },
      { label: "Germany", value: 78 },
      { label: "United States", value: 124 },
      { label: "Australia", value: 116 }
    ]
  },
  {
    instruction: "Shortest to longest river in Europe (km)",
    category: "European Rivers by Length",
    items: [
      { label: "Thames (England)", value: 346 },
      { label: "Rhine", value: 1230 },
      { label: "Danube", value: 2860 },
      { label: "Ural", value: 2428 },
      { label: "Volga", value: 3530 }
    ]
  },
  {
    instruction: "Least to most daily oil consumption (million barrels/day, 2023)",
    category: "Countries by Oil Consumption",
    items: [
      { label: "Japan", value: 3.3 },
      { label: "Russia", value: 3.5 },
      { label: "India", value: 5.5 },
      { label: "China", value: 16.2 },
      { label: "United States", value: 20.0 }
    ]
  },
  {
    instruction: "Smallest to largest flower (cm diameter)",
    category: "Flowers by Size",
    items: [
      { label: "Wolffia (duckweed flower)", value: 0.03 },
      { label: "Lily of the Valley", value: 0.6 },
      { label: "Rose", value: 10 },
      { label: "Sunflower", value: 30 },
      { label: "Rafflesia arnoldii", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most vertebrae",
    category: "Animals by Number of Vertebrae",
    items: [
      { label: "Frog", value: 10 },
      { label: "Human", value: 33 },
      { label: "Giraffe (neck only: 7)", value: 33 },
      { label: "Horse", value: 54 },
      { label: "Snake (python)", value: 400 }
    ]
  },
  {
    instruction: "Lowest to highest Vitamin A per 100g (mcg RAE)",
    category: "Foods by Vitamin A Content",
    items: [
      { label: "Apple", value: 3 },
      { label: "Egg", value: 140 },
      { label: "Mango", value: 54 },
      { label: "Carrot", value: 835 },
      { label: "Beef Liver", value: 9442 }
    ]
  },
  {
    instruction: "Fewest to most career touchdowns (NFL)",
    category: "NFL Players by Career Touchdowns",
    items: [
      { label: "Joe Montana", value: 273 },
      { label: "Peyton Manning", value: 539 },
      { label: "Brett Favre", value: 508 },
      { label: "Drew Brees", value: 571 },
      { label: "Tom Brady", value: 649 }
    ]
  },
  {
    instruction: "Fewest to most career points in rugby union (international)",
    category: "Rugby Players by International Career Points",
    items: [
      { label: "Jonny Wilkinson (England)", value: 1246 },
      { label: "Dan Carter (NZ)", value: 1598 },
      { label: "Handré Pollard (SA)", value: 742 },
      { label: "Owen Farrell (England)", value: 1178 },
      { label: "Ronan O'Gara (Ireland)", value: 1083 }
    ]
  },
  {
    instruction: "Lowest to highest melting point of plastics (°C)",
    category: "Plastics by Melting Point",
    items: [
      { label: "Polyethylene (LDPE)", value: 115 },
      { label: "Polypropylene", value: 160 },
      { label: "Nylon 6", value: 220 },
      { label: "Polycarbonate", value: 267 },
      { label: "PEEK", value: 343 }
    ]
  },
  {
    instruction: "Fewest to most countries that drive on the left",
    category: "Driving Side by Region (number of countries)",
    items: [
      { label: "Americas (left-driving)", value: 4 },
      { label: "Europe (left-driving)", value: 4 },
      { label: "Africa (left-driving)", value: 15 },
      { label: "Asia (left-driving)", value: 18 },
      { label: "Oceania (left-driving)", value: 7 }
    ]
  },
  {
    instruction: "Lowest to highest average water temperature (°C, surface annual mean)",
    category: "Seas by Average Water Temperature",
    items: [
      { label: "Barents Sea", value: 4 },
      { label: "North Sea", value: 10 },
      { label: "Mediterranean Sea", value: 18 },
      { label: "Caribbean Sea", value: 27 },
      { label: "Red Sea", value: 28 }
    ]
  },
  {
    instruction: "Fewest to most medals at a single Olympics by a country",
    category: "Countries by Most Medals at a Single Olympics",
    items: [
      { label: "Jamaica (Beijing 2008)", value: 11 },
      { label: "Australia (Sydney 2000)", value: 58 },
      { label: "China (Beijing 2008)", value: 100 },
      { label: "Soviet Union (Moscow 1980)", value: 195 },
      { label: "United States (Los Angeles 1984)", value: 174 }
    ]
  },
  {
    instruction: "Shortest to longest pregnancy in mammals (days)",
    category: "Large Mammals by Pregnancy Duration",
    items: [
      { label: "Lion", value: 110 },
      { label: "Gorilla", value: 257 },
      { label: "Cow", value: 283 },
      { label: "Giraffe", value: 457 },
      { label: "African Elephant", value: 645 }
    ]
  },
  {
    instruction: "Fewest to most calories in popular fast food items",
    category: "Fast Food Items by Calories",
    items: [
      { label: "Chicken McNuggets (6 pc)", value: 250 },
      { label: "Subway 6-inch Turkey", value: 280 },
      { label: "McDonald's Big Mac", value: 550 },
      { label: "Burger King Whopper", value: 660 },
      { label: "Chipotle Burrito (loaded)", value: 1100 }
    ]
  },
  {
    instruction: "Fewest to most daily steps recommended by age group",
    category: "Step Count Recommendations by Group",
    items: [
      { label: "Elderly (70+)", value: 4000 },
      { label: "Older Adult (60-70)", value: 6000 },
      { label: "Average Adult", value: 8000 },
      { label: "Active Adult", value: 10000 },
      { label: "Children (6-12)", value: 12000 }
    ]
  },
  {
    instruction: "Shortest to longest gestation for primates (days)",
    category: "Primates by Gestation Period",
    items: [
      { label: "Mouse Lemur", value: 60 },
      { label: "Capuchin Monkey", value: 160 },
      { label: "Chimpanzee", value: 237 },
      { label: "Human", value: 270 },
      { label: "Gorilla", value: 257 }
    ]
  },
  {
    instruction: "Fewest to most career centuries in cricket (international)",
    category: "Cricket Players by International Centuries",
    items: [
      { label: "Brian Lara", value: 34 },
      { label: "Ricky Ponting", value: 71 },
      { label: "Kumar Sangakkara", value: 63 },
      { label: "Jacques Kallis", value: 62 },
      { label: "Sachin Tendulkar", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest average wave height (meters)",
    category: "Surfing Spots by Average Wave Height",
    items: [
      { label: "Waikiki Beach (Hawaii)", value: 1.0 },
      { label: "Bondi Beach (Australia)", value: 1.5 },
      { label: "Pipeline (Hawaii)", value: 3.0 },
      { label: "Teahupo'o (Tahiti)", value: 4.5 },
      { label: "Nazaré (Portugal)", value: 8.0 }
    ]
  },
  {
    instruction: "Fewest to most subscribers (millions, 2023)",
    category: "Streaming Services by Subscribers",
    items: [
      { label: "Apple TV+", value: 25 },
      { label: "Paramount+", value: 63 },
      { label: "Disney+", value: 150 },
      { label: "Netflix", value: 260 },
      { label: "Amazon Prime Video", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most calories per tablespoon (cooking oils)",
    category: "Cooking Oils by Calories Per Tablespoon",
    items: [
      { label: "Cooking Spray (PAM)", value: 7 },
      { label: "Coconut Oil", value: 117 },
      { label: "Olive Oil", value: 119 },
      { label: "Butter", value: 102 },
      { label: "Avocado Oil", value: 124 }
    ]
  },
  {
    instruction: "Shortest to longest average lifespan of a pet (years)",
    category: "Pet Animals by Lifespan",
    items: [
      { label: "Hamster", value: 2.5 },
      { label: "Guinea Pig", value: 6 },
      { label: "Dog (average)", value: 12 },
      { label: "Cat (indoor)", value: 15 },
      { label: "Parrot (African Grey)", value: 50 }
    ]
  },
  {
    instruction: "Least to most antioxidants (ORAC value per 100g)",
    category: "Foods by Antioxidant Content",
    items: [
      { label: "Banana", value: 795 },
      { label: "Apple", value: 3049 },
      { label: "Blueberry", value: 4669 },
      { label: "Dark Chocolate", value: 20816 },
      { label: "Cloves (spice)", value: 314446 }
    ]
  },
  {
    instruction: "Lowest to highest elevation airport (meters above sea level)",
    category: "Airports by Elevation",
    items: [
      { label: "Schiphol (Amsterdam)", value: -3 },
      { label: "Dubai International", value: 19 },
      { label: "Denver International", value: 1655 },
      { label: "El Alto Airport (La Paz)", value: 4061 },
      { label: "Daocheng Yading Airport (China)", value: 4411 }
    ]
  },
  {
    instruction: "Fewest to most earthquakes per year (magnitude 4+)",
    category: "Countries by Earthquake Frequency",
    items: [
      { label: "United Kingdom", value: 2 },
      { label: "Italy", value: 30 },
      { label: "United States", value: 100 },
      { label: "Indonesia", value: 350 },
      { label: "Japan", value: 500 }
    ]
  },
  {
    instruction: "Fewest to most glaciers",
    category: "Countries by Number of Glaciers",
    items: [
      { label: "France", value: 200 },
      { label: "Iceland", value: 269 },
      { label: "Chile", value: 3500 },
      { label: "Canada", value: 8700 },
      { label: "Russia", value: 8600 }
    ]
  },
  {
    instruction: "Smallest to largest seed (mm length)",
    category: "Plants by Seed Size",
    items: [
      { label: "Orchid Seed", value: 0.05 },
      { label: "Poppy Seed", value: 1 },
      { label: "Sunflower Seed", value: 12 },
      { label: "Avocado Pit", value: 50 },
      { label: "Coco de Mer (Seychelles)", value: 300 }
    ]
  },
  {
    instruction: "Shortest to longest leaf (cm)",
    category: "Trees by Leaf Length",
    items: [
      { label: "Boxwood", value: 2 },
      { label: "Maple", value: 15 },
      { label: "Banana (leaf)", value: 200 },
      { label: "Coconut Palm (frond)", value: 500 },
      { label: "Raffia Palm (leaf)", value: 2500 }
    ]
  },
  {
    instruction: "Fewest to most World Series wins (MLB team)",
    category: "MLB Teams by World Series Wins",
    items: [
      { label: "Chicago White Sox", value: 3 },
      { label: "Boston Red Sox", value: 9 },
      { label: "Oakland Athletics", value: 9 },
      { label: "St. Louis Cardinals", value: 11 },
      { label: "New York Yankees", value: 27 }
    ]
  },
  {
    instruction: "Least to most expensive wristwatch sold at auction (million USD)",
    category: "Watches by Auction Price",
    items: [
      { label: "Rolex Daytona 'Paul Newman'", value: 17.8 },
      { label: "Patek Philippe Henry Graves", value: 24 },
      { label: "Patek Philippe Grandmaster Chime", value: 31.2 },
      { label: "Breguet Marie Antoinette", value: 30 },
      { label: "Graff Hallucination", value: 55 }
    ]
  },
  {
    instruction: "Shortest to longest gestation in sea creatures (days)",
    category: "Marine Animals by Gestation Period",
    items: [
      { label: "Sea Horse", value: 14 },
      { label: "Octopus (egg incubation)", value: 50 },
      { label: "Dolphin", value: 360 },
      { label: "Sperm Whale", value: 480 },
      { label: "Elephant Seal", value: 350 }
    ]
  },
  {
    instruction: "Lowest to highest thermal expansion coefficient (×10⁻⁶/°C)",
    category: "Materials by Thermal Expansion",
    items: [
      { label: "Invar (alloy)", value: 1.2 },
      { label: "Glass (Pyrex)", value: 3.3 },
      { label: "Steel", value: 12 },
      { label: "Aluminum", value: 23 },
      { label: "Lead", value: 29 }
    ]
  },
  {
    instruction: "Smallest to largest coral reef (km²)",
    category: "Coral Reefs by Area",
    items: [
      { label: "Red Sea Coral Reef", value: 4000 },
      { label: "Andros Barrier Reef (Bahamas)", value: 5600 },
      { label: "Mesoamerican Barrier Reef", value: 28000 },
      { label: "New Caledonia Barrier Reef", value: 40000 },
      { label: "Great Barrier Reef (Australia)", value: 344400 }
    ]
  },
  {
    instruction: "Fewest to most career wickets in cricket (international)",
    category: "Cricket Bowlers by Career Wickets",
    items: [
      { label: "Glenn McGrath (Australia)", value: 563 },
      { label: "James Anderson (England)", value: 700 },
      { label: "Anil Kumble (India)", value: 619 },
      { label: "Shane Warne (Australia)", value: 708 },
      { label: "Muttiah Muralitharan (Sri Lanka)", value: 800 }
    ]
  },
  {
    instruction: "Lowest to highest global production of precious metals (tonnes/year)",
    category: "Precious Metals by Annual Production",
    items: [
      { label: "Platinum", value: 180 },
      { label: "Palladium", value: 210 },
      { label: "Gold", value: 3100 },
      { label: "Silver", value: 26000 },
      { label: "Copper", value: 22000000 }
    ]
  },
  {
    instruction: "Fewest to most native species of mammals",
    category: "Countries by Number of Mammal Species",
    items: [
      { label: "United Kingdom", value: 50 },
      { label: "Japan", value: 160 },
      { label: "United States", value: 470 },
      { label: "Colombia", value: 518 },
      { label: "Indonesia", value: 670 }
    ]
  },
  {
    instruction: "Least to most dense atmosphere (kg/m³, surface)",
    category: "Planets/Moons by Atmospheric Density",
    items: [
      { label: "Mars", value: 0.02 },
      { label: "Earth", value: 1.22 },
      { label: "Titan (Saturn moon)", value: 5.3 },
      { label: "Venus", value: 65 },
      { label: "Jupiter (1 bar level)", value: 0.16 }
    ]
  },
  {
    instruction: "Fewest to most calories per 100g in cheese",
    category: "Cheeses by Calories",
    items: [
      { label: "Cottage Cheese", value: 98 },
      { label: "Mozzarella", value: 280 },
      { label: "Brie", value: 334 },
      { label: "Cheddar", value: 403 },
      { label: "Parmesan", value: 431 }
    ]
  },
  {
    instruction: "Fewest to most bones in the human hand",
    category: "Human Body Parts by Bone Count",
    items: [
      { label: "Arm (upper)", value: 1 },
      { label: "Forearm", value: 2 },
      { label: "Wrist", value: 8 },
      { label: "Hand (without wrist)", value: 19 },
      { label: "Foot (including ankle)", value: 26 }
    ]
  },
  {
    instruction: "Least to most daily screen time by age group (hours, US average)",
    category: "Screen Time by Age Group",
    items: [
      { label: "Ages 0-2", value: 1.5 },
      { label: "Ages 65+", value: 4.5 },
      { label: "Ages 35-50", value: 6 },
      { label: "Ages 18-24", value: 7.5 },
      { label: "Ages 13-17", value: 8.5 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of salt in foods (mg sodium per 100g)",
    category: "Salty Foods by Sodium",
    items: [
      { label: "Fresh Bread", value: 400 },
      { label: "Canned Soup", value: 600 },
      { label: "Parmesan Cheese", value: 1529 },
      { label: "Salted Butter", value: 643 },
      { label: "Soy Sauce", value: 5493 }
    ]
  },
  {
    instruction: "Fewest to most goals per game average in sports",
    category: "Sports by Average Goals/Points Per Game",
    items: [
      { label: "Soccer (FIFA)", value: 2.7 },
      { label: "Ice Hockey (NHL)", value: 6 },
      { label: "Handball", value: 50 },
      { label: "Basketball (NBA)", value: 110 },
      { label: "Cricket (T20 runs)", value: 160 }
    ]
  },
  {
    instruction: "Smallest to largest national flag ratio (width:height)",
    category: "Flags by Aspect Ratio (width÷height)",
    items: [
      { label: "Switzerland (1:1)", value: 1.0 },
      { label: "United Kingdom (2:1)", value: 2.0 },
      { label: "United States (19:10)", value: 1.9 },
      { label: "Japan (3:2)", value: 1.5 },
      { label: "Qatar (11:28)", value: 2.55 }
    ]
  },
  {
    instruction: "Fewest to most career grand slams in golf",
    category: "Golfers by Career Major Championships",
    items: [
      { label: "Seve Ballesteros", value: 5 },
      { label: "Phil Mickelson", value: 6 },
      { label: "Arnold Palmer", value: 7 },
      { label: "Tiger Woods", value: 15 },
      { label: "Jack Nicklaus", value: 18 }
    ]
  },
  {
    instruction: "Least to most expensive car brand (average new car price, USD)",
    category: "Car Brands by Average Price",
    items: [
      { label: "Kia", value: 30000 },
      { label: "Toyota", value: 38000 },
      { label: "BMW", value: 60000 },
      { label: "Porsche", value: 95000 },
      { label: "Rolls-Royce", value: 380000 }
    ]
  },
  {
    instruction: "Lowest to highest horsepower (production car)",
    category: "Supercars by Horsepower",
    items: [
      { label: "Chevrolet Corvette C8", value: 495 },
      { label: "Lamborghini Huracán", value: 640 },
      { label: "Ferrari SF90 Stradale", value: 986 },
      { label: "Bugatti Chiron", value: 1500 },
      { label: "Rimac Nevera", value: 1914 }
    ]
  },
  {
    instruction: "Slowest to fastest 0-60 mph time (seconds)",
    category: "Cars by Acceleration (lower is faster)",
    items: [
      { label: "Toyota Camry", value: 7.6 },
      { label: "BMW M3", value: 3.8 },
      { label: "Porsche 911 Turbo S", value: 2.6 },
      { label: "Tesla Model S Plaid", value: 1.99 },
      { label: "Rimac Nevera", value: 1.85 }
    ]
  },
  {
    instruction: "Lowest to highest car top speed (km/h, production)",
    category: "Production Cars by Top Speed",
    items: [
      { label: "Toyota Corolla", value: 200 },
      { label: "Porsche 911 GT3", value: 318 },
      { label: "Lamborghini Aventador SVJ", value: 350 },
      { label: "Bugatti Chiron Super Sport", value: 440 },
      { label: "SSC Tuatara", value: 460 }
    ]
  },
  {
    instruction: "Shortest to longest charging time for EVs (hours, 0-100% home charger)",
    category: "Electric Cars by Home Charging Time",
    items: [
      { label: "Nissan Leaf (40 kWh)", value: 6 },
      { label: "Chevrolet Bolt", value: 10 },
      { label: "Tesla Model 3 (Standard)", value: 8 },
      { label: "Ford Mustang Mach-E", value: 11 },
      { label: "Mercedes EQS", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most World Championships in swimming (individual, career)",
    category: "Swimmers by World Championship Gold Medals",
    items: [
      { label: "Ian Thorpe", value: 6 },
      { label: "Grant Hackett", value: 7 },
      { label: "Ryan Lochte", value: 7 },
      { label: "Katie Ledecky", value: 14 },
      { label: "Michael Phelps", value: 26 }
    ]
  },
  {
    instruction: "Lightest to heaviest fruit (average single fruit, grams)",
    category: "Fruits by Average Weight",
    items: [
      { label: "Blueberry", value: 1.5 },
      { label: "Strawberry", value: 12 },
      { label: "Orange", value: 130 },
      { label: "Mango", value: 300 },
      { label: "Watermelon", value: 9000 }
    ]
  },
  {
    instruction: "Smallest to largest seed production per plant (seeds per year)",
    category: "Plants by Seed Production",
    items: [
      { label: "Coconut Palm", value: 50 },
      { label: "Apple Tree", value: 500 },
      { label: "Sunflower (per head)", value: 2000 },
      { label: "Poppy (per pod)", value: 3000 },
      { label: "Orchid", value: 3000000 }
    ]
  },
  {
    instruction: "Fewest to most career rebounds in NBA",
    category: "NBA Players by Career Rebounds",
    items: [
      { label: "Tim Duncan", value: 15091 },
      { label: "Moses Malone", value: 16212 },
      { label: "Kareem Abdul-Jabbar", value: 17440 },
      { label: "Karl Malone", value: 14968 },
      { label: "Wilt Chamberlain", value: 23924 }
    ]
  },
  {
    instruction: "Fewest to most career wins in horse racing (jockey)",
    category: "Jockeys by Career Wins",
    items: [
      { label: "Lester Piggott", value: 4493 },
      { label: "Frankie Dettori", value: 3500 },
      { label: "Laffit Pincay Jr.", value: 9530 },
      { label: "Russell Baze", value: 12842 },
      { label: "Jorge Ricardo", value: 13062 }
    ]
  },
  {
    instruction: "Lowest to highest carbon content in steel types (%)",
    category: "Steel Types by Carbon Content",
    items: [
      { label: "Low Carbon (Mild) Steel", value: 0.15 },
      { label: "Medium Carbon Steel", value: 0.35 },
      { label: "High Carbon Steel", value: 0.65 },
      { label: "Tool Steel", value: 1.0 },
      { label: "Cast Iron", value: 3.0 }
    ]
  },
  {
    instruction: "Fewest to most daily flights at an airport",
    category: "Airports by Daily Flights",
    items: [
      { label: "Singapore Changi", value: 900 },
      { label: "Dubai International", value: 1050 },
      { label: "London Heathrow", value: 1300 },
      { label: "Chicago O'Hare", value: 2400 },
      { label: "Atlanta Hartsfield-Jackson", value: 2700 }
    ]
  },
  {
    instruction: "Fewest to most career Grand Prix victories (motorcycle, MotoGP)",
    category: "MotoGP Riders by Career Wins",
    items: [
      { label: "Mick Doohan", value: 54 },
      { label: "Mike Hailwood", value: 76 },
      { label: "Giacomo Agostini", value: 122 },
      { label: "Marc Márquez", value: 85 },
      { label: "Valentino Rossi", value: 115 }
    ]
  },
  {
    instruction: "Smallest to largest landlocked country (km²)",
    category: "Landlocked Countries by Area",
    items: [
      { label: "Luxembourg", value: 2586 },
      { label: "Switzerland", value: 41285 },
      { label: "Mongolia", value: 1564116 },
      { label: "Chad", value: 1284000 },
      { label: "Kazakhstan", value: 2724900 }
    ]
  },
  {
    instruction: "Lowest to highest average wind turbine capacity (MW)",
    category: "Wind Turbine Models by Capacity",
    items: [
      { label: "Vestas V47 (1997)", value: 0.66 },
      { label: "Vestas V90 (2004)", value: 3 },
      { label: "Siemens SWT-6.0 (2014)", value: 6 },
      { label: "GE Haliade-X (2021)", value: 14 },
      { label: "Mingyang MySE 18 (2024)", value: 18 }
    ]
  },
  {
    instruction: "Lowest to highest calcium per 100g (mg)",
    category: "Foods by Calcium Content",
    items: [
      { label: "Banana", value: 5 },
      { label: "Chicken", value: 12 },
      { label: "Broccoli", value: 47 },
      { label: "Milk", value: 125 },
      { label: "Parmesan Cheese", value: 1184 }
    ]
  },
  {
    instruction: "Lowest to highest magnesium per 100g (mg)",
    category: "Foods by Magnesium Content",
    items: [
      { label: "Apple", value: 5 },
      { label: "Banana", value: 27 },
      { label: "Spinach", value: 79 },
      { label: "Dark Chocolate", value: 228 },
      { label: "Pumpkin Seeds", value: 550 }
    ]
  },
  {
    instruction: "Lowest to highest zinc per 100g (mg)",
    category: "Foods by Zinc Content",
    items: [
      { label: "Apple", value: 0.04 },
      { label: "Chicken", value: 1.3 },
      { label: "Beef", value: 4.8 },
      { label: "Pumpkin Seeds", value: 7.6 },
      { label: "Oysters", value: 78 }
    ]
  },
  {
    instruction: "Fewest to most World Championship titles (chess)",
    category: "Chess Players by World Championship Titles",
    items: [
      { label: "Bobby Fischer", value: 1 },
      { label: "Viswanathan Anand", value: 5 },
      { label: "Mikhail Botvinnik", value: 3 },
      { label: "Magnus Carlsen", value: 5 },
      { label: "Garry Kasparov", value: 6 }
    ]
  },
  {
    instruction: "Shortest to longest chess game ever played (moves)",
    category: "Chess Games by Length",
    items: [
      { label: "Fool's Mate", value: 2 },
      { label: "Scholar's Mate", value: 4 },
      { label: "Average Tournament Game", value: 40 },
      { label: "Karpov vs Kasparov 1984 G5 (124m)", value: 124 },
      { label: "Nikolić vs Arsović (1989)", value: 269 }
    ]
  },
  {
    instruction: "Fewest to most career strikeouts (MLB pitcher)",
    category: "MLB Pitchers by Career Strikeouts",
    items: [
      { label: "Roger Clemens", value: 4672 },
      { label: "Steve Carlton", value: 4136 },
      { label: "Randy Johnson", value: 4875 },
      { label: "Nolan Ryan", value: 5714 },
      { label: "Justin Verlander", value: 3416 }
    ]
  },
  {
    instruction: "Fewest to most known species of fish by family",
    category: "Fish Families by Number of Species",
    items: [
      { label: "Swordfish (Xiphiidae)", value: 1 },
      { label: "Pike (Esocidae)", value: 7 },
      { label: "Salmon/Trout (Salmonidae)", value: 220 },
      { label: "Wrasses (Labridae)", value: 630 },
      { label: "Gobies (Gobiidae)", value: 2000 }
    ]
  },
  {
    instruction: "Lowest to highest global annual CO₂ emissions by sector (%)",
    category: "Sectors by CO₂ Emissions Share",
    items: [
      { label: "Residential Buildings", value: 6 },
      { label: "Aviation", value: 3 },
      { label: "Road Transport", value: 12 },
      { label: "Industry", value: 21 },
      { label: "Electricity & Heat", value: 42 }
    ]
  },
  {
    instruction: "Shortest to longest wall (km)",
    category: "Walls by Length",
    items: [
      { label: "Berlin Wall (former)", value: 155 },
      { label: "Hadrian's Wall (UK)", value: 117 },
      { label: "Western Wall (Jerusalem)", value: 0.5 },
      { label: "US-Mexico Border Barrier", value: 1050 },
      { label: "Great Wall of China", value: 21196 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals (individual athlete)",
    category: "Athletes by Total Olympic Medals",
    items: [
      { label: "Usain Bolt", value: 8 },
      { label: "Carl Lewis", value: 10 },
      { label: "Larisa Latynina (gymnastics)", value: 18 },
      { label: "Nikolai Andrianov (gymnastics)", value: 15 },
      { label: "Michael Phelps", value: 28 }
    ]
  },
  {
    instruction: "Lowest to highest average typing speed by method (WPM)",
    category: "Typing Methods by Average Speed",
    items: [
      { label: "Smartphone (two thumbs)", value: 38 },
      { label: "Hunt and Peck", value: 30 },
      { label: "Average Touch Typist", value: 50 },
      { label: "Professional Typist", value: 75 },
      { label: "Speed Typing Champion", value: 216 }
    ]
  },
  {
    instruction: "Fewest to most colors in a rainbow",
    category: "Light Phenomena by Color Count",
    items: [
      { label: "Laser (monochromatic)", value: 1 },
      { label: "Primary Colors (light)", value: 3 },
      { label: "CMYK Color Model", value: 4 },
      { label: "Rainbow", value: 7 },
      { label: "Full Visible Spectrum (distinct hues)", value: 1000000 }
    ]
  },
  {
    instruction: "Lowest to highest specific heat capacity (J/g·°C)",
    category: "Materials by Specific Heat",
    items: [
      { label: "Gold", value: 0.13 },
      { label: "Copper", value: 0.39 },
      { label: "Iron", value: 0.45 },
      { label: "Aluminum", value: 0.90 },
      { label: "Water", value: 4.18 }
    ]
  },
  {
    instruction: "Fewest to most bones in vertebrate skeletons",
    category: "Vertebrates by Skeleton Bone Count",
    items: [
      { label: "Frog", value: 159 },
      { label: "Cat", value: 230 },
      { label: "Human", value: 206 },
      { label: "Horse", value: 205 },
      { label: "Chicken", value: 120 }
    ]
  },
  {
    instruction: "Lowest to highest annual precipitation in US cities (mm)",
    category: "US Cities by Annual Precipitation",
    items: [
      { label: "Las Vegas", value: 106 },
      { label: "Los Angeles", value: 379 },
      { label: "Denver", value: 396 },
      { label: "Chicago", value: 940 },
      { label: "Miami", value: 1575 }
    ]
  },
  {
    instruction: "Lowest to highest egg weight (grams)",
    category: "Birds by Egg Weight",
    items: [
      { label: "Hummingbird", value: 0.5 },
      { label: "Robin", value: 6 },
      { label: "Chicken", value: 58 },
      { label: "Goose", value: 200 },
      { label: "Ostrich", value: 1400 }
    ]
  },
  {
    instruction: "Fewest to most annual tornadoes by country",
    category: "Countries by Annual Tornado Count",
    items: [
      { label: "United Kingdom", value: 33 },
      { label: "Germany", value: 40 },
      { label: "Argentina", value: 60 },
      { label: "Canada", value: 100 },
      { label: "United States", value: 1200 }
    ]
  },
  {
    instruction: "Lowest to highest sugar in fruits (grams per 100g)",
    category: "Fruits by Sugar Content",
    items: [
      { label: "Avocado", value: 0.7 },
      { label: "Lemon", value: 2.5 },
      { label: "Strawberry", value: 4.9 },
      { label: "Apple", value: 10.4 },
      { label: "Grape", value: 16.3 }
    ]
  },
  {
    instruction: "Fewest to most apps available in an app store (thousands)",
    category: "App Stores by Number of Apps",
    items: [
      { label: "Amazon Appstore", value: 460 },
      { label: "Samsung Galaxy Store", value: 450 },
      { label: "Huawei AppGallery", value: 530 },
      { label: "Apple App Store", value: 1800 },
      { label: "Google Play Store", value: 2870 }
    ]
  },
  {
    instruction: "Fewest to most data centers by company (2023)",
    category: "Tech Companies by Number of Data Centers",
    items: [
      { label: "Apple", value: 12 },
      { label: "Facebook/Meta", value: 21 },
      { label: "Microsoft", value: 60 },
      { label: "Google", value: 40 },
      { label: "Amazon (AWS)", value: 100 }
    ]
  },
  {
    instruction: "Lightest to heaviest Olympic barbell (kg)",
    category: "Olympic Weightlifting Barbells by Weight",
    items: [
      { label: "Women's Training Bar", value: 15 },
      { label: "Women's Olympic Bar", value: 15 },
      { label: "Men's Olympic Bar", value: 20 },
      { label: "Safety Squat Bar", value: 25 },
      { label: "Trap/Hex Bar", value: 30 }
    ]
  },
  {
    instruction: "Lowest to highest Olympic weightlifting record (kg, men's clean & jerk)",
    category: "Weightlifting Records by Weight Class",
    items: [
      { label: "61 kg class", value: 171 },
      { label: "73 kg class", value: 199 },
      { label: "89 kg class", value: 220 },
      { label: "102 kg class", value: 233 },
      { label: "Super Heavyweight (+109 kg)", value: 264 }
    ]
  },
  {
    instruction: "Fewest to most world records in athletics (track & field, career)",
    category: "Athletes by Career World Records Set",
    items: [
      { label: "Carl Lewis", value: 1 },
      { label: "Jesse Owens", value: 4 },
      { label: "Usain Bolt", value: 3 },
      { label: "Sergey Bubka (pole vault)", value: 35 },
      { label: "Paavo Nurmi", value: 22 }
    ]
  },
  {
    instruction: "Lowest to highest global tea production (thousand tonnes, 2022)",
    category: "Countries by Tea Production",
    items: [
      { label: "Japan", value: 69 },
      { label: "Turkey", value: 280 },
      { label: "Kenya", value: 450 },
      { label: "India", value: 1350 },
      { label: "China", value: 3180 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO World Heritage Sites in danger",
    category: "Regions by Endangered UNESCO Sites",
    items: [
      { label: "Europe", value: 3 },
      { label: "Asia", value: 6 },
      { label: "Americas", value: 7 },
      { label: "Middle East", value: 16 },
      { label: "Africa", value: 17 }
    ]
  },
  {
    instruction: "Lowest to highest population growth rate (% annual, 2023)",
    category: "Countries by Population Growth Rate",
    items: [
      { label: "Japan", value: -0.5 },
      { label: "Germany", value: 0.1 },
      { label: "United States", value: 0.5 },
      { label: "India", value: 0.7 },
      { label: "Niger", value: 3.7 }
    ]
  },
  {
    instruction: "Fewest to most types of cheese produced by country",
    category: "Countries by Number of Cheese Varieties",
    items: [
      { label: "Netherlands", value: 30 },
      { label: "Switzerland", value: 450 },
      { label: "United Kingdom", value: 700 },
      { label: "Italy", value: 487 },
      { label: "France", value: 1200 }
    ]
  },
  {
    instruction: "Lowest to highest average depth of an ocean (meters)",
    category: "Oceans by Maximum Depth",
    items: [
      { label: "Arctic Ocean", value: 5450 },
      { label: "Indian Ocean", value: 7258 },
      { label: "Atlantic Ocean", value: 8376 },
      { label: "Southern Ocean", value: 7236 },
      { label: "Pacific Ocean", value: 10994 }
    ]
  },
  {
    instruction: "Fewest to most career catches in NFL",
    category: "NFL Receivers by Career Catches",
    items: [
      { label: "Randy Moss", value: 982 },
      { label: "Terrell Owens", value: 1078 },
      { label: "Tony Gonzalez", value: 1325 },
      { label: "Larry Fitzgerald", value: 1432 },
      { label: "Jerry Rice", value: 1549 }
    ]
  },
  {
    instruction: "Fewest to most total NBA championship rings (player)",
    category: "NBA Players by Championship Rings",
    items: [
      { label: "LeBron James", value: 4 },
      { label: "Kobe Bryant", value: 5 },
      { label: "Michael Jordan", value: 6 },
      { label: "Scottie Pippen", value: 6 },
      { label: "Bill Russell", value: 11 }
    ]
  },
  {
    instruction: "Fewest to most national football (soccer) league teams",
    category: "Football Leagues by Number of Teams",
    items: [
      { label: "Scottish Premiership", value: 12 },
      { label: "Bundesliga (Germany)", value: 18 },
      { label: "Premier League (England)", value: 20 },
      { label: "Major League Soccer (USA)", value: 29 },
      { label: "Indian Super League", value: 11 }
    ]
  },
  {
    instruction: "Lowest to highest greenhouse gas emissions by gas type (% of total)",
    category: "Greenhouse Gases by Contribution",
    items: [
      { label: "Fluorinated Gases", value: 2 },
      { label: "Nitrous Oxide (N₂O)", value: 6 },
      { label: "Methane (CH₄)", value: 16 },
      { label: "CO₂ (fossil fuels)", value: 65 },
      { label: "CO₂ (land use)", value: 11 }
    ]
  },
  {
    instruction: "Fewest to most tributaries of major rivers",
    category: "Rivers by Number of Major Tributaries",
    items: [
      { label: "Thames", value: 15 },
      { label: "Danube", value: 34 },
      { label: "Yangtze", value: 49 },
      { label: "Mississippi-Missouri", value: 60 },
      { label: "Amazon", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest gravity on moons (m/s²)",
    category: "Moons by Surface Gravity",
    items: [
      { label: "Deimos", value: 0.003 },
      { label: "Phobos", value: 0.006 },
      { label: "Earth's Moon", value: 1.62 },
      { label: "Europa", value: 1.31 },
      { label: "Titan", value: 1.35 }
    ]
  },
  {
    instruction: "Fewest to most protons in common elements",
    category: "Common Elements by Proton Count",
    items: [
      { label: "Hydrogen", value: 1 },
      { label: "Oxygen", value: 8 },
      { label: "Calcium", value: 20 },
      { label: "Copper", value: 29 },
      { label: "Uranium", value: 92 }
    ]
  },
  {
    instruction: "Least to most expensive coffee per kg (USD)",
    category: "Coffee Varieties by Price",
    items: [
      { label: "Standard Robusta", value: 8 },
      { label: "Colombian Arabica", value: 20 },
      { label: "Jamaican Blue Mountain", value: 120 },
      { label: "Hawaiian Kona", value: 150 },
      { label: "Kopi Luwak (Civet Coffee)", value: 700 }
    ]
  },
  {
    instruction: "Fewest to most wins at Le Mans 24 Hours (manufacturer)",
    category: "Car Manufacturers by Le Mans Wins",
    items: [
      { label: "Ford", value: 4 },
      { label: "Ferrari", value: 9 },
      { label: "Audi", value: 13 },
      { label: "Porsche", value: 19 },
      { label: "Toyota", value: 6 }
    ]
  },
  {
    instruction: "Lowest to highest global film industry revenue (billion USD, 2023)",
    category: "Countries by Film Industry Revenue",
    items: [
      { label: "South Korea", value: 1.5 },
      { label: "United Kingdom", value: 1.8 },
      { label: "Japan", value: 2.0 },
      { label: "China", value: 7.8 },
      { label: "United States/Canada", value: 9.1 }
    ]
  },
  {
    instruction: "Fewest to most annual book titles published",
    category: "Countries by Books Published Per Year (thousands)",
    items: [
      { label: "Australia", value: 25 },
      { label: "Japan", value: 68 },
      { label: "United States", value: 300 },
      { label: "United Kingdom", value: 184 },
      { label: "China", value: 510 }
    ]
  },
  {
    instruction: "Lowest to highest carbon fiber tensile modulus (GPa)",
    category: "Carbon Fiber Grades by Stiffness",
    items: [
      { label: "Standard Modulus", value: 230 },
      { label: "Intermediate Modulus", value: 290 },
      { label: "High Modulus", value: 390 },
      { label: "Ultra-High Modulus", value: 590 },
      { label: "Pitch-Based UHM", value: 900 }
    ]
  },
  {
    instruction: "Lowest to highest pressure at ocean depths (atmospheres)",
    category: "Ocean Depths by Pressure",
    items: [
      { label: "Surface", value: 1 },
      { label: "Scuba Diving Limit (40m)", value: 5 },
      { label: "Titanic Wreck (3800m)", value: 380 },
      { label: "Average Ocean Floor (3700m)", value: 370 },
      { label: "Mariana Trench (10994m)", value: 1100 }
    ]
  },
  {
    instruction: "Smallest to largest dinosaur (meters long, estimated)",
    category: "Dinosaurs by Length",
    items: [
      { label: "Microraptor", value: 0.8 },
      { label: "Velociraptor", value: 2 },
      { label: "Tyrannosaurus Rex", value: 12 },
      { label: "Brachiosaurus", value: 26 },
      { label: "Argentinosaurus", value: 35 }
    ]
  },
  {
    instruction: "Lightest to heaviest dinosaur (tonnes, estimated)",
    category: "Dinosaurs by Weight",
    items: [
      { label: "Compsognathus", value: 0.003 },
      { label: "Velociraptor", value: 0.015 },
      { label: "Stegosaurus", value: 3.5 },
      { label: "Tyrannosaurus Rex", value: 8.0 },
      { label: "Argentinosaurus", value: 80 }
    ]
  },
  {
    instruction: "Fewest to most teeth in dinosaurs (estimated)",
    category: "Dinosaurs by Tooth Count",
    items: [
      { label: "Gallimimus (beaked, toothless)", value: 0 },
      { label: "Tyrannosaurus Rex", value: 60 },
      { label: "Triceratops", value: 800 },
      { label: "Hadrosaur (duck-billed)", value: 1400 },
      { label: "Nigersaurus", value: 500 }
    ]
  },
  {
    instruction: "Earliest to latest mass extinction event (million years ago)",
    category: "Mass Extinctions by Date",
    items: [
      { label: "Ordovician-Silurian (445 Ma)", value: 1 },
      { label: "Late Devonian (372 Ma)", value: 2 },
      { label: "Permian-Triassic (252 Ma)", value: 3 },
      { label: "Triassic-Jurassic (201 Ma)", value: 4 },
      { label: "Cretaceous-Paleogene (66 Ma)", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most career slam dunks in NBA",
    category: "NBA Players by Career Dunks",
    items: [
      { label: "Michael Jordan", value: 800 },
      { label: "LeBron James", value: 1200 },
      { label: "Shaquille O'Neal", value: 2800 },
      { label: "Dwight Howard", value: 2900 },
      { label: "DeAndre Jordan", value: 2500 }
    ]
  },
  {
    instruction: "Fewest to most career hat tricks in soccer",
    category: "Soccer Players by Career Hat Tricks",
    items: [
      { label: "Neymar", value: 28 },
      { label: "Robert Lewandowski", value: 33 },
      { label: "Luis Suárez", value: 29 },
      { label: "Lionel Messi", value: 57 },
      { label: "Cristiano Ronaldo", value: 63 }
    ]
  },
  {
    instruction: "Lowest to highest olive oil production (thousand tonnes, 2022)",
    category: "Countries by Olive Oil Production",
    items: [
      { label: "Portugal", value: 120 },
      { label: "Turkey", value: 230 },
      { label: "Italy", value: 250 },
      { label: "Greece", value: 275 },
      { label: "Spain", value: 1400 }
    ]
  },
  {
    instruction: "Fewest to most Lego sets produced (thousand different sets, all time)",
    category: "Lego Themes by Number of Sets",
    items: [
      { label: "Architecture", value: 0.06 },
      { label: "Harry Potter", value: 0.15 },
      { label: "Star Wars", value: 0.9 },
      { label: "City", value: 1.3 },
      { label: "Technic", value: 0.7 }
    ]
  },
  {
    instruction: "Fewest to most trophies won by soccer clubs (all competitions)",
    category: "Soccer Clubs by Total Trophies",
    items: [
      { label: "Manchester City", value: 35 },
      { label: "Bayern Munich", value: 82 },
      { label: "Barcelona", value: 99 },
      { label: "Real Madrid", value: 99 },
      { label: "Al Ahly (Egypt)", value: 120 }
    ]
  },
  {
    instruction: "Lowest to highest wine production (million hectoliters, 2022)",
    category: "Countries by Wine Production",
    items: [
      { label: "Germany", value: 9 },
      { label: "United States", value: 22 },
      { label: "Spain", value: 30 },
      { label: "France", value: 46 },
      { label: "Italy", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most daily Wikipedia page views (millions, 2023)",
    category: "Websites by Daily Page Views",
    items: [
      { label: "Reddit", value: 57 },
      { label: "Wikipedia", value: 270 },
      { label: "Twitter/X", value: 175 },
      { label: "YouTube", value: 2000 },
      { label: "Google Search", value: 8500 }
    ]
  },
  {
    instruction: "Smallest to largest sand dune (meters high)",
    category: "Sand Dunes by Height",
    items: [
      { label: "Jockey's Ridge (North Carolina)", value: 30 },
      { label: "Pilat Dune (France)", value: 110 },
      { label: "Star Dune (Colorado)", value: 229 },
      { label: "Badain Jaran Dunes (China)", value: 500 },
      { label: "Cerro Blanco (Peru)", value: 1176 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in gymnastics",
    category: "Gymnasts by Olympic Medals",
    items: [
      { label: "Nadia Comaneci", value: 5 },
      { label: "Mary Lou Retton", value: 5 },
      { label: "Simone Biles", value: 11 },
      { label: "Nikolai Andrianov", value: 15 },
      { label: "Larisa Latynina", value: 18 }
    ]
  },
  {
    instruction: "Lowest to highest copper production by country (thousand tonnes, 2022)",
    category: "Countries by Copper Production",
    items: [
      { label: "Australia", value: 830 },
      { label: "China", value: 1900 },
      { label: "DR Congo", value: 2400 },
      { label: "Peru", value: 2400 },
      { label: "Chile", value: 5300 }
    ]
  },
  {
    instruction: "Fewest to most daily calories burned by activity (150 lb person/hour)",
    category: "Activities by Calorie Burn Rate",
    items: [
      { label: "Sleeping", value: 46 },
      { label: "Sitting (desk work)", value: 102 },
      { label: "Cooking", value: 150 },
      { label: "Gardening", value: 270 },
      { label: "Rock Climbing", value: 680 }
    ]
  },
  {
    instruction: "Fewest to most known exoplanets discovered by telescope/mission",
    category: "Space Missions by Exoplanets Discovered",
    items: [
      { label: "Hubble Space Telescope", value: 52 },
      { label: "CoRoT", value: 32 },
      { label: "TESS", value: 400 },
      { label: "Kepler", value: 2780 },
      { label: "Ground-based (total)", value: 900 }
    ]
  },
  {
    instruction: "Lightest to heaviest sports equipment (kg)",
    category: "Sports Equipment by Weight",
    items: [
      { label: "Badminton Shuttlecock", value: 0.005 },
      { label: "Cricket Ball", value: 0.16 },
      { label: "Bowling Ball (max)", value: 7.26 },
      { label: "Curling Stone", value: 20 },
      { label: "Rowing Boat (Coxless Four)", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most lightbulb lumens (typical)",
    category: "Light Sources by Brightness (lumens)",
    items: [
      { label: "Candle", value: 13 },
      { label: "Night Light", value: 50 },
      { label: "100W Incandescent Bulb", value: 1600 },
      { label: "Car Headlight (LED)", value: 3000 },
      { label: "Stadium Floodlight", value: 150000 }
    ]
  },
  {
    instruction: "Least to most expensive hotel room per night (USD, most expensive suite)",
    category: "Hotels by Most Expensive Suite",
    items: [
      { label: "Ritz-Carlton NYC (Presidential)", value: 15000 },
      { label: "Burj Al Arab (Royal Suite)", value: 24000 },
      { label: "Four Seasons NYC (Ty Warner Suite)", value: 50000 },
      { label: "Hotel President Wilson Geneva (Royal Penthouse)", value: 80000 },
      { label: "Lover's Deep Submarine (per night)", value: 175000 }
    ]
  },
  {
    instruction: "Fewest to most annual visitors to national parks (millions, US)",
    category: "US National Parks by Annual Visitors",
    items: [
      { label: "Gates of the Arctic", value: 0.01 },
      { label: "Denali", value: 0.6 },
      { label: "Yosemite", value: 3.9 },
      { label: "Yellowstone", value: 4.5 },
      { label: "Great Smoky Mountains", value: 13.3 }
    ]
  },
  {
    instruction: "Fewest to most annual marathon finishers (thousands)",
    category: "Marathons by Number of Finishers",
    items: [
      { label: "Boston Marathon", value: 26 },
      { label: "Berlin Marathon", value: 35 },
      { label: "Chicago Marathon", value: 40 },
      { label: "London Marathon", value: 42 },
      { label: "New York City Marathon", value: 51 }
    ]
  },
  {
    instruction: "Lowest to highest social media revenue per user (USD/year, 2023)",
    category: "Social Media by Revenue Per User",
    items: [
      { label: "TikTok", value: 5 },
      { label: "Snapchat", value: 8 },
      { label: "Twitter/X", value: 9 },
      { label: "Instagram (Meta)", value: 28 },
      { label: "Facebook (Meta)", value: 40 }
    ]
  },
  {
    instruction: "Fewest to most piano concertos composed",
    category: "Composers by Number of Piano Concertos",
    items: [
      { label: "Tchaikovsky", value: 3 },
      { label: "Beethoven", value: 5 },
      { label: "Rachmaninoff", value: 4 },
      { label: "Liszt", value: 3 },
      { label: "Mozart", value: 27 }
    ]
  },
  {
    instruction: "Fewest to most daily post office locations by country",
    category: "Countries by Number of Post Offices",
    items: [
      { label: "Australia", value: 4300 },
      { label: "United Kingdom", value: 11500 },
      { label: "Japan", value: 24000 },
      { label: "China", value: 55000 },
      { label: "India", value: 155000 }
    ]
  },
  {
    instruction: "Fewest to most golf courses by country",
    category: "Countries by Number of Golf Courses",
    items: [
      { label: "South Korea", value: 560 },
      { label: "Germany", value: 740 },
      { label: "Australia", value: 1620 },
      { label: "United Kingdom", value: 2820 },
      { label: "United States", value: 16752 }
    ]
  },
  {
    instruction: "Fewest to most hotel rooms by city (thousands)",
    category: "Cities by Hotel Room Count",
    items: [
      { label: "Paris", value: 85 },
      { label: "London", value: 110 },
      { label: "New York City", value: 120 },
      { label: "Orlando", value: 130 },
      { label: "Las Vegas", value: 150 }
    ]
  },
  {
    instruction: "Smallest to largest mangrove forest (km²)",
    category: "Mangrove Forests by Area",
    items: [
      { label: "Everglades (Florida)", value: 2000 },
      { label: "Pichavaram (India)", value: 1100 },
      { label: "Mekong Delta (Vietnam)", value: 2000 },
      { label: "Niger Delta (Nigeria)", value: 7000 },
      { label: "Sundarbans (Bangladesh/India)", value: 10000 }
    ]
  },
  {
    instruction: "Lowest to highest urban green space per capita (m²)",
    category: "Cities by Green Space Per Person",
    items: [
      { label: "Mumbai", value: 1.2 },
      { label: "Tokyo", value: 3 },
      { label: "Paris", value: 12 },
      { label: "London", value: 33 },
      { label: "Vienna", value: 120 }
    ]
  },
  {
    instruction: "Fewest to most public libraries by country (thousands)",
    category: "Countries by Public Library Count",
    items: [
      { label: "Japan", value: 3.3 },
      { label: "Germany", value: 9.2 },
      { label: "United Kingdom", value: 3.6 },
      { label: "Russia", value: 46 },
      { label: "China", value: 58 }
    ]
  },
  {
    instruction: "Lowest to highest maple syrup production (thousand tonnes, 2022)",
    category: "Regions by Maple Syrup Production",
    items: [
      { label: "Vermont (USA)", value: 2.7 },
      { label: "New York (USA)", value: 0.8 },
      { label: "Ontario (Canada)", value: 5 },
      { label: "New Brunswick (Canada)", value: 3 },
      { label: "Quebec (Canada)", value: 58 }
    ]
  },
  {
    instruction: "Fewest to most satellites of gas giants (confirmed, 2023)",
    category: "Gas Giants by Number of Confirmed Moons",
    items: [
      { label: "Neptune", value: 16 },
      { label: "Uranus", value: 27 },
      { label: "Jupiter", value: 95 },
      { label: "Saturn", value: 146 },
      { label: "Total outer solar system", value: 284 }
    ]
  },
  {
    instruction: "Fewest to most theaters/cinemas by country (thousands)",
    category: "Countries by Number of Cinema Screens",
    items: [
      { label: "Japan", value: 3.6 },
      { label: "Germany", value: 4.7 },
      { label: "India", value: 9.5 },
      { label: "United States", value: 44 },
      { label: "China", value: 87 }
    ]
  },
  {
    instruction: "Shortest to longest spacewalk (hours, single EVA)",
    category: "Spacewalks by Duration",
    items: [
      { label: "Alexei Leonov (first, 1965)", value: 0.2 },
      { label: "Ed White (1965)", value: 0.37 },
      { label: "Average ISS EVA", value: 6.5 },
      { label: "Jim Voss & Susan Helms (2001)", value: 8.9 },
      { label: "Total Spacewalk Record (A. Solovyev)", value: 82 }
    ]
  },
  {
    instruction: "Fewest to most countries bordered (land borders)",
    category: "Countries by Number of Neighboring Countries",
    items: [
      { label: "Japan (island nation)", value: 0 },
      { label: "United Kingdom (island)", value: 1 },
      { label: "United States", value: 2 },
      { label: "Germany", value: 9 },
      { label: "China", value: 14 }
    ]
  },
  {
    instruction: "Lowest to highest average rent for office space (USD/m²/year)",
    category: "Cities by Office Rent",
    items: [
      { label: "Cairo", value: 180 },
      { label: "Berlin", value: 500 },
      { label: "Singapore", value: 720 },
      { label: "London (City)", value: 1100 },
      { label: "Hong Kong Central", value: 1500 }
    ]
  },
  {
    instruction: "Lowest to highest global banana production (million tonnes, 2022)",
    category: "Countries by Banana Production",
    items: [
      { label: "Colombia", value: 4 },
      { label: "Guatemala", value: 4.5 },
      { label: "Philippines", value: 9 },
      { label: "China", value: 12 },
      { label: "India", value: 33 }
    ]
  },
  {
    instruction: "Fewest to most career Cy Young Awards won (MLB pitcher)",
    category: "MLB Pitchers by Cy Young Awards",
    items: [
      { label: "Sandy Koufax", value: 3 },
      { label: "Pedro Martinez", value: 3 },
      { label: "Greg Maddux", value: 4 },
      { label: "Randy Johnson", value: 5 },
      { label: "Roger Clemens", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most active submarines by country (2023)",
    category: "Countries by Submarine Fleet Size",
    items: [
      { label: "Japan", value: 22 },
      { label: "India", value: 18 },
      { label: "Russia", value: 58 },
      { label: "United States", value: 68 },
      { label: "China", value: 78 }
    ]
  },
  {
    instruction: "Lowest to highest pH of common beverages",
    category: "Beverages by pH Level",
    items: [
      { label: "Coca-Cola", value: 2.5 },
      { label: "Orange Juice", value: 3.5 },
      { label: "Beer", value: 4.0 },
      { label: "Coffee", value: 5.0 },
      { label: "Green Tea", value: 7.0 }
    ]
  },
  {
    instruction: "Fewest to most satellites in a constellation (2023)",
    category: "Satellite Constellations by Size",
    items: [
      { label: "Galileo (EU GPS)", value: 30 },
      { label: "GPS (US)", value: 31 },
      { label: "GLONASS (Russia)", value: 24 },
      { label: "Iridium", value: 66 },
      { label: "Starlink (SpaceX)", value: 5400 }
    ]
  },
  {
    instruction: "Least to most annual saffron production (tonnes)",
    category: "Countries by Saffron Production",
    items: [
      { label: "Greece", value: 6 },
      { label: "Morocco", value: 8 },
      { label: "Spain", value: 1 },
      { label: "India (Kashmir)", value: 22 },
      { label: "Iran", value: 430 }
    ]
  },
  {
    instruction: "Fewest to most billionaire cities (number of billionaires in city, 2023)",
    category: "Cities by Number of Billionaires",
    items: [
      { label: "London", value: 37 },
      { label: "Singapore", value: 34 },
      { label: "Mumbai", value: 54 },
      { label: "Moscow", value: 76 },
      { label: "New York City", value: 101 }
    ]
  },
  {
    instruction: "Lowest to highest melting point of common cooking fats (°C)",
    category: "Cooking Fats by Smoke Point (°C)",
    items: [
      { label: "Butter", value: 150 },
      { label: "Coconut Oil", value: 177 },
      { label: "Olive Oil (extra virgin)", value: 191 },
      { label: "Canola Oil", value: 204 },
      { label: "Avocado Oil", value: 271 }
    ]
  },
  {
    instruction: "Fewest to most Stanley Cup wins (NHL team)",
    category: "NHL Teams by Stanley Cup Wins",
    items: [
      { label: "Pittsburgh Penguins", value: 5 },
      { label: "Chicago Blackhawks", value: 6 },
      { label: "Detroit Red Wings", value: 11 },
      { label: "Toronto Maple Leafs", value: 13 },
      { label: "Montreal Canadiens", value: 24 }
    ]
  },
  {
    instruction: "Fewest to most electoral votes (US state, 2024)",
    category: "US States by Electoral Votes",
    items: [
      { label: "Wyoming", value: 3 },
      { label: "Hawaii", value: 4 },
      { label: "Ohio", value: 17 },
      { label: "New York", value: 28 },
      { label: "California", value: 54 }
    ]
  },
  {
    instruction: "Fewest to most daily cups of tea consumed per capita",
    category: "Countries by Tea Consumption Per Capita (cups/day)",
    items: [
      { label: "United States", value: 0.4 },
      { label: "Japan", value: 2.1 },
      { label: "United Kingdom", value: 2.7 },
      { label: "Turkey", value: 4.4 },
      { label: "Ireland", value: 4.8 }
    ]
  },
  {
    instruction: "Fewest to most career saves in MLB",
    category: "MLB Closers by Career Saves",
    items: [
      { label: "Dennis Eckersley", value: 390 },
      { label: "Lee Smith", value: 478 },
      { label: "Trevor Hoffman", value: 601 },
      { label: "Mariano Rivera", value: 652 },
      { label: "Kenley Jansen", value: 430 }
    ]
  },
  {
    instruction: "Smallest to largest metropolitan area (km²)",
    category: "Metropolitan Areas by Land Area",
    items: [
      { label: "Paris Metro Area", value: 2845 },
      { label: "London Metro Area", value: 8382 },
      { label: "Los Angeles Metro Area", value: 12562 },
      { label: "Tokyo Metro Area", value: 13572 },
      { label: "New York Metro Area", value: 34490 }
    ]
  },
  {
    instruction: "Fewest to most aircraft carriers by country (2023)",
    category: "Countries by Aircraft Carrier Count",
    items: [
      { label: "France", value: 1 },
      { label: "Russia", value: 1 },
      { label: "China", value: 3 },
      { label: "India", value: 2 },
      { label: "United States", value: 11 }
    ]
  },
  {
    instruction: "Lowest to highest global market share in smartphones (%, 2023)",
    category: "Smartphone Brands by Market Share",
    items: [
      { label: "Google Pixel", value: 2 },
      { label: "Xiaomi", value: 13 },
      { label: "Oppo", value: 9 },
      { label: "Apple", value: 20 },
      { label: "Samsung", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most vowels in a language's vowel system",
    category: "Languages by Number of Vowels",
    items: [
      { label: "Arabic", value: 3 },
      { label: "Spanish", value: 5 },
      { label: "English", value: 12 },
      { label: "French", value: 15 },
      { label: "Danish", value: 20 }
    ]
  },
  {
    instruction: "Least to most electric vehicle sales by country (millions, 2023)",
    category: "Countries by EV Sales",
    items: [
      { label: "Japan", value: 0.1 },
      { label: "United Kingdom", value: 0.3 },
      { label: "United States", value: 1.4 },
      { label: "Germany", value: 0.7 },
      { label: "China", value: 8.1 }
    ]
  },
  {
    instruction: "Fewest to most ingredients in classic cocktails",
    category: "Cocktails by Number of Ingredients",
    items: [
      { label: "Shot (1 spirit)", value: 1 },
      { label: "Gin & Tonic", value: 2 },
      { label: "Margarita", value: 3 },
      { label: "Mojito", value: 5 },
      { label: "Long Island Iced Tea", value: 6 }
    ]
  },
  {
    instruction: "Lowest to highest global catch of seafood (million tonnes, 2022)",
    category: "Countries by Seafood Catch",
    items: [
      { label: "Japan", value: 3.2 },
      { label: "India", value: 7.5 },
      { label: "Vietnam", value: 8.4 },
      { label: "Indonesia", value: 15 },
      { label: "China", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most total NBA MVP awards won",
    category: "NBA Players by MVP Awards",
    items: [
      { label: "Kobe Bryant", value: 1 },
      { label: "Tim Duncan", value: 2 },
      { label: "LeBron James", value: 4 },
      { label: "Michael Jordan", value: 5 },
      { label: "Kareem Abdul-Jabbar", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most medals at the Winter Olympics (all time by country)",
    category: "Countries by Winter Olympic Medals",
    items: [
      { label: "South Korea", value: 70 },
      { label: "France", value: 139 },
      { label: "United States", value: 330 },
      { label: "Germany (incl. unified)", value: 408 },
      { label: "Norway", value: 405 }
    ]
  },
  {
    instruction: "Fewest to most amusement parks by country",
    category: "Countries by Number of Amusement Parks",
    items: [
      { label: "France", value: 300 },
      { label: "Germany", value: 400 },
      { label: "Japan", value: 200 },
      { label: "China", value: 2500 },
      { label: "United States", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest milk production (million tonnes, 2022)",
    category: "Countries by Milk Production",
    items: [
      { label: "New Zealand", value: 22 },
      { label: "Germany", value: 33 },
      { label: "United States", value: 103 },
      { label: "European Union (total)", value: 161 },
      { label: "India", value: 221 }
    ]
  },
  {
    instruction: "Lowest to highest global steel production (million tonnes, 2022)",
    category: "Countries by Steel Production",
    items: [
      { label: "Germany", value: 37 },
      { label: "Japan", value: 89 },
      { label: "United States", value: 80 },
      { label: "India", value: 125 },
      { label: "China", value: 1013 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Creative Cities",
    category: "Countries by UNESCO Creative Cities",
    items: [
      { label: "South Korea", value: 8 },
      { label: "Italy", value: 15 },
      { label: "France", value: 12 },
      { label: "Spain", value: 14 },
      { label: "China", value: 20 }
    ]
  },
  {
    instruction: "Lightest to heaviest sumo wrestling division (kg minimum)",
    category: "Sumo Divisions by Weight",
    items: [
      { label: "Jonokuchi (entry)", value: 0 },
      { label: "Jonidan", value: 70 },
      { label: "Sandanme", value: 90 },
      { label: "Makushita", value: 100 },
      { label: "Makuuchi (top division avg)", value: 160 }
    ]
  },
  {
    instruction: "Fewest to most pages in famous graphic novels",
    category: "Graphic Novels by Page Count",
    items: [
      { label: "Watchmen (Alan Moore)", value: 416 },
      { label: "Maus (Art Spiegelman)", value: 296 },
      { label: "Persepolis (Marjane Satrapi)", value: 341 },
      { label: "Sandman (Gaiman, omnibus)", value: 2000 },
      { label: "One Piece (Oda, total)", value: 25000 }
    ]
  },
  {
    instruction: "Lowest to highest diamond production (million carats, 2022)",
    category: "Countries by Diamond Production",
    items: [
      { label: "South Africa", value: 7 },
      { label: "Canada", value: 16 },
      { label: "Angola", value: 9 },
      { label: "DR Congo", value: 12 },
      { label: "Russia", value: 42 }
    ]
  },
  {
    instruction: "Fewest to most career PGA Tour wins",
    category: "Golfers by PGA Tour Victories",
    items: [
      { label: "Phil Mickelson", value: 45 },
      { label: "Arnold Palmer", value: 62 },
      { label: "Jack Nicklaus", value: 73 },
      { label: "Tiger Woods", value: 82 },
      { label: "Sam Snead", value: 82 }
    ]
  },
  {
    instruction: "Least to most venomous jellyfish (deadliness ranking)",
    category: "Jellyfish by Danger Level",
    items: [
      { label: "Moon Jellyfish", value: 1 },
      { label: "Lion's Mane Jellyfish", value: 2 },
      { label: "Portuguese Man o' War", value: 3 },
      { label: "Irukandji Jellyfish", value: 4 },
      { label: "Box Jellyfish (Chironex)", value: 5 }
    ]
  },
  {
    instruction: "Lowest to highest average precipitation in a rainforest (mm/year)",
    category: "Rainforests by Annual Precipitation",
    items: [
      { label: "Atlantic Forest (Brazil)", value: 1500 },
      { label: "Daintree (Australia)", value: 2000 },
      { label: "Congo Rainforest", value: 1800 },
      { label: "Amazon Rainforest", value: 2300 },
      { label: "Chocó (Colombia)", value: 10000 }
    ]
  },
  {
    instruction: "Fewest to most annual typhoons/hurricanes by ocean basin",
    category: "Ocean Basins by Annual Tropical Cyclones",
    items: [
      { label: "South Atlantic", value: 0.1 },
      { label: "North Indian Ocean", value: 5 },
      { label: "North Atlantic", value: 14 },
      { label: "Eastern Pacific", value: 16 },
      { label: "Western Pacific", value: 26 }
    ]
  },
  {
    instruction: "Lowest to highest global rubber production (thousand tonnes, 2022)",
    category: "Countries by Rubber Production",
    items: [
      { label: "Vietnam", value: 1200 },
      { label: "Malaysia", value: 570 },
      { label: "India", value: 775 },
      { label: "Indonesia", value: 3100 },
      { label: "Thailand", value: 4700 }
    ]
  },
  {
    instruction: "Fewest to most career hat tricks in NHL",
    category: "NHL Players by Career Hat Tricks",
    items: [
      { label: "Jaromír Jágr", value: 12 },
      { label: "Brett Hull", value: 14 },
      { label: "Mario Lemieux", value: 40 },
      { label: "Mike Bossy", value: 39 },
      { label: "Wayne Gretzky", value: 50 }
    ]
  },
  {
    instruction: "Shortest to longest opera house history (years since founding)",
    category: "Opera Houses by Age (founded)",
    items: [
      { label: "Sydney Opera House (1973)", value: 1973 },
      { label: "Metropolitan Opera NYC (1883)", value: 1883 },
      { label: "Royal Opera House London (1732)", value: 1732 },
      { label: "La Scala Milan (1778)", value: 1778 },
      { label: "Teatro di San Carlo Naples (1737)", value: 1737 }
    ]
  },
  {
    instruction: "Fewest to most national team caps in soccer (career)",
    category: "Soccer Players by International Caps",
    items: [
      { label: "Pelé", value: 92 },
      { label: "Lionel Messi", value: 187 },
      { label: "Cristiano Ronaldo", value: 212 },
      { label: "Bader Al-Mutawa (Kuwait)", value: 196 },
      { label: "Soh Chin Ann (Malaysia)", value: 219 }
    ]
  },
  {
    instruction: "Lowest to highest elevation of a lake (meters above sea level)",
    category: "Lakes by Elevation",
    items: [
      { label: "Dead Sea", value: -430 },
      { label: "Caspian Sea", value: -28 },
      { label: "Lake Michigan", value: 176 },
      { label: "Lake Titicaca (Peru/Bolivia)", value: 3812 },
      { label: "Ojos del Salado crater lake", value: 6390 }
    ]
  },
  {
    instruction: "Fewest to most daily subway riders in US cities (thousands)",
    category: "US Cities by Subway Ridership",
    items: [
      { label: "Atlanta (MARTA)", value: 160 },
      { label: "San Francisco (BART)", value: 250 },
      { label: "Washington D.C. (Metro)", value: 550 },
      { label: "Chicago (CTA)", value: 600 },
      { label: "New York City (MTA)", value: 3600 }
    ]
  },
  {
    instruction: "Fewest to most career Grand Prix podiums (F1)",
    category: "F1 Drivers by Career Podiums",
    items: [
      { label: "Niki Lauda", value: 54 },
      { label: "Ayrton Senna", value: 80 },
      { label: "Alain Prost", value: 106 },
      { label: "Michael Schumacher", value: 155 },
      { label: "Lewis Hamilton", value: 197 }
    ]
  },
  {
    instruction: "Lowest to highest cocoa production (thousand tonnes, 2022)",
    category: "Countries by Cocoa Production",
    items: [
      { label: "Indonesia", value: 660 },
      { label: "Ecuador", value: 365 },
      { label: "Nigeria", value: 280 },
      { label: "Ghana", value: 700 },
      { label: "Ivory Coast", value: 2200 }
    ]
  },
  {
    instruction: "Fewest to most breweries per capita (per million people)",
    category: "Countries by Breweries Per Capita",
    items: [
      { label: "Japan", value: 4 },
      { label: "Australia", value: 28 },
      { label: "Germany", value: 18 },
      { label: "United Kingdom", value: 32 },
      { label: "Belgium", value: 30 }
    ]
  },
  {
    instruction: "Lowest to highest global gold reserves (tonnes, central bank)",
    category: "Countries by Gold Reserves",
    items: [
      { label: "Japan", value: 846 },
      { label: "China", value: 2235 },
      { label: "France", value: 2437 },
      { label: "Germany", value: 3353 },
      { label: "United States", value: 8133 }
    ]
  },
  {
    instruction: "Fewest to most annual film productions by country",
    category: "Countries by Films Produced Per Year",
    items: [
      { label: "South Korea", value: 500 },
      { label: "Japan", value: 600 },
      { label: "United States", value: 800 },
      { label: "China", value: 900 },
      { label: "India (Bollywood + regional)", value: 2000 }
    ]
  },
  {
    instruction: "Shortest to longest coastline in Europe (km)",
    category: "European Countries by Coastline",
    items: [
      { label: "Belgium", value: 67 },
      { label: "Germany", value: 2389 },
      { label: "Italy", value: 7600 },
      { label: "United Kingdom", value: 12429 },
      { label: "Norway", value: 58133 }
    ]
  },
  {
    instruction: "Lowest to highest reading speed by medium (WPM average)",
    category: "Reading by Medium and Speed",
    items: [
      { label: "Legal Documents", value: 100 },
      { label: "Textbook", value: 200 },
      { label: "Novel", value: 250 },
      { label: "Newspaper", value: 300 },
      { label: "Speed Reader (trained)", value: 700 }
    ]
  },
  {
    instruction: "Fewest to most career penalty kicks scored (soccer)",
    category: "Soccer Players by Career Penalties Scored",
    items: [
      { label: "Thierry Henry", value: 28 },
      { label: "Frank Lampard", value: 56 },
      { label: "Lionel Messi", value: 110 },
      { label: "Cristiano Ronaldo", value: 160 },
      { label: "Robert Lewandowski", value: 100 }
    ]
  },
  {
    instruction: "Smallest to largest hedge maze (m², approximate)",
    category: "Hedge Mazes by Area",
    items: [
      { label: "Hampton Court Palace Maze (UK)", value: 1350 },
      { label: "Ashcombe Maze (Australia)", value: 3600 },
      { label: "Longleat Hedge Maze (UK)", value: 6000 },
      { label: "Dole Plantation Maze (Hawaii)", value: 12140 },
      { label: "Masone Labyrinth (Italy)", value: 70000 }
    ]
  },
  {
    instruction: "Fewest to most rings in the Olympic flag (color symbolism)",
    category: "Olympic Symbols",
    items: [
      { label: "One continent (blue=Europe)", value: 1 },
      { label: "Two continents", value: 2 },
      { label: "Three continents", value: 3 },
      { label: "Four continents", value: 4 },
      { label: "Five continents (5 rings)", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most Michelin 3-star restaurants by country (2023)",
    category: "Countries by 3-Star Michelin Restaurants",
    items: [
      { label: "United States", value: 14 },
      { label: "Germany", value: 11 },
      { label: "Spain", value: 14 },
      { label: "France", value: 30 },
      { label: "Japan", value: 14 }
    ]
  },
  {
    instruction: "Lowest to highest average depth of major seas (meters)",
    category: "Seas by Average Depth",
    items: [
      { label: "North Sea", value: 95 },
      { label: "Baltic Sea", value: 55 },
      { label: "Black Sea", value: 1253 },
      { label: "Caribbean Sea", value: 2200 },
      { label: "Philippine Sea", value: 4108 }
    ]
  },
  {
    instruction: "Fewest to most letters in the shortest country name",
    category: "Countries by Name Length (English)",
    items: [
      { label: "Chad", value: 4 },
      { label: "Cuba", value: 4 },
      { label: "Italy", value: 5 },
      { label: "Germany", value: 7 },
      { label: "United Arab Emirates", value: 20 }
    ]
  },
  {
    instruction: "Lightest to heaviest atmosphere (surface pressure, kPa)",
    category: "Rocky Planets/Moons by Surface Pressure",
    items: [
      { label: "Mars", value: 0.6 },
      { label: "Earth", value: 101 },
      { label: "Titan", value: 147 },
      { label: "Venus", value: 9200 },
      { label: "Jupiter (1 bar reference)", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most registered vehicles per 1000 people",
    category: "Countries by Vehicles Per Capita",
    items: [
      { label: "India", value: 22 },
      { label: "China", value: 209 },
      { label: "Japan", value: 591 },
      { label: "Italy", value: 695 },
      { label: "United States", value: 838 }
    ]
  },
  {
    instruction: "Lowest to highest average teacher salary (USD/year, secondary school)",
    category: "Countries by Teacher Salary",
    items: [
      { label: "India", value: 5000 },
      { label: "Brazil", value: 15000 },
      { label: "United States", value: 62000 },
      { label: "Germany", value: 80000 },
      { label: "Luxembourg", value: 110000 }
    ]
  },
  {
    instruction: "Fewest to most endemic bird species",
    category: "Countries by Endemic Bird Species",
    items: [
      { label: "Japan", value: 13 },
      { label: "Philippines", value: 239 },
      { label: "Brazil", value: 277 },
      { label: "Australia", value: 363 },
      { label: "Indonesia", value: 516 }
    ]
  },
  {
    instruction: "Smallest to largest telescope mirror diameter (meters)",
    category: "Telescopes by Mirror Size",
    items: [
      { label: "Hubble Space Telescope", value: 2.4 },
      { label: "Keck Observatory", value: 10 },
      { label: "Gran Telescopio Canarias", value: 10.4 },
      { label: "Extremely Large Telescope (under construction)", value: 39.3 },
      { label: "James Webb Space Telescope", value: 6.5 }
    ]
  },
  {
    instruction: "Fewest to most commercial airports in Europe",
    category: "European Countries by Commercial Airports",
    items: [
      { label: "Luxembourg", value: 1 },
      { label: "Switzerland", value: 6 },
      { label: "Italy", value: 44 },
      { label: "Germany", value: 36 },
      { label: "United Kingdom", value: 46 }
    ]
  },
  {
    instruction: "Lowest to highest cotton production (million tonnes, 2022)",
    category: "Countries by Cotton Production",
    items: [
      { label: "Australia", value: 0.8 },
      { label: "Pakistan", value: 1.1 },
      { label: "Brazil", value: 2.8 },
      { label: "United States", value: 3.1 },
      { label: "India", value: 6.0 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of women in parliament (2023)",
    category: "Countries by Women in Parliament",
    items: [
      { label: "Japan", value: 10 },
      { label: "United States", value: 29 },
      { label: "France", value: 37 },
      { label: "Sweden", value: 46 },
      { label: "Rwanda", value: 61 }
    ]
  },
  {
    instruction: "Fewest to most Instagram followers (millions, individual, 2023)",
    category: "Celebrities by Instagram Followers",
    items: [
      { label: "Dwayne Johnson", value: 395 },
      { label: "Kylie Jenner", value: 400 },
      { label: "Lionel Messi", value: 496 },
      { label: "Selena Gomez", value: 430 },
      { label: "Cristiano Ronaldo", value: 614 }
    ]
  },
  {
    instruction: "Fewest to most career rushing yards (NFL)",
    category: "NFL Running Backs by Career Rushing Yards",
    items: [
      { label: "Adrian Peterson", value: 14918 },
      { label: "Barry Sanders", value: 15269 },
      { label: "Frank Gore", value: 16000 },
      { label: "Walter Payton", value: 16726 },
      { label: "Emmitt Smith", value: 18355 }
    ]
  },
  {
    instruction: "Lowest to highest average wage growth (% annual, 2023)",
    category: "Countries by Wage Growth",
    items: [
      { label: "Japan", value: 1.2 },
      { label: "Germany", value: 3.5 },
      { label: "United States", value: 4.1 },
      { label: "United Kingdom", value: 6.7 },
      { label: "Turkey", value: 67 }
    ]
  },
  {
    instruction: "Fewest to most volcanoes on other planets (known or suspected)",
    category: "Celestial Bodies by Number of Volcanoes",
    items: [
      { label: "Earth's Moon", value: 0 },
      { label: "Mars", value: 24 },
      { label: "Earth", value: 1350 },
      { label: "Venus", value: 1600 },
      { label: "Io (Jupiter's moon)", value: 400 }
    ]
  },
  {
    instruction: "Fewest to most Nobel Prizes in Physics by country",
    category: "Countries by Physics Nobel Prizes",
    items: [
      { label: "France", value: 13 },
      { label: "Japan", value: 12 },
      { label: "Germany", value: 25 },
      { label: "United Kingdom", value: 29 },
      { label: "United States", value: 99 }
    ]
  },
  {
    instruction: "Fewest to most Nobel Prizes in Literature by country",
    category: "Countries by Literature Nobel Prizes",
    items: [
      { label: "Japan", value: 2 },
      { label: "Germany", value: 8 },
      { label: "United States", value: 13 },
      { label: "United Kingdom", value: 12 },
      { label: "France", value: 16 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP spent on education",
    category: "Countries by Education Spending (% of GDP)",
    items: [
      { label: "Japan", value: 3.3 },
      { label: "United States", value: 5.0 },
      { label: "United Kingdom", value: 5.5 },
      { label: "Sweden", value: 7.7 },
      { label: "Cuba", value: 13 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP spent on healthcare",
    category: "Countries by Healthcare Spending (% of GDP)",
    items: [
      { label: "India", value: 3.3 },
      { label: "Japan", value: 10.7 },
      { label: "United Kingdom", value: 11.9 },
      { label: "Germany", value: 12.7 },
      { label: "United States", value: 17.3 }
    ]
  },
  {
    instruction: "Fewest to most career Grand Slam doubles titles (tennis)",
    category: "Tennis Players by Grand Slam Doubles Titles",
    items: [
      { label: "Venus Williams", value: 14 },
      { label: "Martina Navratilova", value: 31 },
      { label: "Margaret Court", value: 19 },
      { label: "Todd Woodbridge", value: 16 },
      { label: "Bob Bryan / Mike Bryan", value: 16 }
    ]
  },
  {
    instruction: "Lowest to highest solar panel efficiency (%, best commercial)",
    category: "Solar Panel Technologies by Efficiency",
    items: [
      { label: "Thin-Film (CdTe)", value: 18 },
      { label: "Polycrystalline Silicon", value: 20 },
      { label: "Monocrystalline Silicon", value: 22 },
      { label: "PERC Monocrystalline", value: 24 },
      { label: "Heterojunction (HJT)", value: 26 }
    ]
  },
  {
    instruction: "Lowest to highest depth of permafrost (meters)",
    category: "Regions by Permafrost Depth",
    items: [
      { label: "Southern Alaska", value: 10 },
      { label: "Canada (northern)", value: 100 },
      { label: "Northern Russia", value: 600 },
      { label: "Siberia (central)", value: 1500 },
      { label: "Eastern Siberia (record)", value: 1650 }
    ]
  },
  {
    instruction: "Smallest to largest litter size (average births per litter)",
    category: "Mammals by Litter Size",
    items: [
      { label: "Elephant", value: 1 },
      { label: "Human", value: 1 },
      { label: "Cat", value: 4 },
      { label: "Dog", value: 6 },
      { label: "Tenrec (Madagascar)", value: 32 }
    ]
  },
  {
    instruction: "Lowest to highest frequency of natural disasters per decade",
    category: "Disaster Types by Annual Frequency (average)",
    items: [
      { label: "Volcanic Eruptions", value: 50 },
      { label: "Earthquakes (M6+)", value: 150 },
      { label: "Tropical Cyclones", value: 80 },
      { label: "Floods", value: 175 },
      { label: "Storms (all types)", value: 250 }
    ]
  },
  {
    instruction: "Fewest to most islands in a state/territory (US)",
    category: "US States by Number of Islands",
    items: [
      { label: "Rhode Island", value: 35 },
      { label: "New York", value: 50 },
      { label: "Florida", value: 4500 },
      { label: "Michigan", value: 3200 },
      { label: "Alaska", value: 33904 }
    ]
  },
  {
    instruction: "Shortest to longest reign of a monarch",
    category: "Monarchs by Length of Reign (years)",
    items: [
      { label: "Lady Jane Grey (England)", value: 0.025 },
      { label: "Edward VIII (UK)", value: 0.9 },
      { label: "Queen Victoria (UK)", value: 63.7 },
      { label: "Queen Elizabeth II (UK)", value: 70.2 },
      { label: "Louis XIV (France)", value: 72.1 }
    ]
  },
  {
    instruction: "Smallest to largest glacier by area (km²)",
    category: "Glaciers by Area",
    items: [
      { label: "Mer de Glace (France)", value: 30 },
      { label: "Aletsch Glacier (Switzerland)", value: 86 },
      { label: "Vatnajökull (Iceland)", value: 7700 },
      { label: "Malaspina Glacier (Alaska)", value: 3880 },
      { label: "Antarctic Ice Sheet", value: 14000000 }
    ]
  },
  {
    instruction: "Fewest to most known species of butterflies by region",
    category: "Regions by Butterfly Species Count",
    items: [
      { label: "United Kingdom", value: 60 },
      { label: "Europe (total)", value: 480 },
      { label: "North America", value: 750 },
      { label: "Africa", value: 3600 },
      { label: "South America (Neotropics)", value: 7700 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of electricity from nuclear power",
    category: "Countries by Nuclear Electricity Share (%)",
    items: [
      { label: "Japan", value: 7 },
      { label: "United States", value: 19 },
      { label: "United Kingdom", value: 15 },
      { label: "South Korea", value: 29 },
      { label: "France", value: 69 }
    ]
  },
  {
    instruction: "Lowest to highest annual chocolate production (thousand tonnes)",
    category: "Countries by Chocolate Production",
    items: [
      { label: "Japan", value: 100 },
      { label: "Italy", value: 200 },
      { label: "United States", value: 580 },
      { label: "Switzerland", value: 200 },
      { label: "Germany", value: 1300 }
    ]
  },
  {
    instruction: "Fewest to most paintings in a museum collection",
    category: "Museums by Painting Collection Size",
    items: [
      { label: "Uffizi Gallery (Florence)", value: 2500 },
      { label: "National Gallery (London)", value: 2300 },
      { label: "Prado (Madrid)", value: 7600 },
      { label: "Louvre (Paris)", value: 7500 },
      { label: "Hermitage (St. Petersburg)", value: 17000 }
    ]
  },
  {
    instruction: "Fewest to most zoos and aquariums by country",
    category: "Countries by Number of Zoos",
    items: [
      { label: "Australia", value: 60 },
      { label: "Japan", value: 160 },
      { label: "Germany", value: 400 },
      { label: "China", value: 200 },
      { label: "United States", value: 350 }
    ]
  },
  {
    instruction: "Fewest to most commercial fishing vessels by country",
    category: "Countries by Fishing Fleet Size (thousands)",
    items: [
      { label: "United States", value: 75 },
      { label: "Japan", value: 150 },
      { label: "Indonesia", value: 500 },
      { label: "Vietnam", value: 700 },
      { label: "China", value: 900 }
    ]
  },
  {
    instruction: "Lowest to highest child mortality rate (per 1000 live births, 2022)",
    category: "Countries by Child Mortality Rate",
    items: [
      { label: "Japan", value: 2 },
      { label: "United Kingdom", value: 4 },
      { label: "United States", value: 6 },
      { label: "Brazil", value: 14 },
      { label: "Nigeria", value: 110 }
    ]
  },
  {
    instruction: "Fewest to most Olympic swimming world records (career)",
    category: "Swimmers by Career World Records",
    items: [
      { label: "Ian Thorpe", value: 13 },
      { label: "Katie Ledecky", value: 16 },
      { label: "Mark Spitz", value: 26 },
      { label: "Michael Phelps", value: 39 },
      { label: "Arne Borg (1920s-30s)", value: 32 }
    ]
  },
  {
    instruction: "Lowest to highest density of roads (km per km² of land)",
    category: "Countries by Road Density",
    items: [
      { label: "Australia", value: 0.11 },
      { label: "United States", value: 0.69 },
      { label: "Germany", value: 1.80 },
      { label: "Japan", value: 3.23 },
      { label: "Belgium", value: 5.06 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO intangible cultural heritage elements for food",
    category: "Food Traditions on UNESCO List",
    items: [
      { label: "Neapolitan Pizza Making", value: 1 },
      { label: "French Gastronomy", value: 1 },
      { label: "Turkish Coffee", value: 1 },
      { label: "Kimchi Making (Korea)", value: 1 },
      { label: "Mediterranean Diet (multi-country)", value: 4 }
    ]
  },
  {
    instruction: "Lowest to highest annual sunshine hours by country (average)",
    category: "Countries by Average Annual Sunshine Hours",
    items: [
      { label: "Norway", value: 1460 },
      { label: "United Kingdom", value: 1500 },
      { label: "Germany", value: 1600 },
      { label: "United States", value: 2500 },
      { label: "Egypt", value: 3500 }
    ]
  },
  {
    instruction: "Fewest to most roller coaster inversions (single coaster)",
    category: "Roller Coasters by Number of Inversions",
    items: [
      { label: "Space Mountain (Disney)", value: 0 },
      { label: "Corkscrew (Cedar Point)", value: 3 },
      { label: "Banshee (Kings Island)", value: 7 },
      { label: "The Smiler (Alton Towers)", value: 14 },
      { label: "Eejanaika (Fuji-Q Highland, Japan)", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most total solar eclipses per century",
    category: "Centuries by Total Solar Eclipses",
    items: [
      { label: "19th Century (1801-1900)", value: 63 },
      { label: "20th Century (1901-2000)", value: 72 },
      { label: "21st Century (2001-2100)", value: 68 },
      { label: "22nd Century (2101-2200)", value: 73 },
      { label: "23rd Century (2201-2300)", value: 71 }
    ]
  },
  {
    instruction: "Fewest to most bridges in a city",
    category: "Cities by Number of Bridges",
    items: [
      { label: "London", value: 35 },
      { label: "New York City", value: 65 },
      { label: "St. Petersburg (Russia)", value: 342 },
      { label: "Venice", value: 391 },
      { label: "Hamburg (Germany)", value: 2496 }
    ]
  },
  {
    instruction: "Lowest to highest altitude commercial airport (feet above sea level)",
    category: "World's Highest Commercial Airports (feet)",
    items: [
      { label: "Lhasa Gonggar (Tibet)", value: 11713 },
      { label: "Juliaca (Peru)", value: 12552 },
      { label: "El Alto (Bolivia)", value: 13325 },
      { label: "Qamdo Bamda (Tibet)", value: 14219 },
      { label: "Daocheng Yading (China)", value: 14472 }
    ]
  },
  {
    instruction: "Fewest to most career centuries in Test cricket",
    category: "Cricket Batsmen by Test Centuries",
    items: [
      { label: "Virat Kohli", value: 29 },
      { label: "Ricky Ponting", value: 41 },
      { label: "Steve Smith (Australia)", value: 32 },
      { label: "Jacques Kallis", value: 45 },
      { label: "Sachin Tendulkar", value: 51 }
    ]
  },
  {
    instruction: "Lowest to highest electric vehicle range (km, EPA estimated)",
    category: "Electric Cars by Range",
    items: [
      { label: "Mini Cooper SE", value: 183 },
      { label: "Nissan Leaf (standard)", value: 240 },
      { label: "Chevrolet Bolt EV", value: 416 },
      { label: "Tesla Model S Long Range", value: 634 },
      { label: "Mercedes EQS 450+ (2023)", value: 560 }
    ]
  },
  {
    instruction: "Fewest to most career 3-pointers made (NBA)",
    category: "NBA Players by Career 3-Pointers",
    items: [
      { label: "Kobe Bryant", value: 1827 },
      { label: "Kyle Korver", value: 2450 },
      { label: "Reggie Miller", value: 2560 },
      { label: "Ray Allen", value: 2973 },
      { label: "Stephen Curry", value: 3747 }
    ]
  },
  {
    instruction: "Shortest to longest book ever published (estimated words)",
    category: "Famous Long Books by Word Count",
    items: [
      { label: "The Great Gatsby", value: 47094 },
      { label: "The Bible (KJV)", value: 783137 },
      { label: "War and Peace", value: 580000 },
      { label: "In Search of Lost Time (Proust)", value: 1267069 },
      { label: "Artamène (longest novel ever)", value: 2100000 }
    ]
  },
  {
    instruction: "Fewest to most species of coral worldwide",
    category: "Coral Types by Species Count",
    items: [
      { label: "Fire Corals", value: 50 },
      { label: "Soft Corals", value: 800 },
      { label: "Black Corals", value: 280 },
      { label: "Hard (Stony) Corals", value: 1500 },
      { label: "All Coral Species (total)", value: 6000 }
    ]
  },
  {
    instruction: "Fewest to most career wins in women's tennis (Open Era)",
    category: "Women's Tennis Players by Career Wins",
    items: [
      { label: "Serena Williams", value: 856 },
      { label: "Steffi Graf", value: 900 },
      { label: "Chris Evert", value: 1309 },
      { label: "Billie Jean King", value: 695 },
      { label: "Martina Navratilova", value: 1442 }
    ]
  },
  {
    instruction: "Fewest to most venomous fish species in a region",
    category: "Regions by Venomous Fish Species",
    items: [
      { label: "Mediterranean Sea", value: 20 },
      { label: "Caribbean Sea", value: 45 },
      { label: "Red Sea", value: 60 },
      { label: "Great Barrier Reef", value: 100 },
      { label: "Indo-Pacific (total)", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest global natural gas production (billion m³, 2022)",
    category: "Countries by Natural Gas Production",
    items: [
      { label: "Canada", value: 185 },
      { label: "China", value: 220 },
      { label: "Iran", value: 260 },
      { label: "Russia", value: 618 },
      { label: "United States", value: 978 }
    ]
  },
  {
    instruction: "Fewest to most career TKO/KO wins in boxing (heavyweight era)",
    category: "Boxers by Career Knockouts",
    items: [
      { label: "Floyd Mayweather Jr.", value: 27 },
      { label: "Muhammad Ali", value: 37 },
      { label: "Mike Tyson", value: 44 },
      { label: "George Foreman", value: 68 },
      { label: "Archie Moore", value: 132 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Global Geoparks",
    category: "Countries by UNESCO Global Geoparks",
    items: [
      { label: "United Kingdom", value: 8 },
      { label: "Italy", value: 11 },
      { label: "Japan", value: 10 },
      { label: "Spain", value: 16 },
      { label: "China", value: 41 }
    ]
  },
  {
    instruction: "Lowest to highest average internet speed (Mbps, download, 2023)",
    category: "Countries by Average Internet Speed",
    items: [
      { label: "India", value: 50 },
      { label: "Brazil", value: 100 },
      { label: "United States", value: 200 },
      { label: "Japan", value: 180 },
      { label: "Singapore", value: 280 }
    ]
  },
  {
    instruction: "Fewest to most career aces in tennis (men's)",
    category: "Tennis Players by Career Aces",
    items: [
      { label: "Rafael Nadal", value: 4500 },
      { label: "Roger Federer", value: 11478 },
      { label: "Novak Djokovic", value: 9500 },
      { label: "Ivo Karlovic", value: 13728 },
      { label: "John Isner", value: 14470 }
    ]
  },
  {
    instruction: "Smallest to largest wetland (km²)",
    category: "Wetlands by Area",
    items: [
      { label: "Camargue (France)", value: 930 },
      { label: "Everglades (USA)", value: 6105 },
      { label: "Okavango Delta (Botswana)", value: 22000 },
      { label: "Sundarbans (Bangladesh/India)", value: 26000 },
      { label: "Pantanal (Brazil/Bolivia/Paraguay)", value: 195000 }
    ]
  },
  {
    instruction: "Lowest to highest cocoa butter content in chocolate (%)",
    category: "Chocolate Types by Cocoa Butter Content",
    items: [
      { label: "White Chocolate", value: 20 },
      { label: "Milk Chocolate", value: 15 },
      { label: "Semi-Sweet Chocolate", value: 27 },
      { label: "Bittersweet Chocolate", value: 35 },
      { label: "Dark Chocolate (90%+ cacao)", value: 45 }
    ]
  },
  {
    instruction: "Fewest to most career interceptions (NFL)",
    category: "NFL Players by Career Interceptions",
    items: [
      { label: "Deion Sanders", value: 53 },
      { label: "Ed Reed", value: 64 },
      { label: "Rod Woodson", value: 71 },
      { label: "Emlen Tunnell", value: 79 },
      { label: "Paul Krause", value: 81 }
    ]
  },
  {
    instruction: "Fewest to most annual festivals in a country",
    category: "Countries by Number of Annual Festivals",
    items: [
      { label: "Japan", value: 100 },
      { label: "Germany", value: 500 },
      { label: "United States", value: 1000 },
      { label: "China", value: 2000 },
      { label: "India", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest foreign direct investment received (billion USD, 2022)",
    category: "Countries by FDI Inflows",
    items: [
      { label: "Japan", value: 20 },
      { label: "India", value: 49 },
      { label: "Brazil", value: 73 },
      { label: "China", value: 189 },
      { label: "United States", value: 285 }
    ]
  },
  {
    instruction: "Fewest to most botanical gardens by country",
    category: "Countries by Number of Botanical Gardens",
    items: [
      { label: "Japan", value: 55 },
      { label: "Australia", value: 84 },
      { label: "United States", value: 200 },
      { label: "Germany", value: 100 },
      { label: "China", value: 250 }
    ]
  },
  {
    instruction: "Fewest to most career doubles in MLB",
    category: "MLB Players by Career Doubles",
    items: [
      { label: "Cal Ripken Jr.", value: 603 },
      { label: "George Brett", value: 665 },
      { label: "Stan Musial", value: 725 },
      { label: "Pete Rose", value: 746 },
      { label: "Tris Speaker", value: 792 }
    ]
  },
  {
    instruction: "Lowest to highest density of doctors (per 10,000 people)",
    category: "Countries by Doctor Density",
    items: [
      { label: "India", value: 7 },
      { label: "Japan", value: 26 },
      { label: "United States", value: 26 },
      { label: "Germany", value: 44 },
      { label: "Cuba", value: 84 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Man and the Biosphere reserves in a country",
    category: "Countries by Biosphere Reserves (2023)",
    items: [
      { label: "Japan", value: 10 },
      { label: "Germany", value: 16 },
      { label: "China", value: 34 },
      { label: "Spain", value: 53 },
      { label: "Mexico", value: 42 }
    ]
  },
  {
    instruction: "Fewest to most career shutouts (MLB pitcher)",
    category: "MLB Pitchers by Career Shutouts",
    items: [
      { label: "Roger Clemens", value: 46 },
      { label: "Christy Mathewson", value: 79 },
      { label: "Nolan Ryan", value: 61 },
      { label: "Tom Seaver", value: 61 },
      { label: "Walter Johnson", value: 110 }
    ]
  },
  {
    instruction: "Shortest to longest coastline of US states (km)",
    category: "US States by Coastline Length",
    items: [
      { label: "New Hampshire", value: 21 },
      { label: "Connecticut", value: 0 },
      { label: "California", value: 1352 },
      { label: "Florida", value: 2170 },
      { label: "Alaska", value: 10690 }
    ]
  },
  {
    instruction: "Fewest to most World Championship titles in darts",
    category: "Darts Players by World Championship Titles",
    items: [
      { label: "Adrian Lewis", value: 2 },
      { label: "Gary Anderson", value: 2 },
      { label: "Michael van Gerwen", value: 3 },
      { label: "Eric Bristow", value: 5 },
      { label: "Phil Taylor", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most annual cheese consumption per capita (kg)",
    category: "Countries by Cheese Consumption Per Capita",
    items: [
      { label: "Japan", value: 2.7 },
      { label: "United States", value: 18 },
      { label: "Germany", value: 25 },
      { label: "France", value: 27 },
      { label: "Denmark", value: 29 }
    ]
  },
  {
    instruction: "Lowest to highest altitude sickness risk (meters above sea level)",
    category: "Altitude Effects on Human Body",
    items: [
      { label: "Sea Level (no effect)", value: 0 },
      { label: "High Altitude (mild risk)", value: 2500 },
      { label: "Very High Altitude (moderate risk)", value: 3500 },
      { label: "Extreme Altitude (severe risk)", value: 5500 },
      { label: "Death Zone (Everest)", value: 8000 }
    ]
  },
  {
    instruction: "Fewest to most career wins in Snooker World Championship",
    category: "Snooker Players by World Championship Titles",
    items: [
      { label: "Mark Williams", value: 3 },
      { label: "Ronnie O'Sullivan", value: 7 },
      { label: "Steve Davis", value: 6 },
      { label: "Stephen Hendry", value: 7 },
      { label: "Joe Davis", value: 15 }
    ]
  },
  {
    instruction: "Lowest to highest global wheat production (million tonnes, 2022)",
    category: "Countries by Wheat Production",
    items: [
      { label: "Australia", value: 36 },
      { label: "United States", value: 45 },
      { label: "Russia", value: 92 },
      { label: "India", value: 106 },
      { label: "China", value: 138 }
    ]
  },
  {
    instruction: "Lowest to highest global coal production (million tonnes, 2022)",
    category: "Countries by Coal Production",
    items: [
      { label: "Australia", value: 443 },
      { label: "Russia", value: 444 },
      { label: "United States", value: 540 },
      { label: "India", value: 893 },
      { label: "China", value: 4500 }
    ]
  },
  {
    instruction: "Fewest to most career triple-doubles in NBA",
    category: "NBA Players by Career Triple-Doubles",
    items: [
      { label: "LeBron James", value: 112 },
      { label: "Magic Johnson", value: 138 },
      { label: "Jason Kidd", value: 107 },
      { label: "Oscar Robertson", value: 181 },
      { label: "Russell Westbrook", value: 199 }
    ]
  },
  {
    instruction: "Fewest to most annual patent grants by country (thousands, 2022)",
    category: "Countries by Patent Grants",
    items: [
      { label: "United Kingdom", value: 15 },
      { label: "Germany", value: 25 },
      { label: "Japan", value: 186 },
      { label: "United States", value: 353 },
      { label: "China", value: 798 }
    ]
  },
  {
    instruction: "Lowest to highest bauxite production (million tonnes, 2022)",
    category: "Countries by Bauxite Production",
    items: [
      { label: "India", value: 23 },
      { label: "Indonesia", value: 30 },
      { label: "China", value: 82 },
      { label: "Guinea", value: 82 },
      { label: "Australia", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most national football teams in a confederation (FIFA)",
    category: "FIFA Confederations by Number of Members",
    items: [
      { label: "OFC (Oceania)", value: 11 },
      { label: "CONMEBOL (South America)", value: 10 },
      { label: "CONCACAF (North/Central America)", value: 35 },
      { label: "UEFA (Europe)", value: 55 },
      { label: "CAF (Africa)", value: 54 }
    ]
  },
  {
    instruction: "Lowest to highest peak power output of a human (watts)",
    category: "Human Activities by Peak Power Output",
    items: [
      { label: "Sleeping", value: 80 },
      { label: "Walking", value: 300 },
      { label: "Cycling (recreational)", value: 200 },
      { label: "Sprinting", value: 2000 },
      { label: "Olympic Weightlifting (snatch)", value: 5000 }
    ]
  },
  {
    instruction: "Fewest to most islands in a US state",
    category: "US Territories/States by Island Count",
    items: [
      { label: "Connecticut", value: 0 },
      { label: "Massachusetts", value: 125 },
      { label: "Washington State", value: 445 },
      { label: "Wisconsin", value: 950 },
      { label: "Alaska", value: 33904 }
    ]
  },
  {
    instruction: "Fewest to most annual olive production (thousand tonnes)",
    category: "Countries by Olive Production",
    items: [
      { label: "Italy", value: 2000 },
      { label: "Turkey", value: 1700 },
      { label: "Greece", value: 1900 },
      { label: "Morocco", value: 2000 },
      { label: "Spain", value: 6500 }
    ]
  },
  {
    instruction: "Lowest to highest world record in men's 100m (seconds, lower is better)",
    category: "100m Sprint World Records by Era",
    items: [
      { label: "Usain Bolt (2009)", value: 9.58 },
      { label: "Asafa Powell (2008)", value: 9.72 },
      { label: "Tim Montgomery (2002)", value: 9.78 },
      { label: "Carl Lewis (1991)", value: 9.86 },
      { label: "Jim Hines (1968)", value: 9.95 }
    ]
  },
  {
    instruction: "Fewest to most career slam titles in badminton (All England Open)",
    category: "Badminton Players by All England Titles",
    items: [
      { label: "Taufik Hidayat", value: 1 },
      { label: "Lin Dan", value: 6 },
      { label: "Lee Chong Wei", value: 4 },
      { label: "Rudy Hartono", value: 8 },
      { label: "Viktor Axelsen", value: 3 }
    ]
  },
  {
    instruction: "Lowest to highest electricity price for households (USD per kWh, 2023)",
    category: "Countries by Residential Electricity Price",
    items: [
      { label: "India", value: 0.08 },
      { label: "United States", value: 0.17 },
      { label: "Japan", value: 0.24 },
      { label: "United Kingdom", value: 0.34 },
      { label: "Germany", value: 0.41 }
    ]
  },
  {
    instruction: "Fewest to most career points in international rugby league",
    category: "Rugby League Players by International Points",
    items: [
      { label: "Billy Slater (Australia)", value: 104 },
      { label: "Darren Lockyer (Australia)", value: 170 },
      { label: "Cameron Smith (Australia)", value: 256 },
      { label: "Johnathan Thurston (Australia)", value: 382 },
      { label: "Stacey Jones (NZ)", value: 136 }
    ]
  },
  {
    instruction: "Lowest to highest rare earth element production (thousand tonnes, 2022)",
    category: "Countries by Rare Earth Production",
    items: [
      { label: "India", value: 2.9 },
      { label: "Russia", value: 2.6 },
      { label: "Australia", value: 18 },
      { label: "United States", value: 43 },
      { label: "China", value: 210 }
    ]
  },
  {
    instruction: "Fewest to most solar panels installed (GW capacity, 2023)",
    category: "Countries by Solar Power Capacity",
    items: [
      { label: "United Kingdom", value: 15 },
      { label: "India", value: 73 },
      { label: "Germany", value: 76 },
      { label: "United States", value: 142 },
      { label: "China", value: 609 }
    ]
  },
  {
    instruction: "Fewest to most windmills historically (not modern turbines)",
    category: "Countries by Historic Windmill Count",
    items: [
      { label: "Germany", value: 2000 },
      { label: "United Kingdom", value: 3000 },
      { label: "Spain", value: 500 },
      { label: "Denmark", value: 3000 },
      { label: "Netherlands", value: 9000 }
    ]
  },
  {
    instruction: "Fewest to most career wins in Formula 1 by team (constructors)",
    category: "F1 Teams by Constructor Wins",
    items: [
      { label: "Renault/Alpine", value: 35 },
      { label: "Williams", value: 114 },
      { label: "McLaren", value: 183 },
      { label: "Mercedes", value: 128 },
      { label: "Ferrari", value: 243 }
    ]
  },
  {
    instruction: "Lowest to highest atmospheric CO₂ in Earth's history (ppm)",
    category: "Earth's Atmospheric CO₂ by Era",
    items: [
      { label: "Last Glacial Maximum (20,000 ya)", value: 180 },
      { label: "Pre-Industrial (1750)", value: 280 },
      { label: "1960", value: 317 },
      { label: "2000", value: 370 },
      { label: "2024", value: 425 }
    ]
  },
  {
    instruction: "Fewest to most national holidays featuring fireworks",
    category: "Countries by Fireworks Traditions",
    items: [
      { label: "Japan (Hanabi)", value: 1 },
      { label: "United States (July 4th + NYE)", value: 2 },
      { label: "India (Diwali + others)", value: 3 },
      { label: "China (Spring Festival + others)", value: 4 },
      { label: "Brazil (multiple festivals)", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most Ryder Cup wins (team)",
    category: "Ryder Cup by Wins (through 2023)",
    items: [
      { label: "Tie results", value: 2 },
      { label: "Great Britain & Ireland", value: 4 },
      { label: "Europe (from 1979)", value: 12 },
      { label: "Great Britain (pre-1973)", value: 3 },
      { label: "United States", value: 27 }
    ]
  },
  {
    instruction: "Fewest to most castles by country",
    category: "Countries by Number of Castles",
    items: [
      { label: "Ireland", value: 3000 },
      { label: "United Kingdom", value: 4000 },
      { label: "Italy", value: 5000 },
      { label: "France", value: 10000 },
      { label: "Germany", value: 25000 }
    ]
  },
  {
    instruction: "Fewest to most annual hours worked per person",
    category: "Countries by Annual Hours Worked Per Worker",
    items: [
      { label: "Germany", value: 1349 },
      { label: "France", value: 1511 },
      { label: "Japan", value: 1607 },
      { label: "United States", value: 1791 },
      { label: "Mexico", value: 2128 }
    ]
  },
  {
    instruction: "Lowest to highest Gini coefficient (income inequality, 2022)",
    category: "Countries by Income Inequality (Gini)",
    items: [
      { label: "Norway", value: 27 },
      { label: "Germany", value: 31 },
      { label: "United States", value: 39 },
      { label: "Brazil", value: 53 },
      { label: "South Africa", value: 63 }
    ]
  },
  {
    instruction: "Lowest to highest corruption perception index score (2023, higher=cleaner)",
    category: "Countries by Corruption Index",
    items: [
      { label: "Somalia", value: 11 },
      { label: "Russia", value: 26 },
      { label: "Brazil", value: 36 },
      { label: "United States", value: 69 },
      { label: "Denmark", value: 90 }
    ]
  },
  {
    instruction: "Fewest to most career Test match wickets (cricket, fast bowlers)",
    category: "Fast Bowlers by Test Cricket Wickets",
    items: [
      { label: "Dennis Lillee (Australia)", value: 355 },
      { label: "Malcolm Marshall (West Indies)", value: 376 },
      { label: "Glenn McGrath (Australia)", value: 563 },
      { label: "Stuart Broad (England)", value: 604 },
      { label: "James Anderson (England)", value: 700 }
    ]
  },
  {
    instruction: "Lowest to highest latitude of capital cities",
    category: "Capital Cities by Latitude (degrees from equator)",
    items: [
      { label: "Quito (Ecuador)", value: 0.2 },
      { label: "New Delhi (India)", value: 28.6 },
      { label: "Tokyo (Japan)", value: 35.7 },
      { label: "London (UK)", value: 51.5 },
      { label: "Reykjavik (Iceland)", value: 64.1 }
    ]
  },
  {
    instruction: "Smallest to largest sovereign wealth fund (billion USD, 2023)",
    category: "Countries by Sovereign Wealth Fund Size",
    items: [
      { label: "Russia (National Wealth Fund)", value: 150 },
      { label: "Singapore (GIC)", value: 690 },
      { label: "Saudi Arabia (PIF)", value: 776 },
      { label: "China (CIC)", value: 1350 },
      { label: "Norway (Government Pension Fund)", value: 1580 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Ramsar Wetlands",
    category: "Countries by Ramsar Wetland Sites",
    items: [
      { label: "Japan", value: 53 },
      { label: "Australia", value: 66 },
      { label: "China", value: 82 },
      { label: "Mexico", value: 142 },
      { label: "United Kingdom", value: 175 }
    ]
  },
  {
    instruction: "Fewest to most career pole positions in F1",
    category: "F1 Drivers by Career Pole Positions",
    items: [
      { label: "Niki Lauda", value: 24 },
      { label: "Jim Clark", value: 33 },
      { label: "Ayrton Senna", value: 65 },
      { label: "Michael Schumacher", value: 68 },
      { label: "Lewis Hamilton", value: 104 }
    ]
  },
  {
    instruction: "Lowest to highest global lithium production (thousand tonnes, 2022)",
    category: "Countries by Lithium Production",
    items: [
      { label: "China", value: 19 },
      { label: "Argentina", value: 6.2 },
      { label: "Chile", value: 39 },
      { label: "China", value: 19 },
      { label: "Australia", value: 61 }
    ]
  },
  {
    instruction: "Fewest to most horse racing tracks by country",
    category: "Countries by Number of Racecourses",
    items: [
      { label: "Germany", value: 40 },
      { label: "France", value: 250 },
      { label: "Japan", value: 25 },
      { label: "Australia", value: 300 },
      { label: "United States", value: 350 }
    ]
  },
  {
    instruction: "Fewest to most people who have been to space by nationality",
    category: "Countries by Number of Astronauts/Cosmonauts",
    items: [
      { label: "United Kingdom", value: 7 },
      { label: "Japan", value: 12 },
      { label: "China", value: 21 },
      { label: "Russia/USSR", value: 130 },
      { label: "United States", value: 375 }
    ]
  },
  {
    instruction: "Fewest to most confirmed active geysers",
    category: "Countries by Number of Active Geysers",
    items: [
      { label: "New Zealand", value: 30 },
      { label: "Chile", value: 80 },
      { label: "Russia (Kamchatka)", value: 200 },
      { label: "Iceland", value: 250 },
      { label: "United States (Yellowstone)", value: 500 }
    ]
  },
  {
    instruction: "Fewest to most heritage railways/preserved railways",
    category: "Countries by Number of Heritage Railways",
    items: [
      { label: "Australia", value: 60 },
      { label: "Germany", value: 120 },
      { label: "United States", value: 200 },
      { label: "India", value: 30 },
      { label: "United Kingdom", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest average household size (people per household)",
    category: "Countries by Average Household Size",
    items: [
      { label: "Germany", value: 2.0 },
      { label: "United States", value: 2.5 },
      { label: "Brazil", value: 3.0 },
      { label: "India", value: 4.5 },
      { label: "Senegal", value: 8.5 }
    ]
  },
  {
    instruction: "Fewest to most total Wimbledon singles titles (women)",
    category: "Women Tennis Players by Wimbledon Titles",
    items: [
      { label: "Venus Williams", value: 5 },
      { label: "Serena Williams", value: 7 },
      { label: "Steffi Graf", value: 7 },
      { label: "Billie Jean King", value: 6 },
      { label: "Martina Navratilova", value: 9 }
    ]
  },
  {
    instruction: "Fewest to most waterfalls by country",
    category: "Countries by Number of Notable Waterfalls",
    items: [
      { label: "Switzerland", value: 70 },
      { label: "United Kingdom", value: 100 },
      { label: "United States", value: 250 },
      { label: "India", value: 200 },
      { label: "Norway", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest orbital velocity (km/s)",
    category: "Space Objects by Orbital Velocity",
    items: [
      { label: "Moon (around Earth)", value: 1.0 },
      { label: "ISS", value: 7.7 },
      { label: "Earth (around Sun)", value: 29.8 },
      { label: "Mercury (around Sun)", value: 47.4 },
      { label: "Parker Solar Probe (perihelion)", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most career centuries in ODI cricket",
    category: "Cricket Batsmen by ODI Centuries",
    items: [
      { label: "AB de Villiers (South Africa)", value: 25 },
      { label: "Hashim Amla (South Africa)", value: 27 },
      { label: "Virat Kohli (India)", value: 50 },
      { label: "Rohit Sharma (India)", value: 31 },
      { label: "Sachin Tendulkar (India)", value: 49 }
    ]
  },
  {
    instruction: "Fewest to most published scientific papers per year (thousands)",
    category: "Countries by Scientific Publication Output",
    items: [
      { label: "Japan", value: 100 },
      { label: "Germany", value: 120 },
      { label: "India", value: 180 },
      { label: "United States", value: 450 },
      { label: "China", value: 750 }
    ]
  },
  {
    instruction: "Fewest to most venomous land snakes by continent",
    category: "Continents by Number of Venomous Snake Species",
    items: [
      { label: "Europe", value: 20 },
      { label: "North America", value: 30 },
      { label: "Africa", value: 100 },
      { label: "Asia", value: 200 },
      { label: "Australia", value: 140 }
    ]
  },
  {
    instruction: "Fewest to most World Heavyweight Boxing Champions (all-time)",
    category: "Countries by Heavyweight Boxing Champions",
    items: [
      { label: "Canada", value: 2 },
      { label: "Germany", value: 3 },
      { label: "United Kingdom", value: 10 },
      { label: "Ukraine", value: 3 },
      { label: "United States", value: 40 }
    ]
  },
  {
    instruction: "Fewest to most annual visitors to theme parks (millions)",
    category: "Theme Parks by Annual Attendance",
    items: [
      { label: "Universal Studios Hollywood", value: 9 },
      { label: "Tokyo DisneySea", value: 12 },
      { label: "Tokyo Disneyland", value: 18 },
      { label: "Walt Disney World Magic Kingdom", value: 17 },
      { label: "Disneyland (Anaheim)", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most species of freshwater fish",
    category: "Countries by Freshwater Fish Species",
    items: [
      { label: "Japan", value: 200 },
      { label: "United States", value: 1000 },
      { label: "India", value: 2500 },
      { label: "China", value: 1400 },
      { label: "Brazil", value: 3500 }
    ]
  },
  {
    instruction: "Lowest to highest taxi fare per km (USD, 2023)",
    category: "Cities by Taxi Fare Per Kilometer",
    items: [
      { label: "Cairo", value: 0.23 },
      { label: "Bangkok", value: 0.33 },
      { label: "Tokyo", value: 3.26 },
      { label: "London", value: 3.68 },
      { label: "Zurich", value: 4.43 }
    ]
  },
  {
    instruction: "Fewest to most recorded species of whales in waters near country",
    category: "Countries by Whale Species in Waters",
    items: [
      { label: "United Kingdom", value: 20 },
      { label: "South Africa", value: 35 },
      { label: "Japan", value: 40 },
      { label: "Australia", value: 45 },
      { label: "New Zealand", value: 50 }
    ]
  },
  {
    instruction: "Lowest to highest average depth of snow cover in winter (cm)",
    category: "Cities by Average Winter Snow Depth",
    items: [
      { label: "London", value: 0 },
      { label: "Tokyo", value: 2 },
      { label: "Chicago", value: 15 },
      { label: "Moscow", value: 30 },
      { label: "Sapporo", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest wind farm capacity by country (GW, 2023)",
    category: "Countries by Wind Power Capacity",
    items: [
      { label: "United Kingdom", value: 28 },
      { label: "India", value: 44 },
      { label: "Germany", value: 66 },
      { label: "United States", value: 148 },
      { label: "China", value: 441 }
    ]
  },
  {
    instruction: "Fewest to most World Snooker Championship 147 breaks",
    category: "Snooker Players by 147 Breaks in Competition",
    items: [
      { label: "Stephen Hendry", value: 1 },
      { label: "John Higgins", value: 3 },
      { label: "Stephen Maguire", value: 2 },
      { label: "Ronnie O'Sullivan", value: 4 },
      { label: "Ronnie O'Sullivan (all comps)", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most annual cheese production (thousand tonnes)",
    category: "Countries by Cheese Production",
    items: [
      { label: "Australia", value: 350 },
      { label: "France", value: 1880 },
      { label: "Germany", value: 2400 },
      { label: "European Union (total)", value: 10200 },
      { label: "United States", value: 6300 }
    ]
  },
  {
    instruction: "Fewest to most daily newspaper titles published",
    category: "Countries by Number of Daily Newspaper Titles",
    items: [
      { label: "Australia", value: 50 },
      { label: "United Kingdom", value: 90 },
      { label: "Japan", value: 107 },
      { label: "United States", value: 1300 },
      { label: "India", value: 7800 }
    ]
  },
  {
    instruction: "Fewest to most career podium finishes in MotoGP",
    category: "MotoGP Riders by Career Podiums",
    items: [
      { label: "Casey Stoner", value: 69 },
      { label: "Jorge Lorenzo", value: 114 },
      { label: "Marc Márquez", value: 100 },
      { label: "Giacomo Agostini", value: 159 },
      { label: "Valentino Rossi", value: 235 }
    ]
  },
  {
    instruction: "Fewest to most annual banana exports (million tonnes)",
    category: "Countries by Banana Exports",
    items: [
      { label: "Colombia", value: 1.8 },
      { label: "Guatemala", value: 2.5 },
      { label: "Costa Rica", value: 2.4 },
      { label: "Philippines", value: 3.0 },
      { label: "Ecuador", value: 6.5 }
    ]
  },
  {
    instruction: "Fewest to most career wins by a NASCAR driver",
    category: "NASCAR Drivers by Career Wins",
    items: [
      { label: "Dale Earnhardt", value: 76 },
      { label: "Jeff Gordon", value: 93 },
      { label: "Jimmie Johnson", value: 83 },
      { label: "David Pearson", value: 105 },
      { label: "Richard Petty", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most types of pasta in Italian cuisine",
    category: "Italian Regions by Pasta Varieties Originated",
    items: [
      { label: "Piedmont", value: 10 },
      { label: "Lazio", value: 15 },
      { label: "Tuscany", value: 20 },
      { label: "Campania", value: 40 },
      { label: "Sicily", value: 50 }
    ]
  },
  {
    instruction: "Lowest to highest global peanut production (million tonnes)",
    category: "Countries by Peanut Production",
    items: [
      { label: "United States", value: 3 },
      { label: "Nigeria", value: 4.5 },
      { label: "Sudan", value: 2.8 },
      { label: "India", value: 7 },
      { label: "China", value: 18 }
    ]
  },
  {
    instruction: "Fewest to most airports per million people",
    category: "Countries by Airports Per Capita",
    items: [
      { label: "China", value: 0.2 },
      { label: "India", value: 0.2 },
      { label: "Germany", value: 6.5 },
      { label: "Australia", value: 17 },
      { label: "United States", value: 41 }
    ]
  },
  {
    instruction: "Lowest to highest cobalt production (thousand tonnes, 2022)",
    category: "Countries by Cobalt Production",
    items: [
      { label: "Philippines", value: 4.7 },
      { label: "Australia", value: 5.9 },
      { label: "Russia", value: 8.9 },
      { label: "Indonesia", value: 10 },
      { label: "DR Congo", value: 130 }
    ]
  },
  {
    instruction: "Fewest to most total ATP titles in tennis career",
    category: "Tennis Players by Career ATP Titles",
    items: [
      { label: "Andre Agassi", value: 60 },
      { label: "Pete Sampras", value: 64 },
      { label: "Rafael Nadal", value: 92 },
      { label: "Roger Federer", value: 103 },
      { label: "Novak Djokovic", value: 99 }
    ]
  },
  {
    instruction: "Lowest to highest average rent for farmland (USD per hectare/year)",
    category: "Countries by Farmland Rent",
    items: [
      { label: "Argentina", value: 100 },
      { label: "Brazil", value: 200 },
      { label: "United States", value: 350 },
      { label: "Germany", value: 500 },
      { label: "Netherlands", value: 1200 }
    ]
  },
  {
    instruction: "Shortest to longest cable car/gondola (km)",
    category: "Cable Cars by Length",
    items: [
      { label: "Roosevelt Island Tramway (NYC)", value: 0.9 },
      { label: "Palm Springs Aerial Tramway", value: 4 },
      { label: "Vanoise Express (France)", value: 1.8 },
      { label: "Mérida Cable Car (Venezuela)", value: 12.5 },
      { label: "NP Bi-O Cable Car (Vietnam)", value: 7.9 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO-listed vineyards/wine regions",
    category: "Countries by UNESCO Wine Heritage Sites",
    items: [
      { label: "Austria", value: 1 },
      { label: "Portugal", value: 2 },
      { label: "Germany", value: 2 },
      { label: "Italy", value: 4 },
      { label: "France", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most species of amphibians",
    category: "Countries by Amphibian Species",
    items: [
      { label: "Japan", value: 85 },
      { label: "United States", value: 311 },
      { label: "India", value: 432 },
      { label: "Colombia", value: 850 },
      { label: "Brazil", value: 1188 }
    ]
  },
  {
    instruction: "Lowest to highest average house price (USD, 2023)",
    category: "Countries by Average House Price",
    items: [
      { label: "Egypt", value: 30000 },
      { label: "Brazil", value: 80000 },
      { label: "Germany", value: 300000 },
      { label: "United States", value: 410000 },
      { label: "Hong Kong", value: 1250000 }
    ]
  },
  {
    instruction: "Fewest to most World Cup appearances (national soccer team)",
    category: "Countries by FIFA World Cup Appearances",
    items: [
      { label: "Japan", value: 7 },
      { label: "England", value: 16 },
      { label: "Argentina", value: 18 },
      { label: "Germany", value: 20 },
      { label: "Brazil", value: 22 }
    ]
  },
  {
    instruction: "Fewest to most solar eclipses visible from a city (per century)",
    category: "Cities by Solar Eclipses Per Century",
    items: [
      { label: "London", value: 2 },
      { label: "Tokyo", value: 3 },
      { label: "Cairo", value: 4 },
      { label: "Mexico City", value: 5 },
      { label: "Darwin (Australia)", value: 6 }
    ]
  },
  {
    instruction: "Lowest to highest bicycle ownership per capita (bikes per 100 people)",
    category: "Countries by Bicycle Ownership",
    items: [
      { label: "United States", value: 32 },
      { label: "Japan", value: 57 },
      { label: "Germany", value: 75 },
      { label: "Denmark", value: 80 },
      { label: "Netherlands", value: 99 }
    ]
  },
  {
    instruction: "Fewest to most annual cherry blossom festivals",
    category: "Countries by Cherry Blossom Festival Count",
    items: [
      { label: "United States (DC + others)", value: 5 },
      { label: "South Korea", value: 15 },
      { label: "China", value: 30 },
      { label: "Germany", value: 8 },
      { label: "Japan", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most career stumpings in cricket (wicket-keepers)",
    category: "Cricket Wicket-Keepers by Career Stumpings",
    items: [
      { label: "Adam Gilchrist (Australia)", value: 55 },
      { label: "Kumar Sangakkara (Sri Lanka)", value: 139 },
      { label: "MS Dhoni (India)", value: 195 },
      { label: "Mark Boucher (South Africa)", value: 22 },
      { label: "Bert Oldfield (Australia)", value: 52 }
    ]
  },
  {
    instruction: "Lowest to highest platinum production (tonnes, 2022)",
    category: "Countries by Platinum Production",
    items: [
      { label: "United States", value: 4 },
      { label: "Canada", value: 8 },
      { label: "Zimbabwe", value: 15 },
      { label: "Russia", value: 21 },
      { label: "South Africa", value: 120 }
    ]
  },
  {
    instruction: "Fewest to most career centuries by a female cricket player",
    category: "Women Cricketers by Career Centuries (international)",
    items: [
      { label: "Tammy Beaumont (England)", value: 6 },
      { label: "Meg Lanning (Australia)", value: 15 },
      { label: "Suzie Bates (NZ)", value: 7 },
      { label: "Smriti Mandhana (India)", value: 7 },
      { label: "Mithali Raj (India)", value: 10 }
    ]
  },
  {
    instruction: "Lowest to highest coffee export (billion USD, 2022)",
    category: "Countries by Coffee Export Value",
    items: [
      { label: "Ethiopia", value: 1.4 },
      { label: "Honduras", value: 1.6 },
      { label: "Vietnam", value: 3.5 },
      { label: "Colombia", value: 3.1 },
      { label: "Brazil", value: 7.8 }
    ]
  },
  {
    instruction: "Smallest to largest church by seating capacity",
    category: "Churches by Capacity",
    items: [
      { label: "Sistine Chapel (Vatican)", value: 200 },
      { label: "Westminster Abbey (London)", value: 2000 },
      { label: "Notre-Dame de Paris", value: 6500 },
      { label: "St. Peter's Basilica (Vatican)", value: 15000 },
      { label: "Basilica of Our Lady of Peace (Ivory Coast)", value: 18000 }
    ]
  },
  {
    instruction: "Fewest to most ski lifts in a resort",
    category: "Ski Resorts by Number of Lifts",
    items: [
      { label: "Niseko (Japan)", value: 30 },
      { label: "Zermatt (Switzerland)", value: 52 },
      { label: "Whistler Blackcomb (Canada)", value: 37 },
      { label: "Val Thorens (France)", value: 68 },
      { label: "Les 3 Vallées (France, combined)", value: 166 }
    ]
  },
  {
    instruction: "Fewest to most career tries in rugby union (international)",
    category: "Rugby Players by International Tries",
    items: [
      { label: "Jonny Wilkinson (England)", value: 7 },
      { label: "Brian O'Driscoll (Ireland)", value: 46 },
      { label: "Bryan Habana (South Africa)", value: 67 },
      { label: "Shane Williams (Wales)", value: 60 },
      { label: "Daisuke Ohata (Japan)", value: 69 }
    ]
  },
  {
    instruction: "Lowest to highest number of billionaires in a state (US, 2023)",
    category: "US States by Billionaire Count",
    items: [
      { label: "Vermont", value: 0 },
      { label: "Texas", value: 73 },
      { label: "Florida", value: 78 },
      { label: "New York", value: 135 },
      { label: "California", value: 186 }
    ]
  },
  {
    instruction: "Fewest to most craters on the Moon visible with naked eye",
    category: "Lunar Features by Size (km diameter)",
    items: [
      { label: "Tycho", value: 85 },
      { label: "Copernicus", value: 93 },
      { label: "Kepler", value: 32 },
      { label: "Plato", value: 101 },
      { label: "Clavius", value: 225 }
    ]
  },
  {
    instruction: "Lowest to highest average soil pH by region",
    category: "Soil Types by Average pH",
    items: [
      { label: "Peat Bog", value: 3.5 },
      { label: "Tropical Forest Soil", value: 4.5 },
      { label: "Grassland Soil", value: 6.5 },
      { label: "Agricultural Soil (limed)", value: 7.0 },
      { label: "Desert Soil", value: 8.5 }
    ]
  },
  {
    instruction: "Fewest to most career yellow cards in soccer (club + international)",
    category: "Soccer Players by Career Yellow Cards",
    items: [
      { label: "Lionel Messi", value: 90 },
      { label: "Cristiano Ronaldo", value: 130 },
      { label: "Sergio Ramos", value: 260 },
      { label: "Gerardo Bedoya (Colombia)", value: 46 },
      { label: "Rafael Márquez (Mexico)", value: 150 }
    ]
  },
  {
    instruction: "Fewest to most career clean sheets in soccer (goalkeepers)",
    category: "Goalkeepers by Career Clean Sheets",
    items: [
      { label: "Manuel Neuer", value: 300 },
      { label: "Iker Casillas", value: 440 },
      { label: "Petr Čech", value: 395 },
      { label: "Gianluigi Buffon", value: 500 },
      { label: "Peter Shilton", value: 390 }
    ]
  },
  {
    instruction: "Smallest to largest port by container throughput (million TEU, 2022)",
    category: "Ports by Container Volume",
    items: [
      { label: "Rotterdam (Netherlands)", value: 14 },
      { label: "Los Angeles/Long Beach (USA)", value: 17 },
      { label: "Busan (South Korea)", value: 22 },
      { label: "Singapore", value: 37 },
      { label: "Shanghai (China)", value: 49 }
    ]
  },
  {
    instruction: "Fewest to most career wins in women's golf (LPGA)",
    category: "Women Golfers by LPGA Tour Wins",
    items: [
      { label: "Annika Sörenstam", value: 72 },
      { label: "Mickey Wright", value: 82 },
      { label: "Patty Berg", value: 60 },
      { label: "Louise Suggs", value: 61 },
      { label: "Kathy Whitworth", value: 88 }
    ]
  },
  {
    instruction: "Lowest to highest iron ore production (million tonnes, 2022)",
    category: "Countries by Iron Ore Production",
    items: [
      { label: "South Africa", value: 68 },
      { label: "India", value: 240 },
      { label: "China", value: 310 },
      { label: "Brazil", value: 380 },
      { label: "Australia", value: 880 }
    ]
  },
  {
    instruction: "Fewest to most recorded bird species",
    category: "Countries by Number of Bird Species",
    items: [
      { label: "United Kingdom", value: 600 },
      { label: "Japan", value: 700 },
      { label: "United States", value: 1100 },
      { label: "Peru", value: 1879 },
      { label: "Colombia", value: 1954 }
    ]
  },
  {
    instruction: "Lowest to highest global sugar production (million tonnes, 2022)",
    category: "Countries by Sugar Production",
    items: [
      { label: "Australia", value: 4 },
      { label: "Mexico", value: 6 },
      { label: "China", value: 10 },
      { label: "India", value: 36 },
      { label: "Brazil", value: 39 }
    ]
  },
  {
    instruction: "Fewest to most dams per country",
    category: "Countries by Number of Large Dams",
    items: [
      { label: "Brazil", value: 1400 },
      { label: "Japan", value: 3100 },
      { label: "India", value: 5300 },
      { label: "United States", value: 9200 },
      { label: "China", value: 24000 }
    ]
  },
  {
    instruction: "Fewest to most total career points in snooker (ranking events)",
    category: "Snooker Players by Career Ranking Event Titles",
    items: [
      { label: "Mark Williams", value: 24 },
      { label: "John Higgins", value: 31 },
      { label: "Stephen Hendry", value: 36 },
      { label: "Steve Davis", value: 28 },
      { label: "Ronnie O'Sullivan", value: 40 }
    ]
  },
  {
    instruction: "Fewest to most annual forest fires by country",
    category: "Countries by Annual Wildfire Count (thousands)",
    items: [
      { label: "Japan", value: 1 },
      { label: "Australia", value: 55 },
      { label: "Russia", value: 35 },
      { label: "Brazil", value: 200 },
      { label: "United States", value: 70 }
    ]
  },
  {
    instruction: "Lowest to highest rice production (million tonnes, 2022)",
    category: "Countries by Rice Production",
    items: [
      { label: "Japan", value: 10 },
      { label: "Vietnam", value: 44 },
      { label: "Bangladesh", value: 56 },
      { label: "India", value: 195 },
      { label: "China", value: 212 }
    ]
  },
  {
    instruction: "Smallest to largest sand island (km²)",
    category: "Sand Islands by Area",
    items: [
      { label: "Padre Island (Texas)", value: 455 },
      { label: "Bazaruto Island (Mozambique)", value: 300 },
      { label: "Moreton Island (Australia)", value: 186 },
      { label: "North Stradbroke Island (Australia)", value: 275 },
      { label: "Fraser Island (Australia)", value: 1840 }
    ]
  },
  {
    instruction: "Fewest to most Olympic medals in athletics (track & field) by country",
    category: "Countries by Athletics Olympic Medals",
    items: [
      { label: "Jamaica", value: 78 },
      { label: "Germany (incl. unified)", value: 210 },
      { label: "Kenya", value: 108 },
      { label: "United Kingdom", value: 190 },
      { label: "United States", value: 810 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of land that is arable",
    category: "Countries by Arable Land Percentage",
    items: [
      { label: "Egypt", value: 3.8 },
      { label: "Australia", value: 6 },
      { label: "United States", value: 17 },
      { label: "Germany", value: 34 },
      { label: "Bangladesh", value: 59 }
    ]
  },
  {
    instruction: "Fewest to most career wins in IndyCar racing",
    category: "IndyCar Drivers by Career Wins",
    items: [
      { label: "Emerson Fittipaldi", value: 22 },
      { label: "Hélio Castroneves", value: 35 },
      { label: "Mario Andretti", value: 52 },
      { label: "Scott Dixon", value: 55 },
      { label: "A.J. Foyt", value: 67 }
    ]
  },
  {
    instruction: "Fewest to most kilometers of high-speed rail (2023)",
    category: "Countries by High-Speed Rail Network Length (km)",
    items: [
      { label: "Germany", value: 1571 },
      { label: "France", value: 2735 },
      { label: "Japan", value: 3081 },
      { label: "Spain", value: 3661 },
      { label: "China", value: 42000 }
    ]
  },
  {
    instruction: "Fewest to most total Grand Slam titles won by a country (tennis)",
    category: "Countries by Grand Slam Tennis Titles (all time, singles)",
    items: [
      { label: "Germany", value: 18 },
      { label: "Spain", value: 31 },
      { label: "Sweden", value: 17 },
      { label: "Australia", value: 55 },
      { label: "United States", value: 130 }
    ]
  },
  {
    instruction: "Fewest to most total career podiums in cycling Grand Tours",
    category: "Cyclists by Grand Tour Podiums",
    items: [
      { label: "Chris Froome", value: 8 },
      { label: "Alberto Contador", value: 8 },
      { label: "Bernard Hinault", value: 13 },
      { label: "Fausto Coppi", value: 10 },
      { label: "Eddy Merckx", value: 17 }
    ]
  },
  {
    instruction: "Fewest to most total career Grand Tour stage wins (cycling)",
    category: "Cyclists by Grand Tour Stage Wins",
    items: [
      { label: "Bernard Hinault", value: 52 },
      { label: "Alberto Contador", value: 25 },
      { label: "Mark Cavendish", value: 53 },
      { label: "Mario Cipollini", value: 57 },
      { label: "Eddy Merckx", value: 64 }
    ]
  },
  {
    instruction: "Lowest to highest tomato production (million tonnes, 2022)",
    category: "Countries by Tomato Production",
    items: [
      { label: "Egypt", value: 6.7 },
      { label: "Turkey", value: 13 },
      { label: "United States", value: 10.5 },
      { label: "India", value: 21 },
      { label: "China", value: 67 }
    ]
  },
  {
    instruction: "Fewest to most cable TV subscribers (millions, 2023)",
    category: "Countries by Cable TV Subscribers",
    items: [
      { label: "Japan", value: 10 },
      { label: "Germany", value: 16 },
      { label: "United States", value: 44 },
      { label: "India", value: 100 },
      { label: "China", value: 210 }
    ]
  },
  {
    instruction: "Fewest to most career red cards in soccer",
    category: "Soccer Players by Career Red Cards",
    items: [
      { label: "Zinedine Zidane", value: 14 },
      { label: "Sergio Ramos", value: 27 },
      { label: "Pepe", value: 13 },
      { label: "Cyril Rool (France)", value: 27 },
      { label: "Gerardo Bedoya (Colombia)", value: 46 }
    ]
  },
  {
    instruction: "Fewest to most miles of subway/metro track in a city",
    category: "Cities by Metro Track Length (km)",
    items: [
      { label: "Tokyo Metro", value: 195 },
      { label: "New York City Subway", value: 380 },
      { label: "London Underground", value: 402 },
      { label: "Beijing Subway", value: 836 },
      { label: "Shanghai Metro", value: 831 }
    ]
  },
  {
    instruction: "Fewest to most UNESCO Memory of the World inscriptions",
    category: "Countries by Memory of the World Inscriptions",
    items: [
      { label: "Japan", value: 8 },
      { label: "Australia", value: 7 },
      { label: "United Kingdom", value: 22 },
      { label: "Germany", value: 24 },
      { label: "South Korea", value: 18 }
    ]
  },
  {
    instruction: "Lowest to highest potato production (million tonnes, 2022)",
    category: "Countries by Potato Production",
    items: [
      { label: "Germany", value: 11 },
      { label: "United States", value: 18 },
      { label: "Russia", value: 19 },
      { label: "India", value: 56 },
      { label: "China", value: 94 }
    ]
  },
  {
    instruction: "Fewest to most wins in the Indianapolis 500",
    category: "Drivers by Indianapolis 500 Victories",
    items: [
      { label: "Mario Andretti", value: 1 },
      { label: "Emerson Fittipaldi", value: 2 },
      { label: "Hélio Castroneves", value: 4 },
      { label: "Rick Mears", value: 4 },
      { label: "A.J. Foyt", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most Nobel Peace Prize laureates by country",
    category: "Countries by Peace Nobel Prizes",
    items: [
      { label: "Germany", value: 4 },
      { label: "South Africa", value: 4 },
      { label: "France", value: 9 },
      { label: "United Kingdom", value: 11 },
      { label: "United States", value: 22 }
    ]
  },
  {
    instruction: "Fewest to most daily loaves of bread consumed per capita",
    category: "Countries by Bread Consumption Per Capita (kg/year)",
    items: [
      { label: "Japan", value: 8 },
      { label: "United States", value: 20 },
      { label: "Germany", value: 60 },
      { label: "France", value: 50 },
      { label: "Turkey", value: 104 }
    ]
  },
  {
    instruction: "Fewest to most career laps led in F1",
    category: "F1 Drivers by Career Laps Led",
    items: [
      { label: "Ayrton Senna", value: 2979 },
      { label: "Alain Prost", value: 2683 },
      { label: "Sebastian Vettel", value: 3501 },
      { label: "Michael Schumacher", value: 5111 },
      { label: "Lewis Hamilton", value: 5568 }
    ]
  },
  {
    instruction: "Fewest to most career assists in soccer (club + international)",
    category: "Soccer Players by Career Assists",
    items: [
      { label: "Cristiano Ronaldo", value: 250 },
      { label: "Thomas Müller", value: 300 },
      { label: "Xavi", value: 280 },
      { label: "Lionel Messi", value: 380 },
      { label: "Ryan Giggs", value: 271 }
    ]
  },
  {
    instruction: "Fewest to most roller coasters in a country",
    category: "Countries by Roller Coaster Count",
    items: [
      { label: "Australia", value: 50 },
      { label: "Germany", value: 200 },
      { label: "Japan", value: 250 },
      { label: "United States", value: 680 },
      { label: "China", value: 1600 }
    ]
  },
  {
    instruction: "Lowest to highest average Internet data usage per person per month (GB)",
    category: "Countries by Monthly Mobile Data Usage",
    items: [
      { label: "Japan", value: 6 },
      { label: "United States", value: 17 },
      { label: "Germany", value: 7 },
      { label: "India", value: 25 },
      { label: "Finland", value: 42 }
    ]
  },
  {
    instruction: "Fewest to most World Aquatics Championship medals (all time)",
    category: "Countries by World Swimming Championship Medals",
    items: [
      { label: "Japan", value: 130 },
      { label: "Russia", value: 170 },
      { label: "China", value: 210 },
      { label: "Australia", value: 340 },
      { label: "United States", value: 580 }
    ]
  },
  {
    instruction: "Fewest to most career centuries in first-class cricket",
    category: "Cricket Batsmen by First-Class Centuries",
    items: [
      { label: "Sachin Tendulkar", value: 81 },
      { label: "Brian Lara", value: 65 },
      { label: "Wally Hammond", value: 167 },
      { label: "Don Bradman", value: 117 },
      { label: "Jack Hobbs", value: 199 }
    ]
  },
  {
    instruction: "Lowest to highest average teacher-to-student ratio",
    category: "Countries by Teacher-Student Ratio (students per teacher)",
    items: [
      { label: "Norway", value: 10 },
      { label: "Japan", value: 13 },
      { label: "United States", value: 15 },
      { label: "Brazil", value: 21 },
      { label: "India", value: 30 }
    ]
  },
  {
    instruction: "Fewest to most total Grand Prix starts in F1 (career)",
    category: "F1 Drivers by Career Race Starts",
    items: [
      { label: "Ayrton Senna", value: 161 },
      { label: "Michael Schumacher", value: 306 },
      { label: "Sebastian Vettel", value: 300 },
      { label: "Kimi Räikkönen", value: 349 },
      { label: "Fernando Alonso", value: 400 }
    ]
  },
  {
    instruction: "Fewest to most sushi restaurants per capita (per 100,000)",
    category: "Countries by Sushi Restaurants Per Capita",
    items: [
      { label: "India", value: 0.1 },
      { label: "Germany", value: 3 },
      { label: "United States", value: 9 },
      { label: "Brazil", value: 3.5 },
      { label: "Japan", value: 30 }
    ]
  },
  {
    instruction: "Fewest to most total marathon world records set (career)",
    category: "Marathon Runners by World Records Held",
    items: [
      { label: "Haile Gebrselassie", value: 2 },
      { label: "Paul Tergat", value: 1 },
      { label: "Dennis Kimetto", value: 1 },
      { label: "Eliud Kipchoge", value: 2 },
      { label: "Khalid Khannouchi", value: 2 }
    ]
  },
  {
    instruction: "Lowest to highest average flight delay (minutes, 2023)",
    category: "Airlines by Average Delay",
    items: [
      { label: "ANA (Japan)", value: 5 },
      { label: "Scandinavian Airlines", value: 12 },
      { label: "Delta Air Lines", value: 15 },
      { label: "Spirit Airlines", value: 25 },
      { label: "Frontier Airlines", value: 22 }
    ]
  },
  {
    instruction: "Fewest to most career rushing touchdowns (NFL)",
    category: "NFL Running Backs by Career Rushing Touchdowns",
    items: [
      { label: "Jim Brown", value: 106 },
      { label: "Walter Payton", value: 110 },
      { label: "Marcus Allen", value: 123 },
      { label: "LaDainian Tomlinson", value: 145 },
      { label: "Emmitt Smith", value: 164 }
    ]
  },
  {
    instruction: "Fewest to most global registered trademarks (thousands, 2022)",
    category: "Countries by Trademark Registrations",
    items: [
      { label: "Japan", value: 170 },
      { label: "Germany", value: 82 },
      { label: "United States", value: 580 },
      { label: "India", value: 390 },
      { label: "China", value: 6170 }
    ]
  },
  {
    instruction: "Lowest to highest annual avocado production (thousand tonnes)",
    category: "Countries by Avocado Production",
    items: [
      { label: "Colombia", value: 980 },
      { label: "Peru", value: 910 },
      { label: "Indonesia", value: 670 },
      { label: "Dominican Republic", value: 700 },
      { label: "Mexico", value: 2500 }
    ]
  },
  {
    instruction: "Fewest to most career games played (NBA)",
    category: "NBA Players by Career Games Played",
    items: [
      { label: "Michael Jordan", value: 1072 },
      { label: "Kareem Abdul-Jabbar", value: 1560 },
      { label: "LeBron James", value: 1492 },
      { label: "Vince Carter", value: 1541 },
      { label: "Robert Parish", value: 1611 }
    ]
  },
  {
    instruction: "Fewest to most botanical species discovered (per decade, thousands)",
    category: "Decades by New Plant Species Discovered",
    items: [
      { label: "2010s", value: 2 },
      { label: "2000s", value: 2.5 },
      { label: "1990s", value: 3 },
      { label: "1980s", value: 3 },
      { label: "1800s (entire century)", value: 50 }
    ]
  },
  {
    instruction: "Lowest to highest global corn/maize production (million tonnes, 2022)",
    category: "Countries by Corn Production",
    items: [
      { label: "Argentina", value: 50 },
      { label: "Brazil", value: 109 },
      { label: "European Union (total)", value: 52 },
      { label: "China", value: 277 },
      { label: "United States", value: 349 }
    ]
  },
  {
    instruction: "Fewest to most total career tries in rugby league (club + international)",
    category: "Rugby League Players by Career Tries",
    items: [
      { label: "Andrew Johns (Australia)", value: 88 },
      { label: "Darren Lockyer (Australia)", value: 167 },
      { label: "Steve Renouf (Australia)", value: 142 },
      { label: "Ken Irvine (Australia)", value: 212 },
      { label: "Billy Slater (Australia)", value: 190 }
    ]
  },
  {
    instruction: "Fewest to most career wins in women's marathon history",
    category: "Women Marathoners by Career Major Marathon Wins",
    items: [
      { label: "Paula Radcliffe", value: 3 },
      { label: "Catherine Ndereba", value: 4 },
      { label: "Ingrid Kristiansen", value: 5 },
      { label: "Grete Waitz", value: 9 },
      { label: "Mary Keitany", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most career home runs in a single MLB season",
    category: "MLB Players by Single-Season Home Runs",
    items: [
      { label: "Babe Ruth (1927)", value: 60 },
      { label: "Roger Maris (1961)", value: 61 },
      { label: "Mark McGwire (1998)", value: 70 },
      { label: "Sammy Sosa (1998)", value: 66 },
      { label: "Barry Bonds (2001)", value: 73 }
    ]
  },
  {
    instruction: "Fewest to most passengers per year on a ferry route (millions)",
    category: "Ferry Routes by Annual Passengers",
    items: [
      { label: "English Channel (Dover-Calais)", value: 9 },
      { label: "Staten Island Ferry (NYC)", value: 22 },
      { label: "Star Ferry (Hong Kong)", value: 26 },
      { label: "Bosphorus Ferries (Istanbul)", value: 75 },
      { label: "Tokyo Bay Ferry (all routes)", value: 3 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in boxing by country",
    category: "Countries by Olympic Boxing Medals",
    items: [
      { label: "Germany", value: 28 },
      { label: "Italy", value: 47 },
      { label: "Russia/USSR", value: 65 },
      { label: "Cuba", value: 80 },
      { label: "United States", value: 117 }
    ]
  },
  {
    instruction: "Fewest to most career points in handball (international)",
    category: "Handball Players by International Career Goals",
    items: [
      { label: "Ivano Balić (Croatia)", value: 401 },
      { label: "Mikkel Hansen (Denmark)", value: 700 },
      { label: "Nikola Karabatić (France)", value: 820 },
      { label: "Rafael Guijosa (Spain)", value: 903 },
      { label: "Kiril Lazarov (North Macedonia)", value: 1370 }
    ]
  },
  {
    instruction: "Lowest to highest soybean production (million tonnes, 2022)",
    category: "Countries by Soybean Production",
    items: [
      { label: "Paraguay", value: 10 },
      { label: "India", value: 12 },
      { label: "Argentina", value: 44 },
      { label: "Brazil", value: 154 },
      { label: "United States", value: 117 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in fencing by country",
    category: "Countries by Olympic Fencing Medals",
    items: [
      { label: "Germany", value: 30 },
      { label: "Hungary", value: 87 },
      { label: "Russia/USSR", value: 55 },
      { label: "France", value: 120 },
      { label: "Italy", value: 130 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in table tennis",
    category: "Countries by Olympic Table Tennis Medals",
    items: [
      { label: "Germany", value: 10 },
      { label: "Japan", value: 12 },
      { label: "South Korea", value: 18 },
      { label: "Sweden", value: 5 },
      { label: "China", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of population with university degree",
    category: "Countries by University Education Rate (%)",
    items: [
      { label: "India", value: 11 },
      { label: "Brazil", value: 21 },
      { label: "Germany", value: 33 },
      { label: "United States", value: 50 },
      { label: "South Korea", value: 70 }
    ]
  },
  {
    instruction: "Fewest to most career wins in Australian Open tennis (men's singles)",
    category: "Tennis Players by Australian Open Titles",
    items: [
      { label: "Rafael Nadal", value: 2 },
      { label: "Roger Federer", value: 6 },
      { label: "Andre Agassi", value: 4 },
      { label: "Novak Djokovic", value: 10 },
      { label: "Roy Emerson (Australia)", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in volleyball",
    category: "Countries by Olympic Volleyball Medals",
    items: [
      { label: "Japan", value: 6 },
      { label: "Cuba", value: 8 },
      { label: "United States", value: 11 },
      { label: "Russia/USSR", value: 16 },
      { label: "Brazil", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career appearances in La Liga (soccer)",
    category: "Soccer Players by La Liga Appearances",
    items: [
      { label: "Iker Casillas", value: 510 },
      { label: "Raúl", value: 550 },
      { label: "Sergio Ramos", value: 470 },
      { label: "Eusebio Sacristán", value: 543 },
      { label: "Andoni Zubizarreta", value: 622 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in rowing",
    category: "Countries by Olympic Rowing Medals",
    items: [
      { label: "Italy", value: 40 },
      { label: "Australia", value: 43 },
      { label: "East Germany/Germany", value: 85 },
      { label: "Great Britain", value: 71 },
      { label: "United States", value: 89 }
    ]
  },
  {
    instruction: "Lowest to highest per capita wine consumption (liters/year)",
    category: "Countries by Wine Consumption Per Capita",
    items: [
      { label: "United States", value: 12 },
      { label: "Germany", value: 24 },
      { label: "Italy", value: 44 },
      { label: "France", value: 47 },
      { label: "Portugal", value: 52 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in weightlifting",
    category: "Countries by Olympic Weightlifting Medals",
    items: [
      { label: "Iran", value: 19 },
      { label: "Germany", value: 39 },
      { label: "Bulgaria", value: 38 },
      { label: "China", value: 62 },
      { label: "Russia/USSR", value: 62 }
    ]
  },
  {
    instruction: "Fewest to most career test match appearances (cricket captains)",
    category: "Cricket Captains by Tests as Captain",
    items: [
      { label: "Ricky Ponting (Australia)", value: 77 },
      { label: "Graeme Smith (South Africa)", value: 109 },
      { label: "Stephen Fleming (NZ)", value: 80 },
      { label: "Virat Kohli (India)", value: 68 },
      { label: "Allan Border (Australia)", value: 93 }
    ]
  },
  {
    instruction: "Lowest to highest average humidity (% relative, annual mean)",
    category: "Cities by Average Humidity",
    items: [
      { label: "Las Vegas", value: 25 },
      { label: "Cairo", value: 40 },
      { label: "Madrid", value: 55 },
      { label: "London", value: 77 },
      { label: "Singapore", value: 84 }
    ]
  },
  {
    instruction: "Fewest to most types of native palm trees",
    category: "Countries by Native Palm Species",
    items: [
      { label: "Japan", value: 5 },
      { label: "Australia", value: 60 },
      { label: "India", value: 100 },
      { label: "Colombia", value: 225 },
      { label: "Indonesia", value: 490 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in cycling",
    category: "Countries by Olympic Cycling Medals",
    items: [
      { label: "Germany (unified)", value: 60 },
      { label: "Australia", value: 52 },
      { label: "Italy", value: 90 },
      { label: "United Kingdom", value: 95 },
      { label: "France", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest total length of navigable waterways (km)",
    category: "Countries by Navigable Waterway Length",
    items: [
      { label: "United Kingdom", value: 3200 },
      { label: "United States", value: 40000 },
      { label: "Russia", value: 102000 },
      { label: "Brazil", value: 50000 },
      { label: "China", value: 110000 }
    ]
  },
  {
    instruction: "Lowest to highest annual olive oil consumption per capita (kg)",
    category: "Countries by Olive Oil Consumption Per Capita",
    items: [
      { label: "United States", value: 1.0 },
      { label: "France", value: 1.5 },
      { label: "Italy", value: 8 },
      { label: "Spain", value: 10 },
      { label: "Greece", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career grand finals won in Australian Rules Football",
    category: "AFL Teams by Premierships",
    items: [
      { label: "Sydney Swans", value: 5 },
      { label: "Geelong Cats", value: 10 },
      { label: "Richmond Tigers", value: 13 },
      { label: "Hawthorn Hawks", value: 13 },
      { label: "Carlton Blues", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most career doubles titles in tennis (men's)",
    category: "Male Tennis Players by Career Doubles Titles",
    items: [
      { label: "John McEnroe", value: 78 },
      { label: "Mark Woodforde", value: 67 },
      { label: "Daniel Nestor", value: 91 },
      { label: "Todd Woodbridge", value: 83 },
      { label: "Bob Bryan", value: 86 }
    ]
  },
  {
    instruction: "Lowest to highest share of global shipping fleet (%)",
    category: "Countries by Shipping Fleet Share",
    items: [
      { label: "Germany", value: 3 },
      { label: "Japan", value: 7 },
      { label: "China", value: 15 },
      { label: "Greece", value: 17 },
      { label: "Panama (flag state)", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most career wins at Roland Garros (men's singles)",
    category: "Tennis Players by French Open Titles",
    items: [
      { label: "Novak Djokovic", value: 3 },
      { label: "Roger Federer", value: 1 },
      { label: "Bjorn Borg", value: 6 },
      { label: "Max Decugis (France)", value: 8 },
      { label: "Rafael Nadal", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most career wins at US Open tennis (men's singles)",
    category: "Tennis Players by US Open Titles",
    items: [
      { label: "Rafael Nadal", value: 4 },
      { label: "John McEnroe", value: 4 },
      { label: "Roger Federer", value: 5 },
      { label: "Pete Sampras", value: 5 },
      { label: "Jimmy Connors / Bill Tilden", value: 5 }
    ]
  },
  {
    instruction: "Lowest to highest number of PhDs granted per year (thousands)",
    category: "Countries by PhD Graduates Per Year",
    items: [
      { label: "Japan", value: 15 },
      { label: "Germany", value: 28 },
      { label: "India", value: 40 },
      { label: "United States", value: 55 },
      { label: "China", value: 90 }
    ]
  },
  {
    instruction: "Fewest to most career goals in ice hockey (NHL, regular season)",
    category: "NHL Players by Career Regular-Season Goals",
    items: [
      { label: "Brett Hull", value: 741 },
      { label: "Marcel Dionne", value: 731 },
      { label: "Jaromír Jágr", value: 766 },
      { label: "Gordie Howe", value: 801 },
      { label: "Wayne Gretzky", value: 894 }
    ]
  },
  {
    instruction: "Fewest to most Olympic medals in judo (country, all time)",
    category: "Countries by Olympic Judo Medals",
    items: [
      { label: "Germany", value: 18 },
      { label: "Cuba", value: 37 },
      { label: "South Korea", value: 43 },
      { label: "France", value: 55 },
      { label: "Japan", value: 84 }
    ]
  },
  {
    instruction: "Fewest to most registered nurses per 1000 people",
    category: "Countries by Nurse Density",
    items: [
      { label: "India", value: 1.7 },
      { label: "Brazil", value: 3.8 },
      { label: "United States", value: 11.9 },
      { label: "Germany", value: 13.9 },
      { label: "Norway", value: 18.2 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in gymnastics by country",
    category: "Countries by Olympic Gymnastics Medals",
    items: [
      { label: "China", value: 60 },
      { label: "Japan", value: 98 },
      { label: "Romania", value: 73 },
      { label: "United States", value: 51 },
      { label: "Russia/USSR", value: 182 }
    ]
  },
  {
    instruction: "Lowest to highest annual flower export value (billion USD)",
    category: "Countries by Flower Exports",
    items: [
      { label: "Kenya", value: 0.8 },
      { label: "Ecuador", value: 0.9 },
      { label: "Colombia", value: 1.8 },
      { label: "Ethiopia", value: 0.5 },
      { label: "Netherlands", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most career points in AFL (Australian Rules Football)",
    category: "AFL Players by Career Points (goals × 6)",
    items: [
      { label: "Jason Dunstall", value: 4482 },
      { label: "Gary Ablett Sr.", value: 5736 },
      { label: "Doug Wade", value: 4536 },
      { label: "Gordon Coventry", value: 4260 },
      { label: "Tony Lockett", value: 7836 }
    ]
  },
  {
    instruction: "Fewest to most annual music festival attendees (thousands, single event)",
    category: "Music Festivals by Attendance",
    items: [
      { label: "Coachella (California)", value: 250 },
      { label: "Glastonbury (UK)", value: 210 },
      { label: "Rock in Rio (Brazil)", value: 700 },
      { label: "Summerfest (Milwaukee)", value: 800 },
      { label: "Donauinselfest (Vienna)", value: 3000 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in tennis",
    category: "Countries by Olympic Tennis Medals",
    items: [
      { label: "Spain", value: 11 },
      { label: "Switzerland", value: 5 },
      { label: "Russia", value: 10 },
      { label: "Great Britain", value: 15 },
      { label: "United States", value: 21 }
    ]
  },
  {
    instruction: "Lowest to highest global fisheries production (million tonnes, aquaculture)",
    category: "Countries by Aquaculture Production",
    items: [
      { label: "Vietnam", value: 4.6 },
      { label: "Bangladesh", value: 2.6 },
      { label: "Indonesia", value: 14.8 },
      { label: "India", value: 8.6 },
      { label: "China", value: 72 }
    ]
  },
  {
    instruction: "Fewest to most career assists in hockey (NHL regular season)",
    category: "NHL Players by Career Assists",
    items: [
      { label: "Steve Yzerman", value: 1063 },
      { label: "Mario Lemieux", value: 1033 },
      { label: "Gordie Howe", value: 1049 },
      { label: "Jaromír Jágr", value: 1155 },
      { label: "Wayne Gretzky", value: 1963 }
    ]
  },
  {
    instruction: "Fewest to most career wins in women's biathlon World Cup",
    category: "Women Biathlon Athletes by World Cup Wins",
    items: [
      { label: "Dorothea Wierer", value: 15 },
      { label: "Laura Dahlmeier", value: 17 },
      { label: "Kaisa Mäkäräinen", value: 26 },
      { label: "Tora Berger", value: 18 },
      { label: "Magdalena Forsberg", value: 42 }
    ]
  },
  {
    instruction: "Fewest to most career appearances in the English Premier League",
    category: "Premier League Players by Career Appearances",
    items: [
      { label: "Frank Lampard", value: 609 },
      { label: "David James", value: 572 },
      { label: "Ryan Giggs", value: 632 },
      { label: "Gareth Barry", value: 653 },
      { label: "James Milner", value: 612 }
    ]
  },
  {
    instruction: "Lowest to highest total length of rail network (km)",
    category: "Countries by Total Rail Network Length",
    items: [
      { label: "Japan", value: 27311 },
      { label: "Germany", value: 33399 },
      { label: "Russia", value: 85494 },
      { label: "China", value: 155000 },
      { label: "United States", value: 225000 }
    ]
  },
  {
    instruction: "Fewest to most species of orchid native to a country",
    category: "Countries by Native Orchid Species",
    items: [
      { label: "United Kingdom", value: 56 },
      { label: "Japan", value: 230 },
      { label: "India", value: 1300 },
      { label: "Brazil", value: 2500 },
      { label: "Colombia", value: 4270 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in archery",
    category: "Countries by Olympic Archery Medals",
    items: [
      { label: "China", value: 9 },
      { label: "United States", value: 14 },
      { label: "Japan", value: 6 },
      { label: "Italy", value: 10 },
      { label: "South Korea", value: 43 }
    ]
  },
  {
    instruction: "Fewest to most career league goals in Bundesliga",
    category: "Bundesliga Players by Career Goals",
    items: [
      { label: "Karl-Heinz Rummenigge", value: 162 },
      { label: "Claudio Pizarro", value: 197 },
      { label: "Manfred Burgsmüller", value: 213 },
      { label: "Klaus Fischer", value: 268 },
      { label: "Robert Lewandowski", value: 312 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in shooting",
    category: "Countries by Olympic Shooting Medals",
    items: [
      { label: "Germany", value: 45 },
      { label: "Russia/USSR", value: 50 },
      { label: "Sweden", value: 44 },
      { label: "China", value: 60 },
      { label: "United States", value: 112 }
    ]
  },
  {
    instruction: "Fewest to most career Serie A goals (Italian soccer)",
    category: "Serie A Players by Career Goals",
    items: [
      { label: "Alessandro Del Piero", value: 188 },
      { label: "Francesco Totti", value: 250 },
      { label: "Giuseppe Meazza", value: 216 },
      { label: "Gunnar Nordahl", value: 225 },
      { label: "Silvio Piola", value: 274 }
    ]
  },
  {
    instruction: "Fewest to most career Premier League goals",
    category: "Premier League Players by Career Goals",
    items: [
      { label: "Frank Lampard", value: 177 },
      { label: "Thierry Henry", value: 175 },
      { label: "Sergio Agüero", value: 184 },
      { label: "Wayne Rooney", value: 208 },
      { label: "Alan Shearer", value: 260 }
    ]
  },
  {
    instruction: "Fewest to most annual shipbuilding output (million gross tonnes, 2022)",
    category: "Countries by Shipbuilding Output",
    items: [
      { label: "Japan", value: 6 },
      { label: "China", value: 24 },
      { label: "South Korea", value: 15 },
      { label: "Philippines", value: 1 },
      { label: "Italy", value: 0.5 }
    ]
  },
  {
    instruction: "Fewest to most career grand prix wins in show jumping",
    category: "Show Jumping Riders by Career Grand Prix Wins",
    items: [
      { label: "Beezie Madden (USA)", value: 50 },
      { label: "Kent Farrington (USA)", value: 60 },
      { label: "Steve Guerdat (Switzerland)", value: 70 },
      { label: "Marcus Ehning (Germany)", value: 85 },
      { label: "Rodrigo Pessoa (Brazil)", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most total career points in NHL (regular season)",
    category: "NHL Players by Career Points",
    items: [
      { label: "Steve Yzerman", value: 1755 },
      { label: "Mario Lemieux", value: 1723 },
      { label: "Gordie Howe", value: 1850 },
      { label: "Jaromír Jágr", value: 1921 },
      { label: "Wayne Gretzky", value: 2857 }
    ]
  },
  {
    instruction: "Fewest to most native species of reptiles by country",
    category: "Countries by Reptile Species",
    items: [
      { label: "United Kingdom", value: 8 },
      { label: "Japan", value: 87 },
      { label: "United States", value: 466 },
      { label: "India", value: 690 },
      { label: "Australia", value: 1060 }
    ]
  },
  {
    instruction: "Lowest to highest global cement production (million tonnes, 2022)",
    category: "Countries by Cement Production",
    items: [
      { label: "United States", value: 93 },
      { label: "Turkey", value: 65 },
      { label: "Vietnam", value: 100 },
      { label: "India", value: 370 },
      { label: "China", value: 2100 }
    ]
  },
  {
    instruction: "Fewest to most career goals in Ligue 1 (French soccer)",
    category: "Ligue 1 Players by Career Goals",
    items: [
      { label: "Kylian Mbappé", value: 170 },
      { label: "Jean-Pierre Papin", value: 156 },
      { label: "Hervé Revelli", value: 180 },
      { label: "Delio Onnis", value: 299 },
      { label: "Bernard Lacombe", value: 149 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in badminton",
    category: "Countries by Olympic Badminton Medals",
    items: [
      { label: "Japan", value: 10 },
      { label: "Denmark", value: 7 },
      { label: "South Korea", value: 19 },
      { label: "Indonesia", value: 19 },
      { label: "China", value: 47 }
    ]
  },
  {
    instruction: "Fewest to most years a space station has been in orbit",
    category: "Space Stations by Years in Orbit",
    items: [
      { label: "Tiangong 1 (China)", value: 6 },
      { label: "Skylab (USA)", value: 6 },
      { label: "Salyut 7 (USSR)", value: 9 },
      { label: "Mir (Russia)", value: 15 },
      { label: "ISS (International)", value: 26 }
    ]
  },
  {
    instruction: "Fewest to most total pages in the Harry Potter series",
    category: "Harry Potter Books by Page Count",
    items: [
      { label: "Philosopher's Stone", value: 223 },
      { label: "Chamber of Secrets", value: 251 },
      { label: "Prisoner of Azkaban", value: 317 },
      { label: "Goblet of Fire", value: 636 },
      { label: "Order of the Phoenix", value: 766 }
    ]
  },
  {
    instruction: "Fewest to most career wins in biathlon World Cup (men's)",
    category: "Men Biathlon Athletes by World Cup Wins",
    items: [
      { label: "Emil Hegle Svendsen", value: 29 },
      { label: "Raphaël Poirée", value: 44 },
      { label: "Martin Fourcade", value: 83 },
      { label: "Ole Einar Bjørndalen", value: 95 },
      { label: "Johannes Thingnes Bø", value: 80 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in sailing",
    category: "Countries by Olympic Sailing Medals",
    items: [
      { label: "Australia", value: 20 },
      { label: "Germany", value: 26 },
      { label: "France", value: 49 },
      { label: "Great Britain", value: 63 },
      { label: "United States", value: 61 }
    ]
  },
  {
    instruction: "Fewest to most career wins in women's Alpine skiing World Cup",
    category: "Women's Alpine Skiing by World Cup Wins",
    items: [
      { label: "Vreni Schneider", value: 55 },
      { label: "Annemarie Moser-Pröll", value: 62 },
      { label: "Lindsey Vonn", value: 82 },
      { label: "Mikaela Shiffrin", value: 97 },
      { label: "Ingemar Stenmark (men's, for comparison)", value: 86 }
    ]
  },
  {
    instruction: "Fewest to most career centuries in BBL (Big Bash League)",
    category: "BBL Players by Centuries",
    items: [
      { label: "Chris Lynn", value: 3 },
      { label: "Marcus Stoinis", value: 2 },
      { label: "D'Arcy Short", value: 2 },
      { label: "Aaron Finch", value: 4 },
      { label: "Chris Gayle (all T20 leagues)", value: 22 }
    ]
  },
  {
    instruction: "Lowest to highest albedo (reflectivity, 0-1 scale)",
    category: "Surfaces by Reflectivity",
    items: [
      { label: "Fresh Asphalt", value: 0.04 },
      { label: "Forest", value: 0.15 },
      { label: "Grass", value: 0.25 },
      { label: "Desert Sand", value: 0.4 },
      { label: "Fresh Snow", value: 0.9 }
    ]
  },
  {
    instruction: "Fewest to most annual cheese varieties in a market",
    category: "Cheeses by Country of Origin Count",
    items: [
      { label: "Japan", value: 5 },
      { label: "United States", value: 40 },
      { label: "Switzerland", value: 75 },
      { label: "Italy", value: 250 },
      { label: "France", value: 400 }
    ]
  },
  {
    instruction: "Lowest to highest thermal conductivity of gases (mW/m·K at 25°C)",
    category: "Gases by Thermal Conductivity",
    items: [
      { label: "Xenon", value: 5.5 },
      { label: "Carbon Dioxide", value: 16.8 },
      { label: "Argon", value: 17.7 },
      { label: "Air", value: 26.2 },
      { label: "Hydrogen", value: 186 }
    ]
  },
  {
    instruction: "Lowest to highest viscosity (centipoise at 20°C)",
    category: "Liquids by Viscosity",
    items: [
      { label: "Water", value: 1 },
      { label: "Milk", value: 3 },
      { label: "Olive Oil", value: 84 },
      { label: "Honey", value: 10000 },
      { label: "Peanut Butter", value: 250000 }
    ]
  },
  {
    instruction: "Lowest to highest refractive index",
    category: "Materials by Refractive Index",
    items: [
      { label: "Air", value: 1.0003 },
      { label: "Water", value: 1.33 },
      { label: "Glass (crown)", value: 1.52 },
      { label: "Sapphire", value: 1.77 },
      { label: "Diamond", value: 2.42 }
    ]
  },
  {
    instruction: "Lowest to highest surface tension (mN/m at 20°C)",
    category: "Liquids by Surface Tension",
    items: [
      { label: "Ethanol", value: 22 },
      { label: "Acetone", value: 25 },
      { label: "Olive Oil", value: 32 },
      { label: "Water", value: 73 },
      { label: "Mercury", value: 487 }
    ]
  },
  {
    instruction: "Shortest to longest half-life of medical isotopes (hours)",
    category: "Medical Isotopes by Half-Life",
    items: [
      { label: "Oxygen-15 (PET)", value: 0.034 },
      { label: "Technetium-99m", value: 6 },
      { label: "Iodine-131", value: 193 },
      { label: "Cobalt-60", value: 46137 },
      { label: "Cesium-137", value: 264000 }
    ]
  },
  {
    instruction: "Lowest to highest escape velocity from solar system bodies (km/s)",
    category: "Solar System by Escape Velocity",
    items: [
      { label: "Ceres", value: 0.5 },
      { label: "Moon", value: 2.4 },
      { label: "Mars", value: 5.0 },
      { label: "Earth", value: 11.2 },
      { label: "Sun", value: 618 }
    ]
  },
  {
    instruction: "Fewest to most career grand prix wins in F1 by team in a single season",
    category: "F1 Teams by Wins in a Season (best)",
    items: [
      { label: "Williams (1996)", value: 12 },
      { label: "McLaren (1988)", value: 15 },
      { label: "Ferrari (2002)", value: 15 },
      { label: "Mercedes (2016)", value: 19 },
      { label: "Red Bull (2023)", value: 21 }
    ]
  },
  {
    instruction: "Lowest to highest magnetic field strength (Tesla)",
    category: "Magnetic Sources by Field Strength",
    items: [
      { label: "Earth's Magnetic Field", value: 0.00005 },
      { label: "Refrigerator Magnet", value: 0.005 },
      { label: "MRI Machine", value: 3 },
      { label: "Lab Superconducting Magnet", value: 45 },
      { label: "Magnetar (neutron star)", value: 100000000000 }
    ]
  },
  {
    instruction: "Shortest to longest day of the year at different latitudes (hours of daylight, summer solstice)",
    category: "Latitudes by Longest Day Duration",
    items: [
      { label: "Equator (0°)", value: 12 },
      { label: "30° North", value: 14 },
      { label: "45° North", value: 15.5 },
      { label: "60° North", value: 18.5 },
      { label: "70° North", value: 24 }
    ]
  },
  {
    instruction: "Lowest to highest global mushroom production (million tonnes)",
    category: "Countries by Mushroom Production",
    items: [
      { label: "Japan", value: 0.5 },
      { label: "United States", value: 0.4 },
      { label: "Poland", value: 0.4 },
      { label: "India", value: 0.2 },
      { label: "China", value: 39 }
    ]
  },
  {
    instruction: "Lowest to highest UV index (typical peak summer)",
    category: "Cities by Peak UV Index",
    items: [
      { label: "London", value: 6 },
      { label: "New York", value: 9 },
      { label: "Sydney", value: 12 },
      { label: "Nairobi", value: 13 },
      { label: "La Paz (Bolivia)", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most career marathon finishes under 2:10 (men's)",
    category: "Marathon Runners by Sub-2:10 Finishes",
    items: [
      { label: "Haile Gebrselassie", value: 7 },
      { label: "Kenenisa Bekele", value: 6 },
      { label: "Wilson Kipsang", value: 11 },
      { label: "Dennis Kimetto", value: 5 },
      { label: "Eliud Kipchoge", value: 14 }
    ]
  },
  {
    instruction: "Smallest to largest desert in North America (km²)",
    category: "North American Deserts by Area",
    items: [
      { label: "Painted Desert", value: 19000 },
      { label: "Mojave", value: 124000 },
      { label: "Sonoran", value: 260000 },
      { label: "Chihuahuan", value: 362000 },
      { label: "Great Basin", value: 492000 }
    ]
  },
  {
    instruction: "Lowest to highest cocoa consumption per capita (kg/year)",
    category: "Countries by Cocoa Consumption Per Capita",
    items: [
      { label: "India", value: 0.1 },
      { label: "Japan", value: 1.2 },
      { label: "United States", value: 2.2 },
      { label: "Germany", value: 3.6 },
      { label: "Belgium", value: 5.6 }
    ]
  },
  {
    instruction: "Fewest to most career slam titles in squash (World Championship)",
    category: "Squash Players by World Championship Titles",
    items: [
      { label: "Peter Nicol", value: 1 },
      { label: "Ramy Ashour", value: 3 },
      { label: "Amr Shabana", value: 4 },
      { label: "Jahangir Khan", value: 6 },
      { label: "Jansher Khan", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most coral atolls by country",
    category: "Countries by Number of Atolls",
    items: [
      { label: "Seychelles", value: 2 },
      { label: "Tuvalu", value: 6 },
      { label: "Kiribati", value: 21 },
      { label: "Marshall Islands", value: 29 },
      { label: "Maldives", value: 26 }
    ]
  },
  {
    instruction: "Lowest to highest electrical resistivity (Ω·m)",
    category: "Materials by Electrical Resistivity",
    items: [
      { label: "Silver", value: 0.0000000159 },
      { label: "Copper", value: 0.0000000168 },
      { label: "Silicon", value: 640 },
      { label: "Glass", value: 10000000000 },
      { label: "Teflon", value: 1e+23 }
    ]
  },
  {
    instruction: "Fewest to most career ATP Masters 1000 titles",
    category: "Tennis Players by Masters 1000 Titles",
    items: [
      { label: "Pete Sampras", value: 11 },
      { label: "Andre Agassi", value: 17 },
      { label: "Rafael Nadal", value: 36 },
      { label: "Roger Federer", value: 28 },
      { label: "Novak Djokovic", value: 40 }
    ]
  },
  {
    instruction: "Lowest to highest tuna catch by country (thousand tonnes)",
    category: "Countries by Tuna Catch",
    items: [
      { label: "Japan", value: 230 },
      { label: "South Korea", value: 280 },
      { label: "Spain", value: 300 },
      { label: "Taiwan", value: 350 },
      { label: "Indonesia", value: 650 }
    ]
  },
  {
    instruction: "Fewest to most hot springs by country",
    category: "Countries by Number of Hot Springs",
    items: [
      { label: "Italy", value: 100 },
      { label: "United States", value: 1600 },
      { label: "Iceland", value: 800 },
      { label: "China", value: 3000 },
      { label: "Japan", value: 27000 }
    ]
  },
  {
    instruction: "Fewest to most career world records in speed skating",
    category: "Speed Skaters by Career World Records",
    items: [
      { label: "Dan Jansen (USA)", value: 4 },
      { label: "Bonnie Blair (USA)", value: 5 },
      { label: "Eric Heiden (USA)", value: 6 },
      { label: "Ard Schenk (Netherlands)", value: 18 },
      { label: "Ireen Wüst (Netherlands)", value: 10 }
    ]
  },
  {
    instruction: "Lowest to highest speed of Earth's tectonic plates (cm/year)",
    category: "Tectonic Plates by Speed",
    items: [
      { label: "Eurasian Plate", value: 1 },
      { label: "North American Plate", value: 2.5 },
      { label: "South American Plate", value: 3 },
      { label: "Indian Plate", value: 5 },
      { label: "Pacific Plate", value: 10 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of ozone in atmosphere (DU, Dobson Units)",
    category: "Regions by Ozone Layer Thickness",
    items: [
      { label: "Antarctic Ozone Hole (min)", value: 100 },
      { label: "Tropics (equator)", value: 260 },
      { label: "Mid-latitudes (45°N)", value: 350 },
      { label: "Arctic (spring)", value: 300 },
      { label: "Northern Hemisphere (peak)", value: 400 }
    ]
  },
  {
    instruction: "Fewest to most career goals in women's soccer (international)",
    category: "Women Soccer Players by International Goals",
    items: [
      { label: "Mia Hamm (USA)", value: 158 },
      { label: "Marta (Brazil)", value: 115 },
      { label: "Abby Wambach (USA)", value: 184 },
      { label: "Sam Kerr (Australia)", value: 67 },
      { label: "Christine Sinclair (Canada)", value: 190 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in shooting sports",
    category: "Countries by Olympic Shooting Medals (Rifle/Pistol/Shotgun)",
    items: [
      { label: "Italy", value: 40 },
      { label: "France", value: 35 },
      { label: "Russia/USSR", value: 55 },
      { label: "China", value: 58 },
      { label: "United States", value: 110 }
    ]
  },
  {
    instruction: "Lowest to highest global production of apples (million tonnes)",
    category: "Countries by Apple Production",
    items: [
      { label: "France", value: 1.8 },
      { label: "United States", value: 4.5 },
      { label: "Turkey", value: 4.3 },
      { label: "Poland", value: 4 },
      { label: "China", value: 46 }
    ]
  },
  {
    instruction: "Lowest to highest luminosity of light sources (lumens per watt)",
    category: "Light Sources by Efficiency",
    items: [
      { label: "Candle", value: 0.3 },
      { label: "Incandescent Bulb", value: 15 },
      { label: "Halogen", value: 25 },
      { label: "CFL", value: 65 },
      { label: "LED", value: 150 }
    ]
  },
  {
    instruction: "Lowest to highest annual migration of animals (number of individuals, millions)",
    category: "Animal Migrations by Number",
    items: [
      { label: "Caribou (North America)", value: 0.5 },
      { label: "Wildebeest (Serengeti)", value: 1.5 },
      { label: "Monarch Butterflies", value: 300 },
      { label: "Christmas Island Red Crabs", value: 50 },
      { label: "Sardines (South Africa)", value: 5000 }
    ]
  },
  {
    instruction: "Fewest to most total career assists in Bundesliga",
    category: "Bundesliga Players by Career Assists",
    items: [
      { label: "Franck Ribéry", value: 85 },
      { label: "Mesut Özil", value: 54 },
      { label: "Arjen Robben", value: 51 },
      { label: "Kevin De Bruyne", value: 40 },
      { label: "Thomas Müller", value: 151 }
    ]
  },
  {
    instruction: "Fewest to most career wickets in T20 cricket (all formats)",
    category: "T20 Cricket Bowlers by Career Wickets",
    items: [
      { label: "Rashid Khan", value: 500 },
      { label: "Sunil Narine", value: 480 },
      { label: "Imran Tahir", value: 470 },
      { label: "Lasith Malinga", value: 390 },
      { label: "Dwayne Bravo", value: 600 }
    ]
  },
  {
    instruction: "Lowest to highest speed of glacier movement (meters/year)",
    category: "Glaciers by Speed",
    items: [
      { label: "Typical Alpine Glacier", value: 10 },
      { label: "Hubbard Glacier (Alaska)", value: 25 },
      { label: "Columbia Glacier (Alaska)", value: 8000 },
      { label: "Jakobshavn Glacier (Greenland)", value: 20000 },
      { label: "Pine Island Glacier (Antarctica)", value: 4000 }
    ]
  },
  {
    instruction: "Fewest to most total World Series MVPs from one team",
    category: "MLB Teams by World Series MVPs",
    items: [
      { label: "Cincinnati Reds", value: 3 },
      { label: "Oakland Athletics", value: 4 },
      { label: "Los Angeles Dodgers", value: 8 },
      { label: "St. Louis Cardinals", value: 6 },
      { label: "New York Yankees", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most species of bamboo native to a continent",
    category: "Continents by Native Bamboo Species",
    items: [
      { label: "Europe", value: 0 },
      { label: "North America", value: 3 },
      { label: "Africa", value: 43 },
      { label: "South America", value: 450 },
      { label: "Asia", value: 900 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in equestrian",
    category: "Countries by Olympic Equestrian Medals",
    items: [
      { label: "Australia", value: 8 },
      { label: "Netherlands", value: 30 },
      { label: "France", value: 31 },
      { label: "Great Britain", value: 31 },
      { label: "Germany", value: 92 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of vitamin E in foods (mg per 100g)",
    category: "Foods by Vitamin E Content",
    items: [
      { label: "Apple", value: 0.2 },
      { label: "Avocado", value: 2.1 },
      { label: "Olive Oil", value: 14 },
      { label: "Almonds", value: 25 },
      { label: "Sunflower Seeds", value: 35 }
    ]
  },
  {
    instruction: "Lowest to highest annual rainfall in a rainforest (mm)",
    category: "Rainforests by Annual Rainfall",
    items: [
      { label: "Temperate Rainforest (Pacific NW)", value: 2000 },
      { label: "Amazon (average)", value: 2300 },
      { label: "Congo Basin", value: 1800 },
      { label: "Daintree (Australia)", value: 3000 },
      { label: "Chocó Region (Colombia)", value: 10000 }
    ]
  },
  {
    instruction: "Fewest to most species of cactus native to a country",
    category: "Countries by Native Cactus Species",
    items: [
      { label: "Argentina", value: 200 },
      { label: "Bolivia", value: 100 },
      { label: "United States", value: 150 },
      { label: "Brazil", value: 270 },
      { label: "Mexico", value: 669 }
    ]
  },
  {
    instruction: "Lowest to highest boiling point of cooking liquids (°C)",
    category: "Cooking Liquids by Boiling Point",
    items: [
      { label: "Alcohol (ethanol)", value: 78 },
      { label: "Water", value: 100 },
      { label: "Saltwater (saturated)", value: 108 },
      { label: "Sugar Syrup (heavy)", value: 115 },
      { label: "Frying Oil (smoke point)", value: 230 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in cross-country skiing",
    category: "Cross-Country Skiers by Olympic Medals",
    items: [
      { label: "Gunde Svan (Sweden)", value: 4 },
      { label: "Vegard Ulvang (Norway)", value: 4 },
      { label: "Bjørn Dæhlie (Norway)", value: 12 },
      { label: "Marit Bjørgen (Norway)", value: 15 },
      { label: "Ole Einar Bjørndalen (biathlon/xc)", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most total World Darts Championship titles (PDC + BDO)",
    category: "Darts Players by Total World Titles",
    items: [
      { label: "John Lowe", value: 1 },
      { label: "Raymond van Barneveld", value: 5 },
      { label: "Michael van Gerwen", value: 3 },
      { label: "Eric Bristow", value: 5 },
      { label: "Phil Taylor", value: 16 }
    ]
  },
  {
    instruction: "Lowest to highest global grape production (million tonnes)",
    category: "Countries by Grape Production",
    items: [
      { label: "France", value: 6 },
      { label: "United States", value: 6 },
      { label: "Spain", value: 7 },
      { label: "Italy", value: 8 },
      { label: "China", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most total career yellow jersey days in Tour de France",
    category: "Cyclists by Days in Yellow Jersey",
    items: [
      { label: "Chris Froome", value: 59 },
      { label: "Bernard Hinault", value: 79 },
      { label: "Miguel Indurain", value: 60 },
      { label: "Jacques Anquetil", value: 50 },
      { label: "Eddy Merckx", value: 96 }
    ]
  },
  {
    instruction: "Lowest to highest blood alcohol content causing impairment",
    category: "BAC Effects on Body (%)",
    items: [
      { label: "Mild Euphoria", value: 0.03 },
      { label: "Lowered Inhibitions", value: 0.05 },
      { label: "Impaired Balance", value: 0.08 },
      { label: "Severe Impairment", value: 0.15 },
      { label: "Risk of Death", value: 0.35 }
    ]
  },
  {
    instruction: "Fewest to most career wins in cross-country skiing World Cup",
    category: "Cross-Country Skiers by World Cup Wins",
    items: [
      { label: "Gunde Svan (Sweden)", value: 30 },
      { label: "Dario Cologna (Switzerland)", value: 15 },
      { label: "Marit Bjørgen (Norway)", value: 85 },
      { label: "Bjørn Dæhlie (Norway)", value: 46 },
      { label: "Johaug (Norway)", value: 80 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in wrestling",
    category: "Countries by Olympic Wrestling Medals",
    items: [
      { label: "Iran", value: 43 },
      { label: "Turkey", value: 60 },
      { label: "Japan", value: 69 },
      { label: "United States", value: 54 },
      { label: "Russia/USSR", value: 116 }
    ]
  },
  {
    instruction: "Lowest to highest phosphorus per 100g (mg)",
    category: "Foods by Phosphorus Content",
    items: [
      { label: "Apple", value: 11 },
      { label: "Carrot", value: 35 },
      { label: "Chicken", value: 198 },
      { label: "Cheese (cheddar)", value: 512 },
      { label: "Pumpkin Seeds", value: 1233 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in canoeing/kayaking",
    category: "Countries by Olympic Canoeing Medals",
    items: [
      { label: "France", value: 24 },
      { label: "Australia", value: 13 },
      { label: "Hungary", value: 80 },
      { label: "Germany (unified)", value: 70 },
      { label: "Russia/USSR", value: 30 }
    ]
  },
  {
    instruction: "Fewest to most career goals in women's Champions League (soccer)",
    category: "Women Soccer Players by Champions League Goals",
    items: [
      { label: "Marta (Brazil)", value: 20 },
      { label: "Eugénie Le Sommer (France)", value: 46 },
      { label: "Anja Mittag (Germany)", value: 51 },
      { label: "Cristiane (Brazil)", value: 44 },
      { label: "Ada Hegerberg (Norway)", value: 59 }
    ]
  },
  {
    instruction: "Fewest to most career World Cup goals in soccer (men's)",
    category: "Soccer Players by World Cup Goals",
    items: [
      { label: "Pelé", value: 12 },
      { label: "Ronaldo Nazário", value: 15 },
      { label: "Gerd Müller", value: 14 },
      { label: "Just Fontaine", value: 13 },
      { label: "Miroslav Klose", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in taekwondo",
    category: "Countries by Olympic Taekwondo Medals",
    items: [
      { label: "Iran", value: 12 },
      { label: "Turkey", value: 8 },
      { label: "China", value: 10 },
      { label: "United States", value: 5 },
      { label: "South Korea", value: 22 }
    ]
  },
  {
    instruction: "Shortest to longest gestation in big cats (days)",
    category: "Big Cats by Gestation Period",
    items: [
      { label: "Cheetah", value: 93 },
      { label: "Leopard", value: 96 },
      { label: "Jaguar", value: 100 },
      { label: "Tiger", value: 104 },
      { label: "Lion", value: 110 }
    ]
  },
  {
    instruction: "Fewest to most career Test match catches (cricket fielders, non-keepers)",
    category: "Cricket Fielders by Test Catches",
    items: [
      { label: "Brian Lara (West Indies)", value: 164 },
      { label: "Jacques Kallis (South Africa)", value: 200 },
      { label: "Ricky Ponting (Australia)", value: 196 },
      { label: "Mahela Jayawardene (Sri Lanka)", value: 205 },
      { label: "Rahul Dravid (India)", value: 210 }
    ]
  },
  {
    instruction: "Lowest to highest global almond production (thousand tonnes)",
    category: "Countries by Almond Production",
    items: [
      { label: "Italy", value: 75 },
      { label: "Iran", value: 180 },
      { label: "Australia", value: 270 },
      { label: "Spain", value: 340 },
      { label: "United States (California)", value: 1440 }
    ]
  },
  {
    instruction: "Fewest to most career World Championship medals in athletics",
    category: "Athletes by World Championship Medals",
    items: [
      { label: "Carl Lewis", value: 10 },
      { label: "Mo Farah", value: 6 },
      { label: "Shelly-Ann Fraser-Pryce", value: 10 },
      { label: "Allyson Felix", value: 20 },
      { label: "Usain Bolt", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most career luge World Cup wins",
    category: "Luge Athletes by World Cup Wins",
    items: [
      { label: "Armin Zöggeler (Italy)", value: 10 },
      { label: "Georg Hackl (Germany)", value: 18 },
      { label: "Felix Loch (Germany)", value: 45 },
      { label: "Natalie Geisenberger (Germany)", value: 55 },
      { label: "Tobias Wendl/Tobias Arlt", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most World Surf League championship titles",
    category: "Surfers by World Championship Titles",
    items: [
      { label: "Andy Irons", value: 3 },
      { label: "Mick Fanning", value: 3 },
      { label: "Mark Richards", value: 4 },
      { label: "Stephanie Gilmore", value: 8 },
      { label: "Kelly Slater", value: 11 }
    ]
  },
  {
    instruction: "Lowest to highest annual pistachio production (thousand tonnes)",
    category: "Countries by Pistachio Production",
    items: [
      { label: "Syria", value: 20 },
      { label: "Turkey", value: 240 },
      { label: "United States", value: 450 },
      { label: "Iran", value: 580 },
      { label: "China", value: 80 }
    ]
  },
  {
    instruction: "Lowest to highest annual pork consumption per capita (kg)",
    category: "Countries by Pork Consumption Per Capita",
    items: [
      { label: "United States", value: 28 },
      { label: "Brazil", value: 14 },
      { label: "Germany", value: 38 },
      { label: "China", value: 32 },
      { label: "Austria", value: 56 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in speed skating",
    category: "Speed Skaters by Total Olympic Medals",
    items: [
      { label: "Eric Heiden (USA)", value: 5 },
      { label: "Bonnie Blair (USA)", value: 6 },
      { label: "Claudia Pechstein (Germany)", value: 9 },
      { label: "Sven Kramer (Netherlands)", value: 9 },
      { label: "Ireen Wüst (Netherlands)", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most annual bicycle production by country (millions)",
    category: "Countries by Bicycle Production",
    items: [
      { label: "Germany", value: 2 },
      { label: "Japan", value: 3 },
      { label: "Taiwan", value: 5 },
      { label: "India", value: 20 },
      { label: "China", value: 80 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in handball",
    category: "Countries by Olympic Handball Medals",
    items: [
      { label: "Germany", value: 6 },
      { label: "Sweden", value: 8 },
      { label: "Croatia", value: 5 },
      { label: "France", value: 10 },
      { label: "Denmark", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most career World Rally Championship titles",
    category: "Rally Drivers by WRC Championships",
    items: [
      { label: "Colin McRae", value: 1 },
      { label: "Walter Röhrl", value: 2 },
      { label: "Tommi Mäkinen", value: 4 },
      { label: "Sébastien Loeb", value: 9 },
      { label: "Sébastien Ogier", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in water polo",
    category: "Countries by Olympic Water Polo Medals",
    items: [
      { label: "Croatia", value: 3 },
      { label: "United States", value: 8 },
      { label: "Italy", value: 10 },
      { label: "Serbia/Yugoslavia", value: 11 },
      { label: "Hungary", value: 15 }
    ]
  },
  {
    instruction: "Lowest to highest daily newspaper readership per capita",
    category: "Countries by Newspaper Readership",
    items: [
      { label: "United States", value: 17 },
      { label: "United Kingdom", value: 22 },
      { label: "Germany", value: 30 },
      { label: "Sweden", value: 40 },
      { label: "Japan", value: 55 }
    ]
  },
  {
    instruction: "Fewest to most career laps completed in F1",
    category: "F1 Drivers by Career Laps Completed",
    items: [
      { label: "Ayrton Senna", value: 8397 },
      { label: "Michael Schumacher", value: 16825 },
      { label: "Sebastian Vettel", value: 16232 },
      { label: "Kimi Räikkönen", value: 18622 },
      { label: "Lewis Hamilton", value: 19500 }
    ]
  },
  {
    instruction: "Fewest to most total Oscar nominations for an actor/actress",
    category: "Actors by Oscar Nominations",
    items: [
      { label: "Leonardo DiCaprio", value: 7 },
      { label: "Jack Nicholson", value: 12 },
      { label: "Cate Blanchett", value: 8 },
      { label: "Meryl Streep", value: 21 },
      { label: "Katharine Hepburn", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career Oscar wins for Best Director",
    category: "Directors by Oscar Wins",
    items: [
      { label: "Steven Spielberg", value: 2 },
      { label: "Clint Eastwood", value: 2 },
      { label: "Francis Ford Coppola", value: 2 },
      { label: "William Wyler", value: 3 },
      { label: "John Ford", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most Grammy Awards won (career)",
    category: "Musicians by Grammy Awards",
    items: [
      { label: "Adele", value: 16 },
      { label: "Stevie Wonder", value: 25 },
      { label: "Jay-Z", value: 24 },
      { label: "Quincy Jones", value: 28 },
      { label: "Beyoncé", value: 32 }
    ]
  },
  {
    instruction: "Fewest to most Tony Awards won (career, individual)",
    category: "Theater Performers by Tony Awards",
    items: [
      { label: "Audra McDonald", value: 6 },
      { label: "Angela Lansbury", value: 5 },
      { label: "Julie Harris", value: 5 },
      { label: "Harold Prince (producer/director)", value: 21 },
      { label: "Bob Fosse", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most career Emmy Awards won (individual)",
    category: "TV Personalities by Emmy Awards",
    items: [
      { label: "Jon Stewart", value: 20 },
      { label: "Julia Louis-Dreyfus", value: 11 },
      { label: "Sheila Nevins", value: 26 },
      { label: "Bill Maher", value: 1 },
      { label: "Dwight Hemion (director)", value: 18 }
    ]
  },
  {
    instruction: "Fewest to most career BAFTA wins",
    category: "Actors by BAFTA Awards",
    items: [
      { label: "Daniel Day-Lewis", value: 3 },
      { label: "Anthony Hopkins", value: 4 },
      { label: "Cate Blanchett", value: 4 },
      { label: "Jack Nicholson", value: 6 },
      { label: "Judi Dench", value: 7 }
    ]
  },
  {
    instruction: "Lowest to highest number of castles in a European country",
    category: "European Countries by Castle Count",
    items: [
      { label: "Switzerland", value: 600 },
      { label: "Spain", value: 2500 },
      { label: "United Kingdom", value: 4000 },
      { label: "France", value: 10000 },
      { label: "Germany", value: 25000 }
    ]
  },
  {
    instruction: "Fewest to most career WTA titles in tennis",
    category: "Women Tennis Players by Career WTA Titles",
    items: [
      { label: "Serena Williams", value: 73 },
      { label: "Steffi Graf", value: 107 },
      { label: "Chris Evert", value: 157 },
      { label: "Billie Jean King", value: 67 },
      { label: "Martina Navratilova", value: 167 }
    ]
  },
  {
    instruction: "Fewest to most career World Cup downhill wins (Alpine skiing)",
    category: "Alpine Skiers by Downhill World Cup Wins",
    items: [
      { label: "Michael Walchhofer", value: 12 },
      { label: "Luc Alphand", value: 9 },
      { label: "Didier Cuche", value: 14 },
      { label: "Lindsey Vonn", value: 43 },
      { label: "Franz Klammer", value: 25 }
    ]
  },
  {
    instruction: "Fewest to most total books sold by an author (millions, estimated)",
    category: "Authors by Total Books Sold",
    items: [
      { label: "J.R.R. Tolkien", value: 300 },
      { label: "J.K. Rowling", value: 600 },
      { label: "Agatha Christie", value: 2000 },
      { label: "William Shakespeare (print)", value: 4000 },
      { label: "Barbara Cartland", value: 750 }
    ]
  },
  {
    instruction: "Fewest to most volcanoes in a US state",
    category: "US States by Volcano Count",
    items: [
      { label: "Oregon", value: 22 },
      { label: "California", value: 20 },
      { label: "Washington", value: 7 },
      { label: "Hawaii", value: 6 },
      { label: "Alaska", value: 141 }
    ]
  },
  {
    instruction: "Fewest to most career La Liga assists (soccer)",
    category: "La Liga Players by Career Assists",
    items: [
      { label: "Cristiano Ronaldo", value: 63 },
      { label: "Karim Benzema", value: 97 },
      { label: "Luis Suárez", value: 56 },
      { label: "Xavi", value: 120 },
      { label: "Lionel Messi", value: 192 }
    ]
  },
  {
    instruction: "Fewest to most species of penguins in a region",
    category: "Regions by Penguin Species",
    items: [
      { label: "Africa", value: 1 },
      { label: "Galápagos Islands", value: 1 },
      { label: "New Zealand", value: 6 },
      { label: "South America", value: 8 },
      { label: "Antarctica/Sub-Antarctic", value: 7 }
    ]
  },
  {
    instruction: "Lowest to highest annual walnut production (thousand tonnes)",
    category: "Countries by Walnut Production",
    items: [
      { label: "France", value: 35 },
      { label: "Turkey", value: 225 },
      { label: "Iran", value: 380 },
      { label: "United States", value: 650 },
      { label: "China", value: 1100 }
    ]
  },
  {
    instruction: "Fewest to most career goals in the Eredivisie (Dutch soccer)",
    category: "Eredivisie Players by Career Goals",
    items: [
      { label: "Marco van Basten", value: 128 },
      { label: "Johan Cruyff", value: 215 },
      { label: "Ruud Geels", value: 195 },
      { label: "Willy van der Kuijlen", value: 311 },
      { label: "Abe Lenstra", value: 306 }
    ]
  },
  {
    instruction: "Fewest to most total career grand prix wins in F1 by engine manufacturer",
    category: "F1 Engine Manufacturers by Wins",
    items: [
      { label: "Honda", value: 90 },
      { label: "Renault", value: 168 },
      { label: "Mercedes", value: 210 },
      { label: "Ford (Cosworth)", value: 176 },
      { label: "Ferrari", value: 243 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in alpine skiing",
    category: "Alpine Skiers by Olympic Medals",
    items: [
      { label: "Alberto Tomba (Italy)", value: 5 },
      { label: "Jean-Claude Killy (France)", value: 3 },
      { label: "Bode Miller (USA)", value: 6 },
      { label: "Kjetil André Aamodt (Norway)", value: 8 },
      { label: "Marcel Hirscher (Austria)", value: 3 }
    ]
  },
  {
    instruction: "Lowest to highest annual hazelnut production (thousand tonnes)",
    category: "Countries by Hazelnut Production",
    items: [
      { label: "United States", value: 50 },
      { label: "Georgia", value: 40 },
      { label: "Chile", value: 60 },
      { label: "Italy", value: 100 },
      { label: "Turkey", value: 700 }
    ]
  },
  {
    instruction: "Fewest to most career Ligue 1 assists (French soccer)",
    category: "Ligue 1 Players by Career Assists",
    items: [
      { label: "Neymar", value: 50 },
      { label: "Kylian Mbappé", value: 70 },
      { label: "Juninho Pernambucano", value: 61 },
      { label: "Ángel Di María", value: 79 },
      { label: "Dimitri Payet", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in swimming by individual",
    category: "Swimmers by Total Olympic Medals",
    items: [
      { label: "Ian Thorpe", value: 5 },
      { label: "Mark Spitz", value: 11 },
      { label: "Ryan Lochte", value: 12 },
      { label: "Jenny Thompson", value: 12 },
      { label: "Michael Phelps", value: 28 }
    ]
  },
  {
    instruction: "Lowest to highest annual cashew production (thousand tonnes)",
    category: "Countries by Cashew Production",
    items: [
      { label: "Ivory Coast", value: 1000 },
      { label: "Tanzania", value: 290 },
      { label: "India", value: 790 },
      { label: "Mozambique", value: 180 },
      { label: "Vietnam", value: 380 }
    ]
  },
  {
    instruction: "Fewest to most career hat tricks in Premier League",
    category: "Premier League Players by Hat Tricks",
    items: [
      { label: "Thierry Henry", value: 8 },
      { label: "Robbie Fowler", value: 9 },
      { label: "Michael Owen", value: 8 },
      { label: "Wayne Rooney", value: 12 },
      { label: "Alan Shearer", value: 11 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in diving",
    category: "Countries by Olympic Diving Medals",
    items: [
      { label: "Mexico", value: 14 },
      { label: "Germany", value: 22 },
      { label: "Australia", value: 14 },
      { label: "China", value: 82 },
      { label: "United States", value: 49 }
    ]
  },
  {
    instruction: "Lowest to highest annual production of oranges (million tonnes)",
    category: "Countries by Orange Production",
    items: [
      { label: "United States", value: 4 },
      { label: "Mexico", value: 4.5 },
      { label: "Egypt", value: 3.5 },
      { label: "China", value: 7.5 },
      { label: "Brazil", value: 17 }
    ]
  },
  {
    instruction: "Fewest to most career Serie A assists (Italian soccer)",
    category: "Serie A Players by Career Assists",
    items: [
      { label: "Cristiano Ronaldo", value: 22 },
      { label: "Alessandro Del Piero", value: 100 },
      { label: "Roberto Baggio", value: 70 },
      { label: "Andrea Pirlo", value: 63 },
      { label: "Francesco Totti", value: 138 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in field hockey",
    category: "Countries by Olympic Field Hockey Medals",
    items: [
      { label: "South Korea", value: 5 },
      { label: "Australia", value: 12 },
      { label: "Pakistan", value: 8 },
      { label: "Netherlands", value: 15 },
      { label: "India", value: 12 }
    ]
  },
  {
    instruction: "Lowest to highest annual mango production (million tonnes)",
    category: "Countries by Mango Production",
    items: [
      { label: "Brazil", value: 1.5 },
      { label: "Thailand", value: 3.6 },
      { label: "Indonesia", value: 3 },
      { label: "China", value: 5 },
      { label: "India", value: 21 }
    ]
  },
  {
    instruction: "Fewest to most career Serie A appearances (Italian soccer)",
    category: "Serie A Players by Career Appearances",
    items: [
      { label: "Alessandro Del Piero", value: 478 },
      { label: "Francesco Totti", value: 619 },
      { label: "Gianluigi Buffon", value: 657 },
      { label: "Paolo Maldini", value: 647 },
      { label: "Javier Zanetti", value: 615 }
    ]
  },
  {
    instruction: "Fewest to most total Paralympic medals by country (all time)",
    category: "Countries by Paralympic Medals",
    items: [
      { label: "Japan", value: 528 },
      { label: "France", value: 819 },
      { label: "China", value: 900 },
      { label: "Great Britain", value: 1917 },
      { label: "United States", value: 2445 }
    ]
  },
  {
    instruction: "Fewest to most career appearances in Bundesliga (German soccer)",
    category: "Bundesliga Players by Career Appearances",
    items: [
      { label: "Franck Ribéry", value: 273 },
      { label: "Thomas Müller", value: 430 },
      { label: "Mirko Votava", value: 445 },
      { label: "Karl-Heinz Körbel", value: 602 },
      { label: "Claudio Pizarro", value: 490 }
    ]
  },
  {
    instruction: "Lowest to highest global coconut production (million tonnes, 2022)",
    category: "Countries by Coconut Production",
    items: [
      { label: "Sri Lanka", value: 2.5 },
      { label: "India", value: 14.7 },
      { label: "Philippines", value: 14.8 },
      { label: "Indonesia", value: 17 },
      { label: "Brazil", value: 2.3 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in karate",
    category: "Countries by Olympic Karate Medals (2020)",
    items: [
      { label: "Egypt", value: 1 },
      { label: "Italy", value: 3 },
      { label: "Turkey", value: 2 },
      { label: "France", value: 3 },
      { label: "Japan", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most career Bundesliga clean sheets (goalkeepers)",
    category: "Bundesliga Goalkeepers by Clean Sheets",
    items: [
      { label: "Jens Lehmann", value: 77 },
      { label: "Oliver Kahn", value: 119 },
      { label: "Sepp Maier", value: 146 },
      { label: "Toni Schumacher", value: 100 },
      { label: "Manuel Neuer", value: 210 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in triathlon",
    category: "Countries by Olympic Triathlon Medals",
    items: [
      { label: "Australia", value: 7 },
      { label: "Great Britain", value: 9 },
      { label: "New Zealand", value: 3 },
      { label: "Switzerland", value: 5 },
      { label: "Germany", value: 3 }
    ]
  },
  {
    instruction: "Lowest to highest annual kiwifruit production (thousand tonnes)",
    category: "Countries by Kiwifruit Production",
    items: [
      { label: "France", value: 50 },
      { label: "Greece", value: 200 },
      { label: "Italy", value: 520 },
      { label: "New Zealand", value: 640 },
      { label: "China", value: 2400 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in modern pentathlon",
    category: "Countries by Olympic Modern Pentathlon Medals",
    items: [
      { label: "United States", value: 5 },
      { label: "Germany", value: 9 },
      { label: "Great Britain", value: 7 },
      { label: "Russia/USSR", value: 15 },
      { label: "Hungary", value: 23 }
    ]
  },
  {
    instruction: "Fewest to most international football stadiums with over 80,000 capacity",
    category: "Countries by Large Stadium Count (80K+)",
    items: [
      { label: "Germany", value: 1 },
      { label: "India", value: 3 },
      { label: "Brazil", value: 2 },
      { label: "United Kingdom", value: 2 },
      { label: "United States", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most career Premier League clean sheets (goalkeepers)",
    category: "Premier League Goalkeepers by Clean Sheets",
    items: [
      { label: "David James", value: 169 },
      { label: "Mark Schwarzer", value: 151 },
      { label: "David Seaman", value: 141 },
      { label: "Petr Čech", value: 202 },
      { label: "Peter Schmeichel", value: 128 }
    ]
  },
  {
    instruction: "Fewest to most World Heavyweight boxing title defenses",
    category: "Heavyweight Boxers by Title Defenses",
    items: [
      { label: "Mike Tyson", value: 9 },
      { label: "Muhammad Ali", value: 19 },
      { label: "Larry Holmes", value: 20 },
      { label: "Lennox Lewis", value: 14 },
      { label: "Joe Louis", value: 25 }
    ]
  },
  {
    instruction: "Fewest to most career aces in women's tennis",
    category: "Women Tennis Players by Career Aces",
    items: [
      { label: "Venus Williams", value: 3800 },
      { label: "Karolina Plíšková", value: 4500 },
      { label: "Serena Williams", value: 4800 },
      { label: "Sam Stosur", value: 2200 },
      { label: "Sabine Lisicki", value: 2000 }
    ]
  },
  {
    instruction: "Lowest to highest global coffee consumption (million bags, 60 kg each)",
    category: "Countries by Coffee Consumption (total)",
    items: [
      { label: "Japan", value: 7 },
      { label: "Germany", value: 8 },
      { label: "Brazil", value: 22 },
      { label: "United States", value: 26 },
      { label: "European Union (total)", value: 52 }
    ]
  },
  {
    instruction: "Fewest to most Indy 500 starts by a driver",
    category: "IndyCar Drivers by Indy 500 Starts",
    items: [
      { label: "Mario Andretti", value: 29 },
      { label: "Graham Hill", value: 9 },
      { label: "Scott Dixon", value: 23 },
      { label: "Hélio Castroneves", value: 24 },
      { label: "A.J. Foyt", value: 35 }
    ]
  },
  {
    instruction: "Fewest to most total Champions League appearances (individual player)",
    category: "Soccer Players by Champions League Appearances",
    items: [
      { label: "Raúl", value: 142 },
      { label: "Iker Casillas", value: 177 },
      { label: "Lionel Messi", value: 163 },
      { label: "Xavi", value: 151 },
      { label: "Cristiano Ronaldo", value: 183 }
    ]
  },
  {
    instruction: "Lowest to highest annual date fruit production (thousand tonnes)",
    category: "Countries by Date Production",
    items: [
      { label: "Tunisia", value: 345 },
      { label: "Saudi Arabia", value: 1540 },
      { label: "Iran", value: 1300 },
      { label: "Iraq", value: 620 },
      { label: "Egypt", value: 1690 }
    ]
  },
  {
    instruction: "Fewest to most career Marathon Majors wins",
    category: "Marathon Runners by Major Marathon Victories",
    items: [
      { label: "Dennis Kimetto", value: 1 },
      { label: "Haile Gebrselassie", value: 4 },
      { label: "Kenenisa Bekele", value: 2 },
      { label: "Eliud Kipchoge", value: 10 },
      { label: "Bill Rodgers", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most career Champions League goals (soccer)",
    category: "Soccer Players by Champions League Goals",
    items: [
      { label: "Thierry Henry", value: 50 },
      { label: "Raúl", value: 71 },
      { label: "Karim Benzema", value: 90 },
      { label: "Lionel Messi", value: 129 },
      { label: "Cristiano Ronaldo", value: 140 }
    ]
  },
  {
    instruction: "Fewest to most career World Cup appearances (individual soccer player)",
    category: "Soccer Players by World Cup Appearances (matches played)",
    items: [
      { label: "Diego Maradona", value: 21 },
      { label: "Pelé", value: 14 },
      { label: "Miroslav Klose", value: 24 },
      { label: "Lionel Messi", value: 26 },
      { label: "Lothar Matthäus", value: 25 }
    ]
  },
  {
    instruction: "Lowest to highest annual pineapple production (million tonnes)",
    category: "Countries by Pineapple Production",
    items: [
      { label: "India", value: 1.7 },
      { label: "Indonesia", value: 2.7 },
      { label: "Philippines", value: 2.7 },
      { label: "Brazil", value: 2.4 },
      { label: "Costa Rica", value: 3.4 }
    ]
  },
  {
    instruction: "Fewest to most career Bundesliga goals in a single season",
    category: "Bundesliga Single-Season Goal Records",
    items: [
      { label: "Pierre-Emerick Aubameyang (2016-17)", value: 31 },
      { label: "Jupp Heynckes (1973-74)", value: 30 },
      { label: "Lothar Emmerich (1965-66)", value: 31 },
      { label: "Dieter Müller (1976-77)", value: 34 },
      { label: "Robert Lewandowski (2020-21)", value: 41 }
    ]
  },
  {
    instruction: "Fewest to most total Champions League titles by league",
    category: "European Leagues by Champions League Titles",
    items: [
      { label: "Portuguese Primeira Liga", value: 4 },
      { label: "Bundesliga (Germany)", value: 8 },
      { label: "Premier League (England)", value: 15 },
      { label: "Serie A (Italy)", value: 12 },
      { label: "La Liga (Spain)", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in biathlon",
    category: "Biathletes by Olympic Medals",
    items: [
      { label: "Martin Fourcade (France)", value: 5 },
      { label: "Uschi Disl (Germany)", value: 9 },
      { label: "Darya Domracheva (Belarus)", value: 6 },
      { label: "Raphaël Poirée (France)", value: 4 },
      { label: "Ole Einar Bjørndalen (Norway)", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most career wins at the World Athletics Championships (individual)",
    category: "Athletes by World Athletics Championship Golds",
    items: [
      { label: "Carl Lewis (USA)", value: 8 },
      { label: "Mo Farah (UK)", value: 6 },
      { label: "Usain Bolt (Jamaica)", value: 11 },
      { label: "Shelly-Ann Fraser-Pryce (Jamaica)", value: 5 },
      { label: "Allyson Felix (USA)", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most career total points in Premier League (team, single season)",
    category: "Premier League Teams by Single-Season Points Record",
    items: [
      { label: "Chelsea (2004-05)", value: 95 },
      { label: "Arsenal (2003-04 Invincibles)", value: 90 },
      { label: "Liverpool (2019-20)", value: 99 },
      { label: "Manchester City (2017-18)", value: 100 },
      { label: "Manchester City (2018-19)", value: 98 }
    ]
  },
  {
    instruction: "Fewest to most total World Cup finals appearances (soccer team)",
    category: "Countries by World Cup Final Appearances",
    items: [
      { label: "England", value: 1 },
      { label: "France", value: 3 },
      { label: "Italy", value: 6 },
      { label: "Argentina", value: 6 },
      { label: "Germany", value: 8 }
    ]
  },
  {
    instruction: "Lowest to highest decibel level",
    category: "Sounds by Decibel Level",
    items: [
      { label: "Whisper", value: 20 },
      { label: "Normal Conversation", value: 60 },
      { label: "Vacuum Cleaner", value: 75 },
      { label: "Rock Concert", value: 110 },
      { label: "Jet Engine (30m)", value: 150 }
    ]
  },
  {
    instruction: "Fewest to most words in the English language by origin",
    category: "English Vocabulary Origins by Percentage (%)",
    items: [
      { label: "Celtic", value: 2 },
      { label: "Old Norse", value: 6 },
      { label: "Germanic", value: 26 },
      { label: "French/Norman", value: 29 },
      { label: "Latin", value: 29 }
    ]
  },
  {
    instruction: "Lowest to highest price of a stamp (first-class domestic, USD equiv, 2023)",
    category: "Countries by Postage Stamp Price",
    items: [
      { label: "India", value: 0.08 },
      { label: "China", value: 0.17 },
      { label: "United States", value: 0.66 },
      { label: "Germany", value: 0.93 },
      { label: "Switzerland", value: 1.10 }
    ]
  },
  {
    instruction: "Fewest to most annual congestion hours per driver",
    category: "Cities by Annual Hours Lost in Traffic",
    items: [
      { label: "Tokyo", value: 45 },
      { label: "New York", value: 102 },
      { label: "Paris", value: 140 },
      { label: "London", value: 156 },
      { label: "Bogotá", value: 191 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of selenium in foods (mcg per 100g)",
    category: "Foods by Selenium Content",
    items: [
      { label: "Apple", value: 0.1 },
      { label: "Egg", value: 30 },
      { label: "Tuna", value: 80 },
      { label: "Chicken", value: 27 },
      { label: "Brazil Nuts", value: 1917 }
    ]
  },
  {
    instruction: "Shortest to longest average attention span by species (seconds)",
    category: "Animals by Attention Span",
    items: [
      { label: "Goldfish", value: 9 },
      { label: "Cat", value: 30 },
      { label: "Dog", value: 60 },
      { label: "Human (average)", value: 480 },
      { label: "Owl (hunting mode)", value: 1200 }
    ]
  },
  {
    instruction: "Fewest to most annual wine consumption (million liters, total)",
    category: "Countries by Total Wine Consumption",
    items: [
      { label: "Australia", value: 540 },
      { label: "Germany", value: 2000 },
      { label: "Italy", value: 2500 },
      { label: "France", value: 2700 },
      { label: "United States", value: 3400 }
    ]
  },
  {
    instruction: "Fewest to most annual visitors to religious sites (millions)",
    category: "Religious Sites by Annual Visitors",
    items: [
      { label: "Western Wall (Jerusalem)", value: 10 },
      { label: "Golden Temple (Amritsar, India)", value: 30 },
      { label: "St. Peter's Basilica (Vatican)", value: 11 },
      { label: "Meiji Shrine (Tokyo)", value: 30 },
      { label: "Tirupati Temple (India)", value: 50 }
    ]
  },
  {
    instruction: "Lowest to highest number of volcanoes in the solar system",
    category: "Solar System Bodies by Volcano Count",
    items: [
      { label: "Moon", value: 0 },
      { label: "Mercury", value: 0 },
      { label: "Mars", value: 24 },
      { label: "Earth", value: 1350 },
      { label: "Venus", value: 1600 }
    ]
  },
  {
    instruction: "Fewest to most annual visitors to a zoo (millions)",
    category: "Zoos by Annual Visitors",
    items: [
      { label: "Singapore Zoo", value: 1.9 },
      { label: "San Diego Zoo (USA)", value: 3.5 },
      { label: "Berlin Zoo (Germany)", value: 3.5 },
      { label: "Ueno Zoo (Tokyo)", value: 4 },
      { label: "Beijing Zoo (China)", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most craters visible with binoculars on the Moon",
    category: "Lunar Craters by Prominence (km diameter, most notable)",
    items: [
      { label: "Aristarchus", value: 40 },
      { label: "Kepler", value: 32 },
      { label: "Copernicus", value: 93 },
      { label: "Tycho", value: 85 },
      { label: "Clavius", value: 225 }
    ]
  },
  {
    instruction: "Fewest to most colors on a national flag",
    category: "National Flags by Number of Colors",
    items: [
      { label: "Japan", value: 2 },
      { label: "France", value: 3 },
      { label: "United States", value: 3 },
      { label: "South Africa", value: 6 },
      { label: "Belize", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most total annual thunderstorm days",
    category: "Cities by Annual Thunderstorm Days",
    items: [
      { label: "Los Angeles", value: 3 },
      { label: "London", value: 10 },
      { label: "New York", value: 25 },
      { label: "Mumbai", value: 40 },
      { label: "Kampala (Uganda)", value: 242 }
    ]
  },
  {
    instruction: "Smallest to largest single-celled organism (mm)",
    category: "Single-Celled Organisms by Size",
    items: [
      { label: "Mycoplasma (bacteria)", value: 0.0002 },
      { label: "E. coli (bacteria)", value: 0.002 },
      { label: "Red Blood Cell", value: 0.007 },
      { label: "Paramecium", value: 0.3 },
      { label: "Caulerpa (giant algae cell)", value: 3000 }
    ]
  },
  {
    instruction: "Fewest to most career goals in MLS (Major League Soccer)",
    category: "MLS Players by Career Goals",
    items: [
      { label: "David Beckham", value: 18 },
      { label: "Josef Martínez", value: 90 },
      { label: "Landon Donovan", value: 144 },
      { label: "Jeff Cunningham", value: 134 },
      { label: "Chris Wondolowski", value: 171 }
    ]
  },
  {
    instruction: "Fewest to most total career Premier League assists",
    category: "Premier League Players by Career Assists",
    items: [
      { label: "David Beckham", value: 80 },
      { label: "Frank Lampard", value: 102 },
      { label: "Dennis Bergkamp", value: 94 },
      { label: "Cesc Fàbregas", value: 111 },
      { label: "Ryan Giggs", value: 162 }
    ]
  },
  {
    instruction: "Lowest to highest annual cherry production (thousand tonnes)",
    category: "Countries by Cherry Production",
    items: [
      { label: "Italy", value: 100 },
      { label: "Spain", value: 80 },
      { label: "Chile", value: 230 },
      { label: "United States", value: 350 },
      { label: "Turkey", value: 840 }
    ]
  },
  {
    instruction: "Fewest to most letters in famous city names",
    category: "Cities by Name Length",
    items: [
      { label: "Rome", value: 4 },
      { label: "Paris", value: 5 },
      { label: "London", value: 6 },
      { label: "Istanbul", value: 8 },
      { label: "Krungthepmahanakhon (Bangkok official)", value: 21 }
    ]
  },
  {
    instruction: "Fewest to most annual visitors to beaches (millions, estimated)",
    category: "Beaches by Annual Visitors",
    items: [
      { label: "Waikiki Beach (Hawaii)", value: 5 },
      { label: "Bondi Beach (Australia)", value: 3 },
      { label: "Copacabana (Brazil)", value: 10 },
      { label: "Playa del Carmen (Mexico)", value: 6 },
      { label: "Miami Beach (USA)", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic medals in biathlon (individual)",
    category: "Biathletes by Career Olympic Medals (Individual Only)",
    items: [
      { label: "Raphaël Poirée (France)", value: 4 },
      { label: "Martin Fourcade (France)", value: 5 },
      { label: "Darya Domracheva (Belarus)", value: 6 },
      { label: "Uschi Disl (Germany)", value: 9 },
      { label: "Ole Einar Bjørndalen (Norway)", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most total La Liga titles (soccer)",
    category: "La Liga Clubs by League Titles",
    items: [
      { label: "Valencia", value: 6 },
      { label: "Athletic Bilbao", value: 8 },
      { label: "Atlético Madrid", value: 11 },
      { label: "Barcelona", value: 27 },
      { label: "Real Madrid", value: 36 }
    ]
  },
  {
    instruction: "Fewest to most total Serie A titles (Italian soccer)",
    category: "Serie A Clubs by League Titles",
    items: [
      { label: "Roma", value: 3 },
      { label: "Napoli", value: 3 },
      { label: "AC Milan", value: 19 },
      { label: "Inter Milan", value: 20 },
      { label: "Juventus", value: 36 }
    ]
  },
  {
    instruction: "Fewest to most total Bundesliga titles (German soccer)",
    category: "Bundesliga Clubs by League Titles",
    items: [
      { label: "Werder Bremen", value: 4 },
      { label: "Hamburger SV", value: 6 },
      { label: "Borussia Mönchengladbach", value: 5 },
      { label: "Borussia Dortmund", value: 8 },
      { label: "Bayern Munich", value: 33 }
    ]
  },
  {
    instruction: "Fewest to most total English Football League titles",
    category: "English Football Clubs by League Titles",
    items: [
      { label: "Chelsea", value: 6 },
      { label: "Arsenal", value: 13 },
      { label: "Liverpool", value: 19 },
      { label: "Manchester City", value: 10 },
      { label: "Manchester United", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most total Ligue 1 titles (French soccer)",
    category: "Ligue 1 Clubs by League Titles",
    items: [
      { label: "Bordeaux", value: 6 },
      { label: "Monaco", value: 8 },
      { label: "Marseille", value: 10 },
      { label: "Saint-Étienne", value: 10 },
      { label: "Paris Saint-Germain", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most Super Bowl viewers (millions, US)",
    category: "Super Bowls by US TV Viewership",
    items: [
      { label: "Super Bowl I (1967)", value: 51 },
      { label: "Super Bowl XX (1986)", value: 92 },
      { label: "Super Bowl XLVIII (2014)", value: 112 },
      { label: "Super Bowl LVII (2023)", value: 113 },
      { label: "Super Bowl LVIII (2024)", value: 123 }
    ]
  },
  {
    instruction: "Lowest to highest annual strawberry production (thousand tonnes)",
    category: "Countries by Strawberry Production",
    items: [
      { label: "Mexico", value: 860 },
      { label: "Egypt", value: 470 },
      { label: "Spain", value: 290 },
      { label: "Turkey", value: 575 },
      { label: "China", value: 3350 }
    ]
  },
  {
    instruction: "Fewest to most annual bookstore locations (thousands)",
    category: "Countries by Number of Bookstores",
    items: [
      { label: "United Kingdom", value: 3 },
      { label: "Germany", value: 6 },
      { label: "Japan", value: 11 },
      { label: "United States", value: 13 },
      { label: "China", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most total ATP/WTA year-end No. 1 rankings",
    category: "Tennis Players by Year-End No. 1 Rankings",
    items: [
      { label: "Andre Agassi", value: 1 },
      { label: "Rafael Nadal", value: 5 },
      { label: "Roger Federer", value: 5 },
      { label: "Pete Sampras", value: 6 },
      { label: "Novak Djokovic", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most total NBA Finals appearances (player)",
    category: "NBA Players by Finals Appearances",
    items: [
      { label: "Magic Johnson", value: 9 },
      { label: "Kobe Bryant", value: 7 },
      { label: "Michael Jordan", value: 6 },
      { label: "LeBron James", value: 10 },
      { label: "Bill Russell", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career International Cricket Council awards",
    category: "Cricketers by ICC Awards Won",
    items: [
      { label: "AB de Villiers", value: 4 },
      { label: "Kumar Sangakkara", value: 5 },
      { label: "Virat Kohli", value: 8 },
      { label: "Steve Smith", value: 5 },
      { label: "Sachin Tendulkar", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most career total wins in ATP 500 events",
    category: "Tennis Players by ATP 500 Titles",
    items: [
      { label: "Andre Agassi", value: 4 },
      { label: "Pete Sampras", value: 7 },
      { label: "Roger Federer", value: 24 },
      { label: "Rafael Nadal", value: 23 },
      { label: "Novak Djokovic", value: 20 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP from agriculture",
    category: "Countries by Agriculture GDP Share (%)",
    items: [
      { label: "United States", value: 1 },
      { label: "Germany", value: 1 },
      { label: "China", value: 7 },
      { label: "India", value: 17 },
      { label: "Sierra Leone", value: 60 }
    ]
  },
  {
    instruction: "Fewest to most total Scottish Premiership titles",
    category: "Scottish Football Clubs by League Titles",
    items: [
      { label: "Aberdeen", value: 4 },
      { label: "Hearts", value: 4 },
      { label: "Hibernian", value: 4 },
      { label: "Celtic", value: 54 },
      { label: "Rangers", value: 55 }
    ]
  },
  {
    instruction: "Fewest to most total Portuguese Primeira Liga titles",
    category: "Portuguese Football Clubs by League Titles",
    items: [
      { label: "Boavista", value: 1 },
      { label: "Belenenses", value: 1 },
      { label: "Sporting CP", value: 19 },
      { label: "Porto", value: 30 },
      { label: "Benfica", value: 38 }
    ]
  },
  {
    instruction: "Fewest to most total Eredivisie titles (Dutch soccer)",
    category: "Eredivisie Clubs by League Titles",
    items: [
      { label: "AZ Alkmaar", value: 2 },
      { label: "Feyenoord", value: 16 },
      { label: "Eindhoven (PSV)", value: 24 },
      { label: "Ajax", value: 36 },
      { label: "HVV Den Haag (historical)", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most career Club World Cup titles (soccer)",
    category: "Soccer Clubs by Club World Cup/Intercontinental Titles",
    items: [
      { label: "Barcelona", value: 3 },
      { label: "Manchester United", value: 1 },
      { label: "AC Milan", value: 4 },
      { label: "Bayern Munich", value: 2 },
      { label: "Real Madrid", value: 8 }
    ]
  },
  {
    instruction: "Lowest to highest annual cranberry production (thousand tonnes)",
    category: "Countries by Cranberry Production",
    items: [
      { label: "Chile", value: 15 },
      { label: "Canada", value: 180 },
      { label: "United States", value: 400 },
      { label: "Belarus", value: 5 },
      { label: "Latvia", value: 3 }
    ]
  },
  {
    instruction: "Fewest to most career penalty saves in Premier League (goalkeepers)",
    category: "Premier League Goalkeepers by Penalty Saves",
    items: [
      { label: "Edwin van der Sar", value: 6 },
      { label: "David James", value: 13 },
      { label: "Petr Čech", value: 8 },
      { label: "Paul Robinson", value: 7 },
      { label: "David de Gea", value: 7 }
    ]
  },
  {
    instruction: "Lowest to highest concentration of folate in foods (mcg per 100g)",
    category: "Foods by Folate Content",
    items: [
      { label: "Apple", value: 3 },
      { label: "Banana", value: 20 },
      { label: "Broccoli", value: 63 },
      { label: "Spinach", value: 194 },
      { label: "Beef Liver", value: 290 }
    ]
  },
  {
    instruction: "Fewest to most career consecutive Premier League appearances",
    category: "Premier League Players by Consecutive Appearances",
    items: [
      { label: "David James", value: 159 },
      { label: "Frank Lampard", value: 164 },
      { label: "Mark Schwarzer", value: 107 },
      { label: "Brad Friedel", value: 310 },
      { label: "Aaron Cresswell", value: 100 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic appearances (individual athlete)",
    category: "Athletes by Number of Olympic Games Attended",
    items: [
      { label: "Carl Lewis", value: 4 },
      { label: "Nadia Comaneci", value: 2 },
      { label: "Ian Millar (equestrian, Canada)", value: 10 },
      { label: "Hubert Raudaschl (sailing, Austria)", value: 9 },
      { label: "Oksana Chusovitina (gymnastics, Uzbekistan)", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most career league titles won (soccer managers)",
    category: "Soccer Managers by League Titles",
    items: [
      { label: "Carlo Ancelotti", value: 5 },
      { label: "Pep Guardiola", value: 12 },
      { label: "José Mourinho", value: 8 },
      { label: "Arsène Wenger", value: 3 },
      { label: "Alex Ferguson", value: 13 }
    ]
  },
  {
    instruction: "Lowest to highest daily protein requirement by life stage (g/day)",
    category: "Life Stages by Protein Requirement",
    items: [
      { label: "Infant (6-12 months)", value: 11 },
      { label: "Child (4-8 years)", value: 19 },
      { label: "Adult Female", value: 46 },
      { label: "Adult Male", value: 56 },
      { label: "Bodybuilder (heavy training)", value: 180 }
    ]
  },
  {
    instruction: "Fewest to most total national team soccer caps (women's)",
    category: "Women Soccer Players by International Caps",
    items: [
      { label: "Marta (Brazil)", value: 180 },
      { label: "Abby Wambach (USA)", value: 256 },
      { label: "Kristine Lilly (USA)", value: 354 },
      { label: "Carli Lloyd (USA)", value: 316 },
      { label: "Christine Sinclair (Canada)", value: 331 }
    ]
  },
  {
    instruction: "Fewest to most career World Cup wins (cricket)",
    category: "Cricket Teams by ODI World Cup Titles",
    items: [
      { label: "Pakistan", value: 1 },
      { label: "Sri Lanka", value: 1 },
      { label: "West Indies", value: 2 },
      { label: "India", value: 2 },
      { label: "Australia", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most annual museum visits per capita",
    category: "Countries by Museum Visits Per Capita",
    items: [
      { label: "India", value: 0.05 },
      { label: "United States", value: 0.4 },
      { label: "Germany", value: 1.4 },
      { label: "United Kingdom", value: 1.8 },
      { label: "Denmark", value: 3.0 }
    ]
  },
  {
    instruction: "Fewest to most career MotoGP championships",
    category: "Motorcycle Racers by MotoGP/500cc Championships",
    items: [
      { label: "Casey Stoner", value: 2 },
      { label: "Jorge Lorenzo", value: 3 },
      { label: "Marc Márquez", value: 6 },
      { label: "Valentino Rossi", value: 7 },
      { label: "Giacomo Agostini", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most career appearances for a single club (soccer)",
    category: "Soccer Players by Appearances for One Club",
    items: [
      { label: "Steven Gerrard (Liverpool)", value: 710 },
      { label: "Ryan Giggs (Manchester United)", value: 963 },
      { label: "Paolo Maldini (AC Milan)", value: 902 },
      { label: "Rogério Ceni (São Paulo)", value: 1237 },
      { label: "Xavi (Barcelona)", value: 767 }
    ]
  },
  {
    instruction: "Fewest to most career Premier League goals in a single season",
    category: "Premier League Single-Season Goal Records",
    items: [
      { label: "Thierry Henry (2003-04)", value: 30 },
      { label: "Cristiano Ronaldo (2007-08)", value: 31 },
      { label: "Luis Suárez (2013-14)", value: 31 },
      { label: "Mohamed Salah (2017-18)", value: 32 },
      { label: "Erling Haaland (2022-23)", value: 36 }
    ]
  },
  {
    instruction: "Fewest to most career total Serie A assists in a single season",
    category: "Serie A Single-Season Assist Records",
    items: [
      { label: "Luis Alberto (2017-18)", value: 14 },
      { label: "Papu Gómez (2019-20)", value: 16 },
      { label: "Milinkovic-Savic (2017-18)", value: 14 },
      { label: "Marek Hamšík (2016-17)", value: 13 },
      { label: "Neymar/Mbappé (Ligue 1 reference)", value: 18 }
    ]
  },
  {
    instruction: "Fewest to most career total Copa América titles (national team)",
    category: "Countries by Copa América Titles",
    items: [
      { label: "Colombia", value: 1 },
      { label: "Peru", value: 2 },
      { label: "Brazil", value: 9 },
      { label: "Argentina", value: 16 },
      { label: "Uruguay", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most career total Africa Cup of Nations titles",
    category: "Countries by AFCON Titles",
    items: [
      { label: "Algeria", value: 2 },
      { label: "Nigeria", value: 3 },
      { label: "Ghana", value: 4 },
      { label: "Cameroon", value: 5 },
      { label: "Egypt", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most career total Asian Cup titles (soccer)",
    category: "Countries by AFC Asian Cup Titles",
    items: [
      { label: "Iraq", value: 1 },
      { label: "Australia", value: 1 },
      { label: "South Korea", value: 2 },
      { label: "Saudi Arabia", value: 3 },
      { label: "Japan", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most career total CONCACAF Gold Cup titles",
    category: "Countries by Gold Cup Titles",
    items: [
      { label: "Canada", value: 2 },
      { label: "Guatemala", value: 1 },
      { label: "Costa Rica", value: 3 },
      { label: "United States", value: 7 },
      { label: "Mexico", value: 12 }
    ]
  },
  {
    instruction: "Fewest to most career total UEFA European Championship titles",
    category: "Countries by European Championship Titles",
    items: [
      { label: "Italy", value: 2 },
      { label: "France", value: 2 },
      { label: "Spain", value: 4 },
      { label: "Germany", value: 3 },
      { label: "Soviet Union/Russia", value: 1 }
    ]
  },
  {
    instruction: "Fewest to most career total Rugby World Cup titles",
    category: "Countries by Rugby World Cup Titles",
    items: [
      { label: "England", value: 1 },
      { label: "Australia", value: 2 },
      { label: "South Africa", value: 4 },
      { label: "New Zealand", value: 3 },
      { label: "Fiji (Sevens World Cup)", value: 2 }
    ]
  },
  {
    instruction: "Fewest to most career total Cricket World Cup finals appearances",
    category: "Cricket Teams by World Cup Final Appearances",
    items: [
      { label: "Pakistan", value: 1 },
      { label: "West Indies", value: 3 },
      { label: "New Zealand", value: 2 },
      { label: "India", value: 3 },
      { label: "Australia", value: 8 }
    ]
  },
  {
    instruction: "Lowest to highest annual lemon production (thousand tonnes)",
    category: "Countries by Lemon Production",
    items: [
      { label: "Turkey", value: 1100 },
      { label: "Spain", value: 1200 },
      { label: "Mexico", value: 3100 },
      { label: "Argentina", value: 1800 },
      { label: "India", value: 3500 }
    ]
  },
  {
    instruction: "Fewest to most total career assists in La Liga (single season)",
    category: "La Liga Single-Season Assist Records",
    items: [
      { label: "Luis Suárez (2015-16)", value: 16 },
      { label: "Xavi (2008-09)", value: 20 },
      { label: "Dani Alves (2008-09)", value: 15 },
      { label: "Karim Benzema (2021-22)", value: 12 },
      { label: "Lionel Messi (2019-20)", value: 21 }
    ]
  },
  {
    instruction: "Fewest to most career total Ballon d'Or nominations",
    category: "Soccer Players by Ballon d'Or Nominations (top 30)",
    items: [
      { label: "Neymar", value: 10 },
      { label: "Robert Lewandowski", value: 6 },
      { label: "Andrés Iniesta", value: 10 },
      { label: "Cristiano Ronaldo", value: 17 },
      { label: "Lionel Messi", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most career total NBA All-Star selections",
    category: "NBA Players by All-Star Selections",
    items: [
      { label: "Michael Jordan", value: 14 },
      { label: "Kobe Bryant", value: 18 },
      { label: "Tim Duncan", value: 15 },
      { label: "LeBron James", value: 20 },
      { label: "Kareem Abdul-Jabbar", value: 19 }
    ]
  },
  {
    instruction: "Fewest to most career total MLB All-Star selections",
    category: "MLB Players by All-Star Selections",
    items: [
      { label: "Derek Jeter", value: 14 },
      { label: "Mike Trout", value: 11 },
      { label: "Cal Ripken Jr.", value: 19 },
      { label: "Hank Aaron", value: 25 },
      { label: "Stan Musial", value: 24 }
    ]
  },
  {
    instruction: "Fewest to most career total NFL Pro Bowl selections",
    category: "NFL Players by Pro Bowl Selections",
    items: [
      { label: "Tom Brady", value: 15 },
      { label: "Peyton Manning", value: 14 },
      { label: "Jerry Rice", value: 13 },
      { label: "Tony Gonzalez", value: 14 },
      { label: "Merlin Olsen", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most career total NHL All-Star selections",
    category: "NHL Players by All-Star Selections",
    items: [
      { label: "Mario Lemieux", value: 10 },
      { label: "Wayne Gretzky", value: 18 },
      { label: "Mark Messier", value: 15 },
      { label: "Ray Bourque", value: 19 },
      { label: "Gordie Howe", value: 23 }
    ]
  },
  {
    instruction: "Fewest to most career total Champions League goals in a single season",
    category: "Champions League Single-Season Goal Records",
    items: [
      { label: "Ruud van Nistelrooy (2004-05)", value: 12 },
      { label: "Lionel Messi (2011-12)", value: 14 },
      { label: "José Altafini (1962-63)", value: 14 },
      { label: "Cristiano Ronaldo (2013-14)", value: 17 },
      { label: "Cristiano Ronaldo (2017-18)", value: 15 }
    ]
  },
  {
    instruction: "Lowest to highest per capita consumption of spirits (liters/year)",
    category: "Countries by Spirits Consumption Per Capita",
    items: [
      { label: "Italy", value: 1 },
      { label: "United States", value: 3 },
      { label: "Germany", value: 3.5 },
      { label: "Russia", value: 6 },
      { label: "South Korea (soju)", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most career total World Cup assists (soccer)",
    category: "Soccer Players by World Cup Assists",
    items: [
      { label: "Zinedine Zidane", value: 5 },
      { label: "Diego Maradona", value: 8 },
      { label: "David Beckham", value: 6 },
      { label: "Lionel Messi", value: 8 },
      { label: "Pelé", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most total T20 World Cup titles (cricket)",
    category: "Cricket Teams by T20 World Cup Titles",
    items: [
      { label: "Pakistan", value: 1 },
      { label: "Sri Lanka", value: 1 },
      { label: "England", value: 2 },
      { label: "West Indies", value: 2 },
      { label: "India", value: 2 }
    ]
  },
  {
    instruction: "Fewest to most FIFA World Cup hosting times",
    category: "Countries by World Cup Hosting Count",
    items: [
      { label: "Japan (co-host 2002)", value: 1 },
      { label: "United States (1994)", value: 1 },
      { label: "France (1938, 1998)", value: 2 },
      { label: "Italy (1934, 1990)", value: 2 },
      { label: "Mexico (1970, 1986, 2026)", value: 3 }
    ]
  },
  {
    instruction: "Lowest to highest peach production (thousand tonnes, annual)",
    category: "Countries by Peach Production",
    items: [
      { label: "France", value: 200 },
      { label: "Italy", value: 1000 },
      { label: "United States", value: 640 },
      { label: "Spain", value: 1500 },
      { label: "China", value: 16000 }
    ]
  },
  {
    instruction: "Fewest to most career total Grand Slam appearances (tennis, singles)",
    category: "Tennis Players by Grand Slam Appearances",
    items: [
      { label: "Pete Sampras", value: 52 },
      { label: "Roger Federer", value: 81 },
      { label: "Rafael Nadal", value: 72 },
      { label: "Novak Djokovic", value: 77 },
      { label: "Feliciano López", value: 79 }
    ]
  },
  {
    instruction: "Fewest to most career total Premier League assists in a single season",
    category: "Premier League Single-Season Assist Records",
    items: [
      { label: "Cesc Fàbregas (2014-15)", value: 18 },
      { label: "Frank Lampard (2004-05)", value: 16 },
      { label: "David Beckham (2000-01)", value: 15 },
      { label: "Thierry Henry (2002-03)", value: 20 },
      { label: "Kevin De Bruyne (2019-20)", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most total career World Cup clean sheets (goalkeepers)",
    category: "Goalkeepers by World Cup Clean Sheets",
    items: [
      { label: "Peter Shilton", value: 10 },
      { label: "Fabien Barthez", value: 7 },
      { label: "Gianluigi Buffon", value: 7 },
      { label: "Emiliano Martínez", value: 5 },
      { label: "Manuel Neuer", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most career total World Cup penalty shootout saves",
    category: "Goalkeepers by World Cup Penalty Shootout Saves",
    items: [
      { label: "Thibaut Courtois", value: 1 },
      { label: "Sergio Goycochea (Argentina)", value: 4 },
      { label: "Danijel Subašić (Croatia)", value: 3 },
      { label: "Harald Schumacher (Germany)", value: 2 },
      { label: "Emiliano Martínez (Argentina)", value: 3 }
    ]
  },
  {
    instruction: "Fewest to most career total Copa del Rey titles (soccer)",
    category: "Spanish Football Clubs by Copa del Rey Titles",
    items: [
      { label: "Sevilla", value: 5 },
      { label: "Atlético Madrid", value: 10 },
      { label: "Real Madrid", value: 20 },
      { label: "Athletic Bilbao", value: 23 },
      { label: "Barcelona", value: 31 }
    ]
  },
  {
    instruction: "Fewest to most career total FA Cup titles (soccer)",
    category: "English Football Clubs by FA Cup Titles",
    items: [
      { label: "Liverpool", value: 8 },
      { label: "Tottenham Hotspur", value: 8 },
      { label: "Chelsea", value: 8 },
      { label: "Manchester United", value: 12 },
      { label: "Arsenal", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most career total DFB-Pokal titles (German Cup)",
    category: "German Football Clubs by DFB-Pokal Titles",
    items: [
      { label: "Borussia Dortmund", value: 5 },
      { label: "Schalke 04", value: 5 },
      { label: "Eintracht Frankfurt", value: 5 },
      { label: "Werder Bremen", value: 6 },
      { label: "Bayern Munich", value: 21 }
    ]
  },
  {
    instruction: "Fewest to most career total Coppa Italia titles (Italian Cup)",
    category: "Italian Football Clubs by Coppa Italia Titles",
    items: [
      { label: "AC Milan", value: 5 },
      { label: "Napoli", value: 6 },
      { label: "Lazio", value: 7 },
      { label: "Inter Milan", value: 9 },
      { label: "Juventus", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most career total Coupe de France titles (French Cup)",
    category: "French Football Clubs by Coupe de France Titles",
    items: [
      { label: "Lille", value: 6 },
      { label: "Lyon", value: 5 },
      { label: "Marseille", value: 10 },
      { label: "Saint-Étienne", value: 6 },
      { label: "Paris Saint-Germain", value: 15 }
    ]
  },
  {
    instruction: "Fewest to most career total KNVB Cup titles (Dutch Cup)",
    category: "Dutch Football Clubs by KNVB Cup Titles",
    items: [
      { label: "PSV", value: 10 },
      { label: "AZ", value: 4 },
      { label: "Feyenoord", value: 14 },
      { label: "Ajax", value: 20 },
      { label: "Utrecht", value: 3 }
    ]
  },
  {
    instruction: "Lowest to highest annual blueberry production (thousand tonnes)",
    category: "Countries by Blueberry Production",
    items: [
      { label: "Poland", value: 50 },
      { label: "Chile", value: 120 },
      { label: "Peru", value: 280 },
      { label: "Canada", value: 180 },
      { label: "United States", value: 320 }
    ]
  },
  {
    instruction: "Fewest to most career total domestic cup titles (soccer managers)",
    category: "Soccer Managers by Domestic Cup Titles",
    items: [
      { label: "Arsène Wenger", value: 7 },
      { label: "Pep Guardiola", value: 9 },
      { label: "José Mourinho", value: 7 },
      { label: "Carlo Ancelotti", value: 6 },
      { label: "Alex Ferguson", value: 10 }
    ]
  },
  {
    instruction: "Fewest to most career total Champions League titles (soccer managers)",
    category: "Soccer Managers by Champions League Titles",
    items: [
      { label: "Pep Guardiola", value: 2 },
      { label: "Alex Ferguson", value: 2 },
      { label: "Zinedine Zidane", value: 3 },
      { label: "Bob Paisley", value: 3 },
      { label: "Carlo Ancelotti", value: 4 }
    ]
  },
  {
    instruction: "Lowest to highest annual raspberry production (thousand tonnes)",
    category: "Countries by Raspberry Production",
    items: [
      { label: "Chile", value: 60 },
      { label: "Poland", value: 130 },
      { label: "United States", value: 125 },
      { label: "Serbia", value: 140 },
      { label: "Russia", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most career total UEFA Cup/Europa League titles",
    category: "Soccer Clubs by Europa League Titles",
    items: [
      { label: "Manchester United", value: 1 },
      { label: "Atlético Madrid", value: 3 },
      { label: "Inter Milan", value: 3 },
      { label: "Liverpool", value: 3 },
      { label: "Sevilla", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most career total UEFA Super Cup titles",
    category: "Soccer Clubs by UEFA Super Cup Titles",
    items: [
      { label: "Manchester United", value: 1 },
      { label: "Liverpool", value: 4 },
      { label: "AC Milan", value: 5 },
      { label: "Barcelona", value: 5 },
      { label: "Real Madrid", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most career total FIFA Club World Cup titles",
    category: "Soccer Clubs by FIFA Club World Cup Titles (since 2000)",
    items: [
      { label: "Manchester United", value: 1 },
      { label: "Barcelona", value: 3 },
      { label: "Bayern Munich", value: 2 },
      { label: "Corinthians (Brazil)", value: 2 },
      { label: "Real Madrid", value: 5 }
    ]
  },
  {
    instruction: "Fewest to most career total Community Shield/Charity Shield titles",
    category: "English Football Clubs by Community Shield Titles",
    items: [
      { label: "Chelsea", value: 4 },
      { label: "Everton", value: 9 },
      { label: "Liverpool", value: 16 },
      { label: "Arsenal", value: 17 },
      { label: "Manchester United", value: 21 }
    ]
  },
  {
    instruction: "Fewest to most total La Liga goals in a single season (team)",
    category: "La Liga Teams by Single-Season Goal Records",
    items: [
      { label: "Atlético Madrid (2020-21)", value: 67 },
      { label: "Valencia (1999-00)", value: 67 },
      { label: "Real Madrid (2011-12)", value: 121 },
      { label: "Barcelona (2011-12)", value: 114 },
      { label: "Barcelona (2014-15)", value: 110 }
    ]
  },
  {
    instruction: "Fewest to most career total Bundesliga assists in a single season",
    category: "Bundesliga Single-Season Assist Records",
    items: [
      { label: "Mesut Özil (2009-10)", value: 17 },
      { label: "Kevin De Bruyne (2014-15)", value: 21 },
      { label: "Emil Forsberg (2016-17)", value: 22 },
      { label: "Franck Ribéry (2013-14)", value: 16 },
      { label: "Thomas Müller (2019-20)", value: 21 }
    ]
  },
  {
    instruction: "Lowest to highest annual fig production (thousand tonnes)",
    category: "Countries by Fig Production",
    items: [
      { label: "Spain", value: 30 },
      { label: "Morocco", value: 80 },
      { label: "Iran", value: 70 },
      { label: "Egypt", value: 190 },
      { label: "Turkey", value: 310 }
    ]
  },
  {
    instruction: "Lowest to highest density of water at different temperatures (kg/m³)",
    category: "Water Density by Temperature",
    items: [
      { label: "100°C (steam transition)", value: 958 },
      { label: "50°C", value: 988 },
      { label: "25°C", value: 997 },
      { label: "4°C (maximum density)", value: 1000 },
      { label: "0°C (ice)", value: 917 }
    ]
  },
  {
    instruction: "Lowest to highest speed of light in different media (km/s)",
    category: "Speed of Light by Medium",
    items: [
      { label: "Diamond", value: 124000 },
      { label: "Glass", value: 200000 },
      { label: "Water", value: 225000 },
      { label: "Air", value: 299700 },
      { label: "Vacuum", value: 299792 }
    ]
  },
  {
    instruction: "Fewest to most annual plum production (thousand tonnes)",
    category: "Countries by Plum Production",
    items: [
      { label: "Italy", value: 190 },
      { label: "United States", value: 290 },
      { label: "Romania", value: 850 },
      { label: "Serbia", value: 430 },
      { label: "China", value: 6900 }
    ]
  },
  {
    instruction: "Lowest to highest freezing point of liquids (°C)",
    category: "Common Liquids by Freezing Point",
    items: [
      { label: "Ethanol", value: -114 },
      { label: "Mercury", value: -39 },
      { label: "Seawater", value: -2 },
      { label: "Water", value: 0 },
      { label: "Olive Oil", value: -6 }
    ]
  },
  {
    instruction: "Lowest to highest global apricot production (thousand tonnes)",
    category: "Countries by Apricot Production",
    items: [
      { label: "United States", value: 30 },
      { label: "France", value: 150 },
      { label: "Iran", value: 280 },
      { label: "Uzbekistan", value: 600 },
      { label: "Turkey", value: 830 }
    ]
  },
  {
    instruction: "Fewest to most career total Coppa Italia goals (top scorer, all time)",
    category: "Coppa Italia Top Scorers",
    items: [
      { label: "Roberto Baggio", value: 27 },
      { label: "Gonzalo Higuaín", value: 18 },
      { label: "Alessandro Del Piero", value: 26 },
      { label: "Luca Toni", value: 21 },
      { label: "Giuseppe Meazza", value: 29 }
    ]
  },
  {
    instruction: "Fewest to most annual pomegranate production (thousand tonnes)",
    category: "Countries by Pomegranate Production",
    items: [
      { label: "Turkey", value: 600 },
      { label: "Spain", value: 70 },
      { label: "Iran", value: 1100 },
      { label: "China", value: 1000 },
      { label: "India", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest speed of sound at different altitudes (m/s)",
    category: "Speed of Sound by Altitude",
    items: [
      { label: "Tropopause (-57°C)", value: 295 },
      { label: "Cruising Altitude (10km)", value: 299 },
      { label: "Mount Everest Summit", value: 310 },
      { label: "Sea Level (20°C)", value: 343 },
      { label: "Hot Desert (50°C)", value: 360 }
    ]
  },
  {
    instruction: "Lowest to highest annual artichoke production (thousand tonnes)",
    category: "Countries by Artichoke Production",
    items: [
      { label: "France", value: 38 },
      { label: "Spain", value: 200 },
      { label: "Egypt", value: 320 },
      { label: "Italy", value: 370 },
      { label: "China", value: 80 }
    ]
  },
  {
    instruction: "Lowest to highest wavelength of visible light colors (nm)",
    category: "Visible Light Colors by Wavelength",
    items: [
      { label: "Violet", value: 400 },
      { label: "Blue", value: 470 },
      { label: "Green", value: 530 },
      { label: "Yellow", value: 580 },
      { label: "Red", value: 700 }
    ]
  },
  {
    instruction: "Lowest to highest energy of photons by type (eV)",
    category: "Electromagnetic Radiation by Photon Energy",
    items: [
      { label: "Radio Wave", value: 0.000001 },
      { label: "Microwave", value: 0.001 },
      { label: "Infrared", value: 0.1 },
      { label: "Visible Light", value: 2 },
      { label: "X-ray", value: 10000 }
    ]
  },
  {
    instruction: "Lowest to highest annual garlic production (thousand tonnes)",
    category: "Countries by Garlic Production",
    items: [
      { label: "Argentina", value: 150 },
      { label: "Spain", value: 260 },
      { label: "Egypt", value: 350 },
      { label: "India", value: 3200 },
      { label: "China", value: 24000 }
    ]
  },
  {
    instruction: "Lowest to highest annual onion production (million tonnes)",
    category: "Countries by Onion Production",
    items: [
      { label: "United States", value: 3.2 },
      { label: "Egypt", value: 3.5 },
      { label: "Turkey", value: 2.5 },
      { label: "China", value: 25 },
      { label: "India", value: 27 }
    ]
  },
  {
    instruction: "Fewest to most annual carrot production (million tonnes)",
    category: "Countries by Carrot Production",
    items: [
      { label: "United States", value: 1.3 },
      { label: "Russia", value: 1.6 },
      { label: "Uzbekistan", value: 2.1 },
      { label: "China", value: 22 },
      { label: "India", value: 1.9 }
    ]
  },
  {
    instruction: "Lowest to highest annual cabbage production (million tonnes)",
    category: "Countries by Cabbage Production",
    items: [
      { label: "United States", value: 0.9 },
      { label: "South Korea", value: 2.5 },
      { label: "Russia", value: 3 },
      { label: "India", value: 9 },
      { label: "China", value: 34 }
    ]
  },
  {
    instruction: "Fewest to most annual spinach production (thousand tonnes)",
    category: "Countries by Spinach Production",
    items: [
      { label: "Turkey", value: 200 },
      { label: "Japan", value: 240 },
      { label: "United States", value: 350 },
      { label: "Indonesia", value: 150 },
      { label: "China", value: 25000 }
    ]
  },
  {
    instruction: "Lowest to highest annual lettuce production (million tonnes)",
    category: "Countries by Lettuce Production",
    items: [
      { label: "Spain", value: 1 },
      { label: "India", value: 1.2 },
      { label: "Italy", value: 0.8 },
      { label: "United States", value: 3.5 },
      { label: "China", value: 16 }
    ]
  },
  {
    instruction: "Fewest to most annual cucumber production (million tonnes)",
    category: "Countries by Cucumber Production",
    items: [
      { label: "United States", value: 0.7 },
      { label: "Mexico", value: 1 },
      { label: "Iran", value: 2 },
      { label: "Turkey", value: 1.9 },
      { label: "China", value: 80 }
    ]
  },
  {
    instruction: "Lowest to highest annual pepper production (million tonnes, all types)",
    category: "Countries by Pepper Production",
    items: [
      { label: "United States", value: 1 },
      { label: "Turkey", value: 2.7 },
      { label: "Mexico", value: 3.8 },
      { label: "Indonesia", value: 2.8 },
      { label: "China", value: 19 }
    ]
  },
  {
    instruction: "Lowest to highest annual broccoli production (thousand tonnes)",
    category: "Countries by Broccoli Production",
    items: [
      { label: "Spain", value: 500 },
      { label: "Italy", value: 400 },
      { label: "United States", value: 900 },
      { label: "India", value: 8500 },
      { label: "China", value: 10000 }
    ]
  },
  {
    instruction: "Lowest to highest annual cauliflower production (million tonnes)",
    category: "Countries by Cauliflower Production",
    items: [
      { label: "France", value: 0.3 },
      { label: "Spain", value: 0.5 },
      { label: "United States", value: 0.3 },
      { label: "China", value: 11 },
      { label: "India", value: 9.5 }
    ]
  },
  {
    instruction: "Lowest to highest annual eggplant production (million tonnes)",
    category: "Countries by Eggplant Production",
    items: [
      { label: "Turkey", value: 0.8 },
      { label: "Indonesia", value: 0.5 },
      { label: "Egypt", value: 1.3 },
      { label: "India", value: 13 },
      { label: "China", value: 37 }
    ]
  },
  {
    instruction: "Fewest to most annual pumpkin production (million tonnes)",
    category: "Countries by Pumpkin Production",
    items: [
      { label: "United States", value: 1 },
      { label: "Mexico", value: 0.7 },
      { label: "Russia", value: 1.2 },
      { label: "India", value: 5.6 },
      { label: "China", value: 8.4 }
    ]
  },
  {
    instruction: "Lowest to highest annual watermelon production (million tonnes)",
    category: "Countries by Watermelon Production",
    items: [
      { label: "United States", value: 1.6 },
      { label: "Brazil", value: 2.3 },
      { label: "Iran", value: 4 },
      { label: "Turkey", value: 3.5 },
      { label: "China", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest annual melon production (million tonnes)",
    category: "Countries by Melon Production",
    items: [
      { label: "United States", value: 1.1 },
      { label: "Iran", value: 1.8 },
      { label: "Spain", value: 0.8 },
      { label: "Turkey", value: 1.7 },
      { label: "China", value: 13 }
    ]
  },
  {
    instruction: "Lowest to highest annual ginger production (million tonnes)",
    category: "Countries by Ginger Production",
    items: [
      { label: "Nepal", value: 0.3 },
      { label: "Thailand", value: 0.2 },
      { label: "China", value: 0.6 },
      { label: "Nigeria", value: 0.7 },
      { label: "India", value: 2.1 }
    ]
  },
  {
    instruction: "Lowest to highest annual turmeric production (thousand tonnes)",
    category: "Countries by Turmeric Production",
    items: [
      { label: "Myanmar", value: 50 },
      { label: "Nigeria", value: 40 },
      { label: "Bangladesh", value: 85 },
      { label: "China", value: 30 },
      { label: "India", value: 1100 }
    ]
  },
  {
    instruction: "Lowest to highest annual lentil production (million tonnes)",
    category: "Countries by Lentil Production",
    items: [
      { label: "United States", value: 0.3 },
      { label: "Turkey", value: 0.4 },
      { label: "Australia", value: 0.5 },
      { label: "India", value: 1.6 },
      { label: "Canada", value: 2.1 }
    ]
  },
  {
    instruction: "Lowest to highest annual chickpea production (million tonnes)",
    category: "Countries by Chickpea Production",
    items: [
      { label: "Mexico", value: 0.3 },
      { label: "Turkey", value: 0.6 },
      { label: "Australia", value: 1 },
      { label: "Ethiopia", value: 0.5 },
      { label: "India", value: 12 }
    ]
  },
  {
    instruction: "Lowest to highest annual sunflower seed production (million tonnes)",
    category: "Countries by Sunflower Seed Production",
    items: [
      { label: "France", value: 1.6 },
      { label: "Turkey", value: 2 },
      { label: "Argentina", value: 3.4 },
      { label: "Russia", value: 16 },
      { label: "Ukraine", value: 11 }
    ]
  },
  {
    instruction: "Lowest to highest annual barley production (million tonnes)",
    category: "Countries by Barley Production",
    items: [
      { label: "Germany", value: 11 },
      { label: "United Kingdom", value: 8 },
      { label: "France", value: 12 },
      { label: "Australia", value: 14 },
      { label: "Russia", value: 21 }
    ]
  },
  {
    instruction: "Lowest to highest annual oat production (million tonnes)",
    category: "Countries by Oat Production",
    items: [
      { label: "United States", value: 0.9 },
      { label: "Poland", value: 1.4 },
      { label: "Australia", value: 1.5 },
      { label: "Canada", value: 4.5 },
      { label: "Russia", value: 5.0 }
    ]
  },
  {
    instruction: "Lowest to highest annual rye production (million tonnes)",
    category: "Countries by Rye Production",
    items: [
      { label: "Belarus", value: 0.6 },
      { label: "Denmark", value: 0.4 },
      { label: "Poland", value: 3.0 },
      { label: "Russia", value: 2.1 },
      { label: "Germany", value: 4.0 }
    ]
  },
  {
    instruction: "Lowest to highest annual millet production (million tonnes)",
    category: "Countries by Millet Production",
    items: [
      { label: "Mali", value: 2 },
      { label: "Burkina Faso", value: 1.2 },
      { label: "China", value: 2.3 },
      { label: "Niger", value: 3.8 },
      { label: "India", value: 11 }
    ]
  },
  {
    instruction: "Lowest to highest annual cassava production (million tonnes)",
    category: "Countries by Cassava Production",
    items: [
      { label: "Indonesia", value: 18 },
      { label: "Brazil", value: 18 },
      { label: "Thailand", value: 30 },
      { label: "DR Congo", value: 45 },
      { label: "Nigeria", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest annual yam production (million tonnes)",
    category: "Countries by Yam Production",
    items: [
      { label: "Ivory Coast", value: 7 },
      { label: "Benin", value: 3.5 },
      { label: "Ghana", value: 9 },
      { label: "Colombia", value: 0.4 },
      { label: "Nigeria", value: 52 }
    ]
  },
  {
    instruction: "Lowest to highest annual sweet potato production (million tonnes)",
    category: "Countries by Sweet Potato Production",
    items: [
      { label: "United States", value: 1.3 },
      { label: "Indonesia", value: 2 },
      { label: "Tanzania", value: 4 },
      { label: "Malawi", value: 6 },
      { label: "China", value: 49 }
    ]
  },
  {
    instruction: "Lowest to highest annual tobacco production (thousand tonnes)",
    category: "Countries by Tobacco Production",
    items: [
      { label: "Indonesia", value: 180 },
      { label: "United States", value: 200 },
      { label: "Brazil", value: 660 },
      { label: "India", value: 800 },
      { label: "China", value: 2300 }
    ]
  },
  {
    instruction: "Lowest to highest annual palm oil production (million tonnes)",
    category: "Countries by Palm Oil Production",
    items: [
      { label: "Colombia", value: 1.7 },
      { label: "Thailand", value: 3.2 },
      { label: "Nigeria", value: 1.4 },
      { label: "Malaysia", value: 18 },
      { label: "Indonesia", value: 46 }
    ]
  },
  {
    instruction: "Lowest to highest annual rapeseed/canola production (million tonnes)",
    category: "Countries by Rapeseed Production",
    items: [
      { label: "Australia", value: 6 },
      { label: "Germany", value: 4 },
      { label: "India", value: 11 },
      { label: "Canada", value: 20 },
      { label: "China", value: 14 }
    ]
  },
  {
    instruction: "Lowest to highest annual olive oil import (thousand tonnes)",
    category: "Countries by Olive Oil Imports",
    items: [
      { label: "Germany", value: 60 },
      { label: "Japan", value: 70 },
      { label: "France", value: 120 },
      { label: "Brazil", value: 90 },
      { label: "United States", value: 320 }
    ]
  },
  {
    instruction: "Fewest to most annual cocoa bean imports (thousand tonnes)",
    category: "Countries by Cocoa Bean Imports",
    items: [
      { label: "Japan", value: 55 },
      { label: "United States", value: 430 },
      { label: "Germany", value: 410 },
      { label: "Netherlands", value: 800 },
      { label: "Malaysia", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest annual shrimp production (thousand tonnes, aquaculture)",
    category: "Countries by Shrimp Production",
    items: [
      { label: "India", value: 700 },
      { label: "Vietnam", value: 900 },
      { label: "Indonesia", value: 600 },
      { label: "Ecuador", value: 1000 },
      { label: "China", value: 1800 }
    ]
  },
  {
    instruction: "Fewest to most daily bread rolls consumed per capita",
    category: "Countries by Bread Roll Consumption (rolls per capita per year)",
    items: [
      { label: "United States", value: 50 },
      { label: "France", value: 120 },
      { label: "Germany", value: 200 },
      { label: "Chile", value: 90 },
      { label: "Turkey", value: 300 }
    ]
  },
  {
    instruction: "Lowest to highest annual vanilla production (tonnes)",
    category: "Countries by Vanilla Production",
    items: [
      { label: "Tahiti", value: 30 },
      { label: "India", value: 100 },
      { label: "Uganda", value: 400 },
      { label: "Indonesia", value: 2400 },
      { label: "Madagascar", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest annual cinnamon production (thousand tonnes)",
    category: "Countries by Cinnamon Production",
    items: [
      { label: "India", value: 4 },
      { label: "Madagascar", value: 2 },
      { label: "Vietnam", value: 37 },
      { label: "Sri Lanka", value: 25 },
      { label: "Indonesia", value: 90 }
    ]
  },
  {
    instruction: "Lowest to highest annual pepper (black) production (thousand tonnes)",
    category: "Countries by Black Pepper Production",
    items: [
      { label: "Sri Lanka", value: 20 },
      { label: "India", value: 63 },
      { label: "Brazil", value: 110 },
      { label: "Indonesia", value: 88 },
      { label: "Vietnam", value: 260 }
    ]
  },
  {
    instruction: "Lowest to highest annual clove production (thousand tonnes)",
    category: "Countries by Clove Production",
    items: [
      { label: "Sri Lanka", value: 5 },
      { label: "Comoros", value: 4 },
      { label: "Madagascar", value: 12 },
      { label: "Tanzania", value: 8 },
      { label: "Indonesia", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest annual nutmeg production (thousand tonnes)",
    category: "Countries by Nutmeg Production",
    items: [
      { label: "Sri Lanka", value: 5 },
      { label: "India", value: 18 },
      { label: "Grenada", value: 2 },
      { label: "Guatemala", value: 30 },
      { label: "Indonesia", value: 40 }
    ]
  },
  {
    instruction: "Lowest to highest annual cardamom production (thousand tonnes)",
    category: "Countries by Cardamom Production",
    items: [
      { label: "Sri Lanka", value: 5 },
      { label: "Tanzania", value: 4 },
      { label: "India", value: 30 },
      { label: "Guatemala", value: 45 },
      { label: "Indonesia", value: 8 }
    ]
  },
  {
    instruction: "Fewest to most daily pizza slices consumed per capita (per year)",
    category: "Countries by Pizza Consumption (kg per capita/year)",
    items: [
      { label: "Japan", value: 1.5 },
      { label: "Germany", value: 4 },
      { label: "United Kingdom", value: 5 },
      { label: "Italy", value: 8 },
      { label: "United States", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most annual ice cream consumption per capita (liters)",
    category: "Countries by Ice Cream Consumption Per Capita",
    items: [
      { label: "Japan", value: 7 },
      { label: "Germany", value: 8 },
      { label: "Italy", value: 8 },
      { label: "Australia", value: 18 },
      { label: "New Zealand", value: 23 }
    ]
  },
  {
    instruction: "Fewest to most annual pasta consumption per capita (kg)",
    category: "Countries by Pasta Consumption Per Capita",
    items: [
      { label: "Japan", value: 2 },
      { label: "United States", value: 8.8 },
      { label: "Germany", value: 8 },
      { label: "Greece", value: 12 },
      { label: "Italy", value: 23 }
    ]
  },
  {
    instruction: "Fewest to most annual fish consumption per capita (kg)",
    category: "Countries by Fish Consumption Per Capita",
    items: [
      { label: "India", value: 5 },
      { label: "United States", value: 10 },
      { label: "China", value: 42 },
      { label: "Japan", value: 50 },
      { label: "Iceland", value: 90 }
    ]
  },
  {
    instruction: "Fewest to most annual egg consumption per capita",
    category: "Countries by Egg Consumption Per Capita (eggs/year)",
    items: [
      { label: "India", value: 80 },
      { label: "United States", value: 280 },
      { label: "China", value: 330 },
      { label: "Japan", value: 340 },
      { label: "Mexico", value: 380 }
    ]
  },
  {
    instruction: "Fewest to most annual butter consumption per capita (kg)",
    category: "Countries by Butter Consumption Per Capita",
    items: [
      { label: "Japan", value: 0.8 },
      { label: "United States", value: 2.6 },
      { label: "Germany", value: 6 },
      { label: "France", value: 8 },
      { label: "New Zealand", value: 8.5 }
    ]
  },
  {
    instruction: "Fewest to most annual yogurt consumption per capita (kg)",
    category: "Countries by Yogurt Consumption Per Capita",
    items: [
      { label: "United States", value: 6 },
      { label: "Germany", value: 15 },
      { label: "France", value: 20 },
      { label: "Finland", value: 25 },
      { label: "Turkey", value: 35 }
    ]
  },
  {
    instruction: "Lowest to highest annual honey consumption per capita (g)",
    category: "Countries by Honey Consumption Per Capita",
    items: [
      { label: "India", value: 50 },
      { label: "United States", value: 600 },
      { label: "Germany", value: 1100 },
      { label: "Turkey", value: 1300 },
      { label: "Greece", value: 1600 }
    ]
  },
  {
    instruction: "Lowest to highest annual olive consumption per capita (kg)",
    category: "Countries by Olive Consumption Per Capita",
    items: [
      { label: "United States", value: 0.5 },
      { label: "Italy", value: 3 },
      { label: "Spain", value: 4 },
      { label: "Greece", value: 6 },
      { label: "Libya", value: 7 }
    ]
  },
  {
    instruction: "Lowest to highest annual bottled water consumption per capita (liters)",
    category: "Countries by Bottled Water Consumption",
    items: [
      { label: "Japan", value: 30 },
      { label: "United States", value: 50 },
      { label: "Germany", value: 150 },
      { label: "Italy", value: 200 },
      { label: "Mexico", value: 250 }
    ]
  },
  {
    instruction: "Fewest to most annual soft drink consumption per capita (liters)",
    category: "Countries by Soft Drink Consumption",
    items: [
      { label: "Japan", value: 30 },
      { label: "Germany", value: 90 },
      { label: "United States", value: 140 },
      { label: "Mexico", value: 160 },
      { label: "Argentina", value: 155 }
    ]
  },
  {
    instruction: "Fewest to most annual fruit juice consumption per capita (liters)",
    category: "Countries by Juice Consumption",
    items: [
      { label: "Japan", value: 5 },
      { label: "United States", value: 20 },
      { label: "France", value: 22 },
      { label: "Germany", value: 32 },
      { label: "Colombia", value: 35 }
    ]
  },
  {
    instruction: "Fewest to most annual mineral water production (billion liters)",
    category: "Countries by Mineral Water Production",
    items: [
      { label: "Japan", value: 3 },
      { label: "France", value: 8 },
      { label: "Germany", value: 15 },
      { label: "United States", value: 16 },
      { label: "China", value: 40 }
    ]
  },
  {
    instruction: "Lowest to highest annual paper production (million tonnes)",
    category: "Countries by Paper Production",
    items: [
      { label: "Germany", value: 21 },
      { label: "Japan", value: 24 },
      { label: "India", value: 18 },
      { label: "United States", value: 66 },
      { label: "China", value: 124 }
    ]
  },
  {
    instruction: "Lowest to highest annual glass production (million tonnes)",
    category: "Countries by Glass Production",
    items: [
      { label: "Germany", value: 7 },
      { label: "India", value: 5 },
      { label: "Japan", value: 6 },
      { label: "United States", value: 20 },
      { label: "China", value: 96 }
    ]
  },
  {
    instruction: "Lowest to highest annual plastic production (million tonnes)",
    category: "Countries by Plastic Production",
    items: [
      { label: "Japan", value: 10 },
      { label: "Germany", value: 14 },
      { label: "India", value: 18 },
      { label: "United States", value: 55 },
      { label: "China", value: 145 }
    ]
  },
  {
    instruction: "Lowest to highest annual aluminum production (million tonnes)",
    category: "Countries by Aluminum Production",
    items: [
      { label: "Australia", value: 1.6 },
      { label: "United States", value: 0.9 },
      { label: "Russia", value: 3.7 },
      { label: "India", value: 4.1 },
      { label: "China", value: 40 }
    ]
  },
  {
    instruction: "Lowest to highest annual copper consumption (million tonnes)",
    category: "Countries by Copper Consumption",
    items: [
      { label: "Japan", value: 0.9 },
      { label: "Germany", value: 1.1 },
      { label: "United States", value: 1.7 },
      { label: "India", value: 1.2 },
      { label: "China", value: 14 }
    ]
  },
  {
    instruction: "Lowest to highest annual natural rubber consumption (million tonnes)",
    category: "Countries by Rubber Consumption",
    items: [
      { label: "Japan", value: 0.7 },
      { label: "United States", value: 1 },
      { label: "India", value: 1.2 },
      { label: "European Union (total)", value: 1.3 },
      { label: "China", value: 5.5 }
    ]
  },
  {
    instruction: "Lowest to highest annual timber production (million m³, roundwood)",
    category: "Countries by Timber Production",
    items: [
      { label: "Germany", value: 65 },
      { label: "Russia", value: 220 },
      { label: "Brazil", value: 270 },
      { label: "India", value: 360 },
      { label: "United States", value: 430 }
    ]
  },
  {
    instruction: "Lowest to highest annual wool production (thousand tonnes)",
    category: "Countries by Wool Production",
    items: [
      { label: "South Africa", value: 40 },
      { label: "New Zealand", value: 130 },
      { label: "Australia", value: 290 },
      { label: "China", value: 310 },
      { label: "United Kingdom", value: 60 }
    ]
  },
  {
    instruction: "Lowest to highest annual silk production (thousand tonnes)",
    category: "Countries by Silk Production",
    items: [
      { label: "Thailand", value: 0.7 },
      { label: "Japan", value: 0.03 },
      { label: "Uzbekistan", value: 1 },
      { label: "India", value: 35 },
      { label: "China", value: 120 }
    ]
  },
  {
    instruction: "Lowest to highest annual leather production (million square feet)",
    category: "Countries by Leather Production",
    items: [
      { label: "Pakistan", value: 300 },
      { label: "Bangladesh", value: 200 },
      { label: "Brazil", value: 500 },
      { label: "India", value: 800 },
      { label: "China", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest annual fertilizer consumption (million tonnes)",
    category: "Countries by Fertilizer Consumption",
    items: [
      { label: "Brazil", value: 14 },
      { label: "United States", value: 20 },
      { label: "India", value: 30 },
      { label: "European Union (total)", value: 14 },
      { label: "China", value: 52 }
    ]
  },
  {
    instruction: "Lowest to highest annual pesticide use (thousand tonnes of active ingredient)",
    category: "Countries by Pesticide Use",
    items: [
      { label: "Germany", value: 30 },
      { label: "France", value: 65 },
      { label: "Brazil", value: 400 },
      { label: "United States", value: 400 },
      { label: "China", value: 1150 }
    ]
  },
  {
    instruction: "Lowest to highest annual renewable water resources per capita (m³)",
    category: "Countries by Renewable Water Per Capita",
    items: [
      { label: "Egypt", value: 560 },
      { label: "India", value: 1458 },
      { label: "China", value: 2060 },
      { label: "United States", value: 8840 },
      { label: "Brazil", value: 42866 }
    ]
  },
  {
    instruction: "Lowest to highest annual waste generation per capita (kg/year)",
    category: "Countries by Waste Per Capita",
    items: [
      { label: "India", value: 60 },
      { label: "China", value: 115 },
      { label: "Japan", value: 340 },
      { label: "Germany", value: 630 },
      { label: "United States", value: 808 }
    ]
  },
  {
    instruction: "Lowest to highest recycling rate (%)",
    category: "Countries by Recycling Rate",
    items: [
      { label: "India", value: 5 },
      { label: "United States", value: 32 },
      { label: "United Kingdom", value: 44 },
      { label: "Japan", value: 20 },
      { label: "Germany", value: 67 }
    ]
  },
  {
    instruction: "Fewest to most annual electricity consumption per capita (kWh)",
    category: "Countries by Electricity Consumption Per Capita",
    items: [
      { label: "India", value: 900 },
      { label: "Brazil", value: 2600 },
      { label: "Germany", value: 6700 },
      { label: "United States", value: 12100 },
      { label: "Iceland", value: 53800 }
    ]
  },
  {
    instruction: "Fewest to most broadband internet subscribers per 100 people",
    category: "Countries by Broadband Penetration",
    items: [
      { label: "India", value: 2 },
      { label: "Brazil", value: 18 },
      { label: "United States", value: 37 },
      { label: "Japan", value: 34 },
      { label: "France", value: 46 }
    ]
  },
  {
    instruction: "Fewest to most annual R&D spending (billion USD, 2022)",
    category: "Countries by R&D Spending",
    items: [
      { label: "India", value: 60 },
      { label: "Germany", value: 145 },
      { label: "Japan", value: 175 },
      { label: "China", value: 555 },
      { label: "United States", value: 710 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP spent on R&D",
    category: "Countries by R&D as % of GDP",
    items: [
      { label: "India", value: 0.7 },
      { label: "United Kingdom", value: 1.7 },
      { label: "United States", value: 3.5 },
      { label: "Japan", value: 3.3 },
      { label: "Israel", value: 5.6 }
    ]
  },
  {
    instruction: "Fewest to most annual new car sales (millions, 2023)",
    category: "Countries by New Car Sales",
    items: [
      { label: "Germany", value: 2.8 },
      { label: "Japan", value: 4.0 },
      { label: "India", value: 4.1 },
      { label: "United States", value: 15.5 },
      { label: "China", value: 30 }
    ]
  },
  {
    instruction: "Lowest to highest annual cement consumption per capita (kg)",
    category: "Countries by Cement Consumption Per Capita",
    items: [
      { label: "United States", value: 280 },
      { label: "Japan", value: 360 },
      { label: "Germany", value: 310 },
      { label: "South Korea", value: 1100 },
      { label: "China", value: 1500 }
    ]
  },
  {
    instruction: "Fewest to most annual tourist spending abroad (billion USD, 2019)",
    category: "Countries by Outbound Tourism Spending",
    items: [
      { label: "Japan", value: 20 },
      { label: "Russia", value: 36 },
      { label: "Germany", value: 94 },
      { label: "United States", value: 152 },
      { label: "China", value: 255 }
    ]
  },
  {
    instruction: "Fewest to most annual tourism revenue (billion USD, 2019)",
    category: "Countries by Tourism Revenue",
    items: [
      { label: "Italy", value: 50 },
      { label: "France", value: 64 },
      { label: "Thailand", value: 61 },
      { label: "Spain", value: 80 },
      { label: "United States", value: 214 }
    ]
  },
  {
    instruction: "Lowest to highest annual remittances received (billion USD, 2022)",
    category: "Countries by Remittances Received",
    items: [
      { label: "Bangladesh", value: 21 },
      { label: "Philippines", value: 38 },
      { label: "Egypt", value: 32 },
      { label: "Mexico", value: 61 },
      { label: "India", value: 111 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP from services sector",
    category: "Countries by Services GDP Share (%)",
    items: [
      { label: "Nigeria", value: 53 },
      { label: "China", value: 54 },
      { label: "India", value: 50 },
      { label: "Germany", value: 69 },
      { label: "United States", value: 77 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of GDP from industry",
    category: "Countries by Industry GDP Share (%)",
    items: [
      { label: "United States", value: 18 },
      { label: "France", value: 19 },
      { label: "Germany", value: 27 },
      { label: "China", value: 38 },
      { label: "Saudi Arabia", value: 44 }
    ]
  },
  {
    instruction: "Lowest to highest annual export value (trillion USD, 2022)",
    category: "Countries by Export Value",
    items: [
      { label: "South Korea", value: 0.68 },
      { label: "Japan", value: 0.75 },
      { label: "Germany", value: 1.66 },
      { label: "United States", value: 2.06 },
      { label: "China", value: 3.59 }
    ]
  },
  {
    instruction: "Lowest to highest annual import value (trillion USD, 2022)",
    category: "Countries by Import Value",
    items: [
      { label: "Japan", value: 0.9 },
      { label: "South Korea", value: 0.73 },
      { label: "Germany", value: 1.57 },
      { label: "China", value: 2.72 },
      { label: "United States", value: 3.27 }
    ]
  },
  {
    instruction: "Lowest to highest national debt as percentage of GDP (%, 2023)",
    category: "Countries by Debt-to-GDP Ratio",
    items: [
      { label: "Russia", value: 15 },
      { label: "Germany", value: 66 },
      { label: "United States", value: 123 },
      { label: "Italy", value: 140 },
      { label: "Japan", value: 255 }
    ]
  },
  {
    instruction: "Lowest to highest annual inflation rate (%, 2023)",
    category: "Countries by Inflation Rate",
    items: [
      { label: "Japan", value: 3.3 },
      { label: "China", value: 0.2 },
      { label: "Germany", value: 5.9 },
      { label: "United Kingdom", value: 7.3 },
      { label: "Argentina", value: 211 }
    ]
  },
  {
    instruction: "Lowest to highest central bank interest rate (%, 2023)",
    category: "Countries by Central Bank Interest Rate",
    items: [
      { label: "Japan", value: -0.1 },
      { label: "China", value: 3.45 },
      { label: "United States", value: 5.5 },
      { label: "United Kingdom", value: 5.25 },
      { label: "Turkey", value: 42.5 }
    ]
  },
  {
    instruction: "Lowest to highest unemployment rate (%, 2023)",
    category: "Countries by Unemployment Rate",
    items: [
      { label: "Japan", value: 2.6 },
      { label: "Germany", value: 3.0 },
      { label: "United States", value: 3.6 },
      { label: "France", value: 7.3 },
      { label: "South Africa", value: 32 }
    ]
  },
  {
    instruction: "Lowest to highest tax revenue as percentage of GDP (%)",
    category: "Countries by Tax Revenue (% of GDP)",
    items: [
      { label: "India", value: 12 },
      { label: "United States", value: 27 },
      { label: "United Kingdom", value: 33 },
      { label: "Germany", value: 38 },
      { label: "Denmark", value: 47 }
    ]
  },
  {
    instruction: "Lowest to highest personal income tax rate (top marginal, %)",
    category: "Countries by Top Income Tax Rate",
    items: [
      { label: "Singapore", value: 22 },
      { label: "United States", value: 37 },
      { label: "United Kingdom", value: 45 },
      { label: "Japan", value: 55 },
      { label: "Sweden", value: 52 }
    ]
  },
  {
    instruction: "Lowest to highest corporate tax rate (%)",
    category: "Countries by Corporate Tax Rate",
    items: [
      { label: "Ireland", value: 12.5 },
      { label: "Singapore", value: 17 },
      { label: "United Kingdom", value: 25 },
      { label: "United States", value: 21 },
      { label: "Japan", value: 30 }
    ]
  },
  {
    instruction: "Lowest to highest VAT/sales tax rate (%)",
    category: "Countries by VAT Rate",
    items: [
      { label: "United States (no federal VAT)", value: 0 },
      { label: "Japan", value: 10 },
      { label: "Germany", value: 19 },
      { label: "France", value: 20 },
      { label: "Hungary", value: 27 }
    ]
  },
  {
    instruction: "Fewest to most annual foreign tourists arrivals (2023, millions)",
    category: "Countries by Tourist Arrivals (2023)",
    items: [
      { label: "Japan", value: 25 },
      { label: "United States", value: 66 },
      { label: "Italy", value: 57 },
      { label: "Spain", value: 85 },
      { label: "France", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest annual healthcare spending per capita (USD)",
    category: "Countries by Healthcare Spending Per Capita",
    items: [
      { label: "India", value: 73 },
      { label: "Brazil", value: 650 },
      { label: "United Kingdom", value: 5100 },
      { label: "Germany", value: 7400 },
      { label: "United States", value: 12500 }
    ]
  },
  {
    instruction: "Fewest to most hospital beds per 1000 people",
    category: "Countries by Hospital Bed Density",
    items: [
      { label: "India", value: 0.5 },
      { label: "United States", value: 2.9 },
      { label: "United Kingdom", value: 2.5 },
      { label: "Germany", value: 8.0 },
      { label: "Japan", value: 13 }
    ]
  },
  {
    instruction: "Fewest to most pharmacies per 100,000 people",
    category: "Countries by Pharmacy Density",
    items: [
      { label: "United Kingdom", value: 21 },
      { label: "Germany", value: 22 },
      { label: "United States", value: 30 },
      { label: "Japan", value: 44 },
      { label: "Greece", value: 88 }
    ]
  },
  {
    instruction: "Lowest to highest annual education spending per student (USD, primary)",
    category: "Countries by Education Spending Per Student",
    items: [
      { label: "India", value: 300 },
      { label: "Brazil", value: 3000 },
      { label: "Japan", value: 9500 },
      { label: "United States", value: 14000 },
      { label: "Luxembourg", value: 22000 }
    ]
  },
  {
    instruction: "Fewest to most students enrolled in tertiary education (millions)",
    category: "Countries by University Enrollment",
    items: [
      { label: "Germany", value: 3.4 },
      { label: "Brazil", value: 9 },
      { label: "United States", value: 19 },
      { label: "India", value: 40 },
      { label: "China", value: 47 }
    ]
  },
  {
    instruction: "Lowest to highest annual military spending per capita (USD)",
    category: "Countries by Military Spending Per Capita",
    items: [
      { label: "India", value: 58 },
      { label: "Brazil", value: 135 },
      { label: "Germany", value: 805 },
      { label: "United States", value: 2650 },
      { label: "Israel", value: 2990 }
    ]
  },
  {
    instruction: "Fewest to most annual bicycle trips per person",
    category: "Countries by Cycling Trips Per Capita",
    items: [
      { label: "United States", value: 25 },
      { label: "Germany", value: 120 },
      { label: "Japan", value: 200 },
      { label: "Denmark", value: 350 },
      { label: "Netherlands", value: 400 }
    ]
  },
  {
    instruction: "Fewest to most daily train passengers (millions, national rail)",
    category: "Countries by Daily Rail Passengers",
    items: [
      { label: "United Kingdom", value: 4.5 },
      { label: "Germany", value: 7 },
      { label: "China", value: 26 },
      { label: "Japan", value: 27 },
      { label: "India", value: 23 }
    ]
  },
  {
    instruction: "Lowest to highest average retirement age",
    category: "Countries by Retirement Age",
    items: [
      { label: "France", value: 62 },
      { label: "Germany", value: 65 },
      { label: "United States", value: 66 },
      { label: "Japan", value: 67 },
      { label: "South Korea", value: 73 }
    ]
  },
  {
    instruction: "Fewest to most annual organ transplants (per million people)",
    category: "Countries by Organ Transplant Rate",
    items: [
      { label: "India", value: 2 },
      { label: "Germany", value: 33 },
      { label: "United Kingdom", value: 55 },
      { label: "United States", value: 131 },
      { label: "Spain", value: 115 }
    ]
  },
  {
    instruction: "Lowest to highest happiness index score (2023, World Happiness Report)",
    category: "Countries by Happiness Score",
    items: [
      { label: "Afghanistan", value: 1.9 },
      { label: "India", value: 4.0 },
      { label: "Japan", value: 6.1 },
      { label: "United States", value: 6.9 },
      { label: "Finland", value: 7.8 }
    ]
  },
  {
    instruction: "Lowest to highest Human Development Index (HDI, 2023)",
    category: "Countries by HDI Score",
    items: [
      { label: "Chad", value: 0.394 },
      { label: "India", value: 0.645 },
      { label: "Brazil", value: 0.760 },
      { label: "United States", value: 0.921 },
      { label: "Switzerland", value: 0.962 }
    ]
  },
  {
    instruction: "Fewest to most annual voluntary blood donations per 1000 people",
    category: "Countries by Blood Donation Rate",
    items: [
      { label: "India", value: 8 },
      { label: "Brazil", value: 18 },
      { label: "United States", value: 30 },
      { label: "Japan", value: 32 },
      { label: "Denmark", value: 67 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of population with access to clean water",
    category: "Countries by Clean Water Access (%)",
    items: [
      { label: "Chad", value: 44 },
      { label: "Ethiopia", value: 57 },
      { label: "India", value: 85 },
      { label: "Brazil", value: 97 },
      { label: "Japan", value: 100 }
    ]
  },
  {
    instruction: "Lowest to highest average lifespan of technology products (years)",
    category: "Tech Products by Average Lifespan",
    items: [
      { label: "Earbuds", value: 1.5 },
      { label: "Smartphone", value: 3 },
      { label: "Laptop", value: 5 },
      { label: "Television", value: 8 },
      { label: "Desktop Computer", value: 7 }
    ]
  },
  {
    instruction: "Fewest to most annual space launches (2023)",
    category: "Countries by Annual Orbital Launches",
    items: [
      { label: "Japan", value: 4 },
      { label: "India", value: 7 },
      { label: "Russia", value: 19 },
      { label: "China", value: 67 },
      { label: "United States", value: 116 }
    ]
  },
  {
    instruction: "Fewest to most total missions to Mars (successful)",
    category: "Countries/Agencies by Successful Mars Missions",
    items: [
      { label: "India (ISRO)", value: 1 },
      { label: "European Space Agency (ESA)", value: 2 },
      { label: "China (CNSA)", value: 1 },
      { label: "Russia/USSR", value: 2 },
      { label: "United States (NASA)", value: 18 }
    ]
  },
  {
    instruction: "Fewest to most total missions to the Moon (successful)",
    category: "Countries by Successful Lunar Missions",
    items: [
      { label: "Japan (JAXA)", value: 2 },
      { label: "India (ISRO)", value: 2 },
      { label: "China (CNSA)", value: 6 },
      { label: "Russia/USSR", value: 15 },
      { label: "United States (NASA)", value: 30 }
    ]
  },
  {
    instruction: "Lowest to highest average download speed on mobile (Mbps, 2023)",
    category: "Countries by Mobile Download Speed",
    items: [
      { label: "India", value: 25 },
      { label: "Brazil", value: 30 },
      { label: "Germany", value: 60 },
      { label: "Japan", value: 50 },
      { label: "South Korea", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most 5G subscribers (millions, 2023)",
    category: "Countries by 5G Subscribers",
    items: [
      { label: "Germany", value: 20 },
      { label: "Japan", value: 50 },
      { label: "United States", value: 190 },
      { label: "South Korea", value: 30 },
      { label: "China", value: 770 }
    ]
  },
  {
    instruction: "Fewest to most robotics installations per year (thousands of units)",
    category: "Countries by Industrial Robot Installations",
    items: [
      { label: "Germany", value: 26 },
      { label: "United States", value: 40 },
      { label: "South Korea", value: 32 },
      { label: "Japan", value: 50 },
      { label: "China", value: 290 }
    ]
  },
  {
    instruction: "Fewest to most robots per 10,000 manufacturing workers",
    category: "Countries by Robot Density in Manufacturing",
    items: [
      { label: "India", value: 5 },
      { label: "China", value: 392 },
      { label: "Germany", value: 397 },
      { label: "Japan", value: 399 },
      { label: "South Korea", value: 1012 }
    ]
  },
  {
    instruction: "Lowest to highest annual AI investment (billion USD, 2023)",
    category: "Countries by AI Investment",
    items: [
      { label: "Germany", value: 5 },
      { label: "Japan", value: 4 },
      { label: "United Kingdom", value: 5 },
      { label: "China", value: 15 },
      { label: "United States", value: 67 }
    ]
  },
  {
    instruction: "Lowest to highest venture capital investment (billion USD, 2023)",
    category: "Countries by Venture Capital Investment",
    items: [
      { label: "Germany", value: 6 },
      { label: "Japan", value: 5 },
      { label: "India", value: 10 },
      { label: "China", value: 45 },
      { label: "United States", value: 170 }
    ]
  },
  {
    instruction: "Fewest to most unicorn companies (private startups valued $1B+, 2023)",
    category: "Countries by Number of Unicorns",
    items: [
      { label: "Germany", value: 30 },
      { label: "Japan", value: 10 },
      { label: "India", value: 75 },
      { label: "China", value: 170 },
      { label: "United States", value: 660 }
    ]
  },
  {
    instruction: "Fewest to most fintech companies",
    category: "Countries by Number of Fintech Firms",
    items: [
      { label: "Japan", value: 300 },
      { label: "Germany", value: 700 },
      { label: "India", value: 2100 },
      { label: "United Kingdom", value: 2500 },
      { label: "United States", value: 10000 }
    ]
  },
  {
    instruction: "Lowest to highest annual e-commerce revenue (billion USD, 2023)",
    category: "Countries by E-Commerce Revenue",
    items: [
      { label: "Japan", value: 190 },
      { label: "Germany", value: 140 },
      { label: "United Kingdom", value: 170 },
      { label: "United States", value: 1140 },
      { label: "China", value: 2200 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of retail sales online (%)",
    category: "Countries by E-Commerce Share of Retail",
    items: [
      { label: "Italy", value: 12 },
      { label: "Japan", value: 14 },
      { label: "Germany", value: 19 },
      { label: "United Kingdom", value: 30 },
      { label: "China", value: 46 }
    ]
  },
  {
    instruction: "Fewest to most contactless payment users (% of population)",
    category: "Countries by Contactless Payment Adoption (%)",
    items: [
      { label: "Japan", value: 15 },
      { label: "United States", value: 30 },
      { label: "Germany", value: 35 },
      { label: "United Kingdom", value: 70 },
      { label: "China (mobile pay)", value: 85 }
    ]
  },
  {
    instruction: "Fewest to most total cloud computing data centers",
    category: "Countries by Cloud Data Centers",
    items: [
      { label: "Japan", value: 40 },
      { label: "Germany", value: 50 },
      { label: "China", value: 100 },
      { label: "United Kingdom", value: 60 },
      { label: "United States", value: 2700 }
    ]
  },
  {
    instruction: "Lowest to highest semiconductor revenue (billion USD, 2023)",
    category: "Countries by Semiconductor Revenue",
    items: [
      { label: "China (domestic)", value: 35 },
      { label: "Japan", value: 40 },
      { label: "Europe (total)", value: 55 },
      { label: "South Korea", value: 70 },
      { label: "United States", value: 200 }
    ]
  },
  {
    instruction: "Fewest to most STEM graduates per year (thousands)",
    category: "Countries by STEM Graduates",
    items: [
      { label: "Germany", value: 210 },
      { label: "Japan", value: 250 },
      { label: "United States", value: 750 },
      { label: "India", value: 2600 },
      { label: "China", value: 4700 }
    ]
  },
  {
    instruction: "Fewest to most total supercomputers in the TOP500 list (2023)",
    category: "Countries by TOP500 Supercomputers",
    items: [
      { label: "Germany", value: 34 },
      { label: "Japan", value: 32 },
      { label: "France", value: 22 },
      { label: "China", value: 134 },
      { label: "United States", value: 150 }
    ]
  },
  {
    instruction: "Lowest to highest annual smartphone sales (millions, 2023)",
    category: "Countries by Smartphone Sales",
    items: [
      { label: "Japan", value: 28 },
      { label: "Germany", value: 20 },
      { label: "United States", value: 145 },
      { label: "India", value: 150 },
      { label: "China", value: 270 }
    ]
  },
  {
    instruction: "Fewest to most annual cyber attacks reported (per million people)",
    category: "Countries by Cyber Attack Rate",
    items: [
      { label: "Japan", value: 50 },
      { label: "Germany", value: 120 },
      { label: "India", value: 15 },
      { label: "United States", value: 300 },
      { label: "United Kingdom", value: 350 }
    ]
  },
  {
    instruction: "Fewest to most total tech IPOs in 2023",
    category: "Countries by Tech IPOs",
    items: [
      { label: "Japan", value: 15 },
      { label: "Germany", value: 5 },
      { label: "India", value: 30 },
      { label: "China", value: 80 },
      { label: "United States", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most annual podcast listeners (millions, 2023)",
    category: "Countries by Podcast Listeners",
    items: [
      { label: "Germany", value: 20 },
      { label: "Japan", value: 15 },
      { label: "Brazil", value: 40 },
      { label: "China", value: 100 },
      { label: "United States", value: 120 }
    ]
  },
  {
    instruction: "Fewest to most annual video game revenue (billion USD, 2023)",
    category: "Countries by Gaming Revenue",
    items: [
      { label: "Germany", value: 6.5 },
      { label: "United Kingdom", value: 5.5 },
      { label: "Japan", value: 20 },
      { label: "United States", value: 52 },
      { label: "China", value: 45 }
    ]
  },
  {
    instruction: "Fewest to most annual esports tournament prize pools (million USD)",
    category: "Esports Games by Annual Prize Pools",
    items: [
      { label: "League of Legends", value: 6 },
      { label: "Fortnite", value: 10 },
      { label: "Valorant", value: 5 },
      { label: "Counter-Strike", value: 15 },
      { label: "Dota 2", value: 45 }
    ]
  },
  {
    instruction: "Fewest to most annual drone deliveries (thousands, 2023)",
    category: "Countries by Drone Deliveries",
    items: [
      { label: "Japan", value: 5 },
      { label: "United States", value: 50 },
      { label: "Australia", value: 100 },
      { label: "India", value: 20 },
      { label: "China", value: 2000 }
    ]
  },
  {
    instruction: "Fewest to most EV charging stations (thousands, 2023)",
    category: "Countries by EV Charging Points",
    items: [
      { label: "Japan", value: 40 },
      { label: "Germany", value: 90 },
      { label: "United States", value: 160 },
      { label: "European Union (total)", value: 600 },
      { label: "China", value: 2700 }
    ]
  },
  {
    instruction: "Fewest to most annual solar energy generation (TWh, 2023)",
    category: "Countries by Solar Energy Generated",
    items: [
      { label: "Japan", value: 100 },
      { label: "Germany", value: 60 },
      { label: "India", value: 120 },
      { label: "United States", value: 240 },
      { label: "China", value: 580 }
    ]
  },
  {
    instruction: "Lowest to highest average cloud computing spend per company (thousand USD)",
    category: "Industries by Average Cloud Spending",
    items: [
      { label: "Education", value: 200 },
      { label: "Healthcare", value: 500 },
      { label: "Retail", value: 800 },
      { label: "Financial Services", value: 2500 },
      { label: "Technology", value: 5000 }
    ]
  },
  {
    instruction: "Fewest to most total Nobel Prizes in Chemistry by country",
    category: "Countries by Chemistry Nobel Prizes",
    items: [
      { label: "Japan", value: 8 },
      { label: "France", value: 9 },
      { label: "United Kingdom", value: 32 },
      { label: "Germany", value: 31 },
      { label: "United States", value: 76 }
    ]
  },
  {
    instruction: "Fewest to most total Nobel Prizes in Medicine by country",
    category: "Countries by Medicine Nobel Prizes",
    items: [
      { label: "Japan", value: 5 },
      { label: "France", value: 13 },
      { label: "Germany", value: 16 },
      { label: "United Kingdom", value: 31 },
      { label: "United States", value: 103 }
    ]
  },
  {
    instruction: "Fewest to most total Fields Medal winners by country",
    category: "Countries by Fields Medal Winners",
    items: [
      { label: "Japan", value: 3 },
      { label: "United Kingdom", value: 8 },
      { label: "Russia/USSR", value: 9 },
      { label: "France", value: 13 },
      { label: "United States", value: 14 }
    ]
  },
  {
    instruction: "Fewest to most total Turing Award winners by country",
    category: "Countries by Turing Award Winners",
    items: [
      { label: "Canada", value: 5 },
      { label: "Netherlands", value: 2 },
      { label: "Israel", value: 4 },
      { label: "United Kingdom", value: 7 },
      { label: "United States", value: 52 }
    ]
  },
  {
    instruction: "Lowest to highest average rent per m² in major cities (USD, 2023)",
    category: "Cities by Average Monthly Rent Per m²",
    items: [
      { label: "Cairo", value: 3 },
      { label: "Mumbai", value: 15 },
      { label: "Berlin", value: 22 },
      { label: "London", value: 55 },
      { label: "Hong Kong", value: 75 }
    ]
  },
  {
    instruction: "Fewest to most annual car thefts per 100,000 people",
    category: "Countries by Car Theft Rate",
    items: [
      { label: "Japan", value: 8 },
      { label: "Germany", value: 60 },
      { label: "France", value: 150 },
      { label: "United States", value: 280 },
      { label: "South Africa", value: 170 }
    ]
  },
  {
    instruction: "Fewest to most annual homicides per 100,000 people",
    category: "Countries by Homicide Rate",
    items: [
      { label: "Japan", value: 0.3 },
      { label: "Germany", value: 0.9 },
      { label: "United States", value: 6.4 },
      { label: "Brazil", value: 23 },
      { label: "Honduras", value: 36 }
    ]
  },
  {
    instruction: "Fewest to most annual traffic fatalities per 100,000 people",
    category: "Countries by Road Death Rate",
    items: [
      { label: "Norway", value: 2 },
      { label: "Japan", value: 3 },
      { label: "Germany", value: 3.7 },
      { label: "United States", value: 12 },
      { label: "India", value: 17 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of population that is vegetarian",
    category: "Countries by Vegetarian Population (%)",
    items: [
      { label: "United States", value: 5 },
      { label: "Germany", value: 10 },
      { label: "United Kingdom", value: 12 },
      { label: "Taiwan", value: 14 },
      { label: "India", value: 31 }
    ]
  },
  {
    instruction: "Fewest to most annual organic food sales (billion USD)",
    category: "Countries by Organic Food Market",
    items: [
      { label: "Japan", value: 2 },
      { label: "France", value: 13 },
      { label: "Germany", value: 18 },
      { label: "European Union (total)", value: 54 },
      { label: "United States", value: 63 }
    ]
  },
  {
    instruction: "Fewest to most total organic farms (thousands)",
    category: "Countries by Number of Organic Farms",
    items: [
      { label: "Japan", value: 12 },
      { label: "United States", value: 18 },
      { label: "Germany", value: 35 },
      { label: "Italy", value: 82 },
      { label: "India", value: 4400 }
    ]
  },
  {
    instruction: "Fewest to most annual pet spending (billion USD)",
    category: "Countries by Pet Industry Spending",
    items: [
      { label: "Japan", value: 15 },
      { label: "Germany", value: 8 },
      { label: "United Kingdom", value: 10 },
      { label: "China", value: 30 },
      { label: "United States", value: 140 }
    ]
  },
  {
    instruction: "Fewest to most dog ownership (millions of pet dogs)",
    category: "Countries by Dog Population",
    items: [
      { label: "Japan", value: 10 },
      { label: "Germany", value: 10 },
      { label: "Russia", value: 15 },
      { label: "Brazil", value: 55 },
      { label: "United States", value: 90 }
    ]
  },
  {
    instruction: "Fewest to most cat ownership (millions of pet cats)",
    category: "Countries by Cat Population",
    items: [
      { label: "Germany", value: 15 },
      { label: "Japan", value: 10 },
      { label: "Russia", value: 23 },
      { label: "China", value: 58 },
      { label: "United States", value: 74 }
    ]
  },
  {
    instruction: "Fewest to most annual marathons held in a country",
    category: "Countries by Number of Annual Marathons",
    items: [
      { label: "Germany", value: 100 },
      { label: "France", value: 80 },
      { label: "United Kingdom", value: 200 },
      { label: "Japan", value: 350 },
      { label: "United States", value: 800 }
    ]
  },
  {
    instruction: "Fewest to most annual triathlons held in a country",
    category: "Countries by Number of Annual Triathlons",
    items: [
      { label: "Japan", value: 100 },
      { label: "Germany", value: 200 },
      { label: "France", value: 300 },
      { label: "Australia", value: 150 },
      { label: "United States", value: 4000 }
    ]
  },
  {
    instruction: "Lowest to highest annual yogurt production (million tonnes)",
    category: "Countries by Yogurt Production",
    items: [
      { label: "Japan", value: 1.1 },
      { label: "Germany", value: 2 },
      { label: "United States", value: 2.8 },
      { label: "India", value: 5 },
      { label: "Turkey", value: 1.5 }
    ]
  },
  {
    instruction: "Fewest to most annual craft beer breweries",
    category: "Countries by Number of Craft Breweries",
    items: [
      { label: "Japan", value: 600 },
      { label: "Australia", value: 700 },
      { label: "Germany", value: 1500 },
      { label: "United Kingdom", value: 2300 },
      { label: "United States", value: 9500 }
    ]
  },
  {
    instruction: "Fewest to most annual wine producers (thousands of wineries)",
    category: "Countries by Number of Wineries",
    items: [
      { label: "Australia", value: 2.5 },
      { label: "Germany", value: 15 },
      { label: "United States", value: 11 },
      { label: "Spain", value: 4 },
      { label: "France", value: 85 }
    ]
  },
  {
    instruction: "Lowest to highest percentage of energy from geothermal sources",
    category: "Countries by Geothermal Energy Share (%)",
    items: [
      { label: "Japan", value: 0.3 },
      { label: "United States", value: 0.4 },
      { label: "New Zealand", value: 17 },
      { label: "Kenya", value: 46 },
      { label: "Iceland", value: 66 }
    ]
  },
  {
    instruction: "Fewest to most annual volcanic eruptions (average per decade)",
    category: "Countries by Volcanic Activity (eruptions per decade)",
    items: [
      { label: "Italy", value: 3 },
      { label: "Iceland", value: 4 },
      { label: "United States", value: 5 },
      { label: "Japan", value: 15 },
      { label: "Indonesia", value: 25 }
    ]
  },
  {
    instruction: "Fewest to most annual avalanche fatalities",
    category: "Countries by Avalanche Deaths Per Year (average)",
    items: [
      { label: "Japan", value: 10 },
      { label: "United States", value: 25 },
      { label: "Austria", value: 26 },
      { label: "Switzerland", value: 22 },
      { label: "France", value: 30 }
    ]
  },
  {
    instruction: "Fewest to most annual lightning strikes per km²",
    category: "Countries by Lightning Density (flashes/km²/year)",
    items: [
      { label: "Japan", value: 5 },
      { label: "United States", value: 8 },
      { label: "India", value: 15 },
      { label: "Colombia", value: 30 },
      { label: "DR Congo", value: 50 }
    ]
  },
  {
    instruction: "Fewest to most annual hailstorm events",
    category: "Countries by Annual Hailstorm Frequency",
    items: [
      { label: "Japan", value: 10 },
      { label: "Germany", value: 50 },
      { label: "Australia", value: 80 },
      { label: "India", value: 100 },
      { label: "United States", value: 3000 }
    ]
  },
  {
    instruction: "Lowest to highest annual rainfall in deserts (mm)",
    category: "Deserts by Average Annual Rainfall",
    items: [
      { label: "Atacama Desert (Chile)", value: 1 },
      { label: "Sahara Desert", value: 25 },
      { label: "Arabian Desert", value: 100 },
      { label: "Gobi Desert", value: 194 },
      { label: "Sonoran Desert (USA/Mexico)", value: 250 }
    ]
  },
  {
    instruction: "Fewest to most annual sandstorms by region",
    category: "Regions by Annual Sandstorm Days",
    items: [
      { label: "Australian Outback", value: 5 },
      { label: "Arizona (USA)", value: 12 },
      { label: "Gobi Desert (Mongolia)", value: 30 },
      { label: "Arabian Peninsula", value: 40 },
      { label: "Sahara Desert", value: 60 }
    ]
  },
  {
    instruction: "Fewest to most annual fog days in cities",
    category: "Cities by Annual Fog Days",
    items: [
      { label: "Cairo", value: 2 },
      { label: "Tokyo", value: 10 },
      { label: "Paris", value: 20 },
      { label: "London", value: 45 },
      { label: "St. John's (Newfoundland)", value: 124 }
    ]
  },
  {
    instruction: "Lowest to highest annual frost-free days",
    category: "Cities by Frost-Free Growing Season (days)",
    items: [
      { label: "Anchorage (Alaska)", value: 115 },
      { label: "Chicago", value: 187 },
      { label: "Paris", value: 210 },
      { label: "Los Angeles", value: 350 },
      { label: "Singapore", value: 365 }
    ]
  },
  {
    instruction: "Fewest to most annual heat wave days (average, days above 35°C)",
    category: "Cities by Annual Heat Wave Days",
    items: [
      { label: "London", value: 1 },
      { label: "Tokyo", value: 15 },
      { label: "New York", value: 10 },
      { label: "New Delhi", value: 60 },
      { label: "Phoenix", value: 110 }
    ]
  },
  {
    instruction: "Fewest to most total FIFA Women's World Cup titles",
    category: "Countries by Women's World Cup Titles",
    items: [
      { label: "Japan", value: 1 },
      { label: "Norway", value: 1 },
      { label: "Germany", value: 2 },
      { label: "Spain", value: 1 },
      { label: "United States", value: 4 }
    ]
  },
  {
    instruction: "Fewest to most career Olympic gold medals in women's tennis",
    category: "Women Tennis Players by Olympic Golds",
    items: [
      { label: "Monica Seles", value: 0 },
      { label: "Venus Williams", value: 4 },
      { label: "Serena Williams", value: 4 },
      { label: "Steffi Graf", value: 1 },
      { label: "Justine Henin", value: 1 }
    ]
  },
  {
    instruction: "Fewest to most annual cheese exports (billion USD)",
    category: "Countries by Cheese Exports",
    items: [
      { label: "United States", value: 1.4 },
      { label: "Italy", value: 4 },
      { label: "France", value: 4.5 },
      { label: "Netherlands", value: 5 },
      { label: "Germany", value: 6 }
    ]
  },
  {
    instruction: "Fewest to most total Olympic medals in triathlon (country)",
    category: "Countries by Olympic Triathlon Medal Count",
    items: [
      { label: "Canada", value: 2 },
      { label: "New Zealand", value: 3 },
      { label: "Switzerland", value: 5 },
      { label: "Australia", value: 7 },
      { label: "Great Britain", value: 9 }
    ]
  },
  {
    instruction: "Fewest to most annual flower production (billion stems)",
    category: "Countries by Cut Flower Production",
    items: [
      { label: "Japan", value: 5 },
      { label: "Colombia", value: 8 },
      { label: "Kenya", value: 6 },
      { label: "Netherlands", value: 13 },
      { label: "China", value: 20 }
    ]
  },
  {
    instruction: "Fewest to most career World Cup skiing overall titles (FIS)",
    category: "Alpine Skiers by Overall World Cup Titles",
    items: [
      { label: "Vreni Schneider", value: 3 },
      { label: "Lindsey Vonn", value: 4 },
      { label: "Annemarie Moser-Pröll", value: 6 },
      { label: "Marcel Hirscher", value: 8 },
      { label: "Ingemar Stenmark", value: 3 }
    ]
  },
  {
    instruction: "Fewest to most total annual classical music concerts (thousands)",
    category: "Countries by Classical Music Concerts Per Year",
    items: [
      { label: "Japan", value: 8 },
      { label: "United States", value: 15 },
      { label: "United Kingdom", value: 10 },
      { label: "Austria", value: 12 },
      { label: "Germany", value: 30 }
    ]
  },
  {
    instruction: "Fewest to most annual symphony orchestras",
    category: "Countries by Number of Professional Orchestras",
    items: [
      { label: "Australia", value: 10 },
      { label: "France", value: 25 },
      { label: "United Kingdom", value: 30 },
      { label: "United States", value: 55 },
      { label: "Germany", value: 130 }
    ]
  },
  {
    instruction: "Fewest to most annual piano sales (thousands of units)",
    category: "Countries by Piano Sales",
    items: [
      { label: "Germany", value: 20 },
      { label: "Japan", value: 30 },
      { label: "United States", value: 30 },
      { label: "China", value: 300 },
      { label: "Worldwide (total)", value: 500 }
    ]
  },
  {
    instruction: "Fewest to most annual museum exhibitions",
    category: "Countries by Annual Museum Exhibitions",
    items: [
      { label: "Australia", value: 500 },
      { label: "Japan", value: 2000 },
      { label: "United Kingdom", value: 3000 },
      { label: "Germany", value: 5000 },
      { label: "United States", value: 10000 }
    ]
  },
  {
    instruction: "Fewest to most total World Heritage Sites in danger (by region, 2023)",
    category: "UNESCO Regions by Endangered Sites",
    items: [
      { label: "Asia-Pacific", value: 7 },
      { label: "Europe/North America", value: 4 },
      { label: "Latin America/Caribbean", value: 8 },
      { label: "Arab States", value: 19 },
      { label: "Africa", value: 17 }
    ]
  },
  {
    instruction: "Lowest to highest global bicycle sharing systems (number of cities with bike-share)",
    category: "Countries by Cities with Bike-Sharing",
    items: [
      { label: "Germany", value: 80 },
      { label: "Japan", value: 100 },
      { label: "France", value: 40 },
      { label: "United States", value: 120 },
      { label: "China", value: 400 }
    ]
  }
];
