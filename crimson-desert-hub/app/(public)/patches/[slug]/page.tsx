import { notFound } from "next/navigation";
import { PatchAnalysisView } from "@/components/PatchAnalysis";
import { createClient } from "@/lib/supabase/server";
import type { PatchAnalysis } from "@/lib/processing/patch-analysis";
import type { Patch } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function PatchDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: patch } = await supabase
    .from("patches")
    .select("*")
    .eq("slug", params.slug)
    .maybeSingle();

  if (!patch) notFound();
  const typed = patch as Patch;

  let analysis: PatchAnalysis | null = null;
  if (typed.ai_impact_analysis) {
    try {
      analysis = JSON.parse(typed.ai_impact_analysis) as PatchAnalysis;
    } catch {
      analysis = null;
    }
  }

  if (!analysis) {
    return (
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Patch {typed.version}
        </h1>
        <p className="text-sm text-muted-foreground">
          Analysis is still generating. Check back shortly.
        </p>
      </div>
    );
  }

  return (
    <PatchAnalysisView
      version={typed.version}
      releasedAt={typed.released_at}
      analysis={analysis}
      rawNotes={typed.raw_notes}
    />
  );
}
