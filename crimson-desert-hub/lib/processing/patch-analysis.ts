import { askJSON } from "@/lib/anthropic/client";
import { PATCH_ANALYSIS_PROMPT } from "@/lib/anthropic/prompts";
import { createServiceClient } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";
import { translateKorean } from "./translation";

export interface PatchAnalysis {
  summary: string;
  changes: {
    category: string;
    before: string;
    after: string;
    who_cares: string;
  }[];
  impact: {
    stronger: string[];
    weaker: string[];
    bosses: string[];
    playstyles: string[];
  };
  sleeper_changes: { item: string; why_it_matters: string }[];
  what_to_watch: string[];
}

export async function analyzePatch(opts: {
  version: string;
  rawNotes: string;
  language: "en" | "ko";
  communityReactions?: string[];
  releasedAt: Date;
}) {
  let notes = opts.rawNotes;
  if (opts.language === "ko") {
    const translated = await translateKorean(opts.rawNotes);
    notes = `(Translated from Korean)\n${translated.translation}`;
  }

  const user = `Version: ${opts.version}
Released: ${opts.releasedAt.toISOString()}

RAW PATCH NOTES:
${notes}

EARLY COMMUNITY REACTIONS:
${(opts.communityReactions ?? []).map((r, i) => `(${i + 1}) ${r}`).join("\n") || "(none yet)"}`;

  const analysis = await askJSON<PatchAnalysis>({
    system: PATCH_ANALYSIS_PROMPT,
    user,
    model: "sonnet",
    maxTokens: 4096,
  });

  const supabase = createServiceClient();
  const slug = slugify(`${opts.version}-${opts.releasedAt.toISOString().slice(0, 10)}`);
  const categories = Array.from(new Set(analysis.changes.map((c) => c.category)));

  const { error } = await supabase.from("patches").upsert(
    {
      slug,
      version: opts.version,
      released_at: opts.releasedAt.toISOString(),
      raw_notes: opts.rawNotes,
      ai_summary: analysis.summary,
      ai_impact_analysis: JSON.stringify(analysis),
      categories,
    },
    { onConflict: "slug" }
  );
  if (error) throw error;

  await supabase.from("signals").insert({
    signal_type: "patch_released",
    severity: "high",
    title: `Patch ${opts.version} analysis ready`,
    description: analysis.summary,
  });

  return { slug, analysis };
}
