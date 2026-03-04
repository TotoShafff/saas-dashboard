import { NextResponse } from "next/server";
import { revenueOverviewData, orderActivityData } from "@/lib/data/dashboard-charts";
import type { MonthlyRevenue, MonthlyOrders } from "@/lib/data/dashboard-charts";

export type ChartsResponse = {
  revenueOverview: MonthlyRevenue[];
  userActivity: MonthlyOrders[];
};

export async function GET(): Promise<NextResponse<ChartsResponse>> {
  return NextResponse.json({
    revenueOverview: revenueOverviewData,
    userActivity: orderActivityData,
  });
}
