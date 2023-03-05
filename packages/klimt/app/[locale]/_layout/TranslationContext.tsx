"use client";

import { createContext, useMemo } from "react";
import { LayoutQuery } from "./generated/codegen";
import { mapTranslations } from "./translationStore";

export const TranslationContext = createContext<Map<string, string>>(
  new Map<string, string>()
);

export function TranslationsProvider({
  translations,
  children,
}: {
  translations: LayoutQuery["translations"];
  children: React.ReactNode;
}) {
  const translationsMap = useMemo(() => {
    const store = new Map<string, string>();
    mapTranslations(translations, store);
    return store;
  }, [translations]);
  return (
    <TranslationContext.Provider value={translationsMap}>
      {children}
    </TranslationContext.Provider>
  );
}
