import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  WHOP_API_KEY: z.string().min(1),
  WHOP_APP_ID: z.string().min(1),
  NEXT_PUBLIC_WHOP_APP_ID: z.string().min(1),
  WHOP_COMPANY_ID: z.string().min(1),
  OWNER_WHOP_USER_ID: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),
  WHOP_APP_STATUS: z.string().default("hidden"),
  WHOP_ENABLE_DISCOVER: z.string().default("false"),
  WHOP_ENABLE_EXPERIENCE: z.string().default("true"),
  WHOP_ENABLE_DASHBOARD: z.string().default("true")
});

export const env = envSchema.parse(process.env);
export const publicFlags = {
  enableDiscover: env.WHOP_ENABLE_DISCOVER === "true",
  enableExperience: env.WHOP_ENABLE_EXPERIENCE === "true",
  enableDashboard: env.WHOP_ENABLE_DASHBOARD === "true"
};
