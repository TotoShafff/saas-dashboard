import type { Metric } from "@/lib/data/dashboard-metrics";

type Props = {
  metric: Metric;
};

export function MetricCard({ metric }: Props) {
  const isPositive = metric.trend === "up";
  const changeAbs = Math.abs(metric.change);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {metric.title}
        </p>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
              : "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400"
          }`}
        >
          {isPositive ? (
            <ArrowUpIcon />
          ) : (
            <ArrowDownIcon />
          )}
          {changeAbs}%
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {metric.value}
      </p>
      <p className="mt-1 text-xs text-gray-400 dark:text-gray-600">
        vs. last 30 days
      </p>
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
