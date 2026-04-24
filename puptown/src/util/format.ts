// Shared number formatting. Handles huge numbers for the long tail.
//
// Returns a short string like "1.5k", "42m", "3.2b". One decimal for small
// fractional values, no decimals once we're past 1000.

const SUFFIXES = ["", "k", "m", "b", "t", "q", "Q", "s", "S", "o", "n", "d"];

export function formatNumber(n: number): string {
  if (!isFinite(n)) return "\u221E";
  if (n < 10) return n.toFixed(1);
  if (n < 1000) return Math.floor(n).toString();
  let tier = 0;
  let v = n;
  while (v >= 1000 && tier < SUFFIXES.length - 1) {
    v /= 1000;
    tier += 1;
  }
  return (v < 10 ? v.toFixed(2) : v < 100 ? v.toFixed(1) : Math.floor(v).toString()) + SUFFIXES[tier];
}
