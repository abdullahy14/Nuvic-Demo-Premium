import { NextResponse } from "next/server";
import { requireWhopUser } from "@/lib/guards";
import { checkAccess } from "@/lib/whop/access";

export async function GET(req: Request) {
  try {
    const context = await requireWhopUser(req.headers);
    const url = new URL(req.url);
    const result = await checkAccess({
      context,
      companyId: url.searchParams.get("companyId") ?? undefined,
      productId: url.searchParams.get("productId") ?? undefined,
      planId: url.searchParams.get("planId") ?? undefined,
      experienceId: url.searchParams.get("experienceId") ?? undefined
    });
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 401 });
  }
}
