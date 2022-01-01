import React from "react";
import { FaMapMarker } from "react-icons/fa";
import tw from "twin.macro";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { H3 } from "../@UI/Texts";
import { ThemeType } from "../Layout/useGlobal";
import { ReservationQuery } from "./register.generated";

const Red = tw.i`text-red-900`;

export const Detail: React.FC<{
  reservation: ReservationQuery["reservation"];
}> = ({ reservation }) => {
  const t = useTranslations();
  return (
    <div
      css={`
        background-color: ${({ theme }: ThemeType) => theme.colors.light};
        ${tw`shadow-xl p-4 md:p-4 rounded-md`}
      `}
    >
      <H3 css={tw`p-2`}>{reservation?.displayHome}</H3>
      {reservation?.code && (
        <p css={tw`p-2`}>
          <Red css={tw`mr-2`}>{t("APARTMENT_CODE")}</Red>
          {reservation?.code}
        </p>
      )}
      <p css={tw`p-2`}>
        <Red css={tw`mr-2`}>{t("CHECKIN")}</Red>
        {reservation?.check_in}
      </p>
      <p css={tw`p-2`}>
        <Red css={tw`mr-2`}>{t("CHECKOUT")}</Red>
        {reservation?.check_out}
      </p>

      <p css={tw`p-2`}>
        <FaMapMarker css={tw`inline`} />
        {reservation?.address}
      </p>
    </div>
  );
};
