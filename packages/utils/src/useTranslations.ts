import { useRouter } from "next/router";

enum Locale {
  De = "de",
  /** System locale */
  En = "en",
}

type TranslationsQuery = {
  translations: Array<{
    locale: Locale;
    key: string;
    value?: string | null | undefined;
  }>;
};

const TRANSLATIONS: Record<string, Record<string, string>> = {};
export const initTranslations = (
  translations: TranslationsQuery["translations"]
) => {
  translations?.forEach((item) => {
    if (!TRANSLATIONS[item.locale]) {
      TRANSLATIONS[item.locale] = {};
    }
    if (item?.key && item.value) {
      TRANSLATIONS[item.locale][item.key] = item.value;
    }
  });
};

export const useTranslations = () => {
  const context = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (key: string, params?: any) => {
    const translatedRawString =
      TRANSLATIONS[context.locale === "en" ? "en" : "de"]?.[key];

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
