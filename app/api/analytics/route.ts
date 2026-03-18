import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const event = await req.json();
  return NextResponse.json({ ok: true, received: event, stored: "analytics_events" });
}
