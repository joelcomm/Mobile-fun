import { DigestCard } from "@/components/DigestCard";
import { SignalAlert } from "@/components/SignalAlert";
import { getLatestDigest, getOpenHighSignals } from "@/lib/data/queries";

export const revalidate = 300;

export default async function HomePage() {
  const [digest, signals] = await Promise.all([
    getLatestDigest(),
    getOpenHighSignals(),
  ]);

  if (!digest) {
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
      {signals.map((s) => (
        <SignalAlert key={s.id} signal={s} />
      ))}
      <DigestCard digest={digest} />
    </div>
  );
}
