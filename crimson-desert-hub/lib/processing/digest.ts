import { askJSON } from "@/lib/anthropic/client";
import { DAILY_DIGEST_PROMPT } from "@/lib/anthropic/prompts";
import { createServiceClient } from "@/lib/supabase/server";
import type {
  CreatorHighlight,
  IngestedContent,
  MetaShift,
  TopStory,
} from "@/lib/supabase/types";

export interface DigestPayload {
  headline: string;
  body: string;
  top_stories: TopStory[];
  meta_shifts: MetaShift[];
  creator_highlights: CreatorHighlight[];
}

export async function buildDailyDigest(date = new Date()): Promise<DigestPayload> {
  const supabase = createServiceClient();
  const since = new Date(date.getTime() - 24 * 3600 * 1000).toISOString();

  const { data: items, error } = await supabase
    .from("ingested_content")
    .select(
      "id,source_type,title,url,published_at,content,transcript,language,relevance_score,category,creator_id"
    )
    .gte("published_at", since)
    .gte("relevance_score", 6)
    .order("relevance_score", { ascending: false })
    .limit(120);

  if (error) throw error;

  const compact = (items as IngestedContent[]).map((i) => ({
    title: i.title,
    url: i.url,
    source: i.source_type,
    category: i.category,
    score: i.relevance_score,
    lang: i.language,
    published_at: i.published_at,
    snippet: (i.content ?? i.transcript ?? "").slice(0, 600),
  }));

  const user = `Content from the last 24 hours (${compact.length} items):\n\n${JSON.stringify(
    compact,
    null,
    2
  )}`;

  const digest = await askJSON<DigestPayload>({
    system: DAILY_DIGEST_PROMPT,
    user,
    model: "sonnet",
    maxTokens: 4096,
  });

  const digestDate = date.toISOString().slice(0, 10);
  const { error: upsertErr } = await supabase.from("daily_digests").upsert(
    {
      digest_date: digestDate,
      headline: digest.headline,
      body: digest.body,
      top_stories: digest.top_stories,
      meta_shifts: digest.meta_shifts,
      creator_highlights: digest.creator_highlights,
      generated_at: new Date().toISOString(),
    },
    { onConflict: "digest_date" }
  );
  if (upsertErr) throw upsertErr;

  if (items && items.length > 0) {
    await supabase
      .from("ingested_content")
      .update({ processed: true })
      .in(
        "id",
        items.map((i) => i.id)
      );
  }

  return digest;
}
