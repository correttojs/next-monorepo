import type { NextPage } from "next";
import React from "react";
import { Section } from "../../components/Layout/Globals";
import { Layout } from "../../components/Layout/Layout";
import { PageDocument, PageQuery } from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";

export const getStaticPaths = getStaticPathsApartments("/howto");

export const getStaticProps = async () => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/howto" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: data,
  };
};

const HowTo: NextPage<PageQuery> = ({ page }) => {
  return (
    <Layout>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default HowTo;
