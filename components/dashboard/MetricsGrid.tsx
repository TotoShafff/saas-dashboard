import { fetchMetrics } from "@/lib/api/metrics";
import { getServerTranslations } from "@/lib/i18n/server";
import { MetricCard } from "@/components/ui/MetricCard";

export async function MetricsGrid() {
  const [metrics, t] = await Promise.all([
    fetchMetrics(),
    getServerTranslations(),
  ]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={{ ...metric, title: t.metrics[metric.titleKey] }}
          comparisonLabel={t.metrics.vsLastDays}
        />
      ))}
    </div>
  );
}
