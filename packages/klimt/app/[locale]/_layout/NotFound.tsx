import { MainSection } from "@packages/ui/Sections/MainSection";
import { H1 } from "@packages/ui/Typography";
import { useTranslations } from "./translate";

export default function NotFound() {
  const translate = useTranslations();
  return (
    <MainSection className="h-96 py-20">
      <H1>{translate("PAGE_NOT_FOUND")}</H1>
    </MainSection>
  );
}
