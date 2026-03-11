import { z } from "zod";
import { getWhopSdkClient } from "@/lib/whop/client";
import type { WhopAuthContext } from "@/types/whop";

const userSchema = z.object({
  id: z.string(),
  username: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional()
});

export function extractEmbeddedToken(headers: Headers): string | null {
  return headers.get("x-whop-user-token") ?? headers.get("authorization")?.replace("Bearer ", "") ?? null;
}

export async function verifyWhopUserToken(headers: Headers): Promise<WhopAuthContext> {
  const token = extractEmbeddedToken(headers);
  if (!token) throw new Error("Unauthorized: missing Whop token header");
  const client = await getWhopSdkClient();
  const response = await (client as any).users.retrieveMe({ token });
  const user = userSchema.parse(response);
  return { user, token };
}

export async function getCurrentWhopUser(headers: Headers) {
  return verifyWhopUserToken(headers);
}
