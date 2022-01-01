import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H3 } from "../@UI/Texts";
import { ThemeType } from "../Layout/useGlobal";
import { ReservationQuery } from "./register.generated";

export const Detail: React.FC<{
  reservation: ReservationQuery["reservation"];
}> = ({ reservation }) => {
  const t = useTranslations();
  return (
    <div
      className="p-4 rounded-md shadow-xl md:p-4"
      css={`
        background-color: ${({ theme }: ThemeType) => theme.colors.light};
      `}
    >
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
