# Clean README

![Clean README banner — Clear structure. A better first impression.](<https://ghrb.waren.build/banner?header=%21%5Bmarkdown%5D%28light%29+Clean+README&subheader=Clear+structure.+A+better+first+impression.&bg=102B27-187864&color=FFFFFF&subheadercolor=D6F1E5&headerfont=Inter&subheaderfont=Inter&support=true&watermarkpos=bottom-right>)
<!-- Created with GitHub Repo Banner by Waren Gonzaga: https://ghrb.waren.build -->

[![License: MIT](https://img.shields.io/badge/license-MIT-187864)](LICENSE)
[![Convention: 1.0.0](https://img.shields.io/badge/convention-1.0.0-187864)](SPECIFICATION.md)

**Clean README** is a convention for clear, consistent open-source project READMEs. It gives maintainers and AI assistants a predefined section order, recognizable emoji headings, and project-specific headers made with [GitHub Repo Banner](https://github.com/warengonzaga/github-repo-banner).

Use it for a fresh project or to bring an existing README into a familiar structure while preserving the project's identity and important guidance.

[Specification](SPECIFICATION.md) · [Quick reference](QUICK-REFERENCE.md) · [Examples](examples/README.md)

## ✨ Features

- **A defined reading order:** introduce the project, show its value, guide first use, then explain deeper details and community participation.
- **Exact section names and emojis:** readers know where to find setup, usage, support, and credits.
- **Sections selected by context:** required topics stay consistent; configuration, deployment, demos, and sponsorship appear when appropriate.
- **Context-driven headers:** banner colors, typography, and copy reflect the project's purpose, branding, and audience.
- **Practical adoption guidance:** apply the same convention to apps, libraries, CLIs, bots, skills, and documentation projects.
- **Evidence-based writing:** use real commands and project facts; preserve warnings, licensing, attribution, and sponsor commitments.

## 🚀 Getting Started

No installation is needed to use the convention manually.

1. Read the [section catalog](QUICK-REFERENCE.md#section-catalog).
2. Inspect your project's existing README, scripts, examples, license, and branding.
3. Keep the required sections and include conditional sections that match the project.
4. Generate a header with [GitHub Repo Banner](https://ghrb.waren.build), using the project's context to choose its theme.
5. Write the content, then use the [conformance checklist](SPECIFICATION.md#conformance-checklist).

For an existing README, follow the [migration walkthrough](examples/migration.md) and check links affected by renamed headings. For a new project, describe its actual status and clearly label planned capabilities.

## 📖 Usage

### The core model

> Identity → value → first use → deeper guidance → community → credits

The [complete catalog](SPECIFICATION.md#canonical-section-catalog) defines 16 ordered positions, including the opening header. A small project can use fewer sections when conditional and optional topics do not apply.

For example, a library without hosting or sponsors starts with its title, banner, introduction, and features; guides installation and usage; then closes with contribution guidance, support, license, and credits. The [library example](examples/library.md) shows that structure with content.

### Choose sections from evidence

| Project context | Apply the convention |
| --- | --- |
| A bot has a supported hosting path | Include `🚢 Deployment`. |
| A project has user-facing settings | Include `⚙️ Configuration` when they extend beyond minimal first setup. |
| A sponsor is publicly acknowledged | Include `💎 Sponsors & Partners` near the introduction. |
| Maintainers accept voluntary funding | Optionally include `💖 Support the Project` near the end. |
| A convention has no runtime | Explain adoption under `🚀 Getting Started` and application under `📖 Usage`. |

Keep the exact H2 names, emojis, and relative order. Place project-specific detail in H3 subsections or linked guides.

### For AI assistants

Ask an assistant to read this repository's specification and apply it to your project, preserving important existing information. The convention is the source of truth for both manual and assisted adoption.

An installable Clean README skill and its Clean Workflow integration are planned follow-up work. This repository currently provides the convention and examples; there are no skill installation commands yet.

## 📚 Documentation

- [Full specification](SPECIFICATION.md): mandatory rules, section definitions, banner guidance, adoption, and edge cases.
- [Quick reference](QUICK-REFERENCE.md): section order and a compact checklist.
- [Example gallery](examples/README.md): complete teaching examples for different project types.
- [Migration walkthrough](examples/migration.md): preserve existing content while adopting the structure.
- [Clean Workflow](https://github.com/wgtechlabs/clean-workflow): the wider family of development conventions and skills.

## 🛠️ Development

This is a documentation project. To validate changes locally, use Node.js 22 or newer and npm:

```sh
git clone https://github.com/wgtechlabs/clean-readme.git
cd clean-readme
npm ci
npm run lint
```

Markdown lint checks run in GitHub Actions. They check Markdown formatting; they do not establish factual accuracy, section conformance, working installation commands, or banner appearance. Review those against the specification before submitting changes.

## 🤝 Contributing

Proposals, clearer examples, and corrections are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

This repository follows [Clean Flow](https://github.com/wgtechlabs/clean-flow), [Clean Commit](https://github.com/wgtechlabs/clean-commit), and [Clean Labels](https://github.com/wgtechlabs/clean-labels). Create work branches from `dev` and target pull requests at `dev`.

## 🐛 Issues & Support

Search [existing issues](https://github.com/wgtechlabs/clean-readme/issues) before opening a [convention issue or proposal](https://github.com/wgtechlabs/clean-readme/issues/new/choose). Include the relevant section and an example of the ambiguity or improvement.

For questions about applying the convention, open an issue describing the project type and the decision you need help with. Avoid including credentials or private project material.

## 📋 Code of Conduct

Participation is covered by the [Code of Conduct](CODE_OF_CONDUCT.md).

## 📄 License

Clean README is licensed under the [MIT License](LICENSE).

## 👥 Authors & Contributors

Created by **[Waren Gonzaga](https://github.com/warengonzaga)** under **[WG Technology Labs](https://github.com/wgtechlabs)**, with contributions from the [community](https://github.com/wgtechlabs/clean-readme/graphs/contributors).
