import { env } from "@/lib/env";

// Official Whop SDK client wrapper.
// Methods are accessed via adapter functions to keep SDK usage centralized.
export async function getWhopSdkClient() {
  const mod = await import("@whop/sdk");
  const AnySdk = (mod as any).WhopSdk ?? (mod as any).WhopServerSdk ?? (mod as any).default;
  if (!AnySdk) {
    throw new Error("Unable to initialize @whop/sdk. Check installed SDK version.");
  }
  return new AnySdk({ apiKey: env.WHOP_API_KEY });
}
