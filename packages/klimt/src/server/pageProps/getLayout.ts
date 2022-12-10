import { gqlRequest } from "@packages/utils/gqlRequest";
import { Locale, LayoutDocument, LayoutQuery } from "../../generated/codegen";

export type PageProps = {
  apartment: LayoutQuery["apartment"];
  links: LayoutQuery["navigations"];
  translations: LayoutQuery["translations"];
};

export const getLayout = async ({
  locale,
}: {
  locale: Locale;
}): Promise<PageProps> => {
  const data = await gqlRequest(
    LayoutDocument,
    {
      locale: [locale],
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  return {
    apartment: data?.apartment,
    links: data.navigations,
    translations: data.translations,
  };
};
