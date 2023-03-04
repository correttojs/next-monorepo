import { pdp_listing_detail } from "@/graphql/_airbn.types";
import React from "react";
import { FaAirbnb } from "react-icons/fa";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H2 } from "@packages/ui/Typography";
import { MQ_NOT_MOBILE } from "../Layout";
import { MainSection } from "@packages/ui/Sections";
// eslint-disable-next-line postcss-modules/no-unused-class
import styles from "./Home.module.css";

export const Reviews: React.FC<
  React.PropsWithChildren<{
    sorted_reviews: pdp_listing_detail["pdp_listing_detail"]["sorted_reviews"];
    review_details_interface: pdp_listing_detail["pdp_listing_detail"]["review_details_interface"];
  }>
> = ({ sorted_reviews, review_details_interface }) => {
  const t = useTranslations();
  return (
    <MainSection className="p-4 md:p-8">
      <div className="mb-2 flex">
        <H2 className="mr-2">{t("REVIEWS")}</H2>
        <FaAirbnb size="1.5em" />
      </div>

      <div className={styles["rate"]}>
        {review_details_interface.review_summary.map((s, k) => (
          <p key={k}>
            {s.label}: {s.localized_rating}/5
          </p>
        ))}
      </div>
      <div className={styles["review"]}>
        {sorted_reviews.map((review, k) => (
          <div className="flex flex-col" key={k}>
            <p className="font-bold">
              {review.localized_date} - {review.rating}/5
            </p>
            <p>{review.comments}</p>
            <p className="self-end font-bold">{review.reviewer.first_name}</p>
          </div>
        ))}
      </div>
    </MainSection>
  );
};
