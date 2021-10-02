import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Section } from "../../components/Layout/Globals";
import { Layout } from "../../components/Layout/Layout";
import { PageDocument, PageQuery, PageTypes } from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";

export const getStaticPaths = getStaticPathsApartments("/todo");

export const getStaticProps: GetStaticProps<PageQuery> = async ({ params }) => {
  const data = await gqlRequest(
    PageDocument,
    {
      pageType: PageTypes.Todo,
      apartment: (params?.apartment as string)?.toLowerCase() ?? "",
    },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  return {
    props: data,
  };
};

const Todo: NextPage<PageQuery> = ({ pages, sections }) => {
  console.log(sections);
  return (
    <Layout title={pages?.[0]?.apartment?.name ?? ""}>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: pages?.[0]?.content?.html ?? "" }}
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

export default Todo;
