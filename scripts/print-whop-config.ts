import { env } from "../lib/env";

console.log("Whop app configuration");
console.table({
  appName: "Nuvic Demo Hub",
  appId: env.WHOP_APP_ID,
  status: env.WHOP_APP_STATUS,
  base_url: env.NEXT_PUBLIC_APP_URL,
  dashboard_path: "/dashboard/[companyId]",
  experience_path: "/experiences/[experienceId]",
  discover_path: "/discover"
});
