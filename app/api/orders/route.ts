import { NextRequest, NextResponse } from "next/server";
import { ordersData } from "@/lib/data/orders";
import type { Order, OrderStatus, SortKey } from "@/lib/data/orders";

export type { Order, OrderStatus, SortKey };

export type OrdersResponse = {
  data: Order[];
  totalPages: number;
};

const VALID_STATUSES = new Set<OrderStatus>(["pending", "shipped", "cancelled", "refunded"]);
const VALID_SORTS    = new Set<SortKey>(["date_desc", "date_asc", "total_desc", "total_asc"]);
const PAGE_SIZE      = 10;

export async function GET(request: NextRequest): Promise<NextResponse<OrdersResponse>> {
  const { searchParams } = request.nextUrl;

  const statusParam = searchParams.get("status") ?? "";
  const search      = (searchParams.get("search") ?? "").trim().toLowerCase();
  const sortParam   = searchParams.get("sort") ?? "date_desc";
  const page        = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));

  const status = VALID_STATUSES.has(statusParam as OrderStatus)
    ? (statusParam as OrderStatus)
    : null;

  const sort: SortKey = VALID_SORTS.has(sortParam as SortKey)
    ? (sortParam as SortKey)
    : "date_desc";

  // ── 1. Filter ────────────────────────────────────────────────────────────
  let result = ordersData.filter((order) => {
    if (status && order.status !== status) return false;
    if (search) {
      const matchesId   = order.id.toLowerCase().includes(search);
      const matchesName = order.customerName.toLowerCase().includes(search);
      if (!matchesId && !matchesName) return false;
    }
    return true;
  });

  // ── 2. Sort ──────────────────────────────────────────────────────────────
  result = [...result].sort((a, b) => {
    switch (sort) {
      case "date_asc":   return a.date.localeCompare(b.date);
      case "date_desc":  return b.date.localeCompare(a.date);
      case "total_asc":  return a.total - b.total;
      case "total_desc": return b.total - a.total;
    }
  });

  // ── 3. Paginate ──────────────────────────────────────────────────────────
  const totalPages = Math.max(1, Math.ceil(result.length / PAGE_SIZE));
  const safePage   = Math.min(page, totalPages);
  const start      = (safePage - 1) * PAGE_SIZE;
  const data       = result.slice(start, start + PAGE_SIZE);

  return NextResponse.json({ data, totalPages });
}
