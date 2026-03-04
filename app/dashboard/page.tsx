import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { MetricsGridSkeleton } from "@/components/dashboard/MetricsGridSkeleton";
import { RevenueLineChart } from "@/components/charts/RevenueLineChart";
import { UserBarChart } from "@/components/charts/UserBarChart";
import { ChartSkeleton } from "@/components/charts/ChartSkeleton";
import { RecentActivityTable } from "@/components/dashboard/RecentActivityTable";
import { RecentActivityTableSkeleton } from "@/components/dashboard/RecentActivityTableSkeleton";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />

      <Suspense fallback={<MetricsGridSkeleton />}>
        <MetricsGrid />
      </Suspense>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Suspense fallback={<ChartSkeleton />}>
          <RevenueLineChart />
        </Suspense>
        <Suspense fallback={<ChartSkeleton />}>
          <UserBarChart />
        </Suspense>
      </div>

      <Suspense fallback={<RecentActivityTableSkeleton />}>
        <RecentActivityTable />
      </Suspense>
    </div>
  );
}
