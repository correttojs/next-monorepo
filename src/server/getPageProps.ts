import { gqlRequest } from "@correttojs/next-utils/useReactQuery";
import { GetStaticProps } from "next";
import { Links, PageDocument, PageQuery } from "../generated/codegen";

import { ParsedUrlQuery } from "querystring";

export type PageProps = {
  page: PageQuery["pages"][0];
  apartment: PageQuery["apartment"];
  links: PageQuery["navigations"];
  sections: PageQuery["sections"];
};

export const getPageProps = async ({
  params,
  pageType,
}: {
  params?: ParsedUrlQuery;
  pageType: Links;
}): Promise<PageProps> => {
  const data = await gqlRequest(
    PageDocument,
    {
      pageType,
      apartment: (params?.apartment as string)?.toLowerCase() ?? "",
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  const links = new Set<string>();
  data?.pagesLink?.forEach((page) => {
    links.add(page.link);
  });
  data.sectionsLink?.forEach((section) => {
    links.add(section.link);
  });

  const linkItems = Array.from(links);
  return {
    page: data?.pages[0] ?? null,
    sections: data?.sections,
    apartment: data?.apartment,
    links: data.navigations.filter((item) =>
      linkItems.includes(item.link ?? "")
    ),
  };
};
