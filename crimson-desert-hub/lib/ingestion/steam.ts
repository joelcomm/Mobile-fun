// Steam Web API helpers. Crimson Desert appId must be provided via env (STEAM_APPID)
// or hard-coded once verified. Leaving runtime-configurable to avoid fabricating an ID.

export interface SteamNewsItem {
  gid: string;
  title: string;
  url: string;
  contents: string;
  date: number;
  author: string;
  feedname: string;
}

export interface SteamPlayerCount {
  player_count: number;
  fetched_at: string;
}

function requireAppId(): string {
  const id = process.env.STEAM_APPID;
  if (!id) {
    throw new Error(
      "STEAM_APPID is not set. Set it to the Crimson Desert Steam AppID once verified."
    );
  }
  return id;
}

export async function fetchSteamNews(count = 20): Promise<SteamNewsItem[]> {
  const appid = requireAppId();
  const url = new URL(
    "https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/"
  );
  url.searchParams.set("appid", appid);
  url.searchParams.set("count", String(count));
  url.searchParams.set("format", "json");
  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Steam news failed: ${res.status}`);
  const data = (await res.json()) as {
    appnews?: { newsitems?: SteamNewsItem[] };
  };
  return data.appnews?.newsitems ?? [];
}

export async function fetchPlayerCount(): Promise<SteamPlayerCount> {
  const appid = requireAppId();
  const url = new URL(
    "https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/"
  );
  url.searchParams.set("appid", appid);
  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Steam players failed: ${res.status}`);
  const data = (await res.json()) as {
    response: { player_count: number; result: number };
  };
  return {
    player_count: data.response.player_count,
    fetched_at: new Date().toISOString(),
  };
}
