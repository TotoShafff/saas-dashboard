import { Skeleton } from "@/components/ui/Skeleton";

export function ChartSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="mt-1.5 h-3 w-48" />
      </div>
      <div className="flex flex-col gap-3 px-5 py-6">
        <div className="flex items-end gap-1.5" style={{ height: 260 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${30 + Math.abs(Math.sin(i) * 60)}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
