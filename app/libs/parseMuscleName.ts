export function parseMuscleName(raw: string) {
  const match = raw.match(/^(.*?)\s*\((.*?)\)$/);

  if (!match) {
    return {
      muscle: raw.trim(),
      heads: ["global"],
    };
  }

  const muscle = match[1].trim();
  const heads = match[2]
    .split(/,|;/)
    .map((h) => h.trim())
    .filter(Boolean);

  return { muscle, heads };
}
