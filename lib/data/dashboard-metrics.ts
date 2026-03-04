import type { MetricTitleKey } from "@/lib/translations";

export type Trend = "up" | "down";

export type Metric = {
  id: string;
  titleKey: MetricTitleKey;
  value: string;
  change: number;
  trend: Trend;
};

export const dashboardMetrics: Metric[] = [
  {
    id: "total-revenue",
    titleKey: "totalRevenue",
    value: "$124,580",
    change: 14.2,
    trend: "up",
  },
  {
    id: "total-customers",
    titleKey: "totalCustomers",
    value: "8,347",
    change: 9.6,
    trend: "up",
  },
  {
    id: "monthly-orders",
    titleKey: "monthlyOrders",
    value: "2,614",
    change: 5.3,
    trend: "up",
  },
  {
    id: "conversion-rate",
    titleKey: "conversionRate",
    value: "3.8%",
    change: -0.4,
    trend: "down",
  },
];
