import type { ActivityItem } from "@/lib/data/recent-activity";
import { getBaseUrl } from "./base-url";

export type { ActivityItem };

export async function fetchActivity(): Promise<ActivityItem[]> {
  const res = await fetch(`${getBaseUrl()}/api/activity`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch activity: ${res.status}`);
  }

  const json = await res.json() as { data: ActivityItem[] };
  return json.data;
}
