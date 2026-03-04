import Link from "next/link";
import type { Order, OrderStatus } from "@/lib/api/orders";
import type { TranslationKeys } from "@/lib/translations";
import { formatActivityDate } from "@/lib/data/recent-activity";

type OrderTranslations = TranslationKeys["orders"];

type Props = {
  orders: Order[];
  currentPage: number;
  totalPages: number;
  prevHref: string | null;
  nextHref: string | null;
  t: OrderTranslations;
};

export function OrdersTable({
  orders,
  currentPage,
  totalPages,
  prevHref,
  nextHref,
  t,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

        {/* Desktop table */}
        <div className="hidden sm:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                {[
                  t.columns.id,
                  t.columns.customer,
                  t.columns.date,
                  t.columns.total,
                  t.columns.status,
                ].map((col) => (
                  <th
                    key={col}
                    className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 last:text-right dark:text-gray-400"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {orders.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-16 text-center text-sm text-gray-400 dark:text-gray-600"
                  >
                    {t.empty}
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <DesktopRow key={order.id} order={order} t={t} />
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        {orders.length === 0 ? (
          <div className="flex items-center justify-center px-5 py-16 sm:hidden">
            <p className="text-sm text-gray-400 dark:text-gray-600">{t.empty}</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-100 sm:hidden dark:divide-gray-800">
            {orders.map((order) => (
              <MobileRow key={order.id} order={order} t={t} />
            ))}
          </ul>
        )}

        {/* Pagination footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-5 py-3 dark:border-gray-800">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {currentPage} {t.pagination.pageOf} {totalPages}
          </p>
          <div className="flex items-center gap-2">
            {prevHref ? (
              <Link
                href={prevHref}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <ChevronLeftIcon />
                {t.pagination.previous}
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 px-3 py-1.5 text-xs font-medium text-gray-300 dark:border-gray-800 dark:text-gray-600">
                <ChevronLeftIcon />
                {t.pagination.previous}
              </span>
            )}
            {nextHref ? (
              <Link
                href={nextHref}
                className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {t.pagination.next}
                <ChevronRightIcon />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 px-3 py-1.5 text-xs font-medium text-gray-300 dark:border-gray-800 dark:text-gray-600">
                {t.pagination.next}
                <ChevronRightIcon />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopRow({ order, t }: { order: Order; t: OrderTranslations }) {
  return (
    <tr className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/50">
      <td className="px-5 py-3.5 font-mono text-xs text-gray-500 dark:text-gray-400">
        {order.id}
      </td>
      <td className="px-5 py-3.5">
        <p className="font-medium text-gray-900 dark:text-white">{order.customerName}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{order.email}</p>
      </td>
      <td className="px-5 py-3.5 text-gray-500 dark:text-gray-400">
        {formatActivityDate(order.date)}
      </td>
      <td className="px-5 py-3.5 font-medium text-gray-900 dark:text-white">
        ${order.total.toFixed(2)}
      </td>
      <td className="px-5 py-3.5 text-right">
        <StatusBadge status={order.status} label={t.status[order.status]} />
      </td>
    </tr>
  );
}

function MobileRow({ order, t }: { order: Order; t: OrderTranslations }) {
  return (
    <li className="flex items-start justify-between gap-4 px-5 py-4">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="font-medium text-gray-900 dark:text-white">{order.customerName}</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{order.email}</p>
        <div className="mt-1.5 flex items-center gap-3">
          <span className="font-mono text-xs text-gray-400 dark:text-gray-600">{order.id}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatActivityDate(order.date)}
          </span>
        </div>
        <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
          ${order.total.toFixed(2)}
        </p>
      </div>
      <div className="flex-shrink-0 pt-0.5">
        <StatusBadge status={order.status} label={t.status[order.status]} />
      </div>
    </li>
  );
}

const statusStyles: Record<OrderStatus, string> = {
  pending:   "bg-amber-50  text-amber-700  dark:bg-amber-950  dark:text-amber-400",
  shipped:   "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  cancelled: "bg-red-50   text-red-700    dark:bg-red-950    dark:text-red-400",
  refunded:  "bg-gray-100  text-gray-600   dark:bg-gray-800   dark:text-gray-400",
};

const dotStyles: Record<OrderStatus, string> = {
  pending:   "bg-amber-500   dark:bg-amber-400",
  shipped:   "bg-emerald-500 dark:bg-emerald-400",
  cancelled: "bg-red-500     dark:bg-red-400",
  refunded:  "bg-gray-400    dark:bg-gray-500",
};

function StatusBadge({ status, label }: { status: OrderStatus; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`} />
      {label}
    </span>
  );
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
