export type CreatorPlatform =
  | "youtube"
  | "twitch"
  | "x"
  | "tiktok"
  | "reddit"
  | "discord";

export type SourceType = "rss" | "reddit" | "official" | "steam" | "discord";

export type RelevanceCategory =
  | "patch"
  | "build"
  | "boss"
  | "lore"
  | "news"
  | "drama"
  | "creator-content"
  | "off-topic";

export interface Creator {
  id: string;
  handle: string;
  platform: CreatorPlatform;
  display_name: string | null;
  tier: number;
  specialty: string | null;
  language: string;
  audience_size: number | null;
  active: boolean;
  feed_url: string | null;
  external_id: string | null;
  notes: string | null;
  created_at: string;
}

export interface Source {
  id: string;
  name: string;
  url: string;
  source_type: SourceType;
  language: string;
  priority: number;
  active: boolean;
  last_fetched_at: string | null;
}

export interface IngestedContent {
  id: string;
  source_type: string;
  external_id: string;
  creator_id: string | null;
  source_id: string | null;
  title: string | null;
  url: string | null;
  published_at: string | null;
  content: string | null;
  transcript: string | null;
  language: string;
  raw_metadata: Record<string, unknown> | null;
  processed: boolean;
  relevance_score: number | null;
  category: RelevanceCategory | null;
  ingested_at: string;
}

export interface Patch {
  id: string;
  slug: string;
  version: string;
  released_at: string;
  raw_notes: string | null;
  ai_summary: string | null;
  ai_impact_analysis: string | null;
  categories: string[] | null;
  created_at: string;
}

export interface Boss {
  id: string;
  slug: string;
  name: string;
  region: string | null;
  difficulty: string | null;
  description: string | null;
  strategies: unknown;
  rewards: unknown;
  weaknesses: string[] | null;
  last_updated: string;
}

export interface DailyDigest {
  id: string;
  digest_date: string;
  headline: string | null;
  body: string | null;
  top_stories: TopStory[] | null;
  meta_shifts: MetaShift[] | null;
  creator_highlights: CreatorHighlight[] | null;
  generated_at: string;
}

export interface TopStory {
  title: string;
  summary: string;
  sources: { title: string; url: string }[];
}

export interface MetaShift {
  change: string;
  impact: string;
  evidence: string;
}

export interface CreatorHighlight {
  creator: string;
  title: string;
  url: string;
  why_watch: string;
}

export interface Signal {
  id: string;
  signal_type: string;
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string | null;
  source_content_ids: string[] | null;
  triggered_at: string;
  acknowledged: boolean;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  preferred_classes: string[] | null;
  playstyle: string[] | null;
  topics: string[] | null;
  spoiler_tolerance: "none" | "main-story" | "all";
  digest_frequency: string;
  updated_at: string;
}
