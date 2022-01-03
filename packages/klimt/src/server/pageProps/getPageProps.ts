import { gqlRequest } from "@packages/utils/gqlRequest";
import {
  Links,
  Locale,
  PageDocument,
  PageQuery,
} from "../../generated/codegen";

export type PageProps = {
  page: PageQuery["pages"][0];
  apartment: PageQuery["apartment"];
  links: PageQuery["navigations"];
  sections: PageQuery["sections"];
  translations: PageQuery["translations"];
};

export const getPageProps = async ({
  pageType,
  locale,
}: {
  pageType: Links;
  locale: Locale;
}): Promise<PageProps> => {
  const data = await gqlRequest(
    PageDocument,
    {
      pageType,
      locale: [locale],
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  return {
    page: data?.pages[0] ?? null,
    sections: data?.sections,
    apartment: data?.apartment,
    links: data.navigations,
    translations: data.translations,
  };
};
