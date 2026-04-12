var SEQUENCES = [
  // ── Arithmetic ──────────────────────────────────────────
  { seq: [2, 4, 6, 8, '?'], answer: 10, choices: [9, 10, 12, 14], hint: 'Add 2 each time' },
  { seq: [5, 10, 15, 20, '?'], answer: 25, choices: [22, 24, 25, 30], hint: 'Add 5 each time' },
  { seq: [3, 7, 11, 15, '?'], answer: 19, choices: [17, 18, 19, 21], hint: 'Add 4 each time' },
  { seq: [100, 90, 80, 70, '?'], answer: 60, choices: [50, 55, 60, 65], hint: 'Subtract 10 each time' },
  { seq: [1, 4, 7, 10, '?'], answer: 13, choices: [11, 12, 13, 14], hint: 'Add 3 each time' },
  { seq: [50, 45, 40, 35, '?'], answer: 30, choices: [25, 28, 30, 32], hint: 'Subtract 5 each time' },
  { seq: [6, 12, 18, 24, '?'], answer: 30, choices: [28, 30, 32, 36], hint: 'Add 6 each time' },
  { seq: [99, 88, 77, 66, '?'], answer: 55, choices: [44, 50, 55, 60], hint: 'Subtract 11 each time' },
  { seq: [7, 14, 21, 28, '?'], answer: 35, choices: [32, 33, 35, 42], hint: 'Add 7 each time' },
  { seq: [1000, 900, 800, 700, '?'], answer: 600, choices: [500, 550, 600, 650], hint: 'Subtract 100 each time' },

  // ── Multiplication / Division ───────────────────────────
  { seq: [2, 4, 8, 16, '?'], answer: 32, choices: [24, 28, 32, 64], hint: 'Multiply by 2' },
  { seq: [3, 9, 27, 81, '?'], answer: 243, choices: [162, 216, 243, 324], hint: 'Multiply by 3' },
  { seq: [1, 5, 25, 125, '?'], answer: 625, choices: [250, 500, 625, 750], hint: 'Multiply by 5' },
  { seq: [10000, 1000, 100, 10, '?'], answer: 1, choices: [0, 1, 2, 5], hint: 'Divide by 10' },
  { seq: [1, 2, 4, 8, '?'], answer: 16, choices: [10, 12, 14, 16], hint: 'Double each time' },
  { seq: [256, 128, 64, 32, '?'], answer: 16, choices: [8, 12, 16, 24], hint: 'Divide by 2' },
  { seq: [4, 12, 36, 108, '?'], answer: 324, choices: [216, 288, 324, 432], hint: 'Multiply by 3' },
  { seq: [2, 6, 18, 54, '?'], answer: 162, choices: [108, 135, 162, 216], hint: 'Multiply by 3' },

  // ── Squares & Cubes ─────────────────────────────────────
  { seq: [1, 4, 9, 16, '?'], answer: 25, choices: [20, 24, 25, 36], hint: 'Perfect squares: 1\u00B2, 2\u00B2, 3\u00B2\u2026' },
  { seq: [1, 8, 27, 64, '?'], answer: 125, choices: [100, 120, 125, 216], hint: 'Perfect cubes: 1\u00B3, 2\u00B3, 3\u00B3\u2026' },
  { seq: [4, 9, 16, 25, '?'], answer: 36, choices: [30, 34, 36, 49], hint: 'Squares of 2, 3, 4, 5\u2026' },
  { seq: [36, 49, 64, 81, '?'], answer: 100, choices: [90, 96, 100, 121], hint: 'Squares of 6, 7, 8, 9\u2026' },
  { seq: [1, 4, 16, 64, '?'], answer: 256, choices: [128, 192, 256, 512], hint: 'Multiply by 4' },

  // ── Fibonacci-style ─────────────────────────────────────
  { seq: [1, 1, 2, 3, '?'], answer: 5, choices: [4, 5, 6, 7], hint: 'Each number is the sum of the two before it' },
  { seq: [1, 1, 2, 3, 5, 8, '?'], answer: 13, choices: [10, 11, 13, 15], hint: 'Add the two previous numbers' },
  { seq: [2, 2, 4, 6, '?'], answer: 10, choices: [8, 9, 10, 12], hint: 'Each = sum of previous two' },
  { seq: [1, 3, 4, 7, '?'], answer: 11, choices: [9, 10, 11, 14], hint: 'Each = sum of previous two' },
  { seq: [3, 5, 8, 13, '?'], answer: 21, choices: [18, 19, 21, 26], hint: 'Each = sum of previous two' },

  // ── Alternating / Two-rule ──────────────────────────────
  { seq: [1, 3, 2, 4, 3, 5, '?'], answer: 4, choices: [3, 4, 6, 7], hint: 'Two interleaved sequences: +2, +2, +2 and +2, +2, +2' },
  { seq: [1, 10, 2, 20, 3, '?'], answer: 30, choices: [4, 15, 30, 40], hint: 'Alternating: count up, then \u00D710' },
  { seq: [5, 1, 10, 2, 15, '?'], answer: 3, choices: [3, 4, 20, 25], hint: 'Two patterns alternate: +5, +5 and +1, +1' },
  { seq: [2, 3, 4, 6, 6, '?'], answer: 9, choices: [7, 8, 9, 12], hint: 'Odd positions +2, even positions +3' },
  { seq: [1, 2, 2, 4, 3, '?'], answer: 6, choices: [4, 5, 6, 8], hint: 'Odd positions +1, even positions \u00D72' },

  // ── Triangular / Polygonal ──────────────────────────────
  { seq: [1, 3, 6, 10, '?'], answer: 15, choices: [12, 14, 15, 21], hint: 'Triangular numbers: +2, +3, +4\u2026' },
  { seq: [1, 3, 6, 10, 15, '?'], answer: 21, choices: [18, 20, 21, 28], hint: 'Add +5 this time' },
  { seq: [0, 1, 3, 6, 10, '?'], answer: 15, choices: [13, 14, 15, 20], hint: 'Differences increase by 1' },

  // ── Increasing differences ──────────────────────────────
  { seq: [2, 3, 5, 8, '?'], answer: 12, choices: [10, 11, 12, 13], hint: 'Differences: +1, +2, +3, +4' },
  { seq: [1, 2, 4, 7, 11, '?'], answer: 16, choices: [14, 15, 16, 18], hint: 'Add +1, +2, +3, +4, +5' },
  { seq: [3, 4, 6, 9, 13, '?'], answer: 18, choices: [16, 17, 18, 20], hint: 'Differences: +1, +2, +3, +4, +5' },
  { seq: [5, 6, 8, 11, 15, '?'], answer: 20, choices: [18, 19, 20, 22], hint: 'Differences grow by 1' },
  { seq: [10, 11, 13, 16, 20, '?'], answer: 25, choices: [23, 24, 25, 30], hint: 'Add +1, +2, +3, +4, +5' },

  // ── Primes ──────────────────────────────────────────────
  { seq: [2, 3, 5, 7, '?'], answer: 11, choices: [9, 10, 11, 13], hint: 'Prime numbers in order' },
  { seq: [11, 13, 17, 19, '?'], answer: 23, choices: [21, 22, 23, 29], hint: 'Consecutive primes' },
  { seq: [29, 31, 37, 41, '?'], answer: 43, choices: [42, 43, 45, 47], hint: 'Consecutive primes' },

  // ── Powers of N ─────────────────────────────────────────
  { seq: [1, 2, 4, 8, 16, '?'], answer: 32, choices: [24, 30, 32, 64], hint: 'Powers of 2' },
  { seq: [1, 3, 9, 27, '?'], answer: 81, choices: [54, 72, 81, 108], hint: 'Powers of 3' },
  { seq: [1, 4, 16, 64, '?'], answer: 256, choices: [128, 192, 256, 512], hint: 'Powers of 4' },
  { seq: [1, 5, 25, 125, '?'], answer: 625, choices: [250, 500, 625, 1000], hint: 'Powers of 5' },

  // ── Digit patterns ──────────────────────────────────────
  { seq: [11, 22, 33, 44, '?'], answer: 55, choices: [50, 55, 66, 88], hint: 'Repeating digits' },
  { seq: [12, 23, 34, 45, '?'], answer: 56, choices: [54, 55, 56, 67], hint: 'Both digits go up by 1' },
  { seq: [10, 21, 32, 43, '?'], answer: 54, choices: [50, 52, 54, 64], hint: 'Add 11 each time' },
  { seq: [13, 26, 39, 52, '?'], answer: 65, choices: [60, 63, 65, 78], hint: 'Multiples of 13' },

  // ── Subtract with pattern ───────────────────────────────
  { seq: [100, 97, 91, 82, '?'], answer: 70, choices: [68, 70, 73, 75], hint: 'Subtract 3, 6, 9, 12' },
  { seq: [80, 77, 73, 68, '?'], answer: 62, choices: [60, 62, 64, 65], hint: 'Subtract 3, 4, 5, 6' },
  { seq: [60, 58, 54, 48, '?'], answer: 40, choices: [36, 38, 40, 42], hint: 'Subtract 2, 4, 6, 8' },

  // ── Add then multiply ──────────────────────────────────
  { seq: [1, 2, 6, 7, 21, '?'], answer: 22, choices: [22, 42, 63, 84], hint: 'Alternate: +1, then \u00D73' },
  { seq: [2, 4, 5, 10, 11, '?'], answer: 22, choices: [12, 15, 22, 33], hint: 'Alternate: \u00D72, then +1' },
  { seq: [3, 6, 8, 16, 18, '?'], answer: 36, choices: [20, 27, 36, 54], hint: 'Alternate: \u00D72, then +2' },

  // ── Mixed medium ────────────────────────────────────────
  { seq: [1, 1, 2, 6, 24, '?'], answer: 120, choices: [48, 96, 120, 144], hint: 'Factorials: 1!, 1!, 2!, 3!, 4!, 5!' },
  { seq: [0, 1, 1, 2, 3, 5, '?'], answer: 8, choices: [6, 7, 8, 10], hint: 'Fibonacci starting from 0' },
  { seq: [2, 5, 11, 23, '?'], answer: 47, choices: [35, 46, 47, 48], hint: 'Double and add 1' },
  { seq: [1, 3, 7, 15, '?'], answer: 31, choices: [23, 27, 31, 32], hint: 'Double and add 1' },
  { seq: [3, 5, 9, 17, '?'], answer: 33, choices: [25, 29, 33, 34], hint: 'Double and subtract 1' },
  { seq: [1, 2, 5, 14, '?'], answer: 41, choices: [28, 35, 41, 42], hint: 'Multiply by 3 and subtract 1' },

  // ── Harder ──────────────────────────────────────────────
  { seq: [2, 3, 5, 9, 17, '?'], answer: 33, choices: [25, 30, 33, 34], hint: 'Differences double: +1, +2, +4, +8, +16' },
  { seq: [1, 4, 13, 40, '?'], answer: 121, choices: [80, 100, 121, 160], hint: 'Multiply by 3 and add 1' },
  { seq: [0, 3, 8, 15, 24, '?'], answer: 35, choices: [30, 33, 35, 48], hint: 'n\u00B2 \u2212 1 for n = 1, 2, 3\u2026' },
  { seq: [2, 6, 12, 20, 30, '?'], answer: 42, choices: [36, 40, 42, 56], hint: 'n\u00D7(n+1) for n = 1, 2, 3\u2026' },
  { seq: [1, 2, 6, 24, '?'], answer: 120, choices: [48, 72, 120, 240], hint: 'Multiply by 2, 3, 4, 5 (factorials)' },
  { seq: [4, 7, 13, 25, '?'], answer: 49, choices: [37, 43, 49, 50], hint: 'Differences double: +3, +6, +12, +24' },
  { seq: [1, 4, 10, 22, '?'], answer: 46, choices: [34, 40, 44, 46], hint: 'Differences: +3, +6, +12, +24' },
  { seq: [5, 8, 14, 26, '?'], answer: 50, choices: [38, 44, 50, 52], hint: 'Add +3, +6, +12, +24' },
  { seq: [2, 5, 14, 41, '?'], answer: 122, choices: [82, 100, 122, 164], hint: 'Multiply by 3 and subtract 1' },
  { seq: [1, 3, 7, 13, 21, '?'], answer: 31, choices: [27, 29, 31, 33], hint: 'Differences: +2, +4, +6, +8, +10' }
];
