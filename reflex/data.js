const CATEGORIES = [
  {
    left: "Fruit", right: "Vegetable",
    words: [
      { text: "Apple", side: "left" }, { text: "Banana", side: "left" }, { text: "Mango", side: "left" },
      { text: "Cherry", side: "left" }, { text: "Peach", side: "left" }, { text: "Grape", side: "left" },
      { text: "Carrot", side: "right" }, { text: "Broccoli", side: "right" }, { text: "Spinach", side: "right" },
      { text: "Celery", side: "right" }, { text: "Potato", side: "right" }, { text: "Onion", side: "right" }
    ]
  },
  {
    left: "Mammal", right: "Reptile",
    words: [
      { text: "Dog", side: "left" }, { text: "Tiger", side: "left" }, { text: "Whale", side: "left" },
      { text: "Rabbit", side: "left" }, { text: "Horse", side: "left" }, { text: "Dolphin", side: "left" },
      { text: "Lizard", side: "right" }, { text: "Cobra", side: "right" }, { text: "Turtle", side: "right" },
      { text: "Gecko", side: "right" }, { text: "Iguana", side: "right" }, { text: "Python", side: "right" }
    ]
  },
  {
    left: "Country", right: "City",
    words: [
      { text: "Brazil", side: "left" }, { text: "Japan", side: "left" }, { text: "Canada", side: "left" },
      { text: "Egypt", side: "left" }, { text: "Italy", side: "left" }, { text: "Norway", side: "left" },
      { text: "Paris", side: "right" }, { text: "Tokyo", side: "right" }, { text: "Dubai", side: "right" },
      { text: "London", side: "right" }, { text: "Sydney", side: "right" }, { text: "Berlin", side: "right" }
    ]
  },
  {
    left: "Planet", right: "Star / Constellation",
    words: [
      { text: "Mars", side: "left" }, { text: "Venus", side: "left" }, { text: "Saturn", side: "left" },
      { text: "Neptune", side: "left" }, { text: "Jupiter", side: "left" }, { text: "Uranus", side: "left" },
      { text: "Polaris", side: "right" }, { text: "Sirius", side: "right" }, { text: "Orion", side: "right" },
      { text: "Vega", side: "right" }, { text: "Rigel", side: "right" }, { text: "Betelgeuse", side: "right" }
    ]
  },
  {
    left: "Noun", right: "Verb",
    words: [
      { text: "Table", side: "left" }, { text: "Cloud", side: "left" }, { text: "Chair", side: "left" },
      { text: "Bridge", side: "left" }, { text: "Window", side: "left" }, { text: "Forest", side: "left" },
      { text: "Sprint", side: "right" }, { text: "Climb", side: "right" }, { text: "Whisper", side: "right" },
      { text: "Launch", side: "right" }, { text: "Juggle", side: "right" }, { text: "Devour", side: "right" }
    ]
  },
  {
    left: "Hot", right: "Cold",
    words: [
      { text: "Lava", side: "left" }, { text: "Desert", side: "left" }, { text: "Sauna", side: "left" },
      { text: "Chili", side: "left" }, { text: "Ember", side: "left" }, { text: "Furnace", side: "left" },
      { text: "Glacier", side: "right" }, { text: "Arctic", side: "right" }, { text: "Frost", side: "right" },
      { text: "Blizzard", side: "right" }, { text: "Iceberg", side: "right" }, { text: "Tundra", side: "right" }
    ]
  },
  {
    left: "Music", right: "Sport",
    words: [
      { text: "Guitar", side: "left" }, { text: "Violin", side: "left" }, { text: "Drums", side: "left" },
      { text: "Trumpet", side: "left" }, { text: "Piano", side: "left" }, { text: "Flute", side: "left" },
      { text: "Tennis", side: "right" }, { text: "Boxing", side: "right" }, { text: "Soccer", side: "right" },
      { text: "Cricket", side: "right" }, { text: "Fencing", side: "right" }, { text: "Rugby", side: "right" }
    ]
  },
  {
    left: "Ocean", right: "Land",
    words: [
      { text: "Coral", side: "left" }, { text: "Whale", side: "left" }, { text: "Kelp", side: "left" },
      { text: "Squid", side: "left" }, { text: "Anchor", side: "left" }, { text: "Oyster", side: "left" },
      { text: "Canyon", side: "right" }, { text: "Prairie", side: "right" }, { text: "Forest", side: "right" },
      { text: "Cliff", side: "right" }, { text: "Dune", side: "right" }, { text: "Plateau", side: "right" }
    ]
  },
  {
    left: "Sweet", right: "Sour / Bitter",
    words: [
      { text: "Honey", side: "left" }, { text: "Candy", side: "left" }, { text: "Syrup", side: "left" },
      { text: "Cookie", side: "left" }, { text: "Caramel", side: "left" }, { text: "Fudge", side: "left" },
      { text: "Lemon", side: "right" }, { text: "Vinegar", side: "right" }, { text: "Grapefruit", side: "right" },
      { text: "Espresso", side: "right" }, { text: "Lime", side: "right" }, { text: "Horseradish", side: "right" }
    ]
  },
  {
    left: "Fiction", right: "Real Person",
    words: [
      { text: "Gandalf", side: "left" }, { text: "Sherlock", side: "left" }, { text: "Dracula", side: "left" },
      { text: "Hamlet", side: "left" }, { text: "Naruto", side: "left" }, { text: "Pikachu", side: "left" },
      { text: "Einstein", side: "right" }, { text: "Cleopatra", side: "right" }, { text: "Mozart", side: "right" },
      { text: "Tesla", side: "right" }, { text: "Galileo", side: "right" }, { text: "Darwin", side: "right" }
    ]
  },
  {
    left: "Liquid", right: "Solid",
    words: [
      { text: "Water", side: "left" }, { text: "Mercury", side: "left" }, { text: "Juice", side: "left" },
      { text: "Milk", side: "left" }, { text: "Gasoline", side: "left" }, { text: "Broth", side: "left" },
      { text: "Diamond", side: "right" }, { text: "Granite", side: "right" }, { text: "Iron", side: "right" },
      { text: "Marble", side: "right" }, { text: "Brick", side: "right" }, { text: "Crystal", side: "right" }
    ]
  },
  {
    left: "Ancient", right: "Modern",
    words: [
      { text: "Pyramid", side: "left" }, { text: "Chariot", side: "left" }, { text: "Scroll", side: "left" },
      { text: "Toga", side: "left" }, { text: "Catapult", side: "left" }, { text: "Sundial", side: "left" },
      { text: "Laptop", side: "right" }, { text: "Drone", side: "right" }, { text: "Selfie", side: "right" },
      { text: "WiFi", side: "right" }, { text: "Podcast", side: "right" }, { text: "Emoji", side: "right" }
    ]
  },
  {
    left: "Mammal", right: "Bird",
    words: [
      { text: "Bear", side: "left" }, { text: "Otter", side: "left" }, { text: "Moose", side: "left" },
      { text: "Badger", side: "left" }, { text: "Panda", side: "left" }, { text: "Fox", side: "left" },
      { text: "Eagle", side: "right" }, { text: "Parrot", side: "right" }, { text: "Penguin", side: "right" },
      { text: "Falcon", side: "right" }, { text: "Owl", side: "right" }, { text: "Pelican", side: "right" }
    ]
  },
  {
    left: "Breakfast", right: "Dinner",
    words: [
      { text: "Cereal", side: "left" }, { text: "Pancake", side: "left" }, { text: "Waffle", side: "left" },
      { text: "Oatmeal", side: "left" }, { text: "Toast", side: "left" }, { text: "Omelet", side: "left" },
      { text: "Steak", side: "right" }, { text: "Lasagna", side: "right" }, { text: "Roast", side: "right" },
      { text: "Lobster", side: "right" }, { text: "Risotto", side: "right" }, { text: "Casserole", side: "right" }
    ]
  },
  {
    left: "Verb", right: "Adjective",
    words: [
      { text: "Throw", side: "left" }, { text: "Swim", side: "left" }, { text: "Shout", side: "left" },
      { text: "Build", side: "left" }, { text: "Crawl", side: "left" }, { text: "Kneel", side: "left" },
      { text: "Tall", side: "right" }, { text: "Quiet", side: "right" }, { text: "Brave", side: "right" },
      { text: "Shiny", side: "right" }, { text: "Bitter", side: "right" }, { text: "Gentle", side: "right" }
    ]
  },
  {
    left: "Island", right: "Continent",
    words: [
      { text: "Hawaii", side: "left" }, { text: "Fiji", side: "left" }, { text: "Bali", side: "left" },
      { text: "Crete", side: "left" }, { text: "Jamaica", side: "left" }, { text: "Iceland", side: "left" },
      { text: "Africa", side: "right" }, { text: "Europe", side: "right" }, { text: "Asia", side: "right" },
      { text: "Antarctica", side: "right" }, { text: "Australia", side: "right" }, { text: "South America", side: "right" }
    ]
  },
  {
    left: "Soft", right: "Hard",
    words: [
      { text: "Pillow", side: "left" }, { text: "Cotton", side: "left" }, { text: "Silk", side: "left" },
      { text: "Feather", side: "left" }, { text: "Velvet", side: "left" }, { text: "Sponge", side: "left" },
      { text: "Steel", side: "right" }, { text: "Concrete", side: "right" }, { text: "Titanium", side: "right" },
      { text: "Bone", side: "right" }, { text: "Rock", side: "right" }, { text: "Hammer", side: "right" }
    ]
  },
  {
    left: "Round", right: "Square",
    words: [
      { text: "Ball", side: "left" }, { text: "Globe", side: "left" }, { text: "Wheel", side: "left" },
      { text: "Coin", side: "left" }, { text: "Bubble", side: "left" }, { text: "Orange", side: "left" },
      { text: "Dice", side: "right" }, { text: "Tile", side: "right" }, { text: "Box", side: "right" },
      { text: "Cube", side: "right" }, { text: "Waffle", side: "right" }, { text: "Frame", side: "right" }
    ]
  },
  {
    left: "Past", right: "Future",
    words: [
      { text: "Dinosaur", side: "left" }, { text: "Fossil", side: "left" }, { text: "Pharaoh", side: "left" },
      { text: "Knight", side: "left" }, { text: "Telegraph", side: "left" }, { text: "Quill", side: "left" },
      { text: "Robot", side: "right" }, { text: "Spaceship", side: "right" }, { text: "Hologram", side: "right" },
      { text: "Cyborg", side: "right" }, { text: "Teleport", side: "right" }, { text: "Jetpack", side: "right" }
    ]
  },
  {
    left: "Day", right: "Night",
    words: [
      { text: "Sunrise", side: "left" }, { text: "Sunshine", side: "left" }, { text: "Lunch", side: "left" },
      { text: "Noon", side: "left" }, { text: "Daydream", side: "left" }, { text: "Sunburn", side: "left" },
      { text: "Moonlight", side: "right" }, { text: "Stargazing", side: "right" }, { text: "Midnight", side: "right" },
      { text: "Owl", side: "right" }, { text: "Nightmare", side: "right" }, { text: "Dusk", side: "right" }
    ]
  },
  {
    left: "Summer", right: "Winter",
    words: [
      { text: "Sunscreen", side: "left" }, { text: "Swimsuit", side: "left" }, { text: "Sandal", side: "left" },
      { text: "Popsicle", side: "left" }, { text: "Lemonade", side: "left" }, { text: "Barbecue", side: "left" },
      { text: "Snowflake", side: "right" }, { text: "Mitten", side: "right" }, { text: "Fireplace", side: "right" },
      { text: "Scarf", side: "right" }, { text: "Cocoa", side: "right" }, { text: "Sled", side: "right" }
    ]
  },
  {
    left: "Mountain", right: "Valley",
    words: [
      { text: "Summit", side: "left" }, { text: "Peak", side: "left" }, { text: "Everest", side: "left" },
      { text: "Altitude", side: "left" }, { text: "Cliff", side: "left" }, { text: "Avalanche", side: "left" },
      { text: "Meadow", side: "right" }, { text: "Basin", side: "right" }, { text: "Ravine", side: "right" },
      { text: "Creek", side: "right" }, { text: "Gorge", side: "right" }, { text: "Lowland", side: "right" }
    ]
  },
  {
    left: "Fast", right: "Slow",
    words: [
      { text: "Cheetah", side: "left" }, { text: "Rocket", side: "left" }, { text: "Lightning", side: "left" },
      { text: "Falcon", side: "left" }, { text: "Bullet", side: "left" }, { text: "Ferrari", side: "left" },
      { text: "Snail", side: "right" }, { text: "Turtle", side: "right" }, { text: "Sloth", side: "right" },
      { text: "Glacier", side: "right" }, { text: "Molasses", side: "right" }, { text: "Tortoise", side: "right" }
    ]
  },
  {
    left: "Big", right: "Small",
    words: [
      { text: "Elephant", side: "left" }, { text: "Skyscraper", side: "left" }, { text: "Mountain", side: "left" },
      { text: "Stadium", side: "left" }, { text: "Sequoia", side: "left" }, { text: "Cathedral", side: "left" },
      { text: "Ant", side: "right" }, { text: "Pebble", side: "right" }, { text: "Acorn", side: "right" },
      { text: "Thimble", side: "right" }, { text: "Seed", side: "right" }, { text: "Ladybug", side: "right" }
    ]
  },
  {
    left: "Insect", right: "Fish",
    words: [
      { text: "Beetle", side: "left" }, { text: "Mosquito", side: "left" }, { text: "Ant", side: "left" },
      { text: "Dragonfly", side: "left" }, { text: "Moth", side: "left" }, { text: "Wasp", side: "left" },
      { text: "Salmon", side: "right" }, { text: "Tuna", side: "right" }, { text: "Trout", side: "right" },
      { text: "Cod", side: "right" }, { text: "Swordfish", side: "right" }, { text: "Sardine", side: "right" }
    ]
  },
  {
    left: "Tree", right: "Flower",
    words: [
      { text: "Oak", side: "left" }, { text: "Maple", side: "left" }, { text: "Pine", side: "left" },
      { text: "Birch", side: "left" }, { text: "Willow", side: "left" }, { text: "Redwood", side: "left" },
      { text: "Rose", side: "right" }, { text: "Tulip", side: "right" }, { text: "Daisy", side: "right" },
      { text: "Orchid", side: "right" }, { text: "Lily", side: "right" }, { text: "Sunflower", side: "right" }
    ]
  },
  {
    left: "Car", right: "Boat",
    words: [
      { text: "Highway", side: "left" }, { text: "Garage", side: "left" }, { text: "Tire", side: "left" },
      { text: "Steering", side: "left" }, { text: "Bumper", side: "left" }, { text: "Trunk", side: "left" },
      { text: "Sail", side: "right" }, { text: "Anchor", side: "right" }, { text: "Harbor", side: "right" },
      { text: "Rudder", side: "right" }, { text: "Deck", side: "right" }, { text: "Kayak", side: "right" }
    ]
  },
  {
    left: "Science", right: "Art",
    words: [
      { text: "Microscope", side: "left" }, { text: "Atom", side: "left" }, { text: "Beaker", side: "left" },
      { text: "Hypothesis", side: "left" }, { text: "Molecule", side: "left" }, { text: "Enzyme", side: "left" },
      { text: "Canvas", side: "right" }, { text: "Sculpture", side: "right" }, { text: "Palette", side: "right" },
      { text: "Easel", side: "right" }, { text: "Mural", side: "right" }, { text: "Sketch", side: "right" }
    ]
  },
  {
    left: "Tool", right: "Weapon",
    words: [
      { text: "Wrench", side: "left" }, { text: "Screwdriver", side: "left" }, { text: "Pliers", side: "left" },
      { text: "Chisel", side: "left" }, { text: "Drill", side: "left" }, { text: "Level", side: "left" },
      { text: "Sword", side: "right" }, { text: "Cannon", side: "right" }, { text: "Grenade", side: "right" },
      { text: "Dagger", side: "right" }, { text: "Missile", side: "right" }, { text: "Rifle", side: "right" }
    ]
  },
  {
    left: "Rain", right: "Drought",
    words: [
      { text: "Umbrella", side: "left" }, { text: "Puddle", side: "left" }, { text: "Monsoon", side: "left" },
      { text: "Flood", side: "left" }, { text: "Raincoat", side: "left" }, { text: "Thunder", side: "left" },
      { text: "Cactus", side: "right" }, { text: "Sahara", side: "right" }, { text: "Parched", side: "right" },
      { text: "Dustbowl", side: "right" }, { text: "Arid", side: "right" }, { text: "Cracked", side: "right" }
    ]
  },
  {
    left: "Clothing", right: "Furniture",
    words: [
      { text: "Jacket", side: "left" }, { text: "Sweater", side: "left" }, { text: "Pants", side: "left" },
      { text: "Blouse", side: "left" }, { text: "Skirt", side: "left" }, { text: "Vest", side: "left" },
      { text: "Sofa", side: "right" }, { text: "Dresser", side: "right" }, { text: "Bookshelf", side: "right" },
      { text: "Ottoman", side: "right" }, { text: "Nightstand", side: "right" }, { text: "Wardrobe", side: "right" }
    ]
  },
  {
    left: "Metal", right: "Wood",
    words: [
      { text: "Copper", side: "left" }, { text: "Bronze", side: "left" }, { text: "Aluminum", side: "left" },
      { text: "Silver", side: "left" }, { text: "Gold", side: "left" }, { text: "Zinc", side: "left" },
      { text: "Cedar", side: "right" }, { text: "Bamboo", side: "right" }, { text: "Mahogany", side: "right" },
      { text: "Teak", side: "right" }, { text: "Walnut", side: "right" }, { text: "Plywood", side: "right" }
    ]
  },
  {
    left: "Dance", right: "Martial Art",
    words: [
      { text: "Ballet", side: "left" }, { text: "Tango", side: "left" }, { text: "Salsa", side: "left" },
      { text: "Waltz", side: "left" }, { text: "Samba", side: "left" }, { text: "Polka", side: "left" },
      { text: "Karate", side: "right" }, { text: "Judo", side: "right" }, { text: "Taekwondo", side: "right" },
      { text: "Aikido", side: "right" }, { text: "Kendo", side: "right" }, { text: "Kung Fu", side: "right" }
    ]
  },
  {
    left: "Herb", right: "Spice",
    words: [
      { text: "Basil", side: "left" }, { text: "Parsley", side: "left" }, { text: "Mint", side: "left" },
      { text: "Cilantro", side: "left" }, { text: "Dill", side: "left" }, { text: "Thyme", side: "left" },
      { text: "Cinnamon", side: "right" }, { text: "Cumin", side: "right" }, { text: "Turmeric", side: "right" },
      { text: "Paprika", side: "right" }, { text: "Nutmeg", side: "right" }, { text: "Clove", side: "right" }
    ]
  },
  {
    left: "Desert", right: "Jungle",
    words: [
      { text: "Scorpion", side: "left" }, { text: "Camel", side: "left" }, { text: "Oasis", side: "left" },
      { text: "Sandstorm", side: "left" }, { text: "Mirage", side: "left" }, { text: "Dune", side: "left" },
      { text: "Vine", side: "right" }, { text: "Canopy", side: "right" }, { text: "Gorilla", side: "right" },
      { text: "Toucan", side: "right" }, { text: "Jaguar", side: "right" }, { text: "Orchid", side: "right" }
    ]
  },
  {
    left: "Bone", right: "Muscle",
    words: [
      { text: "Femur", side: "left" }, { text: "Skull", side: "left" }, { text: "Rib", side: "left" },
      { text: "Spine", side: "left" }, { text: "Tibia", side: "left" }, { text: "Pelvis", side: "left" },
      { text: "Bicep", side: "right" }, { text: "Tricep", side: "right" }, { text: "Hamstring", side: "right" },
      { text: "Deltoid", side: "right" }, { text: "Quadricep", side: "right" }, { text: "Calf", side: "right" }
    ]
  },
  {
    left: "King", right: "Queen",
    words: [
      { text: "Henry VIII", side: "left" }, { text: "Louis XIV", side: "left" }, { text: "Solomon", side: "left" },
      { text: "Arthur", side: "left" }, { text: "Macbeth", side: "left" }, { text: "Charlemagne", side: "left" },
      { text: "Victoria", side: "right" }, { text: "Elizabeth", side: "right" }, { text: "Nefertiti", side: "right" },
      { text: "Cleopatra", side: "right" }, { text: "Isabella", side: "right" }, { text: "Catherine", side: "right" }
    ]
  },
  {
    left: "River", right: "Lake",
    words: [
      { text: "Amazon", side: "left" }, { text: "Nile", side: "left" }, { text: "Danube", side: "left" },
      { text: "Thames", side: "left" }, { text: "Ganges", side: "left" }, { text: "Mississippi", side: "left" },
      { text: "Tahoe", side: "right" }, { text: "Michigan", side: "right" }, { text: "Baikal", side: "right" },
      { text: "Victoria", side: "right" }, { text: "Superior", side: "right" }, { text: "Geneva", side: "right" }
    ]
  },
  {
    left: "Loud", right: "Quiet",
    words: [
      { text: "Thunder", side: "left" }, { text: "Siren", side: "left" }, { text: "Explosion", side: "left" },
      { text: "Drums", side: "left" }, { text: "Jackhammer", side: "left" }, { text: "Foghorn", side: "left" },
      { text: "Whisper", side: "right" }, { text: "Library", side: "right" }, { text: "Feather", side: "right" },
      { text: "Snowfall", side: "right" }, { text: "Shadow", side: "right" }, { text: "Candle", side: "right" }
    ]
  },
  {
    left: "Cartoon", right: "Documentary",
    words: [
      { text: "SpongeBob", side: "left" }, { text: "Bugs Bunny", side: "left" }, { text: "Scooby", side: "left" },
      { text: "Garfield", side: "left" }, { text: "Shrek", side: "left" }, { text: "Nemo", side: "left" },
      { text: "Planet Earth", side: "right" }, { text: "Cosmos", side: "right" }, { text: "Blackfish", side: "right" },
      { text: "March of Penguins", side: "right" }, { text: "Blue Planet", side: "right" }, { text: "Free Solo", side: "right" }
    ]
  },
  {
    left: "Kitchen", right: "Bathroom",
    words: [
      { text: "Oven", side: "left" }, { text: "Blender", side: "left" }, { text: "Spatula", side: "left" },
      { text: "Toaster", side: "left" }, { text: "Fridge", side: "left" }, { text: "Whisk", side: "left" },
      { text: "Shower", side: "right" }, { text: "Toilet", side: "right" }, { text: "Towel", side: "right" },
      { text: "Bathtub", side: "right" }, { text: "Shampoo", side: "right" }, { text: "Mirror", side: "right" }
    ]
  },
  {
    left: "Hero", right: "Villain",
    words: [
      { text: "Superman", side: "left" }, { text: "Batman", side: "left" }, { text: "Wonder Woman", side: "left" },
      { text: "Spider-Man", side: "left" }, { text: "Thor", side: "left" }, { text: "Captain America", side: "left" },
      { text: "Joker", side: "right" }, { text: "Thanos", side: "right" }, { text: "Loki", side: "right" },
      { text: "Magneto", side: "right" }, { text: "Venom", side: "right" }, { text: "Ultron", side: "right" }
    ]
  },
  {
    left: "Book", right: "Movie",
    words: [
      { text: "Novel", side: "left" }, { text: "Chapter", side: "left" }, { text: "Bookmark", side: "left" },
      { text: "Hardcover", side: "left" }, { text: "Prologue", side: "left" }, { text: "Library", side: "left" },
      { text: "Theater", side: "right" }, { text: "Popcorn", side: "right" }, { text: "Trailer", side: "right" },
      { text: "Director", side: "right" }, { text: "Credits", side: "right" }, { text: "Screen", side: "right" }
    ]
  },
  {
    left: "Circle", right: "Triangle",
    words: [
      { text: "Ring", side: "left" }, { text: "Halo", side: "left" }, { text: "Clock", side: "left" },
      { text: "Donut", side: "left" }, { text: "Orbit", side: "left" }, { text: "Pizza", side: "left" },
      { text: "Pyramid", side: "right" }, { text: "Arrow", side: "right" }, { text: "Prism", side: "right" },
      { text: "Doritos", side: "right" }, { text: "Yield Sign", side: "right" }, { text: "Tent", side: "right" }
    ]
  },
  {
    left: "String Instrument", right: "Wind Instrument",
    words: [
      { text: "Cello", side: "left" }, { text: "Harp", side: "left" }, { text: "Banjo", side: "left" },
      { text: "Ukulele", side: "left" }, { text: "Viola", side: "left" }, { text: "Mandolin", side: "left" },
      { text: "Clarinet", side: "right" }, { text: "Tuba", side: "right" }, { text: "Oboe", side: "right" },
      { text: "Saxophone", side: "right" }, { text: "Harmonica", side: "right" }, { text: "Trombone", side: "right" }
    ]
  },
  {
    left: "Cheese", right: "Bread",
    words: [
      { text: "Cheddar", side: "left" }, { text: "Brie", side: "left" }, { text: "Gouda", side: "left" },
      { text: "Parmesan", side: "left" }, { text: "Mozzarella", side: "left" }, { text: "Feta", side: "left" },
      { text: "Baguette", side: "right" }, { text: "Sourdough", side: "right" }, { text: "Croissant", side: "right" },
      { text: "Pretzel", side: "right" }, { text: "Focaccia", side: "right" }, { text: "Brioche", side: "right" }
    ]
  },
  {
    left: "Dog Breed", right: "Cat Breed",
    words: [
      { text: "Labrador", side: "left" }, { text: "Poodle", side: "left" }, { text: "Beagle", side: "left" },
      { text: "Bulldog", side: "left" }, { text: "Husky", side: "left" }, { text: "Dalmatian", side: "left" },
      { text: "Siamese", side: "right" }, { text: "Persian", side: "right" }, { text: "Tabby", side: "right" },
      { text: "Sphynx", side: "right" }, { text: "Bengal", side: "right" }, { text: "Ragdoll", side: "right" }
    ]
  },
  {
    left: "Hat", right: "Shoe",
    words: [
      { text: "Beret", side: "left" }, { text: "Sombrero", side: "left" }, { text: "Fedora", side: "left" },
      { text: "Turban", side: "left" }, { text: "Beanie", side: "left" }, { text: "Crown", side: "left" },
      { text: "Sandal", side: "right" }, { text: "Sneaker", side: "right" }, { text: "Boot", side: "right" },
      { text: "Loafer", side: "right" }, { text: "Slipper", side: "right" }, { text: "Stiletto", side: "right" }
    ]
  },
  {
    left: "Castle", right: "Cabin",
    words: [
      { text: "Moat", side: "left" }, { text: "Throne", side: "left" }, { text: "Drawbridge", side: "left" },
      { text: "Dungeon", side: "left" }, { text: "Tower", side: "left" }, { text: "Rampart", side: "left" },
      { text: "Fireplace", side: "right" }, { text: "Log", side: "right" }, { text: "Porch", side: "right" },
      { text: "Chimney", side: "right" }, { text: "Lantern", side: "right" }, { text: "Axe", side: "right" }
    ]
  },
  {
    left: "Doctor", right: "Chef",
    words: [
      { text: "Stethoscope", side: "left" }, { text: "Scalpel", side: "left" }, { text: "Syringe", side: "left" },
      { text: "Bandage", side: "left" }, { text: "X-ray", side: "left" }, { text: "Thermometer", side: "left" },
      { text: "Spatula", side: "right" }, { text: "Skillet", side: "right" }, { text: "Apron", side: "right" },
      { text: "Recipe", side: "right" }, { text: "Oven", side: "right" }, { text: "Ladle", side: "right" }
    ]
  },
  {
    left: "Tea", right: "Coffee",
    words: [
      { text: "Earl Grey", side: "left" }, { text: "Matcha", side: "left" }, { text: "Chamomile", side: "left" },
      { text: "Oolong", side: "left" }, { text: "Green Tea", side: "left" }, { text: "Jasmine", side: "left" },
      { text: "Espresso", side: "right" }, { text: "Latte", side: "right" }, { text: "Cappuccino", side: "right" },
      { text: "Americano", side: "right" }, { text: "Mocha", side: "right" }, { text: "Macchiato", side: "right" }
    ]
  },
  {
    left: "Pirate", right: "Astronaut",
    words: [
      { text: "Treasure", side: "left" }, { text: "Parrot", side: "left" }, { text: "Plank", side: "left" },
      { text: "Cannon", side: "left" }, { text: "Compass", side: "left" }, { text: "Rum", side: "left" },
      { text: "Spacesuit", side: "right" }, { text: "Orbit", side: "right" }, { text: "Rocket", side: "right" },
      { text: "Helmet", side: "right" }, { text: "Gravity", side: "right" }, { text: "Module", side: "right" }
    ]
  },
  {
    left: "Heaven", right: "Hell",
    words: [
      { text: "Angel", side: "left" }, { text: "Halo", side: "left" }, { text: "Cloud", side: "left" },
      { text: "Wings", side: "left" }, { text: "Paradise", side: "left" }, { text: "Harp", side: "left" },
      { text: "Devil", side: "right" }, { text: "Pitchfork", side: "right" }, { text: "Inferno", side: "right" },
      { text: "Demon", side: "right" }, { text: "Brimstone", side: "right" }, { text: "Flames", side: "right" }
    ]
  },
  {
    left: "Circus", right: "Zoo",
    words: [
      { text: "Clown", side: "left" }, { text: "Trapeze", side: "left" }, { text: "Juggler", side: "left" },
      { text: "Ringmaster", side: "left" }, { text: "Acrobat", side: "left" }, { text: "Tightrope", side: "left" },
      { text: "Exhibit", side: "right" }, { text: "Enclosure", side: "right" }, { text: "Safari", side: "right" },
      { text: "Zookeeper", side: "right" }, { text: "Habitat", side: "right" }, { text: "Aquarium", side: "right" }
    ]
  },
  {
    left: "Write", right: "Erase",
    words: [
      { text: "Pen", side: "left" }, { text: "Pencil", side: "left" }, { text: "Marker", side: "left" },
      { text: "Crayon", side: "left" }, { text: "Chalk", side: "left" }, { text: "Ink", side: "left" },
      { text: "Eraser", side: "right" }, { text: "Delete", side: "right" }, { text: "Backspace", side: "right" },
      { text: "Undo", side: "right" }, { text: "Shredder", side: "right" }, { text: "Wipeout", side: "right" }
    ]
  },
  {
    left: "Painting", right: "Photograph",
    words: [
      { text: "Brush", side: "left" }, { text: "Canvas", side: "left" }, { text: "Watercolor", side: "left" },
      { text: "Oil Paint", side: "left" }, { text: "Palette", side: "left" }, { text: "Mona Lisa", side: "left" },
      { text: "Camera", side: "right" }, { text: "Lens", side: "right" }, { text: "Shutter", side: "right" },
      { text: "Flash", side: "right" }, { text: "Tripod", side: "right" }, { text: "Darkroom", side: "right" }
    ]
  },
  {
    left: "Baby", right: "Elder",
    words: [
      { text: "Crib", side: "left" }, { text: "Diaper", side: "left" }, { text: "Rattle", side: "left" },
      { text: "Stroller", side: "left" }, { text: "Pacifier", side: "left" }, { text: "Cradle", side: "left" },
      { text: "Cane", side: "right" }, { text: "Wrinkle", side: "right" }, { text: "Dentures", side: "right" },
      { text: "Retirement", side: "right" }, { text: "Grandchild", side: "right" }, { text: "Wisdom", side: "right" }
    ]
  },
  {
    left: "Glass", right: "Plastic",
    words: [
      { text: "Window", side: "left" }, { text: "Mirror", side: "left" }, { text: "Goblet", side: "left" },
      { text: "Vase", side: "left" }, { text: "Crystal", side: "left" }, { text: "Lens", side: "left" },
      { text: "Tupperware", side: "right" }, { text: "Straw", side: "right" }, { text: "Lego", side: "right" },
      { text: "Bucket", side: "right" }, { text: "Wrapper", side: "right" }, { text: "Bottle Cap", side: "right" }
    ]
  },
  {
    left: "Comedy", right: "Horror",
    words: [
      { text: "Laughter", side: "left" }, { text: "Punchline", side: "left" }, { text: "Sitcom", side: "left" },
      { text: "Blooper", side: "left" }, { text: "Slapstick", side: "left" }, { text: "Parody", side: "left" },
      { text: "Zombie", side: "right" }, { text: "Ghost", side: "right" }, { text: "Scream", side: "right" },
      { text: "Haunted", side: "right" }, { text: "Werewolf", side: "right" }, { text: "Nightmare", side: "right" }
    ]
  },
  {
    left: "Carnivore", right: "Herbivore",
    words: [
      { text: "Wolf", side: "left" }, { text: "Shark", side: "left" }, { text: "Lion", side: "left" },
      { text: "Hawk", side: "left" }, { text: "Crocodile", side: "left" }, { text: "Panther", side: "left" },
      { text: "Deer", side: "right" }, { text: "Cow", side: "right" }, { text: "Rabbit", side: "right" },
      { text: "Giraffe", side: "right" }, { text: "Koala", side: "right" }, { text: "Zebra", side: "right" }
    ]
  },
  {
    left: "Myth", right: "History",
    words: [
      { text: "Unicorn", side: "left" }, { text: "Dragon", side: "left" }, { text: "Minotaur", side: "left" },
      { text: "Phoenix", side: "left" }, { text: "Mermaid", side: "left" }, { text: "Cyclops", side: "left" },
      { text: "Titanic", side: "right" }, { text: "Columbus", side: "right" }, { text: "Napoleon", side: "right" },
      { text: "Pompeii", side: "right" }, { text: "Viking", side: "right" }, { text: "Samurai", side: "right" }
    ]
  },
  {
    left: "Soccer", right: "Basketball",
    words: [
      { text: "Goal", side: "left" }, { text: "Penalty", side: "left" }, { text: "Corner Kick", side: "left" },
      { text: "Offside", side: "left" }, { text: "Goalkeeper", side: "left" }, { text: "Header", side: "left" },
      { text: "Dunk", side: "right" }, { text: "Court", side: "right" }, { text: "Rebound", side: "right" },
      { text: "Free Throw", side: "right" }, { text: "Layup", side: "right" }, { text: "Backboard", side: "right" }
    ]
  },
  {
    left: "North America", right: "Asia",
    words: [
      { text: "Bald Eagle", side: "left" }, { text: "Grand Canyon", side: "left" }, { text: "Niagara", side: "left" },
      { text: "Yellowstone", side: "left" }, { text: "Maple Syrup", side: "left" }, { text: "Hollywood", side: "left" },
      { text: "Great Wall", side: "right" }, { text: "Taj Mahal", side: "right" }, { text: "Kimono", side: "right" },
      { text: "Bamboo", side: "right" }, { text: "Himalayas", side: "right" }, { text: "Chopsticks", side: "right" }
    ]
  },
  {
    left: "Hospital", right: "School",
    words: [
      { text: "Surgeon", side: "left" }, { text: "Nurse", side: "left" }, { text: "Ambulance", side: "left" },
      { text: "Ward", side: "left" }, { text: "Patient", side: "left" }, { text: "Pharmacy", side: "left" },
      { text: "Textbook", side: "right" }, { text: "Homework", side: "right" }, { text: "Classroom", side: "right" },
      { text: "Principal", side: "right" }, { text: "Recess", side: "right" }, { text: "Chalkboard", side: "right" }
    ]
  },
  {
    left: "Fly", right: "Dig",
    words: [
      { text: "Airplane", side: "left" }, { text: "Helicopter", side: "left" }, { text: "Kite", side: "left" },
      { text: "Balloon", side: "left" }, { text: "Parachute", side: "left" }, { text: "Glider", side: "left" },
      { text: "Shovel", side: "right" }, { text: "Tunnel", side: "right" }, { text: "Mine", side: "right" },
      { text: "Mole", side: "right" }, { text: "Burrow", side: "right" }, { text: "Excavator", side: "right" }
    ]
  }
];
