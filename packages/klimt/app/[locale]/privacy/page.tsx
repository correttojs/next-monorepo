import { Links } from "../_layout/generated/codegen";
import { getPageProps } from "../_layout/getPageProps";
import { PageSections } from "../_layout/PageSections/PageSections";
import { ParamsTypes } from "../_layout/types";

export default async function Page({ params }: ParamsTypes) {
  const data = await getPageProps({
    pageType: Links.Privacy,
    locale: params.locale,
  });
  return <PageSections className="p-header" {...data} />;
}
