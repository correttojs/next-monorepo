import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Hero } from "../../components/Hero/Hero";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Layout/Globals";
import {
  ApartmentListDocument,
  PageDocument,
  PageQuery,
} from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";

export const getStaticPaths = getStaticPathsApartments("");

export const getStaticProps: GetStaticProps = async () => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: data,
  };
};

const Home: NextPage<PageQuery> = ({ page }) => {
  return (
    <Layout>
      <Hero title={page?.title ?? ""} />
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default Home;
