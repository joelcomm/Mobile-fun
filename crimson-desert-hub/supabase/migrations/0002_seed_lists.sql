-- One-shot seed of the curated lists. Mirrors lib/lists/creators.ts and
-- lib/lists/sources.ts. Re-running is safe (ON CONFLICT DO NOTHING).
--
-- To keep lib/lists/*.ts as the source of truth, prefer writing a tiny
-- scripts/seed.ts that reads the TS arrays and upserts, rather than editing
-- this SQL by hand once you go live. The SQL is here so you can bootstrap
-- the database from the Supabase SQL editor in one paste.

-- ─────────────────────────────────────────────────────────────
-- Sources
-- ─────────────────────────────────────────────────────────────

insert into sources (name, url, source_type, language, priority, active) values
  ('r/CrimsonDesert — new',                         'https://www.reddit.com/r/CrimsonDesert',                              'reddit',   'en', 1, true),
  ('Pearl Abyss — Crimson Desert Notice (EN)',      'https://crimsondesert.pearlabyss.com/en-US/News/Notice',              'official', 'en', 1, true),
  ('Pearl Abyss — Crimson Desert Notice (KR)',      'https://crimsondesert.pearlabyss.com/ko-KR/News/Notice',              'official', 'ko', 2, false)
on conflict do nothing;

-- KR locale is seeded inactive; flip active=true once you've confirmed the
-- exact locale segment (Pearl Abyss sometimes uses /ko/ instead of /ko-KR/).

-- ─────────────────────────────────────────────────────────────
-- Creators
-- ─────────────────────────────────────────────────────────────

insert into creators
  (handle, platform, display_name, tier, specialty, language, audience_size, feed_url, external_id, active, notes)
values
  -- Tier 1 — Guide / theorycraft (YouTube, handles unresolved)
  ('TODO-resolve-handle-damagetesting', 'youtube',
    'Unresolved damage-test creator', 1,
    'Damage testing, crit/defense math, mechanics verification',
    'en', null, null, null, false,
    'needs-manual-verify. Videos: youtube.com/watch?v=rcGOioZMaj8 (math values), youtube.com/watch?v=4wgAwLRCAzI (defense vs damage reduction). Resolve channel handle + UC id, then activate.'),
  ('TODO-resolve-handle-bossbuilds', 'youtube',
    'Unresolved OP-build creator', 1,
    'High-DPS build guides, boss stun-lock strategies',
    'en', null, null, null, false,
    'needs-manual-verify. Video: youtube.com/watch?v=RxjynIp7-Qw (Infinite Stun Build Guide).'),

  -- Tier 4 — Streamers / personalities
  ('zackrawrr', 'twitch',
    'Asmongold (zackrawrr)', 4,
    'High-viewership launch + patch reactions',
    'en', null,
    'https://www.twitch.tv/zackrawrr', 'zackrawrr', true,
    'Top CD streamer launch week (1.15M hours, 69,740 peak CCU). Evidence: youtube.com/watch?v=p_cQagtqtkA'),
  ('cohhcarnage', 'twitch',
    'CohhCarnage', 4,
    'Long-form playthroughs, thoughtful running commentary',
    'en', null,
    'https://www.twitch.tv/cohhcarnage', 'cohhcarnage', true,
    '100+ hours in CD. Evidence: youtube.com/watch?v=GuzBB3p7haI'),
  ('maximilian_dood', 'twitch',
    'Maximilian_DOOD', 4,
    'Action-game commentary, returning coverage on patches',
    'en', null,
    'https://www.twitch.tv/maximilian_dood', 'maximilian_dood', true,
    'Evidence: youtube.com/watch?v=nLZMRH-6r9I (returning coverage); youtube.com/watch?v=oDQz6SVsvZc (patch).'),
  ('WolfheartFPS', 'x',
    'Wolfheart', 4,
    'MMO/ARPG commentary, patch-cycle reflections',
    'en', null,
    'https://x.com/WolfheartFPS', 'WolfheartFPS', true,
    'Evidence: x.com/WolfheartFPS/status/2042632127607443675. (X ingestion stub — keep inactive at runtime until X route is built.)'),
  ('SynthPotato', 'x',
    'SynthPotato', 4,
    'Patch cadence + live-service commentary',
    'en', null,
    'https://x.com/SynthPotato', 'SynthPotato', true,
    'Evidence: x.com/SynthPotato/status/2045546078859051237.'),

  -- Tier 5 — Korean community bridges
  ('gsbg', 'youtube',
    'G식백과 (Kim Seong-hoe)', 5,
    'Korean gaming critic, early launch-review of 붉은사막',
    'ko', 1600000,
    'https://www.youtube.com/@gsbg', null, false,
    'needs-manual-verify. Handle @gsbg. Resolve UC channel ID before activating. ~1.6M subs (public knowledge, not re-verified).'),
  ('kimdoland', 'youtube',
    '김도랜드 (Kimdo Land)', 5,
    'KR gameplay commentary',
    'ko', null,
    'https://www.youtube.com/channel/UC2_VPutZK0o_tG8ca_QrQRA',
    'UC2_VPutZK0o_tG8ca_QrQRA', true,
    'Evidence: youtube.com/watch?v=yq1nwt_ztlw. Channel ID verified.'),
  ('TODO-resolve-handle-gameheadline', 'youtube',
    '게임 헤드라인 (Game Headline)', 5,
    'KR-EN reception bridge (what Korean community is saying about CD)',
    'ko', null, null, null, false,
    'needs-manual-verify. Videos: youtube.com/watch?v=3o_oNtl3MJg, fyXaJIKdiX4, ecDouQRIDrc. Resolve channel handle before activating.'),

  -- Tier 6 — Official / semi-official
  ('CrimsonDesert', 'youtube',
    'Crimson Desert (official)', 6,
    'Official trailers, patch previews, dev videos',
    'en', null,
    'https://www.youtube.com/@CrimsonDesert', null, false,
    'Resolve UC channel ID (channels.list?forHandle=@CrimsonDesert) before activating.'),
  ('CrimsonDesert_', 'x',
    'Crimson Desert (official)', 6,
    'Official Pearl Abyss comms, patch teasers',
    'en', null,
    'https://x.com/CrimsonDesert_', 'CrimsonDesert_', false,
    'X ingestion not wired up. Keep inactive until we add an X / Nitter route.')
on conflict (handle, platform) do nothing;
