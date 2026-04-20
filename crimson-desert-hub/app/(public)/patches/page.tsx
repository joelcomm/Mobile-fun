import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { listPatches } from "@/lib/data/queries";

export const revalidate = 300;

export default async function PatchesPage() {
  const rows = await listPatches();

  if (rows.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No patches analyzed yet. When a patch is detected in ingested content,
        the patch-analysis cron generates an entry.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Patches</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {rows.map((p) => (
          <Card key={p.id}>
            <CardHeader>
              <Badge variant="primary" className="w-fit">
                {new Date(p.released_at).toLocaleDateString()}
              </Badge>
              <CardTitle className="text-base">
                <Link href={`/patches/${p.slug}`} className="hover:underline">
                  Patch {p.version}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {p.ai_summary && <p className="line-clamp-3">{p.ai_summary}</p>}
              {p.categories && p.categories.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {p.categories.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
