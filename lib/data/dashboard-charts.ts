export type MonthlyRevenue = {
  month: string;
  revenue: number;
};

export type MonthlyUsers = {
  month: string;
  users: number;
};

export const revenueOverviewData: MonthlyRevenue[] = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 47500 },
  { month: "Mar", revenue: 44200 },
  { month: "Apr", revenue: 51000 },
  { month: "May", revenue: 58300 },
  { month: "Jun", revenue: 63100 },
  { month: "Jul", revenue: 59800 },
  { month: "Aug", revenue: 67400 },
  { month: "Sep", revenue: 72000 },
  { month: "Oct", revenue: 76500 },
  { month: "Nov", revenue: 81200 },
  { month: "Dec", revenue: 84254 },
];

export const userActivityData: MonthlyUsers[] = [
  { month: "Jan", users: 1840 },
  { month: "Feb", users: 2120 },
  { month: "Mar", users: 2380 },
  { month: "Apr", users: 2150 },
  { month: "May", users: 2690 },
  { month: "Jun", users: 2950 },
  { month: "Jul", users: 3120 },
  { month: "Aug", users: 3340 },
  { month: "Sep", users: 3580 },
  { month: "Oct", users: 3410 },
  { month: "Nov", users: 3720 },
  { month: "Dec", users: 3842 },
];
