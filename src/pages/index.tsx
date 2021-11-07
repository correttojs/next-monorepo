import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../components/Hero/Hero";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Map } from "../components/Map/Map";
import { Links, Locale } from "../generated/codegen";
import Image from "next/image";
import { getAirbnbDetails } from "../server/pageProps/airbnb";
import { pdp_listing_detail } from "../server/pageProps/airbnb.types";
import { getPageProps, PageProps } from "../server/pageProps/getPageProps";
import { PageSections } from "../components/PageSections/PageSections";
import { initTranslations } from "../hooks/useTranslations";
import { Gallery } from "../components/Gallery/Gallery";

type InitialProps = PageProps & {
  airbnb?: pdp_listing_detail | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async (params) => {
  const data = await getPageProps({
    pageType: Links.Home,
    locale: params.locale === "de" ? Locale.De : Locale.En,
  });

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
  translations,
}) => {
  initTranslations(translations);
  return (
    <Layout apartment={apartment} links={links} isTransparent={true}>
      <Hero
        headline={apartment?.headline ?? ""}
        subHeadline={apartment?.subHeadline ?? ""}
      />
      <div className="main">
        <section className="py-4">
          {airbnb?.pdp_listing_detail?.sectioned_description?.summary}
        </section>
        <Gallery photos={airbnb?.pdp_listing_detail?.photos ?? []} />
      </div>

      <PageSections page={page} sections={sections} />
      <Map
        title={apartment?.name ?? ""}
        lat={apartment?.location?.latitude ?? 0}
        lng={apartment?.location?.longitude ?? 0}
      />
    </Layout>
  );
};

export default Home;
