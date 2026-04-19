import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { DailyDigest } from "@/lib/supabase/types";

export function DigestCard({ digest }: { digest: DailyDigest }) {
  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-border bg-card p-8">
        <Badge variant="primary" className="mb-3">
          {new Date(digest.digest_date).toLocaleDateString(undefined, {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </Badge>
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {digest.headline ?? "No digest yet."}
        </h1>
        {digest.body && (
          <p className="mt-4 whitespace-pre-line text-muted-foreground">
            {digest.body}
          </p>
        )}
      </section>

      {digest.top_stories && digest.top_stories.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">Top stories</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {digest.top_stories.map((story, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{story.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{story.summary}</p>
                  {story.sources?.length > 0 && (
                    <ul className="space-y-1 text-xs">
                      {story.sources.map((s, j) => (
                        <li key={j}>
                          <Link
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {digest.meta_shifts && digest.meta_shifts.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">Meta shifts</h2>
          <div className="space-y-3">
            {digest.meta_shifts.map((m, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{m.change}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-foreground">Impact:</span>{" "}
                    <span className="text-muted-foreground">{m.impact}</span>
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Evidence:</span>{" "}
                    <span className="text-muted-foreground">{m.evidence}</span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {digest.creator_highlights && digest.creator_highlights.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-semibold">Creator highlights</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {digest.creator_highlights.map((h, i) => (
              <Card key={i}>
                <CardHeader>
                  <Badge variant="outline" className="mb-1 w-fit">
                    {h.creator}
                  </Badge>
                  <CardTitle className="text-base">
                    <Link
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {h.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{h.why_watch}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
