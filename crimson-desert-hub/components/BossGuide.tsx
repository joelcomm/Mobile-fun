import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Boss } from "@/lib/supabase/types";

interface Phase {
  phase: string;
  mechanics: string[];
  how_to_handle: string;
  sources: { creator: string; url: string }[];
}

export function BossGuideView({ boss }: { boss: Boss }) {
  const phases = (boss.strategies as Phase[] | null) ?? [];
  return (
    <article className="space-y-8">
      <header className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {boss.region && <Badge variant="outline">{boss.region}</Badge>}
          {boss.difficulty && <Badge variant="primary">{boss.difficulty}</Badge>}
        </div>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {boss.name}
        </h1>
        {boss.description && (
          <p className="text-muted-foreground">{boss.description}</p>
        )}
      </header>

      {phases.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">Phases</h2>
          <div className="space-y-4">
            {phases.map((p, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{p.phase}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {p.mechanics?.length > 0 && (
                    <div>
                      <div className="font-medium">Mechanics</div>
                      <ul className="mt-1 list-inside list-disc text-muted-foreground">
                        {p.mechanics.map((m, j) => (
                          <li key={j}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <p className="text-muted-foreground">{p.how_to_handle}</p>
                  {p.sources?.length > 0 && (
                    <div className="text-xs text-muted-foreground">
                      Sources:{" "}
                      {p.sources.map((s, j) => (
                        <span key={j}>
                          <Link
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {s.creator}
                          </Link>
                          {j < p.sources.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {boss.weaknesses && boss.weaknesses.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-semibold">Weaknesses</h2>
          <ul className="list-inside list-disc text-sm text-muted-foreground">
            {boss.weaknesses.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
