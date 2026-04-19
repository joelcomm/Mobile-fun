import type { SourceType } from "@/lib/supabase/types";

export interface SourceSeed {
  name: string;
  url: string;
  source_type: SourceType;
  language: "en" | "ko" | "ja" | "other";
  priority: number;
  notes?: string;
}

// `source_type` routing:
//   reddit   — handled by /api/cron/ingest-reddit (OAuth + /r/<sub>/new)
//   rss      — handled by /api/cron/ingest-rss (rss-parser)
//   official — handled by /api/cron/ingest-pages (page-diff watcher against HTML)
//   steam    — handled by /api/cron/ingest-steam (uses STEAM_APPID env var,
//              not per-source rows; this type is reserved for future use)
//   discord  — no ingestion wired yet
//
// Priority: 1 (must check every run) → 10 (nice-to-have).
//
// A note on press tag pages (PC Gamer, Kotaku, TheGamer, VGC, Wccftech, etc.):
// they were all verified as having recent Crimson Desert coverage, but we
// can't fabricate their RSS URLs. Either (a) verify each site's
// Crimson-Desert-tag-specific RSS feed and add them with source_type='rss',
// or (b) add the tag pages with source_type='official' and extend
// lib/ingestion/pages.ts with per-host selectors. Leaving them out of the
// seed for now rather than ship broken ingestion.
export const SOURCE_SEED: SourceSeed[] = [
  // Reddit
  {
    name: "r/CrimsonDesert — new",
    url: "https://www.reddit.com/r/CrimsonDesert",
    source_type: "reddit",
    language: "en",
    priority: 1,
    notes:
      "Subreddit existence confirmed via cross-references (Discord, Steam, " +
      "Fandomwire). Subscriber count not re-verified in session.",
  },

  // Pearl Abyss notice board (page-diff watcher)
  {
    name: "Pearl Abyss — Crimson Desert Notice (EN)",
    url: "https://crimsondesert.pearlabyss.com/en-US/News/Notice",
    source_type: "official",
    language: "en",
    priority: 1,
    notes:
      "Canonical patch-notes + dev-update index. No public RSS. " +
      "Watched by /api/cron/ingest-pages which extracts " +
      "/News/Notice/Detail?_boardNo=N links and pulls new entries.",
  },
  {
    name: "Pearl Abyss — Crimson Desert Notice (KR)",
    url: "https://crimsondesert.pearlabyss.com/ko-KR/News/Notice",
    source_type: "official",
    language: "ko",
    priority: 2,
    notes:
      "Korean patch notes typically publish earlier than/alongside EN. " +
      "Translation pass happens in the patch-analysis processor. " +
      "Verify the exact locale segment ('ko-KR' vs 'ko') before activating.",
  },
];
