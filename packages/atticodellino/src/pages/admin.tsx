import { AdminComponent } from "@/components/Admin/AdminComponent";
import { withLayout } from "@/components/Layout";
import { getGlobalProps } from "@/graphql/takeshape/getGlobal";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const params = { lang: "en", apartment: "GARDA" };
  const globalProps = await getGlobalProps({ params, locale });

  return globalProps ?? { props: {} };
};

export default withLayout(AdminComponent);
