import type { Order, OrderStatus, SortKey } from "@/lib/data/orders";
import { getBaseUrl } from "./base-url";

export type { Order, OrderStatus, SortKey };

export type OrdersParams = {
  status?: string;
  search?: string;
  sort?: string;
  page?: string;
};

export type OrdersResult = {
  data: Order[];
  totalPages: number;
};

export async function fetchOrders(params: OrdersParams): Promise<OrdersResult> {
  const query = new URLSearchParams();

  if (params.status)  query.set("status", params.status);
  if (params.search)  query.set("search", params.search);
  if (params.sort)    query.set("sort",   params.sort);
  if (params.page)    query.set("page",   params.page);

  const qs  = query.toString();
  const url = `${getBaseUrl()}/api/orders${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch orders: ${res.status}`);
  }

  return res.json() as Promise<OrdersResult>;
}
