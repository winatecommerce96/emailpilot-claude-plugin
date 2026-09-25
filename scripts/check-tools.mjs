#!/usr/bin/env node
// Verifies every emailpilot_* tool name referenced in SKILL.md is in the public 19-tool allowlist.
import { readFileSync } from "node:fs";

const ALLOWED = new Set([
  "emailpilot_list_brands",
  "emailpilot_get_brand",
  "emailpilot_get_calendar",
  "emailpilot_create_event",
  "emailpilot_delete_event",
  "emailpilot_get_goals",
  "emailpilot_set_goal",
  "emailpilot_generate_goals",
  "emailpilot_sync_progress",
  "emailpilot_get_goal_prediction",
  "emailpilot_get_performance",
  "emailpilot_get_campaign_report",
  "emailpilot_get_velocity",
  "emailpilot_get_guidelines",
  "emailpilot_get_approvals",
  "emailpilot_compare_clients",
  "emailpilot_generate_calendar",
  "emailpilot_get_calendar_generation",
  "emailpilot_get_generation_limits",
]);

const path = new URL("../skills/emailpilot-retention-strategist/SKILL.md", import.meta.url);
const text = readFileSync(path, "utf8");
const found = [...text.matchAll(/`(emailpilot_[a-zA-Z0-9_]+)`/g)].map((m) => m[1]);
const unique = [...new Set(found)];
const bad = unique.filter((t) => !ALLOWED.has(t));

if (bad.length) {
  console.error("Unknown/unlisted tools referenced in SKILL.md:", bad.join(", "));
  process.exit(1);
}

console.log(`OK: ${unique.length} distinct emailpilot_* tools referenced, all in the public allowlist.`);
