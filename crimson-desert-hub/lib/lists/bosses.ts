export interface BossSeed {
  slug: string;
  name: string;
  region?: string;
  difficulty?: "story" | "mid" | "late" | "endgame" | "post-game";
  description?: string;
  weaknesses?: string[];
}

// IMPORTANT: Do NOT invent boss names, regions, or mechanics. Leave empty until
// you can verify each entry against official Pearl Abyss materials, in-game
// content, or trusted creator coverage.
//
// Guide-tier bosses (the ones players want guides for) should come first.
// Include a short neutral description and a slug you'll keep stable for URLs.
export const BOSS_SEED: BossSeed[] = [];
