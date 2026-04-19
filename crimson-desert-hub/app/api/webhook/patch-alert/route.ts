import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as {
    title?: string;
    description?: string;
    severity?: "low" | "medium" | "high" | "critical";
  };
  if (!body.title) {
    return NextResponse.json({ error: "title required" }, { status: 400 });
  }

  const supabase = createServiceClient();
  const { error } = await supabase.from("signals").insert({
    signal_type: "patch_alert_webhook",
    severity: body.severity ?? "high",
    title: body.title,
    description: body.description ?? null,
  });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
