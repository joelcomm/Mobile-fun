import { NextResponse } from "next/server";
import { fetchSteamNews, fetchPlayerCount } from "@/lib/ingestion/steam";
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

  let news: Awaited<ReturnType<typeof fetchSteamNews>> = [];
  let players: Awaited<ReturnType<typeof fetchPlayerCount>> | null = null;
  try {
    news = await fetchSteamNews(20);
  } catch (e) {
    console.error("steam news failed:", (e as Error).message);
  }
  try {
    players = await fetchPlayerCount();
  } catch (e) {
    console.error("steam players failed:", (e as Error).message);
  }

  let newItems = 0;
  for (const item of news) {
    const externalId = `steam:${item.gid}`;
    const { data: existing } = await supabase
      .from("ingested_content")
      .select("id")
      .eq("source_type", "steam")
      .eq("external_id", externalId)
      .maybeSingle();
    if (existing) continue;

    let relevance = 0;
    let category: string | null = null;
    try {
      const result = await classifyRelevance({
        title: item.title,
        url: item.url,
        snippet: item.contents ?? "",
      });
      relevance = result.relevance_score;
      category = result.category;
    } catch (e) {
      console.error("classify failed:", (e as Error).message);
    }

    const { error: insErr } = await supabase.from("ingested_content").insert({
      source_type: "steam",
      external_id: externalId,
      title: item.title,
      url: item.url,
      published_at: new Date(item.date * 1000).toISOString(),
      content: item.contents,
      raw_metadata: { author: item.author, feedname: item.feedname },
      relevance_score: relevance,
      category,
    });
    if (!insErr) newItems += 1;
  }

  return NextResponse.json({
    ok: true,
    news_ingested: newItems,
    player_count: players,
  });
}
