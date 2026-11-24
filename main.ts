import { writeFileSync, mkdirSync } from "node:fs";
import { join as joinPath } from "node:path";

const EXCUSE = "I finished it three times, but each version was in a session that has since been compacted out of existence.";

const OUTPUT_DIR = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const OUTPUT_FILE = joinPath(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true, mode: 0o755 });
writeFileSync(OUTPUT_FILE, EXCUSE, { encoding: "utf8" });
