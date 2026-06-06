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
  { seq: [4, 16, 64, 256, '?'], answer: 1024, choices: [512, 768, 1024, 2048], hint: 'Powers of 4 (shifted)' },
  { seq: [5, 25, 125, 625, '?'], answer: 3125, choices: [1250, 2500, 3125, 5000], hint: 'Powers of 5 (shifted)' },

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
  { seq: [1, 3, 7, 13, 21, '?'], answer: 31, choices: [27, 29, 31, 33], hint: 'Differences: +2, +4, +6, +8, +10' },

  // ── Arithmetic (additional) ─────────────────────────────
  { seq: [8, 16, 24, 32, '?'], answer: 40, choices: [36, 38, 40, 48], hint: 'Add 8 each time' },
  { seq: [9, 18, 27, 36, '?'], answer: 45, choices: [40, 42, 45, 54], hint: 'Add 9 each time' },
  { seq: [15, 30, 45, 60, '?'], answer: 75, choices: [70, 72, 75, 90], hint: 'Add 15 each time' },
  { seq: [11, 22, 33, 44, 55, '?'], answer: 66, choices: [60, 64, 66, 77], hint: 'Add 11 each time' },
  { seq: [4, 8, 12, 16, '?'], answer: 20, choices: [18, 19, 20, 24], hint: 'Add 4 each time' },
  { seq: [25, 50, 75, 100, '?'], answer: 125, choices: [110, 120, 125, 150], hint: 'Add 25 each time' },
  { seq: [200, 175, 150, 125, '?'], answer: 100, choices: [75, 90, 100, 110], hint: 'Subtract 25 each time' },
  { seq: [13, 26, 39, 52, 65, '?'], answer: 78, choices: [72, 76, 78, 91], hint: 'Add 13 each time' },
  { seq: [17, 34, 51, 68, '?'], answer: 85, choices: [75, 80, 85, 102], hint: 'Add 17 each time' },
  { seq: [1, 8, 15, 22, '?'], answer: 29, choices: [27, 28, 29, 30], hint: 'Add 7 each time' },
  { seq: [40, 36, 32, 28, '?'], answer: 24, choices: [20, 22, 24, 26], hint: 'Subtract 4 each time' },
  { seq: [120, 110, 100, 90, '?'], answer: 80, choices: [70, 75, 80, 85], hint: 'Subtract 10 each time' },
  { seq: [3, 6, 9, 12, 15, '?'], answer: 18, choices: [16, 17, 18, 21], hint: 'Add 3 each time' },
  { seq: [14, 28, 42, 56, '?'], answer: 70, choices: [62, 68, 70, 84], hint: 'Add 14 each time' },
  { seq: [19, 38, 57, 76, '?'], answer: 95, choices: [85, 90, 95, 114], hint: 'Add 19 each time' },

  // ── Geometric / Multiplication (additional) ─────────────
  { seq: [5, 10, 20, 40, '?'], answer: 80, choices: [60, 70, 80, 160], hint: 'Multiply by 2' },
  { seq: [7, 14, 28, 56, '?'], answer: 112, choices: [84, 98, 112, 168], hint: 'Multiply by 2' },
  { seq: [6, 18, 54, 162, '?'], answer: 486, choices: [324, 432, 486, 648], hint: 'Multiply by 3' },
  { seq: [2, 10, 50, 250, '?'], answer: 1250, choices: [500, 750, 1250, 1500], hint: 'Multiply by 5' },
  { seq: [3, 12, 48, 192, '?'], answer: 768, choices: [384, 576, 768, 960], hint: 'Multiply by 4' },
  { seq: [1, 6, 36, 216, '?'], answer: 1296, choices: [648, 864, 1296, 1728], hint: 'Multiply by 6' },
  { seq: [10, 20, 40, 80, '?'], answer: 160, choices: [100, 120, 160, 320], hint: 'Multiply by 2' },
  { seq: [1024, 512, 256, 128, '?'], answer: 64, choices: [32, 48, 64, 96], hint: 'Divide by 2' },
  { seq: [729, 243, 81, 27, '?'], answer: 9, choices: [3, 6, 9, 18], hint: 'Divide by 3' },
  { seq: [625, 125, 25, 5, '?'], answer: 1, choices: [0, 1, 2, 3], hint: 'Divide by 5' },
  { seq: [1, 7, 49, 343, '?'], answer: 2401, choices: [686, 1372, 2401, 3430], hint: 'Multiply by 7' },
  { seq: [3, 6, 12, 24, '?'], answer: 48, choices: [36, 42, 48, 96], hint: 'Multiply by 2' },
  { seq: [8, 24, 72, 216, '?'], answer: 648, choices: [432, 576, 648, 864], hint: 'Multiply by 3' },
  { seq: [5, 15, 45, 135, '?'], answer: 405, choices: [270, 360, 405, 540], hint: 'Multiply by 3' },
  { seq: [2, 8, 32, 128, '?'], answer: 512, choices: [256, 384, 512, 1024], hint: 'Multiply by 4' },

  // ── Squares & Cubes (additional) ────────────────────────
  { seq: [16, 25, 36, 49, '?'], answer: 64, choices: [56, 60, 64, 81], hint: 'Squares of 4, 5, 6, 7, 8' },
  { seq: [64, 81, 100, 121, '?'], answer: 144, choices: [132, 140, 144, 169], hint: 'Squares of 8, 9, 10, 11, 12' },
  { seq: [121, 144, 169, 196, '?'], answer: 225, choices: [210, 220, 225, 256], hint: 'Squares of 11, 12, 13, 14, 15' },
  { seq: [8, 27, 64, 125, '?'], answer: 216, choices: [150, 196, 216, 256], hint: 'Cubes of 2, 3, 4, 5, 6' },
  { seq: [125, 216, 343, 512, '?'], answer: 729, choices: [625, 700, 729, 1000], hint: 'Cubes of 5, 6, 7, 8, 9' },
  { seq: [1, 4, 9, 16, 25, '?'], answer: 36, choices: [30, 32, 36, 49], hint: 'Perfect squares' },
  { seq: [9, 16, 25, 36, '?'], answer: 49, choices: [42, 45, 49, 64], hint: 'Squares of 3, 4, 5, 6, 7' },
  { seq: [25, 36, 49, 64, '?'], answer: 81, choices: [72, 75, 81, 100], hint: 'Squares of 5, 6, 7, 8, 9' },
  { seq: [100, 121, 144, 169, '?'], answer: 196, choices: [180, 190, 196, 225], hint: 'Squares of 10, 11, 12, 13, 14' },
  { seq: [1, 8, 27, 64, 125, '?'], answer: 216, choices: [150, 200, 216, 250], hint: 'Perfect cubes' },

  // ── Fibonacci-style (additional) ────────────────────────
  { seq: [2, 1, 3, 4, 7, '?'], answer: 11, choices: [9, 10, 11, 14], hint: 'Each = sum of previous two' },
  { seq: [5, 5, 10, 15, '?'], answer: 25, choices: [20, 22, 25, 30], hint: 'Each = sum of previous two' },
  { seq: [1, 4, 5, 9, '?'], answer: 14, choices: [11, 13, 14, 18], hint: 'Each = sum of previous two' },
  { seq: [3, 7, 10, 17, '?'], answer: 27, choices: [24, 25, 27, 34], hint: 'Each = sum of previous two' },
  { seq: [2, 5, 7, 12, '?'], answer: 19, choices: [17, 18, 19, 24], hint: 'Each = sum of previous two' },
  { seq: [4, 4, 8, 12, '?'], answer: 20, choices: [16, 18, 20, 24], hint: 'Each = sum of previous two' },
  { seq: [1, 6, 7, 13, '?'], answer: 20, choices: [17, 19, 20, 26], hint: 'Each = sum of previous two' },
  { seq: [2, 3, 5, 8, 13, '?'], answer: 21, choices: [16, 18, 21, 26], hint: 'Fibonacci pattern starting from 2, 3' },
  { seq: [10, 10, 20, 30, '?'], answer: 50, choices: [40, 45, 50, 60], hint: 'Each = sum of previous two' },
  { seq: [1, 2, 3, 5, 8, '?'], answer: 13, choices: [10, 11, 13, 16], hint: 'Each = sum of previous two' },

  // ── Alternating / Two-rule (additional) ─────────────────
  { seq: [1, 10, 3, 30, 5, '?'], answer: 50, choices: [7, 15, 50, 70], hint: 'Alternate: odd positions +2, even positions ×10' },
  { seq: [2, 5, 4, 10, 6, '?'], answer: 15, choices: [8, 12, 15, 20], hint: 'Two sequences alternate: +2 and +5' },
  { seq: [1, 100, 2, 200, 3, '?'], answer: 300, choices: [4, 150, 300, 400], hint: 'Alternate: count up, then ×100' },
  { seq: [10, 1, 20, 2, 30, '?'], answer: 3, choices: [3, 4, 40, 50], hint: 'Two sequences: +10 and +1' },
  { seq: [3, 2, 6, 4, 9, '?'], answer: 6, choices: [6, 8, 12, 18], hint: 'Odd positions +3, even positions +2' },
  { seq: [1, 4, 2, 8, 3, '?'], answer: 12, choices: [4, 9, 12, 16], hint: 'Alternate: +1 and ×4' },
  { seq: [5, 2, 10, 4, 15, '?'], answer: 6, choices: [6, 8, 20, 30], hint: 'Two sequences: +5 and +2' },
  { seq: [100, 1, 90, 2, 80, '?'], answer: 3, choices: [3, 4, 70, 75], hint: 'Alternate: −10 and +1' },
  { seq: [2, 3, 4, 9, 6, '?'], answer: 27, choices: [12, 18, 27, 36], hint: 'Odd positions +2, even positions ×3' },
  { seq: [1, 1, 2, 4, 3, '?'], answer: 9, choices: [5, 6, 9, 12], hint: 'Odd positions +1, even positions squared' },

  // ── Triangular / Polygonal (additional) ─────────────────
  { seq: [3, 6, 10, 15, '?'], answer: 21, choices: [18, 20, 21, 25], hint: 'Triangular numbers: +3, +4, +5, +6' },
  { seq: [6, 10, 15, 21, '?'], answer: 28, choices: [24, 26, 28, 36], hint: 'Triangular numbers' },
  { seq: [10, 15, 21, 28, '?'], answer: 36, choices: [32, 34, 36, 45], hint: 'Triangular numbers' },
  { seq: [15, 21, 28, 36, '?'], answer: 45, choices: [40, 42, 45, 55], hint: 'Triangular numbers' },
  { seq: [1, 5, 12, 22, '?'], answer: 35, choices: [28, 32, 35, 40], hint: 'Pentagonal numbers' },
  { seq: [1, 6, 15, 28, '?'], answer: 45, choices: [36, 40, 45, 55], hint: 'Hexagonal numbers' },
  { seq: [21, 28, 36, 45, '?'], answer: 55, choices: [50, 52, 55, 66], hint: 'Triangular numbers continuing' },

  // ── Increasing differences (additional) ─────────────────
  { seq: [1, 3, 7, 13, '?'], answer: 21, choices: [17, 19, 21, 25], hint: 'Differences: +2, +4, +6, +8' },
  { seq: [4, 5, 8, 13, 20, '?'], answer: 29, choices: [25, 27, 29, 33], hint: 'Differences: +1, +3, +5, +7, +9' },
  { seq: [2, 4, 8, 14, 22, '?'], answer: 32, choices: [28, 30, 32, 36], hint: 'Differences: +2, +4, +6, +8, +10' },
  { seq: [0, 2, 6, 12, 20, '?'], answer: 30, choices: [26, 28, 30, 36], hint: 'Differences: +2, +4, +6, +8, +10' },
  { seq: [7, 8, 11, 16, 23, '?'], answer: 32, choices: [28, 30, 32, 35], hint: 'Differences: +1, +3, +5, +7, +9' },
  { seq: [1, 5, 13, 25, '?'], answer: 41, choices: [33, 37, 41, 49], hint: 'Differences: +4, +8, +12, +16' },
  { seq: [3, 5, 10, 18, 29, '?'], answer: 43, choices: [37, 40, 43, 48], hint: 'Differences: +2, +5, +8, +11, +14' },
  { seq: [0, 1, 4, 9, 16, '?'], answer: 25, choices: [20, 23, 25, 30], hint: 'Perfect squares: 0², 1², 2², 3², 4², 5²' },
  { seq: [1, 2, 5, 10, 17, '?'], answer: 26, choices: [22, 24, 26, 30], hint: 'n² + 1 for n = 0, 1, 2, 3, 4, 5' },
  { seq: [2, 6, 14, 26, '?'], answer: 42, choices: [34, 38, 42, 50], hint: 'Differences: +4, +8, +12, +16' },

  // ── Primes (additional) ─────────────────────────────────
  { seq: [2, 3, 5, 7, 11, '?'], answer: 13, choices: [12, 13, 14, 15], hint: 'Consecutive primes' },
  { seq: [7, 11, 13, 17, '?'], answer: 19, choices: [18, 19, 20, 23], hint: 'Consecutive primes' },
  { seq: [17, 19, 23, 29, '?'], answer: 31, choices: [30, 31, 33, 37], hint: 'Consecutive primes' },
  { seq: [37, 41, 43, 47, '?'], answer: 53, choices: [49, 51, 53, 59], hint: 'Consecutive primes' },
  { seq: [43, 47, 53, 59, '?'], answer: 61, choices: [60, 61, 63, 67], hint: 'Consecutive primes' },
  { seq: [53, 59, 61, 67, '?'], answer: 71, choices: [69, 70, 71, 73], hint: 'Consecutive primes' },
  { seq: [59, 61, 67, 71, '?'], answer: 73, choices: [72, 73, 75, 79], hint: 'Consecutive primes' },
  { seq: [67, 71, 73, 79, '?'], answer: 83, choices: [80, 81, 83, 89], hint: 'Consecutive primes' },
  { seq: [4, 6, 10, 14, '?'], answer: 22, choices: [18, 20, 22, 26], hint: 'Twice the primes: 2×2, 2×3, 2×5, 2×7, 2×11' },
  { seq: [3, 5, 7, 11, 13, '?'], answer: 17, choices: [15, 16, 17, 19], hint: 'Primes starting from 3' },

  // ── Powers of N (additional) ────────────────────────────
  { seq: [6, 36, 216, 1296, '?'], answer: 7776, choices: [2592, 5184, 7776, 10368], hint: 'Multiply by 6' },
  { seq: [1, 8, 64, 512, '?'], answer: 4096, choices: [1024, 2048, 4096, 8192], hint: 'Powers of 8' },
  { seq: [1, 9, 81, 729, '?'], answer: 6561, choices: [2187, 4374, 6561, 8748], hint: 'Powers of 9' },
  { seq: [1, 10, 100, 1000, '?'], answer: 10000, choices: [2000, 5000, 10000, 100000], hint: 'Powers of 10' },
  { seq: [2, 4, 8, 16, 32, '?'], answer: 64, choices: [48, 56, 64, 128], hint: 'Powers of 2' },
  { seq: [3, 9, 27, 81, 243, '?'], answer: 729, choices: [486, 648, 729, 972], hint: 'Powers of 3' },

  // ── Digit patterns (additional) ─────────────────────────
  { seq: [21, 32, 43, 54, '?'], answer: 65, choices: [60, 63, 65, 76], hint: 'Add 11 each time' },
  { seq: [111, 222, 333, 444, '?'], answer: 555, choices: [500, 550, 555, 666], hint: 'Triple repeating digits' },
  { seq: [12, 24, 36, 48, '?'], answer: 60, choices: [54, 58, 60, 72], hint: 'Multiples of 12' },
  { seq: [15, 30, 45, 60, 75, '?'], answer: 90, choices: [80, 85, 90, 105], hint: 'Multiples of 15' },
  { seq: [16, 32, 48, 64, '?'], answer: 80, choices: [72, 76, 80, 96], hint: 'Multiples of 16' },
  { seq: [18, 36, 54, 72, '?'], answer: 90, choices: [80, 84, 90, 108], hint: 'Multiples of 18' },
  { seq: [10, 20, 30, 40, 50, '?'], answer: 60, choices: [55, 58, 60, 70], hint: 'Multiples of 10' },
  { seq: [22, 44, 66, 88, '?'], answer: 110, choices: [99, 100, 110, 132], hint: 'Multiples of 22' },
  { seq: [33, 66, 99, 132, '?'], answer: 165, choices: [150, 155, 165, 198], hint: 'Multiples of 33' },
  { seq: [101, 202, 303, 404, '?'], answer: 505, choices: [450, 500, 505, 606], hint: 'Multiples of 101' },

  // ── Subtract with pattern (additional) ──────────────────
  { seq: [50, 48, 44, 38, '?'], answer: 30, choices: [28, 30, 32, 34], hint: 'Subtract 2, 4, 6, 8' },
  { seq: [70, 67, 62, 55, '?'], answer: 46, choices: [44, 46, 48, 50], hint: 'Subtract 3, 5, 7, 9' },
  { seq: [90, 85, 75, 60, '?'], answer: 40, choices: [35, 40, 45, 50], hint: 'Subtract 5, 10, 15, 20' },
  { seq: [100, 99, 96, 91, '?'], answer: 84, choices: [82, 84, 86, 88], hint: 'Subtract 1, 3, 5, 7' },
  { seq: [50, 49, 46, 41, '?'], answer: 34, choices: [32, 34, 36, 38], hint: 'Subtract 1, 3, 5, 7' },
  { seq: [200, 190, 170, 140, '?'], answer: 100, choices: [90, 100, 110, 120], hint: 'Subtract 10, 20, 30, 40' },
  { seq: [40, 38, 33, 25, '?'], answer: 14, choices: [12, 14, 16, 18], hint: 'Subtract 2, 5, 8, 11' },

  // ── Add then multiply (additional) ──────────────────────
  { seq: [1, 3, 4, 12, 13, '?'], answer: 39, choices: [14, 26, 39, 52], hint: 'Alternate: +1, then ×3' },
  { seq: [2, 4, 5, 10, 11, 22, '?'], answer: 23, choices: [23, 33, 44, 66], hint: 'Alternate: ×2, then +1' },
  { seq: [1, 2, 4, 5, 10, 11, '?'], answer: 22, choices: [12, 15, 22, 33], hint: 'Alternate: ×2, then +1' },
  { seq: [1, 5, 2, 10, 3, '?'], answer: 15, choices: [4, 11, 15, 20], hint: 'Alternate: +1 and ×5' },
  { seq: [2, 6, 4, 12, 6, '?'], answer: 18, choices: [8, 14, 18, 24], hint: 'Alternate: +2, then ×3' },
  { seq: [1, 3, 2, 6, 3, '?'], answer: 9, choices: [4, 6, 9, 12], hint: 'Alternate: +1, then ×3' },
  { seq: [5, 10, 7, 14, 9, '?'], answer: 18, choices: [11, 16, 18, 28], hint: 'Alternate: ×2, then +2 offset' },

  // ── Factorial-related (additional) ──────────────────────
  { seq: [1, 2, 6, 24, 120, '?'], answer: 720, choices: [240, 360, 720, 840], hint: 'Factorials: 1!, 2!, 3!, 4!, 5!, 6!' },
  { seq: [2, 6, 24, 120, '?'], answer: 720, choices: [240, 480, 720, 960], hint: 'Factorials starting from 2!' },
  { seq: [6, 24, 120, 720, '?'], answer: 5040, choices: [1440, 2520, 5040, 7200], hint: 'Factorials starting from 3!' },
  { seq: [1, 1, 2, 6, '?'], answer: 24, choices: [12, 18, 24, 30], hint: 'Factorials: 0!, 1!, 2!, 3!, 4!' },
  { seq: [1, 2, 3, 4, 5, '?'], answer: 6, choices: [6, 7, 8, 10], hint: 'Count up by 1' },
  { seq: [2, 6, 12, 20, '?'], answer: 30, choices: [24, 28, 30, 36], hint: 'n×(n+1): 1×2, 2×3, 3×4, 4×5, 5×6' },

  // ── Double and add/subtract ─────────────────────────────
  { seq: [1, 3, 7, 15, 31, '?'], answer: 63, choices: [47, 55, 63, 64], hint: 'Double and add 1' },
  { seq: [3, 7, 15, 31, '?'], answer: 63, choices: [47, 55, 63, 62], hint: 'Double and add 1' },
  { seq: [5, 11, 23, 47, '?'], answer: 95, choices: [71, 83, 95, 94], hint: 'Double and add 1' },
  { seq: [9, 18, 36, 72, '?'], answer: 144, choices: [108, 128, 144, 216], hint: 'Double each time' },
  { seq: [4, 9, 19, 39, '?'], answer: 79, choices: [59, 69, 79, 78], hint: 'Double and add 1' },
  { seq: [6, 13, 27, 55, '?'], answer: 111, choices: [83, 97, 111, 110], hint: 'Double and add 1' },
  { seq: [7, 15, 31, 63, '?'], answer: 127, choices: [95, 111, 127, 126], hint: 'Double and add 1' },
  { seq: [1, 4, 13, 40, 121, '?'], answer: 364, choices: [242, 300, 364, 484], hint: 'Multiply by 3 and add 1' },
  { seq: [5, 9, 17, 33, '?'], answer: 65, choices: [49, 57, 65, 66], hint: 'Double and subtract 1' },
  { seq: [10, 21, 43, 87, '?'], answer: 175, choices: [131, 153, 175, 174], hint: 'Double and add 1' },

  // ── n² ± constant ──────────────────────────────────────
  { seq: [2, 5, 10, 17, '?'], answer: 26, choices: [22, 24, 26, 30], hint: 'n² + 1 for n = 1, 2, 3, 4, 5' },
  { seq: [0, 3, 8, 15, '?'], answer: 24, choices: [20, 22, 24, 28], hint: 'n² − 1 for n = 1, 2, 3, 4, 5' },
  { seq: [3, 6, 11, 18, '?'], answer: 27, choices: [23, 25, 27, 32], hint: 'n² + 2 for n = 1, 2, 3, 4, 5' },
  { seq: [4, 7, 12, 19, '?'], answer: 28, choices: [24, 26, 28, 33], hint: 'n² + 3 for n = 1, 2, 3, 4, 5' },
  { seq: [5, 8, 13, 20, '?'], answer: 29, choices: [25, 27, 29, 34], hint: 'n² + 4 for n = 1, 2, 3, 4, 5' },
  { seq: [2, 8, 18, 32, '?'], answer: 50, choices: [40, 46, 50, 56], hint: '2n² for n = 1, 2, 3, 4, 5' },
  { seq: [3, 12, 27, 48, '?'], answer: 75, choices: [60, 68, 75, 84], hint: '3n² for n = 1, 2, 3, 4, 5' },

  // ── n(n+1) and related ─────────────────────────────────
  { seq: [6, 12, 20, 30, '?'], answer: 42, choices: [36, 38, 42, 48], hint: 'n(n+1) for n = 2, 3, 4, 5, 6' },
  { seq: [12, 20, 30, 42, '?'], answer: 56, choices: [48, 52, 56, 64], hint: 'n(n+1) for n = 3, 4, 5, 6, 7' },
  { seq: [20, 30, 42, 56, '?'], answer: 72, choices: [64, 68, 72, 80], hint: 'n(n+1) for n = 4, 5, 6, 7, 8' },
  { seq: [30, 42, 56, 72, '?'], answer: 90, choices: [82, 86, 90, 100], hint: 'n(n+1) for n = 5, 6, 7, 8, 9' },
  { seq: [42, 56, 72, 90, '?'], answer: 110, choices: [100, 105, 110, 120], hint: 'n(n+1) for n = 6, 7, 8, 9, 10' },

  // ── Multiples and modular ──────────────────────────────
  { seq: [7, 14, 21, 28, 35, '?'], answer: 42, choices: [38, 40, 42, 49], hint: 'Multiples of 7' },
  { seq: [11, 22, 33, 44, 55, 66, '?'], answer: 77, choices: [70, 72, 77, 88], hint: 'Multiples of 11' },
  { seq: [9, 18, 27, 36, 45, '?'], answer: 54, choices: [48, 50, 54, 63], hint: 'Multiples of 9' },
  { seq: [8, 16, 24, 32, 40, '?'], answer: 48, choices: [44, 46, 48, 56], hint: 'Multiples of 8' },
  { seq: [6, 12, 18, 24, 30, '?'], answer: 36, choices: [32, 34, 36, 42], hint: 'Multiples of 6' },
  { seq: [20, 40, 60, 80, '?'], answer: 100, choices: [90, 95, 100, 120], hint: 'Multiples of 20' },
  { seq: [50, 100, 150, 200, '?'], answer: 250, choices: [225, 240, 250, 300], hint: 'Multiples of 50' },

  // ── Halving ─────────────────────────────────────────────
  { seq: [800, 400, 200, 100, '?'], answer: 50, choices: [25, 40, 50, 75], hint: 'Divide by 2 each time' },
  { seq: [640, 320, 160, 80, '?'], answer: 40, choices: [20, 30, 40, 60], hint: 'Divide by 2 each time' },
  { seq: [4096, 2048, 1024, 512, '?'], answer: 256, choices: [128, 192, 256, 384], hint: 'Divide by 2 each time' },
  { seq: [2187, 729, 243, 81, '?'], answer: 27, choices: [9, 18, 27, 54], hint: 'Divide by 3 each time' },
  { seq: [3125, 625, 125, 25, '?'], answer: 5, choices: [1, 3, 5, 10], hint: 'Divide by 5 each time' },
  { seq: [10000, 2000, 400, 80, '?'], answer: 16, choices: [8, 12, 16, 20], hint: 'Divide by 5 each time' },

  // ── Square roots / decreasing squares ──────────────────
  { seq: [256, 196, 144, 100, '?'], answer: 64, choices: [49, 56, 64, 81], hint: 'Squares descending: 16², 14², 12², 10², 8²' },
  { seq: [225, 196, 169, 144, '?'], answer: 121, choices: [100, 110, 121, 130], hint: 'Squares of 15, 14, 13, 12, 11' },
  { seq: [144, 121, 100, 81, '?'], answer: 64, choices: [49, 56, 64, 72], hint: 'Squares of 12, 11, 10, 9, 8' },
  { seq: [81, 64, 49, 36, '?'], answer: 25, choices: [16, 20, 25, 30], hint: 'Squares of 9, 8, 7, 6, 5' },

  // ── Odd / Even number sequences ─────────────────────────
  { seq: [1, 3, 5, 7, 9, '?'], answer: 11, choices: [10, 11, 12, 13], hint: 'Odd numbers' },
  { seq: [2, 4, 6, 8, 10, '?'], answer: 12, choices: [11, 12, 13, 14], hint: 'Even numbers' },
  { seq: [1, 4, 9, 16, 25, 36, '?'], answer: 49, choices: [42, 45, 49, 64], hint: 'Perfect squares' },
  { seq: [3, 5, 7, 9, 11, 13, '?'], answer: 15, choices: [14, 15, 16, 17], hint: 'Odd numbers from 3' },
  { seq: [21, 23, 25, 27, '?'], answer: 29, choices: [28, 29, 30, 31], hint: 'Odd numbers from 21' },
  { seq: [30, 32, 34, 36, '?'], answer: 38, choices: [37, 38, 39, 40], hint: 'Even numbers from 30' },
  { seq: [51, 53, 55, 57, '?'], answer: 59, choices: [58, 59, 60, 61], hint: 'Odd numbers from 51' },

  // ── Multiply then add ──────────────────────────────────
  { seq: [1, 3, 10, 32, '?'], answer: 99, choices: [64, 96, 99, 100], hint: 'Multiply by 3, then add 1; ×3+1' },
  { seq: [2, 7, 22, 67, '?'], answer: 202, choices: [134, 180, 202, 270], hint: 'Multiply by 3 and add 1' },
  { seq: [2, 7, 17, 37, '?'], answer: 77, choices: [57, 67, 77, 74], hint: '×2 + 3' },
  { seq: [1, 5, 17, 53, '?'], answer: 161, choices: [106, 133, 161, 212], hint: '×3 + 2' },
  { seq: [3, 7, 15, 31, 63, '?'], answer: 127, choices: [95, 111, 127, 126], hint: '×2 + 1' },
  { seq: [3, 8, 18, 38, '?'], answer: 78, choices: [58, 68, 78, 76], hint: '×2 + 2' },
  { seq: [1, 5, 21, 85, '?'], answer: 341, choices: [170, 256, 341, 425], hint: '×4 + 1' },

  // ── Cube roots / cube-related ──────────────────────────
  { seq: [8, 27, 64, 125, 216, '?'], answer: 343, choices: [250, 300, 343, 512], hint: 'Cubes: 2³, 3³, 4³, 5³, 6³, 7³' },
  { seq: [1, 8, 27, '?'], answer: 64, choices: [36, 48, 64, 81], hint: 'Perfect cubes: 1³, 2³, 3³, 4³' },
  { seq: [27, 64, 125, 216, '?'], answer: 343, choices: [256, 300, 343, 400], hint: 'Cubes: 3³, 4³, 5³, 6³, 7³' },
  { seq: [64, 125, 216, 343, '?'], answer: 512, choices: [400, 450, 512, 600], hint: 'Cubes: 4³, 5³, 6³, 7³, 8³' },
  { seq: [216, 343, 512, 729, '?'], answer: 1000, choices: [800, 900, 1000, 1331], hint: 'Cubes: 6³, 7³, 8³, 9³, 10³' },

  // ── Sum of digits ──────────────────────────────────────
  { seq: [20, 21, 23, 26, 30, '?'], answer: 35, choices: [33, 34, 35, 38], hint: 'Differences: +1, +2, +3, +4, +5' },
  { seq: [19, 28, 37, 46, '?'], answer: 55, choices: [50, 53, 55, 64], hint: 'Add 9; digit sum is always 10' },
  { seq: [18, 27, 36, 45, '?'], answer: 54, choices: [50, 52, 54, 63], hint: 'Add 9; digit sum is always 9' },

  // ── Converging / Diverging ─────────────────────────────
  { seq: [1, 10, 2, 9, 3, '?'], answer: 8, choices: [4, 6, 8, 11], hint: 'Two sequences converging: +1, +1 and −1, −1' },
  { seq: [0, 20, 4, 16, 8, '?'], answer: 12, choices: [10, 12, 14, 20], hint: 'Two converging sequences: +4 and −4' },
  { seq: [1, 100, 4, 97, 7, '?'], answer: 94, choices: [10, 50, 94, 96], hint: 'Alternate: +3 and −3' },
  { seq: [5, 25, 10, 20, 15, '?'], answer: 15, choices: [10, 15, 20, 25], hint: 'Two converging sequences meet at 15' },

  // ── Double differences ─────────────────────────────────
  { seq: [1, 2, 5, 12, 25, '?'], answer: 46, choices: [36, 40, 46, 50], hint: 'Differences: 1, 3, 7, 13, 21 (2nd diff: 2, 4, 6, 8)' },
  { seq: [2, 3, 6, 11, 18, '?'], answer: 27, choices: [23, 25, 27, 30], hint: 'Differences: 1, 3, 5, 7, 9' },
  { seq: [1, 3, 8, 16, 27, '?'], answer: 41, choices: [35, 38, 41, 45], hint: 'Differences: 2, 5, 8, 11, 14 (constant 2nd diff +3)' },
  { seq: [0, 1, 3, 8, 18, '?'], answer: 35, choices: [28, 32, 35, 40], hint: 'Differences: 1, 2, 5, 10, 17' },
  { seq: [4, 5, 8, 14, 24, '?'], answer: 39, choices: [32, 36, 39, 44], hint: 'Differences: 1, 3, 6, 10, 15 (triangular)' },

  // ── Powers of 2 ± offset ───────────────────────────────
  { seq: [9, 17, 33, 65, '?'], answer: 129, choices: [97, 113, 129, 130], hint: '2^n + 1: 8+1, 16+1, 32+1, 64+1, 128+1' },
  { seq: [7, 15, 31, 63, 127, '?'], answer: 255, choices: [191, 223, 255, 256], hint: '2^n − 1' },
  { seq: [0, 2, 6, 14, 30, '?'], answer: 62, choices: [46, 54, 62, 64], hint: '2^n − 2' },
  { seq: [5, 6, 8, 12, 20, '?'], answer: 36, choices: [28, 32, 36, 40], hint: 'Add 1, 2, 4, 8, 16 (powers of 2)' },
  { seq: [10, 11, 13, 17, 25, '?'], answer: 41, choices: [33, 37, 41, 50], hint: 'Add powers of 2: +1, +2, +4, +8, +16' },
  { seq: [100, 101, 103, 107, 115, '?'], answer: 131, choices: [123, 127, 131, 163], hint: 'Add powers of 2' },

  // ── Catalan-style / Combinatorial ──────────────────────
  { seq: [1, 1, 2, 5, 14, '?'], answer: 42, choices: [28, 35, 42, 56], hint: 'Catalan numbers' },
  { seq: [2, 5, 14, 42, '?'], answer: 132, choices: [84, 105, 132, 168], hint: 'Catalan numbers continued' },
  { seq: [1, 3, 6, 10, 15, 21, '?'], answer: 28, choices: [24, 26, 28, 36], hint: 'Triangular numbers' },

  // ── Mixed hard ──────────────────────────────────────────
  { seq: [2, 3, 5, 8, 13, 21, '?'], answer: 34, choices: [28, 30, 34, 42], hint: 'Fibonacci from 2, 3' },
  { seq: [1, 4, 9, 16, 25, 36, 49, '?'], answer: 64, choices: [56, 60, 64, 81], hint: 'Perfect squares' },
  { seq: [2, 6, 18, 54, 162, '?'], answer: 486, choices: [324, 432, 486, 648], hint: '×3 each time' },
  { seq: [4, 8, 14, 22, '?'], answer: 32, choices: [28, 30, 32, 36], hint: 'Differences: +4, +6, +8, +10' },
  { seq: [3, 4, 7, 12, 19, '?'], answer: 28, choices: [24, 26, 28, 32], hint: 'Differences: +1, +3, +5, +7, +9' },
  { seq: [10, 12, 16, 22, 30, '?'], answer: 40, choices: [36, 38, 40, 44], hint: 'Differences: +2, +4, +6, +8, +10' },
  { seq: [1, 2, 4, 7, 11, 16, '?'], answer: 22, choices: [19, 20, 22, 25], hint: 'Add 1, 2, 3, 4, 5, 6' },
  { seq: [5, 10, 20, 40, 80, '?'], answer: 160, choices: [100, 120, 160, 320], hint: 'Double each time' },
  { seq: [100, 50, 25, '?'], answer: 12, choices: [10, 12, 15, 20], hint: 'Divide by 2, round down for 25/2' },
  { seq: [7, 10, 15, 22, '?'], answer: 31, choices: [27, 29, 31, 35], hint: 'Differences: +3, +5, +7, +9' },
  { seq: [6, 11, 21, 41, '?'], answer: 81, choices: [61, 71, 81, 82], hint: 'Double and subtract 1' },
  { seq: [4, 7, 14, 17, 34, '?'], answer: 37, choices: [37, 51, 68, 71], hint: 'Alternate: +3, then ×2' },
  { seq: [3, 6, 5, 10, 9, '?'], answer: 18, choices: [12, 15, 18, 27], hint: 'Alternate: ×2, then −1' },
  { seq: [2, 4, 3, 6, 5, '?'], answer: 10, choices: [7, 8, 10, 15], hint: 'Alternate: ×2, then −1' },
  { seq: [24, 120, 720, 5040, '?'], answer: 40320, choices: [10080, 20160, 40320, 50400], hint: 'Factorials: 4!, 5!, 6!, 7!, 8!' },
  { seq: [10, 13, 19, 28, 40, '?'], answer: 55, choices: [48, 52, 55, 60], hint: 'Differences: +3, +6, +9, +12, +15' },

  // ── n² + n ─────────────────────────────────────────────
  { seq: [42, 56, 72, 90, 110, '?'], answer: 132, choices: [120, 126, 132, 144], hint: 'n(n+1) for n = 6, 7, 8, 9, 10, 11' },
  { seq: [56, 72, 90, 110, '?'], answer: 132, choices: [120, 126, 132, 144], hint: 'n(n+1) for n = 7, 8, 9, 10, 11' },
  { seq: [90, 110, 132, 156, '?'], answer: 182, choices: [168, 175, 182, 196], hint: 'n(n+1) for n = 9, 10, 11, 12, 13' },

  // ── Add consecutive odds ───────────────────────────────
  { seq: [1, 5, 14, 30, 55, '?'], answer: 91, choices: [72, 84, 91, 105], hint: 'Sum of first n squares' },
  { seq: [0, 1, 4, 9, '?'], answer: 16, choices: [12, 14, 16, 25], hint: 'Squares: 0², 1², 2², 3², 4²' },

  // ── n³ ± constant ──────────────────────────────────────
  { seq: [2, 9, 28, 65, '?'], answer: 126, choices: [100, 110, 126, 150], hint: 'n³ + 1 for n = 1, 2, 3, 4, 5' },
  { seq: [0, 7, 26, 63, '?'], answer: 124, choices: [100, 112, 124, 150], hint: 'n³ − 1 for n = 1, 2, 3, 4, 5' },
  { seq: [3, 10, 29, 66, '?'], answer: 127, choices: [100, 115, 127, 150], hint: 'n³ + 2 for n = 1, 2, 3, 4, 5' },

  // ── Sum of series ──────────────────────────────────────
  { seq: [1, 3, 6, 10, 15, 21, 28, '?'], answer: 36, choices: [32, 34, 36, 45], hint: 'Triangular: add +8 this time' },
  { seq: [1, 4, 10, 20, 35, '?'], answer: 56, choices: [45, 50, 56, 70], hint: 'Tetrahedral numbers' },
  { seq: [1, 5, 14, 30, '?'], answer: 55, choices: [42, 50, 55, 60], hint: 'Sum of squares: 1, 1+4, 1+4+9, 1+4+9+16, ...' },

  // ── Repunit-related ────────────────────────────────────
  { seq: [1, 11, 111, 1111, '?'], answer: 11111, choices: [2222, 5555, 11111, 99999], hint: 'Repunits: all 1s, one more digit' },
  { seq: [2, 22, 222, 2222, '?'], answer: 22222, choices: [4444, 11111, 22222, 33333], hint: 'All 2s, one more digit each time' },
  { seq: [9, 99, 999, 9999, '?'], answer: 99999, choices: [10000, 19998, 99999, 100000], hint: 'All 9s, one more digit each time' },

  // ── Miscellaneous patterns ─────────────────────────────
  { seq: [2, 3, 5, 7, 11, 13, '?'], answer: 17, choices: [14, 15, 17, 19], hint: 'Prime numbers' },
  { seq: [4, 16, 36, 64, '?'], answer: 100, choices: [80, 90, 100, 144], hint: 'Squares of even numbers: 2², 4², 6², 8², 10²' },
  { seq: [1, 9, 25, 49, '?'], answer: 81, choices: [64, 72, 81, 100], hint: 'Squares of odd numbers: 1², 3², 5², 7², 9²' },
  { seq: [9, 25, 49, 81, '?'], answer: 121, choices: [100, 110, 121, 144], hint: 'Squares of odd: 3², 5², 7², 9², 11²' },
  { seq: [16, 36, 64, 100, '?'], answer: 144, choices: [120, 130, 144, 196], hint: 'Squares of even: 4², 6², 8², 10², 12²' },
  { seq: [8, 13, 21, 34, '?'], answer: 55, choices: [42, 48, 55, 68], hint: 'Fibonacci continuation' },
  { seq: [5, 7, 12, 19, 31, '?'], answer: 50, choices: [40, 45, 50, 62], hint: 'Each = sum of previous two' },
  { seq: [4, 6, 10, 16, 26, '?'], answer: 42, choices: [34, 38, 42, 52], hint: 'Each = sum of previous two' },
  { seq: [3, 8, 11, 19, 30, '?'], answer: 49, choices: [41, 45, 49, 60], hint: 'Each = sum of previous two' },
  { seq: [7, 7, 14, 21, 35, '?'], answer: 56, choices: [42, 49, 56, 70], hint: 'Each = sum of previous two' },
  { seq: [1, 2, 4, 8, 16, 32, '?'], answer: 64, choices: [48, 56, 64, 128], hint: 'Powers of 2' },
  { seq: [10, 15, 25, 40, 65, '?'], answer: 105, choices: [80, 95, 105, 130], hint: 'Each = sum of previous two' },
  { seq: [3, 9, 12, 21, 33, '?'], answer: 54, choices: [42, 48, 54, 66], hint: 'Each = sum of previous two' },
  { seq: [6, 7, 13, 20, 33, '?'], answer: 53, choices: [45, 49, 53, 66], hint: 'Each = sum of previous two' },

  // ── Step patterns ──────────────────────────────────────
  { seq: [1, 2, 4, 7, 11, 16, 22, '?'], answer: 29, choices: [25, 27, 29, 33], hint: 'Add 1, 2, 3, 4, 5, 6, 7' },
  { seq: [2, 4, 8, 14, 22, 32, '?'], answer: 44, choices: [38, 40, 44, 48], hint: 'Differences: 2, 4, 6, 8, 10, 12' },
  { seq: [5, 7, 11, 17, 25, '?'], answer: 35, choices: [31, 33, 35, 41], hint: 'Differences: 2, 4, 6, 8, 10' },
  { seq: [3, 7, 14, 24, 37, '?'], answer: 53, choices: [47, 50, 53, 58], hint: 'Differences: 4, 7, 10, 13, 16' },
  { seq: [1, 5, 12, 22, 35, '?'], answer: 51, choices: [45, 48, 51, 56], hint: 'Differences: 4, 7, 10, 13, 16' },

  // ── Multiply by increasing factor ──────────────────────
  { seq: [6, 24, 120, 720, 5040, '?'], answer: 40320, choices: [10080, 20160, 40320, 50400], hint: 'Factorials: 3!, 4!, 5!, 6!, 7!, 8!' },
  { seq: [2, 4, 12, 48, '?'], answer: 240, choices: [96, 192, 240, 288], hint: 'Multiply by 2, 3, 4, 5' },
  { seq: [1, 3, 12, 60, '?'], answer: 360, choices: [120, 240, 360, 480], hint: 'Multiply by 3, 4, 5, 6' },
  { seq: [3, 6, 18, 72, '?'], answer: 360, choices: [144, 216, 360, 432], hint: 'Multiply by 2, 3, 4, 5' },
  { seq: [1, 1, 2, 6, 24, 120, '?'], answer: 720, choices: [240, 480, 720, 840], hint: 'Factorials' },

  // ── Negative & mixed sign ──────────────────────────────
  { seq: [1, -1, 2, -2, 3, '?'], answer: -3, choices: [-3, -2, 3, 4], hint: 'Alternate: positive, then negative' },
  { seq: [1, -2, 3, -4, 5, '?'], answer: -6, choices: [-6, -5, 6, 7], hint: 'Alternate sign, increasing magnitude' },
  { seq: [-5, -3, -1, 1, '?'], answer: 3, choices: [2, 3, 4, 5], hint: 'Add 2 each time' },
  { seq: [-10, -5, 0, 5, '?'], answer: 10, choices: [8, 10, 12, 15], hint: 'Add 5 each time' },
  { seq: [-8, -4, 0, 4, '?'], answer: 8, choices: [6, 7, 8, 12], hint: 'Add 4 each time' },

  // ── Mixed tricky ───────────────────────────────────────
  { seq: [2, 3, 5, 9, 17, 33, '?'], answer: 65, choices: [49, 57, 65, 66], hint: 'Differences double: +1, +2, +4, +8, +16, +32' },
  { seq: [0, 1, 3, 7, 15, '?'], answer: 31, choices: [23, 27, 31, 32], hint: '2^n − 1' },
  { seq: [1, 1, 1, 3, 5, 9, '?'], answer: 17, choices: [13, 15, 17, 19], hint: 'Tribonacci-like: sum of last three' },
  { seq: [0, 0, 1, 1, 2, 4, '?'], answer: 7, choices: [5, 6, 7, 8], hint: 'Sum of previous three' },
  { seq: [1, 1, 1, 3, 5, 9, 17, '?'], answer: 31, choices: [25, 27, 31, 35], hint: 'Sum of previous three' },
  { seq: [2, 2, 2, 6, 10, 18, '?'], answer: 34, choices: [26, 30, 34, 38], hint: 'Sum of previous three' },
  { seq: [10, 100, 1000, 10000, '?'], answer: 100000, choices: [20000, 50000, 100000, 1000000], hint: 'Multiply by 10' },
  { seq: [7, 11, 19, 35, '?'], answer: 67, choices: [51, 59, 67, 70], hint: 'Differences double: +4, +8, +16, +32' },
  { seq: [3, 5, 11, 23, '?'], answer: 47, choices: [35, 41, 47, 46], hint: '×2 + 1, starting from 3' },
  { seq: [100, 98, 94, 88, '?'], answer: 80, choices: [76, 78, 80, 82], hint: 'Subtract 2, 4, 6, 8' },
  { seq: [1000, 500, 250, 125, '?'], answer: 62, choices: [50, 55, 62, 75], hint: 'Divide by 2, round down for odd' },
  { seq: [15, 16, 18, 21, 25, '?'], answer: 30, choices: [28, 29, 30, 32], hint: 'Add 1, 2, 3, 4, 5' },
  { seq: [20, 22, 26, 32, 40, '?'], answer: 50, choices: [44, 48, 50, 56], hint: 'Differences: +2, +4, +6, +8, +10' },
  { seq: [50, 51, 54, 60, 70, '?'], answer: 85, choices: [75, 80, 85, 90], hint: 'Differences: +1, +3, +6, +10, +15 (triangular)' },
  { seq: [2, 8, 26, 80, '?'], answer: 242, choices: [160, 200, 242, 320], hint: '×3 + 2' },
  { seq: [3, 11, 35, 107, '?'], answer: 323, choices: [214, 267, 323, 428], hint: '×3 + 2' },

  // ── Arithmetic +3, +7, +11, +13, +17, +19, +23 ─────────
  { seq: [4, 7, 10, 13, '?'], answer: 16, choices: [14, 15, 16, 19], hint: 'Add 3 each time' },
  { seq: [10, 17, 24, 31, '?'], answer: 38, choices: [35, 37, 38, 42], hint: 'Add 7 each time' },
  { seq: [5, 16, 27, 38, '?'], answer: 49, choices: [45, 47, 49, 52], hint: 'Add 11 each time' },
  { seq: [2, 15, 28, 41, '?'], answer: 54, choices: [50, 52, 54, 58], hint: 'Add 13 each time' },
  { seq: [3, 20, 37, 54, '?'], answer: 71, choices: [67, 69, 71, 75], hint: 'Add 17 each time' },
  { seq: [1, 20, 39, 58, '?'], answer: 77, choices: [73, 75, 77, 81], hint: 'Add 19 each time' },
  { seq: [4, 27, 50, 73, '?'], answer: 96, choices: [90, 93, 96, 100], hint: 'Add 23 each time' },
  { seq: [10, 13, 16, 19, 22, '?'], answer: 25, choices: [23, 24, 25, 28], hint: 'Add 3 each time' },
  { seq: [100, 107, 114, 121, '?'], answer: 128, choices: [126, 127, 128, 131], hint: 'Add 7 each time' },
  { seq: [50, 61, 72, 83, '?'], answer: 94, choices: [90, 92, 94, 97], hint: 'Add 11 each time' },
  { seq: [7, 20, 33, 46, '?'], answer: 59, choices: [55, 57, 59, 62], hint: 'Add 13 each time' },
  { seq: [10, 27, 44, 61, '?'], answer: 78, choices: [74, 76, 78, 82], hint: 'Add 17 each time' },
  { seq: [5, 24, 43, 62, '?'], answer: 81, choices: [77, 79, 81, 85], hint: 'Add 19 each time' },
  { seq: [7, 30, 53, 76, '?'], answer: 99, choices: [93, 96, 99, 103], hint: 'Add 23 each time' },
  { seq: [1, 30, 59, 88, '?'], answer: 117, choices: [110, 114, 117, 121], hint: 'Add 29 each time' },
  { seq: [3, 34, 65, 96, '?'], answer: 127, choices: [120, 124, 127, 131], hint: 'Add 31 each time' },
  { seq: [2, 39, 76, 113, '?'], answer: 150, choices: [143, 147, 150, 155], hint: 'Add 37 each time' },
  { seq: [10, 51, 92, 133, '?'], answer: 174, choices: [168, 171, 174, 180], hint: 'Add 41 each time' },
  { seq: [5, 48, 91, 134, '?'], answer: 177, choices: [170, 174, 177, 182], hint: 'Add 43 each time' },
  { seq: [1, 48, 95, 142, '?'], answer: 189, choices: [182, 186, 189, 195], hint: 'Add 47 each time' },

  // ── Reverse / Counting down ─────────────────────────────
  { seq: [75, 70, 65, 60, '?'], answer: 55, choices: [50, 52, 55, 58], hint: 'Subtract 5 each time' },
  { seq: [60, 53, 46, 39, '?'], answer: 32, choices: [28, 30, 32, 35], hint: 'Subtract 7 each time' },
  { seq: [99, 88, 77, 66, 55, '?'], answer: 44, choices: [33, 40, 44, 48], hint: 'Subtract 11 each time' },
  { seq: [91, 78, 65, 52, '?'], answer: 39, choices: [35, 37, 39, 43], hint: 'Subtract 13 each time' },
  { seq: [85, 68, 51, 34, '?'], answer: 17, choices: [13, 15, 17, 21], hint: 'Subtract 17 each time' },
  { seq: [95, 76, 57, 38, '?'], answer: 19, choices: [15, 17, 19, 23], hint: 'Subtract 19 each time' },
  { seq: [150, 127, 104, 81, '?'], answer: 58, choices: [52, 55, 58, 62], hint: 'Subtract 23 each time' },
  { seq: [500, 450, 400, 350, '?'], answer: 300, choices: [275, 290, 300, 310], hint: 'Subtract 50 each time' },
  { seq: [1000, 750, 500, 250, '?'], answer: 0, choices: [-250, 0, 100, 125], hint: 'Subtract 250 each time' },
  { seq: [200, 180, 160, 140, '?'], answer: 120, choices: [100, 110, 120, 130], hint: 'Subtract 20 each time' },

  // ── Geometric ×4, ×5, ×6, ÷2, ÷3, ÷4 ──────────────────
  { seq: [1, 4, 16, 64, 256, '?'], answer: 1024, choices: [512, 768, 1024, 2048], hint: 'Multiply by 4' },
  { seq: [2, 10, 50, 250, 1250, '?'], answer: 6250, choices: [2500, 5000, 6250, 12500], hint: 'Multiply by 5' },
  { seq: [1, 6, 36, 216, 1296, '?'], answer: 7776, choices: [3888, 5184, 7776, 10368], hint: 'Multiply by 6' },
  { seq: [4096, 1024, 256, 64, '?'], answer: 16, choices: [8, 12, 16, 32], hint: 'Divide by 4' },
  { seq: [6561, 2187, 729, 243, '?'], answer: 81, choices: [27, 54, 81, 162], hint: 'Divide by 3' },
  { seq: [1, 2, 8, 64, '?'], answer: 1024, choices: [256, 512, 1024, 2048], hint: '×2, ×4, ×8, ×16 (multiply by doubling factor)' },
  { seq: [3, 15, 75, 375, '?'], answer: 1875, choices: [750, 1125, 1875, 3750], hint: 'Multiply by 5' },
  { seq: [7, 21, 63, 189, '?'], answer: 567, choices: [378, 504, 567, 756], hint: 'Multiply by 3' },
  { seq: [4, 20, 100, 500, '?'], answer: 2500, choices: [1000, 1500, 2500, 5000], hint: 'Multiply by 5' },
  { seq: [10, 30, 90, 270, '?'], answer: 810, choices: [540, 720, 810, 1080], hint: 'Multiply by 3' },

  // ── Squares of primes ───────────────────────────────────
  { seq: [4, 9, 25, 49, '?'], answer: 121, choices: [81, 100, 121, 144], hint: 'Squares of primes: 2², 3², 5², 7², 11²' },
  { seq: [9, 25, 49, 121, '?'], answer: 169, choices: [144, 156, 169, 196], hint: 'Squares of primes: 3², 5², 7², 11², 13²' },
  { seq: [25, 49, 121, 169, '?'], answer: 289, choices: [225, 256, 289, 324], hint: 'Squares of primes: 5², 7², 11², 13², 17²' },
  { seq: [49, 121, 169, 289, '?'], answer: 361, choices: [324, 343, 361, 400], hint: 'Squares of primes: 7², 11², 13², 17², 19²' },

  // ── Cubes extended ──────────────────────────────────────
  { seq: [343, 512, 729, 1000, '?'], answer: 1331, choices: [1100, 1200, 1331, 1500], hint: 'Cubes: 7³, 8³, 9³, 10³, 11³' },
  { seq: [512, 729, 1000, 1331, '?'], answer: 1728, choices: [1500, 1600, 1728, 2000], hint: 'Cubes: 8³, 9³, 10³, 11³, 12³' },
  { seq: [1000, 1331, 1728, 2197, '?'], answer: 2744, choices: [2500, 2600, 2744, 3000], hint: 'Cubes: 10³, 11³, 12³, 13³, 14³' },
  { seq: [729, 1000, 1331, 1728, '?'], answer: 2197, choices: [2000, 2100, 2197, 2400], hint: 'Cubes: 9³, 10³, 11³, 12³, 13³' },

  // ── Fibonacci variants (different starts) ───────────────
  { seq: [3, 3, 6, 9, 15, '?'], answer: 24, choices: [20, 22, 24, 30], hint: 'Each = sum of previous two, starting 3, 3' },
  { seq: [4, 7, 11, 18, 29, '?'], answer: 47, choices: [40, 43, 47, 58], hint: 'Each = sum of previous two' },
  { seq: [5, 8, 13, 21, 34, '?'], answer: 55, choices: [42, 48, 55, 68], hint: 'Fibonacci continuation from 5, 8' },
  { seq: [6, 6, 12, 18, 30, '?'], answer: 48, choices: [36, 42, 48, 60], hint: 'Each = sum of previous two, starting 6, 6' },
  { seq: [1, 5, 6, 11, 17, '?'], answer: 28, choices: [22, 25, 28, 34], hint: 'Each = sum of previous two' },
  { seq: [2, 7, 9, 16, 25, '?'], answer: 41, choices: [33, 37, 41, 50], hint: 'Each = sum of previous two' },
  { seq: [3, 4, 7, 11, 18, '?'], answer: 29, choices: [25, 27, 29, 36], hint: 'Each = sum of previous two' },
  { seq: [7, 8, 15, 23, 38, '?'], answer: 61, choices: [50, 55, 61, 76], hint: 'Each = sum of previous two' },
  { seq: [8, 8, 16, 24, 40, '?'], answer: 64, choices: [48, 56, 64, 80], hint: 'Each = sum of previous two, starting 8, 8' },
  { seq: [1, 9, 10, 19, 29, '?'], answer: 48, choices: [38, 43, 48, 58], hint: 'Each = sum of previous two' },

  // ── Triangular numbers extended ─────────────────────────
  { seq: [28, 36, 45, 55, '?'], answer: 66, choices: [60, 63, 66, 78], hint: 'Triangular numbers: +8, +9, +10, +11' },
  { seq: [36, 45, 55, 66, '?'], answer: 78, choices: [72, 75, 78, 91], hint: 'Triangular numbers continuing' },
  { seq: [45, 55, 66, 78, '?'], answer: 91, choices: [84, 88, 91, 105], hint: 'Triangular numbers continuing' },
  { seq: [55, 66, 78, 91, '?'], answer: 105, choices: [98, 102, 105, 120], hint: 'Triangular numbers continuing' },
  { seq: [66, 78, 91, 105, '?'], answer: 120, choices: [112, 116, 120, 136], hint: 'Triangular numbers continuing' },

  // ── Pentagonal numbers ──────────────────────────────────
  { seq: [5, 12, 22, 35, '?'], answer: 51, choices: [42, 48, 51, 55], hint: 'Pentagonal numbers continuing' },
  { seq: [12, 22, 35, 51, '?'], answer: 70, choices: [60, 65, 70, 78], hint: 'Pentagonal numbers' },
  { seq: [22, 35, 51, 70, '?'], answer: 92, choices: [82, 87, 92, 100], hint: 'Pentagonal numbers' },
  { seq: [35, 51, 70, 92, '?'], answer: 117, choices: [105, 112, 117, 126], hint: 'Pentagonal numbers' },

  // ── Hexagonal numbers ───────────────────────────────────
  { seq: [6, 15, 28, 45, '?'], answer: 66, choices: [55, 60, 66, 72], hint: 'Hexagonal numbers' },
  { seq: [15, 28, 45, 66, '?'], answer: 91, choices: [80, 85, 91, 100], hint: 'Hexagonal numbers continuing' },
  { seq: [28, 45, 66, 91, '?'], answer: 120, choices: [108, 114, 120, 130], hint: 'Hexagonal numbers continuing' },
  { seq: [45, 66, 91, 120, '?'], answer: 153, choices: [140, 148, 153, 165], hint: 'Hexagonal numbers continuing' },

  // ── Alternating +then× ─────────────────────────────────
  { seq: [2, 4, 6, 12, 14, '?'], answer: 28, choices: [16, 21, 28, 42], hint: 'Alternate: +2, then ×2' },
  { seq: [1, 3, 6, 8, 16, '?'], answer: 18, choices: [18, 24, 32, 48], hint: 'Alternate: +2, then ×2, continuing' },
  { seq: [3, 9, 12, 36, 39, '?'], answer: 117, choices: [42, 78, 117, 156], hint: 'Alternate: ×3, then +3' },
  { seq: [2, 6, 9, 27, 30, '?'], answer: 90, choices: [33, 60, 90, 120], hint: 'Alternate: ×3, then +3' },
  { seq: [1, 4, 8, 11, 22, '?'], answer: 25, choices: [25, 33, 44, 66], hint: 'Alternate: +3, then ×2' },
  { seq: [5, 10, 13, 26, 29, '?'], answer: 58, choices: [32, 43, 58, 87], hint: 'Alternate: ×2, then +3' },
  { seq: [4, 8, 10, 20, 22, '?'], answer: 44, choices: [24, 33, 44, 66], hint: 'Alternate: ×2, then +2' },
  { seq: [1, 4, 3, 12, 11, '?'], answer: 44, choices: [14, 33, 44, 55], hint: 'Alternate: ×4, then −1' },
  { seq: [2, 8, 5, 20, 17, '?'], answer: 68, choices: [14, 34, 68, 85], hint: 'Alternate: ×4, then −3' },
  { seq: [3, 7, 14, 18, 36, '?'], answer: 40, choices: [40, 54, 72, 108], hint: 'Alternate: +4, then ×2' },

  // ── Prime sequences extended ────────────────────────────
  { seq: [71, 73, 79, 83, '?'], answer: 89, choices: [85, 87, 89, 91], hint: 'Consecutive primes' },
  { seq: [79, 83, 89, 97, '?'], answer: 101, choices: [99, 100, 101, 103], hint: 'Consecutive primes' },
  { seq: [83, 89, 97, 101, '?'], answer: 103, choices: [102, 103, 105, 107], hint: 'Consecutive primes' },
  { seq: [89, 97, 101, 103, '?'], answer: 107, choices: [104, 105, 107, 109], hint: 'Consecutive primes' },
  { seq: [97, 101, 103, 107, '?'], answer: 109, choices: [108, 109, 111, 113], hint: 'Consecutive primes' },
  { seq: [101, 103, 107, 109, '?'], answer: 113, choices: [110, 111, 113, 117], hint: 'Consecutive primes' },
  { seq: [6, 10, 14, 22, '?'], answer: 26, choices: [24, 26, 28, 34], hint: 'Twice the primes: 2×3, 2×5, 2×7, 2×11, 2×13' },
  { seq: [9, 15, 21, 33, '?'], answer: 39, choices: [36, 39, 42, 51], hint: 'Three times primes: 3×3, 3×5, 3×7, 3×11, 3×13' },
  { seq: [10, 14, 22, 26, '?'], answer: 34, choices: [30, 32, 34, 38], hint: 'Twice primes: 2×5, 2×7, 2×11, 2×13, 2×17' },

  // ── Composite number sequences ──────────────────────────
  { seq: [4, 6, 8, 9, '?'], answer: 10, choices: [10, 11, 12, 14], hint: 'Composite numbers in order' },
  { seq: [8, 9, 10, 12, '?'], answer: 14, choices: [13, 14, 15, 16], hint: 'Composite numbers continuing' },
  { seq: [14, 15, 16, 18, '?'], answer: 20, choices: [19, 20, 21, 22], hint: 'Composite numbers continuing' },
  { seq: [20, 21, 22, 24, '?'], answer: 25, choices: [23, 25, 26, 27], hint: 'Composite numbers continuing' },
  { seq: [24, 25, 26, 27, '?'], answer: 28, choices: [28, 29, 30, 31], hint: 'Composite numbers continuing' },

  // ── Powers 2^n, 3^n, 4^n, 5^n ──────────────────────────
  { seq: [32, 64, 128, 256, '?'], answer: 512, choices: [384, 448, 512, 1024], hint: 'Powers of 2 continuing' },
  { seq: [64, 128, 256, 512, '?'], answer: 1024, choices: [768, 896, 1024, 2048], hint: 'Powers of 2' },
  { seq: [128, 256, 512, 1024, '?'], answer: 2048, choices: [1536, 1792, 2048, 4096], hint: 'Powers of 2' },
  { seq: [27, 81, 243, 729, '?'], answer: 2187, choices: [1458, 1944, 2187, 2916], hint: 'Powers of 3' },
  { seq: [81, 243, 729, 2187, '?'], answer: 6561, choices: [4374, 5832, 6561, 8748], hint: 'Powers of 3' },
  { seq: [16, 64, 256, 1024, '?'], answer: 4096, choices: [2048, 3072, 4096, 8192], hint: 'Powers of 4' },
  { seq: [25, 125, 625, 3125, '?'], answer: 15625, choices: [6250, 12500, 15625, 31250], hint: 'Powers of 5' },

  // ── Factorial-related extended ──────────────────────────
  { seq: [720, 5040, 40320, '?'], answer: 362880, choices: [80640, 241920, 362880, 403200], hint: 'Factorials: 6!, 7!, 8!, 9!' },
  { seq: [1, 3, 9, 27, 81, 243, '?'], answer: 729, choices: [486, 648, 729, 972], hint: 'Powers of 3' },
  { seq: [2, 6, 30, 210, '?'], answer: 2310, choices: [420, 1050, 2310, 4620], hint: 'Multiply by 3, 5, 7, 11 (primorial)' },
  { seq: [1, 2, 6, 24, 120, 720, '?'], answer: 5040, choices: [1440, 2520, 5040, 7200], hint: 'Factorials: 1! through 7!' },

  // ── Digit sum patterns ──────────────────────────────────
  { seq: [10, 19, 28, 37, '?'], answer: 46, choices: [42, 44, 46, 55], hint: 'Add 9; digit sum always equals 1' },
  { seq: [11, 20, 29, 38, '?'], answer: 47, choices: [43, 45, 47, 56], hint: 'Add 9; digit sum always equals 2' },
  { seq: [12, 21, 30, 39, '?'], answer: 48, choices: [44, 46, 48, 57], hint: 'Add 9; digit sum always equals 3' },
  { seq: [13, 22, 31, 40, '?'], answer: 49, choices: [45, 47, 49, 58], hint: 'Add 9; digit sum always equals 4' },
  { seq: [14, 23, 32, 41, '?'], answer: 50, choices: [46, 48, 50, 59], hint: 'Add 9; digit sum always equals 5' },
  { seq: [15, 24, 33, 42, '?'], answer: 51, choices: [47, 49, 51, 60], hint: 'Add 9; digit sum always equals 6' },
  { seq: [16, 25, 34, 43, '?'], answer: 52, choices: [48, 50, 52, 61], hint: 'Add 9; digit sum always equals 7' },
  { seq: [17, 26, 35, 44, '?'], answer: 53, choices: [49, 51, 53, 62], hint: 'Add 9; digit sum always equals 8' },

  // ── Two interleaved sequences ───────────────────────────
  { seq: [1, 2, 3, 4, 5, '?'], answer: 6, choices: [6, 7, 8, 9], hint: 'Simply count up by 1' },
  { seq: [2, 100, 4, 200, 6, '?'], answer: 300, choices: [8, 100, 300, 400], hint: 'Alternate: +2 and ×100' },
  { seq: [1, 50, 3, 45, 5, '?'], answer: 40, choices: [7, 35, 40, 50], hint: 'Alternate: odd +2, even −5' },
  { seq: [10, 2, 20, 4, 30, '?'], answer: 6, choices: [6, 8, 40, 60], hint: 'Two sequences: +10 and +2' },
  { seq: [3, 1, 6, 2, 9, '?'], answer: 3, choices: [3, 4, 12, 18], hint: 'Two sequences: +3 and +1' },
  { seq: [100, 5, 95, 10, 90, '?'], answer: 15, choices: [15, 20, 80, 85], hint: 'Alternate: −5 and +5' },
  { seq: [1, 1, 4, 2, 9, '?'], answer: 3, choices: [3, 4, 16, 25], hint: 'Alternate: squares 1,4,9,16 and +1' },
  { seq: [2, 10, 4, 20, 8, '?'], answer: 40, choices: [10, 16, 40, 80], hint: 'Alternate: ×2 and ×10 from start' },
  { seq: [5, 3, 10, 6, 15, '?'], answer: 9, choices: [9, 12, 20, 30], hint: 'Two sequences: +5 and +3' },
  { seq: [7, 1, 14, 3, 21, '?'], answer: 5, choices: [5, 7, 28, 35], hint: 'Two sequences: +7 and +2' },
  { seq: [1, 8, 4, 27, 9, '?'], answer: 64, choices: [16, 36, 64, 125], hint: 'Alternate: squares 1,4,9 and cubes 8,27,64' },
  { seq: [100, 1, 81, 4, 64, '?'], answer: 9, choices: [9, 16, 49, 36], hint: 'Alternate: squares down 10²,9²,8² and squares up 1²,2²,3²' },

  // ── Accelerating differences ────────────────────────────
  { seq: [1, 2, 5, 14, 41, '?'], answer: 122, choices: [82, 100, 122, 164], hint: 'Multiply by 3 and subtract 1' },
  { seq: [2, 3, 6, 15, 42, '?'], answer: 123, choices: [84, 100, 123, 168], hint: 'Differences: 1, 3, 9, 27, 81 (powers of 3)' },
  { seq: [1, 3, 9, 21, 41, '?'], answer: 71, choices: [55, 63, 71, 81], hint: 'Differences: 2, 6, 12, 20, 30' },
  { seq: [5, 6, 9, 16, 29, '?'], answer: 54, choices: [42, 48, 54, 58], hint: 'Differences: 1, 3, 7, 13, 25 (near doubling)' },
  { seq: [10, 12, 18, 30, 54, '?'], answer: 102, choices: [78, 90, 102, 108], hint: 'Differences: 2, 6, 12, 24, 48 (doubling)' },
  { seq: [3, 4, 7, 14, 27, '?'], answer: 52, choices: [40, 46, 52, 54], hint: 'Differences: 1, 3, 7, 13, 25' },
  { seq: [1, 2, 6, 24, 120, 720, '?'], answer: 5040, choices: [1440, 2880, 5040, 7200], hint: 'Factorials' },
  { seq: [2, 4, 10, 28, 82, '?'], answer: 244, choices: [164, 200, 244, 328], hint: '×3 − 2' },

  // ── Decelerating differences ────────────────────────────
  { seq: [100, 80, 64, 52, 44, '?'], answer: 40, choices: [36, 38, 40, 42], hint: 'Subtract 20, 16, 12, 8, 4' },
  { seq: [200, 175, 155, 140, 130, '?'], answer: 125, choices: [120, 122, 125, 128], hint: 'Subtract 25, 20, 15, 10, 5' },
  { seq: [50, 40, 32, 26, 22, '?'], answer: 20, choices: [18, 19, 20, 21], hint: 'Subtract 10, 8, 6, 4, 2' },
  { seq: [80, 65, 53, 44, 38, '?'], answer: 35, choices: [32, 33, 35, 36], hint: 'Subtract 15, 12, 9, 6, 3' },

  // ── Negative numbers ────────────────────────────────────
  { seq: [-20, -15, -10, -5, '?'], answer: 0, choices: [-3, -1, 0, 5], hint: 'Add 5 each time' },
  { seq: [-100, -80, -60, -40, '?'], answer: -20, choices: [-30, -25, -20, 0], hint: 'Add 20 each time' },
  { seq: [-1, -4, -9, -16, '?'], answer: -25, choices: [-36, -25, -20, -18], hint: 'Negative perfect squares' },
  { seq: [-3, -1, 1, 3, '?'], answer: 5, choices: [4, 5, 6, 7], hint: 'Add 2 each time' },
  { seq: [-7, -3, 1, 5, '?'], answer: 9, choices: [7, 8, 9, 11], hint: 'Add 4 each time' },
  { seq: [-12, -7, -2, 3, '?'], answer: 8, choices: [6, 7, 8, 10], hint: 'Add 5 each time' },
  { seq: [-15, -9, -3, 3, '?'], answer: 9, choices: [6, 8, 9, 12], hint: 'Add 6 each time' },
  { seq: [-20, -11, -2, 7, '?'], answer: 16, choices: [12, 14, 16, 20], hint: 'Add 9 each time' },
  { seq: [10, 5, 0, -5, '?'], answer: -10, choices: [-15, -10, -8, -5], hint: 'Subtract 5 each time' },
  { seq: [20, 10, 0, -10, '?'], answer: -20, choices: [-30, -20, -15, -10], hint: 'Subtract 10 each time' },

  // ── Multiply-and-add patterns ───────────────────────────
  { seq: [1, 5, 21, 85, 341, '?'], answer: 1365, choices: [682, 1024, 1365, 1706], hint: '×4 + 1' },
  { seq: [2, 9, 30, 93, '?'], answer: 282, choices: [188, 234, 282, 376], hint: '×3 + 3' },
  { seq: [1, 4, 14, 46, '?'], answer: 142, choices: [92, 118, 142, 184], hint: '×3 + 1, then ×3 + 2 pattern' },
  { seq: [1, 7, 25, 79, '?'], answer: 241, choices: [158, 200, 241, 316], hint: '×3 + 4' },
  { seq: [3, 10, 31, 94, '?'], answer: 283, choices: [188, 236, 283, 376], hint: '×3 + 1' },
  { seq: [2, 5, 11, 23, 47, '?'], answer: 95, choices: [71, 83, 95, 94], hint: '×2 + 1' },
  { seq: [1, 6, 26, 106, '?'], answer: 426, choices: [212, 320, 426, 530], hint: '×4 + 2' },
  { seq: [2, 9, 38, 153, '?'], answer: 614, choices: [306, 460, 614, 765], hint: '×4 + 1' },
  { seq: [3, 8, 23, 68, '?'], answer: 203, choices: [136, 170, 203, 272], hint: '×3 − 1' },
  { seq: [1, 3, 11, 41, '?'], answer: 155, choices: [82, 120, 155, 164], hint: 'Pattern: ×3+0, ×3+2, ×3+8' },

  // ── Squares of consecutive evens ────────────────────────
  { seq: [36, 64, 100, 144, '?'], answer: 196, choices: [176, 186, 196, 210], hint: 'Squares of even: 6², 8², 10², 12², 14²' },
  { seq: [64, 100, 144, 196, '?'], answer: 256, choices: [230, 242, 256, 280], hint: 'Squares of even: 8², 10², 12², 14², 16²' },
  { seq: [100, 144, 196, 256, '?'], answer: 324, choices: [300, 312, 324, 350], hint: 'Squares of even: 10², 12², 14², 16², 18²' },
  { seq: [144, 196, 256, 324, '?'], answer: 400, choices: [380, 390, 400, 420], hint: 'Squares of even: 12², 14², 16², 18², 20²' },

  // ── Squares of consecutive odds ─────────────────────────
  { seq: [25, 49, 81, 121, '?'], answer: 169, choices: [144, 156, 169, 196], hint: 'Squares of odd: 5², 7², 9², 11², 13²' },
  { seq: [49, 81, 121, 169, '?'], answer: 225, choices: [200, 212, 225, 256], hint: 'Squares of odd: 7², 9², 11², 13², 15²' },
  { seq: [81, 121, 169, 225, '?'], answer: 289, choices: [260, 275, 289, 324], hint: 'Squares of odd: 9², 11², 13², 15², 17²' },
  { seq: [121, 169, 225, 289, '?'], answer: 361, choices: [340, 352, 361, 400], hint: 'Squares of odd: 11², 13², 15², 17², 19²' },

  // ── n² + n + 1 patterns ────────────────────────────────
  { seq: [3, 7, 13, 21, '?'], answer: 31, choices: [27, 29, 31, 35], hint: 'n² + n + 1 for n = 1, 2, 3, 4, 5' },
  { seq: [7, 13, 21, 31, '?'], answer: 43, choices: [37, 40, 43, 49], hint: 'n² + n + 1 continuing' },
  { seq: [13, 21, 31, 43, '?'], answer: 57, choices: [51, 54, 57, 63], hint: 'n² + n + 1 continuing' },
  { seq: [21, 31, 43, 57, '?'], answer: 73, choices: [67, 70, 73, 79], hint: 'n² + n + 1 continuing' },

  // ── 2n² + 1 ─────────────────────────────────────────────
  { seq: [3, 9, 19, 33, '?'], answer: 51, choices: [43, 47, 51, 57], hint: '2n² + 1 for n = 1, 2, 3, 4, 5' },
  { seq: [9, 19, 33, 51, '?'], answer: 73, choices: [63, 68, 73, 81], hint: '2n² + 1 continuing' },
  { seq: [19, 33, 51, 73, '?'], answer: 99, choices: [89, 95, 99, 107], hint: '2n² + 1 continuing' },

  // ── Sum of cubes ────────────────────────────────────────
  { seq: [1, 9, 36, 100, '?'], answer: 225, choices: [150, 196, 225, 256], hint: 'Sum of cubes: 1³, 1³+2³, 1³+2³+3³, ...' },
  { seq: [9, 36, 100, 225, '?'], answer: 441, choices: [350, 400, 441, 500], hint: 'Sum of first n cubes' },

  // ── Oblong numbers n(n+2) ───────────────────────────────
  { seq: [3, 8, 15, 24, '?'], answer: 35, choices: [30, 33, 35, 40], hint: 'n(n+2) for n = 1, 2, 3, 4, 5' },
  { seq: [8, 15, 24, 35, '?'], answer: 48, choices: [42, 45, 48, 54], hint: 'n(n+2) continuing' },
  { seq: [15, 24, 35, 48, '?'], answer: 63, choices: [56, 60, 63, 70], hint: 'n(n+2) continuing' },
  { seq: [24, 35, 48, 63, '?'], answer: 80, choices: [72, 76, 80, 88], hint: 'n(n+2) continuing' },
  { seq: [35, 48, 63, 80, '?'], answer: 99, choices: [90, 95, 99, 105], hint: 'n(n+2) continuing' },

  // ── Centered square numbers ─────────────────────────────
  { seq: [1, 5, 13, 25, '?'], answer: 41, choices: [33, 37, 41, 49], hint: 'Centered square numbers: 1, 5, 13, 25, 41' },
  { seq: [5, 13, 25, 41, '?'], answer: 61, choices: [53, 57, 61, 69], hint: 'Centered square numbers' },
  { seq: [13, 25, 41, 61, '?'], answer: 85, choices: [77, 81, 85, 93], hint: 'Centered square numbers' },
  { seq: [25, 41, 61, 85, '?'], answer: 113, choices: [101, 108, 113, 121], hint: 'Centered square numbers' },

  // ── Star numbers ────────────────────────────────────────
  { seq: [1, 13, 37, 73, '?'], answer: 121, choices: [97, 109, 121, 145], hint: 'Star numbers: 6n(n−1)+1' },
  { seq: [13, 37, 73, 121, '?'], answer: 181, choices: [157, 169, 181, 205], hint: 'Star numbers' },

  // ── Powers of 2 plus/minus patterns ─────────────────────
  { seq: [3, 5, 9, 17, 33, '?'], answer: 65, choices: [49, 57, 65, 66], hint: '2^n + 1' },
  { seq: [1, 3, 7, 15, 31, 63, '?'], answer: 127, choices: [95, 111, 127, 128], hint: '2^n − 1' },
  { seq: [6, 10, 18, 34, '?'], answer: 66, choices: [50, 58, 66, 68], hint: '2^n + 2' },
  { seq: [3, 7, 15, 31, 63, '?'], answer: 127, choices: [95, 111, 127, 126], hint: '2^n − 1 (starting from 2^2)' },
  { seq: [11, 19, 35, 67, '?'], answer: 131, choices: [99, 115, 131, 134], hint: '2^n + 3' },
  { seq: [12, 20, 36, 68, '?'], answer: 132, choices: [100, 116, 132, 136], hint: '2^n + 4' },

  // ── Arithmetic with large steps ─────────────────────────
  { seq: [100, 175, 250, 325, '?'], answer: 400, choices: [375, 390, 400, 425], hint: 'Add 75 each time' },
  { seq: [50, 115, 180, 245, '?'], answer: 310, choices: [295, 305, 310, 320], hint: 'Add 65 each time' },
  { seq: [200, 255, 310, 365, '?'], answer: 420, choices: [400, 410, 420, 435], hint: 'Add 55 each time' },
  { seq: [10, 95, 180, 265, '?'], answer: 350, choices: [335, 340, 350, 365], hint: 'Add 85 each time' },

  // ── Perfect square differences ──────────────────────────
  { seq: [2, 6, 12, 20, 30, 42, '?'], answer: 56, choices: [48, 52, 56, 64], hint: 'n(n+1): differences increase by 2' },
  { seq: [1, 5, 14, 30, 55, 91, '?'], answer: 140, choices: [112, 126, 140, 168], hint: 'Sum of first n squares' },

  // ── Multiply by increasing integers ─────────────────────
  { seq: [1, 2, 6, 24, 120, '?'], answer: 720, choices: [360, 480, 720, 840], hint: '×2, ×3, ×4, ×5, ×6 (factorials)' },
  { seq: [2, 4, 12, 48, 240, '?'], answer: 1440, choices: [480, 960, 1440, 1920], hint: '×2, ×3, ×4, ×5, ×6' },
  { seq: [3, 6, 18, 72, 360, '?'], answer: 2160, choices: [720, 1440, 2160, 2880], hint: '×2, ×3, ×4, ×5, ×6' },
  { seq: [5, 10, 30, 120, 600, '?'], answer: 3600, choices: [1200, 2400, 3600, 4800], hint: '×2, ×3, ×4, ×5, ×6' },

  // ── Differences are squares ─────────────────────────────
  { seq: [1, 2, 6, 15, 31, '?'], answer: 56, choices: [42, 49, 56, 62], hint: 'Differences: 1, 4, 9, 16, 25 (perfect squares)' },
  { seq: [0, 1, 5, 14, 30, '?'], answer: 55, choices: [42, 48, 55, 60], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [3, 4, 8, 17, 33, '?'], answer: 58, choices: [45, 52, 58, 64], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [10, 11, 15, 24, 40, '?'], answer: 65, choices: [52, 58, 65, 72], hint: 'Differences: 1, 4, 9, 16, 25' },

  // ── Differences are cubes ───────────────────────────────
  { seq: [0, 1, 9, 36, 100, '?'], answer: 225, choices: [150, 196, 225, 256], hint: 'Differences: 1, 8, 27, 64, 125 (cubes)' },
  { seq: [5, 6, 14, 41, 105, '?'], answer: 230, choices: [170, 200, 230, 260], hint: 'Differences: 1, 8, 27, 64, 125' },

  // ── Differences are primes ──────────────────────────────
  { seq: [0, 2, 5, 10, 17, '?'], answer: 28, choices: [24, 26, 28, 30], hint: 'Differences: 2, 3, 5, 7, 11 (primes)' },
  { seq: [1, 3, 6, 11, 18, '?'], answer: 29, choices: [25, 27, 29, 31], hint: 'Differences: 2, 3, 5, 7, 11' },
  { seq: [10, 12, 15, 20, 27, '?'], answer: 38, choices: [34, 36, 38, 40], hint: 'Differences: 2, 3, 5, 7, 11' },

  // ── Double then subtract ────────────────────────────────
  { seq: [7, 12, 22, 42, '?'], answer: 82, choices: [62, 72, 82, 84], hint: '×2 − 2' },
  { seq: [4, 5, 7, 11, 19, '?'], answer: 35, choices: [27, 31, 35, 38], hint: '×2 − 3' },
  { seq: [6, 9, 15, 27, '?'], answer: 51, choices: [39, 45, 51, 54], hint: '×2 − 3' },
  { seq: [10, 17, 31, 59, '?'], answer: 115, choices: [89, 101, 115, 118], hint: '×2 − 3' },
  { seq: [8, 13, 23, 43, '?'], answer: 83, choices: [63, 73, 83, 86], hint: '×2 − 3' },

  // ── Triple then add ─────────────────────────────────────
  { seq: [1, 5, 17, 53, 161, '?'], answer: 485, choices: [322, 400, 485, 644], hint: '×3 + 2' },
  { seq: [2, 8, 26, 80, 242, '?'], answer: 728, choices: [484, 600, 728, 968], hint: '×3 + 2' },
  { seq: [1, 7, 25, 79, 241, '?'], answer: 727, choices: [482, 600, 727, 964], hint: '×3 + 4' },
  { seq: [3, 11, 35, 107, 323, '?'], answer: 971, choices: [646, 800, 971, 1292], hint: '×3 + 2' },

  // ── Quadratic sequences n²+c ────────────────────────────
  { seq: [6, 11, 18, 27, '?'], answer: 38, choices: [34, 36, 38, 42], hint: 'n² + 5 for n = 1,2,3 shifted' },
  { seq: [10, 17, 26, 37, '?'], answer: 50, choices: [44, 48, 50, 54], hint: 'n² + 1 starting from n=3' },
  { seq: [7, 12, 19, 28, '?'], answer: 39, choices: [35, 37, 39, 43], hint: 'n² + 3 pattern' },
  { seq: [11, 18, 27, 38, '?'], answer: 51, choices: [45, 49, 51, 55], hint: 'n² + 2 starting from n=3' },

  // ── n(n+3) ──────────────────────────────────────────────
  { seq: [4, 10, 18, 28, '?'], answer: 40, choices: [34, 37, 40, 45], hint: 'n(n+3) for n = 1, 2, 3, 4, 5' },
  { seq: [10, 18, 28, 40, '?'], answer: 54, choices: [48, 51, 54, 60], hint: 'n(n+3) continuing' },
  { seq: [18, 28, 40, 54, '?'], answer: 70, choices: [64, 67, 70, 76], hint: 'n(n+3) continuing' },

  // ── Triangular + constant ───────────────────────────────
  { seq: [2, 4, 7, 11, '?'], answer: 16, choices: [14, 15, 16, 18], hint: 'Triangular numbers +1: differences +2,+3,+4,+5' },
  { seq: [3, 5, 8, 12, '?'], answer: 17, choices: [15, 16, 17, 19], hint: 'Triangular numbers +2' },
  { seq: [4, 6, 9, 13, '?'], answer: 18, choices: [16, 17, 18, 20], hint: 'Triangular numbers +3' },
  { seq: [5, 7, 10, 14, '?'], answer: 19, choices: [17, 18, 19, 21], hint: 'Triangular numbers +4' },

  // ── Alternating ×then÷ ──────────────────────────────────
  { seq: [2, 10, 5, 25, 12, '?'], answer: 60, choices: [6, 30, 60, 120], hint: 'Alternate: ×5, then ÷2' },
  { seq: [4, 12, 6, 18, 9, '?'], answer: 27, choices: [4, 18, 27, 36], hint: 'Alternate: ×3, then ÷2' },
  { seq: [8, 16, 4, 8, 2, '?'], answer: 4, choices: [1, 2, 4, 8], hint: 'Alternate: ×2, then ÷4' },
  { seq: [3, 12, 4, 16, 8, '?'], answer: 32, choices: [4, 16, 32, 64], hint: 'Alternate: ×4, then ÷3 shift' },

  // ── Sum of digits equals n ──────────────────────────────
  { seq: [100, 200, 300, 400, '?'], answer: 500, choices: [450, 480, 500, 600], hint: 'Multiples of 100' },
  { seq: [1000, 2000, 3000, 4000, '?'], answer: 5000, choices: [4500, 4800, 5000, 6000], hint: 'Multiples of 1000' },
  { seq: [250, 500, 750, 1000, '?'], answer: 1250, choices: [1100, 1200, 1250, 1500], hint: 'Multiples of 250' },

  // ── Powers minus index ──────────────────────────────────
  { seq: [1, 3, 7, 13, 21, 31, '?'], answer: 43, choices: [37, 40, 43, 49], hint: 'Differences: +2, +4, +6, +8, +10, +12' },
  { seq: [2, 5, 10, 17, 26, '?'], answer: 37, choices: [33, 35, 37, 41], hint: 'n² + 1 for n = 1, 2, 3, 4, 5, 6' },
  { seq: [5, 10, 17, 26, 37, '?'], answer: 50, choices: [44, 48, 50, 54], hint: 'n² + 1 continuing' },

  // ── Cube + linear ───────────────────────────────────────
  { seq: [2, 10, 30, 68, '?'], answer: 130, choices: [100, 115, 130, 150], hint: 'n³ + n for n = 1, 2, 3, 4, 5' },
  { seq: [3, 12, 33, 72, '?'], answer: 135, choices: [110, 125, 135, 160], hint: 'n³ + 2n for n = 1, 2, 3, 4, 5' },
  { seq: [4, 14, 36, 76, '?'], answer: 140, choices: [115, 130, 140, 170], hint: 'n³ + 3n for n = 1, 2, 3, 4, 5' },

  // ── Tetrahedral numbers ─────────────────────────────────
  { seq: [1, 4, 10, 20, 35, 56, '?'], answer: 84, choices: [70, 77, 84, 98], hint: 'Tetrahedral numbers' },
  { seq: [4, 10, 20, 35, 56, '?'], answer: 84, choices: [70, 77, 84, 98], hint: 'Tetrahedral numbers continuing' },
  { seq: [10, 20, 35, 56, 84, '?'], answer: 120, choices: [105, 112, 120, 140], hint: 'Tetrahedral numbers continuing' },

  // ── Square pyramidal numbers ────────────────────────────
  { seq: [1, 5, 14, 30, '?'], answer: 55, choices: [42, 50, 55, 60], hint: 'Sum of first n squares' },
  { seq: [5, 14, 30, 55, '?'], answer: 91, choices: [75, 83, 91, 100], hint: 'Square pyramidal numbers' },
  { seq: [14, 30, 55, 91, '?'], answer: 140, choices: [120, 130, 140, 160], hint: 'Square pyramidal continuing' },

  // ── Centered triangular ─────────────────────────────────
  { seq: [1, 4, 10, 19, '?'], answer: 31, choices: [25, 28, 31, 36], hint: 'Centered triangular numbers' },
  { seq: [4, 10, 19, 31, '?'], answer: 46, choices: [40, 43, 46, 52], hint: 'Centered triangular continuing' },
  { seq: [10, 19, 31, 46, '?'], answer: 64, choices: [56, 60, 64, 72], hint: 'Centered triangular continuing' },

  // ── 3n+1 / Collatz-style ────────────────────────────────
  { seq: [1, 4, 13, 40, 121, '?'], answer: 364, choices: [242, 300, 364, 484], hint: '×3 + 1' },
  { seq: [2, 7, 22, 67, 202, '?'], answer: 607, choices: [404, 505, 607, 808], hint: '×3 + 1' },
  { seq: [5, 16, 49, 148, '?'], answer: 445, choices: [296, 370, 445, 592], hint: '×3 + 1' },

  // ── Squared differences ─────────────────────────────────
  { seq: [2, 3, 7, 18, 47, '?'], answer: 123, choices: [82, 100, 123, 141], hint: 'Differences: 1, 4, 11, 29 (almost tripling)' },
  { seq: [1, 2, 5, 12, 29, '?'], answer: 70, choices: [48, 58, 70, 84], hint: 'Each term ≈ previous × 2.4' },

  // ── Arithmetic with fractions-as-integers ───────────────
  { seq: [2, 5, 8, 11, 14, 17, '?'], answer: 20, choices: [18, 19, 20, 23], hint: 'Add 3 each time' },
  { seq: [3, 8, 13, 18, 23, '?'], answer: 28, choices: [26, 27, 28, 31], hint: 'Add 5 each time' },
  { seq: [7, 15, 23, 31, '?'], answer: 39, choices: [36, 38, 39, 42], hint: 'Add 8 each time' },
  { seq: [4, 11, 18, 25, '?'], answer: 32, choices: [29, 31, 32, 35], hint: 'Add 7 each time' },
  { seq: [6, 17, 28, 39, '?'], answer: 50, choices: [46, 48, 50, 54], hint: 'Add 11 each time' },

  // ── Special multiplication tables ───────────────────────
  { seq: [21, 42, 63, 84, '?'], answer: 105, choices: [96, 100, 105, 126], hint: 'Multiples of 21' },
  { seq: [23, 46, 69, 92, '?'], answer: 115, choices: [105, 110, 115, 138], hint: 'Multiples of 23' },
  { seq: [27, 54, 81, 108, '?'], answer: 135, choices: [125, 130, 135, 162], hint: 'Multiples of 27' },
  { seq: [29, 58, 87, 116, '?'], answer: 145, choices: [135, 140, 145, 174], hint: 'Multiples of 29' },
  { seq: [31, 62, 93, 124, '?'], answer: 155, choices: [145, 150, 155, 186], hint: 'Multiples of 31' },
  { seq: [37, 74, 111, 148, '?'], answer: 185, choices: [170, 180, 185, 222], hint: 'Multiples of 37' },
  { seq: [41, 82, 123, 164, '?'], answer: 205, choices: [190, 200, 205, 246], hint: 'Multiples of 41' },
  { seq: [43, 86, 129, 172, '?'], answer: 215, choices: [200, 210, 215, 258], hint: 'Multiples of 43' },

  // ── Differences are triangular ──────────────────────────
  { seq: [0, 1, 4, 10, 20, '?'], answer: 35, choices: [28, 32, 35, 40], hint: 'Differences: 1, 3, 6, 10, 15 (triangular)' },
  { seq: [5, 6, 9, 15, 25, '?'], answer: 40, choices: [33, 37, 40, 46], hint: 'Differences: 1, 3, 6, 10, 15 (triangular)' },
  { seq: [10, 11, 14, 20, 30, '?'], answer: 45, choices: [38, 42, 45, 51], hint: 'Differences: 1, 3, 6, 10, 15 (triangular)' },
  { seq: [2, 3, 6, 12, 22, '?'], answer: 37, choices: [30, 34, 37, 42], hint: 'Differences: 1, 3, 6, 10, 15 (triangular)' },

  // ── Interleaved arithmetic and geometric ────────────────
  { seq: [1, 2, 3, 4, 5, 8, '?'], answer: 7, choices: [7, 9, 10, 16], hint: 'Two sequences: +2 arithmetic and ×2 geometric interleaved' },
  { seq: [2, 3, 4, 9, 6, '?'], answer: 27, choices: [8, 18, 27, 36], hint: 'Odd positions +2, even positions ×3' },
  { seq: [1, 5, 3, 25, 5, '?'], answer: 125, choices: [7, 50, 125, 625], hint: 'Odd positions +2, even positions ×5' },
  { seq: [10, 3, 8, 9, 6, '?'], answer: 27, choices: [4, 18, 27, 81], hint: 'Odd positions −2, even positions ×3' },

  // ── Centered hexagonal numbers ──────────────────────────
  { seq: [1, 7, 19, 37, '?'], answer: 61, choices: [49, 55, 61, 73], hint: 'Centered hexagonal numbers: 3n²−3n+1' },
  { seq: [7, 19, 37, 61, '?'], answer: 91, choices: [79, 85, 91, 103], hint: 'Centered hexagonal numbers' },
  { seq: [19, 37, 61, 91, '?'], answer: 127, choices: [115, 121, 127, 139], hint: 'Centered hexagonal numbers' },

  // ── Lazy caterer's sequence ─────────────────────────────
  { seq: [1, 2, 4, 7, 11, '?'], answer: 16, choices: [14, 15, 16, 18], hint: 'Add 1, 2, 3, 4, 5' },
  { seq: [2, 4, 7, 11, 16, '?'], answer: 22, choices: [19, 20, 22, 25], hint: 'Add 2, 3, 4, 5, 6' },
  { seq: [4, 7, 11, 16, 22, '?'], answer: 29, choices: [26, 28, 29, 32], hint: 'Add 3, 4, 5, 6, 7' },
  { seq: [7, 11, 16, 22, 29, '?'], answer: 37, choices: [34, 36, 37, 40], hint: 'Add 4, 5, 6, 7, 8' },

  // ── Cake numbers ────────────────────────────────────────
  { seq: [1, 2, 4, 8, 15, '?'], answer: 26, choices: [22, 24, 26, 30], hint: 'Cake numbers: max pieces from n cuts' },
  { seq: [2, 4, 8, 15, 26, '?'], answer: 42, choices: [36, 39, 42, 48], hint: 'Cake numbers continuing' },

  // ── Bell numbers ────────────────────────────────────────
  { seq: [1, 1, 2, 5, 15, '?'], answer: 52, choices: [30, 42, 52, 65], hint: 'Bell numbers' },
  { seq: [1, 2, 5, 15, 52, '?'], answer: 203, choices: [104, 155, 203, 260], hint: 'Bell numbers continuing' },

  // ── Look-and-say inspired (length patterns) ─────────────
  { seq: [1, 11, 21, 1211, '?'], answer: 111221, choices: [3211, 12211, 111221, 312211], hint: 'Look-and-say: describe previous number' },

  // ── Padovan sequence ────────────────────────────────────
  { seq: [1, 1, 1, 2, 2, 3, '?'], answer: 4, choices: [3, 4, 5, 6], hint: 'Padovan: each = sum of 2nd and 3rd previous' },
  { seq: [1, 1, 2, 2, 3, 4, '?'], answer: 5, choices: [4, 5, 6, 7], hint: 'Padovan sequence continuing' },
  { seq: [1, 2, 2, 3, 4, 5, '?'], answer: 7, choices: [6, 7, 8, 9], hint: 'Padovan sequence continuing' },
  { seq: [2, 2, 3, 4, 5, 7, '?'], answer: 9, choices: [8, 9, 10, 12], hint: 'Padovan sequence continuing' },

  // ── Pell numbers ────────────────────────────────────────
  { seq: [0, 1, 2, 5, 12, '?'], answer: 29, choices: [17, 24, 29, 34], hint: 'Pell numbers: each = 2×prev + prev−1' },
  { seq: [1, 2, 5, 12, 29, '?'], answer: 70, choices: [41, 58, 70, 84], hint: 'Pell numbers continuing' },
  { seq: [2, 5, 12, 29, 70, '?'], answer: 169, choices: [99, 140, 169, 198], hint: 'Pell numbers continuing' },

  // ── Jacobsthal numbers ──────────────────────────────────
  { seq: [0, 1, 1, 3, 5, '?'], answer: 11, choices: [8, 9, 11, 13], hint: 'Jacobsthal: each = prev + 2×prev−1' },
  { seq: [1, 1, 3, 5, 11, '?'], answer: 21, choices: [16, 19, 21, 25], hint: 'Jacobsthal continuing' },
  { seq: [1, 3, 5, 11, 21, '?'], answer: 43, choices: [32, 37, 43, 48], hint: 'Jacobsthal continuing' },
  { seq: [3, 5, 11, 21, 43, '?'], answer: 85, choices: [64, 75, 85, 96], hint: 'Jacobsthal continuing' },

  // ── Tribonacci numbers ──────────────────────────────────
  { seq: [0, 0, 1, 1, 2, 4, '?'], answer: 7, choices: [5, 6, 7, 8], hint: 'Tribonacci: sum of previous three' },
  { seq: [0, 1, 1, 2, 4, 7, '?'], answer: 13, choices: [10, 11, 13, 14], hint: 'Tribonacci continuing' },
  { seq: [1, 1, 2, 4, 7, 13, '?'], answer: 24, choices: [19, 22, 24, 26], hint: 'Tribonacci continuing' },
  { seq: [1, 2, 4, 7, 13, 24, '?'], answer: 44, choices: [37, 40, 44, 48], hint: 'Tribonacci continuing' },

  // ── Narayana's cows ─────────────────────────────────────
  { seq: [1, 1, 1, 2, 3, 4, '?'], answer: 6, choices: [5, 6, 7, 8], hint: 'Each = prev + 3rd-prev' },
  { seq: [1, 1, 2, 3, 4, 6, '?'], answer: 9, choices: [7, 8, 9, 10], hint: 'Each = prev + 3rd-prev' },
  { seq: [1, 2, 3, 4, 6, 9, '?'], answer: 13, choices: [11, 12, 13, 15], hint: 'Each = prev + 3rd-prev' },
  { seq: [2, 3, 4, 6, 9, 13, '?'], answer: 19, choices: [16, 18, 19, 22], hint: 'Each = prev + 3rd-prev' },

  // ── Happy-number adjacent ───────────────────────────────
  { seq: [1, 7, 10, 13, 19, '?'], answer: 23, choices: [21, 23, 25, 28], hint: 'Happy numbers in order' },
  { seq: [23, 28, 31, 32, 44, '?'], answer: 49, choices: [46, 49, 52, 55], hint: 'Happy numbers continuing' },

  // ── Perfect numbers ×2 ──────────────────────────────────
  { seq: [6, 28, 496, '?'], answer: 8128, choices: [992, 2048, 8128, 9920], hint: 'Perfect numbers' },
  { seq: [12, 56, 992, '?'], answer: 16256, choices: [1984, 8128, 16256, 32512], hint: 'Twice the perfect numbers' },

  // ── Mixed challenging ───────────────────────────────────
  { seq: [2, 3, 5, 8, 12, 17, '?'], answer: 23, choices: [21, 22, 23, 25], hint: 'Differences: 1, 2, 3, 4, 5, 6' },
  { seq: [4, 9, 20, 43, 90, '?'], answer: 185, choices: [140, 160, 185, 200], hint: '×2 + 1, ×2 + 2, ×2 + 3, ×2 + 4, ×2 + 5' },
  { seq: [1, 2, 5, 10, 20, 38, '?'], answer: 71, choices: [56, 64, 71, 76], hint: 'Differences: 1, 3, 5, 10, 18, 33 (near doubling)' },
  { seq: [6, 10, 18, 34, 66, '?'], answer: 130, choices: [98, 114, 130, 132], hint: '×2 − 2' },
  { seq: [100, 50, 75, 37, 56, '?'], answer: 28, choices: [18, 28, 42, 75], hint: 'Alternate: ÷2 (round down), then ×1.5 (round up)' },
  { seq: [3, 12, 48, 192, 768, '?'], answer: 3072, choices: [1536, 2304, 3072, 6144], hint: '×4' },
  { seq: [5, 25, 125, 625, 3125, '?'], answer: 15625, choices: [6250, 12500, 15625, 31250], hint: '×5 each time' },
  { seq: [11, 23, 47, 95, '?'], answer: 191, choices: [143, 167, 191, 190], hint: '×2 + 1' },
  { seq: [6, 14, 30, 62, '?'], answer: 126, choices: [94, 110, 126, 124], hint: '×2 + 2' },
  { seq: [4, 12, 36, 108, 324, '?'], answer: 972, choices: [648, 864, 972, 1296], hint: '×3' },

  // ── Geometric with offset starts ────────────────────────
  { seq: [6, 12, 24, 48, 96, '?'], answer: 192, choices: [144, 168, 192, 384], hint: '×2 each time' },
  { seq: [11, 22, 44, 88, '?'], answer: 176, choices: [132, 154, 176, 352], hint: '×2 each time' },
  { seq: [9, 27, 81, 243, '?'], answer: 729, choices: [486, 648, 729, 972], hint: '×3 each time' },
  { seq: [13, 26, 52, 104, '?'], answer: 208, choices: [156, 182, 208, 416], hint: '×2 each time' },
  { seq: [15, 30, 60, 120, '?'], answer: 240, choices: [180, 210, 240, 480], hint: '×2 each time' },

  // ── Squares plus linear ─────────────────────────────────
  { seq: [2, 6, 12, 20, 30, '?'], answer: 42, choices: [36, 40, 42, 48], hint: 'n² + n for n = 1, 2, 3, 4, 5, 6' },
  { seq: [3, 8, 15, 24, 35, '?'], answer: 48, choices: [42, 45, 48, 54], hint: 'n² + 2n for n = 1, 2, 3, 4, 5, 6' },
  { seq: [5, 12, 21, 32, 45, '?'], answer: 60, choices: [54, 57, 60, 66], hint: 'n² + 4n for n = 1, 2, 3, 4, 5 shifted' },

  // ── Skip counting by unusual amounts ────────────────────
  { seq: [3, 10, 17, 24, 31, '?'], answer: 38, choices: [35, 37, 38, 41], hint: 'Add 7 each time' },
  { seq: [2, 11, 20, 29, '?'], answer: 38, choices: [34, 36, 38, 42], hint: 'Add 9 each time' },
  { seq: [4, 16, 28, 40, '?'], answer: 52, choices: [48, 50, 52, 56], hint: 'Add 12 each time' },
  { seq: [7, 23, 39, 55, '?'], answer: 71, choices: [65, 68, 71, 75], hint: 'Add 16 each time' },
  { seq: [1, 22, 43, 64, '?'], answer: 85, choices: [78, 82, 85, 90], hint: 'Add 21 each time' },

  // ── Subtraction by unusual amounts ──────────────────────
  { seq: [100, 87, 74, 61, '?'], answer: 48, choices: [44, 46, 48, 52], hint: 'Subtract 13 each time' },
  { seq: [200, 183, 166, 149, '?'], answer: 132, choices: [128, 130, 132, 136], hint: 'Subtract 17 each time' },
  { seq: [150, 131, 112, 93, '?'], answer: 74, choices: [70, 72, 74, 78], hint: 'Subtract 19 each time' },
  { seq: [300, 277, 254, 231, '?'], answer: 208, choices: [200, 204, 208, 214], hint: 'Subtract 23 each time' },

  // ── Cube plus constant ──────────────────────────────────
  { seq: [4, 11, 30, 67, '?'], answer: 128, choices: [100, 115, 128, 150], hint: 'n³ + 3 for n = 1, 2, 3, 4, 5' },
  { seq: [5, 12, 31, 68, '?'], answer: 129, choices: [100, 116, 129, 152], hint: 'n³ + 4 for n = 1, 2, 3, 4, 5' },
  { seq: [6, 13, 32, 69, '?'], answer: 130, choices: [101, 117, 130, 154], hint: 'n³ + 5 for n = 1, 2, 3, 4, 5' },
  { seq: [11, 18, 37, 74, '?'], answer: 135, choices: [106, 122, 135, 160], hint: 'n³ + 10 for n = 1, 2, 3, 4, 5' },

  // ── Abundant numbers ────────────────────────────────────
  { seq: [12, 18, 20, 24, '?'], answer: 30, choices: [28, 30, 32, 36], hint: 'Abundant numbers in order' },
  { seq: [18, 20, 24, 30, '?'], answer: 36, choices: [32, 34, 36, 40], hint: 'Abundant numbers continuing' },
  { seq: [24, 30, 36, 40, '?'], answer: 42, choices: [42, 44, 46, 48], hint: 'Abundant numbers continuing' },

  // ── Multiply alternating ────────────────────────────────
  { seq: [1, 2, 2, 4, 8, '?'], answer: 32, choices: [12, 16, 32, 64], hint: 'Multiply last two: 1×2, 2×1 shifted, 2×4, 4×8' },
  { seq: [2, 3, 6, 18, 108, '?'], answer: 1944, choices: [324, 648, 1944, 3888], hint: 'Each = product of previous two' },
  { seq: [1, 2, 2, 4, 8, 32, '?'], answer: 256, choices: [64, 128, 256, 512], hint: 'Each = product of previous two' },

  // ── Differences are Fibonacci ───────────────────────────
  { seq: [1, 2, 3, 5, 8, 13, '?'], answer: 21, choices: [16, 19, 21, 24], hint: 'Fibonacci sequence' },
  { seq: [0, 1, 2, 4, 7, 12, '?'], answer: 20, choices: [17, 18, 20, 22], hint: 'Differences: 1, 1, 2, 3, 5, 8 (Fibonacci)' },
  { seq: [10, 11, 12, 14, 17, 22, '?'], answer: 30, choices: [27, 29, 30, 32], hint: 'Differences are Fibonacci: 1, 1, 2, 3, 5, 8' },
  { seq: [5, 6, 7, 9, 12, 17, '?'], answer: 25, choices: [22, 24, 25, 27], hint: 'Differences are Fibonacci: 1, 1, 2, 3, 5, 8' },

  // ── Recaman-like ────────────────────────────────────────
  { seq: [0, 1, 3, 6, 2, 7, '?'], answer: 13, choices: [8, 10, 13, 14], hint: 'Recaman sequence' },

  // ── Stern-Brocot adjacent ───────────────────────────────
  { seq: [1, 1, 2, 1, 3, 2, '?'], answer: 3, choices: [1, 2, 3, 4], hint: 'Stern-Brocot sequence' },
  { seq: [1, 2, 1, 3, 2, 3, '?'], answer: 1, choices: [1, 2, 4, 5], hint: 'Stern-Brocot continuing' },

  // ── Mixed operations medium ─────────────────────────────
  { seq: [1, 3, 2, 6, 5, '?'], answer: 15, choices: [7, 10, 15, 20], hint: 'Alternate: ×3, then −1' },
  { seq: [2, 6, 3, 9, 6, '?'], answer: 18, choices: [9, 12, 18, 24], hint: 'Alternate: ×3, then ÷2' },
  { seq: [4, 16, 8, 32, 16, '?'], answer: 64, choices: [24, 32, 64, 128], hint: 'Alternate: ×4, then ÷2' },
  { seq: [5, 20, 10, 40, 20, '?'], answer: 80, choices: [30, 40, 80, 160], hint: 'Alternate: ×4, then ÷2' },
  { seq: [3, 9, 6, 18, 15, '?'], answer: 45, choices: [12, 30, 45, 54], hint: 'Alternate: ×3, then −3' },
  { seq: [10, 30, 25, 75, 70, '?'], answer: 210, choices: [65, 140, 210, 350], hint: 'Alternate: ×3, then −5' },

  // ── n² − n ──────────────────────────────────────────────
  { seq: [0, 2, 6, 12, 20, '?'], answer: 30, choices: [24, 28, 30, 36], hint: 'n² − n for n = 1, 2, 3, 4, 5, 6' },
  { seq: [6, 12, 20, 30, 42, '?'], answer: 56, choices: [48, 52, 56, 64], hint: 'n² − n continuing' },

  // ── n(2n−1) ─────────────────────────────────────────────
  { seq: [1, 6, 15, 28, 45, '?'], answer: 66, choices: [55, 60, 66, 78], hint: 'n(2n−1) for n = 1, 2, 3, 4, 5, 6' },
  { seq: [6, 15, 28, 45, 66, '?'], answer: 91, choices: [78, 84, 91, 105], hint: 'n(2n−1) continuing' },

  // ── n(2n+1) ─────────────────────────────────────────────
  { seq: [3, 10, 21, 36, '?'], answer: 55, choices: [45, 50, 55, 66], hint: 'n(2n+1) for n = 1, 2, 3, 4, 5' },
  { seq: [10, 21, 36, 55, '?'], answer: 78, choices: [66, 72, 78, 91], hint: 'n(2n+1) continuing' },
  { seq: [21, 36, 55, 78, '?'], answer: 105, choices: [91, 98, 105, 120], hint: 'n(2n+1) continuing' },

  // ── Catalan continuing ──────────────────────────────────
  { seq: [14, 42, 132, 429, '?'], answer: 1430, choices: [858, 1144, 1430, 1716], hint: 'Catalan numbers continuing' },

  // ── Sum of consecutive primes ───────────────────────────
  { seq: [2, 5, 10, 17, 28, '?'], answer: 41, choices: [35, 39, 41, 45], hint: 'Cumulative sum of primes: 2, 2+3, 2+3+5, ...' },
  { seq: [5, 10, 17, 28, 41, '?'], answer: 58, choices: [52, 55, 58, 64], hint: 'Cumulative sum of primes continuing' },
  { seq: [10, 17, 28, 41, 58, '?'], answer: 77, choices: [69, 73, 77, 84], hint: 'Cumulative sum of primes continuing' },

  // ── Arithmetic + squares ────────────────────────────────
  { seq: [1, 5, 13, 25, 41, '?'], answer: 61, choices: [53, 57, 61, 69], hint: 'Differences: 4, 8, 12, 16, 20' },
  { seq: [3, 7, 15, 27, 43, '?'], answer: 63, choices: [55, 59, 63, 71], hint: 'Differences: 4, 8, 12, 16, 20' },
  { seq: [2, 8, 18, 32, 50, '?'], answer: 72, choices: [64, 68, 72, 80], hint: '2n² for n = 1, 2, 3, 4, 5, 6' },
  { seq: [4, 16, 36, 64, 100, '?'], answer: 144, choices: [120, 132, 144, 160], hint: '4n² or (2n)²' },

  // ── Misc hard / tricky ──────────────────────────────────
  { seq: [1, 11, 111, '?'], answer: 1111, choices: [222, 555, 1111, 11111], hint: 'Add a digit 1 each time' },
  { seq: [7, 77, 777, '?'], answer: 7777, choices: [1554, 7000, 7777, 77777], hint: 'Add a digit 7 each time' },
  { seq: [5, 55, 555, '?'], answer: 5555, choices: [1110, 5000, 5555, 55555], hint: 'Add a digit 5 each time' },
  { seq: [3, 33, 333, '?'], answer: 3333, choices: [666, 3000, 3333, 33333], hint: 'Add a digit 3 each time' },
  { seq: [256, 225, 196, 169, '?'], answer: 144, choices: [121, 132, 144, 156], hint: 'Squares descending: 16², 15², 14², 13², 12²' },
  { seq: [400, 361, 324, 289, '?'], answer: 256, choices: [240, 250, 256, 270], hint: 'Squares descending: 20², 19², 18², 17², 16²' },
  { seq: [169, 144, 121, 100, '?'], answer: 81, choices: [64, 72, 81, 90], hint: 'Squares descending: 13², 12², 11², 10², 9²' },
  { seq: [289, 256, 225, 196, '?'], answer: 169, choices: [156, 162, 169, 180], hint: 'Squares descending: 17², 16², 15², 14², 13²' },
  { seq: [10, 20, 35, 56, '?'], answer: 84, choices: [70, 77, 84, 92], hint: 'Differences: 10, 15, 21, 28 (triangular)' },
  { seq: [1, 2, 3, 4, 5, 6, 7, '?'], answer: 8, choices: [8, 9, 10, 11], hint: 'Simply count up by 1' },
  { seq: [2, 4, 6, 8, 10, 12, '?'], answer: 14, choices: [13, 14, 15, 16], hint: 'Even numbers' },
  { seq: [1, 3, 5, 7, 9, 11, 13, '?'], answer: 15, choices: [14, 15, 16, 17], hint: 'Odd numbers' },
  { seq: [10, 100, 1000, '?'], answer: 10000, choices: [2000, 5000, 10000, 100000], hint: '×10 each time' },
  { seq: [4, 16, 64, 256, 1024, '?'], answer: 4096, choices: [2048, 3072, 4096, 8192], hint: '×4 each time' },
  { seq: [7, 49, 343, 2401, '?'], answer: 16807, choices: [4802, 9604, 16807, 33614], hint: '×7 each time' },
  { seq: [8, 64, 512, 4096, '?'], answer: 32768, choices: [8192, 16384, 32768, 65536], hint: '×8 each time' },
  { seq: [9, 81, 729, 6561, '?'], answer: 59049, choices: [13122, 26244, 59049, 78732], hint: '×9 each time' },
  { seq: [11, 121, 1331, '?'], answer: 14641, choices: [2662, 5324, 14641, 29282], hint: '×11 each time (powers of 11)' },
  { seq: [6, 8, 12, 18, 26, '?'], answer: 36, choices: [32, 34, 36, 40], hint: 'Differences: 2, 4, 6, 8, 10' },
  { seq: [1, 4, 11, 22, 37, '?'], answer: 56, choices: [48, 52, 56, 60], hint: 'Differences: 3, 7, 11, 15, 19' },
  { seq: [50, 47, 41, 32, 20, '?'], answer: 5, choices: [3, 5, 8, 10], hint: 'Subtract 3, 6, 9, 12, 15' },
  { seq: [1, 3, 9, 27, 81, '?'], answer: 243, choices: [162, 216, 243, 324], hint: '×3 each time (powers of 3)' },
  { seq: [2, 3, 5, 7, 11, 13, 17, '?'], answer: 19, choices: [18, 19, 20, 21], hint: 'Prime numbers' },
  { seq: [19, 23, 29, 31, '?'], answer: 37, choices: [33, 35, 37, 39], hint: 'Consecutive primes' },
  { seq: [31, 37, 41, 43, '?'], answer: 47, choices: [45, 47, 49, 51], hint: 'Consecutive primes' },
  { seq: [41, 43, 47, 53, '?'], answer: 59, choices: [55, 57, 59, 61], hint: 'Consecutive primes' },
  { seq: [47, 53, 59, 61, '?'], answer: 67, choices: [63, 65, 67, 71], hint: 'Consecutive primes' },
  { seq: [61, 67, 71, 73, '?'], answer: 79, choices: [75, 77, 79, 81], hint: 'Consecutive primes' },
  { seq: [73, 79, 83, 89, '?'], answer: 97, choices: [91, 93, 97, 101], hint: 'Consecutive primes' },
  { seq: [3, 5, 9, 15, 23, '?'], answer: 33, choices: [29, 31, 33, 37], hint: 'Differences: 2, 4, 6, 8, 10' },
  { seq: [2, 6, 14, 30, 62, '?'], answer: 126, choices: [94, 110, 126, 124], hint: '×2 + 2' },
  { seq: [7, 16, 34, 70, '?'], answer: 142, choices: [106, 124, 142, 140], hint: '×2 + 2' },
  { seq: [1, 4, 15, 56, '?'], answer: 209, choices: [112, 168, 209, 280], hint: 'Pattern: ×4−1, ×4−1' },
  { seq: [3, 10, 24, 52, 108, '?'], answer: 220, choices: [172, 196, 220, 256], hint: '×2 + 4' },
  { seq: [5, 14, 32, 68, '?'], answer: 140, choices: [104, 122, 140, 136], hint: '×2 + 4' },
  { seq: [1, 3, 4, 8, 15, 27, '?'], answer: 50, choices: [40, 45, 50, 54], hint: 'Sum of previous 3' },
  { seq: [2, 3, 4, 9, 16, 29, '?'], answer: 54, choices: [42, 48, 54, 58], hint: 'Sum of previous 3' },
  { seq: [4, 5, 6, 15, 26, 47, '?'], answer: 88, choices: [70, 78, 88, 94], hint: 'Sum of previous 3' },
  { seq: [50, 25, 50, 25, 50, '?'], answer: 25, choices: [12, 25, 50, 100], hint: 'Alternating 50, 25' },
  { seq: [1, 2, 1, 2, 1, '?'], answer: 2, choices: [1, 2, 3, 4], hint: 'Alternating 1, 2' },
  { seq: [3, 7, 3, 7, 3, '?'], answer: 7, choices: [3, 5, 7, 10], hint: 'Alternating 3, 7' },
  { seq: [5, 10, 5, 10, 5, '?'], answer: 10, choices: [5, 8, 10, 15], hint: 'Alternating 5, 10' },

  // ── Batch 2: More arithmetic progressions ───────────────
  { seq: [12, 19, 26, 33, '?'], answer: 40, choices: [37, 39, 40, 43], hint: 'Add 7 each time' },
  { seq: [8, 19, 30, 41, '?'], answer: 52, choices: [48, 50, 52, 55], hint: 'Add 11 each time' },
  { seq: [15, 28, 41, 54, '?'], answer: 67, choices: [63, 65, 67, 71], hint: 'Add 13 each time' },
  { seq: [20, 37, 54, 71, '?'], answer: 88, choices: [84, 86, 88, 92], hint: 'Add 17 each time' },
  { seq: [25, 44, 63, 82, '?'], answer: 101, choices: [97, 99, 101, 105], hint: 'Add 19 each time' },
  { seq: [30, 53, 76, 99, '?'], answer: 122, choices: [116, 119, 122, 128], hint: 'Add 23 each time' },
  { seq: [6, 15, 24, 33, '?'], answer: 42, choices: [38, 40, 42, 45], hint: 'Add 9 each time' },
  { seq: [11, 26, 41, 56, '?'], answer: 71, choices: [65, 68, 71, 76], hint: 'Add 15 each time' },
  { seq: [8, 29, 50, 71, '?'], answer: 92, choices: [86, 89, 92, 98], hint: 'Add 21 each time' },
  { seq: [3, 30, 57, 84, '?'], answer: 111, choices: [105, 108, 111, 117], hint: 'Add 27 each time' },
  { seq: [14, 47, 80, 113, '?'], answer: 146, choices: [138, 142, 146, 152], hint: 'Add 33 each time' },
  { seq: [5, 44, 83, 122, '?'], answer: 161, choices: [153, 157, 161, 167], hint: 'Add 39 each time' },
  { seq: [100, 84, 68, 52, '?'], answer: 36, choices: [32, 34, 36, 40], hint: 'Subtract 16 each time' },
  { seq: [95, 77, 59, 41, '?'], answer: 23, choices: [19, 21, 23, 27], hint: 'Subtract 18 each time' },
  { seq: [250, 225, 200, 175, '?'], answer: 150, choices: [140, 145, 150, 160], hint: 'Subtract 25 each time' },
  { seq: [180, 150, 120, 90, '?'], answer: 60, choices: [50, 55, 60, 70], hint: 'Subtract 30 each time' },
  { seq: [400, 360, 320, 280, '?'], answer: 240, choices: [220, 230, 240, 260], hint: 'Subtract 40 each time' },
  { seq: [350, 300, 250, 200, '?'], answer: 150, choices: [125, 140, 150, 175], hint: 'Subtract 50 each time' },
  { seq: [1000, 950, 900, 850, '?'], answer: 800, choices: [775, 790, 800, 825], hint: 'Subtract 50 each time' },
  { seq: [600, 525, 450, 375, '?'], answer: 300, choices: [275, 290, 300, 325], hint: 'Subtract 75 each time' },

  // ── Batch 2: More geometric sequences ───────────────────
  { seq: [12, 36, 108, 324, '?'], answer: 972, choices: [648, 864, 972, 1296], hint: '×3 each time' },
  { seq: [5, 20, 80, 320, '?'], answer: 1280, choices: [640, 960, 1280, 2560], hint: '×4 each time' },
  { seq: [3, 15, 75, 375, '?'], answer: 1875, choices: [750, 1125, 1875, 3750], hint: '×5 each time' },
  { seq: [2, 14, 98, 686, '?'], answer: 4802, choices: [1372, 2744, 4802, 9604], hint: '×7 each time' },
  { seq: [8, 40, 200, 1000, '?'], answer: 5000, choices: [2000, 3000, 5000, 10000], hint: '×5 each time' },
  { seq: [6, 24, 96, 384, '?'], answer: 1536, choices: [768, 1152, 1536, 3072], hint: '×4 each time' },
  { seq: [9, 36, 144, 576, '?'], answer: 2304, choices: [1152, 1728, 2304, 4608], hint: '×4 each time' },
  { seq: [7, 35, 175, 875, '?'], answer: 4375, choices: [1750, 2625, 4375, 8750], hint: '×5 each time' },
  { seq: [10, 60, 360, 2160, '?'], answer: 12960, choices: [4320, 8640, 12960, 25920], hint: '×6 each time' },
  { seq: [2, 16, 128, 1024, '?'], answer: 8192, choices: [2048, 4096, 8192, 16384], hint: '×8 each time' },
  { seq: [3200, 800, 200, 50, '?'], answer: 12, choices: [10, 12, 15, 25], hint: 'Divide by 4 each time (round down)' },
  { seq: [6250, 1250, 250, 50, '?'], answer: 10, choices: [5, 8, 10, 25], hint: 'Divide by 5 each time' },
  { seq: [5120, 1280, 320, 80, '?'], answer: 20, choices: [10, 16, 20, 40], hint: 'Divide by 4 each time' },

  // ── Batch 2: More squares ───────────────────────────────
  { seq: [196, 225, 256, 289, '?'], answer: 324, choices: [310, 318, 324, 340], hint: 'Squares of 14, 15, 16, 17, 18' },
  { seq: [225, 256, 289, 324, '?'], answer: 361, choices: [345, 356, 361, 380], hint: 'Squares of 15, 16, 17, 18, 19' },
  { seq: [256, 289, 324, 361, '?'], answer: 400, choices: [380, 392, 400, 420], hint: 'Squares of 16, 17, 18, 19, 20' },
  { seq: [324, 361, 400, 441, '?'], answer: 484, choices: [464, 476, 484, 510], hint: 'Squares of 18, 19, 20, 21, 22' },
  { seq: [361, 400, 441, 484, '?'], answer: 529, choices: [510, 520, 529, 550], hint: 'Squares of 19, 20, 21, 22, 23' },
  { seq: [400, 441, 484, 529, '?'], answer: 576, choices: [555, 568, 576, 600], hint: 'Squares of 20, 21, 22, 23, 24' },
  { seq: [441, 484, 529, 576, '?'], answer: 625, choices: [600, 615, 625, 650], hint: 'Squares of 21, 22, 23, 24, 25' },
  { seq: [529, 576, 625, 676, '?'], answer: 729, choices: [700, 716, 729, 760], hint: 'Squares of 23, 24, 25, 26, 27' },
  { seq: [576, 625, 676, 729, '?'], answer: 784, choices: [762, 775, 784, 810], hint: 'Squares of 24, 25, 26, 27, 28' },
  { seq: [625, 676, 729, 784, '?'], answer: 841, choices: [820, 833, 841, 870], hint: 'Squares of 25, 26, 27, 28, 29' },

  // ── Batch 2: More cubes ─────────────────────────────────
  { seq: [1331, 1728, 2197, 2744, '?'], answer: 3375, choices: [3000, 3200, 3375, 3600], hint: 'Cubes: 11³, 12³, 13³, 14³, 15³' },
  { seq: [1728, 2197, 2744, 3375, '?'], answer: 4096, choices: [3800, 3950, 4096, 4300], hint: 'Cubes: 12³, 13³, 14³, 15³, 16³' },
  { seq: [2197, 2744, 3375, 4096, '?'], answer: 4913, choices: [4500, 4700, 4913, 5100], hint: 'Cubes: 13³, 14³, 15³, 16³, 17³' },
  { seq: [2744, 3375, 4096, 4913, '?'], answer: 5832, choices: [5400, 5600, 5832, 6100], hint: 'Cubes: 14³, 15³, 16³, 17³, 18³' },
  { seq: [3375, 4096, 4913, 5832, '?'], answer: 6859, choices: [6300, 6600, 6859, 7200], hint: 'Cubes: 15³, 16³, 17³, 18³, 19³' },

  // ── Batch 2: More Fibonacci variants ────────────────────
  { seq: [9, 9, 18, 27, 45, '?'], answer: 72, choices: [54, 63, 72, 90], hint: 'Each = sum of previous two, starting 9, 9' },
  { seq: [10, 10, 20, 30, 50, '?'], answer: 80, choices: [60, 70, 80, 100], hint: 'Each = sum of previous two, starting 10, 10' },
  { seq: [1, 10, 11, 21, 32, '?'], answer: 53, choices: [42, 48, 53, 64], hint: 'Each = sum of previous two' },
  { seq: [2, 9, 11, 20, 31, '?'], answer: 51, choices: [40, 46, 51, 62], hint: 'Each = sum of previous two' },
  { seq: [4, 3, 7, 10, 17, '?'], answer: 27, choices: [23, 25, 27, 34], hint: 'Each = sum of previous two' },
  { seq: [5, 6, 11, 17, 28, '?'], answer: 45, choices: [36, 40, 45, 56], hint: 'Each = sum of previous two' },
  { seq: [7, 3, 10, 13, 23, '?'], answer: 36, choices: [30, 33, 36, 46], hint: 'Each = sum of previous two' },
  { seq: [6, 1, 7, 8, 15, '?'], answer: 23, choices: [19, 21, 23, 30], hint: 'Each = sum of previous two' },
  { seq: [8, 5, 13, 18, 31, '?'], answer: 49, choices: [40, 44, 49, 62], hint: 'Each = sum of previous two' },
  { seq: [11, 11, 22, 33, 55, '?'], answer: 88, choices: [66, 77, 88, 110], hint: 'Each = sum of previous two, starting 11, 11' },

  // ── Batch 2: More interleaved sequences ─────────────────
  { seq: [4, 1, 8, 3, 12, '?'], answer: 5, choices: [5, 7, 16, 24], hint: 'Two sequences: +4 and +2' },
  { seq: [100, 10, 90, 20, 80, '?'], answer: 30, choices: [30, 40, 60, 70], hint: 'Alternate: −10 and +10' },
  { seq: [5, 2, 15, 6, 25, '?'], answer: 10, choices: [10, 14, 35, 50], hint: 'Alternate: +10 and +4' },
  { seq: [1, 4, 3, 16, 5, '?'], answer: 36, choices: [7, 25, 36, 64], hint: 'Alternate: odd +2, even = squares 4,16,36' },
  { seq: [20, 1, 16, 4, 12, '?'], answer: 9, choices: [8, 9, 10, 16], hint: 'Alternate: −4 and squares 1,4,9' },
  { seq: [6, 5, 12, 10, 18, '?'], answer: 15, choices: [15, 20, 24, 30], hint: 'Two sequences: +6 and +5' },
  { seq: [1, 100, 2, 95, 3, '?'], answer: 90, choices: [4, 85, 90, 95], hint: 'Alternate: +1 and −5' },
  { seq: [3, 6, 9, 12, 15, '?'], answer: 18, choices: [16, 17, 18, 21], hint: 'Add 3 each time' },
  { seq: [7, 4, 14, 8, 21, '?'], answer: 12, choices: [12, 16, 28, 42], hint: 'Two sequences: +7 and +4' },
  { seq: [2, 1, 6, 3, 18, '?'], answer: 9, choices: [9, 27, 36, 54], hint: 'Alternate: ×3 and ×3 offset' },

  // ── Batch 2: More accelerating differences ──────────────
  { seq: [1, 3, 7, 15, 31, '?'], answer: 63, choices: [47, 55, 63, 62], hint: 'Differences double: 2, 4, 8, 16, 32' },
  { seq: [5, 7, 13, 25, 49, '?'], answer: 97, choices: [73, 85, 97, 98], hint: 'Differences double: 2, 6, 12, 24, 48' },
  { seq: [10, 15, 25, 45, 85, '?'], answer: 165, choices: [125, 145, 165, 170], hint: 'Differences double: 5, 10, 20, 40, 80' },
  { seq: [2, 5, 11, 23, 47, 95, '?'], answer: 191, choices: [143, 167, 191, 190], hint: '×2 + 1' },
  { seq: [3, 4, 7, 16, 43, '?'], answer: 124, choices: [86, 100, 124, 172], hint: 'Differences: 1, 3, 9, 27, 81 (powers of 3)' },
  { seq: [1, 2, 4, 10, 28, '?'], answer: 82, choices: [56, 64, 82, 100], hint: 'Differences: 1, 2, 6, 18, 54 (×3)' },
  { seq: [4, 6, 10, 18, 34, '?'], answer: 66, choices: [50, 58, 66, 68], hint: 'Differences double: 2, 4, 8, 16, 32' },
  { seq: [8, 9, 12, 21, 48, '?'], answer: 129, choices: [75, 96, 129, 192], hint: 'Differences: 1, 3, 9, 27, 81' },

  // ── Batch 2: More multiply-and-add ──────────────────────
  { seq: [1, 3, 7, 15, '?'], answer: 31, choices: [23, 27, 31, 30], hint: '×2 + 1' },
  { seq: [1, 4, 13, 40, '?'], answer: 121, choices: [80, 100, 121, 160], hint: '×3 + 1' },
  { seq: [4, 13, 40, 121, '?'], answer: 364, choices: [242, 300, 364, 484], hint: '×3 + 1' },
  { seq: [2, 11, 56, 281, '?'], answer: 1406, choices: [562, 1000, 1406, 2810], hint: '×5 + 1' },
  { seq: [3, 13, 53, 213, '?'], answer: 853, choices: [426, 640, 853, 1066], hint: '×4 + 1' },
  { seq: [1, 6, 31, 156, '?'], answer: 781, choices: [312, 500, 781, 1560], hint: '×5 + 1' },
  { seq: [2, 7, 22, 67, '?'], answer: 202, choices: [134, 168, 202, 270], hint: '×3 + 1 from 2' },
  { seq: [5, 11, 23, 47, 95, '?'], answer: 191, choices: [143, 167, 191, 190], hint: '×2 + 1 from 5' },
  { seq: [4, 10, 22, 46, '?'], answer: 94, choices: [70, 82, 94, 92], hint: '×2 + 2' },
  { seq: [3, 9, 21, 45, '?'], answer: 93, choices: [69, 81, 93, 90], hint: '×2 + 3' },

  // ── Batch 2: More negative sequences ────────────────────
  { seq: [5, 2, -1, -4, '?'], answer: -7, choices: [-9, -7, -5, -3], hint: 'Subtract 3 each time' },
  { seq: [10, 4, -2, -8, '?'], answer: -14, choices: [-18, -14, -12, -10], hint: 'Subtract 6 each time' },
  { seq: [15, 7, -1, -9, '?'], answer: -17, choices: [-21, -17, -13, -11], hint: 'Subtract 8 each time' },
  { seq: [20, 8, -4, -16, '?'], answer: -28, choices: [-32, -28, -24, -20], hint: 'Subtract 12 each time' },
  { seq: [-1, -3, -5, -7, '?'], answer: -9, choices: [-11, -9, -8, -6], hint: 'Subtract 2 each time' },
  { seq: [-2, -6, -10, -14, '?'], answer: -18, choices: [-20, -18, -16, -12], hint: 'Subtract 4 each time' },
  { seq: [-50, -40, -30, -20, '?'], answer: -10, choices: [-15, -12, -10, 0], hint: 'Add 10 each time' },
  { seq: [-100, -75, -50, -25, '?'], answer: 0, choices: [-10, -5, 0, 25], hint: 'Add 25 each time' },
  { seq: [30, 15, 0, -15, '?'], answer: -30, choices: [-35, -30, -25, -20], hint: 'Subtract 15 each time' },
  { seq: [25, 10, -5, -20, '?'], answer: -35, choices: [-40, -35, -30, -25], hint: 'Subtract 15 each time' },

  // ── Batch 2: More alternating operations ────────────────
  { seq: [2, 6, 3, 9, 6, '?'], answer: 18, choices: [9, 12, 18, 24], hint: 'Alternate: ×3, then ÷2' },
  { seq: [8, 24, 12, 36, 18, '?'], answer: 54, choices: [27, 36, 54, 72], hint: 'Alternate: ×3, then ÷2' },
  { seq: [1, 5, 3, 15, 13, '?'], answer: 65, choices: [15, 39, 65, 130], hint: 'Alternate: ×5, then −2' },
  { seq: [4, 20, 18, 90, 88, '?'], answer: 440, choices: [86, 176, 440, 880], hint: 'Alternate: ×5, then −2' },
  { seq: [3, 6, 4, 8, 6, '?'], answer: 12, choices: [8, 10, 12, 16], hint: 'Alternate: ×2, then −2' },
  { seq: [7, 21, 18, 54, 51, '?'], answer: 153, choices: [48, 102, 153, 204], hint: 'Alternate: ×3, then −3' },
  { seq: [10, 50, 45, 225, 220, '?'], answer: 1100, choices: [215, 440, 1100, 2200], hint: 'Alternate: ×5, then −5' },
  { seq: [6, 18, 14, 42, 38, '?'], answer: 114, choices: [34, 76, 114, 152], hint: 'Alternate: ×3, then −4' },
  { seq: [2, 10, 7, 35, 32, '?'], answer: 160, choices: [29, 64, 160, 320], hint: 'Alternate: ×5, then −3' },
  { seq: [5, 15, 12, 36, 33, '?'], answer: 99, choices: [30, 66, 99, 132], hint: 'Alternate: ×3, then −3' },

  // ── Batch 2: More quadratic n²+an+b ─────────────────────
  { seq: [1, 6, 15, 28, 45, '?'], answer: 66, choices: [55, 60, 66, 78], hint: 'n(2n−1) sequence' },
  { seq: [4, 11, 22, 37, 56, '?'], answer: 79, choices: [71, 75, 79, 85], hint: 'Differences: 7, 11, 15, 19, 23' },
  { seq: [3, 12, 25, 42, 63, '?'], answer: 88, choices: [80, 84, 88, 96], hint: 'Differences: 9, 13, 17, 21, 25' },
  { seq: [1, 8, 19, 34, 53, '?'], answer: 76, choices: [68, 72, 76, 84], hint: 'Differences: 7, 11, 15, 19, 23' },
  { seq: [2, 11, 26, 47, '?'], answer: 74, choices: [66, 70, 74, 82], hint: 'Differences: 9, 15, 21, 27' },
  { seq: [5, 16, 33, 56, '?'], answer: 85, choices: [77, 81, 85, 93], hint: 'Differences: 11, 17, 23, 29' },
  { seq: [1, 10, 25, 46, '?'], answer: 73, choices: [63, 68, 73, 82], hint: 'Differences: 9, 15, 21, 27' },
  { seq: [6, 19, 38, 63, '?'], answer: 94, choices: [84, 90, 94, 102], hint: 'Differences: 13, 19, 25, 31' },

  // ── Batch 2: More reverse square sequences ─────────────
  { seq: [484, 441, 400, 361, '?'], answer: 324, choices: [300, 312, 324, 340], hint: 'Squares descending: 22², 21², 20², 19², 18²' },
  { seq: [529, 484, 441, 400, '?'], answer: 361, choices: [345, 356, 361, 380], hint: 'Squares descending: 23², 22², 21², 20², 19²' },
  { seq: [576, 529, 484, 441, '?'], answer: 400, choices: [380, 392, 400, 420], hint: 'Squares descending: 24², 23², 22², 21², 20²' },
  { seq: [625, 576, 529, 484, '?'], answer: 441, choices: [420, 432, 441, 460], hint: 'Squares descending: 25², 24², 23², 22², 21²' },
  { seq: [196, 169, 144, 121, '?'], answer: 100, choices: [90, 96, 100, 110], hint: 'Squares descending: 14², 13², 12², 11², 10²' },

  // ── Batch 2: More mixed patterns ────────────────────────
  { seq: [1, 4, 2, 8, 4, '?'], answer: 16, choices: [6, 10, 16, 32], hint: 'Alternate: ×4, then ÷2' },
  { seq: [3, 12, 6, 24, 12, '?'], answer: 48, choices: [18, 24, 48, 96], hint: 'Alternate: ×4, then ÷2' },
  { seq: [5, 15, 10, 30, 25, '?'], answer: 75, choices: [30, 50, 75, 150], hint: 'Alternate: ×3, then −5' },
  { seq: [2, 8, 4, 16, 8, '?'], answer: 32, choices: [12, 16, 32, 64], hint: 'Alternate: ×4, then ÷2' },
  { seq: [100, 50, 150, 75, 225, '?'], answer: 112, choices: [50, 112, 300, 450], hint: 'Alternate: ÷2, then ×3' },
  { seq: [7, 14, 10, 20, 16, '?'], answer: 32, choices: [22, 26, 32, 48], hint: 'Alternate: ×2, then −4' },
  { seq: [1, 3, 9, 27, 81, 243, '?'], answer: 729, choices: [486, 648, 729, 972], hint: '×3 each time' },
  { seq: [2, 5, 12, 27, 58, '?'], answer: 121, choices: [89, 105, 121, 140], hint: '×2 + 1, ×2 + 2 alternating' },
  { seq: [4, 9, 25, 49, 121, '?'], answer: 169, choices: [144, 156, 169, 196], hint: 'Squares of primes' },
  { seq: [1, 10, 100, 1000, 10000, '?'], answer: 100000, choices: [20000, 50000, 100000, 1000000], hint: '×10 each time' },

  // ── Batch 2: Square minus square ────────────────────────
  { seq: [3, 5, 7, 9, '?'], answer: 11, choices: [10, 11, 12, 13], hint: 'Odd numbers (differences of consecutive squares)' },
  { seq: [5, 7, 9, 11, 13, '?'], answer: 15, choices: [14, 15, 16, 17], hint: 'Odd numbers continuing' },
  { seq: [7, 9, 11, 13, 15, '?'], answer: 17, choices: [16, 17, 18, 19], hint: 'Odd numbers continuing' },
  { seq: [11, 13, 15, 17, 19, '?'], answer: 21, choices: [20, 21, 22, 23], hint: 'Odd numbers continuing' },
  { seq: [13, 15, 17, 19, 21, '?'], answer: 23, choices: [22, 23, 24, 25], hint: 'Odd numbers continuing' },
  { seq: [15, 17, 19, 21, 23, '?'], answer: 25, choices: [24, 25, 26, 27], hint: 'Odd numbers continuing' },
  { seq: [17, 19, 21, 23, '?'], answer: 25, choices: [24, 25, 26, 27], hint: 'Odd numbers continuing' },
  { seq: [19, 21, 23, 25, '?'], answer: 27, choices: [26, 27, 28, 29], hint: 'Odd numbers continuing' },
  { seq: [23, 25, 27, 29, '?'], answer: 31, choices: [30, 31, 32, 33], hint: 'Odd numbers continuing' },
  { seq: [31, 33, 35, 37, '?'], answer: 39, choices: [38, 39, 40, 41], hint: 'Odd numbers continuing' },

  // ── Batch 2: Even number sequences ──────────────────────
  { seq: [4, 6, 8, 10, 12, '?'], answer: 14, choices: [13, 14, 15, 16], hint: 'Even numbers from 4' },
  { seq: [12, 14, 16, 18, '?'], answer: 20, choices: [19, 20, 21, 22], hint: 'Even numbers from 12' },
  { seq: [20, 22, 24, 26, '?'], answer: 28, choices: [27, 28, 29, 30], hint: 'Even numbers from 20' },
  { seq: [40, 42, 44, 46, '?'], answer: 48, choices: [47, 48, 49, 50], hint: 'Even numbers from 40' },
  { seq: [50, 52, 54, 56, '?'], answer: 58, choices: [57, 58, 59, 60], hint: 'Even numbers from 50' },
  { seq: [60, 62, 64, 66, '?'], answer: 68, choices: [67, 68, 69, 70], hint: 'Even numbers from 60' },
  { seq: [72, 74, 76, 78, '?'], answer: 80, choices: [79, 80, 81, 82], hint: 'Even numbers from 72' },
  { seq: [84, 86, 88, 90, '?'], answer: 92, choices: [91, 92, 93, 94], hint: 'Even numbers from 84' },
  { seq: [90, 92, 94, 96, '?'], answer: 98, choices: [97, 98, 99, 100], hint: 'Even numbers from 90' },
  { seq: [100, 102, 104, 106, '?'], answer: 108, choices: [107, 108, 109, 110], hint: 'Even numbers from 100' },

  // ── Batch 2: More complicated patterns ──────────────────
  { seq: [2, 3, 5, 8, 13, 21, 34, '?'], answer: 55, choices: [42, 48, 55, 68], hint: 'Fibonacci from 2, 3' },
  { seq: [1, 4, 27, 256, '?'], answer: 3125, choices: [625, 1024, 3125, 4096], hint: 'n^n: 1¹, 2², 3³, 4⁴, 5⁵' },
  { seq: [4, 27, 256, 3125, '?'], answer: 46656, choices: [15625, 32768, 46656, 78125], hint: 'n^n: 2², 3³, 4⁴, 5⁵, 6⁶' },
  { seq: [1, 2, 3, 5, 7, 11, '?'], answer: 15, choices: [13, 15, 17, 19], hint: 'Differences double in pairs: +1,+1,+2,+2,+4,+4' },
  { seq: [3, 6, 11, 20, 37, '?'], answer: 70, choices: [54, 62, 70, 74], hint: 'Almost doubling: ×2−0, ×2−1, ×2−2...' },
  { seq: [2, 5, 12, 29, 70, '?'], answer: 169, choices: [99, 140, 169, 198], hint: 'Pell numbers' },
  { seq: [1, 2, 5, 13, 34, '?'], answer: 89, choices: [55, 72, 89, 100], hint: 'Every other Fibonacci number' },
  { seq: [1, 3, 8, 21, 55, '?'], answer: 144, choices: [89, 110, 144, 200], hint: 'Every other Fibonacci number' },

  // ── Batch 2: More 2n² patterns ──────────────────────────
  { seq: [8, 18, 32, 50, 72, '?'], answer: 98, choices: [86, 92, 98, 108], hint: '2n² for n = 2, 3, 4, 5, 6, 7' },
  { seq: [18, 32, 50, 72, 98, '?'], answer: 128, choices: [116, 122, 128, 140], hint: '2n² continuing' },
  { seq: [32, 50, 72, 98, 128, '?'], answer: 162, choices: [148, 155, 162, 176], hint: '2n² continuing' },

  // ── Batch 2: More 3n² patterns ──────────────────────────
  { seq: [12, 27, 48, 75, 108, '?'], answer: 147, choices: [130, 140, 147, 162], hint: '3n² for n = 2, 3, 4, 5, 6, 7' },
  { seq: [27, 48, 75, 108, 147, '?'], answer: 192, choices: [175, 185, 192, 210], hint: '3n² continuing' },
  { seq: [48, 75, 108, 147, 192, '?'], answer: 243, choices: [225, 235, 243, 264], hint: '3n² continuing' },

  // ── Batch 2: n³ + n ─────────────────────────────────────
  { seq: [10, 30, 68, 130, '?'], answer: 222, choices: [190, 210, 222, 250], hint: 'n³ + n for n = 2, 3, 4, 5, 6' },
  { seq: [30, 68, 130, 222, '?'], answer: 350, choices: [300, 330, 350, 380], hint: 'n³ + n continuing' },
  { seq: [68, 130, 222, 350, '?'], answer: 520, choices: [460, 490, 520, 560], hint: 'n³ + n continuing' },

  // ── Batch 2: Centered pentagonal ────────────────────────
  { seq: [1, 6, 16, 31, '?'], answer: 51, choices: [41, 46, 51, 56], hint: 'Centered pentagonal numbers' },
  { seq: [6, 16, 31, 51, '?'], answer: 76, choices: [66, 71, 76, 81], hint: 'Centered pentagonal continuing' },
  { seq: [16, 31, 51, 76, '?'], answer: 106, choices: [96, 101, 106, 111], hint: 'Centered pentagonal continuing' },

  // ── Batch 2: Sum of digits repeated ─────────────────────
  { seq: [27, 36, 45, 54, '?'], answer: 63, choices: [59, 61, 63, 72], hint: 'Add 9; digit sum always 9' },
  { seq: [36, 45, 54, 63, '?'], answer: 72, choices: [68, 70, 72, 81], hint: 'Add 9; digit sum always 9' },
  { seq: [45, 54, 63, 72, '?'], answer: 81, choices: [77, 79, 81, 90], hint: 'Add 9; digit sum always 9' },
  { seq: [54, 63, 72, 81, '?'], answer: 90, choices: [86, 88, 90, 99], hint: 'Add 9; digit sum always 9' },

  // ── Batch 2: Powers of 2 sums ───────────────────────────
  { seq: [1, 3, 7, 15, 31, '?'], answer: 63, choices: [47, 55, 63, 64], hint: '2^n − 1 (sum of powers of 2)' },
  { seq: [3, 7, 15, 31, 63, '?'], answer: 127, choices: [95, 111, 127, 128], hint: '2^n − 1 continuing' },
  { seq: [7, 15, 31, 63, 127, '?'], answer: 255, choices: [191, 223, 255, 256], hint: '2^n − 1 continuing' },
  { seq: [15, 31, 63, 127, 255, '?'], answer: 511, choices: [383, 447, 511, 512], hint: '2^n − 1 continuing' },

  // ── Batch 2: Multiple of prime sequences ────────────────
  { seq: [4, 6, 10, 14, 22, '?'], answer: 26, choices: [24, 26, 28, 34], hint: '2 × primes: 2×2, 2×3, 2×5, 2×7, 2×11, 2×13' },
  { seq: [6, 9, 15, 21, 33, '?'], answer: 39, choices: [36, 39, 42, 51], hint: '3 × primes' },
  { seq: [8, 12, 20, 28, 44, '?'], answer: 52, choices: [48, 52, 56, 68], hint: '4 × primes' },
  { seq: [10, 15, 25, 35, 55, '?'], answer: 65, choices: [60, 65, 70, 85], hint: '5 × primes' },
  { seq: [12, 18, 30, 42, 66, '?'], answer: 78, choices: [72, 78, 84, 102], hint: '6 × primes' },

  // ── Batch 2: More special multiples ─────────────────────
  { seq: [24, 48, 72, 96, '?'], answer: 120, choices: [108, 114, 120, 144], hint: 'Multiples of 24' },
  { seq: [36, 72, 108, 144, '?'], answer: 180, choices: [160, 170, 180, 216], hint: 'Multiples of 36' },
  { seq: [48, 96, 144, 192, '?'], answer: 240, choices: [220, 230, 240, 288], hint: 'Multiples of 48' },
  { seq: [60, 120, 180, 240, '?'], answer: 300, choices: [280, 290, 300, 360], hint: 'Multiples of 60' },
  { seq: [72, 144, 216, 288, '?'], answer: 360, choices: [336, 348, 360, 432], hint: 'Multiples of 72' },
  { seq: [84, 168, 252, 336, '?'], answer: 420, choices: [392, 406, 420, 504], hint: 'Multiples of 84' },
  { seq: [96, 192, 288, 384, '?'], answer: 480, choices: [448, 464, 480, 576], hint: 'Multiples of 96' },

  // ── Batch 2: Mixed tripling ─────────────────────────────
  { seq: [1, 3, 9, 27, 81, 243, 729, '?'], answer: 2187, choices: [1458, 1944, 2187, 2916], hint: '×3 each time' },
  { seq: [4, 12, 36, 108, 324, 972, '?'], answer: 2916, choices: [1944, 2592, 2916, 3888], hint: '×3 each time' },
  { seq: [5, 15, 45, 135, 405, '?'], answer: 1215, choices: [810, 1080, 1215, 1620], hint: '×3 each time' },

  // ── Batch 2: More Tribonacci ────────────────────────────
  { seq: [2, 4, 7, 13, 24, '?'], answer: 44, choices: [37, 40, 44, 48], hint: 'Tribonacci-like: sum of previous three' },
  { seq: [1, 3, 5, 9, 17, '?'], answer: 31, choices: [25, 28, 31, 35], hint: 'Sum of previous three' },
  { seq: [2, 2, 4, 8, 14, '?'], answer: 26, choices: [22, 24, 26, 30], hint: 'Sum of previous three' },
  { seq: [3, 3, 3, 9, 15, '?'], answer: 27, choices: [21, 24, 27, 33], hint: 'Sum of previous three' },
  { seq: [1, 1, 3, 5, 9, 17, '?'], answer: 31, choices: [25, 28, 31, 35], hint: 'Sum of previous three' },
  { seq: [5, 5, 5, 15, 25, '?'], answer: 45, choices: [35, 40, 45, 55], hint: 'Sum of previous three' },

  // ── Batch 2: Differences are consecutive multiples ──────
  { seq: [1, 4, 10, 19, 31, '?'], answer: 46, choices: [40, 43, 46, 52], hint: 'Differences: 3, 6, 9, 12, 15' },
  { seq: [2, 6, 14, 26, 42, '?'], answer: 62, choices: [54, 58, 62, 70], hint: 'Differences: 4, 8, 12, 16, 20' },
  { seq: [1, 6, 16, 31, 51, '?'], answer: 76, choices: [66, 71, 76, 86], hint: 'Differences: 5, 10, 15, 20, 25' },
  { seq: [3, 9, 21, 39, 63, '?'], answer: 93, choices: [81, 87, 93, 105], hint: 'Differences: 6, 12, 18, 24, 30' },
  { seq: [2, 9, 23, 44, 72, '?'], answer: 107, choices: [93, 100, 107, 121], hint: 'Differences: 7, 14, 21, 28, 35' },
  { seq: [1, 9, 25, 49, 81, '?'], answer: 121, choices: [100, 110, 121, 144], hint: 'Differences: 8, 16, 24, 32, 40' },
  { seq: [5, 14, 32, 59, 95, '?'], answer: 140, choices: [125, 133, 140, 158], hint: 'Differences: 9, 18, 27, 36, 45' },
  { seq: [3, 13, 33, 63, 103, '?'], answer: 153, choices: [133, 143, 153, 173], hint: 'Differences: 10, 20, 30, 40, 50' },

  // ── Batch 2: Decagonal numbers ──────────────────────────
  { seq: [1, 10, 27, 52, '?'], answer: 85, choices: [70, 78, 85, 95], hint: 'Decagonal numbers' },
  { seq: [10, 27, 52, 85, '?'], answer: 126, choices: [110, 118, 126, 140], hint: 'Decagonal numbers continuing' },

  // ── Batch 2: Heptagonal numbers ─────────────────────────
  { seq: [1, 7, 18, 34, '?'], answer: 55, choices: [45, 50, 55, 65], hint: 'Heptagonal numbers' },
  { seq: [7, 18, 34, 55, '?'], answer: 81, choices: [71, 76, 81, 91], hint: 'Heptagonal numbers continuing' },
  { seq: [18, 34, 55, 81, '?'], answer: 112, choices: [100, 106, 112, 125], hint: 'Heptagonal numbers continuing' },

  // ── Batch 2: Octagonal numbers ──────────────────────────
  { seq: [1, 8, 21, 40, '?'], answer: 65, choices: [52, 58, 65, 78], hint: 'Octagonal numbers' },
  { seq: [8, 21, 40, 65, '?'], answer: 96, choices: [82, 89, 96, 110], hint: 'Octagonal numbers continuing' },
  { seq: [21, 40, 65, 96, '?'], answer: 133, choices: [118, 126, 133, 148], hint: 'Octagonal numbers continuing' },

  // ── Batch 2: Nonagonal numbers ──────────────────────────
  { seq: [1, 9, 24, 46, '?'], answer: 75, choices: [60, 68, 75, 88], hint: 'Nonagonal numbers' },
  { seq: [9, 24, 46, 75, '?'], answer: 111, choices: [96, 104, 111, 126], hint: 'Nonagonal numbers continuing' },

  // ── Batch 2: More tricky double operations ──────────────
  { seq: [1, 3, 8, 22, 63, '?'], answer: 185, choices: [126, 155, 185, 252], hint: '×3−1, ×3−2, ×3−3...' },
  { seq: [1, 4, 13, 43, '?'], answer: 142, choices: [86, 112, 142, 172], hint: 'Differences: ×3 + 1 adjusted' },
  { seq: [5, 16, 49, 148, 445, '?'], answer: 1336, choices: [890, 1112, 1336, 1780], hint: '×3 + 1' },
  { seq: [10, 25, 55, 115, '?'], answer: 235, choices: [175, 205, 235, 270], hint: '×2 + 5' },
  { seq: [3, 10, 24, 52, 108, '?'], answer: 220, choices: [172, 196, 220, 256], hint: '×2 + 4' },
  { seq: [7, 17, 37, 77, '?'], answer: 157, choices: [117, 137, 157, 154], hint: '×2 + 3' },
  { seq: [4, 14, 44, 134, '?'], answer: 404, choices: [268, 336, 404, 536], hint: '×3 + 2' },
  { seq: [6, 19, 58, 175, '?'], answer: 526, choices: [350, 438, 526, 700], hint: '×3 + 1' },
  { seq: [2, 9, 30, 93, '?'], answer: 282, choices: [188, 234, 282, 376], hint: '×3 + 3' },
  { seq: [1, 6, 21, 66, '?'], answer: 201, choices: [132, 168, 201, 264], hint: '×3 + 3' },

  // ── Batch 2: More n(n+1)(n+2)/6 related ─────────────────
  { seq: [1, 4, 10, 20, 35, '?'], answer: 56, choices: [45, 50, 56, 70], hint: 'Tetrahedral: C(n,3)' },
  { seq: [20, 35, 56, 84, '?'], answer: 120, choices: [100, 110, 120, 140], hint: 'Tetrahedral continuing' },
  { seq: [56, 84, 120, 165, '?'], answer: 220, choices: [195, 210, 220, 250], hint: 'Tetrahedral continuing' },

  // ── Batch 2: More repunit-based ─────────────────────────
  { seq: [3, 33, 333, 3333, '?'], answer: 33333, choices: [6666, 9999, 33333, 333333], hint: 'All 3s, one more digit' },
  { seq: [4, 44, 444, 4444, '?'], answer: 44444, choices: [8888, 11111, 44444, 444444], hint: 'All 4s, one more digit' },
  { seq: [6, 66, 666, 6666, '?'], answer: 66666, choices: [13332, 33333, 66666, 666666], hint: 'All 6s, one more digit' },
  { seq: [7, 77, 777, 7777, '?'], answer: 77777, choices: [15554, 38888, 77777, 777777], hint: 'All 7s, one more digit' },
  { seq: [8, 88, 888, 8888, '?'], answer: 88888, choices: [17776, 44444, 88888, 888888], hint: 'All 8s, one more digit' },

  // ── Batch 2: More mixed sequences ───────────────────────
  { seq: [6, 11, 22, 27, 54, '?'], answer: 59, choices: [59, 81, 108, 162], hint: 'Alternate: +5, then ×2' },
  { seq: [4, 8, 11, 22, 25, '?'], answer: 50, choices: [28, 37, 50, 75], hint: 'Alternate: ×2, then +3' },
  { seq: [3, 9, 7, 21, 19, '?'], answer: 57, choices: [17, 38, 57, 76], hint: 'Alternate: ×3, then −2' },
  { seq: [2, 8, 6, 24, 22, '?'], answer: 88, choices: [20, 44, 88, 176], hint: 'Alternate: ×4, then −2' },
  { seq: [10, 20, 17, 34, 31, '?'], answer: 62, choices: [28, 48, 62, 93], hint: 'Alternate: ×2, then −3' },
  { seq: [1, 5, 4, 20, 19, '?'], answer: 95, choices: [18, 57, 95, 190], hint: 'Alternate: ×5, then −1' },
  { seq: [3, 12, 9, 36, 33, '?'], answer: 132, choices: [30, 66, 132, 264], hint: 'Alternate: ×4, then −3' },
  { seq: [8, 24, 20, 60, 56, '?'], answer: 168, choices: [52, 112, 168, 336], hint: 'Alternate: ×3, then −4' },
  { seq: [7, 28, 24, 96, 92, '?'], answer: 368, choices: [88, 184, 368, 736], hint: 'Alternate: ×4, then −4' },
  { seq: [5, 10, 8, 16, 14, '?'], answer: 28, choices: [12, 22, 28, 42], hint: 'Alternate: ×2, then −2' },

  // ── Batch 2: Simple count-by patterns ───────────────────
  { seq: [2, 7, 12, 17, 22, '?'], answer: 27, choices: [25, 26, 27, 30], hint: 'Add 5 each time' },
  { seq: [3, 9, 15, 21, 27, '?'], answer: 33, choices: [30, 31, 33, 36], hint: 'Add 6 each time' },
  { seq: [4, 11, 18, 25, 32, '?'], answer: 39, choices: [36, 38, 39, 42], hint: 'Add 7 each time' },
  { seq: [5, 13, 21, 29, 37, '?'], answer: 45, choices: [42, 44, 45, 48], hint: 'Add 8 each time' },
  { seq: [6, 15, 24, 33, 42, '?'], answer: 51, choices: [48, 50, 51, 54], hint: 'Add 9 each time' },
  { seq: [7, 17, 27, 37, 47, '?'], answer: 57, choices: [54, 56, 57, 60], hint: 'Add 10 each time' },
  { seq: [8, 19, 30, 41, 52, '?'], answer: 63, choices: [60, 62, 63, 66], hint: 'Add 11 each time' },
  { seq: [9, 21, 33, 45, 57, '?'], answer: 69, choices: [66, 68, 69, 72], hint: 'Add 12 each time' },
  { seq: [10, 23, 36, 49, 62, '?'], answer: 75, choices: [72, 74, 75, 78], hint: 'Add 13 each time' },
  { seq: [11, 25, 39, 53, 67, '?'], answer: 81, choices: [78, 80, 81, 84], hint: 'Add 14 each time' },

  // ── Batch 2: Count down by various ──────────────────────
  { seq: [80, 73, 66, 59, '?'], answer: 52, choices: [48, 50, 52, 55], hint: 'Subtract 7 each time' },
  { seq: [90, 81, 72, 63, '?'], answer: 54, choices: [50, 52, 54, 57], hint: 'Subtract 9 each time' },
  { seq: [110, 99, 88, 77, '?'], answer: 66, choices: [62, 64, 66, 70], hint: 'Subtract 11 each time' },
  { seq: [130, 117, 104, 91, '?'], answer: 78, choices: [74, 76, 78, 82], hint: 'Subtract 13 each time' },
  { seq: [120, 105, 90, 75, '?'], answer: 60, choices: [55, 58, 60, 65], hint: 'Subtract 15 each time' },
  { seq: [175, 158, 141, 124, '?'], answer: 107, choices: [100, 104, 107, 112], hint: 'Subtract 17 each time' },
  { seq: [160, 141, 122, 103, '?'], answer: 84, choices: [78, 81, 84, 90], hint: 'Subtract 19 each time' },
  { seq: [230, 207, 184, 161, '?'], answer: 138, choices: [130, 134, 138, 145], hint: 'Subtract 23 each time' },
  { seq: [290, 261, 232, 203, '?'], answer: 174, choices: [166, 170, 174, 182], hint: 'Subtract 29 each time' },
  { seq: [310, 279, 248, 217, '?'], answer: 186, choices: [178, 182, 186, 194], hint: 'Subtract 31 each time' },

  // ── Batch 2: More doubling with offset ──────────────────
  { seq: [3, 8, 18, 38, '?'], answer: 78, choices: [58, 68, 78, 76], hint: '×2 + 2' },
  { seq: [5, 14, 32, 68, '?'], answer: 140, choices: [104, 122, 140, 136], hint: '×2 + 4' },
  { seq: [7, 18, 40, 84, '?'], answer: 172, choices: [128, 150, 172, 168], hint: '×2 + 4' },
  { seq: [2, 7, 17, 37, 77, '?'], answer: 157, choices: [117, 137, 157, 154], hint: '×2 + 3' },
  { seq: [6, 15, 33, 69, '?'], answer: 141, choices: [105, 123, 141, 138], hint: '×2 + 3' },
  { seq: [4, 11, 25, 53, '?'], answer: 109, choices: [81, 95, 109, 106], hint: '×2 + 3' },
  { seq: [1, 6, 16, 36, '?'], answer: 76, choices: [56, 66, 76, 72], hint: '×2 + 4' },
  { seq: [3, 10, 24, 52, '?'], answer: 108, choices: [80, 94, 108, 104], hint: '×2 + 4' },

  // ── Batch 2: Squares of multiples of 3 ─────────────────
  { seq: [9, 36, 81, 144, '?'], answer: 225, choices: [196, 210, 225, 256], hint: 'Squares of 3, 6, 9, 12, 15' },
  { seq: [36, 81, 144, 225, '?'], answer: 324, choices: [289, 306, 324, 361], hint: 'Squares of multiples of 3' },
  { seq: [81, 144, 225, 324, '?'], answer: 441, choices: [400, 420, 441, 484], hint: 'Squares of multiples of 3' },

  // ── Batch 2: Squares of multiples of 4 ─────────────────
  { seq: [16, 64, 144, 256, '?'], answer: 400, choices: [360, 380, 400, 450], hint: 'Squares of 4, 8, 12, 16, 20' },
  { seq: [64, 144, 256, 400, '?'], answer: 576, choices: [500, 540, 576, 625], hint: 'Squares of multiples of 4' },

  // ── Batch 2: More n² − c ────────────────────────────────
  { seq: [-1, 2, 7, 14, '?'], answer: 23, choices: [19, 21, 23, 27], hint: 'n² − 2 for n = 1, 2, 3, 4, 5' },
  { seq: [-2, 1, 6, 13, '?'], answer: 22, choices: [18, 20, 22, 26], hint: 'n² − 3 for n = 1, 2, 3, 4, 5' },
  { seq: [-4, -1, 4, 11, '?'], answer: 20, choices: [16, 18, 20, 24], hint: 'n² − 5 for n = 1, 2, 3, 4, 5' },
  { seq: [6, 11, 18, 27, 38, '?'], answer: 51, choices: [45, 48, 51, 56], hint: 'n² + 2 continuing from n=2' },

  // ── Batch 2: More Catalan / binomial ────────────────────
  { seq: [1, 2, 5, 14, '?'], answer: 42, choices: [28, 35, 42, 56], hint: 'Catalan numbers' },
  { seq: [1, 1, 2, 5, '?'], answer: 14, choices: [9, 11, 14, 20], hint: 'Catalan numbers' },

  // ── Batch 2: More powers ────────────────────────────────
  { seq: [256, 512, 1024, 2048, '?'], answer: 4096, choices: [3072, 3584, 4096, 8192], hint: 'Powers of 2' },
  { seq: [512, 1024, 2048, 4096, '?'], answer: 8192, choices: [6144, 7168, 8192, 16384], hint: 'Powers of 2' },
  { seq: [243, 729, 2187, 6561, '?'], answer: 19683, choices: [13122, 16384, 19683, 26244], hint: 'Powers of 3' },
  { seq: [64, 256, 1024, 4096, '?'], answer: 16384, choices: [8192, 12288, 16384, 32768], hint: 'Powers of 4' },
  { seq: [125, 625, 3125, 15625, '?'], answer: 78125, choices: [31250, 62500, 78125, 156250], hint: 'Powers of 5' },

  // ── Batch 2: Miscellaneous ──────────────────────────────
  { seq: [2, 6, 30, 210, 2310, '?'], answer: 30030, choices: [4620, 15015, 30030, 60060], hint: 'Primorial: ×3, ×5, ×7, ×11, ×13' },
  { seq: [1, 4, 10, 22, 46, '?'], answer: 94, choices: [70, 82, 94, 92], hint: '×2 + 2' },
  { seq: [3, 8, 18, 38, 78, '?'], answer: 158, choices: [118, 138, 158, 156], hint: '×2 + 2' },
  { seq: [1, 5, 15, 35, 70, '?'], answer: 126, choices: [105, 116, 126, 140], hint: 'Binomial coefficients C(n,4)' },
  { seq: [5, 15, 35, 70, 126, '?'], answer: 210, choices: [175, 190, 210, 252], hint: 'Binomial coefficients continuing' },
  { seq: [35, 70, 126, 210, '?'], answer: 330, choices: [280, 310, 330, 420], hint: 'Binomial coefficients continuing' },
  { seq: [1, 2, 6, 20, 70, '?'], answer: 252, choices: [140, 196, 252, 350], hint: 'Central binomial coefficients' },
  { seq: [3, 7, 16, 35, 74, '?'], answer: 151, choices: [120, 138, 151, 180], hint: 'Pattern: ×2+1, ×2+2, ×2+3, ×2+4, ×2+5 adjusted' },
  { seq: [12, 15, 21, 30, 42, '?'], answer: 57, choices: [50, 54, 57, 64], hint: 'Differences: 3, 6, 9, 12, 15' },
  { seq: [8, 12, 20, 32, 48, '?'], answer: 68, choices: [60, 64, 68, 76], hint: 'Differences: 4, 8, 12, 16, 20' },
  { seq: [7, 12, 22, 37, 57, '?'], answer: 82, choices: [72, 77, 82, 92], hint: 'Differences: 5, 10, 15, 20, 25' },
  { seq: [9, 15, 27, 45, 69, '?'], answer: 99, choices: [87, 93, 99, 111], hint: 'Differences: 6, 12, 18, 24, 30' },
  { seq: [100, 99, 97, 94, 90, '?'], answer: 85, choices: [82, 84, 85, 87], hint: 'Subtract 1, 2, 3, 4, 5' },
  { seq: [200, 198, 194, 188, 180, '?'], answer: 170, choices: [164, 168, 170, 174], hint: 'Subtract 2, 4, 6, 8, 10' },
  { seq: [50, 47, 41, 32, '?'], answer: 20, choices: [18, 20, 22, 25], hint: 'Subtract 3, 6, 9, 12' },
  { seq: [80, 75, 65, 50, '?'], answer: 30, choices: [25, 28, 30, 35], hint: 'Subtract 5, 10, 15, 20' },
  { seq: [2, 3, 6, 7, 14, '?'], answer: 15, choices: [15, 21, 28, 42], hint: 'Alternate: +1, then ×2' },
  { seq: [5, 6, 12, 13, 26, '?'], answer: 27, choices: [27, 39, 52, 78], hint: 'Alternate: +1, then ×2' },
  { seq: [3, 4, 12, 13, 39, '?'], answer: 40, choices: [40, 52, 78, 117], hint: 'Alternate: +1, then ×3' },
  { seq: [4, 5, 15, 16, 48, '?'], answer: 49, choices: [49, 64, 96, 144], hint: 'Alternate: +1, then ×3' },
  { seq: [1, 2, 8, 9, 27, '?'], answer: 28, choices: [28, 36, 54, 81], hint: 'Alternate: +1, then ×3' },
  { seq: [7, 8, 16, 17, 34, '?'], answer: 35, choices: [35, 51, 68, 102], hint: 'Alternate: +1, then ×2' },
  { seq: [10, 11, 33, 34, 102, '?'], answer: 103, choices: [103, 136, 204, 306], hint: 'Alternate: +1, then ×3' },
  { seq: [6, 7, 21, 22, 66, '?'], answer: 67, choices: [67, 88, 132, 198], hint: 'Alternate: +1, then ×3' },

  // ── Batch 3: Arithmetic with step 6, 8, 12, 14, 16, 18 ─
  { seq: [1, 7, 13, 19, 25, '?'], answer: 31, choices: [28, 30, 31, 34], hint: 'Add 6 each time' },
  { seq: [2, 10, 18, 26, '?'], answer: 34, choices: [30, 32, 34, 38], hint: 'Add 8 each time' },
  { seq: [3, 15, 27, 39, '?'], answer: 51, choices: [47, 49, 51, 55], hint: 'Add 12 each time' },
  { seq: [4, 18, 32, 46, '?'], answer: 60, choices: [56, 58, 60, 64], hint: 'Add 14 each time' },
  { seq: [5, 21, 37, 53, '?'], answer: 69, choices: [65, 67, 69, 73], hint: 'Add 16 each time' },
  { seq: [6, 24, 42, 60, '?'], answer: 78, choices: [74, 76, 78, 82], hint: 'Add 18 each time' },
  { seq: [10, 16, 22, 28, 34, '?'], answer: 40, choices: [37, 39, 40, 43], hint: 'Add 6 each time' },
  { seq: [20, 28, 36, 44, 52, '?'], answer: 60, choices: [56, 58, 60, 64], hint: 'Add 8 each time' },
  { seq: [15, 27, 39, 51, 63, '?'], answer: 75, choices: [71, 73, 75, 79], hint: 'Add 12 each time' },
  { seq: [30, 44, 58, 72, '?'], answer: 86, choices: [82, 84, 86, 90], hint: 'Add 14 each time' },
  { seq: [25, 41, 57, 73, '?'], answer: 89, choices: [85, 87, 89, 93], hint: 'Add 16 each time' },
  { seq: [40, 58, 76, 94, '?'], answer: 112, choices: [106, 110, 112, 118], hint: 'Add 18 each time' },
  { seq: [50, 72, 94, 116, '?'], answer: 138, choices: [130, 134, 138, 144], hint: 'Add 22 each time' },
  { seq: [33, 59, 85, 111, '?'], answer: 137, choices: [129, 133, 137, 143], hint: 'Add 26 each time' },
  { seq: [20, 48, 76, 104, '?'], answer: 132, choices: [124, 128, 132, 140], hint: 'Add 28 each time' },

  // ── Batch 3: Geometric ×2 from different starts ─────────
  { seq: [17, 34, 68, 136, '?'], answer: 272, choices: [204, 238, 272, 544], hint: '×2 each time' },
  { seq: [19, 38, 76, 152, '?'], answer: 304, choices: [228, 266, 304, 608], hint: '×2 each time' },
  { seq: [21, 42, 84, 168, '?'], answer: 336, choices: [252, 294, 336, 672], hint: '×2 each time' },
  { seq: [23, 46, 92, 184, '?'], answer: 368, choices: [276, 322, 368, 736], hint: '×2 each time' },
  { seq: [25, 50, 100, 200, '?'], answer: 400, choices: [300, 350, 400, 800], hint: '×2 each time' },
  { seq: [30, 60, 120, 240, '?'], answer: 480, choices: [360, 420, 480, 960], hint: '×2 each time' },
  { seq: [35, 70, 140, 280, '?'], answer: 560, choices: [420, 490, 560, 1120], hint: '×2 each time' },
  { seq: [40, 80, 160, 320, '?'], answer: 640, choices: [480, 560, 640, 1280], hint: '×2 each time' },
  { seq: [45, 90, 180, 360, '?'], answer: 720, choices: [540, 630, 720, 1440], hint: '×2 each time' },
  { seq: [50, 100, 200, 400, '?'], answer: 800, choices: [600, 700, 800, 1600], hint: '×2 each time' },

  // ── Batch 3: Squares + squares ──────────────────────────
  { seq: [2, 8, 20, 40, '?'], answer: 70, choices: [56, 64, 70, 80], hint: 'Sum of two consecutive squares: 1²+1², 2²+2², ...' },
  { seq: [5, 13, 25, 41, '?'], answer: 61, choices: [53, 57, 61, 69], hint: 'n² + (n+1)² pattern' },
  { seq: [13, 25, 41, 61, '?'], answer: 85, choices: [77, 81, 85, 93], hint: 'Sum of two consecutive squares' },
  { seq: [25, 41, 61, 85, '?'], answer: 113, choices: [101, 108, 113, 121], hint: 'Sum of two consecutive squares' },

  // ── Batch 3: Products of consecutive integers ───────────
  { seq: [6, 24, 60, 120, '?'], answer: 210, choices: [180, 196, 210, 240], hint: 'n(n+1)(n+2): 1×2×3, 2×3×4, ...' },
  { seq: [24, 60, 120, 210, '?'], answer: 336, choices: [280, 310, 336, 420], hint: 'Product of 3 consecutive continuing' },
  { seq: [60, 120, 210, 336, '?'], answer: 504, choices: [420, 462, 504, 630], hint: 'Product of 3 consecutive continuing' },

  // ── Batch 3: n²(n+1)/2 ─────────────────────────────────
  { seq: [1, 6, 18, 40, '?'], answer: 75, choices: [60, 68, 75, 90], hint: 'n²(n+1)/2' },

  // ── Batch 3: More Fibonacci from various starts ─────────
  { seq: [12, 12, 24, 36, 60, '?'], answer: 96, choices: [72, 84, 96, 120], hint: 'Each = sum of previous two, start 12, 12' },
  { seq: [15, 15, 30, 45, 75, '?'], answer: 120, choices: [90, 105, 120, 150], hint: 'Each = sum of previous two, start 15, 15' },
  { seq: [20, 20, 40, 60, 100, '?'], answer: 160, choices: [120, 140, 160, 200], hint: 'Each = sum of previous two, start 20, 20' },
  { seq: [7, 11, 18, 29, 47, '?'], answer: 76, choices: [62, 69, 76, 94], hint: 'Each = sum of previous two' },
  { seq: [9, 4, 13, 17, 30, '?'], answer: 47, choices: [38, 43, 47, 60], hint: 'Each = sum of previous two' },
  { seq: [3, 10, 13, 23, 36, '?'], answer: 59, choices: [49, 54, 59, 72], hint: 'Each = sum of previous two' },
  { seq: [4, 11, 15, 26, 41, '?'], answer: 67, choices: [56, 62, 67, 82], hint: 'Each = sum of previous two' },
  { seq: [6, 13, 19, 32, 51, '?'], answer: 83, choices: [70, 77, 83, 102], hint: 'Each = sum of previous two' },
  { seq: [2, 11, 13, 24, 37, '?'], answer: 61, choices: [50, 56, 61, 74], hint: 'Each = sum of previous two' },
  { seq: [5, 9, 14, 23, 37, '?'], answer: 60, choices: [50, 55, 60, 74], hint: 'Each = sum of previous two' },

  // ── Batch 3: More triangular-based ──────────────────────
  { seq: [78, 91, 105, 120, '?'], answer: 136, choices: [128, 133, 136, 145], hint: 'Triangular numbers continuing' },
  { seq: [91, 105, 120, 136, '?'], answer: 153, choices: [145, 150, 153, 162], hint: 'Triangular numbers continuing' },
  { seq: [105, 120, 136, 153, '?'], answer: 171, choices: [163, 168, 171, 180], hint: 'Triangular numbers continuing' },
  { seq: [120, 136, 153, 171, '?'], answer: 190, choices: [182, 187, 190, 199], hint: 'Triangular numbers continuing' },
  { seq: [136, 153, 171, 190, '?'], answer: 210, choices: [202, 207, 210, 220], hint: 'Triangular numbers continuing' },

  // ── Batch 3: More pentagonal/hexagonal ──────────────────
  { seq: [51, 70, 92, 117, '?'], answer: 145, choices: [135, 140, 145, 155], hint: 'Pentagonal numbers continuing' },
  { seq: [70, 92, 117, 145, '?'], answer: 176, choices: [166, 171, 176, 186], hint: 'Pentagonal continuing' },
  { seq: [66, 91, 120, 153, '?'], answer: 190, choices: [176, 183, 190, 200], hint: 'Hexagonal numbers continuing' },
  { seq: [91, 120, 153, 190, '?'], answer: 231, choices: [215, 224, 231, 244], hint: 'Hexagonal numbers continuing' },

  // ── Batch 3: More multiply-and-add combos ───────────────
  { seq: [1, 5, 13, 29, '?'], answer: 61, choices: [45, 53, 61, 58], hint: '×2 + 3' },
  { seq: [2, 9, 23, 51, '?'], answer: 107, choices: [79, 93, 107, 102], hint: '×2 + 5' },
  { seq: [3, 11, 27, 59, '?'], answer: 123, choices: [91, 107, 123, 118], hint: '×2 + 5' },
  { seq: [4, 13, 31, 67, '?'], answer: 139, choices: [103, 121, 139, 134], hint: '×2 + 5' },
  { seq: [1, 6, 16, 36, 76, '?'], answer: 156, choices: [116, 136, 156, 152], hint: '×2 + 4' },
  { seq: [2, 10, 34, 106, '?'], answer: 322, choices: [212, 268, 322, 424], hint: '×3 + 4' },
  { seq: [3, 13, 43, 133, '?'], answer: 403, choices: [266, 336, 403, 532], hint: '×3 + 4' },
  { seq: [1, 8, 29, 92, '?'], answer: 281, choices: [184, 236, 281, 368], hint: '×3 + 5' },
  { seq: [2, 11, 38, 119, '?'], answer: 362, choices: [238, 300, 362, 476], hint: '×3 + 5' },
  { seq: [5, 12, 26, 54, '?'], answer: 110, choices: [82, 96, 110, 108], hint: '×2 + 2' },

  // ── Batch 3: More decreasing with pattern ───────────────
  { seq: [100, 95, 85, 70, '?'], answer: 50, choices: [45, 48, 50, 55], hint: 'Subtract 5, 10, 15, 20' },
  { seq: [120, 118, 114, 108, 100, '?'], answer: 90, choices: [86, 88, 90, 94], hint: 'Subtract 2, 4, 6, 8, 10' },
  { seq: [150, 147, 141, 132, 120, '?'], answer: 105, choices: [100, 103, 105, 110], hint: 'Subtract 3, 6, 9, 12, 15' },
  { seq: [200, 195, 185, 170, '?'], answer: 150, choices: [145, 148, 150, 155], hint: 'Subtract 5, 10, 15, 20' },
  { seq: [300, 290, 270, 240, '?'], answer: 200, choices: [190, 195, 200, 210], hint: 'Subtract 10, 20, 30, 40' },
  { seq: [500, 490, 470, 440, 400, '?'], answer: 350, choices: [340, 345, 350, 360], hint: 'Subtract 10, 20, 30, 40, 50' },

  // ── Batch 3: Double Fibonacci-like ──────────────────────
  { seq: [2, 2, 4, 6, 10, 16, '?'], answer: 26, choices: [20, 23, 26, 32], hint: 'Each = sum of previous two' },
  { seq: [3, 3, 6, 9, 15, 24, '?'], answer: 39, choices: [30, 35, 39, 48], hint: 'Each = sum of previous two' },
  { seq: [4, 4, 8, 12, 20, 32, '?'], answer: 52, choices: [40, 46, 52, 64], hint: 'Each = sum of previous two' },
  { seq: [5, 5, 10, 15, 25, 40, '?'], answer: 65, choices: [50, 58, 65, 80], hint: 'Each = sum of previous two' },
  { seq: [7, 7, 14, 21, 35, 56, '?'], answer: 91, choices: [70, 81, 91, 112], hint: 'Each = sum of previous two' },

  // ── Batch 3: n×(n+1)/2 + constant ──────────────────────
  { seq: [2, 4, 7, 11, 16, '?'], answer: 22, choices: [19, 20, 22, 25], hint: 'Triangular + 1' },
  { seq: [4, 6, 9, 13, 18, '?'], answer: 24, choices: [21, 22, 24, 27], hint: 'Triangular + 3' },
  { seq: [6, 8, 11, 15, 20, '?'], answer: 26, choices: [23, 24, 26, 29], hint: 'Triangular + 5' },
  { seq: [11, 13, 16, 20, 25, '?'], answer: 31, choices: [28, 29, 31, 34], hint: 'Triangular + 10' },

  // ── Batch 3: Powers of 2 + n ────────────────────────────
  { seq: [3, 4, 6, 10, 18, '?'], answer: 34, choices: [26, 30, 34, 36], hint: '2^n + n (adjusted)' },
  { seq: [2, 4, 8, 16, 32, 64, '?'], answer: 128, choices: [96, 112, 128, 256], hint: 'Powers of 2' },

  // ── Batch 3: More interleaved advanced ──────────────────
  { seq: [1, 2, 4, 6, 16, 18, '?'], answer: 64, choices: [20, 36, 64, 128], hint: 'Alternate: powers of 4 and +2' },
  { seq: [3, 5, 9, 10, 27, '?'], answer: 15, choices: [15, 20, 30, 81], hint: 'Alternate: ×3 and +5' },
  { seq: [10, 3, 20, 6, 30, '?'], answer: 9, choices: [9, 12, 40, 60], hint: 'Two sequences: +10 and +3' },
  { seq: [1, 100, 4, 90, 9, '?'], answer: 80, choices: [16, 70, 80, 85], hint: 'Alternate: squares 1,4,9,16 and −10' },
  { seq: [2, 3, 4, 9, 8, '?'], answer: 27, choices: [12, 16, 27, 81], hint: 'Alternate: ×2 and ×3' },
  { seq: [5, 10, 7, 20, 9, '?'], answer: 30, choices: [11, 20, 30, 40], hint: 'Alternate: +2 and ×10/n' },
  { seq: [11, 2, 22, 4, 33, '?'], answer: 6, choices: [6, 8, 44, 66], hint: 'Two sequences: +11 and +2' },
  { seq: [8, 3, 16, 6, 24, '?'], answer: 9, choices: [9, 12, 32, 48], hint: 'Two sequences: +8 and +3' },
  { seq: [100, 50, 95, 45, 90, '?'], answer: 40, choices: [35, 40, 80, 85], hint: 'Alternate: −5 and −5' },
  { seq: [1, 3, 2, 6, 4, '?'], answer: 12, choices: [8, 10, 12, 18], hint: 'Alternate: ×3 and ×2 offset' },

  // ── Batch 3: n(n+1)(n+2)/6 (tetrahedral extended) ──────
  { seq: [84, 120, 165, 220, '?'], answer: 286, choices: [260, 275, 286, 310], hint: 'Tetrahedral numbers continuing' },
  { seq: [120, 165, 220, 286, '?'], answer: 364, choices: [340, 352, 364, 390], hint: 'Tetrahedral continuing' },
  { seq: [165, 220, 286, 364, '?'], answer: 455, choices: [430, 442, 455, 480], hint: 'Tetrahedral continuing' },

  // ── Batch 3: More Lucas-like ────────────────────────────
  { seq: [2, 1, 3, 4, 7, 11, '?'], answer: 18, choices: [14, 16, 18, 22], hint: 'Lucas numbers' },
  { seq: [1, 3, 4, 7, 11, 18, '?'], answer: 29, choices: [25, 27, 29, 36], hint: 'Lucas numbers continuing' },
  { seq: [3, 4, 7, 11, 18, 29, '?'], answer: 47, choices: [40, 44, 47, 58], hint: 'Lucas numbers continuing' },
  { seq: [4, 7, 11, 18, 29, 47, '?'], answer: 76, choices: [64, 70, 76, 94], hint: 'Lucas numbers continuing' },
  { seq: [7, 11, 18, 29, 47, 76, '?'], answer: 123, choices: [105, 115, 123, 152], hint: 'Lucas numbers continuing' },

  // ── Batch 3: Sums of odd numbers ────────────────────────
  { seq: [1, 4, 9, 16, 25, 36, 49, 64, '?'], answer: 81, choices: [72, 76, 81, 100], hint: 'Perfect squares (sum of first n odds)' },
  { seq: [4, 9, 16, 25, 36, 49, '?'], answer: 64, choices: [56, 60, 64, 81], hint: 'Perfect squares continuing' },
  { seq: [9, 16, 25, 36, 49, 64, '?'], answer: 81, choices: [72, 76, 81, 100], hint: 'Perfect squares continuing' },

  // ── Batch 3: Powers of 3 + 1 ────────────────────────────
  { seq: [2, 4, 10, 28, '?'], answer: 82, choices: [56, 68, 82, 100], hint: '3^n + 1' },
  { seq: [4, 10, 28, 82, '?'], answer: 244, choices: [164, 200, 244, 328], hint: '3^n + 1 continuing' },
  { seq: [10, 28, 82, 244, '?'], answer: 730, choices: [488, 600, 730, 976], hint: '3^n + 1 continuing' },

  // ── Batch 3: Powers of 3 − 1 ────────────────────────────
  { seq: [0, 2, 8, 26, '?'], answer: 80, choices: [52, 64, 80, 100], hint: '3^n − 1' },
  { seq: [2, 8, 26, 80, '?'], answer: 242, choices: [160, 200, 242, 320], hint: '3^n − 1 continuing' },
  { seq: [8, 26, 80, 242, '?'], answer: 728, choices: [484, 600, 728, 968], hint: '3^n − 1 continuing' },

  // ── Batch 3: Even more prime continuations ──────────────
  { seq: [103, 107, 109, 113, '?'], answer: 127, choices: [117, 121, 127, 131], hint: 'Consecutive primes' },
  { seq: [107, 109, 113, 127, '?'], answer: 131, choices: [129, 131, 133, 137], hint: 'Consecutive primes' },
  { seq: [109, 113, 127, 131, '?'], answer: 137, choices: [133, 135, 137, 139], hint: 'Consecutive primes' },
  { seq: [113, 127, 131, 137, '?'], answer: 139, choices: [138, 139, 141, 143], hint: 'Consecutive primes' },
  { seq: [127, 131, 137, 139, '?'], answer: 149, choices: [143, 147, 149, 151], hint: 'Consecutive primes' },
  { seq: [131, 137, 139, 149, '?'], answer: 151, choices: [150, 151, 153, 157], hint: 'Consecutive primes' },
  { seq: [137, 139, 149, 151, '?'], answer: 157, choices: [153, 155, 157, 163], hint: 'Consecutive primes' },
  { seq: [139, 149, 151, 157, '?'], answer: 163, choices: [159, 161, 163, 167], hint: 'Consecutive primes' },
  { seq: [149, 151, 157, 163, '?'], answer: 167, choices: [165, 167, 169, 173], hint: 'Consecutive primes' },
  { seq: [151, 157, 163, 167, '?'], answer: 173, choices: [169, 171, 173, 179], hint: 'Consecutive primes' },

  // ── Batch 3: Square-triangular related ──────────────────
  { seq: [1, 36, 1225, '?'], answer: 41616, choices: [4900, 19600, 41616, 48400], hint: 'Square triangular numbers' },

  // ── Batch 3: More complex multiply patterns ─────────────
  { seq: [1, 2, 6, 42, '?'], answer: 1806, choices: [252, 882, 1806, 3612], hint: 'Each = prev × (prev + 1)' },
  { seq: [2, 6, 42, 1806, '?'], answer: 3263442, choices: [7350, 75852, 3263442, 6526884], hint: 'Each = prev × (prev + 1)' },

  // ── Batch 3: 4n+1, 4n+3 (quadratic residue) ────────────
  { seq: [1, 5, 9, 13, 17, '?'], answer: 21, choices: [19, 20, 21, 25], hint: '4n + 1' },
  { seq: [3, 7, 11, 15, 19, '?'], answer: 23, choices: [21, 22, 23, 27], hint: '4n + 3' },
  { seq: [5, 9, 13, 17, 21, '?'], answer: 25, choices: [23, 24, 25, 29], hint: 'Add 4 each time' },
  { seq: [7, 11, 15, 19, 23, '?'], answer: 27, choices: [25, 26, 27, 31], hint: 'Add 4 each time' },
  { seq: [9, 13, 17, 21, 25, '?'], answer: 29, choices: [27, 28, 29, 33], hint: 'Add 4 each time' },

  // ── Batch 3: 3n+1, 3n+2 ────────────────────────────────
  { seq: [1, 4, 7, 10, 13, '?'], answer: 16, choices: [14, 15, 16, 19], hint: '3n + 1' },
  { seq: [2, 5, 8, 11, 14, '?'], answer: 17, choices: [15, 16, 17, 20], hint: '3n + 2' },
  { seq: [4, 7, 10, 13, 16, '?'], answer: 19, choices: [17, 18, 19, 22], hint: 'Add 3 each time' },
  { seq: [5, 8, 11, 14, 17, '?'], answer: 20, choices: [18, 19, 20, 23], hint: 'Add 3 each time' },
  { seq: [7, 10, 13, 16, 19, '?'], answer: 22, choices: [20, 21, 22, 25], hint: 'Add 3 each time' },
  { seq: [8, 11, 14, 17, 20, '?'], answer: 23, choices: [21, 22, 23, 26], hint: 'Add 3 each time' },

  // ── Batch 3: 5n, 5n+1, 5n+2 ────────────────────────────
  { seq: [5, 10, 15, 20, 25, '?'], answer: 30, choices: [28, 29, 30, 35], hint: 'Multiples of 5' },
  { seq: [1, 6, 11, 16, 21, '?'], answer: 26, choices: [24, 25, 26, 31], hint: '5n + 1' },
  { seq: [2, 7, 12, 17, 22, '?'], answer: 27, choices: [25, 26, 27, 32], hint: '5n + 2' },
  { seq: [3, 8, 13, 18, 23, '?'], answer: 28, choices: [26, 27, 28, 33], hint: '5n + 3' },
  { seq: [4, 9, 14, 19, 24, '?'], answer: 29, choices: [27, 28, 29, 34], hint: '5n + 4' },

  // ── Batch 3: Sum of first n natural numbers ─────────────
  { seq: [1, 3, 6, 10, 15, 21, 28, 36, '?'], answer: 45, choices: [40, 43, 45, 50], hint: 'Triangular numbers' },
  { seq: [153, 171, 190, 210, '?'], answer: 231, choices: [220, 225, 231, 240], hint: 'Triangular numbers continuing' },
  { seq: [171, 190, 210, 231, '?'], answer: 253, choices: [242, 248, 253, 262], hint: 'Triangular numbers continuing' },
  { seq: [190, 210, 231, 253, '?'], answer: 276, choices: [265, 271, 276, 285], hint: 'Triangular numbers continuing' },

  // ── Batch 3: More centered numbers ──────────────────────
  { seq: [41, 61, 85, 113, '?'], answer: 145, choices: [133, 139, 145, 157], hint: 'Centered square numbers' },
  { seq: [61, 85, 113, 145, '?'], answer: 181, choices: [169, 175, 181, 193], hint: 'Centered square numbers' },
  { seq: [37, 73, 121, 181, '?'], answer: 253, choices: [229, 241, 253, 277], hint: 'Star numbers continuing' },

  // ── Batch 3: More Pell sequences ────────────────────────
  { seq: [5, 12, 29, 70, 169, '?'], answer: 408, choices: [239, 338, 408, 478], hint: 'Pell numbers' },
  { seq: [12, 29, 70, 169, 408, '?'], answer: 985, choices: [577, 816, 985, 1154], hint: 'Pell numbers continuing' },

  // ── Batch 3: Jacobsthal extended ────────────────────────
  { seq: [5, 11, 21, 43, 85, '?'], answer: 171, choices: [128, 150, 171, 192], hint: 'Jacobsthal continuing' },
  { seq: [11, 21, 43, 85, 171, '?'], answer: 341, choices: [256, 300, 341, 384], hint: 'Jacobsthal continuing' },

  // ── Batch 3: More Padovan ───────────────────────────────
  { seq: [2, 3, 4, 5, 7, 9, '?'], answer: 12, choices: [10, 11, 12, 14], hint: 'Padovan sequence' },
  { seq: [3, 4, 5, 7, 9, 12, '?'], answer: 16, choices: [14, 15, 16, 18], hint: 'Padovan continuing' },
  { seq: [4, 5, 7, 9, 12, 16, '?'], answer: 21, choices: [19, 20, 21, 24], hint: 'Padovan continuing' },
  { seq: [5, 7, 9, 12, 16, 21, '?'], answer: 28, choices: [25, 27, 28, 32], hint: 'Padovan continuing' },

  // ── Batch 3: Narayana extended ──────────────────────────
  { seq: [3, 4, 6, 9, 13, 19, '?'], answer: 28, choices: [24, 26, 28, 32], hint: 'Each = prev + 3rd-prev' },
  { seq: [4, 6, 9, 13, 19, 28, '?'], answer: 41, choices: [35, 38, 41, 46], hint: 'Each = prev + 3rd-prev' },
  { seq: [6, 9, 13, 19, 28, 41, '?'], answer: 60, choices: [52, 56, 60, 68], hint: 'Each = prev + 3rd-prev' },

  // ── Batch 3: More n(n+1)/2 shifted ──────────────────────
  { seq: [110, 132, 156, 182, '?'], answer: 210, choices: [198, 204, 210, 224], hint: 'n(n+1) for n=10,11,12,13,14' },
  { seq: [132, 156, 182, 210, '?'], answer: 240, choices: [228, 234, 240, 256], hint: 'n(n+1) continuing' },
  { seq: [156, 182, 210, 240, '?'], answer: 272, choices: [260, 266, 272, 288], hint: 'n(n+1) continuing' },
  { seq: [182, 210, 240, 272, '?'], answer: 306, choices: [294, 300, 306, 322], hint: 'n(n+1) continuing' },

  // ── Batch 3: Double then +3 ─────────────────────────────
  { seq: [1, 5, 13, 29, 61, '?'], answer: 125, choices: [93, 109, 125, 122], hint: '×2 + 3' },
  { seq: [2, 7, 17, 37, 77, '?'], answer: 157, choices: [117, 137, 157, 154], hint: '×2 + 3' },
  { seq: [4, 11, 25, 53, 109, '?'], answer: 221, choices: [165, 193, 221, 218], hint: '×2 + 3' },

  // ── Batch 3: Triple then −2 ─────────────────────────────
  { seq: [1, 1, 1, 1, '?'], answer: 1, choices: [0, 1, 2, 3], hint: 'Constant sequence: always 1' },
  { seq: [5, 5, 5, 5, '?'], answer: 5, choices: [3, 4, 5, 6], hint: 'Constant sequence: always 5' },
  { seq: [10, 10, 10, 10, '?'], answer: 10, choices: [8, 9, 10, 11], hint: 'Constant sequence: always 10' },
  { seq: [7, 7, 7, 7, '?'], answer: 7, choices: [5, 6, 7, 8], hint: 'Constant sequence: always 7' },
  { seq: [25, 25, 25, 25, '?'], answer: 25, choices: [20, 24, 25, 30], hint: 'Constant sequence: always 25' },

  // ── Batch 3: More quartic/higher ────────────────────────
  { seq: [1, 16, 81, 256, '?'], answer: 625, choices: [400, 512, 625, 1024], hint: 'Fourth powers: 1⁴, 2⁴, 3⁴, 4⁴, 5⁴' },
  { seq: [16, 81, 256, 625, '?'], answer: 1296, choices: [900, 1024, 1296, 2401], hint: 'Fourth powers: 2⁴, 3⁴, 4⁴, 5⁴, 6⁴' },
  { seq: [81, 256, 625, 1296, '?'], answer: 2401, choices: [1600, 2048, 2401, 4096], hint: 'Fourth powers: 3⁴, 4⁴, 5⁴, 6⁴, 7⁴' },
  { seq: [256, 625, 1296, 2401, '?'], answer: 4096, choices: [3200, 3600, 4096, 6561], hint: 'Fourth powers: 4⁴, 5⁴, 6⁴, 7⁴, 8⁴' },
  { seq: [625, 1296, 2401, 4096, '?'], answer: 6561, choices: [5000, 5832, 6561, 10000], hint: 'Fourth powers: 5⁴, 6⁴, 7⁴, 8⁴, 9⁴' },

  // ── Batch 3: n² + 2n (= (n+1)² − 1) ───────────────────
  { seq: [3, 8, 15, 24, 35, '?'], answer: 48, choices: [42, 45, 48, 54], hint: 'n² + 2n for n=1,2,3,4,5,6' },
  { seq: [8, 15, 24, 35, 48, '?'], answer: 63, choices: [56, 60, 63, 70], hint: 'n² + 2n continuing' },
  { seq: [15, 24, 35, 48, 63, '?'], answer: 80, choices: [72, 76, 80, 88], hint: 'n² + 2n continuing' },
  { seq: [24, 35, 48, 63, 80, '?'], answer: 99, choices: [90, 95, 99, 105], hint: 'n² + 2n continuing' },
  { seq: [35, 48, 63, 80, 99, '?'], answer: 120, choices: [110, 115, 120, 130], hint: 'n² + 2n continuing' },

  // ── Batch 3: Powers of 10 ───────────────────────────────
  { seq: [1, 10, 100, 1000, 10000, '?'], answer: 100000, choices: [20000, 50000, 100000, 1000000], hint: '×10 each time' },
  { seq: [100000, 10000, 1000, 100, '?'], answer: 10, choices: [1, 5, 10, 50], hint: '÷10 each time' },

  // ── Batch 3: Collatz-esque ──────────────────────────────
  { seq: [10, 5, 16, 8, 4, '?'], answer: 2, choices: [1, 2, 12, 13], hint: 'Collatz: if even ÷2, if odd ×3+1' },
  { seq: [7, 22, 11, 34, 17, '?'], answer: 52, choices: [8, 34, 52, 68], hint: 'Collatz sequence from 7' },

  // ── Batch 3: More simple but varied ─────────────────────
  { seq: [111, 222, 333, 444, 555, '?'], answer: 666, choices: [600, 650, 666, 777], hint: 'Add 111 each time' },
  { seq: [123, 234, 345, 456, '?'], answer: 567, choices: [540, 555, 567, 678], hint: 'Add 111 each time' },
  { seq: [246, 357, 468, 579, '?'], answer: 690, choices: [670, 680, 690, 780], hint: 'Add 111 each time' },
  { seq: [135, 246, 357, 468, '?'], answer: 579, choices: [555, 570, 579, 690], hint: 'Add 111 each time' },
  { seq: [10, 12, 15, 19, 24, '?'], answer: 30, choices: [27, 29, 30, 33], hint: 'Add 2, 3, 4, 5, 6' },
  { seq: [20, 23, 28, 35, 44, '?'], answer: 55, choices: [50, 53, 55, 60], hint: 'Add 3, 5, 7, 9, 11' },
  { seq: [5, 8, 14, 23, 35, '?'], answer: 50, choices: [44, 48, 50, 56], hint: 'Add 3, 6, 9, 12, 15' },
  { seq: [3, 6, 12, 21, 33, '?'], answer: 48, choices: [42, 45, 48, 54], hint: 'Add 3, 6, 9, 12, 15' },
  { seq: [1, 4, 11, 22, 37, 56, '?'], answer: 79, choices: [71, 75, 79, 85], hint: 'Differences: 3, 7, 11, 15, 19, 23' },
  { seq: [2, 6, 14, 26, 42, 62, '?'], answer: 86, choices: [78, 82, 86, 94], hint: 'Differences: 4, 8, 12, 16, 20, 24' },
  { seq: [10, 15, 25, 40, 60, '?'], answer: 85, choices: [75, 80, 85, 95], hint: 'Differences: 5, 10, 15, 20, 25' },
  { seq: [4, 10, 22, 40, 64, '?'], answer: 94, choices: [84, 89, 94, 104], hint: 'Differences: 6, 12, 18, 24, 30' },
  { seq: [1, 8, 22, 43, 71, '?'], answer: 106, choices: [92, 99, 106, 118], hint: 'Differences: 7, 14, 21, 28, 35' },
  { seq: [3, 12, 30, 57, 93, '?'], answer: 138, choices: [120, 130, 138, 150], hint: 'Differences: 9, 18, 27, 36, 45' },

  // ── Batch 3: More halving ───────────────────────────────
  { seq: [1600, 800, 400, 200, '?'], answer: 100, choices: [50, 75, 100, 150], hint: '÷2 each time' },
  { seq: [2400, 1200, 600, 300, '?'], answer: 150, choices: [75, 100, 150, 200], hint: '÷2 each time' },
  { seq: [3600, 1800, 900, 450, '?'], answer: 225, choices: [150, 200, 225, 300], hint: '÷2 each time' },
  { seq: [4800, 2400, 1200, 600, '?'], answer: 300, choices: [150, 200, 300, 400], hint: '÷2 each time' },
  { seq: [9600, 4800, 2400, 1200, '?'], answer: 600, choices: [300, 400, 600, 800], hint: '÷2 each time' },

  // ── Batch 3: More ÷3 sequences ──────────────────────────
  { seq: [19683, 6561, 2187, 729, '?'], answer: 243, choices: [81, 162, 243, 486], hint: '÷3 each time' },
  { seq: [6561, 2187, 729, 243, 81, '?'], answer: 27, choices: [9, 18, 27, 54], hint: '÷3 each time' },
  { seq: [59049, 19683, 6561, 2187, '?'], answer: 729, choices: [243, 486, 729, 1458], hint: '÷3 each time' },

  // ── Batch 3: Alternating sign advanced ──────────────────
  { seq: [1, -3, 9, -27, '?'], answer: 81, choices: [-81, -54, 54, 81], hint: '×(−3) each time' },
  { seq: [2, -4, 8, -16, '?'], answer: 32, choices: [-32, -24, 24, 32], hint: '×(−2) each time' },
  { seq: [-1, 2, -4, 8, '?'], answer: -16, choices: [-16, -12, 12, 16], hint: '×(−2) each time' },
  { seq: [3, -6, 12, -24, '?'], answer: 48, choices: [-48, -36, 36, 48], hint: '×(−2) each time' },
  { seq: [-5, 10, -20, 40, '?'], answer: -80, choices: [-80, -60, 60, 80], hint: '×(−2) each time' },

  // ── Batch 3: More miscellaneous ─────────────────────────
  { seq: [1, 2, 4, 7, 11, 16, 22, 29, '?'], answer: 37, choices: [33, 35, 37, 40], hint: 'Add 1, 2, 3, 4, 5, 6, 7, 8' },
  { seq: [3, 5, 9, 15, 23, 33, '?'], answer: 45, choices: [39, 42, 45, 51], hint: 'Differences: 2, 4, 6, 8, 10, 12' },
  { seq: [4, 7, 12, 19, 28, 39, '?'], answer: 52, choices: [46, 49, 52, 58], hint: 'Differences: 3, 5, 7, 9, 11, 13' },
  { seq: [2, 5, 11, 20, 32, 47, '?'], answer: 65, choices: [57, 61, 65, 71], hint: 'Differences: 3, 6, 9, 12, 15, 18' },
  { seq: [1, 4, 10, 20, 35, 56, 84, '?'], answer: 120, choices: [105, 112, 120, 140], hint: 'Tetrahedral numbers' },
  { seq: [6, 10, 15, 21, 28, 36, '?'], answer: 45, choices: [40, 42, 45, 49], hint: 'Triangular numbers' },
  { seq: [100, 81, 64, 49, '?'], answer: 36, choices: [25, 30, 36, 40], hint: 'Squares descending: 10², 9², 8², 7², 6²' },
  { seq: [64, 49, 36, 25, '?'], answer: 16, choices: [9, 12, 16, 20], hint: 'Squares descending: 8², 7², 6², 5², 4²' },
  { seq: [49, 36, 25, 16, '?'], answer: 9, choices: [4, 7, 9, 12], hint: 'Squares descending: 7², 6², 5², 4², 3²' },
  { seq: [36, 25, 16, 9, '?'], answer: 4, choices: [1, 2, 4, 6], hint: 'Squares descending: 6², 5², 4², 3², 2²' },
  { seq: [25, 16, 9, 4, '?'], answer: 1, choices: [0, 1, 2, 3], hint: 'Squares descending: 5², 4², 3², 2², 1²' },
  { seq: [1000, 729, 512, 343, '?'], answer: 216, choices: [125, 180, 216, 250], hint: 'Cubes descending: 10³, 9³, 8³, 7³, 6³' },
  { seq: [729, 512, 343, 216, '?'], answer: 125, choices: [64, 100, 125, 150], hint: 'Cubes descending: 9³, 8³, 7³, 6³, 5³' },
  { seq: [512, 343, 216, 125, '?'], answer: 64, choices: [27, 48, 64, 80], hint: 'Cubes descending: 8³, 7³, 6³, 5³, 4³' },
  { seq: [343, 216, 125, 64, '?'], answer: 27, choices: [8, 16, 27, 36], hint: 'Cubes descending: 7³, 6³, 5³, 4³, 3³' },
  { seq: [216, 125, 64, 27, '?'], answer: 8, choices: [1, 4, 8, 12], hint: 'Cubes descending: 6³, 5³, 4³, 3³, 2³' },
  { seq: [3, 5, 8, 12, 17, 23, '?'], answer: 30, choices: [27, 29, 30, 33], hint: 'Add 2, 3, 4, 5, 6, 7' },
  { seq: [4, 6, 10, 16, 24, 34, '?'], answer: 46, choices: [40, 43, 46, 52], hint: 'Differences: 2, 4, 6, 8, 10, 12' },
  { seq: [5, 8, 14, 23, 35, 50, '?'], answer: 68, choices: [60, 64, 68, 75], hint: 'Differences: 3, 6, 9, 12, 15, 18' },
  { seq: [6, 10, 18, 30, 46, 66, '?'], answer: 90, choices: [80, 85, 90, 100], hint: 'Differences: 4, 8, 12, 16, 20, 24' },
  { seq: [7, 12, 22, 37, 57, 82, '?'], answer: 112, choices: [100, 106, 112, 125], hint: 'Differences: 5, 10, 15, 20, 25, 30' },
  { seq: [1, 4, 9, 25, 49, '?'], answer: 121, choices: [81, 100, 121, 144], hint: 'Squares of primes: 1², 2², 3², 5², 7², 11²' },
  { seq: [8, 11, 17, 26, 38, '?'], answer: 53, choices: [47, 50, 53, 60], hint: 'Differences: 3, 6, 9, 12, 15' },
  { seq: [2, 10, 30, 68, 130, '?'], answer: 222, choices: [190, 210, 222, 250], hint: 'n³ + n for n=1,2,3,4,5,6' },
  { seq: [12, 36, 80, 150, '?'], answer: 252, choices: [220, 240, 252, 280], hint: 'n²(n+1) for n = 2, 3, 4, 5, 6' },
  { seq: [1, 2, 3, 4, 5, 6, 7, 8, '?'], answer: 9, choices: [9, 10, 11, 12], hint: 'Count up by 1' },
  { seq: [2, 4, 6, 8, 10, 12, 14, '?'], answer: 16, choices: [15, 16, 17, 18], hint: 'Even numbers' },
  { seq: [3, 6, 9, 12, 15, 18, 21, '?'], answer: 24, choices: [22, 23, 24, 27], hint: 'Multiples of 3' },
  { seq: [4, 8, 12, 16, 20, 24, 28, '?'], answer: 32, choices: [30, 31, 32, 36], hint: 'Multiples of 4' },
  { seq: [5, 10, 15, 20, 25, 30, 35, '?'], answer: 40, choices: [38, 39, 40, 45], hint: 'Multiples of 5' },
  { seq: [6, 12, 18, 24, 30, 36, 42, '?'], answer: 48, choices: [44, 46, 48, 54], hint: 'Multiples of 6' },
  { seq: [7, 14, 21, 28, 35, 42, 49, '?'], answer: 56, choices: [52, 54, 56, 63], hint: 'Multiples of 7' },
  { seq: [8, 16, 24, 32, 40, 48, 56, '?'], answer: 64, choices: [60, 62, 64, 72], hint: 'Multiples of 8' },
  { seq: [9, 18, 27, 36, 45, 54, 63, '?'], answer: 72, choices: [68, 70, 72, 81], hint: 'Multiples of 9' },
  { seq: [10, 20, 30, 40, 50, 60, 70, '?'], answer: 80, choices: [75, 78, 80, 90], hint: 'Multiples of 10' },
  { seq: [11, 22, 33, 44, 55, 66, 77, '?'], answer: 88, choices: [84, 86, 88, 99], hint: 'Multiples of 11' },
  { seq: [12, 24, 36, 48, 60, 72, 84, '?'], answer: 96, choices: [90, 94, 96, 108], hint: 'Multiples of 12' },
  { seq: [13, 26, 39, 52, 65, 78, 91, '?'], answer: 104, choices: [98, 102, 104, 117], hint: 'Multiples of 13' },
  { seq: [14, 28, 42, 56, 70, 84, 98, '?'], answer: 112, choices: [106, 110, 112, 126], hint: 'Multiples of 14' },
  { seq: [15, 30, 45, 60, 75, 90, 105, '?'], answer: 120, choices: [112, 118, 120, 135], hint: 'Multiples of 15' },

  // ── Batch 3: More differences quadrupling ───────────────
  { seq: [1, 2, 5, 14, 41, 122, '?'], answer: 365, choices: [244, 300, 365, 488], hint: '×3 − 1' },
  { seq: [3, 4, 7, 16, 43, '?'], answer: 124, choices: [86, 100, 124, 172], hint: 'Differences: 1, 3, 9, 27, 81' },
  { seq: [2, 4, 10, 28, 82, '?'], answer: 244, choices: [164, 200, 244, 328], hint: '×3 − 2 or 3^n + 1' },

  // ── Batch 3: More sums of powers ────────────────────────
  { seq: [1, 5, 14, 30, 55, '?'], answer: 91, choices: [72, 84, 91, 105], hint: 'Sum of first n squares' },
  { seq: [14, 30, 55, 91, '?'], answer: 140, choices: [120, 130, 140, 160], hint: 'Sum of squares continuing' },
  { seq: [30, 55, 91, 140, '?'], answer: 204, choices: [182, 196, 204, 224], hint: 'Sum of squares continuing' },
  { seq: [55, 91, 140, 204, '?'], answer: 285, choices: [260, 275, 285, 310], hint: 'Sum of squares continuing' },

  // ── Batch 3: Final mixed ────────────────────────────────
  { seq: [1, 1, 2, 3, 5, 8, 13, '?'], answer: 21, choices: [16, 19, 21, 26], hint: 'Fibonacci sequence' },
  { seq: [0, 1, 1, 2, 3, 5, 8, 13, '?'], answer: 21, choices: [16, 19, 21, 26], hint: 'Fibonacci from 0' },
  { seq: [2, 1, 3, 4, 7, 11, 18, '?'], answer: 29, choices: [25, 27, 29, 36], hint: 'Lucas numbers' },
  { seq: [1, 3, 4, 7, 11, 18, 29, '?'], answer: 47, choices: [40, 44, 47, 58], hint: 'Lucas numbers' },
  { seq: [3, 4, 7, 11, 18, 29, 47, '?'], answer: 76, choices: [64, 70, 76, 94], hint: 'Lucas numbers' },

  // ── Batch 4: Arithmetic with step 20, 25, 30, 35, 40 ───
  { seq: [10, 30, 50, 70, '?'], answer: 90, choices: [80, 85, 90, 100], hint: 'Add 20 each time' },
  { seq: [15, 40, 65, 90, '?'], answer: 115, choices: [105, 110, 115, 125], hint: 'Add 25 each time' },
  { seq: [20, 50, 80, 110, '?'], answer: 140, choices: [130, 135, 140, 150], hint: 'Add 30 each time' },
  { seq: [25, 60, 95, 130, '?'], answer: 165, choices: [155, 160, 165, 175], hint: 'Add 35 each time' },
  { seq: [30, 70, 110, 150, '?'], answer: 190, choices: [180, 185, 190, 200], hint: 'Add 40 each time' },
  { seq: [10, 55, 100, 145, '?'], answer: 190, choices: [180, 185, 190, 200], hint: 'Add 45 each time' },
  { seq: [50, 105, 160, 215, '?'], answer: 270, choices: [255, 265, 270, 280], hint: 'Add 55 each time' },
  { seq: [100, 160, 220, 280, '?'], answer: 340, choices: [320, 330, 340, 360], hint: 'Add 60 each time' },
  { seq: [200, 270, 340, 410, '?'], answer: 480, choices: [460, 470, 480, 500], hint: 'Add 70 each time' },
  { seq: [300, 380, 460, 540, '?'], answer: 620, choices: [600, 610, 620, 640], hint: 'Add 80 each time' },
  { seq: [500, 590, 680, 770, '?'], answer: 860, choices: [840, 850, 860, 880], hint: 'Add 90 each time' },
  { seq: [100, 200, 300, 400, 500, '?'], answer: 600, choices: [550, 580, 600, 700], hint: 'Add 100 each time' },

  // ── Batch 4: More geometric from various starts ─────────
  { seq: [14, 42, 126, 378, '?'], answer: 1134, choices: [756, 945, 1134, 1512], hint: '×3 each time' },
  { seq: [16, 48, 144, 432, '?'], answer: 1296, choices: [864, 1080, 1296, 1728], hint: '×3 each time' },
  { seq: [11, 33, 99, 297, '?'], answer: 891, choices: [594, 742, 891, 1188], hint: '×3 each time' },
  { seq: [13, 39, 117, 351, '?'], answer: 1053, choices: [702, 877, 1053, 1404], hint: '×3 each time' },
  { seq: [6, 30, 150, 750, '?'], answer: 3750, choices: [1500, 2250, 3750, 7500], hint: '×5 each time' },
  { seq: [4, 24, 144, 864, '?'], answer: 5184, choices: [1728, 3456, 5184, 10368], hint: '×6 each time' },
  { seq: [3, 21, 147, 1029, '?'], answer: 7203, choices: [2058, 4116, 7203, 14406], hint: '×7 each time' },
  { seq: [2, 18, 162, 1458, '?'], answer: 13122, choices: [2916, 6561, 13122, 26244], hint: '×9 each time' },

  // ── Batch 4: Squares of n+10, n+15, n+20 ───────────────
  { seq: [121, 144, 169, 196, 225, '?'], answer: 256, choices: [240, 248, 256, 270], hint: 'Squares of 11,12,13,14,15,16' },
  { seq: [225, 256, 289, 324, 361, '?'], answer: 400, choices: [380, 392, 400, 420], hint: 'Squares of 15,16,17,18,19,20' },
  { seq: [400, 441, 484, 529, '?'], answer: 576, choices: [555, 568, 576, 600], hint: 'Squares of 20,21,22,23,24' },
  { seq: [484, 529, 576, 625, '?'], answer: 676, choices: [650, 664, 676, 700], hint: 'Squares of 22,23,24,25,26' },
  { seq: [676, 729, 784, 841, '?'], answer: 900, choices: [880, 890, 900, 920], hint: 'Squares of 26,27,28,29,30' },

  // ── Batch 4: More cubes ─────────────────────────────────
  { seq: [4096, 4913, 5832, 6859, '?'], answer: 8000, choices: [7500, 7800, 8000, 8500], hint: 'Cubes: 16³,17³,18³,19³,20³' },
  { seq: [8000, 9261, 10648, 12167, '?'], answer: 13824, choices: [13000, 13500, 13824, 14500], hint: 'Cubes: 20³,21³,22³,23³,24³' },

  // ── Batch 4: More decreasing sequences ──────────────────
  { seq: [999, 990, 981, 972, '?'], answer: 963, choices: [960, 963, 966, 970], hint: 'Subtract 9 each time' },
  { seq: [888, 876, 864, 852, '?'], answer: 840, choices: [836, 838, 840, 844], hint: 'Subtract 12 each time' },
  { seq: [777, 762, 747, 732, '?'], answer: 717, choices: [712, 715, 717, 722], hint: 'Subtract 15 each time' },
  { seq: [500, 482, 464, 446, '?'], answer: 428, choices: [424, 426, 428, 432], hint: 'Subtract 18 each time' },
  { seq: [1000, 979, 958, 937, '?'], answer: 916, choices: [912, 914, 916, 920], hint: 'Subtract 21 each time' },
  { seq: [800, 776, 752, 728, '?'], answer: 704, choices: [700, 702, 704, 708], hint: 'Subtract 24 each time' },
  { seq: [700, 673, 646, 619, '?'], answer: 592, choices: [588, 590, 592, 596], hint: 'Subtract 27 each time' },

  // ── Batch 4: More mixed operations ──────────────────────
  { seq: [1, 2, 6, 7, 21, 22, 66, '?'], answer: 67, choices: [67, 132, 198, 264], hint: 'Alternate: +1, then ×3' },
  { seq: [2, 4, 5, 10, 11, 22, 23, '?'], answer: 46, choices: [24, 34, 46, 69], hint: 'Alternate: ×2, then +1' },
  { seq: [3, 6, 8, 16, 18, 36, '?'], answer: 38, choices: [38, 54, 72, 108], hint: 'Alternate: ×2, then +2' },
  { seq: [1, 4, 3, 12, 11, 44, '?'], answer: 43, choices: [43, 88, 132, 176], hint: 'Alternate: ×4, then −1' },
  { seq: [5, 15, 12, 36, 33, 99, '?'], answer: 96, choices: [96, 198, 297, 396], hint: 'Alternate: ×3, then −3' },
  { seq: [2, 10, 8, 40, 38, 190, '?'], answer: 188, choices: [188, 380, 570, 950], hint: 'Alternate: ×5, then −2' },
  { seq: [3, 9, 6, 18, 15, 45, '?'], answer: 42, choices: [42, 90, 135, 180], hint: 'Alternate: ×3, then −3' },
  { seq: [4, 8, 6, 12, 10, 20, '?'], answer: 18, choices: [14, 16, 18, 40], hint: 'Alternate: ×2, then −2' },

  // ── Batch 4: More accelerating with various bases ───────
  { seq: [1, 3, 9, 27, 81, '?'], answer: 243, choices: [162, 216, 243, 324], hint: '×3 each time' },
  { seq: [2, 6, 18, 54, 162, 486, '?'], answer: 1458, choices: [972, 1296, 1458, 1944], hint: '×3 each time' },
  { seq: [1, 4, 16, 64, 256, '?'], answer: 1024, choices: [512, 768, 1024, 2048], hint: '×4 each time' },
  { seq: [3, 12, 48, 192, 768, '?'], answer: 3072, choices: [1536, 2304, 3072, 6144], hint: '×4 each time' },
  { seq: [1, 5, 25, 125, 625, '?'], answer: 3125, choices: [1250, 2500, 3125, 6250], hint: '×5 each time' },
  { seq: [2, 10, 50, 250, 1250, 6250, '?'], answer: 31250, choices: [12500, 25000, 31250, 62500], hint: '×5 each time' },

  // ── Batch 4: More complex double operations ─────────────
  { seq: [3, 7, 17, 37, 77, '?'], answer: 157, choices: [117, 137, 157, 154], hint: '×2 + 1 then +2 alternating' },
  { seq: [4, 10, 22, 46, 94, '?'], answer: 190, choices: [142, 166, 190, 188], hint: '×2 + 2' },
  { seq: [5, 12, 26, 54, 110, '?'], answer: 222, choices: [166, 194, 222, 220], hint: '×2 + 2' },
  { seq: [6, 14, 30, 62, 126, '?'], answer: 254, choices: [190, 222, 254, 252], hint: '×2 + 2' },
  { seq: [7, 16, 34, 70, 142, '?'], answer: 286, choices: [214, 250, 286, 284], hint: '×2 + 2' },
  { seq: [8, 18, 38, 78, 158, '?'], answer: 318, choices: [238, 278, 318, 316], hint: '×2 + 2' },
  { seq: [10, 22, 46, 94, 190, '?'], answer: 382, choices: [286, 334, 382, 380], hint: '×2 + 2' },
  { seq: [3, 10, 31, 94, 283, '?'], answer: 850, choices: [566, 708, 850, 1132], hint: '×3 + 1' },
  { seq: [2, 8, 26, 80, 242, 728, '?'], answer: 2186, choices: [1456, 1822, 2186, 2912], hint: '×3 + 2' },
  { seq: [1, 5, 17, 53, 161, 485, '?'], answer: 1457, choices: [970, 1214, 1457, 1940], hint: '×3 + 2' },

  // ── Batch 4: More Fibonacci double-skip ─────────────────
  { seq: [2, 5, 13, 34, 89, '?'], answer: 233, choices: [144, 189, 233, 377], hint: 'Every other Fibonacci' },
  { seq: [3, 8, 21, 55, 144, '?'], answer: 377, choices: [233, 305, 377, 610], hint: 'Every other Fibonacci' },

  // ── Batch 4: n²×n (= n³) rearranged ────────────────────
  { seq: [1, 4, 27, 256, 3125, '?'], answer: 46656, choices: [15625, 32768, 46656, 78125], hint: 'n^n: 1¹, 2², 3³, 4⁴, 5⁵, 6⁶' },

  // ── Batch 4: Sum of divisors patterns ───────────────────
  { seq: [1, 3, 4, 7, 6, '?'], answer: 12, choices: [8, 10, 12, 14], hint: 'Sum of divisors: σ(1), σ(2), σ(3), σ(4), σ(5), σ(6)' },
  { seq: [3, 4, 7, 6, 12, '?'], answer: 8, choices: [8, 10, 14, 18], hint: 'Sum of divisors continuing' },

  // ── Batch 4: Floor of square root ×n ────────────────────
  { seq: [1, 4, 9, 16, 25, 36, 49, '?'], answer: 64, choices: [56, 60, 64, 81], hint: 'Perfect squares' },
  { seq: [16, 25, 36, 49, 64, 81, '?'], answer: 100, choices: [90, 96, 100, 121], hint: 'Perfect squares continuing' },
  { seq: [36, 49, 64, 81, 100, 121, '?'], answer: 144, choices: [132, 140, 144, 169], hint: 'Perfect squares continuing' },
  { seq: [64, 81, 100, 121, 144, 169, '?'], answer: 196, choices: [182, 190, 196, 225], hint: 'Perfect squares continuing' },
  { seq: [100, 121, 144, 169, 196, 225, '?'], answer: 256, choices: [240, 250, 256, 289], hint: 'Perfect squares continuing' },

  // ── Batch 4: More n² + n + c ────────────────────────────
  { seq: [31, 43, 57, 73, '?'], answer: 91, choices: [83, 87, 91, 99], hint: 'n² + n + 1 continuing' },
  { seq: [43, 57, 73, 91, '?'], answer: 111, choices: [103, 107, 111, 119], hint: 'n² + n + 1 continuing' },
  { seq: [57, 73, 91, 111, '?'], answer: 133, choices: [125, 129, 133, 141], hint: 'n² + n + 1 continuing' },
  { seq: [73, 91, 111, 133, '?'], answer: 157, choices: [149, 153, 157, 165], hint: 'n² + n + 1 continuing' },

  // ── Batch 4: More oblong n(n+2) ─────────────────────────
  { seq: [48, 63, 80, 99, '?'], answer: 120, choices: [110, 115, 120, 130], hint: 'n(n+2) continuing' },
  { seq: [63, 80, 99, 120, '?'], answer: 143, choices: [133, 138, 143, 153], hint: 'n(n+2) continuing' },
  { seq: [80, 99, 120, 143, '?'], answer: 168, choices: [158, 163, 168, 178], hint: 'n(n+2) continuing' },
  { seq: [99, 120, 143, 168, '?'], answer: 195, choices: [185, 190, 195, 205], hint: 'n(n+2) continuing' },

  // ── Batch 4: Sum of cubes extended ──────────────────────
  { seq: [36, 100, 225, 441, '?'], answer: 784, choices: [625, 700, 784, 900], hint: 'Sum of first n cubes' },
  { seq: [100, 225, 441, 784, '?'], answer: 1296, choices: [1024, 1156, 1296, 1600], hint: 'Sum of cubes continuing' },
  { seq: [225, 441, 784, 1296, '?'], answer: 2025, choices: [1764, 1900, 2025, 2500], hint: 'Sum of cubes continuing' },

  // ── Batch 4: Powers of 2 + 3 ────────────────────────────
  { seq: [5, 7, 11, 19, 35, '?'], answer: 67, choices: [51, 59, 67, 68], hint: '2^n + 3' },
  { seq: [7, 11, 19, 35, 67, '?'], answer: 131, choices: [99, 115, 131, 132], hint: '2^n + 3 continuing' },
  { seq: [11, 19, 35, 67, 131, '?'], answer: 259, choices: [195, 227, 259, 260], hint: '2^n + 3 continuing' },

  // ── Batch 4: Powers of 2 − 3 ────────────────────────────
  { seq: [1, 5, 13, 29, 61, '?'], answer: 125, choices: [93, 109, 125, 126], hint: '2^n − 3' },
  { seq: [5, 13, 29, 61, 125, '?'], answer: 253, choices: [189, 221, 253, 254], hint: '2^n − 3 continuing' },

  // ── Batch 4: More interesting interleaved ───────────────
  { seq: [1, 1, 2, 8, 3, 27, '?'], answer: 4, choices: [4, 36, 64, 256], hint: 'Alternate: counting 1,2,3,4 and cubes 1,8,27,64' },
  { seq: [2, 4, 4, 16, 8, '?'], answer: 64, choices: [16, 32, 64, 256], hint: 'Alternate: ×2 and squares 4,16,64' },
  { seq: [1, 2, 3, 6, 9, 18, '?'], answer: 27, choices: [27, 36, 54, 108], hint: 'Pattern: ×2, ×1.5, ×2, ×1.5...' },
  { seq: [10, 5, 8, 4, 6, '?'], answer: 3, choices: [2, 3, 4, 5], hint: 'Alternate: ÷2 and +3 shifted' },
  { seq: [1, 2, 2, 4, 4, '?'], answer: 8, choices: [4, 6, 8, 16], hint: 'Each pair doubles: 1,2 then 2,4 then 4,8' },
  { seq: [3, 1, 9, 1, 27, '?'], answer: 1, choices: [1, 3, 9, 81], hint: 'Alternate: ×3 and always 1' },
  { seq: [1, 10, 2, 20, 3, 30, '?'], answer: 4, choices: [4, 40, 50, 60], hint: 'Alternate: +1 and ×10' },
  { seq: [100, 1, 80, 2, 60, '?'], answer: 3, choices: [3, 4, 40, 50], hint: 'Alternate: −20 and +1' },

  // ── Batch 4: Differences = n² ───────────────────────────
  { seq: [0, 1, 5, 14, 30, 55, '?'], answer: 91, choices: [72, 84, 91, 105], hint: 'Differences: 1, 4, 9, 16, 25, 36' },
  { seq: [1, 2, 6, 15, 31, 56, '?'], answer: 92, choices: [73, 85, 92, 106], hint: 'Differences: 1, 4, 9, 16, 25, 36' },
  { seq: [2, 3, 7, 16, 32, 57, '?'], answer: 93, choices: [74, 86, 93, 107], hint: 'Differences: 1, 4, 9, 16, 25, 36' },
  { seq: [5, 6, 10, 19, 35, 60, '?'], answer: 96, choices: [77, 89, 96, 110], hint: 'Differences: 1, 4, 9, 16, 25, 36' },

  // ── Batch 4: Differences = triangular ───────────────────
  { seq: [0, 1, 4, 10, 20, 35, 56, '?'], answer: 84, choices: [70, 77, 84, 98], hint: 'Differences are triangular: 1, 3, 6, 10, 15, 21, 28' },
  { seq: [1, 2, 5, 11, 21, 36, 57, '?'], answer: 85, choices: [71, 78, 85, 99], hint: 'Differences are triangular' },

  // ── Batch 4: More mixed interesting ─────────────────────
  { seq: [5, 8, 13, 20, 29, 40, '?'], answer: 53, choices: [47, 50, 53, 58], hint: 'Differences: 3, 5, 7, 9, 11, 13' },
  { seq: [3, 7, 14, 24, 37, 53, '?'], answer: 72, choices: [65, 69, 72, 78], hint: 'Differences: 4, 7, 10, 13, 16, 19' },
  { seq: [2, 6, 14, 26, 42, 62, 86, '?'], answer: 114, choices: [102, 108, 114, 124], hint: 'Differences: 4, 8, 12, 16, 20, 24, 28' },
  { seq: [1, 5, 15, 31, 53, 81, '?'], answer: 115, choices: [103, 109, 115, 125], hint: 'Differences: 4, 10, 16, 22, 28, 34' },
  { seq: [10, 14, 22, 34, 50, 70, '?'], answer: 94, choices: [86, 90, 94, 102], hint: 'Differences: 4, 8, 12, 16, 20, 24' },
  { seq: [7, 13, 25, 43, 67, 97, '?'], answer: 133, choices: [121, 127, 133, 145], hint: 'Differences: 6, 12, 18, 24, 30, 36' },
  { seq: [3, 10, 25, 48, 79, 118, '?'], answer: 165, choices: [148, 157, 165, 180], hint: 'Differences: 7, 15, 23, 31, 39, 47' },
  { seq: [4, 12, 28, 52, 84, 124, '?'], answer: 172, choices: [156, 164, 172, 188], hint: 'Differences: 8, 16, 24, 32, 40, 48' },
  { seq: [2, 11, 29, 56, 92, 137, '?'], answer: 191, choices: [173, 182, 191, 208], hint: 'Differences: 9, 18, 27, 36, 45, 54' },
  { seq: [5, 15, 35, 65, 105, 155, '?'], answer: 215, choices: [195, 205, 215, 235], hint: 'Differences: 10, 20, 30, 40, 50, 60' },

  // ── Batch 4: Sequences with specific patterns ───────────
  { seq: [1, 2, 4, 5, 10, 11, 22, '?'], answer: 23, choices: [23, 33, 44, 66], hint: 'Alternate: +1, then ×2' },
  { seq: [3, 4, 8, 9, 18, 19, 38, '?'], answer: 39, choices: [39, 57, 76, 114], hint: 'Alternate: +1, then ×2' },
  { seq: [5, 6, 18, 19, 57, 58, '?'], answer: 174, choices: [59, 116, 174, 232], hint: 'Alternate: +1, then ×3' },
  { seq: [2, 3, 9, 10, 30, 31, '?'], answer: 93, choices: [32, 62, 93, 124], hint: 'Alternate: +1, then ×3' },
  { seq: [1, 2, 6, 7, 21, 22, '?'], answer: 66, choices: [23, 44, 66, 88], hint: 'Alternate: +1, then ×3' },
  { seq: [4, 5, 20, 21, 84, '?'], answer: 85, choices: [85, 168, 252, 336], hint: 'Alternate: +1, then ×4' },
  { seq: [1, 2, 8, 9, 36, '?'], answer: 37, choices: [37, 72, 108, 144], hint: 'Alternate: +1, then ×4' },
  { seq: [2, 3, 12, 13, 52, '?'], answer: 53, choices: [53, 104, 156, 208], hint: 'Alternate: +1, then ×4' },

  // ── Batch 4: More primes-based ──────────────────────────
  { seq: [157, 163, 167, 173, '?'], answer: 179, choices: [175, 177, 179, 181], hint: 'Consecutive primes' },
  { seq: [163, 167, 173, 179, '?'], answer: 181, choices: [180, 181, 183, 187], hint: 'Consecutive primes' },
  { seq: [167, 173, 179, 181, '?'], answer: 191, choices: [187, 189, 191, 193], hint: 'Consecutive primes' },
  { seq: [173, 179, 181, 191, '?'], answer: 193, choices: [192, 193, 195, 197], hint: 'Consecutive primes' },
  { seq: [179, 181, 191, 193, '?'], answer: 197, choices: [195, 197, 199, 201], hint: 'Consecutive primes' },
  { seq: [181, 191, 193, 197, '?'], answer: 199, choices: [198, 199, 201, 203], hint: 'Consecutive primes' },
  { seq: [191, 193, 197, 199, '?'], answer: 211, choices: [201, 203, 211, 213], hint: 'Consecutive primes' },
  { seq: [193, 197, 199, 211, '?'], answer: 223, choices: [213, 217, 223, 227], hint: 'Consecutive primes' },
  { seq: [197, 199, 211, 223, '?'], answer: 227, choices: [225, 227, 229, 233], hint: 'Consecutive primes' },
  { seq: [199, 211, 223, 227, '?'], answer: 229, choices: [228, 229, 231, 233], hint: 'Consecutive primes' },

  // ── Batch 4: Squared primes extended ────────────────────
  { seq: [121, 169, 289, 361, '?'], answer: 529, choices: [441, 484, 529, 625], hint: 'Squares of primes: 11², 13², 17², 19², 23²' },
  { seq: [169, 289, 361, 529, '?'], answer: 841, choices: [625, 729, 841, 961], hint: 'Squares of primes: 13², 17², 19², 23², 29²' },

  // ── Batch 4: More n(n+1) extended ───────────────────────
  { seq: [210, 240, 272, 306, '?'], answer: 342, choices: [330, 336, 342, 360], hint: 'n(n+1) continuing' },
  { seq: [240, 272, 306, 342, '?'], answer: 380, choices: [368, 374, 380, 400], hint: 'n(n+1) continuing' },
  { seq: [272, 306, 342, 380, '?'], answer: 420, choices: [408, 414, 420, 440], hint: 'n(n+1) continuing' },
  { seq: [306, 342, 380, 420, '?'], answer: 462, choices: [450, 456, 462, 480], hint: 'n(n+1) continuing' },
  { seq: [342, 380, 420, 462, '?'], answer: 506, choices: [494, 500, 506, 528], hint: 'n(n+1) continuing' },

  // ── Batch 4: More Tribonacci-variants ───────────────────
  { seq: [3, 5, 7, 15, 27, 49, '?'], answer: 91, choices: [75, 83, 91, 101], hint: 'Sum of previous three' },
  { seq: [1, 2, 3, 6, 11, 20, '?'], answer: 37, choices: [31, 34, 37, 42], hint: 'Sum of previous three' },
  { seq: [2, 3, 5, 10, 18, 33, '?'], answer: 61, choices: [51, 56, 61, 70], hint: 'Sum of previous three' },
  { seq: [4, 4, 4, 12, 20, 36, '?'], answer: 68, choices: [56, 62, 68, 76], hint: 'Sum of previous three' },
  { seq: [1, 2, 4, 7, 13, 24, 44, '?'], answer: 81, choices: [68, 75, 81, 92], hint: 'Sum of previous three' },
  { seq: [3, 3, 6, 12, 21, 39, '?'], answer: 72, choices: [60, 66, 72, 84], hint: 'Sum of previous three' },

  // ── Batch 4: More centered numbers extended ─────────────
  { seq: [85, 113, 145, 181, '?'], answer: 221, choices: [209, 215, 221, 233], hint: 'Centered square numbers' },
  { seq: [113, 145, 181, 221, '?'], answer: 265, choices: [253, 259, 265, 277], hint: 'Centered square numbers' },
  { seq: [73, 121, 181, 253, '?'], answer: 337, choices: [313, 325, 337, 361], hint: 'Star numbers' },
  { seq: [121, 181, 253, 337, '?'], answer: 433, choices: [409, 421, 433, 457], hint: 'Star numbers' },

  // ── Batch 4: Simple but different starts ────────────────
  { seq: [37, 41, 45, 49, '?'], answer: 53, choices: [51, 52, 53, 57], hint: 'Add 4 each time' },
  { seq: [43, 48, 53, 58, '?'], answer: 63, choices: [61, 62, 63, 68], hint: 'Add 5 each time' },
  { seq: [59, 65, 71, 77, '?'], answer: 83, choices: [81, 82, 83, 89], hint: 'Add 6 each time' },
  { seq: [67, 74, 81, 88, '?'], answer: 95, choices: [93, 94, 95, 102], hint: 'Add 7 each time' },
  { seq: [71, 79, 87, 95, '?'], answer: 103, choices: [101, 102, 103, 111], hint: 'Add 8 each time' },
  { seq: [83, 92, 101, 110, '?'], answer: 119, choices: [117, 118, 119, 128], hint: 'Add 9 each time' },
  { seq: [89, 99, 109, 119, '?'], answer: 129, choices: [127, 128, 129, 139], hint: 'Add 10 each time' },
  { seq: [91, 102, 113, 124, '?'], answer: 135, choices: [133, 134, 135, 146], hint: 'Add 11 each time' },
  { seq: [97, 109, 121, 133, '?'], answer: 145, choices: [143, 144, 145, 157], hint: 'Add 12 each time' },
  { seq: [103, 116, 129, 142, '?'], answer: 155, choices: [153, 154, 155, 168], hint: 'Add 13 each time' },

  // ── Batch 4: More decreasing from specific starts ───────
  { seq: [97, 93, 89, 85, '?'], answer: 81, choices: [79, 80, 81, 83], hint: 'Subtract 4 each time' },
  { seq: [88, 83, 78, 73, '?'], answer: 68, choices: [66, 67, 68, 70], hint: 'Subtract 5 each time' },
  { seq: [79, 73, 67, 61, '?'], answer: 55, choices: [53, 54, 55, 57], hint: 'Subtract 6 each time' },
  { seq: [74, 67, 60, 53, '?'], answer: 46, choices: [44, 45, 46, 48], hint: 'Subtract 7 each time' },
  { seq: [68, 60, 52, 44, '?'], answer: 36, choices: [34, 35, 36, 38], hint: 'Subtract 8 each time' },
  { seq: [63, 54, 45, 36, '?'], answer: 27, choices: [25, 26, 27, 29], hint: 'Subtract 9 each time' },
  { seq: [58, 48, 38, 28, '?'], answer: 18, choices: [16, 17, 18, 20], hint: 'Subtract 10 each time' },
  { seq: [56, 45, 34, 23, '?'], answer: 12, choices: [10, 11, 12, 14], hint: 'Subtract 11 each time' },
  { seq: [55, 43, 31, 19, '?'], answer: 7, choices: [5, 6, 7, 9], hint: 'Subtract 12 each time' },

  // ── Batch 4: More n²×2 patterns ─────────────────────────
  { seq: [50, 72, 98, 128, '?'], answer: 162, choices: [148, 155, 162, 176], hint: '2n² for n=5,6,7,8,9' },
  { seq: [72, 98, 128, 162, '?'], answer: 200, choices: [186, 194, 200, 216], hint: '2n² continuing' },
  { seq: [98, 128, 162, 200, '?'], answer: 242, choices: [228, 236, 242, 258], hint: '2n² continuing' },
  { seq: [128, 162, 200, 242, '?'], answer: 288, choices: [274, 282, 288, 306], hint: '2n² continuing' },

  // ── Batch 4: More halving / dividing ────────────────────
  { seq: [6400, 3200, 1600, 800, '?'], answer: 400, choices: [200, 300, 400, 500], hint: '÷2 each time' },
  { seq: [7290, 2430, 810, 270, '?'], answer: 90, choices: [45, 60, 90, 135], hint: '÷3 each time' },
  { seq: [15625, 3125, 625, 125, '?'], answer: 25, choices: [5, 15, 25, 50], hint: '÷5 each time' },
  { seq: [4096, 512, 64, 8, '?'], answer: 1, choices: [0, 1, 2, 4], hint: '÷8 each time' },
  { seq: [10000, 5000, 2500, 1250, '?'], answer: 625, choices: [250, 500, 625, 750], hint: '÷2 each time' },

  // ── Batch 4: Final mixed batch ──────────────────────────
  { seq: [1, 3, 5, 15, 17, '?'], answer: 51, choices: [19, 34, 51, 85], hint: 'Alternate: +2, then ×5 adjusted' },
  { seq: [4, 7, 14, 17, 34, '?'], answer: 37, choices: [37, 51, 68, 102], hint: 'Alternate: +3, then ×2' },
  { seq: [2, 5, 10, 13, 26, '?'], answer: 29, choices: [29, 39, 52, 78], hint: 'Alternate: +3, then ×2' },
  { seq: [6, 9, 18, 21, 42, '?'], answer: 45, choices: [45, 63, 84, 126], hint: 'Alternate: +3, then ×2' },
  { seq: [8, 11, 22, 25, 50, '?'], answer: 53, choices: [53, 75, 100, 150], hint: 'Alternate: +3, then ×2' },
  { seq: [10, 14, 28, 32, 64, '?'], answer: 68, choices: [68, 96, 128, 192], hint: 'Alternate: +4, then ×2' },
  { seq: [3, 7, 14, 18, 36, '?'], answer: 40, choices: [40, 54, 72, 108], hint: 'Alternate: +4, then ×2' },
  { seq: [5, 9, 18, 22, 44, '?'], answer: 48, choices: [48, 66, 88, 132], hint: 'Alternate: +4, then ×2' },
  { seq: [1, 5, 10, 14, 28, '?'], answer: 32, choices: [32, 42, 56, 84], hint: 'Alternate: +4, then ×2' },
  { seq: [7, 12, 24, 29, 58, '?'], answer: 63, choices: [63, 87, 116, 174], hint: 'Alternate: +5, then ×2' },
  { seq: [2, 7, 14, 19, 38, '?'], answer: 43, choices: [43, 57, 76, 114], hint: 'Alternate: +5, then ×2' },
  { seq: [9, 14, 28, 33, 66, '?'], answer: 71, choices: [71, 99, 132, 198], hint: 'Alternate: +5, then ×2' },
  { seq: [4, 10, 20, 26, 52, '?'], answer: 58, choices: [58, 78, 104, 156], hint: 'Alternate: +6, then ×2' },
  { seq: [1, 7, 14, 20, 40, '?'], answer: 46, choices: [46, 60, 80, 120], hint: 'Alternate: +6, then ×2' },
  { seq: [3, 9, 18, 24, 48, '?'], answer: 54, choices: [54, 72, 96, 144], hint: 'Alternate: +6, then ×2' },
  { seq: [5, 12, 24, 31, 62, '?'], answer: 69, choices: [69, 93, 124, 186], hint: 'Alternate: +7, then ×2' },
  { seq: [8, 15, 30, 37, 74, '?'], answer: 81, choices: [81, 111, 148, 222], hint: 'Alternate: +7, then ×2' },
  { seq: [6, 14, 28, 36, 72, '?'], answer: 80, choices: [80, 108, 144, 216], hint: 'Alternate: +8, then ×2' },
  { seq: [10, 19, 38, 47, 94, '?'], answer: 103, choices: [103, 141, 188, 282], hint: 'Alternate: +9, then ×2' },
  { seq: [7, 17, 34, 44, 88, '?'], answer: 98, choices: [98, 132, 176, 264], hint: 'Alternate: +10, then ×2' },

  // ── Batch 5: More arithmetic from specific starts ───────
  { seq: [33, 36, 39, 42, '?'], answer: 45, choices: [43, 44, 45, 48], hint: 'Add 3 each time' },
  { seq: [47, 51, 55, 59, '?'], answer: 63, choices: [61, 62, 63, 67], hint: 'Add 4 each time' },
  { seq: [53, 58, 63, 68, '?'], answer: 73, choices: [71, 72, 73, 78], hint: 'Add 5 each time' },
  { seq: [61, 67, 73, 79, '?'], answer: 85, choices: [83, 84, 85, 91], hint: 'Add 6 each time' },
  { seq: [73, 80, 87, 94, '?'], answer: 101, choices: [99, 100, 101, 108], hint: 'Add 7 each time' },
  { seq: [77, 85, 93, 101, '?'], answer: 109, choices: [107, 108, 109, 117], hint: 'Add 8 each time' },
  { seq: [81, 90, 99, 108, '?'], answer: 117, choices: [115, 116, 117, 126], hint: 'Add 9 each time' },
  { seq: [86, 96, 106, 116, '?'], answer: 126, choices: [124, 125, 126, 136], hint: 'Add 10 each time' },
  { seq: [93, 104, 115, 126, '?'], answer: 137, choices: [135, 136, 137, 148], hint: 'Add 11 each time' },
  { seq: [99, 111, 123, 135, '?'], answer: 147, choices: [145, 146, 147, 159], hint: 'Add 12 each time' },
  { seq: [111, 124, 137, 150, '?'], answer: 163, choices: [161, 162, 163, 176], hint: 'Add 13 each time' },
  { seq: [115, 129, 143, 157, '?'], answer: 171, choices: [169, 170, 171, 185], hint: 'Add 14 each time' },
  { seq: [121, 136, 151, 166, '?'], answer: 181, choices: [179, 180, 181, 196], hint: 'Add 15 each time' },
  { seq: [127, 143, 159, 175, '?'], answer: 191, choices: [189, 190, 191, 207], hint: 'Add 16 each time' },
  { seq: [131, 148, 165, 182, '?'], answer: 199, choices: [197, 198, 199, 216], hint: 'Add 17 each time' },
  { seq: [137, 155, 173, 191, '?'], answer: 209, choices: [207, 208, 209, 227], hint: 'Add 18 each time' },
  { seq: [139, 158, 177, 196, '?'], answer: 215, choices: [213, 214, 215, 234], hint: 'Add 19 each time' },
  { seq: [141, 161, 181, 201, '?'], answer: 221, choices: [219, 220, 221, 241], hint: 'Add 20 each time' },
  { seq: [143, 164, 185, 206, '?'], answer: 227, choices: [225, 226, 227, 248], hint: 'Add 21 each time' },
  { seq: [145, 167, 189, 211, '?'], answer: 233, choices: [231, 232, 233, 255], hint: 'Add 22 each time' },

  // ── Batch 5: More reverse/descending arithmetic ─────────
  { seq: [147, 144, 141, 138, '?'], answer: 135, choices: [133, 134, 135, 137], hint: 'Subtract 3 each time' },
  { seq: [152, 148, 144, 140, '?'], answer: 136, choices: [134, 135, 136, 138], hint: 'Subtract 4 each time' },
  { seq: [165, 160, 155, 150, '?'], answer: 145, choices: [143, 144, 145, 147], hint: 'Subtract 5 each time' },
  { seq: [174, 168, 162, 156, '?'], answer: 150, choices: [148, 149, 150, 152], hint: 'Subtract 6 each time' },
  { seq: [189, 182, 175, 168, '?'], answer: 161, choices: [159, 160, 161, 163], hint: 'Subtract 7 each time' },
  { seq: [208, 200, 192, 184, '?'], answer: 176, choices: [174, 175, 176, 178], hint: 'Subtract 8 each time' },
  { seq: [225, 216, 207, 198, '?'], answer: 189, choices: [187, 188, 189, 191], hint: 'Subtract 9 each time' },
  { seq: [240, 230, 220, 210, '?'], answer: 200, choices: [195, 198, 200, 205], hint: 'Subtract 10 each time' },
  { seq: [275, 264, 253, 242, '?'], answer: 231, choices: [227, 229, 231, 235], hint: 'Subtract 11 each time' },
  { seq: [300, 288, 276, 264, '?'], answer: 252, choices: [248, 250, 252, 256], hint: 'Subtract 12 each time' },

  // ── Batch 5: More geometric ×3 from varied starts ──────
  { seq: [2, 6, 18, 54, 162, '?'], answer: 486, choices: [324, 432, 486, 648], hint: '×3 each time' },
  { seq: [4, 12, 36, 108, '?'], answer: 324, choices: [216, 288, 324, 432], hint: '×3 each time' },
  { seq: [7, 21, 63, 189, '?'], answer: 567, choices: [378, 504, 567, 756], hint: '×3 each time' },
  { seq: [8, 24, 72, 216, 648, '?'], answer: 1944, choices: [1296, 1728, 1944, 2592], hint: '×3 each time' },
  { seq: [10, 30, 90, 270, 810, '?'], answer: 2430, choices: [1620, 2160, 2430, 3240], hint: '×3 each time' },
  { seq: [15, 45, 135, 405, '?'], answer: 1215, choices: [810, 1080, 1215, 1620], hint: '×3 each time' },
  { seq: [20, 60, 180, 540, '?'], answer: 1620, choices: [1080, 1440, 1620, 2160], hint: '×3 each time' },
  { seq: [25, 75, 225, 675, '?'], answer: 2025, choices: [1350, 1800, 2025, 2700], hint: '×3 each time' },

  // ── Batch 5: More multiply-and-add/subtract ────────────
  { seq: [1, 4, 10, 22, 46, '?'], answer: 94, choices: [70, 82, 94, 92], hint: '×2 + 2' },
  { seq: [3, 10, 24, 52, 108, 220, '?'], answer: 444, choices: [332, 388, 444, 440], hint: '×2 + 4' },
  { seq: [2, 8, 26, 80, 242, '?'], answer: 728, choices: [484, 606, 728, 968], hint: '×3 + 2' },
  { seq: [1, 4, 11, 32, 95, '?'], answer: 284, choices: [190, 238, 284, 380], hint: '×3 − 1' },
  { seq: [3, 11, 35, 107, 323, 971, '?'], answer: 2915, choices: [1942, 2428, 2915, 3884], hint: '×3 + 2' },
  { seq: [4, 14, 44, 134, 404, '?'], answer: 1214, choices: [808, 1010, 1214, 1616], hint: '×3 + 2' },
  { seq: [5, 16, 49, 148, 445, 1336, '?'], answer: 4009, choices: [2672, 3340, 4009, 5344], hint: '×3 + 1' },
  { seq: [7, 18, 40, 84, 172, '?'], answer: 348, choices: [260, 304, 348, 344], hint: '×2 + 4' },
  { seq: [9, 22, 48, 100, 204, '?'], answer: 412, choices: [308, 360, 412, 408], hint: '×2 + 4' },
  { seq: [6, 15, 33, 69, 141, '?'], answer: 285, choices: [213, 249, 285, 282], hint: '×2 + 3' },

  // ── Batch 5: More n² + linear ───────────────────────────
  { seq: [37, 50, 65, 82, '?'], answer: 101, choices: [95, 98, 101, 108], hint: 'n² + 1 from n=6' },
  { seq: [50, 65, 82, 101, '?'], answer: 122, choices: [116, 119, 122, 130], hint: 'n² + 1 continuing' },
  { seq: [65, 82, 101, 122, '?'], answer: 145, choices: [139, 142, 145, 153], hint: 'n² + 1 continuing' },
  { seq: [82, 101, 122, 145, '?'], answer: 170, choices: [164, 167, 170, 178], hint: 'n² + 1 continuing' },
  { seq: [101, 122, 145, 170, '?'], answer: 197, choices: [191, 194, 197, 205], hint: 'n² + 1 continuing' },
  { seq: [12, 27, 48, 75, '?'], answer: 108, choices: [96, 102, 108, 120], hint: '3n² for n=2,3,4,5,6' },
  { seq: [75, 108, 147, 192, '?'], answer: 243, choices: [225, 235, 243, 264], hint: '3n² continuing' },

  // ── Batch 5: More differences = even numbers ────────────
  { seq: [1, 3, 7, 13, 21, 31, 43, '?'], answer: 57, choices: [51, 54, 57, 63], hint: 'Differences: 2, 4, 6, 8, 10, 12, 14' },
  { seq: [2, 4, 8, 14, 22, 32, 44, '?'], answer: 58, choices: [52, 55, 58, 64], hint: 'Differences: 2, 4, 6, 8, 10, 12, 14' },
  { seq: [5, 7, 11, 17, 25, 35, 47, '?'], answer: 61, choices: [55, 58, 61, 67], hint: 'Differences: 2, 4, 6, 8, 10, 12, 14' },
  { seq: [10, 12, 16, 22, 30, 40, 52, '?'], answer: 66, choices: [60, 63, 66, 72], hint: 'Differences: 2, 4, 6, 8, 10, 12, 14' },

  // ── Batch 5: More differences = odd numbers ─────────────
  { seq: [1, 2, 5, 10, 17, 26, 37, '?'], answer: 50, choices: [44, 47, 50, 56], hint: 'Differences: 1, 3, 5, 7, 9, 11, 13' },
  { seq: [3, 4, 7, 12, 19, 28, 39, '?'], answer: 52, choices: [46, 49, 52, 58], hint: 'Differences: 1, 3, 5, 7, 9, 11, 13' },
  { seq: [4, 5, 8, 13, 20, 29, 40, '?'], answer: 53, choices: [47, 50, 53, 59], hint: 'Differences: 1, 3, 5, 7, 9, 11, 13' },
  { seq: [6, 7, 10, 15, 22, 31, 42, '?'], answer: 55, choices: [49, 52, 55, 61], hint: 'Differences: 1, 3, 5, 7, 9, 11, 13' },

  // ── Batch 5: More n² based ──────────────────────────────
  { seq: [26, 37, 50, 65, '?'], answer: 82, choices: [76, 79, 82, 90], hint: 'n² + 1 for n=5,6,7,8,9' },
  { seq: [24, 35, 48, 63, 80, '?'], answer: 99, choices: [90, 95, 99, 105], hint: 'n²−1 for n=5,6,7,8,9,10' },
  { seq: [35, 48, 63, 80, 99, '?'], answer: 120, choices: [110, 115, 120, 130], hint: 'n²−1 continuing' },
  { seq: [48, 63, 80, 99, 120, '?'], answer: 143, choices: [133, 138, 143, 153], hint: 'n²−1 continuing' },
  { seq: [63, 80, 99, 120, 143, '?'], answer: 168, choices: [158, 163, 168, 178], hint: 'n²−1 continuing' },

  // ── Batch 5: More cube-based ────────────────────────────
  { seq: [130, 222, 350, 520, '?'], answer: 738, choices: [650, 700, 738, 800], hint: 'n³ + n continuing' },
  { seq: [222, 350, 520, 738, '?'], answer: 1010, choices: [900, 960, 1010, 1100], hint: 'n³ + n continuing' },
  { seq: [126, 218, 342, 504, '?'], answer: 710, choices: [630, 680, 710, 780], hint: 'n³ + 1 pattern continuing' },
  { seq: [124, 216, 340, 502, '?'], answer: 708, choices: [628, 678, 708, 778], hint: 'n³ − 1 continuing' },

  // ── Batch 5: More fourth power ──────────────────────────
  { seq: [1296, 2401, 4096, 6561, '?'], answer: 10000, choices: [8000, 9000, 10000, 14641], hint: 'Fourth powers: 6⁴,7⁴,8⁴,9⁴,10⁴' },
  { seq: [2401, 4096, 6561, 10000, '?'], answer: 14641, choices: [12000, 13500, 14641, 16000], hint: 'Fourth powers continuing' },

  // ── Batch 5: More sums of cubes ─────────────────────────
  { seq: [441, 784, 1296, 2025, '?'], answer: 3025, choices: [2500, 2750, 3025, 3600], hint: 'Sum of cubes continuing' },
  { seq: [784, 1296, 2025, 3025, '?'], answer: 4356, choices: [3600, 4000, 4356, 5000], hint: 'Sum of cubes continuing' },

  // ── Batch 5: More centered hexagonal ────────────────────
  { seq: [37, 61, 91, 127, '?'], answer: 169, choices: [157, 163, 169, 181], hint: 'Centered hexagonal' },
  { seq: [61, 91, 127, 169, '?'], answer: 217, choices: [205, 211, 217, 229], hint: 'Centered hexagonal' },
  { seq: [91, 127, 169, 217, '?'], answer: 271, choices: [259, 265, 271, 283], hint: 'Centered hexagonal' },
  { seq: [127, 169, 217, 271, '?'], answer: 331, choices: [319, 325, 331, 343], hint: 'Centered hexagonal' },

  // ── Batch 5: More cake/lazy caterer ─────────────────────
  { seq: [11, 16, 22, 29, 37, '?'], answer: 46, choices: [43, 45, 46, 50], hint: 'Add 5, 6, 7, 8, 9' },
  { seq: [16, 22, 29, 37, 46, '?'], answer: 56, choices: [53, 55, 56, 60], hint: 'Add 6, 7, 8, 9, 10' },
  { seq: [22, 29, 37, 46, 56, '?'], answer: 67, choices: [63, 65, 67, 72], hint: 'Add 7, 8, 9, 10, 11' },
  { seq: [29, 37, 46, 56, 67, '?'], answer: 79, choices: [75, 77, 79, 84], hint: 'Add 8, 9, 10, 11, 12' },

  // ── Batch 5: More mixed sequences ───────────────────────
  { seq: [10, 14, 20, 28, 38, '?'], answer: 50, choices: [44, 48, 50, 54], hint: 'Differences: 4, 6, 8, 10, 12' },
  { seq: [3, 8, 16, 27, 41, '?'], answer: 58, choices: [52, 55, 58, 64], hint: 'Differences: 5, 8, 11, 14, 17' },
  { seq: [6, 12, 24, 42, 66, '?'], answer: 96, choices: [84, 90, 96, 108], hint: 'Differences: 6, 12, 18, 24, 30' },
  { seq: [4, 11, 24, 43, 68, '?'], answer: 99, choices: [89, 95, 99, 111], hint: 'Differences: 7, 13, 19, 25, 31' },
  { seq: [5, 13, 29, 53, 85, '?'], answer: 125, choices: [113, 119, 125, 137], hint: 'Differences: 8, 16, 24, 32, 40' },
  { seq: [1, 10, 28, 55, 91, '?'], answer: 136, choices: [120, 128, 136, 150], hint: 'Differences: 9, 18, 27, 36, 45' },
  { seq: [3, 6, 15, 24, 39, '?'], answer: 54, choices: [48, 51, 54, 60], hint: 'Differences: 3, 9, 9, 15, 15 alternating' },
  { seq: [2, 3, 5, 9, 17, 33, 65, '?'], answer: 129, choices: [97, 113, 129, 130], hint: 'Differences double: +1, +2, +4, +8, +16, +32, +64' },
  { seq: [7, 8, 10, 14, 22, 38, '?'], answer: 70, choices: [54, 62, 70, 76], hint: 'Differences double: 1, 2, 4, 8, 16, 32' },
  { seq: [3, 4, 6, 10, 18, 34, 66, '?'], answer: 130, choices: [98, 114, 130, 132], hint: 'Differences double: 1, 2, 4, 8, 16, 32, 64' },

  // ── Batch 5: More Fibonacci-like from varied pairs ─────
  { seq: [13, 21, 34, 55, 89, '?'], answer: 144, choices: [110, 127, 144, 178], hint: 'Fibonacci continuation' },
  { seq: [21, 34, 55, 89, 144, '?'], answer: 233, choices: [178, 210, 233, 288], hint: 'Fibonacci continuation' },
  { seq: [34, 55, 89, 144, 233, '?'], answer: 377, choices: [288, 340, 377, 466], hint: 'Fibonacci continuation' },
  { seq: [55, 89, 144, 233, 377, '?'], answer: 610, choices: [466, 550, 610, 754], hint: 'Fibonacci continuation' },
  { seq: [89, 144, 233, 377, 610, '?'], answer: 987, choices: [754, 890, 987, 1220], hint: 'Fibonacci continuation' },
  { seq: [144, 233, 377, 610, 987, '?'], answer: 1597, choices: [1220, 1440, 1597, 1974], hint: 'Fibonacci continuation' },

  // ── Batch 5: More multiples of large numbers ────────────
  { seq: [47, 94, 141, 188, '?'], answer: 235, choices: [220, 230, 235, 282], hint: 'Multiples of 47' },
  { seq: [53, 106, 159, 212, '?'], answer: 265, choices: [250, 260, 265, 318], hint: 'Multiples of 53' },
  { seq: [59, 118, 177, 236, '?'], answer: 295, choices: [280, 290, 295, 354], hint: 'Multiples of 59' },
  { seq: [61, 122, 183, 244, '?'], answer: 305, choices: [290, 300, 305, 366], hint: 'Multiples of 61' },
  { seq: [67, 134, 201, 268, '?'], answer: 335, choices: [320, 330, 335, 402], hint: 'Multiples of 67' },
  { seq: [71, 142, 213, 284, '?'], answer: 355, choices: [340, 350, 355, 426], hint: 'Multiples of 71' },
  { seq: [73, 146, 219, 292, '?'], answer: 365, choices: [350, 360, 365, 438], hint: 'Multiples of 73' },
  { seq: [79, 158, 237, 316, '?'], answer: 395, choices: [380, 390, 395, 474], hint: 'Multiples of 79' },
  { seq: [83, 166, 249, 332, '?'], answer: 415, choices: [400, 410, 415, 498], hint: 'Multiples of 83' },
  { seq: [89, 178, 267, 356, '?'], answer: 445, choices: [430, 440, 445, 534], hint: 'Multiples of 89' },

  // ── Batch 5: More interleaved sequences ─────────────────
  { seq: [1, 2, 4, 3, 16, '?'], answer: 4, choices: [4, 5, 32, 64], hint: 'Alternate: powers of 4 (1,4,16,64) and +1' },
  { seq: [2, 1, 4, 1, 8, '?'], answer: 1, choices: [1, 2, 16, 32], hint: 'Alternate: ×2 and always 1' },
  { seq: [1, 10, 4, 20, 9, '?'], answer: 30, choices: [16, 25, 30, 40], hint: 'Alternate: squares 1,4,9,16 and +10' },
  { seq: [3, 100, 5, 90, 7, '?'], answer: 80, choices: [9, 70, 80, 85], hint: 'Alternate: +2 and −10' },
  { seq: [2, 5, 6, 10, 18, '?'], answer: 15, choices: [15, 20, 36, 54], hint: 'Two interleaved: ×3 and +5' },
  { seq: [1, 4, 9, 8, 25, '?'], answer: 12, choices: [12, 16, 36, 49], hint: 'Alternate: squares and +4' },
  { seq: [0, 1, 1, 4, 4, '?'], answer: 9, choices: [5, 7, 9, 16], hint: 'Alternate: squares 0,1,4,9 and 1,4,9' },
  { seq: [10, 20, 15, 30, 20, '?'], answer: 40, choices: [25, 30, 40, 60], hint: 'Alternate: +5 and ×2' },
  { seq: [5, 2, 10, 4, 20, '?'], answer: 8, choices: [8, 10, 40, 80], hint: 'Alternate: ×2 and ×2 offset' },
  { seq: [12, 6, 24, 12, 48, '?'], answer: 24, choices: [24, 36, 96, 192], hint: 'Alternate: ×2 and ÷2' },

  // ── Batch 5: More mixed operations ──────────────────────
  { seq: [2, 4, 3, 6, 5, '?'], answer: 10, choices: [7, 8, 10, 15], hint: 'Alternate: ×2, then −1' },
  { seq: [4, 12, 10, 30, 28, '?'], answer: 84, choices: [26, 56, 84, 140], hint: 'Alternate: ×3, then −2' },
  { seq: [6, 18, 16, 48, 46, '?'], answer: 138, choices: [44, 92, 138, 230], hint: 'Alternate: ×3, then −2' },
  { seq: [3, 15, 12, 60, 57, '?'], answer: 285, choices: [54, 142, 285, 570], hint: 'Alternate: ×5, then −3' },
  { seq: [7, 21, 17, 51, 47, '?'], answer: 141, choices: [43, 94, 141, 188], hint: 'Alternate: ×3, then −4' },
  { seq: [4, 20, 16, 80, 76, '?'], answer: 380, choices: [72, 190, 380, 760], hint: 'Alternate: ×5, then −4' },
  { seq: [9, 27, 24, 72, 69, '?'], answer: 207, choices: [66, 138, 207, 276], hint: 'Alternate: ×3, then −3' },
  { seq: [11, 33, 30, 90, 87, '?'], answer: 261, choices: [84, 174, 261, 348], hint: 'Alternate: ×3, then −3' },
  { seq: [15, 45, 41, 123, 119, '?'], answer: 357, choices: [115, 238, 357, 476], hint: 'Alternate: ×3, then −4' },
  { seq: [2, 12, 8, 48, 44, '?'], answer: 264, choices: [40, 132, 264, 528], hint: 'Alternate: ×6, then −4' },

  // ── Batch 5: More step patterns ─────────────────────────
  { seq: [1, 3, 6, 10, 15, 21, 28, '?'], answer: 36, choices: [33, 35, 36, 40], hint: 'Triangular numbers' },
  { seq: [2, 5, 10, 17, 26, 37, 50, '?'], answer: 65, choices: [59, 62, 65, 70], hint: 'n² + 1' },
  { seq: [3, 6, 12, 21, 33, 48, 66, '?'], answer: 87, choices: [80, 84, 87, 93], hint: 'Differences: 3, 6, 9, 12, 15, 18, 21' },
  { seq: [4, 8, 15, 25, 38, 54, 73, '?'], answer: 95, choices: [88, 92, 95, 100], hint: 'Differences: 4, 7, 10, 13, 16, 19, 22' },
  { seq: [5, 10, 19, 32, 49, 70, 95, '?'], answer: 124, choices: [115, 120, 124, 130], hint: 'Differences: 5, 9, 13, 17, 21, 25, 29' },

  // ── Batch 5: More powers related ────────────────────────
  { seq: [2, 4, 8, 16, 32, 64, 128, '?'], answer: 256, choices: [192, 224, 256, 512], hint: 'Powers of 2' },
  { seq: [3, 9, 27, 81, 243, 729, 2187, '?'], answer: 6561, choices: [4374, 5832, 6561, 8748], hint: 'Powers of 3' },
  { seq: [4, 16, 64, 256, 1024, 4096, '?'], answer: 16384, choices: [8192, 12288, 16384, 32768], hint: 'Powers of 4' },
  { seq: [5, 25, 125, 625, 3125, 15625, '?'], answer: 78125, choices: [31250, 62500, 78125, 156250], hint: 'Powers of 5' },

  // ── Batch 5: More complex summation ─────────────────────
  { seq: [91, 140, 204, 285, '?'], answer: 385, choices: [350, 370, 385, 420], hint: 'Sum of first n squares' },
  { seq: [140, 204, 285, 385, '?'], answer: 506, choices: [460, 485, 506, 540], hint: 'Sum of squares continuing' },
  { seq: [1, 9, 36, 100, 225, 441, '?'], answer: 784, choices: [625, 700, 784, 900], hint: 'Sum of cubes: (n(n+1)/2)²' },
  { seq: [17, 28, 41, 58, 77, '?'], answer: 100, choices: [92, 96, 100, 108], hint: 'Cumulative sum of primes continuing' },
  { seq: [28, 41, 58, 77, 100, '?'], answer: 127, choices: [119, 123, 127, 135], hint: 'Cumulative sum of primes continuing' },

  // ── Batch 5: More Pell-extended ─────────────────────────
  { seq: [29, 70, 169, 408, 985, '?'], answer: 2378, choices: [1970, 2170, 2378, 2770], hint: 'Pell numbers' },

  // ── Batch 5: More Lucas ─────────────────────────────────
  { seq: [4, 7, 11, 18, 29, 47, 76, '?'], answer: 123, choices: [105, 114, 123, 152], hint: 'Lucas numbers' },
  { seq: [7, 11, 18, 29, 47, 76, 123, '?'], answer: 199, choices: [170, 185, 199, 246], hint: 'Lucas numbers' },
  { seq: [11, 18, 29, 47, 76, 123, 199, '?'], answer: 322, choices: [276, 300, 322, 398], hint: 'Lucas numbers' },
  { seq: [18, 29, 47, 76, 123, 199, 322, '?'], answer: 521, choices: [445, 483, 521, 644], hint: 'Lucas numbers' },

  // ── Batch 5: More interesting quadratics ────────────────
  { seq: [2, 10, 24, 44, '?'], answer: 70, choices: [60, 66, 70, 80], hint: '3n² − n for n=1,2,3,4,5' },
  { seq: [10, 24, 44, 70, '?'], answer: 102, choices: [90, 96, 102, 112], hint: '3n²−n continuing' },
  { seq: [5, 14, 27, 44, '?'], answer: 65, choices: [55, 60, 65, 75], hint: '2n² + n + 2 pattern' },
  { seq: [14, 27, 44, 65, '?'], answer: 90, choices: [80, 85, 90, 100], hint: 'Continuing quadratic' },

  // ── Batch 5: Simple fill-in ─────────────────────────────
  { seq: [10, 20, 40, 80, '?'], answer: 160, choices: [100, 120, 160, 320], hint: '×2 each time' },
  { seq: [100, 200, 400, 800, '?'], answer: 1600, choices: [1000, 1200, 1600, 3200], hint: '×2 each time' },
  { seq: [1, 10, 100, '?'], answer: 1000, choices: [200, 500, 1000, 10000], hint: '×10 each time' },
  { seq: [5, 50, 500, '?'], answer: 5000, choices: [1000, 2500, 5000, 50000], hint: '×10 each time' },
  { seq: [3, 30, 300, '?'], answer: 3000, choices: [600, 1500, 3000, 30000], hint: '×10 each time' },
  { seq: [7, 70, 700, '?'], answer: 7000, choices: [1400, 3500, 7000, 70000], hint: '×10 each time' },
  { seq: [4, 40, 400, '?'], answer: 4000, choices: [800, 2000, 4000, 40000], hint: '×10 each time' },
  { seq: [8, 80, 800, '?'], answer: 8000, choices: [1600, 4000, 8000, 80000], hint: '×10 each time' },
  { seq: [6, 60, 600, '?'], answer: 6000, choices: [1200, 3000, 6000, 60000], hint: '×10 each time' },
  { seq: [9, 90, 900, '?'], answer: 9000, choices: [1800, 4500, 9000, 90000], hint: '×10 each time' },
  { seq: [2, 20, 200, 2000, '?'], answer: 20000, choices: [4000, 10000, 20000, 200000], hint: '×10 each time' },

  // ── Batch 5: Final diverse patterns ─────────────────────
  { seq: [2, 3, 5, 7, 11, 13, 17, 19, '?'], answer: 23, choices: [21, 22, 23, 25], hint: 'Prime numbers' },
  { seq: [1, 2, 3, 5, 8, 13, 21, 34, '?'], answer: 55, choices: [42, 48, 55, 68], hint: 'Fibonacci' },
  { seq: [2, 6, 12, 20, 30, 42, 56, '?'], answer: 72, choices: [64, 68, 72, 84], hint: 'n(n+1)' },
  { seq: [0, 1, 3, 6, 10, 15, 21, 28, '?'], answer: 36, choices: [33, 35, 36, 40], hint: 'Triangular numbers' },
  { seq: [1, 4, 9, 16, 25, 36, 49, 64, 81, '?'], answer: 100, choices: [90, 96, 100, 121], hint: 'Perfect squares' },
  { seq: [1, 8, 27, 64, 125, 216, 343, '?'], answer: 512, choices: [400, 450, 512, 600], hint: 'Perfect cubes' },
  { seq: [2, 4, 8, 16, 32, 64, 128, 256, '?'], answer: 512, choices: [384, 448, 512, 1024], hint: 'Powers of 2' },
  { seq: [1, 1, 2, 3, 5, 8, 13, 21, 34, '?'], answer: 55, choices: [42, 48, 55, 68], hint: 'Fibonacci sequence' },

  // ── Batch 6: Final 100 puzzles ──────────────────────────
  { seq: [150, 157, 164, 171, '?'], answer: 178, choices: [176, 177, 178, 182], hint: 'Add 7 each time' },
  { seq: [160, 168, 176, 184, '?'], answer: 192, choices: [190, 191, 192, 196], hint: 'Add 8 each time' },
  { seq: [170, 179, 188, 197, '?'], answer: 206, choices: [204, 205, 206, 210], hint: 'Add 9 each time' },
  { seq: [180, 190, 200, 210, '?'], answer: 220, choices: [215, 218, 220, 225], hint: 'Add 10 each time' },
  { seq: [190, 201, 212, 223, '?'], answer: 234, choices: [232, 233, 234, 238], hint: 'Add 11 each time' },
  { seq: [200, 212, 224, 236, '?'], answer: 248, choices: [244, 246, 248, 252], hint: 'Add 12 each time' },
  { seq: [300, 287, 274, 261, '?'], answer: 248, choices: [244, 246, 248, 252], hint: 'Subtract 13 each time' },
  { seq: [400, 386, 372, 358, '?'], answer: 344, choices: [340, 342, 344, 348], hint: 'Subtract 14 each time' },
  { seq: [500, 485, 470, 455, '?'], answer: 440, choices: [435, 438, 440, 445], hint: 'Subtract 15 each time' },
  { seq: [600, 584, 568, 552, '?'], answer: 536, choices: [532, 534, 536, 540], hint: 'Subtract 16 each time' },
  { seq: [700, 683, 666, 649, '?'], answer: 632, choices: [628, 630, 632, 636], hint: 'Subtract 17 each time' },
  { seq: [800, 782, 764, 746, '?'], answer: 728, choices: [724, 726, 728, 732], hint: 'Subtract 18 each time' },
  { seq: [900, 881, 862, 843, '?'], answer: 824, choices: [820, 822, 824, 828], hint: 'Subtract 19 each time' },
  { seq: [55, 110, 165, 220, '?'], answer: 275, choices: [260, 270, 275, 330], hint: 'Multiples of 55' },
  { seq: [44, 88, 132, 176, '?'], answer: 220, choices: [200, 210, 220, 264], hint: 'Multiples of 44' },
  { seq: [66, 132, 198, 264, '?'], answer: 330, choices: [310, 320, 330, 396], hint: 'Multiples of 66' },
  { seq: [77, 154, 231, 308, '?'], answer: 385, choices: [365, 375, 385, 462], hint: 'Multiples of 77' },
  { seq: [88, 176, 264, 352, '?'], answer: 440, choices: [420, 430, 440, 528], hint: 'Multiples of 88' },
  { seq: [99, 198, 297, 396, '?'], answer: 495, choices: [475, 485, 495, 594], hint: 'Multiples of 99' },
  { seq: [7, 11, 18, 29, 47, 76, '?'], answer: 123, choices: [105, 114, 123, 152], hint: 'Lucas numbers' },
  { seq: [29, 47, 76, 123, 199, '?'], answer: 322, choices: [276, 300, 322, 398], hint: 'Lucas numbers' },
  { seq: [47, 76, 123, 199, 322, '?'], answer: 521, choices: [445, 483, 521, 644], hint: 'Lucas numbers' },
  { seq: [1, 4, 11, 29, 76, '?'], answer: 199, choices: [152, 176, 199, 304], hint: 'Each ≈ prev × 2.6' },
  { seq: [6, 13, 20, 27, 34, 41, '?'], answer: 48, choices: [45, 47, 48, 51], hint: 'Add 7 each time' },
  { seq: [9, 17, 25, 33, 41, 49, '?'], answer: 57, choices: [54, 56, 57, 60], hint: 'Add 8 each time' },
  { seq: [11, 20, 29, 38, 47, 56, '?'], answer: 65, choices: [62, 64, 65, 68], hint: 'Add 9 each time' },
  { seq: [13, 23, 33, 43, 53, 63, '?'], answer: 73, choices: [70, 72, 73, 76], hint: 'Add 10 each time' },
  { seq: [17, 28, 39, 50, 61, 72, '?'], answer: 83, choices: [80, 82, 83, 86], hint: 'Add 11 each time' },
  { seq: [19, 31, 43, 55, 67, 79, '?'], answer: 91, choices: [88, 90, 91, 94], hint: 'Add 12 each time' },
  { seq: [23, 36, 49, 62, 75, 88, '?'], answer: 101, choices: [98, 100, 101, 104], hint: 'Add 13 each time' },
  { seq: [750, 700, 650, 600, '?'], answer: 550, choices: [525, 540, 550, 575], hint: 'Subtract 50 each time' },
  { seq: [800, 740, 680, 620, '?'], answer: 560, choices: [540, 550, 560, 580], hint: 'Subtract 60 each time' },
  { seq: [900, 830, 760, 690, '?'], answer: 620, choices: [600, 610, 620, 640], hint: 'Subtract 70 each time' },
  { seq: [1000, 920, 840, 760, '?'], answer: 680, choices: [660, 670, 680, 700], hint: 'Subtract 80 each time' },
  { seq: [950, 860, 770, 680, '?'], answer: 590, choices: [570, 580, 590, 610], hint: 'Subtract 90 each time' },
  { seq: [1, 2, 6, 15, 31, '?'], answer: 56, choices: [42, 49, 56, 62], hint: 'Differences: 1, 4, 9, 16, 25 (squares)' },
  { seq: [2, 3, 7, 16, 32, '?'], answer: 57, choices: [43, 50, 57, 63], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [4, 5, 9, 18, 34, '?'], answer: 59, choices: [45, 52, 59, 65], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [6, 7, 11, 20, 36, '?'], answer: 61, choices: [47, 54, 61, 67], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [8, 9, 13, 22, 38, '?'], answer: 63, choices: [49, 56, 63, 69], hint: 'Differences: 1, 4, 9, 16, 25' },
  { seq: [1, 2, 3, 4, 5, 6, 7, 8, 9, '?'], answer: 10, choices: [10, 11, 12, 13], hint: 'Count up by 1' },
  { seq: [50, 51, 52, 53, '?'], answer: 54, choices: [53, 54, 55, 56], hint: 'Count up by 1' },
  { seq: [100, 101, 102, 103, '?'], answer: 104, choices: [103, 104, 105, 106], hint: 'Count up by 1' },
  { seq: [200, 201, 202, 203, '?'], answer: 204, choices: [203, 204, 205, 206], hint: 'Count up by 1' },
  { seq: [500, 501, 502, 503, '?'], answer: 504, choices: [503, 504, 505, 506], hint: 'Count up by 1' },
  { seq: [14, 28, 56, 112, '?'], answer: 224, choices: [168, 196, 224, 448], hint: '×2 each time' },
  { seq: [16, 32, 64, 128, 256, '?'], answer: 512, choices: [384, 448, 512, 1024], hint: '×2 each time' },
  { seq: [18, 36, 72, 144, 288, '?'], answer: 576, choices: [432, 504, 576, 1152], hint: '×2 each time' },
  { seq: [22, 44, 88, 176, '?'], answer: 352, choices: [264, 308, 352, 704], hint: '×2 each time' },
  { seq: [24, 48, 96, 192, '?'], answer: 384, choices: [288, 336, 384, 768], hint: '×2 each time' },
  { seq: [26, 52, 104, 208, '?'], answer: 416, choices: [312, 364, 416, 832], hint: '×2 each time' },
  { seq: [28, 56, 112, 224, '?'], answer: 448, choices: [336, 392, 448, 896], hint: '×2 each time' },
  { seq: [32, 64, 128, 256, '?'], answer: 512, choices: [384, 448, 512, 1024], hint: '×2 each time' },
  { seq: [36, 72, 144, 288, '?'], answer: 576, choices: [432, 504, 576, 1152], hint: '×2 each time' },
  { seq: [48, 96, 192, 384, '?'], answer: 768, choices: [576, 672, 768, 1536], hint: '×2 each time' },
  { seq: [64, 128, 256, 512, 1024, '?'], answer: 2048, choices: [1536, 1792, 2048, 4096], hint: '×2 each time' },
  { seq: [96, 192, 384, 768, '?'], answer: 1536, choices: [1152, 1344, 1536, 3072], hint: '×2 each time' },
  { seq: [1, 3, 6, 10, 15, 21, 28, 36, 45, '?'], answer: 55, choices: [50, 53, 55, 60], hint: 'Triangular numbers' },
  { seq: [3, 6, 10, 15, 21, 28, 36, 45, '?'], answer: 55, choices: [50, 53, 55, 60], hint: 'Triangular numbers' },
  { seq: [6, 10, 15, 21, 28, 36, 45, 55, '?'], answer: 66, choices: [60, 63, 66, 72], hint: 'Triangular numbers' },
  { seq: [210, 231, 253, 276, '?'], answer: 300, choices: [290, 296, 300, 308], hint: 'Triangular numbers continuing' },
  { seq: [231, 253, 276, 300, '?'], answer: 325, choices: [315, 320, 325, 333], hint: 'Triangular numbers continuing' },
  { seq: [253, 276, 300, 325, '?'], answer: 351, choices: [341, 346, 351, 360], hint: 'Triangular numbers continuing' },
  { seq: [276, 300, 325, 351, '?'], answer: 378, choices: [368, 373, 378, 388], hint: 'Triangular numbers continuing' },
  { seq: [300, 325, 351, 378, '?'], answer: 406, choices: [396, 401, 406, 416], hint: 'Triangular numbers continuing' },
  { seq: [10, 21, 34, 49, '?'], answer: 66, choices: [60, 64, 66, 72], hint: 'Differences: 11, 13, 15, 17' },
  { seq: [3, 12, 27, 48, 75, '?'], answer: 108, choices: [96, 102, 108, 120], hint: '3n² for n=1,2,3,4,5,6' },
  { seq: [4, 16, 36, 64, 100, 144, '?'], answer: 196, choices: [180, 188, 196, 210], hint: 'Squares of even: (2n)²' },
  { seq: [1, 9, 25, 49, 81, 121, '?'], answer: 169, choices: [155, 163, 169, 181], hint: 'Squares of odd: (2n−1)²' },
  { seq: [169, 225, 289, 361, '?'], answer: 441, choices: [420, 432, 441, 460], hint: 'Squares of odd: 13², 15², 17², 19², 21²' },
  { seq: [196, 256, 324, 400, '?'], answer: 484, choices: [460, 474, 484, 500], hint: 'Squares of even: 14², 16², 18², 20², 22²' },
  { seq: [1, 4, 10, 20, 35, 56, 84, 120, '?'], answer: 165, choices: [150, 158, 165, 180], hint: 'Tetrahedral numbers' },
  { seq: [4, 10, 20, 35, 56, 84, 120, 165, '?'], answer: 220, choices: [200, 210, 220, 240], hint: 'Tetrahedral numbers' },
  { seq: [6, 28, 496, 8128, '?'], answer: 33550336, choices: [16256, 130816, 33550336, 67100672], hint: 'Perfect numbers' },
  { seq: [1, 2, 4, 8, 15, 26, 42, '?'], answer: 64, choices: [56, 60, 64, 70], hint: 'Cake numbers' },
  { seq: [2, 4, 8, 15, 26, 42, 64, '?'], answer: 93, choices: [82, 88, 93, 100], hint: 'Cake numbers continuing' },
  { seq: [1, 2, 5, 15, 52, 203, '?'], answer: 877, choices: [406, 650, 877, 1015], hint: 'Bell numbers' },
  { seq: [5, 12, 29, 70, 169, 408, '?'], answer: 985, choices: [577, 816, 985, 1154], hint: 'Pell numbers' },
  { seq: [0, 1, 1, 3, 5, 11, 21, '?'], answer: 43, choices: [32, 37, 43, 48], hint: 'Jacobsthal' },
  { seq: [1, 1, 1, 2, 3, 4, 6, 9, '?'], answer: 13, choices: [11, 12, 13, 15], hint: 'Each = prev + 3rd-prev' },
  { seq: [2, 3, 4, 6, 9, 13, 19, '?'], answer: 28, choices: [24, 26, 28, 32], hint: 'Each = prev + 3rd-prev' },
  { seq: [3, 4, 6, 9, 13, 19, 28, '?'], answer: 41, choices: [35, 38, 41, 46], hint: 'Each = prev + 3rd-prev' },
  { seq: [4, 6, 9, 13, 19, 28, 41, '?'], answer: 60, choices: [52, 56, 60, 68], hint: 'Each = prev + 3rd-prev' },
  { seq: [6, 9, 13, 19, 28, 41, 60, '?'], answer: 88, choices: [76, 82, 88, 100], hint: 'Each = prev + 3rd-prev' },
  { seq: [9, 13, 19, 28, 41, 60, 88, '?'], answer: 129, choices: [112, 120, 129, 148], hint: 'Each = prev + 3rd-prev' },
  { seq: [100, 95, 85, 70, 50, '?'], answer: 25, choices: [20, 25, 30, 35], hint: 'Subtract 5, 10, 15, 20, 25' },
  { seq: [200, 190, 170, 140, 100, '?'], answer: 50, choices: [40, 50, 60, 70], hint: 'Subtract 10, 20, 30, 40, 50' },
  { seq: [1000, 999, 996, 991, 984, '?'], answer: 975, choices: [973, 975, 977, 980], hint: 'Subtract 1, 3, 5, 7, 9' },
  { seq: [500, 498, 494, 488, 480, '?'], answer: 470, choices: [466, 468, 470, 474], hint: 'Subtract 2, 4, 6, 8, 10' },
  { seq: [300, 297, 291, 282, 270, '?'], answer: 255, choices: [251, 253, 255, 260], hint: 'Subtract 3, 6, 9, 12, 15' },
  { seq: [400, 396, 388, 376, 360, '?'], answer: 340, choices: [336, 338, 340, 344], hint: 'Subtract 4, 8, 12, 16, 20' },
  { seq: [11, 13, 17, 19, 23, 29, '?'], answer: 31, choices: [30, 31, 33, 37], hint: 'Primes from 11' },
  { seq: [23, 29, 31, 37, 41, 43, '?'], answer: 47, choices: [45, 47, 49, 51], hint: 'Primes from 23' },
  { seq: [29, 31, 37, 41, 43, 47, '?'], answer: 53, choices: [49, 51, 53, 57], hint: 'Primes from 29' },
  { seq: [37, 41, 43, 47, 53, 59, '?'], answer: 61, choices: [60, 61, 63, 67], hint: 'Primes from 37' },
  { seq: [47, 53, 59, 61, 67, 71, '?'], answer: 73, choices: [72, 73, 75, 79], hint: 'Primes from 47' }
];
