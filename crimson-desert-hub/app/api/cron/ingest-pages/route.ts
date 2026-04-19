import { NextResponse } from "next/server";
import { fetchPageSource } from "@/lib/ingestion/pages";
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
    .select("id,name,url,language,priority")
    .eq("source_type", "official")
    .eq("active", true)
    .order("priority", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const results: { source: string; found: number; new: number }[] = [];

  for (const source of sources ?? []) {
    let items: Awaited<ReturnType<typeof fetchPageSource>> = [];
    try {
      items = await fetchPageSource(source.url);
    } catch (e) {
      console.error(
        `page ingestion failed for ${source.name}:`,
        (e as Error).message
      );
      continue;
    }

    let newCount = 0;
    for (const { link, detail } of items) {
      const { data: existing } = await supabase
        .from("ingested_content")
        .select("id")
        .eq("source_type", "official")
        .eq("external_id", link.externalId)
        .maybeSingle();
      if (existing) continue;

      const snippet = (detail?.content ?? link.title).slice(0, 800);
      let relevance = 0;
      let category: string | null = null;
      try {
        const result = await classifyRelevance({
          title: detail?.title ?? link.title,
          url: link.url,
          snippet,
        });
        relevance = result.relevance_score;
        category = result.category;
      } catch (e) {
        console.error("classify failed:", (e as Error).message);
      }

      const { error: insErr } = await supabase.from("ingested_content").insert({
        source_type: "official",
        external_id: link.externalId,
        source_id: source.id,
        title: detail?.title ?? link.title,
        url: link.url,
        published_at: detail?.publishedAt ?? new Date().toISOString(),
        content: detail?.content ?? null,
        language: source.language ?? "en",
        raw_metadata: { board_no: link.externalId },
        relevance_score: relevance,
        category,
      });
      if (!insErr) newCount += 1;
    }

    await supabase
      .from("sources")
      .update({ last_fetched_at: new Date().toISOString() })
      .eq("id", source.id);

    results.push({ source: source.name, found: items.length, new: newCount });
  }

  return NextResponse.json({ ok: true, results });
}
