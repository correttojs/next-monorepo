import type { Translations } from "@/hooks/useTranslations/translations";

export const useTranslations = () => {
  return (key: keyof typeof Translations, params?: any) => {
    const translatedRawString = key as string;
    // console.log(`MOCK Translation called with ${key}`);
    if (params && translatedRawString) {
      return translatedRawString.replace(
        /\[\s*(\w+)\s*\]/g,
        ($0, $1) => params[$1]?.toString() ?? ""
      );
    }
    return translatedRawString;
  };
};
