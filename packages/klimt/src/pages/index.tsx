import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../components/Hero/Hero";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Map } from "@packages/ui/Map";
import { Links, Locale } from "../generated/codegen";
import { getAirbnbDetails } from "../server/pageProps/airbnb";
import { pdp_listing_detail } from "../server/pageProps/airbnb.types";
import { getPageProps, PageProps } from "../server/pageProps/getPageProps";
import { initTranslations } from "@packages/utils/useTranslations";
import { Gallery } from "../components/Gallery/Gallery";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { Contact } from "../components/Contact/Contact";

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
      <div className="main py-10">
        <AnchorPointer id="home" />
        <section className="">
          {airbnb?.pdp_listing_detail?.sectioned_description?.summary}
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </section>
      </div>
      <Gallery photos={airbnb?.pdp_listing_detail?.photos ?? []} />

      <Contact apartment={apartment} />
      <Map
        title={apartment?.name ?? ""}
        lat={apartment?.location?.latitude ?? 0}
        lng={apartment?.location?.longitude ?? 0}
        className="main h-map py-10"
      />
    </Layout>
  );
};

export default Home;
