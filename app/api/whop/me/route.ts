import { NextResponse } from "next/server";
import { requireWhopUser } from "@/lib/guards";

export async function GET(req: Request) {
  try {
    const context = await requireWhopUser(req.headers);
    return NextResponse.json({ ok: true, user: context.user });
  } catch (error) {
    return NextResponse.json({ ok: false, error: (error as Error).message }, { status: 401 });
  }
}
