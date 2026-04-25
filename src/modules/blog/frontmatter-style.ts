const HARD_TITLE_PATTERNS = [
  /\bthe\s+ultimate\s+guide\b/i,
  /\beverything\s+you\s+need\s+to\s+know\b/i,
  /\bcomplete\s+guide\b/i,
  /\bvs\.?\b.*:\s*which\s+is\s+best\b/i,
];

const SOFT_MARKETING_PATTERNS = [
  /\bbest\s+practices\b/i,
  /\btop\s+tips\b/i,
  /\bkey\s+strateg(?:y|ies)\b/i,
  /\bunlock\b/i,
  /\bmastering\b/i,
];

const GENERIC_HEADLINE_PATTERNS = [
  /\bmodern\s+teams\b/i,
  /\bsuccess\b/i,
  /\bgrowth\b/i,
  /\befficiency\b/i,
  /\bstreamline\b/i,
];

export interface ParsedFrontmatter {
  frontmatter: string;
  body: string;
  fields: Record<string, string>;
}

export interface FrontmatterStyleAnalysis {
  hardIssues: string[];
  softIssues: string[];
}

function stripWrappingQuotes(value: string): string {
  return value.replace(/^['\"]|['\"]$/g, "").trim();
}

export function splitFrontmatter(content: string): ParsedFrontmatter {
  const match = content.match(/^(---\n[\s\S]+?\n---\n?)([\s\S]*)$/);
  if (!match) {
    return {
      frontmatter: "",
      body: content,
      fields: {},
    };
  }

  const frontmatter = match[1] ?? "";
  const body = match[2] ?? "";
  const fields: Record<string, string> = {};
  const lines = frontmatter
    .replace(/^---\n/, "")
    .replace(/\n---\n?$/, "")
    .split("\n");

  for (const line of lines) {
    const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9_]*)\s*:\s*(.+)$/);
    if (!fieldMatch) {
      continue;
    }

    const key = fieldMatch[1] ?? "";
    const rawValue = fieldMatch[2] ?? "";
    fields[key] = stripWrappingQuotes(rawValue);
  }

  return {
    frontmatter,
    body,
    fields,
  };
}

function countMatches(text: string, regex: RegExp): number {
  return (text.match(regex) ?? []).length;
}

function isGenericStructure(value: string): boolean {
  const normalized = value.toLowerCase();
  return (
    normalized.includes(":") ||
    normalized.includes(" - ") ||
    GENERIC_HEADLINE_PATTERNS.some((pattern) => pattern.test(normalized))
  );
}

function normalizeRepeatedSeparators(value: string): string {
  return value
    .replace(/[–—]/g, "-")
    .replace(/\s+-\s+-\s+/g, " - ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function normalizeFrontmatterText(value: string): string {
  return normalizeRepeatedSeparators(value);
}

export function rebuildFrontmatter(
  fields: Record<string, string>,
  originalFrontmatter: string,
): string {
  if (!originalFrontmatter) {
    return "";
  }

  const lines = originalFrontmatter.split("\n");
  const nextLines = lines.map((line) => {
    const fieldMatch = line.match(/^([A-Za-z][A-Za-z0-9_]*)\s*:\s*(.+)$/);
    if (!fieldMatch) {
      return line;
    }

    const key = fieldMatch[1] ?? "";
    if (!(key in fields)) {
      return line;
    }

    const originalValue = fieldMatch[2] ?? "";
    const normalizedValue = fields[key] ?? "";
    const wrappedValue = /^['\"].*['\"]$/.test(originalValue)
      ? `${originalValue[0]}${normalizedValue}${originalValue[0]}`
      : normalizedValue;

    return `${key}: ${wrappedValue}`;
  });

  return nextLines.join("\n");
}

function analyzeHeadlineValue(
  label: "title" | "seoTitle" | "excerpt",
  value: string,
): FrontmatterStyleAnalysis {
  const hardIssues: string[] = [];
  const softIssues: string[] = [];
  const normalized = value.trim();
  const colonCount = countMatches(normalized, /:/g);
  const separatorCount = countMatches(normalized, /\s-\s/g);

  if (!normalized) {
    hardIssues.push(`Missing ${label} value`);
    return { hardIssues, softIssues };
  }

  if (/[–—]/.test(normalized)) {
    hardIssues.push(`${label} contains typography dash characters`);
  }

  if (colonCount > 1) {
    hardIssues.push(`${label} uses more than one colon`);
  } else if (label !== "excerpt" && colonCount === 1 && normalized.length < 42) {
    softIssues.push(`${label} uses a formulaic colon headline`);
  }

  if (separatorCount > 0) {
    hardIssues.push(`${label} uses spaced hyphen separators`);
  }

  for (const pattern of HARD_TITLE_PATTERNS) {
    if (pattern.test(normalized)) {
      hardIssues.push(`${label} uses a banned AI-style headline pattern`);
      break;
    }
  }

  const softMatches = SOFT_MARKETING_PATTERNS.filter((pattern) => pattern.test(normalized));
  if (softMatches.length > 0) {
    if (label === "excerpt" || isGenericStructure(normalized)) {
      hardIssues.push(`${label} uses generic marketing phrasing`);
    } else {
      softIssues.push(`${label} uses soft marketing phrasing`);
    }
  }

  return { hardIssues, softIssues };
}

export function analyzeFrontmatterStyle(content: string): FrontmatterStyleAnalysis {
  const { frontmatter, fields } = splitFrontmatter(content);
  const hardIssues: string[] = [];
  const softIssues: string[] = [];

  if (!frontmatter) {
    hardIssues.push("Missing YAML frontmatter");
    return { hardIssues, softIssues };
  }

  for (const fieldName of ["title", "seoTitle", "excerpt"] as const) {
    const value = fields[fieldName];
    const analysis = analyzeHeadlineValue(fieldName, value ?? "");
    hardIssues.push(...analysis.hardIssues);
    softIssues.push(...analysis.softIssues);
  }

  return { hardIssues, softIssues };
}

export function normalizeFrontmatterFields(content: string): string {
  const parsed = splitFrontmatter(content);
  if (!parsed.frontmatter) {
    return content;
  }

  const nextFields = { ...parsed.fields };
  for (const fieldName of ["title", "seoTitle", "excerpt"] as const) {
    if (nextFields[fieldName]) {
      nextFields[fieldName] = normalizeFrontmatterText(nextFields[fieldName]);
    }
  }

  return `${rebuildFrontmatter(nextFields, parsed.frontmatter)}${parsed.body}`;
}
