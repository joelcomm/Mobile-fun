import { notFound } from "next/navigation";

export default function BuildDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Build detail pages will render once builds are aggregated into Supabase.
  // For now, any slug is a 404 rather than inventing content.
  void params;
  notFound();
}
