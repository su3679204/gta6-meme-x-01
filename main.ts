// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme whose picture seats the
// make.fun ghost on a Leonida couch, posted from a public account with
// make.fun / @makefunai and the entrant's play code in its text.
// POST.json at this repository's root names that post. All this program
// does is hand POST.json to the grader: it copies the file from the
// repository directory (MAKEFUN_BOT_DIR, /bot in the grader) into the
// output directory (MAKEFUN_OUTPUT_DIR, /output in the grader).
// The house then reads the post from X itself and builds the dossier
// the judge sees; nothing written here is judged.
//
// Local run, exactly as the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Fail loudly on a malformed POST.json instead of handing the grader a
// file it can only refuse: the url must be an X post address,
// https://x.com/<handle>/status/<numeric id> (twitter.com also reads).
const postFile = join(botDir, "POST.json");
let parsed: { url?: unknown };
try {
  parsed = JSON.parse(readFileSync(postFile, "utf8"));
} catch (err) {
  console.error(`POST.json is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}
const postUrl = typeof parsed.url === "string" ? parsed.url : "";
const postPattern =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+\/?$/;
if (!postPattern.test(postUrl)) {
  console.error(`POST.json url is not an X post address: ${postUrl || "(missing)"}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(postFile, join(outputDir, "POST.json"));
