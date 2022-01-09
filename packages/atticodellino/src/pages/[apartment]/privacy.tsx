import { withLayout } from "@/components/Layout";
import { PageDocument, PageQuery } from "@/generated/graphql-graphcms";

import { graphCmsRequest } from "@/graphql/graphcms";
import { getGlobalPaths, getGlobalProps } from "@/graphql/getGlobal";
import { MainSection } from "@packages/ui/Sections";
import { GetStaticProps, NextPage } from "next";
import { H1 } from "@packages/ui/Typography";

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const globalProps = await getGlobalProps({ params, locale });
  const data = await graphCmsRequest(PageDocument, {
    path: "privacy",
  });
  return {
    props: { ...globalProps?.props, data },
  };
};

export const getStaticPaths = getGlobalPaths;

const Privacy: NextPage<{ data: PageQuery }> = ({ data }) => {
  const article = data.page;
  return (
    <MainSection className="p-4 md:p-8">
      <H1 className="py-4">{article?.title}</H1>
      <div
        dangerouslySetInnerHTML={{ __html: article?.content?.html ?? "" }}
      ></div>
    </MainSection>
  );
};

export default withLayout(Privacy);
