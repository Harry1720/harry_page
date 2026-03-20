"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages, SUPPORTED_LOCALES } from "@/data/i18n/messages";

const DEFAULT_LOCALE = "vi";
const STORAGE_KEY = "site-locale";

const LanguageContext = createContext(null);

const detectBrowserLocale = () => {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE;
  }

  const browserLanguages = [...(navigator.languages || []), navigator.language]
    .filter(Boolean)
    .map((lang) => lang.toLowerCase());

  if (browserLanguages.some((lang) => lang.startsWith("vi"))) {
    return "vi";
  }

  if (browserLanguages.some((lang) => lang.startsWith("en"))) {
    return "en";
  }

  return DEFAULT_LOCALE;
};

export const LanguageProvider = ({ children }) => {
  // Keep first render stable between server and client, then hydrate preferred locale.
  const [locale, setLocale] = useState(DEFAULT_LOCALE);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY);
    const resolvedLocale =
      savedLocale && SUPPORTED_LOCALES.includes(savedLocale)
        ? savedLocale
        : detectBrowserLocale();

    if (resolvedLocale !== DEFAULT_LOCALE) {
      queueMicrotask(() => {
        setLocale((currentLocale) =>
          currentLocale === resolvedLocale ? currentLocale : resolvedLocale
        );
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: messages[locale],
      supportedLocales: SUPPORTED_LOCALES,
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }

  return context;
};
