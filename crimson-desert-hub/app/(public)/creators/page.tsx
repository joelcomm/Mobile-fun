import { CreatorFeed } from "@/components/CreatorFeed";
import { createClient } from "@/lib/supabase/server";
import type { Creator } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function CreatorsPage() {
  const supabase = createClient();
  const { data: creators } = await supabase
    .from("creators")
    .select("*")
    .eq("active", true)
    .order("tier", { ascending: true })
    .order("audience_size", { ascending: false, nullsFirst: false });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Creators</h1>
      <p className="text-sm text-muted-foreground">
        Curated by tier. Attribution matters — every synthesized piece on this
        site links back to the creator it draws from.
      </p>
      <CreatorFeed creators={(creators ?? []) as Creator[]} />
    </div>
  );
}
