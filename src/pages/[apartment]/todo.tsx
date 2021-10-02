import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { Section } from "../../components/Layout/Globals";
import { Layout } from "../../components/Layout/Layout";
import {
  GetApartmentDocument,
  GetApartmentQuery,
  PageDocument,
  PageQuery,
} from "../../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";

import { getStaticPathsApartments } from "../../server/getStaticPathsApartments";

export const getStaticPaths = getStaticPathsApartments("/todo");

type InitialProps = {
  apartment?: GetApartmentQuery["apartment"] | null;
  page?: PageQuery["page"] | null;
};

export const getStaticProps: GetStaticProps<InitialProps> = async ({
  params,
}) => {
  const data = await gqlRequest(
    PageDocument,
    { link: "/todo" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );

  const apartmentData = await gqlRequest(
    GetApartmentDocument,
    { slug: (params?.apartment as string)?.toLowerCase() ?? "" },
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: {
      page: data?.page,
      apartment: apartmentData?.apartment,
    },
  };
};

const Todo: NextPage<InitialProps> = ({ page, apartment }) => {
  return (
    <Layout title={apartment?.name ?? ""}>
      <div
        className={Section}
        dangerouslySetInnerHTML={{ __html: page?.content?.html ?? "" }}
      ></div>
    </Layout>
  );
};

export default Todo;
