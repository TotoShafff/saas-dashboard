import { NavbarActions } from "./NavbarActions";
import { MobileMenuButton } from "./MobileMenuButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-200 bg-white px-4 dark:border-gray-800 dark:bg-gray-950 sm:px-6">
      <div className="flex flex-1 items-center gap-3 lg:hidden">
        <MobileMenuButton />
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            SaaS Analytics
          </span>
        </div>
      </div>
      <div className="hidden flex-1 lg:block" />
      <NavbarActions />
    </header>
  );
}
