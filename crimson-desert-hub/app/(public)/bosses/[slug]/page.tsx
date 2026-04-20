import { notFound } from "next/navigation";
import { BossGuideView } from "@/components/BossGuide";
import { getBossBySlug } from "@/lib/data/queries";

export const revalidate = 300;

export default async function BossDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const boss = await getBossBySlug(params.slug);
  if (!boss) notFound();
  return <BossGuideView boss={boss} />;
}
