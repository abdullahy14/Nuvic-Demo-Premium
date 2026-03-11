import { NextResponse } from "next/server";
import { getRecommendations } from "@/lib/recommendation-engine";

export async function POST(req: Request) {
  const signal = await req.json();
  const recommendations = getRecommendations(signal);
  return NextResponse.json({ recommendations });
}
