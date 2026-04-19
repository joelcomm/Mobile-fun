# Crimson Desert Hub

A daily intelligence hub for Crimson Desert players. Ingests content from curated creators and sources, runs it through Claude for relevance classification and synthesis, and publishes a daily digest, patch analysis, boss guides, and a personalized feed.

## What it does

- **Pulls** from YouTube channels, subreddits, Steam announcements, and RSS feeds on a schedule.
- **Classifies** each item for relevance with Claude Haiku.
- **Synthesizes** a daily digest, per-patch analysis (with Korean → English translation when needed), and per-boss guides with full creator attribution using Claude Sonnet.
- **Serves** a fast Next.js site with a homepage digest, patch pages, boss pages, and a logged-in dashboard filtered by user preferences.

## Stack

Next.js 14 App Router · TypeScript · Supabase (Postgres + auth) · Claude API · Vercel Cron · Tailwind + shadcn/ui.

## Setup

### 1. Install

```bash
cd crimson-desert-hub
npm install
```

### 2. Supabase

- Create a new Supabase project.
- In the SQL editor, run `supabase/migrations/0001_initial_schema.sql`.
- Copy the project URL, anon key, and service role key.

### 3. Environment

```bash
cp .env.local.example .env.local
```

Fill in:

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `YOUTUBE_API_KEY` (Google Cloud Console → YouTube Data API v3)
- `REDDIT_CLIENT_ID`, `REDDIT_CLIENT_SECRET`, `REDDIT_USER_AGENT` (script-type app at reddit.com/prefs/apps)
- `STEAM_APPID` (Crimson Desert's Steam AppID once verified) and `STEAM_API_KEY`
- `OPENAI_API_KEY` (only for Whisper transcription if you add it)
- `CRON_SECRET` — any random string; protects cron endpoints
- `NEXT_PUBLIC_SITE_URL` — e.g. `http://localhost:3000` locally

### 4. Seed the curated lists

The curation is the product moat. Do it by hand.

1. Open `lib/lists/creators.ts` and add verified creators (see the tier guide in the file).
2. Open `lib/lists/sources.ts` and add verified subreddits, RSS feeds, and official channels.
3. Open `lib/lists/bosses.ts` and add bosses once you can verify them.

Then insert the seeds into Supabase. Simplest path: write a one-off script that reads the arrays and upserts into `creators`, `sources`, and `bosses`. Or paste into the Supabase SQL editor. Example for creators:

```sql
insert into creators (handle, platform, display_name, tier, specialty, language, external_id)
values
  ('example_handle', 'youtube', 'Example Creator', 1, 'Sword build theorycraft', 'en', 'UCxxxxxxxx')
on conflict (handle, platform) do nothing;
```

## Running locally

```bash
npm run dev
```

Open http://localhost:3000.

### Trigger ingestion manually

Every cron route is a `GET` guarded by `CRON_SECRET`:

```bash
curl -H "Authorization: Bearer $CRON_SECRET" \
  http://localhost:3000/api/cron/ingest-reddit
```

Other routes:

- `/api/cron/ingest-youtube`
- `/api/cron/ingest-rss`
- `/api/cron/ingest-steam`
- `/api/cron/process-patch-analysis`
- `/api/cron/process-daily-digest`

### Generate the daily digest manually

```bash
curl -H "Authorization: Bearer $CRON_SECRET" \
  http://localhost:3000/api/cron/process-daily-digest
```

Then refresh the homepage.

## Deployment

1. Push to GitHub.
2. Import the project in Vercel; set every env var in the project dashboard.
3. `vercel.json` already declares the cron schedule; Vercel picks it up on deploy.
4. Verify cron runs in the Vercel logs and that `daily_digests` gets a row.

## Known limitations

- **X API** is not wired up. The prompt listed it as optional; wait until you know you need it.
- **Whisper transcription** is stubbed — the ingestion jobs store video descriptions today. Wire up OpenAI Whisper in `lib/ingestion/youtube.ts` when you're ready to pay for transcription on Tier 1 creators.
- **Korean translation** accuracy depends on Claude's performance on game-specific terminology. The translation prompt flags nuance, but spot-check Korean dev communication before publishing.
- **Creator permissions.** You're aggregating creator content. Credit and link back every time. If a creator asks you to stop featuring them, stop. Don't republish full content — only titles, snippets, and attributed synthesis.

## Editorial rules (do not skip)

- Attribution on every synthesized claim.
- No fabricated data. Empty states beat invented data.
- Spoiler discipline: anything past the first region needs a warning.
- Voice: knowledgeable player, not press release.
