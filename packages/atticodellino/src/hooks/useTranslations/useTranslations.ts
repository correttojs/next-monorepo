import { useRouter } from "next/router";

import { Translations } from "./translations";

export const useTranslations = () => {
  const context = useRouter();

  return (key: keyof typeof Translations, params?: any) => {
    const translatedRawString =
      Translations[key][(context.locale ?? "en") as "en"];

    if (params && translatedRawString) {
      return translatedRawString.replace(
        /\[\s*(\w+)\s*\]/g,
        ($0, $1) => params[$1]?.toString() ?? ""
      );
    }
    if (!translatedRawString) {
      console.warn(`Missing translation ${key}`);
      return key;
    }
    return translatedRawString;
  };
};
