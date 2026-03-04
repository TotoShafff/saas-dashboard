"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function NavbarActions() {
  return (
    <div className="flex items-center gap-1">
      <LanguageToggle />
      <ThemeToggle />
      <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
        JD
      </div>
    </div>
  );
}
