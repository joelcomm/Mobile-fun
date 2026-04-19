import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import type { Boss } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function BossesPage() {
  const supabase = createClient();
  const { data: bosses } = await supabase
    .from("bosses")
    .select("*")
    .order("region", { ascending: true });
  const rows = (bosses ?? []) as Boss[];

  if (rows.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No bosses seeded yet. Populate <code>lib/lists/bosses.ts</code> and
        import into the database, then run the boss-guide synthesis job.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Bosses</h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {rows.map((b) => (
          <Card key={b.id}>
            <CardHeader>
              <div className="flex flex-wrap gap-1">
                {b.region && <Badge variant="outline">{b.region}</Badge>}
                {b.difficulty && (
                  <Badge variant="primary">{b.difficulty}</Badge>
                )}
              </div>
              <CardTitle className="text-base">
                <Link href={`/bosses/${b.slug}`} className="hover:underline">
                  {b.name}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {b.description && <p className="line-clamp-3">{b.description}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
