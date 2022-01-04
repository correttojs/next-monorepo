import React from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2, P } from "@packages/ui/Typography";
import { MQ_NOT_MOBILE } from "../Layout";
import { ThemeType } from "@/components/Layout/useGlobal";
import { MainSection } from "@packages/ui/Sections";

export const Amenities: React.FC<{
  amenities: { name: string }[];
}> = ({ amenities }) => {
  const t = useTranslations();

  return (
    <div
      css={`
        background-color: ${({ theme }: ThemeType) => theme.colors.lighter};
      `}
    >
      <MainSection className="p-4 md:p-8">
        <H2>{t("AMENITIES")}</H2>
        <div
          className="pt-5"
          css={`
            column-count: 2;
            max-width: 90vw;
            @media ${MQ_NOT_MOBILE} {
              column-count: 3;
            }
          `}
        >
          {amenities.map((s, k) => (
            <P key={k}>{s.name}</P>
          ))}
        </div>
      </MainSection>
    </div>
  );
};
