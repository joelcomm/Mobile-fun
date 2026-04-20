import { isDemoMode } from "@/lib/demo/mode";

export function DemoBanner() {
  if (!isDemoMode()) return null;
  return (
    <div className="border-b border-amber-500/40 bg-amber-500/10">
      <div className="container flex flex-wrap items-center gap-x-4 gap-y-1 py-2 text-xs text-amber-200">
        <span className="font-medium">Demo mode</span>
        <span className="text-amber-200/80">
          No Supabase configured — every page is rendering fixture data from{" "}
          <code>lib/demo/fixtures.ts</code>. Set{" "}
          <code>NEXT_PUBLIC_SUPABASE_URL</code> + keys and run the ingestion
          crons to see real data.
        </span>
      </div>
    </div>
  );
}
