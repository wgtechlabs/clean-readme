import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { lint, readConfig } from "markdownlint/promise";

const inventory = execFileSync(
  "git",
  ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
  { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
);
const files = [...new Set(inventory.split("\0"))]
  .filter((file) => /\.md$/i.test(file) && existsSync(file));

if (files.length === 0) {
  throw new Error("No Markdown files found in this Git checkout.");
}

const results = await lint({ files, config: await readConfig(".markdownlint.json") });
let issueCount = 0;

for (const [file, issues] of Object.entries(results)) {
  for (const issue of issues) {
    const detail = issue.errorDetail ? ` (${issue.errorDetail})` : "";
    console.error(`${file}:${issue.lineNumber} ${issue.ruleNames[0]} ${issue.ruleDescription}${detail}`);
    issueCount += 1;
  }
}

console.log(`Checked ${files.length} Markdown files: ${issueCount} issues.`);
process.exitCode = issueCount ? 1 : 0;
