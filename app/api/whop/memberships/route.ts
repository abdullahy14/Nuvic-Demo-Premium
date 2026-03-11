import { NextResponse } from "next/server";
import { requireWhopUser } from "@/lib/guards";
import { getUserMemberships } from "@/lib/whop/memberships";

export async function GET(req: Request) {
  try {
    const context = await requireWhopUser(req.headers);
    const url = new URL(req.url);
    const status = url.searchParams.get("status");
    const memberships = await getUserMemberships(context.user.id);
    const filtered = status ? memberships.filter((m) => m.status === status) : memberships;
    return NextResponse.json({ ok: true, memberships: filtered });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 401 });
  }
}
