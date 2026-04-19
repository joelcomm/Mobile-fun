import { NextResponse } from "next/server";
import { fetchSubredditNew, type RedditPost } from "@/lib/ingestion/reddit";
import { classifyRelevance } from "@/lib/processing/classify";
import { createServiceClient } from "@/lib/supabase/server";
import { assertCronAuth } from "@/lib/utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(req: Request) {
  try {
    assertCronAuth(req);
  } catch (e) {
    const err = e as Error & { status?: number };
    return NextResponse.json(
      { error: err.message },
      { status: err.status ?? 500 }
    );
  }

  const supabase = createServiceClient();

  const { data: sources, error: srcErr } = await supabase
    .from("sources")
    .select("id,name,url,language,priority")
    .eq("source_type", "reddit")
    .eq("active", true);
  if (srcErr) return NextResponse.json({ error: srcErr.message }, { status: 500 });

  const results: { source: string; ingested: number; classified: number }[] = [];

  for (const source of sources ?? []) {
    const match = source.url.match(/reddit\.com\/r\/([^/]+)/i);
    if (!match) continue;
    const sub = match[1];

    let posts: RedditPost[] = [];
    try {
      posts = await fetchSubredditNew(sub, 50);
    } catch (e) {
      console.error(`reddit fetch failed for ${sub}:`, (e as Error).message);
      continue;
    }

    let ingested = 0;
    let classified = 0;

    for (const post of posts) {
      const externalId = `reddit:${post.id}`;
      const { data: existing } = await supabase
        .from("ingested_content")
        .select("id")
        .eq("source_type", "reddit")
        .eq("external_id", externalId)
        .maybeSingle();
      if (existing) continue;

      let relevance = 0;
      let category: string | null = null;
      try {
        const result = await classifyRelevance({
          title: post.title,
          url: post.permalink,
          snippet: post.selftext || post.title,
        });
        relevance = result.relevance_score;
        category = result.category;
        classified += 1;
      } catch (e) {
        console.error("classify failed:", (e as Error).message);
      }

      const { error: insErr } = await supabase.from("ingested_content").insert({
        source_type: "reddit",
        external_id: externalId,
        source_id: source.id,
        title: post.title,
        url: post.permalink,
        published_at: new Date(post.created_utc * 1000).toISOString(),
        content: post.selftext,
        language: source.language ?? "en",
        raw_metadata: {
          subreddit: post.subreddit,
          author: post.author,
          score: post.score,
          num_comments: post.num_comments,
          flair: post.flair,
        },
        relevance_score: relevance,
        category,
      });
      if (!insErr) ingested += 1;
    }

    await supabase
      .from("sources")
      .update({ last_fetched_at: new Date().toISOString() })
      .eq("id", source.id);

    results.push({ source: source.name, ingested, classified });
  }

  return NextResponse.json({ ok: true, results });
}
