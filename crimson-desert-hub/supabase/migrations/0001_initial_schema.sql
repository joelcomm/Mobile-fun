-- Curated lists
create table creators (
  id uuid primary key default gen_random_uuid(),
  handle text not null,
  platform text not null check (platform in ('youtube', 'twitch', 'x', 'tiktok', 'reddit', 'discord')),
  display_name text,
  tier int not null check (tier between 1 and 6),
  specialty text,
  language text default 'en',
  audience_size int,
  active boolean default true,
  feed_url text,
  external_id text,
  notes text,
  created_at timestamptz default now(),
  unique(handle, platform)
);

create table sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  source_type text check (source_type in ('rss', 'reddit', 'official', 'steam', 'discord')),
  language text default 'en',
  priority int default 5,
  active boolean default true,
  last_fetched_at timestamptz,
  created_at timestamptz default now()
);

-- Game entities
create table bosses (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  region text,
  difficulty text,
  description text,
  strategies jsonb default '[]'::jsonb,
  rewards jsonb default '[]'::jsonb,
  weaknesses text[],
  last_updated timestamptz default now()
);

create table patches (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  version text not null,
  released_at timestamptz not null,
  raw_notes text,
  ai_summary text,
  ai_impact_analysis text,
  categories text[],
  created_at timestamptz default now()
);

-- Ingested content (raw)
create table ingested_content (
  id uuid primary key default gen_random_uuid(),
  source_type text not null,
  external_id text not null,
  creator_id uuid references creators(id),
  source_id uuid references sources(id),
  title text,
  url text,
  published_at timestamptz,
  content text,
  transcript text,
  language text default 'en',
  raw_metadata jsonb,
  processed boolean default false,
  relevance_score float,
  category text,
  ingested_at timestamptz default now(),
  unique(source_type, external_id)
);

-- Processed outputs
create table daily_digests (
  id uuid primary key default gen_random_uuid(),
  digest_date date unique not null,
  headline text,
  body text,
  top_stories jsonb,
  meta_shifts jsonb,
  creator_highlights jsonb,
  generated_at timestamptz default now()
);

create table signals (
  id uuid primary key default gen_random_uuid(),
  signal_type text not null,
  severity text check (severity in ('low', 'medium', 'high', 'critical')),
  title text not null,
  description text,
  source_content_ids uuid[],
  triggered_at timestamptz default now(),
  acknowledged boolean default false
);

-- User personalization
create table user_preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  preferred_classes text[],
  playstyle text[],
  topics text[],
  spoiler_tolerance text default 'main-story' check (spoiler_tolerance in ('none', 'main-story', 'all')),
  digest_frequency text default 'daily',
  updated_at timestamptz default now(),
  unique(user_id)
);

-- Indexes
create index idx_ingested_content_processed on ingested_content(processed, published_at desc);
create index idx_ingested_content_creator on ingested_content(creator_id);
create index idx_ingested_content_category on ingested_content(category, published_at desc);
create index idx_signals_unack on signals(acknowledged, triggered_at desc);
create index idx_patches_released on patches(released_at desc);

-- RLS
alter table user_preferences enable row level security;
create policy "users manage own preferences" on user_preferences
  for all using (auth.uid() = user_id);
