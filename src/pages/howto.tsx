import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { PageSections } from "../components/PageSections/PageSections";
import { Links, Locale } from "../generated/codegen";
import { initTranslations } from "../hooks/useTranslations";

import { PageProps, getPageProps } from "../server/pageProps/getPageProps";

export const getStaticProps: GetStaticProps<PageProps> = async (params) => {
  return {
    props: await getPageProps({
      pageType: Links.Howto,
      locale: params.locale === "de" ? Locale.De : Locale.En,
    }),
  };
};

const HowTo: NextPage<PageProps> = ({
  page,
  links,
  sections,
  apartment,
  translations,
}) => {
  initTranslations(translations);
  return (
    <Layout title={apartment?.name ?? ""} links={links}>
      <PageSections page={page} sections={sections} />
    </Layout>
  );
};

export default HowTo;
