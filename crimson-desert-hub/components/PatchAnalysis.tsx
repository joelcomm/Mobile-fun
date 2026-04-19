"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PatchAnalysis as Analysis } from "@/lib/processing/patch-analysis";

export function PatchAnalysisView({
  version,
  releasedAt,
  analysis,
  rawNotes,
}: {
  version: string;
  releasedAt: string;
  analysis: Analysis;
  rawNotes: string | null;
}) {
  const [showRaw, setShowRaw] = useState(false);

  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <Badge variant="primary">Patch {version}</Badge>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Patch {version} analysis
        </h1>
        <p className="text-sm text-muted-foreground">
          Released {new Date(releasedAt).toLocaleString()}
        </p>
      </header>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Summary</h2>
        <p className="text-muted-foreground">{analysis.summary}</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Changes</h2>
        <div className="space-y-3">
          {analysis.changes.map((c, i) => (
            <Card key={i}>
              <CardHeader>
                <Badge variant="outline" className="w-fit">{c.category}</Badge>
                <CardTitle className="text-base">{c.after}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Before:</span>{" "}
                  <span className="text-muted-foreground">{c.before}</span>
                </p>
                <p>
                  <span className="font-medium">Who cares:</span>{" "}
                  <span className="text-muted-foreground">{c.who_cares}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Impact</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ImpactList title="Stronger" items={analysis.impact.stronger} />
          <ImpactList title="Weaker" items={analysis.impact.weaker} />
          <ImpactList title="Bosses affected" items={analysis.impact.bosses} />
          <ImpactList title="Playstyles" items={analysis.impact.playstyles} />
        </div>
      </section>

      {analysis.sleeper_changes?.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">Sleeper changes</h2>
          <ul className="space-y-2 text-sm">
            {analysis.sleeper_changes.map((s, i) => (
              <li key={i}>
                <span className="font-medium">{s.item}:</span>{" "}
                <span className="text-muted-foreground">{s.why_it_matters}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {analysis.what_to_watch?.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">What to watch</h2>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            {analysis.what_to_watch.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      {rawNotes && (
        <section>
          <Button variant="outline" onClick={() => setShowRaw((s) => !s)}>
            {showRaw ? "Hide raw notes" : "Show raw notes"}
          </Button>
          {showRaw && (
            <pre className="mt-4 whitespace-pre-wrap rounded-md border border-border bg-muted p-4 text-xs text-muted-foreground">
              {rawNotes}
            </pre>
          )}
        </section>
      )}
    </article>
  );
}

function ImpactList({ title, items }: { title: string; items: string[] }) {
  if (!items?.length) return null;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
