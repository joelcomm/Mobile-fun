import { notFound } from "next/navigation";
import { PatchAnalysisView } from "@/components/PatchAnalysis";
import { getPatchBySlug } from "@/lib/data/queries";
import type { PatchAnalysis } from "@/lib/processing/patch-analysis";

export const revalidate = 300;

export default async function PatchDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const patch = await getPatchBySlug(params.slug);
  if (!patch) notFound();

  let analysis: PatchAnalysis | null = null;
  if (patch.ai_impact_analysis) {
    try {
      analysis = JSON.parse(patch.ai_impact_analysis) as PatchAnalysis;
    } catch {
      analysis = null;
    }
  }

  if (!analysis) {
    return (
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Patch {patch.version}
        </h1>
        <p className="text-sm text-muted-foreground">
          Analysis is still generating. Check back shortly.
        </p>
      </div>
    );
  }

  return (
    <PatchAnalysisView
      version={patch.version}
      releasedAt={patch.released_at}
      analysis={analysis}
      rawNotes={patch.raw_notes}
    />
  );
}
