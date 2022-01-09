import { Home } from "@/components/Home";
import { withLayout } from "@/components/Layout";
import { getDetails } from "@/graphql/_airbnb";
import { getGlobalProps } from "@/graphql/getGlobal";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: locale, apartment: "GARDA" };
  const globalProps = await getGlobalProps({ params, locale });

  const res = await getDetails(
    globalProps?.props.global.lang ?? "en",
    globalProps?.props.global.code ?? ""
  );

  return {
    props: { ...res, ...globalProps?.props },
  };
};

export default withLayout(Home);
