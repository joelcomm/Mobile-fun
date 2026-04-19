import { NextResponse } from "next/server";
import { fetchLatestForChannel } from "@/lib/ingestion/youtube";
import { classifyRelevance } from "@/lib/processing/classify";
import { createServiceClient } from "@/lib/supabase/server";
import { assertCronAuth } from "@/lib/utils";
import type { Creator } from "@/lib/supabase/types";

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

  const { data: creators, error } = await supabase
    .from("creators")
    .select("*")
    .eq("platform", "youtube")
    .eq("active", true);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const results: { creator: string; new_items: number }[] = [];

  for (const creator of (creators ?? []) as Creator[]) {
    if (!creator.external_id) continue;
    let videos: Awaited<ReturnType<typeof fetchLatestForChannel>> = [];
    try {
      videos = await fetchLatestForChannel(creator);
    } catch (e) {
      console.error(`youtube fetch failed for ${creator.handle}:`, (e as Error).message);
      continue;
    }

    let newItems = 0;
    for (const v of videos) {
      const externalId = `youtube:${v.videoId}`;
      const { data: existing } = await supabase
        .from("ingested_content")
        .select("id")
        .eq("source_type", "youtube")
        .eq("external_id", externalId)
        .maybeSingle();
      if (existing) continue;

      let relevance = 0;
      let category: string | null = null;
      try {
        const result = await classifyRelevance({
          title: v.title,
          url: v.url,
          snippet: v.description,
        });
        relevance = result.relevance_score;
        category = result.category;
      } catch (e) {
        console.error("classify failed:", (e as Error).message);
      }

      const { error: insErr } = await supabase.from("ingested_content").insert({
        source_type: "youtube",
        external_id: externalId,
        creator_id: creator.id,
        title: v.title,
        url: v.url,
        published_at: v.publishedAt,
        content: v.description,
        language: creator.language ?? "en",
        raw_metadata: { channelId: v.channelId, channelTitle: v.channelTitle },
        relevance_score: relevance,
        category,
      });
      if (!insErr) newItems += 1;
    }

    results.push({ creator: creator.handle, new_items: newItems });
  }

  return NextResponse.json({ ok: true, results });
}
