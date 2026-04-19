import { DigestCard } from "@/components/DigestCard";
import { SignalAlert } from "@/components/SignalAlert";
import { createClient } from "@/lib/supabase/server";
import type { DailyDigest, Signal } from "@/lib/supabase/types";

export const revalidate = 300;

export default async function HomePage() {
  const supabase = createClient();

  const [{ data: digest }, { data: signals }] = await Promise.all([
    supabase
      .from("daily_digests")
      .select("*")
      .order("digest_date", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("signals")
      .select("*")
      .eq("acknowledged", false)
      .in("severity", ["high", "critical"])
      .order("triggered_at", { ascending: false })
      .limit(3),
  ]);

  const typedDigest = digest as DailyDigest | null;
  const typedSignals = (signals ?? []) as Signal[];

  if (!typedDigest) {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          No digest generated yet.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Run the ingestion crons and then trigger{" "}
          <code>/api/cron/process-daily-digest</code> to produce the first digest.
        </p>
      </div>
    );
  }

  return (
    <div>
      {typedSignals.map((s) => (
        <SignalAlert key={s.id} signal={s} />
      ))}
      <DigestCard digest={typedDigest} />
    </div>
  );
}
