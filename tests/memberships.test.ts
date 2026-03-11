import { describe, expect, it } from "vitest";
import { normalizeMembership } from "@/lib/whop/memberships";

describe("membership normalization", () => {
  it("marks active fields", () => {
    const result = normalizeMembership({ id: "1", user_id: "u1", status: "active" });
    expect(result.isActive).toBe(true);
    expect(result.isExpired).toBe(false);
  });

  it("maps canceled to expired", () => {
    const result = normalizeMembership({ id: "1", user_id: "u1", status: "canceled" });
    expect(result.isExpired).toBe(true);
  });
});
