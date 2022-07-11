import React from "react";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2, P } from "@packages/ui/Typography";
import { MainSection } from "@packages/ui/Sections";

import styles from "./Home.module.scss";
import classNames from "classnames";

export const Amenities: React.FC<React.PropsWithChildren<{
  amenities: { name: string }[];
}>> = ({ amenities }) => {
  const t = useTranslations();

  return (
    <div className="bg-sky-100" data-testid="amenities">
      <MainSection className="p-4 md:p-8">
        <H2>{t("AMENITIES")}</H2>
        <div className={classNames(styles["amenities"], "pt-5")}>
          {amenities.map((s, k) => (
            <P key={k}>{s.name}</P>
          ))}
        </div>
      </MainSection>
    </div>
  );
};
