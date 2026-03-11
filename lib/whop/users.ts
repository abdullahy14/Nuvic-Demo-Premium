import { z } from "zod";
import { getWhopSdkClient } from "@/lib/whop/client";

const userSchema = z.object({ id: z.string(), username: z.string().optional(), name: z.string().optional(), email: z.string().optional() });

export async function retrieveUser(userId: string) {
  const client = await getWhopSdkClient();
  const response = await (client as any).users.retrieve({ user_id: userId });
  return userSchema.parse(response);
}
