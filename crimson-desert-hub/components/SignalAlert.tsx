import type { Signal } from "@/lib/supabase/types";
import { Badge } from "@/components/ui/badge";

export function SignalAlert({ signal }: { signal: Signal }) {
  const variant =
    signal.severity === "critical" || signal.severity === "high"
      ? "destructive"
      : "primary";
  return (
    <div className="mb-6 rounded-md border border-primary/40 bg-primary/10 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge variant={variant}>{signal.severity.toUpperCase()}</Badge>
            <span className="text-sm font-semibold">{signal.title}</span>
          </div>
          {signal.description && (
            <p className="text-sm text-muted-foreground">{signal.description}</p>
          )}
        </div>
        <time className="text-xs text-muted-foreground" dateTime={signal.triggered_at}>
          {new Date(signal.triggered_at).toLocaleString()}
        </time>
      </div>
    </div>
  );
}
