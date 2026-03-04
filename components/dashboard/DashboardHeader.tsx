"use client";

import { useLanguage } from "@/context/LanguageContext";

export function DashboardHeader() {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {t.dashboard.title}
      </h1>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {t.dashboard.subtitle}
      </p>
    </div>
  );
}
