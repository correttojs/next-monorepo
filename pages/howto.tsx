import type { NextPage } from "next";
import { gqlRequest } from "../gql/gqlRequest";
import gql from "graphql-tag";
import React from "react";
import { Section } from "../components/Layout/Globals";
import { Layout } from "../components/Layout/Layout";

export const getStaticProps = async () => {
  const data = await gqlRequest(gql`
    query Page {
      page(where: { link: "/howto" }) {
        title
        content {
          html
        }
      }
    }
  `);
  return {
    props: data,
  };
};

const HowTo: NextPage<any> = ({ page }) => {
  return (
    <Layout>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page.content.html }}
      ></div>
    </Layout>
  );
};

export default HowTo;
