import { NextResponse } from "next/server";
import { recentActivityData } from "@/lib/data/recent-activity";
import type { ActivityItem } from "@/lib/data/recent-activity";

export type ActivityResponse = {
  data: ActivityItem[];
};

export async function GET(): Promise<NextResponse<ActivityResponse>> {
  return NextResponse.json({ data: recentActivityData });
}
