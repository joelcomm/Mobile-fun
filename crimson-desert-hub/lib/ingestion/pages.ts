// Page-diff ingestion for sources that don't expose an RSS feed.
// Primary use case: Pearl Abyss's Crimson Desert notice board, which publishes
// patch notes and dev updates as /News/Notice/Detail?_boardNo=N pages off a
// plain HTML index. A regex extractor is intentionally narrow — if we add
// more hosts with different DOM structures, add a case to `extractorFor`
// rather than try to generalize one regex across them.

export interface PageLink {
  externalId: string;
  url: string;
  title: string;
}

export interface PageDetail {
  title?: string;
  content: string;
  publishedAt?: string;
}

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    cache: "no-store",
    headers: {
      "User-Agent": UA,
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (!res.ok) {
    throw new Error(`page fetch failed: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

export function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/?(?:br|p|div|li|h[1-6])\b[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function absolutize(baseUrl: string, href: string): string {
  try {
    return new URL(href, baseUrl).toString();
  } catch {
    return href;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Pearl Abyss extractor
// ─────────────────────────────────────────────────────────────────────────────

const PA_LINK_RE =
  /<a\b[^>]*?href=["']([^"']*?\/Notice\/Detail\?[^"']*?_boardNo=(\d+)[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;

function extractPearlAbyssIndex(baseUrl: string, html: string): PageLink[] {
  const seen = new Set<string>();
  const out: PageLink[] = [];
  for (const match of html.matchAll(PA_LINK_RE)) {
    const [, href, boardNo, inner] = match;
    if (seen.has(boardNo)) continue;
    seen.add(boardNo);
    out.push({
      externalId: `pa-notice:${boardNo}`,
      url: absolutize(baseUrl, href),
      title: htmlToText(inner).slice(0, 200),
    });
  }
  return out;
}

async function extractPearlAbyssDetail(url: string): Promise<PageDetail> {
  const html = await fetchHtml(url);
  const titleMatch =
    html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) ??
    html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? htmlToText(titleMatch[1]) : undefined;

  // Try common article wrappers; fall back to full-body strip if none match.
  const bodyMatch =
    html.match(/<div[^>]*class=["'][^"']*(?:board_view|notice_view|content_view)[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/i) ??
    html.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ??
    html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);

  const content = htmlToText(bodyMatch ? bodyMatch[1] : html).slice(0, 20_000);

  // Pearl Abyss typically prints a date like "2026.04.08" near the title.
  const dateMatch = html.match(/(\d{4}[.\-/]\d{1,2}[.\-/]\d{1,2})/);
  const publishedAt = dateMatch
    ? new Date(dateMatch[1].replace(/[.\-/]/g, "-")).toISOString()
    : undefined;

  return { title, content, publishedAt };
}

// ─────────────────────────────────────────────────────────────────────────────
// Dispatcher
// ─────────────────────────────────────────────────────────────────────────────

interface Extractor {
  index(baseUrl: string, html: string): PageLink[];
  detail(url: string): Promise<PageDetail>;
}

function extractorFor(url: string): Extractor | null {
  const host = new URL(url).host;
  if (host.endsWith("pearlabyss.com")) {
    return { index: extractPearlAbyssIndex, detail: extractPearlAbyssDetail };
  }
  return null;
}

export async function fetchPageSource(indexUrl: string): Promise<
  { link: PageLink; detail: PageDetail | null }[]
> {
  const extractor = extractorFor(indexUrl);
  if (!extractor) {
    throw new Error(
      `No page-diff extractor registered for ${indexUrl}. ` +
        `Add a case in lib/ingestion/pages.ts:extractorFor before seeding it.`
    );
  }
  const indexHtml = await fetchHtml(indexUrl);
  const links = extractor.index(indexUrl, indexHtml);

  const results: { link: PageLink; detail: PageDetail | null }[] = [];
  for (const link of links) {
    try {
      const detail = await extractor.detail(link.url);
      results.push({ link, detail });
    } catch (e) {
      console.error(
        `page detail fetch failed for ${link.url}:`,
        (e as Error).message
      );
      results.push({ link, detail: null });
    }
  }
  return results;
}
