import type { Creator } from "@/lib/supabase/types";

export interface YouTubeVideo {
  videoId: string;
  channelId: string;
  channelTitle: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
}

const SEARCH_LIMIT_PER_CREATOR = 10;

export async function fetchLatestForChannel(
  creator: Creator
): Promise<YouTubeVideo[]> {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error("YOUTUBE_API_KEY is not set");
  if (!creator.external_id) return [];

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("key", key);
  url.searchParams.set("channelId", creator.external_id);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("order", "date");
  url.searchParams.set("maxResults", String(SEARCH_LIMIT_PER_CREATOR));
  url.searchParams.set("type", "video");

  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`YouTube search failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as {
    items: Array<{
      id: { videoId: string };
      snippet: {
        channelId: string;
        channelTitle: string;
        title: string;
        description: string;
        publishedAt: string;
      };
    }>;
  };

  return (data.items ?? [])
    .filter((item) => item.id?.videoId)
    .map((item) => ({
      videoId: item.id.videoId,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      title: item.snippet.title,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
}
