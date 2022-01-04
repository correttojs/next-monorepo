import { withLayout } from "@/components/Layout";
import {
  GetArticleByPathDocument,
  GetArticleByPathQuery,
} from "@/generated/graphql-takeshape-doc";
import { takeShapeRequest } from "@/graphql/takeshape";
import { getGlobalPaths, getGlobalProps } from "@/graphql/takeshape/getGlobal";
import { MainSection } from "@packages/ui/Sections";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await takeShapeRequest(GetArticleByPathDocument, {
    path: "/privacy",
  });
  return {
    props: { ...globalProps?.props, data },
  };
};

export const getStaticPaths = getGlobalPaths;

const Privacy: NextPage<{ data: GetArticleByPathQuery }> = ({ data }) => {
  const article = data?.getArticleList?.items?.[0];
  return (
    <MainSection className="p-4 md:p-8">
      <h1>{article?.title}</h1>{" "}
      <div
        dangerouslySetInnerHTML={{ __html: article?.contentHtml ?? "" }}
      ></div>
    </MainSection>
  );
};

export default withLayout(Privacy);
