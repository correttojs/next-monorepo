import type { GetStaticProps, NextPage } from "next";
import { Hero } from "../../components/Hero/Hero";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Section } from "../../components/Layout/Globals";
import { Links } from "../../generated/codegen";

import { getStaticPathsApartments } from "../../server/pageProps/getStaticPathsApartments";
import { getAirbnbDetails } from "../../server/pageProps/airbnb";
import { pdp_listing_detail } from "../../server/pageProps/airbnb.types";
import { getPageProps, PageProps } from "../../server/pageProps/getPageProps";

export const getStaticPaths = getStaticPathsApartments("");

type InitialProps = PageProps & {
  airbnb?: pdp_listing_detail | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async ({
  params,
}) => {
  const data = await getPageProps({ params, pageType: Links.Home });

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
    <Layout title={apartment?.name ?? ""} links={links}>
      <Hero title={apartment?.name ?? ""} />
      <div>{airbnb?.pdp_listing_detail?.sectioned_description?.summary}</div>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
      {sections?.map((section, k) => {
        return (
          <div key={k}>
            <h1>{section.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: section?.content?.html ?? "",
              }}
            />
          </div>
        );
      })}
    </Layout>
  );
};

export default Home;
