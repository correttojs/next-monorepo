import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Links, Locale } from "../generated/codegen";
import {
  initTranslations,
  useTranslations,
} from "@packages/utils/useTranslations";
import { getPageProps, PageProps } from "../server/pageProps/getPageProps";

export const getStaticProps: GetStaticProps<PageProps> = async (params) => {
  const data = await getPageProps({
    pageType: Links.Home,
    locale: params.locale === "de" ? Locale.De : Locale.En,
  });

  return {
    props: data,
  };
};

const PageError: NextPage<PageProps> = ({ apartment, links, translations }) => {
  initTranslations(translations);
  const translate = useTranslations();
  return (
    <Layout apartment={apartment} links={links}>
      <div className="py-20 h-96 main">
        <h1 className="h1">{translate("PAGE_NOT_FOUND")}</h1>
      </div>
    </Layout>
  );
};

export default PageError;
