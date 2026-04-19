# Status

What's done, what's partial, and what you need to do by hand before the product is live.

## Done

- Next.js 14 App Router project scaffold with TypeScript, Tailwind, shadcn-style primitives.
- Supabase migration with tables for creators, sources, bosses, patches, ingested_content, daily_digests, signals, user_preferences.
- Supabase client (browser + server + service-role).
- Anthropic client with JSON helper and model aliases.
- Core prompts: daily digest, patch analysis, relevance classifier, boss guide synthesis, Korean translation.
- Ingestion: YouTube Data API v3, Reddit OAuth, generic RSS, Steam News + player count.
- Relevance classifier wired into every ingestion route (Haiku).
- Processing: daily digest, patch analysis (with Korean translation pass), boss guide synthesis, Korean translation.
- Cron routes for all ingestion + processing jobs, guarded by `CRON_SECRET`.
- Patch-alert webhook and user-preferences API routes.
- Pages: homepage (digest + high-severity signals), patches list + detail, bosses list + detail, builds placeholder, creators directory, news detail.
- Auth pages: login, signup.
- Dashboard with preference-filtered feed.
- `vercel.json` cron schedule.
- README with setup, manual ingestion/digest commands, deployment, and editorial rules.

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

1. **Populate `lib/lists/creators.ts`** with real, verified Crimson Desert creators. This is the product moat.
2. **Populate `lib/lists/sources.ts`** with the real subreddit name, Pearl Abyss RSS, and any Korean patch notes page you want covered.
3. **Populate `lib/lists/bosses.ts`** once you can verify names, regions, and difficulty tiers against in-game or official sources.
4. **Run the migration** in your Supabase project (`supabase/migrations/0001_initial_schema.sql`).
5. **Seed the database** by inserting the list contents. See README for SQL example.
6. **Collect API keys** for Supabase, Anthropic, YouTube, Reddit, Steam.
7. **Set `STEAM_APPID`** once you've confirmed the Crimson Desert Steam AppID.
8. **Run one ingestion manually**, then one digest, then verify the homepage.
9. **Deploy to Vercel** with all env vars set; Vercel cron takes over.

## Things I explicitly did not invent

- Creator names, handles, or channel IDs.
- Boss names, regions, phases, mechanics.
- Source URLs (subreddit names, RSS feeds).
- The Steam AppID.
- Tier placements for creators.

Every surface that would normally show fabricated data currently renders an honest empty state.
