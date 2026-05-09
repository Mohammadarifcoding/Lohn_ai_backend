import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { GraphNode } from "@langchain/langgraph";
import { config } from "../config/index.js";
import { prisma } from "../config/database.js";
import { models } from "../providers/models.js";
import { prompts } from "../prompts/blogAgent.js";
import type { BlogIdea } from "../types/blog/idea_generation.js";
import type { Draft } from "../types/blog/writing.js";
import type { ResearchResult } from "../types/blog/research.js";
import { BlogAgentStateSchema } from "../types/blog/workflow.js";
import { logger } from "../utils/logger.js";
import { normalizeProviderError } from "../utils/providerError.js";
import {
  analyzeFrontmatterStyle,
  normalizeFrontmatterFields,
} from "../modules/blog/frontmatter-style.js";

const DRAFT_COUNT = 3;

type StructureVariant =
  | "practical_guide"
  | "problem_solution"
  | "comparison"
  | "risk_review"
  | "workflow_article"
  | "faq_explainer"
  | "case_style"
  | "checklist_article"
  | "myth_reality"
  | "decision_guide";

interface StructureVariantConfig {
  name: StructureVariant;
  instructions: string;
  table_policy: string;
  recommended_elements: string[];
}

interface RecentBlogStructure {
  title: string;
  headings: string[];
  has_table: boolean;
  mdx_blocks: string[];
}

const STRUCTURE_VARIANTS: StructureVariantConfig[] = [
  {
    name: "practical_guide",
    instructions:
      "Build a hands-on guide with a clear setup, implementation steps, operational checks, and a grounded closing section.",
    table_policy: "Avoid markdown tables. Use numbered steps, bullets, or short checklists instead.",
    recommended_elements: ["numbered steps", "short checklist", "implementation notes"],
  },
  {
    name: "problem_solution",
    instructions:
      "Start from a concrete payroll pain point, diagnose causes, compare solution paths in prose, and finish with tradeoffs.",
    table_policy: "Avoid markdown tables. Explain the problem and solution paths through prose and subheadings.",
    recommended_elements: ["diagnosis sections", "tradeoff notes", "practical examples"],
  },
  {
    name: "comparison",
    instructions:
      "Compare realistic options, explain when each option fits, and use a compact table only if it improves decision-making.",
    table_policy: "Use at most one compact markdown table if it makes the comparison clearer.",
    recommended_elements: ["comparison table", "fit criteria", "decision notes"],
  },
  {
    name: "risk_review",
    instructions:
      "Organize the article around risks, warning signs, controls, and prevention steps without turning it into a generic checklist.",
    table_policy: "Avoid markdown tables. Use warning-sign bullets or control notes instead.",
    recommended_elements: ["risk signals", "control points", "prevention steps"],
  },
  {
    name: "workflow_article",
    instructions:
      "Map the before-and-after workflow, handoffs, approvals, and points where automation changes day-to-day work.",
    table_policy: "Use a table only for a clear before-after workflow map; otherwise avoid tables.",
    recommended_elements: ["workflow stages", "handoff examples", "before/after notes"],
  },
  {
    name: "faq_explainer",
    instructions:
      "Use specific practical questions as section headings and answer them directly with enough context for payroll teams.",
    table_policy: "Avoid markdown tables. Keep the FAQ structure readable with question-led sections.",
    recommended_elements: ["question headings", "direct answers", "short examples"],
  },
  {
    name: "case_style",
    instructions:
      "Frame the article around a realistic team scenario, then explain the choices, rollout, friction points, and lessons learned.",
    table_policy: "Avoid markdown tables. Keep the case-style flow narrative and specific.",
    recommended_elements: ["scenario", "rollout steps", "lessons"],
  },
  {
    name: "checklist_article",
    instructions:
      "Build around an actionable checklist, but explain why each item matters instead of listing shallow tips.",
    table_policy: "Prefer checklist bullets over markdown tables. Use a table only if it prevents repetition.",
    recommended_elements: ["checklist", "owner notes", "quality checks"],
  },
  {
    name: "myth_reality",
    instructions:
      "Contrast common assumptions with practical reality, using each section to correct one misconception with evidence or cautious reasoning.",
    table_policy: "Avoid markdown tables. Use repeated myth-and-reality section pairs instead.",
    recommended_elements: ["myth/reality pairs", "practical caveats", "examples"],
  },
  {
    name: "decision_guide",
    instructions:
      "Help the reader make a decision by walking through criteria, constraints, thresholds, and next actions.",
    table_policy: "Use a table only for decision criteria if it is more useful than prose.",
    recommended_elements: ["decision criteria", "thresholds", "next actions"],
  },
];

type Requirement = NonNullable<
  ReturnType<typeof BlogAgentStateSchema.parse>["requirement"]
>;

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function normalizeDocumentSpacing(value: string): string {
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeContentPostGeneration(value: string): string {
  const currentYear = new Date().getUTCFullYear().toString();

  return normalizeFrontmatterFields(value)
    .replace(/\b(20\d{2})\b/g, (match) =>
      match === currentYear ? match : currentYear,
    )
    .replace(/[–—]/g, "-")
    .replace(/\s+-\s+/g, "-");
}

function extractTextContent(content: unknown): string {
  if (typeof content === "string") {
    return content;
  }

  if (!Array.isArray(content)) {
    return "";
  }

  return content
    .map((part) => {
      if (typeof part === "string") {
        return part;
      }

      if (part && typeof part === "object" && "text" in part) {
        const text = (part as { text?: unknown }).text;
        return typeof text === "string" ? text : "";
      }

      return "";
    })
    .join("\n");
}

function truncateText(value: string, maxLength: number): string {
  const normalized = normalizeWhitespace(value);
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(0, maxLength - 3))}...`;
}

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    parsed.search = "";
    return parsed.toString().toLowerCase();
  } catch {
    return url.toLowerCase();
  }
}

function estimateWordCount(text: string): number {
  return text
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 0).length;
}

function countMatches(text: string, regex: RegExp): number {
  return (text.match(regex) ?? []).length;
}

function hasFrontmatter(content: string): boolean {
  return /^---\n[\s\S]+?\n---\n/.test(content);
}

function hasTable(content: string): boolean {
  return /\|\s*[^\n]+\|\s*\n\|\s*[-:]+\s*\|/.test(content);
}

function hasKnownMdxComponents(content: string): boolean {
  const closeHighlight = (content.match(/<\/Highlight>/gi) ?? []).length;
  const openHighlight = (content.match(/<Highlight\b/gi) ?? []).length;
  const closeCallout = (content.match(/<\/Callout>/gi) ?? []).length;
  const openCallout = (content.match(/<Callout\b/gi) ?? []).length;

  return closeHighlight === openHighlight && closeCallout === openCallout;
}

function hasBalancedCodeFences(content: string): boolean {
  return (content.match(/^```/gm) ?? []).length % 2 === 0;
}

function hasAbruptEnding(content: string): boolean {
  const lines = content
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const lastLine = lines[lines.length - 1] ?? "";
  const lastText = content.trim();

  return (
    /[,:;]$/.test(lastText) ||
    /\b(und|oder|aber|weil|wenn|mit|für|von|zu|im|in)$/i.test(lastText) ||
    lastLine.includes("|") ||
    /^[-*]\s+/.test(lastLine)
  );
}

function getMinimumWordCount(requirement: Requirement): number {
  const requested = requirement.constraints.word_count;
  if (Number.isFinite(requested) && requested > 0) {
    return Math.max(500, Math.floor(requested * 0.75));
  }

  if (requirement.depth_level === "high") {
    return 1300;
  }
  if (requirement.depth_level === "medium") {
    return 950;
  }
  return 650;
}

function buildStructureSignalText(idea: BlogIdea, requirement: Requirement): string {
  const outlineText = idea.outline
    .flatMap((section) => [section.section_title, ...section.points])
    .join(" ");

  return normalizeWhitespace(
    [
      idea.title,
      idea.hook,
      idea.unique_angle,
      idea.storytelling_strategy,
      idea.examples.join(" "),
      outlineText,
      requirement.refined_intent,
      requirement.content_format,
      requirement.core_sections.join(" "),
      requirement.key_angles.join(" "),
    ].join(" "),
  ).toLowerCase();
}

function countPatternMatches(text: string, patterns: RegExp[]): number {
  return patterns.reduce(
    (total, pattern) => total + (pattern.test(text) ? 1 : 0),
    0,
  );
}

function scoreStructureVariant(
  variant: StructureVariant,
  idea: BlogIdea,
  requirement: Requirement,
): number {
  const signalText = buildStructureSignalText(idea, requirement);
  const questionHeadings = idea.outline.filter((section) =>
    section.section_title.trim().endsWith("?"),
  ).length;
  const titleLower = idea.title.toLowerCase();
  const uniqueAngleLower = idea.unique_angle.toLowerCase();
  const storytellingLower = idea.storytelling_strategy.toLowerCase();
  const contentFormat = requirement.content_format;

  switch (variant) {
    case "faq_explainer":
      return (
        questionHeadings * 4 +
        countPatternMatches(signalText, [
          /\bfaq\b/,
          /\bfragen\b/,
          /\bantworten\b/,
          /\bwas\b/,
          /\bwie\b/,
          /\bwarum\b/,
          /\bwann\b/,
        ])
      );
    case "comparison":
      return (
        countPatternMatches(signalText, [
          /\bvergleich\b/,
          /\bvs\.?\b/,
          /\boder\b/,
          /\balternative\b/,
          /\boption(en)?\b/,
          /\bunterschied(e)?\b/,
        ]) * 3 +
        (/(vs\.?|vergleich|alternativen?)/.test(titleLower) ? 4 : 0)
      );
    case "risk_review":
      return countPatternMatches(signalText, [
        /\brisik/,
        /\bfehler\b/,
        /\bwarn/,
        /\bprüfung\b/,
        /\bkontroll/,
        /\bcompliance\b/,
        /\bvermeiden\b/,
      ]) * 3;
    case "workflow_article":
      return (
        countPatternMatches(signalText, [
          /\bprozess\b/,
          /\bworkflow\b/,
          /\bablauf\b/,
          /\bfreigab/,
          /\bübergab/,
          /\brollout\b/,
          /\bautomati/,
        ]) * 3 +
        (/(workflow|prozess|ablauf)/.test(uniqueAngleLower) ? 3 : 0)
      );
    case "case_style":
      return (
        countPatternMatches(signalText, [
          /\bbeispiel\b/,
          /\bszenario\b/,
          /\bteam\b/,
          /\balltag\b/,
          /\berfahrung\b/,
          /\blektion(en)?\b/,
          /\bfall\b/,
        ]) * 3 +
        (/(szenario|geschichte|fall)/.test(storytellingLower) ? 4 : 0)
      );
    case "checklist_article":
      return (
        countPatternMatches(signalText, [
          /\bchecklist\b/,
          /\bcheckliste\b/,
          /\bprüfliste\b/,
          /\bto-do\b/,
          /\baudit\b/,
          /\bvorbereitung\b/,
          /\bready\b/,
        ]) * 3 +
        (contentFormat === "listicle" ? 3 : 0)
      );
    case "myth_reality":
      return countPatternMatches(signalText, [
        /\bmyth/,
        /\bmythen\b/,
        /\bannahme\b/,
        /\birrtum\b/,
        /\bmissverständnis/,
        /\bwahrheit\b/,
        /\brealität\b/,
      ]) * 4;
    case "decision_guide":
      return (
        countPatternMatches(signalText, [
          /\bentscheidung\b/,
          /\bauswahl\b/,
          /\bkriteri/,
          /\bwann lohnt/,
          /\bwelche lösung\b/,
          /\bpass(t|en)\b/,
          /\bentscheiden\b/,
        ]) * 3 +
        (/(entscheiden|auswählen|kriterien)/.test(uniqueAngleLower) ? 4 : 0)
      );
    case "problem_solution":
      return (
        countPatternMatches(signalText, [
          /\bproblem\b/,
          /\bherausforderung\b/,
          /\bengpass\b/,
          /\blösung\b/,
          /\bbeheben\b/,
          /\bursache\b/,
        ]) * 3 +
        (/(problem|herausforderung|schmerzpunkt)/.test(uniqueAngleLower) ? 4 : 0)
      );
    case "practical_guide":
      return (
        countPatternMatches(signalText, [
          /\banleitung\b/,
          /\bschritt\b/,
          /\bumsetzen\b/,
          /\beinführen\b/,
          /\bsetup\b/,
          /\bso geht/,
          /\bleitfaden\b/,
        ]) * 3 +
        (contentFormat === "guide" ? 4 : 0)
      );
  }

  return 0;
}

function selectStructureVariant(
  idea: BlogIdea,
  requirement: Requirement,
  usedVariants: Set<StructureVariant>,
): StructureVariantConfig {
  const ranked = STRUCTURE_VARIANTS
    .map((variant, index) => ({
      variant,
      score: scoreStructureVariant(variant.name, idea, requirement),
      usedPenalty: usedVariants.has(variant.name) ? 1 : 0,
      index,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      if (a.usedPenalty !== b.usedPenalty) {
        return a.usedPenalty - b.usedPenalty;
      }
      return a.index - b.index;
    });

  return ranked[0]?.variant ?? STRUCTURE_VARIANTS[0];
}

function getHeadings(content: string): string[] {
  return (content.match(/^##\s+(.+)$/gm) ?? [])
    .map((heading) => heading.replace(/^##\s+/, "").trim())
    .filter(Boolean);
}

function getMdxBlocks(content: string): string[] {
  const blocks = new Set<string>();
  if (/<Highlight\b/i.test(content)) {
    blocks.add("Highlight");
  }
  if (/<Callout\b/i.test(content)) {
    blocks.add("Callout");
  }
  if (/<SectionDivider\b/i.test(content)) {
    blocks.add("SectionDivider");
  }
  return [...blocks];
}

function stripFrontmatter(content: string): string {
  return content.replace(/^---\n[\s\S]*?\n---\n?/, "").trim();
}

async function getRecentBlogStructures(): Promise<RecentBlogStructure[]> {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { locale: "de" },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: {
        title: true,
        mdxContent: true,
      },
    });

    return posts.map((post) => ({
      title: truncateText(post.title, 120),
      headings: getHeadings(post.mdxContent).slice(0, 7),
      has_table: hasTable(post.mdxContent),
      mdx_blocks: getMdxBlocks(post.mdxContent),
    }));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    logger.warn("Recent blog structure lookup failed", { error: message });
    return [];
  }
}

function hasHeadingStructure(content: string): boolean {
  const h2Count = (content.match(/^##\s+/gm) ?? []).length;
  return h2Count >= 3;
}

function runStyleChecks(content: string): string[] {
  const issues: string[] = [];

  const aiPhrases = [
    "in today's fast-paced",
    "it is important to note",
    "in conclusion",
    "delve into",
    "unlock the power",
    "leverage",
    "robust",
    "seamless",
    "synergy",
    "paradigm",
    "transformative",
    "utilize",
    "cutting-edge",
    "state-of-the-art",
    "game-changer",
  ];

  const lowered = content.toLowerCase();
  for (const phrase of aiPhrases) {
    if (lowered.includes(phrase)) {
      issues.push(`Contains AI-like phrase: ${phrase}`);
    }
  }

  const wordCount = estimateWordCount(content);
  const colonCount = countMatches(content, /:/g);
  const hyphenSeparatorCount = countMatches(content, /\s-\s/g);
  const colonPerThousandWords =
    wordCount > 0 ? (colonCount / wordCount) * 1000 : colonCount;
  const hyphenPerThousandWords =
    wordCount > 0
      ? (hyphenSeparatorCount / wordCount) * 1000
      : hyphenSeparatorCount;

  if (colonPerThousandWords > 4) {
    issues.push("Overuses colon-heavy sentence pattern");
  }
  if (hyphenPerThousandWords > 3) {
    issues.push("Overuses mid-sentence hyphen separators");
  }

  const openingParagraph = content
    .split(/\n\s*\n/)
    .find((paragraph) => paragraph.trim().length > 0)
    ?.trim()
    .toLowerCase() ?? "";
  const templatedOpeners = ["picture this:", "imagine this:", "let's dive in", "lets dive in"];
  if (templatedOpeners.some((opener) => openingParagraph.startsWith(opener))) {
    issues.push("Uses repetitive templated opening phrase");
  }

  const genericHeadings = getHeadings(content).filter((heading) =>
    /^(vorteile|best practices|fazit|warum es wichtig ist|nächste schritte|zusammenfassung|einleitung)$/i.test(
      heading,
    ),
  );
  if (genericHeadings.length > 0) {
    issues.push(`Uses generic headings: ${genericHeadings.join(", ")}`);
  }

  return issues;
}

function validateDraftHardRequirements(
  content: string,
  requirement: Requirement,
): string[] {
  const issues: string[] = [];
  const wordCount = estimateWordCount(content);
  const minimumWordCount = getMinimumWordCount(requirement);

  if (!hasFrontmatter(content)) {
    issues.push("Missing YAML frontmatter");
  }
  if (!hasHeadingStructure(content)) {
    issues.push("Insufficient section heading structure");
  }
  if (!hasKnownMdxComponents(content)) {
    issues.push("Unbalanced MDX component structure");
  }
  if (!hasBalancedCodeFences(content)) {
    issues.push("Unclosed code block");
  }
  if (hasAbruptEnding(content)) {
    issues.push("Draft appears to end abruptly");
  }
  if (wordCount < minimumWordCount) {
    issues.push(
      `Draft is below minimum depth (${wordCount}/${minimumWordCount} words)`,
    );
  }

  return issues;
}

function collectDraftStyleWarnings(content: string): string[] {
  const warnings: string[] = [];

  warnings.push(...runStyleChecks(content));

  const frontmatterAnalysis = analyzeFrontmatterStyle(content);
  warnings.push(...frontmatterAnalysis.softIssues);

  return warnings;
}

function buildRequirementSummary(requirement: Requirement) {
  return {
    title: requirement.title,
    refined_topic: requirement.refined_topic,
    refined_intent: requirement.refined_intent,
    audience: {
      level: requirement.audience.level,
      persona: requirement.audience.persona,
      pain_points: requirement.audience.pain_points.slice(0, 5),
    },
    seo: {
      primary_keyword: requirement.seo.primary_keyword,
      secondary_keywords: requirement.seo.secondary_keywords.slice(0, 4),
      search_intent: requirement.seo.search_intent,
    },
    core_sections: requirement.core_sections.slice(0, 5),
    key_angles: requirement.key_angles.slice(0, 4),
    tone: requirement.tone,
    constraints: requirement.constraints,
  };
}

function selectResearchPoints(results: ResearchResult[], maxItems: number) {
  const deduped = new Map<string, ResearchResult>();

  for (const result of results) {
    const key = `${normalizeUrl(result.url)}::${normalizeWhitespace(result.title).toLowerCase()}`;
    const existing = deduped.get(key);
    if (!existing || result.confidence > existing.confidence) {
      deduped.set(key, result);
    }
  }

  return [...deduped.values()]
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, maxItems)
    .map((result) => ({
      title: truncateText(result.title, 120),
      extracted_point: truncateText(result.extracted_point, 180),
    }));
}

function buildWritingInput(
  requirement: Requirement,
  idea: BlogIdea,
  state: ReturnType<typeof BlogAgentStateSchema.parse>,
  compact: boolean,
  structureVariant: StructureVariantConfig,
  recentBlogStructures: RecentBlogStructure[],
) {
  const status = state.research_status ?? "failed";
  const requirementSummary = buildRequirementSummary(requirement);
  const sharedInput = {
    structure_variant: structureVariant,
    recent_blog_structures: compact
      ? recentBlogStructures.slice(0, 3)
      : recentBlogStructures,
  };

  if (status === "valid") {
    return {
      mode: "research_backed" as const,
      requirement_summary: requirementSummary,
      idea,
      research_points: selectResearchPoints(state.research_results ?? [], compact ? 3 : 5),
      ...sharedInput,
      metadata: {
        author: "LohnAI Team",
        category: "Lohnabrechnung",
        featured: false,
      },
    };
  }

  return {
    mode: "safe_assumption" as const,
    requirement_summary: requirementSummary,
    idea,
    missing_points: state.research_validation?.missing_points?.slice(0, compact ? 4 : 6) ?? [],
    safe_research_points: selectResearchPoints(state.research_results ?? [], compact ? 1 : 2),
    ...sharedInput,
    metadata: {
      author: "LohnAI Team",
      category: "Lohnabrechnung",
      featured: false,
    },
  };
}

function buildSystemPrompt(mode: "research_backed" | "safe_assumption") {
  if (mode === "research_backed") {
    return `${prompts.writingPromptBase}\n${prompts.writingPromptResearchBacked}`;
  }

  return `${prompts.writingPromptBase}\n${prompts.writingPromptSafeAssumption}`;
}

function isLengthLimitError(message: string): boolean {
  const normalized = message.toLowerCase();
  return (
    normalized.includes("length limit was reached") ||
    normalized.includes("maximum context length") ||
    normalized.includes("token limit") ||
    normalized.includes("request timed out") ||
    normalized.includes("timed out") ||
    normalized.includes("timeout") ||
    normalized.includes("etimedout")
  );
}

function mergeContinuation(existing: string, continuation: string): string {
  const fragment = stripFrontmatter(normalizeDocumentSpacing(continuation));
  if (!fragment) {
    return existing;
  }

  return normalizeDocumentSpacing(`${existing.trim()}\n\n${fragment}`);
}

async function continueIncompleteDraft(
  existing: string,
  hardIssues: string[],
  input: ReturnType<typeof buildWritingInput>,
  prompt: string,
): Promise<string> {
  const response = await models.claude.invoke([
    new SystemMessage(
      `${prompt}\n\nRepair task: The MDX draft is incomplete. Return ONLY the missing continuation fragment in German. Do not repeat YAML frontmatter or existing sections. Continue naturally from the current ending and close any open section, list, table, or MDX component.`,
    ),
    new HumanMessage(
      JSON.stringify({
        current_year: new Date().getUTCFullYear(),
        incomplete_reasons: hardIssues,
        current_draft: existing,
        original_writing_input: input,
      }),
    ),
  ]);

  return mergeContinuation(existing, extractTextContent(response.content));
}

async function generateSingleDraft(
  idea: BlogIdea,
  ideaIndex: number,
  state: ReturnType<typeof BlogAgentStateSchema.parse>,
  structureVariant: StructureVariantConfig,
  recentBlogStructures: RecentBlogStructure[],
): Promise<Draft> {
  if (!state.requirement) {
    throw new Error("Missing requirement for writing generation");
  }

  let shouldUseCompactRetry = false;
  let lastError: unknown;
  let lastHardIssues: string[] = [];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const compact = shouldUseCompactRetry && attempt > 0;
    const input = buildWritingInput(
      state.requirement,
      idea,
      state,
      compact,
      structureVariant,
      recentBlogStructures,
    );
    const correctionHint = attempt > 0 && lastHardIssues.length > 0
      ? `\nFix these exact structure issues from previous draft: ${lastHardIssues.join(" | ")}\n`
      : "";
    const prompt = `${buildSystemPrompt(input.mode)}${correctionHint}`;

    try {
      const response = await models.claude.invoke([
        new SystemMessage(prompt),
        new HumanMessage(
          JSON.stringify({
            ...input,
            current_year: new Date().getUTCFullYear(),
          }),
        ),
      ]);

      const content = extractTextContent(response.content);
      let normalized = normalizeContentPostGeneration(
        normalizeDocumentSpacing(content),
      );
      let hardIssues = validateDraftHardRequirements(normalized, state.requirement);

      if (
        hardIssues.some((issue) =>
          issue.includes("minimum depth") || issue.includes("end abruptly"),
        )
      ) {
        normalized = normalizeContentPostGeneration(
          await continueIncompleteDraft(normalized, hardIssues, input, prompt),
        );
        hardIssues = validateDraftHardRequirements(normalized, state.requirement);
      }

      const frontmatterAnalysis = analyzeFrontmatterStyle(normalized);
      hardIssues.push(...frontmatterAnalysis.hardIssues);
      const styleWarnings = collectDraftStyleWarnings(normalized);
      if (hardIssues.length === 0) {
        return {
          idea_index: ideaIndex,
          idea_title: idea.title,
          format: "mdx",
          mode: input.mode,
          content: normalized,
          word_count_estimate: estimateWordCount(normalized),
          feedback: styleWarnings.length > 0 ? styleWarnings : undefined,
        };
      }

      lastHardIssues = hardIssues;
      lastError = new Error(`Draft hard validation failed: ${hardIssues.join("; ")}`);
      logger.warn("Writing draft validation failed", {
        ideaIndex,
        attempt: attempt + 1,
        compact,
        structureVariant: structureVariant.name,
        mdxBlocks: getMdxBlocks(normalized),
        hasTable: hasTable(normalized),
        hardIssues,
        styleWarnings,
        retryReason: "hard_validation",
      });
    } catch (error) {
      lastError = error;
      const details = normalizeProviderError(error, config.NODE_ENV !== "production");
      if (isLengthLimitError(details.message)) {
        shouldUseCompactRetry = true;
      }

      logger.error("Writing draft attempt failed", {
        ideaIndex,
        attempt: attempt + 1,
        compact,
        error: details.message,
        status: details.status,
        code: details.code,
        requestId: details.requestId,
        raw: details.raw,
      });
    }
  }

  const details = normalizeProviderError(lastError, config.NODE_ENV !== "production");
  throw new Error(`Writing draft failed for idea ${ideaIndex + 1}: ${details.message}`);
}

const writingAgent: GraphNode<typeof BlogAgentStateSchema> = async (
  state,
  _config,
) => {
  if (!state.requirement) {
    throw new Error("Missing requirement for writing generation");
  }

  const ideas = state.ideas ?? [];
  if (ideas.length === 0) {
    throw new Error("Missing ideas for writing generation");
  }

  const selectedIdeas = ideas.slice(0, DRAFT_COUNT);
  const drafts: Draft[] = [];
  const usedVariants = new Set<StructureVariant>();
  const recentBlogStructures = await getRecentBlogStructures();

  for (let i = 0; i < selectedIdeas.length; i += 1) {
    const structureVariant = selectStructureVariant(
      selectedIdeas[i],
      state.requirement,
      usedVariants,
    );
    const draft = await generateSingleDraft(
      selectedIdeas[i],
      i,
      state,
      structureVariant,
      recentBlogStructures,
    );
    usedVariants.add(structureVariant.name);
    drafts.push(draft);
  }

  return {
    drafts,
    iteration_count: (state.iteration_count ?? 0) + 1,
  };
};

export default writingAgent;
