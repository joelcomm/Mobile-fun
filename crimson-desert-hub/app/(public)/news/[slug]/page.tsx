import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import type { IngestedContent } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: item } = await supabase
    .from("ingested_content")
    .select("*")
    .eq("id", params.slug)
    .maybeSingle();
  if (!item) notFound();
  const typed = item as IngestedContent;

  return (
    <article className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">{typed.source_type}</Badge>
        {typed.category && <Badge variant="primary">{typed.category}</Badge>}
        {typed.language !== "en" && (
          <Badge variant="outline">{typed.language.toUpperCase()}</Badge>
        )}
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">{typed.title}</h1>
      {typed.published_at && (
        <p className="text-xs text-muted-foreground">
          {new Date(typed.published_at).toLocaleString()}
        </p>
      )}
      {typed.content && (
        <p className="whitespace-pre-line text-muted-foreground">
          {typed.content}
        </p>
      )}
      {typed.url && (
        <Link
          href={typed.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline"
        >
          View original →
        </Link>
      )}
    </article>
  );
}
