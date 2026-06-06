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
  { seq: [4, 16, 64, 256, '?'], answer: 1024, choices: [512, 768, 1024, 2048], hint: 'Multiply by 4' },

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
  { seq: [1, 6, 36, 216, '?'], answer: 1296, choices: [648, 864, 1296, 1728], hint: 'Powers of 6' },
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
  { seq: [1, 3, 9, 27, '?'], answer: 81, choices: [54, 63, 81, 108], hint: 'Multiply by 3' },
  { seq: [4, 9, 19, 39, '?'], answer: 79, choices: [59, 69, 79, 78], hint: 'Double and add 1' },
  { seq: [2, 5, 11, 23, '?'], answer: 47, choices: [35, 41, 47, 46], hint: 'Double and add 1' },
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
  { seq: [1, 3, 7, 15, '?'], answer: 31, choices: [23, 27, 31, 30], hint: '×2 + 1' },
  { seq: [1, 4, 13, 40, '?'], answer: 121, choices: [80, 100, 121, 160], hint: '×3 + 1' },
  { seq: [2, 5, 11, 23, 47, '?'], answer: 95, choices: [71, 83, 95, 94], hint: '×2 + 1' },
  { seq: [3, 8, 18, 38, '?'], answer: 78, choices: [58, 68, 78, 76], hint: '×2 + 2' },
  { seq: [1, 5, 21, 85, '?'], answer: 341, choices: [170, 256, 341, 425], hint: '×4 + 1' },

  // ── Cube roots / cube-related ──────────────────────────
  { seq: [8, 27, 64, 125, 216, '?'], answer: 343, choices: [250, 300, 343, 512], hint: 'Cubes: 2³, 3³, 4³, 5³, 6³, 7³' },
  { seq: [1, 8, 27, '?'], answer: 64, choices: [36, 48, 64, 81], hint: 'Perfect cubes: 1³, 2³, 3³, 4³' },
  { seq: [27, 64, 125, 216, '?'], answer: 343, choices: [256, 300, 343, 400], hint: 'Cubes: 3³, 4³, 5³, 6³, 7³' },
  { seq: [64, 125, 216, 343, '?'], answer: 512, choices: [400, 450, 512, 600], hint: 'Cubes: 4³, 5³, 6³, 7³, 8³' },
  { seq: [216, 343, 512, 729, '?'], answer: 1000, choices: [800, 900, 1000, 1331], hint: 'Cubes: 6³, 7³, 8³, 9³, 10³' },

  // ── Sum of digits ──────────────────────────────────────
  { seq: [10, 11, 13, 16, 20, '?'], answer: 25, choices: [23, 24, 25, 28], hint: 'Differences: +1, +2, +3, +4, +5' },
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
  { seq: [3, 5, 9, 17, '?'], answer: 33, choices: [25, 29, 33, 65], hint: '2^n + 1: 2+1, 4+1, 8+1, 16+1, 32+1' },
  { seq: [1, 3, 7, 15, 31, '?'], answer: 63, choices: [47, 55, 63, 62], hint: '2^n − 1' },
  { seq: [0, 2, 6, 14, 30, '?'], answer: 62, choices: [46, 54, 62, 64], hint: '2^n − 2' },
  { seq: [5, 6, 8, 12, 20, '?'], answer: 36, choices: [28, 32, 36, 40], hint: 'Add 1, 2, 4, 8, 16 (powers of 2)' },
  { seq: [10, 11, 13, 17, 25, '?'], answer: 41, choices: [33, 37, 41, 50], hint: 'Add powers of 2: +1, +2, +4, +8, +16' },
  { seq: [100, 101, 103, 107, 115, '?'], answer: 131, choices: [123, 127, 131, 163], hint: 'Add powers of 2' },

  // ── Catalan-style / Combinatorial ──────────────────────
  { seq: [1, 1, 2, 5, 14, '?'], answer: 42, choices: [28, 35, 42, 56], hint: 'Catalan numbers' },
  { seq: [1, 2, 5, 14, '?'], answer: 42, choices: [28, 35, 42, 56], hint: 'Catalan numbers' },
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
  { seq: [1, 2, 6, 24, 120, '?'], answer: 720, choices: [240, 480, 720, 960], hint: 'Factorials: 1!, 2!, 3!, 4!, 5!, 6!' },
  { seq: [10, 13, 19, 28, 40, '?'], answer: 55, choices: [48, 52, 55, 60], hint: 'Differences: +3, +6, +9, +12, +15' },

  // ── n² + n ─────────────────────────────────────────────
  { seq: [2, 6, 12, 20, 30, '?'], answer: 42, choices: [36, 40, 42, 48], hint: 'n² + n for n = 1, 2, 3, 4, 5, 6' },
  { seq: [56, 72, 90, 110, '?'], answer: 132, choices: [120, 126, 132, 144], hint: 'n(n+1) for n = 7, 8, 9, 10, 11' },
  { seq: [90, 110, 132, 156, '?'], answer: 182, choices: [168, 175, 182, 196], hint: 'n(n+1) for n = 9, 10, 11, 12, 13' },

  // ── Add consecutive odds ───────────────────────────────
  { seq: [1, 4, 9, 16, '?'], answer: 25, choices: [20, 23, 25, 30], hint: 'Sum of first n odd numbers = n²' },
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
  { seq: [1, 2, 3, 5, 8, '?'], answer: 13, choices: [10, 11, 13, 15], hint: 'Fibonacci starting 1, 2' },
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
  { seq: [1, 2, 6, 24, 120, '?'], answer: 720, choices: [360, 600, 720, 840], hint: 'Multiply by 2, 3, 4, 5, 6' },
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
  { seq: [1, 10, 100, 1000, '?'], answer: 10000, choices: [2000, 5000, 10000, 100000], hint: 'Multiply by 10' },
  { seq: [7, 11, 19, 35, '?'], answer: 67, choices: [51, 59, 67, 70], hint: 'Differences double: +4, +8, +16, +32' },
  { seq: [3, 5, 11, 23, '?'], answer: 47, choices: [35, 41, 47, 46], hint: '×2 + 1, starting from 3' },
  { seq: [100, 98, 94, 88, '?'], answer: 80, choices: [76, 78, 80, 82], hint: 'Subtract 2, 4, 6, 8' },
  { seq: [1000, 500, 250, 125, '?'], answer: 62, choices: [50, 55, 62, 75], hint: 'Divide by 2, round down for odd' },
  { seq: [15, 16, 18, 21, 25, '?'], answer: 30, choices: [28, 29, 30, 32], hint: 'Add 1, 2, 3, 4, 5' },
  { seq: [20, 22, 26, 32, 40, '?'], answer: 50, choices: [44, 48, 50, 56], hint: 'Differences: +2, +4, +6, +8, +10' },
  { seq: [50, 51, 54, 60, 70, '?'], answer: 85, choices: [75, 80, 85, 90], hint: 'Differences: +1, +3, +6, +10, +15 (triangular)' },
  { seq: [2, 8, 26, 80, '?'], answer: 242, choices: [160, 200, 242, 320], hint: '×3 + 2' },
  { seq: [3, 11, 35, 107, '?'], answer: 323, choices: [214, 267, 323, 428], hint: '×3 + 2' }
];
