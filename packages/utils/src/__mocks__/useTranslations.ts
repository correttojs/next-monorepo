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

let TRANSLATIONS: Record<string, Record<string, string>> = {};
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
  return (key: string, params?: any) => {
    console.log(`Mocking translation ${key}`)
    return key
  };
};
