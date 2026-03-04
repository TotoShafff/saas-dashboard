"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { translations, type Language, type TranslationKeys } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  t: TranslationKeys;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>("en");

  // Initialize language from cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    if (match?.[1] === "en" || match?.[1] === "es") {
      setLanguage(match[1]);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next: Language = prev === "en" ? "es" : "en";
      // Persist to cookie so Server Components can read it
      document.cookie = `lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
      // Re-render Server Components with the new language
      router.refresh();
      return next;
    });
  }, [router]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
