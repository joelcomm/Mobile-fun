import Parser from "rss-parser";

const parser = new Parser({
  timeout: 10_000,
  headers: { "User-Agent": "crimson-desert-hub/0.1 (+https://example.com)" },
});

export interface RssItem {
  id: string;
  title: string;
  link: string;
  isoDate?: string;
  contentSnippet?: string;
  content?: string;
}

export async function fetchFeed(url: string): Promise<RssItem[]> {
  const feed = await parser.parseURL(url);
  return (feed.items ?? []).map((item) => ({
    id: item.guid ?? item.link ?? item.title ?? crypto.randomUUID(),
    title: item.title ?? "",
    link: item.link ?? "",
    isoDate: item.isoDate,
    contentSnippet: item.contentSnippet,
    content: item.content,
  }));
}
