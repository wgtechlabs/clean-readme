# Contributing to Clean README

Thank you for helping make project READMEs clear and consistent. Improvements to
the convention, examples, accessibility, and documentation are welcome.

## Discuss a change

Search [existing issues](https://github.com/wgtechlabs/clean-readme/issues) first.
For a new convention rule or a change to the section catalog, open a proposal
with the reader's problem, a concrete example, and the suggested rule. Small
corrections can go straight to a pull request.

Follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all project interactions.

## Set up locally

Install Git and [Node.js](https://nodejs.org/) 22 or newer. Fork the repository if
you do not have write access, clone your fork, and configure this repository as
your `upstream` remote:

```bash
git remote add upstream https://github.com/wgtechlabs/clean-readme.git
git fetch upstream
git switch -c docs/clarify-section-rules upstream/dev
npm ci
```

If `upstream` already exists, verify it points to this repository instead of
adding it again. Maintainers can use `origin/dev` in place of `upstream/dev`.

## Edit the convention

`SPECIFICATION.md` is the source of truth. Make rule changes there first, then
update `QUICK-REFERENCE.md`, the repository's `README.md`, and relevant examples
to match. Examples should demonstrate practical choices and clearly identify
fictional projects or values.

Keep the shared section names, emojis, and order consistent. Explain when a
section applies instead of adding empty headings to every README. Preserve
accurate attribution and use GitHub Repo Banner for repository headers.

Do not introduce undocumented commands, fabricated project claims, private
assets, secrets, or a skill implementation as part of a convention-only change.

## Validate your changes

Run the same Markdown check used in CI:

```bash
npm run lint
```

Also review the rendered Markdown, inspect local links and heading anchors, and
check examples against the specification. For banner changes, confirm that the
image loads, its text is readable, and the required attribution is present.
Markdown lint does not validate the convention or prove that external links work.

## Open a pull request

We use [Clean Workflow](https://github.com/wgtechlabs/clean-workflow):

- **[Clean Flow](https://github.com/wgtechlabs/clean-flow):** branch from `dev`
  and target `dev`. Use a lowercase branch prefix such as `docs/`, `feature/`,
  or `chore/`. Contributions are squash merged into `dev`; stable changes move
  from `dev` to `main` through a regular merge commit.
  CI rejects pull requests into `main` unless they come from this repository's
  `dev` branch. Both branches require passing Markdown and Clean Flow checks.
- **[Clean Commit](https://github.com/wgtechlabs/clean-commit):** use
  `<emoji> <type>: <description>` or
  `<emoji> <type> (<scope>): <description>` for commits and pull request titles.
  Put `!` immediately after the type for a breaking change; only `new`, `update`,
  `remove`, and `security` allow it. Descriptions start in lowercase, use present
  tense, and have no final period. Keep the entire subject, including the emoji
  and any scope, at most 72 characters.
- **[Clean Labels](https://github.com/wgtechlabs/clean-labels):** maintainers
  triage work using the existing repository labels.

For example:

```text
📖 docs: clarify when to include configuration
📖 docs (examples): add a sponsored library example
⚙️ setup: update markdown validation
```

Explain the reader's problem, summarize the resulting guidance, link relevant
issues, and report your validation. Keep changes focused. Merging and releases
are maintainer actions and require authorization.

Contributions are provided under the project's [MIT License](LICENSE).
