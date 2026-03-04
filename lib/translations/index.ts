export type Language = "en" | "es";

export type TranslationKeys = {
  nav: {
    dashboard: string;
    analytics: string;
    reports: string;
    settings: string;
  };
  navbar: {
    toggleTheme: string;
    toggleLanguage: string;
    profile: string;
  };
  dashboard: {
    title: string;
    subtitle: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      dashboard: "Dashboard",
      analytics: "Analytics",
      reports: "Reports",
      settings: "Settings",
    },
    navbar: {
      toggleTheme: "Toggle theme",
      toggleLanguage: "ES",
      profile: "Profile",
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Welcome back! Here's what's happening.",
    },
  },
  es: {
    nav: {
      dashboard: "Panel",
      analytics: "Analíticas",
      reports: "Informes",
      settings: "Configuración",
    },
    navbar: {
      toggleTheme: "Cambiar tema",
      toggleLanguage: "EN",
      profile: "Perfil",
    },
    dashboard: {
      title: "Panel",
      subtitle: "¡Bienvenido de nuevo! Esto es lo que está pasando.",
    },
  },
};
