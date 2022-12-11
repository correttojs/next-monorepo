import { gqlRequest } from "@packages/utils/gqlRequest";
import { Links, Locale, PageDocument, PageQuery } from "./generated/codegen";

export type PageProps = PageQuery & {
  page: PageQuery["pages"][0];
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
    ...data,
    page: data?.pages[0] ?? null,
  };
};
