import { Suspense } from "react";
import { getServerTranslations } from "@/lib/i18n/server";
import { fetchOrders } from "@/lib/api/orders";
import { OrdersTable } from "@/components/orders/OrdersTable";
import { OrdersControls } from "@/components/orders/OrdersControls";

type SearchParams = Promise<{
  status?: string;
  search?: string;
  sort?: string;
  page?: string;
}>;

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page ?? "1", 10));

  const [t, { data: orders, totalPages }] = await Promise.all([
    getServerTranslations(),
    fetchOrders(params),
  ]);

  // Build pagination hrefs — preserve all current filters, only change page
  function pageUrl(page: number): string {
    const q = new URLSearchParams();
    if (params.status) q.set("status", params.status);
    if (params.search) q.set("search", params.search);
    if (params.sort)   q.set("sort",   params.sort);
    q.set("page", String(page));
    return `/orders?${q.toString()}`;
  }

  const prevHref = currentPage > 1          ? pageUrl(currentPage - 1) : null;
  const nextHref = currentPage < totalPages  ? pageUrl(currentPage + 1) : null;

  return (
    <div className="flex flex-col gap-8">

      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t.orders.title}
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {t.orders.subtitle}
        </p>
      </div>

      {/* Filters — wrapped in Suspense because OrdersControls uses useSearchParams() */}
      <Suspense>
        <OrdersControls
          t={t.orders.controls}
          tStatus={t.orders.status}
          initialSearch={params.search ?? ""}
          initialStatus={params.status ?? ""}
          initialSort={params.sort ?? "date_desc"}
        />
      </Suspense>

      {/* Orders table */}
      <OrdersTable
        orders={orders}
        currentPage={currentPage}
        totalPages={totalPages}
        prevHref={prevHref}
        nextHref={nextHref}
        t={t.orders}
      />

    </div>
  );
}
