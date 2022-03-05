import { useRouter } from "next/router";
// Render Prop
import React, { useState } from "react";
import { FaAirbnb } from "react-icons/fa";
import { SiGooglestreetview } from "react-icons/si";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Loading } from "@packages/ui/Loading";
import { H2 } from "@packages/ui/Typography";
import { FaqPage } from "../Faq";
import { Detail } from "./Detail";
import { FormRegister } from "./FormRegister";
import { ReservationDocument } from "./register.generated";
import { Sponsor } from "./Sponsor";
import { MainSection } from "@packages/ui/Sections";
import { useSwrGql } from "@packages/utils/useSwrGql";

export const Register: React.FC = () => {
  const router = useRouter();

  const t = useTranslations();
  const [isRegistered, setIsRegistered] = useState(false);

  const { data, isValidating, error } = useSwrGql(
    ReservationDocument,
    {
      hash: router.query.hash as string,
    },
    { enabled: !!router.query.hash }
  );

  if (isValidating) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <>
        <H2 className="p-4 text-center">{t("ERROR_RESERVATION")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.isExpired) {
    return (
      <>
        <H2 className="p-4 text-center">{t("RATE_US")}</H2>
        <div className="flex justify-center">
          <a
            href={data?.reservation?.mapLink ?? ""}
            className="flex items-center m-2 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <SiGooglestreetview className="inline" /> Google
          </a>
          <a
            href={data?.reservation?.airbnbLink ?? ""}
            className="flex items-center m-2 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <FaAirbnb className="inline" /> Airbnb
          </a>
        </div>
        <H2 className="p-4 text-center">{t("NEXT_TIME")}</H2>
        <Sponsor />
      </>
    );
  }

  if (data?.reservation?.guests?.length || isRegistered) {
    return (
      <div className="p-2 mx-auto max-w-screen-lg md:p-8">
        {
          <>
            <MainSection className="p-4 md:p-8">
              <H2 className=" p-4 text-center">
                {t("THANKYOU", {
                  data: data?.reservation?.check_in ?? "",
                })}
              </H2>
              <Detail reservation={data?.reservation} />
            </MainSection>
            <FaqPage />
          </>
        }
      </div>
    );
  }

  return (
    <div className="p-2 mx-auto max-w-screen-lg md:p-8">
      <Sponsor />
      <MainSection className="p-4 md:p-8">
        <Detail reservation={data?.reservation} />
      </MainSection>
      <FormRegister
        onSuccess={() => setIsRegistered(true)}
        reservation={data?.reservation}
      />
    </div>
  );
};
