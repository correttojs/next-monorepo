import { Home } from "@/components/Home";
import { withLayout } from "@/components/Layout";
import { getDetails } from "@/graphql/_airbnb";
import { getGlobalPaths, getGlobalProps } from "@/graphql/takeshape/getGlobal";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const globalProps = await getGlobalProps({ params, locale });
  const res = await getDetails(
    globalProps?.props.global.apartment ?? "",
    locale ?? "en",
    globalProps?.props.global.airBnb ?? ""
  );
  return {
    props: { ...res, ...globalProps?.props },
  };
};

export const getStaticPaths = getGlobalPaths;

export default withLayout(Home);
