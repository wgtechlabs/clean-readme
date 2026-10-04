# Clean README Examples

These examples demonstrate [Clean README 1.0.0](../SPECIFICATION.md). Each project sample is a complete illustrative README with the required sections and a deliberately selected set of conditional sections.

## Teaching fixtures

**All sample projects, package names, commands, APIs, maintainers, sponsor relationships, and funding arrangements below are fictional teaching fixtures.** They are not published or executable products. Do not install these names, execute their commands, or copy their identities into a real project. Commands and expected results illustrate the assumed contracts listed below; they have not been tested as software.

Links labeled **fixture** use the reserved `example.org` domain. They identify where a real project's verified destination belongs; they are not working project help, download, or funding services. Banner URLs use the actual GitHub Repo Banner service. Relative documentation and license links refer to files in this repository.

For real adoption, inspect the target project and replace every fixture-specific fact with verified evidence. A real README must not invent a package, command, channel, sponsor, license, or person to match an example.

## Choose an example

| Example | Assumed project contract | Sections demonstrated |
| --- | --- | --- |
| [CLI](cli.md) | Parcel Check is an unpublished Python 3.11+ CLI. Its assumed checkout has `pyproject.toml`, an entry point named `parcel-check`, and `unittest` checks. | Local installation, first command, output, optional configuration, contributor workflow. |
| [Library](library.md) | Interval Kit is an unpublished Python 3.11+ library. Its assumed checkout provides `interval_kit.overlaps` and `unittest` checks. | Local installation, API example, boundary behavior, no hosting or configuration. |
| [Application / bot](application.md) | Harbor Weather is an unpublished Python 3.11+ bot. Its assumed module supports `preview` and `run`; it reads the four documented environment variables and has `unittest` checks. | Required setup, optional settings, deployment, operational warning. |
| [Convention / documentation](convention.md) | Clear Notes is a fictional three-field handoff convention. All of its rules fit in the README; no runtime, separate reference, or validation tool exists. | Adoption and worked usage without invented installation or build steps. |
| [Sponsored project](sponsored.md) | Meadow Maps is a fictional trail-data guide. Its README contains the entire example guide. The fictional sponsor funds translation; a separate fictional maintainer fund pays for upkeep. | Public sponsor recognition near the top and voluntary maintainer support near the bottom. |

The five fixtures assume the MIT license for illustration and link the actual [MIT text](../LICENSE) governing these example documents. This does not select a license for any project adopting the convention. Each fixture explicitly identifies its fictional maintainers; none establishes a real attribution or relationship.

## Section selection

- All five examples include Features, Getting Started, Usage, Contributing, Issues & Support, License, and Authors & Contributors.
- The CLI and bot have optional settings, so they include Configuration. Only the bot has an operational hosting contract, so only it includes Deployment.
- The CLI, library, and bot assume a contributor validation workflow, so they include Development. The documentation fixtures do not invent one.
- The sponsored example includes both Sponsors & Partners and Support the Project. Using a company's service alone would not justify sponsor recognition.
- None has a separate demo, deeper documentation set, or conduct policy. Those conditional or optional sections are omitted. See the [repository README](../README.md) for a real documentation project with supporting guides.

## Existing README migration

The [migration guide](migration.md) shows how to reorganize an existing README while retaining an operational warning, sponsor credit, author attribution, and a legacy anchor. Its before/after snippets are partial excerpts, not complete conforming READMEs.

## What these examples establish

The samples teach section selection, order, naming, and content shape. They do not prove that an imagined command runs, that a fixture destination works, or that a fictional sponsor exists. Use the specification's [conformance checklist](../SPECIFICATION.md#conformance-checklist) and report actual verification separately when applying the convention to a real repository.
