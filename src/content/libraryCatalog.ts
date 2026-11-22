import { docsUrl, papersUrl } from "../urls";

export type LibraryEntry = {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  abstract: string;
  authors: string[];
  date: string;
  categories: string[];
  tags: string[];
  repoUrl: string;
  paperHref: string;
  docsHref: string;
};

export const libraryCatalog: LibraryEntry[] = [
  {
    slug: "ojaml",
    name: "OJaml",
    title: "OJaml: An OCaml-Inspired Language Compiled to WebAssembly",
    subtitle: "How an OCaml-inspired language with type inference compiles to WebAssembly and runs directly in the browser.",
    abstract: "OJaml is a small functional language written from scratch in TypeScript that compiles directly to WebAssembly in the browser—covering lexing, parsing, Hindley-Milner type inference, closure conversion, and Monaco IDE tooling.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Language Tooling", "Systems", "Research Notes"],
    tags: ["OJaml", "TypeScript", "WebAssembly", "WABT", "Type Inference", "Hindley-Milner", "Compiler", "Closures", "Monaco"],
    repoUrl: "https://github.com/JBoss925/OJaml",
    paperHref: papersUrl("/ojaml"),
    docsHref: docsUrl("/ojaml"),
  },
  {
    slug: "liveboard",
    name: "LiveBoard",
    title: "LiveBoard: A Real-Time Collaborative Canvas Platform",
    subtitle: "How a multiplayer drawing canvas coordinates live edits, room state, and durable history across clients.",
    abstract: "LiveBoard is a real-time collaborative canvas built around typed operations, authoritative validation, Redis-backed fanout, and durable persistence so multi-user boards stay coherent under concurrency and reconnects.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Systems", "Research Notes"],
    tags: ["TypeScript", "React", "WebSockets", "Redis", "PostgreSQL", "Collaborative Editing", "Distributed Systems"],
    repoUrl: "https://github.com/JBoss925/LiveBoard",
    paperHref: papersUrl("/liveboard"),
    docsHref: docsUrl("/liveboard"),
  },
  {
    slug: "hearth",
    name: "Hearth",
    title: "Hearth: A Tube-Inspired Saturation Max for Live Device",
    subtitle: "How an audio saturation plugin shapes harmonic warmth with a dynamic brightness servo and output protection.",
    abstract: "Hearth is a Max for Live audio effect that combines input conditioning, asymmetric nonlinear shaping, an adaptive brightness servo, and peak protection into a musical warmth processor.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Audio DSP", "Max for Live", "Research Notes"],
    tags: ["Audio DSP", "Max for Live", "Saturation", "Harmonics", "Real-Time Audio", "Signal Processing"],
    repoUrl: "https://github.com/JBoss925/Hearth",
    paperHref: papersUrl("/hearth"),
    docsHref: docsUrl("/hearth"),
  },
  {
    slug: "jaggerscript",
    name: "JaggerScript",
    title: "JaggerScript: A Typed Browser-Runnable Scripting Language",
    subtitle: "How a typed scripting language parses, normalizes, checks, and executes programs live in the browser.",
    abstract: "JaggerScript is an end-to-end typed scripting language with its own lexer, parser, normalization pass, tree-walking runtime, diagnostics, and interactive browser playground.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Language Tooling", "Systems", "Research Notes"],
    tags: ["JaggerScript", "TypeScript", "Parser", "Interpreter", "AST", "Diagnostics", "Monaco"],
    repoUrl: "https://github.com/JBoss925/JaggerScript",
    paperHref: papersUrl("/jaggerscript"),
    docsHref: docsUrl("/jaggerscript"),
  },
  {
    slug: "aixc-compressor",
    name: "AIXC Compressor",
    title: "AIXC: Predictor-Driven Residual Compression",
    subtitle: "How a language-model predictor turns predictable text into a compact stream of hits and miss residuals.",
    abstract: "AIXC explores lossless predictor-driven compression: store only what a shared deterministic next-unit predictor cannot reproduce, packing hit/miss flags alongside residual streams.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Compression", "Systems", "Research Notes"],
    tags: ["Compression", "Predictors", "Binary Format", "Information Theory", "Deterministic Decoding"],
    repoUrl: "https://github.com/JBoss925/aixc-compressor",
    paperHref: papersUrl("/aixc-compressor"),
    docsHref: docsUrl("/aixc-compressor"),
  },
  {
    slug: "genetic-ts",
    name: "GeneticTS",
    title: "GeneticTS: Interactive Evolutionary Physics Optimization",
    subtitle: "How a small population of candidate launches evolves to solve a 2D ballistics target under gravity and wind.",
    abstract: "GeneticTS pairs a deterministic 2D physics loop with elitist selection, crossover, and mutation so users can watch launch velocities adapt live as gravity, wind, or target position change.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Simulation", "Research Notes"],
    tags: ["TypeScript", "Genetic Algorithms", "Physics Simulation", "Evolutionary Computing", "SVG"],
    repoUrl: "https://github.com/JBoss925/GeneticTS",
    paperHref: papersUrl("/genetic-ts"),
    docsHref: docsUrl("/genetic-ts"),
  },
  {
    slug: "rengine",
    name: "Rengine",
    title: "Rengine: A Composable Scene-Graph Rendering Engine",
    subtitle: "How transform hierarchies, component loops, and local/world space inspection fit together in a tiny 2D engine.",
    abstract: "Rengine focuses on clean scene-graph composition: nested parent-child transform matrices, pluggable animation components, wireframe pivot overlays, and a live local/world inspector.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Engine Architecture", "Systems", "Research Notes"],
    tags: ["TypeScript", "Rendering Engine", "Scene Graph", "Transforms", "Canvas", "Animation Loop"],
    repoUrl: "https://github.com/JBoss925/Rengine",
    paperHref: papersUrl("/rengine"),
    docsHref: docsUrl("/rengine"),
  },
  {
    slug: "tsxlight-renderer",
    name: "TSXLight",
    title: "TSXLight: A Lightweight Server-Driven TSX Renderer",
    subtitle: "How server-rendered TSX trees reconcile interactive UI updates across a minimal client shell.",
    abstract: "TSXLight examines server-driven UI architecture—preserving component identity, callback dispatch, and predictable rerendering with a deliberately small client footprint.",
    authors: ["Jagger Brulato"],
    date: "2026",
    categories: ["Systems", "Language Tooling", "Research Notes"],
    tags: ["TypeScript", "TSX", "Server-Driven UI", "Renderer", "Reconciliation"],
    repoUrl: "https://github.com/JBoss925/tsxlight-renderer",
    paperHref: papersUrl("/tsxlight-renderer"),
    docsHref: docsUrl("/tsxlight-renderer"),
  },
];

export const librarySlugs = new Set(libraryCatalog.map((entry) => entry.slug));

export function getLibraryEntry(slug: string | undefined): LibraryEntry | undefined {
  return libraryCatalog.find((entry) => entry.slug === slug);
}
