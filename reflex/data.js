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
  }
];
