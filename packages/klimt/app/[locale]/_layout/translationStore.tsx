import { LayoutQuery } from "./generated/codegen";

export function mapTranslations(
  translations: LayoutQuery["translations"],
  translationStore: Map<string, string>
) {
  translations?.forEach((item) => {
    if (item?.key && item.value) {
      translationStore.set(item.key, item.value);
    }
  });
}

let translationStore: Map<string, string> | null = null;

export const getTranslationsStore = () => {
  return translationStore;
};

export const setTranslationsStore = (
  translations: LayoutQuery["translations"]
) => {
  translationStore = new Map<string, string>();
  return mapTranslations(translations, translationStore);
};
