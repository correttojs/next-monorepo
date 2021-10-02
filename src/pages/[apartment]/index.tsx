import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../../components/Hero/Hero";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Layout/Globals";
import {
  GetApartmentDocument,
  GetApartmentQuery,
  PageDocument,
  PageQuery,
} from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";
import { getAirbnbDetails } from "../../server/airbnb";
import { pdp_listing_detail } from "../../server/airbnb.types";

export const getStaticPaths = getStaticPathsApartments("");

type InitialProps = {
  apartment?: GetApartmentQuery["apartment"] | null;
  page?: PageQuery["page"] | null;
  airbnb?: pdp_listing_detail | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async ({
  params,
}) => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  const apartmentData = await gqlRequest(
    GetApartmentDocument,
    { slug: (params?.apartment as string)?.toLowerCase() ?? "" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  const airbnb = await getAirbnbDetails(
    "de",
    apartmentData?.apartment?.airbnb ?? ""
  );
  return {
    props: {
      page: data?.page,
      apartment: apartmentData.apartment,
      airbnb,
    },
  };
};

const Home: NextPage<InitialProps> = ({ page, airbnb, apartment }) => {
  return (
    <Layout title={apartment?.name ?? ""}>
      <Hero title={apartment?.name ?? ""} />
      <div>{airbnb?.pdp_listing_detail?.sectioned_description?.summary}</div>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default Home;
