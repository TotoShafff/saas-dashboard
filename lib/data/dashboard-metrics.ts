export type Trend = "up" | "down";

export type Metric = {
  id: string;
  title: string;
  value: string;
  change: number;
  trend: Trend;
};

export const dashboardMetrics: Metric[] = [
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$84,254",
    change: 12.5,
    trend: "up",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "3,842",
    change: 8.1,
    trend: "up",
  },
  {
    id: "new-signups",
    title: "New Signups",
    value: "612",
    change: -3.4,
    trend: "down",
  },
  {
    id: "churn-rate",
    title: "Churn Rate",
    value: "2.4%",
    change: -1.2,
    trend: "down",
  },
];
