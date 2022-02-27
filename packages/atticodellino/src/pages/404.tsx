import { withLayout } from "@/components/Layout";
import { getGlobalProps } from "@/graphql/getGlobal";
import { GetStaticProps, NextPage } from "next";
import React from "react";

const PageError: NextPage = () => (
  <div
    className="flex items-center"
    style={{
      minHeight: "300px",
    }}
  >
    <h1>Page Not Found</h1>
  </div>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: "en", apartment: "GARDA" };
  const globalProps = await getGlobalProps({ params, locale });
  return globalProps ?? { props: {} };
};

export default withLayout(PageError);
