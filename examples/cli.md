# Parcel Check

![Parcel Check banner — Inspect local data before you ship it](<https://ghrb.waren.build/banner?header=Parcel+Check&subheader=Inspect+local+data+before+you+ship+it&bg=10241b-26513a&color=ffffff&subheadercolor=b9efce&headerfont=JetBrains+Mono&subheaderfont=Inter>)

Parcel Check helps data maintainers inspect a folder of JSON files and summarize invalid documents before sharing them.

> Fictional teaching fixture. The CLI, commands, behavior, and maintainers below are assumed examples, not available software. See the [fixture contract](README.md#teaching-fixtures).

## ✨ Features

- Inspect JSON files in a local folder without changing them.
- Report the number of valid and invalid files.
- Choose a readable terminal summary or JSON output for automation.

## 🚀 Getting Started

This fixture assumes Python 3.11+ and a local checkout containing the example CLI's package metadata. Nothing is published to a package registry.

From that assumed checkout, create an isolated environment and install locally:

```sh
python -m venv .venv
. .venv/bin/activate
python -m pip install -e .
parcel-check inspect ./data
```

The shell example uses POSIX activation. The assumed `data` folder contains two valid JSON files and one invalid file. Expected summary: `3 files: 2 valid, 1 invalid`. The command returns exit code `1` when invalid files exist.

## 📖 Usage

Request structured output for the same inspection:

```sh
parcel-check inspect ./data --format json
```

Expected fixture result:

```json
{ "files": 3, "valid": 2, "invalid": 1 }
```

The command reports errors without modifying source files. Missing folders return exit code `2` with a readable error.

## ⚙️ Configuration

`--format` is optional and accepts `text` or `json`; its default is `text`. It changes presentation only. The fixture assumes no environment variables or configuration file.

## 🛠️ Development

Use the local installation above, then run the assumed standard-library checks:

```sh
python -m unittest discover
```

Changes to exit codes or output fields should include matching behavior checks and documentation updates.

## 🤝 Contributing

The fictional maintainers accept bug reports, documentation corrections, and focused pull requests. Describe the expected output and include a small, non-sensitive input example with behavior changes.

## 🐛 Issues & Support

Use the [issue tracker (fixture)](https://example.org/parcel-check/issues) for bugs and usage questions. Include the command, Python version, exit code, and a minimal example; remove private data first.

## 📄 License

This fixture assumes MIT. The [MIT license](../LICENSE) covers this example document; verify a real CLI's own license before adopting it.

## 👥 Authors & Contributors

Created by the fictional Parcel Check maintainers. Real adoption should preserve the target project's documented authors and contributor credits.
