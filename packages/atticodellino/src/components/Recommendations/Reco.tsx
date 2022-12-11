import type {} from "react/next";
import React, { Suspense } from "react";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { useTranslations } from "@/hooks/useTranslations/useTranslations";

import { Loading } from "@packages/ui/Loading";
import { H2, H3 } from "@packages/ui/Typography";
import { RecoDocument } from "./reco.generated";
import { MainSection } from "@packages/ui/Sections";
import { useSwrGql } from "@packages/utils/useSwrGql";

class ErrorBoundary extends React.Component<{
  fallback: React.ReactElement;
  children: any;
}> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error,
    };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const RecoData = () => {
  const { data } = useSwrGql(
    RecoDocument,
    {},
    {
      suspense: true,
    }
  );
  return (
    <>
      {(data?.reco ?? []).map((item, i) => (
        <div key={"reco" + i}>
          <MainSection className="p-4 md:p-8" id={"recos" + i}>
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
    </>
  );
};

export const RecoPage: React.FC<React.PropsWithChildren<unknown>> = () => {
  const translate = useTranslations();

  return (
    <div className="pb-8" data-testid="reco">
      <MainSection className="p-4 md:p-8">
        <AnchorPointer id="reco" />
        <H2 className="mr-2 ">{translate("RECO")}</H2>
      </MainSection>
      <ErrorBoundary fallback={<h2>{translate("RECO_FAILED")}</h2>}>
        <Suspense fallback={<Loading />}>
          <RecoData />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
