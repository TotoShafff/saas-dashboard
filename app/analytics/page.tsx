import { Suspense } from "react";
import { getServerTranslations } from "@/lib/i18n/server";
import { RevenueLineChart } from "@/components/charts/RevenueLineChart";
import { UserBarChart } from "@/components/charts/UserBarChart";
import { ChartSkeleton } from "@/components/charts/ChartSkeleton";
import { AnalyticsSummary, AnalyticsSummarySkeleton } from "@/components/analytics/AnalyticsSummary";

export default async function AnalyticsPage() {
  const t = await getServerTranslations();

  return (
    <div className="flex flex-col gap-8">

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t.analytics.title}
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {t.analytics.subtitle}
        </p>
      </div>

      {/* Revenue — full width */}
      <Suspense fallback={<ChartSkeleton />}>
        <RevenueLineChart />
      </Suspense>

      {/* Orders — full width */}
      <Suspense fallback={<ChartSkeleton />}>
        <UserBarChart />
      </Suspense>

      {/* Year summary cards */}
      <Suspense fallback={<AnalyticsSummarySkeleton />}>
        <AnalyticsSummary />
      </Suspense>

    </div>
  );
}
