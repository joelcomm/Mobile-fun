import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";
import { formatRelativeTime } from "@/lib/utils";
import type { IngestedContent, UserPreferences } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: prefs } = await supabase
    .from("user_preferences")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();
  const preferences = prefs as UserPreferences | null;

  let query = supabase
    .from("ingested_content")
    .select("id,title,url,published_at,category,source_type,relevance_score")
    .gte("relevance_score", 5)
    .order("published_at", { ascending: false })
    .limit(40);

  if (preferences?.topics && preferences.topics.length > 0) {
    query = query.in("category", preferences.topics);
  }

  const { data: feed } = await query;
  const items = (feed ?? []) as IngestedContent[];

  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Your feed</h1>
        <p className="text-sm text-muted-foreground">
          {preferences?.topics?.length
            ? `Filtered to: ${preferences.topics.join(", ")}`
            : "No filters set — showing all relevant content. Update preferences below."}
        </p>
      </header>

      <section>
        <Link
          href="/dashboard/preferences"
          className="text-sm text-primary hover:underline"
        >
          Update preferences →
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Latest</h2>
        {items.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No items match your filters yet.
          </p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{item.source_type}</Badge>
                    {item.category && (
                      <Badge variant="primary">{item.category}</Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatRelativeTime(item.published_at)}
                    </span>
                  </div>
                  <CardTitle className="text-base">
                    <Link
                      href={item.url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground">
                  Relevance score: {item.relevance_score?.toFixed(1)}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
