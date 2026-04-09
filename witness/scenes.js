const SCENES = [
  {
    id: "cafe_morning",
    title: "The Morning Cafe",
    text: "You step into Rosetti's Cafe at 7:15 on a quiet Wednesday morning. A barista with a green apron wipes down the espresso machine. Two customers sit near the window: a woman in a grey blazer reading the Financial Times, and a college student with earbuds typing on a laptop. The clock on the wall reads 7:15. A handwritten sign by the register says 'Cash Only \u2014 ATM Next Door.' The pastry case holds croissants, blueberry muffins, and a single slice of banana bread. Outside, a mail carrier pushes a cart down the sidewalk. The student pays for his Americano by tapping his credit card on the reader.",
    questions: [
      { q: "What color was the barista's apron?", options: ["Blue", "White", "Green", "Black"], answer: 2 },
      { q: "What newspaper was the woman reading?", options: ["Wall Street Journal", "Financial Times", "New York Times", "The Guardian"], answer: 1 },
      { q: "What time did the clock show?", options: ["7:30", "7:00", "7:15", "7:45"], answer: 2 },
      { q: "What was the last pastry mentioned?", options: ["Croissant", "Scone", "Blueberry muffin", "Banana bread"], answer: 3 },
      { q: "What was the mail carrier doing?", options: ["Sorting letters", "Pushing a cart", "Riding a bike", "Talking on phone"], answer: 1 }
    ],
    lieOptions: [
      "The sign said 'Cash Only' but the student paid by card.",
      "The barista was wiping down the espresso machine.",
      "A college student was typing on a laptop.",
      "The pastry case held croissants."
    ],
    lieCorrectIndex: 0,
    lieExplanation: "The sign says 'Cash Only' but the student tapped a credit card to pay \u2014 a direct contradiction."
  },
  {
    id: "gallery_opening",
    title: "The Gallery Opening",
    text: "The Whitmore Gallery is packed for the opening of Elena Voss's new exhibition. You count seven paintings on the north wall, each lit by its own spotlight. The largest piece \u2014 an oil painting of a shipwreck \u2014 dominates the center. A waiter circulates with champagne flutes on a silver tray. Elena herself stands near the entrance in a black dress, greeting guests. A man in a tweed jacket argues quietly with the curator near a bronze horse sculpture. You notice one painting near the corner is hung slightly crooked. The printed program in your hand lists six works in the exhibition.",
    questions: [
      { q: "Whose exhibition was it?", options: ["Anna Marsh", "Elena Voss", "Claire Whitmore", "Diana Quinn"], answer: 1 },
      { q: "What was the largest painting of?", options: ["A sunset", "A portrait", "A shipwreck", "A forest"], answer: 2 },
      { q: "What was the sculpture made of?", options: ["Marble", "Bronze", "Iron", "Wood"], answer: 1 },
      { q: "What was the waiter carrying?", options: ["Wine glasses", "Canap\u00e9s", "Champagne on a silver tray", "Beer bottles"], answer: 2 },
      { q: "What was wrong with one painting?", options: ["Torn canvas", "Missing label", "Hung crooked", "Wrong lighting"], answer: 2 }
    ],
    lieOptions: [
      "Elena wore a black dress.",
      "Seven paintings were on the wall but the program listed six works total.",
      "The waiter carried a silver tray.",
      "A man in tweed argued with the curator."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "You counted seven paintings, plus there was a sculpture \u2014 but the program only lists six total works. The numbers don't add up."
  },
  {
    id: "train_platform",
    title: "Platform Nine",
    text: "You stand on Platform 9 at Greenfield Station waiting for the 3:42 express. The digital board shows your train is delayed by twelve minutes. A busker plays violin near the staircase \u2014 something classical, maybe Vivaldi. A child drops an ice cream cone and starts crying. Her mother kneels to console her. Three pigeons peck at crumbs near a bench. The announcement crackles: 'The 3:42 to Hartfield is now expected at 3:51.' An older gentleman in a flat cap checks his pocket watch and mutters. A poster advertises a summer concert series beginning June 15th.",
    questions: [
      { q: "What platform were you on?", options: ["7", "9", "3", "12"], answer: 1 },
      { q: "What instrument was the busker playing?", options: ["Guitar", "Accordion", "Violin", "Saxophone"], answer: 2 },
      { q: "What did the child drop?", options: ["A toy", "A balloon", "A drink", "An ice cream cone"], answer: 3 },
      { q: "How many pigeons were there?", options: ["Two", "Three", "Four", "Five"], answer: 1 },
      { q: "What was the gentleman wearing?", options: ["A beret", "A flat cap", "A fedora", "A top hat"], answer: 1 }
    ],
    lieOptions: [
      "The busker was playing something classical.",
      "A twelve-minute delay from 3:42 would be 3:54, but the announcement said 3:51.",
      "Three pigeons pecked at crumbs.",
      "A poster advertised a concert series."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "A twelve-minute delay from 3:42 means the train should arrive at 3:54, but the announcement said 3:51 \u2014 that's only a nine-minute delay."
  },
  {
    id: "crime_scene",
    title: "The Crime Scene",
    text: "The apartment is on the fourth floor. Detective Hara ducks under the yellow tape. A shattered wine glass lies on the kitchen tile, red wine pooled around it. The victim's wallet sits open on the counter \u2014 forty dollars in cash still inside. The window facing the fire escape is latched shut from the inside. A laptop on the dining table shows a half-written email. Two coffee mugs sit on the table, both empty. The superintendent says the victim lived alone with no visitors today. Hara notices muddy boot prints leading from the fire escape window to the kitchen.",
    questions: [
      { q: "What floor was the apartment on?", options: ["Second", "Third", "Fourth", "Fifth"], answer: 2 },
      { q: "How much cash was in the wallet?", options: ["Twenty dollars", "Forty dollars", "Sixty dollars", "None"], answer: 1 },
      { q: "What was on the laptop?", options: ["A news article", "A half-written email", "A video call", "A spreadsheet"], answer: 1 },
      { q: "How many coffee mugs on the table?", options: ["One", "Two", "Three", "None"], answer: 1 },
      { q: "What was the detective's name?", options: ["Hayes", "Hara", "Harris", "Hart"], answer: 1 }
    ],
    lieOptions: [
      "The wallet still had forty dollars inside.",
      "The window was latched from the inside, but boot prints led from that window.",
      "Two coffee mugs sat on the table.",
      "Red wine was pooled around the glass."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "The window was latched shut from the inside, yet muddy boot prints lead from that same window. No one could enter through a window locked from within."
  },
  {
    id: "moonlit_garden",
    title: "The Moonlit Garden",
    text: "The garden party continues past midnight under a brilliant full moon. You check your phone: 12:34 AM. Strings of Edison bulbs crisscross above the lawn. A jazz trio plays trumpet, upright bass, and drums on a small wooden stage. The host, Margaret, raises a toast. Fireflies blink near the hedge. Four round tables seat the guests. A caterer refills the punch bowl. The temperature is a pleasant seventy degrees. The band shifts into a bossa nova number. You look down and notice your shadow stretching long across the grass from the full moon directly overhead.",
    questions: [
      { q: "What time was it on your phone?", options: ["11:45 PM", "12:34 AM", "1:15 AM", "12:00 AM"], answer: 1 },
      { q: "How many tables were on the lawn?", options: ["Three", "Four", "Five", "Six"], answer: 1 },
      { q: "Who was the host?", options: ["Martha", "Margaret", "Marion", "Madeline"], answer: 1 },
      { q: "What genre did the band shift into?", options: ["Swing", "Blues", "Bossa nova", "Reggae"], answer: 2 },
      { q: "What instruments did the trio play?", options: ["Trumpet, bass, piano", "Trumpet, bass, drums", "Sax, bass, drums", "Guitar, bass, drums"], answer: 1 }
    ],
    lieOptions: [
      "Fireflies blinked near the hedge.",
      "The temperature was seventy degrees.",
      "Your shadow stretched long with the moon directly overhead.",
      "Edison bulbs were strung above the lawn."
    ],
    lieCorrectIndex: 2,
    lieExplanation: "If the full moon is directly overhead, your shadow would be tiny and directly beneath you \u2014 not stretching long across the grass."
  },
  {
    id: "library_theft",
    title: "The Library Theft",
    text: "The rare books room at Ashwick Library has been breached. The glass display case is smashed \u2014 jagged shards cover the velvet lining inside. The stolen item: a first-edition copy of The Great Gatsby, valued at four hundred thousand dollars. Security guard Thomas says he stepped away for exactly five minutes at 2 AM. The security camera shows the hallway empty between 1:55 and 2:10 AM. The alarm was disabled from the inside panel using the correct four-digit code. A window in the reading room is open, curtains billowing. Thomas insists he was the only person in the building and no one else knows the alarm code.",
    questions: [
      { q: "What book was stolen?", options: ["Moby Dick", "The Great Gatsby", "To Kill a Mockingbird", "1984"], answer: 1 },
      { q: "How long did Thomas step away?", options: ["Three minutes", "Five minutes", "Ten minutes", "Two minutes"], answer: 1 },
      { q: "What lined the smashed case?", options: ["Silk", "Velvet", "Leather", "Cotton"], answer: 1 },
      { q: "What hours was the hallway empty?", options: ["1:50\u20132:05", "1:55\u20132:10", "2:00\u20132:15", "1:45\u20132:00"], answer: 1 },
      { q: "How many digits was the alarm code?", options: ["Three", "Four", "Five", "Six"], answer: 1 }
    ],
    lieOptions: [
      "The display case had a velvet lining.",
      "A window was open in the reading room.",
      "Thomas was the only one who knew the code, yet it was entered while he was away.",
      "The book was worth four hundred thousand dollars."
    ],
    lieCorrectIndex: 2,
    lieExplanation: "Thomas says no one else knows the alarm code and he was in the restroom \u2014 yet the alarm was disabled with the correct code. Someone else had to know it, or Thomas is lying."
  },
  {
    id: "dinner_party",
    title: "The Dinner Party",
    text: "You arrive at the Nakamura residence at precisely eight o'clock. Six place settings line the rectangular mahogany table \u2014 white porcelain with silver trim. The smell of roasted lamb fills the room. Your host, Kenji, pours red Bordeaux into each glass. His wife Aiko brings out a tureen of butternut squash soup. The grandfather clock in the hallway chimes eight times. There are five other guests besides yourself: two couples and a woman named Diana who came alone. A painting of a sailboat hangs above the mantle. Kenji mentions the lamb has been slow-roasting for six hours.",
    questions: [
      { q: "What wood was the table made of?", options: ["Oak", "Walnut", "Mahogany", "Cherry"], answer: 2 },
      { q: "What soup was served?", options: ["Tomato", "Butternut squash", "Minestrone", "Mushroom"], answer: 1 },
      { q: "What wine did Kenji pour?", options: ["Pinot Noir", "Merlot", "Red Bordeaux", "Cabernet"], answer: 2 },
      { q: "What was in the painting?", options: ["A mountain", "A horse", "A sailboat", "A garden"], answer: 2 },
      { q: "Who came alone?", options: ["Kenji", "Aiko", "Diana", "Marcus"], answer: 2 }
    ],
    lieOptions: [
      "The grandfather clock chimed eight times.",
      "Six place settings, but eight people were at dinner.",
      "Kenji poured red Bordeaux.",
      "The lamb had been roasting for six hours."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "Six place settings, but the hosts Kenji and Aiko plus you plus five guests equals eight people. That's two settings short."
  },
  {
    id: "beach_sunset",
    title: "The Beach at Sunset",
    text: "You sit on a wooden bench overlooking Crescent Beach at sunset. The sun dips toward the horizon in the east, painting the sky in streaks of orange and violet. Two surfers paddle out past the breakers. A golden retriever chases a tennis ball along the waterline. Three seagulls perch on a weathered wooden post. A vendor cart sells frozen lemonade and churros from the boardwalk behind you. The lifeguard tower is empty \u2014 a red flag flutters from its railing. The sound of a steel drum band drifts from somewhere down the beach. You feel warm sand between your toes.",
    questions: [
      { q: "What breed was the dog?", options: ["Labrador", "Golden retriever", "Poodle", "Beagle"], answer: 1 },
      { q: "What was the dog chasing?", options: ["A frisbee", "A stick", "A tennis ball", "A shoe"], answer: 2 },
      { q: "What color flag was on the tower?", options: ["Yellow", "Red", "Green", "White"], answer: 1 },
      { q: "How many seagulls were there?", options: ["Two", "Three", "Four", "Five"], answer: 1 },
      { q: "What did the vendor sell?", options: ["Hot dogs and soda", "Ice cream and pretzels", "Lemonade and churros", "Popcorn and cotton candy"], answer: 2 }
    ],
    lieOptions: [
      "Two surfers paddled past the breakers.",
      "The sun was setting in the east.",
      "A steel drum band played down the beach.",
      "The lifeguard tower was empty."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "The sun sets in the west, not the east. A sunset in the east is impossible."
  },
  {
    id: "magician_backstage",
    title: "The Magician's Dressing Room",
    text: "You are backstage at the Orpheum Theater in the dressing room of The Amazing Castellano. A top hat rests upside-down on the vanity, a white rabbit nibbling lettuce inside it. Three identical black capes hang from a rack on the wall. The mirror is surrounded by round light bulbs. A poster on the door reads 'Castellano \u2014 200 Nights of Wonder \u2014 Final Show Tonight.' A deck of cards sits fanned out on the table. His assistant Lina pokes her head in and says, 'Sold out again \u2014 see you tomorrow night for show two hundred and one!' A vase holds a bouquet of plastic roses. You spot a trapdoor handle in the floor.",
    questions: [
      { q: "What was in the top hat?", options: ["A dove", "A rabbit eating lettuce", "Nothing", "Silk scarves"], answer: 1 },
      { q: "How many capes hung on the rack?", options: ["Two", "Three", "Four", "Five"], answer: 1 },
      { q: "What was the assistant's name?", options: ["Lisa", "Luna", "Lina", "Lena"], answer: 2 },
      { q: "What kind of roses were in the vase?", options: ["Real red", "Dried", "Plastic", "Silk"], answer: 2 },
      { q: "What was hidden in the floor?", options: ["A safe", "A trapdoor handle", "A cable", "Nothing"], answer: 1 }
    ],
    lieOptions: [
      "Three identical capes hung on the wall.",
      "The poster said 'Final Show Tonight' but the assistant mentioned tomorrow's show.",
      "A deck of cards was fanned out on the table.",
      "Plastic roses were in a vase."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "The poster says 'Final Show Tonight' but Lina mentions tomorrow night's show \u2014 it can't be both the final performance and not the last one."
  },
  {
    id: "snowbound_cabin",
    title: "The Snowbound Cabin",
    text: "The cabin sits halfway up Mount Carrick, snowdrifts piled against every wall. Inside, a fire crackles in the stone fireplace. A bearskin rug covers the floor in front of it. Two pairs of snow boots stand by the front door \u2014 one large, one small. A kettle whistles on the gas stove. The bookshelf holds mostly paperback thrillers and a few field guides. Through the frosted window, a thermometer outside reads negative ten degrees Fahrenheit. A hummingbird feeder hangs from the porch railing, swaying in the wind. A note on the fridge says 'Back by 4 \u2014 went for firewood. \u2014 R.'",
    questions: [
      { q: "What kind of rug was by the fireplace?", options: ["Sheepskin", "Bearskin", "Woven wool", "Cowhide"], answer: 1 },
      { q: "How many pairs of boots by the door?", options: ["One", "Two", "Three", "Four"], answer: 1 },
      { q: "What temperature did the thermometer read?", options: ["-5\u00b0F", "-10\u00b0F", "0\u00b0F", "10\u00b0F"], answer: 1 },
      { q: "What kind of stove was in the kitchen?", options: ["Electric", "Wood-burning", "Gas", "Induction"], answer: 2 },
      { q: "Who signed the note?", options: ["R.", "M.", "J.", "T."], answer: 0 }
    ],
    lieOptions: [
      "A kettle whistled on the stove.",
      "A hummingbird feeder in negative-ten-degree winter weather.",
      "The bookshelf held paperback thrillers.",
      "Snowdrifts were piled against the walls."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "Hummingbirds cannot survive in negative-ten-degree weather. A hummingbird feeder in a snowbound winter cabin makes no sense."
  },
  {
    id: "courtroom",
    title: "The Courtroom",
    text: "The courtroom is tense. Judge Patricia Holloway presides from the bench, her brass nameplate visible. The defendant in a navy suit sits beside his attorney. Twelve jurors line the jury box \u2014 seven women and four men. The prosecutor approaches the witness stand carrying a manila folder. A court reporter types on a stenograph machine. Two bailiffs stand by the side doors. The witness \u2014 a nervous woman in her thirties \u2014 adjusts the microphone. The gallery holds perhaps forty spectators. An American flag stands in the corner.",
    questions: [
      { q: "What was the judge's last name?", options: ["Henderson", "Holloway", "Harrison", "Hamilton"], answer: 1 },
      { q: "What color was the defendant's suit?", options: ["Black", "Grey", "Navy", "Brown"], answer: 2 },
      { q: "What was the prosecutor carrying?", options: ["A briefcase", "A manila folder", "A tablet", "A binder"], answer: 1 },
      { q: "How many bailiffs were present?", options: ["One", "Two", "Three", "Four"], answer: 1 },
      { q: "About how many spectators?", options: ["Twenty", "Thirty", "Forty", "Fifty"], answer: 2 }
    ],
    lieOptions: [
      "The judge's nameplate was brass.",
      "Twelve jurors were stated, but seven women plus four men is only eleven.",
      "The prosecutor carried a manila folder.",
      "Two bailiffs stood by the doors."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "The scene says twelve jurors, but seven women plus four men equals only eleven. One juror is missing from the count."
  },
  {
    id: "submarine",
    title: "The Submarine",
    text: "You descend through the hatch of Research Vessel Nereid, a deep-sea submarine. The control room is cramped \u2014 four crew members sit at stations. Captain Torres checks the depth gauge: twenty-two hundred meters. Switches and dials line every surface. Through the viewport, floodlights illuminate the ocean floor \u2014 pale sand dotted with sea anemones and brittle stars. Sonar operator Patel reports a large object six hundred meters northwest. The air smells of machine oil and recycled oxygen. A school of tuna passes through the light beam. Torres orders a course change to investigate.",
    questions: [
      { q: "What was the submarine's name?", options: ["Neptune", "Nereid", "Nautilus", "Nimbus"], answer: 1 },
      { q: "What depth did the gauge show?", options: ["1,200 meters", "1,800 meters", "2,200 meters", "3,000 meters"], answer: 2 },
      { q: "How many crew in the control room?", options: ["Three", "Four", "Five", "Six"], answer: 1 },
      { q: "What did Patel report?", options: ["A whale", "A shipwreck", "A large object to the northwest", "Another submarine"], answer: 2 },
      { q: "What was the captain's name?", options: ["Taylor", "Torres", "Thomas", "Turner"], answer: 1 }
    ],
    lieOptions: [
      "Sea anemones were on the ocean floor.",
      "A school of tuna at twenty-two hundred meters deep.",
      "The air smelled of machine oil.",
      "Patel was the sonar operator."
    ],
    lieCorrectIndex: 1,
    lieExplanation: "Tuna are surface-dwelling fish found in the upper ocean, typically above 500 meters. A school of tuna at 2,200 meters depth is impossible."
  }
];
