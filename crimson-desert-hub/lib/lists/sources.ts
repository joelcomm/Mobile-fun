import type { SourceType } from "@/lib/supabase/types";

export interface SourceSeed {
  name: string;
  url: string;
  source_type: SourceType;
  language: "en" | "ko" | "ja" | "other";
  priority: number;
  notes?: string;
}

// IMPORTANT: Only add sources after verifying the URL is real, active, and
// relevant. Missing? Leave it out. Never invent a URL.
//
// Priority: 1 (must check every run) → 10 (nice-to-have).
//
// Minimum targets before going live:
//   - Crimson Desert subreddit (verify exact name)
//   - Pearl Abyss official news / dev blog RSS
//   - Steam community announcements (via STEAM_APPID in steam.ts)
//   - Korean patch notes page
//   - One or two major gaming press feeds with Crimson Desert tags
export const SOURCE_SEED: SourceSeed[] = [
  // {
  //   name: "Crimson Desert subreddit — new",
  //   url: "https://www.reddit.com/r/VERIFY_EXACT_SUBREDDIT_NAME/new.json",
  //   source_type: "reddit",
  //   language: "en",
  //   priority: 1,
  //   notes: "Replace URL with the verified subreddit.",
  // },
];
