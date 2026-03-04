import { NextResponse } from "next/server";
import { dashboardMetrics } from "@/lib/data/dashboard-metrics";
import type { Metric } from "@/lib/data/dashboard-metrics";

export type MetricsResponse = {
  data: Metric[];
};

export async function GET(): Promise<NextResponse<MetricsResponse>> {
  return NextResponse.json({ data: dashboardMetrics });
}
