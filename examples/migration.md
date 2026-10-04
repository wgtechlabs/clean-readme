# Migrating an Existing README

Adoption changes a document's organization while preserving its useful information. Read the [existing-project process](../SPECIFICATION.md#existing-projects) before editing.

The excerpts below use the fictional Harbor Weather fixture with an additional fictional sponsor and author. They are partial excerpts for comparison, **not complete conforming READMEs**. No script, sponsor relationship, or person is real.

## Before: useful facts in inconsistent locations

````markdown
# Harbor Weather

A daily weather bot for community channels.

## Install

Use Python 3.11+ and install this checkout:

```sh
python -m pip install -e .
```

## Hosting

Run only one scheduler instance. Multiple instances send duplicate forecasts.
Set WEATHER_WEBHOOK_URL through your host's secret mechanism.

## Thanks

Northstar Cooperative funds translation under a public acknowledgment agreement.
Original guide by Avery Example (fictional author).
````

## Inventory before rewriting

| Existing content | Destination | Preservation requirement |
| --- | --- | --- |
| Python version and installation | Getting Started | Keep the prerequisite before commands and verify the actual package metadata. |
| Single-instance warning | Deployment | Keep it prominent; do not lose it while shortening instructions. |
| Private webhook guidance | Usage / Deployment | Retain safe secret handling and document the actual setting. |
| Confirmed sponsor commitment | Sponsors & Partners | Preserve approved relationship wording and any required link or logo. |
| Original author | Authors & Contributors | Retain the documented attribution. |
| Links to `#hosting` | Deployment anchor | Update owned references or retain a compatibility anchor. |

Also inspect the real project license and other policy files. Reorganization does not authorize selecting a new license or inventing missing contribution policies.

## After: facts mapped to the convention

The full result must also include its generated banner and all required sections. This excerpt focuses only on the moved content:

````markdown
## 💎 Sponsors & Partners

Northstar Cooperative funds translation under a public acknowledgment agreement.

## 🚀 Getting Started

Use Python 3.11+ and a local checkout with the project's package metadata.
Create an isolated environment before installing the checkout.

```sh
python -m pip install -e .
```

<a id="hosting"></a>

## 🚢 Deployment

**Run only one scheduler instance.** Multiple instances send duplicate forecasts.
Set WEATHER_WEBHOOK_URL through your host's secret mechanism.

## 👥 Authors & Contributors

Original guide by Avery Example (fictional author).
````

## Links and anchors

GitHub's generated anchor for `## 🚢 Deployment` is `#-deployment`. Update owned links such as `README.md#hosting` to `README.md#-deployment`, then check them in GitHub's rendered document. An HTML compatibility anchor, shown above, can retain the old `#hosting` destination where external links may depend on it.

Other renderers may create different anchors. Inspect the target renderer instead of guessing. When you cannot inspect external references, report that limitation; do not claim every inbound link has been repaired.

## Review the migration

1. Compare the original and revised documents for lost warnings, credits, sponsor obligations, commands, and supported setup paths.
2. Check exact headings and section order against the [quick reference](../QUICK-REFERENCE.md).
3. Verify commands against the real project and distinguish executed checks from inspection alone.
4. Open the generated banner and rendered Markdown to check readability and navigation.
5. Report unresolved factual gaps and any intentional structural exceptions.

For a complete illustrative bot layout, see [Harbor Weather](application.md). A fixture demonstrates writing decisions; it does not replace verification in the target repository.
