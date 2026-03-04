import { fetchChartData } from "@/lib/api/charts";
import { getServerTranslations } from "@/lib/i18n/server";
import { RevenueChartInner } from "./RevenueChartInner";

export async function RevenueLineChart() {
  const [{ revenueOverview }, t] = await Promise.all([
    fetchChartData(),
    getServerTranslations(),
  ]);

  return (
    <section className="flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          {t.charts.revenueOverview}
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {t.charts.revenueSubtitle}
        </p>
      </div>
      <RevenueChartInner data={revenueOverview} />
    </section>
  );
}
