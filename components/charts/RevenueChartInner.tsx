"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { MonthlyRevenue } from "@/lib/api/charts";
import { useIsDark } from "@/lib/hooks/useIsDark";

type TooltipData = {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
};

function RevenueTooltip({ active, payload, label }: TooltipData) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
        ${payload[0].value?.toLocaleString()}
      </p>
    </div>
  );
}

function formatRevenue(value: number): string {
  return `$${(value / 1000).toFixed(0)}k`;
}

type Props = {
  data: MonthlyRevenue[];
};

export function RevenueChartInner({ data }: Props) {
  const isDark = useIsDark();

  const colors = {
    stroke: isDark ? "#818cf8" : "#4f46e5",
    grid: isDark ? "#1f2937" : "#f3f4f6",
    axis: isDark ? "#6b7280" : "#9ca3af",
  };

  return (
    <div className="px-2 py-4">
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={data}
          margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.15} />
              <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
            </linearGradient>
          </defs>
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
            tickFormatter={formatRevenue}
            tick={{ fontSize: 11, fill: colors.axis }}
            tickLine={false}
            axisLine={false}
            width={40}
          />
          <Tooltip
            content={<RevenueTooltip />}
            cursor={{ stroke: colors.stroke, strokeWidth: 1, strokeDasharray: "4 4" }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke={colors.stroke}
            strokeWidth={2}
            fill="url(#revenueGradient)"
            dot={false}
            activeDot={{ r: 4, fill: colors.stroke, strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
