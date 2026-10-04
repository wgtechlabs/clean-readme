# Clean README Specification

Version: 1.0.0

Clean README is a convention for structuring open-source project READMEs. It defines a predictable reading order, exact section names and emojis, evidence-based content, and a project-specific header generated with [GitHub Repo Banner](https://github.com/warengonzaga/github-repo-banner).

This document is the authoritative convention. The [quick reference](QUICK-REFERENCE.md), [examples](examples/README.md), and future agent skills must agree with it. People can adopt the convention manually; a skill is not required.

## Core model

> Identity → value → first use → deeper guidance → community → credits

A reader should be able to understand the project, decide whether it fits, reach a useful result, and find help. Consistent structure makes those steps familiar across applications, libraries, CLIs, bots, skills, and documentation projects.

The convention standardizes the order and names of sections. Their content and the banner's visual theme come from the actual project.

## Rule levels and scope

- **MUST** is required for conformance.
- **SHOULD** is the recommended default; a concrete project need can justify a documented exception.
- **MAY** is an optional choice.

The catalog uses three inclusion levels:

- **Required:** address the topic in every project README, including an honest statement when an essential fact has not been decided.
- **Conditional:** include the section when its stated condition applies. Omit it when the condition does not apply.
- **Optional:** include it when useful, accurate, and supported by real content. Its position remains fixed when included.

These rules apply to a project's primary README. Translations SHOULD mirror its structure. Package READMEs in a monorepo MAY apply the same convention independently. Specifications, contribution guides, and other supporting documents can use their own headings.

Explicit user instructions and the target repository's binding requirements take precedence during adoption. Identify any intentional deviation instead of claiming full conformance. Installing an agent skill alone does not authorize repository edits, publication, or overriding another project's policies.

## Canonical section catalog

Use the following order. The header is an opening block, not an H2 section. All other names below are exact H2 headings, including their emoji and capitalization.

| Order | Heading or block | Inclusion | Purpose and inclusion condition |
| --- | --- | --- | --- |
| 1 | Project header | Required | Identify the project and explain its purpose and audience. |
| 2 | 💎 Sponsors & Partners | Conditional | Recognize a confirmed project sponsorship or partnership that should be credited publicly. |
| 3 | ✨ Features | Required | Explain the project's actual capabilities or what a convention/resource provides. |
| 4 | 🎬 Demo | Optional | Show an available screenshot, recording, live demo, or useful visual example. |
| 5 | 🚀 Getting Started | Required | Take a new reader from prerequisites to the first usable setup or adoption. |
| 6 | 📖 Usage | Required | Show a representative application of the project and its expected result. |
| 7 | ⚙️ Configuration | Conditional | Explain user-facing configuration beyond the essential first-use setup. |
| 8 | 🚢 Deployment | Conditional | Explain a supported self-hosted or operational deployment path. |
| 9 | 📚 Documentation | Conditional | Provide a directory when deeper guides or reference documents exist. |
| 10 | 🛠️ Development | Conditional | Explain a contributor build, test, preview, or validation workflow when one exists. |
| 11 | 🤝 Contributing | Required | State the actual contribution policy and how to participate. |
| 12 | 🐛 Issues & Support | Required | Direct readers to verified reporting and help channels. |
| 13 | 💖 Support the Project | Optional | Invite voluntary support through confirmed maintainer or project destinations. |
| 14 | 📋 Code of Conduct | Conditional | Link the code of conduct when an applicable policy exists. |
| 15 | 📄 License | Required | Identify the actual license and link its text, or state that none is specified. |
| 16 | 👥 Authors & Contributors | Required | Credit the documented authors, organization, and contributors. |

Omitting a conditional or optional section MUST NOT change the relative order of the remaining sections. Do not number the visible headings. Do not include empty headings, unused placeholders, or copied sections that do not apply.

## Header and heading rules

The opening block MUST use this sequence:

1. One H1 containing the project's actual name.
2. One GitHub Repo Banner image with descriptive alt text.
3. Relevant badges, if used.
4. A concise introduction explaining what the project does and who it is for.
5. Optional useful links, a primary action, or a contents list.

The banner's attribution comment MAY immediately follow the image. Badges and quick links are optional; they MUST point to real destinations and accurately describe current status. Do not add a passing-build badge before the workflow exists or an install badge before a package is published.

H2 headings MUST use the catalog's exact emoji and title. Do not substitute synonyms such as `Quick Start` for `🚀 Getting Started`. H3 and deeper headings MAY vary by project and SHOULD use plain text without additional decorative emojis.

Place project-specific topics under the closest catalog section: command reference under Usage, troubleshooting under Issues & Support, and architecture or a technical stack under Development. A long reference SHOULD live in a linked document. If a project explicitly requires a new top-level section, preserve the requirement and report it as an extension to the convention.

A custom contents list is optional. If present, it MUST contain only included headings, with links verified against the target Markdown renderer. Account for changed anchors when adopting the emoji headings.

## Banner convention

Every conforming README MUST include a header made with GitHub Repo Banner. Use the existing [service](https://ghrb.waren.build) or a user-provided deployment of that project. Do not build a replacement renderer as part of README generation.

### Choose a project-specific theme

Use these inputs, in order:

1. Explicit user design choices.
2. Established project branding, approved logos, colors, and assets.
3. The project's purpose, intended audience, and product context.
4. Relevant codebase or ecosystem cues when stronger branding evidence is absent.

Generate a reasonable first design without requiring a design questionnaire. Choose a readable palette, appropriate fonts, the actual project name, and a concise purpose-based subtitle. A library's implementation language alone need not determine its identity. Users MAY customize the theme later; there is no mandatory universal palette or font.

### Build and validate

- Follow the generator's current documented service contract. Construct parameters with a standard URL builder and encode each raw value once.
- Keep the title and subtitle within supported limits. Never silently truncate a project name.
- Use only public, suitable assets. Do not send secrets, private code, credentials, private URLs, or signed asset URLs to a public banner service.
- Use descriptive alt text; the title and introduction MUST still make sense if the image cannot load.
- A generated SVG URL or a saved export from the generator MAY be embedded. Saved assets SHOULD have a recorded generator URL so the design is reproducible.
- A visible generator watermark is optional. Follow the generator's attribution requirements for the selected options.
- Check the response and visually inspect the banner when tools are available. Check text clipping, contrast, asset/font fallbacks, and appearance at a typical README width. HTTP success alone is not visual verification.
- If service access or visual inspection is unavailable, report the limitation. Preserve a working existing banner when appropriate; do not claim a failed or unverified banner is fully checked.

## Section guidance

### 💎 Sponsors & Partners

Place recognition early, after the header. Use confirmed names, relationships, tiers, logos, and approved links. Do not infer sponsorship from a dependency, deployment platform, integration, or an official-extension badge. Preserve existing acknowledgment commitments when migrating a README.

This section recognizes an existing relationship. Reader donations and maintainer funding belong in Support the Project. A project MAY include both sections.

### ✨ Features

Use a short, scannable list of meaningful capabilities or benefits. Describe what exists. For a convention, explain the rules or guidance it supplies; for a collection, explain its contents and selection purpose. Label planned work clearly and avoid presenting aspirations as available functionality.

### 🎬 Demo

Use a real, relevant asset or reachable demonstration. Give images descriptive alt text and explain what the reader is seeing. A code example can live under Usage without requiring a separate Demo section. Omit this section when no useful demonstration is available.

### 🚀 Getting Started

Include the prerequisites that actually affect first use, then one recommended path through installation or adoption, minimal setup, and a useful confirmation. Put prerequisites before commands that need them. Name alternative paths briefly and link to their instructions.

For a CLI, show a verified installation and first command. For a library, show installation and a minimal integration. For a convention or skill, show adoption and first application. An early-stage project without a runnable implementation MUST state its status and provide the next meaningful action instead of inventing commands.

### 📖 Usage

Show a representative task after setup and explain its expected result. Reuse actual APIs, commands, file formats, and examples from the project. Getting Started establishes first use; Usage explains how to apply the project. Do not repeat the complete installation sequence here.

For a documentation-only project, show how a reader uses the guidance. Keep long command/API catalogs in supporting documentation when that improves navigation.

### ⚙️ Configuration

Include this when users can configure behavior beyond the minimal setup. Identify names, purpose, required versus optional settings, and actual defaults. Link an existing sample configuration where available. Use obvious placeholder values for credentials; never real credentials.

### 🚢 Deployment

Include supported operational or self-hosting instructions when relevant. Distinguish a recommended path from alternatives and describe required services or external accounts. Do not invent deployment templates, hosting support, or production-readiness claims. A package installation alone does not require this section.

### 📚 Documentation

Link existing guides with short descriptions so readers know where to go next. Include specifications, API references, tutorials, changelogs, or migration guides as appropriate. Do not create links to documents that have not been written.

### 🛠️ Development

Provide the actual contributor setup and available validation commands. Include a concise architecture explanation or technical stack only when it helps contributors. Do not invent a test command for a project without tests. A documentation repository can show its Markdown validation workflow here.

### 🤝 Contributing

State whether and how contributions are accepted. Link the contributing guide if it exists. Use the repository's real branching and review policy; a README generator MUST NOT impose Clean Flow merely because it is generating a Clean README. Projects accepting feedback but not code contributions can say so directly.

### 🐛 Issues & Support

Provide the actual issue, discussion, or help routes and explain what belongs in each. A short troubleshooting subsection MAY address common verified problems. Link an existing private security-reporting policy when applicable. Do not invent a contact address, enable a community channel, or promise response times during README generation.

### 💖 Support the Project

Use verified, intended funding destinations or other meaningful ways to support the project. Identify referral links when applicable. Do not copy an example maintainer's personal funding accounts into another project or imply a sponsorship relationship from a donation request.

### 📋 Code of Conduct

Link the actual applicable policy. Omit this section when none exists. Creating a policy and selecting its reporting contact are separate project decisions; do not invent them to fill the section.

### 📄 License

Read the license file and relevant package/repository metadata. Use the exact established license and a link to its text. Do not infer the license from the implementation language, a neighboring project, or a copied template. If it is undecided, state that no license has been specified and surface the decision to the maintainer. Conflicting license evidence requires clarification.

### 👥 Authors & Contributors

Preserve accurate author and organization attribution from the project. Contributor links or portraits are optional and MUST reference the correct repository. A maintainer-provided personal signature MAY appear after the credits; it MUST NOT be automatically copied to unrelated projects.

## Adoption process

### Fresh projects

1. Read the brief and any available project files. Identify the actual purpose, audience, status, and owner-provided facts.
2. Select the required sections and evaluate each conditional or optional section.
3. Draft the content using confirmed facts. Mark unimplemented capabilities as planned; report missing essentials without fabricating them.
4. Generate a context-appropriate GitHub Repo Banner.
5. Validate the document, its examples and links, and the banner.

### Existing projects

1. Read the current README, instructions, manifests, scripts, source examples, guides, license, and branding.
2. Map useful content to the catalog. Preserve important warnings, attribution, supported workflows, sponsor commitments, and required disclosures.
3. Verify commands and claims against current project evidence. Resolve inconsistencies rather than blindly copying outdated prose.
4. Reorganize the document and replace the existing header banner once. Keep project-specific detail under the appropriate sections or linked guides.
5. Check affected local links and anchors. Preserve compatibility where needed, or update references and disclose external-anchor changes that cannot be verified.
6. Compare the result with the original so no essential information is lost. Validate and report any remaining uncertainty.

README adoption does not authorize unrelated code changes, deleting supporting documents, changing a project's license, configuring services, committing, or pushing. Respect the scope the user actually requested.

## Decision examples

| Evidence | Decision |
| --- | --- |
| A package has no deployable service | Omit Deployment; show installation under Getting Started. |
| A bot has documented hosting instructions | Include Deployment and its verified prerequisites. |
| A project has an acknowledged commercial sponsor and donation links | Include both Sponsors & Partners and Support the Project. |
| A project only uses a company's API | Do not label that company a sponsor. |
| A specification has no runtime | Explain adoption under Getting Started and a worked example under Usage. |
| The README links a nonexistent guide | Remove or repair the link using available evidence; do not claim the guide exists. |
| A fresh project has no license decision | Keep License and state that no license is specified. |
| A project already has a banner | Update or replace it; do not add a duplicate banner. |

## Correct and incorrect structure

A library without hosting, sponsors, or extra configuration can omit those sections while keeping the catalog order:

```markdown
# Project Name

<!-- Generated project banner, optional badges, and introduction. -->

## ✨ Features
## 🚀 Getting Started
## 📖 Usage
## 🤝 Contributing
## 🐛 Issues & Support
## 📄 License
## 👥 Authors & Contributors
```

This is a structural illustration, not a finished README. Published READMEs need meaningful content under included headings.

Common violations include `## Features` without its emoji, `## ⚡ Quick Start` replacing the canonical heading, License preceding Usage, blank Demo or Deployment sections, and a sponsor card based only on a dependency.

## Conformance checklist

- [ ] One project-name H1 and one intended GitHub Repo Banner header.
- [ ] Included H2 headings use the exact catalog names, emojis, and relative order.
- [ ] Every required topic is addressed; conditional sections match project evidence.
- [ ] No empty sections, unintended placeholders, invented claims, or exposed credentials.
- [ ] Getting Started offers a complete, relevant first-use or adoption path.
- [ ] Usage examples and documented commands match the project.
- [ ] Links, assets, and affected anchors have been checked to the available extent.
- [ ] Sponsor recognition and reader funding are accurately distinguished.
- [ ] License, attribution, and important existing guidance are preserved.
- [ ] Banner response and visual appearance are verified, or the exact limitation is reported.

Structural checks cannot establish that every claim is true. Report structural conformance separately from commands executed, external links checked, and visual inspection performed.

## Versioning and future tools

The specification version identifies the convention. A change to mandatory headings, order, or inclusion rules can require README migration and SHOULD receive a major version change. Backward-compatible guidance or additional examples can use minor or patch updates as appropriate.

Future agent skills MUST derive their rules from this specification, identify the supported convention version, inspect the target project's evidence, and support both fresh generation and existing-README adoption. They SHOULD bundle the essential rules for independent use and be updated alongside the specification. Clean Workflow integration can consume that skill without maintaining a competing convention.

No installable Clean README skill or automated conformance validator is provided by this initial convention publication.
