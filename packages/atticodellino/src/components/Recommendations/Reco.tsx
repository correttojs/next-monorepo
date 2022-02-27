import React from "react";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { useTranslations } from "@/hooks/useTranslations/useTranslations";
import { useReactQuery } from "@correttojs/next-utils/useReactQuery";

import { Loading } from "@packages/ui/Loading";
import { H2, H3 } from "@packages/ui/Typography";
import { RecoDocument } from "./reco.generated";
import { MainSection } from "@packages/ui/Sections";

export const RecoPage: React.FC = () => {
  const { data, isLoading, error } = useReactQuery(RecoDocument);

  const translate = useTranslations();
  if (isLoading && !error) {
    return <Loading />;
  }

  return (
    <div className="pb-8" data-testid="reco">
      <MainSection className="p-4 md:p-8">
        <AnchorPointer id="reco" />
        <H2 className="mr-2 ">{translate("RECO")}</H2>
      </MainSection>
      {(data?.reco ?? []).map((item, i) => (
        <div key={"reco" + i}>
          <MainSection className="p-4 py-4 md:p-8" id={"recos" + i}>
            {item?.link ? (
              <a
                href={item?.link ?? ""}
                className="underline"
                target="_blank"
                rel="noreferrer"
              >
                <H3>{item?.title}</H3>
              </a>
            ) : (
              <H3>{item?.title}</H3>
            )}

            <div
              style={{
                minWidth: "320px",
              }}
              dangerouslySetInnerHTML={{
                __html: item?.description.html ?? "",
              }}
            />
          </MainSection>
        </div>
      ))}
    </div>
  );
};
