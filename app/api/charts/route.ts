import { NextResponse } from "next/server";
import { revenueOverviewData, userActivityData } from "@/lib/data/dashboard-charts";
import type { MonthlyRevenue, MonthlyUsers } from "@/lib/data/dashboard-charts";

export type ChartsResponse = {
  revenueOverview: MonthlyRevenue[];
  userActivity: MonthlyUsers[];
};

export async function GET(): Promise<NextResponse<ChartsResponse>> {
  return NextResponse.json({
    revenueOverview: revenueOverviewData,
    userActivity: userActivityData,
  });
}
