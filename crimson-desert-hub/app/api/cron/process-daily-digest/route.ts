import { NextResponse } from "next/server";
import { buildDailyDigest } from "@/lib/processing/digest";
import { assertCronAuth } from "@/lib/utils";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function GET(req: Request) {
  try {
    assertCronAuth(req);
  } catch (e) {
    const err = e as Error & { status?: number };
    return NextResponse.json({ error: err.message }, { status: err.status ?? 500 });
  }

  try {
    const digest = await buildDailyDigest();
    return NextResponse.json({ ok: true, headline: digest.headline });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
