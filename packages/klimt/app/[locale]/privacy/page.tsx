import { Links } from "../../../src/generated/codegen";
import { getPageProps } from "../../../src/server/pageProps/getPageProps";
import { PageSections } from "../_layout/PageSections/PageSections";
import { ParamsTypes } from "../_layout/types";

export default async function Page({ params }: ParamsTypes) {
  const { page, sections } = await getPageProps({
    pageType: Links.Privacy,
    locale: params.locale,
  });
  return <PageSections className="p-header" page={page} sections={sections} />;
}
