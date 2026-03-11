import { NextResponse } from "next/server";
import { env } from "@/lib/env";
import { redactSecret } from "@/lib/utils";

export async function GET() {
  return NextResponse.json({
    ok: true,
    runtime: process.env.NODE_ENV,
    config: {
      appId: env.WHOP_APP_ID,
      companyId: env.WHOP_COMPANY_ID,
      ownerId: env.OWNER_WHOP_USER_ID,
      appUrl: env.NEXT_PUBLIC_APP_URL,
      apiKey: redactSecret(env.WHOP_API_KEY)
    }
  });
}
