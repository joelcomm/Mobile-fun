import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Creator } from "@/lib/supabase/types";

const TIER_LABEL: Record<number, string> = {
  1: "Guide / theorycraft",
  2: "News / patch coverage",
  3: "Lore / story analysis",
  4: "Streamers / personalities",
  5: "Korean community bridge",
  6: "Official",
};

export function CreatorFeed({ creators }: { creators: Creator[] }) {
  if (creators.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No creators seeded yet. Populate <code>lib/lists/creators.ts</code> and
        import into the database.
      </p>
    );
  }
  const grouped = creators.reduce<Record<number, Creator[]>>((acc, c) => {
    (acc[c.tier] ??= []).push(c);
    return acc;
  }, {});
  const tiers = Object.keys(grouped).map(Number).sort((a, b) => a - b);

  return (
    <div className="space-y-8">
      {tiers.map((tier) => (
        <section key={tier}>
          <h2 className="mb-3 text-lg font-semibold">
            Tier {tier} — {TIER_LABEL[tier]}
          </h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {grouped[tier].map((c) => (
              <Card key={c.id}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{c.platform}</Badge>
                    {c.language !== "en" && (
                      <Badge variant="primary">{c.language.toUpperCase()}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-base">
                    {c.feed_url ? (
                      <Link
                        href={c.feed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {c.display_name ?? c.handle}
                      </Link>
                    ) : (
                      c.display_name ?? c.handle
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm text-muted-foreground">
                  {c.specialty && <p>{c.specialty}</p>}
                  {c.audience_size && (
                    <p className="text-xs">
                      ~{c.audience_size.toLocaleString()} followers
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
