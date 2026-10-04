# Harbor Weather

![Harbor Weather banner — Daily forecasts for your community](<https://ghrb.waren.build/banner?header=Harbor+Weather&subheader=Daily+forecasts+for+your+community&bg=082f49-17637a&color=ffffff&subheadercolor=cffafe&headerfont=Roboto&subheaderfont=Inter>)

Harbor Weather is a community bot that posts a daily forecast to a configured webhook destination.

> Fictional teaching fixture. The bot, modules, settings, commands, and maintainers below are assumed examples, not a runnable service. See the [fixture contract](README.md#teaching-fixtures).

## ✨ Features

- Preview a forecast locally before enabling delivery.
- Send one daily message to a configured webhook.
- Configure the location, delivery time, and time zone.

## 🚀 Getting Started

This fixture assumes Python 3.11+, a bot checkout with package metadata, network access to its weather provider, and a private webhook for delivery.

From that assumed checkout, create a local environment:

```sh
python -m venv .venv
. .venv/bin/activate
python -m pip install -e .
export WEATHER_LOCATION='Manila'
python -m harbor_weather preview
```

The shell commands use POSIX syntax. The assumed preview prints today's forecast for the selected location without sending a message.

## 📖 Usage

Set `WEATHER_WEBHOOK_URL` through your environment's secret mechanism, then start the assumed scheduler:

```sh
python -m harbor_weather run
```

The bot waits for the configured delivery time and posts one forecast. Do not commit a webhook URL or include it in screenshots or reports.

## ⚙️ Configuration

| Variable | Requirement | Default and purpose |
| --- | --- | --- |
| `WEATHER_LOCATION` | Required | No default; the location used for forecasts. |
| `WEATHER_WEBHOOK_URL` | Required for `run` | No default; private destination URL. Not needed for preview. |
| `WEATHER_SEND_AT` | Optional | `08:00`; daily delivery time in 24-hour format. |
| `WEATHER_TIMEZONE` | Optional | `UTC`; IANA time zone used for scheduling. |

## 🚢 Deployment

The fixture assumes a persistent host running the same Python environment and command shown above. Supply settings through the host's environment, keep webhook secrets outside source control, and use its process supervisor to restart the bot after failures.

**Run only one scheduler instance.** Multiple instances can send duplicate forecasts. Check the host clock and selected time zone before enabling unattended delivery.

## 🛠️ Development

After local setup, run `python -m unittest discover` in the assumed checkout. Use mocked forecasts and webhook delivery in checks so tests cannot post real messages.

## 🤝 Contributing

The fictional maintainers accept fixes and documentation improvements. Include checks for scheduling or delivery changes, and discuss additional weather providers before implementation.

## 🐛 Issues & Support

Use the [issue tracker (fixture)](https://example.org/harbor-weather/issues). Include the Python version, time zone, scheduled time, and redacted logs. Never paste a webhook URL or private channel details.

## 📄 License

This fixture assumes MIT. The [MIT license](../LICENSE) covers this example document; it does not establish terms for a real weather provider or platform.

## 👥 Authors & Contributors

Created by the fictional Harbor Weather maintainers. Provider integration alone does not imply a sponsorship or partnership.
