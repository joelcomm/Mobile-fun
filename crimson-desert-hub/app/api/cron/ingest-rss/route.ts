import { NextResponse } from "next/server";
import { fetchFeed } from "@/lib/ingestion/rss";
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
    return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
  }

  const supabase = createServiceClient();

  const { data: sources, error } = await supabase
    .from("sources")
    .select("id,name,url,language")
    .in("source_type", ["rss", "official"])
    .eq("active", true);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const results: { source: string; new_items: number }[] = [];

  for (const source of sources ?? []) {
    let items: Awaited<ReturnType<typeof fetchFeed>> = [];
    try {
      items = await fetchFeed(source.url);
    } catch (e) {
      console.error(`rss fetch failed for ${source.name}:`, (e as Error).message);
      continue;
    }

    let newItems = 0;
    for (const item of items) {
      const externalId = `rss:${source.id}:${item.id}`;
      const { data: existing } = await supabase
        .from("ingested_content")
        .select("id")
        .eq("source_type", "rss")
        .eq("external_id", externalId)
        .maybeSingle();
      if (existing) continue;

      let relevance = 0;
      let category: string | null = null;
      try {
        const result = await classifyRelevance({
          title: item.title,
          url: item.link,
          snippet: item.contentSnippet ?? item.content ?? "",
        });
        relevance = result.relevance_score;
        category = result.category;
      } catch (e) {
        console.error("classify failed:", (e as Error).message);
      }

      const { error: insErr } = await supabase.from("ingested_content").insert({
        source_type: "rss",
        external_id: externalId,
        source_id: source.id,
        title: item.title,
        url: item.link,
        published_at: item.isoDate ?? new Date().toISOString(),
        content: item.content ?? item.contentSnippet ?? "",
        language: source.language ?? "en",
        raw_metadata: null,
        relevance_score: relevance,
        category,
      });
      if (!insErr) newItems += 1;
    }

    await supabase
      .from("sources")
      .update({ last_fetched_at: new Date().toISOString() })
      .eq("id", source.id);

    results.push({ source: source.name, new_items: newItems });
  }

  return NextResponse.json({ ok: true, results });
}
