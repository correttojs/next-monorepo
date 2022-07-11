import React from "react";

import { FaMapMarker } from "react-icons/fa";
import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H3 } from "@packages/ui/Typography";
import { ReservationQuery } from "./register.generated";

export const Detail: React.FC<React.PropsWithChildren<{
  reservation: ReservationQuery["reservation"];
}>> = ({ reservation }) => {
  const t = useTranslations();
  return (
    <div className="p-4 bg-sky-100 rounded-md shadow-xl md:p-4">
      <H3 className="p-2">{reservation?.displayHome}</H3>
      {reservation?.code && (
        <p className="p-2">
          <i className="mr-2 text-red-900">{t("APARTMENT_CODE")}</i>
          {reservation?.code}
        </p>
      )}
      <p className="p-2">
        <i className="mr-2 text-red-900">{t("CHECKIN")}</i>
        {reservation?.check_in}
      </p>
      <p className="p-2">
        <i className="mr-2 text-red-900">{t("CHECKOUT")}</i>
        {reservation?.check_out}
      </p>

      <p className="p-2">
        <FaMapMarker className="inline" />
        {reservation?.address}
      </p>
    </div>
  );
};
