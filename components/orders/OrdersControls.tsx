"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import type { TranslationKeys } from "@/lib/translations";

type ControlsTranslations = TranslationKeys["orders"]["controls"];
type StatusTranslations = TranslationKeys["orders"]["status"];

type Props = {
  t: ControlsTranslations;
  tStatus: StatusTranslations;
  initialSearch?: string;
  initialStatus?: string;
  initialSort?: string;
};

const SORT_OPTIONS = [
  "date_desc",
  "date_asc",
  "total_desc",
  "total_asc",
] as const;

type SortOption = (typeof SORT_OPTIONS)[number];

export function OrdersControls({
  t,
  tStatus,
  initialSearch = "",
  initialStatus = "",
  initialSort = "date_desc",
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);

  const buildUrl = useCallback(
    (overrides: Record<string, string>) => {
      const q = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(overrides)) {
        if (value) {
          q.set(key, value);
        } else {
          q.delete(key);
        }
      }
      q.set("page", "1");
      return `/orders?${q.toString()}`;
    },
    [searchParams],
  );

  function handleSearch() {
    router.push(buildUrl({ search }));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(buildUrl({ status: e.target.value, search }));
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(buildUrl({ sort: e.target.value, search }));
  }

  const sortLabels: Record<SortOption, string> = {
    date_desc: t.sort.dateDesc,
    date_asc: t.sort.dateAsc,
    total_desc: t.sort.totalDesc,
    total_asc: t.sort.totalAsc,
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
      {/* Search */}
      <div className="relative flex-1">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
          <SearchIcon />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
        />
      </div>

      {/* Status filter */}
      <select
        defaultValue={initialStatus}
        onChange={handleStatusChange}
        className="rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-8 text-sm text-gray-700 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
      >
        <option value="">{t.allStatuses}</option>
        <option value="pending">{tStatus.pending}</option>
        <option value="shipped">{tStatus.shipped}</option>
        <option value="cancelled">{tStatus.cancelled}</option>
        <option value="refunded">{tStatus.refunded}</option>
      </select>

      {/* Sort */}
      <select
        defaultValue={initialSort}
        onChange={handleSortChange}
        className="rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-8 text-sm text-gray-700 shadow-sm transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-800"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {sortLabels[opt]}
          </option>
        ))}
      </select>

      {/* Search button */}
      <button
        onClick={handleSearch}
        className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-800 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        <SearchIcon />
        {t.search}
      </button>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
