import { fetchActivity } from "@/lib/api/activity";
import { getServerTranslations } from "@/lib/i18n/server";
import { formatActivityDate, type ActivityItem, type ActivityStatus } from "@/lib/data/recent-activity";
import type { TranslationKeys } from "@/lib/translations";

type ActivityTranslations = TranslationKeys["activity"];

export async function RecentActivityTable() {
  const [items, t] = await Promise.all([
    fetchActivity(),
    getServerTranslations(),
  ]);

  return (
    <section className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          {t.activity.title}
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          {t.activity.subtitle}
        </p>
      </div>

      {/* Desktop table — hidden on mobile */}
      <div className="hidden sm:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t.activity.columns.customer}
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t.activity.columns.action}
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t.activity.columns.date}
              </th>
              <th className="px-5 py-3 text-right text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {t.activity.columns.status}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {items.map((item) => (
              <DesktopRow key={item.id} item={item} at={t.activity} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards — hidden on desktop */}
      <ul className="divide-y divide-gray-100 sm:hidden dark:divide-gray-800">
        {items.map((item) => (
          <MobileRow key={item.id} item={item} at={t.activity} />
        ))}
      </ul>
    </section>
  );
}

function DesktopRow({ item, at }: { item: ActivityItem; at: ActivityTranslations }) {
  return (
    <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50">
      <td className="px-5 py-3.5">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">{item.userName}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{item.userEmail}</p>
        </div>
      </td>
      <td className="px-5 py-3.5 text-gray-600 dark:text-gray-300">
        {at.actions[item.action]}
      </td>
      <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400">
        {formatActivityDate(item.date)}
      </td>
      <td className="px-5 py-3.5 text-right">
        <StatusBadge status={item.status} label={at.status[item.status]} />
      </td>
    </tr>
  );
}

function MobileRow({ item, at }: { item: ActivityItem; at: ActivityTranslations }) {
  return (
    <li className="flex items-start justify-between gap-4 px-5 py-4">
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-gray-900 dark:text-white">{item.userName}</p>
        <p className="truncate text-xs text-gray-500 dark:text-gray-400">{item.userEmail}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          {at.actions[item.action]}
        </p>
        <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-600">
          {formatActivityDate(item.date)}
        </p>
      </div>
      <div className="flex-shrink-0 pt-0.5">
        <StatusBadge status={item.status} label={at.status[item.status]} />
      </div>
    </li>
  );
}

const statusStyles: Record<ActivityStatus, string> = {
  completed: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  pending:   "bg-amber-50  text-amber-700  dark:bg-amber-950  dark:text-amber-400",
  failed:    "bg-red-50    text-red-700    dark:bg-red-950    dark:text-red-400",
};

const dotStyles: Record<ActivityStatus, string> = {
  completed: "bg-emerald-500 dark:bg-emerald-400",
  pending:   "bg-amber-500   dark:bg-amber-400",
  failed:    "bg-red-500     dark:bg-red-400",
};

function StatusBadge({ status, label }: { status: ActivityStatus; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
      {label}
    </span>
  );
}
