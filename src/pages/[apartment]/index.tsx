import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../../components/Hero/Hero";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Layout/Globals";
import { PageDocument, PageQuery, PageTypes } from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";
import { getAirbnbDetails } from "../../server/airbnb";
import { pdp_listing_detail } from "../../server/airbnb.types";

export const getStaticPaths = getStaticPathsApartments("");

type InitialProps = {
  page?: PageQuery["pages"][0] | null;
  airbnb?: pdp_listing_detail | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async ({
  params,
}) => {
  const data = await gqlRequest(
    PageDocument,
    {
      pageType: PageTypes.Home,
      apartment: (params?.apartment as string)?.toLowerCase() ?? "",
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  const airbnb = await getAirbnbDetails(
    "de",
    data?.pages?.[0]?.apartment?.airbnb ?? ""
  );
  return {
    props: {
      page: data?.pages?.[0],
      airbnb,
    },
  };
};

const Home: NextPage<InitialProps> = ({ page, airbnb }) => {
  return (
    <Layout title={page?.apartment?.name ?? ""}>
      <Hero title={page?.apartment?.name ?? ""} />
      <div>{airbnb?.pdp_listing_detail?.sectioned_description?.summary}</div>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default Home;
