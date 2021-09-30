import type { NextPage } from "next";
import gql from "graphql-tag";
import React from "react";
import { Section } from "../components/Layout/Globals";
import { Layout } from "../components/Layout/Layout";
import { PageDocument } from "../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

export const getStaticProps = async () => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/todo" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: data,
  };
};

const Todo: NextPage<any> = ({ page }) => {
  return (
    <Layout>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page.content.html }}
      ></div>
    </Layout>
  );
};

export default Todo;
