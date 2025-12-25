/**
 * Convert a tag display name to a URL-safe slug.
 * E.g. "AI Coding" -> "ai-coding", "Claude 4" -> "claude-4"
 */
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}
