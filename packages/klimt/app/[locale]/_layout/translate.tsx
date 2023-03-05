import { useContext, useMemo } from "react";
import { TranslationContext } from "./TranslationContext";
import { getTranslationsStore } from "./translationStore";

const doTranslate =
  (translations: Map<string, string> | null) =>
  (key: string, params?: any): string => {
    const translatedRawString = translations?.get(key);

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

const useTranslationsClient = () => {
  const value = useContext(TranslationContext);
  return useMemo(() => doTranslate(value), [value]);
};

export const useTranslations = () => {
  return getTranslationsStore()
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      doTranslate(getTranslationsStore())
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useTranslationsClient();
};
