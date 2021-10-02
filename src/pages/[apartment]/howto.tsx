import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Section } from "../../components/Layout/Globals";
import { Layout } from "../../components/Layout/Layout";
import { PageDocument, PageQuery, PageTypes } from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";

export const getStaticPaths = getStaticPathsApartments("/howto");

type InitialProps = {
  page?: PageQuery["pages"][0] | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async ({
  params,
}) => {
  const data = await gqlRequest(
    PageDocument,
    {
      pageType: PageTypes.Howto,
      apartment: (params?.apartment as string)?.toLowerCase() ?? "",
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  return {
    props: {
      page: data?.pages?.[0],
    },
  };
};

const HowTo: NextPage<InitialProps> = ({ page }) => {
  return (
    <Layout title={page?.apartment?.name ?? ""}>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default HowTo;
