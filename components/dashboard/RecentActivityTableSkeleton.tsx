import { Skeleton } from "@/components/ui/Skeleton";

export function RecentActivityTableSkeleton() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="mt-1.5 h-3 w-56" />
      </div>
      {/* Desktop skeleton */}
      <div className="hidden sm:block">
        <div className="border-b border-gray-100 px-5 py-3 dark:border-gray-800">
          <div className="grid grid-cols-4 gap-4">
            {["w-12", "w-16", "w-14", "w-12"].map((w, i) => (
              <Skeleton key={i} className={`h-3 ${w}`} />
            ))}
          </div>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="px-5 py-3.5">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex flex-col gap-1.5">
                  <Skeleton className="h-3.5 w-32" />
                  <Skeleton className="h-3 w-44" />
                </div>
                <Skeleton className="h-3.5 w-28" />
                <Skeleton className="h-3.5 w-20" />
                <div className="flex justify-end">
                  <Skeleton className="h-5 w-20 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile skeleton */}
      <div className="divide-y divide-gray-100 sm:hidden dark:divide-gray-800">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-start justify-between px-5 py-4">
            <div className="flex flex-col gap-1.5">
              <Skeleton className="h-3.5 w-28" />
              <Skeleton className="h-3 w-40" />
              <Skeleton className="mt-1 h-3.5 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
