import type { Metric } from "@/lib/data/dashboard-metrics";
import { getBaseUrl } from "./base-url";

export type { Metric };

export async function fetchMetrics(): Promise<Metric[]> {
  const res = await fetch(`${getBaseUrl()}/api/metrics`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch metrics: ${res.status}`);
  }

  const json = await res.json() as { data: Metric[] };
  return json.data;
}
