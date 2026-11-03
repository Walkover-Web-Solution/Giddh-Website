#!/usr/bin/env node
// Fails when code paths changed against the base branch but STATUS.md did not,
// unless a commit message on the branch contains "[no status]".
// Always lists commits that touched code since STATUS.md's "Reviewed up to commit" hash.
//
// Base branch: STATUS_BASE_BRANCH, else GITHUB_BASE_REF (set on pull_request runs), else "web".
// Locally, uncommitted and untracked files count as changes too.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const STATUS_FILE = "STATUS.md";
const SKIP_MARKER = "[no status]";

// Feature, screen, rule and config paths. Blog posts (`_posts/`) and CMS media
// (`public/uploads/`, `public/img/`) are content, and Decap CMS commits them to `main`
// without a human in the loop, so they are deliberately not listed.
const CODE_PATHS = [
  "src/",
  "public/js/",
  "public/admin/",
  "public/_redirects",
  "public/_headers",
  "public/sitemap.xml",
  "package.json",
  "next.config.js",
  "config.js",
  "jsconfig.json",
];

const git = (...args) =>
  execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

const tryGit = (...args) => {
  try {
    return git(...args);
  } catch {
    return null;
  }
};

const lines = (text) => (text ? text.split("\n").filter(Boolean) : []);

const isCodePath = (file) =>
  CODE_PATHS.some((p) => (p.endsWith("/") ? file.startsWith(p) : file === p));

function resolveBase() {
  const name = process.env.STATUS_BASE_BRANCH || process.env.GITHUB_BASE_REF || "web";
  for (const ref of [`origin/${name}`, name]) {
    if (tryGit("rev-parse", "--verify", "--quiet", `${ref}^{commit}`)) return { name, ref };
  }
  return { name, ref: null };
}

function reviewedHash() {
  if (!existsSync(STATUS_FILE)) return null;
  const match = readFileSync(STATUS_FILE, "utf8").match(
    /\*\*Reviewed up to commit:\*\*\s*`([0-9a-f]{7,40})`/i
  );
  return match ? match[1] : null;
}

function listCommitsSinceReview() {
  const hash = reviewedHash();
  console.log("");
  if (!hash) {
    console.log(`! ${STATUS_FILE} has no "**Reviewed up to commit:** \`<hash>\`" header.`);
    return;
  }
  if (!tryGit("rev-parse", "--verify", "--quiet", `${hash}^{commit}`)) {
    console.log(`! Reviewed commit ${hash} is not in this clone (shallow fetch, or a bad hash).`);
    return;
  }
  const commits = lines(
    tryGit("log", "--no-merges", "--format=%h %ad %an: %s", "--date=short", `${hash}..HEAD`, "--", ...CODE_PATHS)
  );
  if (commits.length === 0) {
    console.log(`Commits touching code since reviewed commit ${hash}: none.`);
    return;
  }
  console.log(`Commits touching code since reviewed commit ${hash} (${commits.length}); check ${STATUS_FILE} covers them:`);
  for (const c of commits) console.log(`  ${c}`);
}

function main() {
  if (!tryGit("rev-parse", "--git-dir")) {
    console.error("status-check: not a git repository.");
    process.exit(2);
  }

  const base = resolveBase();
  if (!base.ref) {
    console.error(`status-check: base branch "${base.name}" not found. Fetch it (CI needs fetch-depth: 0).`);
    listCommitsSinceReview();
    process.exit(2);
  }
  const mergeBase = git("merge-base", base.ref, "HEAD");

  const changed = new Set([
    ...lines(git("diff", "--name-only", mergeBase)),
    ...lines(git("ls-files", "--others", "--exclude-standard")),
  ]);
  const codeChanges = [...changed].filter(isCodePath).sort();
  const statusChanged = changed.has(STATUS_FILE);
  const messages = git("log", "--format=%B", `${mergeBase}..HEAD`);
  const skipped = messages.toLowerCase().includes(SKIP_MARKER);

  console.log(`Base: ${base.ref} (merge-base ${mergeBase.slice(0, 8)})`);
  console.log(`Code files changed: ${codeChanges.length}`);
  for (const f of codeChanges) console.log(`  ${f}`);
  console.log(`${STATUS_FILE} changed: ${statusChanged ? "yes" : "no"}`);

  listCommitsSinceReview();
  console.log("");

  if (codeChanges.length === 0 || statusChanged) {
    console.log("status-check: OK");
    return;
  }
  if (skipped) {
    console.log(`status-check: OK (a commit message contains "${SKIP_MARKER}")`);
    return;
  }
  console.error(
    `status-check: FAILED. Code changed but ${STATUS_FILE} did not. Update the affected row, add a ` +
      `change-log line and move "Reviewed up to commit", or put "${SKIP_MARKER}" in a commit message ` +
      `if the change has no status effect.`
  );
  process.exit(1);
}

main();
