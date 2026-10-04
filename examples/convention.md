# Clear Notes

![Clear Notes banner — Handoffs with context and a next step](<https://ghrb.waren.build/banner?header=Clear+Notes&subheader=Handoffs+with+context+and+a+next+step&bg=292524-665647&color=ffffff&subheadercolor=fef3c7&headerfont=DM+Sans&subheaderfont=Inter>)

Clear Notes is a small writing convention for teams that need useful handoffs between contributors.

> Fictional teaching fixture. The convention and maintainers below illustrate a documentation project; there is no separate tool or package. See the [fixture contract](README.md#teaching-fixtures).

## ✨ Features

- A consistent three-field handoff format.
- Clear separation between context, completed work, and the next action.
- Examples that can be applied in a document, issue, or team message.

## 🚀 Getting Started

No software installation is required. Choose an active task and write one sentence for each field, in this order:

1. **Context:** why the task matters and what the reader needs to know.
2. **Done:** what has actually been completed, with evidence when available.
3. **Next:** the immediate action and its agreed owner, or an explicit statement that ownership remains open.

Read the note once as if you were taking over the task. The first useful result is a handoff that tells you what happened and what to do next without another status meeting.

## 📖 Usage

For a documentation correction, an illustrative handoff could read:

```text
Context: The setup guide still names the previous configuration file.
Done: Updated the filename and checked both linked examples.
Next: The documentation reviewer checks the revised setup steps.
```

This is sample copy, not a claim that those changes occurred. In actual use, replace the statements with the task's facts and confirmed ownership.

### Writing rules

Keep the field names and order. Prefer concrete actions over vague status labels, and link existing evidence when it helps the next contributor.

If work is blocked, identify the unresolved dependency in `Next`. Do not assign a person who has not agreed to own the action.

### Reviewing a note

- Can the reader understand the task's purpose?
- Does `Done` distinguish completed work from intentions?
- Is `Next` specific enough to act on?

## 🤝 Contributing

The fictional maintainers welcome clearer examples and reports of ambiguous rules. Propose vocabulary changes with a before/after handoff so reviewers can assess their effect on readers.

Keep the convention small enough to apply manually. A tool proposal should explain what repeated problem it solves before adding automation.

## 🐛 Issues & Support

Use the [issue tracker (fixture)](https://example.org/clear-notes/issues) for rule questions and suggestions. Include a sanitized note that demonstrates the ambiguity; do not share private team discussions.

## 📄 License

This fixture assumes MIT. The [MIT license](../LICENSE) covers this example document. A real convention must state its own established licensing terms.

## 👥 Authors & Contributors

Created by the fictional Clear Notes maintainers, with community suggestions acknowledged in the project's actual records when applied to a real repository.
