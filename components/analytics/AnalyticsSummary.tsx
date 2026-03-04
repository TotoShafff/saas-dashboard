import { fetchChartData } from "@/lib/api/charts";
import { getServerTranslations } from "@/lib/i18n/server";
import type { AnalyticsSummaryData } from "@/lib/data/dashboard-charts";
import type { TranslationKeys } from "@/lib/translations";
import { Skeleton } from "@/components/ui/Skeleton";

export async function AnalyticsSummary() {
  const [{ summary }, t] = await Promise.all([
    fetchChartData(),
    getServerTranslations(),
  ]);

  const cards: Array<{
    label: string;
    value: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      label: t.analytics.summary.totalOrders,
      value: summary.totalOrdersYear.toLocaleString("en-US"),
      icon: <CartIcon />,
      color: "text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950",
    },
    {
      label: t.analytics.summary.avgOrderValue,
      value: `$${summary.avgOrderValue}`,
      icon: <DollarIcon />,
      color: "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950",
    },
    {
      label: t.analytics.summary.conversionRate,
      value: `${summary.conversionRate}%`,
      icon: <TrendIcon />,
      color: "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-950",
    },
  ];

  return (
    <SummaryCard t={t.analytics.summary} summary={summary} cards={cards} />
  );
}

type CardItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

function SummaryCard({
  t,
  cards,
}: {
  t: TranslationKeys["analytics"]["summary"];
  summary: AnalyticsSummaryData;
  cards: CardItem[];
}) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {t.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-gray-800">
        {cards.map((card) => (
          <div key={card.label} className="flex items-center gap-4 px-6 py-5">
            <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${card.color}`}>
              {card.icon}
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {card.label}
              </p>
              <p className="mt-0.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AnalyticsSummarySkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="mt-1.5 h-3 w-48" />
      </div>
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-gray-800">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-5">
            <Skeleton className="h-11 w-11 flex-shrink-0 rounded-xl" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="h-7 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
