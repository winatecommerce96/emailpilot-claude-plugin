# EmailPilot for Claude

EmailPilot is a retention-marketing platform for Klaviyo email and SMS. This plugin gives Claude a connector to your EmailPilot account plus a skill that turns it into a senior retention marketing strategist: campaign calendars, performance reviews, goal tracking and forecasting, campaign briefs, pre-send checks, and client meeting prep.

## Requirements

- An EmailPilot account with a connected Klaviyo account.
- A 7-day free trial with a card on file, then a paid subscription.

## What's included

- **Connector** (`.mcp.json`): an HTTP MCP connection to EmailPilot. No credentials are stored in this plugin — you authenticate with OAuth the first time Claude connects.
- **Skill** (`skills/emailpilot-retention-strategist`): guidance for Claude on when and how to use the EmailPilot tools, including asking before any write (creating/deleting calendar events, setting goals, or generating a calendar/goals).

## Install

Add this plugin from the Claude plugin directory (search "EmailPilot"), or install this repository directly via `/plugin marketplace add`.

On first use, Claude will prompt you to connect to EmailPilot; sign in with your EmailPilot account to authorize the connection.

## Privacy

See EmailPilot's privacy policy: https://app.emailpilot.ai/static/legal/privacy.html

## Support

support@emailpilot.ai
