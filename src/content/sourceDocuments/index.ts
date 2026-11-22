import { aixcCompressorPaper } from "./aixcCompressor";
import { geneticTsPaper } from "./geneticTs";
import { hearthPaper } from "./hearth";
import { jaggerscriptPaper } from "./jaggerscript";
import { liveboardPaper } from "./liveboard";
import { ojamlPaper } from "./ojaml";
import { renginePaper } from "./rengine";
import { tsxlightRendererPaper } from "./tsxlightRenderer";

export {
  aixcCompressorPaper,
  geneticTsPaper,
  hearthPaper,
  jaggerscriptPaper,
  liveboardPaper,
  ojamlPaper,
  renginePaper,
  tsxlightRendererPaper,
};

export const sourceDocuments = [
  ojamlPaper,
  liveboardPaper,
  hearthPaper,
  jaggerscriptPaper,
  aixcCompressorPaper,
  geneticTsPaper,
  renginePaper,
  tsxlightRendererPaper,
];

export const explanationIds = new Set([
  "thesis",
  "motivation",
  "system-object",
  "tradeoffs",
  "design-lessons",
  "results",
  "fit",
  "inference-proof",
  "compression-economics",
]);

export const projectNames: Record<string, string> = {
  ojaml: "OJaml",
  liveboard: "LiveBoard",
  hearth: "Hearth",
  jaggerscript: "JaggerScript",
  "aixc-compressor": "AIXC Compressor",
  "genetic-ts": "GeneticTS",
  rengine: "Rengine",
  "tsxlight-renderer": "TSXLight",
};

export const projectFlows: Record<string, string[]> = {
  ojaml: ["Source", "Parse", "Infer types", "Emit WASM", "Execute"],
  liveboard: [
    "Local gesture",
    "Typed operation",
    "Validate + commit",
    "Broadcast room",
    "Persist + recover",
  ],
  hearth: [
    "Dry audio",
    "Pre-condition",
    "Harmonic stages",
    "Brightness servo",
    "Protect + mix",
  ],
  jaggerscript: [
    "Source",
    "Parse AST",
    "Normalize tree",
    "Walk + evaluate",
    "Output",
  ],
  "aixc-compressor": [
    "Input units",
    "Predict next",
    "Match or miss",
    "Pack flags + residuals",
    "Replay decode",
  ],
  "genetic-ts": [
    "Candidate throws",
    "Simulate physics",
    "Score closeness",
    "Select elites",
    "Crossover + mutate",
  ],
  rengine: [
    "Scene tree",
    "Update components",
    "Compose transforms",
    "Render pass",
    "Inspect state",
  ],
  "tsxlight-renderer": [
    "User event",
    "Client shell",
    "Server callback",
    "Render tree",
    "Patch UI",
  ],
};
