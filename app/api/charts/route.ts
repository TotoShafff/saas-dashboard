import { NextResponse } from "next/server";
import {
  revenueOverviewData,
  orderActivityData,
  analyticsSummary,
} from "@/lib/data/dashboard-charts";
import type {
  MonthlyRevenue,
  MonthlyOrders,
  AnalyticsSummaryData,
} from "@/lib/data/dashboard-charts";

export type ChartsResponse = {
  revenueOverview: MonthlyRevenue[];
  userActivity: MonthlyOrders[];
  summary: AnalyticsSummaryData;
};

export async function GET(): Promise<NextResponse<ChartsResponse>> {
  return NextResponse.json({
    revenueOverview: revenueOverviewData,
    userActivity: orderActivityData,
    summary: analyticsSummary,
  });
}
