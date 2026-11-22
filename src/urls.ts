export const SITE_URLS = {
  portfolio: "https://jaggerbrulato.com",
  games: "https://games.jaggerbrulato.com",
  docs: "https://docs.jaggerbrulato.com",
  papers: "https://papers.jaggerbrulato.com",
  arena: "https://arena.jaggerbrulato.com",
  jetstream: "https://jetstream.jaggerbrulato.com",
  risk: "https://risk.jaggerbrulato.com",
} as const;

function joinUrl(base: string, path = ""): string {
  if (!path || path === "/") return base;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}

export function portfolioUrl(path = ""): string {
  return joinUrl(SITE_URLS.portfolio, path);
}

export function gamesUrl(path = ""): string {
  return joinUrl(SITE_URLS.games, path);
}

export function docsUrl(path = ""): string {
  return joinUrl(SITE_URLS.docs, path);
}

export function papersUrl(path = ""): string {
  return joinUrl(SITE_URLS.papers, path);
}

export function normalizeUrlKey(href: string): string {
  return href.replace(/\/+$/, "");
}
