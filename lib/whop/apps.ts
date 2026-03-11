import { z } from "zod";
import { env } from "@/lib/env";
import { getWhopSdkClient } from "@/lib/whop/client";

const appSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  status: z.string().optional(),
  base_url: z.string().optional(),
  dashboard_path: z.string().optional(),
  experience_path: z.string().optional(),
  discover_path: z.string().optional()
});

export async function retrieveApp(appId = env.WHOP_APP_ID) {
  const client = await getWhopSdkClient();
  const response = await (client as any).apps.retrieve({ app_id: appId });
  return appSchema.parse(response);
}

export async function createApp(payload: Record<string, unknown>) {
  const client = await getWhopSdkClient();
  const response = await (client as any).apps.create(payload);
  return appSchema.parse(response);
}

export async function updateApp(appId: string, payload: Record<string, unknown>) {
  const client = await getWhopSdkClient();
  const response = await (client as any).apps.update({ app_id: appId, ...payload });
  return appSchema.parse(response);
}
