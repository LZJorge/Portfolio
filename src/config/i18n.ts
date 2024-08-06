import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage", "cookie"],
      cookieMinutes: 1440,
    },
  });

export default i18n;