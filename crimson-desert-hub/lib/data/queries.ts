import { isDemoMode } from "@/lib/demo/mode";
import {
  DEMO_BOSSES,
  DEMO_CREATORS,
  DEMO_DIGEST,
  DEMO_FEED,
  DEMO_PATCHES,
  DEMO_SIGNALS,
  findDemoBoss,
  findDemoFeedItem,
  findDemoPatch,
} from "@/lib/demo/fixtures";
import type {
  Boss,
  Creator,
  DailyDigest,
  IngestedContent,
  Patch,
  Signal,
} from "@/lib/supabase/types";

// Each function below returns canned demo data when NEXT_PUBLIC_SUPABASE_URL
// is unset, otherwise queries Supabase. Pages import these instead of calling
// the Supabase client directly so the app renders end-to-end with no config.

export async function getLatestDigest(): Promise<DailyDigest | null> {
  if (isDemoMode()) return DEMO_DIGEST;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("daily_digests")
    .select("*")
    .order("digest_date", { ascending: false })
    .limit(1)
    .maybeSingle();
  return (data as DailyDigest | null) ?? null;
}

export async function getOpenHighSignals(): Promise<Signal[]> {
  if (isDemoMode()) return DEMO_SIGNALS;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("signals")
    .select("*")
    .eq("acknowledged", false)
    .in("severity", ["high", "critical"])
    .order("triggered_at", { ascending: false })
    .limit(3);
  return (data ?? []) as Signal[];
}

export async function listPatches(): Promise<Patch[]> {
  if (isDemoMode()) return DEMO_PATCHES;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("patches")
    .select("*")
    .order("released_at", { ascending: false });
  return (data ?? []) as Patch[];
}

export async function getPatchBySlug(slug: string): Promise<Patch | null> {
  if (isDemoMode()) return findDemoPatch(slug);
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("patches")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as Patch | null) ?? null;
}

export async function listBosses(): Promise<Boss[]> {
  if (isDemoMode()) return DEMO_BOSSES;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("bosses")
    .select("*")
    .order("region", { ascending: true });
  return (data ?? []) as Boss[];
}

export async function getBossBySlug(slug: string): Promise<Boss | null> {
  if (isDemoMode()) return findDemoBoss(slug);
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("bosses")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return (data as Boss | null) ?? null;
}

export async function listActiveCreators(): Promise<Creator[]> {
  if (isDemoMode()) return DEMO_CREATORS;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("creators")
    .select("*")
    .eq("active", true)
    .order("tier", { ascending: true })
    .order("audience_size", { ascending: false, nullsFirst: false });
  return (data ?? []) as Creator[];
}

export async function getFeedItemById(id: string): Promise<IngestedContent | null> {
  if (isDemoMode()) return findDemoFeedItem(id);
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const { data } = await supabase
    .from("ingested_content")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  return (data as IngestedContent | null) ?? null;
}

export interface DashboardResult {
  mode: "demo" | "live";
  userEmail: string | null;
  topics: string[];
  items: IngestedContent[];
}

export async function getDashboard(): Promise<DashboardResult | "redirect-login"> {
  if (isDemoMode()) {
    return {
      mode: "demo",
      userEmail: "demo@crimson-desert-hub.local",
      topics: [],
      items: DEMO_FEED,
    };
  }
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return "redirect-login";

  const { data: prefs } = await supabase
    .from("user_preferences")
    .select("*")
    .eq("user_id", user.id)
    .maybeSingle();
  const topics = (prefs?.topics ?? []) as string[];

  let query = supabase
    .from("ingested_content")
    .select("id,title,url,published_at,category,source_type,relevance_score")
    .gte("relevance_score", 5)
    .order("published_at", { ascending: false })
    .limit(40);
  if (topics.length > 0) query = query.in("category", topics);

  const { data: feed } = await query;
  return {
    mode: "live",
    userEmail: user.email ?? null,
    topics,
    items: (feed ?? []) as IngestedContent[],
  };
}
