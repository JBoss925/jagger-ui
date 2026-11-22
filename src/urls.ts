const viteEnv: Record<string, string | undefined> =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string | undefined> })
      .env) ||
  {};

function readEnvUrl(key: string, fallback: string): string {
  const raw = viteEnv[key]?.trim();
  return raw ? raw.replace(/\/+$/, "") : fallback;
}

export const SITE_URLS = {
  portfolio: readEnvUrl("VITE_PORTFOLIO_URL", "https://jaggerbrulato.com"),
  games: readEnvUrl("VITE_GAMES_URL", "https://games.jaggerbrulato.com"),
  docs: readEnvUrl("VITE_DOCS_URL", "https://docs.jaggerbrulato.com"),
  papers: readEnvUrl("VITE_PAPERS_URL", "https://papers.jaggerbrulato.com"),
  arena: readEnvUrl("VITE_ARENA_URL", "https://arena.jaggerbrulato.com"),
  jetstream: readEnvUrl(
    "VITE_JETSTREAM_URL",
    "https://jetstream.jaggerbrulato.com",
  ),
  risk: readEnvUrl("VITE_RISK_URL", "https://risk.jaggerbrulato.com"),
  interactive3d: readEnvUrl(
    "VITE_INTERACTIVE3D_URL",
    "https://interactive3d.jaggerbrulato.com",
  ),
  design: readEnvUrl("VITE_DESIGN_URL", "https://design.jaggerbrulato.com"),
  editor: readEnvUrl("VITE_EDITOR_URL", "https://editor.jaggerbrulato.com"),
  finance: readEnvUrl("VITE_FINANCE_URL", "https://finance.jaggerbrulato.com"),
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
