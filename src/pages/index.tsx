import type { NextPage } from "next";
import { Hero } from "../components/Hero/Hero";
import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Section } from "../components/Layout/Globals";
import { PageDocument } from "../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

export const getStaticProps = async () => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: data,
  };
};

const Home: NextPage<any> = ({ page }) => {
  return (
    <Layout>
      <Hero title={page.title} />
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page.content.html }}
      ></div>
    </Layout>
  );
};

export default Home;
