import { CreatorFeed } from "@/components/CreatorFeed";
import { listActiveCreators } from "@/lib/data/queries";

export const revalidate = 300;

export default async function CreatorsPage() {
  const creators = await listActiveCreators();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Creators</h1>
      <p className="text-sm text-muted-foreground">
        Curated by tier. Attribution matters — every synthesized piece on this
        site links back to the creator it draws from.
      </p>
      <CreatorFeed creators={creators} />
    </div>
  );
}
