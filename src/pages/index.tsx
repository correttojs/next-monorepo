import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../components/Hero/Hero";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Map } from "../components/Map/Map";
import { Links } from "../generated/codegen";

import { getAirbnbDetails } from "../server/pageProps/airbnb";
import { pdp_listing_detail } from "../server/pageProps/airbnb.types";
import { getPageProps, PageProps } from "../server/pageProps/getPageProps";
import { PageSections } from "../components/PageSections/PageSections";

type InitialProps = PageProps & {
  airbnb?: pdp_listing_detail | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async () => {
  const data = await getPageProps({ pageType: Links.Home });

  const airbnb = await getAirbnbDetails("de", data?.apartment?.airbnb ?? "");
  return {
    props: {
      ...data,
      airbnb,
    },
  };
};

const Home: NextPage<InitialProps> = ({
  page,
  airbnb,
  links,
  sections,
  apartment,
}) => {
  return (
    <Layout title={apartment?.name ?? ""} links={links} isTransparent={true}>
      <Hero title={apartment?.name ?? ""} />
      <div>{airbnb?.pdp_listing_detail?.sectioned_description?.summary}</div>

      <PageSections page={page} sections={sections} />
      <Map title="Candor" />
    </Layout>
  );
};

export default Home;
