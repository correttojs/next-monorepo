import { Links, Locale } from "src/generated/codegen";
import { getPageProps } from "src/server/pageProps/getPageProps";
import { PageSections } from "src/components/PageSections/PageSections";

export default async function Page() {
  const { page, sections } = await getPageProps({
    pageType: Links.Howto,
    locale: Locale.En,
  });

  return <PageSections className="p-header" page={page} sections={sections} />;
}
