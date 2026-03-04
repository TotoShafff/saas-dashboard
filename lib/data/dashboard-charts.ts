export type MonthlyRevenue = {
  month: string;
  revenue: number;
};

export type MonthlyOrders = {
  month: string;
  orders: number;
};

export const revenueOverviewData: MonthlyRevenue[] = [
  { month: "Jan", revenue: 68000 },
  { month: "Feb", revenue: 74500 },
  { month: "Mar", revenue: 71200 },
  { month: "Apr", revenue: 83000 },
  { month: "May", revenue: 91300 },
  { month: "Jun", revenue: 98100 },
  { month: "Jul", revenue: 94800 },
  { month: "Aug", revenue: 107400 },
  { month: "Sep", revenue: 112000 },
  { month: "Oct", revenue: 118500 },
  { month: "Nov", revenue: 121200 },
  { month: "Dec", revenue: 124580 },
];

export const orderActivityData: MonthlyOrders[] = [
  { month: "Jan", orders: 1240 },
  { month: "Feb", orders: 1410 },
  { month: "Mar", orders: 1380 },
  { month: "Apr", orders: 1620 },
  { month: "May", orders: 1850 },
  { month: "Jun", orders: 2030 },
  { month: "Jul", orders: 1970 },
  { month: "Aug", orders: 2180 },
  { month: "Sep", orders: 2340 },
  { month: "Oct", orders: 2290 },
  { month: "Nov", orders: 2510 },
  { month: "Dec", orders: 2614 },
];
