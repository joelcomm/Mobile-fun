import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getFeedItemById } from "@/lib/data/queries";

export const revalidate = 300;

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = await getFeedItemById(params.slug);
  if (!item) notFound();

  return (
    <article className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">{item.source_type}</Badge>
        {item.category && <Badge variant="primary">{item.category}</Badge>}
        {item.language !== "en" && (
          <Badge variant="outline">{item.language.toUpperCase()}</Badge>
        )}
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">{item.title}</h1>
      {item.published_at && (
        <p className="text-xs text-muted-foreground">
          {new Date(item.published_at).toLocaleString()}
        </p>
      )}
      {item.content && (
        <p className="whitespace-pre-line text-muted-foreground">
          {item.content}
        </p>
      )}
      {item.url && (
        <Link
          href={item.url}
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
