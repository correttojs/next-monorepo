"use client";

import { createContext, useContext, useMemo } from "react";
import { LayoutQuery } from "./generated/codegen";

const TranslationContext = createContext<Record<string, string>>({});

export function TranslationsProvider({
  translations,
  children,
}: {
  translations: LayoutQuery["translations"];
  children: React.ReactNode;
}) {
  const translationsMap = useMemo(() => {
    const TRANSLATIONS: Record<string, string> = {};
    translations?.forEach((item) => {
      if (item?.key && item.value) {
        TRANSLATIONS[item.key] = item.value;
      }
    });
    return TRANSLATIONS;
  }, [translations]);
  return (
    <TranslationContext.Provider value={translationsMap}>
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslations = () => {
  const value = useContext(TranslationContext);
  return (key: string, params?: any) => {
    const translatedRawString = value?.[key];

    if (params && translatedRawString) {
      return translatedRawString.replace(
        /\[\s*(\w+)\s*\]/g,
        ($0: string, $1: string) => params[$1]?.toString() ?? ""
      );
    }
    if (!translatedRawString) {
      console.warn(`Missing translation ${key}`);
      return key;
    }
    return translatedRawString;
  };
};
