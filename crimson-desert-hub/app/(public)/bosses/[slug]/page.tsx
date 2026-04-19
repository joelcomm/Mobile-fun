import { notFound } from "next/navigation";
import { BossGuideView } from "@/components/BossGuide";
import { createClient } from "@/lib/supabase/server";
import type { Boss } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function BossDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createClient();
  const { data: boss } = await supabase
    .from("bosses")
    .select("*")
    .eq("slug", params.slug)
    .maybeSingle();
  if (!boss) notFound();
  return <BossGuideView boss={boss as Boss} />;
}
