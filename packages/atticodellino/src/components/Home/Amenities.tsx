import React from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Section } from "../@UI/Section";
import { H2, P } from "@packages/ui/Typography";
import { MQ_NOT_MOBILE } from "../Layout";
import { ThemeType } from "@/components/Layout/useGlobal";

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
      <Section>
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
      </Section>
    </div>
  );
};
