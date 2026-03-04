import { cookies } from "next/headers";
import { translations, type Language, type TranslationKeys } from "@/lib/translations";

/**
 * Reads the `lang` cookie set by LanguageContext and returns the matching
 * translations object. Safe to call in any async Server Component.
 *
 * Calling cookies() opts this render into dynamic mode, which is correct
 * for a personalized admin dashboard.
 */
export async function getServerTranslations(): Promise<TranslationKeys> {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value ?? "en") as Language;
  return translations[lang];
}
