import { describe, expect, it } from "vitest";
import { extractEmbeddedToken } from "@/lib/whop/auth";

describe("auth token extraction", () => {
  it("prefers x-whop-user-token", () => {
    const headers = new Headers({ "x-whop-user-token": "abc", authorization: "Bearer def" });
    expect(extractEmbeddedToken(headers)).toBe("abc");
  });

  it("falls back to authorization bearer", () => {
    const headers = new Headers({ authorization: "Bearer def" });
    expect(extractEmbeddedToken(headers)).toBe("def");
  });
});
