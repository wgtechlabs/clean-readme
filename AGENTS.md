# Agent guidance

Clean README defines a reusable README convention for open source projects.
The convention comes first; a future skill will apply it. Do not add a skill,
plugin package, or release automation without an explicit request.

## Source of truth

- `SPECIFICATION.md` owns the section catalog, order, inclusion rules, heading
  emojis, banner requirements, and content rules.
- Start convention changes in the specification, then keep `README.md`,
  `QUICK-REFERENCE.md`, and affected files in `examples/` aligned.
- The repository's README must demonstrate its own convention. Other repository
  documents are not required to use the README section catalog.
- Use [GitHub Repo Banner](https://github.com/warengonzaga/github-repo-banner)
  for README headers. Respect its attribution and choose a theme from the
  project's purpose and existing branding; explicit user preferences take priority.
- Preserve accurate warnings, attribution, sponsor commitments, and useful links
  when migrating a README. Never invent capabilities, commands, sponsors, package
  availability, author identities, or licenses.
- Use clearly labeled fictional data in examples. Do not copy private project
  assets, credentials, customer data, or secrets into documentation or artifacts.

## Clean Workflow

This repository adopts [Clean Workflow](https://github.com/wgtechlabs/clean-workflow),
[Clean Commit](https://github.com/wgtechlabs/clean-commit),
[Clean Flow](https://github.com/wgtechlabs/clean-flow), and
[Clean Labels](https://github.com/wgtechlabs/clean-labels).

- Create short-lived branches from `dev` and target pull requests at `dev`.
  Use descriptive lowercase names such as `docs/clarify-section-rules`.
- Squash feature, documentation, and maintenance pull requests into `dev`.
  Promote `dev` to stable `main` with a regular merge commit.
- Do not directly commit to `main` or `dev` after repository initialization.
- Use Clean Commit for commits and pull request titles:
  `<emoji> <type>: <description>` or `<emoji> <type> (<scope>): <description>`.
  For breaking changes, put `!` after the type, before any scope. Only `new`,
  `update`, `remove`, and `security` allow `!`.
- Valid pairs are `📦 new`, `🔧 update`, `🗑️ remove`, `🔒 security`,
  `⚙️ setup`, `☕ chore`, `🧪 test`, `📖 docs`, and `🚀 release`.
  Start descriptions in lowercase, use present tense, and omit a final period.
  Keep the entire subject, including the emoji and any scope, at most 72 characters.
- Reuse existing Clean Labels. Use GitHub Labels Template (GHLT) for authorized
  label-template changes; do not perform destructive label migration by default.
- Preserve unrelated work. Respect the user's publication scope, and do not
  merge, publish a release, or bypass repository protections without authorization.

## Validation and handoff

Use Node.js 22 or newer. Install the locked development dependencies with
`npm ci`, then run `npm run lint` before completing documentation changes.
There is no application build or test suite in this documentation repository.

Inspect changed Markdown, local links, example accuracy, section ordering, and
banner rendering. Lint passing alone does not verify convention compliance or
external links. Report checks actually performed and any verification gaps.
Keep local APEX checkpoints and other temporary work out of commits.
