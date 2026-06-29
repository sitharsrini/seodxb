// Clamp a page <title> to a SERP-safe length (~60 chars) without losing the
// front-loaded keyword. Prefers cutting at a branding separator (" | " or
// " - "), but falls back to a word boundary when a clean cut would waste too
// much of the available space. HTML entities (&amp;) count as one character.
// Used by both the prerenderer (raw HTML) and React Helmet (rendered) so the
// title is identical for crawlers and for Google's JavaScript render.

function measure(s: string): number {
  return s.replace(/&amp;/g, "&").replace(/&[a-z]+;/g, "x").length;
}

export function clampTitle(title: string, max = 60): string {
  if (measure(title) <= max) return title;

  const seps = [...title.matchAll(/\s[|–-]\s/g)]
    .map((m) => m.index as number)
    .filter((i) => measure(title.slice(0, i)) <= max);
  const boundaryBest = seps.length ? title.slice(0, seps[seps.length - 1]).trim() : "";

  const slice = title.slice(0, max + 1);
  const sp = slice.lastIndexOf(" ");
  const wordBest = (sp > 20 ? slice.slice(0, sp) : title.slice(0, max))
    .replace(/\s*&(amp;)?\s*$/i, "")
    .replace(/[\s|–:-]+$/, "")
    .replace(/\s+(and|or|with|to|for|the|a|of|in|on|your)$/i, "")
    .trim();

  // Favour the clean separator cut unless it discards more than ~14 chars of
  // usable title text, in which case keep more via the word-boundary cut.
  if (boundaryBest && measure(wordBest) - measure(boundaryBest) <= 14) return boundaryBest;
  return wordBest || boundaryBest;
}
