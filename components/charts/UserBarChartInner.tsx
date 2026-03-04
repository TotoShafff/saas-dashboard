"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { MonthlyUsers } from "@/lib/api/charts";
import { useIsDark } from "@/lib/hooks/useIsDark";

type TooltipData = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
};

function UsersTooltip({ active, payload, label }: TooltipData) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
        {payload[0].value?.toLocaleString()} users
      </p>
    </div>
  );
}

type Props = {
  data: MonthlyUsers[];
};

export function UserBarChartInner({ data }: Props) {
  const isDark = useIsDark();

  const colors = {
    bar: isDark ? "#a78bfa" : "#7c3aed",
    grid: isDark ? "#1f2937" : "#f3f4f6",
    axis: isDark ? "#6b7280" : "#9ca3af",
  };

  return (
    <div className="px-2 py-4">
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={colors.grid}
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: colors.axis }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={(v: number) => `${(v / 1000).toFixed(1)}k`}
            tick={{ fontSize: 11, fill: colors.axis }}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <Tooltip
            content={<UsersTooltip />}
            cursor={{ fill: isDark ? "#ffffff08" : "#00000005" }}
          />
          <Bar dataKey="users" radius={[4, 4, 0, 0]}>
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={colors.bar} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
