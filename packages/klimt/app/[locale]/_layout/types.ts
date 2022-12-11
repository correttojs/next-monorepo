import { Locale } from "./generated/codegen";

export type ParamsTypes<T = {}> = {
  params: T & { locale: Locale };
};
