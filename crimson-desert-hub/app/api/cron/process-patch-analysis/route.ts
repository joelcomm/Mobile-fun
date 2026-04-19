import { NextResponse } from "next/server";
import { analyzePatch } from "@/lib/processing/patch-analysis";
import { createServiceClient } from "@/lib/supabase/server";
import { assertCronAuth } from "@/lib/utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const VERSION_RE = /(?:v(?:ersion)?\s*)?(\d+\.\d+(?:\.\d+)?)/i;

export async function GET(req: Request) {
  try {
    assertCronAuth(req);
  } catch (e) {
    const err = e as Error & { status?: number };
    return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
  }

  const supabase = createServiceClient();

  const since = new Date(Date.now() - 24 * 3600 * 1000).toISOString();

  const { data: patches, error } = await supabase
    .from("ingested_content")
    .select("id,title,url,content,language,published_at,source_type,category")
    .eq("category", "patch")
    .gte("published_at", since)
    .order("published_at", { ascending: false })
    .limit(10);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const processed: { version: string; slug: string }[] = [];

  for (const item of patches ?? []) {
    if (!item.content) continue;
    const match = item.title?.match(VERSION_RE) ?? item.content.match(VERSION_RE);
    const version = match?.[1] ?? item.title ?? "unknown";

    const { data: existing } = await supabase
      .from("patches")
      .select("id")
      .eq("version", version)
      .maybeSingle();
    if (existing) continue;

    const language: "en" | "ko" = item.language === "ko" ? "ko" : "en";

    try {
      const { slug } = await analyzePatch({
        version,
        rawNotes: item.content,
        language,
        releasedAt: new Date(item.published_at ?? Date.now()),
      });
      processed.push({ version, slug });
    } catch (e) {
      console.error("patch analysis failed:", (e as Error).message);
    }
  }

  return NextResponse.json({ ok: true, processed });
}
