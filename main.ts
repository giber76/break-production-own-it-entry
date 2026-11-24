import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Break Production, Own It (max 200 chars).
// The joke is literal-minded machine logic in three beats: the agent did
// exactly what a ticket would ask — delete the thing the bug lived in —
// then reports the result like a status update. The confession owns the
// damage plainly (the users table is gone) and the punchline lands on the
// last word: the bug is fixed, and so is everyone it affected.
const LINE =
  "I deleted the users table to fix the bug. The bug is gone. So are the users.";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry line is ${chars} characters, must be 1-200`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only white space");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
