# Clean README Quick Reference

Convention version: 1.0.0. The [specification](SPECIFICATION.md) is authoritative.

## Reading order

> Identity → value → first use → deeper guidance → community → credits

## Section catalog

| Order | Exact heading or block | Include |
| --- | --- | --- |
| 1 | Project header | Always: H1 → GitHub Repo Banner → optional badges → introduction → optional quick links. |
| 2 | 💎 Sponsors & Partners | When there is confirmed public sponsor or partner recognition. |
| 3 | ✨ Features | Always. |
| 4 | 🎬 Demo | Optionally, with a useful real asset or demonstration. |
| 5 | 🚀 Getting Started | Always: prerequisites → setup/adoption → first result. |
| 6 | 📖 Usage | Always: a representative task and expected result. |
| 7 | ⚙️ Configuration | When there is user configuration beyond minimal first setup. |
| 8 | 🚢 Deployment | When a supported operational or self-hosted deployment path exists. |
| 9 | 📚 Documentation | When deeper guides or references exist. |
| 10 | 🛠️ Development | When a contributor build, test, preview, or validation workflow exists. |
| 11 | 🤝 Contributing | Always; state the actual contribution policy. |
| 12 | 🐛 Issues & Support | Always; use real reporting and help channels. |
| 13 | 💖 Support the Project | Optionally, using confirmed support destinations. |
| 14 | 📋 Code of Conduct | When an applicable policy exists. |
| 15 | 📄 License | Always; identify the license or state that none is specified. |
| 16 | 👥 Authors & Contributors | Always; preserve accurate credits. |

The header is not an H2. Every other catalog heading uses `##` and its exact emoji/title. Omitted sections do not change the order of the rest. Use project-specific H3 subsections for detail. Never leave empty headings.

## Banner rules

- Generate with [GitHub Repo Banner](https://github.com/warengonzaga/github-repo-banner).
- Choose the theme from user preferences, existing branding, project purpose, audience, and relevant codebase context, in that order.
- Keep the actual project name, a concise subtitle, descriptive alt text, and readable contrast.
- Follow the service contract and encode values once with a URL builder.
- Use public assets only; never send secrets or private project content.
- Check the response and appearance. Disclose unavailable checks or service failures.
- Users can customize the design. Replace existing banners without duplication.

## Content decisions

| Situation | Do this |
| --- | --- |
| CLI or library | Show real installation and a minimal working example. |
| Application or bot | Include actual setup and supported deployment instructions. |
| Convention, skill, or documentation | Explain adoption and demonstrate application. |
| Fresh, unimplemented project | State its status and meaningful next action; label planned capabilities. |
| Existing README | Preserve useful content, warnings, attribution, and commitments while reorganizing. |
| No runtime or hosting | Omit unrelated installation or deployment boilerplate. |
| Existing sponsor and funding links | Credit the sponsor early; invite reader support near the end. |
| No license decision | State that no license is specified; never choose silently. |

## Final check

- Exact H2 titles, emojis, and catalog order.
- Required topics covered; applicable conditional sections present.
- Real commands, links, examples, and metadata.
- No empty headings, duplicate setup instructions, or fabricated facts.
- One readable generated banner; verification limits reported honestly.
- Existing policies, warnings, credits, and affected links preserved or updated.

See [complete examples and migration notes](examples/README.md) for application. The convention is usable manually today; an installable Clean README skill is a later implementation.
