import type {
  MonthlyRevenue,
  MonthlyOrders,
  AnalyticsSummaryData,
} from "@/lib/data/dashboard-charts";
import { getBaseUrl } from "./base-url";

export type { MonthlyRevenue, MonthlyOrders, AnalyticsSummaryData };

export type ChartData = {
  revenueOverview: MonthlyRevenue[];
  userActivity: MonthlyOrders[];
  summary: AnalyticsSummaryData;
};

/**
 * Fetches all chart data including the analytics summary in a single request.
 * When called from multiple concurrent Server Components, Next.js
 * deduplicates the fetch — only one HTTP request is made.
 */
export async function fetchChartData(): Promise<ChartData> {
  const res = await fetch(`${getBaseUrl()}/api/charts`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch chart data: ${res.status}`);
  }

  return res.json() as Promise<ChartData>;
}
