export interface RedditPost {
  id: string;
  subreddit: string;
  title: string;
  selftext: string;
  url: string;
  permalink: string;
  author: string;
  score: number;
  num_comments: number;
  created_utc: number;
  flair: string | null;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 30_000) {
    return cachedToken.token;
  }
  const id = process.env.REDDIT_CLIENT_ID;
  const secret = process.env.REDDIT_CLIENT_SECRET;
  const ua = process.env.REDDIT_USER_AGENT;
  if (!id || !secret || !ua) {
    throw new Error("Reddit credentials are not set");
  }
  const body = new URLSearchParams({ grant_type: "client_credentials" });
  const res = await fetch("https://www.reddit.com/api/v1/access_token", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": ua,
      Authorization: "Basic " + Buffer.from(`${id}:${secret}`).toString("base64"),
    },
  });
  if (!res.ok) throw new Error(`Reddit auth failed: ${res.status}`);
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cachedToken.token;
}

export async function fetchSubredditNew(
  subreddit: string,
  limit = 50
): Promise<RedditPost[]> {
  const token = await getToken();
  const ua = process.env.REDDIT_USER_AGENT!;
  const url = `https://oauth.reddit.com/r/${subreddit}/new?limit=${limit}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}`, "User-Agent": ua },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Reddit fetch failed: ${res.status}`);
  const json = (await res.json()) as {
    data: { children: Array<{ data: Record<string, unknown> }> };
  };
  return (json.data?.children ?? []).map((c) => {
    const d = c.data;
    return {
      id: String(d.id),
      subreddit: String(d.subreddit),
      title: String(d.title ?? ""),
      selftext: String(d.selftext ?? ""),
      url: String(d.url ?? ""),
      permalink: `https://www.reddit.com${String(d.permalink ?? "")}`,
      author: String(d.author ?? ""),
      score: Number(d.score ?? 0),
      num_comments: Number(d.num_comments ?? 0),
      created_utc: Number(d.created_utc ?? 0),
      flair: (d.link_flair_text as string | null) ?? null,
    };
  });
}
