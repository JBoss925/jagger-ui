import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { docsUrl, papersUrl, portfolioUrl } from "../../urls";

export type EditorialHeaderProps = {
  mode: "papers" | "docs";
  projectName?: string;
  projectSlug?: string;
  query?: string;
  onQueryChange?: (query: string) => void;
  onSearchSubmit?: (query: string) => void;
  searchLabel?: string;
  searchPlaceholder?: string;
  theme: "dark" | "light";
  onThemeToggle: () => void;
  sidebar?: ReactNode;
};

export default function EditorialHeader({
  mode,
  projectName,
  projectSlug,
  query,
  onQueryChange,
  onSearchSubmit,
  searchLabel,
  searchPlaceholder,
  theme,
  onThemeToggle,
  sidebar,
}: EditorialHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const controlsId = useId();
  const { pathname, search } = useLocation();

  useEffect(() => {
    setIsExpanded(false);
  }, [pathname]);

  if (new URLSearchParams(search).get("embed") === "1") {
    return null;
  }

  const isDocs = mode === "docs";
  const topTarget = window.self !== window.top ? "_top" : undefined;

  const brandTo = isDocs ? (projectSlug ? `/${projectSlug}` : "/") : "/";
  const brandTitle = isDocs
    ? projectName
      ? `${projectName} Docs`
      : "Jagger Docs"
    : "Jagger Papers";
  const brandSubtitle = isDocs
    ? projectName
      ? "Project documentation"
      : "Tutorials · Guides · Reference · Explanation"
    : "Technical notes & papers";

  return (
    <header
      className={`papers-header${isExpanded ? " papers-header--expanded" : ""}`}
    >
      <Link
        className="papers-header__brand"
        to={brandTo}
        aria-label={isDocs ? "Jagger Docs home" : "Jagger Papers home"}
      >
        <span className="papers-header__mark" aria-hidden="true" />
        <span>
          <strong>{brandTitle}</strong>
          <small>{brandSubtitle}</small>
        </span>
      </Link>

      <button
        type="button"
        className="papers-header__menu"
        aria-expanded={isExpanded}
        aria-controls={controlsId}
        aria-label={
          isExpanded
            ? `Collapse ${isDocs ? "docs" : "papers"} controls`
            : `Expand ${isDocs ? "docs" : "papers"} controls`
        }
        onClick={() => setIsExpanded((current) => !current)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className="papers-header__tools" id={controlsId}>
        <nav
          className="library-reader-nav"
          aria-label={
            isDocs ? "Documentation navigation" : "Library navigation"
          }
        >
          <a href={portfolioUrl()} target={topTarget}>
            Home
          </a>
          <a href={portfolioUrl("/library")} target={topTarget}>
            Library
          </a>
          {isDocs ? (
            <>
              <NavLink to="/" end>
                All docs
              </NavLink>
              <a
                href={projectSlug ? papersUrl(`/${projectSlug}`) : papersUrl()}
                target={topTarget}
              >
                Papers
              </a>
            </>
          ) : (
            <a
              href={projectSlug ? docsUrl(`/${projectSlug}`) : docsUrl()}
              target={topTarget}
            >
              Docs
            </a>
          )}
        </nav>

        {onQueryChange ? (
          <form
            className="papers-search"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              onSearchSubmit?.(query ?? "");
            }}
          >
            <label htmlFor="editorial-search-input">
              {searchLabel ?? (isDocs ? "Search documentation" : "Search papers")}
            </label>
            <input
              id="editorial-search-input"
              type="search"
              value={query ?? ""}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder={
                searchPlaceholder ??
                (isDocs
                  ? "Search syntax, controls, or guides"
                  : "Search by title, tag, or category")
              }
            />
          </form>
        ) : null}

        <button
          type="button"
          className="papers-theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true" />
          {theme === "dark" ? "Dark" : "Light"}
        </button>

        {isExpanded && sidebar ? (
          <div className="papers-header__sidebar">{sidebar}</div>
        ) : null}
      </div>
    </header>
  );
}
