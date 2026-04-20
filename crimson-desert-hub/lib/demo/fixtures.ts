// Fixture data used only when NEXT_PUBLIC_SUPABASE_URL is unset.
// Every item is explicitly labeled as demo content so nothing on the
// live site is ever served as real intelligence.

import type {
  Boss,
  Creator,
  DailyDigest,
  IngestedContent,
  Patch,
  Signal,
} from "@/lib/supabase/types";
import type { PatchAnalysis } from "@/lib/processing/patch-analysis";

const NOW = "2026-04-20T12:00:00.000Z";
const YESTERDAY = "2026-04-19T12:00:00.000Z";
const LAST_WEEK = "2026-04-13T12:00:00.000Z";

export const DEMO_DIGEST: DailyDigest = {
  id: "demo-digest-1",
  digest_date: "2026-04-20",
  headline:
    "[DEMO] Servers stabilized after 1.0.3 hotfix; theorycrafters re-testing parry i-frames",
  body: `This is demo content rendered because no Supabase project is configured.

In production this section is generated daily by Claude Sonnet from the last 24 hours of ingested creator and community content, with attribution on every claim.

Set NEXT_PUBLIC_SUPABASE_URL plus the keys listed in .env.local.example and run the ingestion crons to replace this placeholder with real output.`,
  top_stories: [
    {
      title: "[DEMO] Hotfix 1.0.3 addresses the Black Lion grab-loop",
      summary:
        "Demo summary: a sample top story. In production these are synthesized from ingested patch notes and creator videos with full attribution.",
      sources: [
        { title: "Pearl Abyss Notice (sample)", url: "https://example.com/notice" },
        { title: "r/CrimsonDesert thread (sample)", url: "https://example.com/thread" },
      ],
    },
    {
      title: "[DEMO] Damage-test creator recalculates crit formula",
      summary:
        "Demo summary. Real digests link directly to the creator video the claim is drawn from and quote numbers the creator actually measured.",
      sources: [
        { title: "Creator video (sample)", url: "https://example.com/video" },
      ],
    },
  ],
  meta_shifts: [
    {
      change: "[DEMO] Greatsword parry window nudged down ~3 frames",
      impact: "Sample impact line.",
      evidence: "Sample evidence line citing a measured video.",
    },
  ],
  creator_highlights: [
    {
      creator: "Sample Creator",
      title: "[DEMO] Returning playthrough — patch reactions",
      url: "https://example.com/creator",
      why_watch: "In production, Claude writes one sentence per pick explaining why this is worth clicking.",
    },
  ],
  generated_at: NOW,
};

export const DEMO_SIGNALS: Signal[] = [
  {
    id: "demo-signal-1",
    signal_type: "patch_released",
    severity: "high",
    title: "[DEMO] Patch 1.0.3 detected on Pearl Abyss notice board",
    description:
      "Sample high-severity signal. Real signals fire from player-count deltas, subreddit velocity, or a patch appearing in ingested content.",
    source_content_ids: null,
    triggered_at: NOW,
    acknowledged: false,
  },
];

const demoPatchAnalysis: PatchAnalysis = {
  summary:
    "[DEMO] Sample patch analysis. In production Claude Sonnet produces this from the raw notes (translated from Korean when needed) plus early community reactions.",
  changes: [
    {
      category: "combat",
      before: "Greatsword parry window: ~14 frames",
      after: "Greatsword parry window: ~11 frames",
      who_cares: "Anyone running a reactive parry build against fast-swing bosses.",
    },
    {
      category: "economy",
      before: "Trainer resource cap: 500/day",
      after: "Trainer resource cap: 750/day",
      who_cares: "Mid-game players trying to keep mount training from bottlenecking progression.",
    },
  ],
  impact: {
    stronger: ["Mount-training alts", "Passive-block builds"],
    weaker: ["Late-reaction parry timings on two-hand weapons"],
    bosses: ["Sample Boss A (fight is now more punishing for late parries)"],
    playstyles: ["Aggressive openers", "Resource-farming routes"],
  },
  sleeper_changes: [
    {
      item: "Stamina regen on perfect-dodge",
      why_it_matters: "Sample sleeper change — small buff but stacks on builds that chain dodges.",
    },
  ],
  what_to_watch: [
    "Whether top damage-test creators reconfirm the parry-window measurement over the next 48 hours.",
    "Korean-community response on 붉은사막 subreddit equivalents — early complaints often precede follow-up hotfixes.",
  ],
};

export const DEMO_PATCHES: Patch[] = [
  {
    id: "demo-patch-1",
    slug: "1-0-3-2026-04-19",
    version: "1.0.3",
    released_at: YESTERDAY,
    raw_notes:
      "[DEMO RAW NOTES]\n- Adjusted greatsword parry window.\n- Raised trainer resource cap.\n- Misc stability fixes.",
    ai_summary: demoPatchAnalysis.summary,
    ai_impact_analysis: JSON.stringify(demoPatchAnalysis),
    categories: ["combat", "economy"],
    created_at: YESTERDAY,
  },
  {
    id: "demo-patch-2",
    slug: "1-0-2-2026-04-13",
    version: "1.0.2",
    released_at: LAST_WEEK,
    raw_notes: "[DEMO RAW NOTES] Launch-week stability pass.",
    ai_summary: "[DEMO] Week-one stability and login-queue fixes. Sample summary.",
    ai_impact_analysis: null,
    categories: ["stability"],
    created_at: LAST_WEEK,
  },
];

const demoPhases = [
  {
    phase: "Phase 1 — Opening pressure",
    mechanics: [
      "Wide horizontal sweep telegraphed by shoulder dip",
      "Grab attempt after any blocked hit",
    ],
    how_to_handle:
      "Stay at mid-range and bait the sweep; roll inward, not back. After a blocked hit, immediately disengage to avoid the grab.",
    sources: [
      { creator: "Sample Creator", url: "https://example.com/phase1" },
    ],
  },
  {
    phase: "Phase 2 — Enrage",
    mechanics: ["Adds spawn at 50% HP", "Fire AoE under boss"],
    how_to_handle:
      "Kill the adds first; burning the boss through adds wipes most groups. Kite the AoE along the arena's long axis.",
    sources: [
      { creator: "Sample Creator 2", url: "https://example.com/phase2" },
    ],
  },
];

export const DEMO_BOSSES: Boss[] = [
  {
    id: "demo-boss-1",
    slug: "sample-boss-a",
    name: "[DEMO] Sample Boss A",
    region: "Pywan Plains",
    difficulty: "Hard",
    description:
      "Demo boss entry. Populate lib/lists/bosses.ts and run the boss-guide synthesis job to replace this with real, verified encounters.",
    strategies: demoPhases,
    rewards: null,
    weaknesses: ["Slash damage", "Stagger on parry"],
    last_updated: NOW,
  },
  {
    id: "demo-boss-2",
    slug: "sample-boss-b",
    name: "[DEMO] Sample Boss B",
    region: "Red Wastes",
    difficulty: "Elite",
    description: "Demo boss entry. Not a real encounter.",
    strategies: demoPhases.slice(0, 1),
    rewards: null,
    weaknesses: ["Fire damage"],
    last_updated: NOW,
  },
];

export const DEMO_CREATORS: Creator[] = [
  {
    id: "demo-creator-1",
    handle: "zackrawrr",
    platform: "twitch",
    display_name: "Asmongold (zackrawrr)",
    tier: 4,
    specialty: "High-viewership launch + patch reactions",
    language: "en",
    audience_size: null,
    active: true,
    feed_url: "https://www.twitch.tv/zackrawrr",
    external_id: "zackrawrr",
    notes: "Demo row — mirrors the seed in lib/lists/creators.ts.",
    created_at: NOW,
  },
  {
    id: "demo-creator-2",
    handle: "cohhcarnage",
    platform: "twitch",
    display_name: "CohhCarnage",
    tier: 4,
    specialty: "Long-form playthroughs with running commentary",
    language: "en",
    audience_size: null,
    active: true,
    feed_url: "https://www.twitch.tv/cohhcarnage",
    external_id: "cohhcarnage",
    notes: "Demo row.",
    created_at: NOW,
  },
  {
    id: "demo-creator-3",
    handle: "maximilian_dood",
    platform: "twitch",
    display_name: "Maximilian_DOOD",
    tier: 4,
    specialty: "Action-game commentary, patch-cycle returning coverage",
    language: "en",
    audience_size: null,
    active: true,
    feed_url: "https://www.twitch.tv/maximilian_dood",
    external_id: "maximilian_dood",
    notes: "Demo row.",
    created_at: NOW,
  },
  {
    id: "demo-creator-4",
    handle: "kimdoland",
    platform: "youtube",
    display_name: "김도랜드 (Kimdo Land)",
    tier: 5,
    specialty: "KR gameplay commentary — Korean-community bridge",
    language: "ko",
    audience_size: null,
    active: true,
    feed_url: "https://www.youtube.com/channel/UC2_VPutZK0o_tG8ca_QrQRA",
    external_id: "UC2_VPutZK0o_tG8ca_QrQRA",
    notes: "Demo row.",
    created_at: NOW,
  },
];

export const DEMO_FEED: IngestedContent[] = [
  {
    id: "demo-feed-1",
    source_type: "reddit",
    external_id: "demo-reddit-1",
    creator_id: null,
    source_id: null,
    title: "[DEMO] 1.0.3 parry window — is it just me or did it tighten?",
    url: "https://example.com/reddit-thread",
    published_at: NOW,
    content:
      "Sample body. In production, reddit posts land here via /api/cron/ingest-reddit and get a relevance score from Claude Haiku.",
    transcript: null,
    language: "en",
    raw_metadata: null,
    processed: true,
    relevance_score: 7.5,
    category: "patch",
    ingested_at: NOW,
  },
  {
    id: "demo-feed-2",
    source_type: "official",
    external_id: "demo-pa-1",
    creator_id: null,
    source_id: null,
    title: "[DEMO] Pearl Abyss — Hotfix 1.0.3 notice",
    url: "https://example.com/notice",
    published_at: YESTERDAY,
    content:
      "Sample notice body. Real entries come from the page-diff watcher in lib/ingestion/pages.ts.",
    transcript: null,
    language: "en",
    raw_metadata: null,
    processed: true,
    relevance_score: 9.0,
    category: "patch",
    ingested_at: YESTERDAY,
  },
  {
    id: "demo-feed-3",
    source_type: "reddit",
    external_id: "demo-reddit-2",
    creator_id: null,
    source_id: null,
    title: "[DEMO] Found a sleeper stamina-regen buff in the notes",
    url: "https://example.com/reddit-thread-2",
    published_at: YESTERDAY,
    content: "Sample body.",
    transcript: null,
    language: "en",
    raw_metadata: null,
    processed: true,
    relevance_score: 6.2,
    category: "build",
    ingested_at: YESTERDAY,
  },
];

export function findDemoPatch(slug: string): Patch | null {
  return DEMO_PATCHES.find((p) => p.slug === slug) ?? null;
}
export function findDemoBoss(slug: string): Boss | null {
  return DEMO_BOSSES.find((b) => b.slug === slug) ?? null;
}
export function findDemoFeedItem(id: string): IngestedContent | null {
  return DEMO_FEED.find((f) => f.id === id) ?? null;
}
