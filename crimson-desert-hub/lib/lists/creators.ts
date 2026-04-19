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
  external_id?: string | null;
  active?: boolean;
  notes?: string;
}

// Tier guide:
//   1 — Guide / theorycraft (builds, damage testing, frame data)
//   2 — News / patch coverage
//   3 — Lore / story analysis
//   4 — Streamers / personalities
//   5 — Korean community bridges
//   6 — Official / semi-official
//
// Rules:
// - `external_id` is platform-specific. YouTube needs a channel ID (UC...) for
//   our ingestion cron (it calls search.list?channelId=). If only a handle is
//   known, leave `external_id` null and set `active: false` so the cron skips
//   them until you resolve the channel ID (channels.list?forHandle=@handle on
//   the YouTube Data API, or visit the channel page and inspect the URL).
// - Guide-site creators (PowerPyx, Fextralife, Game8, AlcastHQ, SkyCoach) are
//   seeded in lib/lists/sources.ts instead — they're websites first.
// - Entries marked `needs-manual-verify` in notes had their latest content
//   confirmed via video URLs but the channel handle couldn't be pinned
//   automatically (YouTube pages blocked the research session with 403).
//   Open the linked video and copy the handle before flipping `active: true`.
export const CREATOR_SEED: CreatorSeed[] = [
  // ──────────────────────────────────────────────────────────────
  // Tier 1 — Guide / theorycraft (YouTube)
  // ──────────────────────────────────────────────────────────────
  {
    handle: "TODO-resolve-handle-damagetesting",
    platform: "youtube",
    display_name: "Unresolved damage-test creator",
    tier: 1,
    specialty: "Damage testing, crit/defense math, mechanics verification",
    language: "en",
    external_id: null,
    active: false,
    notes:
      "needs-manual-verify. Two high-signal videos from (likely) the same channel: " +
      "https://www.youtube.com/watch?v=rcGOioZMaj8 ('Updated Math Values for Crit Rate...') and " +
      "https://www.youtube.com/watch?v=4wgAwLRCAzI ('Defense VS Damage Reduction Test'). " +
      "Open either, copy the channel handle + UC channel ID, then set external_id and active=true.",
  },
  {
    handle: "TODO-resolve-handle-bossbuilds",
    platform: "youtube",
    display_name: "Unresolved OP-build creator",
    tier: 1,
    specialty: "High-DPS build guides, boss stun-lock strategies",
    language: "en",
    external_id: null,
    active: false,
    notes:
      "needs-manual-verify. Evidence video: " +
      "https://www.youtube.com/watch?v=RxjynIp7-Qw ('Infinite Stun Build Guide'). " +
      "Resolve channel before activating.",
  },

  // ──────────────────────────────────────────────────────────────
  // Tier 4 — Streamers / personalities
  // ──────────────────────────────────────────────────────────────
  {
    handle: "zackrawrr",
    platform: "twitch",
    display_name: "Asmongold (zackrawrr)",
    tier: 4,
    specialty: "High-viewership launch + patch reactions",
    language: "en",
    feed_url: "https://www.twitch.tv/zackrawrr",
    external_id: "zackrawrr",
    active: true,
    notes:
      "Top CD streamer launch week per Streams Charts (1.15M hours, 69,740 peak CCU). " +
      "Evidence: https://www.youtube.com/watch?v=p_cQagtqtkA",
  },
  {
    handle: "cohhcarnage",
    platform: "twitch",
    display_name: "CohhCarnage",
    tier: 4,
    specialty: "Long-form playthroughs, thoughtful running commentary",
    language: "en",
    feed_url: "https://www.twitch.tv/cohhcarnage",
    external_id: "cohhcarnage",
    active: true,
    notes: "100+ hours in CD. Evidence: https://www.youtube.com/watch?v=GuzBB3p7haI",
  },
  {
    handle: "maximilian_dood",
    platform: "twitch",
    display_name: "Maximilian_DOOD",
    tier: 4,
    specialty: "Action-game commentary, returning coverage on patches",
    language: "en",
    feed_url: "https://www.twitch.tv/maximilian_dood",
    external_id: "maximilian_dood",
    active: true,
    notes:
      "Evidence: https://www.youtube.com/watch?v=nLZMRH-6r9I ('Max came back to Crimson Desert?!') " +
      "and https://www.youtube.com/watch?v=oDQz6SVsvZc",
  },
  {
    handle: "WolfheartFPS",
    platform: "x",
    display_name: "Wolfheart",
    tier: 4,
    specialty: "MMO/ARPG commentary, patch-cycle reflections",
    language: "en",
    feed_url: "https://x.com/WolfheartFPS",
    external_id: "WolfheartFPS",
    active: true,
    notes: "Evidence: https://x.com/WolfheartFPS/status/2042632127607443675",
  },
  {
    handle: "SynthPotato",
    platform: "x",
    display_name: "SynthPotato",
    tier: 4,
    specialty: "Patch cadence + live-service commentary",
    language: "en",
    feed_url: "https://x.com/SynthPotato",
    external_id: "SynthPotato",
    active: true,
    notes: "Evidence: https://x.com/SynthPotato/status/2045546078859051237",
  },

  // ──────────────────────────────────────────────────────────────
  // Tier 5 — Korean community bridges
  // ──────────────────────────────────────────────────────────────
  {
    handle: "gsbg",
    platform: "youtube",
    display_name: "G식백과 (Kim Seong-hoe)",
    tier: 5,
    specialty: "Korean gaming critic, early launch-review on 붉은사막",
    language: "ko",
    audience_size: 1_600_000,
    feed_url: "https://www.youtube.com/@gsbg",
    external_id: null,
    active: false,
    notes:
      "needs-manual-verify. Handle is @gsbg. Resolve the UC channel ID by " +
      "opening the channel page and inspecting the URL, then set external_id " +
      "and active=true. ~1.6M subs per public knowledge (not re-verified).",
  },
  {
    handle: "kimdoland",
    platform: "youtube",
    display_name: "김도랜드 (Kimdo Land)",
    tier: 5,
    specialty: "KR gameplay commentary",
    language: "ko",
    feed_url: "https://www.youtube.com/channel/UC2_VPutZK0o_tG8ca_QrQRA",
    external_id: "UC2_VPutZK0o_tG8ca_QrQRA",
    active: true,
    notes:
      "Evidence: https://www.youtube.com/watch?v=yq1nwt_ztlw ('군생활하는 느낌...'). " +
      "Channel ID verified.",
  },
  {
    handle: "TODO-resolve-handle-gameheadline",
    platform: "youtube",
    display_name: "게임 헤드라인 (Game Headline)",
    tier: 5,
    specialty: "KR-EN reception bridge (what Korean community is saying about CD)",
    language: "ko",
    external_id: null,
    active: false,
    notes:
      "needs-manual-verify. Three recent CD bridge videos: " +
      "https://www.youtube.com/watch?v=3o_oNtl3MJg (스트리머 반응), " +
      "https://www.youtube.com/watch?v=fyXaJIKdiX4 (영어권 vs 한국 평가), " +
      "https://www.youtube.com/watch?v=ecDouQRIDrc (500만 돌파). " +
      "Open any of them to grab the channel handle.",
  },

  // ──────────────────────────────────────────────────────────────
  // Tier 6 — Official / semi-official
  // ──────────────────────────────────────────────────────────────
  {
    handle: "CrimsonDesert",
    platform: "youtube",
    display_name: "Crimson Desert (official)",
    tier: 6,
    specialty: "Official trailers, patch previews, dev videos",
    language: "en",
    feed_url: "https://www.youtube.com/@CrimsonDesert",
    external_id: null,
    active: false,
    notes:
      "Official Pearl Abyss YouTube channel. Resolve the UC channel ID " +
      "(channels.list?forHandle=@CrimsonDesert on the YouTube Data API) " +
      "before activating.",
  },
  {
    handle: "CrimsonDesert_",
    platform: "x",
    display_name: "Crimson Desert (official)",
    tier: 6,
    specialty: "Official Pearl Abyss comms, patch teasers",
    language: "en",
    feed_url: "https://x.com/CrimsonDesert_",
    external_id: "CrimsonDesert_",
    active: false,
    notes:
      "X ingestion is not wired up yet. Keep inactive until we add an " +
      "X-API-or-Nitter ingestion route.",
  },
];
