import { mkdirSync, writeFileSync } from "node:fs";

// The single emoji most likely to make a stranger smile: a beaming face
// with smiling eyes — warm at first glance, universal across ages and
// backgrounds, no irony or in-joke, and instantly readable from a stranger.
// One character, four UTF-8 bytes — also the smallest possible entry,
// which wins the size tie-break.
const EMOJI = "😄";
const OUTPUT = "/output/entry.txt";

function validateEmoji(value: string): void {
  const chars = [...value];
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
  }
  if (value.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function buildEntry(): string {
  validateEmoji(EMOJI);
  return EMOJI;
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, buildEntry(), "utf8");
