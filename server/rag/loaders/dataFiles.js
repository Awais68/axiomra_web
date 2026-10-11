/**
 * client/src/data/*.js -> one document per page. Each top-level export
 * becomes a top-level heading, so a chunk's section starts from the page
 * block it came from ("Faqs", "Sub services").
 * caseStudiesData.js has its own loader (one page per study).
 */
import { humanize, renderNode, tidy, topLevelDeclarations } from "./ast.js";
import { DATA_FILE_ROUTES, titleFor } from "./routes.js";

// Exports that never reach a visitor as text, or only as a pointer elsewhere.
const SKIP_EXPORTS = /^([A-Z_]+|midCta|finalCta|blogs|heroVideo)$/;

// Sample UI with made-up numbers (hero mockups, a hand-drawn dashboard). On
// the page they read as illustration; in a chunk the bot would quote them as
// client results. "export" drops the whole export, "export.key" one property.
export const DEMO_CONTENT = {
  "businessIntelligenceData.js": ["sampleKpis", "dashboard"],
  "dataScienceData.js": ["hero.chips"],
  "chatbotData.js": ["hero.conversation"],
  "botAutomationData.js": ["hero.runs"],
  "processAutomationData.js": ["hero.ticker"],
};

const propName = (p) => p.key?.name ?? p.key?.value;

/** `node` without the demo properties listed for this export, or null to drop it. */
function withoutDemo(file, name, node) {
  const paths = DEMO_CONTENT[file] ?? [];
  if (paths.includes(name)) return null;
  const keys = paths.filter((p) => p.startsWith(`${name}.`)).map((p) => p.slice(name.length + 1));
  if (!keys.length || node.type !== "ObjectExpression") return node;
  return { ...node, properties: node.properties.filter((p) => !keys.includes(propName(p))) };
}

/** The document for one data file, or null when it is not a page. */
export function dataFileDocument(file, ast, ctx) {
  const source = DATA_FILE_ROUTES[file];
  if (!source) return null;
  const lines = [];
  for (const { name, node } of topLevelDeclarations(ast)) {
    if (SKIP_EXPORTS.test(name)) continue;
    const kept = withoutDemo(file, name, node);
    if (!kept) continue;
    const rendered = renderNode(kept, ctx, 2);
    if (rendered.some((l) => l.trim())) lines.push("", `# ${humanize(name)}`, ...rendered);
  }
  const text = tidy(lines);
  return text ? { source, title: titleFor(source), section: "", text } : null;
}
