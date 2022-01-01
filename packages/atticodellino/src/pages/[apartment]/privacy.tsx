import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import {
  GetArticleByPathDocument,
  GetArticleByPathQuery,
} from "@/generated/graphql-takeshape-doc";
import { takeShapeRequest } from "@/graphql/takeshape";
import { getGlobalPaths, getGlobalProps } from "@/graphql/takeshape/getGlobal";
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
    <Section>
      <h1>{article?.title}</h1>{" "}
      <div
        dangerouslySetInnerHTML={{ __html: article?.contentHtml ?? "" }}
      ></div>
    </Section>
  );
};

export default withLayout(Privacy);
