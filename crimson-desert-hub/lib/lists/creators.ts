import type { CreatorPlatform } from "@/lib/supabase/types";

export interface CreatorSeed {
  handle: string;
  platform: CreatorPlatform;
  display_name?: string;
  tier: 1 | 2 | 3 | 4 | 5 | 6;
  specialty: string;
  language: "en" | "ko" | "ja" | "other";
  audience_size?: number;
  feed_url?: string;
  external_id?: string;
  notes?: string;
}

// IMPORTANT: Do NOT fabricate creators. This list is intentionally empty.
// Populate it yourself by spending an hour on YouTube, Twitch, Reddit, and X
// identifying real, active Crimson Desert creators.
//
// Tier guide:
//   1 — Guide / theorycraft (builds, damage testing, frame data)
//   2 — News / patch coverage
//   3 — Lore / story analysis (English + Korean)
//   4 — Streamers / personalities
//   5 — Korean community bridges (translators, KR creators)
//   6 — Official + semi-official (Pearl Abyss, verified devs, CMs)
//
// Every entry must pass the test: "Would a respected Crimson Desert player look
// at this and recognize it as the real deal?"
//
// Example SHAPE (not real data, replace with verified creators):
//   {
//     handle: "example_handle",
//     platform: "youtube",
//     display_name: "Example Creator",
//     tier: 1,
//     specialty: "Sword build theorycraft, frame data",
//     language: "en",
//     external_id: "UCxxxxxxxxxxxxxxxxxxxxxx", // YouTube channel ID
//     notes: "Why they belong + a link to evidence of correct early calls.",
//   }
export const CREATOR_SEED: CreatorSeed[] = [];
