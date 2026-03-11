import { env } from "../lib/env";
import { createApp, retrieveApp, updateApp } from "../lib/whop/apps";

async function run() {
  const dryRun = process.argv.includes("--dry-run");
  const createIfMissing = process.argv.includes("--create-if-missing");

  const target = {
    name: "Nuvic Demo Hub",
    description: "Private owner-only Whop dashboard app",
    status: env.WHOP_APP_STATUS,
    base_url: env.NEXT_PUBLIC_APP_URL,
    dashboard_path: "/dashboard/[companyId]",
    experience_path: "/experiences/[experienceId]",
    discover_path: "/discover"
  };

  try {
    const existing = await retrieveApp(env.WHOP_APP_ID);
    console.log("Current app values:", existing);
    if (dryRun) {
      console.log("Dry run enabled. Proposed update:", target);
      return;
    }
    const updated = await updateApp(env.WHOP_APP_ID, target);
    console.log("Updated app:", updated);
  } catch (error) {
    if (!createIfMissing) throw error;
    console.log("App missing or inaccessible. Creating app...");
    if (dryRun) {
      console.log("Dry run enabled. Proposed create payload:", target);
      return;
    }
    const created = await createApp(target);
    console.log("Created app:", created);
  }
}

run().catch((error) => {
  console.error("sync-whop-app failed", error);
  process.exit(1);
});
