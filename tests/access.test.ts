import { describe, expect, it } from "vitest";

describe("access helpers", () => {
  it("loads env toggles", async () => {
    process.env.WHOP_API_KEY = "key";
    process.env.WHOP_APP_ID = "app";
    process.env.NEXT_PUBLIC_WHOP_APP_ID = "app";
    process.env.WHOP_COMPANY_ID = "company";
    process.env.OWNER_WHOP_USER_ID = "owner";
    process.env.NEXT_PUBLIC_APP_URL = "https://example.com";
    const { publicFlags } = await import("@/lib/env");
    expect(publicFlags.enableDashboard).toBe(true);
  });
});
