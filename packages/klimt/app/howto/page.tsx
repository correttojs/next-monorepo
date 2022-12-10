import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { PageSections } from "../[locale]/_layout/PageSections/PageSections";
import { Links, Locale } from "../../src/generated/codegen";

import {
  PageProps,
  getPageProps,
} from "../../src/server/pageProps/getPageProps";

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
  return <PageSections className="p-header" page={page} sections={sections} />;
};

export default HowTo;
