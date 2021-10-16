import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { PageSections } from "../components/PageSections/PageSections";
import { Links } from "../generated/codegen";

import { PageProps, getPageProps } from "../server/pageProps/getPageProps";

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: await getPageProps({ pageType: Links.Howto }),
  };
};

const HowTo: NextPage<PageProps> = ({ page, links, sections, apartment }) => {
  return (
    <Layout title={apartment?.name ?? ""} links={links}>
      <PageSections page={page} sections={sections} />
    </Layout>
  );
};

export default HowTo;
