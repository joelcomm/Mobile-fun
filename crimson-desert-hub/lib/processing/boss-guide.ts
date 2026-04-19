import { askJSON } from "@/lib/anthropic/client";
import { BOSS_GUIDE_SYNTHESIS_PROMPT } from "@/lib/anthropic/prompts";
import { createServiceClient } from "@/lib/supabase/server";

export interface BossGuide {
  overview: string;
  phases: {
    phase: string;
    mechanics: string[];
    how_to_handle: string;
    sources: { creator: string; url: string }[];
  }[];
  recommended_builds: {
    name: string;
    why: string;
    sources: { creator: string; url: string }[];
  }[];
  common_mistakes: string[];
  disagreements: {
    topic: string;
    positions: { creator: string; claim: string; url: string }[];
  }[];
}

export async function synthesizeBossGuide(bossSlug: string): Promise<BossGuide> {
  const supabase = createServiceClient();

  const { data: boss, error: bossErr } = await supabase
    .from("bosses")
    .select("*")
    .eq("slug", bossSlug)
    .single();
  if (bossErr) throw bossErr;

  const { data: content } = await supabase
    .from("ingested_content")
    .select(
      "title,url,transcript,content,category,creator_id,published_at,creators(display_name,handle)"
    )
    .or(`title.ilike.%${boss.name}%,content.ilike.%${boss.name}%`)
    .gte("relevance_score", 5)
    .order("published_at", { ascending: false })
    .limit(30);

  const user = `BOSS: ${boss.name}
Region: ${boss.region ?? "unknown"}
Difficulty: ${boss.difficulty ?? "unknown"}

CREATOR CONTENT:
${JSON.stringify(content ?? [], null, 2)}`;

  const guide = await askJSON<BossGuide>({
    system: BOSS_GUIDE_SYNTHESIS_PROMPT,
    user,
    model: "sonnet",
    maxTokens: 4096,
  });

  await supabase
    .from("bosses")
    .update({
      description: guide.overview,
      strategies: guide.phases,
      last_updated: new Date().toISOString(),
    })
    .eq("slug", bossSlug);

  return guide;
}
