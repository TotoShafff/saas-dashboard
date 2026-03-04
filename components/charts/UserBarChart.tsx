import { fetchChartData } from "@/lib/api/charts";
import { UserBarChartInner } from "./UserBarChartInner";

export async function UserBarChart() {
  const { userActivity } = await fetchChartData();

  return (
    <section className="flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
          User Activity
        </h2>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
          Monthly active users for 2024
        </p>
      </div>
      <UserBarChartInner data={userActivity} />
    </section>
  );
}
