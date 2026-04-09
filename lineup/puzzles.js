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
      { label: "H₂ (Hydrogen gas)", value: 2 },
      { label: "H₂O (Water)", value: 3 },
      { label: "CO₂ (Carbon dioxide)", value: 3 },
      { label: "C₂H₆O (Ethanol)", value: 9 },
      { label: "C₆H₁₂O₆ (Glucose)", value: 24 }
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
      { label: "Cheeseburger", value: 300 },
      { label: "Slice of Pizza", value: 285 }
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
      { label: "Edward VIII", value: 0.9 },
      { label: "Edward V", value: 0.2 },
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
      { label: "Ear (middle)", value: 3 },
      { label: "Arm (upper)", value: 1 },
      { label: "Hand", value: 27 },
      { label: "Foot", value: 26 },
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
    instruction: "Lowest to highest boiling point (°C)",
    category: "Substances by Boiling Point",
    items: [
      { label: "Nitrogen", value: -196 },
      { label: "Ethanol", value: 78 },
      { label: "Water", value: 100 },
      { label: "Mercury", value: 357 },
      { label: "Iron", value: 2862 }
    ]
  }
];
