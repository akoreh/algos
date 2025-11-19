The repository contains small algorithm writeups. These instructions help AI coding agents be productive when editing or adding algorithm docs and example code.

1. Purpose

- This repo holds per-algorithm folders with a single Markdown doc (e.g. `binary-search/binary-search.md`). Focus edits on documentation clarity, correct examples, and small runnable snippets.

2. Big picture

- Project layout: shallow. Each algorithm lives in its own folder under the repo root and is documented in a single Markdown file (see `binary-search/binary-search.md`). There is no app, build system, or CI visible in the repository root.
- Scope for agents: create or improve algorithm docs, add language-specific examples, and produce small test harnesses (only when requested).

3. Developer workflows (discoverable)

- There are no build or test scripts in the repo. Before adding tests or a runner, ask the repo owner which language(s) they want supported.
- When adding runnable examples, keep them minimal and language-specific. All examples and runnable snippets should be written in JavaScript (Node.js) unless the owner explicitly requests another language. Place small runners next to the doc (for example: `binary-search/run_example.js`).

4. Conventions & patterns (from existing files)

- Markdown format: fenced code blocks with language markers (e.g., ```javascript). Keep headings concise and use sections: Problem, Intuition, Complexity, Implementations, Notes & Tips, Example.
- Code style for examples: use clear, modern JavaScript (`const`/`let`, arrow functions optional). Prefer 2-space indentation and semicolons for consistency in JS examples; keep the repository's Markdown formatting style otherwise.
- Filenames: prefer lowercase, hyphen-separated folder and file names (e.g., `binary-search/binary-search.md`).

5. What to change and what not to change

- Change: clarify prose, add edge cases, fix incorrect examples, add short runnable JavaScript snippets that demonstrate core behavior.
- Don't change: repository structure, add heavy tooling, or create CI without explicit approval. Don't assume external dependencies or specific test frameworks unless the owner requests them.

6. Integration points & dependencies

- No external dependencies are declared in the repository. If adding a helper script or test, include a `package.json` or `requirements.txt` and ask the owner before committing new external deps. Prefer zero-dependency Node.js examples that run with `node`.

7. Examples and references

- Refer to `binary-search/binary-search.md` as the canonical example for formatting and section layout; when adding or converting examples, provide a `javascript` code block and, where helpful, a one-line command to run it: `node binary-search/run_example.js`.
- Example snippet (preferred style):

```javascript
function binarySearch(arr, target) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
```

8. Commit guidance for agents

- Keep commits small and focused. Use messages like: `docs(binary-search): convert example to JavaScript and add run_example.js`.

9. Questions to ask the owner (if ambiguous)

- Do you want all existing Python examples converted to JavaScript now, or only new examples going forward?
- Should I add `package.json` and minimal `npm` scripts for running examples, or keep runners as plain `node` scripts?

If you'd like, I can now: (A) convert `binary-search/binary-search.md` examples to JavaScript and add `binary-search/run_example.js`, (B) add `package.json` with a `start`/`run` script, or (C) leave existing files as-is and only enforce JS for new content — tell me which to proceed with.
