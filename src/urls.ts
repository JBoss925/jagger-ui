const viteEnv: Record<string, string | undefined> =
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string | undefined> })
      .env) ||
  {};

export function isLocalRuntime(): boolean {
  if (viteEnv.MODE === "test") return false;
  if (viteEnv.DEV || viteEnv.MODE === "development") return true;
  if (typeof window !== "undefined" && window.location) {
    const host = window.location.hostname;
    if (
      host === "localhost" ||
      host === "127.0.0.1" ||
      host === "[::1]" ||
      host === "0.0.0.0" ||
      host.endsWith(".localhost")
    ) {
      return true;
    }
    return false;
  }
  return false;
}

export function localOrigin(port: number): string {
  if (typeof window !== "undefined" && window.location) {
    const protocol = window.location.protocol || "http:";
    const host = window.location.hostname || "localhost";
    return `${protocol}//${host}:${port}`;
  }
  return `http://localhost:${port}`;
}

function readEnvUrl(
  key: string,
  localPort: number,
  prodFallback: string,
): string {
  const raw = viteEnv[key]?.trim();
  if (raw) return raw.replace(/\/+$/, "");
  if (isLocalRuntime()) return localOrigin(localPort);
  return prodFallback;
}

export const SITE_URLS = {
  portfolio: readEnvUrl("VITE_PORTFOLIO_URL", 5173, "https://jaggerbrulato.com"),
  games: readEnvUrl("VITE_GAMES_URL", 5174, "https://games.jaggerbrulato.com"),
  docs: readEnvUrl("VITE_DOCS_URL", 5175, "https://docs.jaggerbrulato.com"),
  papers: readEnvUrl(
    "VITE_PAPERS_URL",
    5176,
    "https://papers.jaggerbrulato.com",
  ),
  arena: readEnvUrl("VITE_ARENA_URL", 5177, "https://arena.jaggerbrulato.com"),
  jetstream: readEnvUrl(
    "VITE_JETSTREAM_URL",
    5178,
    "https://jetstream.jaggerbrulato.com",
  ),
  risk: readEnvUrl("VITE_RISK_URL", 5180, "https://risk.jaggerbrulato.com"),
  editor: readEnvUrl(
    "VITE_EDITOR_URL",
    5182,
    "https://editor.jaggerbrulato.com",
  ),
  design: readEnvUrl(
    "VITE_DESIGN_URL",
    5183,
    "https://design.jaggerbrulato.com",
  ),
  finance: readEnvUrl(
    "VITE_FINANCE_URL",
    5184,
    "https://finance.jaggerbrulato.com",
  ),
  interactive3d: readEnvUrl(
    "VITE_INTERACTIVE3D_URL",
    5185,
    "https://interactive3d.jaggerbrulato.com",
  ),
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
