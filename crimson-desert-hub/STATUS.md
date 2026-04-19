# Status

What's done, what's partial, and what you need to do by hand before the product is live.

## Done

- Next.js 14 App Router project scaffold with TypeScript, Tailwind, shadcn-style primitives.
- Supabase migration with tables for creators, sources, bosses, patches, ingested_content, daily_digests, signals, user_preferences.
- Supabase client (browser + server + service-role).
- Anthropic client with JSON helper and model aliases.
- Core prompts: daily digest, patch analysis, relevance classifier, boss guide synthesis, Korean translation.
- Ingestion: YouTube Data API v3, Reddit OAuth, generic RSS, Steam News + player count, Pearl-Abyss notice-board page-diff watcher.
- Relevance classifier wired into every ingestion route (Haiku).
- Processing: daily digest, patch analysis (with Korean translation pass), boss guide synthesis, Korean translation.
- Cron routes for all ingestion + processing jobs, guarded by `CRON_SECRET`.
- Patch-alert webhook and user-preferences API routes.
- Pages: homepage (digest + high-severity signals), patches list + detail, bosses list + detail, builds placeholder, creators directory, news detail.
- Auth pages: login, signup.
- Dashboard with preference-filtered feed.
- `vercel.json` cron schedule.
- README with setup, manual ingestion/digest commands, deployment, and editorial rules.
- Seed SQL `supabase/migrations/0002_seed_lists.sql` that loads the subreddit, the Pearl Abyss EN + KR notice boards, and the verified creators (streamers and one KR YouTube channel) into the database in one paste.
- `lib/lists/creators.ts` and `lib/lists/sources.ts` populated from real research: Steam AppID 3321460, r/CrimsonDesert, Pearl Abyss notice boards, Asmongold (zackrawrr), CohhCarnage, Maximilian_DOOD, WolfheartFPS, SynthPotato, 김도랜드 (channel ID verified). Entries that need manual handle resolution are seeded `active=false` with `needs-manual-verify` notes pointing at the evidence videos.

## Partial

- **Builds pages**: listing and detail routes exist but intentionally render empty states. Build pipelines (build aggregation + tier-list synthesis) aren't implemented yet; I'm not inventing them. Add after you've watched a sample of builds content and defined the schema.
- **Dashboard preferences form**: `/dashboard/preferences` is linked but not implemented. Add a simple form that `PUT`s to `/api/user/preferences`.
- **YouTube transcription**: ingestion stores titles and descriptions only. The Whisper call is not wired up (OpenAI SDK is in `package.json` so you can drop it in). Wire it when you're willing to pay per-video transcription on Tier 1 creators.
- **Supabase seeding script**: README shows SQL inserts. A `scripts/seed.ts` that reads `lib/lists/*` and upserts would be a nice add.
- **Auth middleware / route protection**: `/dashboard` redirects unauthenticated users, but there's no middleware refreshing the session cookie. Add `middleware.ts` using `@supabase/ssr` for smoother UX.
- **X ingestion**: deliberately omitted per the build prompt. Add when you know you need it.
- **Signal triggers**: `lib/lists/signals.ts` defines the triggers, but the code that evaluates them (player count deltas, subreddit velocity) isn't implemented. It's a cron job of its own.
- **Creator seeding**: `lib/lists/creators.ts` is empty by design. Do not let any AI populate it; populate from real research.

## What you must do by hand before shipping

1. **Run both migrations** in your Supabase project in order: `0001_initial_schema.sql` then `0002_seed_lists.sql`. The second one loads the curated lists in a single paste.
2. **Collect API keys** for Supabase, Anthropic, YouTube (Data API v3), Reddit (script app).
3. **Set `STEAM_APPID=3321460`** and `STEAM_API_KEY` (only needed for player-count endpoint; news endpoint is keyless).
4. **Resolve the `needs-manual-verify` creators**. Each seeded entry with `active=false` has a note pointing at the evidence video. Open it, copy the channel handle and UC channel ID from the channel page URL, then:
   - Update `lib/lists/creators.ts` so the change is in version control.
   - In Supabase, `update creators set external_id = 'UC...', active = true where handle = '...';`
5. **Populate `lib/lists/bosses.ts`** once you can verify names, regions, and difficulty tiers against in-game or official sources. (Intentionally still empty — boss-guide synthesis depends on it.)
6. **Run one ingestion manually**, then one digest, then verify the homepage. Start with Reddit (easiest) and the Pearl Abyss page watcher:
   ```bash
   curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/ingest-reddit
   curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/ingest-pages
   curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/process-daily-digest
   ```
7. **Iterate on the digest prompt** in `lib/anthropic/prompts.ts` until the output reads like a player wrote it, not a press release. Plan on 3-5 revisions.
8. **Deploy to Vercel** with all env vars set; Vercel cron takes over.

## Things I did not invent

- **Boss names, regions, phases, mechanics** — bosses.ts is still empty.
- **YouTube channel IDs for creators that weren't verifiable in-session** — seeded as `active=false` with `needs-manual-verify` so the ingestion cron skips them until resolved.
- **Press-site RSS URLs** — PC Gamer, Kotaku, TheGamer, VGC, Wccftech all have active CD coverage, but I couldn't verify their Crimson-Desert-tag-specific RSS endpoints. Either verify per-host RSS and add them with `source_type='rss'`, or extend `lib/ingestion/pages.ts:extractorFor` with per-host selectors and add them with `source_type='official'`.

What I did seed with confidence:

- **Steam AppID 3321460** (verified via store.steampowered.com/app/3321460).
- **r/CrimsonDesert** (existence confirmed; subscriber count not re-verified).
- **Pearl Abyss notice boards** at `crimsondesert.pearlabyss.com/{en-US,ko-KR}/News/Notice`.
- **Twitch streamers** with recent CD content: zackrawrr, cohhcarnage, maximilian_dood.
- **X accounts**: WolfheartFPS, SynthPotato (and official @CrimsonDesert_) — stubbed, since X ingestion isn't wired up yet.
- **Korean YouTube**: 김도랜드 (channel ID UC2_VPutZK0o_tG8ca_QrQRA verified). G식백과 and 게임 헤드라인 need handle resolution.
